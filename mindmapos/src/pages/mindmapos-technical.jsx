import { useState, useEffect, useRef } from "react";

/* ─── DESIGN TOKENS ─────────────────────────────────────────── */
const C = {
  bg:      "#040608",
  panel:   "#080d14",
  card:    "#0b1220",
  border:  "#141f30",
  border2: "#1e2f45",
  cyan:    "#00d4ff",
  cyanDim: "#00d4ff18",
  cyanMid: "#00d4ff44",
  green:   "#00ff87",
  greenDim:"#00ff8718",
  amber:   "#ffb300",
  amberDim:"#ffb30018",
  red:     "#ff4d6a",
  purple:  "#9d6fff",
  text:    "#dce8f5",
  sub:     "#4a6880",
  sub2:    "#2a4060",
};

/* ─── HELPERS ────────────────────────────────────────────────── */
const Tag = ({ color = C.cyan, children }) => (
  <span style={{
    background: color + "18", color,
    border: `1px solid ${color}33`,
    borderRadius: 4, padding: "1px 8px",
    fontSize: 10, fontFamily: "monospace",
    fontWeight: 700, letterSpacing: 1,
    textTransform: "uppercase", whiteSpace: "nowrap",
  }}>{children}</span>
);

const Pill = ({ color = C.cyan, children }) => (
  <span style={{
    background: color + "12", color,
    borderRadius: 20, padding: "3px 12px",
    fontSize: 11, fontWeight: 600,
    border: `1px solid ${color}25`,
  }}>{children}</span>
);

const Divider = ({ label }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "28px 0 20px" }}>
    <div style={{ flex: 1, height: 1, background: C.border }} />
    {label && <span style={{ color: C.sub, fontSize: 10, fontFamily: "monospace", letterSpacing: 2, textTransform: "uppercase" }}>{label}</span>}
    <div style={{ flex: 1, height: 1, background: C.border }} />
  </div>
);

const CodeBlock = ({ lines, color = C.cyan }) => (
  <div style={{
    background: "#020406", border: `1px solid ${C.border}`,
    borderRadius: 10, padding: "16px 20px",
    fontFamily: "monospace", fontSize: 12, lineHeight: 1.8,
    overflowX: "auto",
  }}>
    {lines.map((line, i) => (
      <div key={i} style={{ display: "flex", gap: 16 }}>
        <span style={{ color: C.sub2, userSelect: "none", minWidth: 20, textAlign: "right" }}>{i + 1}</span>
        <span style={{ color: line.startsWith("#") ? C.sub : line.startsWith("$") ? C.green : color }}>{line}</span>
      </div>
    ))}
  </div>
);

const FlowArrow = ({ vertical }) => (
  <div style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: C.cyan,
    fontSize: vertical ? 20 : 16,
    padding: vertical ? "4px 0" : "0 4px",
    opacity: 0.6,
  }}>{vertical ? "↕" : "→"}</div>
);

const StatusDot = ({ color = C.green }) => (
  <span style={{
    display: "inline-block", width: 7, height: 7,
    borderRadius: "50%", background: color,
    boxShadow: `0 0 6px ${color}`,
    animation: "pulse 2s infinite",
  }} />
);

/* ─── SECTION REGISTRY ───────────────────────────────────────── */
const SECTIONS = [
  { id: "overview",      icon: "◈",  label: "System Overview" },
  { id: "install",       icon: "⬇",  label: "Installation Flow" },
  { id: "runtime",       icon: "⚙",  label: "Agent Runtime" },
  { id: "marketplace",   icon: "◎",  label: "Agent Marketplace" },
  { id: "automation",    icon: "⟳",  label: "Automation Engine" },
  { id: "aws",           icon: "☁",  label: "AWS Control Plane" },
  { id: "security",      icon: "⛨",  label: "Security & Billing" },
  { id: "setup",         icon: "✦",  label: "Setup Wizard Flow" },
];

