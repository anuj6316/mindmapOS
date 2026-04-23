import React from 'react';
import { Search, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface MarketplaceHeroProps {
  search: string;
  onSearchChange: (value: string) => void;
  onJumpToMyAgents?: () => void;
}

export default function MarketplaceHero({ search, onSearchChange, onJumpToMyAgents }: MarketplaceHeroProps) {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-8 text-center max-w-4xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sky-700 text-[11px] font-bold tracking-widest uppercase shadow-sm mb-8"
      >
        The MindMapOS Marketplace
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-tight"
      >
        Extend what your devices can do.
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-[17px] font-light leading-relaxed text-slate-600 mb-12 max-w-2xl mx-auto"
      >
        Models. Agents. Orchestrations. Bundles.<br/>
        Everything built and vetted for MindMapOS —<br/>
        install anything in one click, straight into your agent.
      </motion.p>

      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative max-w-xl mx-auto mb-10"
      >
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input 
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search the marketplace..."
          className="w-full pl-12 pr-6 py-4 rounded-full bg-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 transition-all text-[15px] placeholder:text-slate-400"
        />
      </motion.div>

      {onJumpToMyAgents && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          onClick={onJumpToMyAgents}
          className="mb-10 rounded-full bg-slate-900 px-5 py-2.5 text-[12px] font-semibold tracking-wide text-white transition-colors hover:bg-sky-600"
        >
          Open My Agents Workspace
        </motion.button>
      )}

      {/* Trust Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex items-center justify-center gap-2 text-[13px] text-slate-500 font-medium"
      >
        <ShieldCheck className="h-4 w-4 text-teal-600" />
        <span>Everything on the Marketplace is Guardian-Layer compatible. Nothing bypasses your safety settings. Ever.</span>
      </motion.div>
    </div>
  );
}
