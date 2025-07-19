---
trigger: model_decision
description: Must read before making any git commits or writing commit messages
globs:
---

# Git Commit Standards

## Format

```

<type>(<scope>): <subject>

````

- **type**: `feat` | `fix` | `docs` | `style` | `refactor` | `perf` | `test` | `chore`
- **scope**: Module affected (e.g. `api`, `ui`, `auth`, `core`, `config`, `deps`, etc.)
- **subject**: Imperative mood, ≤100 chars, no period

## Examples

```bash
git commit -m "feat(api): add token refresh endpoint"
git commit -m "fix(ui): resolve button overlap on mobile"
git commit -m "chore(config): update uv dependencies"
````

## Rules

* MUST follow `<type>(<scope>): <subject>` format
* MUST write commit message in English
* MUST use imperative verb (e.g., "add", not "added")
* MUST NOT exceed 1 line (no body/footer)
* MUST NOT end with a period
* MUST be under 50 characters (subject)

## Enforcement

* Lint checked via `commitlint`
* Hook enforced in `.husky/commit-msg`
