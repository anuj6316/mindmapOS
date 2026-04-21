import React, { useState } from 'react';
import { Product } from '../../data/marketplaceData';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  infoTitle: string;
  infoContent: string;
  products: Product[];
  onViewDetails: (product: Product) => void;
  onAdd: (product: Product) => void;
}

export default function ProductSection({
  id,
  title,
  description,
  infoTitle,
  infoContent,
  products,
  onViewDetails,
  onAdd
}: ProductSectionProps) {
  const [infoExpanded, setInfoExpanded] = useState(false);

  if (products.length === 0) return null;

  return (
    <section id={id} className="mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Expandable Info Block */}
        <div className="mb-12 bg-sky-50/50 border border-sky-100 rounded-2xl overflow-hidden">
          <button 
            onClick={() => setInfoExpanded(!infoExpanded)}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-sky-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-sky-800 font-medium">
              <Info size={18} />
              {infoTitle}
            </div>
            <div className="text-sky-600">
              {infoExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>
          
          <AnimatePresence>
            {infoExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 md:px-6 pb-6 pt-2 text-[15px] text-slate-700 leading-relaxed whitespace-pre-wrap border-t border-sky-100/50 mx-5 md:mx-6">
                  {infoContent}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onViewDetails={onViewDetails}
              onAdd={onAdd}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
