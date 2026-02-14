"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";
import { FindingCard } from "@/components/FindingCard";
import { SpikeChart } from "@/components/SpikeChart";
import { AutismPatternChart } from "@/components/AutismPatternChart";
import { RatioChart } from "@/components/RatioChart";
import { PROVIDERS } from "@/data/providers";
import { RATIO_OUTLIERS } from "@/data/ratios";
import { formatDollars, formatNumber } from "@/lib/format";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <span className="text-sm font-bold text-white tracking-tight">
          Medicaid Anomaly Report
        </span>
        <div className="hidden sm:flex gap-6 text-xs text-zinc-500">
          <a href="#spikes" className="hover:text-white transition-colors">
            Spending Spikes
          </a>
          <a href="#autism" className="hover:text-white transition-colors">
            Autism Pattern
          </a>
          <a href="#ratios" className="hover:text-white transition-colors">
            Claims Ratios
          </a>
          <a href="#methodology" className="hover:text-white transition-colors">
            Methodology
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="pt-28 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-red-500 text-sm font-mono font-bold mb-4 tracking-wider">
          OPEN DATA ANALYSIS
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
          Anomalies in $1.09 Trillion
          <br />
          of Medicaid Claims Data
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-4">
          On February 14, 2025, the HHS DOGE team open-sourced the largest
          Medicaid provider spending dataset in department history &mdash; 227
          million rows of aggregated, provider-level claims data spanning
          January 2018 through December 2024. This analysis identifies
          providers exhibiting statistically anomalous billing patterns across
          three dimensions: year-over-year spending spikes, autism services
          billing surges, and claims-per-beneficiary outliers.
        </p>
        <p className="text-zinc-500 text-sm">
          Data source: HHS Medicaid Provider Spending (open data release, Feb 2025)
          &middot; 617,503 billing providers &middot; 1,627,362 servicing providers
          &middot; 10,881 HCPCS billing codes
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
        <StatCard
          label="Total Rows"
          value="227M"
          detail="Provider-code-month records"
          delay={0.1}
        />
        <StatCard
          label="Total Spending"
          value="$1.09T"
          detail="Jan 2018 - Dec 2024"
          delay={0.2}
        />
        <StatCard
          label="Providers Flagged"
          value="12"
          detail="Across all 3 analyses"
          delay={0.3}
        />
        <StatCard
          label="Billing Codes"
          value="10,881"
          detail="HCPCS procedure codes"
          delay={0.4}
        />
      </div>
    </header>
  );
}

function SpikesSection() {
  return (
    <Section
      id="spikes"
      number="01"
      title="Year-over-Year Spending Spikes"
      subtitle="Providers whose Medicaid billing tripled or more in a single year, starting from a baseline above $1 million. Growth of this magnitude — without proportional increases in beneficiary count — is a strong anomaly signal."
    >
      <SpikeChart />

      <div className="mt-8 space-y-4">
        <FindingCard severity="critical" title="CARES Inc — 70x Spike in One Year" delay={0.1}>
          <p>
            <strong>NPI 1396049987</strong> &mdash; Community Assistance Resources
            & Extended Services Inc, New York, NY.
          </p>
          <p>
            In 2019, this provider billed Medicaid <strong>$77,059</strong>. By
            2022, that figure was <strong>$486 million</strong>. The spending
            trajectory: $77K &rarr; $1.6M &rarr; $112.6M &rarr; $486M. That is
            a <strong>6,309x increase</strong> over three years.
          </p>
          <p>
            Their claims volume went from 586 to 1.2 million annually.
            Peak monthly beneficiaries grew from 29 to 3,037 &mdash; but the
            spending-per-beneficiary reached <strong>$160,086/year</strong> at
            peak, far exceeding norms for personal care services.
          </p>
          <p>
            After peaking in 2022, spending dropped to $297M in 2023 and $145M
            in 2024 &mdash; a pattern consistent with either detection/enforcement
            or deliberate drawdown.
          </p>
        </FindingCard>

        <FindingCard severity="critical" title="Tradition Choice — 52x Spike" delay={0.2}>
          <p>
            <strong>NPI 1568910677</strong> &mdash; Tradition Choice, Brooklyn, NY.
          </p>
          <p>
            From 2019 to 2021, this Brooklyn-based provider billed under $800K
            per year. In 2022, billing jumped to <strong>$39.9 million</strong>
            (a 51.6x increase), then doubled again to <strong>$83.2 million</strong>
            in 2023 and $83.7 million in 2024.
          </p>
          <p>
            Beneficiary count went from 20 to 1,536 in a single year &mdash;
            a 77x increase. The sudden jump from micro-provider to $80M+ annual
            billing, sustained across years, is atypical.
          </p>
        </FindingCard>

        <FindingCard severity="high" title="Human Care Services — $1M to $90M" delay={0.3}>
          <p>
            <strong>NPI 1730369760</strong> &mdash; Human Care Services for Families
            and Children Inc, Brooklyn, NY.
          </p>
          <p>
            First appeared in the dataset in 2021 billing $977K. By 2022:
            <strong> $89.7 million</strong> (a 91.8x increase). Beneficiary
            count went from 67 to 904. The per-beneficiary spend of
            <strong> $99,218/year</strong> is notably high for community
            habilitation services.
          </p>
        </FindingCard>

        <FindingCard severity="high" title="A Better You Wellness — 27x then Collapse" delay={0.4}>
          <p>
            <strong>NPI 1023788031</strong> &mdash; A Better You Wellness Center,
            LLC, Phoenix, AZ.
          </p>
          <p>
            Billed $3.7M in 2021, then <strong>$99M in 2022</strong> (a 26.8x
            increase) with only 309 beneficiaries. That is{" "}
            <strong>$320,527 per beneficiary</strong> in a single year.
            Spending then collapsed to $12.6M in 2023 &mdash; an 87% drop
            &mdash; suggesting either intervention or billing correction.
          </p>
        </FindingCard>

        <FindingCard severity="high" title="Americare — 18.6x Spike in Latest Year" delay={0.5}>
          <p>
            <strong>NPI 1770513145</strong> &mdash; Americare Certified Special
            Services, Inc., New York, NY.
          </p>
          <p>
            Spent years at $3-5M annually. In 2024, billing jumped to
            <strong> $61.4 million</strong> &mdash; an 18.6x increase.
            Claims went from 38,950 to 266,458. This spike is happening
            now in the most recent data.
          </p>
        </FindingCard>
      </div>
    </Section>
  );
}

