import React from 'react';
import { Layers, Zap, Shield, ArrowRight, BarChart3, Cpu } from 'lucide-react';

export const DocsNanochainsSection: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      {/* Page Title */}
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hyper-Sharded Nanochains
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Stateless production and rotating leaders for linear throughput scaling.
        </p>
      </div>

      {/* Connection to Previous Section */}
      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
        <div className="flex items-start gap-3">
          <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="text-sm font-semibold text-blue-900 mb-1">From Accessible Data to Stateless Execution</h3>
            <p className="text-sm text-blue-800">
              With DAP ensuring data accessibility, Nanochains can operate statelessly, verifying proofs and Merkle branches without maintaining persistent state, enabling true linear scaling.
            </p>
          </div>
        </div>
      </div>

      <h2>Stateless Shard Architecture</h2>

      <p>
        HyperChain organizes execution into stateless shards called Nanochains. Unlike traditional sharded 
        systems that maintain persistent state across validators, Nanochains operate as pure verification 
        and aggregation engines, processing transactions without storing intermediate state.
      </p>

      <p>
        Producers verify user-submitted zero-knowledge proofs and Merkle branches, aggregate transitions 
        into block-level commitments, and publish new state roots. This stateless approach eliminates 
        the coordination overhead and state synchronization challenges that limit traditional sharding 
        architectures.
      </p>

      <div className="not-prose grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Cpu className="w-5 h-5 text-blue-600" />
            <h3 className="text-sm font-semibold text-blue-900">Stateless Production</h3>
          </div>
          <p className="text-sm text-blue-800">
            Verify proofs and Merkle branches without maintaining persistent shard state
          </p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-purple-600" />
            <h3 className="text-sm font-semibold text-purple-900">Rapid Rotation</h3>
          </div>
          <p className="text-sm text-purple-800">
            VRF-based leader rotation prevents long-term capture while maintaining throughput
          </p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-5 h-5 text-green-600" />
            <h3 className="text-sm font-semibold text-green-900">Linear Scaling</h3>
          </div>
          <p className="text-sm text-green-800">
            Throughput scales linearly with shard count due to independent processing
          </p>
        </div>
      </div>

      <h2>Nanochain Operation Flow</h2>

      <p>
        Each Nanochain follows a four-step process that transforms user proofs into aggregated state 
        commitments without maintaining persistent state between operations.
      </p>

      <div className="not-prose my-8">
        <figure className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-gray-900">Nanochain Processing Pipeline</h4>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold">1</span>
              </div>
              <h5 className="font-semibold text-blue-900 mb-2">Proof Reception</h5>
              <p className="text-xs text-blue-700">User submits ZK proof + Merkle branches</p>
            </div>
            
            <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold">2</span>
              </div>
              <h5 className="font-semibold text-purple-900 mb-2">Stateless Verification</h5>
              <p className="text-xs text-purple-700">Verify proofs without persistent state</p>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold">3</span>
              </div>
              <h5 className="font-semibold text-green-900 mb-2">Commitment Aggregation</h5>
              <p className="text-xs text-green-700">Aggregate into block-level ZK commitment</p>
            </div>
            
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 text-center">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-sm font-bold">4</span>
              </div>
              <h5 className="font-semibold text-orange-900 mb-2">State Root Publication</h5>
              <p className="text-xs text-orange-700">Publish new state root to Beacon</p>
            </div>
          </div>
          
          <figcaption className="text-sm text-gray-600 text-center mt-4">
            <strong>Figure 1:</strong> Four-step Nanochain processing pipeline enabling stateless operation.
          </figcaption>
        </figure>
      </div>

      <h2>DAP-Gated Execution</h2>

      <p>
        Nanochains integrate tightly with DAP to ensure data and execution liveness remain perfectly 
        aligned. Shard tips can only be extended when their underlying blobs have passed DAP verification, 
        preventing execution on inaccessible data.
      </p>

      <p>
        This integration eliminates the state bloat and coordination failures that plague traditional 
        sharded systems. Since execution is gated on data accessibility, Nanochains never process 
        transactions with unavailable dependencies, maintaining system consistency and eliminating 
        a major source of scaling bottlenecks.
      </p>

      <h3>Benefits Over Traditional Sharding</h3>

      <ul>
        <li><strong>No Coordination Overhead:</strong> Independent shard operation without cross-shard communication</li>
        <li><strong>Eliminates Adaptive Corruption:</strong> Rapid rotation prevents targeted attacks on specific shards</li>
        <li><strong>True Linear Scaling:</strong> Throughput increases proportionally with shard count</li>
        <li><strong>Reduced Complexity:</strong> Stateless operation simplifies validator requirements</li>
      </ul>

      <h2>Rapid Leader Rotation</h2>

      <p>
        Nanochains employ Verifiable Random Functions (VRF) or RANDAO mechanisms to provide unpredictable, 
        rapid leader rotation. This prevents long-term capture attacks while maintaining consistent 
        throughput across the network.
      </p>

      <p>
        Short-term leadership windows ensure that no single entity can control a shard for extended 
        periods, while cryptographically verifiable randomness guarantees fair leader selection. 
        The rotation mechanism maintains network liveness and decentralization without sacrificing 
        performance.
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
                Stateless Nanochains
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
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                Stateless verification
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Cross-Shard Communication
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Complex coordination protocols
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                Beacon-mediated settlement
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Leader Selection
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Fixed committees
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                Rapid VRF rotation
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Throughput Scaling
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Sublinear due to coordination
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                True linear scaling
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Data Dependency
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Assume availability
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                DAP-gated execution
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Linear Scaling Properties</h2>

      <p>
        The stateless nature of Nanochains enables true linear throughput scaling. Since each shard 
        operates independently without cross-shard state dependencies, adding more shards directly 
        increases network capacity without coordination overhead.
      </p>

      <p>
        This scaling property is crucial for supporting millions of concurrent agent transactions. 
        As the agent economy grows, the network can seamlessly add more Nanochains to handle increased 
        load without architectural changes or performance degradation.
      </p>

      <h3>Performance Characteristics</h3>

      <ul>
        <li><strong>Capture Resistance:</strong> High due to rapid VRF rotation</li>
        <li><strong>Throughput Impact:</strong> Minimal overhead from rotation mechanism</li>
        <li><strong>Coordination Overhead:</strong> Low due to stateless operation</li>
        <li><strong>Decentralization:</strong> Maximized through random leader selection</li>
      </ul>

      <h2>Example: Agent Transaction Processing</h2>

      <p>
        Consider an AI agent submitting a complex computation proof to a Nanochain. The agent provides 
        a zero-knowledge proof of correct execution along with Merkle branches proving input data 
        validity. The Nanochain leader verifies these proofs statelessly, aggregates them with other 
        transactions in the block, and publishes the resulting state commitment to the Beacon chain. 
        The entire process requires no persistent state storage, enabling the Nanochain to process 
        the next block immediately with a potentially different leader.
      </p>

      <div className="not-prose bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
        <div className="flex items-start gap-4">
          <ArrowRight className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Next: Beacon Chain & BFT Finality</h3>
            <p className="text-blue-800 mb-4">
              Discover how the Beacon chain provides fast, deterministic finality for Nanochain 
              commitments through Byzantine Fault Tolerant consensus.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
              Continue to Beacon Chain →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};