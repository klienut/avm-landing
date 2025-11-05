import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Link, DollarSign, ArrowRight, Shield, Layers } from 'lucide-react';

export const ProofFabricCircuitsSection: React.FC = () => {
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
              <pattern id="circuits-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <polygon points="15,5 25,15 15,25 5,15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuits-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />
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
            <span className="text-lg text-blue-400 font-medium mb-4 block">🔧 Section 1B — Agent Circuits</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Agent Definition — Workflow, Circuits, and Pricing
              </span>
            </h2>
            <p className="text-xl text-purple-300 max-w-3xl mx-auto mb-8">
              Four essential components that define an intelligent agent.
            </p>
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
            transition={{ duration: 0.8, delay: 0.8 }}
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
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                    <div className="space-y-4">
                      <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${module.color} text-white font-mono text-sm font-semibold`}>
                        {module.module}
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
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
              <p className="text-lg text-gray-300">
                Teams can plug custom modules as needed. ProofFabric fixes the <strong>interface</strong>, not the implementation.
              </p>
            </div>
          </motion.div>

          {/* Aggregation Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
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


          {/* Next Section Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Circuit Architecture Complete</h2>
              <p className="text-lg text-blue-200 leading-relaxed mb-6">
                Agent circuits provide the foundational architecture for composable, verifiable workflows 
                with standardized interfaces and predictable settlement mechanics.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Metering & Pricing
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};