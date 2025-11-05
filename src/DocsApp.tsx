import React, { useState } from 'react';
import { DocsSidebar } from './components/DocsSidebar';
import { DocsLayout } from './components/DocsLayout';
import { DocsIntroSection } from './sections/DocsIntroSection';
import { DocsZKLayerSection } from './sections/DocsZKLayerSection';
import { DocsHydraSection } from './sections/DocsHydraSection';
import { DocsDAPSection } from './sections/DocsDAPSection';
import { DocsNanochainsSection } from './sections/DocsNanochainsSection';
import { DocsHyperChainSection } from './sections/DocsHyperChainSection';
import './docs.css';

function DocsApp() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      component: <DocsIntroSection />
    },
    // ProofFabric subsections
    {
      id: 'prooffabric-overview',
      title: 'ProofFabric — Overview',
      component: <DocsZKLayerSection />
    },
    // Hydra subsections
    {
      id: 'hydra-payments',
      title: 'Hydra — Payment Layer',
      component: <DocsHydraSection />
    },
    // HyperChain subsections
    {
      id: 'dap',
      title: 'Data Accessibility Probing',
      component: <DocsDAPSection />
    },
    {
      id: 'nanochains',
      title: 'Hyper-Sharded Nanochains',
      component: <DocsNanochainsSection />
    },
    {
      id: 'beacon-chain',
      title: 'Beacon Chain & BFT Finality',
      component: <DocsHyperChainSection />
    },
    {
      id: 'zshard-vm',
      title: 'ZShard VM — Verifier-Only Execution',
      component: <DocsHyperChainSection />
    },
    // Protocol subsections
    {
      id: 'agent-protocols',
      title: 'Agent Protocol Suite',
      component: <div className="prose prose-lg max-w-none">
        <h1>Agent Protocol Suite</h1>
        <p>Communication, Identity, and Reputation - The HTTPS and DNS of the agentic web.</p>
        <p>This section is under development. Coming soon...</p>
      </div>
    },
    // Interface subsections
    {
      id: 'ai-interface',
      title: 'AI Interface — Human Gateway',
      component: <div className="prose prose-lg max-w-none">
        <h1>AI Interface — The Human Gateway</h1>
        <p>Mapping natural language to verifiable intelligence.</p>
        <p>This section is under development. Coming soon...</p>
      </div>
    },
    // Conclusion
    {
      id: 'conclusion',
      title: 'From Local Proofs to Global Coordination',
      component: <div className="prose prose-lg max-w-none">
        <h1>From Local Proofs to Global Coordination</h1>
        <p>When computation, communication, and settlement become frictionless, intelligence organizes itself.</p>
        <p>This section is under development. Coming soon...</p>
      </div>
    }
  ];

  return (
    <div className="docs-container min-h-screen bg-white text-gray-900">
      <DocsSidebar
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      />
      <DocsLayout
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
      >
        {sections[currentSection]?.component}
      </DocsLayout>
    </div>
  );
}

export default DocsApp;