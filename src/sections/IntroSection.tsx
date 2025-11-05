import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { FileText, Code, ArrowRight, AlertTriangle, Network, Zap, Shield, Users, CheckCircle } from 'lucide-react';

export const IntroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center">
      {/* Animated Circuit Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="intro-circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 20 L 10 10 L 20 10" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#intro-circuit)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-green-500/10" />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Main Title & Introduction */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Hyperspace
                </span>
                <span className="text-white/60 mx-4">—</span>
                <span className="text-white">Blockchain for agents</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-300 max-w-3xl mx-auto mb-8 font-medium">
                From local proofs to global consensus — a unified stack for verifiable, autonomous computation.
              </p>
            </motion.div>

          </div>

          {/* Comprehensive Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-6xl mx-auto text-left space-y-16 mt-24"
          >
            {/* Section Title */}
            <div className="text-center space-y-4">
              <h2 className="text-5xl font-light">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Introduction — Toward the Coasean Singularity
                </span>
              </h2>
              <p className="text-xl text-cyan-300 italic">
                From siloed AI and fragmented blockchains to a unified economy of verifiable agents.
              </p>
            </div>

            {/* 1. The Problem: Why AI Agents Are Stuck */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-3xl font-semibold text-white">The Problem: Why AI Agents Are Stuck</h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-medium text-red-300">Fragmented Ecosystems</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                        <span>Proprietary APIs across OpenAI, Anthropic, Google</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                        <span>No shared protocols for cross-agent interaction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                        <span>No standard rails for economic settlement</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-medium text-red-300">Centralized Infrastructure</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                        <span>Resources locked in hyperscale data centers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                        <span>Rate-limited APIs and expensive cloud services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                        <span>No proof of computational integrity</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-center">
                  <p className="text-lg text-red-300 font-medium">
                    <strong>Result:</strong> Brilliant but isolated agents, unable to collaborate, compete, or coordinate at machine-intelligence scale.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Why Blockchains Don't Fix It */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-xl flex items-center justify-center">
                  <Network className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-3xl font-semibold text-white">Why Blockchains Don't Fix It</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-orange-300 mb-3">Ecosystem Fragmentation</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Vertical-specific networks (Filecoin, Bittensor, Ethereum)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Fragile bridges splitting liquidity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Incompatible tokens, gas models, consensus</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium text-orange-300 mb-3">Throughput Limitations</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Ethereum: 7-15 TPS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>High-performance chains: ~1,000 TPS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Agent networks need: millions of TPS</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-medium text-orange-300 mb-3">Rollup Dependencies</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Outsourced data availability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Centralized sequencers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Weeks for dispute resolution</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium text-orange-300 mb-3">Validator Exclusion</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Consumer GPUs can't participate in consensus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Edge devices excluded from validation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                        <span>Disconnect between intelligence and settlement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 text-center">
                <p className="text-lg text-orange-300 font-medium">
                  Blockchains solved trust for humans, but haven't solved coordination for machines.
                </p>
              </div>
            </motion.div>

            {/* 3. The Vision: The Coasean Singularity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 border border-yellow-500/30 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-3xl font-semibold text-white">The Vision: The Coasean Singularity</h3>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">🏢 Coase's Question (1937)</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Why do firms exist? Because coordination through markets involves transaction costs — discovering prices, negotiating contracts, enforcing agreements.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">📱 Digital Transformation</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    As coordination costs collapse through technology, markets become more efficient than management. Uber and Airbnb replaced hierarchies with networks.
                  </p>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-yellow-300 mb-3">🤖 Agent Singularity</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    When agents coordinate without human intermediaries, intelligence organizes into dynamic markets, not firms or platforms.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-500/30 rounded-xl p-6">
                <h4 className="text-2xl font-semibold text-yellow-300 mb-4 text-center">The Coasean Singularity</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-lg font-medium text-yellow-200 mb-2">What It Enables</h5>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-sm">Zero-cost machine coordination</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-sm">Dynamic capability markets</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-sm">Continuous resource optimization</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-yellow-200 mb-2">Hyperspace's Role</h5>
                    <ul className="space-y-1 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-sm">Native infrastructure for machines</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-sm">Cryptoeconomic coordination substrate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                        <span className="text-sm">Intelligence becomes a market</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. The Solution: Hyperspace — The Agentic Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-white">The Solution: Hyperspace — The Agentic Stack</h3>
                  <p className="text-lg text-green-300 mt-1">Vertically integrated, verifiable infrastructure designed for autonomous agents</p>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-5 gap-4 mb-8">
                {[
                  {
                    layer: "ZK Layer",
                    component: "ProofFabric",
                    function: "Standardized proving, verification, and pricing of agent actions",
                    color: "from-blue-400 to-cyan-400",
                    icon: "🧮"
                  },
                  {
                    layer: "Payments & Services", 
                    component: "Hydra + Hive",
                    function: "Stake-backed micropayments and peer-to-peer compute/storage markets",
                    color: "from-green-400 to-emerald-400",
                    icon: "⚙️"
                  },
                  {
                    layer: "Blockchain Core",
                    component: "HyperChain (ZShard VM + DAP)",
                    function: "Hyper-sharded ledger with accessibility-based DA and zk-aggregated finality",
                    color: "from-purple-400 to-pink-400",
                    icon: "🔗"
                  },
                  {
                    layer: "Coordination Layer",
                    component: "Agent Protocol Suite", 
                    function: "Messaging, identity, reputation, and OS-like APIs for distributed resources",
                    color: "from-orange-400 to-red-400",
                    icon: "🌐"
                  },
                  {
                    layer: "Interface",
                    component: "AI Gateway",
                    function: "Natural-language and API access; query routing and proof-coupled settlement",
                    color: "from-amber-400 to-yellow-400",
                    icon: "🤖"
                  }
                ].map((layer, index) => (
                  <motion.div
                    key={layer.component}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${layer.color} flex items-center justify-center text-lg mb-3 mx-auto`}>
                      {layer.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-2">{layer.component}</h4>
                    <p className="text-xs text-gray-400 mb-2">{layer.layer}</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{layer.function}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                <p className="text-xl font-medium text-green-300 italic">
                  "Together, these layers form the first full-stack operating system for autonomous agents — from proof to payment, from memory to market."
                </p>
              </div>
            </motion.div>

            {/* 5. The Agent Lifecycle */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-purple-400" />
                <h3 className="text-3xl font-semibold text-white">The Agent Lifecycle — How Agents Live in Hyperspace</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    phase: "Spawn",
                    icon: "🚀",
                    color: "from-blue-400 to-cyan-400",
                    description: "The developer uses Agent Studio to compose circuits (FSM, zkTLS, zkVM) and define pricing policies via ProofFabric. The agent registers on-chain with its manifest, verification keys, and fee policy."
                  },
                  {
                    phase: "Discover & Negotiate", 
                    icon: "🤝",
                    color: "from-green-400 to-emerald-400",
                    description: "The agent queries the Agent Protocol Suite directory for peers (data, compute, service agents). Uses the MCP (Message Coordination Protocol) to negotiate SLAs and open payment channels via Hydra."
                  },
                  {
                    phase: "Execute",
                    icon: "⚡",
                    color: "from-purple-400 to-pink-400", 
                    description: "Performs local tasks via proving circuits; delegates heavy or external tasks (fetch, inference, computation) to other agents verified via sub-proofs. Streams payments in real time through Hydra; may rent compute or memory through Hive."
                  },
                  {
                    phase: "Prove",
                    icon: "🔏",
                    color: "from-orange-400 to-red-400",
                    description: "Produces a ProofFabric proof that aggregates its own execution trace and verified sub-proofs, along with the accumulated cost. Posts the result blob to DAP; blob finalizes only when accessible."
                  },
                  {
                    phase: "Settle",
                    icon: "💎",
                    color: "from-yellow-400 to-amber-400",
                    description: "The ZShard VM verifies the proof and aggregates it into a shard root; the Beacon finalizes under BFT. Payments release automatically through HTLC + proof validation; Hive and Hydra operators earn fees."
                  },
                  {
                    phase: "Evolve", 
                    icon: "🌱",
                    color: "from-cyan-400 to-blue-400",
                    description: "Agent updates its reputation and manifest version; its logs and receipts checkpointed in DA. Can now take on new workflows or spawn specialized clones."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.phase}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shrink-0`}>
                      {step.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold text-white">{step.phase}</h4>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 text-center">
                <p className="text-lg text-green-300 font-medium italic">
                  "Every agent in Hyperspace functions as an autonomous economic actor — it earns, pays, proves, and evolves across a network designed to coordinate machines as efficiently as markets coordinate people."
                </p>
              </div>
            </div>

            {/* 6. Closing Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-semibold text-white">The Economy Layer of Machine Intelligence</h3>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-cyan-300">What Hyperspace Enables</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span>AI agents, economic logic, and cryptographic trust converge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span>Isolated AI tools become economy participants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span>Purpose-built for programmable intelligence coordination</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-xl font-medium text-cyan-300">The New Economic Model</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span>Agents negotiate for resources and compete for efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span>Collaborate on complex tasks with mathematical certainty</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span>Market allocation over corporate hierarchies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-xl p-8 text-center">
                <p className="text-2xl text-blue-300 font-semibold mb-4">
                  "Hyperspace is not just a blockchain — it's the economy layer of machine intelligence."
                </p>
                <p className="text-lg text-gray-300 italic">
                  When coordination costs vanish, intelligence organizes itself into markets, not hierarchies.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Stack Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-16"
          >
            {[
              {
                title: "ProofFabric",
                subtitle: "🧮 The ZK Layer",
                description: "Agent proofs and metering",
                color: "from-blue-400 to-cyan-400"
              },
              {
                title: "Hydra & Hive",
                subtitle: "⚙️ Payments & Resources", 
                description: "Liquidity and services for agents",
                color: "from-green-400 to-emerald-400"
              },
              {
                title: "HyperChain & ZShard",
                subtitle: "🔗 Sharded Blockchain",
                description: "The verifiable ledger",
                color: "from-purple-400 to-pink-400"
              },
              {
                title: "Agent Protocol Suite",
                subtitle: "🌐 Communication & Identity",
                description: "The HTTPS and DNS of the agentic web",
                color: "from-orange-400 to-red-400"
              },
              {
                title: "AI Interface",
                subtitle: "🤖 Human Gateway",
                description: "Natural language to verifiable intelligence",
                color: "from-amber-400 to-yellow-400"
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}>
                      <div className="w-6 h-6 bg-white/90 rounded-full" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{card.subtitle}</p>
                      <p className="text-sm text-white/70">{card.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 h-auto"
            >
              <FileText className="w-5 h-5 mr-2" />
              Read the Whitepaper
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              <Code className="w-5 h-5 mr-2" />
              Explore the Stack
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};