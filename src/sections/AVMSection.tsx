import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Shield, Database, GitBranch, Layers, CheckCircle, Clock, Users } from 'lucide-react';

export const AVMSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-6 overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-cyan-500/10" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          {...fadeInUp}
        >
          <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Agentic VM —
            </span>
            <br />
            <span className="text-white">Stateless UTXO with zk-Aggregated Finality</span>
          </h1>
          <p className="text-2xl text-purple-200 font-medium mb-8">
            Program agents with scripts; prove off-chain; aggregate on-chain.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-lg text-gray-300 leading-relaxed">
              AVM turns agent logic into UTXO scripts with activation conditions. Users prove locally; 
              producers verify & aggregate; the beacon finalizes. No state replay, no contention—just 
              proofs, predicates, and a new root.
            </p>
          </div>
        </motion.div>

        {/* Main Diagram */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-8">
              <div className="flex gap-2">
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-500/30">Stateless</span>
                <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">Reserved Lanes</span>
                <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">DAP-gated Finality</span>
              </div>
            </div>
            
            {/* Diagram Flow */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* User Transactions */}
              <div className="flex flex-col gap-4">
                <h3 className="text-center text-white font-medium mb-4">User Transactions</h3>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4 w-48">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-green-300">
                        <CheckCircle className="w-4 h-4" />
                        <span>Script predicate ✓</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-300">
                        <GitBranch className="w-4 h-4" />
                        <span>Merkle branch</span>
                      </div>
                      <div className="flex items-center gap-2 text-purple-300">
                        <Shield className="w-4 h-4" />
                        <span>Nullifier N{i}</span>
                      </div>
                      <div className="flex items-center gap-2 text-cyan-300">
                        <Layers className="w-4 h-4" />
                        <span>Sub-proofs</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 hidden lg:block"></div>
                <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-cyan-400 lg:hidden"></div>
              </div>

              {/* Producer */}
              <div className="flex flex-col items-center gap-6">
                <h3 className="text-white font-medium">Producer</h3>
                <div className="space-y-4">
                  <div className="bg-orange-500/20 border border-orange-500/30 rounded-xl p-4 text-center">
                    <Zap className="w-6 h-6 text-orange-300 mx-auto mb-2" />
                    <span className="text-orange-300 text-sm font-medium">Aggregation Circuit</span>
                  </div>
                  <div className="bg-indigo-500/20 border border-indigo-500/30 rounded-xl p-4 text-center">
                    <Database className="w-6 h-6 text-indigo-300 mx-auto mb-2" />
                    <span className="text-indigo-300 text-sm font-medium">Root-transition Circuit</span>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 hidden lg:block"></div>
                <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-cyan-400 lg:hidden"></div>
              </div>

              {/* Beacon */}
              <div className="flex flex-col items-center gap-4">
                <h3 className="text-white font-medium">Finality</h3>
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-green-300 text-sm font-medium">New State Root</span>
                  <div className="text-xs text-green-400 mt-1">Beacon (BFT)</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8 text-sm text-gray-400">
              Only previous root + branches required
            </div>
          </div>
        </motion.div>

        {/* Content Sections */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* What AVM Is */}
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-semibold text-white">What AVM Is</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0" />
                <span>UTXO model with scriptable activation conditions (general programmability via predicates/covenants)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0" />
                <span>Designed for agent programs: FSM rules, policy checks, capability gates</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 shrink-0" />
                <span>Proof-centric: transactions carry proofs; the chain verifies & aggregates rather than re-executes</span>
              </li>
            </ul>
          </motion.div>

          {/* Programming Model */}
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-semibold text-white">Programming Model</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                <span>Notes (UTXOs) embed validity predicates; spending requires proving predicate satisfaction</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                <span>General programmability via composable script templates (timelocks, multisig, capability tokens, policy gates)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0" />
                <span>Turing-complete via script composition; heavy compute relegated to verifier sub-proofs (zkVM/zkML)</span>
              </li>
            </ul>
          </motion.div>

          {/* Stateless Validation */}
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">Stateless Validation</h3>
              <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs border border-green-500/30">Prior root + branches = enough</span>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0" />
                <span>Producers need: (a) prior shard root, (b) Merkle branches for spent notes, (c) empty-leaf witnesses for new notes, (d) nullifiers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0" />
                <span>No full state required—enables rapid leader rotation and constant verification cost</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 shrink-0" />
                <span>Result: stateless production, near-constant verification cost per transaction</span>
              </li>
            </ul>
          </motion.div>

          {/* Who Proves What */}
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white">Who Proves What</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-cyan-300 font-medium mb-2">User-side:</h4>
                <p className="text-gray-300 text-sm">Each tx carries a spend proof (script predicate satisfied, membership, nullifier uniqueness)</p>
              </div>
              <div>
                <h4 className="text-cyan-300 font-medium mb-2">Producer circuits:</h4>
                <ul className="space-y-2 text-gray-300 text-sm ml-4">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />
                    <span><strong>Aggregation circuit:</strong> verifies all included per-tx proofs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />
                    <span><strong>Root-transition circuit:</strong> computes new Merkle root from inputs/outputs/nullifiers</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Reserved Lanes - Full Width */}
        <motion.div 
          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mb-16 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-8 h-8 text-orange-400" />
            <h3 className="text-3xl font-semibold text-white">Reserved Lanes</h3>
            <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm border border-orange-500/30">Never starve the lifelines</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl text-orange-300 font-medium mb-4">Guaranteed Inclusion Lanes:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                  <span>Hydra channel ops (open/close/refresh/dispute)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                  <span>DA/DAP commitments & probe receipts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 shrink-0" />
                  <span>Safety/dispute messages</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
              <p className="text-orange-200 font-medium text-lg mb-2">Payments, DA, and disputes get their own lane</p>
              <p className="text-orange-300/80">So lifelines never wait behind market noise</p>
              <div className="mt-4 text-sm text-gray-400">
                Prevents starvation seen in "general-fee" designs (e.g., L1 congestion delaying L2/DA ops)
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Sections Grid */}
        <motion.div 
          className="grid lg:grid-cols-3 gap-6 mb-16"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {/* Cross-shard & Finality */}
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <GitBranch className="w-6 h-6 text-purple-400" />
              <h4 className="text-lg font-semibold text-white">Cross-shard & Finality</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 shrink-0" />
                <span>Burn-mint receipts for atomic cross-shard moves</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 shrink-0" />
                <span>Beacon runs BFT for fast ordering/finality</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 shrink-0" />
                <span>Tips only extend when DAP accessibility passes</span>
              </li>
            </ul>
          </motion.div>

          {/* Fee & Metering */}
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-cyan-400" />
              <h4 className="text-lg font-semibold text-white">Fee & Metering</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />
                <span>On-chain gas = verifier-weight + log-tree work + reserved-lane tariff</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />
                <span>Aligns with ProofFabric's pricing accumulator</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 shrink-0" />
                <span>Predictable costs visible pre-execution</span>
              </li>
            </ul>
          </motion.div>

          {/* Developer Experience */}
          <motion.div 
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-green-400" />
              <h4 className="text-lg font-semibold text-white">Developer Experience</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 shrink-0" />
                <span>Author scripts via Agent Studio; compile to AVM predicates</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 shrink-0" />
                <span>Import verifier gadgets (zkTLS/zkVM/zkML) as sub-proof checks</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 shrink-0" />
                <span>Canonical interface: state_in, state_out, nullifiers[], subproofs[], fee_accumulator</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Security Properties */}
        <motion.div 
          className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-2xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-red-400" />
            <h3 className="text-2xl font-semibold text-white">Security Properties</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                <span>No re-execution → low consensus cost</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                <span>Nullifier set prevents double-spends; per-block distinctness checks</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                <span>Acyclic sub-proof DAG within an epoch</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 shrink-0" />
                <span>DA-gated finality (fail-closed if blobs not accessible)</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};