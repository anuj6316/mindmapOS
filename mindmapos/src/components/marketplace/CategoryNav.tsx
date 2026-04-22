import React from 'react';
import { motion } from 'framer-motion';
import { Category } from '../../data/marketplaceData';

interface CategoryNavProps {
  activeCategory: Category | 'All';
  onSelectCategory: (category: Category | 'All') => void;
}

export default function CategoryNav({ activeCategory, onSelectCategory }: CategoryNavProps) {
  const categories: { id: Category | 'All', label: string, icon?: string }[] = [
    { id: 'All', label: 'All' },
    { id: 'Models', label: 'Models', icon: '🧠' },
    { id: 'Agents', label: 'Agents', icon: '🤖' },
    { id: 'Orchestrations', label: 'Workflows', icon: '⚙️' },
    { id: 'Bundles', label: 'Bundles', icon: '📦' },
    { id: 'Developers', label: 'Devs', icon: '👨‍💻' }
  ];

  return (
    <div className="sticky top-6 z-50 px-4 mb-16">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[28px] p-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] flex items-center justify-between gap-4">
          
          {/* Categories Pill List */}
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`relative px-5 py-2.5 rounded-[20px] text-[13px] font-semibold transition-all whitespace-nowrap flex items-center gap-2 group ${
                    isActive ? 'text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {cat.icon && <span className={isActive ? 'grayscale-0' : 'grayscale group-hover:grayscale-0 transition-all'}>{cat.icon}</span>}
                    {cat.label}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 bg-slate-900 rounded-[20px] shadow-lg shadow-slate-900/20" 
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Minimal Filter Toggle */}
          <div className="hidden md:flex items-center gap-2 pr-4 border-l border-slate-100 pl-4">
            <select className="bg-transparent border-none text-[12px] font-bold text-slate-400 uppercase tracking-widest focus:outline-none focus:ring-0 cursor-pointer hover:text-slate-900 transition-colors">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Rating</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}
