import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Command, Grip, FileText, Activity, ShoppingBag, ScrollText, ArrowRight, Menu, X, Share2, Check } from 'lucide-react';

interface NavbarProps {
  showShare?: boolean;
  onShare?: () => void;
  isCopied?: boolean;
}

export default function Navbar({ showShare, onShare, isCopied }: NavbarProps) {
  const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileNavOpen] = useState(false);
  const appsMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (appsMenuRef.current && !appsMenuRef.current.contains(event.target as Node)) {
        setIsAppsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'docs', label: 'Docs', path: '/docs' },
    { id: 'marketplace', label: 'Marketplace', path: '/marketplace' },
    { id: 'download', label: 'Download', path: '/download' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] w-full bg-[#F8FAFC]/30 backdrop-blur-sm border-b border-slate-200/50 print:hidden">
      <div className="relative pt-4 pb-4 px-4 sm:px-8 max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center relative z-[70]">
          <img src="/brand_logo.png" alt="MindMapOS" className="h-8 md:h-10 w-auto" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 text-[14px] font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || (link.path.startsWith('/#') && isHome);
            
            if (link.path.startsWith('/#')) {
              return (
                <a
                  key={link.id}
                  href={link.path}
                  className={`px-4 py-2 relative transition-all rounded-lg hover:text-slate-900 hover:bg-slate-50`}
                >
                  {link.label}
                </a>
              );
            }
            
            return (
              <Link
                key={link.id}
                to={link.path}
                className={`px-4 py-2 relative transition-all rounded-lg ${
                  location.pathname === link.path
                    ? 'text-sky-700 bg-sky-50/50'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-3/4 h-[2.5px] bg-sky-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4 relative z-[70]">
          {showShare && (
             <button 
                onClick={onShare}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[13px] font-medium text-slate-600 hover:bg-slate-50 transition-all active:scale-95"
              >
                {isCopied ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
                {isCopied ? 'Copied!' : 'Share'}
              </button>
          )}

          <div className="hidden sm:flex items-center gap-4 border-r border-slate-200 pr-4 mr-2">
             <Link to="/app" className="px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-sky-500/30 shadow-md hover:-translate-y-0.5">
              Open App
            </Link>
          </div>

          {/* App Launcher */}
          <div className="relative" ref={appsMenuRef}>
            <button
              onClick={() => setIsAppsMenuOpen(!isAppsMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isAppsMenuOpen ? 'bg-slate-200 text-slate-800' : 'hover:bg-slate-200/50 text-slate-700'}`}
              aria-label="App Launcher"
            >
              <Grip size={24} />
            </button>

            <AnimatePresence>
              {isAppsMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-14 right-0 w-[320px] sm:w-[380px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 z-[70]"
                >
                  <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-50">
                    <img src="/brand_logo.png" alt="MindMapOS" className="h-4 w-auto" />
                    <Link to="/app" className="text-sky-600 text-[13px] hover:text-sky-700 font-medium flex items-center gap-1">
                      Go to App <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-5">
                    <Link to="/docs" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform"><FileText size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Technical Docs</span>
                    </Link>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform"><Activity size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Orchestrator Agent</span>
                    </a>
                    <Link to="/marketplace" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform"><ShoppingBag size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Marketplace</span>
                    </Link>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform"><ScrollText size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Audit logs</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <a href="#" className="text-sky-600 text-[14px] hover:text-sky-700 font-medium flex items-center gap-1 w-max">
                      All Apps <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileNavOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  onClick={() => setIsMobileNavOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-600 font-medium hover:bg-sky-50 hover:text-sky-600 transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-50 space-y-2">
                <Link 
                  to="/app" 
                  className="w-full py-3 rounded-xl bg-sky-500 text-white font-bold flex items-center justify-center"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  Open App
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
