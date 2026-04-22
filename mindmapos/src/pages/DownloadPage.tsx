import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Command, ArrowRight, CheckCircle2, Clock, HardDrive, Cpu, Wifi,
  ChevronDown, ChevronUp, Copy, Check, ExternalLink, ShieldCheck,
  Smartphone, Monitor, Apple, Terminal, Box, ChevronRight, Settings,
  Sparkles, Activity, Layers, Shield, Database, Server, Key, Repeat, Info
} from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

type DeviceKey = 'linux' | 'windows' | 'macos' | 'android' | 'ios' | 'edge';

const DEVICES: { key: DeviceKey; emoji: string; label: string }[] = [
  { key: 'linux', emoji: '🐧', label: 'Linux' },
  { key: 'windows', emoji: '🪟', label: 'Windows' },
  { key: 'macos', emoji: '🍎', label: 'macOS' },
  { key: 'android', emoji: '📱', label: 'Android' },
  { key: 'ios', emoji: '📱', label: 'iOS' },
  { key: 'edge', emoji: '📟', label: 'Edge / Pi' },
];

const LINUX_FORMATS = [
  { id: 'deb', label: 'Debian / Ubuntu (.deb)', format: "Debian / Ubuntu / Kali", distros: ".deb package for Debian-based distros", filename: "mindmapos_1.0.4_amd64.deb", size: "142 MB", ext: "DEB", recommended: true },
  { id: 'rpm', label: 'Fedora / RHEL (.rpm)', format: "Fedora / RHEL / CentOS", distros: ".rpm package for RedHat-based distros", filename: "mindmapos-1.0.4-1.x86_64.rpm", size: "138 MB", ext: "RPM" },
  { id: 'aur', label: 'Arch / Manjaro (AUR)', format: "Arch Linux / Manjaro", distros: "Available in the AUR as mindmapos-bin", filename: "yay -S mindmapos-bin", size: "AUR", ext: "AUR" },
];

/* ─── SHARED COMPONENTS ─────────────────────────────────────────── */

function CopyChip({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 rounded-full text-[11px] font-mono text-slate-600 hover:text-sky-700 transition-all group"
    >
      {text}
      {copied ? <Check size={10} className="text-emerald-500" /> : <Copy size={10} className="opacity-50 group-hover:opacity-100" />}
    </button>
  );
}

function StatusBadge({ available, phase }: { available: boolean; phase?: string }) {
  return available ? (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold tracking-wider uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available — {phase || 'Phase 1'}
    </div>
  ) : (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[10px] font-bold tracking-wider uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> In Dev — {phase || 'Phase 2'}
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-[13px] shrink-0 shadow-lg shadow-slate-900/20">
      {n}
    </div>
  );
}

function DownloadCard({ recommended, format, distros, filename, size, ext }: {
  recommended?: boolean; format: string; distros: string; filename: string; size: string; ext: string;
}) {
  return (
    <div className={`relative rounded-[32px] border p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${recommended ? 'bg-white border-sky-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)]' : 'bg-white/60 border-slate-200/60 shadow-sm'}`}>
      {recommended && (
        <div className="absolute -top-3 left-8 bg-sky-500 text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-sky-500/20">
          Recommended
        </div>
      )}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
        <div className="space-y-1">
          <div className="font-semibold text-slate-900 text-lg mb-1">{format}</div>
          <div className="text-[14px] text-slate-500 font-light mb-4">{distros}</div>
          <CopyChip text={filename} />
        </div>
        <div className="sm:text-right shrink-0">
          <div className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-3">{size}</div>
          <button className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-[14px] font-bold transition-all hover:-translate-y-0.5 shadow-lg shadow-sky-500/25">
            Download {ext}
          </button>
        </div>
      </div>
    </div>
  );
}

