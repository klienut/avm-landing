import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, ExternalLink } from 'lucide-react';

export const ProofFabricLandingSection: React.FC = () => {
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
      {/* nanoZK Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/nanoZK.png" 
          alt="Abstract digital art representing distributed zero-knowledge computation"
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
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  ProofFabric —
                </span>
                <br />
                <span className="text-white drop-shadow-lg">Turn proofs into building blocks</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-8 drop-shadow-md">
                A modular ZK runtime where agents compose prover and verifier circuits 
                and settle with a transparent pricing meter.
              </p>
            </div>
            
            {/* Outside the box - Subtitle and description */}
            <div className="text-center mb-8">
              <p className="text-2xl text-emerald-200 font-medium drop-shadow-lg mb-4">
                Outsourced Compute with Verifiable Receipts
              </p>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto drop-shadow-md mb-8">
                Agents outsource heavy computation and receive cryptographic receipts they can verify locally
              </p>
            </div>
            
            {/* CTA Buttons below the subtitle */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-32">
              <motion.button
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                Open ProofFabric Spec
                <ExternalLink className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="border border-emerald-500/40 hover:border-emerald-500/70 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Build with Agent Studio
                <Code className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>



        </div>
      </motion.div>
    </div>
  );
};