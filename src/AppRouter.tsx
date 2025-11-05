import React, { useState } from 'react';
import App from './App';
import DocsApp from './DocsApp';
import { FileText, Layout } from 'lucide-react';

function AppRouter() {
  const [showDocs, setShowDocs] = useState(false);

  if (showDocs) {
    return (
      <>
        {/* Style Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setShowDocs(false)}
            className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2"
          >
            <Layout className="w-4 h-4" />
            Modern Style
          </button>
        </div>
        <DocsApp />
      </>
    );
  }

  return (
    <>
      {/* Style Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setShowDocs(true)}
          className="bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm flex items-center gap-2"
        >
          <FileText className="w-4 h-4" />
          Docs Style
        </button>
      </div>
      <App />
    </>
  );
}

export default AppRouter;