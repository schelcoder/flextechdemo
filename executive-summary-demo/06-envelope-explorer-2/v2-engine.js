/* =====================================================================
   v2-engine.js — shared page engine for the paginated VPP demo deck
   ---------------------------------------------------------------------
   The original v2.html was one long scroll-driven page. This engine keeps
   every per-loop renderer verbatim but replaces the scroll with a STEP
   engine: each page is one full screen (no scrolling). Advancing (arrow
   keys / space / click / the Next button) walks through the loop's beats —
   tell-setup, each show beat, then so-what — driving the exact same
   animation the scroll position used to drive (progress = beat / nBeats).
   At the ends of a page, Next / Prev navigate to the neighbouring page.

   Each page sets window.V2PAGE before this script loads:
     window.V2PAGE = { act, beats, prev, next, num, label };
   ===================================================================== */
(function(){
  "use strict";
  var V = (window.VPP)||{}, V2 = (window.VPP2)||{};
  function arr(x){return Array.isArray(x)?x:[];}
  var PE = arr(V.powerEnvelope);
  var N = Math.max(PE.length,1);
  function clamp(v,a,b){return v<a?a:(v>b?b:v);}
  function lerp(a,b,t){return a+(b-a)*t;}
  function easeOut(t){t=clamp(t,0,1);return 1-Math.pow(1-t,3);}
  function nf(v){return (isFinite(v)?v:0).toFixed(2);}
  function fmtEur(v){return "€"+Math.round(v).toLocaleString();}
  function fmtEurM(v){return "€"+(v/1e6).toFixed(0)+"M";}
  var $=function(id){return document.getElementById(id);};
  function svgEl(tag,attrs){
    var e=document.createElementNS("http://www.w3.org/2000/svg",tag);
    if(attrs)for(var k in attrs){e.setAttribute(k,attrs[k]);}
    return e;
  }
  function el(tag,cls,html){var e=document.createElement(tag); if(cls)e.className=cls; if(html!==undefined)e.innerHTML=html; return e;}

  var REDUCED = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  function beatIndex(p,n){ return clamp(Math.floor(p*n*0.999),0,n-1); }
  function setBeatList(hostId,idx){
    var host=$(hostId); if(!host) return;
    [].slice.call(host.children).forEach(function(li){
      var b=parseInt(li.dataset.beat,10);
      li.classList.toggle("active", b===idx);
      li.classList.toggle("done", b<idx);
    });
  }

  var RENDERERS={};

  // ---- page config -------------------------------------------------
  var PAGE = window.V2PAGE || {act:null, beats:0, prev:null, next:null, num:"—", label:"Intro"};
  var ACT = PAGE.act || null;
  var NBEATS = PAGE.beats||0;
  var isNarrative = !!ACT;                       // loop page vs intro/outro
  var totalSteps = isNarrative ? (NBEATS + 2) : 1; // tell-setup + N beats + so-what

  // deck-wide page order (for the left rail + neighbour navigation)
  var PAGES = [
    {file:"v2.html",         num:"—", label:"Intro"},
    {file:"loop-1.html",     num:"1", label:"Loop 1 · Envelope"},
    {file:"loop-2.html",     num:"2", label:"Loop 2 · Trading desk"},
    {file:"loop-3.html",     num:"3", label:"Loop 3 · Settlement"},
    {file:"loop-4.html",     num:"4", label:"Loop 4 · Customer"},
    {file:"loop-5.html",     num:"5", label:"Loop 5 · Governance"},
    {file:"loop-6.html",     num:"6", label:"Loop 6 · Foundation"},
    {file:"v2-summary.html", num:"✓", label:"Summary"}
  ];
  var curFile = (location.pathname.split("/").pop()||"v2.html");
  if(!curFile) curFile="v2.html";
  var pageIdx = 0;
  for(var pi=0;pi<PAGES.length;pi++){ if(PAGES[pi].file===curFile){ pageIdx=pi; break; } }

  // =========================================================
  //  ambient canvas + orbs (visual parity with the scroll build)
  // =========================================================
  var cvs=$("ambient"), ctx=cvs?cvs.getContext("2d"):null, DPR=Math.min(window.devicePixelRatio||1,2);
  var parts=[];
  function initCanvas(){
    if(!cvs||!ctx) return;
    cvs.width=innerWidth*DPR; cvs.height=innerHeight*DPR;
    cvs.style.width=innerWidth+"px"; cvs.style.height=innerHeight+"px";
    ctx.setTransform(DPR,0,0,DPR,0,0);
    parts=[];
    var n=REDUCED?0:Math.round(innerWidth/28);
    for(var i=0;i<n;i++){
      parts.push({x:Math.random()*innerWidth,y:Math.random()*innerHeight,
        r:Math.random()*1.6+0.4, vx:(Math.random()-0.5)*0.12, vy:-(Math.random()*0.22+0.04),
        a:Math.random()*0.4+0.1, hue:Math.random()<0.7?"g":"l"});
    }
  }
  function drawCanvas(){
    if(!cvs||!ctx) return;
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0;i<parts.length;i++){
      var p=parts[i]; p.x+=p.vx; p.y+=p.vy;
      if(p.y< -10){p.y=innerHeight+10;p.x=Math.random()*innerWidth;}
      if(p.x<-10)p.x=innerWidth+10; if(p.x>innerWidth+10)p.x=-10;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,6.2832);
      ctx.fillStyle=(p.hue==="g"?"rgba(45,226,131,":"rgba(188,160,242,")+p.a+")";
      ctx.fill();
    }
  }
  var orb1=$("orb1"), orb2=$("orb2");

  // Scale the dashboard column down if it would collide with the bottom nav on
  // short viewports, so every card stays visible without scrolling.
  function fitDash(){
    var dash=document.querySelector(".dash"); if(!dash) return;
    dash.style.transform=""; dash.style.transformOrigin="top right";
    // true content height (the .dash box is height-constrained, so scrollHeight
    // clips — measure from the top of .dash to the bottom of its last child).
    var kids=dash.children, top=dash.getBoundingClientRect().top, bottom=top;
    for(var i=0;i<kids.length;i++){ var b=kids[i].getBoundingClientRect().bottom; if(b>bottom) bottom=b; }
    var h=bottom-top;
    var topGap=112, bottomSafe=92;               // header room + nav room
    var avail=innerHeight-topGap-bottomSafe;
    var scale=h>avail ? Math.max(0.6, avail/h) : 1;
    if(scale<1) dash.style.transform="scale("+scale+")";
  }

  window.addEventListener("resize",function(){ clearTimeout(window.__rt); window.__rt=setTimeout(function(){ initCanvas(); fitDash(); },120); });

  // =========================================================
  //  STEP ENGINE (replaces the scroll engine)
  // =========================================================
  var cardTell=null, cardShow=null, cardSowhat=null;
  (function findCards(){
    [].slice.call(document.querySelectorAll(".step")).forEach(function(s){
      var r=s.dataset.role;
      if(r==="tell-setup") cardTell=s;
      else if(r==="show") cardShow=s;
      else if(r==="tell-sowhat") cardSowhat=s;
    });
  })();

  var curStep=0;
  var rawProgress=0, smoothProgress=0;

  function progressForStep(s){
    if(!isNarrative) return 0;
    if(s<=0) return 0;                // tell-setup
    if(s>=NBEATS+1) return 1;         // so-what
    return s/NBEATS;                  // show beat s (1..NBEATS) → settled beat state
  }
  function cardForStep(s){
    if(s<=0) return cardTell;
    if(s>=NBEATS+1) return cardSowhat;
    return cardShow;
  }

  // ---- navigation chrome -----------------------------------
  var pagenav=$("pagenav");
  var prevBtn=null, nextBtn=null, ticksWrap=null, counterEl=null;
  function buildNav(){
    if(!pagenav) return;
    prevBtn=el("button","nav-btn","‹ Back");
    nextBtn=el("button","nav-btn primary","Next ›");
    counterEl=el("span","counter","");
    ticksWrap=el("span","ticks");
    if(isNarrative && totalSteps>1){
      for(var i=0;i<totalSteps;i++) ticksWrap.appendChild(el("i"));
    }
    prevBtn.addEventListener("click",function(e){e.stopPropagation();goStep(-1);});
    nextBtn.addEventListener("click",function(e){e.stopPropagation();goStep(1);});
    pagenav.appendChild(prevBtn);
    if(isNarrative && totalSteps>1) pagenav.appendChild(ticksWrap);
    pagenav.appendChild(counterEl);
    pagenav.appendChild(nextBtn);
  }
  function updateNav(){
    if(prevBtn) prevBtn.disabled = (curStep===0 && !PAGE.prev);
    if(nextBtn){
      var atEnd = (curStep===totalSteps-1);
      nextBtn.disabled = (atEnd && !PAGE.next);
      if(atEnd && PAGE.next) nextBtn.textContent = PAGE.nextLabel || "Next loop ›";
      else if(atEnd) nextBtn.textContent = PAGE.endLabel || "Done";
      else nextBtn.textContent = "Next ›";
    }
    if(counterEl){
      counterEl.textContent = isNarrative ? ((curStep+1)+" / "+totalSteps) : "";
    }
    if(ticksWrap){
      [].slice.call(ticksWrap.children).forEach(function(t,i){
        t.classList.toggle("on", i===curStep);
        t.classList.toggle("done", i<curStep);
      });
    }
  }

  function applyStep(){
    rawProgress = progressForStep(curStep);
    if(isNarrative){
      [cardTell,cardShow,cardSowhat].forEach(function(c){ if(c) c.classList.remove("active"); });
      var c=cardForStep(curStep); if(c) c.classList.add("active");
    }
    updateNav();
  }

  function goStep(delta){
    var ns=curStep+delta;
    if(ns<0){ if(PAGE.prev) location.href=PAGE.prev+"#end"; return; }
    if(ns>totalSteps-1){ if(PAGE.next) location.href=PAGE.next; return; }
    curStep=ns; applyStep();
  }

  // ---- input -----------------------------------------------
  document.addEventListener("keydown",function(e){
    var k=e.key;
    if(k==="ArrowRight"||k==="ArrowDown"||k===" "||k==="Spacebar"||k==="PageDown"||k==="Enter"){ e.preventDefault(); goStep(1); }
    else if(k==="ArrowLeft"||k==="ArrowUp"||k==="PageUp"){ e.preventDefault(); goStep(-1); }
    else if(k==="Home"){ e.preventDefault(); curStep=0; applyStep(); }
    else if(k==="End"){ e.preventDefault(); curStep=totalSteps-1; applyStep(); }
  });
  document.addEventListener("click",function(e){
    if(e.target.closest && e.target.closest(".nav-btn,.dot,.restart,a,button")) return;
    goStep(1);
  });

  // ---- left rail: one dot per page -------------------------
  var rail=$("rail");
  if(rail){
    PAGES.forEach(function(pg,i){
      var d=el("a","dot"); d.href=pg.file;
      d.classList.toggle("active", i===pageIdx);
      d.classList.toggle("past", i<pageIdx);
      var tip=el("span","tip",pg.label); d.appendChild(tip);
      rail.appendChild(d);
    });
  }

  // ---- header pill -----------------------------------------
  (function(){
    var pn=$("actPillNum"), pl=$("actPillLabel");
    if(pn) pn.textContent = PAGE.num || PAGES[pageIdx].num;
    if(pl) pl.textContent = PAGE.label || PAGES[pageIdx].label;
  })();

  // ---- activate this page's single panel -------------------
  if(ACT){ var pnl=$("panel-"+ACT); if(pnl) pnl.classList.add("active"); }

  // =========================================================
  //  MAIN LOOP
  // =========================================================
  function loop(){
    smoothProgress += (rawProgress-smoothProgress)*(REDUCED?1:0.14);
    if(Math.abs(rawProgress-smoothProgress)<0.001) smoothProgress=rawProgress;
    if(ACT && RENDERERS[ACT]) RENDERERS[ACT](smoothProgress);
    drawCanvas();
    if(!REDUCED){
      if(orb1) orb1.style.transform="translate("+(Math.sin(Date.now()/6000)*16)+"px,"+(Math.cos(Date.now()/7000)*12)+"px)";
      if(orb2) orb2.style.transform="translate("+(Math.cos(Date.now()/5500)*18)+"px,"+(Math.sin(Date.now()/6500)*14)+"px)";
    }
    requestAnimationFrame(loop);
  }

  // arrive at the last step when navigating backwards into a page
  if(location.hash==="#end"){ curStep=totalSteps-1; }

  // expose context for the renderer modules appended below
  window.__v2ctx = { V:V, V2:V2, PE:PE, N:N, clamp:clamp, lerp:lerp, easeOut:easeOut, nf:nf,
    fmtEur:fmtEur, fmtEurM:fmtEurM, $:$, svgEl:svgEl, el:el, beatIndex:beatIndex, setBeatList:setBeatList,
    RENDERERS:RENDERERS, act:ACT };

  // summary page "Replay" button → back to the intro
  var rb=$("restartBtn"); if(rb) rb.addEventListener("click",function(e){e.stopPropagation();location.href="v2.html";});

  function boot(){
    initCanvas();
    buildNav();
    applyStep();
    // renderer IIFEs populate the dashboard after this engine IIFE returns,
    // so fit once layout has settled (and again on full load, for web fonts).
    requestAnimationFrame(function(){ requestAnimationFrame(fitDash); });
    window.addEventListener("load",fitDash);
    requestAnimationFrame(loop);
  }
  boot();
})();

