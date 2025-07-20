# SuperClaude 命令 v3 - 完整参考

## 🎯 概览

SuperClaude v3 是一个全面的人工智能助手命令系统，包含 19 个专用命令、9 种认知角色（Persona）、先进的 MCP 集成，以及用于专业软件开发和运维的循证方法论。

-----

## 🏗️ 核心架构

### 通用命令结构

```yaml
---
command: "/{command-name}"
category: "主要分类"
purpose: "操作目标"
wave-enabled: true|false  # 是否启用Wave模式
performance-profile: "optimization|standard|complex" # 性能配置
---
```

### 命令处理流水线

1.  **输入解析**: `$ARGUMENTS` 带有 `@<path>`, `!<command>`, `--<flags>`
2.  **上下文解析**: 自动激活角色和选择 MCP 服务器
3.  **Wave 资格评估**: 复杂度评估和 Wave 模式决策
4.  **执行策略**: 工具编排和资源分配
5.  **质量门禁**: 验证检查点和错误处理

-----

## 🚩 通用标志

### 🧠 思维深度控制

  - `--think` - 多文件分析（约 4K tokens）
  - `--think-hard` - 架构级深度分析（约 10K tokens）
  - `--ultrathink` - 关键系统最大深度分析（约 32K tokens）

### 📦 Token 优化

  - `--uc` / `--ultracompressed` - 激活超压缩模式（减少 70% token）

### 🔧 MCP 服务器控制

  - `--c7` - 启用 Context7 文档查找
  - `--seq` - 启用 Sequential 思维分析
  - `--magic` - 启用 Magic UI 组件生成
  - `--play` / `--playwright` - 启用 Playwright 浏览器自动化
  - `--all-mcp` - 启用所有 MCP 服务器
  - `--no-mcp` - 禁用所有 MCP 服务器

### 🔍 分析与内省

  - `--introspect` - 启用带有认知透明度的自我感知分析

### 📋 计划与执行

  - `--plan` - 显示详细的执行计划
  - `--dry-run` - 预览变更而不执行
  - `--watch` - 持续监控和实时反馈
  - `--interactive` - 分步指导过程
  - `--force` - 覆盖安全检查

-----

## 👥 角色系统 (Persona)

### 9 种专业角色

  - `--persona-architect` - **系统架构师**: 系统设计、可伸缩性、架构模式
  - `--persona-frontend` - **前端专家**: UI/UX、无障碍优先
  - `--persona-backend` - **后端专家**: API、数据库、可靠性
  - `--persona-analyzer` - **分析师**: 根因分析、循证方法
  - `--persona-security` - **安全专家**: 威胁建模、零信任、OWASP
  - `--persona-mentor` - **导师**: 教学、引导式学习、清晰讲解
  - `--persona-refactorer` - **重构专家**: 代码质量、可维护性
  - `--persona-performance` - **性能专家**: 优化、性能分析、效率
  - `--persona-qa` - **质量保证**: 测试、边界情况、验证

-----

## 🛠️ 开发命令

### /build - 通用项目构建器

**目的**: 具有框架检测和智能脚手架的项目构建器
**Wave 启用**: ✅ Tier 1 (优化配置)
**自动角色**: 前端、后端、架构师、Scribe
**MCP 集成**: Magic (UI 构建), Context7 (模式), Sequential (逻辑)

**参数**: `[target]`, `@<path>`, `!<command>`, `--<flags>`

**专用标志**:

  - `--init` - 初始化新项目
  - `--feature` - 实现功能
  - `--tdd` - 测试驱动开发
  - `--react` - React + Vite + TypeScript
  - `--api` - Express.js API
  - `--fullstack` - 全栈解决方案
  - `--mobile` - React Native
  - `--cli` - 命令行工具

**示例**:

```bash
/build --init --react --magic --tdd
/build --feature "auth system" --tdd
```

### /implement - 功能实现

**目的**: 通过智能角色激活实现功能和代码
**Wave 启用**: ✅ Tier 2 (标准配置)
**自动角色**: 前端、后端、架构师、安全 (根据上下文)
**MCP 集成**: Magic (UI 组件), Context7 (模式), Sequential (复杂逻辑)

**参数**: `[feature-description]`, `--type component|api|service|feature`, `--framework <name>`, `--<flags>`

### /dev-setup - 开发环境配置

**目的**: 配置带有 CI/CD 和监控的专业开发环境

