import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Network, DollarSign, ArrowRight } from 'lucide-react';

export const BlockchainStackSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="blockchain-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <circle cx="12.5" cy="12.5" r="2" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blockchain-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-teal-500/10" />
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
            <span className="text-lg text-blue-400 font-medium mb-4 block">⚙️ Section 2 — Hydra & Hive</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hydra & Hive — Liquidity and Services for Agents
              </span>
            </h2>
            <p className="text-xl text-cyan-300 max-w-3xl mx-auto mb-8">
              Fast payments and open resource markets for autonomous computation.
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Above ProofFabric sits the Hydra–Hive layer, which handles the movement of value and resources between agents.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mt-4">
              <strong>Hydra</strong> provides a stake-backed micropayment network with mathematically bounded latency, allowing agents to stream payments per inference, query, or computation step.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto mt-4">
              <strong>Hive Networks</strong> extend this economy to services: peer-to-peer marketplaces for compute, storage, and bandwidth, built on BitTorrent-style topologies and enforced by verifiable contracts.
              Together, they form the economic bloodstream of Hyperspace — liquidity, infrastructure, and incentives woven directly into the agentic web.
            </p>
          </motion.div>

          {/* Stack Components */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Zap,
                title: "Hydra",
                subtitle: "Micropayment Network",
                description: "Stake-backed payment streams with mathematically bounded latency. Agents stream payments per inference, query, or computation step with millisecond settlement.",
                color: "from-yellow-400 to-orange-400"
              },
              {
                icon: Network,
                title: "Hive Networks",
                subtitle: "Resource Marketplaces",
                description: "Peer-to-peer marketplaces for compute, storage, and bandwidth. Built on BitTorrent-style topologies and enforced by verifiable contracts.",
                color: "from-blue-400 to-cyan-400"
              }
            ].map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${component.color} flex items-center justify-center mb-6`}>
                      <component.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{component.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 font-medium">{component.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm mb-12"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                  <div className="text-yellow-400 font-semibold">Hydra Payments</div>
                  <div className="text-sm text-muted-foreground">Millisecond Settlement</div>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-0 lg:rotate-0" />

              <div className="flex-1 text-center">
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-4">
                  <div className="text-blue-400 font-semibold">DAP Storage</div>
                  <div className="text-sm text-muted-foreground">Persistent Availability</div>
                </div>
              </div>

              <ArrowRight className="w-6 h-6 text-muted-foreground rotate-0 lg:rotate-0" />

              <div className="flex-1 text-center">
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-4">
                  <div className="text-green-400 font-semibold">ZShard VM</div>
                  <div className="text-sm text-muted-foreground">ZK Verification</div>
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
              Together they deliver trust, scalability, and affordability — a foundation where agents can operate 
              at internet speed and on-chain certainty.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};