/* =====================================================================
   Per-loop renderers below are copied verbatim from the scroll build.
   Each is guarded so it only initialises on the page that owns its panel.
   ===================================================================== */
// ================= ACT 1 — ENVELOPE (Loop 1 rescale) =================
(function(){
  "use strict";
  if(!window.__v2ctx || window.__v2ctx.act!=="envelope") return;
  var C=window.__v2ctx, V=C.V, V2=C.V2, PE=C.PE, N=C.N, clamp=C.clamp, easeOut=C.easeOut, nf=C.nf, $=C.$, svgEl=C.svgEl;
  var scenario = V2.scenario||{};
  var SCALE = scenario.evScaleFactor||22.22;
  var boilerCfg = scenario.boiler||{baseMW:20,peakAddMW:10,centerStep:70,widthSteps:18};
  var headline = V2.headline||{};

  function base(i){ return ((PE[i]&&PE[i].baselineMW)||0)*SCALE; }
  function pmax(i){ return ((PE[i]&&PE[i].pMaxMW)||0)*SCALE; }
  function pmin(i){ return ((PE[i]&&PE[i].pMinMW)||0)*SCALE; }
  function boiler(i){
    var d=(i-boilerCfg.centerStep)/boilerCfg.widthSteps;
    return boilerCfg.baseMW + boilerCfg.peakAddMW*Math.exp(-0.5*d*d);
  }
  var pmaxMax=0; for(var i=0;i<N;i++){ pmaxMax=Math.max(pmaxMax, pmax(i)+boiler(i)); }
  var P_MIN_DOM=0, P_MAX_DOM=Math.ceil((pmaxMax+20)/40)*40;

  var VBW=1440, VBH=900;
  var M={l:92,r:110,t:130,b:104};
  function plotW(){return VBW-M.l-M.r;}
  function plotH(){return VBH-M.t-M.b;}
  function xAt(i){return M.l+plotW()*(i/(N-1));}
  function yP(mw){return M.t+plotH()*(1-(mw-P_MIN_DOM)/(P_MAX_DOM-P_MIN_DOM));}

  function bandPath(topY,botY,p){
    p=(p===undefined)?1:clamp(p,0,1);
    var lim=Math.max(1,Math.round((N-1)*p));
    var d="M";
    for(var i=0;i<=lim;i++){ d+=(i?"L":"")+nf(xAt(i))+" "+nf(topY(i))+" "; }
    for(var j=lim;j>=0;j--){ d+="L"+nf(xAt(j))+" "+nf(botY(j))+" "; }
    return d+"Z";
  }
  function linePath(yfn,p){
    p=(p===undefined)?1:clamp(p,0,1);
    var lim=Math.max(0,Math.round((N-1)*p));
    var d="M";
    for(var i=0;i<=lim;i++){ d+=(i?"L":"")+nf(xAt(i))+" "+nf(yfn(i))+" "; }
    return d;
  }

  var gAxes=$("gAxes"), gLabels=$("gLabels");
  var gBoilerBand=$("gBoilerBand"), gUpBand=$("gUpBand"), gDownBand=$("gDownBand"), gBaseline=$("gBaseline"), gEvGlyph=$("gEvGlyph");

  function buildAxes(){
    gAxes.innerHTML=""; gLabels.innerHTML="";
    var px=M.l,py=M.t,pw=plotW(),ph=plotH();
    var step=40;
    for(var mw=0; mw<=P_MAX_DOM; mw+=step){
      var y=yP(mw);
      gAxes.appendChild(svgEl("line",{x1:px,y1:y,x2:px+pw,y2:y,stroke:"rgba(255,255,255,0.05)","stroke-width":1}));
      var t=svgEl("text",{x:px-14,y:y+4,"text-anchor":"end",class:"tnum",fill:"rgba(247,245,242,0.42)","font-size":12,"font-family":"inherit"});
      t.textContent=mw; gLabels.appendChild(t);
    }
    for(var i=0;i<N;i+=16){
      var x=xAt(i);
      gAxes.appendChild(svgEl("line",{x1:x,y1:py,x2:x,y2:py+ph,stroke:"rgba(255,255,255,0.04)","stroke-width":1}));
      var clk=(PE[i]&&PE[i].clock)||"";
      var tl=svgEl("text",{x:x,y:py+ph+26,"text-anchor":"middle",class:"tnum",fill:"rgba(247,245,242,0.38)","font-size":11.5,"font-family":"inherit"});
      tl.textContent=clk; gLabels.appendChild(tl);
    }
    gAxes.appendChild(svgEl("line",{x1:px,y1:py+ph,x2:px+pw,y2:py+ph,stroke:"rgba(255,255,255,0.14)","stroke-width":1.2}));
    gAxes.appendChild(svgEl("line",{x1:px,y1:py,x2:px,y2:py+ph,stroke:"rgba(255,255,255,0.10)","stroke-width":1}));
    var axTitle=svgEl("text",{x:px-14,y:py-18,"text-anchor":"end",fill:"rgba(45,226,131,0.7)","font-size":11,"letter-spacing":"0.12em","font-family":"inherit"});
    axTitle.textContent="POWER · MW"; gLabels.appendChild(axTitle);
  }
  buildAxes();
  gAxes.style.opacity=0; gLabels.style.opacity=0;
  gAxes.style.transition="opacity .6s"; gLabels.style.transition="opacity .6s";
  window.addEventListener("resize",function(){ clearTimeout(window.__envRt); window.__envRt=setTimeout(buildAxes,140); });

  var boilerEl=svgEl("path",{fill:"url(#gBoiler)",stroke:"#BCA0F2","stroke-width":1.2,opacity:0});
  gBoilerBand.appendChild(boilerEl);
  var upEl=svgEl("path",{fill:"url(#gUp)",stroke:"none",opacity:0});
  var pmaxLine=svgEl("path",{fill:"none",stroke:"#2DE283","stroke-width":1.4,opacity:0});
  gUpBand.appendChild(upEl); gUpBand.appendChild(pmaxLine);
  var downEl=svgEl("path",{fill:"url(#gDown)",stroke:"none",opacity:0});
  var pminLine=svgEl("path",{fill:"none",stroke:"#FF6B5C","stroke-width":1.3,opacity:0});
  gDownBand.appendChild(downEl); gDownBand.appendChild(pminLine);
  var baseLine=svgEl("path",{fill:"none",stroke:"rgba(247,245,242,0.85)","stroke-width":1.8,"stroke-dasharray":"1 7",opacity:0});
  gBaseline.appendChild(baseLine);

  // one-EV glyph (mirrors v1's mechanic, drawn once)
  var evBuilt=false;
  function buildEv(){
    if(evBuilt) return; evBuilt=true;
    var x0=xAt(6), barW=54, yTop=yP(P_MAX_DOM*0.42), yBot=yP(0);
    var track=svgEl("rect",{x:x0,y:yTop,width:barW,height:(yBot-yTop),rx:12,fill:"rgba(255,255,255,0.04)",stroke:"rgba(255,255,255,0.10)"});
    gEvGlyph.appendChild(track);
    var soc=45.7, tgt=80;
    var fillH=(yBot-yTop)*(soc/100);
    var fill=svgEl("rect",{x:x0,y:yBot-fillH,width:barW,height:fillH,rx:12,fill:"url(#gUp)"});
    gEvGlyph.appendChild(fill);
    var tgtY=yBot-(yBot-yTop)*(tgt/100);
    gEvGlyph.appendChild(svgEl("line",{x1:x0-6,y1:tgtY,x2:x0+barW+6,y2:tgtY,stroke:"#5CEB9F","stroke-width":1.4,"stroke-dasharray":"4 4"}));
    var tlab=svgEl("text",{x:x0+barW+12,y:tgtY+4,fill:"#5CEB9F","font-size":13,"font-family":"inherit",class:"tnum"});
    tlab.textContent="80% target"; gEvGlyph.appendChild(tlab);
    var slab=svgEl("text",{x:x0+barW/2,y:yBot-fillH-12,"text-anchor":"middle",fill:"#F7F5F2","font-size":15,"font-weight":700,"font-family":"inherit",class:"tnum"});
    slab.textContent=soc+"%"; gEvGlyph.appendChild(slab);
    var clab=svgEl("text",{x:x0+barW/2,y:yBot+24,"text-anchor":"middle",fill:"rgba(247,245,242,0.55)","font-size":12,"letter-spacing":"0.06em","font-family":"inherit"});
    clab.textContent="ONE EV · 7.4 kW"; gEvGlyph.appendChild(clab);
    var clab2=svgEl("text",{x:x0+barW/2,y:yBot+44,"text-anchor":"middle",fill:"rgba(247,245,242,0.35)","font-size":11,"font-family":"inherit"});
    clab2.textContent="everything that follows is just this, multiplied"; gEvGlyph.appendChild(clab2);
  }
  buildEv();

  function beatLocal(p,idx,n){ var w=1/n; return clamp((p-idx*w)/w,0,1); }

  function render(progress){
    var idx=C.beatIndex(progress,4);
    C.setBeatList("envBeats",idx);

    var evOn = idx===0 ? 1 : (1-easeOut(beatLocal(progress,1,4)));
    gEvGlyph.setAttribute("opacity", clamp(evOn,0,1));

    var fleetProg = easeOut(idx<1?0:beatLocal(progress,1,4));
    var fleetOn = idx>=1 ? 1 : 0;
    var showFleet = idx>=1;
    gAxes.style.opacity = showFleet?1:0;
    gLabels.style.opacity = showFleet?1:0;
    var yBase=function(i){return yP(base(i));}, yMax=function(i){return yP(pmax(i));}, yMin=function(i){return yP(pmin(i));};
    baseLine.setAttribute("d", linePath(yBase, showFleet?fleetProg:0));
    baseLine.setAttribute("opacity", showFleet? clamp(fleetProg,0,0.85):0);
    upEl.setAttribute("d", bandPath(yMax, yBase, showFleet?fleetProg:0));
    pmaxLine.setAttribute("d", linePath(yMax, showFleet?fleetProg:0));
    upEl.setAttribute("opacity", showFleet? fleetProg:0);
    pmaxLine.setAttribute("opacity", showFleet? fleetProg:0);
    downEl.setAttribute("d", bandPath(yBase, yMin, showFleet?fleetProg:0));
    pminLine.setAttribute("d", linePath(yMin, showFleet?fleetProg:0));
    downEl.setAttribute("opacity", showFleet? fleetProg*0.9:0);
    pminLine.setAttribute("opacity", showFleet? fleetProg*0.8:0);

    var fc=$("envFleetCounter");
    if(showFleet){ fc.classList.add("show"); $("envFleetCounterV").textContent=Math.round(lerp0(0,scenario.targetEVs||100000,fleetProg)).toLocaleString(); }
    else fc.classList.remove("show");

    var boilerProg = easeOut(idx<2?0:beatLocal(progress,2,4));
    var showBoiler = idx>=2;
    boilerEl.setAttribute("d", bandPath(function(i){return yP(pmax(i)+boiler(i));}, yMax, showBoiler?boilerProg:0));
    boilerEl.setAttribute("opacity", showBoiler? boilerProg:0);
    var bl=$("envBoilerLabel");
    if(showBoiler && boilerProg>0.5){ bl.classList.add("show"); positionBoilerLabel(); } else bl.classList.remove("show");

    var revOn = idx>=3;
    var revProg = easeOut(idx<3?0:beatLocal(progress,3,4));
    var rm=$("envRevMeter");
    if(revOn){ rm.classList.add("show");
      var lo=(headline.hypothesisAnnualLowEur||18e6), hi=(headline.hypothesisAnnualHighEur||57e6);
      var cur=lerp0(lo,hi,revProg);
      $("envRevMeterV").textContent = "€"+(cur/1e6).toFixed(0)+"M/yr";
    } else rm.classList.remove("show");
  }
  function lerp0(a,b,t){ return a+(b-a)*clamp(t,0,1); }

  function positionBoilerLabel(){
    var bl=$("envBoilerLabel");
    var svg=$("stage"); var svgRect=svg.getBoundingClientRect();
    var i=boilerCfg.centerStep;
    var xFrac=xAt(i)/VBW, yFrac=yP(pmax(i)+boiler(i)*0.6)/VBH;
    bl.style.left=(svgRect.left+svgRect.width*xFrac-90)+"px";
    bl.style.top=(svgRect.top+svgRect.height*yFrac-70)+"px";
    bl.style.position="fixed";
  }

  C.RENDERERS.envelope = render;
})();

