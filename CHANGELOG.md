# Changelog
All notable changes to this project will be documented in this file.

The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Added
- Introduced ``showNavHeader`` setting which allows hiding the top
  navigation with title/subtitle if set to ``false``.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.
- Introduced ``showEmptyPagination`` setting which hides the pagination
  if there is not enough content to paginate if set to ``false``.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.

### Changed
- Option to show full content is now called ``showFullContent`` (camelCase).
- Replaced all ``cond isset ($.Site.Params "foo") $.Site.Params.foo "bar"``
  constructs with ``default "bar" $.Site.Params.foo``.
- Changed all relative URLs inside ``README.md`` so the demo page does
  not have broken links.
- Clarified consequences when title is not set in config.

## [v0.1.5] - 2019-03-02

### Added
- Links in the header and footer now honor and display the title attribute.

### Changed
- Using sensible URLs for the ``exampleSite/config.toml`` footer links.
- Unified headline style outside and inside post content.
- Updated ``rollup``

### Fixed
- Changed some tags to output valid html.
- Fix cursor display for "Go to top" button.


## [v0.1.4] - 2019-03-02

### Added
- Ability to add custom stylesheet to the header.
  Thanks [@dtieber](https://github.com/dtieber) for the pull request.
- Explicit check if files exist on disk before including them
  (custom stylesheet, favicon) - This avoids unnecessary 404 requests.
- Introduced this ``CHANGELOG.md`` file.

### Fixed
- Generation of URLs when BaseURL is below some subfolder.
  This fixes the [demo preview](https://themes.gohugo.io/theme/slick/)
  on the Hugo themes site.
  Thanks [@onedrawingperday](https://github.com/onedrawingperday) for the hint and solution.


## [v0.1.3] - 2019-02-24

### Changed
- Updated ``autoprefixer``, ``postcss-discard-comments``, ``rollup``
  and ``rollup-plugin-postcss``.
- Replaced ``rollup-plugin-copy`` with ``rollup-plugin-copier``.
  The former package used deprecated build hooks from ``rollup``.

### Removed
- Dropped ``postcss-advanced-variables`` package from the build toolchain.
  This allows proper linting of CSS files.


## [v0.1.2] - 2019-01-16

### Added
- Some screenshots

### Changed
- Replaced ``trash-cli`` package with ``del-cli`` for the build toolchain.
- Using recommended url inside the ``exampleSite/config.toml``.
- Updated ``source-sans-pro`` and ``source-serif-pro`` fonts.
- Updated ``autoprefixer`` and ``rollup``.

## [v0.1.1] - 2018-12-23

### Changed
- Updated inner dependencies inside the build toolchain.

### Fixed
- Some issues/missing parts in the ``exampleSite/config.toml``.
- Placement of images inside ``figure`` tag is now centered on page.
- Links to categories, tags and series are now properly generated
  when the names contain spaces.


## [v0.1.0] - 2018-12-21

### Added
- Added ``.editorconfig`` file.
- Started ``packace.json`` file for ``npm``.
- Added ``source-code-pro``, ``source-sans-pro`` and ``source-serif-pro`` fonts.
- Added ``purecss`` as css framework.
- Implemented a build toolchain using ``rollup``,
  ``postcss-import``, ``postcss-url``.
- Added Twitter Cards, Open Graph and Schema.org integration
  (using internal ``hugo`` templates).
- Added a fully customizable menu for the footer.
- Added RSS Feed with complete entries (Atom format).
- Added a fully customizable menu for the header.
- Implemented pagination for posts and taxonomies displays.
- Added ``Tomorrow Night`` color scheme for syntax highlighting.
- Extended build toolchain with ``autoprefixer``,
  ``postcss-discard-comments``, ``postcss-advanced-variables``.
- Implemented a custom stylesheet using colors from the
  ``Tomorrow`` color scheme.
- Added script to build ``exampleSite`` locally (through ``npm``).
- Extended build toolchain with run commands
  (``dev``, ``dist``, ``version``, etc...).


### Changed
- Unified whitespace inside all templates from the fork.
- Updated entries for ``exampleSite`` to more recent versions.
- Copyright notice in footer sets year automatically.
- Merged main and font stylesheets into one.
- Updated ``README.md`` with current information.
- Improved display of page metadata.
- Changed inclusion of templates using blocks instead of partials.
- Reduced css size (including only parts of ``purecss`` which are in use).

### Fixed
- Replaced "Back to top" feature with some proper javascript implementation.
- Using RFC 3339 time format inside ``<time>`` tags.
- Unified and simplified the usage of the css grid columns.
- Improve behaviour when config entries are missing
  (by setting/using sane defaults).

### Removed
- Dropped ``custom_head.html`` Template.
- Dropped Google Analytics feature.
- Dropped Google Fonts for enhanced privacy.
- Dropped highlightjs (``hugo`` can do that using ``pygments`` or ``chroma``).
- Cleaned many parts with duplicated code.
- Dropped unused ``single.html`` Template.
- Dropped all prebuilt stylesheets (building them with ``rollup`` now).

## [Pre-Fork]

Please have a look into the fork:
[Temple](https://github.com/aos/temple)

And the fork of the fork:
[Nofancy](https://github.com/gizak/nofancy)


[Unreleased]:   https://github.com/spookey/slick/compare/v0.1.5...HEAD
[v0.1.5]:       https://github.com/spookey/slick/compare/v0.1.4...v0.1.5
[v0.1.4]:       https://github.com/spookey/slick/compare/v0.1.3...v0.1.4
[v0.1.3]:       https://github.com/spookey/slick/compare/v0.1.2...v0.1.3
[v0.1.2]:       https://github.com/spookey/slick/compare/v0.1.1...v0.1.2
[v0.1.1]:       https://github.com/spookey/slick/compare/v0.1.0...v0.1.1
[v0.1.0]:       https://github.com/spookey/slick/compare/6bfdc70...v0.1.0
[Pre-Fork]:     https://github.com/spookey/slick/compare/3411e81...6bfdc70
