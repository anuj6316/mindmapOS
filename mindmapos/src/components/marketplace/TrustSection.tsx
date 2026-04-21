import React from 'react';
import { Shield, CheckCircle, Server, DollarSign, Flag } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 bg-slate-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
            Every product here is held to the same standard.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Trust Points */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 text-teal-400 font-medium mb-3">
                <Shield size={20} />
                <h3 className="text-xl text-white">Guardian Layer Compatibility</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Every product on the Marketplace — official or community — must be Guardian Layer compatible. This is not optional. No product can instruct MindMapOS to bypass confirmation flows, skip safety classification, or execute destructive actions without user consent.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-3 text-sky-400 font-medium mb-3">
                <Server size={20} />
                <h3 className="text-xl text-white">Local Execution by Default</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Every Marketplace product runs locally on your device by default. Products that require external calls (e.g. cloud AI, web search) disclose this explicitly on their product page with an [EXTERNAL CALLS: Yes/No] indicator.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-3 text-emerald-400 font-medium mb-3">
                <DollarSign size={20} />
                <h3 className="text-xl text-white">Pricing Principles</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-[15px]">
                Free products are genuinely free. No hidden in-app purchases. Paid products are one-time purchases unless explicitly labelled as subscriptions. Trial periods always include full functionality — never a feature-limited demo.
              </p>
            </div>
          </div>

          {/* Side Info */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 h-max">
            <h3 className="text-xl font-medium mb-6">Official vs Community</h3>
            
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/10 text-white text-[12px] font-bold mb-3">
                🏷️ OFFICIAL
              </div>
              <p className="text-slate-400 text-[14px]">
                Built and maintained by MindMapOS. Full support. Guaranteed updates. Reviewed by our team.
              </p>
            </div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md border border-white/20 text-white text-[12px] font-bold mb-3">
                🏷️ COMMUNITY
              </div>
              <p className="text-slate-400 text-[14px] mb-2">
                Built by third-party creators. Reviewed and approved by MindMapOS before listing.
              </p>
              <p className="text-slate-400 text-[14px]">
                <span className="text-white font-medium">"Verified" badge</span> = passed our safety review. Community ratings and reports monitored continuously.
              </p>
            </div>

            <div className="bg-rose-500/10 rounded-2xl p-5 border border-rose-500/20">
              <div className="flex items-center gap-2 text-rose-400 font-medium mb-2 text-[15px]">
                <Flag size={16} /> Reporting
              </div>
              <p className="text-rose-200/70 text-[13px] leading-relaxed">
                See a problem with a product? Every product page has a Report link. Reports are reviewed within 48 hours. Products are suspended immediately if a safety violation is confirmed while under review.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
