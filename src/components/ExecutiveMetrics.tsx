import React from 'react';
import { EXECUTIVE_METRICS } from '../data/mockData';
import { Activity, Zap, Cpu, Thermometer, ShieldAlert } from 'lucide-react';

export const ExecutiveMetrics: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/50 border border-slate-800/80 rounded-xl p-5 shadow-lg backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800/70">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>Classification: Policy Brief</span>
            <span aria-hidden="true">·</span>
            <span>Focus: BCI Geopolitics & Security</span>
            <span aria-hidden="true">·</span>
            <span className="text-cyan-400 font-mono">Date: October 2026</span>
          </div>
          <h2 className="text-lg font-semibold text-white tracking-tight mt-1">
            Core Engineering & Bandwidth Metrics of Brain-Mapping Chips
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 max-w-md">
          <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
          <span>
            Hardware Security Deficit: Commercial ASICs prioritize minimal power (&lt;2.5 mW) over cryptographic roots of trust (HSM/SE).
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
        {/* Metric 1 */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Active Electrodes / Array</span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight font-mono tabular-nums">
            {EXECUTIVE_METRICS.activeElectrodesPerArray}
          </div>
          <div className="text-[11px] text-slate-400 leading-tight">
            Direct intracortical MEAs at 30 kHz/ch sampling rate
          </div>
        </div>

        {/* Metric 2 */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
            <span>Raw Bandwidth Density</span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight font-mono tabular-nums">
            {EXECUTIVE_METRICS.rawBandwidthDensity}
          </div>
          <div className="text-[11px] text-slate-400 leading-tight">
            Uncompressed telemetry requiring edge ASIC SNN compression
          </div>
        </div>

        {/* Metric 3 */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>On-Chip Power Budget</span>
          </div>
          <div className="text-2xl font-bold text-white tracking-tight font-mono tabular-nums">
            {EXECUTIVE_METRICS.onChipPowerBudget}
          </div>
          <div className="text-[11px] text-slate-400 leading-tight">
            Edge ASICs with inline bandpass filtering & spike detection
          </div>
        </div>

        {/* Metric 4 */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Thermometer className="w-3.5 h-3.5 text-rose-400" />
            <span>Tissue Thermal Ceiling</span>
          </div>
          <div className="text-2xl font-bold text-rose-400 tracking-tight font-mono tabular-nums">
            {EXECUTIVE_METRICS.thermalDissipationLimit}
          </div>
          <div className="text-[11px] text-slate-400 leading-tight">
            Strict dissipation threshold before cell death occurs in tissue
          </div>
        </div>
      </div>
    </div>
  );
};
