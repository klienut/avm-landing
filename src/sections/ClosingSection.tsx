import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { FileText, Code, ArrowRight, CheckCircle } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="closing-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="25" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.3" />
                <circle cx="25" cy="25" r="22" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.2" />
                <circle cx="25" cy="25" r="2" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#closing-pattern)" />
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
          {/* Title */}
          <div className="space-y-6">
            <span className="text-lg text-blue-400 font-medium block">💡 Closing Section</span>
            <h1 className="text-5xl md:text-7xl font-light leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
                From Local Proofs to Global Coordination
              </span>
            </h1>
            
            <p className="text-xl text-cyan-300 max-w-2xl mx-auto font-medium">
              When computation, communication, and settlement become frictionless, intelligence organizes itself.
            </p>
          </div>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
          >
            Hyperspace unifies the microeconomics of agents with the macroeconomics of blockchain —
            ProofFabric defines how agents prove and pay, Hydra and Hive handle exchange and services, HyperChain secures the ledger, and the Protocol Suite ties it all together.
            This is the infrastructure of the Coasean Singularity — a world where coordination costs disappear and machine intelligence governs itself through cryptography and markets.
          </motion.p>

          {/* Stack Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {[
              {
                title: "ProofFabric",
                features: ["Agent proofs", "ZK circuits", "Unified metering"],
                color: "from-blue-400 to-cyan-400"
              },
              {
                title: "Hydra & Hive",
                features: ["Micropayments", "Resource markets", "P2P networks"],
                color: "from-green-400 to-emerald-400"
              },
              {
                title: "HyperChain & ZShard",
                features: ["Parallel shards", "ZK verification", "Data availability"],
                color: "from-purple-400 to-indigo-400"
              },
              {
                title: "Protocol Suite",
                features: ["Message coordination", "Agent manifests", "Reputation"],
                color: "from-pink-400 to-purple-400"
              },
              {
                title: "AI Interface",
                features: ["Natural language", "Intent mapping", "Proof receipts"],
                color: "from-orange-400 to-red-400"
              }
            ].map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center mb-4`}>
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">{layer.title}</h3>
                      <div className="space-y-2">
                        {layer.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-green-400 rounded-full" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-8"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 h-auto"
              >
                <FileText className="w-5 h-5 mr-2" />
                Full Technical Specification
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
              >
                <Code className="w-5 h-5 mr-2" />
                Start Building
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-muted-foreground mb-4">Ready to join the agentic economy?</p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Documentation</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Developer Hub</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Research Papers</a>
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">Community</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};