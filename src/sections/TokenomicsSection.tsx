import React from 'react';
import { motion } from 'framer-motion';
import { 
  Coins, 
  TrendingUp, 
  BarChart3, 
  Repeat, 
  Shield, 
  Zap, 
  Database, 
  Network, 
  Target, 
  Settings,
  CheckCircle,
  ArrowRightLeft
} from 'lucide-react';

export const TokenomicsSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-2xl">
              <Coins className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-5xl font-light">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Tokenomics
              </span>
            </h1>
          </div>
          <h2 className="text-2xl text-purple-300 font-medium mb-4">
            Incentive Equilibrium Across the Agentic Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto italic">
            A unified economic engine that prices bandwidth, compute, and data through verifiable work.
          </p>
        </motion.div>

        {/* 1. Purpose and Philosophy */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-purple-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-semibold">Purpose and Philosophy</h3>
            </div>
            <div className="space-y-6">
              <p className="text-gray-200 leading-relaxed">
                Hyperspace's token is not a speculative asset but a coordination mechanism. It aligns every layer—consensus, routing, storage, and compute—through measurable, verifiable work. The objective is to maintain economic equilibrium where network capacity and security scale with real usage, not arbitrary issuance.
              </p>
              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <p className="text-lg text-purple-200 font-medium text-center italic">
                  "Every byte relayed, proof verified, and flop executed feeds the same economic loop."
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 2. Revenue Sources */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-blue-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="text-3xl font-semibold">Revenue Sources</h3>
            </div>
            <p className="text-gray-200 mb-8">
              The following inflows fund rewards and burns, forming the system's token sink where part is burned for deflationary balance and part recycled into rewards:
            </p>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Hydra Routing Fees",
                  description: "Micropayment throughput metrics derived from channel commitments",
                  icon: <ArrowRightLeft className="w-6 h-6" />,
                  color: "from-green-400 to-emerald-400"
                },
                {
                  title: "Blockchain Fees and Burns",
                  description: "Transaction base fees (EIP-1559 style) and user tips",
                  icon: <Coins className="w-6 h-6" />,
                  color: "from-blue-400 to-cyan-400"
                },
                {
                  title: "Hive Service Payments",
                  description: "Compute/storage rentals via Proof-of-Flops or Proof-of-Random-Access attestations",
                  icon: <Database className="w-6 h-6" />,
                  color: "from-orange-400 to-red-400"
                },
                {
                  title: "Data-Availability Probe Payments",
                  description: "Validator-to-broadcaster micro-fees from DAP probes",
                  icon: <Network className="w-6 h-6" />,
                  color: "from-purple-400 to-pink-400"
                }
              ].map((source, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${source.color} flex items-center justify-center mb-4`}>
                    {source.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{source.title}</h4>
                  <p className="text-gray-300">{source.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 3. Emission and Redistribution Model */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-green-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Repeat className="w-8 h-8 text-green-400" />
              <h3 className="text-3xl font-semibold">Emission and Redistribution Model</h3>
            </div>
            <p className="text-gray-200 mb-8">
              New supply or collected burns are redistributed through proofs of work or stake. All distributions reference verifiable metrics—no subjective weighting.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-green-500/30">
                    <th className="text-left py-4 px-4 text-green-300 font-semibold">Class</th>
                    <th className="text-left py-4 px-4 text-green-300 font-semibold">Function</th>
                    <th className="text-left py-4 px-4 text-green-300 font-semibold">Allocation Basis</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium">Validators / Shard producers</td>
                    <td className="py-4 px-4 text-gray-300">Secure consensus & zk-verification</td>
                    <td className="py-4 px-4 text-gray-300">Stake-weighted share of verified proofs</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium">Hydra routers</td>
                    <td className="py-4 px-4 text-gray-300">Maintain liquidity & routing</td>
                    <td className="py-4 px-4 text-gray-300">Proof-of-Circulation volume and uptime audits</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium">DA relays / DAP responders</td>
                    <td className="py-4 px-4 text-gray-300">Maintain accessibility</td>
                    <td className="py-4 px-4 text-gray-300">Share of validated probe responses</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-medium">Hive operators</td>
                    <td className="py-4 px-4 text-gray-300">Provide compute/storage</td>
                    <td className="py-4 px-4 text-gray-300">Verified Proof-of-Flops or Proof-of-Random-Access</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Governance & R&D</td>
                    <td className="py-4 px-4 text-gray-300">Long-term sustainability</td>
                    <td className="py-4 px-4 text-gray-300">Fixed schedule or DAO budget</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.section>

        {/* 4. Hierarchical ROI Targets */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-orange-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <BarChart3 className="w-8 h-8 text-orange-400" />
              <h3 className="text-3xl font-semibold">Hierarchical ROI Targets</h3>
            </div>
            <p className="text-gray-200 mb-8">
              Each layer has a target ROI to sustain the optimal participant count. The protocol adjusts rewards dynamically to keep ROI near targets, attracting or releasing stake as needed.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-red-300">Validators/Producers</h4>
                </div>
                <p className="text-gray-300">Highest ROI to preserve security</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-400 font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-yellow-300">Hydra Routers</h4>
                </div>
                <p className="text-gray-300">Mid ROI for liquidity stability</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-green-400 font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-green-300">Hive Operators</h4>
                </div>
                <p className="text-gray-300">Variable ROI tied to resource demand</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 5. Dynamic Monetary Policy */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Settings className="w-8 h-8 text-cyan-400" />
              <h3 className="text-3xl font-semibold">Dynamic Monetary Policy</h3>
            </div>
            <p className="text-gray-200 mb-8">
              The adaptive control loop creates self-balancing emission—the network mints only what usage justifies:
            </p>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Collect Metrics",
                  description: "Real-time throughput metrics (Hydra payments, block fees, DA probes)",
                  color: "from-blue-400 to-cyan-400"
                },
                {
                  step: "2", 
                  title: "Compute ROI",
                  description: "Calculate ROI per layer vs. target",
                  color: "from-purple-400 to-blue-400"
                },
                {
                  step: "3",
                  title: "Adjust Rewards",
                  description: "If ROI < target → mint differential reward; ROI > target → increase burn",
                  color: "from-green-400 to-emerald-400"
                },
                {
                  step: "4",
                  title: "Balance Supply",
                  description: "Keep global inflation ≤ burn intake",
                  color: "from-orange-400 to-red-400"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{item.title}</h4>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 6. Supply & Demand Flywheel */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-pink-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Zap className="w-8 h-8 text-pink-400" />
              <h3 className="text-3xl font-semibold">Supply & Demand Flywheel</h3>
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-4 text-lg font-medium">
                <span className="px-4 py-2 bg-blue-500/20 rounded-full">Usage</span>
                <span className="text-blue-400">→</span>
                <span className="px-4 py-2 bg-red-500/20 rounded-full">Burns</span>
                <span className="text-red-400">→</span>
                <span className="px-4 py-2 bg-green-500/20 rounded-full">Higher Rewards</span>
                <span className="text-green-400">→</span>
                <span className="px-4 py-2 bg-purple-500/20 rounded-full">More Stake</span>
                <span className="text-purple-400">→</span>
                <span className="px-4 py-2 bg-yellow-500/20 rounded-full">Lower Fees</span>
                <span className="text-yellow-400">→</span>
                <span className="px-4 py-2 bg-blue-500/20 rounded-full">More Usage</span>
              </div>
            </div>
            
            <p className="text-gray-200 text-center">
              Token demand scales naturally with transaction and service volume, not speculation. This positive feedback loop creates sustainable economic growth tied to actual network utility.
            </p>
          </div>
        </motion.section>

        {/* 7. Governance & Parameters */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-indigo-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-indigo-400" />
              <h3 className="text-3xl font-semibold">Governance & Parameters</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-indigo-300">Governed Parameters</h4>
                <ul className="space-y-3">
                  {[
                    "Target ROIs per layer",
                    "Per-layer allocation weights",
                    "Staking lock durations",
                    "Emission caps and schedules"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-indigo-300">Algorithmic Parameters</h4>
                <ul className="space-y-3">
                  {[
                    "Burn coefficient β(t)",
                    "Congestion pricing mechanisms",
                    "Probe fee rates",
                    "Real-time ROI adjustments"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400" />
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-indigo-500/10 border border-indigo-500/30 rounded-xl">
              <p className="text-gray-200">
                Governance body (DAO or validator council) adjusts macro parameters while algorithmic systems handle real-time optimization and fee adjustments.
              </p>
            </div>
          </div>
        </motion.section>

        {/* 8. Security and Proof-Backed Rewards */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-red-400" />
              <h3 className="text-3xl font-semibold">Security and Proof-Backed Rewards</h3>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-200 leading-relaxed">
                All rewards are backed by verifiable work: routing proofs, DAP probe logs, Proof-of-Flops, Proof-of-Random-Access, and consensus participation. No subjective reputation weighting—every claim is a proof object.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-red-300 mb-4">Slashing Conditions</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300">• False reporting of work metrics</li>
                    <li className="text-gray-300">• Inactivity during assigned duties</li>
                    <li className="text-gray-300">• Invalid proof submissions</li>
                    <li className="text-gray-300">• Byzantine behavior in consensus</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-semibold text-green-300 mb-4">Proof Requirements</h4>
                  <ul className="space-y-2">
                    <li className="text-gray-300">• Cryptographic routing attestations</li>
                    <li className="text-gray-300">• Verifiable computation receipts</li>
                    <li className="text-gray-300">• DA probe response logs</li>
                    <li className="text-gray-300">• Consensus participation proofs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 9. Macroeconomic Parameters */}
        <motion.section className="mb-16" variants={itemVariants}>
          <div className="bg-white/5 border border-yellow-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <BarChart3 className="w-8 h-8 text-yellow-400" />
              <h3 className="text-3xl font-semibold">Macroeconomic Parameters</h3>
            </div>
            <p className="text-gray-200 mb-8">Indicative targets for illustration:</p>
            
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl">
                <div className="text-3xl font-bold text-yellow-400 mb-2">≤ 2%</div>
                <div className="text-gray-200">Annual equilibrium inflation</div>
              </div>
              
              <div className="text-center p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl">
                <div className="text-3xl font-bold text-orange-400 mb-2">30-50%</div>
                <div className="text-gray-200">Transaction fees burned</div>
              </div>
              
              <div className="text-center p-6 bg-green-500/10 border border-green-500/30 rounded-2xl">
                <div className="text-3xl font-bold text-green-400 mb-2">Dynamic</div>
                <div className="text-gray-200">Token velocity anchored by Hydra flows</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* 10. Vision Summary */}
        <motion.section variants={itemVariants}>
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-3xl p-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Coins className="w-8 h-8 text-purple-400" />
              <h3 className="text-3xl font-semibold">Vision Summary</h3>
            </div>
            
            <p className="text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
              Hyperspace's tokenomics convert network activity directly into economic stability. Each subsystem—Hydra, HyperChain, Hive, DAP—earns by producing measurable utility. A closed feedback loop of burns and rewards keeps throughput, participation, and token value in dynamic equilibrium, powering a sustainable, self-pricing machine economy.
            </p>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};