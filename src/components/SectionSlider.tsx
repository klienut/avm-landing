import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './Sidebar';

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

interface SectionSliderProps {
  sections: Section[];
}

interface CurrentPage {
  sectionIndex: number;
  subsectionIndex?: number;
}

export const SectionSlider: React.FC<SectionSliderProps> = ({ sections }) => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>({ sectionIndex: 0 });
  
  // Add scroll-based highlighting for all sections with subsections
  useEffect(() => {
    const currentSection = sections[currentPage.sectionIndex];
    if (!currentSection?.subsections) {
      return; // No subsections to track
    }

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Highlight when section is in the middle portion
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (currentSection?.subsections) {
            const subsectionIndex = currentSection.subsections.findIndex(sub => sub.id === sectionId);
            if (subsectionIndex !== -1) {
              setCurrentPage(prev => ({
                ...prev,
                subsectionIndex: subsectionIndex
              }));
            }
          }
        }
      });
    }, observerOptions);

    // Observe all subsection IDs for the current section
    if (currentSection.subsections) {
      currentSection.subsections.forEach(subsection => {
        const element = document.getElementById(subsection.id);
        if (element) {
          observer.observe(element);
        }
      });
    }

    return () => observer.disconnect();
  }, [currentPage.sectionIndex, sections]);

  // Flatten all sections and subsections for navigation
  const flattenedPages = sections.reduce((acc: Array<{section: number, subsection?: number, title: string, component: React.ReactNode}>, section, sectionIndex) => {
    // Always add the main section component if it exists
    if (section.component) {
      acc.push({
        section: sectionIndex,
        title: section.title,
        component: section.component
      });
    }
    
    // Then add subsections if they exist
    if (section.subsections) {
      section.subsections.forEach((subsection, subsectionIndex) => {
        acc.push({
          section: sectionIndex,
          subsection: subsectionIndex,
          title: subsection.title,
          component: subsection.component
        });
      });
    }
    return acc;
  }, []);

  const currentPageIndex = flattenedPages.findIndex(page => 
    page.section === currentPage.sectionIndex && 
    page.subsection === currentPage.subsectionIndex
  );

  const nextPage = () => {
    const nextIndex = (currentPageIndex + 1) % flattenedPages.length;
    const nextPage = flattenedPages[nextIndex];
    setCurrentPage({
      sectionIndex: nextPage.section,
      subsectionIndex: nextPage.subsection
    });
  };

  const prevPage = () => {
    const prevIndex = (currentPageIndex - 1 + flattenedPages.length) % flattenedPages.length;
    const prevPage = flattenedPages[prevIndex];
    setCurrentPage({
      sectionIndex: prevPage.section,
      subsectionIndex: prevPage.subsection
    });
  };

  const goToPage = (sectionIndex: number, subsectionIndex?: number) => {
    const section = sections[sectionIndex];
    const currentSection = sections[currentPage.sectionIndex];
    
    // If we're navigating to a subsection within the same section (like Agent Protocol Suite),
    // scroll to the specific section instead of changing page
    if (currentPage.sectionIndex === sectionIndex && 
        subsectionIndex !== undefined && 
        section.subsections && 
        currentSection.subsections) {
      
      const subsectionId = section.subsections[subsectionIndex]?.id;
      if (subsectionId) {
        // Update the URL hash and scroll to the section
        window.location.hash = subsectionId;
        const element = document.getElementById(subsectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Update current page to highlight the correct subsection in sidebar
        setCurrentPage({ sectionIndex, subsectionIndex });
        return;
      }
    }
    
    // Default behavior for different sections
    setCurrentPage({ sectionIndex, subsectionIndex });
  };

  const getCurrentComponent = () => {
    const section = sections[currentPage.sectionIndex];
    if (currentPage.subsectionIndex !== undefined && section.subsections) {
      return section.subsections[currentPage.subsectionIndex]?.component;
    }
    return section?.component;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Left Sidebar */}
      <Sidebar
        sections={sections}
        currentPage={currentPage}
        onPageChange={goToPage}
      />

      {/* Section Content with left margin to account for sidebar */}
      <div className="ml-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage.sectionIndex}-${currentPage.subsectionIndex}`}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="min-h-screen relative"
          >
            {getCurrentComponent()}
            
            {/* Next Button */}
            {currentPageIndex < flattenedPages.length - 1 && (
              <div className="fixed bottom-8 right-8">
                <button
                  onClick={nextPage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-colors flex items-center gap-2"
                >
                  Next: {flattenedPages[currentPageIndex + 1]?.title}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};