# Accessible Agentic AI V2 - Excalidraw Diagram Set

Complete visual documentation for the Accessible Agentic AI V2 R&D Deep Dive. All diagrams are in `.excalidraw` format and can be opened at https://excalidraw.com or in the Excalidraw VS Code extension.

---

## 📊 Diagram Index

### **1. Master Overview** (`08-master-v2-research-findings.excalidraw`)
**Purpose**: Executive summary connecting V1→V2 evolution  
**Size**: 1400×1200px  
**Audience**: Leadership + Engineering (balanced)

**Sections Covered**:
- **V2 Scope**: 4 deferred areas from V1 now resolved
- **4 Critical V1→V2 Revisions**:
  1. Lobster Engine → Temporal.io + PydanticAI (AD-07, AD-08)
  2. Whisper Tiny → IndicConformer CTC-RNNT (AD-09)
  3. Flesch-Kincaid → Language-specific regression models (AD-11)
  4. Single scam classifier → Two-stage pipeline + LIME (AD-12)
- **3 New V2 Capabilities**:
  - G-NEW-01: Temporal.io Integration (5-6 weeks)
  - G-NEW-02: Indic TTS (3-4 weeks)
  - G-NEW-03: BODH Clinical Benchmarking (4-6 weeks, Phase 2 blocker)
- **Cost Impact**: V1 $3.71 → V2 $3.92 (+$0.21 breakdown)
- **Updated R&D Matrix**: 11 gap areas (8 Phase 1, 3 Phase 2)

**Key Insight**: Full R&D stack adds only $0.21/user/month, still under $5.00 Phase 1 viability threshold.

---

### **2. Architecture Deep Dive** (`08a-v2-architecture-revisions.excalidraw`)
**Purpose**: Technical implementation details for engineering team  
**Size**: 1400×1300px  
**Audience**: Engineering (technical depth)

**Sections Covered**:

#### **Temporal.io + PydanticAI Composite Architecture**
- **Temporal.io Benefits over Lobster**:
  1. Crash Tolerance: Event log persists independently (resumeToken requires Gateway active)
  2. Temporal Decoupling: Zero-compute waits for caregiver approval gates
  3. Distributed Scheduling: Replaces Node.js heartbeat runner (V1 Section 9.2)
- **PydanticAI Type-Safe Firewall**:
  - Prevents LLM hallucination at parameter level
  - Structured exceptions before API invocation
  - Context injection: KMS credential proxy, role tier, approved contacts
- **V1 Cross-References**: Section 4.3 (Lobster), 9.2 (Heartbeat)

#### **Voice AI Revolution: IndicConformer**
- **Whisper Failure Modes**:
  - Autoregressive architecture → 2-4s latency (disorients elderly)
  - English/Latin-script bias → degrades on regional Indian dialects
- **IndicConformer Advantages**:
  - CTC-RNNT hybrid decoding → sub-100ms streaming (10× faster)
  - 22 scheduled languages coverage
  - Trained on elderly speaker profiles, rural dialects
- **Runtime Selection**: Sherpa-ONNX evaluation (Weeks 1-2 target: sub-200ms on Redmi A3)
- **V1 Cross-References**: Section 6.1 (Voice-First), 9.1 (Multilingual)

#### **Indic Language Readability Models**
- **CRITICAL FINDING**: Flesch-Kincaid mathematically invalid for Indian languages
  - Agglutinative morphology (Tamil): Longer words = simpler (familiar morphemes)
  - Juktakkhors (Bengali): Consonant conjuncts = cognitive difficulty indicator
  - Sandhi rules (Sanskrit-derived): Phonological merging confuses syllable counting
- **5 Language Families**:
  1. Hindi (Devanagari): Tatsama density, conjunct consonant density
  2. Bengali (Bangla): Juktakkhor frequency, bimorphemic compounds
  3. Tamil (Dravidian): Morpheme-per-word ratio (not syllable count)
  4. Telugu/Kannada/Malayalam: Same morpheme-per-word approach
  5. Marathi/Gujarati/Odia: Hybrid Devanagari + sandhi segmentation
