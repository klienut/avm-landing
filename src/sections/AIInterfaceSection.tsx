import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Route, Receipt } from 'lucide-react';

export const AIInterfaceSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="ai-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20,10 L30,20 L20,30 L10,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.6" />
                <path d="M5,5 L35,35 M35,5 L5,35" stroke="currentColor" strokeWidth="0.3" opacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ai-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-red-500/10" />
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
            <span className="text-lg text-orange-400 font-medium mb-4 block">🤖 Section 5 — The AI Interface</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                AI Interface — The Human Gateway to Hyperspace
              </span>
            </h2>
            <p className="text-xl text-amber-300 max-w-3xl mx-auto mb-8">
              Mapping natural language to verifiable intelligence.
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Text */}
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  The AI Interface connects users and AI systems to Hyperspace through language and intent.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  It interprets natural-language queries, matches them to relevant agents based on capability, cost, and reputation, and returns outputs with embedded proofs and payment receipts.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This layer transforms Hyperspace from a technical substrate into an experience — a verifiable internet of intelligence where every answer is accountable and every action auditable.
                </p>
              </div>

              {/* Right - Interface Flow */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="space-y-6">
                    {/* User Query */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4 text-center"
                    >
                      <div className="text-orange-400 font-semibold">Natural Language Query</div>
                      <div className="text-sm text-muted-foreground mt-1">"Analyze this data..."</div>
                    </motion.div>

                    {/* Intent Processing */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4 text-center"
                    >
                      <div className="text-amber-400 font-semibold">Intent Parsing</div>
                      <div className="text-sm text-muted-foreground mt-1">Capability matching</div>
                    </motion.div>

                    {/* Agent Routing */}
                    <div className="grid grid-cols-2 gap-4">
                      {['Agent A', 'Agent B'].map((label, index) => (
                        <motion.div
                          key={label}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-center text-sm"
                        >
                          <div className="text-red-400 font-medium">{label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Response */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      viewport={{ once: true }}
                      className="bg-rose-500/20 border border-rose-500/30 rounded-lg p-4 text-center"
                    >
                      <div className="text-rose-400 font-semibold">Verified Response</div>
                      <div className="text-sm text-muted-foreground mt-1">+ Proofs + Costs</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: MessageSquare,
                title: "Natural Language",
                description: "Intuitive interaction through conversational interfaces and semantic understanding.",
                color: "from-orange-400 to-amber-400"
              },
              {
                icon: Brain,
                title: "Intent Mapping",
                description: "Advanced parsing to understand user needs and translate to agent capabilities.",
                color: "from-amber-400 to-yellow-400"
              },
              {
                icon: Route,
                title: "Adaptive Routing",
                description: "Smart agent selection based on capability, cost, reputation, and availability.",
                color: "from-red-400 to-orange-400"
              },
              {
                icon: Receipt,
                title: "Transparent Results",
                description: "Responses include embedded proofs, cost breakdowns, and quality metrics.",
                color: "from-rose-400 to-red-400"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Example Interaction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-12"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Example Interaction</h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                <div className="text-orange-400 font-medium mb-2">User Query:</div>
                <div className="text-white/90">"Analyze this financial dataset and predict next quarter's trends"</div>
              </div>
              
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                <div className="text-amber-400 font-medium mb-2">AI Interface Processing:</div>
                <div className="text-white/90 text-sm space-y-1">
                  <div>• Identifies: Data analysis + Prediction task</div>
                  <div>• Routes to: Statistical analysis agents + ML prediction models</div>
                  <div>• Optimizes for: Accuracy + Cost efficiency</div>
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <div className="text-red-400 font-medium mb-2">Verified Response:</div>
                <div className="text-white/90 text-sm space-y-1">
                  <div>• Analysis results with statistical confidence intervals</div>
                  <div>• Trend predictions with model accuracy scores</div>
                  <div>• Proof of computation integrity</div>
                  <div>• Total cost: 0.0034 HYPER ($0.12)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              This layer bridges humans, AI, and cryptography — transforming Hyperspace into an intelligent, 
              verifiable web where every answer is accountable and every action auditable.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};