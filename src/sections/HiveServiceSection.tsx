import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Network, Zap, DollarSign, Server, Database, ArrowRight, TrendingUp } from 'lucide-react';

export const HiveServiceSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hive-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <polygon points="10,1 18,6 18,14 10,19 2,14 2,6" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hive-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-teal-500/10" />
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
            <span className="text-lg text-emerald-400 font-medium mb-4 block">🧩 Hive Service Markets</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                The Service Economy
              </span>
            </h2>
            <p className="text-xl text-emerald-300 max-w-3xl mx-auto mb-8">
              Peer-to-peer markets for compute, storage, and bandwidth with atomic payment settlement.
            </p>
          </motion.div>

          {/* Connection Banner */}
          <motion.div 
            className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-8 mb-16 backdrop-blur-sm"
            variants={itemVariants}
          >
            <div className="flex items-center gap-4">
              <ArrowRight className="w-8 h-8 flex-shrink-0 text-emerald-400" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-emerald-300">From Payments to Services</h3>
                <p className="text-emerald-200 leading-relaxed">
                  With Hydra providing reliable payment rails, Hive transforms the network into a global marketplace where 
                  agents can instantly rent compute, storage, and bandwidth resources with cryptoeconomic guarantees.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service Categories */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-emerald-300 mb-8 text-center">
              Three Pillars of the Service Economy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-blue-500/20 border border-blue-500/30 text-blue-200 rounded-xl p-8 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Layers className="w-12 h-12 mb-6 text-blue-400" />
                <h3 className="text-2xl font-semibold mb-4 text-blue-300">Compute Markets</h3>
                <ul className="space-y-3 text-blue-200">
                  <li>• ML inference pipelines</li>
                  <li>• Data processing workloads</li>
                  <li>• Scientific simulations</li>
                  <li>• Batch job orchestration</li>
                </ul>
                <div className="mt-6 p-3 bg-blue-500/20 rounded-lg">
                  <p className="text-sm text-blue-200">
                    <strong>Payment Model:</strong> Per-FLOP, per-minute, or per-job with proof-based verification
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-green-500/20 border border-green-500/30 text-green-200 rounded-xl p-8 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Database className="w-12 h-12 mb-6 text-green-400" />
                <h3 className="text-2xl font-semibold mb-4 text-green-300">Storage Networks</h3>
                <ul className="space-y-3 text-green-200">
                  <li>• Distributed file systems</li>
                  <li>• Content delivery networks</li>
                  <li>• Data archival services</li>
                  <li>• Backup & recovery</li>
                </ul>
                <div className="mt-6 p-3 bg-green-500/20 rounded-lg">
                  <p className="text-sm text-green-200">
                    <strong>Payment Model:</strong> Size × retention with erasure coding and availability proofs
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-purple-500/20 border border-purple-500/30 text-purple-200 rounded-xl p-8 backdrop-blur-sm"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Zap className="w-12 h-12 mb-6 text-purple-400" />
                <h3 className="text-2xl font-semibold mb-4 text-purple-300">Bandwidth Services</h3>
                <ul className="space-y-3 text-purple-200">
                  <li>• Relay networks</li>
                  <li>• VPN & proxy services</li>
                  <li>• Edge computing nodes</li>
                  <li>• API gateway services</li>
                </ul>
                <div className="mt-6 p-3 bg-purple-500/20 rounded-lg">
                  <p className="text-sm text-purple-200">
                    <strong>Payment Model:</strong> Per-byte transferred with latency SLAs and QoS guarantees
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Service Discovery & Matching */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-emerald-300 mb-8 text-center">
              Service Discovery & Capability Matching
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">Provider Registration</h3>
                  <ul className="space-y-3 text-emerald-200">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>Hardware attestation:</strong> CPU/GPU specs, memory, storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>Performance metrics:</strong> Benchmarked throughput & latency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>Pricing tiers:</strong> Spot, reserved, and premium pricing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>SLA commitments:</strong> Uptime, response time guarantees</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-emerald-300 mb-4">Smart Matching</h3>
                  <ul className="space-y-3 text-emerald-200">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>Capability filtering:</strong> Resource type, capacity, location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>Cost optimization:</strong> Price-performance ratio analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>Reputation scoring:</strong> Historical performance & reliability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-2 shrink-0" />
                      <span><strong>Real-time availability:</strong> Live capacity & queue status</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Economic Loop */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-emerald-300 mb-8 text-center">
              Self-Regulating Economic Loop
            </h2>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-blue-300" />
                  </div>
                  <p className="text-sm text-blue-200 font-medium">Higher Demand</p>
                </motion.div>
                
                <ArrowRight className="w-6 h-6 text-emerald-400 hidden lg:block transform rotate-0 lg:rotate-0" />
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-8 h-8 text-orange-300" />
                  </div>
                  <p className="text-sm text-orange-200 font-medium">Higher Prices</p>
                </motion.div>
                
                <ArrowRight className="w-6 h-6 text-emerald-400 hidden lg:block" />
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Server className="w-8 h-8 text-green-300" />
                  </div>
                  <p className="text-sm text-green-200 font-medium">More Supply</p>
                </motion.div>
                
                <ArrowRight className="w-6 h-6 text-emerald-400 hidden lg:block" />
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Network className="w-8 h-8 text-purple-300" />
                  </div>
                  <p className="text-sm text-purple-200 font-medium">Network Growth</p>
                </motion.div>
                
                <ArrowRight className="w-6 h-6 text-emerald-400 hidden lg:block" />
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-indigo-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-indigo-300">↓</span>
                  </div>
                  <p className="text-sm text-indigo-200 font-medium">Lower Costs</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Integration with Agent Protocol Suite */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-emerald-300 mb-8 text-center">
              Integration with Agent Workflows
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-emerald-300 mb-4">OS-like APIs</h3>
                <div className="space-y-4">
                  <div className="bg-emerald-500/30 rounded-lg p-4">
                    <code className="text-sm font-mono text-emerald-200 block mb-2">
                      compute.submit(task_spec, inputs, latency_target)
                    </code>
                    <p className="text-xs text-emerald-200">Schedules workloads with performance requirements</p>
                  </div>
                  
                  <div className="bg-emerald-500/30 rounded-lg p-4">
                    <code className="text-sm font-mono text-emerald-200 block mb-2">
                      memory.put(blob, redundancy, retention)
                    </code>
                    <p className="text-xs text-emerald-200">Stores data with availability guarantees</p>
                  </div>
                  
                  <div className="bg-emerald-500/30 rounded-lg p-4">
                    <code className="text-sm font-mono text-emerald-200 block mb-2">
                      network.proxy(endpoint, bandwidth, region)
                    </code>
                    <p className="text-xs text-emerald-200">Routes traffic through optimal paths</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-emerald-300 mb-4">Payment Integration</h3>
                <ul className="space-y-4 text-emerald-200">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                    <span><strong>Streaming payments:</strong> Per-second billing through Hydra channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                    <span><strong>SLA enforcement:</strong> Automatic refunds for performance breaches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                    <span><strong>Proof coupling:</strong> Payment release tied to work completion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 shrink-0" />
                    <span><strong>Multi-provider orchestration:</strong> Atomic payments across service chains</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-emerald-300 mb-6">The Global Resource Marketplace</h2>
              <p className="text-lg text-emerald-200 leading-relaxed">
                Hive transforms idle compute, storage, and bandwidth into a liquid marketplace where agents can 
                instantly access resources worldwide. With capability-based matching, streaming micropayments, 
                and proof-coupled settlement, the network becomes a global utility layer—making distributed 
                resources as accessible as cloud services, but decentralized, cost-effective, and autonomous.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};