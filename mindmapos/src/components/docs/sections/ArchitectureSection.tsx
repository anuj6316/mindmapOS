import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Layers, Shield, Cpu, Monitor, Zap, Lock, ArrowRight, X, User, Cloud, Server, Database, Key, Globe, AppWindow, Terminal, Smartphone, Command, Activity } from 'lucide-react';

const LAYERS = [
  {
    id: 'l1',
    level: 'Layer 1',
    title: 'Local Execution',
    desc: 'Native OS interface for Linux, macOS, and Windows.',
    details: 'Direct integration with system shells (bash, zsh, powershell). Commands are executed locally with the same permissions as the user.',
    color: 'bg-slate-700',
    icon: <Cpu size={20} />,
    components: ["Native Shell (bash/zsh/ps)", "Installer (OS-native)", "Secrets Vault", "WireGuard Tunnel"]
  },
  {
    id: 'l2',
    level: 'Layer 2',
    title: 'Guardian Layer',
    desc: 'AST-based safety and risk classification engine.',
    details: 'Inspects every generated command using Abstract Syntax Tree analysis. Blocks high-risk actions and requires human-in-the-loop for medium-risk tasks.',
    color: 'bg-teal-500',
    icon: <Shield size={20} />,
    components: ["AST Analysis", "Risk Engine", "Audit Trail", "Tool Permissions"]
  },
  {
    id: 'l3',
    level: 'Layer 3',
    title: 'Agent Layer',
    desc: 'Generalist and Specialist Agents powered by local LLMs.',
    details: 'Uses Ollama-compatible local models (Aria 4B/9B). Agents specialize in tasks like system admin, development, or creative writing.',
    color: 'bg-indigo-500',
    icon: <Zap size={20} />,
    components: ["Local Agent Executor", "Dependency Manager", "Agent Scheduler", "State Sync"]
  },
  {
    id: 'l4',
    level: 'Layer 4',
    title: 'User Interface',
    desc: 'React-based Chat & Dashboard running at localhost:7800.',
    details: 'The frontend is built with React, Vite, and Tailwind CSS. It communicates with the local agent layer via a secure websocket connection.',
    color: 'bg-sky-500',
    icon: <Monitor size={20} />,
    components: ["System Tray UI", "React Dashboard", "Setup Wizard", "Config interface"]
  },
  {
    id: 'l5',
    level: 'Layer 5',
    title: 'Cloud Gateway',
    desc: 'AWS infrastructure for licensing, OTA updates, and sync.',
    details: 'Managed infrastructure utilizing Amazon Cognito for device auth, DynamoDB for global state tracking, and Secrets Manager for encrypted vaulting. Every device connects over a secure mTLS tunnel.',
    color: 'bg-purple-500',
    icon: <Cloud size={20} />,
    components: ["Cognito (Auth)", "Lambda (Logic)", "DynamoDB (State)", "S3 (OTA)", "WAF (Firewall)"]
  }
];

const MODELS = [
  { name: 'Aria 4B Lite', ram: '4GB', accuracy: '82%', speed: 'Fastest', usage: 'Mobile / Edge' },
  { name: 'Aria 9B Pro', ram: '8GB', accuracy: '94%', speed: 'Balanced', usage: 'Desktop Default' },
  { name: 'Aria 70B Max', ram: '48GB', accuracy: '99%', speed: 'Intense', usage: 'Workstation / Enterprise' },
];

