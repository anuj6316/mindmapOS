import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', label: '00 — Hero' },
  { id: 'problem', label: '01 — The Problem' },
  { id: 'how-it-works', label: '02 — How It Works' },
  { id: 'guardian-layer', label: '03 — Guardian Layer' },
  { id: 'architecture', label: '04 — Architecture' },
  { id: 'engine', label: '05 — Automation Engine' },
  { id: 'aws-control-plane', label: '06 — AWS Control Plane' },
  { id: 'security-billing', label: '07 — Security & Billing' },
  { id: 'technical-specs', label: '08 — Technical Specs' },
  { id: 'platform-roadmap', label: '09 — Roadmap' },
  { id: 'marketplace', label: '10 — Marketplace' },
  { id: 'setup-demo', label: '11 — Setup & Demo' },
  { id: 'business-model', label: '12 — Business Model' },
  { id: 'comparison', label: '13 — Comparison' },
];

interface DocsNavProps {
  onSelect?: () => void;
}

export default function DocsNav({ onSelect }: DocsNavProps) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px', // Adjust to trigger when section is in top-middle of view
        threshold: 0,
      }
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="w-full max-h-[calc(100vh-10rem)] overflow-y-auto pr-8 scrollbar-hide">
      <div className="mb-6">
        <h3 className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
          Documentation
        </h3>
        <ul className="space-y-1">
          {SECTIONS.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                  activeSection === section.id
                    ? 'text-sky-700 bg-sky-50/50 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', `#${section.id}`);
                  if (onSelect) onSelect();
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-8 border-t border-slate-100">
        <h3 className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
          Resources
        </h3>
        <ul className="space-y-1">
          <li>
            <a href="/marketplace" className="block px-4 py-2 text-[13px] text-slate-500 hover:text-sky-600 transition-colors">
              Marketplace
            </a>
          </li>
          <li>
            <a href="/download" className="block px-4 py-2 text-[13px] text-slate-500 hover:text-sky-600 transition-colors">
              Download Page
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-[13px] text-slate-500 hover:text-sky-600 transition-colors">
              GitHub Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
