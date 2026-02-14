"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { motion } from "framer-motion";
import { AUTISM_SURGES } from "@/data/autism-pattern";
import { PROVIDERS } from "@/data/providers";
import { formatDollars, formatNumber } from "@/lib/format";

export function AutismPatternChart() {
  const data = AUTISM_SURGES.map((s) => {
    const provider = PROVIDERS[s.npi];
    const shortName =
      provider?.name.split(" ").slice(0, 2).join(" ") ?? s.npi;
    return {
      label: `${shortName}\n(${s.period})`,
      shortLabel: shortName,
      period: s.period,
      prevPaid: s.prevPaid,
      currPaid: s.currPaid,
      multiplier: s.multiplier,
      code: s.code,
      claimsPerBene: s.claimsPerBeneficiary,
      npi: s.npi,
    };
  }).sort((a, b) => b.multiplier - a.multiplier);

  return (
    <motion.div
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-white font-semibold text-lg mb-1">
        H2015 / T1019 Billing Surges by Provider
      </h3>
      <p className="text-zinc-500 text-sm mb-6">
        Year-over-year spending multiplier for autism/personal care codes.
        A provider going from $220K to $34.6M in one year (157x) is
        a statistical impossibility under normal operations.
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 60, bottom: 0, left: 10 }}
        >
          <XAxis
            type="number"
            tickFormatter={(v: number) => `${v}x`}
            tick={{ fill: "#71717a", fontSize: 11 }}
            axisLine={{ stroke: "#3f3f46" }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="shortLabel"
            width={160}
            tick={{ fill: "#a1a1aa", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: 8,
              fontSize: 13,
            }}
            formatter={(value: number | undefined) => {
              if (value == null) return ["", "Multiplier"];
              return [`${value.toFixed(1)}x`, "Multiplier"];
            }}
            labelFormatter={(label: unknown) => {
              const labelStr = String(label);
              const item = data.find((d) => d.shortLabel === labelStr);
              if (!item) return labelStr;
              return `${PROVIDERS[item.npi]?.name ?? item.npi} (${item.code}) ${item.period}`;
            }}
          />
          <Bar dataKey="multiplier" radius={[0, 4, 4, 0]} maxBarSize={28}>
            {data.map((entry) => {
              let fill = "#f97316";
              if (entry.multiplier >= 100) fill = "#ef4444";
              else if (entry.multiplier >= 20) fill = "#f59e0b";
              else if (entry.multiplier >= 5) fill = "#eab308";
              return <Cell key={entry.npi + entry.period} fill={fill} />;
            })}
            <LabelList
              dataKey="multiplier"
              position="right"
              formatter={(v: unknown) => `${v}x`}
              style={{ fill: "#fafafa", fontSize: 11, fontWeight: 600 }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
