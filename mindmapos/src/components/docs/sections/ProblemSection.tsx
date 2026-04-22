import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Terminal, MessageSquare, ArrowRight, XCircle, CheckCircle2, Command } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="01" label="The Problem" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Computers should work for us, <br /> not the other way around.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            Managing a modern operating system is still too manual, too complex, and too disconnected from our intent.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { title: "Manual Overhead", desc: "Hours spent on environment setup and configuration." },
            { title: "Technical Barrier", desc: "Complexity prevents non-technical users from full control." },
            { title: "No Audit Trail", desc: "Lack of transparency in automated system changes." },
            { title: "Context Switching", desc: "Machine management constantly interrupts actual work." }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-white border border-slate-200/60 p-8 rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 h-full">
                <h4 className="text-xl font-medium tracking-tight mb-3 text-slate-900">{item.title}</h4>
                <p className="text-[15px] font-light leading-relaxed text-slate-500">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Phase 3.3: Before/After Comparison */}
        <ScrollReveal delay={0.4}>
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50/50 rounded-[48px] p-8 md:p-12 border border-slate-100">
            {/* Left: Traditional Way */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                 <div className="px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-[10px] font-bold uppercase tracking-widest border border-rose-100">The Hard Way</div>
                 <h3 className="text-2xl font-semibold text-slate-900">Manual Commands</h3>
              </div>
              <div className="bg-[#1a1b26] rounded-[32px] p-6 shadow-2xl relative overflow-hidden group">
                 <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                   <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                   <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                   <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                   <span className="text-[11px] text-slate-500 font-mono ml-2">bash — 80x24</span>
                 </div>
                 <div className="font-mono text-sm space-y-2">
                    <div className="flex gap-2">
                      <span className="text-emerald-400">user@host:~$</span>
                      <span className="text-white">mkdir -p projects/work/assets</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-emerald-400">user@host:~$</span>
                      <span className="text-white">cd projects/work/assets</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-emerald-400">user@host:~$</span>
                      <span className="text-white">find ~/Downloads -name "*.jpg" -exec mv {} . \;</span>
                    </div>
                    <div className="text-rose-400 opacity-70 italic mt-4 text-xs">// 10 minutes later: "Where did that one file go?"</div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-rose-500/5 to-transparent pointer-events-none" />
              </div>
              <p className="text-slate-500 font-light text-[15px] pl-2">
                Requires syntax knowledge, specific paths, and provides zero safety net for mistakes.
              </p>
            </div>

            {/* Middle Icon */}
            <div className="hidden lg:flex items-center justify-center">
               <div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400">
                  <ArrowRight size={20} />
               </div>
            </div>

            {/* Right: MindMapOS Way */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                 <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest border border-emerald-100">The MindMap Way</div>
                 <h3 className="text-2xl font-semibold text-slate-900">Conversational Intent</h3>
              </div>
              <div className="bg-white rounded-[32px] p-6 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group">
                 <div className="flex items-center gap-3 mb-6">
                   <div className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/20">
                     <Command size={18} />
                   </div>
                   <div>
                     <div className="text-[13px] font-semibold text-slate-900 leading-none">MindMapOS</div>
                     <div className="text-[11px] text-emerald-500 font-medium">Listening...</div>
                   </div>
                 </div>
                 <div className="space-y-4">
                    <div className="bg-slate-50 rounded-2xl rounded-tr-none p-4 text-[14px] text-slate-600 italic border border-slate-100/50">
                      "Move all my photos from Downloads to my project assets folder."
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600 text-[13px] font-medium bg-emerald-50/50 w-max px-3 py-1 rounded-full border border-emerald-100">
                      <CheckCircle2 size={14} /> Plan Generated Successfully
                    </div>
                 </div>
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Command size={80} />
                 </div>
              </div>
              <p className="text-slate-500 font-light text-[15px] pl-2">
                MindMapOS handles the complexity. You provide the intent, we provide the execution.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
