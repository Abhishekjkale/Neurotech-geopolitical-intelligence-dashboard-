import React, { useState, useMemo, useRef, useEffect } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';
import {
  COUNTRY_PROFILES,
  STRATEGIC_HOTSPOTS,
  RegimeArchetype,
  CountryGeopoliticalProfile,
  StrategicHotspot
} from '../data/mockData';
import { ZoomIn, ZoomOut, RotateCcw, Filter, MapPin, AlertCircle, ShieldCheck } from 'lucide-react';

interface GeopoliticalMapProps {
  selectedCountry: CountryGeopoliticalProfile;
  onSelectCountry: (country: CountryGeopoliticalProfile) => void;
  onSelectHotspot: (hotspot: StrategicHotspot) => void;
  filterArchetype: RegimeArchetype | 'all';
  onFilterChange: (archetype: RegimeArchetype | 'all') => void;
}

interface CountryPathItem {
  id: string;
  profile?: CountryGeopoliticalProfile;
  d: string;
}

export const GeopoliticalMap: React.FC<GeopoliticalMapProps> = ({
  selectedCountry,
  onSelectCountry,
  onSelectHotspot,
  filterArchetype,
  onFilterChange
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [hoveredCountry, setHoveredCountry] = useState<CountryGeopoliticalProfile | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<StrategicHotspot | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  const width = 960;
  const height = 500;

  // Generate GeoJSON and Projection
  const { paths, countryLookup } = useMemo(() => {
    const projection = geoNaturalEarth1()
      .scale(155)
      .translate([width / 2, height / 2]);

    const pathGenerator = geoPath().projection(projection);

    // Convert TopoJSON to GeoJSON
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const countriesGeo: any = feature(worldData as any, (worldData as any).objects.countries);

    const lookup = new Map<string, CountryGeopoliticalProfile>();
    COUNTRY_PROFILES.forEach((cp) => {
      lookup.set(cp.id, cp);
      lookup.set(cp.numericCode, cp);
      lookup.set(cp.iso3, cp);
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const computedPaths: CountryPathItem[] = countriesGeo.features.map((feat: any) => {
      const id = String(feat.id).padStart(3, '0');
      const profile = lookup.get(id) || lookup.get(String(feat.id));
      const pathD = pathGenerator(feat) || '';
      return {
        id: String(feat.id),
        profile,
        d: pathD
      };
    });

    return { paths: computedPaths, countryLookup: lookup, projection };
  }, [width, height]);

  // Project Hotspots
  const projectedHotspots = useMemo(() => {
    const projection = geoNaturalEarth1()
      .scale(155)
      .translate([width / 2, height / 2]);

    return STRATEGIC_HOTSPOTS.map((hotspot) => {
      const coords = projection(hotspot.coordinates);
      return {
        ...hotspot,
        screenX: coords ? coords[0] : 0,
        screenY: coords ? coords[1] : 0
      };
    });
  }, [width, height]);

  // Zoom controls
  const handleZoomIn = () => setZoom((prev) => Math.min(prev * 1.35, 4.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev / 1.35, 0.85));
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.15 : 0.87;
    setZoom((prev) => Math.max(0.85, Math.min(4.5, prev * factor)));
  };

  // Archetype styles
  const getCountryColor = (profile?: CountryGeopoliticalProfile, isSelected?: boolean) => {
    if (!profile) {
      return {
        fill: '#151d2e',
        stroke: '#24324d',
        hoverFill: '#1c283f'
      };
    }

    if (filterArchetype !== 'all' && profile.archetype !== filterArchetype) {
      return {
        fill: '#131b29',
        stroke: '#1e293b',
        hoverFill: '#1a2436'
      };
    }

    switch (profile.archetype) {
      case 'authoritarian_surveillance':
        return {
          fill: isSelected ? '#581c2f' : '#331522',
          stroke: isSelected ? '#f43f5e' : '#e11d48',
          hoverFill: '#4c1d2e'
        };
      case 'techno_capitalist_democracy':
        return {
          fill: isSelected ? '#0e3b5e' : '#0c2742',
          stroke: isSelected ? '#38bdf8' : '#0284c7',
          hoverFill: '#133a5f'
        };
      case 'developing_non_aligned':
        return {
          fill: isSelected ? '#543b12' : '#32230a',
          stroke: isSelected ? '#fbbf24' : '#d97706',
          hoverFill: '#45310e'
        };
      case 'constitutional_pioneer':
        return {
          fill: isSelected ? '#0d4a36' : '#0b3325',
          stroke: isSelected ? '#34d399' : '#059669',
          hoverFill: '#10523c'
        };
      default:
        return {
          fill: '#1c2538',
          stroke: '#334155',
          hoverFill: '#243048'
        };
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] bg-[#090d16] border border-slate-800/80 rounded-xl overflow-hidden shadow-2xl flex flex-col select-none"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Top Filter and Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        {/* Archetype Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-lg pointer-events-auto shadow-lg">
          <div className="flex items-center gap-1.5 px-2.5 text-xs font-medium text-slate-400">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span>Regimes:</span>
          </div>

          <button
            onClick={() => onFilterChange('all')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              filterArchetype === 'all'
                ? 'bg-slate-800 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Sovereignties
          </button>
          <button
            onClick={() => onFilterChange('constitutional_pioneer')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              filterArchetype === 'constitutional_pioneer'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60'
                : 'text-slate-400 hover:text-emerald-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Constitutional (Chile)
          </button>
          <button
            onClick={() => onFilterChange('techno_capitalist_democracy')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              filterArchetype === 'techno_capitalist_democracy'
                ? 'bg-sky-950 text-sky-300 border border-sky-700/60'
                : 'text-slate-400 hover:text-sky-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            Techno-Capitalist
          </button>
          <button
            onClick={() => onFilterChange('authoritarian_surveillance')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              filterArchetype === 'authoritarian_surveillance'
                ? 'bg-rose-950 text-rose-300 border border-rose-700/60'
                : 'text-slate-400 hover:text-rose-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-400" />
            Authoritarian
          </button>
          <button
            onClick={() => onFilterChange('developing_non_aligned')}
            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              filterArchetype === 'developing_non_aligned'
                ? 'bg-amber-950 text-amber-300 border border-amber-700/60'
                : 'text-slate-400 hover:text-amber-300'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            Non-Aligned
          </button>
        </div>

        {/* Map Zoom Controls */}
        <div className="flex items-center gap-1 p-1 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-lg pointer-events-auto shadow-lg">
          <button
            onClick={handleZoomIn}
            aria-label="Zoom in"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={handleZoomOut}
            aria-label="Zoom out"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetZoom}
            aria-label="Reset zoom"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="flex-1 w-full h-full cursor-grab active:cursor-grabbing">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Subtle Grid Graticule Lines */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#162235" strokeWidth="0.4" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect width={width} height={height} fill="url(#grid)" />

          {/* Map Group with Pan & Zoom Transform */}
          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`} style={{ transformOrigin: 'center center' }}>
            {/* World Countries */}
            {paths.map(({ id, d, profile }) => {
              if (!d) return null;
              const isSelected = selectedCountry?.id === profile?.id;
              const colors = getCountryColor(profile, isSelected);

              return (
                <path
                  key={id}
                  d={d}
                  fill={colors.fill}
                  stroke={colors.stroke}
                  strokeWidth={isSelected ? 1.4 / zoom : 0.6 / zoom}
                  className="transition-colors duration-150 cursor-pointer"
                  style={{ vectorEffect: 'non-scaling-stroke' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (profile) onSelectCountry(profile);
                  }}
                  onMouseEnter={() => {
                    if (profile) setHoveredCountry(profile);
                  }}
                  onMouseLeave={() => setHoveredCountry(null)}
                />
              );
            })}

            {/* Strategic Hotspots Vectors */}
            {projectedHotspots.map((hotspot) => {
              const isChile = hotspot.country === 'Chile';
              const isSelected = selectedCountry?.name === hotspot.country;

              return (
                <g
                  key={hotspot.id}
                  transform={`translate(${hotspot.screenX}, ${hotspot.screenY})`}
                  className="cursor-pointer group"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectHotspot(hotspot);
                    const matchingProfile = COUNTRY_PROFILES.find((c) => c.name === hotspot.country);
                    if (matchingProfile) onSelectCountry(matchingProfile);
                  }}
                  onMouseEnter={() => setHoveredHotspot(hotspot)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                >
                  {/* Subtle target ring */}
                  <circle
                    r={isSelected ? 10 / zoom : 6 / zoom}
                    fill="none"
                    stroke={
                      isChile
                        ? '#34d399'
                        : hotspot.threatOrInnovation === 'threat'
                        ? '#f43f5e'
                        : hotspot.threatOrInnovation === 'innovation'
                        ? '#38bdf8'
                        : '#fbbf24'
                    }
                    strokeWidth={1 / zoom}
                    strokeDasharray={isSelected ? undefined : '2,2'}
                    className={isSelected ? 'animate-ping opacity-40' : 'opacity-70'}
                  />

                  {/* Core marker */}
                  <circle
                    r={isSelected ? 4 / zoom : 3 / zoom}
                    fill={
                      isChile
                        ? '#10b981'
                        : hotspot.threatOrInnovation === 'threat'
                        ? '#ef4444'
                        : hotspot.threatOrInnovation === 'innovation'
                        ? '#0ea5e9'
                        : '#f59e0b'
                    }
                    stroke="#ffffff"
                    strokeWidth={0.8 / zoom}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Floating Hover Tooltip */}
      {hoveredHotspot && (
        <div
          className="absolute z-30 pointer-events-none p-3 bg-slate-950/95 backdrop-blur-md border border-slate-700/80 rounded-lg shadow-2xl max-w-xs transition-opacity duration-150"
          style={{
            left: Math.min(mousePos.x + 12, width - 260),
            top: Math.max(mousePos.y - 80, 16)
          }}
        >
          <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400">
            <MapPin className="w-3.5 h-3.5" />
            <span>{hoveredHotspot.name}</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-300 leading-snug">
            {hoveredHotspot.role}
          </div>
          <div className="mt-1.5 text-[10px] text-slate-400">
            Click to load state strategic dossier
          </div>
        </div>
      )}

      {hoveredCountry && !hoveredHotspot && (
        <div
          className="absolute z-30 pointer-events-none p-3 bg-slate-950/95 backdrop-blur-md border border-slate-700/80 rounded-lg shadow-2xl min-w-[200px] transition-opacity duration-150"
          style={{
            left: Math.min(mousePos.x + 12, width - 220),
            top: Math.max(mousePos.y - 80, 16)
          }}
        >
          <div className="text-xs font-semibold text-white flex items-center justify-between">
            <span>{hoveredCountry.name}</span>
            <span className="text-[10px] font-mono text-slate-400">{hoveredCountry.iso3}</span>
          </div>
          <div className="mt-1 text-[11px] text-slate-300">
            {hoveredCountry.archetype === 'authoritarian_surveillance' && 'Authoritarian Surveillance'}
            {hoveredCountry.archetype === 'techno_capitalist_democracy' && 'Techno-Capitalist'}
            {hoveredCountry.archetype === 'developing_non_aligned' && 'Developing Non-Aligned'}
            {hoveredCountry.archetype === 'constitutional_pioneer' && 'Constitutional Neuro-Rights (Pioneer)'}
          </div>
          <div className="mt-1.5 flex items-center gap-1 text-[10px] text-slate-400 font-mono">
            <span>Risk Tier:</span>
            <span className={`uppercase font-semibold ${
              hoveredCountry.riskLevel === 'critical' ? 'text-rose-400' :
              hoveredCountry.riskLevel === 'elevated' ? 'text-amber-400' : 'text-emerald-400'
            }`}>
              {hoveredCountry.riskLevel}
            </span>
          </div>
        </div>
      )}

      {/* Bottom Bar Legend */}
      <div className="p-3 bg-slate-950/80 backdrop-blur-md border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-slate-500 font-medium">Map Archetypes:</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500/80 border border-emerald-400" />
            <span className="text-slate-300">Constitutional Pioneer</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-sky-500/80 border border-sky-400" />
            <span className="text-slate-300">Techno-Capitalist</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-rose-500/80 border border-rose-400" />
            <span className="text-slate-300">Authoritarian Surveillance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-amber-500/80 border border-amber-400" />
            <span className="text-slate-300">Developing Non-Aligned</span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span>Active Selection:</span>
          <span className="text-cyan-400 font-semibold">{selectedCountry.name}</span>
          <span className="text-slate-600">·</span>
          <span>Hotspot Pins: 8 Strategic Nodes</span>
        </div>
      </div>
    </div>
  );
};
