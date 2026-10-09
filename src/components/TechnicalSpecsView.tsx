import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Thermometer,
  ShieldAlert,
  Radio,
  Crosshair,
  Zap,
  ArrowRight,
  Database,
  Lock
} from 'lucide-react';

export const TechnicalSpecsView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'dual_use' | 'security'>('architecture');

  return (
    <div className="space-y-8 max-w-[1440px] mx-auto py-2">
      {/* View Header */}
      <div className="border-b border-slate-800 pb-5">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
          <span>Section 2 & 4.3 Technical Assessment</span>
          <span aria-hidden="true">·</span>
          <span>Silicon Engineering & Bio-Physics</span>
          <span aria-hidden="true">·</span>
          <span className="text-cyan-400 font-mono">ASIC Architectures</span>
        </div>
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Technical & Engineering Analysis of Brain-Mapping Chips
        </h2>
        <p className="mt-2 text-sm text-slate-300 max-w-4xl leading-relaxed">
          Detailed engineering evaluation of microelectrode channel densities, thermal dissipation thresholds inside cortical tissue, edge ASIC neuromorphic algorithms, and the dual-use translation from clinical motor rehabilitation to cognitive defense platforms.
        </p>

        {/* View Sub-Tabs */}
        <div className="flex items-center gap-2 mt-5">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'architecture'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            2.1 & 2.2 Silicon & Signal Processing
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'security'
                ? 'bg-rose-500 text-white font-semibold shadow-md shadow-rose-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            Hardware Security Deficit
          </button>
          <button
            onClick={() => setActiveTab('dual_use')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'dual_use'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-md shadow-amber-500/20'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            4.3 Dual-Use Neuroscience Dilemma
          </button>
        </div>
      </div>

      {/* Tab 1: Silicon Architecture & Signal Processing */}
      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 2.1 Bandwidth & Channel Density */}
            <div className="p-6 rounded-xl bg-[#0d131f] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-sky-400 font-semibold text-base">
                <Activity className="w-5 h-5" />
                <h3>2.1 Bandwidth & Channel Density Architecture</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern neuro-chips rely on high-density microelectrode arrays (MEAs) or flexible polymer threads to record single-unit action potentials across motor and prefrontal cortices.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-white">
                    <span>Direct Intracortical MEA Arrays</span>
                    <span className="font-mono text-cyan-400">&gt;10,000 Active Channels</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Operate at high sample rates (30 kHz per channel) to record single-unit action potentials with high signal-to-noise ratios (SNR), producing massive raw telemetry streams requiring onboard conditioning.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>Endovascular BCIs (Stent-Electrode)</span>
                    <span className="font-mono text-slate-400">Minimally Invasive</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Offer vascular access via the sagittal sinus without open craniotomy. However, they achieve lower signal-to-noise ratios (SNR) and are restricted to local field potentials (LFPs).
                  </p>
                </div>
              </div>
            </div>

            {/* 2.2 Edge vs Cloud & Thermal Dissipation */}
            <div className="p-6 rounded-xl bg-[#0d131f] border border-slate-800 space-y-4">
              <div className="flex items-center gap-2.5 text-indigo-400 font-semibold text-base">
                <Thermometer className="w-5 h-5 text-rose-400" />
                <h3>2.2 Signal Processing at Edge vs. Cloud Architectures</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transmitting uncompressed neural streams wirelessly generates unacceptable thermal dissipation inside neural tissue (&gt;1.0°C rise causes cell death). Modern chips require on-chip Application-Specific Integrated Circuits (ASICs).
              </p>

              <div className="p-4 rounded-lg bg-rose-950/20 border border-rose-900/50 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-rose-300">
                  <span>Thermal Ceiling Limit</span>
                  <span className="font-mono">&lt; 1.0 °C Maximum ΔT</span>
                </div>
                <p className="text-xs text-rose-200/80 leading-relaxed">
                  Severe bio-physical constraint: Cellular necrosis begins when chronic heat flux exceeds 1°C in cortical gray matter, enforcing strict sub-2.5 mW ASIC power ceilings.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="font-semibold text-white block">Inline Edge Signal Conditioning</span>
                  <p className="text-slate-400">
                    ASICs execute hardware bandpass filtering, real-time spike detection, and spatial compression algorithms directly on the silicon die.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                  <span className="font-semibold text-white block">Neuromorphic Decoding: SNNs & Quantized Transformers</span>
                  <p className="text-slate-400">
                    Lightweight Spiking Neural Networks (SNNs) or quantized Transformer modules translate action potentials into discrete motor/semantic vectors, transmitting only low-bandwidth compressed tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architecture Pipeline Diagram */}
          <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">
              Silicon Processing Pipeline Flow
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-cyan-400 font-mono">STAGE 01</span>
                <div className="font-semibold text-white">Action Potential Recording</div>
                <p className="text-slate-400 text-[11px]">10,000+ MEA channels sampled at 30 kHz (1.2 Gbps raw stream)</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-sky-400 font-mono">STAGE 02</span>
                <div className="font-semibold text-white">Edge ASIC Conditioning</div>
                <p className="text-slate-400 text-[11px]">Inline bandpass filtering & real-time spike sorting under &lt;2.5 mW power budget</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-indigo-400 font-mono">STAGE 03</span>
                <div className="font-semibold text-white">On-Die Neuromorphic Decode</div>
                <p className="text-slate-400 text-[11px]">Quantized SNN / Transformer translates spikes into motor/semantic intent</p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-[10px] text-emerald-400 font-mono">STAGE 04</span>
                <div className="font-semibold text-white">Low-Bandwidth Telemetry</div>
                <p className="text-slate-400 text-[11px]">Decoded vectors emitted externally, preventing thermal tissue heating (&lt;1.0°C)</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Hardware Security Deficit */}
      {activeTab === 'security' && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-rose-950/20 border border-rose-900/60 space-y-4">
            <div className="flex items-center gap-2.5 text-rose-400 font-semibold text-lg">
              <ShieldAlert className="w-5 h-5" />
              <h3>Critical Finding: Hardware Security Deficit</h3>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed max-w-4xl">
              Current commercial BCI implants prioritize minimal power consumption over cryptographic security. Most ASICs lack dedicated Hardware Roots of Trust (HSM/SE), leaving RF telemetry susceptible to side-channel analysis, unauthorized firmware flashing, and unencrypted neural telemetry injection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#0d131f] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <Zap className="w-4 h-4" />
                <h4>Side-Channel RF Analysis</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Passive electromagnetic emissions during on-die SNN computation allow external interceptors to reconstruct brain state vectors without penetrating the implant.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0d131f] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <Lock className="w-4 h-4" />
                <h4>Unauthorized Firmware Flashing</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Absence of cryptographic signature verification on bootloaders enables malicious actors to overwrite on-chip neural decoders or activate covert telemetry backdoors.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#0d131f] border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <Radio className="w-4 h-4" />
                <h4>Unencrypted Telemetry Injection</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open wireless RF links permit adversarial injection of false stimulation vectors directly into closed-loop deep brain controllers without user awareness.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Dual-Use Neuroscience Dilemma */}
      {activeTab === 'dual_use' && (
        <div className="space-y-6">
          <div className="p-6 rounded-xl bg-[#0d131f] border border-slate-800 space-y-4">
            <div className="flex items-center gap-2.5 text-amber-400 font-semibold text-lg">
              <Crosshair className="w-5 h-5" />
              <h3>4.3 The Dual-Use Dilemma in Neuroscience</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
              Neurotechnologies engineered for clinical rehabilitation—such as stroke recovery, motor prosthesis control, or treatment-resistant depression therapy—possess inherent dual-use potential. The underlying mathematical decoders that interpret motor cortex spikes for robotic limb motion are functionally identical to controllers used for teleoperating unmanned aerial vehicles (UAVs) or controlling cyber-defense platforms directly via thought.
            </p>
          </div>

          {/* Threat Vector Callout Box from Section 4.3 */}
          <div className="p-6 rounded-xl bg-rose-950/30 border border-rose-900/60 space-y-4">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm uppercase tracking-wider font-mono">
              <ShieldAlert className="w-4 h-4" />
              <span>Threat Vector: Cognitive Warfare & Direct Interrogation</span>
            </div>
            <p className="text-sm text-rose-100 leading-relaxed">
              Closed-loop deep brain stimulation (DBS) and transcranial focused ultrasound (tFUS) can alter mood, risk tolerance, and stress responses. Weaponized applications include non-invasive cognitive fatigue suppression, algorithmic loyalty reinforcement in military operators, and covert neural decoding during captive interrogation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-amber-300 block">Cognitive Fatigue Suppression</span>
                <p className="text-xs text-slate-300">
                  Using tFUS or targeted closed-loop stimulation to artificially maintain operator alertness over 72+ hours of combat duty.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-rose-300 block">Algorithmic Loyalty Reinforcement</span>
                <p className="text-xs text-slate-300">
                  Continuous neuro-feedback loops designed to detect and penalize ideological doubt or sub-vocal dissenting thought patterns.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
                <span className="text-xs font-bold text-purple-300 block">Captive Neural Interrogation</span>
                <p className="text-xs text-slate-300">
                  Passive semantic decoders extracting implicit memory recall and classified intelligence without verbal confession.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
