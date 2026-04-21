import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight, ShieldCheck, Undo2, MessageSquare, Lock, Brain, Link as LinkIcon,
  Eye, CheckCircle2, Bot, AppWindow,
  Sparkles, Zap, Laptop, Command, Terminal, Check, AlertTriangle, Smartphone, Tablet,
  Grip, FileText, Activity, ShoppingBag, ScrollText
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [activePlatform, setActivePlatform] = useState('macOS');
  const [activeNav, setActiveNav] = useState('how-it-works');
  const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false);
  const appsMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (appsMenuRef.current && !appsMenuRef.current.contains(event.target as Node)) {
        setIsAppsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
      <nav className="fixed top-0 left-0 right-0 z-[60] w-full bg-[#F8FAFC]/30 backdrop-blur-sm border-b border-slate-200/50">
        <div className="relative pt-4 pb-4 px-4 sm:px-8 max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white/50 backdrop-blur-sm -ml-1">
              <Command size={18} className="text-slate-700" />
            </div>
            <span className="font-bold text-lg tracking-tight">MindMapOS</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[14px] font-medium text-slate-600">
            {[
              { id: 'how-it-works', label: 'How it Works' },
              { id: 'features', label: 'Capabilities' },
              { id: 'safety', label: 'Guardian Layer' },
            ].map(navItem => (
              <a
                key={navItem.id}
                href={`#${navItem.id}`}
                onClick={() => setActiveNav(navItem.id)}
                className={`px-4 py-2 relative transition-all rounded-lg ${activeNav === navItem.id
                    ? 'text-sky-700 bg-sky-50/50'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {navItem.label}
                {activeNav === navItem.id && (
                  <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2 w-3/4 h-[2.5px] bg-sky-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4 border-r border-slate-200 pr-4 mr-2">
              <Link to="/download" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">Download</Link>
               <Link to="/app" className="text-sm font-semibold text-slate-600 hover:text-sky-600 transition-colors">Sign In</Link>
            </div>

            <div className="relative" ref={appsMenuRef}>
              <button
                onClick={() => setIsAppsMenuOpen(!isAppsMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isAppsMenuOpen ? 'bg-slate-200 text-slate-800' : 'hover:bg-slate-200/50 text-slate-700'}`}
                aria-label="App Launcher"
              >
                <Grip size={24} />
              </button>

              <AnimatePresence>
                {isAppsMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-14 right-0 w-[320px] sm:w-[380px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 z-[70]"
                  >
                    <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-50">
                      <span className="font-semibold text-slate-800 text-[15px]">MindMapOS</span>
                      <Link to="/app" className="text-sky-600 text-[13px] hover:text-sky-700 font-medium flex items-center gap-1">
                        MindMapOS <ArrowRight size={14} />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-5">
                      <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform"><FileText size={16} /></div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Note taking</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform"><Activity size={16} /></div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Orchestrator Agent</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform"><ShoppingBag size={16} /></div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Market place</span>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform"><ScrollText size={16} /></div>
                        <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Audite logs</span>
                      </a>
                    </div>

                    <div className="pt-2">
                      <a href="#" className="text-sky-600 text-[14px] hover:text-sky-700 font-medium flex items-center gap-1 w-max">
                        All Apps <ArrowRight size={14} />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-28 lg:pt-36">
        {/* HERO SECTION (Reference Image 1) */}
        <section className="px-4 sm:px-8 max-w-7xl mx-auto mb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sky-700 text-[11px] font-bold tracking-wider uppercase mb-8 shadow-sm">
                <Sparkles size={14} className="text-sky-700" /> Powered by MindMap AI
              </div>

              <h1 className="text-[52px] md:text-[68px] font-medium tracking-[-0.03em] text-[#111827] mb-6 leading-[1.05]">
                The Only OS That <br /> LISTENS To You
              </h1>

              <p className="text-[17px] text-slate-500 mb-10 leading-[1.6] font-light max-w-md">
                MindMapOS is an AI agent that lives across every device you own — Linux, Windows, macOS, Android, iOS — and does whatever you describe. In plain language. Safely. Instantly.
              </p>

              <div className="flex items-center gap-4">
                <Link to="/app" className="px-8 py-3.5 rounded-full bg-sky-500 text-white font-medium text-[15px] hover:bg-sky-600 transition-all shadow-sky-500/30 hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Get Early Access <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Floating UI (Reference Image 1 glass aesthetics) */}
            <div className="relative h-[550px] w-full mt-12 lg:mt-0 lg:ml-4 perspective-1000 hidden md:block">

              {/* Main Glass Window (Subtle, large backdrop) */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotateX: 10, rotateY: -10 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-10 right-0 w-[85%] h-[380px] bg-white/40 backdrop-blur-2xl rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-white/80 p-6 z-10"
              >
                {/* Window Controls */}
                <div className="flex gap-2 mb-8 items-center border-b border-white/50 pb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    <div className="w-[10px] h-[10px] rounded flex items-center justify-center border border-slate-300 text-[8px] text-slate-400 font-bold leading-none">X</div>
                  </div>
                </div>

                {/* Mock Content inside glass window */}
                <div className="space-y-4">
                  <div className="h-28 bg-gradient-to-r from-blue-50/50 to-sky-50/50 rounded-2xl border border-white/60 shadow-inner flex flex-col justify-end p-5">
                    <div className="w-1/2 h-2 bg-slate-200 rounded-full mb-3"></div>
                    <div className="w-3/4 h-2 bg-slate-100 rounded-full"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1 h-32 bg-white/60 rounded-2xl border border-white/80 p-5">
                      <div className="w-8 h-8 rounded-full bg-slate-100 mb-4 flex items-center justify-center"><Terminal size={14} className="text-slate-400" /></div>
                      <div className="space-y-2 mt-auto">
                        <div className="h-1.5 bg-slate-200/80 rounded-full w-full"></div>
                        <div className="h-1.5 bg-slate-100 rounded-full w-4/5"></div>
                        <div className="h-1.5 bg-slate-100 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Central Dark Prominent Card (Like the Answer panel in Img 1) */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
                transition={{ opacity: { duration: 0.6, delay: 0.5 }, y: { repeat: Infinity, duration: 6, ease: "easeInOut" } }}
                className="absolute top-[35%] left-[-10%] w-[320px] bg-white rounded-[24px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)] border border-slate-50 p-6 z-30 flex flex-col gap-5 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-br from-sky-100 to-green-50 -z-10"></div>
                <div className="flex justify-between items-start pt-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-sm flex-shrink-0 bg-slate-100">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm text-[10px] text-slate-500 font-medium">X</div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 text-[17px] mb-1">Set up Dev Environment</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-4">Hey! I want to configure Python 3.12, Numpy, and a new virtual environment in ~/Projects.</p>
                  <button className="w-full bg-sky-500 text-white text-[13px] font-bold py-2.5 rounded-full shadow-sky-500/40 hover:bg-sky-600 transition-colors">
                    Execute
                  </button>
                </div>

                <div className="flex justify-between items-center text-[11px] font-medium text-slate-400 border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5"><Terminal size={12} className="text-slate-700" /> 12 Actions Planned</div>
                  <span className="text-slate-400 group flex items-center gap-1 hover:text-slate-600 cursor-pointer">View plan <ArrowRight size={10} /></span>
                </div>
              </motion.div>

              {/* Smaller Floating Bubble/Message */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                transition={{ opacity: { duration: 0.5, delay: 0.7 }, scale: { duration: 0.5, delay: 0.7 }, y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 } }}
                className="absolute top-[20%] right-[-5%] bg-white rounded-full py-2.5 px-4 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08)] flex items-center gap-3 z-20 border border-slate-100/50"
              >
                <div className="w-7 h-7 rounded-full bg-[#00A651]/10 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-[#00A651]" />
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-slate-700 leading-tight">Optimization Done</div>
                  <div className="text-[10px] text-slate-400">2.4GB cleared super fast!</div>
                </div>
              </motion.div>

              {/* Floating dark widget */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                className="absolute top-[5%] left-[10%] w-12 h-12 rounded-full bg-[#1a1b26] shadow-[0_15px_30px_rgb(26,27,38,0.3)] flex items-center justify-center z-20"
              >
                <Command size={18} className="text-slate-300" />
              </motion.div>

              {/* Decorative pill bottom */}
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute bottom-[0%] left-[20%] bg-white/80 backdrop-blur-md rounded-full py-2 px-5 shadow-lg border border-slate-100 flex items-center gap-3 z-0"
              >
                <span className="text-[13px] font-medium text-slate-700">Executed 12,000+ local commands!</span>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border border-white bg-sky-100"></div>
                  <div className="w-6 h-6 rounded-full border border-white bg-blue-100"></div>
                  <div className="w-6 h-6 rounded-full border border-white bg-green-100"></div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* SECTION 2: OPERATES FROM VIRTUAL DEVICES (Reference Image 2) */}
        <section className="py-24 max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-8">One Agent. Every Platform.</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.keys(platforms).map((platformKey) => {
                const isActive = activePlatform === platformKey;
                const p = platforms[platformKey as keyof typeof platforms];
                return (
                  <button
                    key={platformKey}
                    onClick={() => setActivePlatform(platformKey)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border flex items-center gap-2 transition-all ${isActive
                        ? `bg-${p.color}-50/80 text-${p.color}-600 border-${p.color}-100 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)]`
                        : 'bg-white/50 text-slate-500 border-slate-200 hover:bg-slate-50'
                      }`}
                  >
                    {p.icon} {p.title}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            {/* Left text */}
            <div className="w-full lg:w-1/4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activePlatform}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[15px] text-slate-500 leading-relaxed font-light mb-6"
                >
                  {currentPlatform.text}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Center Massive Card (Data lists) */}
            <div className="w-full lg:w-2/4 bg-white/70 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/80 relative transition-colors duration-500">
              {/* Decorative floating icon */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: 12 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute -left-6 top-10 w-14 h-14 bg-${currentPlatform.color}-500 rounded-2xl shadow-[0_15px_30px_rgb(59,130,246,0.3)] flex items-center justify-center`}
                >
                  <div className="text-white">{currentPlatform.icon}</div>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-8">
                {/* Sidebar inside card */}
                <div className="w-1/3 border-r border-slate-100 pr-6 hidden sm:block">
                  <button className="w-full bg-[#1a1b26] text-white py-2.5 rounded-full text-[13px] font-medium mb-6">
                    + Run Command
                  </button>
                  <div className="space-y-4">
                    {['Updates', 'Clean Disk', 'Backups', 'Scan Network', 'Completed'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${i < 2 ? `bg-${currentPlatform.color}-500` : 'border border-slate-300'}`}></div>
                        <span className={`text-[13px] ${i < 2 ? 'text-slate-800 font-medium' : 'text-slate-400'}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main content inside card */}
                <div className="flex-1">
                  <div className="bg-slate-50 rounded-full px-4 py-2 border border-slate-100 flex items-center mb-6">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={activePlatform + "task"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[11px] text-slate-400"
                      >
                        {currentPlatform.task}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                  <div className="space-y-6">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activePlatform + "logs"}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Check size={14} className={`text-${currentPlatform.color}-500`} />
                              <span className="font-semibold text-[14px] text-slate-800">{currentPlatform.log1}</span>
                            </div>
                            <div className="text-[11px] text-slate-400 ml-6">Just now</div>
                          </div>
                          <div className="flex -space-x-1.5">
                            <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                            <div className="w-6 h-6 rounded-full bg-slate-300 border-2 border-white"></div>
                          </div>
                        </div>

                        <div className="flex justify-between items-start opacity-70">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Check size={14} className={`text-${currentPlatform.color}-500`} />
                              <span className="font-semibold text-[14px] text-slate-800">{currentPlatform.log2}</span>
                            </div>
                            <div className="text-[11px] text-slate-400 ml-6">2 mins ago</div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Placeholder lines */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-3 opacity-40">
                        <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                        <div className="h-2 bg-slate-200 rounded-full flex-1"></div>
                      </div>
                      <div className="flex items-center gap-3 opacity-40">
                        <div className="w-3 h-3 rounded-full border border-slate-300"></div>
                        <div className="h-2 bg-slate-200 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right text */}
            <div className="w-full lg:w-1/4 pt-12 lg:pt-32">
              <p className="text-[14px] text-slate-500 leading-relaxed font-light">
                The agents behave exactly like standard system processes, running transparently. A complete audit log of everything ever done lives directly on your device.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: WORKFLOW / CREATE TEAMS (Reference Image 3 & 4 hybrid) */}
        <section id="how-it-works" className="py-32 relative overflow-hidden">
          <div className="text-center mb-24 max-w-2xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
              Three steps. That's the whole thing.
            </h2>
            <p className="text-slate-500 text-[16px] font-light">
              Describe. Review. Execute Safely. Give our AI the task of optimizing your laptop. Watch it map out the steps, verify risks, and autonomously execute them with perfect precision.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto h-[500px]">
            {/* Background concentric circles representing network */}
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200/50 rounded-full"></div>
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-slate-200 rounded-full"></div>
            <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white rounded-full shadow-[0_0_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center justify-center z-10">
              <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=400&fit=crop" alt="Abstract gradient" className="w-[85%] h-[85%] rounded-full object-cover opacity-80 mix-blend-multiply" />
              <div className="absolute inset-0 flex items-center justify-center text-[#1a1b26]">
                <Command size={48} strokeWidth={1} />
              </div>
            </div>

            {/* Floating Nodes */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute top-[10%] left-[10%] z-20">
              <div className="bg-white/90 backdrop-blur rounded-full px-5 py-3 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center"><Check size={12} className="text-emerald-600" /></div>
                <span className="text-[13px] font-medium text-slate-700">Audit System Resources</span>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="absolute bottom-[20%] left-[5%] z-20">
              <div className="bg-white/90 backdrop-blur rounded-full px-5 py-3 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center"><AlertTriangle size={12} className="text-teal-600" /></div>
                <span className="text-[13px] font-medium text-slate-700">High Risk: Disable Services</span>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }} className="absolute top-[25%] right-[5%] z-20">
              <div className="bg-sky-500 text-white rounded-full px-5 py-3 shadow-sky-500/30 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"><Undo2 size={12} className="text-white" /></div>
                <span className="text-[13px] font-medium">Automatic Restore Point created</span>
              </div>
            </motion.div>

            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-[10%] right-[15%] z-20">
              <div className="bg-white/90 backdrop-blur rounded-full px-5 py-3 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] border border-slate-100 flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"><Bot size={12} className="text-blue-600" /></div>
                <span className="text-[13px] font-medium text-slate-700">Scan & Connect GitHub</span>
              </div>
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mt-16 relative z-10">
            {[
              { icon: <MessageSquare />, title: "1. Describe", text: "Say what you want in plain english. \"Clean my downloads of images from last year\"." },
              { icon: <Eye />, title: "2. Review", text: "MindMapOS creates an execution plan. It maps out exactly what commands it will run, before it runs them." },
              { icon: <CheckCircle2 />, title: "3. Execute / Revert", text: "Approve the plan. If you don't like the result, hit 'Undo' and your system goes back to how it was." },
            ].map((step, i) => (
              <div key={i} className="bg-white/70 backdrop-blur border border-white/80 p-8 rounded-[32px] shadow-[0_20px_40px_-20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex justify-center items-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{step.title}</h3>
                <p className="text-[14px] font-light text-slate-500 leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CAPABILITIES / FEATURES */}
        <section id="features" className="py-32 max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
              Everything your device can do. <br />Finally within reach.
            </h2>
            <p className="text-slate-500 text-[16px] font-light">
              We replaced the terminal with a conversation. MindMapOS turns complex system architecture into an accessible grid of capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Laptop />, title: "Universal Logic", desc: "No specific syntax. From Bash to RegEdit, it translates intent to code.", colSpan: "col-span-1 md:col-span-2 lg:col-span-2", bgClass: "bg-white border-slate-200/60", textClass: "text-slate-900", descClass: "text-slate-500", iconBg: "bg-slate-50 border-slate-100 text-slate-700" },
              { icon: <ShieldCheck />, title: "Guardian Layer", desc: "Prevents destructive actions like wiping sys32 or deleting core folders.", colSpan: "col-span-1", bgClass: "bg-white border-slate-200/60", textClass: "text-slate-900", descClass: "text-slate-500", iconBg: "bg-slate-50 border-slate-100 text-slate-700" },
              { icon: <Undo2 />, title: "Always Reversible", desc: "Every action is logged and can be rolled back instantly.", colSpan: "col-span-1", bgClass: "bg-white border-slate-200/60", textClass: "text-slate-900", descClass: "text-slate-500", iconBg: "bg-slate-50 border-slate-100 text-slate-700" },
              { icon: <MessageSquare />, title: "Natural Language", desc: "Your commands, in your own words. It understands context.", colSpan: "col-span-1", bgClass: "bg-sky-50/50 border-sky-100", textClass: "text-sky-900", descClass: "text-sky-700", iconBg: "bg-white border-sky-100 text-sky-600" },
              { icon: <Lock />, title: "Absolute Privacy", desc: "Local execution means your data never pings a remote server.", colSpan: "col-span-1 lg:col-span-2", bgClass: "bg-[#1a1b26] border-[#2f3346]", textClass: "text-white", descClass: "text-slate-400", iconBg: "bg-[#2f3346] border-[#3f445e] text-slate-200" },
              { icon: <Brain />, title: "Context Aware", desc: "It remembers your machine's state, your dev environment, and your paths.", colSpan: "col-span-1", bgClass: "bg-white border-slate-200/60", textClass: "text-slate-900", descClass: "text-slate-500", iconBg: "bg-slate-50 border-slate-100 text-slate-700" },
              { icon: <LinkIcon />, title: "Deep Integrations", desc: "Connects with GitHub, AWS, Docker, and beyond effortlessly.", colSpan: "col-span-1 lg:col-span-2", bgClass: "bg-white border-slate-200/60", textClass: "text-slate-900", descClass: "text-slate-500", iconBg: "bg-slate-50 border-slate-100 text-slate-700" },
              { icon: <Eye />, title: "Transparent Audit", desc: "No black boxes. See every line of code generated before it fires.", colSpan: "col-span-1 md:col-span-2 lg:col-span-2", bgClass: "bg-gradient-to-br from-teal-50/50 to-emerald-50/10 border-teal-100", textClass: "text-teal-900", descClass: "text-teal-700", iconBg: "bg-white border-teal-100 text-teal-600" },
            ].map((feat, i) => (
              <div key={i} className={`group ${feat.colSpan} ${feat.bgClass} border p-8 lg:p-10 rounded-[32px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between`}>
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-8 border ${feat.iconBg} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 relative z-10`}>
                  {feat.icon}
                </div>
                <div className="relative z-10 mt-auto">
                  <h4 className={`text-xl font-medium tracking-tight mb-3 ${feat.textClass}`}>{feat.title}</h4>
                  <p className={`text-[15px] font-light leading-relaxed max-w-sm ${feat.descClass}`}>{feat.desc}</p>
                </div>
                {/* Decorative blob for depth */}
                <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${feat.bgClass.includes('1a1b26') ? 'bg-sky-500' : 'bg-slate-300'}`}></div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: GUARDIAN LAYER (SAFETY) */}
        <section id="safety" className="py-24 relative bg-slate-50/50 border-y border-slate-100 overflow-hidden">
          {/* Abstract dotted background pattern */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-[11px] font-bold tracking-wider uppercase mb-8 shadow-sm">
                  <ShieldCheck size={14} /> Safety First
                </div>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                  The most powerful thing about it isn't what it can do. <br />
                  <span className="text-slate-400">It's what it won't do.</span>
                </h2>
                <p className="text-[16px] text-slate-500 font-light mb-8 leading-relaxed max-w-lg">
                  Before any script runs, it passes through the Guardian Layer. A locally-running sentinel that analyzes the Abstract Syntax Tree of the generated command to evaluate risk and prevent catastrophic failures.
                </p>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm inline-block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                    <span className="text-sm font-medium text-slate-700">Guardian Status: Active</span>
                  </div>
                  <p className="text-[12px] text-slate-400 font-mono">system.sentinel.enforce()</p>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="grid gap-4">
                  {[
                    { level: "Critical", desc: "System wipes, root password changes.", color: "rose", bg: "bg-rose-50", text: "text-rose-700", border: "border-rose-100" },
                    { level: "High", desc: "Disabling firewalls, exposing ports.", color: "orange", bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-100" },
                    { level: "Medium", desc: "Uninstalling apps, network configs.", color: "amber", bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" },
                    { level: "Low", desc: "File moving, git commits, UI styling.", color: "teal", bg: "bg-teal-50", text: "text-teal-700", border: "border-teal-100" },
                  ].map((risk, i) => (
                    <div key={i} className={`p-4 rounded-2xl ${risk.bg} border ${risk.border} flex items-center justify-between`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full bg-${risk.color}-500`}></div>
                        <span className={`text-[14px] font-semibold ${risk.text}`}>{risk.level} Risk</span>
                      </div>
                      <span className={`text-[13px] ${risk.text} opacity-80 text-right`}>{risk.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5A: WHO IT'S FOR (Personas) */}
        <section className="py-24 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
              Whoever you are. <br /> Whatever you run.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { label: "For the everyday user", headline: "Your device. Finally yours.", body: "You shouldn't need a computer science degree to manage a computer. MindMapOS handles everything — install apps, fix errors, organize files, connect services — through simple conversation. No terminal. No tutorials. No fear.", quote: "I just told it what was wrong and it fixed it. That's it." },
              { label: "For developers", headline: "Stop setting up. Start building.", body: "\"Set up my dev environment for this project.\" That's the whole command. MindMapOS handles the rest — dependencies, environment variables, version managers, configs. What used to take three hours now takes three minutes.", quote: "It's like pair programming with someone who already knows my whole setup." },
              { label: "For power users", headline: "Natural language scripting with a full audit trail.", body: "Automate complex multi-step workflows by describing them. Schedule jobs, manage services, monitor systems — all through conversation, with complete logs of every action taken. The Guardian Layer stays on. Everything else adapts to you.", quote: "Finally, automation I can hand to someone else and they can actually read it." },
              { label: "For non-technical professionals", headline: "Manage your work. Not your machine.", body: "Your time is for your actual work — not for figuring out why your laptop is slow, where your files went, or how to connect two apps that should just talk to each other. MindMapOS handles the machine so you can handle the work.", quote: "I didn't know my computer could do half of this." }
            ].map((persona, i) => (
              <div key={i} className="bg-white rounded-[32px] p-8 md:p-10 border border-slate-100 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-[11px] font-bold tracking-wider uppercase mb-6">
                    {persona.label}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4 tracking-tight">{persona.headline}</h3>
                  <p className="text-[15px] text-slate-500 leading-relaxed font-light mb-8 max-w-sm">
                    {persona.body}
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-50 relative">
                  <span className="absolute top-2 left-3 text-4xl text-slate-300 font-serif leading-none">"</span>
                  <p className="text-[14px] text-slate-700 font-medium italic relative z-10 pl-4">{persona.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5B: DIFFERENTIATION TABLE */}
        <section className="py-24 max-w-6xl mx-auto px-4 border-t border-slate-100">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
              Everything else either talks or acts. <br /> MindMapOS does both — safely.
            </h2>
            <p className="text-[16px] text-slate-500 font-light leading-relaxed">
              Chatbots tell you what to do. You still have to do it. Bash agents act — but without guardrails.
              One wrong command, and you're calling a recovery disk. GUI settings cover 10% of what your device can actually do.
              <br /><br />
              <span className="font-semibold text-slate-700">MindMapOS is the first system that understands what you want, plans the path, explains the consequences, and executes — safely — across every device you own.</span>
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-5 px-6 font-semibold text-slate-800 border-b border-slate-200 w-1/3">Capabilities</th>
                  <th className="py-5 px-6 font-semibold text-slate-500 border-b border-slate-200 text-center">Generic AI Chatbots</th>
                  <th className="py-5 px-6 font-semibold text-slate-500 border-b border-slate-200 text-center">Bash Agents</th>
                  <th className="py-5 px-6 font-semibold text-slate-500 border-b border-slate-200 text-center">GUI Settings</th>
                  <th className="py-5 px-6 font-semibold text-sky-600 bg-sky-50/50 rounded-t-2xl border-b-2 border-sky-200 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-sky-500"></div>
                    MindMapOS
                  </th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {[
                  { feature: "Works across all platforms", bot: "✗", bash: "✗", gui: "✗", mmap: "✓" },
                  { feature: "Actually executes actions", bot: "✗", bash: "✓", gui: "Partial", mmap: "✓" },
                  { feature: "Safety layer before execution", bot: "✗", bash: "✗", gui: "✗", mmap: "✓" },
                  { feature: "Plain-language explanations", bot: "✓", bash: "✗", gui: "✗", mmap: "✓" },
                  { feature: "Full undo on every action", bot: "✗", bash: "✗", gui: "✗", mmap: "✓" },
                  { feature: "Local-first / private by default", bot: "✗", bash: "✗", gui: "✓", mmap: "✓" },
                  { feature: "Accessible to non-technical users", bot: "Partial", bash: "✗", gui: "Partial", mmap: "✓" },
                  { feature: "Connected accounts integration", bot: "✗", bash: "✗", gui: "✗", mmap: "✓" },
                  { feature: "Persistent memory", bot: "✗", bash: "✗", gui: "✗", mmap: "✓" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors group">
                    <td className="py-4 px-6 text-slate-700 font-medium">{row.feature}</td>

                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center justify-center font-bold ${row.bot === '✓' ? 'text-teal-500' : row.bot === 'Partial' ? 'text-amber-500 text-xs uppercase tracking-wider' : 'text-slate-300'}`}>
                        {row.bot === '✓' ? <Check size={18} strokeWidth={3} /> : row.bot}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center justify-center font-bold ${row.bash === '✓' ? 'text-teal-500' : row.bash === 'Partial' ? 'text-amber-500 text-xs uppercase tracking-wider' : 'text-slate-300'}`}>
                        {row.bash === '✓' ? <Check size={18} strokeWidth={3} /> : row.bash}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center justify-center font-bold ${row.gui === '✓' ? 'text-teal-500' : row.gui === 'Partial' ? 'text-amber-500 text-xs uppercase tracking-wider' : 'text-slate-300'}`}>
                        {row.gui === '✓' ? <Check size={18} strokeWidth={3} /> : row.gui}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-center bg-sky-50/30 group-last:rounded-b-2xl">
                      <span className="inline-flex items-center justify-center text-sky-500 font-bold">
                        {row.mmap === '✓' ? <Check size={20} strokeWidth={3} /> : row.mmap}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6: PRICING / PLANS (Reference Image 5) */}
        <section className="py-24 max-w-5xl mx-auto px-4 bg-[#F8FAFC]">
          <div className="mb-16">
            <span className="text-[12px] font-bold uppercase tracking-widest text-sky-500 mb-2 block">Available Now</span>
            <h2 className="text-4xl font-medium tracking-tight text-slate-900">Early Access Plans</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto relative">
            {/* Soft background line connecting them */}
            <div className="absolute top-10 left-[20%] right-[20%] h-[1px] bg-slate-200/50 hidden md:block rounded-[100%] arch"></div>

            {/* Local Plan */}
            <div className="bg-gradient-to-b from-white to-blue-50/50 rounded-[32px] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-white relative z-10 hover:-translate-y-1 transition-transform">
              <div className="flex justify-center mb-6">
                <Bot size={24} className="text-slate-800" />
              </div>
              <h3 className="text-xl font-medium text-center text-slate-800 mb-2">Local Runtime</h3>
              <p className="text-[13px] text-center text-slate-500 mb-6">Runs completely offline on your device.</p>

              <div className="text-center mb-8">
                <span className="text-4xl font-semibold text-slate-900">Free</span>
                <span className="text-slate-400 text-sm">/ forever</span>
              </div>

              <ul className="space-y-4 mb-10 text-[13px] text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-slate-300"></div> Use BYO-LLM API</span>
                  <span className="font-medium text-slate-800">Yes</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-slate-300"></div> Agent Actions</span>
                  <span className="font-medium text-slate-800">Unlimited</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-slate-300"></div> Cloud Backup</span>
                  <span className="text-slate-400">None</span>
                </li>
              </ul>

              <div className="flex justify-center">
                <Link to="/app" className="w-14 h-14 rounded-full bg-[#1a1b26] text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-lg">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Cloud Pro Plan */}
            <div className="bg-white rounded-[32px] p-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-slate-100 relative z-10 hover:-translate-y-1 transition-transform">
              <div className="absolute -top-3 right-8 bg-[#ccfbf1] text-teal-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Recommended
              </div>

              <div className="flex justify-center mb-6">
                <Sparkles size={24} className="text-slate-800" />
              </div>
              <h3 className="text-xl font-medium text-center text-slate-800 mb-2">Cloud Synced</h3>
              <p className="text-[13px] text-center text-slate-500 mb-6">Synced memory across all your nodes.</p>

              <div className="text-center mb-8">
                <h4 className="text-2xl font-semibold text-slate-900">Waitlist</h4>
              </div>

              <ul className="space-y-4 mb-10 text-[13px] text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-slate-300"></div> Managed Model Access</span>
                  <span className="font-medium text-slate-800">Yes</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-slate-300"></div> Cross-device Memory</span>
                  <span className="font-medium text-slate-800">Synced</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full border border-slate-300"></div> Support</span>
                  <span className="font-medium text-slate-800">Priority</span>
                </li>
              </ul>

              <div className="flex justify-center">
                <button className="w-14 h-14 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-slate-200 transition-colors">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center text-slate-400 text-[13px] py-8 border-t border-slate-200/60 mt-16 max-w-7xl mx-auto w-full">
        &copy; {new Date().getFullYear()} MindMap Digital. Built for the future of devices.
      </footer>

    </div>
  );
}
