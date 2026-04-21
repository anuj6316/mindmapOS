import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Command, ArrowRight, Brain, Cloud, HardDrive, Cpu, Settings, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SetupPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  // Settings State
  const [modelType, setModelType] = useState<'local' | 'cloud'>('local');
  const [expLevel, setExpLevel] = useState<'beginner' | 'advanced'>('beginner');
  const [autoStart, setAutoStart] = useState(true);

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  const steps = [
    { id: 'welcome', title: 'Welcome to MindMapOS' },
    { id: 'model', title: 'Choose AI Engine' },
    { id: 'experience', title: 'Experience Level' },
    { id: 'system', title: 'System Settings' },
    { id: 'done', title: 'All Set' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col items-center justify-center p-4 selection:bg-sky-100 selection:text-sky-900 overflow-hidden relative">
      {/* Ambient backgrounds */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-200/30 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      {/* Main Card */}
      <motion.div 
        className="w-full max-w-2xl bg-white/70 backdrop-blur-xl border border-slate-200/60 rounded-[32px] shadow-2xl shadow-sky-900/5 overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-sky-500"
            initial={{ width: 0 }}
            animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div className="p-8 sm:p-12 min-h-[500px] flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-sm shrink-0">
              <Command size={18} className="text-slate-700" />
            </div>
            <div>
              <div className="text-[11px] font-bold uppercase tracking-widest text-sky-500 mb-0.5">Setup Wizard</div>
              <h1 className="text-xl font-semibold text-slate-800">{steps[step].title}</h1>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {step === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-800 leading-tight">
                      Let's get your <br/>system ready.
                    </h2>
                    <p className="text-[15px] text-slate-500 leading-relaxed max-w-md">
                      MindMapOS runs securely on your machine. We just need to configure 3 quick settings before you can start automating your workflows.
                    </p>
                    <div className="pt-8 flex flex-col gap-3 max-w-sm">
                      <div className="flex items-center gap-3 text-[14px] text-slate-600">
                        <ShieldCheck size={18} className="text-emerald-500" /> 100% private. No telemetry.
                      </div>
                      <div className="flex items-center gap-3 text-[14px] text-slate-600">
                        <Settings size={18} className="text-sky-500" /> Takes less than 2 minutes.
                      </div>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-6">
                    <p className="text-[14px] text-slate-500 mb-6">Choose how MindMapOS processes your requests. You can change this later.</p>
                    
                    <button 
                      onClick={() => setModelType('local')}
                      className={`w-full text-left p-5 rounded-[24px] border-2 transition-all flex gap-4 items-start ${
                        modelType === 'local' ? 'border-sky-500 bg-sky-50/30 shadow-md shadow-sky-100' : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${modelType === 'local' ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-500'}`}>
                        <HardDrive size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-[15px] mb-1 flex items-center gap-2">
                          On-Device AI <span className="bg-emerald-100 text-emerald-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Recommended</span>
                        </div>
                        <p className="text-[13px] text-slate-500 leading-relaxed mb-3">Runs entirely on your machine. 100% private. Requires ~5GB download and 8GB RAM.</p>
                        <div className="flex items-center gap-4 text-[12px] font-medium text-slate-400">
                          <span className="flex items-center gap-1.5"><Cpu size={14}/> Llama 3 8B</span>
                          <span className="flex items-center gap-1.5"><CheckCircle2 size={14}/> Free forever</span>
                        </div>
                      </div>
                    </button>

                    <button 
                      onClick={() => setModelType('cloud')}
                      className={`w-full text-left p-5 rounded-[24px] border-2 transition-all flex gap-4 items-start ${
                        modelType === 'cloud' ? 'border-sky-500 bg-sky-50/30 shadow-md shadow-sky-100' : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${modelType === 'cloud' ? 'bg-sky-100 text-sky-600' : 'bg-slate-100 text-slate-500'}`}>
                        <Cloud size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-[15px] mb-1">Cloud AI (Bring your own API)</div>
                        <p className="text-[13px] text-slate-500 leading-relaxed mb-3">Uses external APIs for processing. Fast, requires no local resources, but requires an API key.</p>
                        <div className="flex items-center gap-2 text-[12px] font-medium text-slate-400">
                          <span>Supports OpenAI, Anthropic, Gemini</span>
                        </div>
                      </div>
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <p className="text-[14px] text-slate-500 mb-6">How much detail do you want MindMapOS to provide when executing tasks?</p>
                    
                    <button 
                      onClick={() => setExpLevel('beginner')}
                      className={`w-full text-left p-5 rounded-[24px] border-2 transition-all flex gap-4 items-center ${
                        expLevel === 'beginner' ? 'border-sky-500 bg-sky-50/30 shadow-md shadow-sky-100' : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${expLevel === 'beginner' ? 'border-sky-500' : 'border-slate-300'}`}>
                        {expLevel === 'beginner' && <div className="w-2.5 h-2.5 bg-sky-500 rounded-full" />}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-[15px]">Explain Everything</div>
                        <p className="text-[13px] text-slate-500">MindMapOS will explain its plans clearly before asking for confirmation. Best for most users.</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => setExpLevel('advanced')}
                      className={`w-full text-left p-5 rounded-[24px] border-2 transition-all flex gap-4 items-center ${
                        expLevel === 'advanced' ? 'border-sky-500 bg-sky-50/30 shadow-md shadow-sky-100' : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${expLevel === 'advanced' ? 'border-sky-500' : 'border-slate-300'}`}>
                        {expLevel === 'advanced' && <div className="w-2.5 h-2.5 bg-sky-500 rounded-full" />}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 text-[15px]">Fast & Concise</div>
                        <p className="text-[13px] text-slate-500">Minimal explanations. Just shows the raw commands or steps and waits for confirmation. For power users.</p>
                      </div>
                    </button>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <p className="text-[14px] text-slate-500 mb-6">Final system preferences before we start.</p>
                    
                    <div className="bg-white border border-slate-100 rounded-[24px] p-6 shadow-sm flex items-center justify-between gap-4">
                      <div>
                        <div className="font-semibold text-slate-800 text-[15px] mb-1">Launch on Startup</div>
                        <p className="text-[13px] text-slate-500 max-w-sm">MindMapOS will start silently in the background when your computer boots up. (Uses ~150MB RAM at idle)</p>
                      </div>
                      <button 
                        onClick={() => setAutoStart(!autoStart)}
                        className={`w-12 h-6 rounded-full transition-colors relative shrink-0 ${autoStart ? 'bg-sky-500' : 'bg-slate-200'}`}
                      >
                        <motion.div 
                          className="w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm"
                          animate={{ left: autoStart ? '26px' : '2px' }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="flex flex-col items-center justify-center text-center h-full space-y-6 pt-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-2">
                      <CheckCircle2 size={40} />
                    </div>
                    <h2 className="text-3xl font-medium tracking-tight text-slate-800">You're all set.</h2>
                    <p className="text-[15px] text-slate-500 max-w-sm mx-auto">
                      {modelType === 'local' 
                        ? 'Your local AI model will finish downloading in the background. You can start using MindMapOS immediately.'
                        : 'Your cloud preferences are saved. You can add your API keys in the app settings.'}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          <div className="mt-10 flex items-center justify-between pt-6 border-t border-slate-100">
            {step > 0 && step < steps.length - 1 ? (
              <button onClick={prevStep} className="px-5 py-2.5 text-[14px] font-medium text-slate-500 hover:text-slate-800 transition-colors">
                Back
              </button>
            ) : <div />}

            {step < steps.length - 1 ? (
              <button 
                onClick={nextStep}
                className="px-6 py-2.5 rounded-full bg-[#1a1b26] hover:bg-slate-800 text-white font-medium text-[14px] transition-all hover:-translate-y-0.5 shadow-md flex items-center gap-2 ml-auto"
              >
                {step === 0 ? 'Get Started' : 'Continue'} <ArrowRight size={16} />
              </button>
            ) : (
              <button 
                onClick={() => {
                  localStorage.setItem('mindmapos_setup_complete', 'true');
                  navigate('/app');
                }}
                className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-[14px] transition-all hover:-translate-y-0.5 shadow-md shadow-sky-500/30 flex items-center gap-2 mx-auto"
              >
                Open MindMapOS
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
