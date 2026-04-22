import React from 'react';
import { motion } from 'motion/react';
import { FileCode, ShieldCheck, Zap, ShoppingBag, Terminal, CheckCircle2, ChevronRight, Package, HardDrive, Search } from 'lucide-react';

export default function DeveloperSection() {
  const packageFiles = [
    { name: "manifest.json", color: "text-sky-500", desc: "Metadata, permissions, and llm_requirements" },
    { name: "agent.py", color: "text-amber-500", desc: "The core logic and ReAct loop implementation" },
    { name: "tools/", color: "text-emerald-500", desc: "Directory for JSON tool definitions" },
    { name: "config-ui.tsx", color: "text-indigo-500", desc: "Custom configuration form for the setup wizard" },
    { name: "signature.sig", color: "text-slate-400", desc: "Ed25519 cryptographic signature" },
  ];

  const pipelineSteps = [
    { n: "01", title: "CLI Publish", desc: "Developer signs and zips the .mmos package locally." },
    { n: "02", title: "Cloud Review", desc: "Automated Lambda scans for unsafe eval() or un-declared network calls." },
    { n: "03", title: "State Store", desc: "DynamoDB indexes metadata, pricing, and version history." },
    { n: "04", title: "User Purchase", desc: "Stripe handles checkout and license key generation." },
    { n: "05", title: "Secure Pull", desc: "Device daemon verifies signature and extracts to local agents/ dir." },
    { n: "06", title: "Runtime Load", desc: "Scheduler registers triggers and starts the agent sandbox." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-6">Build for MindMapOS.</h2>
        <p className="text-slate-500 text-[16px] font-light">Join the ecosystem of creators building the next generation of autonomous agents and workflows.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        {/* Package Structure */}
        <div className="space-y-8">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                 <Package size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">The .mmos Package</h3>
           </div>
           <div className="bg-[#1a1b26] rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="font-mono text-[13px] space-y-4 relative z-10">
                 <div className="text-slate-500 mb-4">// email-bot-v2.1.3.mmos structure</div>
                 {packageFiles.map((file, i) => (
                   <div key={i} className="flex gap-4">
                      <span className={`${file.color} w-32 shrink-0`}>{file.name}</span>
                      <span className="text-slate-500 font-light italic"># {file.desc}</span>
                   </div>
                 ))}
              </div>
           </div>
           <p className="text-slate-500 font-light text-[15px] pl-2">
             All packages are OCI-compatible and utilize standard web technologies (Python, JSON, React) for maximum flexibility.
           </p>
        </div>

        {/* Pipeline */}
        <div className="space-y-8">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                 <Search size={20} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Distribution Pipeline</h3>
           </div>
           <div className="grid gap-3">
              {pipelineSteps.map((step) => (
                <div key={step.n} className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl hover:shadow-md transition-shadow group">
                   <div className="text-lg font-bold text-slate-200 group-hover:text-sky-500 transition-colors">{step.n}</div>
                   <div>
                      <div className="font-semibold text-slate-900 mb-1">{step.title}</div>
                      <div className="text-sm text-slate-500 font-light">{step.desc}</div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Creator CTA */}
      <div className="bg-sky-50 rounded-[48px] p-12 text-center border border-sky-100">
         <h3 className="text-3xl font-semibold text-slate-900 mb-4">Start building today.</h3>
         <p className="text-slate-500 font-light max-w-xl mx-auto mb-10 text-[17px]">
            Download the MindMap CLI to initialize, test, and publish your first agent to the marketplace.
         </p>
         <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3.5 rounded-full bg-[#1a1b26] text-white font-bold text-sm shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2">
               Download SDK <Terminal size={16} />
            </button>
            <button className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-all">
               Documentation
            </button>
         </div>
      </div>
    </div>
  );
}
