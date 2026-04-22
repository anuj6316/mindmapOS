import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { CreditCard, Globe, Zap, CheckCircle2 } from 'lucide-react';

export default function BusinessModelSection() {
  return (
    <section id="business-model" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="12" label="Business Model" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Built for sustainability, <br /> not just scale.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            A transparent revenue model that prioritizes privacy and community growth.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Free Tier */}
          <ScrollReveal direction="right">
            <div className="bg-white border border-slate-200 rounded-[32px] p-10 hover:shadow-xl transition-all duration-500 flex flex-col h-full group">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Local Runtime</h3>
              <div className="text-sky-600 font-bold text-sm mb-6 uppercase tracking-widest">Always Free</div>
              <p className="text-slate-500 font-light leading-relaxed mb-8 flex-1">
                The core MindMapOS runtime is free and open-source. Install any local model, run unlimited commands, and manage your system without ever paying a dime.
              </p>
              <ul className="space-y-3 mb-10">
                {['Unlimited Local Actions', 'BYO API Keys', 'Basic Guardian Layer', 'Local-only Storage'].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" /> {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                Download Runtime
              </button>
            </div>
          </ScrollReveal>

          {/* Paid Tier */}
          <ScrollReveal direction="left">
            <div className="bg-[#1a1b26] rounded-[32px] p-10 shadow-2xl flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Cloud Synced</h3>
                <div className="text-sky-400 font-bold text-sm mb-6 uppercase tracking-widest">Coming Q4 2026</div>
                <p className="text-slate-400 font-light leading-relaxed mb-8 flex-1">
                  For users who want their machine intelligence to follow them. Sync your long-term memory, custom agents, and preferences across every device securely.
                </p>
                <ul className="space-y-3 mb-10">
                  {['Cross-device Memory', 'Managed Model Hosting', 'Priority Marketplace Access', 'Advanced Orchestration'].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-sky-400" /> {feat}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-4 rounded-xl bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20">
                  Join Waitlist
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Marketplace Model */}
        <ScrollReveal>
          <div className="bg-slate-50 border border-slate-100 rounded-[32px] p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-500 flex items-center justify-center mb-6 shadow-sm">
                  <CreditCard size={24} />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">Marketplace Fees</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  We believe creators should keep the vast majority of their earnings.
                </p>
              </div>
              <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                   <div className="text-4xl font-bold text-slate-900 mb-1">0%</div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">On Free Products</div>
                   <p className="text-[13px] text-slate-500 font-light">Community contributions are always free to list and free to use.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                   <div className="text-4xl font-bold text-sky-500 mb-1">20%</div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">On Paid Products</div>
                   <p className="text-[13px] text-slate-500 font-light">Includes hosting, transaction fees, and platform maintenance.</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* B2B Subscription Matrix */}
        <ScrollReveal delay={0.2}>
          <div className="mt-24">
            <div className="text-center mb-16">
               <h3 className="text-2xl font-semibold text-slate-900 mb-4">Enterprise & B2B Solutions</h3>
               <p className="text-slate-500 font-light max-w-xl mx-auto">Scalable infrastructure for organisations requiring multi-device orchestration and advanced security.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
               {[
                 { tier: "Starter", price: "$99/mo", tokens: "500K", seats: 10, agents: 5, color: "border-slate-200" },
                 { tier: "Business", price: "$399/mo", tokens: "5M", seats: 100, agents: "Unlimited", color: "border-sky-500 shadow-sky-500/10 shadow-xl" },
                 { tier: "Enterprise", price: "Custom", tokens: "Unlimited", seats: "Unlimited", agents: "Unlimited", color: "border-amber-400" },
               ].map((t) => (
                 <div key={t.tier} className={`bg-white border-2 rounded-[32px] p-8 flex flex-col transition-all ${t.color}`}>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t.tier}</div>
                    <div className="text-3xl font-bold text-slate-900 mb-6">{t.price}</div>
                    <div className="space-y-4 mb-8 flex-1">
                       <div className="flex justify-between text-sm border-b border-slate-50 pb-2">
                          <span className="text-slate-500">Tokens / mo</span>
                          <span className="font-semibold text-slate-700">{t.tokens}</span>
                       </div>
                       <div className="flex justify-between text-sm border-b border-slate-50 pb-2">
                          <span className="text-slate-500">Total Seats</span>
                          <span className="font-semibold text-slate-700">{t.seats}</span>
                       </div>
                       <div className="flex justify-between text-sm border-b border-slate-50 pb-2">
                          <span className="text-slate-500">Custom Agents</span>
                          <span className="font-semibold text-slate-700">{t.agents}</span>
                       </div>
                    </div>
                    <button className="w-full py-3 rounded-xl bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-widest hover:bg-slate-100 transition-colors">
                       Choose Plan
                    </button>
                 </div>
               ))}
            </div>

            {/* Billing Rules */}
            <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
               <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div>
                     <h4 className="text-xl font-semibold mb-6 flex items-center gap-3">
                        <CreditCard className="text-sky-400" size={24} />
                        Billing Engine Rules
                     </h4>
                     <ul className="space-y-4">
                        {[
                          "Soft limit alerts at 80% and 95% usage",
                          "Hard limit at 100% blocks new agent runs",
                          "Overage plan: $0.002 per 1K tokens",
                          "Annual plan discount: 20% savings",
                          "Revenue share: 70% Creator / 30% Platform"
                        ].map((rule, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-400 font-light">
                             <div className="w-1 h-1 rounded-full bg-sky-500" />
                             {rule}
                          </li>
                        ))}
                     </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
                     <h5 className="text-sm font-bold uppercase tracking-widest text-sky-400 mb-4">Token Metering Flow</h5>
                     <div className="space-y-4 font-mono text-[11px] text-slate-400">
                        <div className="flex gap-3">
                           <span className="text-emerald-400">01.</span>
                           <span>Agent calls LLM → Local counter increments</span>
                        </div>
                        <div className="flex gap-3">
                           <span className="text-emerald-400">02.</span>
                           <span>Batch flush every 60s to AWS API Gateway</span>
                        </div>
                        <div className="flex gap-3">
                           <span className="text-emerald-400">03.</span>
                           <span>Lambda writes to DynamoDB token_usage</span>
                        </div>
                        <div className="flex gap-3">
                           <span className="text-emerald-400">04.</span>
                           <span>Billing engine verifies quota & alerts admin</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Phase 10.4: Market Opportunity Callout */}
        <ScrollReveal delay={0.4}>
          <div className="mt-24 text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest mb-8">
               The Vision
             </div>
             <h3 className="text-[32px] md:text-[52px] font-medium tracking-tight text-slate-900 mb-8 leading-[1.1]">
                Every device. Every user. <br /> <span className="text-sky-500">One intelligent layer.</span>
             </h3>
             <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="p-8 rounded-[32px] border border-slate-100 bg-white">
                   <div className="text-3xl font-bold text-slate-900 mb-2">$1.5T</div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Total Addressable Market</div>
                   <p className="text-sm text-slate-500 font-light">Combining the global device management and personal AI assistant sectors.</p>
                </div>
                <div className="p-8 rounded-[32px] border border-slate-100 bg-white">
                   <div className="text-3xl font-bold text-slate-900 mb-2">10B+</div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Connected Devices</div>
                   <p className="text-sm text-slate-500 font-light">From servers to tablets, MindMapOS is designed to scale across every architecture.</p>
                </div>
                <div className="p-8 rounded-[32px] border border-slate-100 bg-white">
                   <div className="text-3xl font-bold text-slate-900 mb-2">Private-First</div>
                   <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">The Trust Moat</div>
                   <p className="text-sm text-slate-500 font-light">As privacy regulation tightens, local-first intelligence becomes the only viable path.</p>
                </div>
             </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
