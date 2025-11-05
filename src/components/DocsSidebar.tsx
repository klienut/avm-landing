import React from 'react';
import { ChevronRight, BookOpen, FileText } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  component: React.ReactNode;
}

interface DocsSidebarProps {
  sections: Section[];
  currentSection: number;
  onSectionChange: (index: number) => void;
}

export const DocsSidebar: React.FC<DocsSidebarProps> = ({ 
  sections, 
  currentSection, 
  onSectionChange 
}) => {
  return (
    <div className="fixed left-0 top-0 h-full w-72 bg-gray-50 border-r border-gray-200 overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Hyperspace</h1>
            <p className="text-sm text-gray-600">Documentation</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-1">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(index)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                index === currentSection
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{section.title}</span>
                {index === currentSection && (
                  <ChevronRight className="w-4 h-4" />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-3">
            Quick Links
          </h3>
          <div className="space-y-2">
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <FileText className="w-4 h-4" />
              Whitepaper
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <FileText className="w-4 h-4" />
              API Reference
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <FileText className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};