import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, ExternalLink } from 'lucide-react';

export const HyperChainLandingSection: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      {/* HyperChain Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/shard.png" 
          alt="Abstract digital art representing hyper-sharded blockchain architecture and distributed verification"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <motion.div
        className="relative py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Section */}
          <motion.div className="text-center" variants={itemVariants}>
            {/* Main hero box */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-12 max-w-5xl mx-auto border border-white/10 mb-16">
              <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  HyperChain —
                </span>
                <br />
                <span className="text-white drop-shadow-lg">The Verifiable Ledger</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 drop-shadow-md">
                Hyper-sharded execution with stateless nanochains, data accessibility probing, 
                and BFT finality designed for agent-scale throughput.
              </p>
            </div>
            
            {/* Outside the box - Subtitle and description */}
            <div className="text-center mb-8">
              <p className="text-2xl text-purple-200 font-medium drop-shadow-lg mb-4">
                Accessibility Over Availability
              </p>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md mb-8">
                Only finalize data that the network can actually retrieve right now - fail-closed safety for agent coordination
              </p>
            </div>
            
            {/* CTA Buttons below the subtitle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32">
              <motion.button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Open HyperChain Docs
                <ExternalLink className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border border-purple-500/40 hover:border-purple-500/70 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Run a Validator Node
                <Code className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};