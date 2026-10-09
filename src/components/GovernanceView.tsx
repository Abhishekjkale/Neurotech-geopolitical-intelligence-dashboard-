import React, { useState } from 'react';
import { GOVERNANCE_FRAMEWORKS, GovernanceSolution } from '../data/mockData';
import {
  ShieldCheck,
  Radio,
  FileText,
  CheckCircle2,
  HeartHandshake,
  Database,
  Sliders,
  Check,
  Zap,
  Sparkles
} from 'lucide-react';

export const GovernanceView: React.FC = () => {
  // Policy Simulator Toggles
  const [activeEnactments, setActiveEnactments] = useState<Record<string, boolean>>({
    'Zero-Knowledge Cryptographic Enclaves': true,
    'Physical Air-Gap Switches': true,
    'Cognitive Warfare Non-Proliferation Convention': false,
    'UN Verification Protocol': false,
    'Organ-Donation Model for Neural Data': true,
    'Sovereign Neural Repositories': false
  });

  const toggleEnactment = (title: string) => {
    setActiveEnactments((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  // Compute simulation metrics based on toggled frameworks
  const enactedCount = Object.values(activeEnactments).filter(Boolean).length;
  const privacyScore = Math.min(98, 42 + (activeEnactments['Zero-Knowledge Cryptographic Enclaves'] ? 24 : 0) + (activeEnactments['Organ-Donation Model for Neural Data'] ? 22 : 0) + (activeEnactments['Physical Air-Gap Switches'] ? 10 : 0));
  const nonProliferationScore = Math.min(95, 30 + (activeEnactments['Cognitive Warfare Non-Proliferation Convention'] ? 35 : 0) + (activeEnactments['UN Verification Protocol'] ? 30 : 0));
  const dataSovereigntyScore = Math.min(96, 35 + (activeEnactments['Sovereign Neural Repositories'] ? 32 : 0) + (activeEnactments['Organ-Donation Model for Neural Data'] ? 29 : 0));

  const getIcon = (type: string) => {
    switch (type) {
      case 'shield':
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'radio':
        return <Radio className="w-5 h-5 text-sky-400" />;
      case 'scroll':
        return <FileText className="w-5 h-5 text-amber-400" />;
      case 'check-circle':
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-8 max-w-[1440px] mx-auto py-2">
      {/* Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <span>Section 7. Actionable Governance</span>
          <span aria-hidden="true">·</span>
          <span>OECD, UNESCO, UN & IEEE Brain Initiative</span>
          <span aria-hidden="true">·</span>
          <span className="text-cyan-400 font-mono">Consensus Blueprints</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Actionable Governance Frameworks & Technical Solutions
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-4xl leading-relaxed">
          To address the existential risks posed by unregulated neurotechnology, international standards bodies have formulated consensus blueprints combining silicon-level hardware enforcement with international non-proliferation treaties and explicit property rights frameworks.
        </p>
      </div>

      {/* Interactive Policy Implementation Simulator */}
      <div className="p-6 rounded-xl bg-gradient-to-r from-slate-900 via-[#0e1626] to-slate-900 border border-slate-800 shadow-xl space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Sliders className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-base font-semibold text-white">
                Multilateral Treaty & Silicon Policy Simulator
              </h3>
              <p className="text-xs text-slate-400">
                Toggle consensus blueprints to evaluate systemic risk reduction across sovereign nations
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800/60 self-start md:self-auto">
            <span>{enactedCount} of 6 Blueprints Ratified</span>
          </div>
        </div>

        {/* Dynamic Metric Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Mental Privacy Guarantee</span>
              <span className="font-mono font-bold text-emerald-400 tabular-nums">{privacyScore}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${privacyScore}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Mitigates passive semantic decoding & commercial monetization
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Cognitive Non-Proliferation</span>
              <span className="font-mono font-bold text-sky-400 tabular-nums">{nonProliferationScore}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-sky-500 rounded-full transition-all duration-300"
                style={{ width: `${nonProliferationScore}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Bans captive interrogation decoders & tFUS fatigue suppression
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Data Sovereignty Defense</span>
              <span className="font-mono font-bold text-amber-400 tabular-nums">{dataSovereigntyScore}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-amber-500 rounded-full transition-all duration-300"
                style={{ width: `${dataSovereigntyScore}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Blocks neuro-colonial extraction of multi-ethnic datasets
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid Categorized by Section 7 Subsections */}
      <div className="space-y-6">
        {/* 7.1 Hardware-Level Guardrails */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white tracking-wide uppercase font-mono">
            <span className="text-cyan-400">7.1</span>
            <span>Hardware-Level Guardrails</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOVERNANCE_FRAMEWORKS.filter((f) => f.category === 'Hardware-Level Guardrails').map((fw) => {
              const isEnacted = activeEnactments[fw.title];
              return (
                <div
                  key={fw.title}
                  className={`p-5 rounded-xl border transition-all ${
                    isEnacted
                      ? 'bg-[#0d131f] border-cyan-800/70 shadow-lg shadow-cyan-950/30'
                      : 'bg-slate-900/40 border-slate-800 opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {getIcon(fw.iconType)}
                      <h4 className="text-base font-semibold text-white">{fw.title}</h4>
                    </div>

                    <button
                      onClick={() => toggleEnactment(fw.title)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
                        isEnacted
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {isEnacted ? <Check className="w-3.5 h-3.5" /> : null}
                      <span>{isEnacted ? 'Enacted' : 'Ratify'}</span>
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {fw.mechanism}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 space-y-1 text-xs">
                    <div className="text-slate-400">
                      <span className="text-slate-300 font-medium">Policy Objective: </span>
                      {fw.policyObjective}
                    </div>
                    <div className="text-cyan-300/90 bg-cyan-950/40 p-2 rounded border border-cyan-900/40 mt-2">
                      <span className="font-semibold text-cyan-200">Mitigation: </span>
                      {fw.mitigationEffect}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7.2 Diplomatic Treaties & Non-Proliferation */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white tracking-wide uppercase font-mono">
            <span className="text-amber-400">7.2</span>
            <span>Diplomatic Treaties & Non-Proliferation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOVERNANCE_FRAMEWORKS.filter((f) => f.category === 'Diplomatic Treaties & Non-Proliferation').map((fw) => {
              const isEnacted = activeEnactments[fw.title];
              return (
                <div
                  key={fw.title}
                  className={`p-5 rounded-xl border transition-all ${
                    isEnacted
                      ? 'bg-[#0d131f] border-amber-800/70 shadow-lg shadow-amber-950/30'
                      : 'bg-slate-900/40 border-slate-800 opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {getIcon(fw.iconType)}
                      <h4 className="text-base font-semibold text-white">{fw.title}</h4>
                    </div>

                    <button
                      onClick={() => toggleEnactment(fw.title)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
                        isEnacted
                          ? 'bg-amber-400 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {isEnacted ? <Check className="w-3.5 h-3.5" /> : null}
                      <span>{isEnacted ? 'Enacted' : 'Ratify'}</span>
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {fw.mechanism}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 space-y-1 text-xs">
                    <div className="text-slate-400">
                      <span className="text-slate-300 font-medium">Policy Objective: </span>
                      {fw.policyObjective}
                    </div>
                    <div className="text-amber-300/90 bg-amber-950/40 p-2 rounded border border-amber-900/40 mt-2">
                      <span className="font-semibold text-amber-200">Mitigation: </span>
                      {fw.mitigationEffect}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7.3 Data Sovereignty & Biometric Property Rights */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-white tracking-wide uppercase font-mono">
            <span className="text-rose-400">7.3</span>
            <span>Data Sovereignty & Biometric Property Rights</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GOVERNANCE_FRAMEWORKS.filter((f) => f.category === 'Data Sovereignty & Biometric Property Rights').map((fw) => {
              const isEnacted = activeEnactments[fw.title];
              return (
                <div
                  key={fw.title}
                  className={`p-5 rounded-xl border transition-all ${
                    isEnacted
                      ? 'bg-[#0d131f] border-rose-800/70 shadow-lg shadow-rose-950/30'
                      : 'bg-slate-900/40 border-slate-800 opacity-70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      {getIcon(fw.iconType)}
                      <h4 className="text-base font-semibold text-white">{fw.title}</h4>
                    </div>

                    <button
                      onClick={() => toggleEnactment(fw.title)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors flex items-center gap-1 ${
                        isEnacted
                          ? 'bg-rose-400 text-slate-950 font-bold'
                          : 'bg-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      {isEnacted ? <Check className="w-3.5 h-3.5" /> : null}
                      <span>{isEnacted ? 'Enacted' : 'Ratify'}</span>
                    </button>
                  </div>

                  <p className="mt-3 text-xs text-slate-300 leading-relaxed">
                    {fw.mechanism}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-800 space-y-1 text-xs">
                    <div className="text-slate-400">
                      <span className="text-slate-300 font-medium">Policy Objective: </span>
                      {fw.policyObjective}
                    </div>
                    <div className="text-rose-300/90 bg-rose-950/40 p-2 rounded border border-rose-900/40 mt-2">
                      <span className="font-semibold text-rose-200">Mitigation: </span>
                      {fw.mitigationEffect}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