/* ════════════════════════════════════════════════════════════════
   SECTION: SYSTEM OVERVIEW
════════════════════════════════════════════════════════════════ */
const SectionOverview = () => (
  <div>
    <SectionHeader
      badge="Architecture"
      title="MindMap OS — Complete System Map"
      sub="A device-native agentic runtime connected to an AWS control plane. Businesses install once; agents run everywhere."
    />

    {/* 3-layer diagram */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 6, marginTop: 32 }}>
      {/* Layer 1 */}
      <LayerBox color={C.cyan} label="LAYER 1 — USER DEVICE" icon="💻">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
          {["Installer (OS-native)","Dependency Manager","Local Agent Executor","Config & Secrets Vault","System Tray UI"].map(n => (
            <MiniBox key={n} color={C.cyan} label={n} />
          ))}
        </div>
      </LayerBox>

      <CenterArrow label="Encrypted WebSocket / mTLS" />

      {/* Layer 2 */}
      <LayerBox color={C.amber} label="LAYER 2 — MindMap OS CLOUD GATEWAY" icon="🌐">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {["Agent Marketplace API","License & Token Server","Orchestration Engine","Webhook + Event Bus"].map(n => (
            <MiniBox key={n} color={C.amber} label={n} />
          ))}
        </div>
      </LayerBox>

      <CenterArrow label="AWS SDK / IAM Role-based Access" />

      {/* Layer 3 */}
      <LayerBox color={C.purple} label="LAYER 3 — AWS CORE INFRASTRUCTURE" icon="☁">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
          {["API Gateway","Lambda Functions","DynamoDB (State)","CloudWatch (Metrics)","Cognito (Auth)"].map(n => (
            <MiniBox key={n} color={C.purple} label={n} />
          ))}
        </div>
      </LayerBox>
    </div>

    <Divider label="platform targets" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
      {[
        { os: "Windows", icon: "⊞", versions: "Win 10 / 11", arch: "x64, ARM64", install: ".exe Installer" },
        { os: "macOS", icon: "⌘", versions: "12+ Monterey", arch: "Intel, Apple Silicon", install: ".dmg + Brew" },
        { os: "Linux", icon: "🐧", versions: "Ubuntu 20+, Debian, RHEL", arch: "x64, ARM64", install: ".deb / .rpm / AppImage" },
        { os: "Mobile/Edge", icon: "📱", versions: "Android 10+, iOS 16+", arch: "ARM64", install: "App Store / APK" },
      ].map(p => (
        <div key={p.os} style={{
          background: C.card, border: `1px solid ${C.border}`,
          borderRadius: 12, padding: "18px 16px",
        }}>
          <div style={{ fontSize: 24, marginBottom: 10 }}>{p.icon}</div>
          <div style={{ color: C.text, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{p.os}</div>
          <div style={{ color: C.sub, fontSize: 12, lineHeight: 2 }}>
            <div>{p.versions}</div>
            <div style={{ color: C.cyan + "aa" }}>{p.arch}</div>
            <Tag color={C.green}>{p.install}</Tag>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   SECTION: INSTALLATION FLOW
════════════════════════════════════════════════════════════════ */
const SectionInstall = () => (
  <div>
    <SectionHeader
      badge="Installation"
      title="Zero-Friction Device Installation"
      sub="One download. Auto-detects OS, installs runtime + dependencies, registers device with AWS, opens Setup Wizard."
    />

    {/* Per-platform install steps */}
    {[
      {
        os: "Windows (.exe Installer)", color: C.cyan,
        steps: [
          "User downloads MindMapOS-Setup.exe from portal / marketplace",
          "UAC prompt → elevated install to C:\\Program Files\\MindMapOS\\",
          "Bundled: Node.js 20 LTS, Python 3.11, Ollama runtime, SQLite",
          "Registers Windows Service: mindmapos-daemon (auto-start on boot)",
          "Creates system tray app + Start Menu shortcut",
          "First-run: SetupPage.tsx wizard fires (your existing component)",
          "Device fingerprint generated → sent to AWS Cognito for license binding",
        ],
        code: [
          "$ MindMapOS-Setup.exe /silent /norestart",
          "# Or via winget:",
          "$ winget install MindMapOS.MindMapOS",
          "# Post-install service check:",
          "$ sc query mindmapos-daemon",
        ],
      },
      {
        os: "macOS (.dmg + Homebrew)", color: C.amber,
        steps: [
          "Drag MindMapOS.app to /Applications — signed & notarized by Apple",
          "LaunchAgent plist registered at ~/Library/LaunchAgents/com.mindmapos.daemon.plist",
          "Bundled runtime unpacked to ~/Library/Application Support/MindMapOS/",
          "Homebrew tap available for headless/dev installs",
          "Keychain used for API key & secret storage (no plaintext)",
          "Setup Wizard opens via WKWebView (same React component)",
        ],
        code: [
          "# Homebrew install:",
          "$ brew install --cask mindmapos",
          "# Or tap for latest:",
          "$ brew tap mindmapos/tap",
          "$ brew install mindmapos-agent-runtime",
        ],
      },
      {
        os: "Linux (.deb / .rpm / AppImage)", color: C.green,
        steps: [
          "Debian/Ubuntu: dpkg -i mindmapos.deb — installs to /opt/mindmapos/",
          "systemd service: mindmapos.service (enabled + started automatically)",
          "RHEL/Fedora: rpm -i mindmapos.rpm — same structure",
          "AppImage: portable, no install, runs anywhere with FUSE",
          "Headless server mode: no UI, pure daemon + REST API on localhost:7700",
          "Secrets stored via libsecret / Secret Service API",
        ],
        code: [
          "# Debian/Ubuntu:",
          "$ sudo dpkg -i mindmapos_1.0_amd64.deb",
          "$ sudo systemctl enable --now mindmapos",
          "# One-liner script:",
          "$ curl -fsSL https://get.mindmapos.io | bash",
        ],
      },
      {
        os: "Hardware / Embedded (Raspberry Pi, NAS, Edge)", color: C.purple,
        steps: [
          "ARM64 build: supports RPi 4/5, NVIDIA Jetson, Synology NAS",
          "Flash SD card with MindMapOS-Pi image (Debian-based)",
          "Headless: SSH in → runs mindmapos-cli setup --headless",
          "Connects to cloud gateway over WireGuard tunnel",
          "Ideal for 24/7 automation: always-on, low power, no UI needed",
          "OTA updates pushed via AWS CodeDeploy agent on device",
        ],
        code: [
          "# Flash to SD card:",
          "$ dd if=mindmapos-pi.img of=/dev/sdX bs=4M",
          "# First boot headless setup:",
          "$ ssh pi@mindmapos.local",
          "$ mindmapos-cli setup --headless --org-token YOUR_TOKEN",
        ],
      },
    ].map((p, i) => (
      <div key={i} style={{ marginBottom: 28 }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: 14,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: p.color + "22",
            border: `1px solid ${p.color}44`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: p.color, fontFamily: "monospace", fontWeight: 700, fontSize: 13,
          }}>{i + 1}</div>
          <span style={{ color: p.color, fontWeight: 700, fontSize: 15, fontFamily: "monospace" }}>{p.os}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{
            background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 10, padding: "16px 18px",
          }}>
            {p.steps.map((s, j) => (
              <div key={j} style={{ display: "flex", gap: 10, marginBottom: 9, alignItems: "flex-start" }}>
                <span style={{ color: p.color, fontSize: 10, marginTop: 4, flexShrink: 0 }}>▸</span>
                <span style={{ color: C.sub, fontSize: 13, lineHeight: 1.5 }}>{s}</span>
              </div>
            ))}
          </div>
          <CodeBlock lines={p.code} color={p.color} />
        </div>
      </div>
    ))}

    <Divider label="dependency auto-install matrix" />
    <div style={{
      background: C.card, border: `1px solid ${C.border}`, borderRadius: 10,
      overflow: "hidden",
    }}>
      {/* Table header */}
      <div style={{
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
        background: C.panel, padding: "10px 18px",
        borderBottom: `1px solid ${C.border}`,
      }}>
        {["Dependency", "Windows", "macOS", "Linux", "Edge/Pi"].map(h => (
          <div key={h} style={{ color: C.sub, fontSize: 11, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: 1 }}>{h}</div>
        ))}
      </div>
      {[
        ["Node.js 20 LTS",        "✓ Bundled","✓ Bundled","✓ apt/brew","✓ Bundled"],
        ["Python 3.11",           "✓ Bundled","✓ Bundled","✓ apt",     "✓ Bundled"],
        ["Ollama Runtime",        "✓ Bundled","✓ Bundled","✓ Script",  "⚠ Lite-only"],
        ["SQLite (local DB)",     "✓",        "✓",        "✓",         "✓"],
        ["WireGuard (VPN tunnel)","✓",        "✓",        "✓",         "✓"],
        ["Docker (optional)",     "Optional", "Optional", "Optional",  "Optional"],
        ["AWS CLI v2",            "✓",        "✓",        "✓",         "✓"],
      ].map((row, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          padding: "10px 18px",
          borderBottom: i < 6 ? `1px solid ${C.border}` : "none",
          background: i % 2 === 0 ? "transparent" : "#060a10",
        }}>
          <div style={{ color: C.text, fontSize: 13, fontFamily: "monospace" }}>{row[0]}</div>
          {row.slice(1).map((v, j) => (
            <div key={j} style={{
              color: v === "✓ Bundled" ? C.green : v === "✓" ? C.cyan : v === "Optional" ? C.sub : C.amber,
              fontSize: 12, fontFamily: "monospace",
            }}>{v}</div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   SECTION: AGENT RUNTIME
════════════════════════════════════════════════════════════════ */
const SectionRuntime = () => (
  <div>
    <SectionHeader
      badge="Runtime"
      title="On-Device Agent Execution Runtime"
      sub="Each agent is an isolated process with its own LLM context, tool permissions, and lifecycle managed by the MindMap OS daemon."
    />

    {/* Runtime architecture */}
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 28 }}>
      <div>
        <SubHeading color={C.cyan}>Runtime Process Tree</SubHeading>
        <div style={{
          background: "#020406", border: `1px solid ${C.border}`,
          borderRadius: 10, padding: "18px 20px",
          fontFamily: "monospace", fontSize: 12, lineHeight: 2,
        }}>
          {[
            { indent: 0, color: C.cyan,   text: "mindmapos-daemon  (PID 1234)" },
            { indent: 1, color: C.green,  text: "├── agent-scheduler" },
            { indent: 2, color: C.text,   text: "│   ├── email-bot [RUNNING]" },
            { indent: 2, color: C.text,   text: "│   ├── invoice-ai [IDLE]" },
            { indent: 2, color: C.amber,  text: "│   └── hr-agent [QUEUED]" },
            { indent: 1, color: C.green,  text: "├── llm-router" },
            { indent: 2, color: C.text,   text: "│   ├── ollama:llama3-8b" },
            { indent: 2, color: C.sub,    text: "│   └── cloud-fallback (OpenAI)" },
            { indent: 1, color: C.green,  text: "├── tool-sandbox" },
            { indent: 2, color: C.text,   text: "│   ├── file-system (read-only)" },
            { indent: 2, color: C.text,   text: "│   ├── browser-automation" },
            { indent: 2, color: C.text,   text: "│   └── api-caller" },
            { indent: 1, color: C.green,  text: "├── local-db (SQLite)" },
            { indent: 1, color: C.purple, text: "└── aws-sync-worker" },
          ].map((l, i) => (
            <div key={i} style={{ color: l.color, paddingLeft: l.indent * 16 }}>{l.text}</div>
          ))}
        </div>
      </div>

      <div>
        <SubHeading color={C.amber}>Agent Lifecycle States</SubHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { state: "INSTALLED",  color: C.sub,    desc: "Agent package downloaded from marketplace, verified by SHA-256 checksum" },
            { state: "CONFIGURED", color: C.purple, desc: "User completed agent config form — credentials, triggers, output targets set" },
            { state: "IDLE",       color: C.cyan,   desc: "Loaded in memory, watching triggers (cron, webhook, file-watch, UI event)" },
            { state: "RUNNING",    color: C.green,  desc: "LLM context active, tools executing, real-time log streaming to dashboard" },
            { state: "QUEUED",     color: C.amber,  desc: "Trigger fired but max-concurrency reached — waiting for slot" },
            { state: "ERROR",      color: C.red,    desc: "Caught exception — retry policy applies (3x exponential backoff)" },
            { state: "PAUSED",     color: C.sub,    desc: "User or policy manually paused — state preserved, no resource usage" },
          ].map(s => (
            <div key={s.state} style={{
              display: "flex", alignItems: "flex-start", gap: 12,
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: "10px 14px",
            }}>
              <Tag color={s.color}>{s.state}</Tag>
              <span style={{ color: C.sub, fontSize: 12, lineHeight: 1.5, paddingTop: 1 }}>{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Divider label="LLM routing logic" />
    <div style={{
      background: C.card, border: `1px solid ${C.border}`,
      borderRadius: 12, padding: "20px 24px",
    }}>
      <SubHeading color={C.purple}>LLM Router — Decision Flow</SubHeading>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        {[
          { label: "Agent triggers", color: C.text },
          { arrow: true },
          { label: "Check: local model available?", color: C.cyan },
          { arrow: true },
          { label: "YES → Ollama local (free)", color: C.green },
          { arrow: true },
          { label: "NO / needs GPT-4 quality?", color: C.amber },
          { arrow: true },
          { label: "Cloud API (key from vault)", color: C.purple },
          { arrow: true },
          { label: "Token logged to AWS meter", color: C.red },
        ].map((item, i) =>
          item.arrow
            ? <span key={i} style={{ color: C.sub, fontSize: 18 }}>→</span>
            : <Pill key={i} color={item.color}>{item.label}</Pill>
        )}
      </div>
      <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {[
          { title: "Local Models", items: ["Llama 3 8B / 70B", "Mistral 7B", "Qwen 2.5 Coder", "Phi-3 Mini", "Custom GGUF imports"] },
          { title: "Cloud Providers", items: ["OpenAI GPT-4o", "Anthropic Claude", "Google Gemini", "Groq (fast inference)", "Azure OpenAI"] },
          { title: "Router Rules", items: ["Cost threshold config", "Privacy mode (local-only)", "Latency SLA targets", "Model capability match", "Fallback chain order"] },
        ].map(col => (
          <div key={col.title} style={{
            background: "#060a10", borderRadius: 8, padding: "12px 14px",
          }}>
            <div style={{ color: C.cyan, fontSize: 11, fontFamily: "monospace", marginBottom: 8, letterSpacing: 1 }}>{col.title.toUpperCase()}</div>
            {col.items.map(it => (
              <div key={it} style={{ color: C.sub, fontSize: 12, lineHeight: 1.8 }}>· {it}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   SECTION: MARKETPLACE
════════════════════════════════════════════════════════════════ */
const SectionMarketplace = () => (
  <div>
    <SectionHeader
      badge="Marketplace"
      title="Agent Marketplace — Technical Architecture"
      sub="A signed package registry + OCI-compatible distribution system. Agents are versioned, sandboxed bundles with manifest, LLM config, tools, and UI."
    />

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 28 }}>
      <div>
        <SubHeading color={C.green}>Agent Package Structure</SubHeading>
        <div style={{
          background: "#020406", border: `1px solid ${C.border}`,
          borderRadius: 10, padding: "16px 20px",
          fontFamily: "monospace", fontSize: 12, lineHeight: 1.9,
        }}>
          {[
            { c: C.amber,  t: "email-bot-v2.1.3.mmos" },
            { c: C.cyan,   t: "├── manifest.json" },
            { c: C.sub,    t: "│   ├── id, version, publisher" },
            { c: C.sub,    t: "│   ├── permissions[]  ← sandboxed" },
            { c: C.sub,    t: "│   ├── llm_requirements" },
            { c: C.sub,    t: "│   └── pricing_model" },
            { c: C.cyan,   t: "├── agent.py  ← core logic" },
            { c: C.cyan,   t: "├── tools/" },
            { c: C.sub,    t: "│   ├── gmail.tool.json" },
            { c: C.sub,    t: "│   └── calendar.tool.json" },
            { c: C.cyan,   t: "├── config-ui.tsx  ← setup form" },
            { c: C.cyan,   t: "├── icon.svg" },
            { c: C.green,  t: "└── signature.sig  ← ed25519" },
          ].map((l, i) => (
            <div key={i} style={{ color: l.c }}>{l.t}</div>
          ))}
        </div>
      </div>

      <div>
        <SubHeading color={C.purple}>Distribution Pipeline</SubHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            { n: "01", label: "Developer publishes",    detail: "CLI: mindmapos publish → zips, signs with ed25519, uploads to S3", color: C.cyan },
            { n: "02", label: "Automated review",       detail: "Lambda scans: no network calls outside declared permissions, no eval()", color: C.amber },
            { n: "03", label: "Marketplace listing",    detail: "DynamoDB record: metadata, pricing, ratings, version history", color: C.purple },
            { n: "04", label: "User purchases",         detail: "Stripe checkout → license key stored in AWS Secrets Manager per org", color: C.green },
            { n: "05", label: "Device pull & verify",   detail: "Daemon downloads .mmos, verifies signature, unpacks to agents/ dir", color: C.cyan },
            { n: "06", label: "Runtime loads agent",    detail: "Scheduler reads manifest, registers triggers, shows in system tray", color: C.green },
          ].map(s => (
            <div key={s.n} style={{
              display: "flex", gap: 12, alignItems: "flex-start",
              background: C.card, border: `1px solid ${C.border}`,
              borderRadius: 8, padding: "10px 14px",
            }}>
              <span style={{ color: s.color, fontFamily: "monospace", fontSize: 11, fontWeight: 700, minWidth: 22 }}>{s.n}</span>
              <div>
                <div style={{ color: C.text, fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{s.label}</div>
                <div style={{ color: C.sub, fontSize: 12 }}>{s.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <Divider label="prebuilt agent catalog" />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      {[
        { name: "EmailBot Pro",     cat: "Communication",  tools: ["Gmail","Outlook","SMTP"],        trigger: "Cron / new email",    local: true },
        { name: "InvoiceAI",        cat: "Finance",        tools: ["PDF gen","QuickBooks","Stripe"], trigger: "File watch / webhook", local: true },
        { name: "HR Automate",      cat: "Operations",     tools: ["Slack","Notion","Google Meet"],  trigger: "Calendar event",      local: false },
        { name: "SupportDesk AI",   cat: "CX",             tools: ["Zendesk","Intercom","Twilio"],   trigger: "Ticket created",      local: false },
        { name: "DataSync Agent",   cat: "Analytics",      tools: ["SQL","BigQuery","Sheets"],       trigger: "Schedule / delta",    local: true },
        { name: "ContractReader",   cat: "Legal",          tools: ["PDF parse","DocuSign"],          trigger: "File drop",           local: true },
        { name: "InventoryWatch",   cat: "Supply Chain",   tools: ["REST API","Sheets","Slack"],     trigger: "Threshold alert",     local: true },
        { name: "MeetingScribe",    cat: "Productivity",   tools: ["Whisper","Notion","Calendar"],   trigger: "Meeting end",         local: true },
        { name: "CodeReviewer",     cat: "Engineering",    tools: ["GitHub","GitLab","Jira"],        trigger: "PR opened",           local: false },
      ].map(a => (
        <div key={a.name} style={{
          background: C.card, border: `1px solid ${C.border}`,
          borderRadius: 10, padding: "14px 16px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            <span style={{ color: C.text, fontWeight: 700, fontSize: 13 }}>{a.name}</span>
            <Tag color={a.local ? C.green : C.amber}>{a.local ? "local-ok" : "cloud"}</Tag>
          </div>
          <div style={{ color: C.sub, fontSize: 11, marginBottom: 8 }}>{a.cat}</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 8 }}>
            {a.tools.map(t => <Pill key={t} color={C.cyan}>{t}</Pill>)}
          </div>
          <div style={{ color: C.sub, fontSize: 11, fontFamily: "monospace" }}>trigger: {a.trigger}</div>
        </div>
      ))}
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   SECTION: AUTOMATION ENGINE
════════════════════════════════════════════════════════════════ */
const SectionAutomation = () => (
  <div>
    <SectionHeader
      badge="Automation"
      title="Automation Engine — How Agents Actually Work"
      sub="Trigger → Plan → Tool-calls → Output. Each agent runs a ReAct loop locally, calling declared tools, writing results back to user systems."
    />

    {/* ReAct loop */}
    <div style={{
      background: C.card, border: `1px solid ${C.cyan}33`,
      borderRadius: 14, padding: "24px 28px", marginTop: 28,
    }}>
      <SubHeading color={C.cyan}>ReAct Agent Loop (per execution)</SubHeading>
      <div style={{ display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap", marginTop: 12 }}>
        {[
          { label: "TRIGGER", color: C.amber, detail: "cron / webhook / file / event" },
          null,
          { label: "THINK", color: C.cyan, detail: "LLM reasons over task + context" },
          null,
          { label: "ACT", color: C.green, detail: "Call tool (file, API, browser)" },
          null,
          { label: "OBSERVE", color: C.purple, detail: "Ingest tool result" },
          null,
          { label: "LOOP / DONE", color: C.text, detail: "Repeat or emit final output" },
        ].map((item, i) =>
          item === null
            ? <div key={i} style={{ color: C.sub, fontSize: 20, padding: "0 8px" }}>→</div>
            : (
              <div key={i} style={{
                background: item.color + "12",
                border: `1px solid ${item.color}33`,
                borderRadius: 10, padding: "12px 16px", textAlign: "center", minWidth: 110,
              }}>
                <div style={{ color: item.color, fontFamily: "monospace", fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: C.sub, fontSize: 10 }}>{item.detail}</div>
              </div>
            )
        )}
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
      <div>
        <SubHeading color={C.green}>Tool Permission System</SubHeading>
        <div style={{
          background: C.card, border: `1px solid ${C.border}`,
          borderRadius: 10, padding: "16px 18px",
        }}>
          <div style={{ color: C.sub, fontSize: 12, marginBottom: 12 }}>Each agent declares permissions in manifest.json. User approves at install. OS enforces at runtime.</div>
          {[
            { perm: "filesystem:read",     scope: "/home/user/Documents only",   color: C.cyan },
            { perm: "filesystem:write",    scope: "Declared output dirs only",   color: C.amber },
            { perm: "network:http",        scope: "Allowlisted domains only",    color: C.green },
            { perm: "keychain:read",       scope: "Named secrets only",          color: C.purple },
            { perm: "process:spawn",       scope: "Declared binaries only",      color: C.amber },
            { perm: "browser:automate",    scope: "Sandboxed Chromium instance", color: C.red },
            { perm: "system:notifications","scope": "OS toast only",             color: C.sub },
          ].map(p => (
            <div key={p.perm} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "7px 0", borderBottom: `1px solid ${C.border}`,
            }}>
              <span style={{ color: p.color, fontSize: 12, fontFamily: "monospace" }}>{p.perm}</span>
              <span style={{ color: C.sub, fontSize: 11 }}>{p.scope}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SubHeading color={C.amber}>Trigger Types & Config</SubHeading>
        {[
          { type: "Cron Schedule", icon: "🕐", detail: "Standard cron expression: 0 9 * * 1-5 (weekdays 9am)", example: "\"Every Mon 8am: send weekly summary email\"" },
          { type: "File Watcher",  icon: "📁", detail: "inotify (Linux) / FSEvents (Mac) / ReadDirectoryChanges (Win)", example: "\"New PDF in ~/Downloads → extract & file\"" },
          { type: "Webhook",       icon: "🔗", detail: "Daemon exposes localhost:7700/webhook/{agent-id} endpoint", example: "\"Zapier/n8n → trigger on CRM event\"" },
          { type: "UI Event",      icon: "🖱", detail: "System tray → right-click → Run Now, or hotkey", example: "\"Ctrl+Shift+M → summarize clipboard\"" },
          { type: "Agent Chain",   icon: "⛓", detail: "Agent A output → triggers Agent B automatically", example: "\"Invoice parsed → HR agent notified\"" },
        ].map(t => (
          <div key={t.type} style={{
            background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 8, padding: "10px 14px", marginBottom: 8,
          }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontSize: 14 }}>{t.icon}</span>
              <span style={{ color: C.text, fontWeight: 700, fontSize: 13 }}>{t.type}</span>
            </div>
            <div style={{ color: C.sub, fontSize: 12, marginBottom: 4 }}>{t.detail}</div>
            <div style={{ color: C.cyan + "88", fontSize: 11, fontFamily: "monospace", fontStyle: "italic" }}>{t.example}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   SECTION: AWS CONTROL PLANE
════════════════════════════════════════════════════════════════ */
const SectionAWS = () => (
  <div>
    <SectionHeader
      badge="AWS Core"
      title="AWS Control Plane — Full Architecture"
      sub="Every device talks to a multi-region AWS backend for auth, token metering, API management, audit logs, and subscription billing."
    />

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 28 }}>
      {[
        {
          service: "Amazon Cognito", icon: "🔐", color: C.cyan,
          role: "Device Auth & License Binding",
          details: [
            "Device registers at first setup → gets JWT",
            "JWT refreshes every 1h — bound to device fingerprint",
            "User pool per org; federated SSO via SAML/OIDC",
            "License tiers stored as Cognito user attributes",
          ],
        },
        {
          service: "API Gateway + Lambda", icon: "⚡", color: C.amber,
          role: "Request Routing & Business Logic",
          details: [
            "REST + WebSocket APIs for device ↔ cloud",
            "Lambda handles: token logs, marketplace ops, webhooks",
            "WAF rules: rate limit per device-id, IP allowlist",
            "Dead letter queue → SQS for failed operations",
          ],
        },
        {
          service: "DynamoDB", icon: "🗄", color: C.green,
          role: "State Storage",
          details: [
            "Table: devices — fingerprint, org, license, last-seen",
            "Table: token_usage — device, date, agent, tokens_used",
            "Table: marketplace — packages, versions, ratings",
            "Table: subscriptions — tier, seats, overage rules",
          ],
        },
        {
          service: "CloudWatch + X-Ray", icon: "📊", color: C.purple,
          role: "Observability",
          details: [
            "Real-time token usage dashboards per org",
            "Anomaly detection: unusual IP, spike in API calls",
            "Distributed tracing across Lambda + device calls",
            "Alarms → SNS → Slack/email on threshold breach",
          ],
        },
        {
          service: "Secrets Manager", icon: "🗝", color: C.red,
          role: "API Key & Secret Vaulting",
          details: [
            "Org's API keys (OpenAI, etc.) stored encrypted at rest",
            "Auto-rotation policies for supported providers",
            "Devices fetch secrets via IAM role — no key on disk",
            "Audit trail: who fetched which secret, when",
          ],
        },
        {
          service: "CodeDeploy + S3", icon: "🚀", color: C.cyan,
          role: "OTA Updates",
          details: [
            "Agent packages stored in S3 with versioning",
            "CodeDeploy pushes runtime updates to devices",
            "Staged rollout: 5% → 25% → 100% canary",
            "Rollback on error-rate spike (CloudWatch alarm)",
          ],
        },
      ].map(s => (
        <div key={s.service} style={{
          background: C.card,
          border: `1px solid ${s.color}22`,
          borderRadius: 12, padding: "18px",
          borderTop: `3px solid ${s.color}`,
        }}>
          <div style={{ fontSize: 22, marginBottom: 8 }}>{s.icon}</div>
          <div style={{ color: s.color, fontFamily: "monospace", fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{s.service}</div>
          <div style={{ color: C.sub, fontSize: 11, marginBottom: 12 }}>{s.role}</div>
          {s.details.map(d => (
            <div key={d} style={{ display: "flex", gap: 6, marginBottom: 6, alignItems: "flex-start" }}>
              <span style={{ color: s.color, fontSize: 9, marginTop: 4 }}>▸</span>
              <span style={{ color: C.sub, fontSize: 11, lineHeight: 1.5 }}>{d}</span>
            </div>
          ))}
        </div>
      ))}
    </div>

    <Divider label="token metering flow" />
    <div style={{
      background: C.card, border: `1px solid ${C.border}`,
      borderRadius: 12, padding: "20px 24px",
    }}>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        {[
          { label: "Agent calls LLM", color: C.text },
          "→",
          { label: "Local counter increments", color: C.cyan },
          "→",
          { label: "Batch flush every 60s to API GW", color: C.amber },
          "→",
          { label: "Lambda writes to DynamoDB token_usage", color: C.green },
          "→",
          { label: "CloudWatch aggregate", color: C.purple },
          "→",
          { label: "Billing engine checks quota", color: C.red },
          "→",
          { label: "Overage alert or hard-stop", color: C.amber },
        ].map((item, i) =>
          typeof item === "string"
            ? <span key={i} style={{ color: C.sub, fontSize: 16 }}>{item}</span>
            : <Pill key={i} color={item.color}>{item.label}</Pill>
        )}
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   SECTION: SECURITY & BILLING
════════════════════════════════════════════════════════════════ */
const SectionSecurity = () => (
  <div>
    <SectionHeader
      badge="Security & Billing"
      title="Security Model + Subscription Engine"
      sub="End-to-end encrypted, zero-trust architecture. Subscription billing is usage-aware with hard and soft guardrails."
    />

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 28 }}>
      <div>
        <SubHeading color={C.red}>Security Layers</SubHeading>
        {[
          { layer: "Device ↔ Cloud Transport", detail: "mTLS with device cert issued at registration. WireGuard VPN for always-on devices." },
          { layer: "Secret Storage", detail: "macOS: Keychain. Linux: libsecret. Windows: DPAPI. Never plaintext on disk." },
          { layer: "Agent Sandboxing", detail: "Each agent process runs as restricted OS user. seccomp-bpf on Linux. AppContainer on Windows." },
          { layer: "Code Signing", detail: "All .mmos packages signed ed25519. Daemon refuses to load unsigned agents." },
          { layer: "IP Allowlisting", detail: "Org can restrict which IPs devices may connect from. AWS WAF enforces." },
          { layer: "Audit Trail", detail: "Every agent run, tool call, API fetch, secret access → CloudWatch Logs, 90-day retention." },
          { layer: "SOC 2 Ready", detail: "Log exports for compliance. Role-based access control. Encryption at rest (AES-256)." },
        ].map(s => (
          <div key={s.layer} style={{
            display: "grid", gridTemplateColumns: "160px 1fr",
            gap: 12, padding: "10px 0",
            borderBottom: `1px solid ${C.border}`,
            alignItems: "flex-start",
          }}>
            <span style={{ color: C.red, fontSize: 12, fontFamily: "monospace", fontWeight: 600 }}>{s.layer}</span>
            <span style={{ color: C.sub, fontSize: 12, lineHeight: 1.5 }}>{s.detail}</span>
          </div>
        ))}
      </div>

      <div>
        <SubHeading color={C.amber}>Subscription Tiers & Billing Engine</SubHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { tier: "Starter",    price: "$99/mo",    tokens: "500K",  seats: 10,  agents: 5,  color: C.sub },
            { tier: "Business",   price: "$399/mo",   tokens: "5M",    seats: 100, agents: -1, color: C.cyan },
            { tier: "Enterprise", price: "Custom",    tokens: "Unlim", seats: -1,  agents: -1, color: C.amber },
          ].map(t => (
            <div key={t.tier} style={{
              background: C.card, border: `2px solid ${t.color}33`,
              borderRadius: 10, padding: "14px 18px",
              borderLeft: `4px solid ${t.color}`,
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: t.color, fontFamily: "monospace", fontWeight: 700, fontSize: 14 }}>{t.tier}</span>
                <span style={{ color: C.text, fontWeight: 700, fontSize: 14 }}>{t.price}</span>
              </div>
              <div style={{ display: "flex", gap: 16 }}>
                <span style={{ color: C.sub, fontSize: 12 }}>Tokens: <b style={{ color: C.text }}>{t.tokens}/mo</b></span>
                <span style={{ color: C.sub, fontSize: 12 }}>Seats: <b style={{ color: C.text }}>{t.seats === -1 ? "∞" : t.seats}</b></span>
                <span style={{ color: C.sub, fontSize: 12 }}>Agents: <b style={{ color: C.text }}>{t.agents === -1 ? "∞" : t.agents}</b></span>
              </div>
            </div>
          ))}

          <div style={{
            background: C.card, border: `1px solid ${C.border}`,
            borderRadius: 10, padding: "16px 18px", marginTop: 4,
          }}>
            <div style={{ color: C.amber, fontFamily: "monospace", fontSize: 12, marginBottom: 10, letterSpacing: 1 }}>BILLING ENGINE RULES</div>
            {[
              "Soft limit at 80% → email + dashboard warning",
              "Soft limit at 95% → Slack alert to org admin",
              "Hard limit at 100% → new agent runs blocked (existing finish)",
              "Overage plan: $0.002 per 1K tokens beyond quota",
              "IP-based usage tracking → catch credential sharing",
              "Annual plan: 20% discount, tokens don't roll over",
              "Per-agent marketplace rev share: 70% developer / 30% platform",
            ].map(r => (
              <div key={r} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                <span style={{ color: C.amber, fontSize: 10, marginTop: 3 }}>▸</span>
                <span style={{ color: C.sub, fontSize: 12 }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════
   SECTION: SETUP WIZARD FLOW (maps to SetupPage.tsx)
════════════════════════════════════════════════════════════════ */
const SectionSetup = () => (
  <div>
    <SectionHeader
      badge="Setup Flow"
      title="Setup Wizard — Complete UX + Technical Flow"
      sub="Your SetupPage.tsx mapped to the full technical actions happening under the hood at each step."
    />

    <div style={{ marginTop: 28 }}>
      {[
        {
          step: "Step 0 — Welcome",
          ui: "Hero screen: name, tagline, privacy assurance, 2-minute promise",
          tech: [
            "Daemon has already started in background by OS installer",
            "SQLite DB initialized at: ~/mindmapos/db.sqlite",
            "Device fingerprint computed (CPU ID + MAC + hostname hash)",
            "AWS Cognito pre-registration call fired silently",
          ],
          color: C.cyan,
          code: ["$ mindmapos-daemon --init", "→ DB: CREATE TABLE settings, agents, token_usage", "→ fingerprint: sha256(cpuid+mac) = a3f8...", "→ POST /api/devices/preregister {fingerprint}"],
        },
        {
          step: "Step 1 — Choose AI Engine",
          ui: "On-Device (Ollama) vs Cloud (OpenAI/Anthropic/Gemini) selector + model picker or API key modal",
          tech: [
            "On-Device selected → background download starts: ollama pull llama3:8b (~4.7GB)",
            "Progress streamed to UI via local WebSocket ws://localhost:7700/setup-progress",
            "Cloud selected → API key encrypted with device key, stored in OS keychain",
            "LLM router config written to ~/mindmapos/llm-config.json",
          ],
          color: C.amber,
          code: ["# On-Device path:", "$ ollama pull llama3:8b", "→ streaming progress to WS", "# Cloud path:", "$ keychain set mindmapos.openai.key sk-xxx"],
        },
        {
          step: "Step 2 — Experience Level",
          ui: "Beginner vs Advanced toggle — affects default agent templates and UI complexity shown",
          tech: [
            "Beginner: pre-installs 3 starter agents from marketplace (email, notes, reminders)",
            "Advanced: opens full marketplace browser, no pre-installs",
            "Setting saved to SQLite: settings.experience_level",
            "AWS call: PATCH /api/orgs/{orgId}/preferences {experience: 'beginner'}",
          ],
          color: C.green,
          code: ["# Beginner auto-installs:", "$ mindmapos-cli agent install email-bot-starter", "$ mindmapos-cli agent install notes-agent", "$ mindmapos-cli agent install reminder-bot"],
        },
        {
          step: "Step 3 — System Settings",
          ui: "Auto-start on login toggle, tray icon preference, notification settings",
          tech: [
            "Auto-start ON → registers startup entry (LaunchAgent / systemd / Task Scheduler)",
            "Writes ~/mindmapos/system-config.json with all prefs",
            "Starts mindmapos-daemon as foreground → moves to background service",
            "Opens port 7700 on localhost for local API (agents + dashboard)",
          ],
          color: C.purple,
          code: ["# macOS auto-start:", "$ launchctl load ~/Library/LaunchAgents/", "   com.mindmapos.daemon.plist", "# Windows auto-start:", "$ schtasks /create /tn MindMapOS /sc onlogon"],
        },
        {
          step: "Step 4 — All Set",
          ui: "Success screen. 'Open MindMapOS' button navigates to /app",
          tech: [
            "localStorage.mindmapos_setup_complete = 'true' (your existing code)",
            "Device registered in AWS DynamoDB: devices table, status = 'active'",
            "License key generated and bound to device fingerprint",
            "Dashboard loads: agent grid, token usage widget, marketplace shortcut",
          ],
          color: C.green,
          code: ["→ AWS DynamoDB write:", "  devices/{fingerprint} = {", "    orgId, licenseKey,", "    status: 'active',", "    setupAt: ISO timestamp", "  }"],
        },
      ].map((s, i) => (
        <div key={i} style={{
          background: C.card,
          border: `1px solid ${s.color}22`,
          borderLeft: `4px solid ${s.color}`,
          borderRadius: 12, padding: "20px 24px",
          marginBottom: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <div style={{
              width: 26, height: 26, borderRadius: 6,
              background: s.color + "20",
              border: `1px solid ${s.color}40`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: s.color, fontFamily: "monospace", fontWeight: 700, fontSize: 12,
            }}>{i}</div>
            <span style={{ color: s.color, fontFamily: "monospace", fontWeight: 700, fontSize: 14 }}>{s.step}</span>
          </div>
          <div style={{ color: C.sub, fontSize: 13, marginBottom: 14, fontStyle: "italic" }}>UI: {s.ui}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <div style={{ color: C.text, fontSize: 11, fontFamily: "monospace", marginBottom: 8, letterSpacing: 1 }}>UNDER THE HOOD</div>
              {s.tech.map(t => (
                <div key={t} style={{ display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start" }}>
                  <span style={{ color: s.color, fontSize: 10, marginTop: 3 }}>▸</span>
                  <span style={{ color: C.sub, fontSize: 12, lineHeight: 1.5 }}>{t}</span>
                </div>
              ))}
            </div>
            <CodeBlock lines={s.code} color={s.color} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── SHARED COMPONENTS ──────────────────────────────────────── */
const SectionHeader = ({ badge, title, sub }) => (
  <div style={{ marginBottom: 8 }}>
    <div style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: C.cyanDim, border: `1px solid ${C.cyanMid}`,
      borderRadius: 20, padding: "3px 12px", marginBottom: 14,
    }}>
      <StatusDot />
      <span style={{ color: C.cyan, fontSize: 10, fontFamily: "monospace", letterSpacing: 2, textTransform: "uppercase" }}>{badge}</span>
    </div>
    <h2 style={{
      fontSize: 28, fontWeight: 900, margin: "0 0 8px",
      color: C.text, letterSpacing: -0.8, lineHeight: 1.2,
      fontFamily: "'Syne', 'DM Sans', sans-serif",
    }}>{title}</h2>
    <p style={{ fontSize: 14, color: C.sub, margin: 0, lineHeight: 1.6, maxWidth: 700 }}>{sub}</p>
  </div>
);

const SubHeading = ({ color = C.cyan, children }) => (
  <div style={{
    color, fontFamily: "monospace", fontSize: 11,
    letterSpacing: 2, textTransform: "uppercase",
    marginBottom: 12, fontWeight: 700,
  }}>{children}</div>
);

const LayerBox = ({ color, label, icon, children }) => (
  <div style={{
    background: C.card,
    border: `1px solid ${color}33`,
    borderRadius: 12, padding: "18px 20px",
    borderTop: `2px solid ${color}`,
  }}>
    <div style={{
      display: "flex", alignItems: "center", gap: 8, marginBottom: 14,
    }}>
      <span style={{ fontSize: 16 }}>{icon}</span>
      <span style={{ color, fontFamily: "monospace", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>{label}</span>
    </div>
    {children}
  </div>
);

const MiniBox = ({ color, label }) => (
  <div style={{
    background: color + "0d",
    border: `1px solid ${color}22`,
    borderRadius: 8, padding: "8px 10px",
    textAlign: "center",
  }}>
    <div style={{ color: color + "cc", fontSize: 11, lineHeight: 1.4 }}>{label}</div>
  </div>
);

const CenterArrow = ({ label }) => (
  <div style={{
    display: "flex", alignItems: "center", justifyContent: "center",
    gap: 12, padding: "8px 0",
  }}>
    <div style={{ flex: 1, height: 1, background: C.border }} />
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <div style={{ color: C.cyan, fontSize: 18 }}>⇅</div>
      {label && <span style={{ color: C.sub, fontSize: 10, fontFamily: "monospace", letterSpacing: 1 }}>{label}</span>}
    </div>
    <div style={{ flex: 1, height: 1, background: C.border }} />
  </div>
);

/* ─── SECTION MAP ────────────────────────────────────────────── */
const SECTION_COMPONENTS = {
  overview:    SectionOverview,
  install:     SectionInstall,
  runtime:     SectionRuntime,
  marketplace: SectionMarketplace,
  automation:  SectionAutomation,
  aws:         SectionAWS,
  security:    SectionSecurity,
  setup:       SectionSetup,
};

/* ════════════════════════════════════════════════════════════════
   ROOT APP
════════════════════════════════════════════════════════════════ */
export default function MindMapOSTechnical() {
  const [active, setActive] = useState("overview");
  const [animKey, setAnimKey] = useState(0);
  const contentRef = useRef(null);

  const go = (id) => {
    setActive(id);
    setAnimKey(k => k + 1);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const ActiveComponent = SECTION_COMPONENTS[active];
  const activeIdx = SECTIONS.findIndex(s => s.id === active);

  return (
    <div style={{
      background: C.bg, minHeight: "100vh", color: C.text,
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;900&family=DM+Sans:wght@400;500;700;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: ${C.border2}; border-radius: 2px; }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }
        @keyframes fadeSlide { from{opacity:0;transform:translateY(14px);} to{opacity:1;transform:translateY(0);} }
        .section-fade { animation: fadeSlide .35s cubic-bezier(.22,1,.36,1) both; }
        .nav-btn:hover { background: ${C.border} !important; }
        .nav-btn.active { background: ${C.cyanDim} !important; border-color: ${C.cyanMid} !important; }
      `}</style>

      {/* ── TOP BAR ── */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 24px", height: 52,
        background: C.panel,
        borderBottom: `1px solid ${C.border}`,
        position: "sticky", top: 0, zIndex: 200,
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 7,
            background: `linear-gradient(135deg, ${C.cyan}, #0066ff)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14,
          }}>🧠</div>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: 15, letterSpacing: -0.3 }}>MindMap OS</span>
          <Tag color={C.sub}>Technical Architecture</Tag>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", gap: 4 }}>
            <StatusDot color={C.green} />
            <span style={{ fontSize: 11, color: C.sub, fontFamily: "monospace" }}>v0.9-beta</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            <StatusDot color={C.amber} />
            <span style={{ fontSize: 11, color: C.sub, fontFamily: "monospace" }}>AWS: connected</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden", minHeight: 0 }}>
        {/* ── SIDEBAR ── */}
        <div style={{
          width: 200, background: C.panel,
          borderRight: `1px solid ${C.border}`,
          padding: "16px 10px",
          display: "flex", flexDirection: "column", gap: 4,
          flexShrink: 0, overflowY: "auto",
        }}>
          <div style={{ color: C.sub, fontSize: 9, fontFamily: "monospace", letterSpacing: 2, padding: "4px 8px 8px", textTransform: "uppercase" }}>Sections</div>
          {SECTIONS.map((s) => (
            <button key={s.id} className={`nav-btn${active === s.id ? " active" : ""}`}
              onClick={() => go(s.id)}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 10px", borderRadius: 8, cursor: "pointer",
                border: `1px solid ${active === s.id ? C.cyanMid : "transparent"}`,
                background: active === s.id ? C.cyanDim : "transparent",
                color: active === s.id ? C.cyan : C.sub,
                fontSize: 13, textAlign: "left", transition: "all .15s",
                width: "100%",
              }}>
              <span style={{ fontSize: 12, width: 16, textAlign: "center", flexShrink: 0 }}>{s.icon}</span>
              <span style={{ lineHeight: 1.3 }}>{s.label}</span>
            </button>
          ))}

          <div style={{ marginTop: "auto", padding: "12px 8px 0", borderTop: `1px solid ${C.border}` }}>
            <div style={{ color: C.sub, fontSize: 10, fontFamily: "monospace", lineHeight: 1.8 }}>
              <div>github.com/anuj6316</div>
              <div style={{ color: C.cyan + "66" }}>/mindmapOS</div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div ref={contentRef} style={{
          flex: 1, overflowY: "auto",
          padding: "36px 48px 64px",
          minWidth: 0,
        }}>
          {/* Breadcrumb */}
          <div style={{
            display: "flex", alignItems: "center", gap: 8,
            marginBottom: 28,
          }}>
            <span style={{ color: C.sub, fontSize: 12, fontFamily: "monospace" }}>MindMapOS</span>
            <span style={{ color: C.sub2 }}>›</span>
            <span style={{ color: C.cyan, fontSize: 12, fontFamily: "monospace" }}>
              {SECTIONS.find(s => s.id === active)?.label}
            </span>
            <span style={{ marginLeft: "auto", color: C.sub, fontSize: 11, fontFamily: "monospace" }}>
              {activeIdx + 1} / {SECTIONS.length}
            </span>
          </div>

          <div key={animKey} className="section-fade">
            <ActiveComponent />
          </div>

          {/* Bottom nav */}
          <div style={{
            display: "flex", justifyContent: "space-between", marginTop: 52,
            paddingTop: 24, borderTop: `1px solid ${C.border}`,
          }}>
            {activeIdx > 0 ? (
              <button onClick={() => go(SECTIONS[activeIdx - 1].id)} style={{
                background: "transparent", border: `1px solid ${C.border}`,
                color: C.sub, borderRadius: 8, padding: "8px 18px",
                cursor: "pointer", fontFamily: "monospace", fontSize: 12,
                display: "flex", alignItems: "center", gap: 8,
              }}>← {SECTIONS[activeIdx - 1].label}</button>
            ) : <div />}
            {activeIdx < SECTIONS.length - 1 && (
              <button onClick={() => go(SECTIONS[activeIdx + 1].id)} style={{
                background: C.cyanDim, border: `1px solid ${C.cyanMid}`,
                color: C.cyan, borderRadius: 8, padding: "8px 18px",
                cursor: "pointer", fontFamily: "monospace", fontSize: 12,
                display: "flex", alignItems: "center", gap: 8, fontWeight: 700,
              }}>{SECTIONS[activeIdx + 1].label} →</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
