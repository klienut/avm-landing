import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, ArrowRight, BarChart3, Cpu } from 'lucide-react';

export const NanochainsSection: React.FC = () => {
  // Listen for URL hash changes to scroll to sections
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="nano-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <rect x="6" y="6" width="3" height="3" fill="currentColor" opacity="0.4" />
                <rect x="3" y="3" width="1" height="1" fill="currentColor" opacity="0.6" />
                <rect x="9" y="9" width="1" height="1" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#nano-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10" />
      </div>

      <motion.div 
        className="relative py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ 
          visible: { transition: { staggerChildren: 0.1 } } 
        }}
      >
        <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-lg text-blue-400 font-medium mb-4 block">⚡ Section 3B — Hyper-Sharded Execution</span>
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Stateless Nanochains — Linear Scaling Through Verification
            </span>
          </h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto mb-8">
            Shards that verify proofs and aggregate commitments without persistent state.
          </p>
          <p className="text-xl text-blue-300/70 max-w-3xl mx-auto leading-relaxed">
            True linear scaling through stateless verification architecture
          </p>
        </motion.div>

        {/* Connection Banner */}
        <motion.div 
          id="nanochains"
          className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-8 mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <ArrowRight className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">From Accessible Data to Stateless Execution</h3>
              <p className="text-blue-200 leading-relaxed">
                With DAP ensuring data accessibility, Nanochains can operate statelessly, verifying proofs and 
                Merkle branches without maintaining persistent state, enabling true linear scaling.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Architecture */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            Stateless Shard Architecture
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/30 border border-blue-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Stateless Production</h3>
                <p className="text-blue-200">
                  Producers verify user proofs and Merkle branches without maintaining persistent shard state
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/30 border border-purple-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">Rapid Rotation</h3>
                <p className="text-purple-200">
                  VRF-based leader rotation prevents long-term capture while maintaining throughput
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/30 border border-green-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-300 mb-3">Linear Scaling</h3>
                <p className="text-green-200">
                  Throughput scales linearly with shard count due to independent, parallel processing
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How Nanochains Work */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            Nanochain Operation Flow
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-blue-500/30 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h4 className="font-semibold text-blue-300 mb-2">Proof Reception</h4>
                <p className="text-sm text-blue-200">User submits ZK proof + Merkle branches</p>
              </motion.div>

              <motion.div 
                className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-purple-500/30 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h4 className="font-semibold text-purple-300 mb-2">Stateless Verification</h4>
                <p className="text-sm text-purple-200">Verify proofs without persistent state</p>
              </motion.div>

              <motion.div 
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-green-500/30 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h4 className="font-semibold text-green-300 mb-2">Commitment Aggregation</h4>
                <p className="text-sm text-green-200">Aggregate into block-level ZK commitment</p>
              </motion.div>

              <motion.div 
                className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-12 h-12 bg-orange-500/30 text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold">4</span>
                </div>
                <h4 className="font-semibold text-orange-300 mb-2">State Root Publication</h4>
                <p className="text-sm text-orange-200">Publish new state root to Beacon</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* DAP Integration */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            DAP-Gated Execution
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Data-Execution Alignment</h3>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Shard tips only extendable when blobs pass DAP</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Data and execution liveness remain perfectly aligned</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Prevents state bloat and coordination failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>No execution on inaccessible data</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-indigo-500/20 border border-indigo-500/30 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-indigo-300">Benefits Over Traditional Sharding</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 flex-shrink-0 text-indigo-400" />
                  <span className="text-indigo-200">No coordination overhead between shards</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 flex-shrink-0 text-indigo-400" />
                  <span className="text-indigo-200">Eliminates adaptive corruption vulnerabilities</span>
                </div>
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 flex-shrink-0 text-indigo-400" />
                  <span className="text-indigo-200">True linear throughput scaling</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 flex-shrink-0 text-indigo-400" />
                  <span className="text-indigo-200">Stateless operation reduces complexity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Beacon Chain & BFT Finality */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-purple-300 mb-8 text-center">
            Beacon Chain — State Root Commitment & BFT Finality
          </h2>
          <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-purple-300">BFT Consensus Layer</h3>
                <p className="text-purple-200 mb-4">
                  The Beacon Chain runs Byzantine Fault Tolerant consensus to commit shard state roots 
                  and finalize DAP accessibility votes, providing fast finality for the entire system.
                </p>
                <ul className="space-y-3 text-purple-200">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Commits aggregated shard state roots from nanochains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Finalizes DAP accessibility votes with BFT guarantees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Provides cryptographic finality in seconds, not minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Coordinates global state consistency across all shards</span>
                  </li>
                </ul>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6">
                <h4 className="font-semibold mb-4 text-purple-300">Beacon Responsibilities</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 flex-shrink-0 text-purple-400 mt-1" />
                    <div>
                      <span className="text-sm font-medium text-purple-300 block">State Root Commitment</span>
                      <span className="text-xs text-purple-200">Aggregates and commits nanochain state updates</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 flex-shrink-0 text-purple-400 mt-1" />
                    <div>
                      <span className="text-sm font-medium text-purple-300 block">DA Vote Finalization</span>
                      <span className="text-xs text-purple-200">BFT consensus on data accessibility decisions</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 flex-shrink-0 text-purple-400 mt-1" />
                    <div>
                      <span className="text-sm font-medium text-purple-300 block">Fast Finality</span>
                      <span className="text-xs text-purple-200">Sub-second finality with Byzantine fault tolerance</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 flex-shrink-0 text-purple-400 mt-1" />
                    <div>
                      <span className="text-sm font-medium text-purple-300 block">Global Coordination</span>
                      <span className="text-xs text-purple-200">Maintains consistency across hyper-sharded execution</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-purple-300 mb-3 text-center">
                Beacon-Mediated Settlement Flow
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <span className="text-xs text-purple-200">Nanochains submit state roots</span>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 mx-auto hidden md:block mt-3" />
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <span className="text-xs text-purple-200">Beacon runs BFT consensus</span>
                </div>
                <ArrowRight className="w-5 h-5 text-purple-400 mx-auto hidden md:block mt-3" />
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <span className="text-xs text-purple-200">Global state finalized</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VRF Leader Rotation */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            Rapid Leader Rotation
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-300">VRF-Based Selection</h3>
                <p className="text-blue-200 mb-4">
                  Verifiable Random Functions (VRF) or RANDAO provide unpredictable, rapid leader rotation 
                  that prevents long-term capture attacks while maintaining consistent throughput.
                </p>
                <ul className="space-y-2 text-sm text-blue-200">
                  <li>• Unpredictable leader selection</li>
                  <li>• Short-term leadership windows</li>
                  <li>• Cryptographically verifiable randomness</li>
                  <li>• Maintains network liveness under rotation</li>
                </ul>
              </div>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
                <h4 className="font-semibold mb-4 text-blue-300">Rotation Benefits</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">Capture Resistance:</span>
                    <span className="text-green-400 font-semibold">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">Throughput Impact:</span>
                    <span className="text-green-400 font-semibold">Minimal</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">Coordination Overhead:</span>
                    <span className="text-green-400 font-semibold">Low</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-200">Decentralization:</span>
                    <span className="text-green-400 font-semibold">Maximized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scaling Comparison */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            Linear Scaling Properties
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-blue-500/30">
                    <th className="text-left py-3 px-4 font-semibold text-blue-300">Property</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-300">Traditional Sharding</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-300">Stateless Nanochains</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-blue-500/20">
                    <td className="py-3 px-4 font-medium text-blue-300">State Management</td>
                    <td className="py-3 px-4 text-blue-200">Persistent shard state</td>
                    <td className="py-3 px-4 text-green-400">Stateless verification</td>
                  </tr>
                  <tr className="border-b border-blue-500/20">
                    <td className="py-3 px-4 font-medium text-blue-300">Cross-Shard Communication</td>
                    <td className="py-3 px-4 text-blue-200">Complex coordination protocols</td>
                    <td className="py-3 px-4 text-green-400">Beacon-mediated settlement</td>
                  </tr>
                  <tr className="border-b border-blue-500/20">
                    <td className="py-3 px-4 font-medium text-blue-300">Leader Selection</td>
                    <td className="py-3 px-4 text-blue-200">Fixed committees</td>
                    <td className="py-3 px-4 text-green-400">Rapid VRF rotation</td>
                  </tr>
                  <tr className="border-b border-blue-500/20">
                    <td className="py-3 px-4 font-medium text-blue-300">Throughput Scaling</td>
                    <td className="py-3 px-4 text-blue-200">Sublinear due to coordination</td>
                    <td className="py-3 px-4 text-green-400">True linear scaling</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-blue-300">Data Dependency</td>
                    <td className="py-3 px-4 text-blue-200">Assume availability</td>
                    <td className="py-3 px-4 text-green-400">DAP-gated execution</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-300 mb-6">Stateless Scaling at Agent Speed</h2>
            <p className="text-lg text-blue-200 leading-relaxed mb-6">
              Stateless Nanochains achieve true linear scaling by eliminating persistent state, using 
              rapid VRF rotation to prevent capture, and gating execution on DAP-verified data accessibility. 
              This architecture supports millions of concurrent agent transactions while maintaining 
              decentralization and security guarantees.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next: Beacon Chain & BFT Finality
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};