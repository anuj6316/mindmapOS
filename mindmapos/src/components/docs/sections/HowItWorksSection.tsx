import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { motion } from 'motion/react';
import { MessageSquare, FileText, CheckCircle2, RotateCcw, ArrowRight, Command } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    { 
      step: "01", 
      title: "Describe", 
      desc: "Type or speak your intent in plain English.",
      icon: <MessageSquare size={20} />,
      color: "bg-sky-500",
      ui: (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 w-full max-w-[280px]">
           <div className="flex gap-3 items-center mb-3">
             <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"><Command size={12} className="text-slate-400"/></div>
             <div className="h-2 w-20 bg-slate-100 rounded-full" />
           </div>
           <div className="space-y-2">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: "100%" }}
               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
               className="h-2.5 bg-sky-100 rounded-full" 
             />
             <div className="h-2.5 w-2/3 bg-slate-50 rounded-full" />
           </div>
        </div>
      )
    },
    { 
      step: "02", 
      title: "Review", 
      desc: "MindMapOS generates a step-by-step plan for your approval.",
      icon: <FileText size={20} />,
      color: "bg-indigo-500",
      ui: (
        <div className="bg-white rounded-2xl p-5 shadow-md border border-sky-100 w-full max-w-[280px]">
           <div className="flex items-center gap-2 mb-4">
             <CheckCircle2 size={14} className="text-sky-500" />
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Plan Generated</span>
           </div>
           <div className="space-y-3">
             {[1, 2, 3].map(i => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, x: -10 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.2 }}
                 className="flex gap-2 items-center"
               >
                 <div className="w-4 h-4 rounded-md bg-sky-50 text-sky-600 text-[9px] font-bold flex items-center justify-center">{i}</div>
                 <div className={`h-1.5 rounded-full bg-slate-100 ${i === 1 ? 'w-24' : i === 2 ? 'w-32' : 'w-16'}`} />
               </motion.div>
             ))}
           </div>
        </div>
      )
    },
    { 
      step: "03", 
      title: "Execute", 
      desc: "The Guardian Layer verifies safety and executes locally.",
      icon: <RotateCcw size={20} />,
      color: "bg-teal-500",
      ui: (
        <div className="bg-white rounded-2xl p-5 shadow-md border border-teal-100 w-full max-w-[280px] text-center">
           <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-3">
             <CheckCircle2 size={24} />
           </div>
           <div className="text-[12px] font-semibold text-slate-900 mb-1">Execution Done</div>
           <div className="text-[10px] text-slate-400 mb-4">12 files moved successfully</div>
           <button className="px-4 py-1.5 rounded-lg bg-slate-50 text-[10px] font-bold text-slate-600 border border-slate-100 flex items-center gap-1.5 mx-auto">
             <RotateCcw size={10} /> Revert Changes
           </button>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-24 border-b border-slate-100 overflow-hidden">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="02" label="How It Works" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Describe. Review. Execute.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-16">
            A secure, local-first cycle designed for absolute control and complete visibility.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {steps.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="group relative bg-white border border-slate-200/60 p-10 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center shadow-lg mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                  {item.icon}
                </div>
                
                <div className="mb-8">
                  <div className="text-4xl font-bold text-slate-100 mb-2 group-hover:text-slate-200 transition-colors leading-none">{item.step}</div>
                  <h4 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-[16px] font-light leading-relaxed text-slate-500">{item.desc}</p>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-center bg-slate-50/50 rounded-2xl p-6 min-h-[160px]">
                   {item.ui}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Phase 4.3: Animated Loop Cycle */}
        <ScrollReveal delay={0.4}>
          <div className="bg-[#1a1b26] rounded-[48px] p-8 md:p-12 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-md">
                   <h3 className="text-3xl font-semibold mb-6">The Request Lifecycle</h3>
                   <p className="text-slate-400 font-light leading-relaxed mb-8">
                     Unlike traditional LLM wrappers, MindMapOS processes every request through a rigid safety pipeline before touching your hardware.
                   </p>
                   <div className="flex items-center gap-4 text-sm font-medium text-sky-400 uppercase tracking-widest">
                      <Command size={18} /> Continuous Loop Enabled
                   </div>
                </div>

                <div className="flex-1 w-full max-w-2xl">
                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative">
                      {/* Animated Connector Line */}
                      <div className="absolute top-[30px] left-8 right-8 h-px bg-white/10 hidden sm:block" />
                      
                      {[
                        { label: 'Intent', color: 'bg-sky-500' },
                        { label: 'Plan', color: 'bg-indigo-500' },
                        { label: 'Guardian', color: 'bg-teal-500' },
                        { label: 'Result', color: 'bg-emerald-500' }
                      ].map((node, i) => (
                        <div key={i} className="text-center group">
                           <motion.div 
                             animate={{ 
                               scale: [1, 1.1, 1],
                               boxShadow: ["0 0 0px rgba(14, 165, 233, 0)", "0 0 20px rgba(14, 165, 233, 0.4)", "0 0 0px rgba(14, 165, 233, 0)"]
                             }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className={`w-14 h-14 rounded-full ${node.color} mx-auto mb-4 flex items-center justify-center shadow-lg relative z-10`}
                           >
                             <div className="w-2 h-2 bg-white rounded-full" />
                           </motion.div>
                           <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{node.label}</div>
                        </div>
                      ))}
                   </div>
                   
                   <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 font-mono text-xs text-slate-300">
                      <div className="flex gap-3 mb-2">
                        <span className="text-sky-400">INPUT:</span>
                        <span>"Setup dev environment for React"</span>
                      </div>
                      <div className="flex gap-3 mb-2">
                        <span className="text-indigo-400">PLAN:</span>
                        <span>[1] brew install node [2] npm install...</span>
                      </div>
                      <div className="flex gap-3">
                        <span className="text-teal-400">AUTH:</span>
                        <span className="text-emerald-400">AUTHORIZED_LOCALLY</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
