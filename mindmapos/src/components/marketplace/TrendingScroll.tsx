import React from 'react';
import { trendingProducts } from '../../data/marketplaceData';
import { Star, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrendingScroll() {
  return (
    <div className="mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-6">
        <h3 className="text-[14px] font-bold tracking-widest uppercase text-slate-400 flex items-center gap-2">
          <span>🔥</span> Trending this week
        </h3>
      </div>
      
      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-8 pt-2 hide-scrollbar">
        <div className="flex gap-4 px-4 sm:px-8 w-max min-w-full">
          {trendingProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="w-[280px] shrink-0 bg-white border border-slate-200/60 p-5 rounded-2xl shadow-[0_10px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 flex flex-col cursor-pointer group"
            >
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center border bg-slate-50 border-slate-100 text-xl group-hover:scale-105 transition-transform shrink-0">
                  {product.icon}
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h4 className="text-[15px] font-semibold text-slate-900 truncate">{product.name}</h4>
                  <p className="text-[12px] text-slate-500 truncate">{product.category} · By {product.creator}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-[12px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-amber-500">
                    <Star size={12} fill="currentColor" /> {product.rating}
                  </span>
                  <span>{product.installs}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[12px] font-bold text-emerald-600">{product.price}</span>
                  <button className="h-7 w-7 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors">
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
