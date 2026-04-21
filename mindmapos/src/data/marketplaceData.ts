export type Platform = 'Linux' | 'Windows' | 'macOS' | 'Android' | 'iOS';

export type Category = 'Models' | 'Agents' | 'Orchestrations' | 'Bundles';

export interface Product {
  id: string;
  category: Category;
  badge?: string;
  icon: string;
  name: string;
  tagline: string;
  creator: string;
  version: string;
  price: string;
  installs: number;
  rating: number;
  reviewsCount: number;
  size?: string;
  platforms: Platform[];
  tags?: string[];
  description: string;
  bestFor?: string[];
  whatItCanDo?: string[];
  hardwareRequirements?: string[];
  benchmark?: string[];
  schedule?: string;
  requires?: string;
  configuration?: string[];
  included?: string[];
}

export const featuredBanners = [
  {
    id: 'feat-1',
    type: 'FEATURED AGENT',
    icon: '🤖',
    name: 'DevFlow Pro',
    description: 'The complete developer environment agent.\n\nSet up any dev stack — React, Python, Rust, Go, Java — in under 3 minutes. Manages versions, dependencies, environment variables, and git config automatically.',
    rating: 4.9,
    installs: '12,400',
    creator: 'MindMapOS',
    price: 'FREE',
    gradient: 'from-sky-500 to-indigo-500',
  },
  {
    id: 'feat-2',
    type: 'FEATURED MODEL',
    icon: '🧠',
    name: 'Aria 9B — MindMapOS Edition',
    description: 'Our best local model. Built for device management.\n\nFine-tuned specifically for system tasks, file operations, and multi-step orchestrations. Faster and more accurate than a generic model of the same size.',
    rating: 4.8,
    installs: '34,100',
    creator: 'MindMapOS',
    price: 'FREE',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'feat-3',
    type: 'FEATURED BUNDLE',
    icon: '📦',
    name: 'Power User Starter Pack',
    description: 'Everything you need to unlock your machine from day one.\n\nIncludes: Aria 9B Model · DevFlow Agent · CleanSweep Agent · Night Shift Orchestration · Weekly Backup Orchestration',
    rating: 4.9,
    installs: '8,700',
    creator: 'MindMapOS',
    price: 'FREE',
    gradient: 'from-amber-500 to-orange-500',
  }
];

export const trendingProducts = [
  { id: 't1', icon: '🌙', name: 'NightWatch Security Agent', category: 'Agent', creator: 'Community', rating: 4.7, installs: '5.8k', price: 'FREE' },
  { id: 't2', icon: '🧠', name: 'Aria 9B MindMapOS Edition', category: 'Model', creator: 'MindMapOS', rating: 4.8, installs: '34.1k', price: 'FREE' },
  { id: 't3', icon: '⚙️', name: 'Weekly Backup Orchestration', category: 'Orchestration', creator: 'MindMapOS', rating: 4.9, installs: '22.1k', price: 'FREE' },
  { id: 't4', icon: '🤖', name: 'DevFlow Pro Agent', category: 'Agent', creator: 'MindMapOS', rating: 4.9, installs: '12.4k', price: 'FREE' },
  { id: 't5', icon: '✏️', name: 'BulkRename Pro Orchestration', category: 'Orchestration', creator: 'Community', rating: 4.6, installs: '7.2k', price: 'FREE' },
  { id: 't6', icon: '🎙️', name: 'Voice Commander Pack', category: 'Bundle', creator: 'Community', rating: 4.5, installs: '3.4k', price: '$2.99' },
  { id: 't7', icon: '🛡️', name: 'SysGuard Monitor Agent', category: 'Agent', creator: 'MindMapOS', rating: 4.8, installs: '9.2k', price: 'FREE' },
  { id: 't8', icon: '🧹', name: 'Privacy Cleaner Orchestration', category: 'Orchestration', creator: 'Community', rating: 4.8, installs: '11.3k', price: 'FREE' }
];

