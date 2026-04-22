# Accessible Agentic AI - Excalidraw Diagrams

Complete visual documentation for the Accessible Agentic AI system. All diagrams are in `.excalidraw` format and can be opened at https://excalidraw.com or in the Excalidraw VS Code extension.

## Diagram Index

### 1. **System Architecture** (`01-system-architecture.excalidraw`)
**What it shows:** The 5-layer accessibility-hardened pipeline + 3 deployment zones
- Layer 1: Input Channel (WhatsApp, Voice, Scam Detection Filter)
- Layer 2: Gateway (Private VPC, Certificate Pinning, 32K Token Cap)
- Layer 3: Agent Core (Pre-compiled prompts, Claude Sonnet 4.6, Haiku 4.5)
- Layer 4: Action Engine (Tool whitelist, Lobster workflows, NO exec/shell)
- Layer 5: External Systems (Pre-approved APIs, Compliance proxy, Credential injection)
- Deployment zones: Mobile App → Cloud Backend (VPC) → Caregiver Dashboard

**Key insight:** Gateway is VPC-private only (no public port) - architectural impossibility of exposure in Elder User tier.

---

### 2. **Role-Based Guardrail Architecture** (`02-role-guardrail-architecture.excalidraw`)
**What it shows:** 5-tier permission hierarchy + escalation pathway
- Elder User (Phase 1): Maximum restriction - voice/text, reminders, read-only web
- Caregiver (Phase 2): High guardrail - audit logs, approve financial actions, distress alerts
- Healthcare Provider (Phase 2): Medium - health context read/write, medication workflows
- Enterprise Admin (Phase 2): Medium-low - MCP config, custom Lobster workflows (no-code)
- Power User (Phase 3): Low - full workflow authoring, signed skills, sandboxed shell

**Escalation pathway:** Request → OTP verification → Caregiver consent → Audit log → 24hr observation

**Key principle:** Role escalation is NEVER automatic. LLM cannot grant elevation.

---

### 3. **Memory Architecture** (`03-memory-architecture.excalidraw`)
**What it shows:** Three-tier memory model preventing Context Rot
- **Hot (Active Session):** 32K token hard cap, Haiku summarization at 24K
- **Warm (Episodic):** Qdrant vector DB, 12-month rolling, semantic search (top-5 chunks)
- **Cold (Structured):** Encrypted PostgreSQL, indefinite retention, daily refresh

**Cost breakdown:**
- Conversational inference: $3.60 (Sonnet 4.6)
- Reminders/heartbeat: $0.06 (Haiku 4.5)
- Context summarization: $0.02 (Haiku 4.5)
- Scam detection: $0.03 (Haiku 4.5)
- **Total: $3.71/user/month** (vs. $16+ for vanilla OpenClaw = 77% reduction)

---

### 4. **Security & Threat Model** (`04-security-threat-model.excalidraw`)
**What it shows:** 5 threat vectors + mitigations + emergency protocols

**Threats:**
1. Social Engineering via Agent → Scam Detection Filter at Layer 1
2. Prompt Injection Attack → Input sanitization + SOUL.md pinning
3. Malicious Skill Installation → Elder: NO install | Power User: Signed registry only
4. API Credential Exposure → Credential Proxy (LLM never sees raw keys)
5. Unauthorized Role Escalation → Hardware-bound roles + OTP + caregiver approval

**Emergency Protocols (3-tier):**
- Tier 1: Passive monitoring (distress signal detection)
- Tier 2: Caregiver notification (push alert with summary)
- Tier 3: Emergency Lobster workflow (notify all caregivers + send address + display emergency number)
- ❌ Does NOT call emergency services autonomously

**Compliance:** DPDP Act 2023 + GDPR (consent layer, data minimisation, right to erasure, Indian data residency)

---

### 5. **R&D Priorities & Roadmap** (`05-rd-priorities-roadmap.excalidraw`)
**What it shows:** 8 gap areas + 3-phase rollout timeline

**Phase 1 (Months 1-6) - Guardian Foundation:**
- 🔴 CRITICAL: Scam Detection Filter (6-8 weeks), Voice Interface (8-10 weeks), Plain-Language Post-Processor (4-6 weeks)
- 🟠 HIGH: Caregiver Dashboard (6-8 weeks), Episodic Memory/Qdrant (4-5 weeks), Emergency Workflows (3-4 weeks)
- Go/No-Go: Red-team pass, >94% scam recall, 20+ elder usability tests, <$5/user/month

**Phase 2 (Months 7-12) - Role Expansion:**
- 🟡 MEDIUM: Multilingual (Telugu, Bengali, Marathi - 10-14 weeks), Healthcare API Compliance Proxy (8-10 weeks)
- Activate Caregiver, Healthcare Provider, Enterprise Admin roles

**Phase 3 (Months 13-18) - Power User & Ecosystem:**
- Power User role live (workflow authoring, Ollama routing, sandboxed shell)
- Signed Skill Registry (curated alternative to ClawHub)
- Developer SDK, multi-agent coordination

**Milestones:** 500 pilot (P1) → 5,000 (P2) → 25,000+ users (P3)

---

### 6. **LLM Routing & Component Decisions** (`06-llm-routing-component-decisions.excalidraw`)
**What it shows:** Model routing strategy + OpenClaw adoption decisions

**Model Routing:**
- Claude Sonnet 4.6: Core conversational reasoning (best prompt-injection resistance)
- Claude Haiku 4.5: Scam detection, classification, summarization (~25× cheaper)
- Claude Opus 4.6: Healthcare complex document analysis (low-volume, high-value)
- Gemini 3 Pro: Long-context ingestion (1M tokens - full health records)
- Qwen3/Llama 3.3 70B (Ollama): Local inference for data-sovereign deployments

**OpenClaw Components - ADOPT:**
- Gateway Protocol + WebSocket (harden defaults)
- Lobster Workflow Engine (direct adoption - perfect for safety flows)
- MCP Integration Layer (JSON-RPC 2.0 for healthcare APIs)
- Heartbeat Scheduler (Node.js → Rust rewrite)
- AGENTS.md/SOUL.md system (with access control)

**OpenClaw Components - DISCARD:**
- ClawHub Skill Marketplace (341/3000 malicious - replace with signed internal registry)
- Default Port 18789 binding (18,000+ exposed instances - VPC-private only)
- Infinite session-append memory (root cause of Context Rot - replace with 3-tier Qdrant)

---

## How to Use These Diagrams

1. **For presentations:** Open individual diagrams in Excalidraw, export as PNG/PNG
2. **For editing:** Drag `.excalidraw` files into https://excalidraw.com
3. **For version control:** Files are JSON - diffable in git
4. **For printing:** All diagrams use high-contrast colors suitable for black-and-white printing

## File List

```
agentic_ai/
├── 01-system-architecture.excalidraw
├── 02-role-guardrail-architecture.excalidraw
├── 03-memory-architecture.excalidraw
├── 04-security-threat-model.excalidraw
├── 05-rd-priorities-roadmap.excalidraw
├── 06-llm-routing-component-decisions.excalidraw
└── DIAGRAMS_README.md (this file)
```

## Design Notes

- **Color scheme:** Red (critical/elder), Orange (high/caregiver), Yellow (medium/healthcare), Green (adopt/safe), Blue (infrastructure)
- **Font:** Excalifont (fontFamily: 5) for all text elements
- **Layout:** Horizontal flow for processes, vertical stacking for hierarchies
- **Accessibility:** Minimum 16px font size, 7:1 contrast ratios where applicable

---

**Version:** 1.0 · April 2026 · Created from Accessible Agentic AI Product/Architecture/Roadmap document
