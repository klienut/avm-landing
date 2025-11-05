import React from 'react';
import { Code, Cpu, DollarSign, Link, CheckCircle, ArrowRight } from 'lucide-react';

export const DocsProofFabricSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ProofFabric — The Agentic Runtime
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A modular proving and pricing standard for intelligent agents.
        </p>
      </div>

      {/* Quick Info */}
      <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-green-900 mb-1">Foundation Layer</h3>
            <p className="text-sm text-green-800">
              ProofFabric is the algebraic core of Hyperspace — every agent is built on this foundation.
            </p>
          </div>
        </div>
      </div>

      <p>
        Every agent in Hyperspace is built atop ProofFabric, the zero-knowledge framework that defines 
        how agents prove behavior, verify dependencies, and account for cost.
      </p>

      <h2>Core Components</h2>

      <p>Each agent bundles three essential elements:</p>

      <div className="not-prose grid md:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-semibold text-blue-900">Prover Circuits</h3>
          </div>
          <p className="text-sm text-blue-800">
            Zero-knowledge circuits that prove the agent's internal logic and computations.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Link className="w-5 h-5 text-purple-600" />
            <h3 className="text-sm font-semibold text-purple-900">Verifier Circuits</h3>
          </div>
          <p className="text-sm text-purple-800">
            Circuits for validating delegated or outsourced tasks from other agents.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <DollarSign className="w-5 h-5 text-orange-600" />
            <h3 className="text-sm font-semibold text-orange-900">Pricing Variable</h3>
          </div>
          <p className="text-sm text-orange-800">
            Meters computational, bandwidth, and verification work for economic accounting.
          </p>
        </div>
      </div>

      <h2>Architecture</h2>

      <p>
        ProofFabric supports both local proving and outsourced zk pipelines, with the ZShard VM 
        aggregating these proofs efficiently on-chain. This creates a common grammar for verifiable, 
        composable, and economically predictable agents.
      </p>

      {/* Architecture Diagram */}
      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-gray-900">ProofFabric Architecture</h4>
          </div>
          
          <div className="flex flex-col space-y-6">
            {/* Agent Layer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-center">
                <h5 className="font-semibold text-blue-900 mb-2">Agent Layer</h5>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white border border-blue-300 rounded p-3 text-center">
                    <Cpu className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-blue-900">Prover Circuits</div>
                  </div>
                  <div className="bg-white border border-purple-300 rounded p-3 text-center">
                    <Link className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-purple-900">Verifier Circuits</div>
                  </div>
                  <div className="bg-white border border-orange-300 rounded p-3 text-center">
                    <DollarSign className="w-6 h-6 text-orange-600 mx-auto mb-1" />
                    <div className="text-sm font-medium text-orange-900">Pricing Model</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-center">
              <ArrowRight className="w-6 h-6 text-gray-400 mx-auto rotate-90" />
            </div>

            {/* ProofFabric Runtime */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-center">
                <h5 className="font-semibold text-green-900 mb-2">ProofFabric Runtime</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-green-300 rounded p-3 text-center">
                    <div className="text-sm font-medium text-green-900">Local Proving</div>
                    <div className="text-xs text-green-700 mt-1">Low latency</div>
                  </div>
                  <div className="bg-white border border-green-300 rounded p-3 text-center">
                    <div className="text-sm font-medium text-green-900">Outsourced Proving</div>
                    <div className="text-xs text-green-700 mt-1">High throughput</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-center">
              <ArrowRight className="w-6 h-6 text-gray-400 mx-auto rotate-90" />
            </div>

            {/* ZShard VM */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-center">
                <h5 className="font-semibold text-purple-900 mb-2">ZShard VM</h5>
                <div className="bg-white border border-purple-300 rounded p-3">
                  <div className="text-sm font-medium text-purple-900">Proof Aggregation & On-Chain Settlement</div>
                </div>
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 1:</strong> ProofFabric architecture showing the flow from agent circuits through the runtime to on-chain aggregation.
          </figcaption>
        </figure>
      </div>

      <h3>Local vs. Outsourced Proving</h3>

      <div className="not-prose overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Approach
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Use Case
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Latency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cost
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Local Proving
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Real-time decisions, privacy-sensitive computations
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Low (~ms)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Hardware dependent
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Outsourced Proving
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Complex computations, resource-constrained agents
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Higher (~seconds)
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Market-driven
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Proof Composition</h2>

      <p>
        One of ProofFabric's key innovations is recursive proof composition. Agents can combine 
        proofs from multiple sources to create complex, verifiable computations.
      </p>

      <h3>Example: Multi-Agent Computation</h3>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Proof Composition Workflow</h4>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-4">
            {/* Agent A */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 w-32 text-center mb-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                  A
                </div>
                <div className="text-sm font-medium text-blue-900">Agent A</div>
                <div className="text-xs text-blue-700 mt-1">Data Processing</div>
              </div>
              <div className="bg-white border border-blue-300 rounded px-3 py-1">
                <div className="text-xs font-mono text-blue-800">π₁</div>
              </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-gray-400" />

            {/* Agent B */}
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 w-32 text-center mb-2">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                  B
                </div>
                <div className="text-sm font-medium text-purple-900">Agent B</div>
                <div className="text-xs text-purple-700 mt-1">Verification + Computation</div>
              </div>
              <div className="bg-white border border-purple-300 rounded px-3 py-1">
                <div className="text-xs font-mono text-purple-800">π₂ = compose(π₁, B)</div>
              </div>
            </div>

            {/* Arrow */}
            <ArrowRight className="w-8 h-8 text-gray-400" />

            {/* ZShard VM */}
            <div className="flex flex-col items-center">
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 w-32 text-center mb-2">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                  Z
                </div>
                <div className="text-sm font-medium text-green-900">ZShard VM</div>
                <div className="text-xs text-green-700 mt-1">On-Chain Settlement</div>
              </div>
              <div className="bg-white border border-green-300 rounded px-3 py-1">
                <div className="text-xs font-mono text-green-800">Final Proof</div>
              </div>
            </div>
          </div>

          <figcaption className="text-sm text-gray-600 text-center mt-6">
            <strong>Figure 2:</strong> Multi-agent proof composition showing how proofs are recursively combined and settled on-chain.
          </figcaption>
        </figure>
      </div>

      <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Detailed Workflow</h4>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
              1
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Agent A processes data locally</p>
              <p className="text-xs text-gray-600">Generates proof π₁ of computation validity</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
              2
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Agent B verifies π₁ and extends computation</p>
              <p className="text-xs text-gray-600">Generates composite proof π₂ = compose(π₁, computation_B)</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">
              3
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Result submitted to ZShard VM</p>
              <p className="text-xs text-gray-600">Final proof aggregated on-chain with minimal overhead</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Economic Model</h2>

      <p>
        ProofFabric includes built-in economic primitives that enable agents to price their work 
        and pay for verification services.
      </p>

      <h3>Pricing Variables</h3>

      <ul>
        <li><strong>Computational Cost:</strong> Measured in circuit size and proving time</li>
        <li><strong>Bandwidth Cost:</strong> Data transmission and proof size</li>
        <li><strong>Verification Cost:</strong> Time and resources needed to verify proofs</li>
        <li><strong>Storage Cost:</strong> Proof and state storage requirements</li>
      </ul>

      <p>
        These costs are automatically tracked and used for payment settlement through the Hydra 
        payment layer.
      </p>

      <h2>Implementation</h2>

      <div className="not-prose bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">Code Example</h3>
        <pre className="text-sm text-slate-800 overflow-x-auto">
{`// Agent definition with ProofFabric
struct Agent {
    prover: ProverCircuit,
    verifier: VerifierCircuit, 
    pricing: PricingModel,
}

// Generate proof for computation
let proof = agent.prover.prove(computation, inputs);

// Verify external proof
let valid = agent.verifier.verify(external_proof);

// Calculate costs
let cost = agent.pricing.calculate_cost(proof.size(), proof.time());`}
        </pre>
      </div>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Next: Hydra & Hive</h3>
            <p className="text-blue-800 mb-4">
              Learn how agents use the economic layer to exchange value and resources through 
              micropayments and peer-to-peer marketplaces.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Continue to Hydra & Hive →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};