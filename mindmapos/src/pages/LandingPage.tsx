import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ShieldCheck, Undo2, MessageSquare, Lock, Brain, Link as LinkIcon,
  Eye, CheckCircle2, Bot, AppWindow,
  Sparkles, Zap, Laptop, Command, Terminal, Check, AlertTriangle, Smartphone, Tablet,
  FileText, Activity, ShoppingBag, ScrollText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function LandingPage() {
  const [activePlatform, setActivePlatform] = useState('macOS');

  const platforms = {
    macOS: {
      icon: <Laptop size={14} />,
      title: "macOS",
      text: "All units operate from your local device environment, indistinguishable from native commands. MindMapOS adapts to macOS perfectly, integrating with AppleScript, Automator, and terminal securely.",
      color: "blue",
      task: "Clean derived data...",
      log1: "Empty Xcode DerivedData",
      log2: "Clear Homebrew Cache"
    },
    Linux: {
      icon: <Terminal size={14} />,
      title: "Linux",
      text: "The absolute proving ground. Complete system-level automation, package management, and service orchestration using native bash commands under a powerful safety wrapper.",
      color: "sky",
      task: "Update system packages...",
      log1: "Run apt-get update",
      log2: "Upgrade installed packages"
    },
    Windows: {
      icon: <AppWindow size={14} />,
      title: "Windows",
      text: "Deep integration with PowerShell and the Registry. Manage services, start startup apps, and clean deep system temps without ever opening an admin prompt.",
      color: "teal",
      task: "Optimize startup apps...",
      log1: "Scan registry keys",
      log2: "Disable heavy startup items"
    },
    Android: {
      icon: <Smartphone size={14} />,
      title: "Android",
      text: "Automate your mobile life. Clean up old photos, manage app permissions, or organize your downloads folder simply by asking. It respects Android's sandbox.",
      color: "emerald",
      task: "Organize downloads...",
      log1: "Move PDFs to Documents",
      log2: "Delete temp APK files"
    }
  };

  const currentPlatform = platforms[activePlatform as keyof typeof platforms];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans overflow-x-clip selection:bg-sky-100 selection:text-sky-900 pb-20">

      {/* Ambient Background Gradients (Glassmorphism blobs) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Hero Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sky-700 text-[11px] font-bold tracking-wider uppercase mb-8 shadow-sm">
                <Sparkles size={14} /> Powered by MindMap AI
              </div>
              
              <h1 className="text-[52px] md:text-[68px] font-medium tracking-[-0.03em] text-slate-900 mb-6 leading-[1.05]">
                The Only OS That <br /> <span className="text-sky-500">Listens To You</span>
              </h1>
              
              <p className="text-[17px] text-slate-500 mb-10 leading-[1.6] font-light max-w-md">
                MindMapOS is an AI agent that lives across every device you own — Linux, Windows, macOS, Android, iOS — and does whatever you describe. In plain language. Safely. Instantly.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <Link to="/app" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sky-500 text-white font-medium text-[15px] hover:bg-sky-600 transition-all shadow-sky-500/30 hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Get Early Access <ArrowRight size={16} />
                </Link>
                <Link to="/docs" className="group text-slate-500 hover:text-sky-600 font-medium text-[14px] transition-colors flex items-center gap-1.5 py-2">
                  Full Technical Docs <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Floating UI (Reference Image 1 glass aesthetics) */}
            <div className="relative h-[550px] w-full mt-12 lg:mt-0 lg:ml-4 perspective-1000 hidden md:block">
              {/* Main Panel */}
              <motion.div 
                initial={{ opacity: 0, y: 40, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateY: -5 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 bg-white/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-white/80 overflow-hidden"
              >
                <div className="h-12 border-b border-slate-200/30 flex items-center px-6 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <div className="p-8">
                   <div className="flex gap-4 mb-8">
                     <div className="w-9 h-9 rounded-xl bg-[#1a1b26] text-white flex items-center justify-center"><Command size={18} /></div>
                     <div className="flex-1">
                        <div className="h-4 w-24 bg-slate-200/50 rounded-full mb-2" />
                        <div className="h-3 w-48 bg-slate-100/50 rounded-full" />
                     </div>
                   </div>
                   <div className="space-y-6">
                      <div className="p-4 rounded-2xl bg-white/60 border border-white/80 shadow-sm flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center"><Laptop size={16} /></div>
                           <div className="text-[13px] font-medium text-slate-700">Connecting to MBP-2024...</div>
                         </div>
                         <div className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider">Online</div>
                      </div>
                      <div className="p-5 rounded-[24px] bg-sky-50/50 border border-sky-100 flex flex-col gap-4">
                         <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
                           <div className="text-[12px] font-semibold text-sky-800">MindMap is planning...</div>
                         </div>
                         <div className="space-y-2">
                            <div className="h-2 w-full bg-white/80 rounded-full" />
                            <div className="h-2 w-3/4 bg-white/80 rounded-full" />
                         </div>
                      </div>
                   </div>
                </div>
              </motion.div>

              {/* Floating Orbiting Elements */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-[-20px] right-[-20px] w-24 h-24 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-xl flex items-center justify-center"
              >
                 <ShieldCheck size={32} className="text-emerald-500" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[40px] left-[-40px] px-5 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white/80 shadow-lg flex items-center gap-3"
              >
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 <span className="text-[13px] font-medium text-slate-700">Optimization Done</span>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Rest of Landing Page... */}
      <section id="how-it-works" className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-16 max-w-2xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">It starts with a simple description.</h2>
               <p className="text-slate-500 text-[16px] font-light">MindMapOS translates your natural intent into a secure sequence of native commands. You remain the guardian of every action.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
               {[
                 { step: '01', title: 'Describe', desc: 'Speak or type your intent. "Clean my desktop" or "Setup dev environment".', icon: <MessageSquare size={24} className="text-sky-500"/> },
                 { step: '02', title: 'Review', desc: 'Review the step-by-step plan generated by the local Aria engine.', icon: <Eye size={24} className="text-indigo-500"/> },
                 { step: '03', title: 'Execute', desc: 'Authorize the execution. MindMapOS performs the tasks locally.', icon: <Zap size={24} className="text-emerald-500"/> },
               ].map((item, i) => (
                 <div key={i} className="group relative p-8 rounded-[32px] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <div className="text-4xl font-bold text-slate-100 mb-4 transition-colors group-hover:text-sky-50">{item.step}</div>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 border border-slate-100 transition-transform duration-500 group-hover:scale-110">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed text-[15px]">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Platform Section */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">One layer for every ecosystem.</h2>
                  <p className="text-slate-500 text-[16px] font-light max-w-lg">MindMapOS isn't an app. It's a foundational intelligence layer that works natively with the devices you already use.</p>
                </div>

                <div className="flex flex-wrap gap-2">
                   {Object.keys(platforms).map(p => (
                     <button 
                        key={p}
                        onClick={() => setActivePlatform(p)}
                        className={`px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all flex items-center gap-2 ${activePlatform === p ? 'bg-[#1a1b26] text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                       {platforms[p as keyof typeof platforms].icon} {p}
                     </button>
                   ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activePlatform}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <p className="text-[17px] text-slate-600 leading-relaxed font-light">{currentPlatform.text}</p>
                    <div className="flex items-center gap-3 text-sky-600 font-medium text-[14px]">
                      Check {currentPlatform.title} Docs <ArrowRight size={16} />
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>

             <div className="lg:w-1/2 w-full relative">
                <div className="bg-[#1a1b26] rounded-[40px] p-10 shadow-2xl border border-white/5 relative overflow-hidden h-[400px]">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
                   <div className="relative z-10 font-mono text-[13px] space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="text-slate-400">MindMap Runtime v1.0.4</span>
                      </div>
                      <div className="text-sky-400">{">"} intent --detect "{currentPlatform.task}"</div>
                      <div className="text-slate-300">Detecting platform: {currentPlatform.title}...</div>
                      <div className="text-slate-300">Generating plan...</div>
                      <div className="space-y-1 pl-4">
                         <div className="text-indigo-400">1. {currentPlatform.log1}</div>
                         <div className="text-indigo-400">2. {currentPlatform.log2}</div>
                      </div>
                      <div className="text-emerald-400 pt-4 tracking-widest font-bold">READY FOR EXECUTION</div>
                      <div className="pt-2">
                         <span className="inline-block px-3 py-1 rounded bg-white/5 text-[11px] text-slate-400 border border-white/10 italic">
                            Guardian Layer: AST analysis complete. Risk level: LOW.
                         </span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-32 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
           <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
              <div className="px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-[11px] font-bold tracking-wider uppercase border border-teal-500/20 mb-8">
                 <ShieldCheck size={14} className="inline mr-2" /> Guardian Layer — AST Engine
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">The most powerful thing about it <br /> isn't what it can do.</h2>
              <h2 className="text-4xl md:text-5xl font-medium text-teal-400 tracking-tight leading-tight">It's what it won't do.</h2>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Critical Risk', desc: 'Actions like system wipes or critical deletions are permanently blocked.', color: 'rose', label: 'Blocked' },
                { title: 'High Risk', desc: 'Significant changes require multi-step biometric confirmation.', color: 'orange', label: 'Verification' },
                { title: 'Medium Risk', desc: 'Third-party app uninstalls require explicit user approval.', color: 'amber', label: 'Approval' },
                { title: 'Low Risk', desc: 'File movements or system info requests execute automatically.', color: 'teal', label: 'Auto' },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-[32px] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group">
                   <div className={`text-[10px] font-bold uppercase tracking-widest mb-6 inline-block px-2.5 py-1 rounded border border-${item.color}-500/30 text-${item.color}-400 bg-${item.color}-500/5`}>
                      {item.label}
                   </div>
                   <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                   <p className="text-slate-400 font-light leading-relaxed text-[15px]">{item.desc}</p>
                </div>
              ))}
           </div>

           <div className="mt-20 p-10 rounded-[40px] bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/20 flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-2/3 space-y-4">
                 <h3 className="text-2xl font-semibold italic text-teal-100">"Your data never leaves your device. Period."</h3>
                 <p className="text-slate-400 font-light leading-relaxed">Unlike cloud-first assistants, MindMapOS processes every request locally. Our Aria model runs entirely on your hardware, and the Guardian Layer inspects commands without an internet connection.</p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                 <div className="w-24 h-24 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30">
                    <Lock size={40} className="text-teal-400" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
           <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">MindMapOS vs. The World</h2>
              <p className="text-slate-500 text-[16px] font-light">Why local execution and AST safety matter.</p>
           </div>

           <div className="overflow-x-auto rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/20">
              <table className="w-full text-left bg-white border-collapse">
                 <thead>
                    <tr className="bg-slate-50/50">
                       <th className="px-8 py-5 text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Feature</th>
                       <th className="px-8 py-5 text-sm font-bold text-sky-600 uppercase tracking-widest border-b border-slate-100 bg-sky-50/30">MindMapOS</th>
                       <th className="px-8 py-5 text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Other Assistants</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-100">
                    {[
                      { f: 'Execution Location', m: '100% Local Device', o: 'Cloud Servers' },
                      { f: 'Data Privacy', m: 'Zero Leakage Guarantee', o: 'Usage for Training' },
                      { f: 'Safety Engine', m: 'AST-based Guardian Layer', o: 'LLM Probabilistic Output' },
                      { f: 'OS Integration', m: 'Deep Native (Shell/System)', o: 'Surface Level / App-only' },
                      { f: 'Latency', m: 'Near-Zero (Hardware dependent)', o: 'Server Dependent' },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                        <td className="px-8 py-5 text-[15px] font-medium text-slate-700">{row.f}</td>
                        <td className="px-8 py-5 bg-sky-50/10 text-slate-900 font-semibold flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> {row.m}</td>
                        <td className="px-8 py-5 text-slate-500">{row.o}</td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}
