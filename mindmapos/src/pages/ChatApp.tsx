/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import WelcomeView from '../components/WelcomeView';
import ChatInput from '../components/ChatInput';
import MobileHeader from '../components/MobileHeader';
import ChatMessage from '../components/ChatMessage';
import { GoogleGenAI } from '@google/genai';
import { Command, Grip, FileText, Activity, ShoppingBag, ScrollText, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatApp() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('welcome');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('mindmapos_setup_complete') !== 'true') {
      navigate('/setup');
    }
  }, [navigate]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAppsMenuOpen, setIsAppsMenuOpen] = useState(false);
  const appsMenuRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Click-outside to close app catalog (matches LandingPage behaviour)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (appsMenuRef.current && !appsMenuRef.current.contains(event.target as Node)) {
        setIsAppsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleNewChat = () => {
    setActiveItem('welcome');
    setMessages([]);
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: text }];
    setMessages(newMessages);
    setIsLoading(true);
    setActiveItem('chat');

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) throw new Error('GEMINI_API_KEY is not defined');

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: text,
        config: {
          systemInstruction: `You are MindMapOS, the first AI-native universal operating layer. 
          Your mission: Make every device feel like it belongs to the user.
          Your tone: Professional, technical yet accessible, safe, and transparent.
          Core Principles:
          1. Universal: You work across Linux, Windows, macOS, Android, iOS.
          2. Transparent: Explain every step you would take.
          3. Safe: Never perform destructive actions without confirmation.
          4. Local-First: Prioritize the user's local hardware control.
          5. Accessible: Turn plain language into device execution.`,
        },
      });

      const aiMessage = response.text || 'I apologize, but I am unable to process that request at the moment.';
      setMessages([...newMessages, { role: 'assistant', content: aiMessage }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages([...newMessages, {
        role: 'assistant',
        content: 'I encountered an error while processing your message. Please ensure your API key is configured correctly.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden text-slate-800 font-sans selection:bg-sky-100 selection:text-sky-900 relative">
      {/* Ambient Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-sky-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[60vw] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[50vw] bg-sky-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Navigation */}
      <Sidebar
        onNewChat={handleNewChat}
        activeItem={activeItem}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <MobileHeader />

      {/* Main Content */}
      <main className={`flex-1 flex flex-col relative h-full pt-16 lg:pt-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-16'}`}>

        {/* Top-right toolbar */}
        <div className="absolute top-4 right-4 z-30 hidden lg:flex flex-row-reverse items-center gap-2">

          {/* New Chat button */}
          <button
            onClick={handleNewChat}
            className="p-2 text-slate-400 hover:text-[#0047AB] hover:bg-blue-50 rounded-full transition-colors flex items-center justify-center shrink-0"
            title="New Conversation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><line x1="9" y1="10" x2="15" y2="10"></line><line x1="12" y1="7" x2="12" y2="13"></line></svg>
          </button>

          {/* App Catalog — same as LandingPage */}
          <div className="relative" ref={appsMenuRef}>
            <button
              onClick={() => setIsAppsMenuOpen(!isAppsMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${isAppsMenuOpen ? 'bg-slate-200 text-slate-800' : 'hover:bg-slate-200/50 text-slate-400 hover:text-[#0047AB]'}`}
              title="App Catalog"
              aria-label="App Launcher"
            >
              <Grip size={20} />
            </button>

            <AnimatePresence>
              {isAppsMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-12 right-0 w-[320px] sm:w-[380px] bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 z-[70]"
                >
                  <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-50">
                    <img src="/brand_logo.png" alt="MindMapOS" className="h-4 w-auto" />
                    <Link to="/app" className="text-sky-600 text-[13px] hover:text-sky-700 font-medium flex items-center gap-1">
                      Go to Home <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 mb-5">
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center group-hover:scale-105 transition-transform"><FileText size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Note taking</span>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center group-hover:scale-105 transition-transform"><Activity size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Orchestrator Agent</span>
                    </a>
                    <Link to="/marketplace" onClick={() => setIsAppsMenuOpen(false)} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform"><ShoppingBag size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Marketplace</span>
                    </Link>
                    <a href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center group-hover:scale-105 transition-transform"><ScrollText size={16} /></div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900">Audit logs</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <a href="#" className="text-sky-600 text-[14px] hover:text-sky-700 font-medium flex items-center gap-1 w-max">
                      All Apps <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col relative overflow-hidden" ref={scrollRef}>
          {activeItem === 'welcome' && messages.length === 0 ? (
            <WelcomeView />
          ) : (
            <div className="flex-1 overflow-y-auto pt-8 pb-40 w-full scroll-smooth">
              {messages.map((msg, i) => (
                <div key={i}>
                  <ChatMessage role={msg.role} content={msg.content} />
                </div>
              ))}
              {isLoading && (
                <div className="max-w-3xl mx-auto w-full px-4 flex gap-4 md:gap-6 py-6">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center overflow-hidden rounded-xl border border-slate-200/50 bg-white shadow-sm">
                    <img src="/brand_logo.png" alt="MindMapOS" className="w-6 h-auto animate-pulse" />
                  </div>
                  <div className="flex-1 pt-2 space-y-2">
                    <div className="font-semibold text-sm text-slate-900">MindMapOS</div>
                    <div className="text-[15px] leading-relaxed text-sky-500 font-medium italic">Thinking...</div>
                  </div>
                </div>
              )}
            </div>
          )}

          <ChatInput onSend={handleSendMessage} disabled={isLoading} />
        </div>
      </main>
    </div>
  );
}
