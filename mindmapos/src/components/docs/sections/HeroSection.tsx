import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Command, Laptop, ShieldCheck, FileJson, Cpu, Globe, Database, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '../shared/AnimatedCounter';

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-10 pb-24 overflow-hidden">
      <div className="w-full px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-[#00A651] text-[11px] font-bold tracking-wider uppercase mb-8 shadow-sm">
               <ShieldCheck size={14} className="text-[#00A651]" /> Technical Documentation
            </div>
            
            <h1 className="text-[52px] md:text-[68px] font-medium tracking-[-0.03em] text-slate-900 mb-6 leading-[1.05]">
              The Blueprint of <br /> <span className="text-sky-500">Universal Intent.</span>
            </h1>
            
            <p className="text-[18px] text-slate-500 mb-10 leading-[1.6] font-light max-w-lg">
              Explore the underlying architecture of MindMapOS — from the ReAct execution loop to the Guardian Layer security specs and AWS control plane.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <button 
                onClick={() => document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3.5 rounded-full bg-sky-500 text-white font-medium text-[15px] hover:bg-sky-600 transition-all shadow-sky-500/30 hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start Technical Tour <ArrowRight size={16} />
              </button>
              <button className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-[15px] hover:bg-slate-50 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                API Reference <FileJson size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-slate-100 pt-8">
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1 font-mono tracking-tighter">
                  v1.0.4
                </div>
                <div className="text-[13px] text-slate-500 font-light leading-tight">Stable Build</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  <AnimatedCounter value={14} />
                </div>
                <div className="text-[13px] text-slate-500 font-light leading-tight">System Layers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  <AnimatedCounter value={99.9} suffix="%" decimals={1} />
                </div>
                <div className="text-[13px] text-slate-500 font-light leading-tight">Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero UI Mockup (Architecture Dashboard) */}
          <div className="relative h-[550px] w-full mt-12 lg:mt-0 lg:ml-4 perspective-1000 hidden lg:block">
            {/* Main Architecture Panel */}
            <motion.div 
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateY: -5 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-white/80 overflow-hidden"
            >
              <div className="h-12 border-b border-slate-200/30 flex items-center px-6 gap-2 text-slate-400">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                <div className="ml-auto text-[10px] font-bold uppercase tracking-widest opacity-40">System Architecture Map</div>
              </div>
              
              <div className="p-0 flex h-full">
                 {/* Sidebar Mockup */}
                 <div className="w-48 border-r border-slate-200/20 bg-white/10 p-6 space-y-6">
                    <div className="space-y-3">
                       <div className="h-2 w-12 bg-slate-300/30 rounded-full" />
                       {[1,2,3,4].map(i => (
                         <div key={i} className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded bg-slate-200/50" />
                           <div className="h-1.5 w-full bg-slate-100/50 rounded-full" />
                         </div>
                       ))}
                    </div>
                    <div className="pt-8 space-y-3">
                       <div className="h-2 w-8 bg-sky-300/30 rounded-full" />
                       {[1,2].map(i => (
                         <div key={i} className="flex items-center gap-2">
                           <div className="w-3 h-3 rounded bg-sky-200/30" />
                           <div className="h-1.5 w-full bg-sky-100/30 rounded-full" />
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Main Content Mockup */}
                 <div className="flex-1 p-8">
                    <div className="flex items-center justify-between mb-10">
                       <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#1a1b26] text-white flex items-center justify-center shadow-lg"><Cpu size={20} /></div>
                          <div>
                             <div className="text-[13px] font-bold text-slate-900">Runtime Kernel</div>
                             <div className="text-[10px] text-emerald-500 font-mono">Process: Active</div>
                          </div>
                       </div>
                       <div className="flex gap-1">
                          {[1,2,3].map(i => <div key={i} className="w-1 h-4 bg-sky-500/20 rounded-full" />)}
                       </div>
                    </div>

                    <div className="space-y-4">
                       {/* Layered View */}
                       {[
                         { label: 'Guardian Layer', color: 'bg-teal-500', icon: <ShieldCheck size={12}/> },
                         { label: 'ReAct Engine', color: 'bg-sky-500', icon: <Activity size={12}/> },
                         { label: 'Native Bridge', color: 'bg-indigo-500', icon: <Command size={12}/> },
                       ].map((layer, i) => (
                         <div key={i} className="p-4 rounded-2xl bg-white/60 border border-white/80 shadow-sm flex items-center justify-between group hover:translate-x-1 transition-transform cursor-default">
                            <div className="flex items-center gap-3">
                               <div className={`w-6 h-6 rounded-lg ${layer.color} text-white flex items-center justify-center shadow-sm`}>
                                  {layer.icon}
                               </div>
                               <span className="text-[12px] font-medium text-slate-700">{layer.label}</span>
                            </div>
                            <div className="h-1 w-12 bg-slate-100 rounded-full overflow-hidden">
                               <div className={`h-full ${layer.color} w-3/4`} />
                            </div>
                         </div>
                       ))}
                    </div>

                    {/* Bottom Terminal-ish area */}
                    <div className="mt-8 p-4 rounded-xl bg-slate-900/5 border border-slate-900/10 font-mono text-[10px] text-slate-500 space-y-1">
                       <div>{">"} mTLS established (region: us-east-1)</div>
                       <div>{">"} fetching organization keys...</div>
                       <div className="text-sky-600 font-bold">{">"} system ready.</div>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Floating Technical Badges */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.8 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
              }}
              className="absolute top-12 right-[-30px] px-4 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center gap-3 z-20"
            >
               <Globe className="text-sky-500" size={16} />
               <span className="text-[12px] font-mono font-bold text-slate-700">AWS.mTLS</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
              transition={{ 
                opacity: { duration: 0.5, delay: 1 },
                y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 } 
              }}
              className="absolute bottom-20 left-[-50px] px-4 py-2.5 rounded-2xl bg-white border border-slate-100 shadow-xl flex items-center gap-3 z-20"
            >
               <Database className="text-emerald-500" size={16} />
               <span className="text-[12px] font-mono font-bold text-slate-700">SQLite.Local</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
