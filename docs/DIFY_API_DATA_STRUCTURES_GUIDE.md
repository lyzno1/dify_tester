# Dify API 外部数据结构完整获取指南

## 🎯 目标
本指南帮助开发者快速定位和提取 Dify API 的所有外部数据结构，包括 SSE 事件、请求/响应类型、以及相关的业务实体。

## 📁 核心目录结构

### 1. 外部 API 事件定义 (最重要)
```
/api/core/app/entities/
├── task_entities.py          # 🔥 外部 SSE 事件的权威定义 (26种事件)
├── queue_entities.py         # 内部队列事件 (29种事件，仅供参考)
└── app_invoke_entities.py    # 应用调用参数定义
```

### 2. 分散的依赖数据结构
```
/api/core/model_runtime/entities/
├── llm_entities.py           # 🔥 LLM 结果和使用量统计
├── message_entities.py       # 消息实体
└── model_entities.py         # 模型实体

/api/core/rag/entities/
└── citation_metadata.py      # 🔥 知识库检索元数据

/api/core/workflow/entities/
├── node_entities.py          # 工作流节点实体
└── workflow_node_execution.py # 节点执行状态和元数据

/api/core/entities/
├── provider_entities.py      # 模型提供商实体
├── provider_configuration.py # 提供商配置
└── parameter_entities.py     # 参数实体
```

### 3. API 控制器 (请求参数定义)
```
/api/controllers/service_api/
├── app/
│   ├── completion.py         # 文本完成 API
│   ├── chat.py              # 聊天 API
│   └── workflow.py          # 工作流 API
└── dataset/
    ├── dataset.py           # 数据集管理 API
    ├── document.py          # 文档管理 API
    ├── segment.py           # 文档分段 API
    ├── hit_testing.py       # 命中测试 API
    └── upload_file.py       # 文件上传 API
```

## 🔍 数据结构获取方法

### 方法 1: 手动提取核心结构

#### 步骤 1: 获取完整的 SSE 事件定义
```bash
# 查看所有 SSE 事件类型
grep -n "class StreamEvent" /api/core/app/entities/task_entities.py -A 30

# 查看所有响应类定义
grep -n "class.*StreamResponse" /api/core/app/entities/task_entities.py
```

**核心文件**: `/api/core/app/entities/task_entities.py`
- `StreamEvent` 枚举: 26种事件类型
- `StreamResponse` 基类及各种具体响应类
- 这是外部 API 的权威事件定义

#### 步骤 2: 获取关键依赖数据结构
```bash
# LLM 使用量和结果
grep -n "class LLM" /api/core/model_runtime/entities/llm_entities.py

# 检索源元数据
cat /api/core/rag/entities/citation_metadata.py

# 工作流执行状态
grep -n "class WorkflowNodeExecution" /api/core/workflow/entities/workflow_node_execution.py -A 20
```

#### 步骤 3: 获取 API 请求参数结构
```bash
# 查看所有 API 控制器
find /api/controllers/service_api -name "*.py" -exec grep -l "RequestParser\|@api\|class.*Api" {} \;

# 提取参数定义
grep -n "add_argument\|reqparse" /api/controllers/service_api/app/completion.py
```

### 方法 2: 使用自动化脚本

#### 使用现有的端点发现脚本
```bash
cd /api/external_api_analyzer
python discover_endpoints.py --output-types --format json > api_endpoints.json
python discover_endpoints.py --output-types --format typescript > api_types.ts
```

