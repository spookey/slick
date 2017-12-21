# Temple 

A Hugo theme focused on content, cleanliness, speed and responsiveness. The main
goal of this theme is to be simple and fast.

> This is a fork of [nofancy](https://github.com/gizak/nofancy) with many
improvements.

A live version of this theme can be found 
[on my personal blog](https://aos.github.io).

![Main List](/images/tn.png)
![Content](/images/screenshot.png)

## Table of Contents
* [Features](#features)
* [Getting Started](#getting-started)
* [Customizing](#customizing)
* [License](#license)

## Features
The main features of this theme include:
* Page load speed optimizations (scores 98/100 on PageSpeed)
* Syntax highlighting with `highlightjs`
* Multiple categories as navigation tabs
* Tags and categories have their own pages
* Footer with variable social links and RSS
* Google analytics enabled

## Getting Started
If you have not already created a blog, I recommend you check out my [getting
started guide](https://aos.github.io/2017/11/23/practical-guide-to-setting-up-a-hugo-blog/) for a comprehensive overview. Otherwise, just download it or clone it into
your `themes/` directory:
```
$ cd themes && git clone https://github.com/aos/temple.git
```
Then reference it in your `config`:
```
theme = "temple"
```
Or when building the site, pass it in to the CLI:
```
$ hugo -t temple
```

## Customizing
Your `config` file will hold all your options:
```
baseURL = "https://aos.github.io/"
title = "Your Blog Title"
theme = "temple"
# If not set, it will not appear. Otherwise it will show below your footer links
copyright = "(c) 2008 - 2014"

[params]
  # Enables syntax highlighting
  highlight = true 
  # Supports highlighting for languages not included in the original pack
  # See https://highlightjs.org/download/
  hjslangs = [go, elixir]

# Builds a list page for each category given
[taxonomies]
  tag = "tags"
  category = "categories"

[author]
  name = "Aos Dabbagh"
  github = "aos"
  email = "your@email.com"
  gaid = "Your Google Analytics ID"
  twitter = "twitterID"
```

There is also a fixed `About` page on the navbar. Create it using:
```
$ hugo new about
```

## License
Licensed under the MIT License. See the [LICENSE](LICENSE).
