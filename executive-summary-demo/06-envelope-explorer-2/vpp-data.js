window.VPP = {
 "meta": {
  "title": "Energy Company VPP — EV Flexibility",
  "generated": "2026-04-16T18:00:00+03:00",
  "horizonHours": 24,
  "stepMinutes": 15,
  "note": "Frozen seeded dataset. Power Envelope + converging Energy cone are the hero abstraction."
 },
 "peParameters": {
  "arrivalTime": "18:00",
  "departureTime": "16:00 (+1d)",
  "effChargeRateKW": 7.4,
  "effDischargeRateKW": 0,
  "initialSocPct": 45.7,
  "minSocPct": 35,
  "minTargetSocPct": 80,
  "maxTargetSocPct": 87.6,
  "batteryCapacityMWh": 210,
  "aggregatedEVs": 4218,
  "cadenceMin": 15
 },
 "powerEnvelope": [
  {
   "t": 0,
   "clock": "18:00",
   "baselineMW": 2.951,
   "pMaxMW": 5.021,
   "pMinMW": 1.031,
   "setpointMW": 1.567,
   "upFlexMW": 2.07,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.86,
   "fcrdDownMW": 1.73
  },
  {
   "t": 0.25,
   "clock": "18:15",
   "baselineMW": 2.988,
   "pMaxMW": 5.083,
   "pMinMW": 1.068,
   "setpointMW": 2.938,
   "upFlexMW": 2.096,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.89,
   "fcrdDownMW": 1.73
  },
  {
   "t": 0.5,
   "clock": "18:30",
   "baselineMW": 3,
   "pMaxMW": 5.12,
   "pMinMW": 1.08,
   "setpointMW": 3.028,
   "upFlexMW": 2.12,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.91,
   "fcrdDownMW": 1.73
  },
  {
   "t": 0.75,
   "clock": "18:45",
   "baselineMW": 2.988,
   "pMaxMW": 5.128,
   "pMinMW": 1.068,
   "setpointMW": 2.97,
   "upFlexMW": 2.141,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.93,
   "fcrdDownMW": 1.73
  },
  {
   "t": 1,
   "clock": "19:00",
   "baselineMW": 2.951,
   "pMaxMW": 5.108,
   "pMinMW": 1.031,
   "setpointMW": 2.918,
   "upFlexMW": 2.157,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.94,
   "fcrdDownMW": 1.73
  },
  {
   "t": 1.25,
   "clock": "19:15",
   "baselineMW": 2.891,
   "pMaxMW": 5.059,
   "pMinMW": 0.971,
   "setpointMW": 2.859,
   "upFlexMW": 2.168,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.73
  },
  {
   "t": 1.5,
   "clock": "19:30",
   "baselineMW": 2.809,
   "pMaxMW": 4.982,
   "pMinMW": 0.889,
   "setpointMW": 2.832,
   "upFlexMW": 2.173,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.96,
   "fcrdDownMW": 1.73
  },
  {
   "t": 1.75,
   "clock": "19:45",
   "baselineMW": 2.707,
   "pMaxMW": 4.879,
   "pMinMW": 0.787,
   "setpointMW": 2.702,
   "upFlexMW": 2.172,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.73
  },
  {
   "t": 2,
   "clock": "20:00",
   "baselineMW": 2.588,
   "pMaxMW": 4.752,
   "pMinMW": 0.668,
   "setpointMW": 2.574,
   "upFlexMW": 2.164,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.73
  },
  {
   "t": 2.25,
   "clock": "20:15",
   "baselineMW": 2.454,
   "pMaxMW": 4.605,
   "pMinMW": 0.534,
   "setpointMW": 2.454,
   "upFlexMW": 2.151,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.94,
   "fcrdDownMW": 1.73
  },
  {
   "t": 2.5,
   "clock": "20:30",
   "baselineMW": 2.309,
   "pMaxMW": 4.441,
   "pMinMW": 0.389,
   "setpointMW": 2.253,
   "upFlexMW": 2.132,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.92,
   "fcrdDownMW": 1.73
  },
  {
   "t": 2.75,
   "clock": "20:45",
   "baselineMW": 2.156,
   "pMaxMW": 4.266,
   "pMinMW": 0.3,
   "setpointMW": 2.174,
   "upFlexMW": 2.11,
   "downFlexMW": 1.856,
   "fcrdUpMW": 1.9,
   "fcrdDownMW": 1.67
  },
  {
   "t": 3,
   "clock": "21:00",
   "baselineMW": 3.4,
   "pMaxMW": 5.485,
   "pMinMW": 1.48,
   "setpointMW": 3.415,
   "upFlexMW": 2.085,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.88,
   "fcrdDownMW": 1.73
  },
  {
   "t": 3.25,
   "clock": "21:15",
   "baselineMW": 3.475,
   "pMaxMW": 5.534,
   "pMinMW": 1.555,
   "setpointMW": 3.51,
   "upFlexMW": 2.059,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.85,
   "fcrdDownMW": 1.73
  },
  {
   "t": 3.5,
   "clock": "21:30",
   "baselineMW": 3.55,
   "pMaxMW": 5.584,
   "pMinMW": 1.63,
   "setpointMW": 3.519,
   "upFlexMW": 2.034,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.83,
   "fcrdDownMW": 1.73
  },
  {
   "t": 3.75,
   "clock": "21:45",
   "baselineMW": 3.625,
   "pMaxMW": 5.636,
   "pMinMW": 1.705,
   "setpointMW": 3.663,
   "upFlexMW": 2.011,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.81,
   "fcrdDownMW": 1.73
  },
  {
   "t": 4,
   "clock": "22:00",
   "baselineMW": 3.7,
   "pMaxMW": 7.068,
   "pMinMW": 0.7,
   "setpointMW": 3.664,
   "upFlexMW": 3.368,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 4.25,
   "clock": "22:15",
   "baselineMW": 3.775,
   "pMaxMW": 7.118,
   "pMinMW": 0.775,
   "setpointMW": 3.718,
   "upFlexMW": 3.343,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 4.5,
   "clock": "22:30",
   "baselineMW": 3.85,
   "pMaxMW": 7.179,
   "pMinMW": 0.85,
   "setpointMW": 3.843,
   "upFlexMW": 3.329,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 4.75,
   "clock": "22:45",
   "baselineMW": 3.925,
   "pMaxMW": 7.25,
   "pMinMW": 0.925,
   "setpointMW": 3.975,
   "upFlexMW": 3.325,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 5,
   "clock": "23:00",
   "baselineMW": 4,
   "pMaxMW": 7.332,
   "pMinMW": 1,
   "setpointMW": 4.05,
   "upFlexMW": 3.332,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 5.25,
   "clock": "23:15",
   "baselineMW": 4.075,
   "pMaxMW": 7.425,
   "pMinMW": 1.075,
   "setpointMW": 4.035,
   "upFlexMW": 3.35,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 5.5,
   "clock": "23:30",
   "baselineMW": 4.15,
   "pMaxMW": 7.527,
   "pMinMW": 1.15,
   "setpointMW": 4.168,
   "upFlexMW": 3.377,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 5.75,
   "clock": "23:45",
   "baselineMW": 4.225,
   "pMaxMW": 7.636,
   "pMinMW": 1.225,
   "setpointMW": 4.261,
   "upFlexMW": 3.411,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 6,
   "clock": "00:00",
   "baselineMW": 4.6,
   "pMaxMW": 8.051,
   "pMinMW": 1.6,
   "setpointMW": 4.58,
   "upFlexMW": 3.451,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 6.25,
   "clock": "00:15",
   "baselineMW": 4.744,
   "pMaxMW": 8.238,
   "pMinMW": 1.744,
   "setpointMW": 4.728,
   "upFlexMW": 3.494,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 6.5,
   "clock": "00:30",
   "baselineMW": 4.885,
   "pMaxMW": 8.422,
   "pMinMW": 1.885,
   "setpointMW": 4.882,
   "upFlexMW": 3.538,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 6.75,
   "clock": "00:45",
   "baselineMW": 5.021,
   "pMaxMW": 8.6,
   "pMinMW": 2.021,
   "setpointMW": 5.021,
   "upFlexMW": 3.579,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 7,
   "clock": "01:00",
   "baselineMW": 5.15,
   "pMaxMW": 8.765,
   "pMinMW": 2.15,
   "setpointMW": 5.144,
   "upFlexMW": 3.615,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 7.25,
   "clock": "01:15",
   "baselineMW": 5.27,
   "pMaxMW": 8.914,
   "pMinMW": 2.27,
   "setpointMW": 5.292,
   "upFlexMW": 3.644,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 7.5,
   "clock": "01:30",
   "baselineMW": 5.378,
   "pMaxMW": 9.042,
   "pMinMW": 2.378,
   "setpointMW": 5.399,
   "upFlexMW": 3.664,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 7.75,
   "clock": "01:45",
   "baselineMW": 5.473,
   "pMaxMW": 9.147,
   "pMinMW": 2.473,
   "setpointMW": 8.831,
   "upFlexMW": 3.674,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 8,
   "clock": "02:00",
   "baselineMW": 5.553,
   "pMaxMW": 9.226,
   "pMinMW": 2.553,
   "setpointMW": 8.8,
   "upFlexMW": 3.673,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 8.25,
   "clock": "02:15",
   "baselineMW": 5.616,
   "pMaxMW": 9.278,
   "pMinMW": 2.616,
   "setpointMW": 8.893,
   "upFlexMW": 3.661,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 8.5,
   "clock": "02:30",
   "baselineMW": 5.663,
   "pMaxMW": 9.302,
   "pMinMW": 2.663,
   "setpointMW": 5.66,
   "upFlexMW": 3.64,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 8.75,
   "clock": "02:45",
   "baselineMW": 5.691,
   "pMaxMW": 9.3,
   "pMinMW": 2.691,
   "setpointMW": 5.651,
   "upFlexMW": 3.609,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 9,
   "clock": "03:00",
   "baselineMW": 5.7,
   "pMaxMW": 9.272,
   "pMinMW": 2.7,
   "setpointMW": 5.73,
   "upFlexMW": 3.572,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 9.25,
   "clock": "03:15",
   "baselineMW": 5.691,
   "pMaxMW": 9.221,
   "pMinMW": 2.691,
   "setpointMW": 5.684,
   "upFlexMW": 3.53,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 9.5,
   "clock": "03:30",
   "baselineMW": 5.663,
   "pMaxMW": 9.149,
   "pMinMW": 2.663,
   "setpointMW": 5.692,
   "upFlexMW": 3.487,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 9.75,
   "clock": "03:45",
   "baselineMW": 5.616,
   "pMaxMW": 9.06,
   "pMinMW": 2.616,
   "setpointMW": 5.644,
   "upFlexMW": 3.444,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 10,
   "clock": "04:00",
   "baselineMW": 5.553,
   "pMaxMW": 8.957,
   "pMinMW": 2.553,
   "setpointMW": 5.568,
   "upFlexMW": 3.405,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 10.25,
   "clock": "04:15",
   "baselineMW": 5.473,
   "pMaxMW": 8.844,
   "pMinMW": 2.473,
   "setpointMW": 5.458,
   "upFlexMW": 3.371,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 10.5,
   "clock": "04:30",
   "baselineMW": 5.378,
   "pMaxMW": 8.724,
   "pMinMW": 2.378,
   "setpointMW": 5.414,
   "upFlexMW": 3.346,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 10.75,
   "clock": "04:45",
   "baselineMW": 5.27,
   "pMaxMW": 8.6,
   "pMinMW": 2.27,
   "setpointMW": 5.291,
   "upFlexMW": 3.33,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 11,
   "clock": "05:00",
   "baselineMW": 5.15,
   "pMaxMW": 8.475,
   "pMinMW": 2.15,
   "setpointMW": 5.114,
   "upFlexMW": 3.325,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 11.25,
   "clock": "05:15",
   "baselineMW": 5.021,
   "pMaxMW": 8.352,
   "pMinMW": 2.021,
   "setpointMW": 4.998,
   "upFlexMW": 3.331,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 11.5,
   "clock": "05:30",
   "baselineMW": 4.885,
   "pMaxMW": 8.231,
   "pMinMW": 1.885,
   "setpointMW": 4.932,
   "upFlexMW": 3.347,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 11.75,
   "clock": "05:45",
   "baselineMW": 4.744,
   "pMaxMW": 8.116,
   "pMinMW": 1.744,
   "setpointMW": 4.71,
   "upFlexMW": 3.372,
   "downFlexMW": 3,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.7
  },
  {
   "t": 12,
   "clock": "06:00",
   "baselineMW": 3.2,
   "pMaxMW": 6.606,
   "pMinMW": 0.3,
   "setpointMW": 3.247,
   "upFlexMW": 3.406,
   "downFlexMW": 2.9,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.61
  },
  {
   "t": 12.25,
   "clock": "06:15",
   "baselineMW": 3.025,
   "pMaxMW": 6.471,
   "pMinMW": 0.3,
   "setpointMW": 3.024,
   "upFlexMW": 3.446,
   "downFlexMW": 2.725,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.45
  },
  {
   "t": 12.5,
   "clock": "06:30",
   "baselineMW": 2.85,
   "pMaxMW": 6.338,
   "pMinMW": 0.3,
   "setpointMW": 2.898,
   "upFlexMW": 3.488,
   "downFlexMW": 2.55,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.3
  },
  {
   "t": 12.75,
   "clock": "06:45",
   "baselineMW": 2.675,
   "pMaxMW": 6.207,
   "pMinMW": 0.3,
   "setpointMW": 2.7,
   "upFlexMW": 3.532,
   "downFlexMW": 2.375,
   "fcrdUpMW": 2.88,
   "fcrdDownMW": 2.14
  },
  {
   "t": 13,
   "clock": "07:00",
   "baselineMW": 2.5,
   "pMaxMW": 4.613,
   "pMinMW": 0.58,
   "setpointMW": 2.529,
   "upFlexMW": 2.113,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.9,
   "fcrdDownMW": 1.73
  },
  {
   "t": 13.25,
   "clock": "07:15",
   "baselineMW": 2.325,
   "pMaxMW": 4.46,
   "pMinMW": 0.405,
   "setpointMW": 2.285,
   "upFlexMW": 2.135,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.92,
   "fcrdDownMW": 1.73
  },
  {
   "t": 13.5,
   "clock": "07:30",
   "baselineMW": 2.15,
   "pMaxMW": 4.303,
   "pMinMW": 0.3,
   "setpointMW": 2.154,
   "upFlexMW": 2.153,
   "downFlexMW": 1.85,
   "fcrdUpMW": 1.94,
   "fcrdDownMW": 1.67
  },
  {
   "t": 13.75,
   "clock": "07:45",
   "baselineMW": 1.975,
   "pMaxMW": 4.141,
   "pMinMW": 0.3,
   "setpointMW": 2.019,
   "upFlexMW": 2.166,
   "downFlexMW": 1.675,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.51
  },
  {
   "t": 14,
   "clock": "08:00",
   "baselineMW": 1.8,
   "pMaxMW": 3.973,
   "pMinMW": 0.3,
   "setpointMW": 1.853,
   "upFlexMW": 2.173,
   "downFlexMW": 1.5,
   "fcrdUpMW": 1.96,
   "fcrdDownMW": 1.35
  },
  {
   "t": 14.25,
   "clock": "08:15",
   "baselineMW": 1.625,
   "pMaxMW": 3.798,
   "pMinMW": 0.3,
   "setpointMW": 1.615,
   "upFlexMW": 2.173,
   "downFlexMW": 1.325,
   "fcrdUpMW": 1.96,
   "fcrdDownMW": 1.19
  },
  {
   "t": 14.5,
   "clock": "08:30",
   "baselineMW": 1.45,
   "pMaxMW": 3.617,
   "pMinMW": 0.3,
   "setpointMW": 1.424,
   "upFlexMW": 2.167,
   "downFlexMW": 1.15,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.04
  },
  {
   "t": 14.75,
   "clock": "08:45",
   "baselineMW": 1.275,
   "pMaxMW": 3.43,
   "pMinMW": 0.3,
   "setpointMW": 1.255,
   "upFlexMW": 2.155,
   "downFlexMW": 0.975,
   "fcrdUpMW": 1.94,
   "fcrdDownMW": 0.88
  },
  {
   "t": 15,
   "clock": "09:00",
   "baselineMW": 1.4,
   "pMaxMW": 3.537,
   "pMinMW": 0.3,
   "setpointMW": 1.343,
   "upFlexMW": 2.137,
   "downFlexMW": 1.1,
   "fcrdUpMW": 1.92,
   "fcrdDownMW": 0.99
  },
  {
   "t": 15.25,
   "clock": "09:15",
   "baselineMW": 1.456,
   "pMaxMW": 3.572,
   "pMinMW": 0.3,
   "setpointMW": 1.441,
   "upFlexMW": 2.116,
   "downFlexMW": 1.156,
   "fcrdUpMW": 1.9,
   "fcrdDownMW": 1.04
  },
  {
   "t": 15.5,
   "clock": "09:30",
   "baselineMW": 1.511,
   "pMaxMW": 3.603,
   "pMinMW": 0.3,
   "setpointMW": 1.507,
   "upFlexMW": 2.091,
   "downFlexMW": 1.211,
   "fcrdUpMW": 1.88,
   "fcrdDownMW": 1.09
  },
  {
   "t": 15.75,
   "clock": "09:45",
   "baselineMW": 1.565,
   "pMaxMW": 3.631,
   "pMinMW": 0.3,
   "setpointMW": 1.616,
   "upFlexMW": 2.066,
   "downFlexMW": 1.265,
   "fcrdUpMW": 1.86,
   "fcrdDownMW": 1.14
  },
  {
   "t": 16,
   "clock": "10:00",
   "baselineMW": 1.617,
   "pMaxMW": 3.657,
   "pMinMW": 0.3,
   "setpointMW": 1.566,
   "upFlexMW": 2.04,
   "downFlexMW": 1.317,
   "fcrdUpMW": 1.84,
   "fcrdDownMW": 1.19
  },
  {
   "t": 16.25,
   "clock": "10:15",
   "baselineMW": 1.666,
   "pMaxMW": 3.683,
   "pMinMW": 0.3,
   "setpointMW": 1.623,
   "upFlexMW": 2.017,
   "downFlexMW": 1.366,
   "fcrdUpMW": 1.81,
   "fcrdDownMW": 1.23
  },
  {
   "t": 16.5,
   "clock": "10:30",
   "baselineMW": 1.712,
   "pMaxMW": 3.708,
   "pMinMW": 0.3,
   "setpointMW": 1.744,
   "upFlexMW": 1.996,
   "downFlexMW": 1.412,
   "fcrdUpMW": 1.8,
   "fcrdDownMW": 1.27
  },
  {
   "t": 16.75,
   "clock": "10:45",
   "baselineMW": 1.754,
   "pMaxMW": 3.734,
   "pMinMW": 0.3,
   "setpointMW": 1.73,
   "upFlexMW": 1.981,
   "downFlexMW": 1.454,
   "fcrdUpMW": 1.78,
   "fcrdDownMW": 1.31
  },
  {
   "t": 17,
   "clock": "11:00",
   "baselineMW": 1.791,
   "pMaxMW": 3.761,
   "pMinMW": 0.3,
   "setpointMW": 1.755,
   "upFlexMW": 1.97,
   "downFlexMW": 1.491,
   "fcrdUpMW": 1.77,
   "fcrdDownMW": 1.34
  },
  {
   "t": 17.25,
   "clock": "11:15",
   "baselineMW": 1.823,
   "pMaxMW": 3.79,
   "pMinMW": 0.3,
   "setpointMW": 1.871,
   "upFlexMW": 1.967,
   "downFlexMW": 1.523,
   "fcrdUpMW": 1.77,
   "fcrdDownMW": 1.37
  },
  {
   "t": 17.5,
   "clock": "11:30",
   "baselineMW": 1.85,
   "pMaxMW": 3.82,
   "pMinMW": 0.3,
   "setpointMW": 1.867,
   "upFlexMW": 1.969,
   "downFlexMW": 1.55,
   "fcrdUpMW": 1.77,
   "fcrdDownMW": 1.4
  },
  {
   "t": 17.75,
   "clock": "11:45",
   "baselineMW": 1.872,
   "pMaxMW": 3.85,
   "pMinMW": 0.3,
   "setpointMW": 1.868,
   "upFlexMW": 1.978,
   "downFlexMW": 1.572,
   "fcrdUpMW": 1.78,
   "fcrdDownMW": 1.41
  },
  {
   "t": 18,
   "clock": "12:00",
   "baselineMW": 1.887,
   "pMaxMW": 3.88,
   "pMinMW": 0.3,
   "setpointMW": 1.917,
   "upFlexMW": 1.992,
   "downFlexMW": 1.587,
   "fcrdUpMW": 1.79,
   "fcrdDownMW": 1.43
  },
  {
   "t": 18.25,
   "clock": "12:15",
   "baselineMW": 1.897,
   "pMaxMW": 3.908,
   "pMinMW": 0.3,
   "setpointMW": 1.884,
   "upFlexMW": 2.012,
   "downFlexMW": 1.597,
   "fcrdUpMW": 1.81,
   "fcrdDownMW": 1.44
  },
  {
   "t": 18.5,
   "clock": "12:30",
   "baselineMW": 1.9,
   "pMaxMW": 3.935,
   "pMinMW": 0.3,
   "setpointMW": 1.854,
   "upFlexMW": 2.035,
   "downFlexMW": 1.6,
   "fcrdUpMW": 1.83,
   "fcrdDownMW": 1.44
  },
  {
   "t": 18.75,
   "clock": "12:45",
   "baselineMW": 1.897,
   "pMaxMW": 3.957,
   "pMinMW": 0.3,
   "setpointMW": 1.938,
   "upFlexMW": 2.06,
   "downFlexMW": 1.597,
   "fcrdUpMW": 1.85,
   "fcrdDownMW": 1.44
  },
  {
   "t": 19,
   "clock": "13:00",
   "baselineMW": 1.887,
   "pMaxMW": 3.973,
   "pMinMW": 0.3,
   "setpointMW": 1.917,
   "upFlexMW": 2.086,
   "downFlexMW": 1.587,
   "fcrdUpMW": 1.88,
   "fcrdDownMW": 1.43
  },
  {
   "t": 19.25,
   "clock": "13:15",
   "baselineMW": 1.872,
   "pMaxMW": 3.982,
   "pMinMW": 0.3,
   "setpointMW": 1.897,
   "upFlexMW": 2.11,
   "downFlexMW": 1.572,
   "fcrdUpMW": 1.9,
   "fcrdDownMW": 1.41
  },
  {
   "t": 19.5,
   "clock": "13:30",
   "baselineMW": 1.85,
   "pMaxMW": 3.983,
   "pMinMW": 0.3,
   "setpointMW": 1.849,
   "upFlexMW": 2.133,
   "downFlexMW": 1.55,
   "fcrdUpMW": 1.92,
   "fcrdDownMW": 1.4
  },
  {
   "t": 19.75,
   "clock": "13:45",
   "baselineMW": 1.823,
   "pMaxMW": 3.974,
   "pMinMW": 0.3,
   "setpointMW": 1.791,
   "upFlexMW": 2.151,
   "downFlexMW": 1.523,
   "fcrdUpMW": 1.94,
   "fcrdDownMW": 1.37
  },
  {
   "t": 20,
   "clock": "14:00",
   "baselineMW": 1.791,
   "pMaxMW": 3.955,
   "pMinMW": 0.3,
   "setpointMW": 1.746,
   "upFlexMW": 2.164,
   "downFlexMW": 1.491,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.34
  },
  {
   "t": 20.25,
   "clock": "14:15",
   "baselineMW": 1.754,
   "pMaxMW": 3.926,
   "pMinMW": 0.3,
   "setpointMW": 1.716,
   "upFlexMW": 2.172,
   "downFlexMW": 1.454,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.31
  },
  {
   "t": 20.5,
   "clock": "14:30",
   "baselineMW": 1.712,
   "pMaxMW": 3.885,
   "pMinMW": 0.3,
   "setpointMW": 1.716,
   "upFlexMW": 2.173,
   "downFlexMW": 1.412,
   "fcrdUpMW": 1.96,
   "fcrdDownMW": 1.27
  },
  {
   "t": 20.75,
   "clock": "14:45",
   "baselineMW": 1.666,
   "pMaxMW": 3.834,
   "pMinMW": 0.3,
   "setpointMW": 1.659,
   "upFlexMW": 2.168,
   "downFlexMW": 1.366,
   "fcrdUpMW": 1.95,
   "fcrdDownMW": 1.23
  },
  {
   "t": 21,
   "clock": "15:00",
   "baselineMW": 1.617,
   "pMaxMW": 3.774,
   "pMinMW": 0.3,
   "setpointMW": 1.566,
   "upFlexMW": 2.157,
   "downFlexMW": 1.317,
   "fcrdUpMW": 1.94,
   "fcrdDownMW": 1.19
  },
  {
   "t": 21.25,
   "clock": "15:15",
   "baselineMW": 1.565,
   "pMaxMW": 3.705,
   "pMinMW": 0.3,
   "setpointMW": 1.581,
   "upFlexMW": 2.14,
   "downFlexMW": 1.265,
   "fcrdUpMW": 1.93,
   "fcrdDownMW": 1.14
  },
  {
   "t": 21.5,
   "clock": "15:30",
   "baselineMW": 1.511,
   "pMaxMW": 3.63,
   "pMinMW": 0.3,
   "setpointMW": 1.471,
   "upFlexMW": 2.119,
   "downFlexMW": 1.211,
   "fcrdUpMW": 1.91,
   "fcrdDownMW": 1.09
  },
  {
   "t": 21.75,
   "clock": "15:45",
   "baselineMW": 1.456,
   "pMaxMW": 3.551,
   "pMinMW": 0.3,
   "setpointMW": 1.439,
   "upFlexMW": 2.095,
   "downFlexMW": 1.156,
   "fcrdUpMW": 1.89,
   "fcrdDownMW": 1.04
  },
  {
   "t": 22,
   "clock": "16:00",
   "baselineMW": 2,
   "pMaxMW": 4.069,
   "pMinMW": 0.3,
   "setpointMW": 2.059,
   "upFlexMW": 2.069,
   "downFlexMW": 1.7,
   "fcrdUpMW": 1.86,
   "fcrdDownMW": 1.53
  },
  {
   "t": 22.25,
   "clock": "16:15",
   "baselineMW": 2.156,
   "pMaxMW": 4.2,
   "pMinMW": 0.3,
   "setpointMW": 2.21,
   "upFlexMW": 2.044,
   "downFlexMW": 1.856,
   "fcrdUpMW": 1.84,
   "fcrdDownMW": 1.67
  },
  {
   "t": 22.5,
   "clock": "16:30",
   "baselineMW": 2.309,
   "pMaxMW": 4.329,
   "pMinMW": 0.389,
   "setpointMW": 0.827,
   "upFlexMW": 2.02,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.82,
   "fcrdDownMW": 1.73
  },
  {
   "t": 22.75,
   "clock": "16:45",
   "baselineMW": 2.454,
   "pMaxMW": 4.453,
   "pMinMW": 0.534,
   "setpointMW": 1.003,
   "upFlexMW": 1.999,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.8,
   "fcrdDownMW": 1.73
  },
  {
   "t": 23,
   "clock": "17:00",
   "baselineMW": 2.588,
   "pMaxMW": 4.57,
   "pMinMW": 0.668,
   "setpointMW": 1.151,
   "upFlexMW": 1.982,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.78,
   "fcrdDownMW": 1.73
  },
  {
   "t": 23.25,
   "clock": "17:15",
   "baselineMW": 2.707,
   "pMaxMW": 4.679,
   "pMinMW": 0.787,
   "setpointMW": 1.243,
   "upFlexMW": 1.971,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.77,
   "fcrdDownMW": 1.73
  },
  {
   "t": 23.5,
   "clock": "17:30",
   "baselineMW": 2.809,
   "pMaxMW": 4.776,
   "pMinMW": 0.889,
   "setpointMW": 1.411,
   "upFlexMW": 1.967,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.77,
   "fcrdDownMW": 1.73
  },
  {
   "t": 23.75,
   "clock": "17:45",
   "baselineMW": 2.891,
   "pMaxMW": 4.859,
   "pMinMW": 0.971,
   "setpointMW": 1.423,
   "upFlexMW": 1.968,
   "downFlexMW": 1.92,
   "fcrdUpMW": 1.77,
   "fcrdDownMW": 1.73
  }
 ],
 "energyEnvelope": [
  {
   "t": 0,
   "clock": "18:00",
   "eLoMWh": 96.26,
   "eHiMWh": 97.26,
   "eSetMWh": 96.39,
   "socPct": 45.9
  },
  {
   "t": 0.25,
   "clock": "18:15",
   "eLoMWh": 96.52,
   "eHiMWh": 98.53,
   "eSetMWh": 97.13,
   "socPct": 46.3
  },
  {
   "t": 0.5,
   "clock": "18:30",
   "eLoMWh": 96.79,
   "eHiMWh": 99.81,
   "eSetMWh": 97.88,
   "socPct": 46.6
  },
  {
   "t": 0.75,
   "clock": "18:45",
   "eLoMWh": 97.06,
   "eHiMWh": 101.09,
   "eSetMWh": 98.63,
   "socPct": 47
  },
  {
   "t": 1,
   "clock": "19:00",
   "eLoMWh": 97.32,
   "eHiMWh": 102.37,
   "eSetMWh": 99.36,
   "socPct": 47.3
  },
  {
   "t": 1.25,
   "clock": "19:15",
   "eLoMWh": 97.56,
   "eHiMWh": 103.63,
   "eSetMWh": 100.07,
   "socPct": 47.7
  },
  {
   "t": 1.5,
   "clock": "19:30",
   "eLoMWh": 97.78,
   "eHiMWh": 104.88,
   "eSetMWh": 100.78,
   "socPct": 48
  },
  {
   "t": 1.75,
   "clock": "19:45",
   "eLoMWh": 97.98,
   "eHiMWh": 106.1,
   "eSetMWh": 101.45,
   "socPct": 48.3
  },
  {
   "t": 2,
   "clock": "20:00",
   "eLoMWh": 98.15,
   "eHiMWh": 107.28,
   "eSetMWh": 102.1,
   "socPct": 48.6
  },
  {
   "t": 2.25,
   "clock": "20:15",
   "eLoMWh": 98.28,
   "eHiMWh": 108.43,
   "eSetMWh": 102.71,
   "socPct": 48.9
  },
  {
   "t": 2.5,
   "clock": "20:30",
   "eLoMWh": 98.38,
   "eHiMWh": 109.54,
   "eSetMWh": 103.27,
   "socPct": 49.2
  },
  {
   "t": 2.75,
   "clock": "20:45",
   "eLoMWh": 98.45,
   "eHiMWh": 110.61,
   "eSetMWh": 103.82,
   "socPct": 49.4
  },
  {
   "t": 3,
   "clock": "21:00",
   "eLoMWh": 98.82,
   "eHiMWh": 111.98,
   "eSetMWh": 104.67,
   "socPct": 49.8
  },
  {
   "t": 3.25,
   "clock": "21:15",
   "eLoMWh": 99.21,
   "eHiMWh": 113.37,
   "eSetMWh": 105.55,
   "socPct": 50.3
  },
  {
   "t": 3.5,
   "clock": "21:30",
   "eLoMWh": 99.62,
   "eHiMWh": 114.76,
   "eSetMWh": 106.43,
   "socPct": 50.7
  },
  {
   "t": 3.75,
   "clock": "21:45",
   "eLoMWh": 100.05,
   "eHiMWh": 116.17,
   "eSetMWh": 107.34,
   "socPct": 51.1
  },
  {
   "t": 4,
   "clock": "22:00",
   "eLoMWh": 100.22,
   "eHiMWh": 117.94,
   "eSetMWh": 108.26,
   "socPct": 51.6
  },
  {
   "t": 4.25,
   "clock": "22:15",
   "eLoMWh": 100.42,
   "eHiMWh": 119.72,
   "eSetMWh": 109.19,
   "socPct": 52
  },
  {
   "t": 4.5,
   "clock": "22:30",
   "eLoMWh": 100.63,
   "eHiMWh": 121.51,
   "eSetMWh": 110.15,
   "socPct": 52.5
  },
  {
   "t": 4.75,
   "clock": "22:45",
   "eLoMWh": 100.86,
   "eHiMWh": 123.32,
   "eSetMWh": 111.14,
   "socPct": 52.9
  },
  {
   "t": 5,
   "clock": "23:00",
   "eLoMWh": 101.11,
   "eHiMWh": 125.16,
   "eSetMWh": 112.16,
   "socPct": 53.4
  },
  {
   "t": 5.25,
   "clock": "23:15",
   "eLoMWh": 101.38,
   "eHiMWh": 127.01,
   "eSetMWh": 113.17,
   "socPct": 53.9
  },
  {
   "t": 5.5,
   "clock": "23:30",
   "eLoMWh": 101.67,
   "eHiMWh": 128.9,
   "eSetMWh": 114.21,
   "socPct": 54.4
  },
  {
   "t": 5.75,
   "clock": "23:45",
   "eLoMWh": 101.97,
   "eHiMWh": 130.8,
   "eSetMWh": 115.27,
   "socPct": 54.9
  },
  {
   "t": 6,
   "clock": "00:00",
   "eLoMWh": 102.37,
   "eHiMWh": 132.82,
   "eSetMWh": 116.42,
   "socPct": 55.4
  },
  {
   "t": 6.25,
   "clock": "00:15",
   "eLoMWh": 102.81,
   "eHiMWh": 134.88,
   "eSetMWh": 117.6,
   "socPct": 56
  },
  {
   "t": 6.5,
   "clock": "00:30",
   "eLoMWh": 103.28,
   "eHiMWh": 136.98,
   "eSetMWh": 118.82,
   "socPct": 56.6
  },
  {
   "t": 6.75,
   "clock": "00:45",
   "eLoMWh": 103.78,
   "eHiMWh": 139.13,
   "eSetMWh": 120.08,
   "socPct": 57.2
  },
  {
   "t": 7,
   "clock": "01:00",
   "eLoMWh": 104.32,
   "eHiMWh": 141.32,
   "eSetMWh": 121.36,
   "socPct": 57.8
  },
  {
   "t": 7.25,
   "clock": "01:15",
   "eLoMWh": 104.89,
   "eHiMWh": 143.55,
   "eSetMWh": 122.68,
   "socPct": 58.4
  },
  {
   "t": 7.5,
   "clock": "01:30",
   "eLoMWh": 105.48,
   "eHiMWh": 145.81,
   "eSetMWh": 124.03,
   "socPct": 59.1
  },
  {
   "t": 7.75,
   "clock": "01:45",
   "eLoMWh": 106.1,
   "eHiMWh": 148.1,
   "eSetMWh": 126.24,
   "socPct": 60.1
  },
  {
   "t": 8,
   "clock": "02:00",
   "eLoMWh": 106.74,
   "eHiMWh": 150.41,
   "eSetMWh": 128.44,
   "socPct": 61.2
  },
  {
   "t": 8.25,
   "clock": "02:15",
   "eLoMWh": 107.39,
   "eHiMWh": 152.72,
   "eSetMWh": 130.67,
   "socPct": 62.2
  },
  {
   "t": 8.5,
   "clock": "02:30",
   "eLoMWh": 108.06,
   "eHiMWh": 155.05,
   "eSetMWh": 132.08,
   "socPct": 62.9
  },
  {
   "t": 8.75,
   "clock": "02:45",
   "eLoMWh": 108.73,
   "eHiMWh": 157.38,
   "eSetMWh": 133.49,
   "socPct": 63.6
  },
  {
   "t": 9,
   "clock": "03:00",
   "eLoMWh": 109.41,
   "eHiMWh": 159.69,
   "eSetMWh": 134.93,
   "socPct": 64.3
  },
  {
   "t": 9.25,
   "clock": "03:15",
   "eLoMWh": 110.08,
   "eHiMWh": 162,
   "eSetMWh": 136.35,
   "socPct": 64.9
  },
  {
   "t": 9.5,
   "clock": "03:30",
   "eLoMWh": 110.74,
   "eHiMWh": 164.29,
   "eSetMWh": 137.77,
   "socPct": 65.6
  },
  {
   "t": 9.75,
   "clock": "03:45",
   "eLoMWh": 111.4,
   "eHiMWh": 166.55,
   "eSetMWh": 139.18,
   "socPct": 66.3
  },
  {
   "t": 10,
   "clock": "04:00",
   "eLoMWh": 112.04,
   "eHiMWh": 168.79,
   "eSetMWh": 140.57,
   "socPct": 66.9
  },
  {
   "t": 10.25,
   "clock": "04:15",
   "eLoMWh": 112.66,
   "eHiMWh": 171,
   "eSetMWh": 141.94,
   "socPct": 67.6
  },
  {
   "t": 10.5,
   "clock": "04:30",
   "eLoMWh": 114.34,
   "eHiMWh": 173.18,
   "eSetMWh": 143.29,
   "socPct": 68.2
  },
  {
   "t": 10.75,
   "clock": "04:45",
   "eLoMWh": 116.52,
   "eHiMWh": 175.33,
   "eSetMWh": 144.61,
   "socPct": 68.9
  },
  {
   "t": 11,
   "clock": "05:00",
   "eLoMWh": 118.67,
   "eHiMWh": 177.45,
   "eSetMWh": 145.89,
   "socPct": 69.5
  },
  {
   "t": 11.25,
   "clock": "05:15",
   "eLoMWh": 120.79,
   "eHiMWh": 179.49,
   "eSetMWh": 147.14,
   "socPct": 70.1
  },
  {
   "t": 11.5,
   "clock": "05:30",
   "eLoMWh": 122.87,
   "eHiMWh": 180,
   "eSetMWh": 148.37,
   "socPct": 70.7
  },
  {
   "t": 11.75,
   "clock": "05:45",
   "eLoMWh": 124.93,
   "eHiMWh": 180.47,
   "eSetMWh": 149.55,
   "socPct": 71.2
  },
  {
   "t": 12,
   "clock": "06:00",
   "eLoMWh": 126.96,
   "eHiMWh": 180.9,
   "eSetMWh": 150.36,
   "socPct": 71.6
  },
  {
   "t": 12.25,
   "clock": "06:15",
   "eLoMWh": 128.61,
   "eHiMWh": 180.98,
   "eSetMWh": 151.12,
   "socPct": 72
  },
  {
   "t": 12.5,
   "clock": "06:30",
   "eLoMWh": 130.23,
   "eHiMWh": 181.05,
   "eSetMWh": 151.84,
   "socPct": 72.3
  },
  {
   "t": 12.75,
   "clock": "06:45",
   "eLoMWh": 131.82,
   "eHiMWh": 181.13,
   "eSetMWh": 152.52,
   "socPct": 72.6
  },
  {
   "t": 13,
   "clock": "07:00",
   "eLoMWh": 133.37,
   "eHiMWh": 181.2,
   "eSetMWh": 153.15,
   "socPct": 72.9
  },
  {
   "t": 13.25,
   "clock": "07:15",
   "eLoMWh": 134.52,
   "eHiMWh": 181.35,
   "eSetMWh": 153.72,
   "socPct": 73.2
  },
  {
   "t": 13.5,
   "clock": "07:30",
   "eLoMWh": 135.64,
   "eHiMWh": 181.45,
   "eSetMWh": 154.26,
   "socPct": 73.5
  },
  {
   "t": 13.75,
   "clock": "07:45",
   "eLoMWh": 136.71,
   "eHiMWh": 181.53,
   "eSetMWh": 154.77,
   "socPct": 73.7
  },
  {
   "t": 14,
   "clock": "08:00",
   "eLoMWh": 137.75,
   "eHiMWh": 181.6,
   "eSetMWh": 155.23,
   "socPct": 73.9
  },
  {
   "t": 14.25,
   "clock": "08:15",
   "eLoMWh": 138.74,
   "eHiMWh": 181.68,
   "eSetMWh": 155.63,
   "socPct": 74.1
  },
  {
   "t": 14.5,
   "clock": "08:30",
   "eLoMWh": 139.69,
   "eHiMWh": 181.75,
   "eSetMWh": 155.99,
   "socPct": 74.3
  },
  {
   "t": 14.75,
   "clock": "08:45",
   "eLoMWh": 140.59,
   "eHiMWh": 181.83,
   "eSetMWh": 156.3,
   "socPct": 74.4
  },
  {
   "t": 15,
   "clock": "09:00",
   "eLoMWh": 141.45,
   "eHiMWh": 181.9,
   "eSetMWh": 156.64,
   "socPct": 74.6
  },
  {
   "t": 15.25,
   "clock": "09:15",
   "eLoMWh": 142.34,
   "eHiMWh": 181.98,
   "eSetMWh": 157,
   "socPct": 74.8
  },
  {
   "t": 15.5,
   "clock": "09:30",
   "eLoMWh": 143.23,
   "eHiMWh": 182.05,
   "eSetMWh": 157.38,
   "socPct": 74.9
  },
  {
   "t": 15.75,
   "clock": "09:45",
   "eLoMWh": 144.13,
   "eHiMWh": 182.13,
   "eSetMWh": 157.78,
   "socPct": 75.1
  },
  {
   "t": 16,
   "clock": "10:00",
   "eLoMWh": 145.04,
   "eHiMWh": 182.2,
   "eSetMWh": 158.17,
   "socPct": 75.3
  },
  {
   "t": 16.25,
   "clock": "10:15",
   "eLoMWh": 145.95,
   "eHiMWh": 182.28,
   "eSetMWh": 158.58,
   "socPct": 75.5
  },
  {
   "t": 16.5,
   "clock": "10:30",
   "eLoMWh": 146.87,
   "eHiMWh": 182.35,
   "eSetMWh": 159.01,
   "socPct": 75.7
  },
  {
   "t": 16.75,
   "clock": "10:45",
   "eLoMWh": 147.8,
   "eHiMWh": 182.43,
   "eSetMWh": 159.44,
   "socPct": 75.9
  },
  {
   "t": 17,
   "clock": "11:00",
   "eLoMWh": 148.73,
   "eHiMWh": 182.5,
   "eSetMWh": 159.88,
   "socPct": 76.1
  },
  {
   "t": 17.25,
   "clock": "11:15",
   "eLoMWh": 149.67,
   "eHiMWh": 182.58,
   "eSetMWh": 160.35,
   "socPct": 76.4
  },
  {
   "t": 17.5,
   "clock": "11:30",
   "eLoMWh": 150.62,
   "eHiMWh": 182.65,
   "eSetMWh": 160.82,
   "socPct": 76.6
  },
  {
   "t": 17.75,
   "clock": "11:45",
   "eLoMWh": 151.57,
   "eHiMWh": 182.73,
   "eSetMWh": 161.28,
   "socPct": 76.8
  },
  {
   "t": 18,
   "clock": "12:00",
   "eLoMWh": 152.54,
   "eHiMWh": 182.8,
   "eSetMWh": 161.76,
   "socPct": 77
  },
  {
   "t": 18.25,
   "clock": "12:15",
   "eLoMWh": 153.51,
   "eHiMWh": 182.88,
   "eSetMWh": 162.24,
   "socPct": 77.3
  },
  {
   "t": 18.5,
   "clock": "12:30",
   "eLoMWh": 154.48,
   "eHiMWh": 182.95,
   "eSetMWh": 162.7,
   "socPct": 77.5
  },
  {
   "t": 18.75,
   "clock": "12:45",
   "eLoMWh": 155.47,
   "eHiMWh": 183.03,
   "eSetMWh": 163.18,
   "socPct": 77.7
  },
  {
   "t": 19,
   "clock": "13:00",
   "eLoMWh": 156.46,
   "eHiMWh": 183.1,
   "eSetMWh": 163.66,
   "socPct": 77.9
  },
  {
   "t": 19.25,
   "clock": "13:15",
   "eLoMWh": 157.45,
   "eHiMWh": 183.18,
   "eSetMWh": 164.14,
   "socPct": 78.2
  },
  {
   "t": 19.5,
   "clock": "13:30",
   "eLoMWh": 158.45,
   "eHiMWh": 183.25,
   "eSetMWh": 164.6,
   "socPct": 78.4
  },
  {
   "t": 19.75,
   "clock": "13:45",
   "eLoMWh": 159.44,
   "eHiMWh": 183.33,
   "eSetMWh": 165.05,
   "socPct": 78.6
  },
  {
   "t": 20,
   "clock": "14:00",
   "eLoMWh": 160.44,
   "eHiMWh": 183.4,
   "eSetMWh": 165.48,
   "socPct": 78.8
  },
  {
   "t": 20.25,
   "clock": "14:15",
   "eLoMWh": 161.42,
   "eHiMWh": 183.48,
   "eSetMWh": 165.91,
   "socPct": 79
  },
  {
   "t": 20.5,
   "clock": "14:30",
   "eLoMWh": 162.41,
   "eHiMWh": 183.55,
   "eSetMWh": 166.34,
   "socPct": 79.2
  },
  {
   "t": 20.75,
   "clock": "14:45",
   "eLoMWh": 163.38,
   "eHiMWh": 183.63,
   "eSetMWh": 166.76,
   "socPct": 79.4
  },
  {
   "t": 21,
   "clock": "15:00",
   "eLoMWh": 164.34,
   "eHiMWh": 183.7,
   "eSetMWh": 167.15,
   "socPct": 79.6
  },
  {
   "t": 21.25,
   "clock": "15:15",
   "eLoMWh": 165.28,
   "eHiMWh": 183.78,
   "eSetMWh": 167.54,
   "socPct": 79.8
  },
  {
   "t": 21.5,
   "clock": "15:30",
   "eLoMWh": 166.2,
   "eHiMWh": 183.85,
   "eSetMWh": 167.91,
   "socPct": 80
  },
  {
   "t": 21.75,
   "clock": "15:45",
   "eLoMWh": 167.11,
   "eHiMWh": 183.93,
   "eSetMWh": 168.27,
   "socPct": 80.1
  },
  {
   "t": 22,
   "clock": "16:00",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 168.79,
   "socPct": 80.4
  },
  {
   "t": 22.25,
   "clock": "16:15",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 169.34,
   "socPct": 80.6
  },
  {
   "t": 22.5,
   "clock": "16:30",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 169.54,
   "socPct": 80.7
  },
  {
   "t": 22.75,
   "clock": "16:45",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 169.8,
   "socPct": 80.9
  },
  {
   "t": 23,
   "clock": "17:00",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 170.08,
   "socPct": 81
  },
  {
   "t": 23.25,
   "clock": "17:15",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 170.39,
   "socPct": 81.1
  },
  {
   "t": 23.5,
   "clock": "17:30",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 170.75,
   "socPct": 81.3
  },
  {
   "t": 23.75,
   "clock": "17:45",
   "eLoMWh": 168,
   "eHiMWh": 184,
   "eSetMWh": 171.1,
   "socPct": 81.5
  }
 ],
 "fleetSummary": {
  "totalEnrolled": 4218,
  "currentlyConnected": 3247,
  "currentlyCharging": 1892,
  "idlePluggedIn": 1128,
  "offline": 971,
  "overridden": 27,
  "aggregatePowerMW": 7.01,
  "maxFlexibilityMW": 8.4
 },
 "socDistribution": [
  {
   "range": "0-10%",
   "count": 42,
   "percentage": 1.3
  },
  {
   "range": "10-20%",
   "count": 128,
   "percentage": 3.9
  },
  {
   "range": "20-30%",
   "count": 385,
   "percentage": 11.9
  },
  {
   "range": "30-40%",
   "count": 512,
   "percentage": 15.8
  },
  {
   "range": "40-50%",
   "count": 298,
   "percentage": 9.2
  },
  {
   "range": "50-60%",
   "count": 215,
   "percentage": 6.6
  },
  {
   "range": "60-70%",
   "count": 248,
   "percentage": 7.6
  },
  {
   "range": "70-80%",
   "count": 425,
   "percentage": 13.1
  },
  {
   "range": "80-90%",
   "count": 589,
   "percentage": 18.1
  },
  {
   "range": "90-100%",
   "count": 405,
   "percentage": 12.5
  }
 ],
 "chargerBrands": [
  {
   "brand": "Easee",
   "count": 1771,
   "percentage": 42,
   "color": "#2DE283"
  },
  {
   "brand": "Zaptec",
   "count": 1308,
   "percentage": 31,
   "color": "#B8A4E3"
  },
  {
   "brand": "Wallbox",
   "count": 633,
   "percentage": 15,
   "color": "#5CEB9F"
  },
  {
   "brand": "ABB",
   "count": 337,
   "percentage": 8,
   "color": "#E8A33D"
  },
  {
   "brand": "Other",
   "count": 169,
   "percentage": 4,
   "color": "#6B7A74"
  }
 ],
 "plugInOutRates": [
  {
   "hour": "00:00",
   "plugIns": 0,
   "plugOuts": 3,
   "netConnected": 3457
  },
  {
   "hour": "00:15",
   "plugIns": 5,
   "plugOuts": 0,
   "netConnected": 3447
  },
  {
   "hour": "00:30",
   "plugIns": 1,
   "plugOuts": 1,
   "netConnected": 3427
  },
  {
   "hour": "00:45",
   "plugIns": 5,
   "plugOuts": 3,
   "netConnected": 3417
  },
  {
   "hour": "01:00",
   "plugIns": 3,
   "plugOuts": 0,
   "netConnected": 3467
  },
  {
   "hour": "01:15",
   "plugIns": 0,
   "plugOuts": 4,
   "netConnected": 3437
  },
  {
   "hour": "01:30",
   "plugIns": 1,
   "plugOuts": 3,
   "netConnected": 3437
  },
  {
   "hour": "01:45",
   "plugIns": 0,
   "plugOuts": 1,
   "netConnected": 3437
  },
  {
   "hour": "02:00",
   "plugIns": 0,
   "plugOuts": 3,
   "netConnected": 3447
  },
  {
   "hour": "02:15",
   "plugIns": 1,
   "plugOuts": 2,
   "netConnected": 3447
  },
  {
   "hour": "02:30",
   "plugIns": 5,
   "plugOuts": 3,
   "netConnected": 3427
  },
  {
   "hour": "02:45",
   "plugIns": 4,
   "plugOuts": 2,
   "netConnected": 3437
  },
  {
   "hour": "03:00",
   "plugIns": 0,
   "plugOuts": 1,
   "netConnected": 3417
  },
  {
   "hour": "03:15",
   "plugIns": 3,
   "plugOuts": 1,
   "netConnected": 3417
  },
  {
   "hour": "03:30",
   "plugIns": 2,
   "plugOuts": 0,
   "netConnected": 3427
  },
  {
   "hour": "03:45",
   "plugIns": 0,
   "plugOuts": 4,
   "netConnected": 3437
  },
  {
   "hour": "04:00",
   "plugIns": 3,
   "plugOuts": 0,
   "netConnected": 3447
  },
  {
   "hour": "04:15",
   "plugIns": 4,
   "plugOuts": 1,
   "netConnected": 3467
  },
  {
   "hour": "04:30",
   "plugIns": 4,
   "plugOuts": 1,
   "netConnected": 3417
  },
  {
   "hour": "04:45",
   "plugIns": 5,
   "plugOuts": 2,
   "netConnected": 3427
  },
  {
   "hour": "05:00",
   "plugIns": 4,
   "plugOuts": 1,
   "netConnected": 3417
  },
  {
   "hour": "05:15",
   "plugIns": 4,
   "plugOuts": 4,
   "netConnected": 3457
  },
  {
   "hour": "05:30",
   "plugIns": 0,
   "plugOuts": 0,
   "netConnected": 3457
  },
  {
   "hour": "05:45",
   "plugIns": 5,
   "plugOuts": 3,
   "netConnected": 3447
  },
  {
   "hour": "06:00",
   "plugIns": 7,
   "plugOuts": 31,
   "netConnected": 3467
  },
  {
   "hour": "06:15",
   "plugIns": 8,
   "plugOuts": 28,
   "netConnected": 3457
  },
  {
   "hour": "06:30",
   "plugIns": 9,
   "plugOuts": 30,
   "netConnected": 3447
  },
  {
   "hour": "06:45",
   "plugIns": 9,
   "plugOuts": 29,
   "netConnected": 3417
  },
  {
   "hour": "07:00",
   "plugIns": 7,
   "plugOuts": 46,
   "netConnected": 3467
  },
  {
   "hour": "07:15",
   "plugIns": 9,
   "plugOuts": 48,
   "netConnected": 3437
  },
  {
   "hour": "07:30",
   "plugIns": 10,
   "plugOuts": 45,
   "netConnected": 3447
  },
  {
   "hour": "07:45",
   "plugIns": 7,
   "plugOuts": 44,
   "netConnected": 3417
  },
  {
   "hour": "08:00",
   "plugIns": 7,
   "plugOuts": 51,
   "netConnected": 2847
  },
  {
   "hour": "08:15",
   "plugIns": 8,
   "plugOuts": 49,
   "netConnected": 2847
  },
  {
   "hour": "08:30",
   "plugIns": 9,
   "plugOuts": 47,
   "netConnected": 2867
  },
  {
   "hour": "08:45",
   "plugIns": 9,
   "plugOuts": 47,
   "netConnected": 2827
  },
  {
   "hour": "09:00",
   "plugIns": 6,
   "plugOuts": 39,
   "netConnected": 2837
  },
  {
   "hour": "09:15",
   "plugIns": 10,
   "plugOuts": 40,
   "netConnected": 2827
  },
  {
   "hour": "09:30",
   "plugIns": 10,
   "plugOuts": 37,
   "netConnected": 2857
  },
  {
   "hour": "09:45",
   "plugIns": 9,
   "plugOuts": 37,
   "netConnected": 2847
  },
  {
   "hour": "10:00",
   "plugIns": 2,
   "plugOuts": 4,
   "netConnected": 2867
  },
  {
   "hour": "10:15",
   "plugIns": 2,
   "plugOuts": 3,
   "netConnected": 2867
  },
  {
   "hour": "10:30",
   "plugIns": 0,
   "plugOuts": 2,
   "netConnected": 2827
  },
  {
   "hour": "10:45",
   "plugIns": 3,
   "plugOuts": 0,
   "netConnected": 2837
  },
  {
   "hour": "11:00",
   "plugIns": 5,
   "plugOuts": 4,
   "netConnected": 2847
  },
  {
   "hour": "11:15",
   "plugIns": 1,
   "plugOuts": 0,
   "netConnected": 2827
  },
  {
   "hour": "11:30",
   "plugIns": 2,
   "plugOuts": 0,
   "netConnected": 2817
  },
  {
   "hour": "11:45",
   "plugIns": 5,
   "plugOuts": 0,
   "netConnected": 2857
  },
  {
   "hour": "12:00",
   "plugIns": 1,
   "plugOuts": 4,
   "netConnected": 2827
  },
  {
   "hour": "12:15",
   "plugIns": 2,
   "plugOuts": 4,
   "netConnected": 2817
  },
  {
   "hour": "12:30",
   "plugIns": 1,
   "plugOuts": 3,
   "netConnected": 2837
  },
  {
   "hour": "12:45",
   "plugIns": 3,
   "plugOuts": 1,
   "netConnected": 2837
  },
  {
   "hour": "13:00",
   "plugIns": 0,
   "plugOuts": 4,
   "netConnected": 2867
  },
  {
   "hour": "13:15",
   "plugIns": 4,
   "plugOuts": 0,
   "netConnected": 2817
  },
  {
   "hour": "13:30",
   "plugIns": 5,
   "plugOuts": 2,
   "netConnected": 2857
  },
  {
   "hour": "13:45",
   "plugIns": 1,
   "plugOuts": 4,
   "netConnected": 2817
  },
  {
   "hour": "14:00",
   "plugIns": 5,
   "plugOuts": 2,
   "netConnected": 2847
  },
  {
   "hour": "14:15",
   "plugIns": 3,
   "plugOuts": 4,
   "netConnected": 2827
  },
  {
   "hour": "14:30",
   "plugIns": 3,
   "plugOuts": 0,
   "netConnected": 2817
  },
  {
   "hour": "14:45",
   "plugIns": 5,
   "plugOuts": 0,
   "netConnected": 2847
  },
  {
   "hour": "15:00",
   "plugIns": 5,
   "plugOuts": 0,
   "netConnected": 2837
  },
  {
   "hour": "15:15",
   "plugIns": 5,
   "plugOuts": 4,
   "netConnected": 2837
  },
  {
   "hour": "15:30",
   "plugIns": 4,
   "plugOuts": 2,
   "netConnected": 2867
  },
  {
   "hour": "15:45",
   "plugIns": 2,
   "plugOuts": 3,
   "netConnected": 2857
  },
  {
   "hour": "16:00",
   "plugIns": 37,
   "plugOuts": 4,
   "netConnected": 2867
  },
  {
   "hour": "16:15",
   "plugIns": 34,
   "plugOuts": 2,
   "netConnected": 2817
  },
  {
   "hour": "16:30",
   "plugIns": 36,
   "plugOuts": 6,
   "netConnected": 2867
  },
  {
   "hour": "16:45",
   "plugIns": 35,
   "plugOuts": 7,
   "netConnected": 2817
  },
  {
   "hour": "17:00",
   "plugIns": 53,
   "plugOuts": 6,
   "netConnected": 3367
  },
  {
   "hour": "17:15",
   "plugIns": 50,
   "plugOuts": 7,
   "netConnected": 3337
  },
  {
   "hour": "17:30",
   "plugIns": 50,
   "plugOuts": 2,
   "netConnected": 3367
  },
  {
   "hour": "17:45",
   "plugIns": 54,
   "plugOuts": 7,
   "netConnected": 3357
  },
  {
   "hour": "18:00",
   "plugIns": 60,
   "plugOuts": 7,
   "netConnected": 3327
  },
  {
   "hour": "18:15",
   "plugIns": 61,
   "plugOuts": 5,
   "netConnected": 3337
  },
  {
   "hour": "18:30",
   "plugIns": 60,
   "plugOuts": 4,
   "netConnected": 3357
  },
  {
   "hour": "18:45",
   "plugIns": 57,
   "plugOuts": 5,
   "netConnected": 3327
  },
  {
   "hour": "19:00",
   "plugIns": 51,
   "plugOuts": 7,
   "netConnected": 3327
  },
  {
   "hour": "19:15",
   "plugIns": 50,
   "plugOuts": 5,
   "netConnected": 3337
  },
  {
   "hour": "19:30",
   "plugIns": 49,
   "plugOuts": 4,
   "netConnected": 3367
  },
  {
   "hour": "19:45",
   "plugIns": 53,
   "plugOuts": 7,
   "netConnected": 3367
  },
  {
   "hour": "20:00",
   "plugIns": 32,
   "plugOuts": 3,
   "netConnected": 3347
  },
  {
   "hour": "20:15",
   "plugIns": 32,
   "plugOuts": 0,
   "netConnected": 3347
  },
  {
   "hour": "20:30",
   "plugIns": 34,
   "plugOuts": 0,
   "netConnected": 3317
  },
  {
   "hour": "20:45",
   "plugIns": 31,
   "plugOuts": 0,
   "netConnected": 3367
  },
  {
   "hour": "21:00",
   "plugIns": 0,
   "plugOuts": 1,
   "netConnected": 3327
  },
  {
   "hour": "21:15",
   "plugIns": 5,
   "plugOuts": 2,
   "netConnected": 3337
  },
  {
   "hour": "21:30",
   "plugIns": 0,
   "plugOuts": 2,
   "netConnected": 3347
  },
  {
   "hour": "21:45",
   "plugIns": 0,
   "plugOuts": 0,
   "netConnected": 3327
  },
  {
   "hour": "22:00",
   "plugIns": 1,
   "plugOuts": 1,
   "netConnected": 3337
  },
  {
   "hour": "22:15",
   "plugIns": 0,
   "plugOuts": 2,
   "netConnected": 3347
  },
  {
   "hour": "22:30",
   "plugIns": 2,
   "plugOuts": 2,
   "netConnected": 3357
  },
  {
   "hour": "22:45",
   "plugIns": 2,
   "plugOuts": 1,
   "netConnected": 3367
  },
  {
   "hour": "23:00",
   "plugIns": 5,
   "plugOuts": 0,
   "netConnected": 3327
  },
  {
   "hour": "23:15",
   "plugIns": 5,
   "plugOuts": 2,
   "netConnected": 3347
  },
  {
   "hour": "23:30",
   "plugIns": 2,
   "plugOuts": 0,
   "netConnected": 3327
  },
  {
   "hour": "23:45",
   "plugIns": 3,
   "plugOuts": 2,
   "netConnected": 3347
  }
 ],
 "marketBids": [
  {
   "id": "BID-001",
   "product": "FCR-D Down",
   "mw": 3,
   "priceEurMWh": 9.5,
   "deliveryStart": "14:00",
   "deliveryEnd": "15:00",
   "status": "Accepted"
  },
  {
   "id": "BID-002",
   "product": "FCR-N",
   "mw": 0.8,
   "priceEurMWh": 25.3,
   "deliveryStart": "14:00",
   "deliveryEnd": "15:00",
   "status": "Accepted"
  },
  {
   "id": "BID-003",
   "product": "mFRR",
   "mw": 1.5,
   "priceEurMWh": 45,
   "deliveryStart": "14:00",
   "deliveryEnd": "14:15",
   "status": "Accepted"
  },
  {
   "id": "BID-004",
   "product": "DA Arbitrage",
   "mw": 0.7,
   "priceEurMWh": 42.3,
   "deliveryStart": "14:00",
   "deliveryEnd": "15:00",
   "status": "Accepted"
  },
  {
   "id": "BID-005",
   "product": "FCR-D Down",
   "mw": 3.2,
   "priceEurMWh": 11.2,
   "deliveryStart": "15:00",
   "deliveryEnd": "16:00",
   "status": "Accepted"
  },
  {
   "id": "BID-006",
   "product": "mFRR",
   "mw": 1.2,
   "priceEurMWh": 52,
   "deliveryStart": "15:00",
   "deliveryEnd": "15:15",
   "status": "Pending"
  },
  {
   "id": "BID-007",
   "product": "FCR-N",
   "mw": 0.6,
   "priceEurMWh": 25.3,
   "deliveryStart": "15:00",
   "deliveryEnd": "16:00",
   "status": "Pending"
  },
  {
   "id": "BID-008",
   "product": "DA Arbitrage",
   "mw": 0.5,
   "priceEurMWh": 48,
   "deliveryStart": "17:00",
   "deliveryEnd": "18:00",
   "status": "Pending"
  },
  {
   "id": "BID-009",
   "product": "FCR-D Down",
   "mw": 2.8,
   "priceEurMWh": 15,
   "deliveryStart": "17:00",
   "deliveryEnd": "18:00",
   "status": "Pending"
  },
  {
   "id": "BID-010",
   "product": "mFRR",
   "mw": 1,
   "priceEurMWh": 38,
   "deliveryStart": "13:00",
   "deliveryEnd": "13:15",
   "status": "Accepted"
  },
  {
   "id": "BID-013",
   "product": "mFRR",
   "mw": 1.8,
   "priceEurMWh": 65,
   "deliveryStart": "10:00",
   "deliveryEnd": "10:15",
   "status": "Rejected"
  },
  {
   "id": "BID-014",
   "product": "DA Arbitrage",
   "mw": 0.9,
   "priceEurMWh": 35,
   "deliveryStart": "08:00",
   "deliveryEnd": "09:00",
   "status": "Expired"
  }
 ],
 "dispatchEvents": [
  {
   "id": "DR-001",
   "type": "FCR-D Activation",
   "product": "FCR-D Down",
   "startTime": "13:42",
   "endTime": "13:47",
   "targetMW": 3,
   "deliveredMW": 2.94,
   "chargersDispatched": 812,
   "chargersResponded": 798,
   "userOptOuts": 3,
   "deliveryStatus": "Full",
   "deliveryPercentage": 98,
   "revenueEur": 47.5
  },
  {
   "id": "DR-002",
   "type": "mFRR Dispatch",
   "product": "mFRR",
   "startTime": "12:15",
   "endTime": "12:30",
   "targetMW": 1.5,
   "deliveredMW": 1.48,
   "chargersDispatched": 405,
   "chargersResponded": 401,
   "userOptOuts": 1,
   "deliveryStatus": "Full",
   "deliveryPercentage": 98.7,
   "revenueEur": 168.75
  },
  {
   "id": "DR-003",
   "type": "Price Spike",
   "product": "DA Arbitrage",
   "startTime": "10:00",
   "endTime": "11:00",
   "targetMW": 0.7,
   "deliveredMW": 0.65,
   "chargersDispatched": 189,
   "chargersResponded": 176,
   "userOptOuts": 5,
   "deliveryStatus": "Partial",
   "deliveryPercentage": 92.9,
   "revenueEur": 45.5
  },
  {
   "id": "DR-004",
   "type": "FCR-D Activation",
   "product": "FCR-D Down",
   "startTime": "08:22",
   "endTime": "08:27",
   "targetMW": 2.5,
   "deliveredMW": 2.5,
   "chargersDispatched": 685,
   "chargersResponded": 685,
   "userOptOuts": 0,
   "deliveryStatus": "Full",
   "deliveryPercentage": 100,
   "revenueEur": 20.83
  },
  {
   "id": "DR-006",
   "type": "Grid Stress",
   "product": "FCR-D Down",
   "startTime": "18:35",
   "endTime": "18:55",
   "targetMW": 3.2,
   "deliveredMW": 2.88,
   "chargersDispatched": 876,
   "chargersResponded": 842,
   "userOptOuts": 12,
   "deliveryStatus": "Partial",
   "deliveryPercentage": 90,
   "revenueEur": 106.67
  }
 ],
 "revenueByProduct": [
  {
   "product": "FCR-D Down",
   "dailyEur": 1845,
   "monthlyEur": 55350,
   "ytdEur": 292140,
   "percentageOfTotal": 47.7,
   "color": "#2DE283"
  },
  {
   "product": "FCR-N",
   "dailyEur": 1218,
   "monthlyEur": 36540,
   "ytdEur": 186420,
   "percentageOfTotal": 30.4,
   "color": "#5CEB9F"
  },
  {
   "product": "mFRR",
   "dailyEur": 742,
   "monthlyEur": 22260,
   "ytdEur": 89520,
   "percentageOfTotal": 14.6,
   "color": "#B8A4E3"
  },
  {
   "product": "aFRR",
   "dailyEur": 185,
   "monthlyEur": 5550,
   "ytdEur": 22140,
   "percentageOfTotal": 3.6,
   "color": "#8E74C9"
  },
  {
   "product": "DA Arbitrage",
   "dailyEur": 228,
   "monthlyEur": 6840,
   "ytdEur": 22627,
   "percentageOfTotal": 3.7,
   "color": "#E8A33D"
  }
 ],
 "dailyRevenue": [
  {
   "date": "Apr 10",
   "FCR-D Down": 1720,
   "FCR-N": 1150,
   "mFRR": 680,
   "aFRR": 165,
   "DA Arbitrage": 195,
   "total": 3910
  },
  {
   "date": "Apr 11",
   "FCR-D Down": 1890,
   "FCR-N": 1280,
   "mFRR": 720,
   "aFRR": 190,
   "DA Arbitrage": 210,
   "total": 4290
  },
  {
   "date": "Apr 12",
   "FCR-D Down": 1650,
   "FCR-N": 1100,
   "mFRR": 610,
   "aFRR": 155,
   "DA Arbitrage": 180,
   "total": 3695
  },
  {
   "date": "Apr 13",
   "FCR-D Down": 2100,
   "FCR-N": 1350,
   "mFRR": 850,
   "aFRR": 210,
   "DA Arbitrage": 275,
   "total": 4785
  },
  {
   "date": "Apr 14",
   "FCR-D Down": 1980,
   "FCR-N": 1290,
   "mFRR": 790,
   "aFRR": 195,
   "DA Arbitrage": 245,
   "total": 4500
  },
  {
   "date": "Apr 15",
   "FCR-D Down": 1760,
   "FCR-N": 1180,
   "mFRR": 710,
   "aFRR": 175,
   "DA Arbitrage": 220,
   "total": 4045
  },
  {
   "date": "Apr 16",
   "FCR-D Down": 1845,
   "FCR-N": 1218,
   "mFRR": 742,
   "aFRR": 185,
   "DA Arbitrage": 228,
   "total": 4218
  }
 ],
 "gridConditions": [
  {
   "hour": "00:00",
   "windMW": 1693,
   "solarMW": 0,
   "nuclearMW": 4361,
   "hydroMW": 2173,
   "thermalMW": 762,
   "consumptionMW": 9335,
   "netImportMW": 346
  },
  {
   "hour": "00:15",
   "windMW": 1740,
   "solarMW": 0,
   "nuclearMW": 4360,
   "hydroMW": 2166,
   "thermalMW": 750,
   "consumptionMW": 9149,
   "netImportMW": 133
  },
  {
   "hour": "00:30",
   "windMW": 1610,
   "solarMW": 0,
   "nuclearMW": 4371,
   "hydroMW": 2228,
   "thermalMW": 818,
   "consumptionMW": 9276,
   "netImportMW": 249
  },
  {
   "hour": "00:45",
   "windMW": 1635,
   "solarMW": 0,
   "nuclearMW": 4371,
   "hydroMW": 2207,
   "thermalMW": 826,
   "consumptionMW": 9155,
   "netImportMW": 116
  },
  {
   "hour": "01:00",
   "windMW": 1772,
   "solarMW": 0,
   "nuclearMW": 4372,
   "hydroMW": 2325,
   "thermalMW": 778,
   "consumptionMW": 9063,
   "netImportMW": 0
  },
  {
   "hour": "01:15",
   "windMW": 1697,
   "solarMW": 0,
   "nuclearMW": 4367,
   "hydroMW": 2355,
   "thermalMW": 815,
   "consumptionMW": 9075,
   "netImportMW": 0
  },
  {
   "hour": "01:30",
   "windMW": 1745,
   "solarMW": 0,
   "nuclearMW": 4398,
   "hydroMW": 2365,
   "thermalMW": 804,
   "consumptionMW": 9233,
   "netImportMW": 0
  },
  {
   "hour": "01:45",
   "windMW": 1718,
   "solarMW": 0,
   "nuclearMW": 4374,
   "hydroMW": 2319,
   "thermalMW": 813,
   "consumptionMW": 9321,
   "netImportMW": 97
  },
  {
   "hour": "02:00",
   "windMW": 1850,
   "solarMW": 0,
   "nuclearMW": 4379,
   "hydroMW": 2403,
   "thermalMW": 774,
   "consumptionMW": 9106,
   "netImportMW": 0
  },
  {
   "hour": "02:15",
   "windMW": 1736,
   "solarMW": 0,
   "nuclearMW": 4395,
   "hydroMW": 2428,
   "thermalMW": 757,
   "consumptionMW": 9159,
   "netImportMW": 0
  },
  {
   "hour": "02:30",
   "windMW": 1746,
   "solarMW": 0,
   "nuclearMW": 4375,
   "hydroMW": 2392,
   "thermalMW": 776,
   "consumptionMW": 9090,
   "netImportMW": 0
  },
  {
   "hour": "02:45",
   "windMW": 1759,
   "solarMW": 0,
   "nuclearMW": 4379,
   "hydroMW": 2452,
   "thermalMW": 843,
   "consumptionMW": 9148,
   "netImportMW": 0
  },
  {
   "hour": "03:00",
   "windMW": 1804,
   "solarMW": 0,
   "nuclearMW": 4383,
   "hydroMW": 2487,
   "thermalMW": 786,
   "consumptionMW": 9119,
   "netImportMW": 0
  },
  {
   "hour": "03:15",
   "windMW": 1827,
   "solarMW": 0,
   "nuclearMW": 4362,
   "hydroMW": 2550,
   "thermalMW": 753,
   "consumptionMW": 9096,
   "netImportMW": 0
  },
  {
   "hour": "03:30",
   "windMW": 1722,
   "solarMW": 0,
   "nuclearMW": 4378,
   "hydroMW": 2541,
   "thermalMW": 845,
   "consumptionMW": 9145,
   "netImportMW": 0
  },
  {
   "hour": "03:45",
   "windMW": 1764,
   "solarMW": 0,
   "nuclearMW": 4382,
   "hydroMW": 2557,
   "thermalMW": 757,
   "consumptionMW": 9123,
   "netImportMW": 0
  },
  {
   "hour": "04:00",
   "windMW": 1740,
   "solarMW": 0,
   "nuclearMW": 4375,
   "hydroMW": 2609,
   "thermalMW": 777,
   "consumptionMW": 9311,
   "netImportMW": 0
  },
  {
   "hour": "04:15",
   "windMW": 1744,
   "solarMW": 0,
   "nuclearMW": 4384,
   "hydroMW": 2587,
   "thermalMW": 813,
   "consumptionMW": 9305,
   "netImportMW": 0
  },
  {
   "hour": "04:30",
   "windMW": 1774,
   "solarMW": 0,
   "nuclearMW": 4376,
   "hydroMW": 2578,
   "thermalMW": 803,
   "consumptionMW": 9194,
   "netImportMW": 0
  },
  {
   "hour": "04:45",
   "windMW": 1709,
   "solarMW": 0,
   "nuclearMW": 4384,
   "hydroMW": 2573,
   "thermalMW": 843,
   "consumptionMW": 9341,
   "netImportMW": 0
  },
  {
   "hour": "05:00",
   "windMW": 1720,
   "solarMW": 0,
   "nuclearMW": 4388,
   "hydroMW": 2604,
   "thermalMW": 786,
   "consumptionMW": 9343,
   "netImportMW": 0
  },
  {
   "hour": "05:15",
   "windMW": 1747,
   "solarMW": 0,
   "nuclearMW": 4382,
   "hydroMW": 2559,
   "thermalMW": 799,
   "consumptionMW": 9228,
   "netImportMW": 0
  },
  {
   "hour": "05:30",
   "windMW": 1759,
   "solarMW": 0,
   "nuclearMW": 4391,
   "hydroMW": 2567,
   "thermalMW": 820,
   "consumptionMW": 9263,
   "netImportMW": 0
  },
  {
   "hour": "05:45",
   "windMW": 1882,
   "solarMW": 0,
   "nuclearMW": 4395,
   "hydroMW": 2584,
   "thermalMW": 793,
   "consumptionMW": 9195,
   "netImportMW": 0
  },
  {
   "hour": "06:00",
   "windMW": 1735,
   "solarMW": 0,
   "nuclearMW": 4372,
   "hydroMW": 2541,
   "thermalMW": 767,
   "consumptionMW": 9333,
   "netImportMW": 0
  },
  {
   "hour": "06:15",
   "windMW": 1720,
   "solarMW": 4,
   "nuclearMW": 4385,
   "hydroMW": 2583,
   "thermalMW": 773,
   "consumptionMW": 9208,
   "netImportMW": 0
  },
  {
   "hour": "06:30",
   "windMW": 1832,
   "solarMW": 14,
   "nuclearMW": 4398,
   "hydroMW": 2630,
   "thermalMW": 770,
   "consumptionMW": 9173,
   "netImportMW": 0
  },
  {
   "hour": "06:45",
   "windMW": 1692,
   "solarMW": 0,
   "nuclearMW": 4365,
   "hydroMW": 2557,
   "thermalMW": 776,
   "consumptionMW": 9108,
   "netImportMW": 0
  },
  {
   "hour": "07:00",
   "windMW": 1660,
   "solarMW": 136,
   "nuclearMW": 4378,
   "hydroMW": 2545,
   "thermalMW": 848,
   "consumptionMW": 10820,
   "netImportMW": 1253
  },
  {
   "hour": "07:15",
   "windMW": 1655,
   "solarMW": 125,
   "nuclearMW": 4379,
   "hydroMW": 2585,
   "thermalMW": 837,
   "consumptionMW": 10849,
   "netImportMW": 1268
  },
  {
   "hour": "07:30",
   "windMW": 1639,
   "solarMW": 139,
   "nuclearMW": 4380,
   "hydroMW": 2592,
   "thermalMW": 837,
   "consumptionMW": 10723,
   "netImportMW": 1136
  },
  {
   "hour": "07:45",
   "windMW": 1751,
   "solarMW": 130,
   "nuclearMW": 4400,
   "hydroMW": 2558,
   "thermalMW": 771,
   "consumptionMW": 10912,
   "netImportMW": 1302
  },
  {
   "hour": "08:00",
   "windMW": 1675,
   "solarMW": 269,
   "nuclearMW": 4394,
   "hydroMW": 2501,
   "thermalMW": 800,
   "consumptionMW": 10653,
   "netImportMW": 1014
  },
  {
   "hour": "08:15",
   "windMW": 1636,
   "solarMW": 260,
   "nuclearMW": 4380,
   "hydroMW": 2497,
   "thermalMW": 836,
   "consumptionMW": 10766,
   "netImportMW": 1157
  },
  {
   "hour": "08:30",
   "windMW": 1675,
   "solarMW": 270,
   "nuclearMW": 4367,
   "hydroMW": 2455,
   "thermalMW": 847,
   "consumptionMW": 10884,
   "netImportMW": 1270
  },
  {
   "hour": "08:45",
   "windMW": 1737,
   "solarMW": 287,
   "nuclearMW": 4368,
   "hydroMW": 2510,
   "thermalMW": 788,
   "consumptionMW": 10860,
   "netImportMW": 1170
  },
  {
   "hour": "09:00",
   "windMW": 1681,
   "solarMW": 423,
   "nuclearMW": 4377,
   "hydroMW": 2346,
   "thermalMW": 773,
   "consumptionMW": 10776,
   "netImportMW": 1176
  },
  {
   "hour": "09:15",
   "windMW": 1547,
   "solarMW": 423,
   "nuclearMW": 4378,
   "hydroMW": 2374,
   "thermalMW": 779,
   "consumptionMW": 10918,
   "netImportMW": 1417
  },
  {
   "hour": "09:30",
   "windMW": 1584,
   "solarMW": 424,
   "nuclearMW": 4399,
   "hydroMW": 2393,
   "thermalMW": 785,
   "consumptionMW": 10731,
   "netImportMW": 1146
  },
  {
   "hour": "09:45",
   "windMW": 1597,
   "solarMW": 393,
   "nuclearMW": 4381,
   "hydroMW": 2383,
   "thermalMW": 801,
   "consumptionMW": 10944,
   "netImportMW": 1389
  },
  {
   "hour": "10:00",
   "windMW": 1653,
   "solarMW": 488,
   "nuclearMW": 4363,
   "hydroMW": 2251,
   "thermalMW": 796,
   "consumptionMW": 10301,
   "netImportMW": 750
  },
  {
   "hour": "10:15",
   "windMW": 1655,
   "solarMW": 521,
   "nuclearMW": 4377,
   "hydroMW": 2260,
   "thermalMW": 780,
   "consumptionMW": 10141,
   "netImportMW": 548
  },
  {
   "hour": "10:30",
   "windMW": 1650,
   "solarMW": 510,
   "nuclearMW": 4392,
   "hydroMW": 2258,
   "thermalMW": 805,
   "consumptionMW": 10204,
   "netImportMW": 589
  },
  {
   "hour": "10:45",
   "windMW": 1642,
   "solarMW": 499,
   "nuclearMW": 4384,
   "hydroMW": 2275,
   "thermalMW": 839,
   "consumptionMW": 10342,
   "netImportMW": 703
  },
  {
   "hour": "11:00",
   "windMW": 1561,
   "solarMW": 567,
   "nuclearMW": 4369,
   "hydroMW": 2180,
   "thermalMW": 753,
   "consumptionMW": 10308,
   "netImportMW": 878
  },
  {
   "hour": "11:15",
   "windMW": 1472,
   "solarMW": 597,
   "nuclearMW": 4384,
   "hydroMW": 2127,
   "thermalMW": 825,
   "consumptionMW": 10169,
   "netImportMW": 764
  },
  {
   "hour": "11:30",
   "windMW": 1465,
   "solarMW": 598,
   "nuclearMW": 4394,
   "hydroMW": 2159,
   "thermalMW": 805,
   "consumptionMW": 10157,
   "netImportMW": 736
  },
  {
   "hour": "11:45",
   "windMW": 1571,
   "solarMW": 581,
   "nuclearMW": 4361,
   "hydroMW": 2135,
   "thermalMW": 757,
   "consumptionMW": 10171,
   "netImportMW": 766
  },
  {
   "hour": "12:00",
   "windMW": 1427,
   "solarMW": 632,
   "nuclearMW": 4377,
   "hydroMW": 2052,
   "thermalMW": 809,
   "consumptionMW": 10112,
   "netImportMW": 815
  },
  {
   "hour": "12:15",
   "windMW": 1343,
   "solarMW": 623,
   "nuclearMW": 4364,
   "hydroMW": 1993,
   "thermalMW": 836,
   "consumptionMW": 10243,
   "netImportMW": 1084
  },
  {
   "hour": "12:30",
   "windMW": 1399,
   "solarMW": 657,
   "nuclearMW": 4362,
   "hydroMW": 2069,
   "thermalMW": 827,
   "consumptionMW": 10336,
   "netImportMW": 1022
  },
  {
   "hour": "12:45",
   "windMW": 1493,
   "solarMW": 636,
   "nuclearMW": 4390,
   "hydroMW": 2019,
   "thermalMW": 807,
   "consumptionMW": 10242,
   "netImportMW": 897
  },
  {
   "hour": "13:00",
   "windMW": 1234,
   "solarMW": 635,
   "nuclearMW": 4395,
   "hydroMW": 1932,
   "thermalMW": 782,
   "consumptionMW": 10330,
   "netImportMW": 1352
  },
  {
   "hour": "13:15",
   "windMW": 1305,
   "solarMW": 659,
   "nuclearMW": 4375,
   "hydroMW": 1892,
   "thermalMW": 760,
   "consumptionMW": 10076,
   "netImportMW": 1085
  },
  {
   "hour": "13:30",
   "windMW": 1401,
   "solarMW": 631,
   "nuclearMW": 4379,
   "hydroMW": 1901,
   "thermalMW": 842,
   "consumptionMW": 10263,
   "netImportMW": 1109
  },
  {
   "hour": "13:45",
   "windMW": 1360,
   "solarMW": 669,
   "nuclearMW": 4396,
   "hydroMW": 1891,
   "thermalMW": 834,
   "consumptionMW": 10088,
   "netImportMW": 938
  },
  {
   "hour": "14:00",
   "windMW": 1186,
   "solarMW": 633,
   "nuclearMW": 4391,
   "hydroMW": 1876,
   "thermalMW": 757,
   "consumptionMW": 10233,
   "netImportMW": 1390
  },
  {
   "hour": "14:15",
   "windMW": 1275,
   "solarMW": 647,
   "nuclearMW": 4395,
   "hydroMW": 1807,
   "thermalMW": 773,
   "consumptionMW": 10258,
   "netImportMW": 1361
  },
  {
   "hour": "14:30",
   "windMW": 1321,
   "solarMW": 653,
   "nuclearMW": 4396,
   "hydroMW": 1868,
   "thermalMW": 757,
   "consumptionMW": 10105,
   "netImportMW": 1110
  },
  {
   "hour": "14:45",
   "windMW": 1323,
   "solarMW": 609,
   "nuclearMW": 4396,
   "hydroMW": 1844,
   "thermalMW": 777,
   "consumptionMW": 10350,
   "netImportMW": 1401
  },
  {
   "hour": "15:00",
   "windMW": 1118,
   "solarMW": 582,
   "nuclearMW": 4366,
   "hydroMW": 1782,
   "thermalMW": 816,
   "consumptionMW": 10236,
   "netImportMW": 1572
  },
  {
   "hour": "15:15",
   "windMW": 1100,
   "solarMW": 594,
   "nuclearMW": 4362,
   "hydroMW": 1822,
   "thermalMW": 811,
   "consumptionMW": 10134,
   "netImportMW": 1445
  },
  {
   "hour": "15:30",
   "windMW": 1045,
   "solarMW": 589,
   "nuclearMW": 4397,
   "hydroMW": 1765,
   "thermalMW": 819,
   "consumptionMW": 10349,
   "netImportMW": 1734
  },
  {
   "hour": "15:45",
   "windMW": 1054,
   "solarMW": 563,
   "nuclearMW": 4391,
   "hydroMW": 1843,
   "thermalMW": 829,
   "consumptionMW": 10076,
   "netImportMW": 1396
  },
  {
   "hour": "16:00",
   "windMW": 987,
   "solarMW": 516,
   "nuclearMW": 4393,
   "hydroMW": 1840,
   "thermalMW": 823,
   "consumptionMW": 10058,
   "netImportMW": 1499
  },
  {
   "hour": "16:15",
   "windMW": 966,
   "solarMW": 509,
   "nuclearMW": 4367,
   "hydroMW": 1851,
   "thermalMW": 758,
   "consumptionMW": 10231,
   "netImportMW": 1780
  },
  {
   "hour": "16:30",
   "windMW": 977,
   "solarMW": 519,
   "nuclearMW": 4386,
   "hydroMW": 1839,
   "thermalMW": 809,
   "consumptionMW": 10068,
   "netImportMW": 1538
  },
  {
   "hour": "16:45",
   "windMW": 1013,
   "solarMW": 490,
   "nuclearMW": 4378,
   "hydroMW": 1846,
   "thermalMW": 798,
   "consumptionMW": 10348,
   "netImportMW": 1823
  },
  {
   "hour": "17:00",
   "windMW": 1058,
   "solarMW": 416,
   "nuclearMW": 4389,
   "hydroMW": 1822,
   "thermalMW": 847,
   "consumptionMW": 11116,
   "netImportMW": 2584
  },
  {
   "hour": "17:15",
   "windMW": 917,
   "solarMW": 400,
   "nuclearMW": 4400,
   "hydroMW": 1803,
   "thermalMW": 823,
   "consumptionMW": 11234,
   "netImportMW": 2891
  },
  {
   "hour": "17:30",
   "windMW": 909,
   "solarMW": 413,
   "nuclearMW": 4377,
   "hydroMW": 1802,
   "thermalMW": 794,
   "consumptionMW": 11241,
   "netImportMW": 2946
  },
  {
   "hour": "17:45",
   "windMW": 901,
   "solarMW": 403,
   "nuclearMW": 4390,
   "hydroMW": 1866,
   "thermalMW": 779,
   "consumptionMW": 11113,
   "netImportMW": 2774
  },
  {
   "hour": "18:00",
   "windMW": 845,
   "solarMW": 257,
   "nuclearMW": 4385,
   "hydroMW": 1930,
   "thermalMW": 808,
   "consumptionMW": 11135,
   "netImportMW": 2910
  },
  {
   "hour": "18:15",
   "windMW": 842,
   "solarMW": 295,
   "nuclearMW": 4388,
   "hydroMW": 1878,
   "thermalMW": 762,
   "consumptionMW": 11120,
   "netImportMW": 2955
  },
  {
   "hour": "18:30",
   "windMW": 909,
   "solarMW": 303,
   "nuclearMW": 4388,
   "hydroMW": 1900,
   "thermalMW": 753,
   "consumptionMW": 11111,
   "netImportMW": 2858
  },
  {
   "hour": "18:45",
   "windMW": 876,
   "solarMW": 294,
   "nuclearMW": 4362,
   "hydroMW": 1896,
   "thermalMW": 838,
   "consumptionMW": 11342,
   "netImportMW": 3076
  },
  {
   "hour": "19:00",
   "windMW": 750,
   "solarMW": 162,
   "nuclearMW": 4399,
   "hydroMW": 1989,
   "thermalMW": 793,
   "consumptionMW": 11260,
   "netImportMW": 3167
  },
  {
   "hour": "19:15",
   "windMW": 877,
   "solarMW": 161,
   "nuclearMW": 4376,
   "hydroMW": 2010,
   "thermalMW": 841,
   "consumptionMW": 11252,
   "netImportMW": 2987
  },
  {
   "hour": "19:30",
   "windMW": 903,
   "solarMW": 139,
   "nuclearMW": 4387,
   "hydroMW": 1994,
   "thermalMW": 803,
   "consumptionMW": 11289,
   "netImportMW": 3063
  },
  {
   "hour": "19:45",
   "windMW": 805,
   "solarMW": 128,
   "nuclearMW": 4385,
   "hydroMW": 1972,
   "thermalMW": 806,
   "consumptionMW": 11237,
   "netImportMW": 3141
  },
  {
   "hour": "20:00",
   "windMW": 808,
   "solarMW": 0,
   "nuclearMW": 4371,
   "hydroMW": 2133,
   "thermalMW": 812,
   "consumptionMW": 11119,
   "netImportMW": 3018
  },
  {
   "hour": "20:15",
   "windMW": 797,
   "solarMW": 15,
   "nuclearMW": 4397,
   "hydroMW": 2122,
   "thermalMW": 754,
   "consumptionMW": 11302,
   "netImportMW": 3217
  },
  {
   "hour": "20:30",
   "windMW": 758,
   "solarMW": 0,
   "nuclearMW": 4396,
   "hydroMW": 2076,
   "thermalMW": 836,
   "consumptionMW": 11092,
   "netImportMW": 3046
  },
  {
   "hour": "20:45",
   "windMW": 836,
   "solarMW": 0,
   "nuclearMW": 4395,
   "hydroMW": 2074,
   "thermalMW": 769,
   "consumptionMW": 11249,
   "netImportMW": 3176
  },
  {
   "hour": "21:00",
   "windMW": 654,
   "solarMW": 0,
   "nuclearMW": 4396,
   "hydroMW": 2256,
   "thermalMW": 752,
   "consumptionMW": 9316,
   "netImportMW": 1258
  },
  {
   "hour": "21:15",
   "windMW": 598,
   "solarMW": 0,
   "nuclearMW": 4375,
   "hydroMW": 2207,
   "thermalMW": 752,
   "consumptionMW": 9072,
   "netImportMW": 1140
  },
  {
   "hour": "21:30",
   "windMW": 719,
   "solarMW": 0,
   "nuclearMW": 4382,
   "hydroMW": 2251,
   "thermalMW": 815,
   "consumptionMW": 9186,
   "netImportMW": 1019
  },
  {
   "hour": "21:45",
   "windMW": 785,
   "solarMW": 0,
   "nuclearMW": 4368,
   "hydroMW": 2203,
   "thermalMW": 829,
   "consumptionMW": 9187,
   "netImportMW": 1002
  },
  {
   "hour": "22:00",
   "windMW": 616,
   "solarMW": 0,
   "nuclearMW": 4370,
   "hydroMW": 2307,
   "thermalMW": 837,
   "consumptionMW": 9285,
   "netImportMW": 1155
  },
  {
   "hour": "22:15",
   "windMW": 579,
   "solarMW": 0,
   "nuclearMW": 4389,
   "hydroMW": 2371,
   "thermalMW": 820,
   "consumptionMW": 9308,
   "netImportMW": 1149
  },
  {
   "hour": "22:30",
   "windMW": 561,
   "solarMW": 0,
   "nuclearMW": 4380,
   "hydroMW": 2326,
   "thermalMW": 810,
   "consumptionMW": 9098,
   "netImportMW": 1021
  },
  {
   "hour": "22:45",
   "windMW": 692,
   "solarMW": 0,
   "nuclearMW": 4382,
   "hydroMW": 2277,
   "thermalMW": 815,
   "consumptionMW": 9208,
   "netImportMW": 1042
  },
  {
   "hour": "23:00",
   "windMW": 628,
   "solarMW": 0,
   "nuclearMW": 4370,
   "hydroMW": 2409,
   "thermalMW": 844,
   "consumptionMW": 9217,
   "netImportMW": 966
  },
  {
   "hour": "23:15",
   "windMW": 697,
   "solarMW": 0,
   "nuclearMW": 4372,
   "hydroMW": 2387,
   "thermalMW": 761,
   "consumptionMW": 9094,
   "netImportMW": 877
  },
  {
   "hour": "23:30",
   "windMW": 584,
   "solarMW": 0,
   "nuclearMW": 4395,
   "hydroMW": 2455,
   "thermalMW": 793,
   "consumptionMW": 9108,
   "netImportMW": 881
  },
  {
   "hour": "23:45",
   "windMW": 611,
   "solarMW": 0,
   "nuclearMW": 4389,
   "hydroMW": 2443,
   "thermalMW": 766,
   "consumptionMW": 9208,
   "netImportMW": 999
  }
 ],
 "tradingSpotPrices": [
  {
   "hour": "00:00",
   "priceEurMWh": 26.42,
   "upRegulationEurMWh": 38.1,
   "downRegulationEurMWh": 21.48
  },
  {
   "hour": "00:15",
   "priceEurMWh": 25.92,
   "upRegulationEurMWh": 40.52,
   "downRegulationEurMWh": 16.18
  },
  {
   "hour": "00:30",
   "priceEurMWh": 30.54,
   "upRegulationEurMWh": 44.87,
   "downRegulationEurMWh": 22.03
  },
  {
   "hour": "00:45",
   "priceEurMWh": 28.07,
   "upRegulationEurMWh": 41.39,
   "downRegulationEurMWh": 14.79
  },
  {
   "hour": "01:00",
   "priceEurMWh": 30.39,
   "upRegulationEurMWh": 38.21,
   "downRegulationEurMWh": 25.77
  },
  {
   "hour": "01:15",
   "priceEurMWh": 26.72,
   "upRegulationEurMWh": 32.34,
   "downRegulationEurMWh": 14.76
  },
  {
   "hour": "01:30",
   "priceEurMWh": 30.76,
   "upRegulationEurMWh": 38.35,
   "downRegulationEurMWh": 20.87
  },
  {
   "hour": "01:45",
   "priceEurMWh": 26.55,
   "upRegulationEurMWh": 37.74,
   "downRegulationEurMWh": 22.36
  },
  {
   "hour": "02:00",
   "priceEurMWh": 32.87,
   "upRegulationEurMWh": 42.71,
   "downRegulationEurMWh": 20.48
  },
  {
   "hour": "02:15",
   "priceEurMWh": 26.94,
   "upRegulationEurMWh": 31.56,
   "downRegulationEurMWh": 22.59
  },
  {
   "hour": "02:30",
   "priceEurMWh": 30.44,
   "upRegulationEurMWh": 45.42,
   "downRegulationEurMWh": 20.81
  },
  {
   "hour": "02:45",
   "priceEurMWh": 27.97,
   "upRegulationEurMWh": 29.96,
   "downRegulationEurMWh": 19.95
  },
  {
   "hour": "03:00",
   "priceEurMWh": 35.35,
   "upRegulationEurMWh": 40.86,
   "downRegulationEurMWh": 21.08
  },
  {
   "hour": "03:15",
   "priceEurMWh": 34.37,
   "upRegulationEurMWh": 40.94,
   "downRegulationEurMWh": 25.03
  },
  {
   "hour": "03:30",
   "priceEurMWh": 35.46,
   "upRegulationEurMWh": 52.12,
   "downRegulationEurMWh": 23.42
  },
  {
   "hour": "03:45",
   "priceEurMWh": 29.15,
   "upRegulationEurMWh": 43.33,
   "downRegulationEurMWh": 15.72
  },
  {
   "hour": "04:00",
   "priceEurMWh": 29.99,
   "upRegulationEurMWh": 42.07,
   "downRegulationEurMWh": 16.22
  },
  {
   "hour": "04:15",
   "priceEurMWh": 33.9,
   "upRegulationEurMWh": 45.65,
   "downRegulationEurMWh": 24.61
  },
  {
   "hour": "04:30",
   "priceEurMWh": 36.41,
   "upRegulationEurMWh": 52.72,
   "downRegulationEurMWh": 22.58
  },
  {
   "hour": "04:45",
   "priceEurMWh": 30.96,
   "upRegulationEurMWh": 39.91,
   "downRegulationEurMWh": 18.91
  },
  {
   "hour": "05:00",
   "priceEurMWh": 36.4,
   "upRegulationEurMWh": 44.56,
   "downRegulationEurMWh": 26.67
  },
  {
   "hour": "05:15",
   "priceEurMWh": 32.05,
   "upRegulationEurMWh": 39.93,
   "downRegulationEurMWh": 19.36
  },
  {
   "hour": "05:30",
   "priceEurMWh": 32.73,
   "upRegulationEurMWh": 37.94,
   "downRegulationEurMWh": 26.1
  },
  {
   "hour": "05:45",
   "priceEurMWh": 33.82,
   "upRegulationEurMWh": 44.94,
   "downRegulationEurMWh": 22.64
  },
  {
   "hour": "06:00",
   "priceEurMWh": 30.45,
   "upRegulationEurMWh": 42.32,
   "downRegulationEurMWh": 24.27
  },
  {
   "hour": "06:15",
   "priceEurMWh": 30.79,
   "upRegulationEurMWh": 41.79,
   "downRegulationEurMWh": 21.92
  },
  {
   "hour": "06:30",
   "priceEurMWh": 30.59,
   "upRegulationEurMWh": 43.58,
   "downRegulationEurMWh": 25.71
  },
  {
   "hour": "06:45",
   "priceEurMWh": 30.76,
   "upRegulationEurMWh": 43.42,
   "downRegulationEurMWh": 26.04
  },
  {
   "hour": "07:00",
   "priceEurMWh": 58.33,
   "upRegulationEurMWh": 81.7,
   "downRegulationEurMWh": 41.16
  },
  {
   "hour": "07:15",
   "priceEurMWh": 59.84,
   "upRegulationEurMWh": 75.34,
   "downRegulationEurMWh": 39.58
  },
  {
   "hour": "07:30",
   "priceEurMWh": 62.98,
   "upRegulationEurMWh": 85.29,
   "downRegulationEurMWh": 41.94
  },
  {
   "hour": "07:45",
   "priceEurMWh": 60.02,
   "upRegulationEurMWh": 71.32,
   "downRegulationEurMWh": 47.01
  },
  {
   "hour": "08:00",
   "priceEurMWh": 79.79,
   "upRegulationEurMWh": 105.08,
   "downRegulationEurMWh": 60.49
  },
  {
   "hour": "08:15",
   "priceEurMWh": 78.6,
   "upRegulationEurMWh": 101.15,
   "downRegulationEurMWh": 59.62
  },
  {
   "hour": "08:30",
   "priceEurMWh": 72.84,
   "upRegulationEurMWh": 99.87,
   "downRegulationEurMWh": 51.38
  },
  {
   "hour": "08:45",
   "priceEurMWh": 77.02,
   "upRegulationEurMWh": 104.21,
   "downRegulationEurMWh": 57.4
  },
  {
   "hour": "09:00",
   "priceEurMWh": 68.3,
   "upRegulationEurMWh": 86.57,
   "downRegulationEurMWh": 46.61
  },
  {
   "hour": "09:15",
   "priceEurMWh": 70.63,
   "upRegulationEurMWh": 95.14,
   "downRegulationEurMWh": 52.38
  },
  {
   "hour": "09:30",
   "priceEurMWh": 74.52,
   "upRegulationEurMWh": 102.99,
   "downRegulationEurMWh": 51.79
  },
  {
   "hour": "09:45",
   "priceEurMWh": 72.48,
   "upRegulationEurMWh": 93.63,
   "downRegulationEurMWh": 54.24
  },
  {
   "hour": "10:00",
   "priceEurMWh": 41.93,
   "upRegulationEurMWh": 52.97,
   "downRegulationEurMWh": 25.6
  },
  {
   "hour": "10:15",
   "priceEurMWh": 41.93,
   "upRegulationEurMWh": 58.77,
   "downRegulationEurMWh": 30.22
  },
  {
   "hour": "10:30",
   "priceEurMWh": 38.48,
   "upRegulationEurMWh": 46.63,
   "downRegulationEurMWh": 26.75
  },
  {
   "hour": "10:45",
   "priceEurMWh": 44.09,
   "upRegulationEurMWh": 58.68,
   "downRegulationEurMWh": 29.4
  },
  {
   "hour": "11:00",
   "priceEurMWh": 41.55,
   "upRegulationEurMWh": 57.28,
   "downRegulationEurMWh": 32
  },
  {
   "hour": "11:15",
   "priceEurMWh": 44.2,
   "upRegulationEurMWh": 60.13,
   "downRegulationEurMWh": 27.88
  },
  {
   "hour": "11:30",
   "priceEurMWh": 48.99,
   "upRegulationEurMWh": 63.72,
   "downRegulationEurMWh": 29.67
  },
  {
   "hour": "11:45",
   "priceEurMWh": 43.34,
   "upRegulationEurMWh": 52.67,
   "downRegulationEurMWh": 35.07
  },
  {
   "hour": "12:00",
   "priceEurMWh": 49.14,
   "upRegulationEurMWh": 71.24,
   "downRegulationEurMWh": 35.28
  },
  {
   "hour": "12:15",
   "priceEurMWh": 49.86,
   "upRegulationEurMWh": 58.45,
   "downRegulationEurMWh": 36.72
  },
  {
   "hour": "12:30",
   "priceEurMWh": 49.12,
   "upRegulationEurMWh": 64.45,
   "downRegulationEurMWh": 30.93
  },
  {
   "hour": "12:45",
   "priceEurMWh": 51.1,
   "upRegulationEurMWh": 59.83,
   "downRegulationEurMWh": 39.75
  },
  {
   "hour": "13:00",
   "priceEurMWh": 46.85,
   "upRegulationEurMWh": 57.55,
   "downRegulationEurMWh": 35.14
  },
  {
   "hour": "13:15",
   "priceEurMWh": 48.38,
   "upRegulationEurMWh": 65.1,
   "downRegulationEurMWh": 29.22
  },
  {
   "hour": "13:30",
   "priceEurMWh": 45.56,
   "upRegulationEurMWh": 56.89,
   "downRegulationEurMWh": 35.4
  },
  {
   "hour": "13:45",
   "priceEurMWh": 49.48,
   "upRegulationEurMWh": 68.87,
   "downRegulationEurMWh": 31.6
  },
  {
   "hour": "14:00",
   "priceEurMWh": 52.62,
   "upRegulationEurMWh": 75.18,
   "downRegulationEurMWh": 35.37
  },
  {
   "hour": "14:15",
   "priceEurMWh": 49.23,
   "upRegulationEurMWh": 61.52,
   "downRegulationEurMWh": 31.7
  },
  {
   "hour": "14:30",
   "priceEurMWh": 51.67,
   "upRegulationEurMWh": 69.44,
   "downRegulationEurMWh": 39.15
  },
  {
   "hour": "14:45",
   "priceEurMWh": 51.3,
   "upRegulationEurMWh": 62.43,
   "downRegulationEurMWh": 40.13
  },
  {
   "hour": "15:00",
   "priceEurMWh": 46.94,
   "upRegulationEurMWh": 63.51,
   "downRegulationEurMWh": 30.71
  },
  {
   "hour": "15:15",
   "priceEurMWh": 52.34,
   "upRegulationEurMWh": 71.93,
   "downRegulationEurMWh": 36.2
  },
  {
   "hour": "15:30",
   "priceEurMWh": 46.16,
   "upRegulationEurMWh": 52.97,
   "downRegulationEurMWh": 35.33
  },
  {
   "hour": "15:45",
   "priceEurMWh": 49.25,
   "upRegulationEurMWh": 69.15,
   "downRegulationEurMWh": 36.71
  },
  {
   "hour": "16:00",
   "priceEurMWh": 47.3,
   "upRegulationEurMWh": 63.45,
   "downRegulationEurMWh": 30.43
  },
  {
   "hour": "16:15",
   "priceEurMWh": 43.82,
   "upRegulationEurMWh": 54.81,
   "downRegulationEurMWh": 27.67
  },
  {
   "hour": "16:30",
   "priceEurMWh": 46.12,
   "upRegulationEurMWh": 63.18,
   "downRegulationEurMWh": 35.69
  },
  {
   "hour": "16:45",
   "priceEurMWh": 49.67,
   "upRegulationEurMWh": 65.29,
   "downRegulationEurMWh": 38.93
  },
  {
   "hour": "17:00",
   "priceEurMWh": 75.93,
   "upRegulationEurMWh": 99.95,
   "downRegulationEurMWh": 51.31
  },
  {
   "hour": "17:15",
   "priceEurMWh": 73.4,
   "upRegulationEurMWh": 98.44,
   "downRegulationEurMWh": 54.02
  },
  {
   "hour": "17:30",
   "priceEurMWh": 70.45,
   "upRegulationEurMWh": 91.27,
   "downRegulationEurMWh": 53.81
  },
  {
   "hour": "17:45",
   "priceEurMWh": 68.64,
   "upRegulationEurMWh": 88.37,
   "downRegulationEurMWh": 49.24
  },
  {
   "hour": "18:00",
   "priceEurMWh": 93.69,
   "upRegulationEurMWh": 115.72,
   "downRegulationEurMWh": 64.24
  },
  {
   "hour": "18:15",
   "priceEurMWh": 90.44,
   "upRegulationEurMWh": 113.98,
   "downRegulationEurMWh": 60.74
  },
  {
   "hour": "18:30",
   "priceEurMWh": 93.56,
   "upRegulationEurMWh": 118.28,
   "downRegulationEurMWh": 61.02
  },
  {
   "hour": "18:45",
   "priceEurMWh": 91.38,
   "upRegulationEurMWh": 112.22,
   "downRegulationEurMWh": 68.46
  },
  {
   "hour": "19:00",
   "priceEurMWh": 100.79,
   "upRegulationEurMWh": 132.41,
   "downRegulationEurMWh": 73.35
  },
  {
   "hour": "19:15",
   "priceEurMWh": 99.84,
   "upRegulationEurMWh": 125.91,
   "downRegulationEurMWh": 74.77
  },
  {
   "hour": "19:30",
   "priceEurMWh": 96.46,
   "upRegulationEurMWh": 132.36,
   "downRegulationEurMWh": 67.36
  },
  {
   "hour": "19:45",
   "priceEurMWh": 97.6,
   "upRegulationEurMWh": 130.82,
   "downRegulationEurMWh": 72.15
  },
  {
   "hour": "20:00",
   "priceEurMWh": 86.94,
   "upRegulationEurMWh": 118.71,
   "downRegulationEurMWh": 61.84
  },
  {
   "hour": "20:15",
   "priceEurMWh": 89.05,
   "upRegulationEurMWh": 121.77,
   "downRegulationEurMWh": 57.57
  },
  {
   "hour": "20:30",
   "priceEurMWh": 92.65,
   "upRegulationEurMWh": 115.69,
   "downRegulationEurMWh": 59.92
  },
  {
   "hour": "20:45",
   "priceEurMWh": 88.79,
   "upRegulationEurMWh": 109.39,
   "downRegulationEurMWh": 63.66
  },
  {
   "hour": "21:00",
   "priceEurMWh": 31.7,
   "upRegulationEurMWh": 45.63,
   "downRegulationEurMWh": 20.5
  },
  {
   "hour": "21:15",
   "priceEurMWh": 24.58,
   "upRegulationEurMWh": 28.93,
   "downRegulationEurMWh": 18.86
  },
  {
   "hour": "21:30",
   "priceEurMWh": 31.42,
   "upRegulationEurMWh": 41.56,
   "downRegulationEurMWh": 19.89
  },
  {
   "hour": "21:45",
   "priceEurMWh": 31.4,
   "upRegulationEurMWh": 35.68,
   "downRegulationEurMWh": 25.73
  },
  {
   "hour": "22:00",
   "priceEurMWh": 25.67,
   "upRegulationEurMWh": 27.88,
   "downRegulationEurMWh": 22.78
  },
  {
   "hour": "22:15",
   "priceEurMWh": 30.5,
   "upRegulationEurMWh": 46.17,
   "downRegulationEurMWh": 26.22
  },
  {
   "hour": "22:30",
   "priceEurMWh": 32.37,
   "upRegulationEurMWh": 39.66,
   "downRegulationEurMWh": 25.74
  },
  {
   "hour": "22:45",
   "priceEurMWh": 28.18,
   "upRegulationEurMWh": 29.54,
   "downRegulationEurMWh": 23.86
  },
  {
   "hour": "23:00",
   "priceEurMWh": 30.97,
   "upRegulationEurMWh": 41.32,
   "downRegulationEurMWh": 21.45
  },
  {
   "hour": "23:15",
   "priceEurMWh": 28.91,
   "upRegulationEurMWh": 34.5,
   "downRegulationEurMWh": 24.29
  },
  {
   "hour": "23:30",
   "priceEurMWh": 33.09,
   "upRegulationEurMWh": 44.47,
   "downRegulationEurMWh": 26.05
  },
  {
   "hour": "23:45",
   "priceEurMWh": 28.5,
   "upRegulationEurMWh": 43.43,
   "downRegulationEurMWh": 21.76
  }
 ],
 "consumerHourlyEurMwh": [
  22,
  18,
  15,
  14,
  16,
  21,
  48,
  72,
  85,
  65,
  58,
  52,
  48,
  45,
  50,
  68,
  95,
  142,
  185,
  120,
  78,
  55,
  38,
  28,
  20,
  16,
  12,
  11,
  14,
  19,
  42,
  68,
  78,
  60,
  54,
  49,
  46,
  44,
  52,
  75,
  110,
  350,
  165,
  105,
  72,
  50,
  35,
  25
 ],
 "gridStressIndex": {
  "value": 34,
  "level": "Moderate",
  "supplyMargin": 28,
  "priceSignal": 42,
  "renewableRisk": 35,
  "imbalanceSignal": 31
 },
 "forecastAccuracy": {
  "maeP50": 0.42,
  "coverageP90": 94.2,
  "biasDirection": "Over"
 },
 "portfolioSummary": {
  "totalCommittedMW": 5.2,
  "totalUncommittedMW": 3.2,
  "totalAvailableMW": 8.4,
  "dailyRevenueEur": 4218,
  "mtdRevenueEur": 58420,
  "ytdRevenueEur": 612847,
  "annualizedEur": 746130,
  "deliverySuccessRate": 96.2,
  "eventsToday": 7,
  "totalOptOuts": 14,
  "optOutRate": 0.4,
  "dispatchRevenueToday": 2841,
  "currentFrequencyHz": 50.02
 },
 "frequencyTrace": [
  49.9947,
  49.998,
  49.9976,
  49.9984,
  50.0016,
  49.9959,
  50.002,
  50.0025,
  49.9973,
  49.9963,
  50.0006,
  50.002,
  49.9984,
  50.0038,
  49.9983,
  49.9958,
  49.9972,
  49.9965,
  49.9969,
  49.9941,
  49.9927,
  49.9903,
  49.9903,
  49.9894,
  49.9866,
  49.9852,
  49.9909,
  49.99,
  49.9893,
  49.9847,
  49.9908,
  49.99,
  49.9905,
  49.9938,
  49.9934,
  49.9936,
  49.9927,
  49.9941,
  49.9966,
  49.9955,
  50.0016,
  49.9993,
  49.9971,
  49.9916,
  49.9896,
  49.9941,
  49.9905,
  49.989,
  49.9855,
  49.9906,
  49.9882,
  49.9912,
  49.9958,
  49.9904,
  49.9921,
  49.9876,
  49.9915,
  49.9889,
  49.9947,
  49.9994,
  50.0041,
  50.0016,
  49.9965,
  49.999,
  50.003,
  50.0059,
  50.0105,
  50.0078,
  50.0052,
  50.0032,
  50.0009,
  49.9986,
  49.9988,
  49.9988,
  49.999,
  49.9958,
  49.9963,
  50.0008,
  49.9972,
  50.0006,
  49.9987,
  49.9997,
  49.9984,
  50.0017,
  49.9963,
  49.9935,
  49.9982,
  50.0031,
  50.0086,
  50.0116,
  50.0123,
  50.0134,
  50.0134,
  50.0088,
  50.0071,
  50.0082,
  50.0115,
  50.0168,
  50.0166,
  50.0165,
  50.0119,
  50.017,
  50.0175,
  50.0136,
  50.0086,
  50.0116,
  50.0111,
  50.0159,
  50.0098,
  50.0066,
  50.0063,
  50.0097,
  50.0108,
  50.0094,
  50.0135,
  50.0075,
  50.0058,
  50.0014,
  50.0025,
  50.0001,
  49.997,
  50.0018,
  50.0029,
  50.0046,
  50.0051,
  50.0087,
  50.0054,
  50.0105,
  50.0104,
  50.0083,
  50.0102,
  50.01,
  50.0095,
  50.0072,
  50.01,
  50.0101,
  50.0144,
  50.0159,
  50.0128,
  50.0118,
  50.007,
  50.0105,
  50.0096,
  50.0067,
  50.004,
  50.0024,
  50.0013,
  49.9987,
  49.9969,
  49.9971,
  49.9929,
  49.9936,
  49.9915,
  49.9928,
  49.993,
  49.9903,
  49.9916,
  49.9905,
  49.9876,
  49.9836,
  49.9847,
  49.9809,
  49.9849,
  49.9816,
  49.9773,
  49.9799,
  49.9811,
  49.9879,
  49.9839,
  49.9805,
  49.9815,
  49.9851,
  49.9813,
  49.9844,
  49.989,
  49.9956,
  49.9989,
  50.0015,
  49.9966,
  49.9933,
  49.9967,
  49.9957,
  49.9938,
  49.9937,
  49.9939,
  49.9896,
  49.993,
  49.9992,
  50.0013,
  49.9997,
  50.0008,
  50.0035,
  50.0026,
  50.0068,
  50.011,
  50.0102,
  50.0087,
  50.0098,
  50.0144,
  50.0155,
  50.0114,
  50.0126,
  50.0154,
  50.0143,
  50.0164,
  50.0188,
  50.0237,
  50.0204,
  50.0143,
  50.0179,
  50.0136,
  50.0095,
  50.0118,
  50.0065,
  50.0077,
  50.0098,
  50.0152,
  50.0167,
  50.0151,
  50.0151,
  50.0175,
  50.0162,
  50.0118,
  50.0085,
  50.0026,
  50.0072,
  50.0114,
  50.0088,
  50.0085,
  50.0087,
  50.0047,
  50.0091,
  50.0101,
  50.0143,
  50.0151,
  50.0156,
  50.015,
  50.0125,
  50.0165,
  50.0147,
  50.019,
  50.0221,
  50.0175,
  50.0168,
  50.0186,
  50.0228,
  50.0276,
  50.0211,
  50.0237,
  50.017,
  50.0128,
  50.0161,
  50.0204,
  50.0141,
  50.0166,
  50.0176,
  50.0122,
  50.0135,
  50.0169,
  50.0218,
  50.0242,
  50.0253,
  50.0232,
  50.0177,
  50.0206,
  50.0151,
  50.0162,
  50.0185,
  50.0145,
  50.0156,
  50.0122,
  50.0092,
  50.0083,
  50.0053,
  50.004,
  50.0054,
  50.0018,
  49.9973,
  49.9986,
  50.0013,
  49.9985,
  49.9991,
  50.0018,
  50.0056,
  50.0098,
  50.0108,
  50.0045,
  50.0008,
  49.9996,
  49.9942,
  49.999,
  49.9993,
  49.9976,
  49.9979,
  49.9981,
  49.9951,
  50.0009,
  50.002,
  50.0007,
  50.0066,
  50.0122,
  50.0126,
  50.016,
  50.0128,
  50.0122,
  50.0159,
  50.0135,
  50.0148,
  50.0179,
  50.0181,
  50.0199,
  50.0155,
  50.0105,
  50.0068,
  50.0051,
  50.0079,
  50.0093,
  50.0116,
  50.0153,
  50.0138,
  50.0108,
  50.0152,
  50.0134,
  50.0122,
  50.006,
  50.0059,
  50.0022,
  49.9975,
  49.9982,
  50.0028,
  50.0059,
  50.0053,
  50.0078,
  50.0133,
  50.0109,
  50.0159,
  50.0107,
  50.0141,
  50.0118,
  50.0059,
  50.0017,
  50.0046,
  49.9984,
  50.0027,
  50.0045,
  50.0044,
  50.0054,
  50.011,
  50.0098,
  50.006,
  50.011,
  50.0137,
  50.0128,
  50.0125,
  50.0094,
  50.0039,
  50.0052,
  50,
  49.9972,
  49.9987,
  49.9958,
  49.9905,
  49.9852,
  49.9897,
  49.9872,
  49.9898,
  49.9921,
  49.9962,
  49.993,
  49.9933,
  49.9984,
  49.9993,
  50.003,
  50.0036,
  50.0069,
  50.0019,
  50.0006,
  49.9949,
  49.9991,
  49.9997,
  49.994,
  49.9943,
  49.9999,
  49.9967,
  49.9918,
  49.9922,
  49.9951,
  49.9938,
  49.9934,
  49.9959,
  49.9987,
  50.0004,
  50.0037,
  50.0039,
  50.0053,
  50.0028,
  49.997,
  50.0031,
  49.997,
  50.0007,
  50.0042,
  49.9987,
  49.9971,
  50.0001,
  49.9947,
  49.989,
  49.9927,
  49.9925,
  49.9918,
  49.9978,
  49.9921,
  49.9937,
  49.9987,
  49.9956,
  49.9902,
  49.9962,
  49.9933,
  49.9965,
  49.9962,
  49.9924,
  49.9984,
  49.993,
  49.9926,
  49.9914,
  49.9955,
  50.0008,
  50.0031,
  50.0068,
  50.0076,
  50.0049,
  50.0067,
  50.0015,
  49.9978,
  49.9962,
  49.9964,
  50.0026,
  50.0044,
  50.0039,
  49.9989,
  49.9999,
  49.9947,
  49.9982,
  50.0023,
  49.9967,
  49.9944,
  49.9924,
  49.9885,
  49.9882,
  49.992,
  49.9935,
  49.9938,
  49.9904,
  49.9926,
  49.9882,
  49.9937,
  49.9996,
  49.9998,
  50.0009,
  49.9999,
  49.9964,
  49.9939,
  49.9937,
  49.997,
  49.9991,
  49.9993,
  50.0047,
  49.9996,
  49.9981,
  49.9926,
  49.995,
  49.9911,
  49.9865,
  49.9833,
  49.9898,
  49.9891,
  49.9893,
  49.9854,
  49.9826,
  49.9887,
  49.9895,
  49.9954,
  49.9962,
  50.0022,
  50.0055,
  50.0095,
  50.0116,
  50.0098,
  50.0149,
  50.0175,
  50.0175,
  50.0179,
  50.0212,
  50.017,
  50.0166,
  50.0115,
  50.0129,
  50.0129,
  50.0118,
  50.0122,
  50.0137,
  50.0152,
  50.0198,
  50.0173,
  50.0154,
  50.0192,
  50.0239,
  50.0282,
  50.0319,
  50.0323,
  50.0347,
  50.0272,
  50.0315,
  50.0356,
  50.0309,
  50.0331,
  50.0294,
  50.0259,
  50.024,
  50.0202,
  50.0241,
  50.0187,
  50.0142,
  50.0182,
  50.0125,
  50.0099,
  50.0039,
  50.0031,
  49.9999,
  49.9975,
  49.9943,
  49.9894,
  49.9896,
  49.9915,
  49.9949,
  49.9954,
  49.9966,
  50.0025,
  50.0011,
  49.9988,
  49.9951,
  49.9912,
  49.9956,
  49.9986,
  50.0031,
  50.002,
  49.9962,
  49.999,
  50.0002,
  50.0049,
  50.0027,
  50.0075,
  50.0105,
  50.0131,
  50.0105,
  50.0114,
  50.0153,
  50.0112,
  50.0139,
  50.0189,
  50.0183,
  50.017,
  50.0193,
  50.0193,
  50.0181,
  50.0144,
  50.0192,
  50.0142,
  50.0136,
  50.0158,
  50.0172,
  50.0156,
  50.0189,
  50.0217,
  50.0232,
  50.0172,
  50.0119,
  50.0161,
  50.0178,
  50.0184,
  50.0229,
  50.0229,
  50.0194,
  50.0166,
  50.0176,
  50.0158,
  50.015,
  50.0094,
  50.0118,
  50.0081,
  50.0038,
  50.0029,
  50.0054,
  50.0061,
  50.0091,
  50.0036,
  50.0062,
  50.0006,
  49.9968,
  49.9931,
  49.994
 ]
};
