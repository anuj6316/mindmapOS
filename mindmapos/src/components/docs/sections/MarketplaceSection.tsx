import React, { useState } from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { ShoppingBag, Sparkles, Users, BadgeCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../../marketplace/ProductCard';
import { marketplaceProducts, Product } from '../../../data/marketplaceData';

const CATEGORIES = [
  { id: 'Models', label: 'Models', count: 5, icon: <Sparkles size={16} /> },
  { id: 'Agents', label: 'Agents', count: 8, icon: <Users size={16} /> },
  { id: 'Orchestrations', label: 'Orchestrations', count: 7, icon: <BadgeCheck size={16} /> }
];

export default function MarketplaceSection() {
  const [activeTab, setActiveTab] = useState('Models');

  // Filter 4 products for the active category
  const filteredProducts = marketplaceProducts
    .filter(p => p.category === activeTab)
    .slice(0, 4);

  return (
    <section id="marketplace" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="10" label="Marketplace Ecosystem" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            An ecosystem <br /> of infinite capability.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            Extend MindMapOS with community-built agents, specialized models, and complex orchestrations.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Stats & Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-6">
              {[
                { label: 'Official Models', val: '5', icon: <Sparkles className="text-sky-500" /> },
                { label: 'Specialist Agents', val: '8', icon: <Users className="text-indigo-500" /> },
                { label: 'Revenue Share', val: '20%', icon: <ShoppingBag className="text-emerald-500" /> }
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1} direction="right">
                  <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
                        {stat.icon}
                      </div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <div className="text-3xl font-bold text-slate-900">{stat.val}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="bg-[#1a1b26] rounded-[32px] p-8 text-white">
               <h4 className="text-xl font-semibold mb-4">Become a Creator</h4>
               <p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                 Build and monetize your own agents or orchestrations. Early access for creators opens Q3 2026.
               </p>
               <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all">
                 Join Creator Waitlist
               </button>
            </div>
          </div>

          {/* Marketplace Preview */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-[32px] p-8 border border-slate-100 h-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex bg-white p-1 rounded-xl border border-slate-200 w-max">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTab(cat.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                        activeTab === cat.id
                          ? 'bg-sky-500 text-white shadow-md'
                          : 'text-slate-500 hover:text-slate-900'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
                <Link to="/marketplace" className="text-sky-600 text-sm font-semibold hover:text-sky-700 flex items-center gap-1 group">
                  Full Store <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                 {filteredProducts.map((product) => (
                   <div key={product.id} className="scale-[0.95] origin-top-left">
                     <ProductCard 
                       product={product} 
                       onViewDetails={() => {}} 
                       onAdd={() => {}} 
                     />
                   </div>
                 ))}
              </div>
              
              <div className="mt-8 text-center">
                 <p className="text-sm text-slate-400 font-light italic">
                   Showing featured products for {activeTab}.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