#### 创建自定义提取脚本
```python
#!/usr/bin/env python3
"""
Dify API 数据结构提取脚本
"""
import ast
import os
from pathlib import Path

def extract_pydantic_models(file_path):
    """提取 Pydantic 模型定义"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    tree = ast.parse(content)
    models = []
    
    for node in ast.walk(tree):
        if isinstance(node, ast.ClassDef):
            # 检查是否继承自 BaseModel
            for base in node.bases:
                if isinstance(base, ast.Name) and base.id == 'BaseModel':
                    models.append(node.name)
                elif isinstance(base, ast.Attribute) and base.attr == 'BaseModel':
                    models.append(node.name)
    
    return models

def extract_enums(file_path):
    """提取枚举定义"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    tree = ast.parse(content)
    enums = []
    
    for node in ast.walk(tree):
        if isinstance(node, ast.ClassDef):
            for base in node.bases:
                if isinstance(base, ast.Name) and base.id in ['Enum', 'StrEnum']:
                    enums.append(node.name)
    
    return enums

# 核心文件列表
CORE_FILES = [
    '/api/core/app/entities/task_entities.py',
    '/api/core/app/entities/app_invoke_entities.py',
    '/api/core/model_runtime/entities/llm_entities.py',
    '/api/core/rag/entities/citation_metadata.py',
    '/api/core/workflow/entities/node_entities.py',
    '/api/core/workflow/entities/workflow_node_execution.py',
]

# 提取所有数据结构
for file_path in CORE_FILES:
    if os.path.exists(file_path):
        print(f"\n=== {file_path} ===")
        models = extract_pydantic_models(file_path)
        enums = extract_enums(file_path)
        print(f"Models: {models}")
        print(f"Enums: {enums}")
```

### 方法 3: 运行时反射提取

#### 启动 Dify API 服务并反射
```python
#!/usr/bin/env python3
"""
运行时提取 API 数据结构
"""
import sys
sys.path.append('/api')

from core.app.entities.task_entities import StreamEvent, StreamResponse
from core.model_runtime.entities.llm_entities import LLMUsage, LLMResult
from core.rag.entities.citation_metadata import RetrievalSourceMetadata

def extract_model_schema(model_class):
    """提取 Pydantic 模型的 JSON Schema"""
    if hasattr(model_class, 'model_json_schema'):
        return model_class.model_json_schema()
    elif hasattr(model_class, 'schema'):
        return model_class.schema()
    return None

# 提取核心数据结构的 Schema
schemas = {
    'StreamEvent': [e.value for e in StreamEvent],
    'LLMUsage': extract_model_schema(LLMUsage),
    'LLMResult': extract_model_schema(LLMResult),
    'RetrievalSourceMetadata': extract_model_schema(RetrievalSourceMetadata),
}

import json
print(json.dumps(schemas, indent=2, default=str))
```

## 📊 完整的外部 API 数据结构清单

### SSE 事件类型 (26种)
基于 `/api/core/app/entities/task_entities.py`:

#### 基础事件
- `PING` - 心跳事件
- `ERROR` - 错误事件

#### 消息相关事件
- `MESSAGE` - 消息事件
- `MESSAGE_END` - 消息结束事件
- `MESSAGE_FILE` - 消息文件事件
- `MESSAGE_REPLACE` - 消息替换事件

#### TTS 相关事件
- `TTS_MESSAGE` - TTS消息事件
- `TTS_MESSAGE_END` - TTS消息结束事件

#### Agent 相关事件
- `AGENT_THOUGHT` - Agent思考事件
- `AGENT_MESSAGE` - Agent消息事件
- `AGENT_LOG` - Agent日志事件

#### 工作流相关事件
- `WORKFLOW_STARTED` - 工作流开始事件
- `WORKFLOW_FINISHED` - 工作流完成事件

#### 节点执行相关事件
- `NODE_STARTED` - 节点开始执行事件
- `NODE_FINISHED` - 节点完成执行事件
- `NODE_RETRY` - 节点重试事件

#### 并行执行相关事件
- `PARALLEL_BRANCH_STARTED` - 并行分支开始事件
- `PARALLEL_BRANCH_FINISHED` - 并行分支完成事件

#### 迭代相关事件
- `ITERATION_STARTED` - 迭代开始事件
- `ITERATION_NEXT` - 迭代下一步事件
- `ITERATION_COMPLETED` - 迭代完成事件

