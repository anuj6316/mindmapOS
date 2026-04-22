import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Cpu, Terminal, Layers, Box, CheckCircle2, AlertCircle, Apple, Monitor, Smartphone, Zap } from 'lucide-react';

export default function TechnicalSpecsSection() {
  const installSteps = [
    {
      os: "Windows",
      icon: <Monitor size={20} />,
      steps: ["UAC elevated install to C:\\Program Files\\MindMapOS\\", "Bundles Node.js, Python, Ollama, SQLite", "Registers mindmapos-daemon service", "Sent to AWS Cognito for license binding"],
      cmd: "winget install MindMapOS.MindMapOS"
    },
    {
      os: "macOS",
      icon: <Apple size={20} />,
      steps: ["Signed & Notarized .dmg installation", "LaunchAgent registered at ~/Library/LaunchAgents", "Keychain used for secure API key storage", "Homebrew tap available for headless mode"],
      cmd: "brew install --cask mindmapos"
    },
    {
      os: "Linux",
      icon: <Terminal size={20} />,
      steps: ["Debian/Ubuntu (.deb) and RHEL/Fedora (.rpm)", "Systemd service enabled + started automatically", "Headless server mode: pure daemon + REST API", "Secrets stored via libsecret / Secret Service"],
      cmd: "curl -fsSL https://get.mindmapos.io | bash"
    }
  ];

  return (
    <section id="technical-specs" className="py-24 border-b border-slate-100 bg-slate-50/20">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="08" label="Technical Specifications" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Deep dive into the <br /> MindMapOS core.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            OS-native integration, isolated runtimes, and local-first LLM routing.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Runtime Process Tree */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="bg-[#1a1b26] rounded-[32px] p-8 md:p-12 text-white shadow-2xl overflow-hidden relative">
                <div className="flex items-center gap-3 mb-8">
                  <Layers className="text-sky-400" />
                  <h3 className="text-xl font-semibold tracking-tight">Runtime Process Tree</h3>
                </div>
                <div className="font-mono text-[13px] leading-relaxed space-y-2 opacity-90">
                  <div className="text-sky-400">mindmapos-daemon (PID 1234)</div>
                  <div className="pl-4 text-emerald-400">├── agent-scheduler</div>
                  <div className="pl-8 text-slate-400">│   ├── email-bot [RUNNING]</div>
                  <div className="pl-8 text-slate-400">│   └── hr-agent [QUEUED]</div>
                  <div className="pl-4 text-emerald-400">├── llm-router</div>
                  <div className="pl-8 text-slate-400">│   ├── ollama:aria-9b</div>
                  <div className="pl-8 text-slate-500">│   └── cloud-fallback (OpenAI)</div>
                  <div className="pl-4 text-emerald-400">├── tool-sandbox</div>
                  <div className="pl-8 text-slate-400">│   ├── file-system (read-only)</div>
                  <div className="pl-8 text-slate-400">│   └── api-caller</div>
                  <div className="pl-4 text-purple-400">└── aws-sync-worker</div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                  {['Installed', 'Configured', 'Idle', 'Running', 'Error'].map(state => (
                    <span key={state} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* LLM Routing Logic */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="h-full bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="text-amber-500" />
                  <h3 className="text-xl font-semibold text-slate-900 tracking-tight">LLM Router Logic</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { label: "Local Model Check", desc: "First priority: Run on local hardware via Ollama." },
                    { label: "Capability Match", desc: "If Aria 9B lacks context depth, route to cloud specialist." },
                    { label: "Cost Threshold", desc: "Strict token budget enforcement per session." },
                    { label: "Fallback Chain", desc: "Local → Groq → Anthropic → OpenAI." }
                  ].map((it, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500 shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <div className="text-[14px] font-bold text-slate-900 mb-1">{it.label}</div>
                        <p className="text-[13px] text-slate-500 font-light leading-relaxed">{it.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Installation & Dependency Matrix */}
        <div className="space-y-12">
           <ScrollReveal>
             <h3 className="text-2xl font-semibold text-slate-900 mb-8">OS-Native Installation Flow</h3>
             <div className="grid md:grid-cols-3 gap-6">
               {installSteps.map((platform, i) => (
                 <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#1a1b26] group-hover:text-white transition-all">
                        {platform.icon}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">{platform.os}</h4>
                   </div>
                   <ul className="space-y-3 mb-8">
                     {platform.steps.map((s, j) => (
                       <li key={j} className="text-[13px] text-slate-500 font-light flex items-start gap-2">
                         <span className="text-sky-500 mt-1">▸</span> {s}
                       </li>
                     ))}
                   </ul>
                   <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 font-mono text-[11px] text-slate-600 truncate">
                      $ {platform.cmd}
                   </div>
                 </div>
               ))}
             </div>
           </ScrollReveal>

           <ScrollReveal delay={0.2}>
             <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
                <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
                   <div>
                     <h3 className="text-xl font-bold text-slate-900 mb-1">Dependency Matrix</h3>
                     <p className="text-slate-500 font-light text-sm">Automated system validation and bundling.</p>
                   </div>
                   <div className="hidden sm:flex gap-2">
                     <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> Bundled</span>
                     <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-sky-600 bg-sky-50 px-2 py-1 rounded-md"><CheckCircle2 size={12}/> OS-Package</span>
                   </div>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="bg-slate-50/50">
                            <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Dependency</th>
                            <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Windows</th>
                            <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">macOS</th>
                            <th className="px-8 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Linux</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono text-[12px]">
                         {[
                           ["Node.js 20 LTS", "Bundled", "Bundled", "Apt/Brew"],
                           ["Python 3.11", "Bundled", "Bundled", "Apt"],
                           ["Ollama Runtime", "Bundled", "Bundled", "Script"],
                           ["SQLite DB", "Yes", "Yes", "Yes"],
                           ["WireGuard", "Yes", "Yes", "Yes"],
                           ["AWS CLI v2", "Yes", "Yes", "Yes"]
                         ].map((row, i) => (
                           <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                              <td className="px-8 py-4 font-bold text-slate-900">{row[0]}</td>
                              {row.slice(1).map((v, j) => (
                                <td key={j} className={`px-8 py-4 ${v === 'Bundled' ? 'text-emerald-600' : 'text-sky-600'}`}>{v}</td>
                              ))}
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
