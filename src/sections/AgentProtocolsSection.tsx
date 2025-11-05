import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Network, Users, Zap, Shield, Search, MessageSquare, Play, DollarSign, ArrowRight, CheckCircle, Code2, Database } from 'lucide-react';

export const AgentProtocolsSection: React.FC = () => {
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
      className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50 px-8 py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-3 bg-violet-600 text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <Network className="w-5 h-5" />
            Agent Protocols
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Agent Protocol Suite
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Verifiable Coordination for Autonomous Agents
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From discovery to settlement—plus OS-like APIs for memory, compute, and data with built-in payments
          </p>
        </motion.div>

        {/* Connection Banner */}
        <motion.div 
          className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl p-8 mb-16 text-white"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4">
            <ArrowRight className="w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">From Settlement to Coordination</h3>
              <p className="text-purple-100 leading-relaxed">
                With HyperChain providing verifiable settlement, the Agent Protocol Suite enables autonomous agents to discover, negotiate, and coordinate complex workflows with cryptoeconomic guarantees.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Four-Phase Lifecycle */}
        <motion.div id="coordination-lifecycle" className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Four-Phase Coordination Lifecycle
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery</h3>
                <p className="text-gray-600 text-sm">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Negotiation</h3>
                <p className="text-gray-600 text-sm">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Execution</h3>
                <p className="text-gray-600 text-sm">
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Settlement</h3>
                <p className="text-gray-600 text-sm">
                  HTLC + proof coupling with ZShard VM finality
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Core Philosophy */}
        <motion.div id="coordination-fabric" className="mb-16" variants={itemVariants}>
          <div className="bg-gradient-to-r from-slate-900 to-gray-900 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">The Coordination Fabric</h2>
            <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed mb-6">
              What ProofFabric is to computation, the Agent Protocol Suite is to coordination—and it 
              exposes OS-like APIs to use the network as memory and compute with integrated micropayments.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Verifiable Interactions</h4>
                <p className="text-sm text-gray-300">Proofs, receipts, and DA checkpoints</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Predictable Economics</h4>
                <p className="text-sm text-gray-300">Comprehensive metering for all operations</p>
              </div>
              <div className="text-center">
                <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">OS-like APIs</h4>
                <p className="text-sm text-gray-300">Network as memory and compute</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Discovery Phase */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Discovery Phase
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Identity & Attestation</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• DID identity with key rotation</li>
                <li>• Code-hash & VK attestations</li>
                <li>• Optional TEE quotes</li>
                <li>• Agent Registry anchoring</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <Database className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-900 mb-4">Manifests</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Machine-readable capabilities</li>
                <li>• Pricing & latency tiers</li>
                <li>• DA policies & versioning</li>
                <li>• Supported OS APIs</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <Shield className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Reputation</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Agentic OS APIs — x402-style Payment-Coupled I/O
          </h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Core Operations</h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <code className="text-sm font-mono text-indigo-600 block mb-2">
                    memory.get(cid|key, tier, latency_target)
                  </code>
                  <p className="text-xs text-gray-600">Hydra-priced retrieval from Hive storage with DA pointer in receipt</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <code className="text-sm font-mono text-green-600 block mb-2">
                    memory.put(blob, redundancy, retention)
                  </code>
                  <p className="text-xs text-gray-600">Priced by size × retention; returns DA/Hive locator + proof of storage</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <code className="text-sm font-mono text-purple-600 block mb-2">
                    compute.submit(task_spec, inputs, latency_target)
                  </code>
                  <p className="text-xs text-gray-600">Schedules on Hive compute; returns job_id with interim Hydra streams</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <code className="text-sm font-mono text-orange-600 block mb-2">
                    compute.subscribe(job_id)
                  </code>
                  <p className="text-xs text-gray-600">Stream logs/proofs with per-byte/step metering</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <code className="text-sm font-mono text-blue-600 block mb-2">
                    data.fetch(url, policy)
                  </code>
                  <p className="text-xs text-gray-600">zkTLS fetch with transcript embedded as sub-proof</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Payment Integration</div>
                  <p className="text-xs text-gray-600">All operations accept payment=&#123;mode, cap, tip&#125; and yield x402-style receipts</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Guarantees */}
        <motion.div id="safety-guarantees" className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cross-Phase Security Guarantees
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Coordination Safety</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Mutual Authenticity:</strong> zkTLS transcripts bind endpoints to session keys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Proof-of-Agreement:</strong> SLA hashes signed and anchored</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Non-Repudiation:</strong> Epoch nonces and DA checkpointing</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Composition Safety</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Acyclic Proofs:</strong> Sub-proof DAGs with bounded timeouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Standardized Failures:</strong> Abort, partial refund mechanisms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Replay Protection:</strong> Idempotent operation hashes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Example Workflow */}
        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Workflow Example
          </h2>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center">Discovery</h4>
                <p className="text-xs text-gray-600 text-center">
                  Query manifests for "GPU A100, &le;100ms, &lt;$0.02/s" &rarr; Find high-reputation provider
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center">Negotiation</h4>
                <p className="text-xs text-gray-600 text-center">
                  MCP session &rarr; SLA signed &rarr; Hydra stream opens with $1 cap (x402-style)
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center">Execution</h4>
                <p className="text-xs text-gray-600 text-center">
                  compute.submit() &rarr; Partial proofs streamed &rarr; Payments unlock per milestone
                </p>
              </motion.div>

              <motion.div 
                className="bg-white rounded-xl p-6 shadow-md"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-center">Settlement</h4>
                <p className="text-xs text-gray-600 text-center">
                  HTLC closes &rarr; ZShard VM verifies &rarr; Receipt checkpointed &rarr; memory.put() persists
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The HTTPS & DNS of the Agentic Web</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The Agent Protocol Suite provides the coordination infrastructure for autonomous agents, 
              with verifiable four-phase lifecycle management and OS-like APIs that make the decentralized 
              network as easy to use as a local computer—but with built-in payments, proofs, and 
              cryptoeconomic guarantees.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Next: AI Interface — The Human Gateway
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};