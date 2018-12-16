# Slick Temple

A Hugo theme focused on content, cleanliness, speed, responsiveness and privacy.

> This is a fork of [temple](https://github.com/aos/temple) with many
  improvements.

> Temple is a fork of [nofancy](https://github.com/gizak/nofancy) with many
  improvements.


## Table of Contents
* [Features](#features)
* [Installation](#installation)
* [Customizing](#customizing)
* [Contributing](#contributing)
* [License](#license)


## Features
The main features of this theme include:
* Page load speed optimizations (scores 98/100 on PageSpeed)
* Multiple categories as navigation tabs
* Supports taxonomies of tags, categories and series with their own pages
* Footer with fully customizable links and RSS


## Installation
Just download the theme or clone it into
your `themes/` directory:
```
$ cd themes && git clone https://github.com/spookey/slick_temple.git
```
Then reference it in your `config`:
```
theme = "slick_temple"
```
Or when building the site, pass it in to the CLI:
```
$ hugo -t slick_temple
```

## Customizing
Your `config` file will hold all your options.

Please have a look into the `example` folder for a working example.

There is also a fixed `About` page on the navbar. Create it using:
```
$ hugo new about
```

## Contributing
Contributions are welcome.

**Features**:
If you are adding a feature, fork the repository, create a new branch
for your feature and submit a PR.
Please make sure to put documentation for your new feature:
- Place a comment about what your feature is doing above the code.
- If making additions that will affect the `config` file, make sure you update
  the [config.yaml](example/config.yaml) in the `example` folder.

**Issues/Bugs**:
Submit a new issue with information about your issue and/or bug. If you
have a solution, then submit a new PR with the guidelines posted above in the
**features** section and link your issue to it using the keyword "[*closes*](https://help.github.com/articles/closing-issues-using-keywords/)".


## License
Licensed under the MIT License. See the [LICENSE](LICENSE).
