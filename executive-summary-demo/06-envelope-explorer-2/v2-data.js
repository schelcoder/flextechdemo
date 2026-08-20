window.VPP2 = {
 "meta": {
  "title": "Capacity, Margin, Trust — flexibility as Energy Company's next asset class",
  "subtitle": "Energy Company · Demand Response & Flexibility (Virtual Power Plant) · Electricity Utility — Nordics",
  "demoDate": "2026-08-11",
  "solutionLead": "Alex Morgan",
  "accountLead": "Jamie Chen",
  "note": "V2 — dramatizes all six demo loops. Today's figures (4,218 EVs, 8.4 MW, delivery/opt-out rates) are demonstrated app data; 100,000-EV and portfolio-level figures are explicitly labeled hypotheses to re-base in Phase 1."
 },

 // ---- shared headline figures (kept consistent across every loop, per the demo plan) ----
 "headline": {
  "netProgramSavingsEur": 312000,
  "costPerCustomerEurYr": 42,
  "rebalancingLiftEur": 42000,
  "hypothesisAnnualLowEur": 18000000,
  "hypothesisAnnualHighEur": 57000000,
  "hypothesisIrrPct": 185,
  "hypothesisPaybackMonths": 14,
  "hypothesisNpv5yrEur": 94200000
 },

 // ---- Loop 1: raised-bar scenario (100,000 EVs + one district-heating boiler) ----
 "scenario": {
  "targetEVs": 100000,
  "inReachEVs": 200000,
  "evScaleFactor": 22.22,
  "targetFlexLabel": "≈200 MW",
  "boiler": { "baseMW": 20, "peakAddMW": 10, "centerStep": 70, "widthSteps": 18, "label": "20–30 MW" }
 },

 // ---- Loop 4: consumer trust ----
 "customer": {
  "priceCurve": { "spikeHour": 17, "spikeEur": 350, "troughHour": 3, "troughEur": 11 },
  "optimizedSession": {
   "shiftedFrom": "18:00–22:00 · expensive",
   "shiftedTo": "01:00–05:00 · cheap, clean",
   "savedEur": 2.12,
   "readyBy": "07:30",
   "guaranteed": true
  },
  "trustLevers": [
   { "title": "Minimum-charge guarantee", "detail": "Departure SOC never drops below your set floor, no matter what the market needs." },
   { "title": "Blackout windows", "detail": "e.g. Monday 07:00–09:00 commute — no dispatch, full power, always." },
   { "title": "One-tap override", "detail": "Any customer can opt out of a single event in one tap, no penalty." }
  ]
 },

 // ---- Loop 5: command bridge (decision inbox + audit trail) ----
 "governance": {
  "actionInbox": [
   { "kind": "enroll", "title": "Enrollment approvals", "detail": "Batch of 340 new EV sign-ups awaiting fairness check", "urgency": "normal" },
   { "kind": "fairness", "title": "Fairness flag", "detail": "5 customers over-dispatched this week — review before next cycle", "urgency": "warn" },
   { "kind": "dispute", "title": "Settlement dispute", "detail": "DR-004 revenue reconciliation — customer disputes delivered MW", "urgency": "warn" }
  ],
  "whatIf": {
   "title": "Pre-position for Friday's heat spell",
   "window": "Fri 16:00–20:00",
   "mwBefore": 6.2,
   "mwAfter": 11.4,
   "revenueLiftEurPerDay": 1860,
   "modelledOptOutDeltaPct": 0.3,
   "customerMessage": "We'll pre-charge your EV a little earlier Friday afternoon to keep you ready for a busy grid evening — no change to your morning departure time.",
   "reversible": true
  },
  "auditTrail": [
   { "ts": "17:42:03", "actor": "trader.aleksi",  "action": "Setpoint override",              "reason": "FCR-D activation window",                         "hash": "7f3a91e2" },
   { "ts": "16:58:11", "actor": "system.flexit",  "action": "Fairness rebalance",              "reason": "5 customers flagged over-dispatched",             "hash": "c02de88b" },
   { "ts": "14:20:47", "actor": "ops.sanna",      "action": "Vulnerable-customer exemption",   "reason": "Medical equipment flag on 2 accounts",           "hash": "a51f6d3c" },
   { "ts": "13:05:29", "actor": "system.flexit",  "action": "Bid submitted",                   "reason": "FCR-D Down 3.0 MW @ 14:00",                       "hash": "9e0b7741" },
   { "ts": "09:41:56", "actor": "trader.aleksi",  "action": "Pre-position approved",           "reason": "Grid-stress forecast, Friday heat spell",         "hash": "2d88ff10" },
   { "ts": "08:12:03", "actor": "ops.sanna",      "action": "Enrollment batch approved",       "reason": "340 new sign-ups, fairness check passed",         "hash": "514ac9e0" }
  ],
  "vulnerableComplianceRate": 100
 },

 // ---- Loop 6: one governed foundation ----
 "foundation": {
  "sources": ["Vehicle telematics", "Smart meters", "Market prices", "Grid signals", "Weather"],
  "store": "One governed lakehouse · Delta + Unity Catalog",
  "apps": ["Consumer app", "Trading desk", "Command bridge"],
  "tracePath": [
   "€312K net program savings · P&L",
   "Settlement records · per dispatch event",
   "Dispatch intervals · 15-min, per fleet",
   "Raw telemetry · per vehicle, per charger"
  ],
  "expansionPath": [
   { "phase": "Now",   "label": "EV demand response",                                 "detail": "4,218 vehicles live · 8.4 MW",                    "status": "live" },
   { "phase": "Next",  "label": "Heat & residential batteries",                       "detail": "District-heating boiler · 20–30 MW firm",         "status": "next" },
   { "phase": "After", "label": "Industrial & hydro-adjacent flex, cross-border bids", "detail": "Portfolio-level optimization alongside Hydro",     "status": "later" }
  ]
 },

 // ---- Executive ask (outro) ----
 "ask": [
  "Confirm the capacity–margin–trust scorecard as the board reporting frame",
  "Name the first Energy Company data sources to wire for a production Phase 1",
  "Name the IT and business co-sponsors for the EVP conversation — within this quarter"
 ]
};
