/**
 * Geopolitical Strategic Assessment: Neurotech Diplomacy & Brain-Mapping
 * Source: October 2026 Policy Brief on BCI Geopolitics & Security
 */

export type RegimeArchetype =
  | 'authoritarian_surveillance'
  | 'techno_capitalist_democracy'
  | 'developing_non_aligned'
  | 'constitutional_pioneer';

export type RiskLevel = 'critical' | 'elevated' | 'moderate' | 'monitored';

export interface ConstitutionalPillar {
  id: number;
  title: string;
  summary: string;
  legalMechanism: string;
}

export interface EliteEngineeringFeature {
  title: string;
  mechanism: string;
  tacticalImplication: string;
}

export interface CountryGeopoliticalProfile {
  id: string; // ISO 3166-1 numeric or alpha-3
  iso3: string;
  numericCode: string;
  name: string;
  region: string;
  archetype: RegimeArchetype;
  geopoliticalGoal: string;
  societalFocus: string;
  exploitationRisks: string[];
  eliteHardwareFeatures: EliteEngineeringFeature[];
  dualUseStatus: {
    clinicalApp: string;
    militaryDualUse: string;
    threatVector: string;
  };
  hardwareSecurityDeficit: {
    hasDedicatedHSM: boolean;
    rfTelemetryVulnerability: string;
    edgeDecodingArch: string;
  };
  policyStatus: {
    hasNeuroRightsLaw: boolean;
    unTreatySignatory: boolean;
    dataSovereigntyModel: string;
  };
  riskLevel: RiskLevel;
  highlightedCaseStudy?: boolean;
  coordinates: [number, number]; // [longitude, latitude]
  summary: string;
}

export interface StrategicHotspot {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
  role: string;
  description: string;
  threatOrInnovation: 'innovation' | 'threat' | 'sovereignty' | 'governance';
}

export interface RegimeMatrixItem {
  archetype: RegimeArchetype;
  label: string;
  geopoliticalGoal: string;
  societalMedicalFocus: string;
  consAndExploitationRisks: string;
  eliteSpecificEngineeringFeatures: string;
  tacticalImplication: string;
}

export interface GovernanceSolution {
  category: 'Hardware-Level Guardrails' | 'Diplomatic Treaties & Non-Proliferation' | 'Data Sovereignty & Biometric Property Rights';
  title: string;
  mechanism: string;
  policyObjective: string;
  mitigationEffect: string;
  iconType: string;
}

// 1. Executive Summary Metrics
export const EXECUTIVE_METRICS = {
  activeElectrodesPerArray: '10,000+',
  activeElectrodesLabel: 'Active Electrodes / Array',
  activeElectrodesSub: 'Direct intracortical microelectrode arrays (MEAs)',
  rawBandwidthDensity: '1.2 Gbps',
  rawBandwidthLabel: 'Raw Bandwidth Density',
  rawBandwidthSub: 'Uncompressed neural stream telemetry',
  onChipPowerBudget: '< 2.5 mW',
  onChipPowerLabel: 'On-Chip Power Budget',
  onChipPowerSub: 'Ultra-low dissipation ASIC edge architecture',
  thermalDissipationLimit: '< 1.0 °C',
  thermalLimitLabel: 'Tissue Thermal Ceiling',
  thermalLimitSub: 'Cellular necrosis boundary in neural cortices',
  sampleRatePerChannel: '30 kHz',
  sampleRateLabel: 'Sampling Resolution',
  sampleRateSub: 'Single-unit action potential recording'
};

// 2. Pillars of Cognitive Liberty (Section 3 of PDF)
export const COGNITIVE_LIBERTY_PILLARS = [
  {
    pillar: 'Mental Privacy',
    definition: 'Absolute protection of brain activity against unauthorized extraction, passive decoding, or commercial monetization without explicit, revocable consent.',
    diplomaticVector: 'Prevent foreign adversaries and private monopolies from constructing predictive cognitive models of political leaders, military personnel, or civilian populations.'
  },
  {
    pillar: 'Personal Identity',
    definition: 'Preserving the psychological continuity of selfhood and preventing boundary dissolution caused by continuous AI-assisted neural feedback loops.',
    diplomaticVector: 'Safeguards human psychological sovereignty against invasive closed-loop neural calibration.'
  },
  {
    pillar: 'Free Will & Agency',
    definition: 'Safeguarding autonomous decision-making from external neural manipulation, micro-targeted cognitive steering, or direct closed-loop stimulation.',
    diplomaticVector: 'Prevents covert neural steering, cognitive fatigue manipulation, and algorithmic persuasion.'
  }
];

