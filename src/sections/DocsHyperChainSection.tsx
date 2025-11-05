import React from 'react';
import { Database, Shield, Network, Zap, Layers, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export const DocsHyperChainSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          HyperChain — Data-First Sharding with zk-Aggregated Finality
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Finalize what's actually accessible. Scale by verifying, not re-executing.
        </p>
      </div>

      {/* Connection to Previous Section */}
      <div className="not-prose bg-purple-50 border border-purple-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <ArrowRight className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-purple-900 mb-1">From Payments to Settlement</h3>
            <p className="text-sm text-purple-800">
              With Hydra ensuring atomic payment delivery, HyperChain provides the verifiable ledger where these transactions finalize with deterministic accessibility guarantees.
            </p>
          </div>
        </div>
      </div>

      <h2>Data Accessibility Probing (DAP) — Finality from Accessibility</h2>

      <p>
        DAP represents a fundamental paradigm shift from traditional data availability: instead of validators 
        attesting that "someone posted data," the network only finalizes blobs that it can actually retrieve 
        right now. This accessibility-based approach eliminates the gap between attestation and reality.
      </p>

      <p>
        The mechanism operates through a short probing window where validators issue anonymous, paid probes 
        via the relay network. A blob achieves finality only when enough probes successfully return valid 
        data openings, proving the network can access the data when needed.
      </p>

      <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-green-900 mb-1">Fail-Closed Safety</h4>
            <p className="text-sm text-green-800">
              If data isn't reachable during the probe window, it simply doesn't finalize — no silent failures or false attestations.
            </p>
          </div>
        </div>
      </div>

      <h3>Key Properties</h3>

      <ul>
        <li><strong>Service-Coupled Finality:</strong> Finalization requires actual data accessibility, not just attestations</li>
        <li><strong>No Per-Shard Subnets:</strong> Eliminates adaptive corruption vulnerabilities and coordination overhead</li>
        <li><strong>Predictable Pricing:</strong> Fees are blob-size-independent and inversely proportional to chosen latency</li>
        <li><strong>Clear Responsibility Split:</strong> Probes gate admission; full nodes download verified data post-finality</li>
      </ul>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Data Accessibility Probing Flow</h4>
          </div>
          
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 w-40 text-center">
                <Database className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-blue-900">Blob Submission</div>
                <div className="text-xs text-blue-700 mt-1">Data posted to relay</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 w-40 text-center">
                <Zap className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-orange-900">Probe Window</div>
                <div className="text-xs text-orange-700 mt-1">Anonymous validator probes</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-green-100 border border-green-300 rounded-lg p-4 w-40 text-center">
                <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-green-900">Accessibility Proven</div>
                <div className="text-xs text-green-700 mt-1">Finality achieved</div>
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 1:</strong> DAP ensures finality only when data is actually accessible to the network.
          </figcaption>
        </figure>
      </div>

      <h2>Why DAP Changes the DA Game</h2>

      <p>
        Legacy data availability systems create a dangerous gap: committees attest to "availability" even 
        when end-users cannot actually fetch the data. This leads to finalized but inaccessible state, 
        breaking the fundamental promise of blockchain transparency.
      </p>

      <p>
        DAP eliminates this gap by making serving during the probe window the only path to finality. 
        Network congestion becomes priced latency rather than silent failure, with fees that are 
        independent of blob size and inversely proportional to chosen latency.
      </p>

      <p>
        Users choose their finality speed: shorter probe windows cost more but finalize faster, while 
        longer windows provide cheaper settlement for non-urgent data. This creates a natural market 
        for latency preferences without sacrificing accessibility guarantees.
      </p>

      <h2>Hyper-Sharded Blockchain — Stateless Production & Rotating Leaders</h2>

      <p>
        HyperChain organizes execution into stateless shards called Nanochains. Producers verify user-submitted 
        zero-knowledge proofs and Merkle branches, aggregate transitions into block-level commitments, and 
        publish new state roots without maintaining persistent state.
      </p>

      <p>
        Rapid leader rotation using VRF or RANDAO prevents long-term capture attacks while enabling linear 
        throughput scaling with shard count. Each shard operates independently, processing only transactions 
        with DAP-verified data dependencies.
      </p>

      <p>
        Shard tips can only be extended when their underlying blobs have passed DAP, ensuring data and 
        execution liveness remain perfectly aligned. This prevents the state bloat and coordination 
        failures that plague traditional sharded systems.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Property
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Traditional Sharding
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                HyperChain Nanochains
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                State Management
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Persistent shard state
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Stateless verification
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Leader Selection
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Fixed committees
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Rapid VRF rotation
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Data Dependency
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Assume availability
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                DAP-gated execution
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Beacon Chain — BFT Fast Finality</h2>

      <p>
        A dedicated Beacon chain provides fast, deterministic finality for shard commitments through 
        Byzantine Fault Tolerant consensus. Rather than re-executing transactions, the Beacon chain 
        orders and finalizes shard roots once their underlying data passes DAP verification.
      </p>

      <p>
        The Beacon serves as the single source of global finality, coordinating cross-shard operations 
        and providing a canonical ordering of state transitions. This architecture enables fast finality 
        without the computational overhead of traditional consensus mechanisms.
      </p>

      <p>
        By separating ordering from execution, the Beacon chain can process finalization much faster 
        than systems that require full transaction re-execution during consensus. The result is 
        sub-second finality for the entire multi-shard system.
      </p>

      <h2>ZShard VM — Verifier-Only Aggregation</h2>

      <p>
        The ZShard VM operates as a pure verifier, checking per-transaction zero-knowledge proofs, 
        validating UTXO membership and nullifiers, and aggregating state transitions into new roots. 
        Consensus nodes execute only verification and state-update operations, never re-running user logic.
      </p>

      <p>
        This verifier-only design enables massively parallel validation since each transaction proof 
        can be checked independently. The VM aggregates verified transitions into a single state 
        commitment, providing cryptographic proof of correct execution without computational redundancy.
      </p>

      <p>
        The deterministic nature of proof verification ensures all honest nodes reach identical state 
        conclusions, eliminating consensus complexity around execution results. Verification becomes 
        a pure function of cryptographic proofs and current state.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">ZShard VM Operation</h4>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-blue-900">Proof Verification</div>
              <div className="text-xs text-blue-700 mt-1">Validate ZK proofs</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <Database className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-green-900">UTXO Checks</div>
              <div className="text-xs text-green-700 mt-1">Membership & nullifiers</div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <Layers className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-purple-900">Aggregation</div>
              <div className="text-xs text-purple-700 mt-1">Combine transitions</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <CheckCircle className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-orange-900">State Update</div>
              <div className="text-xs text-orange-700 mt-1">New root commitment</div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 2:</strong> ZShard VM processes transactions through pure verification, not re-execution.
          </figcaption>
        </figure>
      </div>

      <h2>Execution Model — Turing-Complete UTXO Scripts, zk-Aggregated</h2>

      <p>
        Smart contract logic lives in UTXO scripts and validity predicates rather than global state machines. 
        Each spend operation proves UTXO membership and predicate satisfaction, emits nullifiers to prevent 
        double-spending, and creates new notes with attached predicates.
      </p>

      <p>
        The model achieves Turing completeness through expressive scripts and covenant mechanisms while 
        maintaining the parallelism benefits of UTXO architectures. User-side proving keeps transaction 
        latency low since producers only verify and aggregate rather than execute complex logic.
      </p>

      <p>
        Cross-shard operations work atomically: burn a UTXO on shard A, Beacon finalizes the burn receipt, 
        then mint on shard B using an inclusion proof. This provides bridge-free atomicity without trusted 
        intermediaries or complex locking mechanisms.
      </p>

      <div className="not-prose bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-3">Example: Cross-Shard Asset Transfer</h3>
        <pre className="text-sm text-slate-800 overflow-x-auto">
{`// Shard A: Burn operation
{
  inputs: [utxo_id],
  proof: zk_proof_of_ownership,
  nullifier: hash(utxo_id, secret),
  burn_receipt: commitment_to_target_shard
}

// Beacon: Finalize burn
beacon.finalize(shard_A.burn_receipt)

// Shard B: Mint with inclusion proof  
{
  mint_amount: value,
  inclusion_proof: beacon.proof_of_burn,
  new_utxo: create_with_predicates(recipient, value)
}`}
        </pre>
      </div>

      <h2>Bridge Back to AVM / Agent Proofs</h2>

      <p>
        Agents generate ProofFabric proofs containing prover circuits, verifier circuits, and pricing meters 
        for their computational work. These proofs flow into HyperChain's Nanochains, where the ZShard VM 
        verifies and aggregates them into UTXO state transitions. The Beacon chain provides final settlement, 
        but only after DAP confirms the underlying data remains accessible to the network. This creates an 
        end-to-end pipeline from agent computation to verifiable, accessible settlement: Agent proves → 
        Shard verifies → Beacon finalizes, with accessibility guarantees at every step.
      </p>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Next: Agent Protocol Suite</h3>
            <p className="text-blue-800 mb-4">
              Explore how agents discover, communicate, and establish reputation through the 
              protocol layer that makes autonomous coordination possible.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Continue to Agent Protocols →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};