// ================= ACT 2 — BEATING HEART (Loop 2) =================
// The VPP is one controllable fleet with a pulse. Yesterday's forecast set
// today's "beat" (committed dispatch); realtime shows how much of the fleet's
// flexibility the beat allocates, and whether delivery is tracking the plan.
(function(){
  "use strict";
  if(!window.__v2ctx || window.__v2ctx.act!=="trading") return;
  var C=window.__v2ctx, V=C.V, V2=C.V2, clamp=C.clamp, lerp=C.lerp, easeOut=C.easeOut, $=C.$, svgEl=C.svgEl, el=C.el;
  var PORT=V.portfolioSummary||{}, FCST=V.forecastAccuracy||{}, PE=V.powerEnvelope||[];
  var N=Math.max(PE.length,1);

  var available=PORT.totalAvailableMW||8.4;
  var committed=PORT.totalCommittedMW||5.2;   // the beat = day-ahead committed MW
  var uncommitted=PORT.totalUncommittedMW||3.2;
  var deliveryPct=PORT.deliverySuccessRate||96.2;
  var eventsToday=PORT.eventsToday||7;
  var allocPct=Math.round(committed/available*100);

  // KPI tiles (static content, built once)
  var kpiHost=$("tradeKpis");
  [
    {v:available+" MW", k:"Flexibility live", s:"the beating heart", cls:"g"},
    {v:committed+" MW", k:"The beat", s:"day-ahead committed", cls:"w"},
    {v:allocPct+"%", k:"Beat allocation", s:"of fleet flexibility", cls:"l"}
  ].forEach(function(d){
    var t=el("div","kpi-tile");
    t.innerHTML='<div class="kv '+d.cls+'">'+d.v+'</div><div class="kk">'+d.k+'</div><div class="ks">'+d.s+'</div>';
    kpiHost.appendChild(t);
  });

  // ---- ECG heartbeat: one PQRST-ish pulse scrolling right-to-left ----
  var ecg=$("ecgSvg"), EW=600, EH=130, midY=EH*0.56;
  // trace polyline + moving pulse dot + soft glow underlay
  var ecgTrace=svgEl("polyline",{fill:"none",stroke:"#2DE283","stroke-width":"1.8","stroke-linejoin":"round","stroke-linecap":"round",opacity:"0.92"});
  var ecgGlow=svgEl("polyline",{fill:"none",stroke:"#2DE283","stroke-width":"5","stroke-linejoin":"round","stroke-linecap":"round",opacity:"0.14"});
  var ecgHead=svgEl("circle",{r:"3.4",fill:"#5CEB9F"});
  var ecgBase=svgEl("line",{x1:0,y1:midY,x2:EW,y2:midY,stroke:"rgba(255,255,255,0.06)","stroke-width":"1"});
  ecg.appendChild(ecgBase); ecg.appendChild(ecgGlow); ecg.appendChild(ecgTrace); ecg.appendChild(ecgHead);
  // waveform sampled over a phase 0..1 (one beat). amplitude = how hard the fleet is beating.
  function beatWave(ph){
    // ph in [0,1). Smooth baseline with a sharp systolic spike near ph=0.16.
    var s=0;
    var d=(ph-0.16);
    s += Math.exp(-Math.pow(d/0.022,2)) * 1.0;      // R spike
    s -= Math.exp(-Math.pow((ph-0.11)/0.02,2)) * 0.18; // Q dip
    s -= Math.exp(-Math.pow((ph-0.22)/0.03,2)) * 0.30; // S dip
    s += Math.exp(-Math.pow((ph-0.42)/0.06,2)) * 0.22; // T wave
    s += Math.sin(ph*6.2832)*0.015;                  // faint drift
    return s;
  }

  // ---- Beat-allocation donut ring (committed vs free headroom) ----
  var ring=$("allocRing"), RCx=60, RCy=60, RR=46, RW2=13, RC=2*Math.PI*RR;
  var ringTrack=svgEl("circle",{cx:RCx,cy:RCy,r:RR,fill:"none",stroke:"rgba(255,255,255,0.08)","stroke-width":RW2});
  var ringHead=svgEl("circle",{cx:RCx,cy:RCy,r:RR,fill:"none",stroke:"#2DE283","stroke-width":RW2,"stroke-linecap":"round",
    "stroke-dasharray":RC,"stroke-dashoffset":RC,transform:"rotate(-90 "+RCx+" "+RCy+")"});
  var ringPctTxt=svgEl("text",{x:RCx,y:RCy-2,"text-anchor":"middle",fill:"#5CEB9F","font-size":"22","font-weight":"800","font-family":"inherit"});
  var ringSubTxt=svgEl("text",{x:RCx,y:RCy+15,"text-anchor":"middle",fill:"rgba(247,245,242,0.5)","font-size":"9","letter-spacing":"0.08em","font-family":"inherit"});
  ringSubTxt.textContent="ALLOCATED";
  ring.appendChild(ringTrack); ring.appendChild(ringHead); ring.appendChild(ringPctTxt); ring.appendChild(ringSubTxt);

  var legendHost=$("allocLegend");
  [
    {sw:"#2DE283", l:"Serving the beat · committed", v:committed+" MW"},
    {sw:"rgba(255,255,255,0.35)", l:"Free headroom · tradeable", v:uncommitted+" MW"}
  ].forEach(function(d){
    var r=el("div","row");
    r.innerHTML='<span class="sw" style="background:'+d.sw+'"></span><span class="rl">'+d.l+'</span><span class="rv">'+d.v+'</span>';
    legendHost.appendChild(r);
  });
  $("allocSub").textContent = "set by yesterday's forecast";

  // ---- Day-ahead beat vs realtime tracking ----
  var fsvg=$("forecastSvg");
  var FW=600, FH=150, FM={l:8,r:8,t:16,b:22};
  function fx(i,total){ return FM.l+(FW-FM.l-FM.r)*(i/(total-1)); }
  function fy(v,maxV){ return FM.t+(FH-FM.t-FM.b)*(1-v/maxV); }
  var baseArr=PE.map(function(p){return p.baselineMW||0;});
  var maxArr=PE.map(function(p){return p.pMaxMW||0;});
  var minArr=PE.map(function(p){return p.pMinMW||0;});
  var domainMax=Math.max.apply(null, maxArr.concat([committed]))*1.28;
  // day-ahead forecast beat = smoothed baseline (the plan we committed to yesterday)
  function fcast(i){ return baseArr[i]; }
  function bandArea(hiFn,loFn){
    var d="M";
    for(var i=0;i<N;i++){ d+=(i?"L":"")+fx(i,N).toFixed(1)+" "+fy(hiFn(i),domainMax).toFixed(1)+" "; }
    for(var j=N-1;j>=0;j--){ d+="L"+fx(j,N).toFixed(1)+" "+fy(loFn(j),domainMax).toFixed(1)+" "; }
    return d+"Z";
  }
  function seriesPath(getter,upto){
    var lim=(upto===undefined)?N-1:clamp(upto,0,N-1);
    var d="M";
    for(var i=0;i<=lim;i++){ d+=(i?"L":"")+fx(i,N).toFixed(1)+" "+fy(getter(i),domainMax).toFixed(1)+" "; }
    return d;
  }
  // static layers: confidence band + day-ahead forecast beat (dashed) + committed line
  var bandEl=svgEl("path",{d:bandArea(function(i){return maxArr[i];},function(i){return minArr[i];}),fill:"rgba(45,226,131,0.10)",stroke:"none"});
  var fcastEl=svgEl("path",{d:seriesPath(fcast),fill:"none",stroke:"rgba(247,245,242,0.5)","stroke-width":"1.4","stroke-dasharray":"3 5"});
  var commitEl=svgEl("line",{x1:FM.l,y1:fy(committed,domainMax).toFixed(1),x2:FW-FM.r,y2:fy(committed,domainMax).toFixed(1),stroke:"#5CEB9F","stroke-width":"1.4","stroke-dasharray":"4 4"});
  var commitTxt=svgEl("text",{x:FW-FM.r,y:(fy(committed,domainMax)-6).toFixed(1),"text-anchor":"end",fill:"#5CEB9F","font-size":"10.5","font-family":"inherit"});
  commitTxt.textContent="the beat · "+committed+" MW committed";
  // realtime delivered trace (drawn progressively, wiggles slightly around the beat)
  var rtEl=svgEl("path",{fill:"none",stroke:"#2DE283","stroke-width":"2.1","stroke-linejoin":"round"});
  var rtHead=svgEl("circle",{r:"3.2",fill:"#5CEB9F"});
  var fcastTxt=svgEl("text",{x:FM.l,y:12,fill:"rgba(247,245,242,0.4)","font-size":"10","font-family":"inherit"});
  fcastTxt.textContent="yesterday's forecast beat (dashed) · realtime delivery (solid)";
  fsvg.appendChild(bandEl); fsvg.appendChild(fcastEl); fsvg.appendChild(commitEl);
  fsvg.appendChild(rtEl); fsvg.appendChild(rtHead); fsvg.appendChild(commitTxt); fsvg.appendChild(fcastTxt);
  // realtime = forecast + small deterministic noise (stays inside band → on plan)
  function realtime(i){
    var wob=Math.sin(i*0.7)*0.08 + Math.sin(i*0.23+1.3)*0.05;
    return clamp(fcast(i)*(1+wob), minArr[i], maxArr[i]);
  }
  $("tradeForecastSub").textContent = "15-min resolution · MAE "+(FCST.maeP50||0.42)+" MW · P90 coverage "+(FCST.coverageP90||94.2)+"%";
  $("tradeHeartSub").textContent = eventsToday+" dispatch events today · "+deliveryPct+"% delivered · continuous, no overnight batch";

  var beatDot=$("beatDot");

  function render(progress){
    var idx=C.beatIndex(progress,3);
    C.setBeatList("tradeBeats",idx);

    // group focus: heart @0, allocation @1, on-plan forecast @2
    $("tradeHeartCard").classList.toggle("dim", idx!==0);
    $("tradeAllocCard").classList.toggle("dim", idx!==1);
    $("tradeForecastCard").classList.toggle("dim", idx!==2);
    kpiHost.style.opacity = idx===0?1:0.6;

    // --- heartbeat, always beating; a little stronger when it's the focus ---
    var t=Date.now()/1000;
    var bpm = 62;                                  // dispatch beats/hr, felt as a pulse
    var beatsPerSec = bpm/60;
    var amp = (idx===0?1:0.72) * (EH*0.34);
    var pts=[], glow=[];
    var SAMPLES=120, span=2.4;                     // ~2.4 beats visible across the width
    for(var k=0;k<=SAMPLES;k++){
      var fr=k/SAMPLES;
      var ph=(((t*beatsPerSec) + fr*span) % 1 + 1) % 1;
      var x=EW*fr;                                 // left → right across the trace
      var y=midY - beatWave(ph)*amp;
      pts.push(x.toFixed(1)+","+y.toFixed(1));
      glow.push(x.toFixed(1)+","+y.toFixed(1));
    }
    ecgTrace.setAttribute("points", pts.join(" "));
    ecgGlow.setAttribute("points", glow.join(" "));
    // pulse dot rides the leading (right) edge
    var lead=pts[pts.length-1].split(",");
    ecgHead.setAttribute("cx",lead[0]); ecgHead.setAttribute("cy",lead[1]);
    $("bpmV").textContent = bpm;
    // sync the LIVE dot glow to the systolic spike
    var phNow=(t*beatsPerSec)%1;
    var pulse=Math.exp(-Math.pow((phNow-0.16)/0.05,2));
    beatDot.style.transform="scale("+(1+pulse*0.9)+")";
    beatDot.style.boxShadow="0 0 "+(4+pulse*12)+"px "+(pulse*3)+"px rgba(45,226,131,"+(0.35+pulse*0.5)+")";

    // --- allocation ring animates in on beat 1 ---
    var shown = idx>=1 ? allocPct : 0;
    var frac = (shown/100);
    ringHead.setAttribute("stroke-dashoffset", (RC*(1-frac)).toFixed(1));
    ringPctTxt.textContent = shown+"%";

    // --- realtime delivery draws across on beat 2 (tracking the beat) ---
    var rtP = idx>=2 ? 1 : (idx===1?0:0);
    var lim = Math.round((N-1)*(idx>=2?1:0));
    rtEl.setAttribute("d", seriesPath(realtime, lim));
    rtEl.setAttribute("opacity", idx>=2?1:0.0);
    if(idx>=2){
      var hx=fx(N-1,N), hy=fy(realtime(N-1),domainMax);
      rtHead.setAttribute("cx",hx.toFixed(1)); rtHead.setAttribute("cy",hy.toFixed(1));
      rtHead.setAttribute("opacity","1");
    } else rtHead.setAttribute("opacity","0");
    var chip=$("onPlanChip");
    if(idx>=2){ chip.style.opacity="1"; chip.textContent="● on plan · "+deliveryPct+"% delivered, tracking the beat"; }
    else chip.style.opacity="0.25";
  }
  C.RENDERERS.trading = render;
})();

