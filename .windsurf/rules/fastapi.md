---
trigger: model_decision
description: FastAPI quick rules reference for uv‑managed projects.
globs:
---

# FastAPI Rules

## Commands

* `uv run uvicorn app.main:app --reload` – dev server (auto‑reload)
* `uv run uvicorn app.main:app --host 0.0.0.0 --port 8000 --workers 4` – production
* `uv run gunicorn -k uvicorn.workers.UvicornWorker app.main:app` – Gunicorn wrapper

## Structure

```
├── src/app/
│   ├── main.py          # FastAPI() instance
│   ├── api/v1/endpoints.py
│   ├── core/            # config, logging, security
│   ├── models/          # Pydantic/ORM
│   └── services/        # business logic
└── tests/
```

## Essentials

* **Routers**: each `endpoints.py` exports `router = APIRouter()`; include with
  `app.include_router(router, prefix="/api/v1")`
* **Settings**: centralise in `core/config.py` using `pydantic.BaseSettings`
* **Async I/O**: use `httpx.AsyncClient`, async DB drivers (e.g., `asyncpg`, `SQLModel`)

## Workflows

```bash
uv init my_app
uv add fastapi uvicorn[standard]            # runtime deps
uv add --dev pytest pytest-cov ruff         # dev deps
uv run uvicorn app.main:app --reload        # dev server
uv run pytest -n auto --cov=src             # tests + coverage
uv run ruff format . && uv run ruff check . # format + lint
```

## Anti‑Patterns

* Blocking I/O inside `async` routes
* Global mutable state without teardown
* Synchronous DB drivers in async context
