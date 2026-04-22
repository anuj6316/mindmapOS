import { useState } from 'react';
import { 
  Plus, 
  Blocks, 
  Workflow, 
  Clock, 
  UserCircle,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  onNewChat: () => void;
  activeItem: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Sidebar({ onNewChat, activeItem, isOpen, onToggle }: SidebarProps) {
  const [isRecentOpen, setIsRecentOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState('skills');

  return (
    <aside 
      className={`fixed left-0 top-0 h-screen bg-white/60 backdrop-blur-xl border-r border-slate-200/50 flex flex-col z-40 hidden lg:flex shadow-sm transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'w-64' : 'w-16'}`}
    >
      {/* Brand Header */}
      <div className={`p-4 flex items-center ${isOpen ? 'justify-between' : 'justify-center border-b border-slate-200/50 pb-4'}`}>
        {isOpen && (
          <div className="flex items-center overflow-hidden px-1 py-1.5">
            <img src="/brand_logo.png" alt="MindMapOS" className="h-6 w-auto" />
          </div>
        )}
        
        <button 
          onClick={onToggle} 
          className="text-slate-400 hover:text-sky-600 transition-colors p-1.5 rounded-md hover:bg-sky-50 shrink-0"
          title={isOpen ? "Close sidebar" : "Open sidebar"}
        >
          {isOpen ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
        </button>
      </div>

      {/* Navigation Sections */}
      <nav className={`flex-1 flex flex-col overflow-y-auto space-y-6 mt-4 ${isOpen ? 'px-3 py-2' : 'px-2 py-2 items-center'}`}>
        <div className={`space-y-1 w-full ${!isOpen ? 'flex flex-col items-center' : ''}`}>
          {isOpen && <div className="text-[10px] font-bold text-slate-400 px-3 py-2 uppercase tracking-widest">Capabilities</div>}
          
          <button 
            onClick={() => setSelectedTab('skills')}
            className={`flex items-center gap-3 rounded-lg transition-all font-medium group overflow-hidden ${isOpen ? 'w-full px-3 py-2.5 text-[13px] whitespace-nowrap' : 'w-10 h-10 justify-center'} ${selectedTab === 'skills' ? 'bg-[#00A651] text-white shadow-sm' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`} 
            title={!isOpen ? "Skills" : ""}
          >
            <Blocks size={16} className={`${selectedTab === 'skills' ? 'text-white' : 'text-slate-400 group-hover:text-sky-600'} shrink-0 transition-colors`} /> 
            {isOpen && <span className="truncate">Skills</span>}
          </button>
          
          <button 
            onClick={() => setSelectedTab('connectors')}
            className={`flex items-center gap-3 rounded-lg transition-all font-medium group overflow-hidden ${isOpen ? 'w-full px-3 py-2.5 text-[13px] whitespace-nowrap' : 'w-10 h-10 justify-center'} ${selectedTab === 'connectors' ? 'bg-[#00A651] text-white shadow-sm' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`} 
            title={!isOpen ? "Connectors" : ""}
          >
            <Workflow size={16} className={`${selectedTab === 'connectors' ? 'text-white' : 'text-slate-400 group-hover:text-sky-600'} shrink-0 transition-colors`} /> 
            {isOpen && <span className="truncate">Connectors</span>}
          </button>
        </div>

        <div className={`space-y-1 w-full ${!isOpen ? 'flex flex-col items-center' : ''}`}>
          {isOpen ? (
            <button 
              onClick={() => setIsRecentOpen(!isRecentOpen)}
              className="flex w-full items-center justify-between px-3 py-2 text-[10px] font-bold text-slate-400 hover:text-sky-600 uppercase tracking-widest group transition-colors"
            >
              <span>Recent</span>
              {isRecentOpen ? <ChevronDown size={14} className="transition-transform group-hover:text-sky-600" /> : <ChevronRight size={14} className="transition-transform group-hover:text-sky-600" />}
            </button>
          ) : (
            <div className="w-6 h-[1px] bg-sky-200/50 my-4" />
          )}

          {isOpen && isRecentOpen && (
            <div className={`space-y-1 flex flex-col`}>
              {[
                { id: 'opt_storage', label: 'Optimize local storage' },
                { id: 'setup_env', label: 'Setup Python env' },
                { id: 'extract_data', label: 'Extract PDF data' }
              ].map(item => (
                <button 
                  key={item.id}
                  onClick={() => setSelectedTab(item.id)}
                  className={`flex items-center gap-3 rounded-lg transition-all group overflow-hidden w-full px-3 py-2 text-[13px] whitespace-nowrap ${selectedTab === item.id ? 'bg-[#00A651] text-white shadow-sm font-medium' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`} 
                  title={item.label}
                >
                  <Clock size={16} className={`${selectedTab === item.id ? 'text-white' : 'text-slate-400 group-hover:text-sky-600'} shrink-0 transition-colors`} /> 
                  <span className="truncate">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Footer Profile */}
      <div className={`border-t border-slate-200/50 space-y-1 bg-white/40 ${isOpen ? 'p-3' : 'py-3 flex flex-col items-center'}`}>
        <button 
          onClick={() => setSelectedTab('settings')}
          className={`flex items-center gap-3 rounded-lg transition-all font-medium group overflow-hidden ${isOpen ? 'w-full px-3 py-2.5 text-[13px] whitespace-nowrap' : 'w-10 h-10 justify-center'} ${selectedTab === 'settings' ? 'bg-[#00A651] text-white shadow-sm' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`} 
          title={!isOpen ? "Settings" : ""}
        >
          <Settings size={16} className={`${selectedTab === 'settings' ? 'text-white' : 'text-slate-400 group-hover:text-sky-600'} shrink-0 transition-colors`} /> 
          {isOpen && <span className="truncate">Settings</span>}
        </button>
        <button 
          onClick={() => setSelectedTab('pro')}
          className={`flex items-center gap-3 rounded-lg transition-all font-medium group overflow-hidden ${isOpen ? 'w-full px-3 py-2.5 text-[13px] whitespace-nowrap' : 'w-10 h-10 justify-center'} ${selectedTab === 'pro' ? 'bg-[#00A651] text-white shadow-sm' : 'text-slate-600 hover:bg-sky-50 hover:text-sky-600'}`} 
          title={!isOpen ? "Try Pro" : ""}
        >
          <UserCircle size={16} className={`${selectedTab === 'pro' ? 'text-white' : 'text-slate-400 group-hover:text-sky-600'} shrink-0 transition-colors`} /> 
          {isOpen && <span className="truncate">Try Pro</span>}
        </button>
      </div>
    </aside>
  );
}
