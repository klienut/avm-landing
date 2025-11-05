import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Network, Lock, DollarSign, BarChart3, Layers, ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

export const HydraSection: React.FC = () => {
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
              <pattern id="hydra-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M12.5 5 L20 12.5 L12.5 20 L5 12.5 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="12.5" cy="12.5" r="1" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hydra-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10" />
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
            <span className="text-lg text-blue-400 font-medium mb-4 block">⚡ Section 2 — The Payment Layer</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hydra — The Circulatory System of Hyperspace
              </span>
            </h2>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto mb-8">
              A stake-secured network for verifiable payments and machine-to-machine services.
            </p>
          </motion.div>

        {/* Connection Banner */}
        <motion.div 
          className="bg-blue-500/20 border border-blue-500/30 rounded-2xl p-8 mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <ArrowRight className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-300">From Proofs to Payments</h3>
              <p className="text-blue-200 leading-relaxed">
                Once agents generate proofs and calculate fees through ProofFabric, Hydra carries those fees through verifiable payment channels, ensuring economic flow matches computational work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Problems */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            The Payment Problem for Autonomous Agents
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
              <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-lg font-semibold text-red-300 mb-3">Lightning Network Issues</h3>
              <ul className="text-red-200 space-y-2">
                <li>• Liquidity opacity</li>
                <li>• Unpredictable fees</li>
                <li>• Route failures</li>
                <li>• Volunteer-based routing</li>
              </ul>
            </div>
            <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-6">
              <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
              <h3 className="text-lg font-semibold text-amber-300 mb-3">Agent Requirements</h3>
              <ul className="text-amber-200 space-y-2">
                <li>• Low latency (~ms)</li>
                <li>• Predictable costs</li>
                <li>• Deterministic success</li>
                <li>• Atomic settlement</li>
              </ul>
            </div>
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-green-300 mb-3">Hydra Solution</h3>
              <ul className="text-green-200 space-y-2">
                <li>• Stake-secured routing</li>
                <li>• Deterministic capacity</li>
                <li>• Proof-coupled HTLCs</li>
                <li>• Public utility model</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Architecture */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            Stake-Regulated Network Architecture
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">DHT Overlay</h3>
                <p className="text-blue-200">
                  Stake-regulated Kademlia topology with fixed validator positions and deterministic neighbors
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-300 mb-3">Payment Tabs</h3>
                <p className="text-green-200">
                  Fixed-capacity channels holding capital slices between neighboring validators
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-purple-300 mb-3">O(log N) Routes</h3>
                <p className="text-purple-200">
                  Monotone prefix paths with guaranteed capacity and bounded completion time
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

          {/* Proof-Coupled HTLCs */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
              Proof-Coupled HTLCs
            </h2>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Atomic Service + Payment</h3>
                <p className="text-purple-200 max-w-2xl mx-auto">
                  HTLCs extended with proof validation ensure service delivery and payment settle together — no escrow, no disputes, no waiting.
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                <motion.div 
                  className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 text-center shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-blue-500/30 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-semibold text-blue-300 mb-2">Service Request</h4>
                  <p className="text-sm text-blue-200">Agent A requests compute job</p>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />

                <motion.div 
                  className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6 text-center shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-orange-500/30 text-orange-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-orange-300 mb-2">HTLC Lock</h4>
                  <p className="text-sm text-orange-200">Funds escrowed, awaiting proof</p>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />

                <motion.div 
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center shadow-md"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-green-500/30 text-green-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-green-300 mb-2">Instant Settlement</h4>
                  <p className="text-sm text-green-200">Proof verified, funds released</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

        {/* Pricing Model */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            Predictable, Transparent Pricing
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Fee Formula</h3>
              <div className="bg-blue-500/30 rounded-lg p-4 mb-4">
                <code className="text-lg font-mono text-blue-200">fee = τr + βt</code>
              </div>
              <ul className="space-y-2 text-blue-200">
                <li><strong>τ:</strong> Liquidity lock fee rate</li>
                <li><strong>r:</strong> Payment amount</li>
                <li><strong>β:</strong> Network burn rate</li>
                <li><strong>t:</strong> Time duration</li>
              </ul>
            </div>
            
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Network Guarantees</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200">No fee roulette</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200">Bounded latency (~10-50ms)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200">99.5%+ reliability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-blue-200">Self-balancing economics</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hive Integration */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
            Hive Markets — The Service Economy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-blue-500/20 border border-blue-500/30 text-blue-200 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Layers className="w-10 h-10 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Compute Markets</h3>
              <p className="text-blue-200">
                ML inference, data processing, and simulation workloads with atomic payment settlement
              </p>
            </motion.div>

            <motion.div 
              className="bg-green-500/20 border border-green-500/30 text-green-200 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Network className="w-10 h-10 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-3 text-green-300">Storage Networks</h3>
              <p className="text-green-200">
                Distributed storage, content delivery, and data archival with proof-based verification
              </p>
            </motion.div>

            <motion.div 
              className="bg-purple-500/20 border border-purple-500/30 text-purple-200 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Zap className="w-10 h-10 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Bandwidth Services</h3>
              <p className="text-purple-200">
                Relay networks, VPN services, and edge computing with instant micropayments
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Economic Loop */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">Self-Regulating Economic Loop</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-blue-300">↑</span>
                </div>
                <p className="text-sm text-blue-200">Higher Usage</p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-orange-300">🔥</span>
                </div>
                <p className="text-sm text-orange-200">Increased Burns</p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-green-300">💰</span>
                </div>
                <p className="text-sm text-green-200">Higher Rewards</p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-purple-300">📈</span>
                </div>
                <p className="text-sm text-purple-200">More Stake</p>
              </div>
              <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-indigo-300">↓</span>
                </div>
                <p className="text-sm text-indigo-200">Lower Fees</p>
              </div>
            </div>
          </div>
        </motion.div>

          {/* Summary */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Hydra: The Economic Bloodstream</h2>
              <p className="text-lg text-blue-200 leading-relaxed mb-6">
                Hydra revolutionizes machine-to-machine payments through stake-secured routing with deterministic 
                capacity and rate control. Proof-coupled HTLCs unify service delivery and payment into atomic 
                transactions, while uniform pricing guarantees predictability. Micropayment latency is measured 
                in milliseconds, not minutes. Integrated Hive markets transform the payment layer into the 
                economic bloodstream of Hyperspace — enabling a truly autonomous digital economy.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: HyperChain & ZShard
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};