// 3. Chile Case Study - Five Constitutional Pillars (Section 5 of PDF)
export const CHILE_CONSTITUTIONAL_PILLARS: ConstitutionalPillar[] = [
  {
    id: 1,
    title: 'Protection of Mental Privacy',
    summary: 'Restricts automatic harvesting of brain data and prohibits commercialization without explicit legislative approval.',
    legalMechanism: 'Enacted via Article 19 constitutional amendment (October 2021). Classifies brain telemetry as non-transferable biological identity.'
  },
  {
    id: 2,
    title: 'Protection of Personal Identity',
    summary: 'Limits neuro-technological interventions that alter personal self-perception, memory structures, or individual consciousness.',
    legalMechanism: 'Mandatory clinical oversight on closed-loop neurofeedback systems to prevent psychological continuity erosion.'
  },
  {
    id: 3,
    title: 'Safeguarding Free Will',
    summary: 'Prohibits closed-loop systems from exerting unnoticed influence on human choice architecture and volition.',
    legalMechanism: 'Bans unverified cognitive steering algorithms and sub-threshold neural nudging.'
  },
  {
    id: 4,
    title: 'Equitable Access to Enhancement',
    summary: 'Ensures neuro-enhancement systems do not create insurmountable genetic or technological caste divisions.',
    legalMechanism: 'Constitutional guarantee against the creation of stratified socio-economic neuro-classes.'
  },
  {
    id: 5,
    title: 'Protection Against Algorithmic Bias',
    summary: 'Requires neural decoding models to be audited for systemic bias and non-consensual cognitive manipulation.',
    legalMechanism: 'Mandatory algorithmic auditing for all medical and commercial brainwear firmware.'
  }
];

// 4. Comparative Matrix: State Archetypes & Elite Exploitation (Section 6 of PDF)
export const REGIME_ARCHETYPES_MATRIX: RegimeMatrixItem[] = [
  {
    archetype: 'authoritarian_surveillance',
    label: 'Authoritarian Surveillance State',
    geopoliticalGoal: 'Internal Cognitive Control & Subversion Defense',
    societalMedicalFocus: 'State-subsidized neuro-rehabilitation, mass productivity optimization.',
    consAndExploitationRisks: 'Mandatory neural tracking in public sectors; predictive criminalization based on sub-vocal thought patterns.',
    eliteSpecificEngineeringFeatures: 'Hardware Kill-Switches: Firmware-level security bypasses, encrypted private communication channels, immunity from central monitoring ASICs.',
    tacticalImplication: 'Governing elites utilize air-gapped, zero-telemetry neural implants equipped with hardware-level cryptographic key management, securing personal immunity from automated surveillance while citizens remain tracked.'
  },
  {
    archetype: 'techno_capitalist_democracy',
    label: 'Techno-Capitalist / Democracy',
    geopoliticalGoal: 'Economic Maximization & Market Dominance',
    societalMedicalFocus: 'Advanced prosthetics, consumer neuro-wearables, cognitive enhancement.',
    consAndExploitationRisks: 'Monetization of raw neural streams, predatory neuro-targeted advertising, extreme cognitive socio-economic divide.',
    eliteSpecificEngineeringFeatures: 'Bandwidth Tiers: Low-latency neural decoding priority, local offline AI model execution, zero-telemetry hardware modes.',
    tacticalImplication: 'Creates an asymmetric technological hierarchy where corporate and financial elites access unthrottled high-bandwidth cognitive edge feeds while standard users are subjected to telemetric data harvesting.'
  },
  {
    archetype: 'developing_non_aligned',
    label: 'Developing Non-Aligned Nation',
    geopoliticalGoal: 'Technological Sovereignty & Protection',
    societalMedicalFocus: 'Localized medical therapy, subsidized basic neuro-care.',
    consAndExploitationRisks: 'Vulnerability to neuro-colonialism, foreign neural data harvesting, asymmetric technology dependencies.',
    eliteSpecificEngineeringFeatures: 'Sovereign Firmware Overrides: Hardware locks enforcing local data residence, resistance to foreign telemetry backdoors.',
    tacticalImplication: 'Struggles against foreign clinical exploitation where multinational firms harvest diverse neural datasets while denying access to proprietary decoder foundation weights.'
  },
  {
    archetype: 'constitutional_pioneer',
    label: 'Constitutional Neuro-Rights Pioneer',
    geopoliticalGoal: 'Human Rights Precedent & Cognitive Sovereignty',
    societalMedicalFocus: 'Equitable neuro-care, constitutional protection of mental integrity.',
    consAndExploitationRisks: 'Economic retaliation from offshore neuro-monopolies, regulatory border arbitrage.',
    eliteSpecificEngineeringFeatures: 'Open Auditable Firmware: Public-key verification, mandatory bias audits, constitutional prohibition of privileged hardware tiers.',
    tacticalImplication: 'Establishes a global benchmark for multilateral treaty negotiations by modifying Article 19 to enshrine mental integrity as an immutable human right.'
  }
];

