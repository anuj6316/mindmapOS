import React from 'react';
import { Product } from '../../data/marketplaceData';
import { Star, Download, Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAdd: (product: Product) => void;
}

export default function ProductCard({ product, onViewDetails, onAdd }: ProductCardProps) {
  const isFree = product.price.toLowerCase() === 'free';

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="group bg-white border border-slate-200/60 p-7 rounded-[32px] shadow-sm hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col h-full relative cursor-pointer"
    >
      
      {/* Top Section */}
      <div className="flex items-start justify-between mb-6">
        <div className="h-16 w-16 rounded-[20px] flex items-center justify-center border bg-slate-50 border-slate-100 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shrink-0">
          {product.icon}
        </div>
        {product.badge && (
          <div className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full bg-slate-50 text-slate-400 border border-slate-100">
            {product.badge.split('·')[0].trim()}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col gap-1 mb-4">
           <h4 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">{product.name}</h4>
           <div className="flex items-center gap-2 text-[12px] font-medium text-slate-400">
             <span>{product.creator}</span>
             {product.processingType && (
               <div className="flex items-center gap-1.5 ml-1 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100">
                  <div className={`w-1.5 h-1.5 rounded-full ${product.processingType === 'Local-ok' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                  <span className="text-[10px] uppercase tracking-wider">{product.processingType === 'Local-ok' ? 'Local' : 'Hybrid'}</span>
               </div>
             )}
           </div>
        </div>
        
        <p className="text-[15px] font-light leading-relaxed text-slate-500 mb-6 line-clamp-2">
          {product.tagline}
        </p>
      </div>

      {/* Footer Stats & Primary Action */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div className="flex items-center gap-4 text-[12px] text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-amber-400" fill="currentColor" />
            <span>{product.rating}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Download size={14} />
            <span>{product.installs >= 1000 ? `${(product.installs / 1000).toFixed(1)}k` : product.installs}</span>
          </div>
        </div>

        <button 
          onClick={(e) => {
            e.stopPropagation();
            onAdd(product);
          }}
          className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-[12px] hover:bg-sky-500 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/10 hover:shadow-sky-500/20"
        >
          {isFree ? <Plus size={14} /> : null}
          {isFree ? 'GET' : product.price}
        </button>
      </div>

    </div>
  );
}
