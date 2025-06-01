---
title: "欢迎来到 Blowfish"
weight: 1
draft: false
description: "探索 Blowfish 2.0版本的新功能。"
tags: ["新手", "文档"]
series: ["部署教程"]
series_order: 1
---

{{< lead >}}
Blowfish 包含了大量的特色功能。
{{< /lead >}}

Blowfish 的是一个简单且轻量级的主题，源自于 [Blowfish](https://blowfish.page/)，没有 Blowfish 就不会有 Blowfish。

Blowfish 主要进行了缩减、重构和功能强化。

## 特色

- 支持多语言
- 支持 RTL 语言
- 自动优化调整图片大小，原生支援响应式图片
- 无须配置的站内搜索

除了这些 Blowfish 原有的特色以外，Blowfish 主要优化了以下项目：

- 幾乎所有常見 element 都加上 class

比如說在 Blowfish 要寫出指定標題的 CSS，因為只有 tailwind 語法所以要這樣指定：

```css
.decoration-primary-500,
.group-hover\:decoration-primary-500 {
  text-decoration: none;
}
```

現在我們只需要

```css
.article-title {
  text-decoration: none;
}
```

- 新增了用于专注模式的佈局
- 重新设计的设定档，避免名称交叠
- 使用新版的 Hugo template 架构
- 完全重构的 layouts 目录，根据使用直觉和扩展性设计，修改不再需要从茫茫大海中寻找档案
- 主要元件加上 class 名称方便 CSS selector 指定
- 改用 CDN，不再依赖本地 lib 更新，客製化更容易
- 轻量化的储存库，克隆大小仅有 Blowfish 的 2%
- 重新设计的文档内容，理解更轻松
- 大量错误修正
