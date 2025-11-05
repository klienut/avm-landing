import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, ExternalLink, Zap, DollarSign, Network, Server, CheckCircle2, CreditCard, Database, Globe } from 'lucide-react';

export const HydraLandingSection: React.FC = () => {
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
      {/* Hydra & Hive Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/hive.png" 
          alt="Abstract digital art representing decentralized resource networks and peer-to-peer marketplace infrastructure"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <motion.div
        className="relative py-20 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <motion.div className="text-center" variants={itemVariants}>
            {/* Main hero box */}
            <div className="bg-black/40 backdrop-blur-sm rounded-3xl p-12 max-w-5xl mx-auto border border-white/10 mb-16">
              <h1 className="text-6xl md:text-7xl font-light mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Hydra & Hive —
                </span>
                <br />
                <span className="text-white drop-shadow-lg">Payments & Resources for Agents</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 drop-shadow-md">
                Stake-backed micropayment channels and peer-to-peer compute/storage markets 
                that provide the economic rails for autonomous agent coordination.
              </p>
            </div>
            
            {/* Outside the box - Subtitle and description */}
            <div className="text-center mb-8">
              <p className="text-2xl text-blue-200 font-medium drop-shadow-lg mb-4">
                Instant Settlement with Distributed Resources
              </p>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md mb-8">
                Agents stream payments in real-time and rent compute, storage, and bandwidth from a global marketplace
              </p>
            </div>
            
            {/* CTA Buttons below the subtitle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Open Hydra & Hive Docs
                <ExternalLink className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border border-blue-500/40 hover:border-blue-500/70 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Resource Network
                <Code className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};