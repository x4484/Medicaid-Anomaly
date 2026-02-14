"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from "recharts";
import { motion } from "framer-motion";
import { YEARLY_SPENDING } from "@/data/spikes";
import { PROVIDERS } from "@/data/providers";
import { formatDollars, formatNumber } from "@/lib/format";
import { useState } from "react";

const PROVIDER_COLORS: Record<string, string> = {
  "1396049987": "#ef4444",
  "1568910677": "#f97316",
  "1730369760": "#eab308",
  "1023788031": "#22d3ee",
  "1770513145": "#a78bfa",
  "1699703827": "#6366f1",
};

const PROVIDER_LIST = [
  "1396049987",
  "1568910677",
  "1730369760",
  "1023788031",
  "1770513145",
];

export function SpikeChart() {
  const [selected, setSelected] = useState("1396049987");

  const data = YEARLY_SPENDING.filter((d) => d.npi === selected).map((d) => ({
    year: d.year,
    paid: d.totalPaid,
    claims: d.totalClaims,
    beneficiaries: d.peakBeneficiaries,
  }));

  const provider = PROVIDERS[selected];
  const color = PROVIDER_COLORS[selected] ?? "#ef4444";

  return (
    <motion.div
      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-wrap gap-2 mb-6">
        {PROVIDER_LIST.map((npi) => {
          const p = PROVIDERS[npi];
          return (
            <button
              key={npi}
              onClick={() => setSelected(npi)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selected === npi
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
              }`}
            >
              {p?.name.split(" ").slice(0, 3).join(" ")}
            </button>
          );
        })}
      </div>

      <div className="mb-4">
        <h3 className="text-white font-semibold text-lg">
          {provider?.name}
        </h3>
        <p className="text-zinc-500 text-sm font-mono">
          NPI {selected} &middot; {provider?.city}, {provider?.state}
        </p>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <BarChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: 10 }}>
          <XAxis
            dataKey="year"
            tick={{ fill: "#71717a", fontSize: 12 }}
            axisLine={{ stroke: "#3f3f46" }}
            tickLine={false}
          />
          <YAxis
            tickFormatter={(v: number) => formatDollars(v)}
            tick={{ fill: "#71717a", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={70}
          />
          <Tooltip
            contentStyle={{
              background: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: 8,
              fontSize: 13,
            }}
            labelStyle={{ color: "#a1a1aa" }}
            formatter={(value: number | undefined, name: string | undefined) => {
              if (value == null) return ["", ""];
              if (name === "paid") return [formatDollars(value), "Total Paid"];
              return [formatNumber(value), name ?? ""];
            }}
          />
          <Bar dataKey="paid" radius={[4, 4, 0, 0]} maxBarSize={60}>
            {data.map((entry, i) => {
              const prev = data[i - 1];
              const isSpike =
                prev && entry.paid / prev.paid >= 3;
              return (
                <Cell
                  key={entry.year}
                  fill={isSpike ? color : `${color}66`}
                  stroke={isSpike ? color : "none"}
                  strokeWidth={isSpike ? 2 : 0}
                />
              );
            })}
          </Bar>
          {data.length > 1 && (
            <ReferenceLine
              y={data[0]?.paid ?? 0}
              stroke="#3f3f46"
              strokeDasharray="4 4"
              label={{
                value: "Baseline",
                fill: "#71717a",
                fontSize: 11,
                position: "right",
              }}
            />
          )}
        </BarChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-zinc-800">
        {data.map((d, i) => {
          const prev = data[i - 1];
          const mult = prev ? (d.paid / prev.paid).toFixed(1) : null;
          return (
            <div key={d.year} className="text-center">
              <p className="text-xs text-zinc-500 font-mono">{d.year}</p>
              <p className="text-sm font-bold text-white">
                {formatDollars(d.paid)}
              </p>
              {mult && Number(mult) >= 3 && (
                <p className="text-xs font-bold text-red-400">{mult}x YoY</p>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
