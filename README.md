# TechBlog - 个人技术博客

一个基于 Vue 3 构建的赛博朋克风格个人技术博客，支持登录认证、文章管理、项目展示和简历导出。

## ✨ 功能特性

- 🔐 **登录系统** — 粒子动画登录页，路由守卫保护
- 📝 **12 篇技术文章** — Markdown 渲染、代码高亮、搜索筛选
- 📦 **10 个项目展示** — 精选筛选、封面图、GitHub/Demo 链接
- 📋 **个人简历** — 时间线展示、技能图谱、PDF 导出
- 🎨 **赛博朋克主题** — 玻璃拟态、霓虹光效、滚动动画
- 📱 **响应式设计** — 完美适配桌面端和移动端
- ⬆️ **返回顶部** — 滚动自动显示/隐藏

## 🚀 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📂 项目结构

```
tech-blog/
├── public/                  # 静态资源
│   └── avatar.jpg           # 头像图片
├── src/
│   ├── App.vue              # 主组件（导航、页脚、返回顶部）
│   ├── main.js              # 入口文件
│   ├── style.css            # 全局样式 + TailwindCSS
│   ├── router/index.js      # 路由配置 + 登录守卫
│   ├── data/index.js        # 文章、项目、简历数据
│   ├── composables/         # 可复用逻辑
│   │   └── useScrollAnimation.js
│   └── views/               # 页面组件
│       ├── Home.vue         # 首页
│       ├── Articles.vue     # 文章列表
│       ├── ArticleDetail.vue # 文章详情
│       ├── Projects.vue     # 项目展示
│       ├── Resume.vue       # 个人简历
│       ├── Login.vue        # 登录/注册
│       └── NotFound.vue     # 404 页面
├── dist/                    # 构建产物（可直接打开）
├── start.bat                # Windows 一键启动脚本
└── vite.config.js           # Vite 配置
```

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| Vue 3 | 前端框架 |
| Vue Router | 路由管理 |
| TailwindCSS | 样式框架 |
| Marked | Markdown 渲染 |
| highlight.js | 代码高亮 |
| html2pdf.js | PDF 简历导出 |
| Vite | 构建工具 |

## 📖 文章列表

1. Vue 3 Composition API 深度解析与实战指南
2. Docker + Kubernetes 从零部署 Node.js 应用
3. TypeScript 高级类型体操与设计模式实战
4. React Server Components 原理与实践
5. 微服务架构设计：从单体到分布式的演进之路
6. Web 性能优化实战：从 Lighthouse 60 分到 95 分
7. TailwindCSS 4.0 新特性完全指南
8. Rust Web 开发入门：使用 Actix-web 构建高性能 API
9. Pinia 状态管理最佳实践：从入门到精通
10. Next.js 15 App Router 深度实战
11. 2025 年 AI 编程助手全面评测与实战对比
12. Docker Compose 编排微服务：本地开发环境最佳实践


## 🎯 自定义

修改 `src/data/index.js` 即可更新：
- 个人信息（姓名、邮箱、GitHub 等）
- 文章内容（支持 Markdown）
- 项目信息
- 简历数据

修改后运行 `npm run build` 重新构建。

## 📄 License

MIT License
