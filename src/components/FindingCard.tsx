"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FindingCardProps {
  severity: "critical" | "high" | "medium";
  title: string;
  children: ReactNode;
  delay?: number;
}

const SEVERITY_STYLES = {
  critical: {
    border: "border-red-500/30",
    bg: "bg-red-500/5",
    badge: "bg-red-500/20 text-red-400",
    label: "CRITICAL",
  },
  high: {
    border: "border-amber-500/30",
    bg: "bg-amber-500/5",
    badge: "bg-amber-500/20 text-amber-400",
    label: "HIGH",
  },
  medium: {
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/5",
    badge: "bg-yellow-500/20 text-yellow-400",
    label: "NOTABLE",
  },
};

export function FindingCard({
  severity,
  title,
  children,
  delay = 0,
}: FindingCardProps) {
  const s = SEVERITY_STYLES[severity];
  return (
    <motion.div
      className={`${s.bg} ${s.border} border rounded-xl p-6 mb-4`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span
          className={`${s.badge} text-xs font-bold font-mono px-2 py-0.5 rounded`}
        >
          {s.label}
        </span>
        <h4 className="text-white font-semibold">{title}</h4>
      </div>
      <div className="text-zinc-300 text-sm leading-relaxed space-y-2">
        {children}
      </div>
    </motion.div>
  );
}