// 5. Actionable Governance Frameworks & Technical Solutions (Section 7 of PDF)
export const GOVERNANCE_FRAMEWORKS: GovernanceSolution[] = [
  {
    category: 'Hardware-Level Guardrails',
    title: 'Zero-Knowledge Cryptographic Enclaves',
    mechanism: 'Mandate on-chip execution of zero-knowledge proofs (ZKPs), ensuring raw neural signals never leave the physical ASIC die. External devices receive only verified computation outputs without exposing underlying neural activity.',
    policyObjective: 'Eliminate telemetry interception & side-channel extraction at the silicon layer.',
    mitigationEffect: 'Prevents extraction of affective states, implicit memories, and sub-conscious ideation.',
    iconType: 'shield'
  },
  {
    category: 'Hardware-Level Guardrails',
    title: 'Physical Air-Gap Switches',
    mechanism: 'Require hardware-level manual disengagers on all wireless RF telemetry blocks inside BCI implants to guarantee user-controlled isolation.',
    policyObjective: 'Provide guaranteed sovereign control over implant communications.',
    mitigationEffect: 'Immunizes user implants against remote firmware overwrites and involuntary neural stream broadcast.',
    iconType: 'radio'
  },
  {
    category: 'Diplomatic Treaties & Non-Proliferation',
    title: 'Cognitive Warfare Non-Proliferation Convention',
    mechanism: 'Establish international agreements prohibiting the weaponization of closed-loop stimulation, direct neural interrogation systems, and mass cognitive profiling algorithms.',
    policyObjective: 'Enforce international prohibitions akin to chemical/biological weapons treaties.',
    mitigationEffect: 'Restricts state actors from deploying tFUS fatigue suppression or captive neural interrogation decoders.',
    iconType: 'scroll'
  },
  {
    category: 'Diplomatic Treaties & Non-Proliferation',
    title: 'UN Verification Protocol',
    mechanism: 'Create an inspection mechanism under the UN Disarmament Framework to audit high-density neural ASICs and dual-use neurotech facilities.',
    policyObjective: 'Independent multilateral inspection of semiconductor foundries and BCI firmware repositories.',
    mitigationEffect: 'Detects undeclared military dual-use decoders and covert telemetry backdoors.',
    iconType: 'check-circle'
  },
  {
    category: 'Data Sovereignty & Biometric Property Rights',
    title: 'Organ-Donation Model for Neural Data',
    mechanism: 'Reclassify neural datasets as immutable biological human tissue. Commercial monetization, cross-border transfer, or algorithmic training on neural data must require explicit opt-in consent protocols modeled after organ donation frameworks.',
    policyObjective: 'Dismantle exploitative neuro-colonial data extraction markets.',
    mitigationEffect: 'Outlaws unilateral corporate IP claims over human cognitive recordings.',
    iconType: 'heart-handshake'
  },
  {
    category: 'Data Sovereignty & Biometric Property Rights',
    title: 'Sovereign Neural Repositories',
    mechanism: 'Enforce regional data localization laws requiring all neural decoding models trained on citizens to remain within local jurisdiction.',
    policyObjective: 'Safeguard demographic cognitive models from adversarial foreign access.',
    mitigationEffect: 'Blocks foreign states from assembling predictive behavioral models of sovereign populations.',
    iconType: 'database'
  }
];

