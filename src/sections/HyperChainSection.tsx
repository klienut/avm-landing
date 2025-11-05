import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Network, Zap, Layers, ArrowRight, CheckCircle, AlertCircle, Cpu } from 'lucide-react';

export const HyperChainSection: React.FC = () => {
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
              <pattern id="hyperchain-pattern" x="0" y="0" width="35" height="35" patternUnits="userSpaceOnUse">
                <rect x="15" y="5" width="5" height="10" fill="currentColor" opacity="0.4" />
                <rect x="5" y="15" width="10" height="5" fill="currentColor" opacity="0.4" />
                <rect x="20" y="20" width="10" height="5" fill="currentColor" opacity="0.4" />
                <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hyperchain-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10" />
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
            <span className="text-lg text-indigo-400 font-medium mb-4 block">🔗 Section 3 — The Verifiable Ledger</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                HyperChain — Data-First Sharding with zk-Aggregated Finality
              </span>
            </h2>
            <p className="text-xl text-indigo-300 max-w-3xl mx-auto mb-8">
              Finalize what's actually accessible. Scale by verifying, not re-executing.
            </p>
            <p className="text-xl text-indigo-300/70 max-w-3xl mx-auto leading-relaxed">
              True deterministic settlement with accessibility guarantees
            </p>
          </motion.div>

        {/* Connection Banner */}
        <motion.div 
          className="bg-indigo-500/20 border border-indigo-500/30 rounded-2xl p-8 mb-16"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <ArrowRight className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-indigo-300">From Payments to Settlement</h3>
              <p className="text-indigo-200 leading-relaxed">
                With Hydra ensuring atomic payment delivery, HyperChain provides the verifiable ledger where these transactions finalize with deterministic accessibility guarantees.
              </p>
            </div>
          </div>
        </motion.div>

        {/* DAP Introduction */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-indigo-300 mb-8 text-center">
            Data Accessibility Probing (DAP)
          </h2>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-semibold text-indigo-300 mb-4">Paradigm Shift: Accessibility over Availability</h3>
                <p className="text-indigo-200 mb-4">
                  Traditional systems attest "someone posted data" — DAP only finalizes what the network can actually retrieve right now.
                </p>
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="font-semibold text-green-300">Fail-Closed Safety</span>
                  </div>
                  <p className="text-sm text-green-200">
                    If data isn't reachable during probing, it simply doesn't finalize — no silent failures.
                  </p>
                </div>
              </div>
              <div className="bg-indigo-500/20 border border-indigo-500/30 rounded-xl p-6">
                <h4 className="font-semibold text-indigo-300 mb-4">Key Properties</h4>
                <ul className="space-y-2 text-sm text-indigo-200">
                  <li>• Service-coupled finality</li>
                  <li>• No per-shard DA subnets</li>
                  <li>• Blob-size-independent fees</li>
                  <li>• Latency-based pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* DAP Mechanism */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-indigo-300 mb-8 text-center">
            How DAP Works
          </h2>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
              <motion.div 
                className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 text-center shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="font-semibold text-blue-300 mb-2">Blob Submission</h4>
                <p className="text-sm text-blue-200">Data posted to relay network</p>
              </motion.div>

              <ArrowRight className="w-8 h-8 text-indigo-400" />

              <motion.div 
                className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6 text-center shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h4 className="font-semibold text-orange-300 mb-2">Probe Window</h4>
                <p className="text-sm text-orange-200">Anonymous validator probes</p>
              </motion.div>

              <ArrowRight className="w-8 h-8 text-indigo-400" />

              <motion.div 
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="font-semibold text-green-300 mb-2">Accessibility Proven</h4>
                <p className="text-sm text-green-200">Finality achieved</p>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4 inline-block">
                <p className="text-sm text-amber-200">
                  <strong>Pricing:</strong> Shorter probe windows cost more (faster finality), longer windows cost less
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Architecture Overview */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-indigo-300 mb-8 text-center">
            Hyper-Sharded Architecture
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-blue-500/20 border border-blue-500/30 text-blue-200 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Layers className="w-10 h-10 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Stateless Nanochains</h3>
              <p className="text-blue-200 mb-4">
                Shards verify proofs and Merkle branches, aggregate into commitments without persistent state.
              </p>
              <div className="text-sm text-blue-200">
                • Rapid VRF leader rotation<br/>
                • Linear throughput scaling<br/>
                • DAP-gated execution
              </div>
            </motion.div>

            <motion.div 
              className="bg-purple-500/20 border border-purple-500/30 text-purple-200 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Network className="w-10 h-10 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Beacon Chain</h3>
              <p className="text-purple-200 mb-4">
                BFT consensus finalizes shard commitments with sub-second deterministic finality.
              </p>
              <div className="text-sm text-purple-200">
                • Orders shard roots<br/>
                • Single source of finality<br/>
                • No re-execution overhead
              </div>
            </motion.div>

            <motion.div 
              className="bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 rounded-xl p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Shield className="w-10 h-10 mb-4 text-indigo-400" />
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">ZShard VM</h3>
              <p className="text-indigo-200 mb-4">
                Pure verifier checking proofs, validating UTXOs, aggregating state transitions.
              </p>
              <div className="text-sm text-indigo-200">
                • Massively parallel validation<br/>
                • No user logic re-execution<br/>
                • Deterministic verification
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Execution Model */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-indigo-300 mb-8 text-center">
            Turing-Complete UTXO Execution
          </h2>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-300 mb-4">Smart Contract Model</h3>
                <ul className="space-y-3 text-indigo-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Logic lives in UTXO scripts and validity predicates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Spends prove membership and predicate satisfaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>Nullifiers prevent double-spending</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>User-side proving keeps latency low</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-300 mb-4">Cross-Shard Atomicity</h3>
                <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4">
                  <div className="text-sm space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <span className="text-purple-200"><strong>Burn</strong> on Shard A</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-purple-200"><strong>Beacon</strong> finalizes receipt</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-purple-200"><strong>Mint</strong> on Shard B with proof</span>
                    </div>
                  </div>
                  <p className="text-xs text-purple-200 mt-3">
                    Bridge-free atomicity without trusted intermediaries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ZShard VM Detail */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-indigo-300 mb-8 text-center">
            ZShard VM: Verifier-Only Operation
          </h2>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="font-semibold mb-2 text-blue-300">Proof Verification</h4>
                <p className="text-sm text-blue-200">Check ZK proofs for validity</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-semibold mb-2 text-green-300">UTXO Checks</h4>
                <p className="text-sm text-green-200">Validate membership & nullifiers</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-semibold mb-2 text-purple-300">Aggregation</h4>
                <p className="text-sm text-purple-200">Combine verified transitions</p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-orange-400" />
                </div>
                <h4 className="font-semibold mb-2 text-orange-300">State Update</h4>
                <p className="text-sm text-orange-200">Compute new root commitment</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bridge to AVM */}
        <motion.div className="mb-16" variants={itemVariants}>
          <div className="bg-indigo-500/20 border border-indigo-500/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-indigo-300 mb-4 text-center">Bridge to Agent Computing</h2>
            <p className="text-lg text-indigo-200 text-center max-w-4xl mx-auto leading-relaxed">
              Agents generate ProofFabric proofs containing prover circuits, verifier circuits, and pricing meters. 
              These flow into HyperChain's Nanochains where the ZShard VM verifies and aggregates them into UTXO 
              state transitions. The Beacon chain provides final settlement, but only after DAP confirms the 
              underlying data remains accessible — creating an end-to-end pipeline from agent computation to 
              verifiable, accessible settlement.
            </p>
          </div>
        </motion.div>

          {/* Summary */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-indigo-300 mb-6">Accessibility-First Settlement</h2>
              <p className="text-lg text-indigo-200 leading-relaxed mb-6">
                HyperChain revolutionizes blockchain settlement by only finalizing accessible data through DAP, 
                scaling via stateless shards that verify rather than re-execute, and providing deterministic 
                finality through BFT consensus. The result: internet-scale data availability with predictable 
                pricing and fail-closed safety guarantees.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Agent Protocol Suite
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};