import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Terminal, Smartphone, Monitor, CheckCircle2, Clock, Calendar } from 'lucide-react';

const PHASES = [
  {
    id: 'phase1',
    phase: 'Phase 1',
    date: 'April 2026',
    title: 'Linux Foundation',
    status: 'Live',
    statusColor: 'text-emerald-500 bg-emerald-50',
    icon: <Terminal className="text-emerald-500" />,
    platforms: ['Ubuntu', 'Fedora', 'Debian', 'Arch'],
    features: ['Local LLM Integration', 'Native Shell Execution', 'AST Guardian Layer', 'localhost:7800 UI']
  },
  {
    id: 'phase2',
    phase: 'Phase 2',
    date: 'Q3 2026',
    title: 'Mobile & iOS',
    status: 'In Development',
    statusColor: 'text-amber-500 bg-amber-50',
    icon: <Smartphone className="text-amber-500" />,
    platforms: ['Android 14+', 'iOS 17+', 'iPadOS'],
    features: ['Mobile Voice Intent', 'Sandbox Automation', 'Cross-device Sync', 'Agent Marketplace']
  },
  {
    id: 'phase3',
    phase: 'Phase 3',
    date: 'Q1 2027',
    title: 'Desktop Expansion',
    status: 'Planned',
    statusColor: 'text-slate-400 bg-slate-50',
    icon: <Monitor className="text-slate-400" />,
    platforms: ['Windows 11', 'macOS Sonoma+', 'WSL2'],
    features: ['PowerShell Integration', 'AppleScript Support', 'Enterprise Guardian', 'Multi-user Orchestration']
  }
];

export default function PlatformRoadmapSection() {
  const [activePhase, setActivePhase] = useState(PHASES[0]);

  return (
    <section id="platform-roadmap" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="09" label="Platform Roadmap" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            The path to <br /> universal intelligence.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-16">
            Our multi-phase execution plan to bring MindMapOS to every device you own.
          </p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="absolute top-[40px] left-0 right-0 h-0.5 bg-slate-100 hidden md:block" />
          
          {/* Phase Nodes */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10 mb-16">
            {PHASES.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase)}
                className="group text-left focus:outline-none"
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 border-4 ${
                  activePhase.id === phase.id
                    ? 'bg-white border-sky-500 shadow-xl scale-110'
                    : 'bg-slate-50 border-white hover:border-slate-200'
                }`}>
                  {React.cloneElement(phase.icon as any, { size: 32 })}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400">{phase.phase}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-tighter ${phase.statusColor}`}>
                      {phase.status}
                    </span>
                  </div>
                  <h4 className={`text-xl font-semibold transition-colors ${
                    activePhase.id === phase.id ? 'text-sky-600' : 'text-slate-900'
                  }`}>
                    {phase.title}
                  </h4>
                  <p className="text-sm text-slate-500">{phase.date}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Phase Details Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-100 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]"
            >
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-3">
                    <Calendar className="text-sky-500" size={24} />
                    {activePhase.title} Details
                  </h3>
                  <div className="space-y-4">
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Target Platforms</div>
                    <div className="flex flex-wrap gap-2">
                      {activePhase.platforms.map((p) => (
                        <span key={p} className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-medium">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Key Features</div>
                  <div className="space-y-4">
                    {activePhase.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className={activePhase.status === 'Live' ? 'text-emerald-500' : 'text-sky-500'} />
                        <span className="text-slate-600 font-light text-[15px]">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {activePhase.status !== 'Live' && (
                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Get Notified</div>
                      <div className="text-sm text-slate-500">Join the waitlist for {activePhase.title} release.</div>
                    </div>
                  </div>
                  <button className="px-8 py-3 rounded-full bg-[#1a1b26] text-white text-sm font-medium hover:bg-slate-800 transition-all hover:-translate-y-0.5">
                    Join Waitlist
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Phase 7.3: Platform Availability Grid */}
        <ScrollReveal delay={0.2}>
          <div className="mt-24">
            <div className="text-center mb-12">
               <h3 className="text-2xl font-semibold text-slate-900 mb-4">Availability Matrix</h3>
               <p className="text-slate-500 font-light">Current status of MindMapOS across all major ecosystems.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'Linux', icon: <Terminal size={20} />, status: 'Live', color: 'bg-emerald-500' },
                { name: 'macOS', icon: <Monitor size={20} />, status: 'Phase 3', color: 'bg-slate-300' },
                { name: 'Windows', icon: <Monitor size={20} />, status: 'Phase 3', color: 'bg-slate-300' },
                { name: 'Android', icon: <Smartphone size={20} />, status: 'Phase 2', color: 'bg-amber-400' },
                { name: 'iOS', icon: <Smartphone size={20} />, status: 'Phase 2', color: 'bg-amber-400' },
              ].map((p, i) => (
                <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all group">
                   <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-4 group-hover:scale-110 transition-transform">
                      {p.icon}
                   </div>
                   <div className="font-semibold text-slate-900 mb-1">{p.name}</div>
                   <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.color} ${p.status === 'Live' ? 'animate-pulse' : ''}`} />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.status}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
