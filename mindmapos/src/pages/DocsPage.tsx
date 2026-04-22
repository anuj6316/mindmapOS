import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'motion/react';
import Navbar from '../components/layout/Navbar';
import DocsNav from '../components/docs/DocsNav';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/docs/sections/HeroSection';
import ProblemSection from '../components/docs/sections/ProblemSection';
import HowItWorksSection from '../components/docs/sections/HowItWorksSection';
import GuardianLayerSection from '../components/docs/sections/GuardianLayerSection';
import ArchitectureSection from '../components/docs/sections/ArchitectureSection';
import EngineSection from '../components/docs/sections/EngineSection';
import AWSSection from '../components/docs/sections/AWSSection';
import SecurityBillingSection from '../components/docs/sections/SecurityBillingSection';
import TechnicalSpecsSection from '../components/docs/sections/TechnicalSpecsSection';
import PlatformRoadmapSection from '../components/docs/sections/PlatformRoadmapSection';
import MarketplaceSection from '../components/docs/sections/MarketplaceSection';
import SetupDemoSection from '../components/docs/sections/SetupDemoSection';
import BusinessModelSection from '../components/docs/sections/BusinessModelSection';
import ComparisonSection from '../components/docs/sections/ComparisonSection';

export default function DocsPage() {
  const location = useLocation();
  const [isCopied, setIsCopied] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle SEO Metadata
  useEffect(() => {
    document.title = "MindMapOS Documentation — Technical Overview";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explore the technical architecture, guardian layer, and platform roadmap of MindMapOS — The only OS that listens to you.");
    }
  }, []);

  // Handle hash scrolling on mount or location change
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans overflow-x-clip selection:bg-sky-100 selection:text-sky-900 pb-20 print:bg-white print:pb-0">
      
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sky-500 origin-left z-[100] print:hidden"
        style={{ scaleX }}
      />

      {/* Ambient Background Gradients (Glassmorphism blobs) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0 print:hidden" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-emerald-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0 print:hidden" />
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0 print:hidden" />

      {/* Navigation */}
      <Navbar showShare={true} onShare={copyUrl} isCopied={isCopied} />

      <div className="relative z-10 w-full px-4 sm:px-12 flex items-start gap-12 pt-32 print:p-0 print:block">
        {/* Sticky Desktop Navigation Wrapper */}
        <aside className="hidden lg:block w-64 shrink-0 sticky top-32 self-start print:hidden">
          <DocsNav />
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 pb-32 print:pb-0 print:w-full">
          <HeroSection />
          <ProblemSection />
          <HowItWorksSection />
          <GuardianLayerSection />
          <ArchitectureSection />
          <EngineSection />
          <AWSSection />
          <SecurityBillingSection />
          <TechnicalSpecsSection />
          <PlatformRoadmapSection />
          <MarketplaceSection />
          <SetupDemoSection />
          <BusinessModelSection />
          <ComparisonSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