- **3-Stage Post-Processor Pipeline**:
  1. Language detection (fastText <2MB)
  2. Language-specific scoring (AI4Bharat Indic NLP Library)
  3. Conditional simplification (Haiku 4.5, $0.03, 30% of responses)
- **V1 Cross-References**: Section 6.2 (Plain-Language), 9.1 (Multilingual)

**Timelines**:
- G-NEW-01 Temporal: 5-6 weeks
- G-02 Voice: 9-11 weeks (was 8-10, +2w for Sherpa-ONNX eval)
- G-03 Readability: 8-10 weeks (was 4-6, scope expanded 2×)
- G-NEW-02 TTS: 3-4 weeks

---

### **3. Compliance & Security** (`08b-v2-compliance-security.excalidraw`)
**Purpose**: Security architecture, healthcare compliance, operational details  
**Size**: 1400×1300px  
**Audience**: Security/Compliance teams + Leadership

**Sections Covered**:

#### **Two-Stage Scam Detection Pipeline**
- **Layer 1a (Edge Heuristic)**:
  - <100ms latency, zero network, on-device
  - 3 input corpora: URL blocklist, Indic urgency keywords, structural scam templates
  - Action: Quarantine + caregiver alert
- **Layer 1b (Semantic Classifier)**:
  - ~2s latency, Claude Haiku 4.5, cloud backend
  - Structured JSON output (PydanticAI validated)
  - Target: Friend-in-distress, emotional manipulation, authority impersonation
- **LIME Attribution**:
  - Explainable alerts for caregivers (not just "threat score: 0.87")
  - Example: "Blocked: urgent money request from unverified contact"
  - Cost: $0.01/user/month (5 scam events/month)
- **V1 Cross-References**: Section 5.1 (Scam Filter), 9.1 (R&D)

#### **Prompt Injection Prevention**
- **System Prompt Pinning**: SOUL.md boundaries at system-role level
- **Content Boundary Marking**: XML-style tags for externally sourced content
- **Output Validation**: Check for unapproved phone numbers, financial accounts

#### **Healthcare Integration (ABDM Framework)**
- **Three ABDM Roles**:
  - HIP (Health Information Provider): Hospitals, clinics (NOT our role)
  - HIU (Health Information User): Our system operates as HIU
  - Health Locker: Consent manager (patient grants specific, time-limited consent)
- **7-Step Compliance Proxy Flow**:
  1. Healthcare Provider initiates request
  2. Proxy initiates ABDM consent handshake
  3. Elder user sees plain-language notification
  4. On confirmation → consent artefact to Health Locker
  5. Health Locker routes to HIP → FHIR payload returned
  6. Proxy validates FHIR, extracts clinical fields, translates to narrative
  7. Narrative injected into LLM (raw FHIR stored encrypted, scrubbed on session close)
- **Why LLM Never Sees Raw FHIR**: SNOMED CT/LOINC codes → hallucination risk (clinically unacceptable)
- **V1 Cross-References**: Section 5.3 (DPDP), 9.1 (Healthcare API)

#### **BODH Clinical Benchmarking (NEW - G-NEW-03)**
- **4 Mandatory Dimensions** (Phase 2 RELEASE BLOCKER):
  1. Diagnostic Accuracy: Zero safety omissions, zero hallucinated values
  2. Algorithmic Fairness: Disaggregated across demographics
  3. Clinical Safety Matrix: ANY failure = release blocker
  4. Regional Language Clinical Accuracy: Run with readability post-processor
- **Timeline**: 4-6 weeks
- **Next Step**: Submit BODH dataset access application (diabetes, hypertension, cardiovascular)

#### **DPDP Act 2023 Implementation**
- **Verifiable Consent Ledger**: Immutable records with cryptographic hashes
- **Data Minimisation**: Only necessary fields injected (enforced by Temporal + PydanticAI)
- **Cascading Delete Workflow** (72-hour window):
  1. Qdrant: Delete vectors → tombstone records
  2. PostgreSQL: Drop health partition → re-create empty
  3. Device cache: Push notification triggers wipe
  4. LLM API: Submit deletion request via Anthropic
  5. Compliance certificate: Signed JSON
