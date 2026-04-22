import React, { lazy, Suspense } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedCounter from '../shared/AnimatedCounter';

const Hero3D = lazy(() => import('./Hero3D'));

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-10 pb-24 overflow-hidden">
      <div className="w-full px-4 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-slate-200/50 text-sky-700 text-[11px] font-bold tracking-wider uppercase mb-8 shadow-sm">
               MindMapOS Documentation
            </div>
            
            <h1 className="text-[52px] md:text-[68px] font-medium tracking-[-0.03em] text-slate-900 mb-6 leading-[1.05]">
              Local Intelligence. <br /> <span className="text-sky-500">Absolute Control.</span>
            </h1>
            
            <p className="text-[18px] text-slate-500 mb-10 leading-[1.6] font-light max-w-lg">
              MindMapOS transforms natural conversation into trusted action — with zero setup, enterprise-grade security, and local-first privacy.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <button 
                onClick={() => navigate('/app')}
                className="px-8 py-3.5 rounded-full bg-sky-500 text-white font-medium text-[15px] hover:bg-sky-600 transition-all shadow-sky-500/30 hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center gap-2"
              >
                View Live Demo <ArrowRight size={16} />
              </button>
              <button className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium text-[15px] hover:bg-slate-50 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                Download Now <Download size={16} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg border-t border-slate-100 pt-8">
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  <AnimatedCounter value={12000} suffix="+" />
                </div>
                <div className="text-[13px] text-slate-500 font-light leading-tight">Commands Executed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  <AnimatedCounter value={98.7} suffix="%" decimals={1} />
                </div>
                <div className="text-[13px] text-slate-500 font-light leading-tight">Guardian Accuracy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  <AnimatedCounter value={5} />
                </div>
                <div className="text-[13px] text-slate-500 font-light leading-tight">Platforms Supported</div>
              </div>
            </div>
          </motion.div>

          {/* Right 3D Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
             <Suspense fallback={
               <div className="w-full h-[550px] flex flex-col items-center justify-center gap-4 bg-white/40 backdrop-blur-xl rounded-[48px] border border-white/80">
                  <div className="w-10 h-10 border-4 border-sky-500/20 border-t-sky-500 rounded-full animate-spin" />
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Initializing Engine...</span>
               </div>
             }>
               <Hero3D />
             </Suspense>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