// ================= ACT 3 — DISPATCH-TO-SETTLEMENT (Loop 3) =================
(function(){
  "use strict";
  if(!window.__v2ctx || window.__v2ctx.act!=="settlement") return;
  var C=window.__v2ctx, V=C.V, V2=C.V2, clamp=C.clamp, $=C.$, el=C.el, fmtEur=C.fmtEur;
  var BIDS=V.marketBids||[], EVENTS=V.dispatchEvents||[], REV=V.revenueByProduct||[];
  var headline=V2.headline||{};

  var STATUS_CLASS={Accepted:"accepted",Pending:"pending",Rejected:"rejected",Expired:"rejected"};
  var tbody=$("bidBookTable").querySelector("tbody");
  BIDS.slice(0,6).forEach(function(b){
    var tr=el("tr");
    tr.innerHTML='<td>'+b.product+'</td><td>'+b.mw+'</td><td>'+b.priceEurMWh+'</td><td>'+b.deliveryStart+'–'+b.deliveryEnd+'</td>'+
      '<td><span class="status-chip '+(STATUS_CLASS[b.status]||"pending")+'">'+b.status+'</span></td>';
    tbody.appendChild(tr);
  });

  var pick = EVENTS.filter(function(e){return e.type==="Grid Stress";})[0] || EVENTS[0] || {};
  $("dispatchId").textContent = pick.id||"";
  var db=$("dispatchBody");
  var pct = pick.targetMW ? (pick.deliveredMW/pick.targetMW*100) : 0;
  db.innerHTML =
    '<div class="whatif-row"><span>'+ (pick.type||"") +' · '+(pick.startTime||"")+'–'+(pick.endTime||"")+'</span><span></span></div>'+
    '<div class="bar-row"><span class="bl">Target</span><div class="bar-track" style="flex:1;"><div class="bar-fill" style="width:100%;background:rgba(255,255,255,0.2);"></div></div><span class="bv">'+(pick.targetMW||0)+' MW</span></div>'+
    '<div class="bar-row"><span class="bl">Delivered</span><div class="bar-track" style="flex:1;"><div class="bar-fill" style="width:'+clamp(pct,0,100)+'%;background:var(--green-l);"></div></div><span class="bv">'+(pick.deliveredMW||0)+' MW</span></div>'+
    '<div class="whatif-row"><span>Chargers dispatched → responded</span><b>'+(pick.chargersDispatched||0)+' → '+(pick.chargersResponded||0)+'</b></div>'+
    '<div class="whatif-row"><span>Opt-outs</span><b>'+(pick.userOptOuts||0)+'</b></div>'+
    '<div class="whatif-row"><span>Revenue</span><b class="tnum" style="color:var(--green-l)">'+fmtEur(pick.revenueEur||0)+'</b></div>';

  var pnl=$("pnlBody");
  var net=headline.netProgramSavingsEur||312000, cost=headline.costPerCustomerEurYr||42, lift=headline.rebalancingLiftEur||42000;
  var mixHtml = REV.map(function(r){
    return '<div class="bar-row"><span class="bl">'+r.product+'</span><div class="bar-track" style="flex:1;"><div class="bar-fill" style="width:'+r.percentageOfTotal+'%;background:'+(r.color||"var(--green-l)")+';"></div></div><span class="bv">'+r.percentageOfTotal+'%</span></div>';
  }).join("");
  pnl.innerHTML =
    '<div style="display:flex;gap:22px;margin-bottom:14px;">'+
      '<div><div style="font-size:26px;font-weight:800;color:var(--green-l);" class="tnum">'+fmtEur(net)+'</div><div class="ks">Net savings YTD</div></div>'+
      '<div><div style="font-size:26px;font-weight:800;color:var(--white);" class="tnum">€'+cost+'</div><div class="ks">Cost / customer / yr</div></div>'+
    '</div>'+ mixHtml +
    '<div class="msg-preview">+'+fmtEur(lift)+'/yr found by rebalancing FCR-D Down ↔ FCR-N exposure — margin from market participation, not tariffs.</div>';

  function render(progress){
    var idx=C.beatIndex(progress,3);
    C.setBeatList("settleBeats",idx);
    $("bidBookCard").classList.toggle("dim", idx!==0);
    $("dispatchCard").classList.toggle("dim", idx!==1);
    $("pnlCard").classList.toggle("dim", idx!==2);
  }
  C.RENDERERS.settlement = render;
})();

