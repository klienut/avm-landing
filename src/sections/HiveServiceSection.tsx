import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Wifi, DollarSign, ArrowRight, TrendingUp, Users, Layers } from 'lucide-react';

export const HiveServiceSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="hive-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <polygon points="12.5,5 20,10 20,17.5 12.5,22.5 5,17.5 5,10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <circle cx="12.5" cy="13.75" r="1.5" fill="currentColor" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hive-pattern)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-yellow-500/5 to-red-500/10" />
      </div>

      <motion.div 
        className="relative py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
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
            <span className="text-lg text-orange-400 font-medium mb-4 block">🏢 Hive Service Economy</span>
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Decentralized Service Markets
              </span>
            </h1>
            <p className="text-xl text-orange-300 max-w-3xl mx-auto mb-8">
              Unified marketplace for compute, storage, and bandwidth resources with algorithmic price discovery.
            </p>
          </motion.div>

          {/* Service Categories */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-orange-300 mb-8 text-center">
              Core Service Markets
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
                <Server className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-blue-300 mb-3">Compute Services</h3>
                <ul className="text-blue-200 space-y-2 text-sm">
                  <li>• GPU/CPU time markets</li>
                  <li>• Specialized hardware access</li>
                  <li>• Auto-scaling workloads</li>
                  <li>• Pay-per-execution model</li>
                </ul>
              </div>
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                <Database className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-green-300 mb-3">Storage Markets</h3>
                <ul className="text-green-200 space-y-2 text-sm">
                  <li>• Distributed data storage</li>
                  <li>• Content delivery networks</li>
                  <li>• Backup & archival services</li>
                  <li>• Dynamic capacity allocation</li>
                </ul>
              </div>
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
                <Wifi className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-purple-300 mb-3">Bandwidth Services</h3>
                <ul className="text-purple-200 space-y-2 text-sm">
                  <li>• Network relay capacity</li>
                  <li>• Edge connectivity points</li>
                  <li>• Traffic routing services</li>
                  <li>• Quality-of-service tiers</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Market Dynamics */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-orange-300 mb-8 text-center">
              Algorithmic Price Discovery
            </h2>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid lg:grid-cols-3 gap-8">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-300 mb-3">Supply & Demand</h3>
                  <p className="text-orange-200 text-sm">
                    Real-time price adjustment based on resource availability and service request patterns
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">Reputation System</h3>
                  <p className="text-yellow-200 text-sm">
                    Provider quality scores affect pricing and service priority in the marketplace
                  </p>
                </motion.div>

                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-red-500 to-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-300 mb-3">Dynamic Pricing</h3>
                  <p className="text-red-200 text-sm">
                    Automated bid-ask matching with quality-adjusted pricing for optimal resource allocation
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Service Discovery Flow */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-orange-300 mb-8 text-center">
              Service Discovery & Matching
            </h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <p className="text-yellow-200 max-w-2xl mx-auto text-lg">
                  Agents discover and procure services through automated matching with quality guarantees and instant settlement.
                </p>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                <motion.div 
                  className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 text-center flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-blue-500/30 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    1
                  </div>
                  <h4 className="font-semibold text-blue-300 mb-2">Service Request</h4>
                  <p className="text-sm text-blue-200">Agent queries Hive for required resources</p>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-orange-400 hidden lg:block" />

                <motion.div 
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-green-500/30 text-green-300 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-green-300 mb-2">Provider Matching</h4>
                  <p className="text-sm text-green-200">Algorithmic selection by price & reputation</p>
                </motion.div>

                <ArrowRight className="w-6 h-6 text-orange-400 hidden lg:block" />

                <motion.div 
                  className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 text-center flex-1"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-12 h-12 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-purple-300 mb-2">Instant Settlement</h4>
                  <p className="text-sm text-purple-200">Payment via Hydra upon service delivery</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Economic Loop */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-orange-300 mb-8 text-center">
              Self-Reinforcing Economic Loop
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-orange-300 mb-4">Provider Incentives</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <div className="font-semibold text-orange-200">Revenue Optimization</div>
                      <div className="text-sm text-orange-300/80">Higher uptime and quality = better rates</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <div className="font-semibold text-orange-200">Resource Efficiency</div>
                      <div className="text-sm text-orange-300/80">Dynamic scaling reduces operational costs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <div className="font-semibold text-orange-200">Market Access</div>
                      <div className="text-sm text-orange-300/80">Global agent demand without gatekeepers</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-orange-300 mb-4">Consumer Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <div className="font-semibold text-orange-200">Cost Efficiency</div>
                      <div className="text-sm text-orange-300/80">Competitive pricing through market forces</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <div className="font-semibold text-orange-200">Service Quality</div>
                      <div className="text-sm text-orange-300/80">Reputation system ensures reliable providers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full flex-shrink-0 mt-1.5"></div>
                    <div>
                      <div className="font-semibold text-orange-200">Instant Access</div>
                      <div className="text-sm text-orange-300/80">No contracts or lengthy setup processes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Integration with OS */}
          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-orange-300 mb-8 text-center">
              OS-Level Integration
            </h2>
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-center mb-8">
                <p className="text-red-200 max-w-3xl mx-auto text-lg">
                  Hive services integrate seamlessly with Agent Protocol Suite, providing standard APIs that agents can access like native OS resources.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-red-300 mb-3">Standard APIs</h4>
                  <ul className="text-red-200 space-y-2 text-sm">
                    <li>• File system abstractions for storage</li>
                    <li>• Process scheduling for compute</li>
                    <li>• Network socket APIs for bandwidth</li>
                    <li>• Resource monitoring interfaces</li>
                  </ul>
                </div>
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-red-300 mb-3">Transparent Usage</h4>
                  <ul className="text-red-200 space-y-2 text-sm">
                    <li>• Agents use standard system calls</li>
                    <li>• Automatic provider selection</li>
                    <li>• Background payment handling</li>
                    <li>• Fallback to local resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div className="text-center" variants={itemVariants}>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">The Agent Economy Infrastructure</h2>
              <p className="text-lg text-orange-200 leading-relaxed">
                Hive creates a self-regulating service economy where agents can seamlessly access compute, storage, 
                and bandwidth resources. Through algorithmic pricing, reputation systems, and OS-level integration, 
                it transforms scattered resources into a unified, reliable infrastructure for autonomous agents.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};