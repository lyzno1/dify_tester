---
trigger: always_on
---

# Development Rules Index

**SINGLE SOURCE OF TRUTH:** This document is the authoritative index of all development rules. AI agents MUST consult this file first to understand rule hierarchy and dependencies.

## 🎯 AI MODEL REQUIREMENTS

### MANDATORY CONSULTATION
- AI agents MUST read this master index before any development task
- AI agents MUST follow the specified rule dependencies
- AI agents MUST NOT proceed with tasks without consulting relevant rules

### ENFORCEMENT LEVELS
- **CRITICAL**: Development-blocking rules that MUST be followed
- **STANDARD**: Required rules with enforcement validation
- **ADVISORY**: Best practices with recommended compliance

---

## 📋 Available Rules

### Core Development Rules (**CRITICAL**)

- **RULE FILE: uv.mdc**  
  MUST read before any package management, dependency installation, or project setup  
  *Dependencies*: None  
  *Enforcement*: All package operations must use `uv` commands only

- **RULE FILE: ruff.mdc**  
  MUST read when linting, formatting, or configuring code quality workflows  
  *Dependencies*: None  
  *Enforcement*: Ruff replaces all legacy formatting/linting tools

- **RULE FILE: pytest.mdc**  
  MUST read when writing, organizing, or running tests  
  *Dependencies*: None  
  *Enforcement*: pytest structure, execution, and markers required

- **RULE FILE: fastapi.mdc**  
  MUST read when building FastAPI applications or APIs  
  *Dependencies*: None  
  *Enforcement*: Must follow FastAPI async/service separation conventions

- **RULE FILE: git_commit.mdc**  
  MUST read when writing or reviewing Git commit messages  
  *Dependencies*: None  
  *Enforcement*: Commit messages must follow Conventional Commits format

---

## 🔄 Rule Dependencies

```

uv.mdc (ROOT)
├── ruff.mdc     # Independent
├── pytest.mdc   # Independent
├── fastapi.mdc  # Independent
└── git_commit.mdc  # Independent

````

All rules may be composed. No internal dependency restrictions.

---

## 🎯 Task-Based Rule Application

### 🔧 Before Development (MANDATORY SEQUENCE)
1. `uv.mdc` – Always first for package/environment setup
2. `ruff.mdc` – For formatting/linting
3. `pytest.mdc` – For any testing activity
4. `fastapi.mdc` – When building APIs or services
5. `git_commit.mdc` – Before committing any changes

### ✅ Domain-Specific Tasks
| Task | Required Rules |
|------|----------------|
| Package management | `uv.mdc` |
| Code quality & formatting | `ruff.mdc` |
| Test authoring & execution | `pytest.mdc` |
| API/server development | `fastapi.mdc` |
| Git commit writing | `git_commit.mdc` |

### 🔁 Cross-Domain Tasks
| Task | Combined Rules |
|------|----------------|
| New project setup | `uv` + `ruff` + `pytest` + `fastapi` + `git_commit` |
| API with tests | `fastapi` + `pytest` + `ruff` + `git_commit` |
| CI pipeline | `uv` + `ruff` + `pytest` + `git_commit` |
| Dependency update with validation | `uv` + `ruff` + `git_commit` |

---

## ✅ AI Agent Usage Protocol

### REQUIRED STEPS
1. **Consult this Index** – Required before any development
2. **Resolve Dependencies** – Always check the dependency tree
3. **Apply Sequentially** – Based on enforcement hierarchy
4. **Validate Compliance** – Ensure all rule-level tests pass

---

## ✅ Validation Commands

```bash
# Validate code style and structure
uv run ruff format --check .
uv run ruff check .

# Run all tests (fast + isolated)
uv run pytest -n auto --cov=src --cov-report=term-missing

# Package lock and environment safety
uv sync --frozen

# Validate git commits (if using lint-staged or commit hooks)
npx commitlint --from=HEAD~5
````

---

## 🔐 Enforcement Standards

### ✅ MUST

* All rules marked as CRITICAL or STANDARD must be followed
* Rule file dependencies must be resolved before any action
* Validation commands must pass before commits or PRs

### ❌ MUST NOT

* Skip rule consultation or file-level reading
* Modify or bypass pyproject.toml manually
* Mix legacy tools (e.g. pip + flake8 + black) with uv + ruff
* Use non-conventional or vague commit messages (see `git_commit.mdc`)

### ⚠️ SHOULD

* Document any temporary rule deviations with justification
* Keep rules updated as tools evolve
* Promote rule clarity for both human and agent usage

