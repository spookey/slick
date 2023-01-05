---
title: Slick Showcase
slug: slick-showcase
description: Showcase of supported markup for Slick theme
date: 2023-01-05T23:42:05+01:00
draft: false
menu:
  main:
    name: Showcase
    weight: 111
categories:
- Showcase
tags:
- Hugo
- Slick
- Theme
series:
- Slick
showmeta: true
showmetadates: true
showmetalinks: true
---

This is some example page to show some supported markup for the
[Slick](https://github.com/spookey/slick) Hugo theme.
<!--more-->

## Content

| Tables         | and                                    | examples          |
| -------------- | -------------------------------------- | ----------------- |
| *italic*       | **bold**                               | `monospace`       |
| [link](#)      | <abbr title="Abbreviation">abbr</abbr> | <mark>mark</mark> |
| <sub>sub</sub> | <sup>sup</sup>                         | what's up?        |

<blockquote>
    <p>
        Press <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>DEL</kbd></kbd> for
        ultimate pleasure!
    </p>
    <footer>— <cite>N. Erd</cite></footer>
</blockquote>


1. See second.
2. See first.
3. You are trapped in a loop!

* Never
* Gonna
    * Give
    * You
        * Up

Definition
: A definition is a statement of the meaning of a term.


Code is displayed in little boxes:

```text
          __________________
         /\  ______________ \
        /::\ \ZZZZZZZZZZZZ/\ \
       /:/\.\ \        /:/\:\ \
      /:/Z/\:\ \      /:/Z/\:\ \
     /:/Z/__\:\ \____/:/Z/  \:\ \
    /:/Z/____\:\ \___\/Z/    \:\ \
    \:\ \ZZZZZ\:\ \ZZ/\ \     \:\ \
     \:\ \     \:\ \ \:\ \     \:\ \
      \:\ \     \:\ \_\:\_\_____\:\ \
       \:\ \     \:\_________________\
        \:\ \    /:/ZZZZZZZZZZZZZZZZZ/
         \:\ \  /:/Z/    \:\ \  /:/Z/
          \:\ \/:/Z/      \:\ \/:/Z/
           \:\/:/Z/________\:\/:/Z/
            \::/Z/____________\/Z/
             \/ZZZZZZZZZZZZZZZZZ/
 
```


It ain't ``much``, but it's ``honest`` work!

---

```text
This is some really long line of text, just to check how this pages behaves if something like that occurs.
Whatever!
```

---

{{< highlight python "linenos=table,hl_lines=3 6 11-13,linenostart=99989" >}}
class Silly(object):
    '''This is just some silly example code'''
    def __init__(self, value):
        self.value = value

    def stuff(self):
        return 'value is {}'.format(self.value)


def main():
    silly = Silly(42)
    print(silly.stuff())
    return True


if __name__ == '__main__':
    exit(not main())
{{< / highlight >}}

---

{{< highlight python "linenos=inline,hl_lines=3 6 11-13,linenostart=99989" >}}
class Silly(object):
    '''This is just some silly example code'''
    def __init__(self, value):
        self.value = value

    def stuff(self):
        return 'value is {}'.format(self.value)


def main():
    silly = Silly(42)
    print(silly.stuff())
    return True


if __name__ == '__main__':
    exit(not main())
{{< / highlight >}}

Text
