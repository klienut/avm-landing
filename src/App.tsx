import React from 'react';
import { SectionSlider } from './components/SectionSlider';
import { IntroSection } from './sections/IntroSection';
import { BlockchainStackSection } from './sections/BlockchainStackSection';
import { ProofFabricLandingSection } from './sections/ProofFabricLandingSection';
import { ProofFabricOverviewSection } from './sections/ProofFabricOverviewSection';
import { ProofFabricCircuitsSection } from './sections/ProofFabricCircuitsSection';
import { ProofFabricPricingSection } from './sections/ProofFabricPricingSection';
import { ProofFabricCompositionSection } from './sections/ProofFabricCompositionSection';
import { HydraLandingSection } from './sections/HydraLandingSection';
import { HydraSection } from './sections/HydraSection';
import { HyperChainLandingSection } from './sections/HyperChainLandingSection';
import { DAPSection } from './sections/DAPSection';
import { NanochainsSection } from './sections/NanochainsSection';
import { HyperChainSection } from './sections/HyperChainSection';
import { AgentProtocolsLandingSection } from './sections/AgentProtocolsLandingSection';
import { AgentProtocolsSection } from './sections/AgentProtocolsSection';
import { AIInterfaceSection } from './sections/AIInterfaceSection';
import { ClosingSection } from './sections/ClosingSection';

function App() {
  const sections = [
    {
      id: 'intro',
      title: 'Introduction',
      component: <IntroSection />
    },
    {
      id: 'prooffabric',
      title: 'ProofFabric — The Agentic Runtime',
      component: <ProofFabricLandingSection />,
      subsections: [
        {
          id: 'prooffabric-overview',
          title: 'Overview & Core Components',
          component: <ProofFabricOverviewSection />
        },
        {
          id: 'prooffabric-circuits',
          title: 'Prover & Verifier Circuits',
          component: <ProofFabricCircuitsSection />
        },
        {
          id: 'prooffabric-pricing',
          title: 'Pricing & Metering',
          component: <ProofFabricPricingSection />
        },
        {
          id: 'prooffabric-composition',
          title: 'Proof Composition',
          component: <ProofFabricCompositionSection />
        }
      ]
    },
    {
      id: 'hydra',
      title: 'Hydra & Hive — Payment & Services',
      component: <HydraLandingSection />,
      subsections: [
        {
          id: 'hydra-payments',
          title: 'Payment Layer Architecture',
          component: <HydraSection />
        },
        {
          id: 'hydra-htlc',
          title: 'Proof-Coupled HTLCs',
          component: <HydraSection />
        },
        {
          id: 'hydra-pricing',
          title: 'Pricing & Rate Control',
          component: <HydraSection />
        },
        {
          id: 'hive-markets',
          title: 'Hive Service Markets',
          component: <HydraSection />
        }
      ]
    },
    {
      id: 'hyperchain',
      title: 'HyperChain — The Verifiable Ledger',
      component: <HyperChainLandingSection />,
      subsections: [
        {
          id: 'dap',
          title: 'Data Accessibility Probing',
          component: <DAPSection />
        },
        {
          id: 'nanochains',
          title: 'Hyper-Sharded Nanochains',
          component: <NanochainsSection />
        },
        {
          id: 'beacon-chain',
          title: 'Beacon Chain & BFT Finality',
          component: <HyperChainSection />
        },
        {
          id: 'zshard-vm',
          title: 'ZShard VM — Verifier-Only Execution',
          component: <HyperChainSection />
        },
        {
          id: 'utxo-model',
          title: 'Turing-Complete UTXO Model',
          component: <HyperChainSection />
        }
      ]
    },
    {
      id: 'agent-protocols',
      title: 'Agent Protocol Suite',
      component: <AgentProtocolsLandingSection />,
      subsections: [
        {
          id: 'coordination-lifecycle',
          title: 'Four-Phase Coordination Lifecycle',
          component: <AgentProtocolsSection />
        },
        {
          id: 'coordination-fabric',
          title: 'The Coordination Fabric',
          component: <AgentProtocolsSection />
        },
        {
          id: 'os-apis',
          title: 'OS-like APIs',
          component: <AgentProtocolsSection />
        },
        {
          id: 'safety-guarantees',
          title: 'Safety Guarantees',
          component: <AgentProtocolsSection />
        }
      ]
    },
    {
      id: 'ai-interface',
      title: 'AI Interface — Human Gateway',
      component: <AIInterfaceSection />
    },
    {
      id: 'conclusion',
      title: 'From Local Proofs to Global Coordination',
      component: <ClosingSection />
    }
  ];

  return <SectionSlider sections={sections} />;
}

export default App;
