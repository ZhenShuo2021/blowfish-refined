---
title: "Syntax Highlighting"
date: 2019-03-10
description: "A brief description of Hugo Shortcodes"
summary: "Sample of syntax highlighting."
tags: ["syntax highlighting", "codeblock", "sample"]
type: 'sample'
weight: 20
---

## Fenced code blocks

In its default configuration, Hugo highlights code examples within fenced code blocks, following this form:

````text {file="content/example.md"}
```LANG [OPTIONS]
CODE
```
````

```bash
declare a=1
echo $a
```

CODE
: The code to highlight.

LANG
: The language of the code to highlight. Choose from one of the supported languages. This value is case-insensitive.

OPTIONS
: One or more space-separated or comma-separated key-value pairs wrapped in braces. Set default values for each option in your site configuration. The key names are case-insensitive.

For example, with this Markdown:

````text
```go
package main

import "fmt"

func main() {
    for i := 0; i < 3; i++ {
        fmt.Println("Value of i:", i)
    }
}
```
````

Hugo renders this:

```go {linenos=inline, hl_lines=[3,"6-8"], file="content/example.md"}
package main

import "fmt"

func main() {
    for i := 0; i < 3; i++ {
        fmt.Println("Value of i:", i)
    }
}
```

## Options

anchorLineNos
: (`bool`) Whether to render each line number as an HTML anchor element, setting the `id` attribute of the surrounding `span` element to the line number. Irrelevant if `lineNos` is `false`. Default is `false`.

codeFences
: (`bool`) Whether to highlight fenced code blocks. Default is `true`.

guessSyntax
: (`bool`) Whether to automatically detect the language if the `LANG` argument is blank or set to a language for which there is no corresponding [lexer](g). Falls back to a plain text lexer if unable to automatically detect the language. Default is `false`.

  > [!note]
  > The Chroma syntax highlighter includes lexers for approximately 250 languages, but only 5 of these have implemented automatic language detection.

hl_Lines
: (`string`) A space-delimited list of lines to emphasize within the highlighted code. To emphasize lines 2, 3, 4, and 7, set this value to `2-4 7`. This option is independent of the `lineNoStart` option.

hl_inline
: (`bool`) Whether to render the highlighted code without a wrapping container. Default is `false`.

lineAnchors
: (`string`) When rendering a line number as an HTML anchor element, prepend this value to the `id` attribute of the surrounding `span` element. This provides unique `id` attributes when a page contains two or more code blocks. Irrelevant if `lineNos` or `anchorLineNos` is `false`.

lineNoStart
: (`int`) The number to display at the beginning of the first line. Irrelevant if `lineNos` is `false`. Default is `1`.

lineNos
: (`any`) Controls line number display. Default is `false`.

    - `true`: Enable line numbers, controlled by `lineNumbersInTable`.
    - `false`: Disable line numbers.
    - `inline`: Enable inline line numbers (sets `lineNumbersInTable` to `false`).
    - `table`: Enable table-based line numbers (sets `lineNumbersInTable` to `true`).

lineNumbersInTable
: (`bool`) Whether to render the highlighted code in an HTML table with two cells. The left table cell contains the line numbers, while the right table cell contains the code. Irrelevant if `lineNos` is `false`. Default is `true`.

noClasses
: (`bool`) Whether to use inline CSS styles instead of an external CSS file. Default is `true`. To use an external CSS file, set this value to `false` and generate the CSS file from the command line:

```text
hugo gen chromastyles --style=monokai > syntax.css
```

style
: (`string`) The CSS styles to apply to the highlighted code. Case-sensitive. Default is `monokai`. See [syntax highlighting styles].

tabWidth
: (`int`) Substitute this number of spaces for each tab character in your highlighted code. Irrelevant if `noClasses` is `false`. Default is `4`.

wrapperClass
: (`string`) The class or classes to use for the outermost element of the highlighted code. Default is `highlight`.

[syntax highlighting styles]: /quick-reference/syntax-highlighting-styles/