function Accordion({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white/40 border border-white/80 rounded-2xl overflow-hidden transition-all hover:bg-white/60">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors">
        <span className="font-medium text-slate-800 text-[14px]">{q}</span>
        {open ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <div className="px-6 pb-5 text-[13px] text-slate-500 leading-relaxed space-y-2 border-t border-slate-100/50 pt-4 font-light">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── TECHNICAL VIEW COMPONENTS ────────────────────────────────── */

function DependencyMatrix({ platform }: { platform: 'Windows' | 'macOS' | 'Linux' | 'Edge' }) {
  const dependencies = [
    { name: "Node.js 20 LTS", win: "✓ Bundled", mac: "✓ Bundled", linux: "✓ apt/brew", edge: "✓ Bundled" },
    { name: "Python 3.11", win: "✓ Bundled", mac: "✓ Bundled", linux: "✓ apt", edge: "✓ Bundled" },
    { name: "Ollama Runtime", win: "✓ Bundled", mac: "✓ Bundled", linux: "✓ Script", edge: "⚠ Lite-only" },
    { name: "SQLite (local DB)", win: "✓", mac: "✓", linux: "✓", edge: "✓" },
    { name: "WireGuard (VPN)", win: "✓", mac: "✓", linux: "✓", edge: "✓" },
    { name: "Docker (optional)", win: "Optional", mac: "Optional", linux: "Optional", edge: "Optional" },
    { name: "AWS CLI v2", win: "✓", mac: "✓", linux: "✓", edge: "✓" },
  ];

  const getStatus = (d: any) => {
    if (platform === 'Windows') return d.win;
    if (platform === 'macOS') return d.mac;
    if (platform === 'Linux') return d.linux;
    return d.edge;
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex items-center gap-3 text-slate-400">
        <Settings size={18} />
        <h4 className="text-sm font-bold uppercase tracking-widest">Dependency Auto-install Matrix</h4>
      </div>
      <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-2 bg-slate-50/50 p-4 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <span>Component</span>
          <span>Status ({platform})</span>
        </div>
        <div className="divide-y divide-slate-100">
          {dependencies.map((d, i) => {
            const status = getStatus(d);
            return (
              <div key={i} className="grid grid-cols-2 p-4 text-[13px] items-center">
                <span className="font-medium text-slate-700">{d.name}</span>
                <span className={`text-[11px] font-bold uppercase ${status.includes('Bundled') ? 'text-emerald-500' : status.includes('Script') || status.includes('apt') ? 'text-sky-500' : 'text-slate-400'}`}>
                  {status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function RuntimeProcessTree({ platform }: { platform: 'Windows' | 'macOS' | 'Linux' | 'Edge' }) {
  const getTree = () => {
    if (platform === 'Windows') {
      return [
        { level: 0, text: "mindmapos-service (PID 4421)", color: "text-sky-400" },
        { level: 1, text: "├── agent-scheduler", color: "text-emerald-400" },
        { level: 2, text: "│   ├── email-bot [RUNNING]", color: "text-slate-300" },
        { level: 1, text: "├── llm-router", color: "text-emerald-400" },
        { level: 2, text: "│   ├── ollama:aria-9b", color: "text-slate-300" },
        { level: 1, text: "├── tool-sandbox (AppContainer)", color: "text-emerald-400" },
        { level: 2, text: "│   └── powershell-bridge", color: "text-slate-300" },
        { level: 1, text: "└── local-db (SQLite)", color: "text-emerald-400" },
      ];
    }
    if (platform === 'macOS') {
      return [
        { level: 0, text: "com.mindmapos.daemon (PID 102)", color: "text-sky-400" },
        { level: 1, text: "├── agent-scheduler", color: "text-emerald-400" },
        { level: 2, text: "│   ├── invoice-ai [IDLE]", color: "text-slate-500" },
        { level: 1, text: "├── llm-router", color: "text-emerald-400" },
        { level: 2, text: "│   ├── ollama:aria-9b", color: "text-slate-300" },
        { level: 1, text: "├── tool-sandbox (WKWebView)", color: "text-emerald-400" },
        { level: 2, text: "│   └── applescript-bridge", color: "text-slate-300" },
        { level: 1, text: "└── local-db (SQLite)", color: "text-emerald-400" },
      ];
    }
    if (platform === 'Linux') {
      return [
        { level: 0, text: "mindmapos.service (systemd)", color: "text-sky-400" },
        { level: 1, text: "├── agent-scheduler", color: "text-emerald-400" },
        { level: 2, text: "│   ├── hr-agent [QUEUED]", color: "text-amber-500" },
        { level: 1, text: "├── llm-router", color: "text-emerald-400" },
        { level: 2, text: "│   ├── ollama:aria-9b", color: "text-slate-300" },
        { level: 1, text: "├── tool-sandbox (seccomp)", color: "text-emerald-400" },
        { level: 2, text: "│   └── bash-bridge", color: "text-slate-300" },
        { level: 1, text: "└── local-db (SQLite)", color: "text-emerald-400" },
      ];
    }
    return [
      { level: 0, text: "mindmapos-cli (Headless)", color: "text-sky-400" },
      { level: 1, text: "├── agent-scheduler", color: "text-emerald-400" },
      { level: 1, text: "├── llm-router (Edge-lite)", color: "text-emerald-400" },
      { level: 1, text: "├── wireguard-tunnel", color: "text-emerald-400" },
      { level: 1, text: "└── aws-codedeploy-agent", color: "text-purple-400" },
    ];
  };

  return (
    <div className="space-y-6 text-left">
      <div className="flex items-center gap-3 text-slate-400">
        <Cpu size={18} />
        <h4 className="text-sm font-bold uppercase tracking-widest">On-Device Process Tree</h4>
      </div>
      <div className="bg-[#1a1b26] rounded-3xl p-8 font-mono text-[12px] leading-relaxed shadow-xl border border-white/5 h-full min-h-[300px]">
        {getTree().map((p, i) => (
          <div key={i} className={p.color} style={{ paddingLeft: `${p.level * 20}px` }}>{p.text}</div>
        ))}
      </div>
    </div>
  );
}

function AgentLifecycle({ platform }: { platform: 'Windows' | 'macOS' | 'Linux' | 'Edge' }) {
  const getStates = () => [
    { state: "INSTALLED",  color: "bg-slate-100 text-slate-500", desc: "Agent package verified and unpacked locally." },
    { state: "CONFIGURED", color: "bg-purple-50 text-purple-600", desc: platform === 'macOS' ? "Secrets securely stored in System Keychain." : platform === 'Windows' ? "Secrets securely stored via DPAPI." : "User credentials and triggers mapped to local tools." },
    { state: "IDLE",       color: "bg-sky-50 text-sky-600", desc: "Active in background, watching system events." },
    { state: "RUNNING",    color: "bg-emerald-50 text-emerald-600", desc: "Context active, executing native OS commands." },
    { state: "QUEUED",     color: "bg-amber-50 text-amber-600", desc: "Waiting for model slot in LLM router queue." },
    { state: "ERROR",      color: "bg-rose-50 text-rose-600", desc: "Caught exception — retry policy in effect." },
  ];
  return (
    <div className="space-y-6 text-left mt-12">
      <div className="flex items-center gap-3 text-slate-400">
        <Repeat size={18} />
        <h4 className="text-sm font-bold uppercase tracking-widest">Agent Runtime Lifecycle</h4>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {getStates().map(s => (
          <div key={s.state} className="p-4 bg-white border border-slate-100 rounded-2xl flex flex-col gap-2 hover:shadow-md transition-shadow">
             <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold w-max ${s.color}`}>{s.state}</span>
             <p className="text-[12px] text-slate-500 font-light leading-snug">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechnicalView({ platform }: { platform: 'Windows' | 'macOS' | 'Linux' | 'Edge' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="space-y-12"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <DependencyMatrix platform={platform} />
        <RuntimeProcessTree platform={platform} />
      </div>

      <AgentLifecycle platform={platform} />

      <div className="p-8 rounded-[32px] bg-sky-50/50 border border-sky-100/50 flex items-start gap-4 text-left mt-12">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sky-600 shadow-sm shrink-0">
          <ShieldCheck size={20} />
        </div>
        <div>
          <h4 className="text-[15px] font-semibold text-sky-900 mb-1">On-Device Agent Execution Runtime</h4>
          <p className="text-[13px] text-sky-800 leading-relaxed font-light">
            Each agent is an isolated process with its own LLM context, tool permissions, and lifecycle managed by the MindMapOS daemon. The daemon runs as a persistent service, ensuring all security policies are enforced at the OS kernel level.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── INSTALLATION FLOW HELPERS ────────────────────────────────── */

function TerminalMockup({ title, lines, color = "text-sky-400" }: { title: string; lines: string[]; color?: string }) {
  return (
    <div className="bg-[#1a1b26] rounded-[32px] p-8 font-mono text-[13px] text-slate-300 relative overflow-hidden shadow-2xl border border-white/5">
       <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest ml-4">{title}</span>
       </div>
       <div className="space-y-2 leading-relaxed text-left">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-3">
              {line.startsWith('#') || line.startsWith('//') ? (
                <span className="text-slate-500 italic opacity-60">{line}</span>
              ) : line.startsWith('$') || line.includes('@') ? (
                <>
                  <span className="text-emerald-400">{line.includes('@') ? 'user@mindmap:~$' : '$'}</span>
                  <span className="text-white">{line.replace(/^\$ /, '')}</span>
                </>
              ) : (
                <span className={line.startsWith('✓') ? 'text-sky-400' : line.includes('READY') || line.includes('AUTHORIZED') ? 'text-emerald-400 font-bold uppercase' : color}>{line}</span>
              )}
            </div>
          ))}
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-sky-500/5 to-transparent pointer-events-none" />
    </div>
  );
}

function InstallationSteps({ steps, platformColor }: { steps: string[]; platformColor: string }) {
  return (
    <div className="space-y-4 text-left">
      {steps.map((s, j) => (
        <div key={j} className="flex gap-4 items-start group">
          <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${platformColor} shrink-0 transition-transform group-hover:scale-150`} />
          <span className="text-slate-600 text-[14px] font-light leading-relaxed">{s}</span>
        </div>
      ))}
    </div>
  );
}

function WaitlistBlock({ platform, phase, body }: { platform: string; phase: string; body: string }) {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center gap-4">
        <StatusBadge available={false} phase={phase} />
        <span className="text-[13px] text-slate-400 font-light italic">Currently in the pipeline for global rollout.</span>
      </div>
      <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-[40px] p-12 text-center shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">
        <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center mx-auto mb-8 border border-slate-100">
           <Settings className="text-slate-300 animate-spin-slow" size={32} />
        </div>
        <h3 className="text-3xl font-semibold text-slate-900 mb-4">{platform} Engine is in Development</h3>
        <p className="text-[16px] text-slate-500 font-light leading-relaxed mb-10 max-w-md mx-auto">{body}</p>
        <button className="px-10 py-4 rounded-full bg-[#1a1b26] hover:bg-slate-800 text-white font-bold text-[14px] transition-all hover:-translate-y-0.5 shadow-2xl flex items-center gap-2 mx-auto">
          Join {platform} Waitlist <ArrowRight size={16} />
        </button>
        <div className="mt-8 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Expected Launch: {phase}</div>
      </div>
    </div>
  );
}

/* ─── PER-PLATFORM PANELS ────────────────────────────────────────── */

function WindowsPanel() {
  const [showTechnical, setShowTechnical] = useState(false);
  const steps = [
    "User downloads MindMapOS-Setup.exe from portal / marketplace",
    "UAC prompt → elevated install to C:\\Program Files\\MindMapOS\\",
    "Bundled: Node.js 20 LTS, Python 3.11, Ollama runtime, SQLite",
    "Registers Windows Service: mindmapos-daemon (auto-start on boot)",
    "Creates system tray app + Start Menu shortcut",
    "First-run: SetupPage.tsx wizard fires (your existing component)",
    "Device fingerprint generated → sent to AWS Cognito for license binding",
  ];
  const code = [
    "$ MindMapOS-Setup.exe /silent /norestart",
    "# Or via winget:",
    "$ winget install MindMapOS.MindMapOS",
    "# Post-install service check:",
    "$ sc query mindmapos-daemon",
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <StatusBadge available={true} phase="Phase 1" />
          <span className="text-[13px] text-slate-400 font-light italic">Supports Windows 10 / 11 (x64, ARM64)</span>
        </div>
        <button onClick={() => setShowTechnical(!showTechnical)} className={`px-4 py-2 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all border ${showTechnical ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>
          {showTechnical ? 'Simple View' : 'Under the Hood'}
        </button>
      </div>
      
      <AnimatePresence mode="wait">
        {!showTechnical ? (
          <motion.div key="simple" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4"><StepNumber n={1} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Run the Installer</h4></div>
              <DownloadCard recommended format="Windows Setup (.exe)" distros="Complete bundle with all required runtimes" filename="MindMapOS-Setup-1.0.4.exe" size="186 MB" ext="EXE" />
            </div>
            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-4"><StepNumber n={2} /><h4 className="text-xl font-medium tracking-tight text-slate-900">System Integration</h4></div>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                 <InstallationSteps steps={steps} platformColor="bg-sky-500" />
                 <TerminalMockup title="PowerShell" lines={code} color="text-sky-300" />
              </div>
            </div>
          </motion.div>
        ) : (
          <TechnicalView platform="Windows" />
        )}
      </AnimatePresence>
    </div>
  );
}

function MacOSPanel() {
  const [showTechnical, setShowTechnical] = useState(false);
  const steps = [
    "Drag MindMapOS.app to /Applications — signed & notarized by Apple",
    "LaunchAgent plist registered at com.mindmapos.daemon.plist",
    "Bundled runtime unpacked to ~/Library/Application Support/MindMapOS/",
    "Homebrew tap available for headless/dev installs",
    "Keychain used for API key & secret storage (no plaintext)",
    "Setup Wizard opens via WKWebView (same React component)",
  ];
  const code = [
    "# Homebrew install:",
    "$ brew install --cask mindmapos",
    "# Or tap for latest:",
    "$ brew tap mindmapos/tap",
    "$ brew install mindmapos-agent-runtime",
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <StatusBadge available={true} phase="Phase 1" />
          <span className="text-[13px] text-slate-400 font-light italic">Supports macOS 12+ (Intel & Apple Silicon)</span>
        </div>
        <button onClick={() => setShowTechnical(!showTechnical)} className={`px-4 py-2 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all border ${showTechnical ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>
          {showTechnical ? 'Simple View' : 'Under the Hood'}
        </button>
      </div>
      
      <AnimatePresence mode="wait">
        {!showTechnical ? (
          <motion.div key="simple" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4"><StepNumber n={1} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Deploy the App</h4></div>
              <DownloadCard recommended format="macOS Universal (.dmg)" distros="Apple Silicon & Intel optimized build" filename="MindMapOS-1.0.4.dmg" size="168 MB" ext="DMG" />
            </div>
            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-4"><StepNumber n={2} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Native Integration</h4></div>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                 <InstallationSteps steps={steps} platformColor="bg-amber-500" />
                 <TerminalMockup title="zsh — Apple Silicon" lines={code} color="text-amber-300" />
              </div>
            </div>
          </motion.div>
        ) : (
          <TechnicalView platform="macOS" />
        )}
      </AnimatePresence>
    </div>
  );
}

function LinuxPanel() {
  const [showTechnical, setShowTechnical] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState(LINUX_FORMATS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) { setIsDropdownOpen(false); }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const steps = [
    "Debian/Ubuntu: dpkg -i mindmapos.deb — installs to /opt/mindmapos/",
    "systemd service: mindmapos.service (enabled + started automatically)",
    "RHEL/Fedora: rpm -i mindmapos.rpm — same structure",
    "AppImage: portable, no install, runs anywhere with FUSE",
    "Headless server mode: no UI, pure daemon + REST API on localhost:7700",
    "Secrets stored via libsecret / Secret Service API",
  ];

  const terminalLines = [
    "user@mindmap:~$ " + (selectedFormat.id === 'aur' ? 'yay -S mindmapos-bin' : `sudo dpkg -i ${selectedFormat.filename}`),
    "user@mindmap:~$ mindmapos --init",
    "// Connecting to local Ollama runtime...",
    "✓ Aria 9B Model Loaded Successfully",
    "RUNTIME READY: localhost:7800"
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <StatusBadge available={true} phase="Phase 1" />
          <span className="text-[13px] text-slate-400 font-light italic">MindMapOS Runtime v1.0.4 — Build Stable</span>
        </div>
        <button onClick={() => setShowTechnical(!showTechnical)} className={`px-4 py-2 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all border ${showTechnical ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>
          {showTechnical ? 'Simple View' : 'Under the Hood'}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {!showTechnical ? (
          <motion.div key="simple" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-16">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4"><StepNumber n={1} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Choose package format</h4></div>
                <div className="relative w-full md:w-64" ref={dropdownRef}>
                   <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`w-full px-5 py-3 rounded-2xl transition-all flex items-center justify-between border ${isDropdownOpen ? 'bg-white border-sky-300 shadow-xl' : 'bg-white/60 backdrop-blur-xl border-white/80 shadow-sm hover:border-slate-300'}`}>
                     <div className="flex items-center gap-2"><Box size={16} className="text-sky-500" /><span className="text-[13px] font-semibold text-slate-700">{selectedFormat.label}</span></div>
                     <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                   </button>
                   <AnimatePresence>{isDropdownOpen && (<motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.15 }} className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl z-30 overflow-hidden p-1.5">{LINUX_FORMATS.map((f) => (<button key={f.id} onClick={() => { setSelectedFormat(f); setIsDropdownOpen(false); }} className={`w-full px-4 py-3 rounded-xl text-left flex items-center justify-between transition-colors ${selectedFormat.id === f.id ? 'bg-sky-50' : 'hover:bg-slate-50'}`}><span className={`text-[13px] ${selectedFormat.id === f.id ? 'text-sky-700 font-bold' : 'text-slate-600 font-medium'}`}>{f.label}</span>{selectedFormat.id === f.id && <Check size={14} className="text-sky-500" />}</button>))}</motion.div>)}</AnimatePresence>
                </div>
              </div>
              <AnimatePresence mode="wait"><motion.div key={selectedFormat.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><DownloadCard recommended={selectedFormat.recommended} format={selectedFormat.format} distros={selectedFormat.distros} filename={selectedFormat.filename} size={selectedFormat.size} ext={selectedFormat.ext} /></motion.div></AnimatePresence>
            </div>
            
            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-4"><StepNumber n={2} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Command Line Install</h4></div>
              <div className="space-y-4">
                 <p className="text-[14px] text-slate-500 font-light pl-2">The fastest way to install the MindMapOS daemon and all its dependencies on any supported distribution.</p>
                 <TerminalMockup 
                   title="One-liner Script" 
                   lines={[
                     "# Download and run the install script",
                     "$ curl -fsSL https://get.mindmapos.io | bash",
                     "# Verify service is active",
                     "$ systemctl status mindmapos"
                   ]} 
                   color="text-sky-300" 
                 />
              </div>
            </div>

            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-4"><StepNumber n={3} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Native Integration</h4></div>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                 <InstallationSteps steps={steps} platformColor="bg-emerald-500" />
                 <TerminalMockup title="bash" lines={terminalLines} color="text-emerald-400" />
              </div>
            </div>
          </motion.div>
        ) : (
          <TechnicalView platform="Linux" />
        )}
      </AnimatePresence>
    </div>
  );
}

function EdgePanel() {
  const [showTechnical, setShowTechnical] = useState(false);
  const steps = [
    "ARM64 build: supports RPi 4/5, NVIDIA Jetson, Synology NAS",
    "Flash SD card with MindMapOS-Pi image (Debian-based)",
    "Headless: SSH in → runs mindmapos-cli setup --headless",
    "Connects to cloud gateway over WireGuard tunnel",
    "Ideal for 24/7 automation: always-on, low power, no UI needed",
    "OTA updates pushed via AWS CodeDeploy agent on device",
  ];
  const code = [
    "# Initial setup via SSH:",
    "$ ssh pi@mindmapos.local",
    "$ mindmapos-cli setup --headless",
    "# Connect to cloud gateway:",
    "$ mindmapos-cli connect --token <YOUR_TOKEN>",
    "# Check WireGuard status:",
    "$ wg show",
  ];

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <StatusBadge available={true} phase="Phase 1 (Edge Edition)" />
          <span className="text-[13px] text-slate-400 font-light italic">Optimized for ARM64 & Headless Environments</span>
        </div>
        <button onClick={() => setShowTechnical(!showTechnical)} className={`px-4 py-2 rounded-xl text-[12px] font-bold uppercase tracking-wider transition-all border ${showTechnical ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'}`}>
          {showTechnical ? 'Simple View' : 'Under the Hood'}
        </button>
      </div>
      
      <AnimatePresence mode="wait">
        {!showTechnical ? (
          <motion.div key="simple" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4"><StepNumber n={1} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Get the Image</h4></div>
              <DownloadCard recommended format="MindMapOS Edge (.img)" distros="Pre-configured Debian image for ARM64" filename="MindMapOS-Edge-1.0.4-arm64.img.xz" size="840 MB" ext="IMG" />
            </div>
            <div className="space-y-8 pt-4">
              <div className="flex items-center gap-4"><StepNumber n={2} /><h4 className="text-xl font-medium tracking-tight text-slate-900">Headless Provisioning</h4></div>
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                 <InstallationSteps steps={steps} platformColor="bg-purple-500" />
                 <TerminalMockup title="SSH Session" lines={code} color="text-purple-300" />
              </div>
            </div>
          </motion.div>
        ) : (
          <TechnicalView platform="Edge" />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── MAIN PAGE COMPONENT ───────────────────────────────────────── */

export default function DownloadPage() {
  const [activeDevice, setActiveDevice] = useState<DeviceKey>('linux');
  const [isDeviceDropdownOpen, setIsDeviceDropdownOpen] = useState(false);
  const deviceDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (deviceDropdownRef.current && !deviceDropdownRef.current.contains(event.target as Node)) {
        setIsDeviceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentDevice = DEVICES.find(d => d.key === activeDevice) || DEVICES[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 pb-32">
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0 print:hidden" />
      <div className="fixed top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0 print:hidden" />
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply z-0 print:hidden" />

      <Navbar />

      <main className="w-full px-4 sm:px-12 pt-32 pb-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Vision & Platform Selection */}
          <div className="lg:col-span-5 space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sky-700 text-[11px] font-bold tracking-wider uppercase mb-8 shadow-sm">
                <Sparkles size={14} /> Intelligence — Native & Local
              </div>
              <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-8 leading-[1.05]">
                 Get <span className="text-sky-500">MindMapOS</span>
              </h1>
              <p className="text-[18px] text-slate-500 font-light leading-relaxed max-w-md">
                Download the runtime for your specific environment. Every command executes locally on your hardware.
              </p>
            </motion.div>

            {/* Platform Selector Dropdown */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] pl-4">Target Environment</h3>
              <div className="relative w-full max-w-sm" ref={deviceDropdownRef}>
                <button
                  onClick={() => setIsDeviceDropdownOpen(!isDeviceDropdownOpen)}
                  className={`w-full px-8 py-5 rounded-[24px] transition-all flex items-center justify-between border ${
                    isDeviceDropdownOpen 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-[1.02]' 
                      : 'bg-white/60 backdrop-blur-xl border-white/80 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl transition-transform duration-500 ${isDeviceDropdownOpen ? 'scale-110' : ''}`}>{currentDevice.emoji}</span>
                    <span className="font-semibold tracking-tight">{currentDevice.label}</span>
                  </div>
                  <ChevronDown size={20} className={`transition-transform duration-300 ${isDeviceDropdownOpen ? 'rotate-180 text-sky-400' : 'text-slate-400'}`} />
                </button>

                <AnimatePresence>
                  {isDeviceDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 right-0 mt-3 bg-white border border-slate-100 rounded-[28px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] z-30 overflow-hidden p-2"
                    >
                      {DEVICES.map((d) => (
                        <button
                          key={d.key}
                          onClick={() => {
                            setActiveDevice(d.key);
                            setIsDeviceDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3.5 rounded-2xl text-left flex items-center justify-between hover:bg-slate-50 transition-all ${activeDevice === d.key ? 'bg-sky-50' : 'hover:bg-slate-50'}`}
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-xl">{d.emoji}</span>
                            <span className={`text-[15px] ${activeDevice === d.key ? 'text-sky-700 font-bold' : 'text-slate-600 font-medium'}`}>{d.label}</span>
                          </div>
                          {activeDevice === d.key && <Check size={18} className="text-sky-500" />}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Hardware Requirements (Integrated into Left Column) */}
            <div className="pt-12 border-t border-slate-200/60 space-y-8">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Hardware Minimums</h3>
              <div className="grid gap-4">
                <div className="p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm flex items-start gap-4">
                  <Cpu size={18} className="text-sky-500 shrink-0 mt-1" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Processor</div>
                    <p className="text-[13px] text-slate-600 font-light leading-snug">x86_64 or ARM64. Intel i5+, Ryzen 5+, or Apple M1+.</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm flex items-start gap-4">
                  <Activity size={18} className="text-indigo-500 shrink-0 mt-1" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Memory</div>
                    <p className="text-[13px] text-slate-600 font-light leading-snug">4 GB minimum. 8 GB+ rec. for Aria 9B local inference.</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-white/40 border border-white/60 shadow-sm flex items-start gap-4">
                  <HardDrive size={18} className="text-emerald-500 shrink-0 mt-1" />
                  <div>
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">Storage</div>
                    <p className="text-[13px] text-slate-600 font-light leading-snug">20 GB free space for runtime and local model weights.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Links */}
            <div className="pt-12 border-t border-slate-200/60 space-y-6">
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Need help?</h3>
               <div className="flex flex-col gap-3">
                  <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/60 transition-all group">
                     <span className="text-[14px] font-medium text-slate-700">Installation Guide</span>
                     <ExternalLink size={16} className="text-slate-400 group-hover:text-sky-500 transition-colors" />
                  </a>
                  <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/60 transition-all group">
                     <span className="text-[14px] font-medium text-slate-700">Troubleshooting</span>
                     <ExternalLink size={16} className="text-slate-400 group-hover:text-sky-500 transition-colors" />
                  </a>
               </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDevice}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/40 backdrop-blur-2xl rounded-[48px] border border-white/80 p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] min-h-[700px]"
              >
                {activeDevice === 'linux' && <LinuxPanel />}
                {activeDevice === 'windows' && <WindowsPanel />}
                {activeDevice === 'macos' && <MacOSPanel />}
                {activeDevice === 'android' && <WaitlistBlock platform="Android" phase="Phase 2 (Q3 2026)" body="Experience mobile-first automation that respects the Android sandbox and permission system." />}
                {activeDevice === 'ios' && <WaitlistBlock platform="iOS" phase="Phase 2 (Q3 2026)" body="Siri Shortcuts integration combined with local Aria engine for high-privacy automation." />}
                {activeDevice === 'edge' && <EdgePanel />}
              </motion.div>
            </AnimatePresence>

            <div className="mt-12 space-y-6">
               <h3 className="text-xl font-semibold text-slate-900 px-4">Common Questions</h3>
               <div className="grid sm:grid-cols-2 gap-4">
                  <Accordion q="Does it require an internet connection?">
                    Only for the initial download and marketplace updates. Once installed, MindMapOS executes all commands and processes all AI local-first.
                  </Accordion>
                  <Accordion q="Is it safe for my system?">
                    Every command MindMapOS generates passes through the Guardian Layer (AST Engine) which analyzes risk before execution.
                  </Accordion>
                  <Accordion q="Can I use my own models?">
                    Yes. MindMapOS is Ollama-compatible. You can switch to any local model you have installed on your system.
                  </Accordion>
               </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
