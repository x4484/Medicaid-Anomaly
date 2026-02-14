"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ZAxis,
} from "recharts";
import { motion } from "framer-motion";
import { RATIO_OUTLIERS, PERCENTILES } from "@/data/ratios";
import { PROVIDERS } from "@/data/providers";
import { formatDollars, formatNumber } from "@/lib/format";

export function RatioChart() {
  const data = RATIO_OUTLIERS.map((r) => ({
    x: r.claimsPerBeneficiary,
    y: r.totalPaid,
    z: r.maxMonthlyBeneficiaries,
    name: PROVIDERS[r.npi]?.name ?? r.npi,
    npi: r.npi,
    code: r.code,
    codeName: r.codeName,
    paidPerBene: r.paidPerBeneficiary,
    paidPerClaim: r.paidPerClaim,
  }));

  const medianH2015 = PERCENTILES.find((p) => p.code === "H2015")?.median ?? 256;
  const medianT1019 = PERCENTILES.find((p) => p.code === "T1019")?.median ?? 748;

  return (
    <motion.div
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-white font-semibold text-lg mb-1">
        Claims-per-Beneficiary vs. Total Spending
      </h3>
      <p className="text-zinc-500 text-sm mb-6">
        Each dot is a provider-code pair. The further right, the more claims
        per patient. The higher up, the more total money. Dots far to the right
        represent physically implausible service volumes.
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 10, right: 30, bottom: 10, left: 10 }}>
          <XAxis
            dataKey="x"
            type="number"
            name="Claims/Beneficiary"
            tick={{ fill: "#71717a", fontSize: 11 }}
            axisLine={{ stroke: "#3f3f46" }}
            tickLine={false}
            label={{
              value: "Claims per Beneficiary",
              fill: "#71717a",
              fontSize: 12,
              position: "bottom",
              offset: -5,
            }}
          />
          <YAxis
            dataKey="y"
            type="number"
            name="Total Paid"
            tickFormatter={(v: number) => formatDollars(v)}
            tick={{ fill: "#71717a", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={70}
          />
          <ZAxis dataKey="z" range={[80, 400]} name="Beneficiaries" />
          <Tooltip
            contentStyle={{
              background: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: 8,
              fontSize: 12,
            }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0]?.payload;
              if (!d) return null;
              return (
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-3 text-sm max-w-xs">
                  <p className="font-bold text-white mb-1">{d.name}</p>
                  <p className="text-zinc-400 text-xs mb-2">
                    NPI {d.npi} &middot; {d.code} ({d.codeName})
                  </p>
                  <div className="space-y-1 text-zinc-300">
                    <p>
                      Claims/Beneficiary:{" "}
                      <span className="text-red-400 font-bold">
                        {formatNumber(d.x)}
                      </span>
                    </p>
                    <p>Total Paid: {formatDollars(d.y)}</p>
                    <p>
                      Paid/Beneficiary:{" "}
                      <span className="text-amber-400 font-bold">
                        {formatDollars(d.paidPerBene)}
                      </span>
                    </p>
                    <p>Paid/Claim: {formatDollars(d.paidPerClaim)}</p>
                    <p>Max Monthly Beneficiaries: {formatNumber(d.z)}</p>
                  </div>
                </div>
              );
            }}
          />
          <ReferenceLine
            x={medianT1019}
            stroke="#3f3f46"
            strokeDasharray="4 4"
            label={{
              value: `T1019 median: ${medianT1019}`,
              fill: "#52525b",
              fontSize: 10,
              position: "top",
            }}
          />
          <Scatter data={data} fill="#ef4444" fillOpacity={0.8} />
        </ScatterChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
