import { Menu, Search } from 'lucide-react';

export default function MobileHeader() {
  return (
    <nav className="fixed top-0 left-0 w-full h-14 bg-white/80 backdrop-blur-xl lg:hidden border-b border-slate-200/50 px-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-3">
        <button className="text-slate-600 hover:text-sky-600 transition-colors">
          <Menu size={20} />
        </button>
        <span className="font-bold text-lg tracking-tight text-slate-800">MindMapOS</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-slate-600 hover:text-sky-600 transition-colors">
          <Search size={18} />
        </button>
        <div className="text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest ml-1">
          LIVE
        </div>
      </div>
    </nav>
  );
}