**专用标志**:

  - `--install` - 安装依赖
  - `--ci` - CI/CD 流水线
  - `--monitor` - 监控设置
  - `--docker` - 容器化
  - `--testing` - 测试基础设施
  - `--team` - 团队协作工具

-----

## 🔍 分析与改进命令

### /analyze - 多维度分析

**目的**: 多维度的代码和系统分析
**Wave 启用**: ✅ Tier 1 (复杂配置)
**自动角色**: 分析师、架构师、安全
**MCP 集成**: Sequential (主要), Context7 (模式), Magic (UI 分析)

**参数**: `[target]`, `@<path>`, `!<command>`, `--<flags>`

**专用标志**:

  - `--code` - 代码质量分析
  - `--architecture` - 系统设计评估
  - `--profile` - 性能分析
  - `--deps` - 依赖分析
  - `--deep` - 深度分析
  - `--forensic` - 详细调查

### /review - AI 代码审查

**目的**: 循证的全面代码审查和质量分析

**专用标志**:

  - `--files` - 审查指定文件
  - `--commit` - 审查提交的变更
  - `--pr` - 审查 Pull Request
  - `--quality` - 关注代码质量
  - `--evidence` - 包含证据来源
  - `--fix` - 建议具体修复

### /troubleshoot - 专业调试

**目的**: 系统化的调试和问题解决

**专用标志**:

  - `--investigate` - 系统性问题分析
  - `--five-whys` - 根因分析
  - `--prod` - 生产环境调试
  - `--perf` - 性能调查
  - `--fix` - 提供完整解决方案
  - `--hotfix` - 紧急修复

### /improve - 增强与优化

**目的**: 具有可衡量结果的循证改进
**Wave 启用**: ✅ Tier 1 (优化配置)
**自动角色**: 重构专家、性能专家、架构师、QA
**MCP 集成**: Sequential (逻辑), Context7 (模式), Magic (UI 改进)

**专用标志**:

  - `--quality` - 代码结构改进
  - `--performance` - 性能优化
  - `--accessibility` - 无障碍性改进
  - `--iterate` - 迭代改进
  - `--threshold` - 质量目标百分比
  - `--refactor` - 系统重构

### /explain - 技术文档解释

**目的**: 生成全面的解释和文档

**专用标志**:

  - `--depth` - 复杂度级别 (小白|初学者|中级|专家)
  - `--visual` - 包含图表
  - `--examples` - 代码示例
  - `--api` - API 文档
  - `--tutorial` - 学习教程

-----

## ⚙️ 运维命令

### /deploy - 应用部署

**目的**: 具有回滚功能的安全部署

**专用标志**:

  - `--env` - 目标环境 (dev|staging|prod)
  - `--canary` - 金丝雀部署
  - `--blue-green` - 蓝绿部署
  - `--rolling` - 滚动部署
  - `--rollback` - 回滚到上一版本
  - `--monitor` - 部署后监控

### /migrate - 数据库与代码迁移

**目的**: 支持回滚的安全迁移

**专用标志**:

  - `--database` - 数据库迁移
  - `--code` - 代码迁移
  - `--config` - 配置迁移
  - `--backup` - 首先创建备份
  - `--validate` - 数据完整性检查

### /scan - 安全与验证

**目的**: 全面的安全审计和合规性检查

**专用标志**:

  - `--owasp` - OWASP Top 10 合规性
  - `--secrets` - 密钥检测
  - `--compliance` - 法规合规性
  - `--quality` - 代码质量验证
  - `--automated` - 持续监控

### /estimate - 项目估算

**目的**: 专业的估算和风险评估

**专用标志**:

  - `--detailed` - 详细分解
  - `--rough` - 快速估算
  - `--worst-case` - 最坏情况估算
  - `--agile` - 故事点估算
  - `--complexity` - 技术评估
  - `--risk` - 风险评估

### /cleanup - 项目维护

**目的**: 带有安全验证的专业清理

**专用标志**:

  - `--code` - 移除无用代码
  - `--files` - 清理构建产物
  - `--deps` - 移除未使用的依赖
  - `--git` - 清理 git 仓库
  - `--all` - 全面清理
  - `--aggressive` - 深度清理

### /git - Git 工作流管理

**目的**: 具有安全特性的专业 Git 操作

**专用标志**:

  - `--status` - 仓库状态
  - `--commit` - 专业提交
  - `--branch` - 分支管理
  - `--sync` - 远程同步
  - `--checkpoint` - 创建检查点
  - `--merge` - 智能合并
  - `--pre-commit` - Pre-commit 钩子