// ================= ACT 4 — CUSTOMER GUARANTEE (Loop 4) =================
(function(){
  "use strict";
  if(!window.__v2ctx || window.__v2ctx.act!=="customer") return;
  var C=window.__v2ctx, V=C.V, V2=C.V2, clamp=C.clamp, $=C.$, el=C.el;
  var CH=V.consumerHourlyEurMwh||[], PORT=V.portfolioSummary||{};
  var cust=V2.customer||{}, headline=V2.headline||{};
  var tomorrow = CH.slice(24,48);
  if(tomorrow.length<24){ tomorrow=CH.slice(0,24); }

  var psvg=$("priceSvg"); var PW=190,PH=90,PM={l:4,r:4,t:10,b:14};
  var maxP=Math.max.apply(null, tomorrow.concat([1]))*1.18;
  function px2(i){ return PM.l+(PW-PM.l-PM.r)*(i/(tomorrow.length-1)); }
  function py2(v){ return PM.t+(PH-PM.t-PM.b)*(1-v/maxP); }
  var d="M"; tomorrow.forEach(function(v,i){ d+=(i?"L":"")+px2(i).toFixed(1)+" "+py2(v).toFixed(1)+" "; });
  var spikeH=(cust.priceCurve&&cust.priceCurve.spikeHour)||17, troughH=(cust.priceCurve&&cust.priceCurve.troughHour)||3;
  psvg.innerHTML = '<path d="'+d+' L'+px2(tomorrow.length-1).toFixed(1)+' '+(PH-PM.b)+' L'+px2(0).toFixed(1)+' '+(PH-PM.b)+' Z" fill="rgba(255,107,92,0.08)" stroke="none"/>'+
    '<path d="'+d+'" fill="none" stroke="#FF6B5C" stroke-width="1.6"/>'+
    '<circle cx="'+px2(spikeH).toFixed(1)+'" cy="'+py2(tomorrow[spikeH]||350).toFixed(1)+'" r="3" fill="#FF6B5C"/>'+
    '<text x="'+px2(spikeH).toFixed(1)+'" y="'+(py2(tomorrow[spikeH]||350)-8).toFixed(1)+'" text-anchor="middle" fill="#FF6B5C" font-size="9.5" font-weight="700">'+(tomorrow[spikeH]||350)+'</text>'+
    '<circle cx="'+px2(troughH).toFixed(1)+'" cy="'+py2(tomorrow[troughH]||11).toFixed(1)+'" r="3" fill="#5CEB9F"/>'+
    '<text x="'+px2(troughH).toFixed(1)+'" y="'+(py2(tomorrow[troughH]||11)+14).toFixed(1)+'" text-anchor="middle" fill="#5CEB9F" font-size="9.5" font-weight="700">'+(tomorrow[troughH]||11)+'</text>';

  var sess=cust.optimizedSession||{};
  $("sessionBody").innerHTML =
    '<div class="whatif-row"><span>Shifted from</span><b>'+(sess.shiftedFrom||"")+'</b></div>'+
    '<div class="whatif-row"><span>Shifted to</span><b style="color:var(--green-l)">'+(sess.shiftedTo||"")+'</b></div>'+
    '<div class="whatif-row"><span>Saved</span><b style="color:var(--green-l)">€'+(sess.savedEur||0)+'</b></div>'+
    '<div class="whatif-row"><span>Ready by</span><b>'+(sess.readyBy||"")+' ✓ guaranteed</b></div>';

  var leverHost=$("leverBody");
  (cust.trustLevers||[]).forEach(function(l,i){
    var row=el("div","lever-row");
    row.innerHTML='<span class="lb">✓</span><div><b>'+l.title+'</b><p>'+l.detail+'</p></div>';
    leverHost.appendChild(row);
  });

  var kpiHost=$("customerKpis");
  [
    {v:"4,218", k:"Enrolled EVs", cls:"w"},
    {v:(PORT.optOutRate!==undefined?PORT.optOutRate:0.4)+"%", k:"Opt-out rate", cls:"c"},
    {v:"€"+((headline.netProgramSavingsEur||312000)/1000).toFixed(0)+"K", k:"Returned to households", cls:"g"}
  ].forEach(function(d){
    var t=el("div","kpi-tile");
    t.innerHTML='<div class="kv '+d.cls+'">'+d.v+'</div><div class="kk">'+d.k+'</div>';
    kpiHost.appendChild(t);
  });

  function render(progress){
    var idx=C.beatIndex(progress,3);
    C.setBeatList("custBeats",idx);
    $("phonePrice").classList.toggle("dim", idx!==0);
    $("phoneSession").classList.toggle("dim", idx!==1);
    $("leverCard").classList.toggle("dim", idx!==2);
    kpiHost.style.opacity = idx===2?1:0.6;
  }
  C.RENDERERS.customer = render;
})();

