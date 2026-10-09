import React, { useState } from 'react';
import { REGIME_ARCHETYPES_MATRIX, RegimeMatrixItem, RegimeArchetype } from '../data/mockData';
import { Shield, Cpu, Lock, AlertTriangle, Layers, ChevronRight, Check } from 'lucide-react';

interface ComparativeMatrixViewProps {
  onSelectArchetypeOnMap?: (archetype: RegimeArchetype) => void;
}

export const ComparativeMatrixView: React.FC<ComparativeMatrixViewProps> = ({
  onSelectArchetypeOnMap
}) => {
  const [selectedItem, setSelectedItem] = useState<RegimeMatrixItem>(REGIME_ARCHETYPES_MATRIX[0]);

  return (
    <div className="space-y-8 max-w-[1440px] mx-auto py-2">
      {/* Section Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <span>Section 6. Comparative Matrix</span>
          <span aria-hidden="true">·</span>
          <span>Sovereign Political Architectures</span>
          <span aria-hidden="true">·</span>
          <span className="text-cyan-400 font-mono">BCI Deployment Patterns</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          State Archetypes & Elite Exploitation Matrix
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-4xl leading-relaxed">
          The governance and tactical exploitation of neurotechnology vary significantly across sovereign political structures. The matrix below outlines how differing regime archetypes deploy BCI systems and integrate elite-specific hardware modifications to maintain political control, economic dominance, or security.
        </p>
      </div>

      {/* Main Comparative Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0d131f] shadow-xl">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 uppercase tracking-wider font-mono">
              <th className="py-4 px-5 font-semibold">Regime Archetype</th>
              <th className="py-4 px-5 font-semibold">Geopolitical Goal</th>
              <th className="py-4 px-5 font-semibold">Societal / Medical Focus</th>
              <th className="py-4 px-5 font-semibold">Cons & Exploitation Risks</th>
              <th className="py-4 px-5 font-semibold">Elite-Specific Engineering Features</th>
              <th className="py-4 px-5 font-semibold text-right">Inspect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {REGIME_ARCHETYPES_MATRIX.map((item) => {
              const isSelected = selectedItem.archetype === item.archetype;
              return (
                <tr
                  key={item.archetype}
                  onClick={() => setSelectedItem(item)}
                  className={`cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-slate-800/70 border-l-2 border-l-cyan-400'
                      : 'hover:bg-slate-850 hover:bg-slate-900/40'
                  }`}
                >
                  <td className="py-4 px-5 font-semibold text-white whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.archetype === 'authoritarian_surveillance'
                            ? 'bg-rose-400'
                            : item.archetype === 'techno_capitalist_democracy'
                            ? 'bg-sky-400'
                            : item.archetype === 'developing_non_aligned'
                            ? 'bg-amber-400'
                            : 'bg-emerald-400'
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                  </td>

                  <td className="py-4 px-5 text-slate-300 min-w-[200px] leading-relaxed">
                    {item.geopoliticalGoal}
                  </td>

                  <td className="py-4 px-5 text-slate-300 min-w-[220px] leading-relaxed">
                    {item.societalMedicalFocus}
                  </td>

                  <td className="py-4 px-5 text-rose-300/90 min-w-[240px] leading-relaxed bg-rose-950/10">
                    {item.consAndExploitationRisks}
                  </td>

                  <td className="py-4 px-5 text-slate-200 min-w-[240px] leading-relaxed">
                    <span className="font-medium text-cyan-300">
                      {item.eliteSpecificEngineeringFeatures.split(':')[0]}:
                    </span>{' '}
                    <span className="text-slate-300">
                      {item.eliteSpecificEngineeringFeatures.split(':')[1]}
                    </span>
                  </td>

                  <td className="py-4 px-5 text-right whitespace-nowrap">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedItem(item);
                        if (onSelectArchetypeOnMap) {
                          onSelectArchetypeOnMap(item.archetype);
                        }
                      }}
                      className="px-2.5 py-1 text-[11px] rounded bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
                    >
                      Focus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Section 6.1 Tactical Implications Deep Dive Callout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <h3 className="text-base font-semibold text-white">
                6.1 Tactical Implications of Elite Hardware Modifications
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Silicon Hierarchy</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            The integration of elite-specific hardware features creates an asymmetric technological hierarchy. Governing elites and corporate leaders utilize air-gapped, zero-telemetry neural implants equipped with hardware-level cryptographic key management. This ensures personal immunity from automated surveillance networks while maintaining priority access to low-latency edge AI processing and high-bandwidth cognitive enhancement feeds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold text-cyan-300 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Air-Gapped Zero-Telemetry Modes
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Prevents telemetry leakage to central aggregators while regular populations undergo mandatory state or corporate stream mining.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1.5">
              <span className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                Hardware Cryptographic Key Management
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Firmware-level security bypasses and independent power gating immune from automated state monitoring ASICs.
              </p>
            </div>
          </div>
        </div>

        {/* Selected Archetype Tactical Brief */}
        <div className="p-6 rounded-xl bg-[#0d131f] border border-slate-800 space-y-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Archetype Focus
            </div>
            <h4 className="text-lg font-bold text-white mt-1">
              {selectedItem.label}
            </h4>
            <div className="mt-3 text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-slate-800">
              <span className="text-amber-300 font-semibold block mb-1">
                Tactical Breakdown:
              </span>
              {selectedItem.tacticalImplication}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800/80">
            <div className="text-xs text-slate-400 mb-2">
              Hardware Feature Implemented:
            </div>
            <div className="text-xs font-semibold text-white bg-slate-800/80 p-2.5 rounded-md border border-slate-700/60">
              {selectedItem.eliteSpecificEngineeringFeatures}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
