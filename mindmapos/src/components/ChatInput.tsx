import React, { useState } from 'react';
import { Paperclip, ArrowUp } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    if (value.trim() && !disabled) {
      onSend(value);
      setValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="absolute flex justify-center bottom-0 left-0 w-full bg-gradient-to-t from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent pb-6 pt-12 px-4 z-20">
      <div className="max-w-3xl w-full relative">
        <div className="relative group rounded-[24px] bg-white/80 backdrop-blur-xl p-2 flex items-center transition-all border border-slate-200/50 focus-within:border-sky-300 focus-within:shadow-[0_0_0_4px_rgba(224,242,254,0.5)] shadow-sm">
          <button className="p-2 ml-1 text-slate-400 hover:text-sky-600 transition-colors shrink-0">
            <Paperclip size={20} />
          </button>
          
          <input 
            type="text"
            className="flex-1 bg-transparent border-none outline-none px-3 text-[15px] placeholder-slate-400/80 py-2.5 text-slate-800"
            placeholder="Type your message to MindMapOS..."
            value={value}
            disabled={disabled}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          
          <button 
            onClick={handleSend}
            disabled={disabled || !value.trim()}
            className={`p-2.5 rounded-full transition-all flex items-center justify-center shrink-0 ${
              value.trim() && !disabled 
                ? 'bg-[#1a1b26] text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-slate-800' 
                : 'bg-transparent text-slate-300'
            }`}
          >
            <ArrowUp size={20} className="stroke-[2.5]" />
          </button>
        </div>
        <div className="text-center mt-3 text-[12px] text-slate-400/80 font-medium tracking-tight">
          MindMapOS can make mistakes. Please verify important information.
        </div>
      </div>
    </div>
  );
}
