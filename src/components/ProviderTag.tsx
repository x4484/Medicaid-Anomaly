"use client";

import { PROVIDERS } from "@/data/providers";

export function ProviderTag({ npi }: { npi: string }) {
  const p = PROVIDERS[npi];
  if (!p) return <span className="font-mono text-sm text-zinc-400">{npi}</span>;

  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="font-medium text-white text-sm">{p.name}</span>
      <span className="text-xs font-mono text-zinc-500">
        {p.state}
      </span>
    </span>
  );
}
