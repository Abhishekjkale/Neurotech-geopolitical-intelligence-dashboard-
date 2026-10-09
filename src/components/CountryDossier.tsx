import React from 'react';
import {
  CountryGeopoliticalProfile,
  RegimeArchetype,
  CHILE_CONSTITUTIONAL_PILLARS
} from '../data/mockData';
import {
  ShieldAlert,
  Cpu,
  Radio,
  FileCheck,
  AlertTriangle,
  Scale,
  ExternalLink,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';

interface CountryDossierProps {
  country: CountryGeopoliticalProfile;
  onOpenChileStudy: () => void;
}

export const CountryDossier: React.FC<CountryDossierProps> = ({
  country,
  onOpenChileStudy
}) => {
  const isChile = country.name === 'Chile';

  const getArchetypeLabel = (arch: RegimeArchetype) => {
    switch (arch) {
      case 'authoritarian_surveillance':
        return {
          title: 'Authoritarian Surveillance State',
          color: 'text-rose-400 bg-rose-950/60 border-rose-800/60'
        };
      case 'techno_capitalist_democracy':
        return {
          title: 'Techno-Capitalist / Democracy',
          color: 'text-sky-400 bg-sky-950/60 border-sky-800/60'
        };
      case 'developing_non_aligned':
        return {
          title: 'Developing Non-Aligned Nation',
          color: 'text-amber-400 bg-amber-950/60 border-amber-800/60'
        };
      case 'constitutional_pioneer':
        return {
          title: 'Constitutional Neuro-Rights Pioneer',
          color: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/60'
        };
    }
  };

  const archInfo = getArchetypeLabel(country.archetype);

  return (
    <div className="w-full bg-[#0d131f] border border-slate-800/80 rounded-xl overflow-hidden shadow-xl flex flex-col h-full">
      {/* Dossier Header */}
      <div className="p-5 border-b border-slate-800/80 bg-slate-900/60 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
            <span>Dossier Reference: BCI-GEO-{country.iso3}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{country.region}</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
            <span>{country.name}</span>
            <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {country.iso3}
            </span>
          </h3>
          <div className="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-medium border border-opacity-60">
            <span className={archInfo.color}>{archInfo.title}</span>
          </div>
        </div>

        <div className="text-right">
          <div className="text-[11px] uppercase tracking-wider text-slate-500 font-mono">
            Sovereign Risk Tier
          </div>
          <div
            className={`text-sm font-bold font-mono uppercase mt-0.5 ${
              country.riskLevel === 'critical'
                ? 'text-rose-400'
                : country.riskLevel === 'elevated'
                ? 'text-amber-400'
                : 'text-emerald-400'
            }`}
          >
            {country.riskLevel}
          </div>
          <div className="text-[10px] text-slate-400 mt-1">
            {country.policyStatus.hasNeuroRightsLaw
              ? 'Neuro-Rights Protected'
              : 'Unregulated Framework'}
          </div>
        </div>
      </div>

      {/* Dossier Body Scrollable */}
      <div className="p-5 space-y-6 overflow-y-auto flex-1">
        {/* Special Spotlight for Chile */}
        {isChile && (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/70 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wide uppercase">
                <Scale className="w-4 h-4" />
                <span>Historic Constitutional Benchmark (October 2021)</span>
              </div>
              <button
                onClick={onOpenChileStudy}
                className="text-xs text-emerald-300 hover:text-white flex items-center gap-1 font-medium transition-colors"
              >
                <span>Full Analysis</span>
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              In October 2021, Chile became the first nation globally to amend Article 19 of its National Constitution, establishing that physical and mental integrity includes the protection of brain activity and the information derived from it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px] text-slate-300">
              <div className="p-2 rounded bg-emerald-900/30 border border-emerald-800/40">
                <span className="font-semibold text-emerald-200">1. Mental Privacy:</span> Bans unauthorized automatic brain extraction.
              </div>
              <div className="p-2 rounded bg-emerald-900/30 border border-emerald-800/40">
                <span className="font-semibold text-emerald-200">2. Personal Identity:</span> Prohibits ego dissolution loops.
              </div>
              <div className="p-2 rounded bg-emerald-900/30 border border-emerald-800/40">
                <span className="font-semibold text-emerald-200">3. Free Will:</span> Prevents closed-loop cognitive steering.
              </div>
              <div className="p-2 rounded bg-emerald-900/30 border border-emerald-800/40">
                <span className="font-semibold text-emerald-200">4. Equal Access:</span> Bans socio-economic neuro-castes.
              </div>
            </div>
          </div>
        )}

        {/* Strategic Geopolitical Objective */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Sovereign Geopolitical Goal</span>
          </div>
          <p className="text-sm text-slate-200 bg-slate-900/70 p-3.5 rounded-lg border border-slate-800/80 leading-relaxed">
            {country.geopoliticalGoal}
          </p>
        </div>

        {/* Dual Focus: Societal vs Exploitation Risks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/80 space-y-2">
            <div className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              <span>Societal / Medical Focus</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {country.societalFocus}
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/50 border border-slate-800/80 space-y-2">
            <div className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Cons & Exploitation Risks</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              {country.exploitationRisks.map((risk, idx) => (
                <li key={idx} className="leading-snug">
                  {risk}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 6.1: Elite-Specific Engineering Features */}
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Elite-Specific Engineering Features (Section 6)</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Air-Gapped Hierarchy</span>
          </div>

          <div className="space-y-2.5">
            {country.eliteHardwareFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg space-y-1.5"
              >
                <div className="text-xs font-semibold text-white flex items-center justify-between">
                  <span>{feat.title}</span>
                  <span className="text-[10px] font-mono text-cyan-400">Silicon Layer</span>
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-slate-400 font-medium">Mechanism: </span>
                  {feat.mechanism}
                </div>
                <div className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-2 rounded border border-slate-800/60">
                  <span className="text-indigo-300 font-medium">Tactical Implication: </span>
                  {feat.tacticalImplication}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4.3: Dual-Use Dilemma in Neuroscience */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 uppercase tracking-wide">
              <Radio className="w-3.5 h-3.5" />
              <span>Dual-Use Dilemma (Section 4.3)</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono">Rehab $\leftrightarrow$ Defense</span>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-400 text-[11px] font-medium">Clinical Rehabilitation:</span>
              <span className="text-slate-200">{country.dualUseStatus.clinicalApp}</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-slate-400 text-[11px] font-medium">Military Dual-Use Translation:</span>
              <span className="text-amber-200">{country.dualUseStatus.militaryDualUse}</span>
            </div>
            <div className="p-2.5 rounded bg-rose-950/30 border border-rose-900/40 text-[11px] text-rose-200/90 leading-relaxed">
              <span className="font-semibold text-rose-300">Threat Vector: </span>
              {country.dualUseStatus.threatVector}
            </div>
          </div>
        </div>

        {/* Hardware Security Deficit Audit (Section 2.2) */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3">
          <div className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 uppercase tracking-wide">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
            <span>Hardware Security Deficit Audit</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 font-mono block">Hardware Root of Trust (HSM/SE)</span>
              <span className={`font-semibold ${country.hardwareSecurityDeficit.hasDedicatedHSM ? 'text-emerald-400' : 'text-rose-400'}`}>
                {country.hardwareSecurityDeficit.hasDedicatedHSM ? 'Dedicated HSM Present' : 'Deficit: Missing HSM'}
              </span>
            </div>

            <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[10px] text-slate-400 font-mono block">Edge Decoder Module</span>
              <span className="text-slate-200 truncate block">
                {country.hardwareSecurityDeficit.edgeDecodingArch}
              </span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 leading-snug">
            <span className="text-slate-300 font-medium">RF Telemetry Posture: </span>
            {country.hardwareSecurityDeficit.rfTelemetryVulnerability}
          </div>
        </div>
      </div>
    </div>
  );
};
