import React from 'react';
import { Zap, Network, Lock, DollarSign, BarChart3, Layers, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

export const DocsHydraSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hydra — The Circulatory System of Hyperspace
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          A stake-secured network for verifiable payments and machine-to-machine services.
        </p>
      </div>

      {/* Connection to Previous Section */}
      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-1">From Proofs to Payments</h3>
            <p className="text-sm text-blue-800">
              Once agents generate proofs and calculate fees through ProofFabric, Hydra carries those fees through verifiable payment channels, ensuring economic flow matches computational work.
            </p>
          </div>
        </div>
      </div>

      <h2>Overview — The Need for a Verifiable Payment Layer</h2>

      <p>
        Micropayments for agents, IoT devices, and AI workloads demand low latency, predictability, and 
        cryptoeconomic accountability. Traditional payment networks struggle with these requirements, 
        creating bottlenecks in autonomous systems that need to transact at machine speed.
      </p>

      <p>
        The Lightning Network, while pioneering, suffers from liquidity opacity, unpredictable fees, 
        and route failures that make it unsuitable for deterministic agent behavior. Agents cannot 
        operate efficiently when payment success is probabilistic.
      </p>

      <p>
        Hydra takes a fundamentally different approach: routing becomes a validator duty, not a volunteer 
        service — secured by stake and enforced through Proof-of-Circulation. This transforms unreliable 
        best-effort routing into a public utility with guaranteed capacity and deterministic settlement.
      </p>

      <div className="not-prose bg-green-50 border border-green-200 rounded-lg p-4 my-6">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-green-900 mb-1">Key Innovation</h4>
            <p className="text-sm text-green-800">
              Hydra turns routing into a public utility — reliable, deterministic, and economically verifiable.
            </p>
          </div>
        </div>
      </div>

      <h2>Architecture — How Hydra Works</h2>

      <p>
        The network operates as a stake-regulated DHT overlay, inspired by Kademlia but optimized for 
        payment routing. Each validator node maintains a fixed position in the network topology and 
        opens a predetermined number of payment tabs with neighboring nodes.
      </p>

      <p>
        Each payment tab holds a slice of the validator's capital, creating deterministic liquidity 
        pools throughout the network. Payments follow monotone prefix paths through this topology, 
        requiring only O(log N) hops with guaranteed capacity availability.
      </p>

      <p>
        Because both topology and quotas are fixed by stake, the system eliminates pathfinding failures 
        and provides throughput guarantees. Unlike probabilistic routing, every payment has a known path 
        and bounded completion time.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-4">
            <h4 className="text-lg font-semibold text-gray-900">Hydra Network Topology</h4>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-center">
                <Network className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h5 className="font-semibold text-blue-900 mb-2">DHT Overlay</h5>
                <p className="text-sm text-blue-800">
                  Stake-regulated Kademlia topology with fixed node positions
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h5 className="font-semibold text-green-900 mb-2">Payment Tabs</h5>
                <p className="text-sm text-green-800">
                  Fixed-capacity channels between neighboring validators
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h5 className="font-semibold text-purple-900 mb-2">O(log N) Routes</h5>
                <p className="text-sm text-purple-800">
                  Monotone prefix paths with guaranteed capacity
                </p>
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 1:</strong> Hydra's three-layer architecture ensures deterministic routing and capacity guarantees.
          </figcaption>
        </figure>
      </div>

      <p>
        Stake-backed accountability ensures network reliability. Every tab update and dispute settles 
        deterministically on-chain, with slashing penalties for dishonest routers. This cryptoeconomic 
        security model eliminates the trust assumptions that plague volunteer-based payment networks.
      </p>

      <h2>Proof-Coupled HTLCs — Instant, Verifiable Settlement</h2>

      <p>
        Hydra extends Hash-Time-Lock Contracts (HTLCs) with integrated proof validation, creating atomic 
        settlement between service delivery and payment. This eliminates the escrow periods and dispute 
        mechanisms that slow traditional payment systems.
      </p>

      <p>
        When an agent requests a service, funds are locked in an HTLC that can only be unlocked by 
        presenting a valid zero-knowledge proof of task completion. The proof might verify compute 
        work, data retrieval, storage provision, or any other measurable service.
      </p>

      <p>
        Once the proof verification succeeds, the HTLC releases funds immediately, completing both 
        service delivery and payment atomically. This removes counterparty risk and eliminates the 
        need for trusted intermediaries or lengthy dispute resolution processes.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Proof-Coupled HTLC Flow</h4>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 w-32 text-center">
                <div className="text-sm font-medium text-blue-900">Agent A</div>
                <div className="text-xs text-blue-700 mt-1">Service Request</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 w-32 text-center">
                <Lock className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                <div className="text-sm font-medium text-orange-900">HTLC Lock</div>
                <div className="text-xs text-orange-700 mt-1">Funds Escrowed</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-green-100 border border-green-300 rounded-lg p-3 w-32 text-center">
                <div className="text-sm font-medium text-green-900">Agent B</div>
                <div className="text-xs text-green-700 mt-1">Service Provider</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-purple-100 border border-purple-300 rounded-lg p-3 text-center">
                <Zap className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                <div className="text-sm font-medium text-purple-900">Service Execution + Proof Generation</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="bg-green-100 border border-green-300 rounded-lg p-3 w-32 text-center">
                <div className="text-sm font-medium text-green-900">Proof Submitted</div>
                <div className="text-xs text-green-700 mt-1">Task Complete</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 w-32 text-center">
                <CheckCircle className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                <div className="text-sm font-medium text-orange-900">HTLC Unlock</div>
                <div className="text-xs text-orange-700 mt-1">Instant Settlement</div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 w-32 text-center">
                <div className="text-sm font-medium text-blue-900">Payment Complete</div>
                <div className="text-xs text-blue-700 mt-1">Atomic Settlement</div>
              </div>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 2:</strong> Proof-coupled HTLCs ensure atomic settlement between service delivery and payment.
          </figcaption>
        </figure>
      </div>

      <p>
        <strong>Example:</strong> An agent completes a machine learning inference job, generates a 
        zero-knowledge proof of correct computation, submits the proof to Hydra, and receives payment 
        instantly upon verification — all without human intervention or trusted intermediaries.
      </p>

      <h2>Pricing and Predictability — Transparent and Standardized</h2>

      <p>
        Hydra implements a globally uniform fee model that eliminates the fee uncertainty plaguing 
        current payment networks. The pricing mechanism adapts automatically to network conditions 
        while maintaining predictability for users.
      </p>

      <p>
        The base cost follows the formula: <code>fee = τr + βt</code>, where τ represents the liquidity 
        lock fee rate, r is the payment amount, β is the burn rate, and t is the time duration. This 
        model parallels EIP-1559's base fee mechanism, creating predictable pricing dynamics.
      </p>

      <p>
        Network congestion automatically adjusts the burn rate, while reward rates adapt to maintain 
        steady returns for liquidity providers. Because routing capacity per node is deterministic, 
        every payment has known latency bounds and predictable costs.
      </p>

      <div className="not-prose overflow-x-auto my-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Network State
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fee Behavior
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Latency
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reliability
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Low Usage
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Minimal fees, low burn rate
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ~10ms
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                99.9%+
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                High Congestion
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Higher burn, priority routing
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ~50ms
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                99.5%+
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        This eliminates the "fee roulette" problem of existing networks where users guess at appropriate 
        fees. Agents can reliably budget for payment costs and optimize their economic behavior without 
        worrying about unexpected fee spikes or route failures.
      </p>

      <h2>Rate Control and Allocation Policy</h2>

      <p>
        Each validator maintains per-round send and receive quotas, ensuring fair network access and 
        preventing denial-of-service attacks. These quotas refresh periodically, with all balances and 
        disputes settling deterministically without mempool delays.
      </p>

      <p>
        Failed or unresponsive peers are automatically flushed through HTLC timeouts and ID rotations. 
        The network topology converges toward honest, performant peers through this self-healing mechanism.
      </p>

      <p>
        Proof-of-Circulation audits randomly sample routing tokens to verify honest behavior. This 
        probabilistic verification achieves greater than 99% detection confidence for dishonest routing 
        while maintaining low overhead.
      </p>

      <div className="not-prose bg-amber-50 border border-amber-200 rounded-lg p-4 my-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-semibold text-amber-900 mb-1">Network Guarantees</h4>
            <p className="text-sm text-amber-800">
              Bounded latency, verifiable honesty, and long-term stability under network churn are maintained through deterministic rate control and cryptoeconomic incentives.
            </p>
          </div>
        </div>
      </div>

      <h2>Integration with Hive Markets — Payments Meet Services</h2>

      <p>
        Hydra serves as the economic foundation for Hive Networks — peer-to-peer marketplaces for 
        compute, storage, and bandwidth services. Agents participate as both buyers and sellers, 
        with payments flowing seamlessly through Hydra's infrastructure.
      </p>

      <p>
        Service providers earn through Hydra payment streams, while consumers pay via proof-coupled 
        HTLCs that ensure atomic service delivery. This tight integration eliminates the escrow 
        periods and trust requirements that limit traditional service marketplaces.
      </p>

      <p>
        Market design incorporates stake-weighted bidding, reputation scoring, and deterministic 
        matching algorithms similar to BitTorrent swarms. This creates efficient price discovery 
        while maintaining the decentralized, trustless properties essential for autonomous agents.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Hive Market Integration</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <Layers className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h5 className="font-semibold text-blue-900 mb-2">Compute Markets</h5>
              <p className="text-sm text-blue-800">ML inference, data processing, simulation workloads</p>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <Network className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h5 className="font-semibold text-green-900 mb-2">Storage Networks</h5>
              <p className="text-sm text-green-800">Distributed storage, content delivery, data archival</p>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
              <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
              <h5 className="font-semibold text-purple-900 mb-2">Bandwidth Services</h5>
              <p className="text-sm text-purple-800">Relay networks, VPN services, edge computing</p>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 3:</strong> Hive markets transform Hydra into a living economy of machine services.
          </figcaption>
        </figure>
      </div>

      <p>
        These markets transform Hydra from a simple payment network into the backbone of decentralized 
        AI infrastructure — where agents can discover, purchase, and provide services in a seamless, 
        economically efficient manner.
      </p>

      <h2>Economic Feedback Loop</h2>

      <p>
        The network's routing and burn dynamics create a self-regulating economic loop that maintains 
        stability and growth. Increased usage drives higher burn rates, which increase per-token rewards 
        for routing stake, attracting more validators and ultimately reducing fees through improved capacity.
      </p>

      <p>
        This feedback mechanism — usage → burn → higher rewards → more stake → lower fees → more usage — 
        keeps throughput stable and returns predictable while tying token value directly to real payment volume.
      </p>

      <p>
        The result is a sustainably self-balancing system where congestion is automatically priced, 
        reliability is economically rewarded, and long-term growth is incentivized through fundamental 
        network usage rather than speculative dynamics.
      </p>

      <h2>Takeaways — Hydra in One Paragraph</h2>

      <p>
        Hydra revolutionizes machine-to-machine payments through stake-secured routing with deterministic 
        capacity and rate control. Proof-coupled HTLCs unify service delivery and payment into atomic 
        transactions, while uniform pricing and EIP-1559-style fee adjustment guarantee predictability. 
        Micropayment latency is measured in milliseconds, not minutes. Integrated Hive markets for compute, 
        storage, and data transform the payment layer into the economic bloodstream of Hyperspace — enabling 
        a truly autonomous digital economy where agents can transact, collaborate, and compete at machine speed.
      </p>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Next: HyperChain & ZShard</h3>
            <p className="text-blue-800 mb-4">
              Discover how the verifiable ledger provides stateless, hyper-sharded settlement 
              for agent-scale throughput with deterministic finality.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Continue to HyperChain & ZShard →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};