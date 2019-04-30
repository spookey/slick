# Changelog
All notable changes to this project will be documented in this file.

The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Added
- Created some 404 page.
- Display ``README.md`` file in *changelog* site - rewritten shortcode template
  to support this.

### Changed
- Replaced hardcoded text in the 404 page with something freely configurable.
- Updated ``rollup``, ``autoprefixer`` and inner dependencies.
- Dropped usage of now deprecated Page's ``.Hugo`` and ``.URL`` functions.
- Rewritten terms listing to use the taxonomy pages - this avoids manual
  creation of links, allows usage of link titles and outputs proper
  taxonomy names (instead of only lowercased ones).

### Fixed
- Reintroduce left aligning of subtitle on small viewports;
  Prevents missplaced subtitle when no site navigation is configured.


## [v0.2.1]

### Added
- Added new example site called *changelog* - displaying this file.

### Changed
- Moved old exampleSite into ``_sites/example``, using a symlink to keep
  (required) ``exampleSite`` intact.
- Updated ``autoprefixer``.
- Let ``build-example.js`` script pass through the exit code of hugo on error.
- Renamed ``build-example.js`` to ``build-site.js``.
- Make ``build-site.js`` evaluate some commandline flag to build any site below
  ``_sites``. Use e.g. ``npm run site -- changelog`` to build *changelog*.
- Dropped right aligning of the subtitle on smaller viewports.
- Changed the breakpoint size in the JavaScript to match with the CSS.

### Fixed
- Allow ``build-site.js`` script to be launched from any directory.
- Fix spacing issues for inline code tags and leading indent of code blocks.
- Changed the order how the grid of ``purecss`` is bundled together.
  Fixes issue where the responsive grid elements did not work.


## [v0.2.0]

### Added
- Introduced ``showNavHeader`` setting which allows hiding the top
  navigation with title/subtitle if set to ``false``.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.
- Introduced ``showEmptyPagination`` setting which hides the pagination
  if there is not enough content to paginate if set to ``false``.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.
- Added setting ``showMetaDates`` which allows hiding the date field of posts.
- Added build target for dist versions of assets without deleting them first.
  This prevents a parallel running ``hugo serve`` from getting confused.
- Added setting ``showMetaLinks`` which allows hiding the meta info of posts.
- Introduced new ``menu.meta`` navigation settings &rarr; meta info links for
  posts are now freely configurable: Names and URLs can be changed, Titles may
  be set, ordering (``weight``) can be influenced.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.
- Added meta links to taxonomy RSS feeds in the html header.

### Changed
- Option to show full content is now called ``showFullContent`` (camelCase).
- Replaced all ``cond isset ($.Site.Params "foo") $.Site.Params.foo "bar"``
  constructs with ``default "bar" $.Site.Params.foo``.
- Changed all relative URLs inside ``README.md`` so the demo page does
  not have broken links.
- Clarified consequences when title is not set in config.
- Set ``preserveTaxonomyNames`` to true for ``exampleSite/config.toml``
  (allows to spot bugs early from improper taxonomy handling).
- Updated ``autoprefixer`` and ``rollup``.
- Option to format date is now called ``dateFmt`` (camelCase).
- Set fallback date (if ``dateFmt`` not set) to RFC822.
- Renamed ``footer-content`` CSS class to ``footer``.
- Introduced ``navigation`` CSS class wrapping ``navigation-header`` and
  ``navigation-content``.
- Display of subtitle will not be right aligned anymore on small viewports.
- Using ``path.Join`` to construct URLs - This is more robust if any part
  contains leading or trailing slashes.
- Information of meta links for posts is not hardcoded anymore and can be
  configured using ``menu.meta`` setting.

### Fixed
- Cleaned up some minor parts (mostly whitespace and formatting issues).
- Adjusted line below header to relate to the new ``header`` class.
- Ensured that an empty navigation does not draw an empty
  ``navigation-content`` container.
  &rarr; This allows a site to be completely without any navigation, only one
  of both, or all of them.
- Added a ``clearfix`` CSS rule to prevent display issues with sites that only
  use a subtitle as ``navigation``.


## [v0.1.5] - 2019-03-02

### Added
- Links in the header and footer now honor and display the title attribute.

### Changed
- Using sensible URLs for the ``exampleSite/config.toml`` footer links.
- Unified headline style outside and inside post content.
- Updated ``rollup``.

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
  Thanks [@onedrawingperday](https://github.com/onedrawingperday) for the
  hint and solution.


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
- Some screenshots.

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
- Added ``build-example.js`` script to build ``exampleSite``
  locally (through ``node``).
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


[Unreleased]:   https://github.com/spookey/slick/compare/v0.2.1...HEAD
[v0.2.1]:       https://github.com/spookey/slick/compare/v0.2.0...v0.2.1
[v0.2.0]:       https://github.com/spookey/slick/compare/v0.1.5...v0.2.0
[v0.1.5]:       https://github.com/spookey/slick/compare/v0.1.4...v0.1.5
[v0.1.4]:       https://github.com/spookey/slick/compare/v0.1.3...v0.1.4
[v0.1.3]:       https://github.com/spookey/slick/compare/v0.1.2...v0.1.3
[v0.1.2]:       https://github.com/spookey/slick/compare/v0.1.1...v0.1.2
[v0.1.1]:       https://github.com/spookey/slick/compare/v0.1.0...v0.1.1
[v0.1.0]:       https://github.com/spookey/slick/compare/6bfdc70...v0.1.0
[Pre-Fork]:     https://github.com/spookey/slick/compare/3411e81...6bfdc70
