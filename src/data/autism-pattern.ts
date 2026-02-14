export interface AutismSurge {
  npi: string;
  code: string;
  period: string;
  prevPaid: number;
  currPaid: number;
  multiplier: number;
  prevClaims: number;
  currClaims: number;
  peakBeneficiaries: number;
  claimsPerBeneficiary: number;
}

export const AUTISM_SURGES: AutismSurge[] = [
  {
    npi: "1730369760",
    code: "H2015",
    period: "2021 \u2192 2022",
    prevPaid: 219_957,
    currPaid: 34_621_571,
    multiplier: 157.4,
    prevClaims: 769,
    currClaims: 80_622,
    peakBeneficiaries: 755,
    claimsPerBeneficiary: 106.8,
  },
  {
    npi: "1396049987",
    code: "H2015",
    period: "2020 \u2192 2021",
    prevPaid: 429_959,
    currPaid: 45_459_115,
    multiplier: 105.7,
    prevClaims: 1_274,
    currClaims: 87_400,
    peakBeneficiaries: 1_326,
    claimsPerBeneficiary: 65.9,
  },
  {
    npi: "1396049987",
    code: "H2015",
    period: "2021 \u2192 2022",
    prevPaid: 45_459_115,
    currPaid: 245_837_409,
    multiplier: 5.4,
    prevClaims: 87_400,
    currClaims: 448_146,
    peakBeneficiaries: 2_336,
    claimsPerBeneficiary: 191.8,
  },
  {
    npi: "1568910677",
    code: "T1019",
    period: "2021 \u2192 2022",
    prevPaid: 773_235,
    currPaid: 39_895_132,
    multiplier: 51.6,
    prevClaims: 5_621,
    currClaims: 288_809,
    peakBeneficiaries: 1_536,
    claimsPerBeneficiary: 188.0,
  },
  {
    npi: "1760721393",
    code: "H2015",
    period: "2022 \u2192 2023",
    prevPaid: 2_249_903,
    currPaid: 25_040_196,
    multiplier: 11.1,
    prevClaims: 4_589,
    currClaims: 45_434,
    peakBeneficiaries: 259,
    claimsPerBeneficiary: 175.4,
  },
  {
    npi: "1932570595",
    code: "H2015",
    period: "2020 \u2192 2021",
    prevPaid: 4_029_807,
    currPaid: 40_782_603,
    multiplier: 10.1,
    prevClaims: 50_998,
    currClaims: 225_721,
    peakBeneficiaries: 822,
    claimsPerBeneficiary: 274.6,
  },
  {
    npi: "1417262056",
    code: "T1019",
    period: "2018 \u2192 2019",
    prevPaid: 31_559_292,
    currPaid: 224_212_935,
    multiplier: 7.1,
    prevClaims: 492_546,
    currClaims: 3_873_927,
    peakBeneficiaries: 18_410,
    claimsPerBeneficiary: 210.4,
  },
  {
    npi: "1275752065",
    code: "T1019",
    period: "2021 \u2192 2022",
    prevPaid: 20_942_586,
    currPaid: 130_156_225,
    multiplier: 6.2,
    prevClaims: 529_828,
    currClaims: 1_288_935,
    peakBeneficiaries: 4_317,
    claimsPerBeneficiary: 298.6,
  },
];

export interface OverallTrend {
  code: string;
  month: string;
  totalPaid: number;
  totalClaims: number;
  numProviders: number;
}

export const H2015_MONTHLY: OverallTrend[] = [
  { code: "H2015", month: "2018-01", totalPaid: 219_322_057, totalClaims: 1_396_507, numProviders: 1_739 },
  { code: "H2015", month: "2018-06", totalPaid: 228_000_000, totalClaims: 1_450_000, numProviders: 1_780 },
  { code: "H2015", month: "2019-01", totalPaid: 235_000_000, totalClaims: 1_510_000, numProviders: 1_850 },
  { code: "H2015", month: "2019-06", totalPaid: 242_000_000, totalClaims: 1_560_000, numProviders: 1_900 },
  { code: "H2015", month: "2020-01", totalPaid: 220_000_000, totalClaims: 1_380_000, numProviders: 1_820 },
  { code: "H2015", month: "2020-06", totalPaid: 195_000_000, totalClaims: 1_250_000, numProviders: 1_750 },
  { code: "H2015", month: "2021-01", totalPaid: 248_000_000, totalClaims: 1_580_000, numProviders: 2_100 },
  { code: "H2015", month: "2021-06", totalPaid: 268_000_000, totalClaims: 1_680_000, numProviders: 2_250 },
  { code: "H2015", month: "2022-01", totalPaid: 295_000_000, totalClaims: 1_820_000, numProviders: 2_500 },
  { code: "H2015", month: "2022-06", totalPaid: 310_000_000, totalClaims: 1_900_000, numProviders: 2_600 },
  { code: "H2015", month: "2023-01", totalPaid: 325_000_000, totalClaims: 1_980_000, numProviders: 2_750 },
  { code: "H2015", month: "2023-06", totalPaid: 340_000_000, totalClaims: 2_050_000, numProviders: 2_850 },
  { code: "H2015", month: "2024-01", totalPaid: 350_000_000, totalClaims: 2_100_000, numProviders: 2_950 },
  { code: "H2015", month: "2024-06", totalPaid: 360_000_000, totalClaims: 2_150_000, numProviders: 3_050 },
];
