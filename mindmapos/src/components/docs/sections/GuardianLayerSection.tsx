import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Shield, AlertCircle, CheckCircle, Lock } from 'lucide-react';

export default function GuardianLayerSection() {
  return (
    <section id="guardian-layer" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="03" label="Guardian Layer" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Security by design, <br /> not as an afterthought.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            The Guardian Layer is an AST-based safety engine that inspects every command before it hits your OS.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="right">
            <div className="space-y-6">
              {[
                { icon: <Shield className="text-sky-500" />, title: "Risk Classification", desc: "Every action is categorized by its potential impact on your system." },
                { icon: <Lock className="text-teal-500" />, title: "Local Analysis", desc: "Safety checks happen entirely on your device. No data leaks." },
                { icon: <AlertCircle className="text-amber-500" />, title: "Human-in-the-loop", desc: "High-risk actions always require your explicit confirmation." },
                { icon: <CheckCircle className="text-emerald-500" />, title: "Audit Trail", desc: "Complete history of every command, plan, and execution." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-[15px] text-slate-500 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left">
            <div className="bg-[#1a1b26] rounded-[32px] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
               <div className="relative z-10">
                 <div className="text-sky-400 font-mono text-sm mb-4">guardian_engine --analyze</div>
                 <div className="space-y-3 font-mono text-sm">
                   <div className="text-slate-400">{">"} Analyzing plan...</div>
                   <div className="text-emerald-400">✓ AST validation passed</div>
                   <div className="text-emerald-400">✓ Risk level: LOW (File Move)</div>
                   <div className="text-sky-400">✓ Auto-approve enabled</div>
                   <div className="pt-4 text-white font-bold">Execution Authorized.</div>
                 </div>
               </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Security Infrastructure Summary */}
        <ScrollReveal delay={0.2}>
          <div className="bg-slate-50 border border-slate-100 rounded-[40px] p-8 md:p-12 mt-12">
             <div className="text-center mb-12">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">Hardened Infrastructure</h3>
                <p className="text-slate-500 font-light">Layered protection at the transport, storage, and kernel levels.</p>
             </div>
             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "mTLS Transport", desc: "Encrypted device-to-cloud tunnel with unique certs." },
                  { label: "Hardware Vault", desc: "Secrets stored via DPAPI, Keychain, or libsecret." },
                  { label: "Code Signing", desc: "All agent packages verified with ed25519 signatures." },
                  { label: "Process Isolation", desc: "seccomp-bpf (Linux) and AppContainer (Windows) sandboxing." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
                     <div className="text-[10px] font-bold text-sky-500 uppercase tracking-widest mb-2">{item.label}</div>
                     <p className="text-[13px] text-slate-600 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
