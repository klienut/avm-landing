import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Search, MessageSquare, Play, DollarSign, ArrowRight, CheckCircle, Code2, Database } from 'lucide-react';

export const AgentProtocolsLandingSection: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-background text-foreground px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-pink-500/10" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Agent Protocol Suite —
            </span>
            <br />
            <span className="text-white">Communication, Identity, and Reputation</span>
          </h1>
          <p className="text-2xl text-orange-200 font-medium mb-8">
            The HTTPS and DNS of the agentic web
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-lg text-gray-300 leading-relaxed">
              From discovery to settlement—plus OS-like APIs for memory, compute, and data with built-in payments. 
              What ProofFabric is to computation, the Agent Protocol Suite is to coordination.
            </p>
          </div>
        </motion.div>

        {/* Connection Banner */}
        <motion.div 
          className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-8 mb-16 backdrop-blur-sm"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <ArrowRight className="w-8 h-8 flex-shrink-0 text-orange-400" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-white">From Settlement to Coordination</h3>
              <p className="text-orange-200 leading-relaxed">
                With HyperChain providing verifiable settlement, the Agent Protocol Suite enables autonomous agents to discover, negotiate, and coordinate complex workflows with cryptoeconomic guarantees.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Four-Phase Lifecycle */}
        <motion.div id="coordination-lifecycle" className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Four-Phase Coordination Lifecycle
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
                <p className="text-gray-300 text-sm">
                  Identity, manifests, and reputation-based agent discovery
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Negotiation</h3>
                <p className="text-gray-300 text-sm">
                  MCP sessions, SLAs, and coordination metering
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Execution</h3>
                <p className="text-gray-300 text-sm">
                  ProofFabric workflows with Hydra/Hive services
                </p>
              </motion.div>

              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Settlement</h3>
                <p className="text-gray-300 text-sm">
                  HTLC + proof coupling with ZShard VM finality
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div id="coordination-fabric" className="mb-16" variants={itemVariants}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">The Coordination Fabric</h2>
            <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed mb-6 text-gray-300">
              What ProofFabric is to computation, the Agent Protocol Suite is to coordination—and it 
              exposes OS-like APIs to use the network as memory and compute with integrated micropayments.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Verifiable Interactions</h4>
                <p className="text-sm text-gray-300">Proofs, receipts, and DA checkpoints</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">Predictable Economics</h4>
                <p className="text-sm text-gray-300">Comprehensive metering for all operations</p>
              </div>
              <div className="text-center">
                <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2 text-white">OS-like APIs</h4>
                <p className="text-sm text-gray-300">Network as memory and compute</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Discovery Phase */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Discovery Phase
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-blue-300 mb-4">Identity & Attestation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• DID identity with key rotation</li>
                <li>• Code-hash & VK attestations</li>
                <li>• Optional TEE quotes</li>
                <li>• Agent Registry anchoring</li>
              </ul>
            </div>
            
            <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
              <Database className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-green-300 mb-4">Manifests</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Machine-readable capabilities</li>
                <li>• Pricing & latency tiers</li>
                <li>• DA policies & versioning</li>
                <li>• Supported OS APIs</li>
              </ul>
            </div>
            
            <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
              <Shield className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Reputation</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Verifiable uptime metrics</li>
                <li>• SLA adherence tracking</li>
                <li>• Dispute rate history</li>
                <li>• Latency performance</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* OS APIs */}
        <motion.div id="os-apis" className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Agentic OS APIs — x402-style Payment-Coupled I/O
          </h2>
          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Core Operations</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <code className="text-sm font-mono text-indigo-300 block mb-2">
                    memory.get(cid|key, tier, latency_target)
                  </code>
                  <p className="text-xs text-gray-300">Hydra-priced retrieval from Hive storage with DA pointer in receipt</p>
                </div>
                
                <div className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <code className="text-sm font-mono text-green-300 block mb-2">
                    memory.put(blob, redundancy, retention)
                  </code>
                  <p className="text-xs text-gray-300">Priced by size × retention; returns DA/Hive locator + proof of storage</p>
                </div>
                
                <div className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <code className="text-sm font-mono text-purple-300 block mb-2">
                    compute.submit(task_spec, inputs, latency_target)
                  </code>
                  <p className="text-xs text-gray-300">Schedules on Hive compute; returns job_id with interim Hydra streams</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <code className="text-sm font-mono text-orange-300 block mb-2">
                    compute.subscribe(job_id)
                  </code>
                  <p className="text-xs text-gray-300">Stream logs/proofs with per-byte/step metering</p>
                </div>
                
                <div className="bg-white/10 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                  <code className="text-sm font-mono text-blue-300 block mb-2">
                    data.fetch(url, policy)
                  </code>
                  <p className="text-xs text-gray-300">zkTLS fetch with transcript embedded as sub-proof</p>
                </div>
                
                <div className="bg-gray-500/20 border border-gray-500/30 rounded-lg p-4 backdrop-blur-sm">
                  <div className="text-sm font-semibold text-white mb-2">Payment Integration</div>
                  <p className="text-xs text-gray-300">All operations accept payment=&#123;mode, cap, tip&#125; and yield x402-style receipts</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Guarantees */}
        <motion.div id="safety-guarantees" className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Cross-Phase Security Guarantees
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Coordination Safety</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Mutual Authenticity:</strong> zkTLS transcripts bind endpoints to session keys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Proof-of-Agreement:</strong> SLA hashes signed and anchored</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Non-Repudiation:</strong> Epoch nonces and DA checkpointing</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Composition Safety</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Acyclic Proofs:</strong> Sub-proof DAGs with bounded timeouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Standardized Failures:</strong> Abort, partial refund mechanisms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Replay Protection:</strong> Idempotent operation hashes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Example Workflow */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Complete Workflow Example
          </h2>
          <div className="bg-gradient-to-r from-white/5 to-blue-500/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-blue-500/30 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">1</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-center">Discovery</h4>
                <p className="text-xs text-gray-300 text-center">
                  Query manifests for "GPU A100, ≤100ms, &lt;$0.02/s" → Find high-reputation provider
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-green-500/30 text-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">2</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-center">Negotiation</h4>
                <p className="text-xs text-gray-300 text-center">
                  MCP session → SLA signed → Hydra stream opens with $1 cap (x402-style)
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-purple-500/30 text-purple-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">3</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-center">Execution</h4>
                <p className="text-xs text-gray-300 text-center">
                  compute.submit() → Partial proofs streamed → Payments unlock per milestone
                </p>
              </motion.div>

              <motion.div 
                className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-orange-500/30 text-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">4</span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-center">Settlement</h4>
                <p className="text-xs text-gray-300 text-center">
                  HTLC closes → ZShard VM verifies → Receipt checkpointed → memory.put() persists
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">The HTTPS & DNS of the Agentic Web</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The Agent Protocol Suite provides the coordination infrastructure for autonomous agents, 
              with verifiable four-phase lifecycle management and OS-like APIs that make the decentralized 
              network as easy to use as a local computer—but with built-in payments, proofs, and 
              cryptoeconomic guarantees.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};