import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Link, DollarSign, ArrowRight, Shield, Layers, Code, CheckCircle } from 'lucide-react';

export const ProofFabricSection: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
            <span className="text-lg text-green-400 font-medium mb-4 block">🧮 Section 1 — The ZK Layer</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                ProofFabric — The Agentic ZK Runtime
              </span>
            </h2>
            <p className="text-xl text-emerald-300 max-w-3xl mx-auto mb-8">
              A modular proving and pricing standard for intelligent agents.
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
                Overview — What ProofFabric Is
              </span>
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  ProofFabric standardizes how agents prove behavior, verify dependencies, aggregate results, and account for cost.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
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
                      <div className="text-sm text-muted-foreground">Orders of magnitude smaller</div>
                    </div>
                    <div className="text-center text-white/60">vs</div>
                    <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 text-center">
                      <Cpu className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <div className="text-purple-300 font-semibold mb-1">Proving Circuits</div>
                      <div className="text-sm text-muted-foreground">Full computation overhead</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-green-300">= Scalable Composition</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Agent Definition */}
          <motion.div
            id="prooffabric-circuits"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Agent Definition — Workflow, Circuits, and Pricing
              </span>
            </h3>

            <div className="text-center mb-8">
              <p className="text-xl text-muted-foreground">An agent is specified by four essential components:</p>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {[
                {
                  icon: Shield,
                  title: "Workflow Engine",
                  description: "Mixing local tasks and outsourced tasks with orchestration logic",
                  color: "from-green-400 to-emerald-400"
                },
                {
                  icon: Cpu,
                  title: "Proving Circuit",
                  description: "Local logic verification (FSM steps, model operations)",
                  color: "from-blue-400 to-cyan-400"
                },
                {
                  icon: Link,
                  title: "Verifier Circuits",
                  description: "Outsourced sub-proofs (zkTLS receipts, zkVM results)",
                  color: "from-purple-400 to-pink-400"
                },
                {
                  icon: DollarSign,
                  title: "Gas Accumulator",
                  description: "Standardized cost tracking embedded in the trace",
                  color: "from-orange-400 to-red-400"
                }
              ].map((component, index) => (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                    <div className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${component.color} flex items-center justify-center mb-4`}>
                        <component.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{component.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {component.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-green-300 font-medium">
                This separation enables composability: agents verify outsourced work without re-execution overhead
              </p>
            </div>
          </motion.div>

          {/* Module Library */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Module Library — Defaults & Purpose
              </span>
            </h3>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {[
                {
                  module: "ZKFSM",
                  purpose: "Compact behavioral state transitions and policy compliance",
                  useCases: ["Agent behavior validation", "Rule enforcement", "State machine proofs"],
                  color: "from-blue-400 to-cyan-400"
                },
                {
                  module: "ZKTLS",
                  purpose: "Authenticated I/O; prove remote HTTP(S)/API responses were genuine",
                  useCases: ["Data fetching", "External API validation", "Web scraping proofs"],
                  color: "from-purple-400 to-pink-400"
                },
                {
                  module: "ZKVM",
                  purpose: "Heavy compute; prefer verifying third-party zkVM proofs over re-execution",
                  useCases: ["Complex calculations", "ML inference", "Computational outsourcing"],
                  color: "from-orange-400 to-red-400"
                }
              ].map((module, index) => (
                <motion.div
                  key={module.module}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                    <div className="space-y-4">
                      <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${module.color} text-white font-mono text-sm font-semibold`}>
                        {module.module}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {module.purpose}
                      </p>
                      <div className="space-y-2">
                        {module.useCases.map((useCase, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
                            <span className="text-xs text-white/80">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Teams can plug custom modules as needed. ProofFabric fixes the <strong>interface</strong>, not the implementation.
              </p>
            </div>
          </motion.div>

          {/* Metering & Pricing */}
          <motion.div
            id="prooffabric-pricing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Metering & Pricing — The Standardized Gas Accumulator
              </span>
            </h3>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The gas accumulator tracks compute steps, verification checks, and I/O units within the proof trace.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span><strong>Compute units:</strong> Circuit constraints and proving time</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span><strong>Verification checks:</strong> Sub-proof validation operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full" />
                    <span><strong>I/O units:</strong> Data transmission and storage costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span><strong>Registry weights:</strong> Universal pricing for predictable estimation</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-4">Fee Calculation</h4>
                    <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-4">
                      <code className="text-orange-300 font-mono text-sm">
                        fee_accumulator = Σ(compute × weight)<br/>
                        + Σ(verify_ops × weight)<br/>
                        + Σ(io_units × weight)
                      </code>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Committed inside proof for automatic, auditable on-chain fee claims
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Aggregation Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Aggregation Model — Local Proof + Outsourced Results
              </span>
            </h3>

            <div className="text-center mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Agents produce one primary proof for their local workflow and embed outsourced results by verifying sub-proofs. 
                The net effect: aggregated local + verified external results without re-execution.
              </p>
            </div>

            {/* Aggregation Flow Diagram */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mb-3">
                    <Cpu className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-blue-300 font-semibold">Local Workflow</div>
                  <div className="text-sm text-muted-foreground mt-1">Core agent logic</div>
                </motion.div>

                <ArrowRight className="w-8 h-8 text-green-400" />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mb-3">
                    <Link className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-purple-300 font-semibold">Verify Sub-proofs</div>
                  <div className="text-sm text-muted-foreground mt-1">Lightweight validation</div>
                </motion.div>

                <ArrowRight className="w-8 h-8 text-green-400" />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-3">
                    <Layers className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-green-300 font-semibold">Single Proof</div>
                  <div className="text-sm text-muted-foreground mt-1">Aggregated result</div>
                </motion.div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-green-300 font-medium">
                Benefits: modular responsibility, parallel development, elastic performance through remote provers
              </p>
            </div>
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
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Composition, Interop & Safety
              </span>
            </h3>

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

          {/* AVM Settlement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
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
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
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

          {/* Mini Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-light mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Mini Example: Concierge Agent
              </span>
            </h3>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { title: "zkTLS fetch", description: "Authenticate API data", color: "bg-blue-500/20 border-blue-500/30", icon: "🔗" },
                  { title: "zkVM verify", description: "Best-route computation", color: "bg-purple-500/20 border-purple-500/30", icon: "⚡" },
                  { title: "Fee accumulate", description: "Track all costs", color: "bg-orange-500/20 border-orange-500/30", icon: "💰" },
                  { title: "Proof emit", description: "Single aggregated proof", color: "bg-green-500/20 border-green-500/30", icon: "📝" },
                  { title: "ZShard settle", description: "Update UTXO, pay agent", color: "bg-red-500/20 border-red-500/30", icon: "✅" }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${step.color} border rounded-lg p-4 text-center`}
                  >
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <div className="font-semibold text-white text-sm mb-1">{step.title}</div>
                    <div className="text-xs text-muted-foreground">{step.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};