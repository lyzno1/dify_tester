# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🎯 Development Rules Index (MANDATORY)

**CRITICAL**: Before any development task, read `.cursor/rules/index.mdc` for complete rule hierarchy and dependencies.

### Available Rules
All rules are in `.cursor/rules/` directory:
- **workflow.mdc**: Three-document workflow for feature development (REQUIRED FIRST)
- **uv.mdc**: Package management (pnpm/uv commands)
- **ruff.mdc**: Python linting/formatting (replaces Black/Flake8)
- **pytest.mdc**: Backend testing framework
- **fastapi.mdc**: FastAPI development conventions
- **git_commit.mdc**: Commit message format
- **jest.mdc**: Frontend testing (Jest + React Testing Library)

## Project Architecture

This is a full-stack Dify API testing application with a modern monorepo structure:

- **Frontend**: Next.js 15.4.2 (App Router) + React 19.1.0 + TypeScript + Tailwind CSS 4.x + Jest
- **Backend**: FastAPI + Python 3.11-3.12 + httpx for Dify API integration
- **Package Management**: pnpm (frontend) + uv (backend)

## 📁 Three-Document Workflow Location

All workflow documents (`requirements.md`, `design.md`, `todo.md`) must be placed under:
.development/<branch-type>/<feature-name>/
Example: `.development/feat/dify/requirements.md`

## Directory Structure

```
├── web/                    # Next.js frontend
│   ├── app/               # App Router pages and layouts
│   ├── public/            # Static assets
│   ├── __tests__/         # Jest tests
│   ├── jest.config.js     # Jest configuration
│   ├── jest.setup.js      # Jest setup file
│   └── package.json       # Frontend dependencies
├── api/                   # FastAPI backend
│   ├── main.py           # FastAPI application entry
│   └── pyproject.toml    # Backend dependencies
├── .cursor/rules/        # Development rules (CRITICAL)
└── docs/                 # Documentation
```

## Development Commands

### Frontend (web/)
```bash
# Install dependencies
pnpm install

# Development server
pnpm dev                    # Runs on http://localhost:3000

# Build and production
pnpm build
pnpm start

# Code quality
pnpm lint                   # ESLint check
pnpm typecheck             # TypeScript check
pnpm format                # Prettier format

# Testing (NEW)
pnpm test                  # Run all Jest tests
pnpm test:watch           # Watch mode
pnpm test:ci              # CI mode with coverage
```

### Backend (api/)
```bash
# Install dependencies
uv sync                     # Install from pyproject.toml

# Development server
uv run fastapi dev main.py  # Runs on http://localhost:8000

# Testing
uv run pytest               # Run all tests
uv run pytest -v            # Verbose output
uv run pytest --cov=app     # With coverage report

# Code quality
uv run ruff check .         # Lint check
uv run ruff format .        # Format code
```

## Key Configuration Files

### Frontend Testing
- **Frontend**: `web/next.config.ts`, `web/tsconfig.json`, `web/jest.config.js`, `web/jest.setup.js`
- **Backend**: `api/pyproject.toml`, `api/pytest.ini_options` (via pyproject.toml)
- **Quality Tools**: ESLint, Prettier, Ruff, Pytest, Jest configurations

### Jest Configuration (web/)
```javascript
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '**/__tests__/**/*.test.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/.next/**',
  ],
}

module.exports = createJestConfig(customJestConfig)
```

## Technology Stack Details

- **Frontend**: Next.js App Router, TypeScript strict mode, Tailwind CSS v4 (alpha), Jest + React Testing Library
- **Backend**: FastAPI with automatic OpenAPI docs, Pydantic v2 for validation
- **HTTP Client**: httpx with SSE support for Dify streaming responses
- **Testing**: 
  - Frontend: Jest + React Testing Library + @testing-library/jest-dom
  - Backend: Pytest with coverage

## Rule Compliance Checklist

### Before Starting Any Task:
1. ✅ Read `.cursor/rules/index.mdc` first
2. ✅ Consult relevant rule files based on task type
3. ✅ Follow rule dependencies and enforcement levels
4. ✅ Use only specified tools and commands

### Task-Specific Rules:
- **Package management**: Follow `uv.mdc` (backend) or use `pnpm` (frontend)
- **Testing**: Follow `jest.mdc` (frontend) or `pytest.mdc` (backend)
- **Code quality**: Use `ruff` for Python, ESLint/Prettier for TypeScript
- **Commits**: Follow `git_commit.mdc` format

### Rule-Based AI Execution Guidance
- ✅ Claude or any AI agent must follow `workflow.mdc` before writing any code
- ✅ Use `requirements.md` → `design.md` → `todo.md` in order
- ✅ Always update all three documents when working on a feature

## Validation Commands

```bash
# Frontend validation
pnpm test                    # Run Jest tests
pnpm lint                    # ESLint check
pnpm typecheck              # TypeScript check

# Backend validation
uv run ruff format --check . # Python formatting
uv run ruff check .         # Python linting
uv run pytest               # Backend tests

# Full validation
pnpm test:ci                # Frontend CI tests
```

### ✅ MUST

* All rules marked as CRITICAL or STANDARD must be followed
* Rule file dependencies must be resolved before any action
* Validation commands must pass before commits or PRs
* All comments must be in English

## ❌ MUST NOT

* Skip rule consultation or file-level reading
* Modify or bypass pyproject.toml manually
* Mix legacy tools (e.g. pip + flake8 + black) with uv + ruff
* Use non-conventional or vague commit messages (see `git_commit.mdc`)

### ⚠️ SHOULD

* Document any temporary rule deviations with justification
* Keep rules updated as tools evolve
* Promote rule clarity for both human and agent usage
