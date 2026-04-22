import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { motion } from 'motion/react';
import { Cpu, Play, Pause, AlertCircle, Settings, ShieldCheck, Zap, Repeat, Search, MousePointer2, MessageSquare, Terminal, Globe, ArrowRight } from 'lucide-react';

export default function EngineSection() {
  const lifecycleStates = [
    { state: "INSTALLED", color: "bg-slate-100 text-slate-600", desc: "Agent package verified by SHA-256 and unpacked." },
    { state: "CONFIGURED", color: "bg-indigo-50 text-indigo-600", desc: "User credentials and tool permissions granted." },
    { state: "IDLE", color: "bg-sky-50 text-sky-600", desc: "Active in memory, watching for triggers (cron/webhook)." },
    { state: "RUNNING", color: "bg-emerald-50 text-emerald-600", desc: "LLM context active, tools executing plan.", active: true },
    { state: "QUEUED", color: "bg-amber-50 text-amber-600", desc: "Max concurrency reached, waiting for system resources." },
    { state: "ERROR", color: "bg-rose-50 text-rose-600", desc: "Halted on exception. Retry policy (3x) in effect." },
    { state: "PAUSED", color: "bg-slate-200 text-slate-500", desc: "User manually paused state — preserved with zero resource usage." },
  ];

  const permissions = [
    { perm: "filesystem:read", scope: "Read-only access to ~/Documents", color: "text-sky-500" },
    { perm: "filesystem:write", scope: "Write access to declared output folders", color: "text-amber-500" },
    { perm: "network:http", scope: "Allowlisted API domains only", color: "text-emerald-500" },
    { perm: "keychain:access", scope: "Encrypted named secret retrieval", color: "text-purple-500" },
    { perm: "process:spawn", scope: "Execution of approved binary aliases", color: "text-rose-500" },
  ];

  return (
    <section id="engine" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-12">
        <ScrollReveal>
          <SectionLabel number="05" label="Automation Engine" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            The ReAct Runtime Loop.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-16">
            MindMapOS agents don't just "talk"—they think, act, and observe their environment in a rigid, secure execution cycle.
          </p>
        </ScrollReveal>

        {/* ReAct Loop Visual */}
        <div className="mb-24">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
              {/* Connector Lines */}
              <div className="absolute top-[40px] left-12 right-12 h-px bg-slate-100 hidden md:block" />
              
              {[
                { label: 'TRIGGER', sub: 'Cron, Webhook, File', icon: <Play size={20} />, color: 'bg-amber-500' },
                { label: 'THINK', sub: 'Aria Context Analysis', icon: <MessageSquare size={20} />, color: 'bg-sky-500' },
                { label: 'ACT', sub: 'Tool & OS Execution', icon: <Terminal size={20} />, color: 'bg-emerald-500' },
                { label: 'OBSERVE', sub: 'Output Validation', icon: <Search size={20} />, color: 'bg-purple-500' }
              ].map((step, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center group relative z-10">
                     <div className={`w-20 h-20 rounded-3xl ${step.color} text-white mx-auto mb-6 flex items-center justify-center shadow-xl shadow-sky-500/10 transition-transform group-hover:scale-110`}>
                        {step.icon}
                     </div>
                     <div className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-2">{step.label}</div>
                     <div className="text-[13px] text-slate-400 font-light">{step.sub}</div>
                  </div>
                </ScrollReveal>
              ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Agent Lifecycle States */}
          <ScrollReveal direction="right">
             <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-3">
                   <Repeat className="text-sky-500" size={24} />
                   Agent Lifecycle
                </h3>
                <div className="grid gap-3">
                   {lifecycleStates.map((s) => (
                     <div key={s.state} className="p-4 bg-white border border-slate-100 rounded-2xl flex items-start gap-4 hover:shadow-md transition-shadow group">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider ${s.color} min-w-[90px] text-center`}>
                           {s.state}
                        </span>
                        <p className="text-[13px] text-slate-500 font-light leading-snug">{s.desc}</p>
                        {s.active && <div className="ml-auto w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />}
                     </div>
                   ))}
                </div>
             </div>
          </ScrollReveal>

          {/* Tool Permission System */}
          <ScrollReveal direction="left">
             <div className="bg-[#1a1b26] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                   <ShieldCheck className="text-emerald-400" size={24} />
                   Sandbox Permissions
                </h3>
                <div className="space-y-6">
                   {permissions.map((p) => (
                     <div key={p.perm} className="border-b border-white/5 pb-4 last:border-0">
                        <div className={`font-mono text-sm mb-1 ${p.color}`}>{p.perm}</div>
                        <div className="text-[13px] text-slate-400 font-light">{p.scope}</div>
                     </div>
                   ))}
                </div>
                <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-400 italic font-light">
                   * Permissions are declared in the agent's manifest.json and enforced by the OS-level kernel hooks.
                </div>
             </div>
          </ScrollReveal>
        </div>

        {/* Phase Completion: LLM Router Decision Flow */}
        <ScrollReveal delay={0.2}>
          <div className="bg-slate-50 border border-slate-100 rounded-[48px] p-10 md:p-16 overflow-hidden">
             <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
                <div className="max-w-xl">
                   <h3 className="text-3xl font-semibold text-slate-900 mb-6">Hybrid LLM Routing</h3>
                   <p className="text-slate-500 font-light leading-relaxed">
                      MindMapOS intelligently chooses between local on-device models and cloud providers based on task complexity, cost thresholds, and privacy requirements.
                   </p>
                </div>
                <div className="flex-1 w-full bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                   <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Decision Engine Rules</div>
                   <div className="space-y-3">
                      {['Privacy mode: Force Local-only', 'Cost Threshold: Max $0.05 per task', 'Latency SLA: < 2.5s response time', 'Model capability matching'].map(rule => (
                        <div key={rule} className="flex items-center gap-3 text-[13px] text-slate-600 font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                           {rule}
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Router Flow Diagram */}
             <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="px-6 py-4 rounded-2xl bg-white border border-slate-100 shadow-sm text-[13px] font-bold text-slate-700">Agent triggers</div>
                <ArrowRight size={20} className="text-slate-300 hidden md:block" />
                <div className="px-6 py-4 rounded-2xl bg-sky-50 border border-sky-100 shadow-sm text-[13px] font-bold text-sky-700">Check: Local Model?</div>
                <ArrowRight size={20} className="text-slate-300 hidden md:block" />
                <div className="flex flex-col gap-2">
                   <div className="px-6 py-4 rounded-2xl bg-emerald-50 border border-emerald-100 shadow-sm text-[13px] font-bold text-emerald-700">YES → Aria Local (Free)</div>
                   <div className="px-6 py-4 rounded-2xl bg-amber-50 border border-amber-100 shadow-sm text-[13px] font-bold text-amber-700">NO → Cloud Gateway</div>
                </div>
                <ArrowRight size={20} className="text-slate-300 hidden md:block" />
                <div className="px-6 py-4 rounded-2xl bg-purple-50 border border-purple-100 shadow-sm text-[13px] font-bold text-purple-700 uppercase">Token logged to AWS Meter</div>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mt-16">
                <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-3 mb-6">
                      <Zap className="text-sky-500" size={20} />
                      <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Supported Local Models</h4>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {['Llama 3 (8B/70B)', 'Mistral 7B', 'Qwen 2.5 Coder', 'Phi-3 Mini', 'Custom GGUF'].map(m => (
                        <span key={m} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[12px] text-slate-600 font-medium">{m}</span>
                      ))}
                   </div>
                </div>
                <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm">
                   <div className="flex items-center gap-3 mb-6">
                      <Globe className="text-purple-500" size={20} />
                      <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Cloud Integrations</h4>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {['OpenAI (GPT-4o)', 'Anthropic (Claude)', 'Google Gemini', 'Groq (Fast)', 'Azure OpenAI'].map(m => (
                        <span key={m} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[12px] text-slate-600 font-medium">{m}</span>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
