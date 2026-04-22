import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Check, X, Command } from 'lucide-react';

const COMPARISON_DATA = [
  { feature: 'Local-first execution', mindmap: true, others: false },
  { feature: 'Plain language intent', mindmap: true, others: 'Partial' },
  { feature: 'Cross-platform (Linux/Win/Mac)', mindmap: true, others: false },
  { feature: 'AST Guardian Layer safety', mindmap: true, others: false },
  { feature: 'Zero data leakage to cloud', mindmap: true, others: false },
  { feature: 'Community Agent Marketplace', mindmap: true, others: 'Partial' },
  { feature: 'One-click rollback/undo', mindmap: true, others: false },
  { feature: 'Native OS integration', mindmap: true, others: 'Partial' },
  { feature: 'Built-in privacy layer', mindmap: true, others: false },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 border-b border-slate-100 last:border-0">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="13" label="Comparison" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight text-center">
            How we stack up.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mx-auto text-center mb-16">
            The difference is in the architecture. Local-first, safe, and truly yours.
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Feature</th>
                  <th className="px-8 py-6 text-sm font-bold text-sky-600 uppercase tracking-widest bg-sky-50/30">
                    <div className="flex items-center gap-2">
                      <Command size={16} /> MindMapOS
                    </div>
                  </th>
                  <th className="px-8 py-6 text-sm font-bold text-slate-400 uppercase tracking-widest">Standard Assistants</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/30 transition-colors">
                    <td className="px-8 py-5 text-[15px] font-medium text-slate-700">{row.feature}</td>
                    <td className="px-8 py-5 bg-sky-50/10">
                      {row.mindmap === true ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                          <Check size={14} strokeWidth={3} />
                        </div>
                      ) : row.mindmap}
                    </td>
                    <td className="px-8 py-5 text-slate-400">
                      {row.others === true ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500/50 flex items-center justify-center text-white">
                          <Check size={14} strokeWidth={3} />
                        </div>
                      ) : row.others === false ? (
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-300">
                          <X size={14} strokeWidth={3} />
                        </div>
                      ) : (
                        <span className="text-xs font-bold uppercase tracking-wider opacity-60">{row.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ScrollReveal>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Ready to upgrade your OS experience?</h3>
            <div className="flex flex-wrap justify-center gap-4">
               <button className="px-10 py-4 rounded-full bg-[#1a1b26] text-white font-medium hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-xl">
                 Download MindMapOS
               </button>
               <button className="px-10 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-all hover:-translate-y-0.5">
                 Contact Sales
               </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
