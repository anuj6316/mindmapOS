import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Terminal, Smartphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
               <div className="flex items-center">
                  <img src="/brand_logo.png" alt="MindMapOS" className="h-10 w-auto" />
               </div>
               <p className="text-slate-500 font-light max-w-sm">Building the foundation for the next generation of computing. The OS that listens, understands, and executes safely.</p>
            </div>
            <div className="space-y-4">
               <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Product</h4>
               <ul className="space-y-2 text-[14px] text-slate-600 font-medium">
                  <li><Link to="/docs" className="hover:text-sky-600 transition-colors">Technical Docs</Link></li>
                  <li><Link to="/marketplace" className="hover:text-sky-600 transition-colors">Marketplace</Link></li>
                  <li><Link to="/download" className="hover:text-sky-600 transition-colors">Download</Link></li>
               </ul>
            </div>
            <div className="space-y-4">
               <h4 className="font-bold text-xs uppercase tracking-widest text-slate-400">Community</h4>
               <ul className="space-y-2 text-[14px] text-slate-600 font-medium">
                  <li><a href="#" className="hover:text-sky-600 transition-colors">GitHub Repo</a></li>
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Discord Server</a></li>
                  <li><a href="#" className="hover:text-sky-600 transition-colors">Creator Program</a></li>
               </ul>
            </div>
         </div>
         <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[13px] text-slate-400 font-medium">© 2026 MindMapOS — Built for the future.</div>
            <div className="flex gap-6">
               <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Laptop size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Terminal size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors"><Smartphone size={20} /></a>
            </div>
         </div>
      </div>
    </footer>
  );
}
