import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Subsection {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface Section {
  id: string;
  title: string;
  component?: React.ReactNode;
  subsections?: Subsection[];
}

interface CurrentPage {
  sectionIndex: number;
  subsectionIndex?: number;
}

interface SidebarProps {
  sections: Section[];
  currentPage: CurrentPage;
  onPageChange: (sectionIndex: number, subsectionIndex?: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ sections, currentPage, onPageChange }) => {
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([currentPage.sectionIndex]));

  const toggleSection = (sectionIndex: number) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionIndex)) {
      newExpanded.delete(sectionIndex);
    } else {
      newExpanded.add(sectionIndex);
    }
    setExpandedSections(newExpanded);
  };

  const handleSectionClick = (sectionIndex: number) => {
    const section = sections[sectionIndex];
    if (section.subsections) {
      // Toggle expansion and navigate to main section landing page
      toggleSection(sectionIndex);
      if (!expandedSections.has(sectionIndex)) {
        // Navigate to the main section (landing page), not the first subsection
        onPageChange(sectionIndex);
      }
    } else {
      // Navigate directly to section
      onPageChange(sectionIndex);
    }
  };

  const isCurrentSection = (sectionIndex: number) => {
    return currentPage.sectionIndex === sectionIndex && currentPage.subsectionIndex === undefined;
  };

  const isCurrentSubsection = (sectionIndex: number, subsectionIndex: number) => {
    return currentPage.sectionIndex === sectionIndex && currentPage.subsectionIndex === subsectionIndex;
  };

  // Calculate total progress
  const totalPages = sections.reduce((total, section) => {
    return total + (section.subsections ? section.subsections.length : 1);
  }, 0);

  const currentPageNumber = sections.reduce((count, section, index) => {
    if (index < currentPage.sectionIndex) {
      return count + (section.subsections ? section.subsections.length : 1);
    } else if (index === currentPage.sectionIndex) {
      return count + (currentPage.subsectionIndex !== undefined ? currentPage.subsectionIndex + 1 : 1);
    }
    return count;
  }, 0);

  return (
    <div className="fixed left-0 top-0 h-full w-80 bg-black/40 backdrop-blur-sm border-r border-white/10 z-50 overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-white mb-2">Hyperspace</h1>
          <p className="text-sm text-white/60">The Agentic Stack</p>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {sections.map((section, sectionIndex) => (
            <div key={section.id} className="space-y-1">
              {/* Main Section */}
              <motion.button
                onClick={() => handleSectionClick(sectionIndex)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  isCurrentSection(sectionIndex)
                    ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400'
                    : 'hover:bg-white/5 text-white/80 hover:text-white'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      isCurrentSection(sectionIndex) ? 'bg-blue-400' : 'bg-white/40'
                    }`} />
                    <span className="font-medium text-sm">{section.title}</span>
                  </div>
                  {section.subsections && (
                    expandedSections.has(sectionIndex) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )
                  )}
                </div>
              </motion.button>

              {/* Subsections */}
              {section.subsections && (
                <AnimatePresence>
                  {expandedSections.has(sectionIndex) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-6 space-y-1 pt-1">
                        {section.subsections.map((subsection, subsectionIndex) => (
                          <motion.button
                            key={subsection.id}
                            onClick={() => onPageChange(sectionIndex, subsectionIndex)}
                            className={`w-full text-left p-2 rounded-md transition-all duration-200 text-sm ${
                              isCurrentSubsection(sectionIndex, subsectionIndex)
                                ? 'bg-purple-500/20 border border-purple-500/30 text-purple-400'
                                : 'hover:bg-white/5 text-white/60 hover:text-white/80'
                            }`}
                            whileHover={{ x: 2 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full ${
                                isCurrentSubsection(sectionIndex, subsectionIndex) ? 'bg-purple-400' : 'bg-white/30'
                              }`} />
                              <span>{subsection.title}</span>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Progress */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex justify-between text-xs text-white/60 mb-2">
            <span>Progress</span>
            <span>{Math.round((currentPageNumber / totalPages) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentPageNumber / totalPages) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-white/50 mt-1">
            Page {currentPageNumber} of {totalPages}
          </div>
        </div>
      </div>
    </div>
  );
};