export const marketplaceProducts: Product[] = [
  // --- MODELS ---
  {
    id: 'model-001',
    category: 'Models',
    badge: '⭐ OFFICIAL · MOST POPULAR',
    icon: '🧠',
    name: 'Aria 9B — MindMapOS Edition',
    tagline: 'Our best local model. Built for your devices.',
    creator: 'MindMapOS',
    version: 'v2.1.0',
    price: 'FREE',
    installs: 34100,
    rating: 4.8,
    reviewsCount: 1240,
    size: '5.2 GB',
    platforms: ['Linux', 'Windows', 'macOS', 'Android'],
    description: 'Aria 9B is MindMapOS\'s flagship local model — a 9-billion-parameter model fine-tuned specifically for device management, system operations, and the Guardian Layer\'s safety classification system.\n\nCompared to a standard Llama 3.1 8B model of similar size, Aria 9B delivers 40% fewer misunderstood commands, 25% faster response times on system tasks, and significantly better plan quality on multi-step orchestrations.',
    bestFor: [
      'Daily driver — everyday device management',
      'File operations and automation',
      'Multi-step orchestration execution',
      'Developer environment setup'
    ],
    hardwareRequirements: [
      'RAM: 8 GB minimum · 16 GB recommended for best performance',
      'DISK: 5.2 GB',
      'GPU: Optional — runs on CPU, GPU accelerates response time'
    ],
    benchmark: [
      'Task accuracy on MindMapOS standard suite: 94.2%',
      'Average response time (8GB RAM, no GPU): 2.1 seconds',
      'Guardian Layer classification accuracy: 98.7%'
    ]
  },
  {
    id: 'model-002',
    category: 'Models',
    badge: '⭐ OFFICIAL · BEST FOR LOW-RAM',
    icon: '🧠',
    name: 'Aria 4B Lite',
    tagline: 'Full MindMapOS capability. Half the hardware needs.',
    creator: 'MindMapOS',
    version: 'v1.4.0',
    price: 'FREE',
    installs: 21800,
    rating: 4.6,
    reviewsCount: 890,
    size: '2.8 GB',
    platforms: ['Linux', 'Windows', 'macOS', 'Android', 'iOS'],
    description: 'Aria 4B Lite brings the same MindMapOS-specific fine-tuning as Aria 9B in a smaller, faster package. Designed for machines with 4–8 GB of RAM and for mobile devices where model size matters.\n\nAccuracy drops slightly on complex multi-step tasks compared to 9B, but for everyday device management — the vast majority of use cases — performance is nearly identical at half the resource cost.',
    bestFor: [
      'Machines with 4–6 GB RAM',
      'Android and iOS (mobile-optimised quantisation)',
      'Fast, simple everyday tasks',
      'Laptops and older hardware'
    ],
    hardwareRequirements: [
      'RAM: 4 GB minimum',
      'DISK: 2.8 GB',
      'GPU: Not required'
    ]
  },
  {
    id: 'model-003',
    category: 'Models',
    badge: '⭐ OFFICIAL · MOST CAPABLE',
    icon: '🧠',
    name: 'Aria 70B — Power Edition',
    tagline: 'For workstations that mean business.',
    creator: 'MindMapOS',
    version: 'v1.0.0',
    price: 'FREE',
    installs: 4200,
    rating: 4.9,
    reviewsCount: 310,
    size: '42 GB',
    platforms: ['Linux', 'Windows', 'macOS'],
    description: 'The 70B parameter version of Aria for high-end workstations and servers. Near-GPT-4 quality on device management tasks, with exceptional performance on complex multi-agent orchestrations, long-context system analysis, and nuanced troubleshooting.\n\nRequires a machine with serious RAM or a GPU with 24+ VRAM. Not for everyday laptops.',
    bestFor: [
      'Sysadmins managing complex infrastructure',
      'Multi-agent orchestration with many parallel steps',
      'Long-running analysis and diagnosis tasks',
      'Workstations with 32 GB+ RAM or a dedicated GPU'
    ],
    hardwareRequirements: [
      'RAM: 48 GB minimum (CPU inference) · OR GPU: 24 GB VRAM',
      'DISK: 42 GB',
      'GPU: NVIDIA / AMD (optional but strongly recommended)'
    ]
  },
  {
    id: 'model-004',
    category: 'Models',
    badge: 'SPECIALIST',
    icon: '💻',
    name: 'CodeMind 7B',
    tagline: 'A developer model that actually understands your codebase.',
    creator: 'MindMapOS Labs',
    version: 'v1.2.0',
    price: 'FREE',
    installs: 9600,
    rating: 4.7,
    reviewsCount: 540,
    size: '4.4 GB',
    platforms: ['Linux', 'Windows', 'macOS'],
    description: 'CodeMind 7B is a developer-focused model optimised for code comprehension, project scaffolding, dependency management, and debugging through conversation.\n\nUse it alongside Aria (as a secondary specialist model) or as your primary model if you\'re a developer. MindMapOS automatically routes coding-related tasks to CodeMind when both models are installed.',
    bestFor: [
      'Setting up dev environments',
      'Understanding what a codebase is doing',
      'Debugging by description',
      'Managing packages, environments, and configs'
    ]
  },
  {
    id: 'model-005',
    category: 'Models',
    badge: 'SPECIALIST · SECURITY',
    icon: '🔒',
    name: 'PrivacyGuard 8B',
    tagline: 'A model trained to think about security first.',
    creator: 'MindMapOS Labs',
    version: 'v1.0.0',
    price: 'FREE',
    installs: 6100,
    rating: 4.5,
    reviewsCount: 280,
    size: '4.9 GB',
    platforms: ['Linux', 'Windows', 'macOS'],
    description: 'PrivacyGuard is fine-tuned with a security-first bias. Every action it plans is evaluated for privacy implications before being proposed. It is more conservative than Aria by design — it will flag actions that Aria might approve silently.\n\nIdeal for users who want maximum caution, or for machines that handle sensitive personal or professional data.',
    bestFor: [
      'Privacy-conscious users',
      'Machines with sensitive data',
      'Healthcare, legal, or finance use cases',
      'Anyone who wants the most conservative Guardian interpretation'
    ]
  },

  // --- AGENTS ---
  {
    id: 'agent-001',
    category: 'Agents',
    badge: '⭐ OFFICIAL · MOST POPULAR',
    icon: '🤖',
    name: 'DevFlow Pro',
    tagline: 'Set up any dev environment in under 3 minutes.',
    creator: 'MindMapOS',
    version: 'v2.3.1',
    price: 'FREE',
    installs: 12400,
    rating: 4.9,
    reviewsCount: 780,
    platforms: ['Linux', 'Windows', 'macOS'],
    tags: ['Development', 'Programming', 'DevOps', 'Environments'],
    description: 'DevFlow Pro is the definitive developer environment agent for MindMapOS. It knows every major language ecosystem, framework, and toolchain — and can scaffold, configure, and validate a complete development environment through a single conversation.\n\nIt doesn\'t just install tools. It configures them for your project, sets up version managers, handles environment variables, initialises git, and verifies everything works end-to-end before handing back to you.',
    whatItCanDo: [
      '"Set up a Python 3.12 data science environment with Jupyter"',
      '"Scaffold a new React + TypeScript project with Vite and ESLint"',
      '"Get this Rust project building — it\'s failing on cargo build"',
      '"Switch this project to Node 20 without breaking anything"',
      '"Set up Docker and create a container for this app"',
      '"Configure git with my credentials and set up SSH for GitHub"'
    ],
    benchmark: [
      'SUPPORTED ECOSYSTEMS: Python · Node.js / JavaScript / TypeScript · Rust · Go · Java / Kotlin · C / C++ · Ruby · PHP · .NET / C# · Docker · Kubernetes · Git · SSH · Databases (Postgres, MySQL, SQLite)'
    ]
  },
  {
    id: 'agent-002',
    category: 'Agents',
    badge: '⭐ OFFICIAL',
    icon: '🧹',
    name: 'CleanSweep',
    tagline: 'A storage expert that recovers space safely.',
    creator: 'MindMapOS',
    version: 'v1.8.0',
    price: 'FREE',
    installs: 18900,
    rating: 4.8,
    reviewsCount: 1100,
    platforms: ['Linux', 'Windows', 'macOS', 'Android', 'iOS'],
    tags: ['Storage', 'Cleanup', 'Maintenance', 'Performance'],
    description: 'CleanSweep is a storage specialist that finds, categorises, and safely removes what\'s wasting space on your device. It knows the difference between system files that look deletable but aren\'t, and genuinely safe candidates for removal.\n\nEvery suggested deletion is explained in plain language. CleanSweep never deletes anything without showing you exactly what it is and why it\'s safe to remove.',
    whatItCanDo: [
      '"Free up as much space as safely possible"',
      '"Find all duplicate files and remove them"',
      '"Clean up old log files and temp directories"',
      '"Delete all app caches that are safe to clear"',
      '"Show me what\'s using the most space in my home folder"',
      '"Archive projects I haven\'t touched in over a year"'
    ],
    benchmark: [
      'SMART DETECTION: Identifies: temp files · old logs · duplicate photos · orphaned packages · empty directories · browser caches · old downloads · abandoned projects',
      'SAFETY NOTE: CleanSweep uses a conservative classification by default. If there\'s any ambiguity about a file, it asks. It never assumes.'
    ]
  },
  {
    id: 'agent-003',
    category: 'Agents',
    badge: '⭐ OFFICIAL · SECURITY',
    icon: '🛡️',
    name: 'SysGuard',
    tagline: 'A security monitor that explains everything in plain language.',
    creator: 'MindMapOS',
    version: 'v1.5.0',
    price: 'FREE',
    installs: 9200,
    rating: 4.8,
    reviewsCount: 620,
    platforms: ['Linux', 'Windows', 'macOS'],
    tags: ['Security', 'Monitoring', 'Privacy', 'System Health'],
    description: 'SysGuard is a security and system health agent. It monitors your device for unusual activity, exposed services, weak configurations, and privacy risks — and explains every finding in plain language, not security jargon.\n\nIt never panics. It prioritises clearly. And it proposes specific, safe fixes for everything it finds.',
    whatItCanDo: [
      '"Is there anything on this machine I should be worried about?"',
      '"What processes are connecting to the internet right now?"',
      '"Check if any of my open ports are risky"',
      '"Scan for weak file permissions on sensitive directories"',
      '"Check if my firewall is configured correctly"',
      '"Set up automatic security alerts for suspicious activity"'
    ],
    benchmark: [
      'MONITORING CAPABILITIES: Active network connections · Running processes · Open ports · File permission issues · Failed login attempts · System integrity · Outdated packages with known vulnerabilities'
    ]
  },
  {
    id: 'agent-004',
    category: 'Agents',
    badge: 'SPECIALIST',
    icon: '🎬',
    name: 'MediaMind',
    tagline: 'Manage, organise, and process your entire media library.',
    creator: 'MindMapOS Labs',
    version: 'v1.1.0',
    price: 'FREE',
    installs: 7400,
    rating: 4.6,
    reviewsCount: 410,
    platforms: ['Linux', 'Windows', 'macOS', 'Android'],
    tags: ['Media', 'Photos', 'Videos', 'Music', 'Organisation'],
    description: 'MediaMind is a specialist for photos, videos, music, and documents. It understands media metadata, formats, quality, and organisation at a depth that the generalist agent doesn\'t match.\n\nIt can organise years of chaotic downloads, convert formats in bulk, remove duplicates intelligently (comparing by content, not just name), and manage your entire library through conversation.',
    whatItCanDo: [
      '"Organise all my photos by date and location"',
      '"Find all duplicate photos — even slightly edited versions"',
      '"Convert all my .mov files to .mp4 for sharing"',
      '"Compress these videos without visible quality loss"',
      '"Create an album from all photos tagged with \'holiday\'"',
      '"Find all photos with my face in them from 2024"'
    ]
  },
  {
    id: 'agent-005',
    category: 'Agents',
    badge: 'SPECIALIST · POWER USER',
    icon: '🖥️',
    name: 'HomeServer Pro',
    tagline: 'Manage your self-hosted infrastructure through conversation.',
    creator: 'MindMapOS Labs',
    version: 'v1.0.0',
    price: '$4.99 one-time',
    installs: 3100,
    rating: 4.9,
    reviewsCount: 190,
    platforms: ['Linux'],
    tags: ['Server', 'Self-Hosting', 'Docker', 'Networking', 'DevOps'],
    description: 'HomeServer Pro is built for people running self-hosted services on Linux. It manages Docker containers, Nginx configs, DNS settings, SSL certificates, service monitoring, and automated backups — all through plain-language conversation.\n\nNo YAML knowledge required. No config file editing. Describe what you want your server to do. HomeServer Pro handles it.',
    whatItCanDo: [
      '"Deploy a Nextcloud instance with Docker"',
      '"Set up Nginx as a reverse proxy for my apps"',
      '"Get an SSL certificate for my domain and auto-renew it"',
      '"What containers are running and which ones have issues?"',
      '"Set up automated backups for all my Docker volumes"',
      '"Create a new VPN user for my WireGuard setup"'
    ],
    benchmark: [
      'SUPPORTED SERVICES: Docker · Docker Compose · Nginx · Certbot · WireGuard · Pi-hole · Portainer · Nextcloud · Jellyfin · Plex · Vaultwarden · Immich',
      'PRICE NOTE: One-time purchase. Lifetime updates included. Free trial: 14 days full access, no card required.'
    ]
  },
  {
    id: 'agent-006',
    category: 'Agents',
    badge: 'SPECIALIST · SECURITY',
    icon: '🌙',
    name: 'NightWatch',
    tagline: 'Your device\'s security monitor. Always on. Always quiet.',
    creator: 'Community · Verified',
    version: 'v2.0.0',
    price: 'FREE',
    installs: 5800,
    rating: 4.7,
    reviewsCount: 360,
    platforms: ['Linux', 'Windows', 'macOS'],
    tags: ['Security', 'Background', 'Monitoring', 'Alerts'],
    description: 'NightWatch is a lightweight background security monitor that watches your device around the clock and alerts you — in plain language — when something needs your attention.\n\nUnlike SysGuard (which you invoke manually), NightWatch runs passively and only surfaces when it finds something worth knowing. No false alarms. No noise. It waits until something is real.',
    benchmark: [
      'WHAT IT MONITORS: Unusual outbound connections · Login attempts · File permission changes · New services starting at boot · Packages added without your request · Large unexpected disk writes',
      'ALERT STYLE: "An app called \'updatehelper\' tried to connect to an IP in Russia last night at 2am. I blocked it. Want to investigate?"'
    ]
  },
  {
    id: 'agent-007',
    category: 'Agents',
    badge: 'LIFESTYLE',
    icon: '🧘',
    name: 'FocusDesk',
    tagline: 'Your productivity co-pilot. Keeps you in flow.',
    creator: 'Community · Verified',
    version: 'v1.3.0',
    price: 'FREE',
    installs: 4500,
    rating: 4.5,
    reviewsCount: 290,
    platforms: ['Linux', 'Windows', 'macOS', 'Android'],
    tags: ['Productivity', 'Focus', 'Automation', 'Work'],
    description: 'FocusDesk understands how you work and builds routines around it. It manages your work sessions, blocks distractions, organises your workspace automatically, and handles end-of-day wrap-ups so you don\'t have to think about any of it.',
    whatItCanDo: [
      '"Start a deep work session for 90 minutes — no notifications"',
      '"Set up my morning workspace: open these apps, close those ones"',
      '"Do my end-of-day wrap: save open files, clear downloads, send summary"',
      '"What did I actually work on today?"',
      '"I have a 2pm deadline — help me organise the next 3 hours"'
    ]
  },
  {
    id: 'agent-008',
    category: 'Agents',
    badge: 'MOBILE-FIRST',
    icon: '💰',
    name: 'BudgetBrain',
    tagline: 'Ask your phone about your money. Actually get answers.',
    creator: 'Community · Verified',
    version: 'v1.0.0',
    price: 'FREE',
    installs: 3300,
    rating: 4.4,
    reviewsCount: 210,
    platforms: ['Android', 'iOS'],
    tags: ['Finance', 'Mobile', 'Tracking', 'Spreadsheets'],
    description: 'BudgetBrain connects to your Google Sheets budget and lets you manage it through conversation on your phone. Log expenses, check balances, track categories, and get spending summaries — all without opening a spreadsheet.',
    whatItCanDo: [
      '"Add ₹450 for lunch — category Food"',
      '"How much have I spent on food this month?"',
      '"Am I on track for my monthly budget?"',
      '"Log my salary from today\'s bank notification"',
      '"Show me my top 5 spending categories this week"'
    ]
  },

  // --- ORCHESTRATIONS ---
  {
    id: 'orch-001',
    category: 'Orchestrations',
    badge: '⭐ OFFICIAL · MOST POPULAR',
    icon: '⚙️',
    name: 'Weekly Backup & Cleanup',
    tagline: 'One routine. Runs every Sunday. Your system stays healthy.',
    creator: 'MindMapOS',
    version: 'v1.6.0',
    price: 'FREE',
    installs: 22100,
    rating: 4.9,
    reviewsCount: 1380,
    platforms: ['Linux', 'Windows', 'macOS'],
    schedule: 'Weekly — configurable day/time',
    description: 'The most-installed orchestration on the Marketplace. A complete weekly system maintenance routine that runs automatically and handles everything in the right order, safely.',
    whatItCanDo: [
      'Step 1 Back up your configured folders to your chosen destination',
      'Step 2 Clear system temp files and app caches',
      'Step 3 Remove old log files over your configured age threshold',
      'Step 4 Check for and install OS security updates',
      'Step 5 Verify backup integrity — confirm files are actually readable',
      'Step 6 Send you a plain-language summary of everything done'
    ],
    configuration: [
      'What to back up (folders you choose)',
      'Where to back up to (folder path)',
      'How many backups to keep before rotating',
      'Which day and time to run',
      'Whether updates need your confirmation or install automatically'
    ]
  },
  {
    id: 'orch-002',
    category: 'Orchestrations',
    badge: '⭐ OFFICIAL',
    icon: '☀️',
    name: 'Morning Briefing',
    tagline: 'Your day, summarised. Ready when you are.',
    creator: 'MindMapOS',
    version: 'v1.3.0',
    price: 'FREE',
    installs: 14700,
    rating: 4.8,
    reviewsCount: 920,
    platforms: ['Linux', 'Windows', 'macOS', 'Android', 'iOS'],
    schedule: 'Daily — configurable time',
    requires: 'Google Calendar · Gmail (optional)',
    description: 'Every morning at your chosen time, Morning Briefing prepares a summary of your day and has it waiting in MindMapOS when you open it. No switching apps. No hunting for information. One read. Ready to go.',
    whatItCanDo: [
      'Step 1 Today\'s calendar events with times and locations',
      'Step 2 Unread emails flagged as important or urgent',
      'Step 3 Any tasks left incomplete from yesterday',
      'Step 4 Weather for your location',
      'Step 5 A prioritised list of what needs your attention first'
    ],
    configuration: [
      'What time to run',
      'Which connected accounts to pull from',
      'What counts as "important" email (configurable keywords/senders)',
      'Whether to include weather'
    ]
  },
  {
    id: 'orch-003',
    category: 'Orchestrations',
    badge: '⭐ OFFICIAL',
    icon: '🌅',
    name: 'End of Day Wrap-Up',
    tagline: 'Clean close. Every day. Automatically.',
    creator: 'MindMapOS',
    version: 'v1.1.0',
    price: 'FREE',
    installs: 11300,
    rating: 4.8,
    reviewsCount: 680,
    platforms: ['Linux', 'Windows', 'macOS', 'Android'],
    schedule: 'Daily — configurable time',
    description: 'A structured end-of-day routine that wraps up your workspace, saves what needs saving, clears what\'s safe to clear, and logs what you actually accomplished.',
    whatItCanDo: [
      'Step 1 Save and close any open documents you specify',
      'Step 2 Move downloads to their correct folders by file type',
      'Step 3 Clear browser cache and temp files',
      'Step 4 Log completed tasks to your work journal (Google Docs/Notion)',
      'Step 5 Set reminders for anything left open',
      'Step 6 Shut down or sleep your machine (optional, with confirmation)'
    ],
    configuration: [
      'Run time',
      'Which apps to close / save',
      'Where to log completed tasks',
      'Whether to sleep/shutdown and at what time'
    ]
  },
  {
    id: 'orch-004',
    category: 'Orchestrations',
    badge: 'OFFICIAL',
    icon: '🌙',
    name: 'Night Shift',
    tagline: 'What happens on your machine while you sleep.',
    creator: 'MindMapOS',
    version: 'v1.0.0',
    price: 'FREE',
    installs: 8900,
    rating: 4.7,
    reviewsCount: 540,
    platforms: ['Linux', 'Windows', 'macOS'],
    schedule: 'Nightly — configurable time (runs while machine is on)',
    description: 'Night Shift is a nightly performance and maintenance routine that runs when you\'re not using your machine — doing the heavy work that would be disruptive during the day.\n\nNOTE: Night Shift respects your sleep. It will not install updates — only download them. Anything requiring your confirmation waits until morning.',
    whatItCanDo: [
      'Step 1 Run full system backup (heavier, more complete than weekly)',
      'Step 2 Defragment and optimise storage (where applicable)',
      'Step 3 Run full OS update check and download (not install — waits for you)',
      'Step 4 Clear all identified junk: temp files, old caches, empty folders',
      'Step 5 Run NightWatch security scan (if installed)',
      'Step 6 Send morning-ready summary to your briefing'
    ]
  },
  {
    id: 'orch-005',
    category: 'Orchestrations',
    badge: 'SPECIALIST · DEV',
    icon: '🔄',
    name: 'Developer Environment Sync',
    tagline: 'New machine? 10 minutes. Everything exactly as you left it.',
    creator: 'MindMapOS Labs',
    version: 'v1.2.0',
    price: 'FREE',
    installs: 5600,
    rating: 4.8,
    reviewsCount: 340,
    platforms: ['Linux', 'Windows', 'macOS'],
    requires: 'DevFlow Pro Agent',
    description: 'Dev Environment Sync captures the full state of your development setup — installed tools, versions, configs, dotfiles, extensions — and can restore it exactly on any new or fresh machine.\n\nSet up once on your main machine. When you get a new one: install MindMapOS, add this orchestration, and run Restore. Everything back to exactly how you work. In one go.',
    benchmark: [
      'WHAT IT CAPTURES: Language runtimes and versions · Package managers · CLI tools · Shell config and aliases · Git config · SSH keys (encrypted) · Editor extensions and settings · Docker images (optional)'
    ],
    configuration: [
      'Export to local file (bring your own storage)',
      'Export to encrypted cloud location (Google Drive, Dropbox)',
      'Scheduled daily snapshots',
      'Manual snapshot before big changes'
    ]
  },
  {
    id: 'orch-006',
    category: 'Orchestrations',
    badge: 'SPECIALIST',
    icon: '✏️',
    name: 'BulkRename Pro',
    tagline: 'Rename thousands of files. Exactly how you describe.',
    creator: 'Community · Verified',
    version: 'v1.5.0',
    price: 'FREE',
    installs: 7200,
    rating: 4.6,
    reviewsCount: 480,
    platforms: ['Linux', 'Windows', 'macOS'],
    description: 'A bulk file renaming orchestration that understands plain-language renaming rules instead of regex patterns.\n\nDescribe how you want files renamed. BulkRename Pro previews every change before touching anything, and applies with one click.\n\nSAFETY: Always shows a full before/after preview. Confirm → rename. Cancel → nothing touched. Undo available for 24 hours after any batch rename.',
    whatItCanDo: [
      '"Add today\'s date to the start of every file in this folder"',
      '"Replace all spaces with underscores in these filenames"',
      '"Rename these photos to \'Holiday_001, Holiday_002...\'"',
      '"Remove all the (1), (2), (3) duplicates from these filenames"',
      '"Make all filenames lowercase"'
    ]
  },
  {
    id: 'orch-007',
    category: 'Orchestrations',
    badge: 'SPECIALIST · MEDIA',
    icon: '📷',
    name: 'Photo Organiser',
    tagline: 'A decade of photos. Organised by weekend.',
    creator: 'MindMapOS Labs',
    version: 'v1.0.0',
    price: '$2.99 one-time',
    installs: 4100,
    rating: 4.8,
    reviewsCount: 270,
    platforms: ['Linux', 'Windows', 'macOS', 'Android'],
    description: 'Photo Organiser takes your chaotic Downloads, Desktop, and Camera Roll and organises them by date, location, event, or any structure you describe — automatically.\n\nIt reads EXIF metadata, suggests folder structures based on your photo history, removes duplicates, and handles edge cases (missing dates, scanned photos, screenshots) intelligently.',
    whatItCanDo: [
      '"Organise all my photos by year and month"',
      '"Create albums for each trip I\'ve taken based on location"',
      '"Find all screenshots and move them to a Screenshots folder"',
      '"Find and delete all duplicate photos — keep the highest quality version"',
      '"Organise these phone backup photos to match my existing library structure"'
    ]
  },

  // --- BUNDLES ---
  {
    id: 'bundle-001',
    category: 'Bundles',
    badge: '⭐ OFFICIAL · RECOMMENDED',
    icon: '📦',
    name: 'Power User Starter Pack',
    tagline: 'Everything you need to unlock your machine from day one.',
    creator: 'MindMapOS',
    version: 'v2.0.0',
    price: 'FREE',
    installs: 8700,
    rating: 4.9,
    reviewsCount: 620,
    platforms: ['Linux', 'Windows', 'macOS'],
    description: 'The definitive MindMapOS starter bundle for users who want their machine fully set up from the first day. Best local model, core maintenance agents, and three essential daily routines — all configured together and ready to go.\n\nSETUP TIME: ~15 minutes (includes model download)\nDISK NEEDED: ~6 GB additional',
    included: [
      '🧠 Aria 9B MindMapOS Edition (Model)',
      '🤖 CleanSweep (Agent)',
      '🤖 SysGuard (Agent)',
      '⚙️ Weekly Backup & Cleanup (Orchestration)',
      '⚙️ Night Shift (Orchestration)',
      '⚙️ Morning Briefing (Orchestration)'
    ]
  },
  {
    id: 'bundle-002',
    category: 'Bundles',
    badge: '⭐ OFFICIAL · DEV',
    icon: '📦',
    name: 'Developer Bundle',
    tagline: 'Your complete development environment. Everything in one.',
    creator: 'MindMapOS',
    version: 'v1.4.0',
    price: 'FREE',
    installs: 6200,
    rating: 4.9,
    reviewsCount: 410,
    platforms: ['Linux', 'Windows', 'macOS'],
    description: 'Built for developers who want MindMapOS to handle their entire machine — not just their dev environment. Two models (generalist + code specialist), the best developer agent, and the essential daily routines for a clean working machine.',
    included: [
      '🧠 Aria 9B MindMapOS Edition (Model)',
      '🧠 CodeMind 7B (Model — Dev Specialist)',
      '🤖 DevFlow Pro (Agent)',
      '🤖 SysGuard (Agent)',
      '⚙️ Developer Environment Sync (Orchestration)',
      '⚙️ End of Day Wrap-Up (Orchestration)'
    ]
  },
  {
    id: 'bundle-003',
    category: 'Bundles',
    badge: 'OFFICIAL · SECURITY',
    icon: '📦',
    name: 'Privacy First Bundle',
    tagline: 'Maximum privacy. Maximum safety. Zero compromise.',
    creator: 'MindMapOS',
    version: 'v1.1.0',
    price: 'FREE',
    installs: 4400,
    rating: 4.8,
    reviewsCount: 290,
    platforms: ['Linux', 'Windows', 'macOS'],
    description: 'For users who prioritise privacy and security above everything. PrivacyGuard replaces the standard model with one trained to flag privacy implications before any action. SysGuard and NightWatch keep watch around the clock.\n\nAll data local. All actions conservative by design.',
    included: [
      '🧠 PrivacyGuard 8B (Model — Privacy-First)',
      '🤖 SysGuard (Agent)',
      '🤖 NightWatch (Agent)',
      '⚙️ Weekly Backup & Cleanup (Orchestration)',
      '⚙️ Night Shift (Orchestration)'
    ]
  },
  {
    id: 'bundle-004',
    category: 'Bundles',
    badge: 'MOBILE · OFFICIAL',
    icon: '📦',
    name: 'Mobile Power Pack',
    tagline: 'Your phone. Fully unlocked.',
    creator: 'MindMapOS',
    version: 'v1.0.0',
    price: 'FREE',
    installs: 3800,
    rating: 4.7,
    reviewsCount: 230,
    platforms: ['Android', 'iOS'],
    description: 'Optimised for Android and iOS. Lightweight model, mobile-tuned agents, and daily routines adapted for how phones are actually used.',
    included: [
      '🧠 Aria 4B Lite (Model — Mobile Optimised)',
      '🤖 CleanSweep (Agent)',
      '🤖 MediaMind (Agent)',
      '🤖 FocusDesk (Agent)',
      '⚙️ Morning Briefing (Orchestration)',
      '⚙️ End of Day Wrap-Up (Orchestration)'
    ]
  },
  {
    id: 'bundle-005',
    category: 'Bundles',
    badge: 'POWER USER · LINUX ONLY',
    icon: '📦',
    name: 'Self-Hosted Homelab Bundle',
    tagline: 'Run your homelab. Through conversation.',
    creator: 'MindMapOS Labs',
    version: 'v1.0.0',
    price: '$4.99 one-time',
    installs: 2100,
    rating: 4.9,
    reviewsCount: 140,
    platforms: ['Linux'],
    description: 'The complete stack for homelab and self-hosting users. HomeServer Pro (normally $4.99) is included. Manage your entire infrastructure through MindMapOS.',
    included: [
      '🧠 Aria 9B MindMapOS Edition (Model)',
      '🤖 HomeServer Pro (Agent) — $4.99 value',
      '🤖 SysGuard (Agent)',
      '🤖 NightWatch (Agent)',
      '⚙️ Night Shift (Orchestration)',
      '⚙️ Weekly Backup & Cleanup (Orchestration)'
    ]
  }
];