-----

## 🎨 设计与架构命令

### /design - 系统架构

**目的**: 专业的系统设计和规格说明
**Wave 启用**: ✅ Tier 2 (标准配置)
**自动角色**: 架构师、前端
**MCP 集成**: Magic, Sequential, Context7

**专用标志**:

  - `--api` - REST/GraphQL 设计
  - `--ddd` - 领域驱动设计
  - `--microservices` - 微服务架构
  - `--event-driven` - 事件驱动模式
  - `--openapi` - OpenAPI 规范
  - `--graphql` - GraphQL 模式

-----

## 🔄 工作流命令

### /spawn - 专业代理

**目的**: 生成用于并行任务的专业代理

**专用标志**:

  - `--task` - 定义具体任务
  - `--parallel` - 并发执行
  - `--specialized` - 领域专长
  - `--collaborative` - 多代理协作

### /document - 文档创建

**目的**: 多格式的专业文档

**专用标志**:

  - `--user` - 用户指南
  - `--technical` - 开发者文档
  - `--markdown` - Markdown 格式
  - `--interactive` - 交互式文档
  - `--multilingual` - 多语言支持

### /load - 项目上下文加载

**目的**: 加载和分析项目上下文

**专用标志**:

  - `--depth` - 分析深度
  - `--context` - 上下文保留
  - `--patterns` - 模式识别
  - `--relationships` - 依赖关系映射
  - `--health` - 项目健康状态

### /task - 任务管理

**目的**: 跨会话的复杂功能管理，具有自动分解和恢复功能
**Wave 启用**: ✅ Tier 2 (标准配置)
**自动角色**: 架构师、分析师
**MCP 集成**: Sequential

**操作**:

  - `/task:create` - 创建任务
  - `/task:status` - 检查状态
  - `/task:resume` - 恢复工作
  - `/task:update` - 更新进度
  - `/task:complete` - 完成任务

-----

## 🚀 专业工作流

### 全栈开发

```bash
/design --api --ddd --persona-architect
/build --fullstack --tdd --magic
/test --coverage --e2e --play
/deploy --env staging --validate
```

### 安全优先开发

```bash
/scan --security --owasp --deps --persona-security
/analyze --security --forensic --seq
/improve --security --validate --strict
```

### 性能优化

```bash
/analyze --profile --deep --persona-performance
/troubleshoot --perf --investigate --play
/improve --performance --iterate --threshold 90%
```

-----

## 💡 使用最佳实践

### 高风险操作

1.  对于关键变更，始终使用 `--validate` 或 `--dry-run`
2.  为专业任务使用合适的角色标志
3.  为复杂任务组合多个 MCP 服务器
4.  根据任务复杂度逐步增加思维深度
5.  在大型项目中使用 `--uc` 以减少 70% 的 token 消耗

### 命令选择矩阵

  - **开发**: `/build`, `/implement`, `/design`
  - **分析**: `/analyze`, `/troubleshoot`, `/explain`
  - **质量**: `/improve`, `/review`, `/cleanup`
  - **测试**: `/test`, `/scan`
  - **文档**: `/document`, `/explain`
  - **计划**: `/estimate`, `/task`
  - **运维**: `/deploy`, `/migrate`, `/git`
  - **元命令**: `/load`, `/spawn`

### 启用 Wave 的命令 (共 6 个)

  - `/analyze` - 复杂分析
  - `/build` - 项目构建
  - `/design` - 系统设计
  - `/implement` - 功能实现
  - `/improve` - 代码增强
  - `/task` - 任务管理

### MCP 服务器集成

  - **Context7**: 文档、模式、最佳实践
  - **Sequential**: 复杂分析、系统性思维
  - **Magic**: UI 组件、设计系统
  - **Playwright**: 浏览器自动化、测试

-----

## 🔄 集成模式

### 多服务器协作

```bash
# 使用所有服务器进行复杂分析
/analyze --deep --all-mcp --persona-architect

# 使用 Magic + Context7 进行 UI 开发
/build --react --magic --c7 --persona-frontend

# 使用 Sequential + Context7 进行安全分析
/scan --security --seq --c7 --persona-security
```

### 循证方法

所有命令都遵循循证方法论：“**证据 \> 假设 | 代码 \> 文档 | 效率 \> 冗长**”