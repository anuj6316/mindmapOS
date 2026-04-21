import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function CreatorSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-bold tracking-widest uppercase mb-6">
              Future Preview
            </div>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-slate-900">
              Build for the Marketplace.
            </h2>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
              We're opening the MindMapOS Marketplace to third-party creators. If you've built an agent, orchestration, or model that works with MindMapOS — you can list it here.
            </p>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
              Creators set their own pricing. MindMapOS takes 20% on paid products. Free products are listed at no cost, no revenue share.
            </p>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 mb-8">
              <h4 className="font-medium text-slate-900 mb-4">What we review (5-10 business days):</h4>
              <ul className="space-y-3">
                {[
                  'Guardian Layer compatibility',
                  'Accuracy on our standard task benchmark',
                  'Local-first execution (or explicit disclosure of external calls)',
                  'Documentation quality',
                  'No deceptive descriptions or inflated benchmarks'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-[14px]">
                    <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[32px] p-10 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Abstract bg element */}
            <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-sky-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            
            <div className="relative z-10">
              <div className="text-[13px] font-bold tracking-widest text-sky-400 uppercase mb-4">Status</div>
              <h3 className="text-3xl font-medium mb-4">Creator Program opens Q3 2026.</h3>
              <p className="text-slate-300 mb-10 text-[16px] leading-relaxed">
                Join the waitlist to be notified when applications open. Early access will be granted to developers who have already built community plugins.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3.5 rounded-xl bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors shadow-sky-500/30 shadow-lg flex items-center justify-center gap-2">
                  Join Creator Waitlist <ArrowRight size={18} />
                </button>
                <button className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
                  Read Guidelines
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
