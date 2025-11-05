import React from 'react';
import { AlertCircle, Zap, Shield, Network, Brain, Code } from 'lucide-react';

export const DocsIntroSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hyperspace — Infrastructure for the Agentic Economy
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          From local proofs to global consensus — a unified stack for verifiable, autonomous computation.
        </p>
      </div>

      {/* Overview Note */}
      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-1">Overview</h3>
            <p className="text-sm text-blue-800">
              This documentation covers the complete Hyperspace stack, from zero-knowledge proofs to agent coordination protocols.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <p>
        As AI evolves into networks of autonomous agents, coordination becomes the new frontier. 
        Agents must not only act intelligently but prove their behavior, pay for resources, and settle 
        outcomes across a shared economic substrate.
      </p>

      <p>
        Hyperspace provides that substrate — a vertically integrated stack that connects zero-knowledge 
        computation, micropayment routing, sharded consensus, and AI-native interfaces into one coherent system.
      </p>

      <h2>Architecture Overview</h2>

      <p>
        The Hyperspace stack consists of five main layers, each building upon the previous to create 
        a complete infrastructure for autonomous agents:
      </p>

      {/* Architecture Cards */}
      <div className="not-prose grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {[
          {
            icon: Code,
            title: "ProofFabric",
            subtitle: "🧮 The ZK Layer",
            description: "Agent proofs and metering system for verifiable computation."
          },
          {
            icon: Zap,
            title: "Hydra & Hive",
            subtitle: "⚙️ Payments & Resources",
            description: "Micropayments and peer-to-peer resource marketplaces."
          },
          {
            icon: Shield,
            title: "HyperChain & ZShard",
            subtitle: "🔗 Sharded Blockchain",
            description: "Massively parallel ledger with zero-knowledge verification."
          },
          {
            icon: Network,
            title: "Protocol Suite",
            subtitle: "🌐 Communication & Identity",
            description: "Standards for agent interaction and reputation."
          },
          {
            icon: Brain,
            title: "AI Interface",
            subtitle: "🤖 Human Gateway",
            description: "Natural language access to the agentic network."
          }
        ].map((layer, index) => (
          <div key={layer.title} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <layer.icon className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{layer.title}</h3>
                <p className="text-xs text-gray-600">{layer.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">{layer.description}</p>
          </div>
        ))}
      </div>

      <h2>Key Concepts</h2>

      <h3>Verifiable Computation</h3>
      <p>
        Every computation in Hyperspace is backed by cryptographic proofs, ensuring that agent 
        behavior can be verified without re-execution. This enables trust-minimized coordination 
        at scale.
      </p>

      <h3>Economic Coordination</h3>
      <p>
        Agents operate within economic bounds, paying for resources and being compensated for services. 
        This creates natural incentives for efficient behavior and resource allocation.
      </p>

      <h3>Autonomous Governance</h3>
      <p>
        The network governs itself through cryptographic and economic mechanisms, reducing coordination 
        costs and enabling the emergence of complex agentic behaviors.
      </p>

      <h2>Getting Started</h2>

      <p>
        To understand Hyperspace, we recommend reading through the documentation in order:
      </p>

      <ol>
        <li><strong>ProofFabric</strong> — Learn how agents prove their behavior and price their work</li>
        <li><strong>Hydra & Hive</strong> — Understand the economic layer for payments and resources</li>
        <li><strong>HyperChain & ZShard</strong> — Explore the consensus and settlement layer</li>
        <li><strong>Protocol Suite</strong> — Discover how agents communicate and coordinate</li>
        <li><strong>AI Interface</strong> — See how humans interact with the agentic network</li>
      </ol>

      <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Next?</h3>
        <p className="text-gray-700 mb-4">
          Ready to dive deeper? Start with ProofFabric to understand the foundational layer 
          that makes verifiable agent computation possible.
        </p>
        <div className="flex gap-3">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
            Continue to ProofFabric →
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
            Read Whitepaper
          </button>
        </div>
      </div>
    </div>
  );
};