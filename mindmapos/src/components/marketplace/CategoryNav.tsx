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
    { id: 'Orchestrations', label: 'Orchestrations', icon: '⚙️' },
    { id: 'Bundles', label: 'Bundles', icon: '📦' }
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-xl border-b border-slate-200/50 py-4 mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Categories */}
          <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-xl text-[14px] font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive ? 'text-sky-700 bg-sky-50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
                >
                  {cat.icon && <span>{cat.icon}</span>}
                  {cat.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2.5px] bg-sky-500 rounded-full" 
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 text-[13px] text-slate-500 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <span>Sort by:</span>
              <select className="bg-transparent border-none font-medium text-slate-700 focus:outline-none focus:ring-0 cursor-pointer">
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Rating</option>
              </select>
            </div>
            
            <div className="h-4 w-px bg-slate-300 hidden md:block"></div>
            
            <div className="hidden md:flex items-center gap-2">
              <select className="bg-transparent border-none font-medium text-slate-700 focus:outline-none focus:ring-0 cursor-pointer">
                <option>All Platforms</option>
                <option>Linux</option>
                <option>Windows</option>
                <option>macOS</option>
                <option>Android</option>
                <option>iOS</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
