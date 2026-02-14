export interface SpendingSpike {
  npi: string;
  period: string;
  prevYear: string;
  currYear: string;
  prevPaid: number;
  currPaid: number;
  multiplier: number;
  prevClaims: number;
  currClaims: number;
  beneficiaries: number;
}

export const SPENDING_SPIKES: SpendingSpike[] = [
  {
    npi: "1396049987",
    period: "2020 \u2192 2021",
    prevYear: "2020",
    currYear: "2021",
    prevPaid: 1_612_461,
    currPaid: 112_640_024,
    multiplier: 69.9,
    prevClaims: 7_864,
    currClaims: 330_994,
    beneficiaries: 27_140,
  },
  {
    npi: "1396049987",
    period: "2021 \u2192 2022",
    prevYear: "2021",
    currYear: "2022",
    prevPaid: 112_640_024,
    currPaid: 486_081_040,
    multiplier: 4.3,
    prevClaims: 330_994,
    currClaims: 1_236_764,
    beneficiaries: 96_437,
  },
  {
    npi: "1538649983",
    period: "2018 \u2192 2019",
    prevYear: "2018",
    currYear: "2019",
    prevPaid: 5_925_294,
    currPaid: 150_434_264,
    multiplier: 25.4,
    prevClaims: 75_687,
    currClaims: 2_027_378,
    beneficiaries: 103_405,
  },
  {
    npi: "1023788031",
    period: "2021 \u2192 2022",
    prevYear: "2021",
    currYear: "2022",
    prevPaid: 3_689_352,
    currPaid: 99_042_771,
    multiplier: 26.8,
    prevClaims: 5_989,
    currClaims: 48_515,
    beneficiaries: 11_434,
  },
  {
    npi: "1770513145",
    period: "2023 \u2192 2024",
    prevYear: "2023",
    currYear: "2024",
    prevPaid: 3_306_558,
    currPaid: 61_378_180,
    multiplier: 18.6,
    prevClaims: 38_950,
    currClaims: 266_458,
    beneficiaries: 20_027,
  },
  {
    npi: "1124127683",
    period: "2022 \u2192 2023",
    prevYear: "2022",
    currYear: "2023",
    prevPaid: 1_688_577,
    currPaid: 76_461_229,
    multiplier: 45.3,
    prevClaims: 31_127,
    currClaims: 373_889,
    beneficiaries: 212_796,
  },
  {
    npi: "1568910677",
    period: "2021 \u2192 2022",
    prevYear: "2021",
    currYear: "2022",
    prevPaid: 773_235,
    currPaid: 39_895_132,
    multiplier: 51.6,
    prevClaims: 5_621,
    currClaims: 288_809,
    beneficiaries: 1_536,
  },
  {
    npi: "1730369760",
    period: "2021 \u2192 2022",
    prevYear: "2021",
    currYear: "2022",
    prevPaid: 977_006,
    currPaid: 89_692_731,
    multiplier: 91.8,
    prevClaims: 3_829,
    currClaims: 291_570,
    beneficiaries: 904,
  },
];

export interface YearlySpending {
  npi: string;
  year: string;
  totalPaid: number;
  totalClaims: number;
  peakBeneficiaries: number;
}

