import { motion } from 'motion/react';
import { User, Command } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  const isAssistant = role === 'assistant';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex w-full px-4 py-6"
    >
      <div className="max-w-3xl mx-auto w-full flex gap-4 md:gap-6">
        {/* Avatar */}
        <div className="w-9 h-9 shrink-0 flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/50">
          {isAssistant ? (
            <div className="w-full h-full bg-white text-slate-800 flex items-center justify-center">
              <Command size={18} />
            </div>
          ) : (
            <div className="w-full h-full bg-[#1a1b26] text-white flex items-center justify-center shadow-sm">
              <User size={18} />
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 pt-1 space-y-2">
          <div className="font-semibold text-sm text-slate-900">
            {isAssistant ? 'MindMapOS' : 'You'}
          </div>
          <div className="text-[15px] leading-relaxed text-slate-600 whitespace-pre-wrap">
            {content}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