// 6. Strategic Hotspot Nodes
export const STRATEGIC_HOTSPOTS: StrategicHotspot[] = [
  {
    id: 'santiago-chile',
    name: 'Santiago Neuro-Rights Constitutional Hub',
    country: 'Chile',
    coordinates: [-70.6693, -33.4489],
    role: 'Global Pioneer of Constitutional Neuro-Protection',
    description: 'Passed constitutional amendment modifying Article 19 in October 2021, establishing the Five Constitutional Neuro-Rights Pillars.',
    threatOrInnovation: 'sovereignty'
  },
  {
    id: 'silicon-valley-usa',
    name: 'Techno-Capitalist BCI Foundry Belt',
    country: 'United States',
    coordinates: [-122.0839, 37.3861],
    role: 'Commercial BCI Monopolies & High-Bandwidth Tiering',
    description: 'Home to leading commercial neural implants with >10,000 active electrodes, tiered consumer bandwidth, and defense dual-use drone control pipelines.',
    threatOrInnovation: 'innovation'
  },
  {
    id: 'beijing-prc',
    name: 'State Neuro-Surveillance Research Grid',
    country: 'China',
    coordinates: [116.4074, 39.9042],
    role: 'Authoritarian Cognitive Oversight & Sub-Vocal Monitoring',
    description: 'Pioneering mandatory public-sector tracking, predictive criminalization models, and elite-specific hardware kill-switch bypasses.',
    threatOrInnovation: 'threat'
  },
  {
    id: 'geneva-un',
    name: 'UN Disarmament & Neuro-Rights Forum',
    country: 'Switzerland',
    coordinates: [6.1432, 46.2044],
    role: 'International Non-Proliferation & OECD/UNESCO Consensus',
    description: 'Drafting the Cognitive Warfare Non-Proliferation Convention and international organ-donation frameworks for brain data.',
    threatOrInnovation: 'governance'
  },
  {
    id: 'nairobi-kenya',
    name: 'Global South Neuro-Colonial Defense Front',
    country: 'Kenya',
    coordinates: [36.8219, -1.2921],
    role: 'Counter-Exploitation & Sovereign Neural Localization',
    description: 'Pushing back against predatory foreign clinical trials harvesting rare neuro-atypical and multi-ethnic neural datasets.',
    threatOrInnovation: 'threat'
  },
  {
    id: 'hsinchu-taiwan',
    name: 'Sub-3nm Neural ASIC Fabrication Epicenter',
    country: 'Taiwan',
    coordinates: [120.9688, 24.8039],
    role: 'Semiconductor Foundry Dominance (The "Neuro-Divide")',
    description: 'Key bottleneck in the Neuro-Divide; fabricates ultra-low-power (<2.5 mW) edge ASICs executing Spiking Neural Networks (SNNs).',
    threatOrInnovation: 'innovation'
  },
  {
    id: 'new-delhi-india',
    name: 'Non-Aligned Sovereign Data Repository',
    country: 'India',
    coordinates: [77.2090, 28.6139],
    role: 'Developing Non-Aligned Champion for Data Residence',
    description: 'Enforcing strict local data residency mandates to prevent multinational brain data harvesting.',
    threatOrInnovation: 'sovereignty'
  },
  {
    id: 'brasilia-brazil',
    name: 'Latin American Neuro-Treaty Coalition',
    country: 'Brazil',
    coordinates: [-47.8825, -15.7942],
    role: 'Regional Expansion of Chilean Neuro-Rights Doctrines',
    description: 'Advancing regional pacts to adopt constitutional protections and prohibit unconsented trans-border neural transfers.',
    threatOrInnovation: 'governance'
  }
];