function AutismSection() {
  return (
    <Section
      id="autism"
      number="02"
      title="The Minnesota Autism Pattern"
      subtitle="In Minnesota, large-scale autism diagnosis fraud was perpetrated through inflated billing of H2015 (community habilitation) and T1019 (personal care services). This analysis searches the national dataset for the same pattern: providers with explosive year-over-year surges in these specific billing codes."
      accent="amber"
    >
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 mb-8">
        <h4 className="text-white font-medium text-sm mb-2">
          What are H2015 and T1019?
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-zinc-400">
          <div>
            <p className="text-amber-400 font-mono font-bold">H2015</p>
            <p>
              Community habilitation services, waiver &mdash; per diem. Covers
              day-to-day support for individuals with developmental disabilities.
              Median claims-per-beneficiary across all providers: <strong className="text-white">256.6</strong>.
              99th percentile: 3,352.
            </p>
          </div>
          <div>
            <p className="text-amber-400 font-mono font-bold">T1019</p>
            <p>
              Personal care services, per 15 minutes. Covers assistance with
              daily living activities. Median claims-per-beneficiary:
              <strong className="text-white"> 747.7</strong>.
              99th percentile: 2,287.
            </p>
          </div>
        </div>
      </div>

      <AutismPatternChart />

      <div className="mt-8 space-y-4">
        <FindingCard severity="critical" title="Human Care Services — 157x H2015 Surge" delay={0.1}>
          <p>
            <strong>NPI 1730369760</strong> went from <strong>$219,957</strong>
            {" "}to <strong>$34.6 million</strong> in H2015 billing in a single year
            (2021 &rarr; 2022). That is a <strong>157.4x multiplier</strong>.
          </p>
          <p>
            Claims went from 769 to 80,622. With 755 peak beneficiaries, that is
            106.8 claims per beneficiary &mdash; well below the 99th percentile
            individually, but the spending growth rate is 157 standard deviations
            above the typical year-over-year change.
          </p>
        </FindingCard>

        <FindingCard severity="critical" title="CARES Inc — 106x H2015 Surge" delay={0.2}>
          <p>
            <strong>NPI 1396049987</strong> went from <strong>$430K</strong> to
            <strong> $45.5 million</strong> in H2015 billing (2020 &rarr; 2021),
            then to <strong>$245.8 million</strong> (2021 &rarr; 2022).
          </p>
          <p>
            This is the same provider that appeared in the spending spikes analysis.
            The H2015 code alone accounts for roughly half their total billing.
            At peak, they billed 191.8 H2015 claims per beneficiary &mdash;
            the 95th percentile is 1,650. Combined with the overall spending
            trajectory ($77K to $486M), this is the strongest fraud signal in
            the dataset.
          </p>
        </FindingCard>

        <FindingCard severity="high" title="Tradition Choice — 52x T1019 Surge" delay={0.3}>
          <p>
            <strong>NPI 1568910677</strong> went from $773K to $39.9M in T1019
            billing (2021 &rarr; 2022), a 51.6x increase. At 188 claims per
            beneficiary, the volume itself isn&apos;t unusual &mdash; but the
            growth rate is. A legitimate provider does not go from $773K to $40M
            in personal care services overnight.
          </p>
        </FindingCard>

        <FindingCard severity="high" title="Public Partnerships LLC — 7x T1019 Surge" delay={0.4}>
          <p>
            <strong>NPI 1417262056</strong> &mdash; Public Partnerships LLC is a
            fiscal intermediary, not a direct care provider. Their T1019 billing
            went from $31.6M to $224.2M (7.1x) in 2018 &rarr; 2019, reaching
            210.4 claims per beneficiary across 18,410 beneficiaries. As a
            fiscal intermediary, the anomaly may reflect downstream provider
            fraud being channeled through their billing infrastructure.
          </p>
        </FindingCard>
      </div>
    </Section>
  );
}

