import React from 'react';
import { Product } from '../../data/marketplaceData';
import { Star, Download, ChevronRight, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onAdd }: ProductCardProps) {
  const isFree = product.price.toLowerCase() === 'free';

  return (
    <div className="group bg-white border border-slate-200/60 p-6 rounded-[32px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
      
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        <div className="h-14 w-14 rounded-2xl flex items-center justify-center border bg-slate-50 border-slate-100 text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shrink-0">
          {product.icon}
        </div>
        {product.badge && (
          <div className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 max-w-[140px] truncate text-right">
            {product.badge.split('·')[0].trim()}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h4 className="text-xl font-medium tracking-tight mb-1 text-slate-900">{product.name}</h4>
        <p className="text-[13px] text-slate-500 mb-3">{product.category} · By {product.creator}</p>
        <p className="text-[14px] font-light leading-relaxed text-slate-600 mb-4 line-clamp-2">
          {product.tagline}
        </p>
      </div>

      {/* Footer Stats */}
      <div className="flex items-center gap-4 text-[13px] text-slate-500 mb-6 font-medium">
        <div className="flex items-center gap-1 text-amber-500">
          <Star size={14} fill="currentColor" />
          <span>{product.rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <Download size={14} />
          <span>{product.installs >= 1000 ? `${(product.installs / 1000).toFixed(1)}k` : product.installs}</span>
        </div>
        <div className="ml-auto font-semibold text-slate-900">
          {isFree ? <span className="text-emerald-600">FREE</span> : product.price}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2 mt-auto">
        <button 
          onClick={() => onViewDetails(product)}
          className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium text-[14px] hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center gap-1"
        >
          View Details
        </button>
        <button 
          onClick={() => onAdd(product)}
          className="flex-1 px-4 py-2.5 rounded-xl bg-sky-500 text-white font-medium text-[14px] hover:bg-sky-600 transition-all shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-1"
        >
          <Plus size={16} /> {isFree ? 'Add' : 'Buy'}
        </button>
      </div>

    </div>
  );
}
