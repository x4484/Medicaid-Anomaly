export interface ClaimsRatioOutlier {
  npi: string;
  code: string;
  codeName: string;
  totalPaid: number;
  totalClaims: number;
  maxMonthlyBeneficiaries: number;
  monthsActive: number;
  claimsPerBeneficiary: number;
  paidPerBeneficiary: number;
  paidPerClaim: number;
}

export const RATIO_OUTLIERS: ClaimsRatioOutlier[] = [
  {
    npi: "1699703827",
    code: "H2017",
    codeName: "Community habilitation, waiver (per 15 min)",
    totalPaid: 870_659_295,
    totalClaims: 4_321_332,
    maxMonthlyBeneficiaries: 899,
    monthsActive: 82,
    claimsPerBeneficiary: 4806.8,
    paidPerBeneficiary: 968_475,
    paidPerClaim: 201.48,
  },
  {
    npi: "1699703827",
    code: "H2015",
    codeName: "Community habilitation, waiver (per diem)",
    totalPaid: 2_728_091_560,
    totalClaims: 12_942_903,
    maxMonthlyBeneficiaries: 3_929,
    monthsActive: 66,
    claimsPerBeneficiary: 3294.2,
    paidPerBeneficiary: 694_348,
    paidPerClaim: 210.78,
  },
  {
    npi: "1356709976",
    code: "T2033",
    codeName: "Residential care, waiver (per diem)",
    totalPaid: 1_004_522_438,
    totalClaims: 2_525_854,
    maxMonthlyBeneficiaries: 1_083,
    monthsActive: 78,
    claimsPerBeneficiary: 2332.3,
    paidPerBeneficiary: 927_537,
    paidPerClaim: 397.70,
  },
  {
    npi: "1629436241",
    code: "T2033",
    codeName: "Residential care, waiver (per diem)",
    totalPaid: 1_531_768_755,
    totalClaims: 6_126_576,
    maxMonthlyBeneficiaries: 2_360,
    monthsActive: 78,
    claimsPerBeneficiary: 2596.0,
    paidPerBeneficiary: 649_055,
    paidPerClaim: 250.02,
  },
  {
    npi: "1528263910",
    code: "H2015",
    codeName: "Community habilitation, waiver (per diem)",
    totalPaid: 890_233_372,
    totalClaims: 2_073_932,
    maxMonthlyBeneficiaries: 1_182,
    monthsActive: 66,
    claimsPerBeneficiary: 1754.6,
    paidPerBeneficiary: 753_159,
    paidPerClaim: 429.25,
  },
  {
    npi: "1962650622",
    code: "T1019",
    codeName: "Personal care services (per 15 min)",
    totalPaid: 1_624_390_225,
    totalClaims: 11_033_168,
    maxMonthlyBeneficiaries: 6_470,
    monthsActive: 84,
    claimsPerBeneficiary: 1705.3,
    paidPerBeneficiary: 251_065,
    paidPerClaim: 147.23,
  },
  {
    npi: "1417262056",
    code: "S5126",
    codeName: "Attendant care services (per 15 min)",
    totalPaid: 2_371_739_463,
    totalClaims: 28_521_222,
    maxMonthlyBeneficiaries: 17_072,
    monthsActive: 84,
    claimsPerBeneficiary: 1670.6,
    paidPerBeneficiary: 138_926,
    paidPerClaim: 83.16,
  },
  {
    npi: "1376609297",
    code: "T1019",
    codeName: "Personal care services (per 15 min)",
    totalPaid: 5_463_223_218,
    totalClaims: 61_796_978,
    maxMonthlyBeneficiaries: 39_834,
    monthsActive: 84,
    claimsPerBeneficiary: 1551.4,
    paidPerBeneficiary: 137_150,
    paidPerClaim: 88.41,
  },
  {
    npi: "1982757688",
    code: "T2016",
    codeName: "Habilitation, residential (per diem)",
    totalPaid: 1_832_915_138,
    totalClaims: 477_625,
    maxMonthlyBeneficiaries: 423,
    monthsActive: 84,
    claimsPerBeneficiary: 1129.1,
    paidPerBeneficiary: 4_333_133,
    paidPerClaim: 3837.56,
  },
];

export interface PercentileData {
  code: string;
  codeName: string;
  p25: number;
  median: number;
  p75: number;
  p90: number;
  p95: number;
  p99: number;
  max: number;
  numProviders: number;
}

export const PERCENTILES: PercentileData[] = [
  {
    code: "H2015",
    codeName: "Community habilitation",
    p25: 118.9,
    median: 256.6,
    p75: 642.0,
    p90: 1277.3,
    p95: 1650.2,
    p99: 3352.0,
    max: 9453.6,
    numProviders: 1381,
  },
  {
    code: "T1019",
    codeName: "Personal care services",
    p25: 429.6,
    median: 747.7,
    p75: 1124.2,
    p90: 1456.1,
    p95: 1656.9,
    p99: 2287.1,
    max: 17607.5,
    numProviders: 5552,
  },
];
