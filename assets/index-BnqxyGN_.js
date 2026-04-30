const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Home-raZ2-QtH.js","./vendor-vue-DtVkKLuz.js","./useScrollAnimation-BeZlt0Wq.js","./vendor-html2pdf-BTG5XtWv.js","./vendor-hljs-DIo1dxxj.js","./Home-DFLYG4Jy.css","./Articles-Cv2y94OC.js","./Articles-CXGYQ4Wp.css","./ArticleDetail-xBE7J9O8.js","./vendor-marked-JKvyS0Pp.js","./ArticleDetail-rYNDFEVR.css","./Projects-DWtWy1db.js","./Resume-BbQc3jFq.js","./Login-BdCbFQ60.js","./Login-lzdaLgoy.css","./NotFound-DO3BNzGc.js"])))=>i.map(i=>d[i]);
import{w as V,o as O,a as M,c as p,n as y,b as e,d as u,e as m,F as k,r as C,T as _,f as v,g as B,t as h,u as P,h as b,i as G,j as A,k as j,l as H,m as W,p as n,q as U,s as F,v as K,x as Q,y as q}from"./vendor-vue-DtVkKLuz.js";import{_ as g}from"./vendor-html2pdf-BTG5XtWv.js";import"./vendor-hljs-DIo1dxxj.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const T={name:"Alex Chen",title:"全栈开发工程师",avatar:"./avatar.jpg",bio:"热爱技术，专注于 Web 全栈开发、云原生架构和 AI 应用。拥有 5 年以上的开发经验，善于将复杂的技术问题转化为优雅的解决方案。追求代码质量与用户体验的极致平衡。",email:"2651466619@qq.com",github:"https://github.com/Ly78-ad?tab=repositories",location:"中国·陕西",availability:"开放合作"},ve=["Vue.js","React","TypeScript","Node.js","Python","Go","Docker","Kubernetes","AWS","PostgreSQL","MongoDB","Redis","GraphQL","Nginx","Linux","Git","CI/CD","TailwindCSS","Next.js","Nuxt.js"],xe=[{id:"vue3-composition-api",title:"Vue 3 Composition API 深度解析与实战指南",summary:"从 Options API 到 Composition API 的思维转换，深入理解 ref、reactive、computed、watch 等核心概念，以及在实际项目中的最佳实践。",content:`
# Vue 3 Composition API 深度解析与实战指南

## 前言

Vue 3 引入的 Composition API 是 Vue 框架发展的一个重要里程碑。它不仅解决了大型组件中逻辑复用困难的问题，还为 TypeScript 支持提供了更好的基础。

## 为什么需要 Composition API？

