import React from 'react';
import { motion } from 'framer-motion';

export const DocumentHeader: React.FC = () => {
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-3"
      >
        <div className="text-center">
          <h1 className="text-2xl font-light text-white mb-1">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hyperspace
            </span>
            <span className="text-white/60 mx-2">—</span>
            <span className="text-white">The Agentic Stack</span>
          </h1>
          <p className="text-sm text-white/70 font-light">
            A complete infrastructure for verifiable, autonomous computation
          </p>
        </div>
      </motion.div>
    </div>
  );
};