import { motion } from 'motion/react';
import { Settings2, Cpu, Zap, Search } from 'lucide-react';

const suggestions = [
  { icon: Settings2, text: "Configure my local environment" },
  { icon: Cpu, text: "Manage device permissions" },
  { icon: Zap, text: "Automate a weekly report" },
  { icon: Search, text: "Find large files on my drive" },
];

export default function WelcomeView() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 w-full h-full pb-20 relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[32px] md:text-[40px] font-medium tracking-tight text-center text-slate-900 mb-10 leading-tight"
      >
        Good morning.<br />How can I assist you today?
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[600px]"
      >
        {suggestions.map((item, i) => (
          <button 
            key={i} 
            className="flex items-center gap-4 p-5 bg-white/60 backdrop-blur-lg border border-slate-200/50 rounded-2xl hover:border-sky-200 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-left text-slate-800 group"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex justify-center items-center group-hover:bg-sky-50 group-hover:border-sky-100 transition-colors">
              <item.icon size={18} className="text-slate-500 shrink-0 group-hover:text-sky-600 transition-colors" />
            </div>
            <span className="text-[14px] font-medium leading-snug">{item.text}</span>
          </button>
        ))}
      </motion.div>
    </div>
  );
}
