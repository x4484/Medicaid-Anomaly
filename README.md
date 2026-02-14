# Medicaid Spending Anomaly Report

Interactive analysis of 227 million Medicaid claims records from the HHS open data release (Feb 14, 2025), identifying providers with statistically anomalous billing patterns.

## What this is

On February 14, 2025, the HHS DOGE team open-sourced the largest Medicaid provider spending dataset in department history. This project analyzes that data across three dimensions:

1. **Year-over-year spending spikes** — Providers whose billing tripled or more in a single year, starting from a baseline above $1M. Flags like CARES Inc (70x spike, $77K to $486M in three years) and Tradition Choice (52x spike in Brooklyn, NY).

2. **Minnesota autism pattern** — Searches nationally for the same billing code surges (H2015, T1019) used in the Minnesota autism diagnosis fraud. Finds providers with 157x and 106x year-over-year increases in community habilitation billing.

3. **Claims-per-beneficiary outliers** — Providers billing thousands of claims per patient, suggesting services not rendered or systematic upcoding. LA County DMH bills 4,807 claims per beneficiary for community habilitation; Alabama DMH averages $4.3M per beneficiary for residential care.

## Dataset

- **Source:** HHS Medicaid Provider Spending (open data release, Feb 2025)
- **Size:** 227,083,361 rows (11GB CSV, 2.7GB Parquet)
- **Span:** January 2018 through December 2024
- **Scope:** 617,503 billing providers, 1,627,362 servicing providers, 10,881 HCPCS codes
- **Total spending:** $1.09 trillion

Each row is a unique combination of billing provider NPI, servicing provider NPI, HCPCS code, and claim month, with fields for total unique beneficiaries, total claims, and total amount paid.

## Analysis pipeline

1. Convert 11GB CSV to Parquet using DuckDB with ZSTD compression
2. Run anomaly detection queries (spending spikes, code-specific surges, ratio outliers)
3. Resolve provider identities via the NPI Registry API (NPPES)
4. Present findings with interactive charts (Recharts) and detailed narratives

## Running locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Caveats

- **Anomaly is not fraud.** Statistical outliers may reflect legitimate operational changes, new contracts, Medicaid policy changes, or data reporting adjustments.
- **Fiscal intermediaries** like Public Partnerships LLC and Tempus Unlimited aggregate billing for thousands of individual caregivers. High volumes may reflect their role.
- **Government agencies** like LA County DMH and Alabama DMH may bill differently due to bundled service agreements and statewide contracts.
- **Beneficiary counts** represent peak monthly counts, not unique lifetime beneficiaries. Claims-per-beneficiary ratios are upper-bound estimates.

## Tech stack

- Next.js 16 (App Router)
- Recharts (interactive charts)
- Framer Motion (scroll animations)
- Tailwind CSS
- DuckDB (data processing)