export const YEARLY_SPENDING: YearlySpending[] = [
  // CARES Inc (1396049987) - the 70x spike
  { npi: "1396049987", year: "2019", totalPaid: 77_059, totalClaims: 586, peakBeneficiaries: 29 },
  { npi: "1396049987", year: "2020", totalPaid: 1_612_461, totalClaims: 7_864, peakBeneficiaries: 72 },
  { npi: "1396049987", year: "2021", totalPaid: 112_640_024, totalClaims: 330_994, peakBeneficiaries: 1_518 },
  { npi: "1396049987", year: "2022", totalPaid: 486_081_040, totalClaims: 1_236_764, peakBeneficiaries: 3_037 },
  { npi: "1396049987", year: "2023", totalPaid: 297_628_067, totalClaims: 739_467, peakBeneficiaries: 2_524 },
  { npi: "1396049987", year: "2024", totalPaid: 144_854_666, totalClaims: 441_485, peakBeneficiaries: 1_464 },

  // Tradition Choice (1568910677) - 52x spike
  { npi: "1568910677", year: "2019", totalPaid: 174_929, totalClaims: 1_286, peakBeneficiaries: 13 },
  { npi: "1568910677", year: "2020", totalPaid: 598_848, totalClaims: 4_432, peakBeneficiaries: 15 },
  { npi: "1568910677", year: "2021", totalPaid: 773_235, totalClaims: 5_621, peakBeneficiaries: 20 },
  { npi: "1568910677", year: "2022", totalPaid: 39_895_132, totalClaims: 288_809, peakBeneficiaries: 1_536 },
  { npi: "1568910677", year: "2023", totalPaid: 83_230_653, totalClaims: 571_422, peakBeneficiaries: 1_950 },
  { npi: "1568910677", year: "2024", totalPaid: 83_672_455, totalClaims: 584_630, peakBeneficiaries: 2_039 },

  // Human Care Services (1730369760) - 157x H2015 spike
  { npi: "1730369760", year: "2021", totalPaid: 977_006, totalClaims: 3_829, peakBeneficiaries: 67 },
  { npi: "1730369760", year: "2022", totalPaid: 89_692_731, totalClaims: 291_570, peakBeneficiaries: 904 },
  { npi: "1730369760", year: "2023", totalPaid: 62_421_587, totalClaims: 178_208, peakBeneficiaries: 827 },
  { npi: "1730369760", year: "2024", totalPaid: 50_728_872, totalClaims: 138_460, peakBeneficiaries: 444 },

  // A Better You Wellness (1023788031) - 27x spike
  { npi: "1023788031", year: "2021", totalPaid: 3_689_352, totalClaims: 5_989, peakBeneficiaries: 212 },
  { npi: "1023788031", year: "2022", totalPaid: 99_042_771, totalClaims: 48_515, peakBeneficiaries: 309 },
  { npi: "1023788031", year: "2023", totalPaid: 12_622_364, totalClaims: 5_068, peakBeneficiaries: 308 },

  // Americare (1770513145) - 18.6x spike
  { npi: "1770513145", year: "2018", totalPaid: 159_501, totalClaims: 1_646, peakBeneficiaries: 34 },
  { npi: "1770513145", year: "2019", totalPaid: 1_931_421, totalClaims: 22_636, peakBeneficiaries: 380 },
  { npi: "1770513145", year: "2020", totalPaid: 3_235_497, totalClaims: 40_333, peakBeneficiaries: 367 },
  { npi: "1770513145", year: "2021", totalPaid: 5_365_084, totalClaims: 51_261, peakBeneficiaries: 391 },
  { npi: "1770513145", year: "2022", totalPaid: 3_989_981, totalClaims: 42_802, peakBeneficiaries: 473 },
  { npi: "1770513145", year: "2023", totalPaid: 3_306_558, totalClaims: 38_950, peakBeneficiaries: 351 },
  { npi: "1770513145", year: "2024", totalPaid: 61_378_180, totalClaims: 266_458, peakBeneficiaries: 1_238 },

  // LA County DMH (1699703827) - high volume outlier
  { npi: "1699703827", year: "2018", totalPaid: 925_648_474, totalClaims: 4_652_086, peakBeneficiaries: 3_929 },
  { npi: "1699703827", year: "2019", totalPaid: 928_381_083, totalClaims: 4_851_700, peakBeneficiaries: 3_147 },
  { npi: "1699703827", year: "2020", totalPaid: 960_157_325, totalClaims: 5_482_930, peakBeneficiaries: 1_544 },
  { npi: "1699703827", year: "2021", totalPaid: 873_412_258, totalClaims: 4_691_517, peakBeneficiaries: 1_310 },
  { npi: "1699703827", year: "2022", totalPaid: 891_844_269, totalClaims: 4_234_280, peakBeneficiaries: 1_500 },
  { npi: "1699703827", year: "2023", totalPaid: 1_213_958_465, totalClaims: 4_172_104, peakBeneficiaries: 1_457 },
  { npi: "1699703827", year: "2024", totalPaid: 985_081_994, totalClaims: 2_786_359, peakBeneficiaries: 817 },
];
