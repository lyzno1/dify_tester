⏺ SuperClaude Commands 深度分析

  概述 (Overview)

  SuperClaude v2.0.1 是一个强大的 AI 助手命令系统，包含 19 个专业命令、9 个认知人格、高级 MCP 
  集成和基于证据的方法论。这个系统旨在通过结构化的命令行界面提供专业级的软件开发和运维支持。

  核心特性 (Core Features)

  1. 通用标志 (Universal Flags)

  所有命令都支持以下标志：

  🧠 思考深度控制 (Thinking Depth Control)

  - --think - 多文件分析（约4K tokens）
  - --think-hard - 架构级深度分析（约10K tokens）
  - --ultrathink - 关键系统最大深度分析（约32K tokens）

  📦 Token 优化 (Token Optimization)

  - --uc / --ultracompressed - 激活超压缩模式（大幅减少token使用）

  🔧 MCP 服务器控制 (MCP Server Control)

  - --c7 - 启用 Context7 文档查找
  - --seq - 启用序列化思考分析
  - --magic - 启用 Magic UI 组件生成
  - --pup - 启用 Puppeteer 浏览器自动化
  - --all-mcp - 启用所有 MCP 服务器
  - --no-mcp - 禁用所有 MCP 服务器

  🔍 分析与反省 (Analysis & Introspection)

  - --introspect - 启用具有认知透明度的自我感知分析

  📋 规划与执行 (Planning & Execution)

  - --plan - 显示详细执行计划
  - --dry-run - 预览更改而不执行
  - --watch - 持续监控和实时反馈
  - --interactive - 分步指导过程
  - --force - 覆盖安全检查

  2. 人格标志 (Persona Flags)

  9 个专业人格，每个都有独特的专业领域：

  - --persona-architect - 系统架构师：专注系统设计、可扩展性、架构模式
  - --persona-frontend - 前端专家：UI/UX、可访问性优先
  - --persona-backend - 后端专家：API、数据库、可靠性
  - --persona-analyzer - 分析师：根因分析、基于证据的方法
  - --persona-security - 安全专家：威胁建模、零信任、OWASP
  - --persona-mentor - 导师：教学、指导学习、清晰度
  - --persona-refactorer - 重构专家：代码质量、可维护性
  - --persona-performance - 性能专家：优化、分析、效率
  - --persona-qa - 质量保证：测试、边界情况、验证

  完整命令参考 (Complete Command Reference)

  🛠️ 开发命令 (Development Commands)

  /build - 通用项目构建器

  功能：使用现代技术栈模板构建项目、功能和组件

  专用标志：
  - --init - 初始化新项目
  - --feature - 实现功能
  - --tdd - 测试驱动开发
  - --react - React + Vite + TypeScript
  - --api - Express.js API
  - --fullstack - 全栈解决方案
  - --mobile - React Native
  - --cli - CLI工具

  示例：
  /build --init --react --magic --tdd  # 带AI组件的新React应用
  /build --feature "auth system" --tdd  # 带测试的功能开发

  /dev-setup - 开发环境配置

  功能：配置专业开发环境，包括CI/CD和监控

  专用标志：
  - --install - 安装依赖
  - --ci - CI/CD流水线
  - --monitor - 监控设置
  - --docker - 容器化
  - --testing - 测试基础设施
  - --team - 团队协作工具

  /test - 综合测试框架

  功能：创建、运行和维护全栈测试策略

  专用标志：
  - --e2e - 端到端测试
  - --integration - 集成测试
  - --unit - 单元测试
  - --visual - 视觉回归测试
  - --mutation - 变异测试
  - --performance - 性能测试
  - --accessibility - 可访问性测试

  🔍 分析与改进命令 (Analysis & Improvement Commands)

  /review - AI 代码审查

  功能：基于证据的综合代码审查和质量分析

  专用标志：
  - --files - 审查指定文件
  - --commit - 审查提交更改
  - --pr - 审查拉取请求
  - --quality - 关注代码质量
  - --evidence - 包含证据来源
  - --fix - 建议具体修复方案

  /analyze - 多维度分析

  功能：代码、架构、性能和安全的综合分析

  专用标志：
  - --code - 代码质量分析
  - --architecture - 系统设计评估
  - --profile - 性能分析
  - --deps - 依赖分析
  - --deep - 深度分析
  - --forensic - 详细调查

  /troubleshoot - 专业调试

  功能：系统化调试和问题解决

  专用标志：
  - --investigate - 系统化问题分析
  - --five-whys - 根因分析
  - --prod - 生产环境调试
  - --perf - 性能调查
  - --fix - 完整解决方案
  - --hotfix - 紧急修复

  /improve - 增强与优化

  功能：基于证据的改进，可衡量结果

  专用标志：
  - --quality - 代码结构改进
  - --performance - 性能优化
  - --accessibility - 可访问性改进
  - --iterate - 迭代改进
  - --threshold - 质量目标百分比
  - --refactor - 系统重构

  /explain - 技术文档

  功能：生成综合解释和文档

  专用标志：
  - --depth - 复杂程度（ELI5|beginner|intermediate|expert）
  - --visual - 包含图表
  - --examples - 代码示例
  - --api - API文档
  - --tutorial - 学习教程

  ⚙️ 运维命令 (Operations Commands)

  /deploy - 应用部署

  功能：安全部署，支持回滚

  专用标志：
  - --env - 目标环境（dev|staging|prod）
  - --canary - 金丝雀部署
  - --blue-green - 蓝绿部署
  - --rolling - 滚动部署
  - --rollback - 回滚到前一版本
  - --monitor - 部署后监控

  /migrate - 数据库和代码迁移

  功能：安全迁移，支持回滚

  专用标志：
  - --database - 数据库迁移
  - --code - 代码迁移
  - --config - 配置迁移
  - --backup - 先创建备份
  - --validate - 数据完整性检查

  /scan - 安全与验证

  功能：综合安全审计和合规检查

  专用标志：
  - --owasp - OWASP Top 10 合规
  - --secrets - 秘密检测
  - --compliance - 法规合规
  - --quality - 代码质量验证
  - --automated - 持续监控

  /estimate - 项目估算

  功能：专业估算和风险评估

  专用标志：
  - --detailed - 详细分解
  - --rough - 快速估算
  - --worst-case - 悲观估算
  - --agile - 故事点估算
  - --complexity - 技术评估
  - --risk - 风险评估

  /cleanup - 项目维护

  功能：专业清理，安全验证

  专用标志：
  - --code - 删除死代码
  - --files - 清理构建产物
  - --deps - 删除未使用依赖
  - --git - 清理git仓库
  - --all - 综合清理
  - --aggressive - 深度清理

  /git - Git工作流管理

  功能：专业Git操作，安全功能

  专用标志：
  - --status - 仓库状态
  - --commit - 专业提交
  - --branch - 分支管理
  - --sync - 远程同步
  - --checkpoint - 创建检查点
  - --merge - 智能合并
  - --pre-commit - 预提交钩子

  🎨 设计与架构命令 (Design & Architecture Commands)

  /design - 系统架构

  功能：专业系统设计和规范

  专用标志：
  - --api - REST/GraphQL设计
  - --ddd - 领域驱动设计
  - --microservices - 微服务架构
  - --event-driven - 事件模式
  - --openapi - OpenAPI规范
  - --graphql - GraphQL模式

  🔄 工作流命令 (Workflow Commands)

  /spawn - 专业代理

  功能：为并行任务生成专门代理

  专用标志：
  - --task - 定义特定任务
  - --parallel - 并发执行
  - --specialized - 领域专业知识
  - --collaborative - 多代理协作

  /document - 文档创建

  功能：多格式专业文档

  专用标志：
  - --user - 用户指南
  - --technical - 开发者文档
  - --markdown - Markdown格式
  - --interactive - 交互式文档
  - --multilingual - 多语言支持

  /load - 项目上下文加载

  功能：加载和分析项目上下文

  专用标志：
  - --depth - 分析深度
  - --context - 上下文保存
  - --patterns - 模式识别
  - --relationships - 依赖映射
  - --health - 项目健康状态

  /task - 任务管理

  功能：跨会话的复杂功能管理，自动分解和恢复

  操作类型：
  - /task:create - 创建任务
  - /task:status - 检查状态
  - /task:resume - 恢复工作
  - /task:update - 更新进度
  - /task:complete - 完成任务

  最佳实践 (Best Practices)

  🚀 专业工作流

  全栈开发：
  /design --api --ddd --persona-architect
  /build --fullstack --tdd --magic
  /test --coverage --e2e --pup
  /deploy --env staging --validate

  安全优先开发：
  /scan --security --owasp --deps --persona-security
  /analyze --security --forensic --seq
  /improve --security --validate --strict

  性能优化：
  /analyze --profile --deep --persona-performance
  /troubleshoot --perf --investigate --pup
  /improve --performance --iterate --threshold 90%

  💡 使用建议

  1. 高风险操作：始终使用 --validate 或 --dry-run
  2. 专业任务：使用相应的人格标志
  3. 复杂任务：结合多个MCP服务器
  4. 渐进式思考：根据任务复杂度使用不同的思考深度
  5. Token节省：使用 --uc 可减少70%的token使用