export default function ArchitectureSection() {
  const [activeLayer, setActiveLayer] = useState(LAYERS[0]);

  return (
    <section id="architecture" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-12">
        <ScrollReveal>
          <SectionLabel number="04" label="Architecture" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Layered for safety. <br /> Built for performance.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            MindMapOS uses a local-first, multi-layered architecture to ensure your data stays yours.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Layer Selection */}
          <div className="lg:col-span-7 space-y-4">
            {LAYERS.map((layer) => (
              <button
                key={layer.id}
                onClick={() => setActiveLayer(layer)}
                className={`w-full text-left p-6 rounded-[24px] border transition-all duration-300 flex items-center gap-6 group ${
                  activeLayer.id === layer.id
                    ? 'bg-white border-sky-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]'
                    : 'bg-white/40 border-slate-100 hover:border-slate-200'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${layer.color} text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                  {layer.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold tracking-widest uppercase text-slate-400">{layer.level}</span>
                    <div className={`w-2 h-2 rounded-full ${activeLayer.id === layer.id ? layer.color : 'bg-slate-200'}`} />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">{layer.title}</h4>
                  <p className="text-sm text-slate-500 font-light">{layer.desc}</p>
                </div>
              </button>
            ))}

            <div className="mt-8 p-6 rounded-[24px] bg-sky-50/50 border border-sky-100/50 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sky-600 shadow-sm">
                 <Lock size={18} />
               </div>
               <p className="text-sm text-sky-800 font-medium">
                 Data NEVER leaves your device. All processing is 100% local.
               </p>
            </div>
          </div>

          {/* Layer Detail View */}
          <div className="lg:col-span-5 sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-[32px] p-10 border border-slate-100 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.05)]"
              >
                <div className={`w-16 h-16 rounded-2xl ${activeLayer.color} text-white flex items-center justify-center mb-8 shadow-xl`}>
                   {React.cloneElement(activeLayer.icon as any, { size: 32 })}
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">{activeLayer.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed font-light mb-8">
                  {activeLayer.details}
                </p>
                
                <div className="space-y-6">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] border-b border-slate-100 pb-3">Core Components</div>
                  <div className="flex flex-wrap gap-2">
                    {activeLayer.components.map((comp) => (
                      <span key={comp} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[12px] text-slate-600 font-medium">
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-8 border-t border-slate-100 mt-8">
                  {['Local-first architecture', 'Zero external API dependencies', 'Optimized for native OS performance'].map((point) => (
                    <div key={point} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      {point}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Hybrid Trust Model Visual Block */}
        <ScrollReveal>
           <div className="mb-24 bg-slate-50/50 border border-slate-100 rounded-[48px] p-10 md:p-16 relative overflow-hidden">
              <div className="text-center mb-16 relative z-10">
                 <h3 className="text-2xl font-semibold text-slate-900 mb-4">The Hybrid Trust Model</h3>
                 <p className="text-slate-500 font-light max-w-xl mx-auto">MindMapOS creates a secure bridge between your private hardware and managed cloud services.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                 {/* Left: Local Device */}
                 <div className="bg-white border border-emerald-100 p-8 rounded-[40px] shadow-sm relative group flex flex-col">
                    <div className="absolute -top-4 left-8 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-emerald-500/20">Private Sandbox (Local)</div>
                    <div className="flex-1 space-y-6 pt-4">
                       <div className="flex items-center gap-4 text-emerald-600">
                          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                             <User size={24} />
                          </div>
                          <div className="font-semibold text-lg">Your System Data</div>
                       </div>
                       <ul className="space-y-3">
                          {['LLM Prompts & Responses', 'Local Agent Context', 'Full File System Access', 'Execution & Security Logs'].map(item => (
                             <li key={item} className="flex items-center gap-3 text-[14px] text-slate-600 font-light">
                                <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                    <div className="mt-8 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100/50 text-[12px] text-emerald-800 font-medium flex items-center gap-2">
                       <Lock size={14} /> Never leaves your hardware.
                    </div>
                 </div>

                 {/* Right: Cloud Control Plane */}
                 <div className="bg-[#1a1b26] border border-white/5 p-8 rounded-[40px] shadow-2xl relative group flex flex-col text-white">
                    <div className="absolute -top-4 left-8 bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-purple-500/20">AWS Control Plane (Cloud)</div>
                    <div className="flex-1 space-y-6 pt-4">
                       <div className="flex items-center gap-4 text-purple-400">
                          <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                             <Cloud size={24} />
                          </div>
                          <div className="font-semibold text-lg text-white">Managed Infrastructure</div>
                       </div>
                       <ul className="space-y-3">
                          {['License & Key Management', 'Over-the-Air (OTA) Updates', 'Marketplace Synchronization', 'Encrypted API Key Vault'].map(item => (
                             <li key={item} className="flex items-center gap-3 text-[14px] text-slate-400 font-light">
                                <div className="w-1 h-1 rounded-full bg-purple-500 shrink-0" />
                                {item}
                             </li>
                          ))}
                       </ul>
                    </div>
                    <div className="mt-8 p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 text-[12px] text-purple-300 font-medium flex items-center gap-2">
                       <Shield size={14} /> End-to-end Encrypted Tunnel (mTLS)
                    </div>
                 </div>
              </div>
           </div>
        </ScrollReveal>

        {/* Phase Support Matrix */}
        <ScrollReveal>
           <div className="mb-32">
              <div className="text-center mb-16">
                 <h3 className="text-2xl font-semibold text-slate-900 mb-4">Platform Support Matrix</h3>
                 <p className="text-slate-500 font-light max-w-2xl mx-auto">MindMapOS is engineered for native performance across major operating systems and embedded hardware.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { os: "Windows", icon: <AppWindow size={24} />, versions: "Win 10 / 11", arch: "x64, ARM64", install: ".exe Installer" },
                    { os: "macOS", icon: <Command size={24} />, versions: "12+ Monterey", arch: "Intel, Apple Silicon", install: ".dmg + Brew" },
                    { os: "Linux", icon: <Terminal size={24} />, versions: "Ubuntu 20+, Debian, RHEL", arch: "x64, ARM64", install: ".deb / .rpm / AppImage" },
                    { os: "Mobile/Edge", icon: <Smartphone size={24} />, versions: "Android 10+, iOS 16+", arch: "ARM64", install: "App Store / APK" },
                 ].map((p, i) => (
                    <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-all duration-500 group">
                       <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                          {p.icon}
                       </div>
                       <h4 className="text-xl font-medium tracking-tight text-slate-900 mb-6">{p.os}</h4>
                       <div className="space-y-4">
                          <div className="flex flex-col">
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Target Version</span>
                             <span className="text-[14px] text-slate-600 font-light">{p.versions}</span>
                          </div>
                          <div className="flex flex-col">
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Architecture</span>
                             <span className="text-[14px] text-slate-600 font-light">{p.arch}</span>
                          </div>
                          <div className="pt-4">
                             <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold border border-emerald-100 uppercase tracking-wider">{p.install}</div>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </ScrollReveal>

        {/* Phase 6.2: Local-first Data Flow Diagram */}
        <ScrollReveal>
           <div className="mb-24 bg-slate-50/50 border border-slate-100 rounded-[48px] p-10 md:p-16 relative overflow-hidden">
              <div className="text-center mb-16 relative z-10">
                 <h3 className="text-2xl font-semibold text-slate-900 mb-4">Local-first Privacy Model</h3>
                 <p className="text-slate-500 font-light max-w-xl mx-auto">Unlike cloud-based AI, MindMapOS establishes a hard boundary at your device edge.</p>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8">
                 {/* Local Boundary */}
                 <div className="flex-1 flex flex-col md:flex-row items-center gap-4 lg:gap-8 bg-white border border-sky-100 p-8 rounded-[40px] shadow-sm relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-sky-500/20">Device Edge (Private)</div>
                    
                    {[
                      { icon: <User size={24} />, label: 'Intent' },
                      { icon: <Zap size={24} />, label: 'Aria LLM' },
                      { icon: <Shield size={24} />, label: 'Guardian' },
                      { icon: <Cpu size={24} />, label: 'Hardware' }
                    ].map((node, i) => (
                      <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-3">
                           <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700">
                              {node.icon}
                           </div>
                           <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{node.label}</span>
                        </div>
                        {i < 3 && <div className="hidden md:block text-sky-200"><ArrowRight size={20} /></div>}
                      </React.Fragment>
                    ))}
                 </div>

                 {/* Hard Gap */}
                 <div className="flex flex-col items-center">
                    <X size={32} className="text-rose-500 mb-2" />
                    <div className="h-20 w-px bg-gradient-to-b from-rose-500 to-transparent md:w-20 md:h-px md:bg-gradient-to-r" />
                 </div>

                 {/* External */}
                 <div className="flex flex-col items-center gap-3 opacity-30 grayscale">
                    <div className="w-16 h-16 rounded-2xl bg-slate-200 flex items-center justify-center text-slate-400">
                       <Monitor size={24} />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Cloud Servers</span>
                 </div>
              </div>
           </div>
        </ScrollReveal>

        {/* Phase 6.3: Model Architecture Comparison Table */}
        <ScrollReveal delay={0.2}>
           <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
              <div className="p-8 border-b border-slate-100">
                 <h3 className="text-2xl font-semibold text-slate-900 mb-2">Model Specifications</h3>
                 <p className="text-slate-500 font-light text-sm">Choose the Aria model that fits your hardware capabilities.</p>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left">
                    <thead>
                       <tr className="bg-slate-50/50">
                          <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Model Name</th>
                          <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Min. RAM</th>
                          <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Accuracy</th>
                          <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Execution Speed</th>
                          <th className="px-8 py-5 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Best For</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                       {MODELS.map((m, i) => (
                         <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                            <td className="px-8 py-6 font-semibold text-slate-900">{m.name}</td>
                            <td className="px-8 py-6 text-slate-600 font-mono text-[13px]">{m.ram}</td>
                            <td className="px-8 py-6">
                               <div className="flex items-center gap-2">
                                  <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden">
                                     <div className="h-full bg-emerald-500" style={{ width: m.accuracy }} />
                                  </div>
                                  <span className="text-[13px] font-medium text-slate-700">{m.accuracy}</span>
                               </div>
                            </td>
                            <td className="px-8 py-6">
                               <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                 m.speed === 'Fastest' ? 'bg-emerald-50 text-emerald-600' : 
                                 m.speed === 'Balanced' ? 'bg-sky-50 text-sky-600' : 'bg-amber-50 text-amber-600'
                               }`}>
                                 {m.speed}
                               </span>
                            </td>
                            <td className="px-8 py-6 text-sm text-slate-500">{m.usage}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Add missing icon import
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
