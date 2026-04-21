import React from 'react';
import { featuredBanners } from '../../data/marketplaceData';
import { Star, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FeaturedBanners() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredBanners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-24">
      <div className="relative h-[400px] md:h-[350px] w-full rounded-[32px] overflow-hidden bg-slate-900 border border-slate-800 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.15)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${featuredBanners[currentIndex].gradient} opacity-20`}
          />
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col md:flex-row items-center p-8 md:p-12 gap-8"
          >
            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start justify-center text-white z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold tracking-widest uppercase mb-6">
                <span>{featuredBanners[currentIndex].icon}</span>
                {featuredBanners[currentIndex].type}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 text-white">
                {featuredBanners[currentIndex].name}
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-slate-300 leading-relaxed mb-8 max-w-xl whitespace-pre-wrap">
                {featuredBanners[currentIndex].description}
              </p>

              <div className="flex flex-wrap items-center gap-6 mt-auto">
                <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition-all flex items-center gap-2">
                  <Plus size={18} /> Add to MindMapOS
                </button>
                <div className="flex items-center gap-4 text-[14px] text-slate-400 font-medium">
                  <span className="flex items-center gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" /> {featuredBanners[currentIndex].rating}
                  </span>
                  <span>{featuredBanners[currentIndex].installs} installs</span>
                  <span className="hidden md:inline">· By {featuredBanners[currentIndex].creator}</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[12px]">{featuredBanners[currentIndex].price}</span>
                </div>
              </div>
            </div>

            {/* Right Visual (Abstract) */}
            <div className="hidden md:flex flex-1 items-center justify-end relative h-full">
              <div className="text-[150px] opacity-20 filter blur-[2px] transform rotate-12">
                {featuredBanners[currentIndex].icon}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {featuredBanners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === idx ? 'bg-white w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
