import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText } from 'lucide-react';
import {
  EXECUTIVE_METRICS,
  COUNTRY_PROFILES,
  REGIME_ARCHETYPES_MATRIX,
  CHILE_CONSTITUTIONAL_PILLARS,
  GOVERNANCE_FRAMEWORKS
} from '../data/mockData';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateReportText = () => {
    return `# GEOPOLITICAL STRATEGIC ASSESSMENT: NEUROTECH DIPLOMACY & BRAIN-MAPPING
Classification: Policy Brief | Date: October 2026 | Focus: BCI Geopolitics & Security

## 1. EXECUTIVE SUMMARY & ENGINEERING METRICS
- Active Electrodes / Array: ${EXECUTIVE_METRICS.activeElectrodesPerArray} (Direct intracortical MEAs)
- Raw Bandwidth Density: ${EXECUTIVE_METRICS.rawBandwidthDensity} (30 kHz/ch sampling rate)
- On-Chip Power Budget: ${EXECUTIVE_METRICS.onChipPowerBudget} (Edge ASIC constraint)
- Thermal Dissipation Limit: ${EXECUTIVE_METRICS.thermalDissipationLimit} (Cell death ceiling in cortex)
- Hardware Security Deficit: Commercial ASICs prioritize minimal power over cryptographic roots of trust (HSM/SE).

## 2. CHILE CONSTITUTIONAL BENCHMARK (ARTICLE 19 AMENDMENT, OCT 2021)
${CHILE_CONSTITUTIONAL_PILLARS.map((p) => `${p.id}. ${p.title}: ${p.summary}`).join('\n')}

## 3. STATE ARCHETYPES & ELITE EXPLOITATION MATRIX
${REGIME_ARCHETYPES_MATRIX.map((m) => `### ${m.label}
- Geopolitical Goal: ${m.geopoliticalGoal}
- Societal Focus: ${m.societalMedicalFocus}
- Exploitation Risks: ${m.consAndExploitationRisks}
- Elite Hardware Features: ${m.eliteSpecificEngineeringFeatures}
`).join('\n')}

## 4. ACTIONABLE GOVERNANCE FRAMEWORKS
${GOVERNANCE_FRAMEWORKS.map((g) => `- [${g.category}] ${g.title}: ${g.mechanism}`).join('\n')}

## 5. MONITORED SOVEREIGN PROFILES (${COUNTRY_PROFILES.length} NATIONS)
${COUNTRY_PROFILES.map((c) => `* ${c.name} (${c.iso3}) - Archetype: ${c.archetype} | Risk: ${c.riskLevel.toUpperCase()}`).join('\n')}
`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateReportText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const text = generateReportText();
    const blob = new Blob([text], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Neurotech_Diplomacy_Strategic_Assessment_2026.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-3xl max-h-[85vh] bg-[#0c121d] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
        <div className="p-5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-base font-semibold text-white">
              Export Policy Assessment Brief
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto flex-1 font-mono text-xs text-slate-300 bg-slate-950/60 leading-relaxed whitespace-pre-wrap select-all">
          {generateReportText()}
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Plaintext'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .MD Brief</span>
          </button>
        </div>
      </div>
    </div>
  );
};
