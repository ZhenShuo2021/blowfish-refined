---
title: "Shortcodes"
weight: 6
draft: false
description: "All the shortcodes available in Blowfish."
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "docs"]
series: ["Documentation"]
series_order: 8
useKatex: true
---

Beyond the [standard Hugo shortcodes](https://gohugo.io/content-management/shortcodes/), Blowfish provides additional features to enhance your content. Each section is ordered by usage frequency.

{{< hint "info" >}}

Since Markdown content is often intended for use **across platforms**, it is preferable to use standard HTML elements such as `<div>` instead of Hugo-specific shortcodes. This ensures better portability and compatibility, as shortcodes work only within Hugo.

{{< /hint >}}

## Visual Features

These shortcodes and HTML elements make your markdown content more engaging and interactive.

### Hint

The `hint` shortcode creates styled alert blocks similar to [Docusaurus admonitions](https://docusaurus.io/docs/markdown-features/admonitions). Each hint displays with a distinct color and icon based on its type.

| Parameter | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| `type`    | Optional. Alert style: `note`, `tip`, `info`, `warning`, `danger`. Defaults to `tip`.       |
| `title`   | Optional. Custom heading text. Uses capitalized type if not specified.                      |

**Usage:**

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

{{< hint tip "Helpful Tip" >}}
This is a helpful tip.
{{< /hint >}}

{{< hint warning "Warning" >}}
This is a warning message.
{{< /hint >}}

{{< hint danger "Danger" >}}
This is a danger alert.
{{< /hint >}}

### Figure

The `figure` shortcode provides better image control than basic Markdown syntax—supporting captions, custom styling, width adjustment, and link wrapping.

Blowfish enhances Hugo's built-in `figure` shortcode with optimized performance while maintaining full compatibility. Unlike other themes that limit functionality for optimization, Blowfish preserves all native features seamlessly.

See the [Hugo documentation](https://gohugo.io/shortcodes/figure/) for complete parameters. Common options include:

| Parameter | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| `src`     | **Required.** Image path or URL. Searches: page resources, `assets/`, then `static/`.       |
| `alt`     | Alt text for accessibility and SEO.                                                         |
| `href`    | Makes image clickable with this link.                                                       |
| `target`  | Link target (e.g., `_blank` for new tab).                                                   |
| `caption` | Text below image. Supports Markdown formatting.                                             |
| `class`   | Additional CSS classes.                                                                      |

**Example:**

```md
{{</* figure
    src="abstract.jpg"
    alt="Abstract purple artwork"
    caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)"
    */>}}

<!-- Standard Markdown (use when no extra features needed) -->
![Abstract purple artwork](abstract.jpg "Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="Abstract purple artwork" caption="Photo by [Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)" >}}

### Slide

`slide` shortcode provides an image carousel component with left and right buttons and swipe functionality. You can define each image’s `src` and corresponding `caption` line by line, or import an entire directory at once using `dir=`.

**Example 1: Basic Carousel**

```md
{{</* slide */>}}
width=90%
<img src="gallery/01.jpg" alt="Image in the same folder">
<img src="https://cdn.zsl0621.cc/2025/docs/background-shell---2025-04-27T16-41-14.webp" alt="Remote image">
<img src="/img/lagerstroemia-ryan-lee.jpg" alt="Image in the assets directory">
{{</* /slide */>}}
```

{{< slide >}}
width=90% <img src="gallery/01.jpg" alt="Image in the same folder"> <img src="https://cdn.zsl0621.cc/2025/docs/background-shell---2025-04-27T16-41-14.webp" alt="Remote image"> <img src="/img/lagerstroemia-ryan-lee.jpg" alt="Image in the assets directory">
{{< /slide >}}

**Example 2: Auto-load From Directory**

```md
{{</* slide */>}}
width=100%
dir=gallery
caption=First Image
caption=Second Image
caption=Third Image
caption=4th Image
caption=5th Image
caption=6th Image
caption=7th Image
{{</* /slide */>}}
```

{{< slide >}}
width=100%
dir=gallery
caption=First Image
caption=Second Image
caption=Third Image
caption=4th Image
caption=5th Image
caption=6th Image
caption=7th Image
{{< /slide >}}

This will include all images from `assets/gallery/`, sorted alphabetically.

### Gallery

The `gallery` shortcode displays multiple images in responsive, flexible layouts.

Use `img` tags with `class="grid-wXX"` to control column widths. Available widths range from 10% to 100% in 5% steps (e.g., `grid-w65` for 65%). Special classes `grid-w30` and `grid-w66` support 3-column layouts. Combine with Tailwind responsive prefixes for adaptive grids.

**Example 1: Basic Gallery**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w30" />
  <img src="gallery/02.jpg" class="grid-w30" />
  <img src="gallery/03.jpg" class="grid-w30" />
  <img src="gallery/04.jpg" class="grid-w30" />
  <img src="gallery/05.jpg" class="grid-w30" />
  <img src="gallery/06.jpg" class="grid-w30" />
  <img src="gallery/07.jpg" class="grid-w30" />
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

**Example 2: Responsive Gallery**

```md
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" />
{{</* /gallery */>}}
```

{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" alt="gallery-01" />
  <img src="gallery/02.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" alt="gallery-02" />
  <img src="gallery/03.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" alt="gallery-03" />
  <img src="gallery/04.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" alt="gallery-04" />
  <img src="gallery/05.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" alt="gallery-05" />
  <img src="gallery/06.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" alt="gallery-06" />
  <img src="gallery/07.jpg" class="grid-w50 md:grid-w30 xl:grid-w25" alt="gallery-07" />
{{< /gallery >}}

### KaTeX

Render mathematical expressions in your content.

Add `useKatex: true` to your page frontmatter to enable math support. Use `\(` and `\)` for inline expressions, or `$$` delimiters for block equations.

**Inline Math:**

```md
This is an inline equation \(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

This is an inline equation \(f(a,b,c) = (a^2+b^2+c^2)^3\)

**Block Math:**

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

See the [mathematical notation samples]({{< ref "mathematical-notation" >}}) page for more examples.

### Mermaid

Create diagrams using text-based syntax. Following Hugo's approach, no shortcode wrapper is needed—just use fenced code blocks.

**Example:**

`````txt
```mermaid
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
```
`````

```mermaid
graph LR;
A[Lemons]-->B[Lemonade];
B-->C[Profit]
```

Check the [official Mermaid documentation](https://mermaid-js.github.io/) for syntax details and diagram types. Additional examples are available on the [diagrams and flowcharts samples]({{< ref "diagrams-flowcharts" >}}) page.

### Chart

Embed interactive charts using Chart.js. Simply provide chart configuration between the shortcode tags—Chart.js handles the rendering.

Refer to the [Chart.js documentation](https://www.chartjs.org/docs/latest/general/) for configuration options and [chart types](https://www.chartjs.org/docs/latest/samples/).

**Example:**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['Tomato', 'Blueberry', 'Banana', 'Lime', 'Orange'],
  datasets: [{
    label: '# of votes',
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

More Chart.js examples are available on the [charts samples]({{< ref "charts" >}}) page.

### Timeline

Create visual timelines for professional experience, project milestones, or any chronological content. Use `timelineItem` sub-shortcodes to define each entry.

| Parameter   | Description                    |
| ----------- | ------------------------------ |
| `icon`      | Icon for the timeline marker   |
| `header`    | Main heading for the entry     |
| `badge`     | Text for the top-right badge   |
| `subheader` | Secondary heading text         |

**Example:**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="header" badge="badge test" subheader="subheader" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader" */>}}
With html code
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="Shortcodes" badge="AWESOME" */>}}
With other shortcodes
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w30" />
  <img src="gallery/02.jpg" class="grid-w30" />
  <img src="gallery/03.jpg" class="grid-w30" />
  <img src="gallery/04.jpg" class="grid-w30" />
  <img src="gallery/05.jpg" class="grid-w30" />
  <img src="gallery/06.jpg" class="grid-w30" />
  <img src="gallery/07.jpg" class="grid-w30" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="Another Awesome Header"*/>}}
{{</* github repo="gohugoio/hugo" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="header" badge="badge test" subheader="subheader" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</ timelineItem >}}

{{< timelineItem icon="code" header="Another Awesome Header" badge="date - present" subheader="Awesome Subheader">}}
With html code
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
{{</ timelineItem >}}

{{< timelineItem icon="star" header="Shortcodes" badge="AWESOME" >}}
With other shortcodes
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w30" alt="gallery-01" />
  <img src="gallery/02.jpg" class="grid-w30" alt="gallery-02" />
  <img src="gallery/03.jpg" class="grid-w30" alt="gallery-03" />
  <img src="gallery/04.jpg" class="grid-w30" alt="gallery-04" />
  <img src="gallery/05.jpg" class="grid-w30" alt="gallery-05" />
  <img src="gallery/06.jpg" class="grid-w30" alt="gallery-06" />
  <img src="gallery/07.jpg" class="grid-w30" alt="gallery-07" />
{{< /gallery >}}
{{< /timelineItem >}}

{{< timelineItem icon="code" header="Another Awesome Header">}}
{{< github repo="gohugoio/hugo" >}}
{{< /timelineItem >}}

{{< /timeline >}}

### TypeIt

[TypeIt](https://www.typeitjs.com) is the most versatile JavaScript tool for creating typewriter effects on the planet. With a straightforward configuration, it allows you to type single or multiple strings that break lines, delete & replace each other, and it even handles strings that contain complex HTML.

Blowfish implements a sub-set of TypeIt features using a `shortcode`. Write your text within the `typeit` shortcode and use the following parameters to configure the behavior you want.

| Parameter          | Description                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tag`              | [String] `html` tag that will be used to render the strings.                                                                                       |
| `classList`        | [String] List of `css` classes to apply to the `html` element.                                                                                     |
| `initialString`    | [String] Initial string that will appear written and will be replaced.                                                                             |
| `speed`            | [number] Typing speed, measured in milliseconds between each step.                                                                                 |
| `lifeLike`         | [boolean] Makes the typing pace irregular, as if a real person is doing it.                                                                        |
| `startDelay`       | [number] The amount of time before the plugin begins typing after being initialized.                                                               |
| `breakLines`       | [boolean] Whether multiple strings are printed on top of each other (true), or if they're deleted and replaced by each other (false).              |
| `waitUntilVisible` | [boolean] Determines if the instance will begin when loaded or only when the target element becomes visible in the viewport. The default is `true` |
| `loop`             | [boolean] Whether your strings will continuously loop after completing                                                                             |

**Example:**

```md
{{</* typeit tag=h3 speed=90 breakLines=false loop=true */>}}
散れば咲き 散れば咲きして 百日紅  
{{</* /typeit */>}}
```

{{< typeit tag=h3 speed=90 breakLines=false loop=true >}}
散れば咲き 散れば咲きして 百日紅  
{{< /typeit >}}

### Icon

`icon` outputs an SVG icon and takes the icon name as its only parameter. The icon is scaled to match the current text size.

**Example:**

```md
{{</* icon "github" */>}}
```

**Output:** {{< icon "github" >}}

Icons are populated using Hugo pipelines which makes them very flexible. Blowfish includes a number of built-in icons for social, links and other purposes. Check the [icon samples]({{< ref "samples/icons" >}}) page for a full list of supported icons.

Custom icons can be added by providing your own icon assets in the `assets/icons/` directory of your project. The icon can then be referenced in the shortcode by using the SVG filename without the `.svg` extension.

Icons can also be used in partials by calling the [icon partial]({{< ref "extensions#icon" >}}).

### Badge

`badge` outputs a styled badge component which is useful for displaying metadata.

**Example:**

```md
{{</* badge */>}}
New article!
{{</* /badge */>}}
```

{{< badge >}}
New article!
{{< /badge >}}

### LTR/RTL

`ltr` and `rtl` allows you to mix your contents. Many RTL language users want to include parts of the content in LTR. Using this shortcode will let you do so, and by leveraging `%` as the outer-most dilemeter in the shortcode [Hugo shortcodes](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown), any markdown inside will be rendered normally.

**Example:**

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

## Content Embedding

These shortcodes let you import and display content from external sources.

### Gist

Embed GitHub Gists directly into your content. Specify the user, Gist ID, and optionally a specific file.

| Parameter      | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| `[0]`          | GitHub username (string)                                           |
| `[1]`          | Gist ID (string)                                                   |
| `[2]` (optional)| Specific filename to embed (string)                               |

**Example 1: Entire Gist**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
```

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**Example 2: Specific File**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

### GitHub Card

Display GitHub repository information with live stats like stars and forks.

| Parameter       | Description                                                   |
|-----------------|---------------------------------------------------------------|
| `repo`          | Repository in `username/repo` format (string)                |
| `showThumbnail` | Optional. Show repository thumbnail (boolean)                 |

**Example:**

```md
{{</* github repo="gohugoio/hugo" showThumbnail=true */>}}
```

{{< github repo="gohugoio/hugo" showThumbnail=true >}}

### Code Importer

Import code files from external sources without copy-pasting. Note this uses different parameter to Blowfish's version.

| Parameter | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `url`     | **Required.** URL to the external code file                                         |
| `lang`    | Optional. Language for syntax highlighting. Auto-detects from file extension        |
| `line`    | Optional. Line range as `start-end`. Omit start or end for open ranges             |

**Example 1: Complete File**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" */>}}
```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" >}}

**Example 2: First 2 Lines**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" line="-2" */>}}
```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" line="-2" >}}

### Markdown Importer

Import markdown content from external sources like other repositories or websites.

| Parameter | Description                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **Required.** URL to the external markdown file        |

**Example:**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}
```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

### YouTube Lite

Embed YouTube videos using the lightweight [lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed) library for faster loading.

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| `id`      | YouTube video ID (string)                    |
| `label`   | Video description label (string)             |
| `params`  | Additional playback parameters (string)      |

**Example 1: Basic Video**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" >}}

**Example 2: Custom Parameters**

Use YouTube's [player parameters](https://developers.google.com/youtube/player_parameters#Parameters) to customize playback:

> Video starts at 2 minutes 10 seconds:

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130" */>}}
```

> Video with no controls, starts at 130 seconds, ends 10 seconds later:

Combine parameters with `&`:

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-tools demo" params="start=130&end=10&controls=0" >}}

See the [lite-youtube-embed documentation](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters) and YouTube's [parameter reference](https://developers.google.com/youtube/player_parameters#Parameters) for more options.

### Article

Embed a single article into your markdown content. Use the article's `.RelPermalink` as the link value. The shortcode won't display anything when referencing its parent page.

*Note: If your site runs in a subfolder (e.g., `/blowfish/`), include that path in the link.*

| Parameter | Description                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **Required.** The `.RelPermalink` to the target article |

**Example:**

```md
{{</* article link="/docs/welcome/" */>}}
```

{{< article link="/docs/welcome/" >}}

### List

Display a list of recent articles with optional filtering. The shortcode excludes its parent page but counts it toward the limit.

| Parameter  | Description                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`    | **Required.** Number of articles to display                                                                                                            |
| `title`    | Optional. List heading. Defaults to "Recent"                                                                                                           |
| `cardView` | Optional. Enable card layout. Defaults to `false`                                                                                                      |
| `where`    | Optional. Page parameter for filtering (e.g., `Type`)                                                                                                  |
| `value`    | Optional. Value to match with `where` parameter (e.g., `sample`)                                                                                       |

{{< hint info >}}
The `where` and `value` parameters use Hugo's query format: `where .Site.RegularPages $where $value`. Check the [Hugo documentation](https://gohugo.io/methods/page/) for available page parameters.
{{< /hint >}}

**Example 1: Basic List**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**Example 2: Filtered Card View**

```md
{{</* list title="Samples" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="Samples" cardView=true limit=6 where="Type" value="sample">}}
