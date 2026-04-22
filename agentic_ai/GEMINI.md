# Accessible Agentic AI - Project Context

## Project Overview
This project defines the vision, architecture, and roadmap for **Accessible Agentic AI**, a "Guardian-First" personal AI companion built on a hardened fork of the **OpenClaw** architecture. It is specifically designed for elderly and non-technical users who require proactive protection, high accessibility, and deterministic safety for high-stakes actions.

### Core Philosophy
- **Guardian Mode by Default:** Treats users as potentially vulnerable; defaults to restriction and scam detection.
- **Accessibility-First:** Prioritizes voice interaction, plain-language responses, and high-contrast, large-format UI.
- **Deterministic Safety:** Uses the **Lobster Workflow Engine** for irreversible actions (e.g., financial transactions, medication schedules).
- **Three-Tier Memory:** Implements a vector-database-backed (Qdrant) memory layer to maintain long-term context without token bloat or "Context Rot."

## Project Type: Non-Code (Documentation & Design)
This repository currently contains the primary strategic and technical documentation for the project.

### Key Files
- **accessible_agentic_ai.docx**: The comprehensive Product, Architecture, and Roadmap document (Version 1.0, April 2026). It details the five-layer pipeline, threat models, role-based guardrails, and phased implementation strategy.

## System Architecture Highlights
1. **Input Layer:** Multi-channel (WhatsApp, Voice) with integrated Scam Detection Filters.
2. **Gateway:** VPC-private, hardened against public exposure (unlike vanilla OpenClaw).
3. **Agent Core:** Anthropic Claude (Sonnet 4.6/Haiku 4.5) for reasoning and classification.
4. **Execution Layer:** Strict tool whitelisting and Lobster workflow enforcement.
5. **Memory:** Tiered model (Active Session, Episodic Vector Memory, Structured Cold Storage).

## Usage & Development Strategy
Future development should follow the **Phased Roadmap**:
- **Phase 1 (Guardian Foundation):** Focus on safety, voice interface, and the Elder User role.
- **Phase 2 (Role Expansion):** Activate Caregiver and Healthcare Provider roles with compliance proxies.
- **Phase 3 (Power User & Ecosystem):** Open sandboxed execution and a signed skill registry.

## Development Conventions (Inferred)
- **Safety First:** No feature should bypass the Guardian Mode defaults.
- **Privacy:** Data residency (India-focused) and compliance (DPDP/GDPR) are foundational.
- **No Jargon:** All user-facing communication must be at a Grade 6 reading level or below.
