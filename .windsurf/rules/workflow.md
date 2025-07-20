---
trigger: always_on
---

# Three-Document Workflow

## 🎯 Workflow Purpose
Use three structured documents to plan, design, and execute any feature development while maintaining traceability and consistency.

All three documents must be placed in `.development/<branch-type>/<feature-name>/`
(please use "git branch" cmd to get <branch-type>/<feature-name>)

## 📁 Document Roles

### requirements.md - WHAT to discover/build
- **Purpose**: Define discovery needs and constraints
- **Content**: Project overview, current state, dynamic requirements, integration needs
- **Usage**: Before any development begins

### design.md - HOW to implement within constraints
- **Purpose**: Design architecture within existing project constraints
- **Content**: Architecture, dependencies analysis, integration points, validation strategy
- **Usage**: After requirements are finalized

### todo.md - EXECUTION order
- **Purpose**: Define sequential tasks and track progress
- **Content**: Current state, phase-based tasks, validation criteria, progress tracking
- **Usage**: Throughout development

## 🔄 Document Flow

```
Requirements → Design → Tasks → Execution → Updates
   (WHAT)      (HOW)    (ORDER)   (DO)     (SYNC)
```

## 📋 Document Design Guidelines

### requirements.md Structure
```markdown
# Requirements: [Feature]

## Project Overview
[1-2 sentence description]

## Current State
[What exists vs. needs discovery]

## Dynamic Requirements
- [ ] Discovery needs
- [ ] Integration requirements
- [ ] Validation criteria
```

### design.md Structure
```markdown
# Design: [Feature]

## Architecture
[Based on existing structure]

## Dependencies
[Current vs new analysis]

## Integration Points
[How it connects to existing system]

## Validation Strategy
[How to verify correctness]
```

### todo.md Structure
```markdown
# Tasks: [Feature]

## Current State
[Progress snapshot]

## Phase 1: [Name]
- [ ] Sequential task 1
- [ ] Sequential task 2

## Phase 2: [Name]
- [ ] Sequential task 3

## Validation
- [ ] All tasks completed
- [ ] Requirements met
- [ ] Design implemented
```

## 🚀 Usage Workflow

### Creating New Features
1. Create `requirements.md` - define discovery needs
2. Create `design.md` - design within constraints
3. Create `todo.md` - define execution order
4. Execute tasks - check boxes as completed
5. Update all three - maintain synchronization

### Updating Existing Features
1. Update `requirements.md` - add new discovery needs
2. Update `design.md` - adjust design for changes
3. Update `todo.md` - add new tasks, mark completed
4. Ensure consistency - keep all three aligned

### ✋ Human-in-the-Loop Rule
After generating each of the three documents (`requirements.md`, `design.md`, `todo.md`), the system **must pause and ask the user to confirm, review, or revise** before proceeding to the next one.

- Do not auto-generate the next document without explicit user approval.
- Ask: "✅ requirements.md completed. Do you want to proceed to design.md?"
- Only continue if the user confirms.

## 📊 Document Maintenance

### Update Sequence
- **Requirements**: New needs, specification changes
- **Design**: Architecture changes, dependency updates
- **Tasks**: Task completion, priority changes, new requirements

### Synchronization Rules
- Always update all three documents together
- Sequential updates: Requirements → Design → Tasks
- Validate consistency before commits
- Regular review cycle

## ✅ Success Criteria

### Document Quality
- **Requirements**: Clear, dynamic, integration-focused
- **Design**: Architecture-focused, constraint-aware
- **Tasks**: Sequential, measurable, validated

### Workflow Effectiveness
- **Traceability**: Clear line from requirements to implementation
- **Consistency**: All documents remain synchronized
- **Reusability**: Workflow applies to any feature development
- **Maintainability**: Easy to update and maintain