- **V1 Cross-References**: Section 5.3 (Data Privacy)

#### **Full Cost Breakdown (9 Line Items)**
| Component | Technology | Cost/User/Month | Notes |
|-----------|------------|-----------------|-------|
| Core inference | Sonnet 4.6 | $3.60 | Unchanged |
| Scam L1a (edge) | On-device | $0.00 | Zero inference |
| Scam L1b (semantic) | Haiku 4.5 | $0.08 | +$0.02 over V1 |
| Readability | AI4Bharat NLP | $0.04 | Self-hosted |
| Simplification | Haiku 4.5 | $0.03 | 30% of responses |
| Temporal.io | Temporal Cloud | $0.12 | ~200 actions/month |
| LIME attribution | Haiku 4.5 | $0.01 | 5 scam events/month |
| Summarization | Haiku 4.5 | $0.02 | Unchanged |
| IndicConformer | CDN updates | $0.02 | Amortised |
| **TOTAL** | | **$3.92** | **+$0.21 over V1** |

**Timeline**: G-08 Healthcare API: 11-14 weeks (was 8-10, +ABDM enrolment +BODH)

---

## 🎨 Color Scheme (Consistent Across All Diagrams)

| Color | Hex | Usage |
|-------|-----|-------|
| **Purple** | `#845ef7` | V1 decisions (baseline) |
| **Green** | `#2b8a3e` | V2 revisions/improvements |
| **Red** | `#e03131` | Critical findings/release blockers |
| **Orange** | `#f08c00` | Timeline warnings/complexities |
| **Blue** | `#1864ab` | Architecture components |
| **Yellow** | `#fcc419` | Cost/metrics |
| **Teal** | `#20c997` | New V2 items (not in V1) |

---

## 📅 Complete R&D Timeline (11 Gap Areas)

### **Phase 1 (Months 1-6): 8 Gap Areas**
| Gap ID | Area | Timeline | V1 vs. V2 Change |
|--------|------|----------|------------------|
| **G-01** | Scam Detection | 5-7 weeks | Was 6-8w (architecture clarified) |
| **G-02** | Voice Interface | 9-11 weeks | Was 8-10w (Sherpa-ONNX eval +2w) |
| **G-03** | Plain-Language | 8-10 weeks | Was 4-6w (scope expanded 2×) |
| **G-NEW-01** | Temporal.io | 5-6 weeks | **NEW** (not in V1) |
| **G-NEW-02** | Indic TTS | 3-4 weeks | **NEW** (not in V1) |
| **G-04** | Caregiver Dashboard | 7-9 weeks | Unchanged (LIME attribution added) |
| **G-05** | Episodic Memory | 5-6 weeks | Unchanged (Mem0 enhancement) |
| **G-06** | Emergency Workflows | 4-5 weeks | Was 3-4w (Lobster→Temporal port +1w) |

**Critical Path Items**:
- Edge corpus curation (scam detection)
- Sherpa-ONNX runtime evaluation (voice)
- Indic language annotation corpus (readability)

### **Phase 2 (Months 7-12): 3 Gap Areas**
| Gap ID | Area | Timeline | Notes |
|--------|------|----------|-------|
| **G-07** | Multilingual Expansion | Phase 1: 8w (Hindi/Tamil/Bengali) + Phase 2: +6w (Telugu/Marathi) | Readability models promoted to Phase 1 |
| **G-08** | Healthcare API Proxy | 11-14 weeks | Was 8-10w (+ABDM enrolment +BODH benchmarking) |
| **G-NEW-03** | BODH Benchmarking | 4-6 weeks | **NEW** (Phase 2 RELEASE BLOCKER) |

---

## 🔗 V1 Cross-Reference Table

