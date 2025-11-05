import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const ProofFabricCompositionSection: React.FC = () => {
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
              <pattern id="composition-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <polygon points="15,5 25,15 15,25 5,15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#composition-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-blue-500/10" />
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
            <span className="text-lg text-pink-400 font-medium mb-4 block">🔒 Section 1D — Composition & Safety</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Composition, Interop & Safety
              </span>
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto mb-8">
              Secure composition through canonical interfaces and safety invariants.
            </p>
          </motion.div>

          {/* Composition & Safety */}
          <motion.div
            id="prooffabric-composition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold mb-4">Canonical Proof Interface</h4>
                  <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 font-mono text-sm">
                    <div className="text-slate-300">
                      interface AgentProof &#123;<br/>
                      &nbsp;&nbsp;<span className="text-blue-400">state_in</span>: StateRoot,<br/>
                      &nbsp;&nbsp;<span className="text-green-400">state_out</span>: StateRoot,<br/>
                      &nbsp;&nbsp;<span className="text-purple-400">subproofs</span>: SubProof[],<br/>
                      &nbsp;&nbsp;<span className="text-orange-400">commitments</span>: Commitment[],<br/>
                      &nbsp;&nbsp;<span className="text-red-400">fee_accumulator</span>: GasUnits<br/>
                      &#125;
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="text-lg font-semibold">VK Registry & Verification</h5>
                  <p className="text-muted-foreground">
                    Sub-proofs validated via <code className="bg-white/10 px-2 py-1 rounded">verify_subproof(vk_hash, proof, inputs)</code> with 
                    selective verifier gadgets from global VK registry.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-semibold">Safety Invariants</h4>
                {[
                  {
                    title: "Deterministic trace binding",
                    description: "Same inputs produce identical committed traces",
                    icon: CheckCircle,
                    color: "text-green-400"
                  },
                  {
                    title: "Acyclic dependencies",
                    description: "No circular verification within an epoch",
                    icon: CheckCircle,
                    color: "text-blue-400"
                  },
                  {
                    title: "Replay protection",
                    description: "Epoch nonces and state roots prevent double-spending",
                    icon: CheckCircle,
                    color: "text-purple-400"
                  },
                  {
                    title: "Optional DA checkpoints",
                    description: "Memory and log continuity for complex workflows",
                    icon: CheckCircle,
                    color: "text-orange-400"
                  }
                ].map((invariant, index) => (
                  <motion.div
                    key={invariant.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <invariant.icon className={`w-5 h-5 ${invariant.color} mt-0.5 flex-shrink-0`} />
                    <div>
                      <div className="font-medium text-white">{invariant.title}</div>
                      <div className="text-sm text-muted-foreground">{invariant.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interoperability Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cross-Agent Interoperability
              </span>
            </h3>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Standard Interfaces",
                    benefits: ["Common proof format", "Universal VK registry", "Shared state model"],
                    color: "from-blue-400 to-cyan-400"
                  },
                  {
                    title: "Modular Verification",
                    benefits: ["Selective sub-proof validation", "Lazy verification chains", "Parallel proof checking"],
                    color: "from-purple-400 to-pink-400"
                  },
                  {
                    title: "Economic Compatibility",
                    benefits: ["Standardized gas model", "Cross-agent fee sharing", "Predictable cost estimation"],
                    color: "from-orange-400 to-red-400"
                  }
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                  >
                    <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${category.color} text-white font-semibold`}>
                      {category.title}
                    </div>
                    <ul className="space-y-2">
                      {category.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
                          <span className="text-sm text-white/90">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Security Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Security & Trust Model
              </span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-red-300">Cryptographic Guarantees</h4>
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Zero-knowledge proofs hide private data while proving correctness</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>Verifiable computation ensures agents cannot lie about results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span>State commitments prevent unauthorized modifications</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-purple-300">Operational Security</h4>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Sandboxed execution prevents malicious agents from affecting others</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>Resource limits and gas metering prevent DoS attacks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span>VK registry enables rapid response to compromised proofs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mini Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Example: Multi-Agent Workflow
              </span>
            </h3>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { title: "Data Agent", description: "Fetch & verify API data", color: "bg-blue-500/20 border-blue-500/30", icon: "📊" },
                  { title: "ML Agent", description: "Process data through model", color: "bg-purple-500/20 border-purple-500/30", icon: "🧠" },
                  { title: "Trading Agent", description: "Execute strategy decisions", color: "bg-green-500/20 border-green-500/30", icon: "💹" },
                  { title: "Audit Agent", description: "Verify all sub-proofs", color: "bg-orange-500/20 border-orange-500/30", icon: "🔍" },
                  { title: "Settlement", description: "Single aggregated proof", color: "bg-red-500/20 border-red-500/30", icon: "✅" }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${step.color} border rounded-lg p-4 text-center`}
                  >
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className="font-semibold text-white text-sm mb-1">{step.title}</div>
                    <div className="text-xs text-muted-foreground">{step.description}</div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Each agent produces independent proofs that compose into a single verifiable workflow
                </p>
              </div>
            </div>
          </motion.div>

          {/* AVM Settlement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                AVM / On-Chain Aggregation — Verification & Settlement
              </span>
            </h3>

            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                The Agentic Virtual Machine (AVM) implements agent-side proving with block-producer verification. 
                ZShard VM provides deterministic, verifier-only execution for high throughput.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-xl font-semibold text-center mb-8">ZShard VM Settlement Flow</h4>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Verify agent proof against registered VK",
                    color: "from-blue-400 to-cyan-400"
                  },
                  {
                    step: "2", 
                    title: "Validate nullifiers and UTXO membership",
                    color: "from-purple-400 to-pink-400"
                  },
                  {
                    step: "3",
                    title: "Update global state root and settle fees from accumulator",
                    color: "from-green-400 to-emerald-400"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 2.8 + index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {item.step}
                    </div>
                    <div className={`flex-1 bg-gradient-to-r ${item.color} bg-opacity-10 border border-current border-opacity-20 rounded-lg p-4`}>
                      <div className="font-medium text-white">{item.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-green-300 font-medium">
                  Outcome: high throughput via stateless, parallel verification and zk aggregation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Final Summary */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-pink-500/10 border border-pink-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-pink-300 mb-6">ProofFabric: Complete ZK Runtime</h2>
              <p className="text-lg text-pink-200 leading-relaxed mb-6">
                ProofFabric provides the complete foundation for agentic zero-knowledge computation: 
                standardized circuits, transparent pricing, secure composition, and universal interoperability. 
                The building blocks for an autonomous digital economy.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Hydra Payment Layer
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};