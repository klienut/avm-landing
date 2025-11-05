import React from 'react';
import { SectionSlider } from './components/SectionSlider';
import { IntroSection } from './sections/IntroSection';
import { ProofFabricLandingSection } from './sections/ProofFabricLandingSection';
import { ProofFabricOverviewSection } from './sections/ProofFabricOverviewSection';
import { ProofFabricCircuitsSection } from './sections/ProofFabricCircuitsSection';
import { ProofFabricPricingSection } from './sections/ProofFabricPricingSection';
import { ProofFabricCompositionSection } from './sections/ProofFabricCompositionSection';
import { HydraLandingSection } from './sections/HydraLandingSection';
import { HydraPaymentSection } from './sections/HydraPaymentSection';
import { HiveServiceSection } from './sections/HiveServiceSection';
import { HyperChainLandingSection } from './sections/HyperChainLandingSection';
import { DAPSection } from './sections/DAPSection';
import { NanochainsSection } from './sections/NanochainsSection';
import { AVMSection } from './sections/AVMSection';
import { AgentProtocolsLandingSection } from './sections/AgentProtocolsLandingSection';
import { AIInterfaceSection } from './sections/AIInterfaceSection';
import { TokenomicsSection } from './sections/TokenomicsSection';
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
          title: 'Hydra Payment Architecture',
          component: <HydraPaymentSection />
        },
        {
          id: 'hive-markets',
          title: 'Hive Service Markets',
          component: <HiveServiceSection />
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
          id: 'avm',
          title: 'Agentic VM — Stateless UTXO with zk-Aggregated Finality',
          component: <AVMSection />
        }
      ]
    },
    {
      id: 'agent-protocols',
      title: 'Agent Protocol Suite',
      component: <AgentProtocolsLandingSection />
    },
    {
      id: 'ai-interface',
      title: 'AI Interface — Human Gateway',
      component: <AIInterfaceSection />
    },
    {
      id: 'tokenomics',
      title: 'Tokenomics — Incentive Equilibrium',
      component: <TokenomicsSection />
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
