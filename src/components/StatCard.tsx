"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
  detail?: string;
  delay?: number;
}

export function StatCard({ label, value, detail, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className="bg-zinc-900 border border-zinc-800 rounded-lg p-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-2xl font-bold text-white">{value}</p>
      {detail && <p className="text-sm text-zinc-400 mt-1">{detail}</p>}
    </motion.div>
  );
}
