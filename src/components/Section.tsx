"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  accent?: string;
}

export function Section({
  id,
  number,
  title,
  subtitle,
  children,
  accent = "red",
}: SectionProps) {
  const accentColors: Record<string, string> = {
    red: "text-red-500",
    amber: "text-amber-500",
    orange: "text-orange-500",
  };

  return (
    <section id={id} className="py-20 border-t border-zinc-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-baseline gap-4 mb-3">
          <span
            className={`text-sm font-mono font-bold ${accentColors[accent] ?? accentColors.red}`}
          >
            {number}
          </span>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </div>
        <p className="text-zinc-400 text-lg mb-10 max-w-2xl">{subtitle}</p>
        {children}
      </motion.div>
    </section>
  );
}
