/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  COUNTRY_PROFILES,
  CountryGeopoliticalProfile,
  RegimeArchetype,
  StrategicHotspot,
  COGNITIVE_LIBERTY_PILLARS,
  CHILE_CONSTITUTIONAL_PILLARS
} from './data/mockData';
import { TopNavigation, ActiveTab } from './components/TopNavigation';
import { ExecutiveMetrics } from './components/ExecutiveMetrics';
import { GeopoliticalMap } from './components/GeopoliticalMap';
import { CountryDossier } from './components/CountryDossier';
import { ComparativeMatrixView } from './components/ComparativeMatrixView';
import { TechnicalSpecsView } from './components/TechnicalSpecsView';
import { GovernanceView } from './components/GovernanceView';
import { ChileCaseStudyModal } from './components/ChileCaseStudyModal';
import { ExportModal } from './components/ExportModal';
import {
  Search,
  Scale,
  ShieldCheck,
  Brain,
  Activity,
  Layers,
  ArrowRight,
  ExternalLink,
  Info
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('map');
  const [selectedCountry, setSelectedCountry] = useState<CountryGeopoliticalProfile>(
    COUNTRY_PROFILES.find((c) => c.name === 'Chile') || COUNTRY_PROFILES[0]
  );
  const [filterArchetype, setFilterArchetype] = useState<RegimeArchetype | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isChileModalOpen, setIsChileModalOpen] = useState<boolean>(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState<boolean>(false);

  // Filtered countries for quick selection
  const filteredCountries = COUNTRY_PROFILES.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.iso3.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesArchetype =
      filterArchetype === 'all' || c.archetype === filterArchetype;
    return matchesSearch && matchesArchetype;
  });

  const handleSelectHotspot = (hotspot: StrategicHotspot) => {
    const profile = COUNTRY_PROFILES.find((c) => c.name === hotspot.country);
    if (profile) {
      setSelectedCountry(profile);
    }
  };

  const handleSelectArchetypeFromMatrix = (archetype: RegimeArchetype) => {
    setFilterArchetype(archetype);
    const matching = COUNTRY_PROFILES.find((c) => c.archetype === archetype);
    if (matching) {
      setSelectedCountry(matching);
    }
    setActiveTab('map');
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <TopNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onExportReport={() => setIsExportModalOpen(true)}
      />

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-[1520px] w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Executive Summary Metrics Strip (Visible across primary operational views) */}
        <ExecutiveMetrics />

        {/* View 1: Strategic World Map & Split Dossier */}
        {activeTab === 'map' && (
          <div className="space-y-6">
            {/* Country Quick Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter sovereign entity by nation, ISO, or region..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-950/70 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              {/* Quick Select Quick Chips (Text buttons) */}
              <div className="flex items-center gap-1.5 overflow-x-auto text-xs py-1">
                <span className="text-slate-500 font-medium shrink-0 text-[11px] pr-1">
                  Quick Focus:
                </span>
                {['Chile', 'United States', 'China', 'Kenya', 'Germany', 'Switzerland'].map((cName) => {
                  const target = COUNTRY_PROFILES.find((c) => c.name === cName);
                  if (!target) return null;
                  const isSelected = selectedCountry.name === cName;
                  return (
                    <button
                      key={cName}
                      onClick={() => setSelectedCountry(target)}
                      className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap shrink-0 ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-medium'
                          : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      {cName}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Split Screen Grid: Interactive Map (Left) & Analytical Dossier (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Interactive Map + Cognitive Liberty Section */}
              <div className="lg:col-span-7 space-y-6">
                <GeopoliticalMap
                  selectedCountry={selectedCountry}
                  onSelectCountry={setSelectedCountry}
                  onSelectHotspot={handleSelectHotspot}
                  filterArchetype={filterArchetype}
                  onFilterChange={setFilterArchetype}
                />

                {/* Section 3: Legal & Ethical Frameworks - Core Pillars of Cognitive Liberty */}
                <div className="p-6 rounded-xl bg-[#0d131f] border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4 text-cyan-400" />
                      <h3 className="text-sm font-semibold text-white tracking-wide">
                        Section 3. Core Pillars of Cognitive Liberty & Neural Sovereignty
                      </h3>
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Human Rights Doctrine
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    Traditional biometric privacy treats static markers (fingerprints, iris scans) as immutable identifiers. However, neural data provides real-time access to affective states, subconscious associations, implicit memory recall, and pre-conscious decision-making processes.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
                    {COGNITIVE_LIBERTY_PILLARS.map((col, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1.5"
                      >
                        <div className="text-xs font-semibold text-cyan-300">
                          {col.pillar}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {col.definition}
                        </p>
                        <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-800/60">
                          <span className="text-slate-300 font-medium">Vector: </span>
                          {col.diplomaticVector}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Analytical Dossier for Active Selected Nation */}
              <div className="lg:col-span-5 sticky top-20">
                <CountryDossier
                  country={selectedCountry}
                  onOpenChileStudy={() => setIsChileModalOpen(true)}
                />
              </div>
            </div>
          </div>
        )}

        {/* View 2: Comparative Matrix */}
        {activeTab === 'matrix' && (
          <ComparativeMatrixView
            onSelectArchetypeOnMap={handleSelectArchetypeFromMatrix}
          />
        )}

        {/* View 3: Technical Specs & Dual-Use */}
        {activeTab === 'technical' && <TechnicalSpecsView />}

        {/* View 4: Actionable Governance */}
        {activeTab === 'governance' && <GovernanceView />}

        {/* View 5: Dedicated Chile Case Study View */}
        {activeTab === 'chile' && (
          <div className="space-y-6 max-w-5xl mx-auto py-2">
            <div className="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                  <span>Section 5 Deep Dive</span>
                  <span aria-hidden="true">·</span>
                  <span>National Constitution Modification</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400 font-mono">Article 19 Enacted Oct 2021</span>
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Case Study: Chile's Constitutional Neuro-Rights Amendment
                </h2>
              </div>
              <button
                onClick={() => {
                  const chile = COUNTRY_PROFILES.find((c) => c.name === 'Chile');
                  if (chile) setSelectedCountry(chile);
                  setActiveTab('map');
                }}
                className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-lg transition-colors self-start md:self-auto"
              >
                <span>View Chile on Strategic Map</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
                5.1 Legislative Context and Diplomatic Innovation
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                In October 2021, the Republic of Chile became the first nation globally to enact a constitutional amendment explicitly protecting neuro-rights (modifying Article 19 of the National Constitution). Spurred by concerns over unregulated neurotech trials and non-invasive commercial brainwear, Chile established that physical and mental integrity includes the protection of brain activity and the information derived from it.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">
                5.2 The Five Constitutional Neuro-Rights Pillars
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {CHILE_CONSTITUTIONAL_PILLARS.map((p) => (
                  <div
                    key={p.id}
                    className="p-5 rounded-xl bg-[#0d131f] border border-slate-800 space-y-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-emerald-950 border border-emerald-800 font-mono font-bold text-emerald-300 flex items-center justify-center text-xs">
                        {p.id}
                      </span>
                      <h4 className="text-sm font-bold text-white">{p.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.summary}</p>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                      <span className="text-emerald-300 font-medium">Constitutional Mechanism: </span>
                      {p.legalMechanism}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-[#090d16] px-6 py-4 text-xs text-slate-400">
        <div className="max-w-[1520px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>Neurotech Diplomacy & Geopolitics Report</span>
            <span aria-hidden="true">·</span>
            <span>Policy Brief October 2026</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-400">BCI Geopolitics & Security</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>OECD / UNESCO / UN / IEEE Brain Initiative Consensus</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ChileCaseStudyModal
        isOpen={isChileModalOpen}
        onClose={() => setIsChileModalOpen(false)}
      />
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}