// ================= ACT 5 — GOVERNANCE (Loop 5) =================
(function(){
  "use strict";
  if(!window.__v2ctx || window.__v2ctx.act!=="governance") return;
  var C=window.__v2ctx, V=C.V, V2=C.V2, clamp=C.clamp, $=C.$, el=C.el;
  var PORT=V.portfolioSummary||{};
  var gov=V2.governance||{};

  var kpiHost=$("govKpis");
  [
    {v:(PORT.deliverySuccessRate||96.2)+"%", k:"Delivery success", cls:"g"},
    {v:(PORT.eventsToday||7), k:"Events today", cls:"w"},
    {v:(PORT.optOutRate||0.4)+"%", k:"Opt-out rate", cls:"l"}
  ].forEach(function(d){
    var t=el("div","kpi-tile");
    t.innerHTML='<div class="kv '+d.cls+'">'+d.v+'</div><div class="kk">'+d.k+'</div>';
    kpiHost.appendChild(t);
  });

  var inboxHost=$("govInboxBody");
  (gov.actionInbox||[]).forEach(function(item){
    var row=el("div","inbox-item "+(item.urgency==="warn"?"warn":"normal"));
    row.innerHTML='<span class="idot"></span><div><b>'+item.title+'</b><p>'+item.detail+'</p></div>';
    inboxHost.appendChild(row);
  });

  var wi=gov.whatIf||{};
  $("whatIfTitle").textContent=wi.title||"What-if decision";
  $("whatIfWindow").textContent=wi.window||"";
  $("govWhatIfBody").innerHTML =
    '<div class="whatif-row"><span>Available flexibility</span><b>'+(wi.mwBefore||0)+' → '+(wi.mwAfter||0)+' MW</b></div>'+
    '<div class="whatif-row"><span>Revenue lift</span><b style="color:var(--green-l)">+€'+(wi.revenueLiftEurPerDay||0).toLocaleString()+'/day</b></div>'+
    '<div class="whatif-row"><span>Modelled opt-out cost</span><b style="color:var(--amber)">+'+(wi.modelledOptOutDeltaPct||0)+' pp</b></div>'+
    '<div class="whatif-row"><span>Status</span><b>'+(wi.reversible?"Reversible · not yet committed":"Committed")+'</b></div>'+
    '<div class="msg-preview">"'+(wi.customerMessage||"")+'"</div>';

  var auditBody=$("auditTable").querySelector("tbody");
  (gov.auditTrail||[]).forEach(function(r){
    var tr=el("tr");
    tr.innerHTML='<td>'+r.ts+'</td><td>'+r.actor+'</td><td>'+r.action+'</td><td>'+r.reason+'</td><td class="audit-hash">'+r.hash+'</td>';
    auditBody.appendChild(tr);
  });

  var detailPanels=[$("govInbox"),$("govWhatIf"),$("govAudit")];
  function render(progress){
    var idx=C.beatIndex(progress,3);
    C.setBeatList("govBeats",idx);
    detailPanels.forEach(function(p,i){ p.classList.toggle("active", i===idx); });
    kpiHost.style.opacity = idx===0?1:0.65;
  }
  C.RENDERERS.governance = render;
})();

