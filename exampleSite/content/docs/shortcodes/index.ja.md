---
title: "ショートコード"
weight: 6
draft: false
description: "Blowfish で使えるすべてのショートコード"
slug: "shortcodes"
tags: ["shortcodes", "mermaid", "icon", "lead", "docs"]
series: ["Documentation"]
series_order: 8
useKatex: true
---

[標準Hugo shortcode](https://gohugo.io/content-management/shortcodes/)に加えて、Blowfishはコンテンツを拡張する追加機能を提供します。各セクションは使用頻度順に配置されています。

## ビジュアル機能

これらのshortcodeでmarkdownコンテンツをより魅力的でインタラクティブにできます。

### Hint

`hint` shortcodeは[Docusaurus admonitions](https://docusaurus.io/docs/markdown-features/admonitions)に似たスタイル付きアラートブロックを作成します。各hintはタイプに応じて異なる色とアイコンで表示されます。

| パラメータ | 説明                                                                                  |
| --------- | ------------------------------------------------------------------------------------ |
| `type`    | オプション。アラートスタイル：`note`、`tip`、`info`、`warning`、`danger`。デフォルトは`tip` |
| `title`   | オプション。カスタム見出しテキスト。指定しない場合はタイプを大文字化して使用                      |

**使用例：**

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

<br/><br/><br/>

### Figure

`figure` shortcodeは基本的なMarkdown記法よりも優れた画像制御を提供します。キャプション、カスタムスタイル、幅調整、リンク包含をサポートします。

BlowfishはHugoの組み込み`figure` shortcodeを完全互換性を保ちながらパフォーマンスを最適化して拡張しています。機能を制限する他のテーマとは異なり、Blowfishはすべてのネイティブ機能をシームレスに保持します。

完全なパラメータについては[Hugoドキュメント](https://gohugo.io/shortcodes/figure/)を参照してください。一般的なオプション：

| パラメータ | 説明                                                                                  |
| --------- | ------------------------------------------------------------------------------------ |
| `src`     | **必須。** 画像パスまたはURL。検索順序：ページリソース、`assets/`、`static/`            |
| `alt`     | アクセシビリティとSEO用のaltテキスト                                                    |
| `href`    | このリンクでクリック可能な画像にする                                                     |
| `target`  | リンクターゲット（例：新しいタブ用の`_blank`）                                           |
| `caption` | 画像下のテキスト。Markdownフォーマットをサポート                                         |
| `class`   | 追加のCSSクラス                                                                       |

**例：**

```md
{{</* figure
    src="abstract.jpg"
    alt="抽象的な紫のアートワーク"
    caption="写真：[Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)"
    */>}}

<!-- 標準Markdown（追加機能が不要な場合に使用） -->
![抽象的な紫のアートワーク](abstract.jpg "写真：[Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)")
```

{{< figure src="abstract.jpg" alt="抽象的な紫のアートワーク" caption="写真：[Jr Korpa](https://unsplash.com/@jrkorpa) on [Unsplash](https://unsplash.com/)" >}}

<br/><br/><br/>

### Slide

`slide` ショートコードは、左右ボタン付きの横スクロール型画像カルーセルを表示します。`src` および `caption` を 1 行ずつ指定するか、`dir=` でフォルダ内のすべての画像を自動的に読み込むこともできます。

**例 1：基本的なカルーセル**

```md
{{</* slide */>}}
width=90%
<img src="gallery/01.jpg" alt="同じフォルダ内の画像">
<img src="https://cdn.zsl0621.cc/2025/docs/background-shell---2025-04-27T16-41-14.webp" alt="リモート画像">
<img src="/img/lagerstroemia-ryan-lee.jpg" alt="assetsディレクトリ内の画像">
{{</* /slide */>}}
```

{{< slide >}}
width=90%
<img src="gallery/01.jpg" alt="同じフォルダ内の画像">
<img src="https://cdn.zsl0621.cc/2025/docs/background-shell---2025-04-27T16-41-14.webp" alt="リモート画像">
<img src="/img/lagerstroemia-ryan-lee.jpg" alt="assetsディレクトリ内の画像">
{{< /slide >}}

**例 2：ディレクトリから読み込む**

```md
{{</* slide */>}}
width=100%
dir=gallery
caption=最初の画像
{{</* /slide */>}}
```

{{< slide >}}
width=100%
dir=gallery
caption=最初の画像
{{< /slide >}}

All images will scale to the same height, keeping their aspect ratios. Buttons occupy 15% on each side. Captions are shown below each image and are selectable.

### Gallery

`gallery` shortcodeは複数の画像をレスポンシブで柔軟なレイアウトで表示します。

列幅を制御するには`img`タグに`class="grid-wXX"`を使用します。利用可能な幅は10%から100%まで5%刻み（例：65%なら`grid-w65`）。3列レイアウト用に特別クラス`grid-w33`と`grid-w66`があります。Tailwindレスポンシブプレフィックスと組み合わせて適応的グリッドを作成できます。

**例1：基本ギャラリー**

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

<br/><br/><br/>

**例2：レスポンシブギャラリー**

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

<br/><br/><br/>

### KaTeX

コンテンツ内で数式を表示します。

ページフロントマターに`useKatex: true`を追加して数式サポートを有効化します。インライン式には`\(`と`\)`を、ブロック式には`$$`区切り文字を使用します。

**インライン数式：**

```md
これはインライン数式です \(f(a,b,c) = (a^2+b^2+c^2)^3\)
```

これはインライン数式です \(f(a,b,c) = (a^2+b^2+c^2)^3\)

**ブロック数式：**

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

詳細な例は[数式記法サンプル]({{< ref "mathematical-notation" >}})ページを参照してください。

<br/><br/><br/>

### Mermaid

テキストベースの記法でダイアグラムを作成します。Hugoのアプローチに従い、shortcodeラッパーは不要で、フェンス付きコードブロックを使用します。

**例：**

`````txt
```mermaid
graph LR;
A[レモン]-->B[レモネード];
B-->C[利益]
```
`````

```mermaid
graph LR;
A[レモン]-->B[レモネード];
B-->C[利益]
```

記法の詳細とダイアグラムタイプについては[公式Mermaidドキュメント](https://mermaid-js.github.io/)を確認してください。追加例は[ダイアグラムとフローチャートサンプル]({{< ref "diagrams-flowcharts" >}})ページにあります。

<br/><br/><br/>

### Chart

Chart.jsを使用してインタラクティブなチャートを埋め込みます。shortcodeタグ間にチャート設定を記述するだけで、Chart.jsがレンダリングを処理します。

設定オプションと[チャートタイプ](https://www.chartjs.org/docs/latest/samples/)については[Chart.jsドキュメント](https://www.chartjs.org/docs/latest/general/)を参照してください。

**例：**

```js
{{</* chart */>}}
type: 'bar',
data: {
  labels: ['トマト', 'ブルーベリー', 'バナナ', 'ライム', 'オレンジ'],
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
  labels: ['トマト', 'ブルーベリー', 'バナナ', 'ライム', 'オレンジ'],
  datasets: [{
    label: '票数',
    data: [12, 19, 3, 5, 3],
  }]
}
{{< /chart >}}

追加のChart.js例は[チャートサンプル]({{< ref "charts" >}})ページで確認できます。

<br/><br/><br/>

### Timeline

職歴、プロジェクトマイルストーン、その他の時系列コンテンツ用のビジュアルタイムラインを作成します。各エントリの定義には`timelineItem`サブshortcodeを使用します。

| パラメータ   | 説明                         |
| ----------- | ---------------------------- |
| `icon`      | タイムラインマーカー用アイコン  |
| `header`    | エントリのメイン見出し         |
| `badge`     | 右上バッジのテキスト          |
| `subheader` | セカンダリ見出しテキスト       |

**例：**

```md
{{</* timeline */>}}

{{</* timelineItem icon="github" header="ヘッダー" badge="バッジテスト" subheader="サブヘッダー" */>}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="素晴らしいヘッダー" badge="日付 - 現在" subheader="素晴らしいサブヘッダー" */>}}
HTMLコード付き
<ul>
  <li>コーヒー</li>
  <li>お茶</li>
  <li>ミルク</li>
</ul>
{{</* /timelineItem */>}}

{{</* timelineItem icon="star" header="Shortcodes" badge="素晴らしい" */>}}
他のshortcodeとの組み合わせ
{{</* gallery */>}}
  <img src="gallery/01.jpg" class="grid-w33" />
  <img src="gallery/02.jpg" class="grid-w33" />
  <img src="gallery/03.jpg" class="grid-w33" />
  <img src="gallery/04.jpg" class="grid-w33" />
  <img src="gallery/05.jpg" class="grid-w33" />
  <img src="gallery/06.jpg" class="grid-w33" />
  <img src="gallery/07.jpg" class="grid-w33" />
{{</* /gallery */>}}
{{</* /timelineItem */>}}

{{</* timelineItem icon="code" header="別の素晴らしいヘッダー"*/>}}
{{</* github repo="gohugoio/hugo" */>}}
{{</* /timelineItem */>}}

{{</* /timeline */>}}
```

{{< timeline >}}

{{< timelineItem icon="github" header="ヘッダー" badge="バッジテスト" subheader="サブヘッダー" >}}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non magna ex. Donec sollicitudin ut lorem quis lobortis. Nam ac ipsum libero. Sed a ex eget ipsum tincidunt venenatis quis sed nisl. Pellentesque sed urna vel odio consequat tincidunt id ut purus. Nam sollicitudin est sed dui interdum rhoncus.
{{</ timelineItem >}}

{{< timelineItem icon="code" header="素晴らしいヘッダー" badge="日付 - 現在" subheader="素晴らしいサブヘッダー">}}
HTMLコード付き
<ul>
  <li>コーヒー</li>
  <li>お茶</li>
  <li>ミルク</li>
</ul>
{{</ timelineItem >}}

{{< timelineItem icon="star" header="Shortcodes" badge="素晴らしい" >}}
他のshortcodeとの組み合わせ
{{< gallery >}}
  <img src="gallery/01.jpg" class="grid-w33" alt="gallery-01" />
  <img src="gallery/02.jpg" class="grid-w33" alt="gallery-02" />
  <img src="gallery/03.jpg" class="grid-w33" alt="gallery-03" />
  <img src="gallery/04.jpg" class="grid-w33" alt="gallery-04" />
  <img src="gallery/05.jpg" class="grid-w33" alt="gallery-05" />
  <img src="gallery/06.jpg" class="grid-w33" alt="gallery-06" />
  <img src="gallery/07.jpg" class="grid-w33" alt="gallery-07" />
{{< /gallery >}}
{{</ timelineItem >}}

{{< timelineItem icon="code" header="別の素晴らしいヘッダー">}}
{{< github repo="gohugoio/hugo" >}}
{{</ timelineItem >}}

{{</ timeline >}}

<br/><br/><br/>

### TypeIt

[TypeIt](https://www.typeitjs.com) は、この地球上で最も用途の広い、タイプライターエフェクトを作成するための JavaScript ツールです。簡単な設定で、行を分割したり、相互に削除および置換したりする単一または複数の文字列を入力でき、複雑な HTML を含む文字列も処理できます。

Blowfish は、`shortcode` を使用して TypeIt 機能のサブセットを実装しています。`typeit` ショートコード内にテキストを記述し、次のパラメータを使用して、必要な動作を設定します。

| パラメータ          | 説明                                                                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tag`              | [文字列] 文字列のレンダリングに使用される `html` タグ。                                                                                       |
| `classList`        | [文字列] `html` 要素に適用する `css` クラスのリスト。                                                                                     |
| `initialString`    | [文字列] 書き込まれて表示され、置き換えられる初期文字列。                                                                             |
| `speed`            | [数値] 各ステップ間のミリ秒単位で測定されるタイピング速度。                                                                                 |
| `lifeLike`         | [ブール値] 実際の人間が行っているかのように、タイピングのペースを不規則にします。                                                                        |
| `startDelay`       | [数値] プラグインが初期化されてからタイピングを開始するまでの時間。                                                               |
| `breakLines`       | [ブール値] 複数の文字列が互いに上に印刷されるか (true)、削除されて互いに置き換えられるか (false)。              |
| `waitUntilVisible` | [ブール値] インスタンスがロードされたときに開始するか、ターゲット要素がビューポートに表示されたときにのみ開始するかを決定します。デフォルトは `true` です。 |
| `loop`             | [ブール値] 文字列が完了後に継続的にループするかどうか。                                                                             |

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

`badge` は、メタデータを表示するのに役立つ、スタイリッシュなバッジを出力します。

**例:**

```md
{{</* badge */>}}
新しい記事!
{{</* /badge */>}}
```

{{< badge >}}
新しい記事!
{{< /badge >}}

<br/><br/><br/>

### LTR/RTL

`ltr` と `rtl` を使用すると、それぞれのコンテンツを混在させることができます。多くの RTL 言語ユーザーは、コンテンツの一部に LTR を含めたいと考えています。このショートコードを使用するとそれを行うことができ、[Hugo ショートコード](https://gohugo.io/content-management/shortcodes/#shortcodes-with-markdown)の最も外側の要素として `%` を活用することで、内部のマークダウンは通常どおりレンダリングされます。

**例:**

```md
- これは Markdown のリストです。
- デフォルトでは LTR 方向です。
{{%/* rtl */%}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{%/* /rtl */%}}
```

- これは Markdown のリストです。
- デフォルトでは LTR 方向です。
{{% rtl %}}
- هذه القائمة باللغة العربية
- من اليمين الى اليسار
{{% /rtl %}}

<br/><br/><br/>

## コンテンツ埋め込み

これらのshortcodeで外部ソースからコンテンツをインポートして表示できます。

### Gist

GitHub Gistを直接コンテンツに埋め込みます。ユーザー、Gist ID、オプションで特定のファイルを指定します。

| パラメータ      | 説明                                                        |
| -------------- | ------------------------------------------------------------------ |
| `[0]`          | GitHubユーザー名（文字列）                                           |
| `[1]`          | Gist ID（文字列）                                                   |
| `[2]`（オプション）| 埋め込む特定のファイル名（文字列）                               |

**例1：Gist全体**

```md
{{</* gist "octocat" "6cad326836d38bd3a7ae" */>}}
```

{{< gist "octocat" "6cad326836d38bd3a7ae" >}}

**例2：特定ファイル**

```md
{{</* gist "rauchg" "2052694" "README.md" */>}}
```

{{< gist "rauchg" "2052694" "README.md" >}}

<br/><br/><br/>

### GitHub Card

スターやフォーク数などのリアルタイム統計とともにGitHubリポジトリ情報を表示します。

| パラメータ       | 説明                                                   |
|-----------------|---------------------------------------------------------------|
| `repo`          | `ユーザー名/リポジトリ`形式のリポジトリ（文字列）                |
| `showThumbnail` | オプション。リポジトリサムネイルを表示（ブール値）                 |

**例：**

```md
{{</* github repo="gohugoio/hugo" showThumbnail=true */>}}
```

{{< github repo="gohugoio/hugo" showThumbnail=true >}}

<br/><br/><br/>

### Code Importer

コピペなしで外部ソースからコードファイルをインポートします。

| パラメータ | 説明                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `url`     | **必須。** 外部コードファイルのURL                                         |
| `lang`    | オプション。シンタックスハイライト用言語。ファイル拡張子から自動検出        |
| `line`    | オプション。`開始-終了`形式の行範囲。開始または終了の省略で開放範囲             |

**例1：完全ファイル**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" */>}}
```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" >}}

**例2：最初の2行**

```md
{{</* codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" line="-2" */>}}
```

{{< codeimporter url="https://raw.githubusercontent.com/nunocoracao/blowfish/main/layouts/shortcodes/mdimporter.html" lang="go" line="-2" >}}

<br/><br/>

### Markdown Importer

他のリポジトリやウェブサイトなどの外部ソースからmarkdownコンテンツをインポートします。

| パラメータ | 説明                                             |
| --------- | ------------------------------------------------------- |
| `url`     | **必須。** 外部markdownファイルのURL        |

**例：**

```md
{{</* mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" */>}}
```

{{< mdimporter url="https://raw.githubusercontent.com/nunocoracao/nunocoracao/master/README.md" >}}

<br/><br/>

### YouTube Lite

高速読み込み用の軽量[lite-youtube-embed](https://github.com/paulirish/lite-youtube-embed)ライブラリを使用してYouTube動画を埋め込みます。

| パラメータ | 説明                                  |
| --------- | -------------------------------------------- |
| `id`      | YouTube動画ID（文字列）                    |
| `label`   | 動画説明ラベル（文字列）             |
| `params`  | 追加の再生パラメータ（文字列）      |

**例1：基本動画**

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-toolsデモ" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-toolsデモ" >}}

**例2：カスタムパラメータ**

YouTubeの[プレーヤーパラメータ](https://developers.google.com/youtube/player_parameters#Parameters)で再生をカスタマイズ：

> 2分10秒から開始：

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-toolsデモ" params="start=130" */>}}
```

> コントロールなし、130秒開始、10秒後終了：

パラメータは`&`で結合：

```md
{{</* youtubeLite id="SgXhGb-7QbU" label="Blowfish-toolsデモ" params="start=130&end=10&controls=0" */>}}
```

{{< youtubeLite id="SgXhGb-7QbU" label="Blowfish-toolsデモ" params="start=130&end=10&controls=0" >}}

詳細オプションについては[lite-youtube-embedドキュメント](https://github.com/paulirish/lite-youtube-embed/blob/master/readme.md#custom-player-parameters)とYouTubeの[パラメータリファレンス](https://developers.google.com/youtube/player_parameters#Parameters)を参照してください。

### Article

markdownコンテンツに単一記事を埋め込みます。記事の`.RelPermalink`をリンク値として使用します。親ページを参照する場合、shortcodeは何も表示しません。

*注：サイトがサブフォルダ（例：`/blowfish/`）で実行される場合、リンクにそのパスを含めてください。*

| パラメータ | 説明                                              |
| --------- | -------------------------------------------------------- |
| `link`    | **必須。** ターゲット記事の`.RelPermalink` |

**例：**

```md
{{</* article link="/docs/welcome/" */>}}
```

{{< article link="/docs/welcome/" >}}

<br/><br/><br/>

### List

オプションフィルタリング付きの最新記事リストを表示します。shortcodeは親ページを除外しますが、制限数にはカウントします。

| パラメータ  | 説明                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`    | **必須。** 表示する記事数                                                                                                            |
| `title`    | オプション。リスト見出し。デフォルトは「Recent」                                                                                                           |
| `cardView` | オプション。カードレイアウトを有効化。デフォルトは`false`                                                      |
| `where`    | オプション。フィルタリング用ページパラメータ（例：`Type`）                                                                                                  |
| `value`    | オプション。`where`パラメータと照合する値（例：`sample`）                                                                                       |

{{< hint info >}}
`where`と`value`パラメータはHugoのクエリ形式を使用：`where .Site.RegularPages $where $value`。利用可能なページパラメータについては[Hugoドキュメント](https://gohugo.io/methods/page/)を確認してください。
{{< /hint >}}

**例1：基本リスト**

```md
{{</* list limit=2 */>}}
```

{{< list limit=2 >}}

**例2：フィルタ付きカードビュー**

```md
{{</* list title="サンプル" cardView=true limit=6 where="Type" value="sample" */>}}
```

{{< list title="サンプル" cardView=true limit=6 where="Type" value="sample">}}
