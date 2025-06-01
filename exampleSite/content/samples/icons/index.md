---
title: "Icons"
date: 2020-08-14
lastmod: 2022-03-09
draft: false
description: "Icon support in Blowfish."
slug: "icons"
tags: ["icons", "sample", "shortcodes"]
type: 'sample'
---

Blowfish has built-in support for a number of [FontAwesome 6](https://fontawesome.com/icons) icons. These can be included in your website through either the [icon partial]({{< ref "docs/extensions#icon" >}}) or [icon shortcode]({{< ref "docs/shortcodes#icon" >}}).

Additionally, custom icons are also fully supported. Simply provide your own SVG icon assets by placing them in the `assets/icons/` directory in the root of your project. Any icons in the icons directory will then be available to use throughout the theme. In order to achieve automatic color filling, every SVG path needs the `fill="currentColor"` XML attribute.

The full list of built-in icons and their corresponding names can referenced below.

| Icon name            | Preview                           |
| -------------------- | --------------------------------- |
| bars                 | {{< icon bars >}}                 |
| bell                 | {{< icon bell >}}                 |
| check                | {{< icon check >}}                |
| circle-info          | {{< icon circle-info >}}          |
| code                 | {{< icon code>}}                  |
| facebook             | {{< icon facebook >}}             |
| github               | {{< icon github >}}               |
| google               | {{< icon google >}}               |
| reddit               | {{< icon reddit >}}               |
| researchgate         | {{< icon researchgate >}}         |
| rss-square           | {{< icon rss-square >}}           |
| telegram             | {{< icon telegram >}}             |
| triangle-exclamation | {{< icon triangle-exclamation >}} |
| twitch               | {{< icon twitch >}}               |
| twitter              | {{< icon twitter >}}              |
| whatsapp             | {{< icon whatsapp >}}             |
| x-twitter            | {{< icon x-twitter >}}            |
| xmark                | {{< icon xmark >}}                |
| youtube              | {{< icon youtube >}}              |