// ================= ACT 6 — FOUNDATION (Loop 6) =================
(function(){
  "use strict";
  if(!window.__v2ctx || window.__v2ctx.act!=="foundation") return;
  var C=window.__v2ctx, V2=C.V2, $=C.$, el=C.el, svgEl=C.svgEl;
  var fnd=V2.foundation||{};

  // lineage flow diagram
  var lsvg=$("lineageSvg");
  var sources=fnd.sources||[], apps=fnd.apps||[];
  var W=600,H=320;
  var srcX=90, storeX=300, appX=510;
  var srcY0=30, srcGap=(H-60)/Math.max(sources.length-1,1);
  var appY0=60, appGap=(H-120)/Math.max(apps.length-1,1);
  var storeY=H/2;
  var svgParts=[];
  sources.forEach(function(s,i){
    var y=srcY0+i*srcGap;
    svgParts.push('<rect x="'+(srcX-70)+'" y="'+(y-16)+'" width="140" height="32" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)"/>');
    svgParts.push('<text x="'+srcX+'" y="'+(y+4)+'" text-anchor="middle" fill="rgba(247,245,242,0.75)" font-size="10.5">'+s+'</text>');
    svgParts.push('<path d="M'+(srcX+70)+' '+y+' C '+((srcX+storeX)/2)+' '+y+', '+((srcX+storeX)/2)+' '+storeY+', '+(storeX-64)+' '+storeY+'" fill="none" stroke="rgba(45,226,131,0.28)" stroke-width="1.2"/>');
  });
  svgParts.push('<rect x="'+(storeX-64)+'" y="'+(storeY-34)+'" width="128" height="68" rx="12" fill="rgba(45,226,131,0.10)" stroke="#2DE283" stroke-width="1.4"/>');
  svgParts.push('<text x="'+storeX+'" y="'+(storeY-4)+'" text-anchor="middle" fill="#5CEB9F" font-size="11" font-weight="700">Governed</text>');
  svgParts.push('<text x="'+storeX+'" y="'+(storeY+13)+'" text-anchor="middle" fill="#5CEB9F" font-size="11" font-weight="700">Lakehouse</text>');
  apps.forEach(function(a,i){
    var y=appY0+i*appGap;
    svgParts.push('<path d="M'+(storeX+64)+' '+storeY+' C '+((storeX+appX)/2)+' '+storeY+', '+((storeX+appX)/2)+' '+y+', '+(appX-66)+' '+y+'" fill="none" stroke="rgba(188,160,242,0.35)" stroke-width="1.2"/>');
    svgParts.push('<rect x="'+(appX-66)+'" y="'+(y-16)+'" width="132" height="32" rx="8" fill="rgba(188,160,242,0.08)" stroke="rgba(188,160,242,0.4)"/>');
    svgParts.push('<text x="'+appX+'" y="'+(y+4)+'" text-anchor="middle" fill="#BCA0F2" font-size="10.5">'+a+'</text>');
  });
  lsvg.innerHTML=svgParts.join("");

  var traceHost=$("traceChain");
  (fnd.tracePath||[]).forEach(function(t,i){
    if(i>0){ var arrow=el("div","trace-arrow","↓"); traceHost.appendChild(arrow); }
    var node=el("div","trace-node",t); node.dataset.i=i; traceHost.appendChild(node);
  });

  var expandHost=$("expandStrip");
  (fnd.expansionPath||[]).forEach(function(p,i){
    var stop=el("div","expand-stop "+p.status); stop.dataset.i=i;
    stop.innerHTML='<div class="ep">'+p.phase+'</div><div class="el">'+p.label+'</div><div class="ed">'+p.detail+'</div>';
    expandHost.appendChild(stop);
  });

  var detailPanels=[$("foundFlow"),$("foundTrace"),$("foundExpand")];
  function render(progress){
    var idx=C.beatIndex(progress,3);
    C.setBeatList("foundBeats",idx);
    detailPanels.forEach(function(p,i){ p.classList.toggle("active", i===idx); });
    if(idx===1){
      [].slice.call(traceHost.querySelectorAll(".trace-node")).forEach(function(n){
        n.classList.toggle("on", true);
      });
    }
    if(idx===2){
      [].slice.call(expandHost.querySelectorAll(".expand-stop")).forEach(function(n,i){ n.classList.toggle("on", true); });
    }
  }
  C.RENDERERS.foundation = render;
})();