function RatiosSection() {
  return (
    <Section
      id="ratios"
      number="03"
      title="Claims-per-Beneficiary Outliers"
      subtitle="When a provider bills thousands of claims per patient, it suggests either billing for services not rendered, unbundling services to inflate claims count, or systematically upcoding. This analysis flags provider-code pairs where the ratio exceeds 1,000 claims per beneficiary."
      accent="orange"
    >
      <RatioChart />

      <div className="mt-8 space-y-4">
        <FindingCard severity="critical" title="LA County DMH — 4,807 Claims per Patient" delay={0.1}>
          <p>
            <strong>NPI 1699703827</strong> &mdash; Los Angeles County Department
            of Mental Health, Los Angeles, CA.
          </p>
          <p>
            For H2017 (community habilitation, per 15 min): <strong>4,806.8
            claims per beneficiary</strong> over 82 months with only 899 peak
            monthly beneficiaries. Total: <strong>$870.7 million</strong>.
            That works out to <strong>$968,475 per beneficiary</strong> and
            roughly <strong>13.2 claims per patient per day</strong> for the
            entire dataset period. Each claim is a 15-minute unit, meaning
            they billed an average of 3.3 hours of community habilitation
            per patient per day, every day, for nearly 7 years.
          </p>
          <p>
            The same provider also has 3,294 claims per beneficiary for H2015,
            totaling <strong>$2.73 billion</strong>. Combined H2015+H2017 billing:
            <strong> $3.6 billion</strong> with fewer than 4,000 peak patients.
          </p>
        </FindingCard>

        <FindingCard severity="critical" title="Alabama DMH — $4.3M per Beneficiary" delay={0.2}>
          <p>
            <strong>NPI 1982757688</strong> &mdash; Alabama Department of Mental
            Health, Montgomery, AL.
          </p>
          <p>
            For T2016 (residential habilitation, per diem): only <strong>423
            peak monthly beneficiaries</strong> but <strong>$1.83 billion</strong>
            {" "}in total spending over 84 months. That is{" "}
            <strong>$4,333,133 per beneficiary</strong> and{" "}
            <strong>$3,837.56 per claim</strong>.
          </p>
          <p>
            At 1,129 claims per beneficiary over 7 years, this implies roughly
            0.44 claims per day, which is plausible for daily residential care.
            The anomaly here is the per-claim cost ($3,838) and per-beneficiary
            cost ($4.3M), which are extreme outliers. For context, the median
            Medicaid cost for institutional residential care is approximately
            $200-400 per day &mdash; not $3,838.
          </p>
        </FindingCard>

        <FindingCard severity="high" title="Tempus Unlimited — 1,551 Claims/Beneficiary" delay={0.3}>
          <p>
            <strong>NPI 1376609297</strong> &mdash; Tempus Unlimited, Inc.,
            Stoughton, MA.
          </p>
          <p>
            The single largest T1019 (personal care) biller in the entire
            dataset: <strong>$5.46 billion</strong> over 84 months with
            39,834 peak beneficiaries and 1,551.4 claims per beneficiary.
            At $88.41 per claim, the unit cost is reasonable. The question is
            volume: 1,551 claims per beneficiary over 7 years is 18.5 claims
            per beneficiary per month, or about 4.6 per week. Each claim is
            a 15-minute unit, so roughly 70 minutes per patient per week.
            This is within plausible range for a large fiscal intermediary.
          </p>
        </FindingCard>
      </div>

      <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h3 className="text-white font-semibold text-lg mb-4">
          Full Outlier Table
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-zinc-500 text-xs font-mono border-b border-zinc-800">
                <th className="pb-2 pr-4">Provider</th>
                <th className="pb-2 pr-4">Code</th>
                <th className="pb-2 pr-4 text-right">Total Paid</th>
                <th className="pb-2 pr-4 text-right">Claims/Bene</th>
                <th className="pb-2 pr-4 text-right">$/Beneficiary</th>
                <th className="pb-2 text-right">$/Claim</th>
              </tr>
            </thead>
            <tbody>
              {RATIO_OUTLIERS.map((r) => (
                <tr
                  key={r.npi + r.code}
                  className="border-b border-zinc-800/50 text-zinc-300"
                >
                  <td className="py-2 pr-4">
                    <span className="text-white font-medium text-xs">
                      {PROVIDERS[r.npi]?.name ?? r.npi}
                    </span>
                    <br />
                    <span className="text-zinc-500 font-mono text-xs">
                      {r.npi}
                    </span>
                  </td>
                  <td className="py-2 pr-4 font-mono text-amber-400 text-xs">
                    {r.code}
                  </td>
                  <td className="py-2 pr-4 text-right font-mono">
                    {formatDollars(r.totalPaid)}
                  </td>
                  <td className="py-2 pr-4 text-right font-mono">
                    <span
                      className={
                        r.claimsPerBeneficiary > 2000
                          ? "text-red-400 font-bold"
                          : ""
                      }
                    >
                      {formatNumber(r.claimsPerBeneficiary)}
                    </span>
                  </td>
                  <td className="py-2 pr-4 text-right font-mono">
                    {formatDollars(r.paidPerBeneficiary)}
                  </td>
                  <td className="py-2 text-right font-mono">
                    {formatDollars(r.paidPerClaim)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}

function Methodology() {
  return (
    <Section
      id="methodology"
      number="04"
      title="Methodology & Caveats"
      subtitle="How this analysis was conducted and what it does not tell you."
    >
      <div className="space-y-6 text-sm text-zinc-400 leading-relaxed max-w-3xl">
        <div>
          <h4 className="text-white font-semibold mb-2">Data Source</h4>
          <p>
            The raw dataset is the HHS Medicaid provider-level claims file released
            on February 14, 2025. It contains 227,083,361 rows, each representing
            a unique combination of billing provider NPI, servicing provider NPI,
            HCPCS code, and claim month. Fields include total unique beneficiaries,
            total claims, and total amount paid.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Analysis Pipeline</h4>
          <p>
            The 11GB CSV was converted to a 2.7GB Parquet file using DuckDB with
            ZSTD compression. All queries were executed locally using DuckDB
            analytical SQL. Provider identities were resolved via the NPI Registry
            API (NPPES). No data was modified or filtered beyond the aggregation
            queries shown below.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Anomaly Detection Criteria</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Spending Spikes:</strong> Year-over-year spending increase
              of 3x or more, with a prior-year baseline of at least $1M and
              current-year spending of at least $10M. This filters out new
              providers and small-dollar noise.
            </li>
            <li>
              <strong>Autism Pattern:</strong> Year-over-year increase of 2.5x
              or more in H2015 or T1019 billing specifically, with a baseline
              above $100K and current spending above $5M.
            </li>
            <li>
              <strong>Claims Ratio:</strong> Total claims divided by peak monthly
              beneficiary count exceeding 1,000, with total spending above $5M.
              This is a lifetime ratio across the 7-year dataset, not a monthly
              figure.
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Important Caveats</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Anomaly is not fraud.</strong> Statistical outliers may
              reflect legitimate operational changes: rapid expansion, new
              contracts, Medicaid policy changes, or data reporting adjustments.
              No accusation of fraud is made or implied.
            </li>
            <li>
              <strong>Fiscal intermediaries</strong> like Public Partnerships LLC
              and Tempus Unlimited aggregate billing for thousands of individual
              caregivers. Their high volumes may reflect their role, not
              malfeasance.
            </li>
            <li>
              <strong>Government agencies</strong> like LA County DMH and Alabama
              DMH may bill differently than private providers due to bundled
              service agreements and statewide contracts.
            </li>
            <li>
              <strong>Beneficiary counts</strong> in this dataset represent the
              maximum monthly count, not unique lifetime beneficiaries. Claims-per-
              beneficiary ratios are therefore upper-bound estimates.
            </li>
            <li>
              <strong>HCPCS code definitions</strong> vary by state Medicaid
              program. T1019 may cover different service durations (15 min vs.
              per diem) in different states.
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <SpikesSection />
        <AutismSection />
        <RatiosSection />
        <Methodology />

        <footer className="py-12 border-t border-zinc-800 text-center text-zinc-600 text-xs">
          <p>
            Analysis generated from HHS Medicaid Provider Spending open data
            (Feb 14, 2025). Provider identities from NPI Registry (NPPES).
            This analysis identifies statistical anomalies and does not
            constitute an accusation of fraud.
          </p>
        </footer>
      </main>
    </div>
  );
}
