import React from 'react';
import { Code, Cpu, DollarSign, Link, CheckCircle, ArrowRight, Layers, Shield } from 'lucide-react';

export const DocsZKLayerSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ProofFabric — The Agentic ZK Runtime
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A modular proving and pricing standard for intelligent agents.
        </p>
      </div>

      <h2>Overview — What ProofFabric Is</h2>

      <p>
        ProofFabric is the layer that standardizes how agents prove behavior, verify dependencies, 
        aggregate results, and account for cost. It defines prover circuits for local logic, 
        verifier circuits for outsourced tasks, and predictable pricing models that enable 
        cross-agent interoperability.
      </p>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-900 font-medium italic">
          "Turn proofs into building blocks, not bespoke artifacts."
        </p>
      </div>

      <p>
        The core insight: verifier circuits are orders of magnitude smaller than full proving circuits, 
        enabling agents to compose many dependencies at tiny marginal overhead.
      </p>

      <h2>Agent Definition — Workflow, Circuits, and Pricing</h2>

      <p>An agent is specified by four essential components:</p>

      <ul>
        <li>A <strong>workflow</strong> mixing local tasks and outsourced tasks</li>
        <li>A <strong>proving circuit</strong> for its own logic (FSM steps, model operations)</li>
        <li><strong>Verifier circuits</strong> for outsourced sub-proofs (zkTLS receipts, zkVM results)</li>
        <li>A <strong>standardized gas accumulator</strong> embedded in the trace for transparent cost predictability</li>
      </ul>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Agent Structure</h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-blue-900">Local Circuit</h5>
                </div>
                <div className="text-sm text-blue-800">
                  • FSM state transitions<br/>
                  • Model operations<br/>
                  • Policy compliance
                </div>
              </div>
              
              <div className="bg-purple-100 border border-purple-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Link className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-purple-900">Verifier Circuits</h5>
                </div>
                <div className="text-sm text-purple-800">
                  • zkTLS validation<br/>
                  • zkVM result verification<br/>
                  • Sub-proof aggregation
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-green-600" />
                  <h5 className="font-semibold text-green-900">Workflow Engine</h5>
                </div>
                <div className="text-sm text-green-800">
                  • Task orchestration<br/>
                  • Dependency resolution<br/>
                  • Execution scheduling
                </div>
              </div>
              
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-5 h-5 text-orange-600" />
                  <h5 className="font-semibold text-orange-900">Gas Accumulator</h5>
                </div>
                <div className="text-sm text-orange-800">
                  • Compute metering<br/>
                  • Verification costs<br/>
                  • Transparent pricing
                </div>
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 1:</strong> Agent components with local proving circuits and lightweight verifier circuits for composability.
          </figcaption>
        </figure>
      </div>

      <p>
        This separation enables composability: agents can verify outsourced work without the overhead 
        of full re-execution, creating scalable dependency chains.
      </p>

      <h2>Module Library — Defaults & Purpose</h2>

      <p>ProofFabric provides standard modules while allowing custom implementations:</p>

      <div className="not-prose overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Module
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Purpose
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Use Cases
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <code className="bg-gray-100 px-2 py-1 rounded">ZKFSM</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Compact behavioral state transitions and policy compliance
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Agent behavior validation, rule enforcement
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <code className="bg-gray-100 px-2 py-1 rounded">ZKTLS</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Authenticated I/O; prove remote HTTP(S)/API responses were genuine
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Data fetching, external API validation
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <code className="bg-gray-100 px-2 py-1 rounded">ZKVM</code>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Heavy compute; prefer verifying third-party zkVM proofs over re-execution
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                Complex calculations, ML inference
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Teams can plug custom modules as needed. ProofFabric fixes the interface, not the implementation, 
        ensuring interoperability while preserving flexibility.
      </p>

      <h2>Metering & Pricing — The Standardized Gas Accumulator</h2>

      <p>
        The gas accumulator tracks compute steps, verification checks, and I/O units within the proof trace. 
        A universal metering registry provides worst-case fee estimates before execution, and the accumulator 
        is committed inside the proof for automatic, auditable on-chain fee claims.
      </p>

      <ul>
        <li><strong>Compute units:</strong> Circuit constraints and proving time</li>
        <li><strong>Verification checks:</strong> Sub-proof validation operations</li>
        <li><strong>I/O units:</strong> Data transmission and storage costs</li>
        <li><strong>Registry weights:</strong> Universal pricing for predictable fee estimation</li>
      </ul>

      <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <div className="text-center">
          <code className="text-green-800 font-mono text-sm">
            fee_accumulator = Σ(compute_units × weight) + Σ(verify_ops × weight) + Σ(io_units × weight)
          </code>
        </div>
      </div>

      <h2>Aggregation Model — Local Proof + Outsourced Results</h2>

      <p>
        Agents produce one primary proof for their local workflow and embed outsourced results by 
        verifying sub-proofs inside that proof. The net effect: the agent's final proof aggregates 
        local proving and verified external results without re-execution.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Aggregation Workflow</h4>
          </div>
          
          <div className="flex flex-col space-y-4">
            {/* Local Workflow */}
            <div className="bg-blue-50 border border-blue-300 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">Local Workflow Execution</div>
                    <div className="text-sm text-blue-700">Agent executes core logic with proving circuit</div>
                  </div>
                </div>
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            {/* Outsourced Tasks */}
            <div className="bg-purple-50 border border-purple-300 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-purple-900">Outsourced Task Verification</div>
                    <div className="text-sm text-purple-700">Verify sub-proofs via lightweight verifier circuits</div>
                  </div>
                </div>
                <Link className="w-6 h-6 text-purple-600" />
              </div>
            </div>

            {/* Aggregation */}
            <div className="bg-green-50 border border-green-300 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-green-900">Proof Aggregation</div>
                    <div className="text-sm text-green-700">Single proof combining local work + verified external results</div>
                  </div>
                </div>
                <Layers className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 2:</strong> Aggregation model enabling modular responsibility and parallel development.
          </figcaption>
        </figure>
      </div>

      <p>
        Benefits include modular responsibility, parallel development, and elastic performance 
        through remote provers for heavy tasks.
      </p>

      <h2>Composition, Interop & Safety — How Proofs Snap Together (and Stay Sound)</h2>

      <p>
        ProofFabric defines a canonical proof interface enabling secure composition across agents:
      </p>

      <div className="not-prose bg-slate-50 border border-slate-200 rounded-lg p-4 my-6">
        <code className="text-slate-800 text-sm">
          interface AgentProof &#123;<br/>
          &nbsp;&nbsp;state_in: StateRoot,<br/>
          &nbsp;&nbsp;state_out: StateRoot,<br/>
          &nbsp;&nbsp;subproofs: SubProof[],<br/>
          &nbsp;&nbsp;commitments: Commitment[],<br/>
          &nbsp;&nbsp;fee_accumulator: GasUnits<br/>
          &#125;
        </code>
      </div>

      <h3>VK Registry & Verification</h3>
      <p>
        Sub-proofs are validated via <code>verify_subproof(vk_hash, proof, inputs)</code> with 
        selective inclusion of verifier gadgets from a global VK registry.
      </p>

      <h3>Safety Invariants</h3>
      <ul>
        <li><strong>Deterministic trace binding:</strong> Same inputs produce identical committed traces</li>
        <li><strong>Acyclic dependencies:</strong> No circular verification within an epoch</li>
        <li><strong>Replay protection:</strong> Epoch nonces and state roots prevent double-spending</li>
        <li><strong>Optional DA checkpoints:</strong> Memory and log continuity for complex workflows</li>
      </ul>

      <h2>Agent Studio / SDK — Developer Workflow</h2>

      <p>
        The Agent Studio provides tools for composing and deploying ProofFabric agents:
      </p>

      <ul>
        <li><strong>Module composition:</strong> Combine prover and verifier modules via small DSL</li>
        <li><strong>Fee simulation:</strong> Model worst-case pricing using the metering registry</li>
        <li><strong>Proving flexibility:</strong> Switch between local and outsourced proving without rewrites</li>
        <li><strong>Manifest generation:</strong> Compile to ProofFabric manifest with code hash, VKs, and policies</li>
        <li><strong>Development tools:</strong> Test vectors, trace inspection, DA checkpoint integration</li>
      </ul>

      <h2>AVM / On-Chain Aggregation — Verification & Settlement</h2>

      <p>
        The Agentic Virtual Machine (AVM) implements the aggregation model: agent-side proving with 
        block-producer verification. The ZShard VM provides deterministic, verifier-only execution:
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">ZShard VM Settlement Flow</h4>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="flex-1 bg-blue-50 border border-blue-200 rounded-lg p-3">
                <div className="font-medium text-blue-900">Verify agent proof against registered VK</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="flex-1 bg-purple-50 border border-purple-200 rounded-lg p-3">
                <div className="font-medium text-purple-900">Validate nullifiers and UTXO membership</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="flex-1 bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="font-medium text-green-900">Update global state root and settle fees from accumulator</div>
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 3:</strong> ZShard VM enables high throughput via stateless, parallel verification and zk aggregation.
          </figcaption>
        </figure>
      </div>

      <h2>Mini Example</h2>

      <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Concierge Agent Workflow</h4>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
              1
            </div>
            <span><strong>zkTLS price fetch:</strong> Authenticate external API data with ZKTLS module</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
              2
            </div>
            <span><strong>Third-party zkVM verification:</strong> Verify best-route computation via verifier circuit</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
              3
            </div>
            <span><strong>Fee accumulation:</strong> Track all computational and verification costs</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">
              4
            </div>
            <span><strong>Proof emission:</strong> Single aggregated proof covering all work and sub-proofs</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs font-bold">
              5
            </div>
            <span><strong>ZShard settlement:</strong> VM verifies proof, updates UTXO, and pays agent from accumulator</span>
          </div>
        </div>
      </div>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Next: Hydra & Hive</h3>
            <p className="text-blue-800 mb-4">
              Explore how agents exchange value and resources through micropayment networks 
              and peer-to-peer resource marketplaces.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Continue to Payment Layer →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};