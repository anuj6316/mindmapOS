```
mindmap-memory/
├── .github/
│   └── workflows/
│       ├── ci.yml                      # lint + test
│       └── publish.yml                 # build + PyPI release (on tag)
│
├── docs/                               # mkdocs / sphinx
│   ├── index.md
│   ├── architecture.md
│   └── api.md
│
├── src/
│   └── mindmap_memory/
│       ├── __init__.py                 # exports Memory
│       ├── cli.py                      # Typer CLI entrypoint
│       │
│       ├── core/
│       │   ├── __init__.py
│       │   ├── client.py               # thin public wrapper
│       │   ├── service.py              # business logic
│       │   ├── config.py               # pydantic settings
│       │   ├── exceptions.py
│       │   └── schema.py               # pydantic models
│       │
│       ├── storage/
│       │   ├── __init__.py
│       │   ├── base.py                 # BaseStore ABC
│       │   ├── registry.py             # backend loader
│       │   ├── postgres.py             # pg + pgvector
│       │   ├── cloud.py                # pinecone/supabase
│       │   └── redis_cache.py          # optional caching layer
│       │
│       ├── cognition/
│       │   ├── __init__.py
│       │   ├── extractor.py
│       │   ├── resolver.py
│       │   │
│       │   └── llm/
│       │       ├── __init__.py
│       │       ├── base.py             # LLM interface
│       │       ├── openai.py
│       │       └── local.py            # llama.cpp / vllm
│       │
│       ├── workers/
│       │   ├── __init__.py
│       │   ├── celery_app.py           # celery instance
│       │   └── tasks.py                # async jobs (pruning, compaction)
│       │
│       ├── telemetry/
│       │   ├── __init__.py
│       │   └── tracing.py              # OpenTelemetry hooks
│       │
│       ├── logging/
│       │   ├── __init__.py
│       │   └── config.py               # structured logging setup
│       │
│       └── utils/
│           ├── __init__.py
│           └── helpers.py
│
├── tests/
│   ├── conftest.py
│   │
│   ├── unit/
│   │   ├── test_client.py
│   │   ├── test_storage.py
│   │   └── test_cognition.py
│   │
│   ├── integration/
│   │   ├── test_postgres.py
│   │   └── test_cloud.py
│   │
│   └── e2e/
│       └── test_pipeline.py
│
├── examples/                           # quick usage demos
│   ├── basic.py
│   └── with_postgres.py
│
├── scripts/                            # dev utilities
│   ├── bootstrap.sh
│   └── run_worker.sh
│
├── .env.example
├── .gitignore
├── README.md
├── LICENSE
├── pyproject.toml                      # hatchling/uv build config
├── uv.lock                             # optional (if using uv)
└── Makefile                            # dev shortcuts (test/lint/build)
```