#### 循环相关事件
- `LOOP_STARTED` - 循环开始事件
- `LOOP_NEXT` - 循环下一步事件
- `LOOP_COMPLETED` - 循环完成事件

#### 文本处理相关事件
- `TEXT_CHUNK` - 文本块事件
- `TEXT_REPLACE` - 文本替换事件

### 核心数据结构

#### LLMUsage (计费相关)
```python
class LLMUsage(BaseModel):
    prompt_tokens: int
    completion_tokens: int
    total_tokens: int
    prompt_price: Decimal
    completion_price: Decimal
    total_price: Decimal
    currency: str
    latency: float
```

#### RetrievalSourceMetadata (知识库检索)
```python
class RetrievalSourceMetadata(BaseModel):
    position: Optional[int]
    dataset_id: Optional[str]
    dataset_name: Optional[str]
    document_id: Optional[str]
    document_name: Optional[str]
    segment_id: Optional[str]
    score: Optional[float]
    content: Optional[str]
    # ... 更多字段
```

#### TaskStateMetadata (任务状态)
```python
class TaskStateMetadata(BaseModel):
    annotation_reply: AnnotationReply | None
    retriever_resources: Sequence[RetrievalSourceMetadata]
    usage: LLMUsage | None
```

## 🛠️ 实用工具和脚本

### 1. 快速查看所有事件类型
```bash
python -c "
import sys; sys.path.append('/api')
from core.app.entities.task_entities import StreamEvent
for event in StreamEvent:
    print(f'{event.name}: {event.value}')
"
```

### 2. 生成 TypeScript 类型定义
```bash
cd /api/external_api_analyzer
python discover_endpoints.py --output-types --format typescript > dify_api_types.ts
```

### 3. 提取完整的 JSON Schema
```python
#!/usr/bin/env python3
import sys
sys.path.append('/api')
import json
from core.app.entities.task_entities import *
from core.model_runtime.entities.llm_entities import *
from core.rag.entities.citation_metadata import *

# 提取所有响应类的 Schema
response_classes = [
    MessageStreamResponse,
    MessageEndStreamResponse,
    MessageAudioStreamResponse,
    MessageAudioEndStreamResponse,
    # ... 添加更多响应类
]

schemas = {}
for cls in response_classes:
    if hasattr(cls, 'model_json_schema'):
        schemas[cls.__name__] = cls.model_json_schema()

print(json.dumps(schemas, indent=2, default=str))
```

## 📝 注意事项

### 重要提醒
1. **权威来源**: `/api/core/app/entities/task_entities.py` 是外部 SSE 事件的唯一权威定义
2. **内部事件**: `/api/core/app/entities/queue_entities.py` 是内部队列事件，不对外暴露
3. **依赖关系**: 理解分散的依赖数据结构对完整理解 API 至关重要
4. **版本同步**: 确保提取的数据结构与实际运行的 Dify 版本一致

### 最佳实践
1. **优先级**: 先关注 SSE 事件定义，再关注具体的数据结构
2. **自动化**: 使用脚本自动提取，避免手动维护
3. **验证**: 通过实际 API 调用验证提取的数据结构
4. **文档**: 基于提取的结构生成完整的 API 文档

## 🎯 快速开始

### 最小化获取步骤
1. **查看核心事件**: `cat /api/core/app/entities/task_entities.py | grep -A 1 "class StreamEvent\|= StreamEvent"`
2. **提取关键依赖**: 查看 `LLMUsage`, `RetrievalSourceMetadata`, `TaskStateMetadata`
3. **运行发现脚本**: `python /api/external_api_analyzer/discover_endpoints.py --output-types`
4. **生成类型定义**: 基于提取的结构生成目标语言的类型定义

通过这个指南，你可以快速、准确地获取 Dify API 的所有外部数据结构！
