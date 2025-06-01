---
title: "简码"
weight: 6
draft: false
description: "所有 Blowfish 中可用的简码"
slug: "shortcodes"
tags: ["简码", "mermaid", "图标", "lead", "docs"]
series: ["部署教程"]
series_order: 8
useKatex: true
---

# Hugo Shortcodes 文档

除了 [Hugo 标准短代码](https://gohugo.io/content-management/shortcodes/)之外，Blowfish 还提供了额外功能来增强您的内容。每个部分按使用频率排序。

## 视觉功能

这些短代码让您的 markdown 内容更加生动和互动。

### Hint

`hint` 短代码创建风格化的提示块，类似于 [Docusaurus 警告](https://docusaurus.io/docs/markdown-features/admonitions)。每个提示都会根据类型显示不同的颜色和图标。

| 参数      | 描述                                                                                  |
| --------- | ------------------------------------------------------------------------------------ |
| `type`    | 可选。提示样式：`note`、`tip`、`info`、`warning`、`danger`。默认为 `tip`。             |
| `title`   | 可选。自定义标题文本。未指定时使用首字母大写的类型。                                     |

**用法：**

```markdown
{{</* hint note */>}}
This is a note.
{{</* /hint */>}}

{{</* hint info */>}}
This is a info.
{{</* /hint */>}}

{{</* hint tip "Helpful Tip" */>}}
This is a helpful tip.
{{</* /hint */>}}

{{</* hint warning "Warning" */>}}
This is a warning message.
{{</* /hint */>}}

{{</* hint danger "Danger" */>}}
This is a danger alert.
{{</* /hint */>}}
```

{{< hint note >}}
This is a note.
{{< /hint >}}

{{< hint info >}}
This is a info.
{{< /hint >}}

{{< hint tip "My Title" >}}
This is a tip with custom title.
{{< /hint >}}

{{< hint warning "Warning" >}}
This is a warning message.
{{< /hint >}}

{{< hint danger "Danger" >}}
This is a danger alert.
{{< /hint >}}

### Figure

`figure` 短代码提供比基本 Markdown 语法更好的图片控制——支持标题、自定义样式、宽度调整和链接包装。

Blowfish 在保持完全兼容性的同时，通过优化性能增强了 Hugo 内置的 `figure` 短代码。与其他限制功能来实现优化的主题不同，Blowfish 无缝保留了所有原生功能。

完整参数请参见 [Hugo 文档](https://gohugo.io/shortcodes/figure/)。常用选项包括：

| 参数      | 描述                                                                                  |
| --------- | ------------------------------------------------------------------------------------ |
| `src`     | **必需。** 图片路径或 URL。搜索顺序：页面资源、`assets/`、然后是 `static/`。           |
| `alt`     | 用于无障碍和 SEO 的替代文本。                                                         |
| `href`    | 使图片可点击，链接到此地址。                                                         |
| `target`  | 链接目标（如 `_blank` 表示新标签页）。                                               |
| `caption` | 图片下方的文本。支持 Markdown 格式。                                                 |
| `class`   | 额外的 CSS 类。                                                                      |

**示例：**

```md
{{</* figure
    src="abstract.jpg"
    alt="抽象紫色艺术作品"
    caption="照片由 [Jr Korpa](https://unsplash.com/@jrkorpa) 拍摄，来自 [Unsplash](https://unsplash.com/)"
    */>}}

<!-- 标准 Markdown（无需额外功能时使用） -->
![抽象紫色艺术作品](abstract.jpg "照片由 [Jr Korpa](https://unsplash.com/@jrkorpa) 拍摄，来自 [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="Abstract purple artwork" caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)" >}}

### Slide

`slide` shortcode 提供一个带有左右按钮和可滑动的图片轮播组件。你可以逐行定义 `src` 与对应的 `caption`，或者使用 `dir=` 一次性导入整个目录。

```md
{{</* slide */>}}
width=90%
<img src="gallery/01.jpg" alt="同一文件夹内的图片">
<img src="https://cdn.zsl0621.cc/2025/docs/background-shell---2025-04-27T16-41-14.webp" alt="远程图片">
<img src="/img/lagerstroemia-ryan-lee.jpg" alt="assets目录中的图片">
{{</* /slide */>}}
```

{{< slide >}}
width=90%
<img src="gallery/01.jpg" alt="同一文件夹内的图片">
<img src="https://cdn.zsl0621.cc/2025/docs/background-shell---2025-04-27T16-41-14.webp" alt="远程图片">
<img src="/img/lagerstroemia-ryan-lee.jpg" alt="assets目录中的图片">
{{< /slide >}}

**示例 2：目录加载**

```md
{{</* slide */>}}
width=100%
dir=gallery
caption=图片一
{{</* /slide */>}}
```

{{< slide >}}
width=100%
dir=gallery
caption=图片一
{{< /slide >}}

### Gallery

`gallery` 短代码在响应式、灵活的布局中显示多张图片。

使用带有 `class="grid-wXX"` 的 `img` 标签来控制列宽。可用宽度从 10% 到 100%，以 5% 为步长（如 `grid-w65` 表示 65%）。特殊类 `grid-w33` 和 `grid-w66` 支持 3 列布局。结合 Tailwind 响应式前缀实现自适应网格。

**示例 1：基础画廊**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" alt="gallery-01" />
  <img src="gallery/02.jpg" class="grid-w33" alt="gallery-02" />
  <img src="gallery/03.jpg" class="grid-w33" alt="gallery-03" />
  <img src="gallery/04.jpg" class="grid-w33" alt="gallery-04" />
  <img src="gallery/05.jpg" class="grid-w33" alt="gallery-05" />
  <img src="gallery/06.jpg" class="grid-w33" alt="gallery-06" />
  <img src="gallery/07.jpg" class="grid-w33" alt="gallery-07" />
{{< /gallery >}}

**示例 2：响应式画廊**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" alt="gallery-01" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" alt="gallery-02" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" alt="gallery-03" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" alt="gallery-04" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" alt="gallery-05" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" alt="gallery-06" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w33 xl:grid-w25" alt="gallery-07" />
{{< /gallery >}}

### KaTeX

在内容中渲染数学表达式。

在页面前置数据中添加 `useKatex: true` 来启用数学支持。使用 `\(` 和 `\)` 表示行内表达式，或使用 `$$` 分隔符表示块级方程。

**行内数学：**

```md
这是一个行内方程 \(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

这是一个行内方程 \(f(a,b,c) = (a^2+b^2+c^2)^3\)

**块级数学：**

```latex
$$
\begin{align}
&h_{\text{LOS}} &&= e^{(j2\pi\mathcal{N}(1,1))} \newline
&h_{\text{NLOS}} &&= \mathcal{CN}(0, \sigma^2)
\end{align}
$$
```

$$
\begin{align}
&h_{\text{LOS}} &&= e^{(j2\pi\mathcal{N}(1,1))} \newline
&h_{\text{NLOS}} &&= \mathcal{CN}(0, \sigma^2)
\end{align}
$$

更多示例请参见[数学符号示例]({{< ref "mathematical-notation" >}})页面。

### Mermaid

使用基于文本的语法创建图表。遵循 Hugo 的方法，无需短代码包装器——直接使用围栏代码块。

**示例：**

`````txt
```mermaid
graph LR;
A[柠檬]-->B[柠檬汁];
B-->C[利润]
```
`````

```mermaid
graph LR;
A[柠檬]-->B[柠檬汁];
B-->C[利润]
```

查看 [Mermaid 官方文档](https://mermaid-js.github.io/)了解语法详情和图表类型。更多示例请参见[图表和流程图示例]({{< ref "diagrams-flowcharts" >}})页面。

### Chart

使用 Chart.js 嵌入交互式图表。只需在短代码标签之间提供图表配置——Chart.js 负责渲染。

配置选项和[图表类型](https://www.chartjs.org/docs/latest/samples/)请参考 [Chart.js 文档](https://www.chartjs.org/docs/latest/general/)。

**示例：**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['番茄', '蓝莓', '香蕉', '青柠', '橙子'],
  datasets: [{
    label: '票数',
    data: [12, 19, 3, 5, 3],
  }]
}
{{</* /chart */>}}
```

{{< chart >}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}

更多 Chart.js 示例请参见[图表示例]({{< ref "charts" >}})页面。

### Timeline

为专业经历、项目里程碑或任何按时间顺序的内容创建可视化时间线。使用 `timelineItem` 子短代码定义每个条目。

| 参数        | 描述                    |
| ----------- | ------------------------------ |
| `icon`      | 时间线标记的图标               |
| `header`    | 条目的主标题                   |
| `badge`     | 右上角徽章的文本               |
| `subheader` | 副标题文本                     |

**示例：**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="标题" badge="徽章测试" subheader="副标题" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis.
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="另一个精彩标题" badge="时间 - 至今" subheader="精彩副标题" */>}}
带 HTML 代码
<ul>
  <li>咖啡</li>
  <li>茶</li>
  <li>牛奶</li>
</ul>
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="标题" badge="徽章测试" subheader="副标题" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis.
{{< /timelineItem >}}

{{< timelineItem icon="code" header="另一个精彩标题" badge="时间 - 至今" subheader="精彩副标题" >}}
带 HTML 代码
<ul>
  <li>咖啡</li>
  <li>茶</li>
  <li>牛奶</li>
</ul>
{{< /timelineItem >}}

{{< /timeline >}}

### TypeIt

[TypeIt](https://www.typeitjs.com) 是用于创建打字机效果的最通用的 JavaScript 工具。通过简单的配置，它允许您键入单个或多个断行、删除和相互替换的字符串，甚至可以处理包含复杂 HTML 的字符串。

Blowfish 使用简码实现 TypeIt 功能的子集。在 `typeit` 简码中编写文本，并使用以下参数来配置您想要的行为。

| 参数               | 功能                                                                      |
| ------------------ | ------------------------------------------------------------------------- |
| `tag`              | [String] 将用于呈现字符串的 `html` 标签。                                 |
| `classList`        | [String] 应用于 `html` 元素的 `css` 类列表。                              |
| `initialString`    | [String] 将显示为先写入并将被替换的初始字符串。                           |
| `speed`            | [number] 每步之间的打字速度，以毫秒为单位。                               |
| `lifeLike`         | [boolean] 使打字速度不规律，就像真人在打字一样。                          |
| `startDelay`       | [number] 插件在初始化后到开始输入的延迟时间。                             |
| `breakLines`       | [boolean] 将多个字符串换行输出 (true)，或者将它们删除并替换 (false)。     |
| `waitUntilVisible` | [boolean] 决定脚本在网站加载时启动还是在目标元素可见时启动。默认为 `true` |
| `loop`             | [boolean] 字符串动画是否会循环                                            |

**例:**

```md
{{</* typeit tag=h3 speed=90 breakLines=false loop=true */>}}
散れば咲き 散れば咲きして 百日紅  
{{</* /typeit */>}}
```

{{< typeit tag=h3 speed=90 breakLines=false loop=true >}}
散れば咲き 散れば咲きして 百日紅  
{{< /typeit >}}

<br/><br/><br/>

### Badge

`badge` 输出一个美观的徽章组件，该组件对于显示元数据很有用。

**例如：**

```md
{{</* badge */>}}
New article!
{{</* /badge */>}}
```

{{< badge >}}
New article!
{{< /badge >}}

<br/><br/><br/>

### 文字书写方向

`ltr` 和 `rtl` 允许您混排内容。许多从左往右书写语言的用户希望在文章中包含部分从右往左的书写内容。使用此简码可以让您做到这一点，并利用 `%` 作为简码中最外层的标识符 [Hugo Shortcodes](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown)，其中任何 markdown 内容都会正常渲染。

**例如：**

```md
- This is an markdown list.
- Its per default a LTR direction
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- This is an markdown list.
- Its per default a LTR direction
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

---

## 内容嵌入

这些短代码让您从外部源导入和显示内容。

### Gist

直接将 GitHub Gist 嵌入到您的内容中。指定用户、Gist ID 和可选的特定文件。

| 参数           | 描述                                                        |
| -------------- | ------------------------------------------------------------------ |
| `[0]`          | GitHub 用户名（字符串）                                           |
| `[1]`          | Gist ID（字符串）                                                   |
| `[2]`（可选）   | 要嵌入的特定文件名（字符串）                               |

**示例 1：整个 Gist**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
```

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**示例 2：特定文件**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

### GitHub Card

显示 GitHub 仓库信息和实时统计数据，如星标和分叉数。

| 参数            | 描述                                                   |
|-----------------|---------------------------------------------------------------|
| `repo`          | `用户名/仓库名` 格式的仓库（字符串）                |
| `showThumbnail` | 可选。显示仓库缩略图（布尔值）                 |

**示例：**

```md
{{</* github repo="gohugoio/hugo" showThumbnail=true */>}}
```

{{< github repo="gohugoio/hugo" showThumbnail=true >}}

### Code Importer

从外部源导入代码文件，无需复制粘贴。

| 参数      | 描述                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `url`     | **必需。** 外部代码文件的 URL                                         |
| `lang`    | 可选。语法高亮的语言。从文件扩展名自动检测        |
| `line`    | 可选。行范围，格式为 `开始-结束`。省略开始或结束表示开放范围             |

**示例 1：完整文件**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" */>}}
```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" >}}

**示例 2：前 2 行**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" line="-2" */>}}
```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" line="-2" >}}

### Markdown Importer

从外部源（如其他仓库或网站）导入 markdown 内容。

| 参数      | 描述                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **必需。** 外部 markdown 文件的 URL        |

**示例：**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}
```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

### YouTube Lite

使用轻量级 [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) 库嵌入 YouTube 视频，加载更快。

| 参数      | 描述                                  |
| --------- | -------------------------------------------- |
| `id`      | YouTube 视频 ID（字符串）                    |
| `label`   | 视频描述标签（字符串）             |
| `params`  | 额外的播放参数（字符串）      |

**示例 1：基础视频**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools 演示" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools 演示" >}}

**示例 2：自定义参数**

使用 YouTube 的[播放器参数](https://developers.google.com/youtube/player_parameters#Parameters)自定义播放：

> 视频从 2 分 10 秒开始：

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools 演示" params="start=130" */>}}
```

> 无控件视频，从 130 秒开始，10 秒后结束：

用 `&` 组合参数：

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools 演示" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools 演示" params="start=130&end=10&controls=0" >}}

更多选项请参见 [lite-youtube-embed 文档](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters)和 YouTube 的[参数参考](https://developers.google.com/youtube/player_parameters#Parameters)。

### Article

将单篇文章嵌入到您的 markdown 内容中。使用文章的 `.RelPermalink` 作为链接值。引用父页面时短代码不会显示任何内容。

*注意：如果您的网站在子文件夹中运行（如 `/blowfish/`），请在链接中包含该路径。*

| 参数      | 描述                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **必需。** 目标文章的 `.RelPermalink` |

**示例：**

```md
{{</* article link="/docs/welcome/" */>}}
```

{{< article link="/docs/welcome/" >}}

### List

显示最近文章列表，可选过滤。短代码排除其父页面，但将其计入限制数量。

| 参数       | 描述                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`    | **必需。** 要显示的文章数量                                                                                                            |
| `title`    | 可选。列表标题。默认为"最近"                                                                                                           |
| `cardView` | 可选。启用卡片布局。默认为 `false`                                                                                                      |
| `where`    | 可选。用于过滤的页面参数（如 `Type`）                                                                                                  |
| `value`    | 可选。与 `where` 参数匹配的值（如 `sample`）                                                                                       |

{{< hint info >}}
`where` 和 `value` 参数使用 Hugo 的查询格式：`where .Site.RegularPages $where $value`。可用的页面参数请查看 [Hugo 文档](https://gohugo.io/methods/page/)。
{{< /hint >}}

**示例 1：基础列表**

```md
{{</* list limit=2 */>}}
```

**示例 2：过滤卡片视图**

```md
{{</* list title="示例" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="示例" cardView=true limit=6 where="Type" value="sample" >}}
