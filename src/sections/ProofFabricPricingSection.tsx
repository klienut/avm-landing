import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowRight } from 'lucide-react';

export const ProofFabricPricingSection: React.FC = () => {
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
              <pattern id="pricing-pattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                <polygon points="15,5 25,15 15,25 5,15" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-pattern)" />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-yellow-500/10" />
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
            <span className="text-lg text-orange-400 font-medium mb-4 block">💰 Section 1C — Gas & Pricing</span>
            <h2 className="text-5xl md:text-6xl font-light mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Metering & Pricing — The Standardized Gas Accumulator
              </span>
            </h2>
            <p className="text-xl text-red-300 max-w-3xl mx-auto mb-8">
              Transparent cost tracking embedded directly in proof execution.
            </p>
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

          {/* Gas Model Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Universal Gas Model
              </span>
            </h3>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "Compute Gas",
                  description: "R1CS constraints, polynomial evaluations, and circuit-specific operations",
                  units: ["Circuit size", "Proving time", "Memory usage"],
                  color: "from-blue-400 to-cyan-400"
                },
                {
                  title: "Verify Gas", 
                  description: "Sub-proof validation, signature checks, and cryptographic operations",
                  units: ["Pairing operations", "Hash computations", "Signature verifications"],
                  color: "from-purple-400 to-pink-400"
                },
                {
                  title: "I/O Gas",
                  description: "Data transmission, storage operations, and network communication",
                  units: ["Bytes transmitted", "Storage writes", "Network calls"],
                  color: "from-orange-400 to-red-400"
                }
              ].map((gasType, index) => (
                <motion.div
                  key={gasType.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
                    <div className="space-y-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r ${gasType.color} text-white font-mono text-sm font-semibold`}>
                        <DollarSign className="w-4 h-4" />
                        {gasType.title}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {gasType.description}
                      </p>
                      <div className="space-y-2">
                        {gasType.units.map((unit, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
                            <span className="text-xs text-white/80">{unit}</span>
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
                Registry weights enable predictable cost estimation across different proving systems and networks.
              </p>
            </div>
          </motion.div>

          {/* Cost Predictability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Cost Predictability Benefits
              </span>
            </h3>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-orange-300">For Agent Developers</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Estimate costs before deployment using standardized weights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Budget for compute vs verification vs I/O operations independently</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Optimize workflows based on transparent cost breakdowns</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-red-300">For Network Operators</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Automatic fee settlement from embedded gas accumulators</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Auditable cost tracking prevents fee disputes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <span>Resource usage data enables better capacity planning</span>
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
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-light mb-8 text-center">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Example: Trading Agent Gas Breakdown
              </span>
            </h3>

            <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {[
                  { operation: "Price Oracle", gas: "150 units", type: "Verify", color: "bg-purple-500/20 border-purple-500/30" },
                  { operation: "Strategy Logic", gas: "300 units", type: "Compute", color: "bg-blue-500/20 border-blue-500/30" },
                  { operation: "Order Placement", gas: "80 units", type: "I/O", color: "bg-orange-500/20 border-orange-500/30" },
                  { operation: "Total Cost", gas: "530 units", type: "Final", color: "bg-green-500/20 border-green-500/30" }
                ].map((item, index) => (
                  <motion.div
                    key={item.operation}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${item.color} border rounded-lg p-4 text-center`}
                  >
                    <div className="font-semibold text-white text-sm mb-1">{item.operation}</div>
                    <div className="text-xs text-muted-foreground mb-2">{item.type}</div>
                    <div className="font-mono text-sm font-bold">{item.gas}</div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Gas accumulator automatically tracks all operations and commits total to proof for settlement
                </p>
              </div>
            </div>
          </motion.div>

          {/* Next Section Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            viewport={{ once: true }}
          >
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-orange-300 mb-6">Transparent Cost Architecture</h2>
              <p className="text-lg text-orange-200 leading-relaxed mb-6">
                The standardized gas accumulator ensures predictable pricing across all agent operations, 
                with automatic settlement and auditable cost tracking built into every proof.
              </p>
              <motion.button 
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next: Composition & Safety
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};