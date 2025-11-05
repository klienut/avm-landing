import React from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface DocsLayoutProps {
  sections: Section[];
  currentSection: number;
  onSectionChange: (index: number) => void;
  children: React.ReactNode;
}

export const DocsLayout: React.FC<DocsLayoutProps> = ({ 
  sections, 
  currentSection, 
  onSectionChange,
  children 
}) => {
  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      onSectionChange(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      onSectionChange(currentSection - 1);
    }
  };

  return (
    <div className="ml-72 min-h-screen bg-white">
      {/* Top Breadcrumb */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <span>/</span>
          <span>Documentation</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">
            {sections[currentSection]?.title}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-200 px-8 py-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={prevSection}
            disabled={currentSection === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              currentSection === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            {currentSection > 0 ? sections[currentSection - 1]?.title : 'Previous'}
          </button>

          <div className="text-sm text-gray-500">
            {currentSection + 1} of {sections.length}
          </div>

          <button
            onClick={nextSection}
            disabled={currentSection === sections.length - 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              currentSection === sections.length - 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {currentSection < sections.length - 1 ? sections[currentSection + 1]?.title : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};