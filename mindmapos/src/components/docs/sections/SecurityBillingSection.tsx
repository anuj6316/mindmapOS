import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Shield, Lock, CreditCard, AlertTriangle, CheckCircle2, Zap, Globe, Key } from 'lucide-react';

export default function SecurityBillingSection() {
  const securityLayers = [
    { layer: "Device ↔ Cloud Transport", detail: "mTLS with device cert issued at registration. WireGuard VPN for always-on devices.", icon: <Globe size={18} /> },
    { layer: "Secret Storage", detail: "macOS: Keychain. Linux: libsecret. Windows: DPAPI. Never plaintext on disk.", icon: <Key size={18} /> },
    { layer: "Agent Sandboxing", detail: "Each agent process runs as restricted OS user. seccomp-bpf on Linux. AppContainer on Windows.", icon: <Lock size={18} /> },
    { layer: "Code Signing", detail: "All .mmos packages signed ed25519. Daemon refuses to load unsigned agents.", icon: <Shield size={18} /> },
    { layer: "Audit Trail", detail: "Every agent run, tool call, and secret access logged to CloudWatch with 90-day retention.", icon: <Zap size={18} /> },
    { layer: "SOC 2 Ready", detail: "Log exports for compliance. Role-based access control. Encryption at rest (AES-256).", icon: <CheckCircle2 size={18} /> }
  ];

  const tiers = [
    { tier: "Starter", price: "$99/mo", tokens: "500K", seats: "10", agents: "5", color: "text-slate-500", border: "border-slate-200" },
    { tier: "Business", price: "$399/mo", tokens: "5M", seats: "100", agents: "∞", color: "text-sky-600", border: "border-sky-200", popular: true },
    { tier: "Enterprise", price: "Custom", tokens: "Unlim", seats: "∞", agents: "∞", color: "text-purple-600", border: "border-purple-200" }
  ];

  return (
    <section id="security-billing" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="07" label="Security & Billing" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Hardened by design. <br /> Transparent by default.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            A zero-trust architecture paired with a usage-aware subscription engine built for enterprise compliance.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Technical Security Layers */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                <Shield className="text-rose-500" /> Security Infrastructure
              </h3>
              <div className="grid gap-4">
                {securityLayers.map((s, i) => (
                  <div key={i} className="group p-6 rounded-[24px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-rose-500 transition-colors">
                        {s.icon}
                      </div>
                      <h4 className="font-semibold text-slate-900 text-[15px]">{s.layer}</h4>
                    </div>
                    <p className="text-[13px] text-slate-500 font-light leading-relaxed pl-14">
                      {s.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Billing Engine & Tiers */}
          <ScrollReveal direction="left">
            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                  <CreditCard className="text-sky-500" /> Subscription Tiers
                </h3>
                <div className="grid gap-4">
                  {tiers.map((t, i) => (
                    <div key={i} className={`relative p-6 rounded-[24px] border-2 bg-white ${t.border} shadow-sm overflow-hidden`}>
                      {t.popular && (
                        <div className="absolute top-0 right-0 px-4 py-1 bg-sky-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                          Most Popular
                        </div>
                      )}
                      <div className="flex justify-between items-center mb-4">
                        <span className={`font-mono font-bold text-sm uppercase tracking-wider ${t.color}`}>{t.tier}</span>
                        <span className="text-2xl font-bold text-slate-900">{t.price}</span>
                      </div>
                      <div className="flex gap-6 text-[13px] text-slate-500 font-light">
                        <span>Tokens: <b className="text-slate-900 font-semibold">{t.tokens}</b></span>
                        <span>Seats: <b className="text-slate-900 font-semibold">{t.seats}</b></span>
                        <span>Agents: <b className="text-slate-900 font-semibold">{t.agents}</b></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Billing Rules Glass Panel */}
              <div className="bg-[#1a1b26] rounded-[32px] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-6">
                    <AlertTriangle className="text-amber-400" size={20} />
                    <h4 className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-amber-400">Billing Engine Rules</h4>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { l: "Soft limit (80%)", d: "Email + dashboard warnings triggered" },
                      { l: "Soft limit (95%)", d: "Slack alerts sent to org admins" },
                      { l: "Hard limit (100%)", d: "New agent runs blocked instantly" },
                      { l: "Overage Plan", d: "$0.002 per 1K tokens beyond quota" },
                      { l: "IP Tracking", d: "Detects credential sharing anomalies" },
                      { l: "Revenue Share", d: "70% Dev / 30% Platform on marketplace" }
                    ].map((r, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-amber-400 mt-1 shrink-0">▸</span>
                        <div className="text-[13px]">
                          <span className="font-bold text-white block">{r.l}</span>
                          <span className="text-slate-400 font-light">{r.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
