import React from 'react';
import { motion } from 'framer-motion';

interface PlaceholderSectionProps {
  title: string;
  subtitle: string;
  color: string;
}

export const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ title, subtitle, color }) => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id={`pattern-${title}`} x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="12.5" cy="12.5" r="1" fill="currentColor" />
                <path d="M 12.5 0 L 12.5 25 M 0 12.5 L 25 12.5" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${title})`} />
          </svg>
        </div>
        
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color}`} />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-light mb-8 leading-tight">
            <span className={`bg-gradient-to-r ${color.replace('from-', '').replace('to-', '').split(' ')[0]} bg-clip-text text-transparent`}>
              {title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            {subtitle}
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-muted-foreground">
              <div className="text-sm uppercase tracking-widest mb-4">Coming Soon</div>
              <p className="text-lg">
                This section is being developed and will contain detailed information about {title.toLowerCase()}.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};