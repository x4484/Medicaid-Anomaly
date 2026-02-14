# Medicaid Anomaly Report

## Overview
A Next.js data visualization application that analyzes anomalies in $1.09 trillion of Medicaid claims data. It displays interactive charts and statistics about spending spikes, autism service billing patterns, and claims-per-beneficiary ratios.

## Recent Changes
- 2026-02-14: Initial Replit setup - configured Next.js dev server on port 5000, allowed dev origins for proxy compatibility.

## Project Architecture
- **Framework**: Next.js 16 with App Router, TypeScript, Tailwind CSS 4
- **Package Manager**: pnpm
- **UI Libraries**: Recharts (charts), Framer Motion (animations)
- **Structure**:
  - `src/app/` - Next.js app router pages and layouts
  - `src/components/` - React components (charts, cards, sections)
  - `src/data/` - Static data files (providers, ratios, spikes, autism patterns)
  - `src/lib/` - Utility functions (formatting)
  - `public/` - Static assets

## Running
- Dev: `npx next dev -H 0.0.0.0 -p 5000`
- Build: `npx next build`
- Start: `npx next start -H 0.0.0.0 -p 5000`
