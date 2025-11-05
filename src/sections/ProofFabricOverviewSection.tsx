import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowRight, Code, CheckCircle, Layers, DollarSign, Zap } from 'lucide-react';

export const ProofFabricOverviewSection: React.FC = () => {
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
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="proof-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <polygon points="15,5 25,15 15,25 5,15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#proof-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-blue-500/10" />
      </div>

      <div className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-lg text-green-400 font-medium mb-4 block">🧮 Section 1A — ProofFabric Overview</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                What ProofFabric Is — Modular ZK Runtime
              </span>
            </h2>
            <p className="text-xl text-emerald-300 max-w-3xl mx-auto mb-8">
              A standardized proving and pricing framework for intelligent agents.
            </p>
          </motion.div>

          {/* Overview */}
          <motion.div
            id="prooffabric-overview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Core Concept
              </span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  ProofFabric standardizes how agents prove behavior, verify dependencies, aggregate results, and account for cost.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  It defines prover circuits for local logic, verifier circuits for outsourced tasks, and predictable pricing models that enable cross-agent interoperability.
                </p>
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <p className="text-green-300 text-xl font-medium italic text-center">
                    "Turn proofs into building blocks, not bespoke artifacts."
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h4 className="text-lg font-semibold mb-4">Core Insight</h4>
                    </div>
                    <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center">
                      <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <div className="text-blue-300 font-semibold mb-1">Verifier Circuits</div>
                      <div className="text-sm text-gray-400">Orders of magnitude smaller</div>
                    </div>
                    <div className="text-center text-white/60">vs</div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 text-center">
                      <Cpu className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-purple-300 font-semibold mb-1">Proving Circuits</div>
                      <div className="text-sm text-gray-400">Full computation overhead</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-green-300">= Scalable Composition</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Diagram */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                ProofFabric Architecture Flow
              </span>
            </h3>
            
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                
                {/* Left: Agent Workflow */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-emerald-400 mb-4">Agent Workflow</h4>
                  <motion.div 
                    className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-3 text-center"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-medium">FSM (prover)</span>
                  </motion.div>
                  <motion.div 
                    className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-3 text-center"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-medium">zkTLS (verifier)</span>
                  </motion.div>
                  <motion.div 
                    className="bg-purple-500/20 border border-purple-500/30 border-dashed rounded-xl p-3 text-center opacity-70"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.7 }}
                    transition={{ delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm font-medium">zkVM (verifier)</span>
                  </motion.div>
                </div>

                {/* Arrow 1 */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>

                {/* Center: Composer */}
                <div className="text-center">
                  <motion.div 
                    className="bg-emerald-500/20 border border-emerald-500/30 rounded-2xl p-6 mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-emerald-400 mb-2">ProofFabric</h4>
                    <div className="text-xs text-gray-400">Composer</div>
                  </motion.div>
                  
                  {/* Pricing meter */}
                  <motion.div className="bg-gray-800/50 rounded-xl p-3">
                    <div className="text-xs text-gray-400 mb-2">pricing accumulator</div>
                    <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '60%' }}
                        transition={{ delay: 1.5, duration: 1.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Arrow 2 */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.7 }}
                    viewport={{ once: true }}
                  >
                    <ArrowRight className="w-8 h-8 text-emerald-400" />
                  </motion.div>
                </div>

                {/* Right: Output */}
                <div className="space-y-4">
                  <motion.div 
                    className="bg-gray-800/50 border border-gray-700 rounded-2xl p-4"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' }}
                    transition={{ delay: 1.9 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold text-emerald-400 mb-3">Agent Proof</h4>
                    <div className="space-y-1 text-xs text-gray-400">
                      <div>state_in · state_out</div>
                      <div>subproofs[]</div>
                      <div>fee_accumulator</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 2.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileInView={{ scale: [1, 1.1, 1] }}
                      transition={{ delay: 2.3, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-1" />
                      <div className="text-xs font-medium">ZShard VM</div>
                      <div className="text-xs text-gray-400">verify & aggregate</div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Value Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Core Benefits
              </span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <div className="mb-4">
                  <Layers className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Composable by design</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Prover circuits for your logic; verifier circuits to import external results at tiny overhead.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <div className="mb-4">
                  <DollarSign className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Predictable costs</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A standard pricing accumulator tracks compute, I/O, and verification steps.
                </p>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
                <div className="mb-4">
                  <Zap className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Aggregation-ready</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  On-chain sees a single, uniform proof interface — easy to verify and batch.
                </p>
              </div>
            </div>
          </motion.div>

          {/* How it Works */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                How it works
              </span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-400 font-semibold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Define your workflow</h3>
                <p className="text-gray-400 text-sm">FSM + zkTLS + (optional) zkVM</p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-400 font-semibold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Compose proofs</h3>
                <p className="text-gray-400 text-sm">local proving + verified sub-proofs (no re-exec)</p>
              </div>

              <div className="text-center">
                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-400 font-semibold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Settle</h3>
                <p className="text-gray-400 text-sm">pricing accumulator + single agent proof → ZShard VM verifies & aggregates</p>
              </div>
            </div>
          </motion.div>

          {/* Next Section Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-green-300 mb-6">ProofFabric Foundation</h2>
              <p className="text-lg text-green-200 leading-relaxed mb-6">
                ProofFabric provides the modular proving infrastructure that enables agents to compose 
                verifiable workflows from standardized components, with predictable pricing and seamless interoperability.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Agent Definition & Circuits
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};