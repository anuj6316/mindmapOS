import React from 'react';
import SectionLabel from '../shared/SectionLabel';
import ScrollReveal from '../shared/ScrollReveal';
import { Cloud, Lock, Zap, Database, Activity, Key, Server, ArrowRight } from 'lucide-react';

export default function AWSSection() {
  return (
    <section id="aws-control-plane" className="py-24 border-b border-slate-100">
      <div className="w-full px-4 sm:px-8">
        <ScrollReveal>
          <SectionLabel number="06" label="AWS Control Plane" />
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Global scale. <br /> Zero-trust infrastructure.
          </h2>
          <p className="text-slate-500 text-[18px] font-light max-w-2xl mb-12">
            Every device talks to a multi-region AWS backend for authentication, token metering, API management, audit logs, and subscription billing.
          </p>
        </ScrollReveal>

        {/* Core AWS Infrastructure Grid */}
        <ScrollReveal delay={0.2}>
          <div className="mb-24">
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { 
                    service: "Amazon Cognito", 
                    role: "Device Auth & License Binding", 
                    details: [
                      "Device registers at first setup → gets JWT",
                      "JWT refreshes every 1h — bound to device fingerprint",
                      "User pool per org; federated SSO via SAML/OIDC",
                      "License tiers stored as Cognito user attributes"
                    ],
                    color: "text-sky-500", 
                    bg: "bg-sky-50",
                    icon: <Lock size={24} /> 
                  },
                  { 
                    service: "API Gateway + Lambda", 
                    role: "Request Routing & Business Logic", 
                    details: [
                      "REST + WebSocket APIs for device ↔ cloud",
                      "Lambda handles: token logs, marketplace ops, webhooks",
                      "WAF rules: rate limit per device-id, IP allowlist",
                      "Dead letter queue → SQS for failed operations"
                    ],
                    color: "text-amber-500", 
                    bg: "bg-amber-50",
                    icon: <Zap size={24} /> 
                  },
                  { 
                    service: "DynamoDB", 
                    role: "State Storage", 
                    details: [
                      "Table: devices — fingerprint, org, license, last-seen",
                      "Table: token_usage — device, date, agent, tokens_used",
                      "Table: marketplace — packages, versions, ratings",
                      "Table: subscriptions — tier, seats, overage rules"
                    ],
                    color: "text-emerald-500", 
                    bg: "bg-emerald-50",
                    icon: <Database size={24} /> 
                  },
                  { 
                    service: "CloudWatch + X-Ray", 
                    role: "Observability", 
                    details: [
                      "Real-time token usage dashboards per org",
                      "Anomaly detection: unusual IP, spike in API calls",
                      "Distributed tracing across Lambda + device calls",
                      "Alarms → SNS → Slack/email on threshold breach"
                    ],
                    color: "text-purple-500", 
                    bg: "bg-purple-50",
                    icon: <Activity size={24} /> 
                  },
                  { 
                    service: "Secrets Manager", 
                    role: "API Key & Secret Vaulting", 
                    details: [
                      "Org's API keys (OpenAI, etc.) stored encrypted at rest",
                      "Auto-rotation policies for supported providers",
                      "Devices fetch secrets via IAM role — no key on disk",
                      "Audit trail: who fetched which secret, when"
                    ],
                    color: "text-rose-500", 
                    bg: "bg-rose-50",
                    icon: <Key size={24} /> 
                  },
                  { 
                    service: "CodeDeploy + S3", 
                    role: "OTA Updates", 
                    details: [
                      "Agent packages stored in S3 with versioning",
                      "CodeDeploy pushes runtime updates to devices",
                      "Staged rollout: 5% → 25% → 100% canary",
                      "Rollback on error-rate spike (CloudWatch alarm)"
                    ],
                    color: "text-indigo-500", 
                    bg: "bg-indigo-50",
                    icon: <Server size={24} /> 
                  }
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1">
                     <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center ${s.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
                        {s.icon}
                     </div>
                     <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{s.role}</div>
                     <h4 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">{s.service}</h4>
                     <ul className="space-y-3">
                       {s.details.map((detail, idx) => (
                         <li key={idx} className="flex items-start gap-2 text-[14px] text-slate-600 font-light leading-relaxed">
                           <span className={`${s.color} mt-1 shrink-0`}>▸</span>
                           {detail}
                         </li>
                       ))}
                     </ul>
                  </div>
                ))}
             </div>
          </div>
        </ScrollReveal>

        {/* Token Metering Flow */}
        <ScrollReveal>
          <div className="bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] rounded-[40px] p-10 md:p-16 relative overflow-hidden">
            <div className="text-center mb-16 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100/80 text-slate-600 text-[11px] font-bold tracking-wider uppercase mb-6 shadow-sm border border-slate-200">
                 Telemetry & Billing
              </div>
              <h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Token Metering Flow</h3>
              <p className="text-slate-500 font-light max-w-2xl mx-auto text-[16px]">
                How MindMapOS tracks LLM usage securely from the local edge to the cloud billing engine, ensuring strict quotas without sacrificing device performance.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center items-center gap-3 md:gap-4 max-w-5xl mx-auto">
              {[
                { label: "Agent calls LLM", type: "device", icon: <Zap size={16} /> },
                { arrow: true },
                { label: "Local counter increments", type: "device", icon: <Database size={16} /> },
                { arrow: true },
                { label: "Batch flush every 60s to API GW", type: "network", icon: <Cloud size={16} /> },
                { arrow: true },
                { label: "Lambda writes to DynamoDB", type: "cloud", icon: <Server size={16} /> },
                { arrow: true },
                { label: "CloudWatch aggregate", type: "cloud", icon: <Activity size={16} /> },
                { arrow: true },
                { label: "Billing engine checks quota", type: "billing", icon: <Lock size={16} /> },
                { arrow: true },
                { label: "Overage alert or hard-stop", type: "alert", icon: <Activity size={16} /> }
              ].map((step, idx) => {
                if (step.arrow) {
                  return (
                    <div key={idx} className="text-slate-300 px-1 hidden md:block">
                      <ArrowRight size={20} />
                    </div>
                  );
                }

                let bgClass = "bg-white border-slate-200 text-slate-700";
                if (step.type === "device") bgClass = "bg-slate-50 border-slate-200 text-slate-600";
                if (step.type === "network") bgClass = "bg-amber-50 border-amber-200 text-amber-700";
                if (step.type === "cloud") bgClass = "bg-sky-50 border-sky-200 text-sky-700";
                if (step.type === "billing") bgClass = "bg-purple-50 border-purple-200 text-purple-700";
                if (step.type === "alert") bgClass = "bg-rose-50 border-rose-200 text-rose-700";

                return (
                  <div key={idx} className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl border shadow-sm ${bgClass} font-medium text-[13px] md:text-[14px] transition-transform hover:-translate-y-1`}>
                    <span className="shrink-0 opacity-70">{step.icon}</span>
                    {step.label}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
