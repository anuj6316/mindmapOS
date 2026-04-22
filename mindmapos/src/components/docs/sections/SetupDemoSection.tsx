import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Play, ShieldCheck, Zap, Undo2, MessageSquare, User, Bot, Command, ArrowRight } from 'lucide-react';

const DEMO_STEPS = [
  { id: 'setup', title: '01. Zero-Config Setup', icon: <Zap size={18} /> },
  { id: 'chat', title: '02. Conversational Intent', icon: <MessageSquare size={18} /> },
  { id: 'guardian', title: '03. Guardian Safety', icon: <ShieldCheck size={18} /> }
];

export default function SetupDemoSection() {
  const [activeStep, setActiveStep] = useState('setup');

  return (
    <section id="setup-demo" className="py-24 border-b border-slate-100 bg-slate-50/30">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel number="11" label="Live Product Demo" />
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
              See it in action. <br /> No mockups, real flow.
            </h2>
            <p className="text-slate-500 text-[18px] font-light max-w-2xl mx-auto">
              Experience how MindMapOS handles requests, validates safety, and executes locally.
            </p>
          </div>
        </ScrollReveal>

        {/* Demo Controller */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {DEMO_STEPS.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                activeStep === step.id
                  ? 'bg-[#1a1b26] text-white shadow-lg -translate-y-1'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {step.icon} {step.title}
            </button>
          ))}
        </div>

        {/* Device Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Mac-style Window Frame */}
          <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
            {/* Window Controls */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
              </div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Command size={12} /> MindMapOS — Runtime v1.0.4
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Mockup Content */}
            <div className="aspect-[16/9] bg-[#F8FAFC] relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeStep === 'setup' && (
                  <motion.div
                    key="setup"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 md:p-12 h-full flex flex-col md:flex-row items-center gap-12"
                  >
                    <div className="max-w-md w-full text-center md:text-left">
                       <div className="w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-xl shadow-sky-500/20">
                         <Zap size={32} />
                       </div>
                       <h3 className="text-2xl font-semibold text-slate-900 mb-2">Initialize Runtime</h3>
                       <p className="text-slate-500 font-light mb-8">Scanning local environment for models and shell interfaces...</p>
                       <div className="space-y-3">
                         <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }} 
                             animate={{ width: "100%" }} 
                             transition={{ duration: 2 }} 
                             className="h-full bg-sky-500" 
                           />
                         </div>
                         <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                           <span>Aria 9B Model Found</span>
                           <span>100% complete</span>
                         </div>
                       </div>
                    </div>
                    {/* Under the Hood */}
                    <div className="hidden md:block flex-1 bg-[#1a1b26] rounded-3xl p-6 shadow-2xl border border-white/5">
                       <div className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.2em] mb-4">Under the Hood</div>
                       <div className="space-y-2 font-mono text-[11px] text-slate-400">
                          <div className="flex gap-2"><span className="text-emerald-400">$</span> <span>mindmapos-daemon --init</span></div>
                          <div className="text-slate-500">→ SQLite: CREATE TABLE agents, settings</div>
                          <div className="flex gap-2"><span className="text-emerald-400">$</span> <span>ollama pull aria:9b</span></div>
                          <div className="text-slate-500">→ Verifying model fingerprint...</div>
                          <div className="text-emerald-400 pt-2 tracking-widest">READY: localhost:7700</div>
                       </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 'chat' && (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col md:flex-row"
                  >
                    <div className="flex-1 flex flex-col border-r border-slate-100">
                      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                        <div className="flex gap-4 max-w-lg">
                          <div className="w-9 h-9 rounded-xl bg-[#1a1b26] text-white flex items-center justify-center shrink-0">
                            <User size={18} />
                          </div>
                          <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 leading-relaxed">
                            Can you organize my Desktop? Move all screenshots to a new folder called "ScreenCaps".
                          </div>
                        </div>

                        <div className="flex gap-4 max-w-lg ml-auto flex-row-reverse">
                          <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 text-slate-700">
                            <Bot size={18} />
                          </div>
                          <div className="bg-sky-50 p-4 rounded-2xl rounded-tr-none border border-sky-100 shadow-sm text-sm text-slate-700 leading-relaxed">
                            <div className="font-bold text-sky-800 mb-2 flex items-center gap-2">
                              <Command size={14} /> Plan Generated
                            </div>
                            <ol className="list-decimal list-inside space-y-1 opacity-80 mb-3">
                              <li>Create ~/Desktop/ScreenCaps</li>
                              <li>Find *.png in ~/Desktop</li>
                              <li>Move files to ScreenCaps</li>
                            </ol>
                            <button className="px-4 py-2 rounded-lg bg-sky-500 text-white font-bold text-[11px] uppercase tracking-wider">
                              Execute Plan
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 border-t border-slate-100 bg-white">
                        <div className="h-10 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 flex items-center text-slate-400 text-sm italic">
                          Type a command...
                        </div>
                      </div>
                    </div>
                    {/* Under the Hood */}
                    <div className="hidden md:block w-72 bg-[#1a1b26] p-8">
                       <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-6">ReAct Agent Loop</div>
                       <div className="space-y-6">
                          {[
                            { label: "TRIGGER", status: "Input detected" },
                            { label: "THINK", status: "Context retrieved" },
                            { label: "ACT", status: "Drafting script" },
                            { label: "OBSERVE", status: "Waiting for AUTH" },
                          ].map((step, i) => (
                            <div key={i} className="flex flex-col gap-1">
                               <div className="text-[10px] font-bold text-slate-500 uppercase">{step.label}</div>
                               <div className="text-[12px] text-slate-300 font-mono">{step.status}</div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 'guardian' && (
                  <motion.div
                    key="guardian"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex items-center justify-center p-8 bg-[#1a1b26] relative"
                  >
                    <div className="max-w-md w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] text-center relative z-10">
                       <div className="w-16 h-16 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center mx-auto mb-6">
                         <ShieldCheck size={32} />
                       </div>
                       <h3 className="text-xl font-semibold text-white mb-2 uppercase tracking-wider">Guardian Intervention</h3>
                       <div className="text-rose-400 font-mono text-xs mb-6">CRITICAL RISK DETECTED</div>
                       <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-4 text-left mb-8">
                         <div className="text-rose-200 text-xs font-bold uppercase mb-2">Intent Analysis</div>
                         <p className="text-rose-100/70 text-sm italic">"rm -rf /" is a destructive system-wide command and is permanently blocked by default policy.</p>
                       </div>
                       <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors">
                         View Security Logs
                       </button>
                    </div>

                    {/* Under the Hood */}
                    <div className="hidden lg:block absolute right-12 top-12 w-64 bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-[11px] text-rose-300">
                       <div className="text-slate-500 mb-4">// Guardian Policy Check</div>
                       <div className="flex gap-2"><span>[FAIL]</span> <span>root_access_block</span></div>
                       <div className="flex gap-2"><span>[FAIL]</span> <span>recursive_deletion</span></div>
                       <div className="flex gap-2"><span>[OK]</span> <span>ast_validation</span></div>
                       <div className="text-white mt-4 tracking-tighter">SIG_BLOCK_ENFORCED: KERNEL_LEVEL</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Phase 9.3: Try It Now CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 bg-[#1a1b26] rounded-[48px] p-8 md:p-16 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">Experience the future of computing.</h3>
              <p className="text-slate-400 font-light max-w-xl mx-auto mb-10 text-lg">
                Setup takes less than 2 minutes. No credit card, no complex installation. Just your intent and your machine.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button 
                   onClick={() => window.location.href = '/setup'}
                   className="w-full sm:w-auto px-10 py-4 rounded-full bg-sky-500 text-white font-bold hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/20 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                 >
                   Start Your Setup <ArrowRight size={18} />
                 </button>
                 <button 
                   onClick={() => window.location.href = '/app'}
                   className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all"
                 >
                   Open Chat App
                 </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
