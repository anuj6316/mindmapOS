import React from 'react';
import { Product } from '../../data/marketplaceData';
import { X, Star, ShieldCheck, Download, Check, Cpu, Zap, Globe, Key, Terminal, Apple, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = React.useState('Overview');

  if (!product) return null;

  const isFree = product.price.toLowerCase() === 'free';

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 md:top-[5vh] md:bottom-[5vh] md:left-[10vw] md:right-[10vw] bg-white md:rounded-[40px] rounded-t-[40px] z-[101] shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            {/* Mobile Drag Handle */}
            <div className="w-full flex justify-center pt-4 pb-2 md:hidden">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
            </div>

            <button 
              onClick={onClose}
              className="absolute top-8 right-8 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* LEFT COLUMN: Details (65%) */}
            <div className="flex-[3] flex flex-col h-full overflow-y-auto bg-white p-8 md:p-16 relative hide-scrollbar">
              
              <div className="flex items-start gap-8 mb-12">
                <div className="w-24 h-24 rounded-[24px] border-2 bg-slate-50 border-slate-100 flex items-center justify-center text-5xl shrink-0 shadow-sm">
                  {product.icon}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-widest uppercase mb-4 border border-slate-200/50">
                    {product.category}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-2">{product.name}</h2>
                  <p className="text-lg text-slate-500 font-light">Created by <span className="text-slate-900 font-medium">{product.creator}</span></p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-8 border-b border-slate-100 mb-10 sticky top-0 bg-white/95 backdrop-blur-md pt-2 z-10">
                {['Overview', 'Technical Specs', 'Compatibility', 'Reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[14px] font-semibold transition-colors relative ${
                      activeTab === tab ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <motion.div layoutId="modalTab" className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-slate-900" />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="pb-24 md:pb-0">
                {activeTab === 'Overview' && (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div>
                      <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Description</h3>
                      <p className="text-[17px] text-slate-600 leading-relaxed font-light whitespace-pre-wrap">
                        {product.description}
                      </p>
                    </div>

                    {product.bestFor && (
                      <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Primary Use Cases</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {product.bestFor.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
                              <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-[14px] text-slate-700 font-medium">{item.replace('✓ ', '')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'Technical Specs' && (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="grid sm:grid-cols-2 gap-12">
                       {/* Runtime Model */}
                       <div className="space-y-6">
                          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Runtime Architecture</h3>
                          <div className="space-y-4">
                             <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                   <Zap className="text-sky-500" size={18} />
                                   <span className="text-[14px] text-slate-600">Processing Type</span>
                                </div>
                                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${product.processingType === 'Local-ok' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                   {product.processingType || 'Local-ok'}
                                </span>
                             </div>
                             <div className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                   <Terminal className="text-indigo-500" size={18} />
                                   <span className="text-[14px] text-slate-600">Primary Trigger</span>
                                </div>
                                <span className="text-[13px] font-mono text-slate-900">{product.trigger || 'CLI / UI'}</span>
                             </div>
                          </div>
                       </div>

                       {/* Required Tools */}
                       <div className="space-y-6">
                          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">Required Tool Access</h3>
                          <div className="flex flex-wrap gap-2">
                             {(product.tools || ['filesystem', 'shell', 'network']).map(tool => (
                               <span key={tool} className="px-3 py-1.5 rounded-xl bg-slate-900 text-white font-mono text-[12px]">
                                  {tool}
                               </span>
                             ))}
                          </div>
                          <p className="text-[12px] text-slate-400 italic">Permissions are strictly enforced by the Guardian Layer sandbox.</p>
                       </div>
                    </div>

                    {product.whatItCanDo && (
                      <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Logical Capabilities</h3>
                        <div className="space-y-3">
                          {product.whatItCanDo.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-[14px] text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100 font-mono">
                              <span className="text-sky-500 font-bold">{">"}</span>
                              {item.replace('✓ ', '').replace('Step ', '')}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'Compatibility' && (
                  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div>
                      <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">OS Support</h3>
                      <div className="flex flex-wrap gap-3">
                        {product.platforms.map(p => (
                          <div key={p} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-2xl text-[14px] font-semibold">
                            {p === 'macOS' ? <Apple size={16} /> : p === 'Windows' ? <Monitor size={16} /> : <Terminal size={16} />}
                            {p}
                          </div>
                        ))}
                      </div>
                    </div>

                    {product.hardwareRequirements && (
                      <div>
                        <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Minimum Hardware Specs</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {product.hardwareRequirements.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-[14px] text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                               <div className="w-2 h-2 rounded-full bg-sky-400" />
                               {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'Reviews' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col items-center justify-center py-20 text-center">
                     <div className="text-7xl font-bold text-slate-900 mb-4">{product.rating}</div>
                     <div className="flex items-center gap-1 text-amber-400 mb-4">
                       <Star size={28} fill="currentColor" />
                       <Star size={28} fill="currentColor" />
                       <Star size={28} fill="currentColor" />
                       <Star size={28} fill="currentColor" />
                       <Star size={28} fill="currentColor" className="opacity-20" />
                     </div>
                     <div className="text-slate-400 text-[15px] font-light mb-12 uppercase tracking-widest">Verified User Consensus</div>
                     
                     <div className="w-full max-w-sm space-y-4">
                        {[5,4,3,2,1].map(star => (
                          <div key={star} className="flex items-center gap-4 text-[13px] text-slate-400">
                            <div className="flex items-center gap-1 w-8 font-bold">
                              {star} <Star size={10} fill="currentColor" />
                            </div>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-slate-900 rounded-full" 
                                style={{ width: star === 5 ? '88%' : star === 4 ? '10%' : '2%' }}
                              />
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Action Panel (35%) */}
            <div className="flex-[2] bg-slate-50 border-t md:border-l border-slate-200 p-8 md:p-12 flex flex-col shrink-0 mt-auto md:mt-0 relative">
              <div className="hidden md:flex items-center gap-6 mb-12">
                <div className="w-20 h-20 rounded-[20px] border bg-white border-slate-200 flex items-center justify-center text-4xl shadow-sm">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                  <p className="text-[14px] text-slate-500">By {product.creator}</p>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                 <div className="flex items-center justify-between text-3xl font-bold text-slate-900">
                   {isFree ? <span className="text-emerald-600">FREE</span> : product.price}
                 </div>
                 <button className="w-full py-5 rounded-[20px] bg-sky-500 text-white font-bold text-[16px] shadow-xl shadow-sky-500/25 hover:bg-sky-600 hover:-translate-y-0.5 transition-all">
                   Add to MindMapOS
                 </button>
              </div>

              <div className="space-y-5 pt-8 border-t border-slate-200 text-[13px] text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Platform Build</span>
                  <span className="font-bold text-slate-900">{product.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Package Size</span>
                  <span className="font-bold text-slate-900">{product.size || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Category</span>
                  <span className="font-bold text-slate-900">{product.category}</span>
                </div>
              </div>

              <div className="mt-12 space-y-4 bg-white/50 p-6 rounded-3xl border border-white shadow-sm">
                <div className="flex items-start gap-3 text-[12px] text-slate-600 font-semibold">
                  <ShieldCheck size={18} className="text-emerald-500 shrink-0" />
                  Guardian Layer Verified
                </div>
                <div className="flex items-start gap-3 text-[12px] text-slate-600 font-semibold">
                  <ShieldCheck size={18} className="text-emerald-500 shrink-0" />
                  Privacy-first Local Execution
                </div>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
