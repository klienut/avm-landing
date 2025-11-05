import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react';

export const DAPSection: React.FC = () => {
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
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="dap-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="8" y="8" width="4" height="4" fill="currentColor" opacity="0.3" />
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dap-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-blue-500/10" />
      </div>

      {/* Main Content */}
      <div className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Data Accessibility Probing (DAP)
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Finality from accessibility — shift from "someone posted data" to "the network can retrieve it now."
            </p>
          </motion.div>

          {/* Connection Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-teal-500/20 border border-teal-500/30 rounded-xl p-6 mb-12"
            id="dap"
          >
            <div className="flex items-start gap-4">
              <ArrowRight className="w-6 h-6 text-teal-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-teal-300 mb-2">From Payments to Data Finality</h3>
                <p className="text-teal-200">
                  While Hydra ensures payment atomicity, DAP ensures that the underlying data for those transactions remains accessible to the entire network, providing the foundation for verifiable settlement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* The Data Availability Gap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">The Data Availability Gap</h2>
            
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Legacy data availability systems create a dangerous disconnect between attestation and reality. 
                Committees attest to "availability" even when end-users cannot actually fetch the data, leading 
                to finalized but inaccessible state that breaks the fundamental promise of blockchain transparency.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                DAP represents a paradigm shift from traditional data availability to verifiable data accessibility. 
                Instead of validators attesting that "someone posted data," the network only finalizes blobs that 
                it can actually retrieve right now, during the finalization process itself.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-semibold text-red-300">Legacy DA Problems</h3>
                </div>
                <ul className="text-red-200 space-y-2">
                  <li>• Committees attest without actual retrieval</li>
                  <li>• End-users cannot fetch finalized data</li>
                  <li>• Gap between attestation and reality</li>
                  <li>• Silent failures and false finalization</li>
                </ul>
              </div>
              
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-semibold text-green-300">DAP Solution</h3>
                </div>
                <ul className="text-green-200 space-y-2">
                  <li>• Only finalize accessible data</li>
                  <li>• Anonymous validator probes verify retrieval</li>
                  <li>• Fail-closed safety: no data = no finality</li>
                  <li>• Service-coupled finality guarantees</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How DAP Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">How DAP Works</h2>
            
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                The mechanism operates through a short probing window where validators issue anonymous, paid probes 
                via the relay network. A blob achieves finality only when enough probes successfully return valid 
                data openings, proving the network can access the data when needed.
              </p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold text-white">DAP Finalization Process</h4>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 text-center w-full lg:w-64"
                >
                  <Database className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-lg font-medium text-blue-300 mb-2">1. Blob Submission</div>
                  <div className="text-sm text-blue-200">Data posted to relay network</div>
                </motion.div>
                
                <ArrowRight className="w-8 h-8 text-gray-400" />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6 text-center w-full lg:w-64"
                >
                  <Zap className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-lg font-medium text-orange-300 mb-2">2. Probe Window</div>
                  <div className="text-sm text-orange-200">Anonymous validator probes</div>
                </motion.div>
                
                <ArrowRight className="w-8 h-8 text-gray-400" />
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center w-full lg:w-64"
                >
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-lg font-medium text-green-300 mb-2">3. Finality Gate</div>
                  <div className="text-sm text-green-200">Accessible data finalizes</div>
                </motion.div>
              </div>
              
              <p className="text-center text-gray-400 text-sm mt-6">
                <strong>Figure 1:</strong> DAP three-step process ensures only accessible data achieves finality.
              </p>
            </div>
          </motion.div>

          {/* Key Properties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Key Properties</h2>

            <div className="space-y-12">
              {/* Fail-Closed Safety */}
              <div>
                <h3 className="text-2xl font-semibold text-teal-300 mb-4">Fail-Closed Safety</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  If data isn't reachable during the probe window, it simply doesn't finalize — no silent failures 
                  or false attestations. This "fail-closed" behavior ensures that finality always implies accessibility, 
                  eliminating the trust gap in traditional DA systems.
                </p>
              </div>

              {/* No Per-Shard DA Subnets */}
              <div>
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">No Per-Shard DA Subnets</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  DAP eliminates the need for per-shard data availability committees, removing adaptive corruption 
                  vulnerabilities and coordination overhead that plague traditional sharded systems. The entire 
                  network participates in accessibility verification.
                </p>
              </div>

              {/* Predictable Pricing */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-300 mb-4">Predictable Pricing</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Fees are blob-size-independent and inversely proportional to chosen latency. Users can select 
                  their finality speed: shorter probe windows cost more but finalize faster, while longer windows 
                  provide cheaper settlement for non-urgent data.
                </p>
                
                {/* Pricing Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800">
                      <tr>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">
                          Window Duration
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">
                          Use Case
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider border-r border-gray-700">
                          Example Cost
                        </th>
                        <th className="px-6 py-3 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                          Latency
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 divide-y divide-gray-700">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">10 seconds</td>
                        <td className="px-6 py-4 text-sm text-gray-300 border-r border-gray-700">Urgent agent decisions</td>
                        <td className="px-6 py-4 text-sm text-green-400 font-bold border-r border-gray-700">$0.01</td>
                        <td className="px-6 py-4 text-sm text-gray-300">~15s total</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">60 seconds</td>
                        <td className="px-6 py-4 text-sm text-gray-300 border-r border-gray-700">Normal transactions</td>
                        <td className="px-6 py-4 text-sm text-blue-400 font-bold border-r border-gray-700">$0.001</td>
                        <td className="px-6 py-4 text-sm text-gray-300">~90s total</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-white border-r border-gray-700">300 seconds</td>
                        <td className="px-6 py-4 text-sm text-gray-300 border-r border-gray-700">Batch operations</td>
                        <td className="px-6 py-4 text-sm text-purple-400 font-bold border-r border-gray-700">$0.0001</td>
                        <td className="px-6 py-4 text-sm text-gray-300">~6min total</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Internet-Scale DA Economics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Internet-Scale DA Economics</h2>
            
            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                DAP's fee model enables internet-scale data availability at predictable prices. Validator cost 
                scales approximately with per-probe overhead, while user fees remain independent of blob size. 
                This creates a sustainable economic model where congestion becomes priced latency rather than 
                silent failure.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                The economic structure naturally balances network load: users requiring faster finality pay 
                premium prices for shorter probe windows, while batch operations can choose longer, cheaper 
                windows. This creates efficient price discovery without sacrificing accessibility guarantees.
              </p>
            </div>
          </motion.div>

          {/* Responsibility Split */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Responsibility Split</h2>
            
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                DAP establishes a clear division of responsibilities between the probing phase and post-finality 
                data distribution. During the probe window, data providers must serve validator requests to 
                achieve finality. After finalization, full nodes and agents can download the now-accessible 
                data with confidence in its availability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-orange-300 mb-4">During Probe Window</h4>
                <ul className="text-orange-200 space-y-2">
                  <li>• Validators gate admission through accessibility verification</li>
                  <li>• Data providers must serve validator requests</li>
                  <li>• Service quality directly impacts finalization success</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-blue-300 mb-4">Post-Finality</h4>
                <ul className="text-blue-200 space-y-2">
                  <li>• Network-wide distribution of verified, accessible data</li>
                  <li>• Guaranteed retrieval of finalized information</li>
                  <li>• Agents access with confidence in availability</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Example: Model Checkpoint Finalization</h2>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <p className="text-gray-300 text-lg leading-relaxed">
                Consider an AI agent publishing a large model checkpoint blob. Under DAP, the checkpoint is 
                submitted to the relay network and enters a chosen probe window (e.g., 60 seconds for normal 
                priority). Validators anonymously probe the checkpoint during this window. Only if enough probes 
                successfully retrieve valid openings does the checkpoint achieve finality. Once finalized, other 
                agents can confidently download and use the checkpoint, knowing the network has verified its 
                accessibility.
              </p>
            </div>
          </motion.div>

          {/* Next Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-8 h-8 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-300 mb-4">Next: Hyper-Sharded Nanochains</h3>
                  <p className="text-blue-200 mb-6 text-lg">
                    Learn how stateless shards leverage DAP-verified data to provide linear scaling 
                    through verifier-only execution and rapid leader rotation.
                  </p>
                  <motion.button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Continue to Nanochains →
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};