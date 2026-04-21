import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Command, ArrowRight, CheckCircle2, Clock, HardDrive, Cpu, Wifi,
  ChevronDown, ChevronUp, Copy, Check, ExternalLink, ShieldCheck,
  Smartphone, Monitor, Tablet, Apple
} from 'lucide-react';

type DeviceKey = 'linux' | 'windows' | 'macos' | 'android' | 'ios' | 'tablet';
type TabletSub = 'android' | 'ipad' | 'linux';

const DEVICES: { key: DeviceKey; emoji: string; label: string }[] = [
  { key: 'linux', emoji: '🐧', label: 'Linux' },
  { key: 'windows', emoji: '🪟', label: 'Windows' },
  { key: 'macos', emoji: '🍎', label: 'macOS' },
  { key: 'android', emoji: '📱', label: 'Android' },
  { key: 'ios', emoji: '📱', label: 'iOS' },
  { key: 'tablet', emoji: '📟', label: 'Tablet' },
];

function CopyChip({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-sky-50 border border-slate-200 hover:border-sky-200 rounded-full text-[12px] font-mono text-slate-600 hover:text-sky-700 transition-all group"
    >
      {text}
      {copied ? <Check size={11} className="text-emerald-500" /> : <Copy size={11} className="opacity-50 group-hover:opacity-100" />}
    </button>
  );
}

function StatusBadge({ available }: { available: boolean }) {
  return available ? (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-[11px] font-bold tracking-wider uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available Now — Phase 1
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-bold tracking-wider uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Coming Soon
    </span>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#1a1b26] text-white flex items-center justify-center font-bold text-[15px] shrink-0 shadow-md">
      {n}
    </div>
  );
}

function DownloadCard({ recommended, format, distros, filename, size, ext }: {
  recommended?: boolean; format: string; distros: string; filename: string; size: string; ext: string;
}) {
  return (
    <div className={`relative rounded-[24px] border p-6 transition-all ${recommended ? 'bg-white border-sky-200 shadow-[0_8px_30px_-8px_rgba(14,165,233,0.15)]' : 'bg-white/60 border-slate-200/60'}`}>
      {recommended && (
        <div className="absolute -top-3 left-6 bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
          ⭐ Recommended
        </div>
      )}
      <div className="flex items-start justify-between gap-4 mt-1">
        <div>
          <div className="font-semibold text-slate-800 text-[15px] mb-1">{format}</div>
          <div className="text-[13px] text-slate-500 mb-3">{distros}</div>
          <CopyChip text={filename} />
        </div>
        <div className="text-right shrink-0">
          <div className="text-[12px] text-slate-400 mb-2">{size}</div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-[13px] font-semibold transition-all hover:-translate-y-0.5 shadow-sky-500/30 shadow-md">
            ↓ Download {ext}
          </button>
        </div>
      </div>
    </div>
  );
}

