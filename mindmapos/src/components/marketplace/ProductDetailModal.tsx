import React from 'react';
import { Product } from '../../data/marketplaceData';
import { X, Star, ShieldCheck, Download, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
            className="fixed inset-x-0 bottom-0 md:top-[5vh] md:bottom-[5vh] md:left-[10vw] md:right-[10vw] bg-white md:rounded-[32px] rounded-t-[32px] z-[101] shadow-2xl flex flex-col md:flex-row overflow-hidden"
          >
            {/* Mobile Drag Handle */}
            <div className="w-full flex justify-center pt-4 pb-2 md:hidden">
              <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
            </div>

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X size={20} />
            </button>

            {/* LEFT COLUMN: Details (60%) */}
            <div className="flex-[3] flex flex-col h-full overflow-y-auto bg-white p-6 md:p-12 relative hide-scrollbar">
              
              <div className="flex items-start gap-6 mb-8 md:hidden">
                <div className="w-20 h-20 rounded-2xl border bg-slate-50 border-slate-100 flex items-center justify-center text-4xl shrink-0">
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-1">{product.name}</h2>
                  <p className="text-[14px] text-slate-500">By {product.creator}</p>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold tracking-widest uppercase mb-6">
                  {product.category}
                </div>
                <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-4">{product.name}</h2>
                <p className="text-xl text-slate-500 font-light mb-10">{product.tagline}</p>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-6 border-b border-slate-200 mb-8 sticky top-0 bg-white/90 backdrop-blur pt-2 z-10">
                {['Overview', 'What It Does', 'Compatibility', 'Reviews'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[15px] font-medium transition-colors relative ${
                      activeTab === tab ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'
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
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Description</h3>
                      <p className="text-[15px] text-slate-600 leading-relaxed whitespace-pre-wrap">
                        {product.description}
                      </p>
                    </div>

                    {product.bestFor && (
                      <div>
                        <h3 className="text-lg font-medium text-slate-900 mb-4">Best For</h3>
                        <ul className="space-y-3">
                          {product.bestFor.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-600">
                              <Check size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                              {item.replace('✓ ', '')}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'What It Does' && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    {product.whatItCanDo ? (
                      <div>
                        <h3 className="text-lg font-medium text-slate-900 mb-4">Example Capabilities</h3>
                        <ul className="space-y-3">
                          {product.whatItCanDo.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-600">
                              <span className="text-sky-500 mt-0.5">→</span>
                              {item.replace('✓ ', '').replace('Step ', '')}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p className="text-[15px] text-slate-500">No specific examples provided. See Overview.</p>
                    )}

                    {product.included && (
                      <div>
                        <h3 className="text-lg font-medium text-slate-900 mb-4">What's Included</h3>
                        <ul className="space-y-3">
                          {product.included.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-[15px] text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'Compatibility' && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 mb-4">Supported Platforms</h3>
                      <div className="flex flex-wrap gap-2">
                        {product.platforms.map(p => (
                          <span key={p} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-[14px] font-medium">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    {product.hardwareRequirements && (
                      <div>
                        <h3 className="text-lg font-medium text-slate-900 mb-4">Hardware Requirements</h3>
                        <ul className="space-y-3">
                          {product.hardwareRequirements.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.benchmark && (
                      <div>
                        <h3 className="text-lg font-medium text-slate-900 mb-4">Benchmarks & Details</h3>
                        <ul className="space-y-3">
                          {product.benchmark.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-[15px] text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0 mt-2" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'Reviews' && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 flex flex-col items-center justify-center py-12 text-center">
                     <div className="text-5xl font-medium text-slate-900 mb-2">{product.rating}</div>
                     <div className="flex items-center gap-1 text-amber-400 mb-2">
                       <Star size={24} fill="currentColor" />
                       <Star size={24} fill="currentColor" />
                       <Star size={24} fill="currentColor" />
                       <Star size={24} fill="currentColor" />
                       <Star size={24} fill="currentColor" className="opacity-50" />
                     </div>
                     <div className="text-slate-500 text-[15px] mb-8">Based on {product.reviewsCount} reviews</div>
                     
                     <div className="w-full max-w-sm space-y-2">
                        {[5,4,3,2,1].map(star => (
                          <div key={star} className="flex items-center gap-3 text-[13px] text-slate-500">
                            <div className="flex items-center gap-1 w-8">
                              {star} <Star size={10} fill="currentColor" />
                            </div>
                            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-amber-400 rounded-full" 
                                style={{ width: star === 5 ? '78%' : star === 4 ? '16%' : star === 3 ? '4%' : star === 2 ? '2%' : '0%' }}
                              />
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Sticky Install Card (40%) */}
            <div className="flex-[2] bg-slate-50 border-t md:border-l border-slate-200 p-6 md:p-10 flex flex-col shrink-0 mt-auto md:mt-0 relative">
              <div className="hidden md:flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl border bg-white border-slate-200 flex items-center justify-center text-3xl shadow-sm">
                  {product.icon}
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">{product.name}</h3>
                  <p className="text-[13px] text-slate-500">By {product.creator}</p>
                </div>
              </div>

              {product.badge && (
                <div className="mb-6">
                  <span className="px-2 py-1 bg-sky-100 text-sky-700 text-[11px] font-bold rounded uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-4 mb-8 text-[15px] text-slate-600 font-medium">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <Star size={18} fill="currentColor" /> {product.rating}
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <div className="flex items-center gap-1.5">
                  <Download size={18} /> {product.installs >= 1000 ? `${(product.installs/1000).toFixed(1)}k` : product.installs}
                </div>
              </div>

              <div className="text-2xl font-semibold text-slate-900 mb-6">
                {isFree ? <span className="text-emerald-600">FREE</span> : product.price}
              </div>

              <button className="w-full py-4 rounded-2xl bg-sky-500 text-white font-medium text-[16px] shadow-sky-500/25 shadow-xl hover:bg-sky-400 hover:-translate-y-0.5 transition-all mb-4">
                + Add to MindMapOS
              </button>

              <div className="space-y-4 pt-6 border-t border-slate-200 text-[13px] text-slate-600 mt-auto">
                <div className="flex justify-between">
                  <span className="text-slate-400">Version</span>
                  <span className="font-medium text-slate-900">{product.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Size</span>
                  <span className="font-medium text-slate-900">{product.size || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Category</span>
                  <span className="font-medium text-slate-900">{product.category}</span>
                </div>
              </div>

              <div className="mt-8 space-y-3 bg-teal-50/50 p-4 rounded-xl border border-teal-100">
                <div className="flex items-start gap-2 text-[12px] text-teal-700 font-medium">
                  <ShieldCheck size={16} className="shrink-0" />
                  Guardian Layer Compatible
                </div>
                <div className="flex items-start gap-2 text-[12px] text-teal-700 font-medium">
                  <ShieldCheck size={16} className="shrink-0" />
                  Local execution — no external calls
                </div>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
