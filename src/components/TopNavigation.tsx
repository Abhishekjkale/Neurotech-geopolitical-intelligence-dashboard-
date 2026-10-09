import React from 'react';
import { Download, FileText, Globe, Layers, Cpu, ShieldCheck } from 'lucide-react';

export type ActiveTab = 'map' | 'matrix' | 'technical' | 'governance' | 'chile';

interface TopNavigationProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  onExportReport: () => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  activeTab,
  onTabChange,
  onExportReport
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b0f17]/95 backdrop-blur-md border-b border-slate-800/80 px-6 py-3.5 transition-colors">
      <div className="max-w-[1520px] mx-auto flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-bold tracking-tight text-white whitespace-nowrap">
            Neurotech Diplomacy & Brain-Mapping
          </span>
          <span className="text-xs text-slate-400 font-mono hidden xl:inline">
            October 2026 Policy Brief
          </span>
        </div>

        {/* Zone 2: 4-5 nav links, single-line text navigation with clean active states */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/70">
          <button
            onClick={() => onTabChange('map')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'map'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Strategic World Map</span>
          </button>

          <button
            onClick={() => onTabChange('matrix')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'matrix'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>State Archetypes Matrix</span>
          </button>

          <button
            onClick={() => onTabChange('technical')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'technical'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Technical ASICs & Dual-Use</span>
          </button>

          <button
            onClick={() => onTabChange('governance')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'governance'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Actionable Governance</span>
          </button>

          <button
            onClick={() => onTabChange('chile')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
              activeTab === 'chile'
                ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 shadow-sm'
                : 'text-slate-400 hover:text-emerald-300 hover:bg-slate-800/40'
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chile Case Study (2021)</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onExportReport}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-500 rounded-lg transition-colors whitespace-nowrap shadow-sm shadow-cyan-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export Assessment Brief</span>
            <span className="sm:hidden">Export</span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Tab Scroll Strip */}
      <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pt-3 pb-1 border-t border-slate-800/60 mt-3 text-xs">
        <button
          onClick={() => onTabChange('map')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'map' ? 'bg-slate-800 text-white' : 'text-slate-400'
          }`}
        >
          World Map
        </button>
        <button
          onClick={() => onTabChange('matrix')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'matrix' ? 'bg-slate-800 text-white' : 'text-slate-400'
          }`}
        >
          Archetypes Matrix
        </button>
        <button
          onClick={() => onTabChange('technical')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'technical' ? 'bg-slate-800 text-white' : 'text-slate-400'
          }`}
        >
          Technical ASICs
        </button>
        <button
          onClick={() => onTabChange('governance')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'governance' ? 'bg-slate-800 text-white' : 'text-slate-400'
          }`}
        >
          Governance
        </button>
        <button
          onClick={() => onTabChange('chile')}
          className={`px-3 py-1.5 font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'chile' ? 'bg-emerald-950 text-emerald-300' : 'text-slate-400'
          }`}
        >
          Chile (2021)
        </button>
      </div>
    </header>
  );
};