## Examples

### Python

```python
items = [  # list of dicts
    {"foo": "bar", "nums": [1, 2, 3]},
    {"foo": "baz", "nums": [4, 5, 6]}
]
for i in items:
    total = sum(i["nums"])  # sum numbers
    print(f"{i['foo']}: {total}")
```

### Javascript

```javascript
const items = [  // array of objects
    { foo: "bar", nums: [1, 2, 3] },
    { foo: "baz", nums: [4, 5, 6] }
];
items.forEach(i => {
    const total = i.nums.reduce((a, b) => a + b, 0);  // sum numbers
    console.log(`${i.foo}: ${total}`);
});
```

### C

```c
#include <stdio.h>

typedef struct {
    char* foo;
    int nums[3];
} Item;  // struct with fixed array

int main() {
    Item items[] = {
        {"bar", {1, 2, 3}},
        {"baz", {4, 5, 6}}
    };
    for (int i = 0; i < 2; i++) {
        int sum = 0;
        for (int j = 0; j < 3; j++)
            sum += items[i].nums[j];
        printf("%s: %d\n", items[i].foo, sum);  // print sum
    }
    return 0;
}
```

### Java

```java
import java.util.*;

public class Main {
    static class Item {
        String foo;
        int[] nums;
        Item(String foo, int[] nums) { this.foo = foo; this.nums = nums; }
    }

    public static void main(String[] args) {
        Item[] items = {
            new Item("bar", new int[]{1, 2, 3}),
            new Item("baz", new int[]{4, 5, 6})
        };
        for (Item i : items) {
            int sum = 0;
            for (int n : i.nums)
                sum += n;
            System.out.printf("%s: %d%n", i.foo, sum);  // print sum
        }
    }
}
```

### Go

```go
package main

import "fmt"

type Item struct {
    foo  string
    nums [3]int
}  // struct with fixed array

func main() {
    items := []Item{
        {"bar", [3]int{1, 2, 3}},
        {"baz", [3]int{4, 5, 6}},
    }
    for _, i := range items {
        sum := 0
        for _, n := range i.nums {
            sum += n
        }
        fmt.Printf("%s: %d\n", i.foo, sum)  // print sum
    }
}
```

### Rust

```rust
fn main() {
    let items = [  // array of tuples
        ("bar", [1, 2, 3]),
        ("baz", [4, 5, 6]),
    ];

    for (foo, nums) in &items {
        let sum: u32 = nums.iter().sum();
        println!("{}: {}", foo, sum);
    }
}
```

### Bash

```bash
#!/bin/bash
items=(
  "bar:1,2,3"
  "baz:4,5,6"
)
for item in "${items[@]}"; do
  foo="${item%%:*}"
  nums="${item#*:}"
  IFS=',' read -ra arr <<< "$nums"
  sum=0
  for val in "${arr[@]}"; do
    ((sum += val))
  done
  echo "$foo: $sum"
done
```

### SQL

```sql
WITH items AS (
  SELECT 'bar' AS foo, ARRAY[1, 2, 3] AS nums
  UNION ALL
  SELECT 'baz', ARRAY[4, 5, 6]
)
SELECT foo, SUM(num) AS total
FROM items, UNNEST(nums) AS num
GROUP BY foo;
```

### PHP

```php
<?php
$items = [  // array of associative arrays
    ["foo" => "bar", "nums" => [1, 2, 3]],
    ["foo" => "baz", "nums" => [4, 5, 6]]
];
foreach ($items as $i) {
    $sum = array_sum($i["nums"]);  // sum numbers
    echo "{$i['foo']}: $sum\n";
}
?>
```

### MATLAB

```matlab
items = struct( ...
    'foo', {'bar', 'baz'}, ...
    'nums', {[1, 2, 3], [4, 5, 6]} ...
);  % array of structs

for i = 1:length(items)
    sumVal = sum(items(i).nums);  % sum numbers
    fprintf('%s: %d\n', items(i).foo, sumVal);
end
```
