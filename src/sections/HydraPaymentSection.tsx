import React from 'react';
import { motion } from 'framer-motion';
import { Network, Lock, DollarSign, ArrowRight, CheckCircle, AlertTriangle, Zap } from 'lucide-react';

export const HydraPaymentSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="payment-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3" />
                <path d="M10 5 L15 10 L10 15 L5 10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#payment-pattern)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-purple-500/10" />
      </div>

      <motion.div 
        className="relative py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
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
            <span className="text-lg text-blue-400 font-medium mb-4 block">⚡ Hydra Payment Layer</span>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Deterministic Payment Rails
              </span>
            </h1>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto mb-8">
              Stake-secured routing with proof-coupled settlement for ultra-reliable agent transactions.
            </p>
          </motion.div>

          {/* Core Problems */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
              The Agent Payment Problem
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
                <AlertTriangle className="w-8 h-8 text-red-400 mb-4" />
                <h3 className="text-lg font-semibold text-red-300 mb-3">Lightning Issues</h3>
                <ul className="text-red-200 space-y-2 text-sm">
                  <li>• Unpredictable routing failures</li>
                  <li>• Opaque liquidity discovery</li>
                  <li>• Variable fee structures</li>
                  <li>• Volunteer-based reliability</li>
                </ul>
              </div>
              <div className="bg-amber-500/20 border border-amber-500/30 rounded-xl p-6 backdrop-blur-sm">
                <Zap className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-lg font-semibold text-amber-300 mb-3">Agent Needs</h3>
                <ul className="text-amber-200 space-y-2 text-sm">
                  <li>• Sub-50ms settlement times</li>
                  <li>• Deterministic fee calculation</li>
                  <li>• 99.5%+ success guarantees</li>
                  <li>• Atomic service delivery</li>
                </ul>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-green-300 mb-3">Hydra Solution</h3>
                <ul className="text-green-200 space-y-2 text-sm">
                  <li>• Stake-regulated topology</li>
                  <li>• O(log N) routing paths</li>
                  <li>• Proof-coupled HTLCs</li>
                  <li>• Public utility model</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Network Architecture */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
              Stake-Regulated Network
            </h2>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">DHT Topology</h3>
                  <p className="text-blue-200 text-sm">
                    Stake-weighted Kademlia with fixed validator positions and deterministic neighbor discovery
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
                  <p className="text-green-200 text-sm">
                    Fixed-capacity channels with capital allocation between neighboring validators
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">Deterministic Routes</h3>
                  <p className="text-purple-200 text-sm">
                    Monotone prefix paths with guaranteed capacity and bounded completion time
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Proof-Coupled HTLCs */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center">
              Atomic Service + Payment
            </h2>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <p className="text-purple-200 max-w-2xl mx-auto text-lg">
                  HTLCs extended with proof validation ensure service delivery and payment settle together — no escrow periods, no disputes.
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                <motion.div 
                  className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 text-center flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-blue-500/30 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-blue-300 mb-2">Service Request</h4>
                  <p className="text-sm text-blue-200">Agent initiates compute job request</p>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />

                <motion.div 
                  className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6 text-center flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-orange-500/30 text-orange-300 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-orange-300 mb-2">HTLC Escrow</h4>
                  <p className="text-sm text-orange-200">Payment locked, awaiting proof</p>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-blue-400 hidden lg:block" />

                <motion.div 
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-green-500/30 text-green-300 rounded-full flex items-center justify-center mx-auto mb-3">
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
              Transparent Pricing Formula
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Fee Structure</h3>
                <div className="bg-blue-500/30 rounded-lg p-4 mb-4 font-mono text-center">
                  <div className="text-2xl font-bold text-blue-200 mb-2">fee = τr + βt</div>
                </div>
                <div className="space-y-2 text-blue-200">
                  <div><strong>τ:</strong> Liquidity lock rate</div>
                  <div><strong>r:</strong> Payment amount</div>
                  <div><strong>β:</strong> Network burn rate</div>
                  <div><strong>t:</strong> Time duration</div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">Network Guarantees</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-200">Predictable fee calculation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-200">10-50ms payment latency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-200">99.5%+ success rate</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-blue-200">Self-balancing economics</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Reliable Payment Infrastructure for Agents</h2>
              <p className="text-lg text-blue-200 leading-relaxed">
                Hydra eliminates payment uncertainty through stake-secured architecture. With O(log N) routing, 
                proof-coupled HTLCs, and transparent pricing, autonomous agents get deterministic settlement 
                with millisecond latency—no failed routes, no unpredictable fees, no settlement delays.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};