function Accordion({ q, children }: { q: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors">
        <span className="font-medium text-slate-800 text-[14px]">{q}</span>
        {open ? <ChevronUp size={16} className="text-slate-400 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
            <div className="px-6 pb-5 text-[13px] text-slate-500 leading-relaxed space-y-2 border-t border-slate-100 pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WaitlistBlock({ platform, phase, body }: { platform: string; phase: string; body: string }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <StatusBadge available={false} />
        <span className="text-[13px] text-slate-400">In development · Join the waitlist</span>
      </div>
      <div className="bg-gradient-to-br from-slate-50 to-sky-50/30 border border-slate-200/60 rounded-[32px] p-10 text-center max-w-xl mx-auto">
        <h3 className="text-2xl font-semibold text-slate-800 mb-4">{platform} support is in development.</h3>
        <p className="text-[15px] text-slate-500 font-light leading-relaxed mb-8">{body}</p>
        <button className="px-8 py-3.5 rounded-full bg-[#1a1b26] hover:bg-slate-800 text-white font-medium text-[14px] transition-all hover:-translate-y-0.5 shadow-lg flex items-center gap-2 mx-auto">
          Join {platform} Waitlist <ArrowRight size={15} />
        </button>
        <p className="text-[11px] text-slate-400 mt-4">Expected: {phase}</p>
      </div>
    </div>
  );
}

function QuickStats() {
  const stats = [
    { icon: <Clock size={14}/>, label: 'Install Time', val: 'Under 5 min' },
    { icon: <HardDrive size={14}/>, label: 'Disk Space', val: '20 GB free' },
    { icon: <Cpu size={14}/>, label: 'RAM', val: '4 GB min · 8 GB rec.' },
    { icon: <Wifi size={14}/>, label: 'Internet', val: 'Install only' },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {stats.map((s, i) => (
        <div key={i} className="bg-white/70 border border-slate-100 rounded-2xl p-4 flex flex-col gap-1">
          <div className="text-slate-400 flex items-center gap-1.5">{s.icon}<span className="text-[11px] uppercase tracking-wider font-bold">{s.label}</span></div>
          <div className="text-[14px] font-semibold text-slate-800">{s.val}</div>
        </div>
      ))}
    </div>
  );
}

function LinuxPanel() {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center gap-4">
        <StatusBadge available={true} />
        <span className="text-[13px] text-slate-400">Fully supported · Actively developed</span>
      </div>
      <QuickStats />

      {/* Step 1 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <StepNumber n={1} />
          <h3 className="text-xl font-semibold text-slate-800">Download</h3>
        </div>
        <p className="text-[13px] text-slate-400 ml-13 pl-1">Choose your format</p>
        <div className="space-y-4 ml-0">
          <DownloadCard recommended format="AppImage · Works on any Linux distro" distros="Double-click and it runs. No install needed." filename="MindMapOS-1.0.0-x86_64.AppImage" size="~210 MB" ext=".AppImage" />
          <DownloadCard format=".deb Package" distros="Ubuntu · Debian · Linux Mint — install via Software Manager" filename="mindmapos_1.0.0_amd64.deb" size="~180 MB" ext=".deb" />
          <DownloadCard format=".rpm Package" distros="Fedora · openSUSE · RHEL — install via Software Manager" filename="mindmapos-1.0.0.x86_64.rpm" size="~185 MB" ext=".rpm" />
        </div>

        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-[13px] text-slate-600 space-y-2">
          <div className="font-semibold text-slate-700 mb-3">Not sure which to pick?</div>
          {[
            ['AppImage', 'Just want to try it, or unsure which distro format you need. Works everywhere.'],
            ['.deb', 'Ubuntu, Debian, Linux Mint, or any Debian-based distro.'],
            ['.rpm', 'Fedora, openSUSE, RHEL, or any Red Hat-based distro.'],
          ].map(([fmt, desc]) => (
            <div key={fmt} className="flex gap-3"><span className="font-mono text-sky-600 shrink-0">{fmt}</span><span className="text-slate-500">{desc}</span></div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-2 text-[13px]">
          {[
            { ok: true, t: 'Ubuntu 22.04 LTS, 24.04 LTS' },
            { ok: true, t: 'Debian 12' },
            { ok: true, t: 'Linux Mint 21.x' },
            { ok: true, t: 'Fedora 39+' },
            { ok: true, t: 'openSUSE Leap 15.5+' },
            { ok: null, t: 'Other distros — AppImage recommended' },
            { ok: false, t: '32-bit systems — not supported' },
          ].map(({ ok, t }, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-600">
              <span>{ok === true ? '✅' : ok === null ? '⚠️' : '❌'}</span>{t}
            </div>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={2} /><h3 className="text-xl font-semibold text-slate-800">Install</h3></div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'AppImage', steps: [
                'Find MindMapOS-1.0.0-x86_64.AppImage in your Downloads folder.',
                'Right-click → Properties → Permissions tab.',
                'Check "Allow executing file as program" → OK.',
                'Double-click the file. MindMapOS opens.',
              ]
            },
            {
              title: '.deb Package', steps: [
                'Open Downloads. Find mindmapos_1.0.0_amd64.deb.',
                'Double-click — Software Manager opens automatically.',
                'Click Install. Enter your system password.',
                'Done.',
              ]
            },
            {
              title: '.rpm Package', steps: [
                'Open Downloads. Find mindmapos-1.0.0.x86_64.rpm.',
                'Double-click — GNOME Software or Discover opens.',
                'Click Install. Enter your system password.',
              ]
            },
          ].map((block, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-sm">
              <div className="font-semibold text-slate-800 text-[14px] mb-4 pb-3 border-b border-slate-100">{block.title}</div>
              <ol className="space-y-3">
                {block.steps.map((s, j) => (
                  <li key={j} className="flex gap-3 text-[13px] text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">{j + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      {/* Step 3 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={3} /><h3 className="text-xl font-semibold text-slate-800">Setup Wizard</h3></div>
        <p className="text-[14px] text-slate-500">4 short screens. Takes about 2 minutes. Runs in your browser after install.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { n: '1 of 4', title: 'Welcome', body: 'Let\'s get you set up. We\'ll ask four things and you\'re ready to go.' },
            { n: '2 of 4', title: 'Choose AI Model', body: 'On-device (private, ~5 GB download) or Cloud AI with your API key.' },
            { n: '3 of 4', title: 'Experience Level', body: 'Sets how much MindMapOS explains before acting. Change any time.' },
            { n: '4 of 4', title: 'Auto-Start', body: 'Start with your computer? Uses less than 200 MB RAM at idle.' },
          ].map((step, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-sm">
              <div className="text-[10px] font-bold uppercase tracking-widest text-sky-500 mb-2">Screen {step.n}</div>
              <div className="font-semibold text-slate-800 text-[14px] mb-2">{step.title}</div>
              <p className="text-[13px] text-slate-500 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Step 4 */}
      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={4} /><h3 className="text-xl font-semibold text-slate-800">Using MindMapOS</h3></div>
        <div className="bg-[#1a1b26] rounded-[24px] p-6 text-white">
          <div className="text-[12px] text-slate-400 mb-2">MindMapOS opens in your browser at</div>
          <CopyChip text="http://localhost:7800" />
          <p className="text-[13px] text-slate-400 mt-3">Only accessible from your computer — never from the internet.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 text-[13px]">
          {[
            { step: '1', label: 'Type', body: 'Describe what you want in plain language. "Install Spotify on my computer"' },
            { step: '2', label: 'Review', body: 'MindMapOS shows the full plan before doing anything. You see every step.' },
            { step: '3', label: 'Confirm', body: 'Click Confirm. Live progress shown in chat. Plain-language summary when done.' },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-sm flex gap-4">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 font-bold text-[13px] flex items-center justify-center shrink-0">{s.step}</div>
              <div><div className="font-semibold text-slate-800 mb-1">{s.label}</div><div className="text-slate-500">{s.body}</div></div>
            </div>
          ))}
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-800">Troubleshooting</h3>
        <div className="space-y-2">
          <Accordion q="AppImage won't open">
            <p>The file probably isn't marked as executable.</p>
            <ol className="list-decimal list-inside space-y-1 mt-2">
              <li>Right-click the AppImage → Properties → Permissions tab</li>
              <li>Check "Allow executing file as program" → OK</li>
              <li>Double-click again</li>
            </ol>
            <p className="mt-2">Still not opening? Download the .deb or .rpm version instead.</p>
          </Accordion>
          <Accordion q=".deb or .rpm double-click does nothing">
            <ol className="list-decimal list-inside space-y-1">
              <li>Right-click the file → Open With</li>
              <li>Choose Software Install or GDebi Package Installer</li>
              <li>Click Install in the window that appears</li>
            </ol>
          </Accordion>
          <Accordion q="Setup Wizard doesn't open after install">
            <p>Open your browser manually and go to <CopyChip text="http://localhost:7800" /></p>
            <p className="mt-2">If you see a connection error, wait 15 seconds and try again. MindMapOS may still be starting up.</p>
          </Accordion>
          <Accordion q="AI model download is very slow or appears stuck">
            <p>The model is 5 GB — it can take 5–20 minutes. If stuck for more than 5 minutes with no movement, click Pause Download then Resume Download.</p>
            <p className="mt-2">The download resumes from where it stopped — not from zero.</p>
          </Accordion>
          <Accordion q="I want to start over or uninstall">
            <p><strong>Reset:</strong> Settings → Advanced → Reset MindMapOS. Wipes your data and returns to the Setup Wizard.</p>
            <p className="mt-2"><strong>Full uninstall:</strong> Open your Software Manager, search MindMapOS, click Uninstall.</p>
            <p className="mt-2"><strong>Remove local AI model:</strong> Settings → AI Model → Remove Local Model (recovers ~5 GB).</p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

function WindowsPanel() {
  return (
    <WaitlistBlock
      platform="Windows"
      phase="Phase 3 · Q1 2027"
      body="MindMapOS is being built for Windows with a standard .exe setup wizard — no commands, no config files. Same Guardian Layer. Same plain-language experience. Same local-first privacy."
    />
  );
}

function MacPanel() {
  return (
    <WaitlistBlock
      platform="macOS"
      phase="Phase 3 · Q1 2027"
      body="The macOS version installs exactly like any Mac app — open the .dmg, drag to Applications, launch. Native Apple Silicon and Intel support. Credentials stored in macOS Keychain."
    />
  );
}

function AndroidPanel() {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-bold tracking-wider uppercase">
          🔜 Coming — Phase 2
        </span>
        <span className="text-[13px] text-slate-400">In development · Join the waitlist</span>
      </div>

      <div className="grid sm:grid-cols-4 gap-3">
        {[
          { icon: '🤖', label: 'Android', val: '12 or later' },
          { icon: '🧠', label: 'RAM', val: '4 GB minimum' },
          { icon: '💾', label: 'Storage', val: '3 GB free' },
          { icon: '⚙️', label: 'CPU', val: 'ARM64 (2020+)' },
        ].map((s, i) => (
          <div key={i} className="bg-white/70 border border-slate-100 rounded-2xl p-4">
            <div className="text-lg mb-1">{s.icon}</div>
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">{s.label}</div>
            <div className="text-[14px] font-semibold text-slate-800">{s.val}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={1} /><h3 className="text-xl font-semibold text-slate-800">Download</h3></div>
        <div className="space-y-4">
          <div className="relative rounded-[24px] border border-sky-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(14,165,233,0.15)]">
            <div className="absolute -top-3 left-6 bg-sky-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">⭐ Recommended</div>
            <div className="flex items-center justify-between gap-4 mt-1">
              <div>
                <div className="font-semibold text-slate-800 mb-1">Google Play Store</div>
                <div className="text-[13px] text-slate-500">Tap install — works like any other Android app.</div>
              </div>
              <button className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-[13px] font-semibold transition-all hover:-translate-y-0.5 shadow-md shadow-sky-500/30 shrink-0">
                Get on Play Store
              </button>
            </div>
          </div>
          <div className="rounded-[24px] border border-slate-200/60 bg-white/60 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-slate-800 mb-1">APK Direct Download · Beta</div>
                <div className="text-[13px] text-slate-500 mb-2">For beta testers and advanced users.</div>
                <CopyChip text="MindMapOS-1.0.0-release.apk" />
              </div>
              <div className="text-right shrink-0">
                <div className="text-[12px] text-slate-400 mb-2">~85 MB</div>
                <button className="px-5 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-[13px] font-semibold transition-all hover:-translate-y-0.5">↓ Download APK</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={2} /><h3 className="text-xl font-semibold text-slate-800">Permissions</h3></div>
        <div className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 px-6 py-3 border-b border-slate-100 bg-slate-50">
            <span>Permission</span><span>Why it's needed</span>
          </div>
          {[
            ['Storage / Files', 'To manage, organise, and move your files'],
            ['Notifications', 'Task confirmation alerts'],
            ['Accessibility', 'To perform actions after you confirm them'],
            ['Battery Optimisation', 'So Android doesn\'t suspend MindMapOS mid-task'],
          ].map(([perm, why], i) => (
            <div key={i} className="grid grid-cols-2 px-6 py-3.5 border-b border-slate-50 last:border-0 text-[13px]">
              <span className="font-medium text-slate-700">{perm}</span>
              <span className="text-slate-500">{why}</span>
            </div>
          ))}
        </div>
        <p className="text-[13px] text-slate-400">Decline any permission. MindMapOS tells you what won't work. Nothing is forced.</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={3} /><h3 className="text-xl font-semibold text-slate-800">What You Can Do</h3></div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Device Management', items: ['"What\'s using the most battery right now?"', '"Free up storage — I\'m almost full"', '"Clear cache across all my apps"'] },
            { title: 'File Organisation', items: ['"Find all screenshots from last month"', '"Move WhatsApp images to a Saved folder"', '"Delete duplicate photos"'] },
            { title: 'Connected Accounts', items: ['"What needs my attention in Gmail today?"', '"Add a dentist appointment next Friday"', '"Find the budget spreadsheet in Drive"'] },
            { title: 'Automation', items: ['"Turn on Do Not Disturb at 10pm nightly"', '"Remind me to drink water every 2 hours"', '"Log step count to fitness spreadsheet"'] },
          ].map((cat, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-sm">
              <div className="font-semibold text-slate-800 text-[14px] mb-3">{cat.title}</div>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-[13px] text-slate-500 bg-slate-50 rounded-xl px-3 py-2 font-mono">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <button className="px-8 py-3.5 rounded-full bg-[#1a1b26] hover:bg-slate-800 text-white font-medium text-[14px] transition-all hover:-translate-y-0.5 shadow-lg flex items-center gap-2 mx-auto">
          Join Android Waitlist <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

function IosPanel() {
  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-700 text-[11px] font-bold tracking-wider uppercase">🔜 Coming — Phase 2</span>
        <span className="text-[13px] text-slate-400">In development · Join the waitlist</span>
      </div>

      <div className="bg-slate-50 border border-slate-200/60 rounded-[24px] p-6 space-y-4">
        <div className="font-semibold text-slate-800 text-[15px] mb-1">A note on iOS before you read on</div>
        <p className="text-[13px] text-slate-500 leading-relaxed">iOS is Apple's most controlled platform. Here's exactly what that means — no surprises.</p>
        <div className="grid sm:grid-cols-2 gap-4 text-[13px]">
          <div className="space-y-2">
            <div className="font-semibold text-emerald-600 flex items-center gap-2"><CheckCircle2 size={14}/> What MindMapOS can do</div>
            {['Manage your photos and files', 'Connect Google accounts (Drive, Gmail, Calendar)', 'Create reminders, events, and notes', 'Control Shortcuts and automations', 'System insights — battery, storage, app sizes'].map((t, i) => (
              <div key={i} className="flex items-start gap-2 text-slate-600"><span className="text-emerald-500 mt-0.5">✅</span>{t}</div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-slate-500 flex items-center gap-2"><ShieldCheck size={14}/> What Apple restricts</div>
            {["Deep system-level access — all apps are sandboxed", "True background service — iOS suspends background apps", "On-device AI on older devices (available on iPhone 15 Pro+)"].map((t, i) => (
              <div key={i} className="flex items-start gap-2 text-slate-500"><span className="text-slate-300 mt-0.5">❌</span>{t}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-3">
        {[{ label: 'iOS', val: '17 or later' }, { label: 'Device', val: 'iPhone 12+' }, { label: 'Storage', val: '2 GB free' }].map((s, i) => (
          <div key={i} className="bg-white/70 border border-slate-100 rounded-2xl p-4">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">{s.label}</div>
            <div className="text-[14px] font-semibold text-slate-800">{s.val}</div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={1} /><h3 className="text-xl font-semibold text-slate-800">Download</h3></div>
        <div className="rounded-[24px] border border-sky-200 bg-white p-6 shadow-[0_8px_30px_-8px_rgba(14,165,233,0.15)] flex items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-slate-800 mb-1">App Store</div>
            <div className="text-[13px] text-slate-500">Tap install — works like any other iPhone app.</div>
          </div>
          <button className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-[13px] font-semibold transition-all hover:-translate-y-0.5 shadow-md shadow-sky-500/30 shrink-0 flex items-center gap-2">
            <Apple size={14}/> App Store
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={2} /><h3 className="text-xl font-semibold text-slate-800">Permissions</h3></div>
        <div className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-sm">
          <div className="grid grid-cols-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 px-6 py-3 border-b border-slate-100 bg-slate-50">
            <span>Permission</span><span>Why it's needed</span>
          </div>
          {[
            ['Photos', 'To manage and organise your photo library'],
            ['Files & Folders', 'To work with documents in the Files app'],
            ['Contacts', 'To reference people when you mention them'],
            ['Calendars', 'To read your schedule and create events'],
            ['Notifications', 'Task confirmation alerts'],
            ['Siri & Shortcuts', 'To trigger tasks from Siri or widgets'],
          ].map(([perm, why], i) => (
            <div key={i} className="grid grid-cols-2 px-6 py-3.5 border-b border-slate-50 last:border-0 text-[13px]">
              <span className="font-medium text-slate-700">{perm}</span>
              <span className="text-slate-500">{why}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3"><StepNumber n={3} /><h3 className="text-xl font-semibold text-slate-800">What You Can Do</h3></div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: 'Photos & Files', items: ['"Find all photos from my Goa trip"', '"Delete screenshots I\'ve already looked at"', '"Back up Voice Memos to Google Drive"'] },
            { title: 'Calendar & Productivity', items: ['"What\'s on my calendar this week?"', '"Schedule a call with Meera on Thursday at 4pm"', '"Remind me to follow up tomorrow morning"'] },
            { title: 'System Insights', items: ['"Which apps drain my battery the most?"', '"How much storage is WhatsApp using?"', '"What\'s filling up my iCloud?"'] },
            { title: 'Connected Accounts', items: ['"Find the proposal in my Drive"', '"Send meeting notes to the team via Gmail"', '"Add this week\'s expenses to my Google Sheet"'] },
          ].map((cat, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-sm">
              <div className="font-semibold text-slate-800 text-[14px] mb-3">{cat.title}</div>
              <ul className="space-y-2">
                {cat.items.map((item, j) => <li key={j} className="text-[13px] text-slate-500 bg-slate-50 rounded-xl px-3 py-2 font-mono">{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center pt-4">
        <button className="px-8 py-3.5 rounded-full bg-[#1a1b26] hover:bg-slate-800 text-white font-medium text-[14px] transition-all hover:-translate-y-0.5 shadow-lg flex items-center gap-2 mx-auto">
          Join iOS Waitlist <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}

function TabletPanel() {
  const [sub, setSub] = useState<TabletSub>('android');
  const subs: { key: TabletSub; label: string }[] = [
    { key: 'android', label: '🤖 Android Tablet' },
    { key: 'ipad', label: '🍎 iPad' },
    { key: 'linux', label: '🐧 Linux Tablet' },
  ];
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold text-slate-800 text-[15px] mb-4">Which tablet are you using?</h3>
        <div className="flex flex-wrap gap-2">
          {subs.map(s => (
            <button key={s.key} onClick={() => setSub(s.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${sub === s.key ? 'bg-[#1a1b26] text-white border-[#1a1b26]' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={sub} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
          {sub === 'android' && (
            <div className="space-y-6">
              <p className="text-[14px] text-slate-500">The Android tablet app is the same as the Android phone app — optimised for larger screens with a split-panel layout.</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: 'Split Panel Layout', body: 'Chat on the left, live action log and plan view on the right. Both panels visible at the same time.' },
                  { title: 'Hardware Keyboard', body: 'Full keyboard support. Tab to navigate. Enter to confirm a plan.' },
                  { title: 'Stylus Support', body: 'Samsung S-Pen, Lenovo USI Pen — handwrite your request directly in the chat input.' },
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-sm">
                    <div className="font-semibold text-slate-800 text-[14px] mb-2">{f.title}</div>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-[13px] font-semibold transition-all flex items-center gap-2">
                View Android Installation Guide <ArrowRight size={14}/>
              </button>
            </div>
          )}
          {sub === 'ipad' && (
            <div className="space-y-6">
              <p className="text-[14px] text-slate-500">The iPad app is the same as the iPhone app — optimised for iPadOS with a split-panel layout.</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: 'Split Panel Layout', body: 'Works in Stage Manager on iPad Pro and iPad Air. Both panels visible simultaneously.' },
                  { title: 'Apple Pencil', body: 'Write directly in the chat input. Drag files from the Files app into the conversation.' },
                  { title: 'Multitasking', body: 'Use MindMapOS in Split View or Slide Over alongside any other app.' },
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-sm">
                    <div className="font-semibold text-slate-800 text-[14px] mb-2">{f.title}</div>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-[13px] font-semibold transition-all flex items-center gap-2">
                View iOS Installation Guide <ArrowRight size={14}/>
              </button>
            </div>
          )}
          {sub === 'linux' && (
            <div className="space-y-6">
              <p className="text-[14px] text-slate-500">Linux tablets run the full Linux desktop version of MindMapOS — all features, full system access, everything.</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: 'Touch Input', body: 'The MindMapOS browser interface works with touch input natively. Tap buttons, scroll, and interact like any touch app.' },
                  { title: 'Orientation', body: 'Interface adapts to portrait and landscape automatically.' },
                  { title: 'Keyboard', body: 'On-screen keyboard works. A physical keyboard is recommended for tasks requiring a lot of typing.' },
                ].map((f, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-sm">
                    <div className="font-semibold text-slate-800 text-[14px] mb-2">{f.title}</div>
                    <p className="text-[13px] text-slate-500 leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-[13px] font-semibold transition-all flex items-center gap-2">
                View Linux Installation Guide <ArrowRight size={14}/>
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const PANEL_MAP: Record<DeviceKey, React.ComponentType> = {
  linux: LinuxPanel, windows: WindowsPanel, macos: MacPanel,
  android: AndroidPanel, ios: IosPanel, tablet: TabletPanel,
};

export default function DownloadPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const initialDevice = (searchParams.get('device') as DeviceKey) || 'linux';
  const [device, setDevice] = useState<DeviceKey>(
    DEVICES.some(d => d.key === initialDevice) ? initialDevice : 'linux'
  );

  const selectDevice = (key: DeviceKey) => {
    setDevice(key);
    const url = new URL(window.location.href);
    url.searchParams.set('device', key);
    window.history.replaceState({}, '', url.toString());
  };

  const ActivePanel = PANEL_MAP[device];
  const activeDevice = DEVICES.find(d => d.key === device)!;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans overflow-x-clip selection:bg-sky-100 selection:text-sky-900">
      {/* Ambient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-[#F8FAFC]/30 backdrop-blur-sm border-b border-slate-200/50">
        <div className="pt-4 pb-4 px-4 sm:px-8 max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white/50 backdrop-blur-sm">
              <Command size={18} className="text-slate-700" />
            </div>
            <span className="font-bold text-lg tracking-tight">MindMapOS</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">Home</Link>
            <Link to="/app" className="px-5 py-2 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold transition-all shadow-sky-500/30 shadow-md hover:-translate-y-0.5">
              Open App
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-8">
        {/* Page Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sky-700 text-[11px] font-bold tracking-wider uppercase mb-6 shadow-sm">
            Installation & Setup
          </div>
          <h1 className="text-[52px] md:text-[64px] font-medium tracking-[-0.03em] text-[#111827] mb-5 leading-[1.05]">
            Download. Install. Done.
          </h1>
          <p className="text-[18px] text-slate-500 font-light leading-relaxed max-w-xl mx-auto mb-4">
            Pick your device. Download the installer. Run it like any other app.<br />MindMapOS handles the rest.
          </p>
          <p className="text-[13px] text-slate-400 font-medium">No terminal. No commands. No technical knowledge needed.</p>
        </motion.div>

        {/* Device Selector */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-wrap justify-center gap-2 mb-14">
          {DEVICES.map(d => (
            <button key={d.key} onClick={() => selectDevice(d.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                device === d.key
                  ? 'bg-[#1a1b26] text-white border-[#1a1b26] shadow-md'
                  : 'bg-white/70 text-slate-600 border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-sm'
              }`}>
              <span>{d.emoji}</span> {d.label}
            </button>
          ))}
        </motion.div>

        {/* Active Panel */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={device}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">{activeDevice.emoji}</span>
                <h2 className="text-2xl font-semibold text-slate-800">{activeDevice.label}</h2>
              </div>
              <ActivePanel />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="max-w-5xl mx-auto mt-24 pt-12 border-t border-slate-200/60 space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/70 border border-slate-100 rounded-[32px] p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Something not working?</h3>
              <div className="space-y-3">
                {[
                  { icon: '📖', label: 'Browse All Docs', href: 'https://docs.mindmapos.com' },
                  { icon: '💬', label: 'Community Forum', href: 'https://community.mindmapos.com' },
                  { icon: '🐛', label: 'Report a Bug', href: 'https://github.com/mindmapos/issues' },
                  { icon: '📧', label: 'Contact Support', href: 'mailto:support@mindmapos.com' },
                ].map((link, i) => (
                  <a key={i} href={link.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-600 hover:text-sky-600 group">
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-[14px] font-medium">{link.label}</span>
                    <ExternalLink size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
              <p className="text-[12px] text-slate-400 mt-4 px-4">We aim to reply within 24 hours.</p>
            </div>

            <div className="bg-white/70 border border-slate-100 rounded-[32px] p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-6">Platform Availability</h3>
              <div className="space-y-3">
                {[
                  { emoji: '✅', platform: 'Linux', status: 'Available Now', detail: 'v1.0.0 · April 2026' },
                  { emoji: '🔜', platform: 'Android', status: 'Phase 2', detail: 'Q3 2026' },
                  { emoji: '🔜', platform: 'iOS', status: 'Phase 2', detail: 'Q3 2026' },
                  { emoji: '🔜', platform: 'Windows', status: 'Phase 3', detail: 'Q1 2027' },
                  { emoji: '🔜', platform: 'macOS', status: 'Phase 3', detail: 'Q1 2027' },
                ].map((p, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <span>{p.emoji}</span>
                      <span className="text-[14px] font-medium text-slate-700">{p.platform}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-[12px] font-semibold ${p.emoji === '✅' ? 'text-emerald-600' : 'text-amber-500'}`}>{p.status}</div>
                      <div className="text-[11px] text-slate-400">{p.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 rounded-full border border-slate-200 text-[13px] font-semibold text-slate-600 hover:bg-slate-50 hover:border-sky-200 hover:text-sky-600 transition-all">
                Get Notified When Your Platform Launches →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
