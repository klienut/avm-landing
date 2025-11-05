import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/ui/button';
import { 
  FileText, 
  Code, 
  Link as LinkIcon, 
  Calculator, 
  Search,
  ArrowRight,
  Zap,
  Shield,
  Coins,
  GitBranch
} from 'lucide-react';

export const AVMSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Circuit Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 opacity-10"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 10 10 L 10 0 M 10 20 L 10 10 L 20 10" 
                      stroke="currentColor" 
                      strokeWidth="0.5" 
                      fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </motion.div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-green-500/10" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
              <span className="block text-muted-foreground text-lg font-medium mb-4 tracking-widest uppercase">
                Autonomy You Can Audit
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                Agentic Virtual Machine
              </span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-5xl">
                The execution layer for autonomous zk-agents
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            The AVM standardizes how autonomous agents prove behavior, cost, and collaboration — 
            a verifiable economy for off-chain intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
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
              Launch Agent Studio SDK
            </Button>
          </motion.div>

          {/* Stats Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm"
          >
            {[
              { icon: Zap, label: "Proof-First" },
              { icon: GitBranch, label: "Composable" },
              { icon: Coins, label: "Predictable Fees" },
              { icon: Shield, label: "ZK-Native" }
            ].map((badge, index) => (
              <div 
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
              >
                <badge.icon className="w-4 h-4" />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Is AVM Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="text-muted-foreground">What Is the</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                AVM
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The runtime for verifiable agents.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  The AVM is the execution layer for autonomous zk-agents — a standardized proving schema rather than a traditional bytecode VM.
                  Each agent deployed to the AVM is encoded as a network of prover circuits (its own logic and state transitions) and verifier circuits 
                  (proof checkers for external tasks it delegates to other agents).
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0" />
                    <span>Modular ZK execution (FSM · zkTLS · zkVM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0" />
                    <span>Embedded pricing variable and metering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0" />
                    <span>Recursive verification of sub-proofs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0" />
                    <span>Stateless aggregation on ZShard</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Column - Animated Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  {/* Agent Node */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 text-center"
                  >
                    <div className="text-blue-400 font-semibold">Agent Node</div>
                    <div className="text-sm text-muted-foreground mt-1">Prover Circuit</div>
                  </motion.div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>

                  {/* Sub-agent Proofs */}
                  <div className="grid grid-cols-2 gap-4">
                    {['Sub-Proof A', 'Sub-Proof B'].map((label, index) => (
                      <motion.div
                        key={label}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-green-500/20 border border-green-500/30 rounded-lg p-3 text-center text-sm"
                      >
                        <div className="text-green-400 font-medium">{label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Arrow Down */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>

                  {/* Aggregated Proof */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-4 text-center"
                  >
                    <div className="text-purple-400 font-semibold">Aggregated Proof</div>
                    <div className="text-sm text-muted-foreground mt-1">→ Blockchain</div>
                  </motion.div>
                </div>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center text-muted-foreground mt-6 italic"
              >
                Agents prove behavior, cost, and trust — not just computation.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agent Studio Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Agent Studio
              </span>
              <br />
              <span className="text-muted-foreground text-3xl">(Developer Framework)</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Design, simulate, and deploy AVM-compatible agents.
            </p>
          </motion.div>

          {/* Gradient Split Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-sm p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Features */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-purple-400 mb-2">
                          Compose prover + verifier circuits
                        </h3>
                        <p className="text-muted-foreground">
                          Visually or in DSL with modular, reusable components.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-pink-400 mb-2">
                          Define fee policies
                        </h3>
                        <p className="text-muted-foreground">
                          Verify worst-case pricing scenarios before deployment.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-400 mb-2">
                          Compile to AVM bytecode
                        </h3>
                        <p className="text-muted-foreground">
                          Generate manifest (code_hash, VKs, fee_policy) for chain registration.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Open SDK Docs
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Join Devnet
                    </Button>
                  </div>
                </div>

                {/* Right - Code Example */}
                <div className="relative">
                  <div className="bg-black/40 border border-white/10 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                    <pre className="text-gray-300">
                      <span className="text-green-400">{`// Agent Studio SDK Example`}</span>{'\n'}
                      <span className="text-blue-400">const</span> agent = <span className="text-yellow-400">new</span> <span className="text-purple-400">AgentBuilder</span>(){'\n'}
                      {'  '}.addProvingCircuit(myLogicCircuit){'\n'}
                      {'  '}.addVerifierCircuit(delegationVerifier){'\n'}
                      {'  '}.setFeePolicy(adaptivePricing){'\n'}
                      {'  '}.simulate({'{ maxSteps: '}<span className="text-cyan-400">10000</span>{' }'}{'\n'}
                      {'  '}.compile();{'\n'}
                      {'\n'}
                      <span className="text-blue-400">const</span> manifest = agent.getManifest();{'\n'}
                      <span className="text-gray-500">{`// { code_hash, VKs, fee_policy }`}</span>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="text-foreground">Why It</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: LinkIcon,
                title: "Composability",
                description: "Agents verify each other's proofs instead of re-executing logic.",
                color: "from-blue-400 to-cyan-400"
              },
              {
                icon: Calculator,
                title: "Economic Predictability", 
                description: "Consistent metering → transparent cost model.",
                color: "from-green-400 to-blue-400"
              },
              {
                icon: Search,
                title: "Auditability",
                description: "Uniform proof interface → aggregated verification on-chain.",
                color: "from-purple-400 to-pink-400"
              }
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6`}>
                      <card.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold">{card.title}</h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};