// 7. Comprehensive Country Profiles (Mapping PDF Concepts to Global Entities)
export const COUNTRY_PROFILES: CountryGeopoliticalProfile[] = [
  {
    id: '152',
    iso3: 'CHL',
    numericCode: '152',
    name: 'Chile',
    region: 'South America',
    archetype: 'constitutional_pioneer',
    geopoliticalGoal: 'Sovereign Cognitive Integrity & Human Rights Precedent',
    societalFocus: 'Universal constitutional protection of mental integrity, public neuro-rights.',
    exploitationRisks: [
      'Offshore regulatory arbitrage by multinational neuro-corporations',
      'Capital flight from stringent clinical trial regulations',
      'Cross-border digital telemetry leaks before physical air-gap laws'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Open Auditable Firmware',
        mechanism: 'Firmware cryptographic hashing verified by public regulatory bodies.',
        tacticalImplication: 'Guarantees equal protection and bans segregated elite tiers.'
      },
      {
        title: 'Mandatory Bias Audits',
        mechanism: 'Third-party algorithmic verification against cognitive steering.',
        tacticalImplication: 'Protects citizen volition and democratic choice architecture.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Non-invasive brainwear & rehabilitation without behavioral conditioning',
      militaryDualUse: 'Strict constitutional prohibition of cognitive warfare deployment',
      threatVector: 'Threat of isolation if multinational trade agreements bypass domestic laws'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: true,
      rfTelemetryVulnerability: 'Low - mandates localized encryption and user consent checks',
      edgeDecodingArch: 'Audited SNNs with transparent weight registries'
    },
    policyStatus: {
      hasNeuroRightsLaw: true,
      unTreatySignatory: true,
      dataSovereigntyModel: 'Constitutional Biological Protection (Article 19)'
    },
    riskLevel: 'monitored',
    highlightedCaseStudy: true,
    coordinates: [-70.6693, -33.4489],
    summary: 'First nation globally to enact a constitutional amendment explicitly protecting neuro-rights (Article 19). Sets the gold standard for the Five Pillars of Cognitive Liberty.'
  },
  {
    id: '840',
    iso3: 'USA',
    numericCode: '840',
    name: 'United States',
    region: 'North America',
    archetype: 'techno_capitalist_democracy',
    geopoliticalGoal: 'Economic Maximization, Commercial Hegemony & Military Supremacy',
    societalFocus: 'Advanced commercial prosthetics, consumer neuro-wearables, venture-backed cognitive enhancement.',
    exploitationRisks: [
      'Commercial monetization of raw neural telemetry streams',
      'Predatory neuro-targeted advertising based on pre-conscious affective states',
      'Extreme cognitive socio-economic divide separating enhanced elites from general populace'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Bandwidth Tiering',
        mechanism: 'Low-latency priority queues and edge compute allocation.',
        tacticalImplication: 'Executive access to low-latency neural decoding priority and offline local AI model execution.'
      },
      {
        title: 'Zero-Telemetry Modes',
        mechanism: 'Hardware register toggles that suppress cloud telemetry sync.',
        tacticalImplication: 'Allows corporate leaders to retain private thoughts while commercial users upload continuous telemetry.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Stroke recovery, motor prosthetics, treatment-resistant depression therapy',
      militaryDualUse: 'Direct neural teleoperation of UAV swarms & thought-driven cyber defense platforms',
      threatVector: 'Cognitive warfare fatigue suppression and closed-loop stimulation in military personnel'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: false,
      rfTelemetryVulnerability: 'Critical - commercial implants omit HSMs to preserve power budget (<2.5 mW)',
      edgeDecodingArch: 'Quantized Transformer modules with RF vector uplink'
    },
    policyStatus: {
      hasNeuroRightsLaw: false,
      unTreatySignatory: false,
      dataSovereigntyModel: 'Corporate Intellectual Property / Trade Secret'
    },
    riskLevel: 'elevated',
    coordinates: [-95.7129, 37.0902],
    summary: 'Global leader in venture-backed BCI implants with >10,000 active electrodes. Drives aggressive commercialization and dual-use defense teleoperation systems.'
  },
  {
    id: '156',
    iso3: 'CHN',
    numericCode: '156',
    name: 'China',
    region: 'East Asia',
    archetype: 'authoritarian_surveillance',
    geopoliticalGoal: 'Internal Cognitive Control, Subversion Defense & Collective Synchronization',
    societalFocus: 'State-subsidized neuro-rehabilitation, mass industrial productivity optimization, state cohesion.',
    exploitationRisks: [
      'Mandatory neural tracking in public sectors and educational institutions',
      'Predictive criminalization based on sub-vocal thought patterns and affective spikes',
      'Algorithmic loyalty reinforcement in party cadres and military operators'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Hardware Kill-Switches',
        mechanism: 'Silicon-level security bypasses and independent power gating.',
        tacticalImplication: 'Firmware-level security bypasses ensuring governing elites possess immunity from central monitoring ASICs.'
      },
      {
        title: 'Encrypted Sovereign Channels',
        mechanism: 'Proprietary asymmetric cipher suites burned into executive silicon.',
        tacticalImplication: 'Private command channels inaccessible to state automated surveillance engines.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'State neurological health clinics and industrial fatigue monitoring',
      militaryDualUse: 'Algorithmic loyalty reinforcement and captive interrogation decoding',
      threatVector: 'Transcranial focused ultrasound (tFUS) for cognitive fatigue suppression in frontline personnel'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: true,
      rfTelemetryVulnerability: 'Severe - centralized telemetry backdoors hardwired for state monitoring',
      edgeDecodingArch: 'Onboard SNNs with centralized state vector streaming'
    },
    policyStatus: {
      hasNeuroRightsLaw: false,
      unTreatySignatory: false,
      dataSovereigntyModel: 'State National Security Repository'
    },
    riskLevel: 'critical',
    coordinates: [104.1954, 35.8617],
    summary: 'Integrates neural tracking into state governance. Citizens face predictive behavioral monitoring, while governing elites retain hardware kill-switches for personal immunity.'
  },
  {
    id: '404',
    iso3: 'KEN',
    numericCode: '404',
    name: 'Kenya',
    region: 'Sub-Saharan Africa',
    archetype: 'developing_non_aligned',
    geopoliticalGoal: 'Technological Sovereignty, Protection from Exploitation & Basic Access',
    societalFocus: 'Subsidized basic neuro-care, clinical trauma recovery, localized community health.',
    exploitationRisks: [
      'Target of predatory foreign clinical trials exploiting permissive local regulations',
      'Harvesting of rare neuro-atypical and multi-ethnic neural datasets without equitable compensation',
      'Deepening asymmetric dependency on foreign closed-source decoder foundation models'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Sovereign Firmware Overrides',
        mechanism: 'Hardware locks enforcing local data residence and disabling foreign telemetry uplinks.',
        tacticalImplication: 'Protects national leadership against foreign covert neural interception backdoors.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Therapy for traumatic spinal cord injuries and infectious neurological conditions',
      militaryDualUse: 'Vulnerable to foreign intelligence collection on military and diplomatic personnel',
      threatVector: 'Bio-colonial data extraction repatriation to offshore military-tech labs'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: false,
      rfTelemetryVulnerability: 'Critical - reliant on imported hardware with foreign telemetry backdoors',
      edgeDecodingArch: 'Foreign proprietary ASICs with locked closed-source firmware'
    },
    policyStatus: {
      hasNeuroRightsLaw: false,
      unTreatySignatory: true,
      dataSovereigntyModel: 'Emerging Regional Biological Data Compact'
    },
    riskLevel: 'critical',
    coordinates: [37.9062, -0.0236],
    summary: 'Archetypal developing nation vulnerable to "neuro-colonialism." Foreign entities conduct high-risk human trials, exporting multi-ethnic neural datasets to train closed-source models abroad.'
  },
  {
    id: '276',
    iso3: 'DEU',
    numericCode: '276',
    name: 'Germany',
    region: 'Western Europe',
    archetype: 'techno_capitalist_democracy',
    geopoliticalGoal: 'Multilateral Standard Setting, Industrial BCI Precision & GDPR Neural Annex',
    societalFocus: 'Strict medical device standards, industrial worker safety, privacy compliance.',
    exploitationRisks: [
      'Regulatory paralysis delaying clinical availability compared to US and Asian markets',
      'Cross-border corporate data transfers to less regulated cloud jurisdictions',
      'Commercial brainwear workplace surveillance via subtle fatigue monitoring'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Zero-Knowledge Cryptographic Enclave',
        mechanism: 'On-chip ZKP validation ensuring raw action potentials never transmit.',
        tacticalImplication: 'Exemplifies European standards for confidential biometric computation.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Precision neuro-prosthetics and neurological rehabilitation',
      militaryDualUse: 'NATO interoperability for cognitive workload assessment in pilots',
      threatVector: 'Espionage targeting proprietary neural compression algorithms'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: true,
      rfTelemetryVulnerability: 'Moderate - strict hardware compliance standards enforce local verification',
      edgeDecodingArch: 'Audited low-power edge SNNs'
    },
    policyStatus: {
      hasNeuroRightsLaw: true,
      unTreatySignatory: true,
      dataSovereigntyModel: 'GDPR Biological Extension & Sovereign Repositories'
    },
    riskLevel: 'moderate',
    coordinates: [10.4515, 51.1657],
    summary: 'Leads European regulatory standard-setting, advocating for the integration of neuro-rights into existing data protection doctrines and UN disarmament frameworks.'
  },
  {
    id: '356',
    iso3: 'IND',
    numericCode: '356',
    name: 'India',
    region: 'South Asia',
    archetype: 'developing_non_aligned',
    geopoliticalGoal: 'Technological Self-Reliance, Domestic BCI Stacks & Data Non-Alignment',
    societalFocus: 'Mass affordable neuro-therapeutics, public healthcare integration, national semiconductor fabrication.',
    exploitationRisks: [
      'Brain drain of elite neural engineering talent to Silicon Valley',
      'Foreign clinical outsourcing targeting vulnerable rural demographics',
      'Dependence on imported high-density MEA arrays and ASICs'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Sovereign Neural Repository Locks',
        mechanism: 'Hardware-level geographic IP fencing on raw telemetry export.',
        tacticalImplication: 'Prevents repatriation of Indian brain wave datasets to foreign commercial foundations.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Affordable motor rehabilitation and stroke recovery',
      militaryDualUse: 'Border surveillance operator alertness monitoring',
      threatVector: 'Covert foreign intelligence gathering on defense commands'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: false,
      rfTelemetryVulnerability: 'High - hybrid mix of domestic and imported neural components',
      edgeDecodingArch: 'Emerging domestic open-architecture decoders'
    },
    policyStatus: {
      hasNeuroRightsLaw: false,
      unTreatySignatory: true,
      dataSovereigntyModel: 'National Data Localization Mandate'
    },
    riskLevel: 'elevated',
    coordinates: [78.9629, 20.5937],
    summary: 'Balances rapid domestic neurotech research with staunch non-alignment, enforcing data localization to prevent foreign exploitation of its massive population dataset.'
  },
  {
    id: '643',
    iso3: 'RUS',
    numericCode: '643',
    name: 'Russia',
    region: 'Eastern Europe / North Asia',
    archetype: 'authoritarian_surveillance',
    geopoliticalGoal: 'Cognitive Warfare Capability, Asymmetric Subversion & Elite Protection',
    societalFocus: 'Military-first neural enhancement, state security operator conditioning.',
    exploitationRisks: [
      'Direct weaponization of closed-loop deep brain stimulation (DBS) for captive interrogation',
      'Algorithmic loyalty reinforcement in sensitive security branches',
      'Total absence of civilian mental privacy rights'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Air-Gapped Zero-Telemetry Implants',
        mechanism: 'Physical isolation of military leadership implants with hard manual RF switches.',
        tacticalImplication: 'Governing elites maintain immunity from Western electronic countermeasures.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Trauma surgery and battlefield prosthesis for combat veterans',
      militaryDualUse: 'Cognitive fatigue suppression & loyalty conditioning via tFUS',
      threatVector: 'Captive interrogation neural decoding and affective coercion'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: true,
      rfTelemetryVulnerability: 'Severe - non-standard unverified cryptographic implementations',
      edgeDecodingArch: 'State-controlled military ASICs'
    },
    policyStatus: {
      hasNeuroRightsLaw: false,
      unTreatySignatory: false,
      dataSovereigntyModel: 'State Classified Military Asset'
    },
    riskLevel: 'critical',
    coordinates: [105.3188, 61.5240],
    summary: 'Focuses heavily on the military dual-use vector, exploring cognitive warfare, fatigue suppression via tFUS, and thought-directed battlefield command interfaces.'
  },
  {
    id: '076',
    iso3: 'BRA',
    numericCode: '076',
    name: 'Brazil',
    region: 'South America',
    archetype: 'developing_non_aligned',
    geopoliticalGoal: 'South American Neuro-Rights Coalition & Biological Sovereignty',
    societalFocus: 'Universal healthcare neuro-prosthetics, indigenous and diverse population genetic data safeguards.',
    exploitationRisks: [
      'Unregulated bioprospecting of cognitive and neural variance in the Amazonian and rural regions',
      'Vulnerability to predatory foreign medical clinical contracts',
      'High import costs for BCI therapeutic hardware'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Sovereign Firmware Verification',
        mechanism: 'Mandatory open-source verification protocols for public healthcare implants.',
        tacticalImplication: 'Mitigates backdoors in imported Western and Asian neural chips.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Motor restoration and spinal injury clinical rehabilitation',
      militaryDualUse: 'Minimal military deployment; potential surveillance exposure',
      threatVector: 'Data repatriation to offshore foundation model providers'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: false,
      rfTelemetryVulnerability: 'Elevated - dependent on commercial implants with default keys',
      edgeDecodingArch: 'Commercial edge ASICs without independent hardware root of trust'
    },
    policyStatus: {
      hasNeuroRightsLaw: true,
      unTreatySignatory: true,
      dataSovereigntyModel: 'Constitutional Biological Tissue Paradigm (in draft)'
    },
    riskLevel: 'moderate',
    coordinates: [-51.9253, -14.2350],
    summary: 'Partnering with Chile to establish a South American regional bloc protecting cognitive liberty and treating neural datasets as non-transferable human biological tissue.'
  },
  {
    id: '392',
    iso3: 'JPN',
    numericCode: '392',
    name: 'Japan',
    region: 'East Asia',
    archetype: 'techno_capitalist_democracy',
    geopoliticalGoal: 'Silver-Age Cybernetics, Industrial Exoskeletons & High-Reliability ASICs',
    societalFocus: 'Elderly care robotics, assistive telepresence, high-precision biocompatible threads.',
    exploitationRisks: [
      'Subtle corporate productivity monitoring in corporate environments',
      'Monopolization of premium assistive BCIs by affluent demographics',
      'Asymmetric reliance on US foundation decoding models'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Hardware Roots of Trust (HSM/SE)',
        mechanism: 'Dedicated tamper-proof hardware security module inside the neural ASIC package.',
        tacticalImplication: 'Prevents side-channel RF eavesdropping on personal neural intent vectors.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Elderly mobility restoration and degenerative condition management',
      militaryDualUse: 'Self-Defense Forces remote uncrewed vehicle teleoperation',
      threatVector: 'Economic espionage targeting microelectrode polymer thread fabrication'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: true,
      rfTelemetryVulnerability: 'Low - strict hardware microelectronics engineering standards',
      edgeDecodingArch: 'Low-power SNN ASICs with local cryptographic attestation'
    },
    policyStatus: {
      hasNeuroRightsLaw: false,
      unTreatySignatory: true,
      dataSovereigntyModel: 'Biometric Personal Data Framework'
    },
    riskLevel: 'monitored',
    coordinates: [138.2529, 36.2048],
    summary: 'Pioneer in assistive cybernetics and high-density flexible polymer threads. Prioritizes eldercare and precision microelectronics with growing awareness of hardware security deficits.'
  },
  {
    id: '756',
    iso3: 'CHE',
    numericCode: '756',
    name: 'Switzerland',
    region: 'Central Europe',
    archetype: 'constitutional_pioneer',
    geopoliticalGoal: 'Neutral Multilateral Forum, UN Disarmament Audits & Neuro-Diplomacy',
    societalFocus: 'Pioneering medical neurotechnology research, international diplomatic consensus.',
    exploitationRisks: [
      'Hosting offshore neural data escrow repositories vulnerable to sovereign pressure',
      'Target of covert intelligence espionage by foreign cognitive warfare programs'
    ],
    eliteHardwareFeatures: [
      {
        title: 'Hardware-Level Air-Gap Disengagers',
        mechanism: 'Physical magnetic reed switch isolating RF telemetry upon user demand.',
        tacticalImplication: 'Guaranteed user-controlled air-gap isolation for diplomatic and judicial personnel.'
      }
    ],
    dualUseStatus: {
      clinicalApp: 'Paraplegia restoration and epidural electrical stimulation mapping',
      militaryDualUse: 'Neutral observer; hosts UN dual-use verification working groups',
      threatVector: 'Espionage against international disarmament auditing protocols'
    },
    hardwareSecurityDeficit: {
      hasDedicatedHSM: true,
      rfTelemetryVulnerability: 'Minimal - gold-standard cryptographic enclave verification',
      edgeDecodingArch: 'Zero-Knowledge Enclave verified ASICs'
    },
    policyStatus: {
      hasNeuroRightsLaw: true,
      unTreatySignatory: true,
      dataSovereigntyModel: 'Organ-Donation Model (Draft Diplomatic Accord)'
    },
    riskLevel: 'monitored',
    coordinates: [8.2275, 46.8182],
    summary: 'Seat of international diplomacy; leads the UN Verification Protocol and IEEE Brain Initiative consensus blueprints combining silicon hardware enforcement with international law.'
  }
];

// Helper to find profile by ID, iso3, or country name
export function findCountryProfile(query: string): CountryGeopoliticalProfile | undefined {
  const q = query.toLowerCase().trim();
  return COUNTRY_PROFILES.find(
    (c) =>
      c.id === q ||
      c.numericCode === q ||
      c.iso3.toLowerCase() === q ||
      c.name.toLowerCase() === q ||
      c.name.toLowerCase().includes(q)
  );
}
