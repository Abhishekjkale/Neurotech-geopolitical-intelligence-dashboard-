import React from 'react';
import { CHILE_CONSTITUTIONAL_PILLARS } from '../data/mockData';
import { X, Scale, FileText, CheckCircle, ExternalLink, ShieldAlert, Award } from 'lucide-react';

interface ChileCaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChileCaseStudyModal: React.FC<ChileCaseStudyModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
      <div
        className="w-full max-w-4xl max-h-[90vh] bg-[#0c121d] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-900/80 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span>Section 5 Case Study</span>
                <span aria-hidden="true">·</span>
                <span>Republic of Chile</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-mono">Article 19 Enactment (2021)</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                Chile's Constitutional Neuro-Rights Amendment
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {/* 5.1 Context */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>5.1 Legislative Context and Diplomatic Innovation</span>
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs">
              In October 2021, the Republic of Chile became the first nation globally to enact a constitutional amendment explicitly protecting neuro-rights (modifying Article 19 of the National Constitution). Spurred by concerns over unregulated neurotech trials and non-invasive commercial brainwear, Chile established that physical and mental integrity includes the protection of brain activity and the information derived from it.
            </p>
          </div>

          {/* 5.2 Five Pillars */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center justify-between">
              <span>5.2 The Five Constitutional Neuro-Rights Pillars</span>
              <span className="text-emerald-400 text-xs normal-case">Enshrined in Constitutional Law</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CHILE_CONSTITUTIONAL_PILLARS.map((pillar) => (
                <div
                  key={pillar.id}
                  className="p-4 rounded-xl bg-[#090e17] border border-slate-800/90 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-emerald-950 text-emerald-300 font-mono text-[11px] font-bold flex items-center justify-center border border-emerald-800">
                      {pillar.id}
                    </span>
                    <h5 className="font-semibold text-white text-xs">{pillar.title}</h5>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{pillar.summary}</p>
                  <div className="pt-2 border-t border-slate-800/60 text-[11px] text-slate-400">
                    <span className="text-emerald-300/80 font-medium">Mechanism: </span>
                    {pillar.legalMechanism}
                  </div>
                </div>
              ))}

              {/* Comparative Global Relevance Box */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 font-semibold">
                  <FileText className="w-4 h-4" />
                  <span>Multilateral Diplomatic Impact</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Chile's amendment serves as the model text for current UNESCO guidelines, the OECD neuro-recommendations, and the proposed UN Disarmament Verification protocols for auditing high-density neural ASICs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <span className="text-slate-400 text-xs">
            Source: Geopolitical Strategic Assessment (Policy Brief, Page 3)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 text-xs font-semibold rounded-lg transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