在 Vue 2 的 Options API 中，我们通过 \`data\`、\`computed\`、\`methods\`、\`watch\` 等选项来组织代码。这种方式在小型组件中表现良好，但在大型组件中存在明显的局限性：

- **逻辑分散**：同一个功能的代码被分散在不同的选项中
- **复用困难**：Mixin 存在命名冲突和来源不明确的问题
- **类型推导**：Options API 对 TypeScript 的支持不够友好

## 核心概念

### ref 与 reactive

\`\`\`javascript
import { ref, reactive } from 'vue'

// ref - 适用于基本类型
const count = ref(0)
console.log(count.value) // 0

// reactive - 适用于对象
const state = reactive({
  name: 'Vue 3',
  version: 3
})
console.log(state.name) // Vue 3
\`\`\`

### computed 计算属性

\`\`\`javascript
import { ref, computed } from 'vue'

const firstName = ref('John')
const lastName = ref('Doe')

const fullName = computed(() => {
  return \`\${firstName.value} \${lastName.value}\`
})
\`\`\`

### watch 侦听器

\`\`\`javascript
import { ref, watch } from 'vue'

const keyword = ref('')

watch(keyword, (newVal, oldVal) => {
  console.log(\`搜索词从 \${oldVal} 变为 \${newVal}\`)
  // 发起搜索请求
}, { debounce: 300 })
\`\`\`

## 组合式函数 (Composables)

组合式函数是 Composition API 中复用逻辑的核心模式：

\`\`\`javascript
// useMousePosition.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  return { x, y }
}
\`\`\`

## 最佳实践

1. **提取组合式函数**：将可复用的逻辑提取到 \`composables/\` 目录
2. **命名规范**：组合式函数以 \`use\` 开头
3. **返回 ref**：始终返回 ref 而非 reactive，保持解构时的响应性
4. **避免过大的组合式函数**：保持单一职责原则

## 总结

Composition API 不仅是 Vue 3 的新特性，更是一种全新的代码组织思维方式。通过合理使用 ref、reactive、computed、watch 以及组合式函数，我们可以写出更清晰、更易维护、更具可复用性的代码。
    `,date:"2024-12-15",category:"Vue.js",tags:["Vue3","Composition API","TypeScript","前端"],readTime:"12 分钟",views:2340,likes:186},{id:"docker-kubernetes-deploy",title:"Docker + Kubernetes 从零部署 Node.js 应用",summary:"手把手教你使用 Docker 容器化 Node.js 应用，并通过 Kubernetes 进行编排部署，包含健康检查、自动扩缩容和滚动更新配置。",content:`
# Docker + Kubernetes 从零部署 Node.js 应用

## 前言

容器化和编排部署是现代应用架构的基础。本文将带你从 Dockerfile 编写开始，一直到 Kubernetes 集群部署。

## Dockerfile 最佳实践

\`\`\`dockerfile
# 多阶段构建
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
RUN addgroup -g 1001 -S appgroup && \\
    adduser -S appuser -u 1001 -G appgroup
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --from=builder --chown=appuser:appgroup /app/package.json ./
USER appuser
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1
CMD ["node", "dist/server.js"]
\`\`\`

## Kubernetes Deployment

\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-app
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: app
        image: registry.example.com/node-app:v1.0.0
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
\`\`\`

## 自动扩缩容 HPA

\`\`\`yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: node-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: node-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
\`\`\`

## 总结

通过合理的 Dockerfile 和 Kubernetes 配置，我们可以实现应用的自动化部署、健康检查、滚动更新和自动扩缩容，大幅提升应用的可靠性和可维护性。
    `,date:"2024-11-28",category:"DevOps",tags:["Docker","Kubernetes","Node.js","部署","容器化"],readTime:"15 分钟",views:1820,likes:142},{id:"typescript-advanced-patterns",title:"TypeScript 高级类型体操与设计模式实战",summary:"深入探讨 TypeScript 的高级类型特性，包括条件类型、映射类型、模板字面量类型，以及在实际项目中的设计模式应用。",content:`
# TypeScript 高级类型体操与设计模式实战

## 条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false
type A = IsString<string>  // true
type B = IsString<number>  // false

// 实用：提取 Promise 的返回类型
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T
type C = UnwrapPromise<Promise<string>>  // string
\`\`\`

## 映射类型与模板字面量

\`\`\`typescript
// 自动生成事件处理函数
type EventHandlers<T> = {
  [K in keyof T as \`on\${Capitalize<string & K>}\`]: (value: T[K]) => void
}

interface FormData {
  username: string
  age: number
}

type FormHandlers = EventHandlers<FormData>
// { onUsername: (value: string) => void; onAge: (value: number) => void }
\`\`\`

## Builder 模式

\`\`\`typescript
class QueryBuilder<T> {
  private conditions: string[] = []
  
  where<K extends keyof T>(field: K, op: '=' | '>' | '<', value: T[K]): this {
    this.conditions.push(\`\${String(field)} \${op} \${value}\`)
    return this
  }
  
  build(): string {
    return this.conditions.join(' AND ')
  }
}

const query = new QueryBuilder<{ name: string; age: number }>()
  .where('name', '=', 'John')
  .where('age', '>', 18)
  .build()
\`\`\`

## 总结

TypeScript 的类型系统是图灵完备的，善用高级类型特性可以大幅提升代码的类型安全性和开发体验。
    `,date:"2024-11-10",category:"TypeScript",tags:["TypeScript","类型系统","设计模式","前端"],readTime:"10 分钟",views:3100,likes:267},{id:"react-server-components",title:"React Server Components 原理与实践",summary:"深入理解 RSC 的工作原理、流式渲染机制，以及在 Next.js App Router 中的最佳实践和常见陷阱。",content:`
# React Server Components 原理与实践

## 什么是 Server Components

React Server Components (RSC) 是 React 团队提出的一种新的组件模型，允许组件在服务器端渲染并将结果流式传输到客户端。

## 核心优势

1. **零客户端 JS Bundle**：Server Components 不会向客户端发送任何 JavaScript
2. **直接数据访问**：可以直接访问数据库、文件系统等服务端资源
3. **流式渲染**：支持 Suspense，可以逐步流式传输 UI

## 实践示例

\`\`\`jsx
// app/page.jsx - 这是一个 Server Component
async function BlogPage() {
  const posts = await db.posts.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  })

  return (
    <div>
      <h1>最新文章</h1>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.summary}</p>
        </article>
      ))}
    </div>
  )
}
\`\`\`

## 总结

RSC 代表了 React 应用架构的未来方向，理解其工作原理和最佳实践对开发现代 Web 应用至关重要。
    `,date:"2024-10-22",category:"React",tags:["React","RSC","Next.js","SSR","前端"],readTime:"14 分钟",views:1560,likes:198},{id:"microservices-architecture",title:"微服务架构设计：从单体到分布式的演进之路",summary:"以实际项目为例，讲解如何将单体应用拆分为微服务架构，涵盖服务发现、API 网关、熔断器、分布式事务等核心概念。",content:`
# 微服务架构设计：从单体到分布式的演进之路

## 架构演进

### 单体架构的问题

随着业务增长，单体架构面临以下挑战：
- 部署耦合：一个小改动需要重新部署整个应用
- 技术栈锁定：整个应用必须使用相同的技术栈
- 扩展困难：无法针对瓶颈模块单独扩展

### 微服务的优势

\`\`\`
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  用户服务    │    │  订单服务    │    │  支付服务    │
│  (Node.js)  │    │  (Go)       │    │  (Python)   │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                  │                  │
       └──────────────────┼──────────────────┘
                          │
                   ┌──────┴──────┐
                   │   API 网关   │
                   │  (Kong)     │
                   └─────────────┘
\`\`\`

## 服务发现

\`\`\`javascript
// 使用 Consul 进行服务注册
const consul = require('consul')()

await consul.agent.service.register({
  name: 'user-service',
  address: '10.0.1.10',
  port: 3000,
  check: {
    http: 'http://10.0.1.10:3000/health',
    interval: '10s'
  }
})
\`\`\`

## 熔断器模式

\`\`\`javascript
const CircuitBreaker = require('opossum')

const breaker = new CircuitBreaker(fetchUserData, {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 30000
})

breaker.fallback(() => ({ name: '默认用户', cached: true }))
\`\`\`

## 总结

微服务不是银弹，需要根据团队规模、业务复杂度和技术能力来决定是否采用。合理的服务划分和治理策略是成功的关键。
    `,date:"2024-10-05",category:"架构",tags:["微服务","架构设计","Node.js","Go","分布式"],readTime:"18 分钟",views:2780,likes:231},{id:"web-performance-optimization",title:"Web 性能优化实战：从 Lighthouse 60 分到 95 分",summary:"完整的性能优化流程，包括首屏加载优化、图片懒加载、代码分割、缓存策略、预渲染等关键技术。",content:`
# Web 性能优化实战：从 Lighthouse 60 分到 95 分

## 性能指标

Google Core Web Vitals 三大核心指标：
- **LCP** (Largest Contentful Paint)：最大内容绘制 < 2.5s
- **FID** (First Input Delay)：首次输入延迟 < 100ms
- **CLS** (Cumulative Layout Shift)：累积布局偏移 < 0.1

## 优化策略

### 1. 代码分割

\`\`\`javascript
// 路由级别的代码分割
const routes = [
  {
    path: '/dashboard',
    component: () => import('./views/Dashboard.vue')
  },
  {
    path: '/profile',
    component: () => import('./views/Profile.vue')
  }
]
\`\`\`

### 2. 图片优化

\`\`\`html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.jpg" alt="Hero" loading="lazy" decoding="async"
       width="1200" height="600">
</picture>
\`\`\`

### 3. 资源预加载

\`\`\`html
<link rel="preload" href="/fonts/inter.woff2" as="font" crossorigin>
<link rel="preconnect" href="https://api.example.com">
\`\`\`

## 总结

性能优化是一个持续的过程，需要结合 Lighthouse 审计、真实用户监控 (RUM) 和 A/B 测试来持续改进。
    `,date:"2024-09-18",category:"性能优化",tags:["性能优化","Lighthouse","Web Vitals","前端"],readTime:"11 分钟",views:4200,likes:356},{id:"tailwindcss-4-guide",title:"TailwindCSS 4.0 新特性完全指南",summary:"深入解析 TailwindCSS 4.0 的重大更新，包括新的引擎架构、零配置支持、CSS-first 配置方式以及性能提升。",content:`
# TailwindCSS 4.0 新特性完全指南

## 前言

TailwindCSS 4.0 是一次重大的版本升级，从引擎架构到配置方式都进行了全面革新。

## CSS-first 配置

\`\`\`css
/* 以前在 tailwind.config.js 中配置 */
/* 现在直接在 CSS 中使用 @theme */
@theme {
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --font-sans: 'Inter', sans-serif;
}
\`\`\`

## 零配置支持

不再需要 \`content\` 配置，Tailwind 4.0 会自动检测项目中的模板文件：

\`\`\`css
@import "tailwindcss";
/* 就这么简单！*/
\`\`\`

## 性能提升

- 构建速度提升 10 倍以上
- 增量编译支持
- 更小的生产包体积

## 总结

TailwindCSS 4.0 代表了 CSS 框架的未来方向，更简洁、更快速、更强大。
    `,date:"2025-03-10",category:"CSS",tags:["TailwindCSS","CSS","前端","设计系统"],readTime:"8 分钟",views:1890,likes:145},{id:"rust-web-development",title:"Rust Web 开发入门：使用 Actix-web 构建高性能 API",summary:"从零开始学习 Rust Web 开发，使用 Actix-web 框架构建 RESTful API，探索 Rust 在 Web 领域的性能优势。",content:`
# Rust Web 开发入门：使用 Actix-web 构建高性能 API

## 为什么选择 Rust

Rust 提供了零成本抽象、内存安全和极致性能，非常适合构建高性能 Web 服务。

## Hello World

\`\`\`rust
use actix_web::{web, App, HttpServer, HttpResponse};

async fn hello() -> HttpResponse {
    HttpResponse::Ok().json(serde_json::json!({
        "message": "Hello, World!"
    }))
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(hello))
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
\`\`\`

## 性能对比

在 TechEmpower 基准测试中，Actix-web 的 QPS 可达 700,000+，远超 Node.js 和 Python。

## 总结

Rust Web 开发虽然学习曲线较陡，但带来的性能收益和安全性保障是值得的。
    `,date:"2025-02-20",category:"Rust",tags:["Rust","Actix-web","API","高性能"],readTime:"15 分钟",views:2100,likes:178},{id:"vue3-pinia-state-management",title:"Pinia 状态管理最佳实践：从入门到精通",summary:"全面掌握 Vue 3 推荐的状态管理方案 Pinia，包括 Store 设计模式、插件系统、SSR 支持和性能优化。",content:`
# Pinia 状态管理最佳实践：从入门到精通

## Pinia vs Vuex

Pinia 是 Vue 官方推荐的新一代状态管理库，相比 Vuex 有更好的 TypeScript 支持和更简洁的 API。

## 定义 Store

\`\`\`javascript
// stores/user.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const isLoggedIn = computed(() => !!user.value)

  async function login(credentials) {
    const data = await api.login(credentials)
    user.value = data
  }

  function logout() {
    user.value = null
  }

  return { user, isLoggedIn, login, logout }
})
\`\`\`

## Store 组合

\`\`\`javascript
export const useCartStore = defineStore('cart', () => {
  const userStore = useUserStore()
  const items = ref([])

  const total = computed(() =>
    items.value.reduce((sum, item) => sum + item.price, 0)
  )

  return { items, total }
})
\`\`\`

## 总结

Pinia 简洁而强大，是 Vue 3 项目的最佳状态管理选择。
    `,date:"2025-01-15",category:"Vue.js",tags:["Vue3","Pinia","状态管理","TypeScript"],readTime:"10 分钟",views:3500,likes:290},{id:"nextjs-15-app-router",title:"Next.js 15 App Router 深度实战",summary:"全面解析 Next.js 15 的 App Router 架构，包括 Server Components、Server Actions、流式渲染和缓存策略。",content:`
# Next.js 15 App Router 深度实战

## App Router 核心概念

\`\`\`
app/
├── layout.tsx        # 根布局
├── page.tsx          # 首页
├── loading.tsx       # 加载状态
├── error.tsx         # 错误处理
└── blog/
    ├── layout.tsx    # 博客布局
    ├── page.tsx      # 博客列表
    └── [slug]/
        └── page.tsx  # 文章详情
\`\`\`

## Server Actions

\`\`\`typescript
// app/actions.ts
'use server'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
  await db.posts.create({ data: { title } })
  revalidatePath('/blog')
}
\`\`\`

## 流式渲染与 Suspense

\`\`\`tsx
export default function BlogPage() {
  return (
    <Suspense fallback={<Skeleton />}>
      <BlogPosts />
    </Suspense>
  )
}
\`\`\`

## 总结

App Router 代表了全栈 React 开发的未来，合理使用可以构建出极致性能的 Web 应用。
    `,date:"2024-12-28",category:"React",tags:["Next.js","React","SSR","App Router"],readTime:"13 分钟",views:2800,likes:215},{id:"ai-coding-assistants-2025",title:"2025 年 AI 编程助手全面评测与实战对比",summary:"深度评测 GitHub Copilot、Cursor、Claude、ChatGPT 等主流 AI 编程工具，分享在实际开发中的使用技巧和最佳实践。",content:`
# 2025 年 AI 编程助手全面评测与实战对比

## 工具概览

| 工具 | 类型 | 优势 |
|------|------|------|
| GitHub Copilot | IDE 插件 | 上下文感知、补全精准 |
| Cursor | 独立 IDE | 全项目理解、代码生成 |
| Claude | API/网页 | 复杂推理、长上下文 |
| ChatGPT | API/网页 | 通用能力强 |

## 实战场景对比

### 场景 1：从零构建 API

\`\`\`javascript
// 使用 AI 助手生成的 Express 路由
app.get('/api/users', authenticate, async (req, res) => {
  const { page = 1, limit = 20 } = req.query
  const users = await User.find()
    .skip((page - 1) * limit)
    .limit(limit)
  res.json({ users, total: await User.countDocuments() })
})
\`\`\`

### 场景 2：代码审查与重构

AI 助手可以识别代码异味并提供重构建议。

## 最佳实践

1. 将 AI 作为协作伙伴而非替代品
2. 始终审查生成的代码
3. 提供清晰的上下文和需求

## 总结

AI 编程助手是开发效率的倍增器，但掌握核心编程能力仍然不可替代。
    `,date:"2025-01-05",category:"AI",tags:["AI","Copilot","Cursor","开发工具"],readTime:"16 分钟",views:5600,likes:420},{id:"docker-compose-microservices",title:"Docker Compose 编排微服务：本地开发环境最佳实践",summary:"使用 Docker Compose 统一管理多服务开发环境，包含数据库、缓存、消息队列等基础设施的完整配置方案。",content:`
# Docker Compose 编排微服务：本地开发环境最佳实践

## 完整编排示例

\`\`\`yaml
version: '3.8'
services:
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/app
      - REDIS_URL=redis://cache:6379
    depends_on:
      db:
        condition: service_healthy
      cache:
        condition: service_started
    volumes:
      - ./api:/app
      - /app/node_modules

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: app
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 5s
      timeout: 5s
      retries: 5

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  mq:
    image: rabbitmq:3-management
    ports:
      - "5672:5672"
      - "15672:15672"

volumes:
  pgdata:
\`\`\`

## 开发工作流

\`\`\`bash
# 启动所有服务
docker compose up -d

# 查看日志
docker compose logs -f api

# 重建某个服务
docker compose up -d --build api
\`\`\`

## 总结

Docker Compose 让本地开发环境变得一致且可复现，大幅减少"在我机器上能跑"的问题。
    `,date:"2024-11-20",category:"DevOps",tags:["Docker","Compose","微服务","开发环境"],readTime:"12 分钟",views:1950,likes:165}],Se=[{id:"cloud-music",name:"CloudMusic 云音乐播放器",description:"基于 Vue 3 + TypeScript 开发的在线音乐播放器，支持歌词同步、播放列表管理、个性化推荐等功能。采用 Pinia 状态管理，后端使用 Node.js + MongoDB。",techStack:["Vue 3","TypeScript","Pinia","Node.js","MongoDB","WebSocket"],cover:"https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",demo:"https://demo.example.com/cloud-music",github:"https://github.com/alexchen/cloud-music",featured:!0},{id:"task-flow",name:"TaskFlow 任务管理平台",description:"企业级项目管理工具，支持看板视图、甘特图、团队协作、实时通知。使用 React + Next.js 构建，集成 WebSocket 实时通信和 Redis 缓存。",techStack:["React","Next.js","Prisma","PostgreSQL","Redis","WebSocket"],cover:"https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",demo:"https://demo.example.com/task-flow",github:"https://github.com/alexchen/task-flow",featured:!0},{id:"ai-chat-assistant",name:"AI Chat Assistant",description:"基于大语言模型的智能对话助手，支持多轮对话、上下文记忆、流式输出。使用 Go 构建高性能后端，前端采用 React + TailwindCSS。",techStack:["React","Go","OpenAI API","gRPC","Docker","Kubernetes"],cover:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",demo:"https://demo.example.com/ai-chat",github:"https://github.com/alexchen/ai-chat-assistant",featured:!0},{id:"devops-dashboard",name:"DevOps 监控面板",description:"实时监控服务器状态、CI/CD 流水线、日志分析的统一面板。支持自定义告警规则、多数据源聚合查询。使用 ECharts 进行数据可视化。",techStack:["Vue 3","ECharts","Go","Prometheus","Grafana","Docker"],cover:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",demo:"https://demo.example.com/devops-dash",github:"https://github.com/alexchen/devops-dashboard",featured:!1},{id:"ecommerce-platform",name:"ShopNext 电商平台",description:"全栈电商解决方案，包含商品管理、购物车、订单系统、支付集成。采用 Next.js SSR 优化 SEO，Stripe 集成支付，支持多语言国际化。",techStack:["Next.js","TypeScript","Stripe","Prisma","PostgreSQL","AWS S3"],cover:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",demo:"https://demo.example.com/shop-next",github:"https://github.com/alexchen/shop-next",featured:!1},{id:"blog-cms",name:"Headless Blog CMS",description:"无头博客 CMS 系统，提供 RESTful API 和 GraphQL 接口，支持 Markdown 编辑、标签分类、SEO 优化。管理后台使用 Ant Design。",techStack:["Nuxt.js","Ant Design","GraphQL","Node.js","MongoDB","Redis"],cover:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",demo:"https://demo.example.com/blog-cms",github:"https://github.com/alexchen/blog-cms",featured:!1},{id:"real-time-collab",name:"RealSync 实时协作文档",description:"基于 CRDT 算法的实时协作文档编辑器，支持多人同时编辑、光标追踪、版本历史回溯。使用 WebSocket 和 OT 算法实现毫秒级同步。",techStack:["Vue 3","TypeScript","Yjs","WebSocket","Node.js","Redis"],cover:"https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",demo:"https://demo.example.com/realsync",github:"https://github.com/alexchen/real-sync",featured:!0},{id:"video-streaming",name:"StreamHub 视频流媒体平台",description:"全栈视频流媒体平台，支持视频上传、转码、HLS 自适应码率播放、弹幕互动。使用 FFmpeg 转码和 CDN 加速分发。",techStack:["React","Go","FFmpeg","HLS","PostgreSQL","MinIO"],cover:"https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",demo:"https://demo.example.com/streamhub",github:"https://github.com/alexchen/stream-hub",featured:!1},{id:"smart-iot",name:"SmartHome IoT 控制中心",description:"智能家居 IoT 控制平台，支持设备管理、自动化场景、实时数据监控。使用 MQTT 协议通信，Grafana 可视化数据面板。",techStack:["Next.js","MQTT","Python","InfluxDB","Grafana","Docker"],cover:"https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",demo:"https://demo.example.com/smart-home",github:"https://github.com/alexchen/smart-home-iot",featured:!1},{id:"data-pipeline",name:"DataFlow 数据处理流水线",description:"可视化数据 ETL 流水线平台，支持拖拽式构建数据处理流程，内置 50+ 数据转换组件，支持定时调度和实时监控。",techStack:["Vue 3","Python","Apache Airflow","ClickHouse","Redis","Docker"],cover:"https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",demo:"https://demo.example.com/dataflow",github:"https://github.com/alexchen/data-flow",featured:!1}],we={education:[{school:"华南理工大学",degree:"计算机科学与技术 · 硕士",period:"2017 - 2020",gpa:"GPA 3.8/4.0"},{school:"武汉大学",degree:"软件工程 · 学士",period:"2013 - 2017",gpa:"GPA 3.6/4.0"}],experience:[{company:"字节跳动",role:"高级前端开发工程师",period:"2022 - 至今",highlights:["主导抖音创作者平台前端架构重构，性能提升 40%","设计并实现微前端框架，支撑 20+ 子应用协同运行","建立前端监控体系，错误率降低 60%","指导初级开发者，提升团队整体代码质量"]},{company:"腾讯",role:"全栈开发工程师",period:"2020 - 2022",highlights:["负责微信小程序开发框架的维护和优化","设计并实现高性能 Node.js BFF 层，QPS 达到 5000+","推动团队 TypeScript 迁移，覆盖率从 0% 提升到 85%","参与开源项目贡献，获得 2000+ GitHub Stars"]}],skills:{languages:["JavaScript/TypeScript","Python","Go","SQL"],frontend:["Vue.js (Expert)","React (Expert)","Next.js","Nuxt.js","TailwindCSS"],backend:["Node.js","Express","NestJS","Gin","FastAPI"],database:["PostgreSQL","MongoDB","Redis","MySQL"],devops:["Docker","Kubernetes","AWS","CI/CD","Nginx"],tools:["Git","Linux","VS Code","Figma","Postman"]},certifications:["AWS Solutions Architect Associate","Google Cloud Professional Cloud Developer","Kubernetes Certified Application Developer (CKAD)"]},$=(c,i)=>{const a=c.__vccOpts||c;for(const[l,t]of i)a[l]=t;return a},Y={class:"min-h-screen flex flex-col"},z={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between h-16"},X={class:"hidden md:flex items-center gap-1"},Z={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},ee={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},te={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},oe={key:0,class:"md:hidden bg-cyber-surface/95 backdrop-blur-lg border-b border-cyber-border"},re={class:"px-4 py-3 space-y-1"},se={key:1,class:"border-t border-cyber-border bg-cyber-surface/50"},ae={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"},ie={class:"grid grid-cols-1 md:grid-cols-3 gap-8"},ne={class:"space-y-2"},ce={class:"space-y-2 text-sm text-cyber-muted"},pe={class:"flex gap-3 mt-3"},le=["href"],de={class:"flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cyber-muted"},ue={__name:"App",setup(c){const i=W(),a=H(),l=A(!1),t=A(!1),s=A(!1),d=G(()=>i.path==="/login"),x=[{path:"/",label:"首页"},{path:"/articles",label:"技术文章"},{path:"/projects",label:"项目展示"},{path:"/resume",label:"个人简历"}];function R(w){return w==="/"?i.path==="/":i.path.startsWith(w)}function S(){l.value=window.scrollY>20,s.value=window.scrollY>400}function N(){window.scrollTo({top:0,behavior:"smooth"})}function D(){localStorage.removeItem("blog_logged_in"),a.push("/login")}return V(()=>i.path,()=>{t.value=!1}),O(()=>{window.addEventListener("scroll",S,{passive:!0}),S()}),M(()=>{window.removeEventListener("scroll",S)}),(w,o)=>{const f=j("router-link"),E=j("router-view");return n(),p("div",Y,[d.value?v("",!0):(n(),p("nav",{key:0,class:y(["fixed top-0 left-0 right-0 z-50 transition-all duration-300",l.value?"bg-cyber-bg/90 backdrop-blur-lg border-b border-cyber-border shadow-lg shadow-cyber-primary/5":"bg-transparent"])},[e("div",z,[e("div",J,[u(f,{to:"/",class:"flex items-center gap-2 group"},{default:m(()=>[...o[2]||(o[2]=[e("div",{class:"w-8 h-8 rounded-lg bg-cyber-primary/20 border border-cyber-primary/40 flex items-center justify-center group-hover:bg-cyber-primary/30 transition-colors"},[e("span",{class:"text-cyber-primary font-display text-sm font-bold"},h("</>"))],-1),e("span",{class:"font-display text-lg font-bold tracking-wider text-cyber-text group-hover:text-cyber-primary transition-colors"},[b(" TECH"),e("span",{class:"text-cyber-primary"},"BLOG")],-1)])]),_:1}),e("div",X,[(n(),p(k,null,C(x,r=>u(f,{key:r.path,to:r.path,class:y(["px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300",R(r.path)?"text-cyber-primary bg-cyber-primary/10 border border-cyber-primary/30":"text-cyber-muted hover:text-cyber-primary hover:bg-cyber-primary/5"])},{default:m(()=>[b(h(r.label),1)]),_:2},1032,["to","class"])),64)),e("button",{onClick:D,class:"px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 border border-cyber-accent/40 text-cyber-accent hover:bg-cyber-accent/10 ml-1"}," 退出登录 ")]),e("button",{class:"md:hidden p-2 rounded-lg text-cyber-muted hover:text-cyber-primary hover:bg-cyber-primary/10 transition-colors",onClick:o[0]||(o[0]=r=>t.value=!t.value),"aria-label":"Toggle menu"},[(n(),p("svg",Z,[t.value?(n(),p("path",te)):(n(),p("path",ee))]))])])]),u(_,{name:"slide-down"},{default:m(()=>[t.value?(n(),p("div",oe,[e("div",re,[(n(),p(k,null,C(x,r=>u(f,{key:r.path,to:r.path,class:y(["block px-4 py-2.5 rounded-lg text-sm font-medium transition-all",R(r.path)?"text-cyber-primary bg-cyber-primary/10":"text-cyber-muted hover:text-cyber-primary hover:bg-cyber-primary/5"]),onClick:o[1]||(o[1]=ge=>t.value=!1)},{default:m(()=>[b(h(r.label),1)]),_:2},1032,["to","class"])),64)),e("button",{onClick:D,class:"block w-full px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-cyber-accent border border-cyber-accent/30 mt-2 text-center"}," 退出登录 ")])])):v("",!0)]),_:1})],2)),e("main",{class:y(d.value?"":"pt-16")},[u(E,null,{default:m(({Component:r})=>[u(_,{name:"fade",mode:"out-in"},{default:m(()=>[(n(),U(F(r)))]),_:2},1024)]),_:1})],2),d.value?v("",!0):(n(),p("footer",se,[e("div",ae,[e("div",ie,[o[5]||(o[5]=B('<div data-v-59ed1caf><div class="flex items-center gap-2 mb-4" data-v-59ed1caf><div class="w-8 h-8 rounded-lg bg-cyber-primary/20 border border-cyber-primary/40 flex items-center justify-center" data-v-59ed1caf><span class="text-cyber-primary font-display text-sm font-bold" data-v-59ed1caf>&lt;/&gt;</span></div><span class="font-display text-lg font-bold tracking-wider" data-v-59ed1caf> TECH<span class="text-cyber-primary" data-v-59ed1caf>BLOG</span></span></div><p class="text-cyber-muted text-sm leading-relaxed" data-v-59ed1caf> 探索前沿技术，分享开发经验，构建更好的数字世界。 </p></div>',1)),e("div",null,[o[3]||(o[3]=e("h3",{class:"font-display text-sm font-semibold tracking-wider uppercase text-cyber-text mb-4"},"快速链接",-1)),e("div",ne,[(n(),p(k,null,C(x,r=>u(f,{key:r.path,to:r.path,class:"block text-sm text-cyber-muted hover:text-cyber-primary transition-colors"},{default:m(()=>[b(h(r.label),1)]),_:2},1032,["to"])),64))])]),e("div",null,[o[4]||(o[4]=e("h3",{class:"font-display text-sm font-semibold tracking-wider uppercase text-cyber-text mb-4"},"联系方式",-1)),e("div",ce,[e("p",null,"📧 "+h(P(T).email),1),e("p",null,"📍 "+h(P(T).location),1),e("div",pe,[e("a",{href:P(T).github,target:"_blank",class:"text-cyber-muted hover:text-cyber-primary transition-colors"},"GitHub",8,le)])])])]),o[7]||(o[7]=e("div",{class:"glow-line my-8"},null,-1)),e("div",de,[e("p",null,"© "+h(new Date().getFullYear())+" TechBlog. All rights reserved.",1),o[6]||(o[6]=e("p",{class:"font-mono text-xs"},[b(" Built with "),e("span",{class:"text-cyber-primary"},"Vue 3"),b(" + "),e("span",{class:"text-cyber-secondary"},"TailwindCSS")],-1))])])])),u(_,{name:"fade"},{default:m(()=>[s.value&&!d.value?(n(),p("button",{key:0,onClick:N,class:"fixed bottom-8 right-8 z-40 w-12 h-12 rounded-xl bg-cyber-surface/80 backdrop-blur-md border border-cyber-border hover:border-cyber-primary/50 text-cyber-primary flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-cyber-primary/20 hover:-translate-y-1","aria-label":"返回顶部"},[...o[8]||(o[8]=[e("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 10l7-7m0 0l7 7m-7-7v18"})],-1)])])):v("",!0)]),_:1})])}}},me=$(ue,[["__scopeId","data-v-59ed1caf"]]),he=[{path:"/",name:"Home",component:()=>g(()=>import("./Home-raZ2-QtH.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),meta:{title:"首页"}},{path:"/articles",name:"Articles",component:()=>g(()=>import("./Articles-Cv2y94OC.js"),__vite__mapDeps([6,1,2,3,4,7]),import.meta.url),meta:{title:"技术文章"}},{path:"/article/:id",name:"ArticleDetail",component:()=>g(()=>import("./ArticleDetail-xBE7J9O8.js"),__vite__mapDeps([8,1,9,4,3,10]),import.meta.url),meta:{title:"文章详情"}},{path:"/projects",name:"Projects",component:()=>g(()=>import("./Projects-DWtWy1db.js"),__vite__mapDeps([11,2,1,3,4]),import.meta.url),meta:{title:"项目展示"}},{path:"/resume",name:"Resume",component:()=>g(()=>import("./Resume-BbQc3jFq.js"),__vite__mapDeps([12,3,4,2,1]),import.meta.url),meta:{title:"个人简历"}},{path:"/login",name:"Login",component:()=>g(()=>import("./Login-BdCbFQ60.js"),__vite__mapDeps([13,1,3,4,14]),import.meta.url),meta:{title:"登录"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>g(()=>import("./NotFound-DO3BNzGc.js"),__vite__mapDeps([15,1,3,4]),import.meta.url),meta:{title:"页面未找到"}}],I=K({history:Q(),routes:he,scrollBehavior(c,i,a){return c.hash?{el:c.hash,behavior:"smooth",top:80}:a||{top:0,behavior:"smooth"}}});I.beforeEach((c,i,a)=>{document.title=`${c.meta.title||"页面"} | TechBlog`;const l=localStorage.getItem("blog_logged_in")==="true";c.path!=="/login"&&!l?a("/login"):c.path==="/login"&&l?a("/"):a()});const L=q(me);L.use(I);L.mount("#app");export{$ as _,xe as a,Se as b,T as p,we as r,ve as t};
