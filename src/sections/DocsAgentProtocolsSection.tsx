import React from 'react';
import { Network, Users, Zap, Shield, Search, MessageSquare, Play, DollarSign, ArrowRight, CheckCircle } from 'lucide-react';

export const DocsAgentProtocolsSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Agent Protocol Suite — Verifiable Coordination for Autonomous Agents
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          From discovery to settlement—plus OS-like APIs for memory, compute, and data with built-in payments.
        </p>
      </div>

      {/* Connection to Previous Section */}
      <div className="not-prose bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <ArrowRight className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-indigo-900 mb-1">From Settlement to Coordination</h3>
            <p className="text-sm text-indigo-800">
              With HyperChain providing verifiable settlement, the Agent Protocol Suite enables autonomous agents to discover, negotiate, and coordinate complex workflows with cryptoeconomic guarantees.
            </p>
          </div>
        </div>
      </div>

      <h2>Overview — The Coordination Fabric</h2>

      <p>
        The Agent Protocol Suite defines a standardized four-phase lifecycle for agent interactions: 
        <strong>Discovery → Negotiation → Execution → Settlement</strong>. This coordination fabric 
        guarantees verifiable interactions through proofs, receipts, and DA checkpoints while 
        ensuring predictable economics via comprehensive metering for computation, coordination, and I/O.
      </p>

      <p>
        What ProofFabric is to computation, the Agent Protocol Suite is to coordination—and it 
        exposes OS-like APIs to use the network as memory and compute with integrated micropayments.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Four-Phase Coordination Lifecycle</h4>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-center">
              <Search className="w-6 h-6 text-blue-600 mx-auto mb-3" />
              <h5 className="font-semibold text-blue-900 mb-2">Discovery</h5>
              <p className="text-xs text-blue-700">Identity, manifests, reputation</p>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
              <MessageSquare className="w-6 h-6 text-green-600 mx-auto mb-3" />
              <h5 className="font-semibold text-green-900 mb-2">Negotiation</h5>
              <p className="text-xs text-green-700">MCP, SLAs, coordination metering</p>
            </div>
            
            <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-center">
              <Play className="w-6 h-6 text-purple-600 mx-auto mb-3" />
              <h5 className="font-semibold text-purple-900 mb-2">Execution</h5>
              <p className="text-xs text-purple-700">ProofFabric + Hydra/Hive</p>
            </div>
            
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 text-center">
              <DollarSign className="w-6 h-6 text-orange-600 mx-auto mb-3" />
              <h5 className="font-semibold text-orange-900 mb-2">Settlement</h5>
              <p className="text-xs text-orange-700">HTLC + proof, ZShard VM, DA</p>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 1:</strong> The four-phase coordination lifecycle ensuring verifiable agent interactions.
          </figcaption>
        </figure>
      </div>

      <h2>Phase I — Discovery (Identity, Manifests, Reputation)</h2>

      <h3>Identity & Attestation</h3>
      <p>
        Agents register with DID (Decentralized Identifier) identity, supporting key rotation and 
        code-hash verification. Optional TEE (Trusted Execution Environment) quotes provide additional 
        attestation. All credentials anchor in a decentralized Agent Registry for discoverability 
        and verification.
      </p>

      <h3>Manifests</h3>
      <p>
        Machine-readable capability and pricing specifications include supported operations, proof types, 
        latency tiers, DA policies, versioning, and supported OS APIs. Manifests enable automated 
        matching and negotiation between agents with compatible requirements and capabilities.
      </p>

      <h3>Reputation as Economic Primitive</h3>
      <p>
        Verifiable reputation metrics—uptime, SLA adherence, dispute rate, proof success rate, and 
        latency performance—directly influence pricing, matching preferences, and required collateral. 
        High-reputation agents access better rates and priority lanes.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Component
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Function
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Verification Method
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                DID Identity
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Persistent agent identity with key rotation
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Registry anchoring + signatures
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Code Hash
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Verifiable agent implementation
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Deterministic build + attestation
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                TEE Quote
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Hardware-backed execution proof
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Hardware manufacturer signature
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Phase II — Negotiation (MCP, SLAs, Coordination Metering)</h2>

      <h3>MCP Sessions</h3>
      <p>
        Model Context Protocol (MCP) sessions provide streaming RPC with retries, cancellation, and 
        back-pressure handling. zkTLS transcripts ensure message integrity and authenticity. Optional 
        end-to-end encryption protects sensitive negotiations.
      </p>

      <h3>Offer/Accept & SLAs</h3>
      <p>
        Service Level Agreements (SLAs) specify price×latency quotes, timeouts, and penalties. 
        Both parties sign a proof-of-agreement hash that becomes binding and auditable. SLAs 
        establish clear expectations and recourse mechanisms for service delivery.
      </p>

      <h3>Coordination Metering</h3>
      <p>
        Light "negotiation gas" charges per session or attempt, pegged to latency requirements, 
        ensure predictable costs and spam resistance. Coordination fees stream via Hydra during 
        the negotiation phase, preventing free-riding on network resources.
      </p>

      <h2>Phase III — Execution (ProofFabric + Hydra/Hive)</h2>

      <h3>ProofFabric Integration</h3>
      <p>
        Agents execute workflows and emit composed proofs containing prover and verifier sub-proofs 
        with pricing accumulators. This ensures all computational work is verifiable and properly 
        metered according to the negotiated SLA terms.
      </p>

      <h3>Hydra Micropayments</h3>
      <p>
        Continuous micropayments flow during work execution via HTLCs with rate control to limit 
        risk exposure. Payments unlock incrementally as milestones are verified, reducing counterparty 
        risk for both service providers and consumers.
      </p>

      <h3>Hive Service Swarms</h3>
      <p>
        Compute, storage, and bandwidth swarms match deterministically through reputation-weighted 
        algorithms. Sub-providers return proofs of service delivery which the main agent verifies 
        without re-execution, maintaining scalability and trust minimization.
      </p>

      <h2>Phase IV — Settlement (HTLC + Proof, ZShard VM, DA)</h2>

      <h3>Proof-Coupled Settlement</h3>
      <p>
        Final proofs unlock HTLC payments atomically upon verification. Failed or incomplete work 
        automatically reverts payments through timeout mechanisms, ensuring fair compensation aligned 
        with actual service delivery.
      </p>

      <h3>ZShard VM Processing</h3>
      <p>
        The ZShard VM performs verifier-only aggregation of state transitions, processing UTXO 
        nullifiers and membership proofs while minting appropriate fees. This settlement layer 
        maintains global consistency without re-executing agent logic.
      </p>

      <h3>DA Checkpointing</h3>
      <p>
        Receipts and execution logs checkpoint via DAP (Data Accessibility Probing), ensuring 
        finality only occurs when data remains accessible. This prevents silent data loss and 
        maintains auditability of agent interactions.
      </p>

      <h2>Agentic OS APIs — x402-style Payment-Coupled I/O</h2>

      <p>
        The protocol suite exposes OS-like interfaces that applications and agents call to use 
        the network as if it were a local operating system, with integrated payments and verifiable 
        receipts for all operations.
      </p>

      <h3>API Surface</h3>

      <div className="not-prose bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
        <h4 className="text-lg font-semibold text-slate-900 mb-3">Core Operations</h4>
        <div className="space-y-3 text-sm font-mono">
          <div><strong>memory.get(cid|key, tier, latency_target)</strong> → Hydra-priced retrieval from Hive storage</div>
          <div><strong>memory.put(blob, redundancy, retention)</strong> → DA/Hive storage with proof of storage</div>
          <div><strong>compute.submit(task_spec, inputs, latency_target)</strong> → Hive compute scheduling</div>
          <div><strong>compute.subscribe(job_id)</strong> → Stream logs/proofs with per-byte/step metering</div>
          <div><strong>data.fetch(url, policy)</strong> → zkTLS fetch with embedded transcript proofs</div>
        </div>
      </div>

      <p>
        All operations accept payment parameters specifying mode (stream/prepay/postpay), spending 
        caps, and tips. Results include x402-style payment-coupled receipts containing operation 
        hashes, proof hashes, and fee breakdowns.
      </p>

      <h3>Integrated Micropayments</h3>
      <p>
        Each request binds to a Hydra payment stream or prepay bucket. HTLC events unlock upon 
        verified service sub-proofs such as proof of storage chunks or proof of compute steps. 
        This creates atomic coupling between service delivery and payment.
      </p>

      <p>
        Adaptive pricing offers transparent, often latency-pegged costs where users choose between 
        slower/cheaper or faster/costlier service tiers based on their requirements and budget constraints.
      </p>

      <h3>Security & Accounting</h3>
      <p>
        zkTLS handles external I/O verification, ProofFabric verifies sub-proofs, DA pointers 
        enable audit and resume capabilities, and idempotent operation hashes provide replay safety. 
        Receipts contain comprehensive metadata including SLA hashes, operation hashes, proof hashes, 
        fee accumulators, and DA pointers for non-repudiation.
      </p>

      <h2>Cross-Phase Security Guarantees</h2>

      <h3>Coordination Safety</h3>
      <ul>
        <li><strong>Mutual Authenticity:</strong> zkTLS transcripts bind endpoints and messages to session keys</li>
        <li><strong>Proof-of-Agreement:</strong> SLA hashes signed by both parties and anchored on-chain or in DA</li>
        <li><strong>Non-Repudiation:</strong> Epoch nonces, session IDs, and idempotent operation hashes with DA checkpointing</li>
        <li><strong>Composition Safety:</strong> Acyclic sub-proof DAGs with bounded timeouts and standardized failure modes</li>
      </ul>

      <h2>Market Mechanics & Policy Hooks</h2>

      <p>
        Reputation-weighted matching algorithms apply price multipliers based on counterparty risk 
        assessment. Vertical policy flags accommodate sector-specific requirements for finance, 
        healthcare, and other regulated domains.
      </p>

      <p>
        Staking and slashing mechanisms penalize missed SLAs or fraudulent proofs while providing 
        better service lanes and reduced fees for high-reputation agents. Governable defaults 
        establish coordination gas caps, default latency tiers, and DA retention classes.
      </p>

      <h2>Example: OS-like Workflow</h2>

      <div className="not-prose bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Complete Agent Interaction Flow</h4>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">1</div>
            <div>
              <p className="text-sm font-medium text-gray-900">Discovery</p>
              <p className="text-xs text-gray-600">App queries manifests for "GPU A100, &le;100ms latency, &lt;$0.02/s." Finds high-reputation provider.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold">2</div>
            <div>
              <p className="text-sm font-medium text-gray-900">Negotiation</p>
              <p className="text-xs text-gray-600">MCP session established; SLA signed; Hydra stream opens with $1 cap (x402-style).</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">3</div>
            <div>
              <p className="text-sm font-medium text-gray-900">Execution</p>
              <p className="text-xs text-gray-600">compute.submit() called; provider streams partial proofs; payments unlock per milestone; final ProofFabric proof returned.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold">4</div>
            <div>
              <p className="text-sm font-medium text-gray-900">Settlement</p>
              <p className="text-xs text-gray-600">HTLC closes; ZShard VM verifies & updates UTXO; receipt checkpointed. memory.put() persists results with DA retention.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Interoperability with the Stack</h2>

      <p>
        <strong>ProofFabric</strong> defines proof types and price meters referenced in manifests and 
        receipts. <strong>Hydra/Hive</strong> carries payments and services with x402-style payment 
        coupling to proof events. <strong>HyperChain/ZShard VM</strong> finalizes verified transitions 
        while DAP ensures data accessibility. <strong>AI Interface</strong> maps natural-language 
        queries to manifests and routes through MCP, exposing OS APIs to end-user applications.
      </p>

      <p>
        This integration creates a seamless experience where agents can discover capabilities, negotiate 
        terms, execute complex workflows, and settle payments—all while maintaining cryptoeconomic 
        guarantees and OS-like ergonomics over a fully decentralized substrate.
      </p>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Next: AI Interface — The Human Gateway</h3>
            <p className="text-blue-800 mb-4">
              Discover how natural language interfaces map human intent to agent protocols, 
              making the decentralized agentic stack accessible to everyday users.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Continue to AI Interface →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};