| V2 Decision | V1 Reference | V2 Revision | Content |
|-------------|--------------|-------------|---------|
| **AD-07** (Temporal) | V1 Section 4.3, 9.2 | Lobster → Temporal.io | Durable execution, crash tolerance |
| **AD-08** (PydanticAI) | V1 Section 5.1 | Credential proxy | Type-safe execution firewall |
| **AD-09** (IndicConformer) | V1 Section 6.1 | Whisper → IndicConformer | Sub-100ms streaming, 22 languages |
| **AD-10** (TTS) | V1 Section 6.1 | Generic → AI4Bharat | Natural prosody in regional languages |
| **AD-11** (Readability) | V1 Section 6.2, 9.1 | Flesch-Kincaid → Language-specific | Mathematically valid for Indian languages |
| **AD-12** (Scam Detection) | V1 Section 5.1, 9.1 | Single → Two-stage | Edge + semantic + LIME attribution |
| **AD-13** (Healthcare) | V1 Section 5.3, 9.1 | Generic → ABDM HIU | Compliance proxy, FHIR translation |
| **AD-14** (BODH) | V1 Section 9.1 | Not specified → Mandatory | 4-dimension clinical benchmarking |

---

## 📁 File List

```
agentic_ai/
├── 08-master-v2-research-findings.excalidraw          (Master overview)
├── 08a-v2-architecture-revisions.excalidraw           (Technical deep dive)
├── 08b-v2-compliance-security.excalidraw              (Compliance & security)
├── V2_DIAGRAMS_README.md                              (This file)
├── 01-system-architecture.excalidraw                  (V1 architecture)
├── 02-role-guardrail-architecture.excalidraw          (V1 roles)
├── 03-memory-architecture.excalidraw                  (V1 memory)
├── 04-security-threat-model.excalidraw                (V1 security)
├── 05-rd-priorities-roadmap.excalidraw                (V1 roadmap)
├── 06-llm-routing-component-decisions.excalidraw      (V1 LLM routing)
├── 07-openclaw-research-findings.excalidraw           (OpenClaw analysis)
└── DIAGRAMS_README.md                                 (V1 diagrams README)
```

---

## 💡 How to Use These Diagrams

### **For Presentations**:
1. **Executive Summary**: Show `08-master-v2-research-findings.excalidraw` first
2. **Engineering Deep Dive**: Use `08a-v2-architecture-revisions.excalidraw`
3. **Security/Compliance Review**: Use `08b-v2-compliance-security.excalidraw`
4. **Full Context**: Reference V1 diagrams (01-07) for foundational decisions

### **For Editing**:
- Visit https://excalidraw.com
- Drag & drop any `.excalidraw` file
- Or use Excalidraw VS Code extension

### **For Version Control**:
- Files are JSON format → fully diffable in git
- Changes tracked per element (ID-based)

### **For Printing**:
- Export as PNG from Excalidraw
- High-contrast colors suitable for B&W printing
- Recommended: 11×17" (tabloid) for readability

---

## ✅ Validation Checklist

All 3 V2 diagrams include:
- [x] **Balanced emphasis**: Engineering depth + Leadership context
- [x] **Specific timeline details**: Week estimates for all 11 gaps
- [x] **V1 cross-references**: Section numbers (e.g., "V1 Section 4.3, 9.2")
- [x] **Consistent color scheme**: Purple/Green/Red/Orange/Blue/Yellow/Teal
- [x] **~60-70 elements per diagram**: Complex but readable
- [x] **All 8 Architecture Decisions**: AD-07 through AD-14
- [x] **Complete cost breakdown**: 9 line items, V1→V2 delta shown
- [x] **Phase 1 vs. Phase 2 split**: Clear timeline separation
- [x] **Critical path items highlighted**: Edge corpus, Sherpa-ONNX, Indic annotation

---

**Version**: 2.0 · April 2026 · Created from Accessible Agentic AI R&D Deep Dive Volume II document

**Cross-References**:
- V1 Document: Accessible Agentic AI Product, Architecture & Roadmap (Version 1.0, April 2026)
- V2 Document: Accessible Agentic AI R&D Deep Dive Volume II (Version 2.0, April 2026)
