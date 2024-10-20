# Changelog

All notable changes to this project will be documented in this file.

The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

—

## [v0.5.0] - 2024-10-20

### Added

- Allow usage of `.Params` in main and footer menus.
- Allow usages of `.Pre` & `.Post` in main, meta and footer menus.

### Changed

- Draw author information from `.Params.Author` instead of `.Author`.
  (Please adjust your configuration accordingly!)
- Update example page configuration for new `.pagination` setting.
- Updated `@rollup/plugin-typescript`, `del-cli`, `autoprefixer`, `cssnano`,
  `postcss-discard-comments`, `postcss-import`, `postcss`, `rollup`, `tslib`,
  `typescript` and inner dependencies.

### Fixed

- Add missing XML declaration in rss feeds (`<?xml … ?>`).

### Removed

- Drop inclusion of `.Params.css` setting, but add examples in `head.html`
  partial

## [v0.4.6] - 2024-01-29

### Added

- Missing is-active detection in footer menu.
- Ability to freely influence the output order of pages.
  Use `orderPageParam` & `orderPageReverse` to specify any combination.
  Default is like `.byDate.Reversed`. (Followup from [v0.4.4] & [v0.4.5]).
- Deprecation notice when using `.Site.Params.css`.
  Use the `head.html` partial to add arbitrary stuff to the `<head/>`
  of the page!

### Changed

- Reflect changed branch name in `README.md`.
- Explicitly order menus (header & footer) by weight.
- Determine pages to display on main index via `section` instead of `type`.

### Fixed

- Duplicated headline `README.md`.
- Restore is-active detection in menus.
  This can only be done via configuration (examples were adjusted).
  tldr; replace `url` with `pageref` and see the comments of this
  [issue](https://github.com/gohugoio/hugo/issues/9150#issuecomment-965798975)
  for more details.
- Only add `author` meta tag if site author is configured.

## [v0.4.5] - 2024-01-21

### Added

- Missing `integrity` parameters for (both built in and custom) CSS files
  and the favicon.
- Add `crossorigin` parameters for all CSS & JS files.

### Changed

- Bump typescript compilation target from `ES3` to `es6`
  (should have done this years ago ^^).
- Updated `rollup` and inner dependencies.
- Code to render RSS link in the footer is more resilient now.

### Fixed

- Explicitly order pages in lists and RSS feed by date
  (Followup from [v0.4.4]).
- Wrong escaping inside `integrity` parameters for CSS and JS files.
- Also adjust all places where wrong escaping issues could occur
  (`atom:link` w. rel="self" in RSS feed; links to RSS feeds; link to favicon).

### Removed

- Drop ability to have footer links without `url`.
  They make no sense, and worse look ugly.
- Ability to load custom css files or favicons from the `static` folder.
  Only `assets` folder is supported as it supports pipes with fingerprinting.
- Drop `url` to hugo page in RSS feed `generator` tag
  (unifies with `hugo.Generator` output).

## [v0.4.4] - 2024-01-18

### Changed

- Updated `@rollup/plugin-terser`, `@rollup/plugin-typescript`, `autoprefixer`,
  `cssnano`, `del-cli`, `postcss-discard-comments`, `postcss-import`, `rollup`,
  `source-serif`, `tslib`, `typescript` and inner dependencies.

### Fixed

- Adjust minimal version in `theme.toml`.
- Explicitly order pages by date on main page.
  Thanks [@fami-com](https://github.com/fami-com) for the hint.

## [v0.4.3] - 2023-01-05

### Added

- Provide some global `centered` css helper class to be used in custom
  partials and/or shortcodes.
- Newer screenshots.

### Changed

- Overwrite `text-transform: uppercase` statement in main menu heading.
  This is some style decision from `purecss` itself. But we assemble
  navigation differently (two separate ones), so it's not required.
- Add some space to definition list styling.
- Center main menu items on small viewports, where other menu items
  stay horizontal in this case.

### Fixed

- Overall width of menus is now consistent.
- Menus and their items do not overflow anymore.

### Removed

- Remove logic to toggle styling of navigation depending on viewport
  from javascript. This is now done via css via `@media` queries.
- Drop `pull-start` and `pull-end` css helpers.

## [v0.4.2] - 2023-01-01

### Added

- Example configuration on how to adjust creation of `sitemap.xml`.
- Some template to create `robots.txt`. Include all pages, but disallows
  the taxonomy list pages.

### Changed

- Updated `@rollup/plugin-terser`, `rollup` and inner dependencies.

### Fixed

- Turn chained filters (using `|`) into explicit function calls.

### Removed

- Drop `preserveTaxonomyNames` configuration from example pages as this
  setting was removed in Hugo 0.55.

## [v0.4.1] - 2022-12-19

### Changed

- Migrate build process to major versions of `@rollup/plugin-typescript`,
  `@rollup/plugin-terser` and latest `rollup` (v3).
- Updated `autoprefixer`, `cssnano`, `postcss-import`, `purecss`, `tslib`,
  `typescript` and inner dependencies.

### Removed

- Drop `clearfix` CSS rule as it is not required anymore.

## [v0.4.0] - 2022-10-09

### Added

- `integrity` property to script tags.
- Introduced `showRssLink` setting to control display of RSS link
  in the footer.
  Thanks [@ivan3bx](https://github.com/ivan3bx) for the idea.
- `partials/head.html` - It may be overwritten to place any content into
  the `<head/>` of the build output.

### Changed

- Updated `purecss`, `@rollup/plugin-typescript`, `autoprefixer`, `cssnano`,
  `del-cli`, `postcss-discard-comments`, `postcss-import`, `rollup`, `tslib`,
  `typescript` and inner dependencies.

## [v0.3.9] - 2022-01-29

### Added

- `.hugo_build.lock` of example sites to `.gitignore`.

### Changed

- Updated `@rollup/plugin-typescript`, `autoprefixer`, `cssnano`,
  `postcss-discard-comments`, `rollup`, `rollup-plugin-postcss`,
  `typescript` and inner dependencies.

## [v0.3.8] - 2021-10-02

### Added

- Some `demosite` entry into `theme.toml`.

### Changed

- Major cleanup of `CHANGELOG.md`: unify backtick usage; add missing
  dates to releases.
- Updated `autoprefixer`, `rollup` and inner dependencies.

### Fixed

- Apply `showMeta` setting also on posts in list view.

### Removed

- Drop `build-site.js` script as it is unused.

## [v0.3.7] - 2021-09-14

### Changed

- Switched back to stable version of `source-code-pro` again as it has been
  released upstream (Introduced in [v0.3.3]).
- Updated `autoprefixer`, `cssnano`, `del-cli`, `rollup`,
  `@rollup/plugin-typescript`, `rollup-plugin-postcss`, `source-sans-pro`,
  `tslib`, `typescript` and inner dependencies.

### Fixed

- Removed duplicate key inside `tsconfig.json`.

## [v0.3.6] - 2021-07-05

### Changed

- Increased speed of *Scroll to top* by a factor of four.
  Scrolling on very long pages takes forever, so fix that.
- Only add `pure-img` & `pure-table` CSS classes to existing list instead of
  replacing them completely. This allows more flexible customization either
  inplace or through the `custom.css`.
- Updated `rollup`, `typescript` and inner dependencies.

## [v0.3.5] - 2021-06-20

### Added

- Added setting `showMeta` which allows hiding the title, date and meta info
  of posts in single view.

### Changed

- Reformatted all `.md` files so markdown lint should not report any issues.
- Updated `autoprefixer`, `cssnano`, `del-cli`, `postcss-discard-comments`,
  `rollup`, `tslib`, `typescript` and inner dependencies.

### Fixed

- Cleanup html to render the subtitle with proper placement inside the navbar.

## [v0.3.4] - 2021-05-14

### Changed

- Updated `autoprefixer`, `postcss-discard-comments`, `postcss-import`,
  `postcss-url`, `purecss`, `rollup`, `tslib`, `typescript`
  and inner dependencies.
- Switched from `rollup-plugin-typescript2` to `@rollup/plugin-typescript`.
- Switched from `source-sans-pro` and `source-serif-pro` to
  `source-sans` and `source-serif` (got renamed).

### Fixed

- Display of line numbers in inline code blocks.
- Some cruft inside `rollup.config.js`.

## [v0.3.3] - 2021-01-10

### Changed

- Updated `autoprefixer`, `postcss`, `postcss-import`, `rollup`,
  `rollup-plugin-postcss`, `typescript`, `tslib` and inner dependencies.
- Changed all paths inside `rollup.config.js` to be absolute. This reflects
  new API from *postcss* and avoids trouble when building from other contexts.

### Fixed

- Fixed now deprecated contentLanguage configuration values in the examples
- Switched the node package of `source-code-pro` to use the source of the
  `release` branch. This finally fixes black text on black background issue.
  The culprit was a SVG table with colored glyphs in them
  ([original bug](https://github.com/adobe-fonts/source-code-pro/issues/250)).
  Now code samples can be read again.

## [v0.3.2] - 2020-06-06

### Added

- Allow supression of meta information per page.
  Thanks [@rissson](https://github.com/rissson) for the pull request.
- Show last modified date in post meta.
  Thanks [@rissson](https://github.com/rissson) for the pull request.

### Changed

- Updated `purecss`, `autoprefixer`, `rollup`, some of it's plugins,
  `typescript` and inner dependencies.

## [v0.3.1] - 2020-04-02

### Changed

- Switched typescript plugin from `rollup-plugin-typescript`
  to `rollup-plugin-typescript2` to be better aware of errors.
- Adjusted typescript module to fit all conventions.
- Updated `autoprefixer`, `rollup`, some of it's plugins, `typescript`
  and inner dependencies.
- Regular pages (not posts) are omitted on the main index pages.
- Dropped compatibility stylesheet for old Internet Explorer versions.

### Fixed

- Fixed errors in typescript module (some interface not missing, wrong type
  as function parameter).
- Fixed configuration of example site to restore demo on Hugo Themes website.
- Fixed scroll bars for code blocks.

## [v0.3.0] - 2019-11-26

### Added

- Introduced [Hugo Pipes](https://gohugo.io/hugo-pipes/) to include
  CSS and JavaScript files. This introduces fingerprinting
  (Custom stylesheets can now be placed under `assets` to
  fingerprint them as well).
- Enable placement of favicon into `assets` folder to enable fingerprinting
  as well.
- Updated feed template to honor the `services.rss.limit` setting.

### Changed

- Updated `rollup`, `autoprefixer`, fonts and inner dependencies.
- Use local files for screenshots in *changelog* site.
- Reimplemented JavaScript part in typescript for better code quality
  and compatibility.
- Cleanup the `build-sites.js` script using template literals.
- Replaced deprecated `.Site.RSSLink` with `.OutputFormats.Get "RSS"`.
- Changed link building to use `.RelPermalink` or `relUrl` for proper
  `canonifyURLs` behavior.
- Updated `README.md`.
- Added horizontal spacing for all code blocks.

### Fixed

- Prevent adding the `pure-table` CSS class to tables containing
  code listings. This fixes broken display of code, and allows better output
  of line numbers alongside code samples.
- Generate feed from the proper input source to find all matching pages.
- Changed CSS rule to match highlighted line in code blocks.

## [v0.2.2] - 2019-07-27

### Added

- Created some 404 page.
- Display `README.md` file in *changelog* site - rewritten shortcode
  template to support this.

### Changed

- Replaced hardcoded text in the 404 page with something freely configurable.
- Updated `rollup`, `autoprefixer`, `del-cli` and inner dependencies.
- Updated `purecss` and `source-serif-pro` font.
- Dropped usage of now deprecated Page's `.Hugo` and `.URL` functions.
- Rewritten terms listing to use the taxonomy pages - this avoids manual
  creation of links, allows usage of link titles and outputs proper
  taxonomy names (instead of only lowercased ones).

### Fixed

- Reintroduce left aligning of subtitle on small viewports;
  Prevents missplaced subtitle when no site navigation is configured.

## [v0.2.1] - 2019-03-28

### Added

- Added new example site called *changelog* - displaying this file.

### Changed

- Moved old exampleSite into `_sites/example`, using a symlink to keep
  (required) `exampleSite` intact.
- Updated `autoprefixer`.
- Let `build-example.js` script pass through the exit code of hugo on error.
- Renamed `build-example.js` to `build-site.js`.
- Make `build-site.js` evaluate some commandline flag to build any site
  below `_sites`.
  Use e.g. `npm run site -- changelog` to build *changelog*.
- Dropped right aligning of the subtitle on smaller viewports.
- Changed the breakpoint size in the JavaScript to match with the CSS.

### Fixed

- Allow `build-site.js` script to be launched from any directory.
- Fix spacing issues for inline code tags and leading indent of code blocks.
- Changed the order how the grid of `purecss` is bundled together.
  Fixes issue where the responsive grid elements did not work.

## [v0.2.0] - 2019-03-12

### Added

- Introduced `showNavHeader` setting which allows hiding the top
  navigation with title/subtitle if set to `false`.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.
- Introduced `showEmptyPagination` setting which hides the pagination
  if there is not enough content to paginate if set to `false`.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.
- Added setting `showMetaDates` which allows hiding the date field of posts.
- Added build target for dist versions of assets without deleting them first.
  This prevents a parallel running `hugo serve` from getting confused.
- Added setting `showMetaLinks` which allows hiding the meta info of posts.
- Introduced new `menu.meta` navigation settings &rarr; meta info links for
  posts are now freely configurable: Names and URLs can be changed, Titles may
  be set, ordering (`weight`) can be influenced.
  Tanks [@mattt-b](https://github.com/mattt-b) for the idea & subtle hint.
- Added meta links to taxonomy RSS feeds in the html header.

### Changed

- Option to show full content is now called `showFullContent` (camelCase).
- Replaced all `cond isset ($.Site.Params "foo") $.Site.Params.foo "bar"`
  constructs with `default "bar" $.Site.Params.foo`.
- Changed all relative URLs inside `README.md` so the demo page does
  not have broken links.
- Clarified consequences when title is not set in config.
- Set `preserveTaxonomyNames` to true for `exampleSite/config.toml`
  (allows to spot bugs early from improper taxonomy handling).
- Updated `autoprefixer` and `rollup`.
- Option to format date is now called `dateFmt` (camelCase).
- Set fallback date (if `dateFmt` not set) to RFC822.
- Renamed `footer-content` CSS class to `footer`.
- Introduced `navigation` CSS class wrapping `navigation-header` and
  `navigation-content`.
- Display of subtitle will not be right aligned anymore on small viewports.
- Using `path.Join` to construct URLs - This is more robust if any part
  contains leading or trailing slashes.
- Information of meta links for posts is not hardcoded anymore and can be
  configured using `menu.meta` setting.

### Fixed

- Cleaned up some minor parts (mostly whitespace and formatting issues).
- Adjusted line below header to relate to the new `header` class.
- Ensured that an empty navigation does not draw an empty
  `navigation-content` container.
  &rarr; This allows a site to be completely without any navigation, only one
  of both, or all of them.
- Added a `clearfix` CSS rule to prevent display issues with sites that only
  use a subtitle as `navigation`.

## [v0.1.5] - 2019-03-02

### Added

- Links in the header and footer now honor and display the title attribute.

### Changed

- Using sensible URLs for the `exampleSite/config.toml` footer links.
- Unified headline style outside and inside post content.
- Updated `rollup`.

### Fixed

- Changed some tags to output valid html.
- Fix cursor display for "Go to top" button.

## [v0.1.4] - 2019-03-02

### Added

- Ability to add custom stylesheet to the header.
  Thanks [@dtieber](https://github.com/dtieber) for the pull request.
- Explicit check if files exist on disk before including them
  (custom stylesheet, favicon) - This avoids unnecessary 404 requests.
- Introduced this `CHANGELOG.md` file.

### Fixed

- Generation of URLs when BaseURL is below some subfolder.
  This fixes the [demo preview](https://themes.gohugo.io/theme/slick/)
  on the Hugo themes site.
  Thanks [@onedrawingperday](https://github.com/onedrawingperday) for the
  hint and solution.

## [v0.1.3] - 2019-02-24

### Changed

- Updated `autoprefixer`, `postcss-discard-comments`, `rollup`
  and `rollup-plugin-postcss`.
- Replaced `rollup-plugin-copy` with `rollup-plugin-copier`.
  The former package used deprecated build hooks from `rollup`.

### Removed

- Dropped `postcss-advanced-variables` package from the build toolchain.
  This allows proper linting of CSS files.

## [v0.1.2] - 2019-01-16

### Added

- Some screenshots.

### Changed

- Replaced `trash-cli` package with `del-cli` for the build toolchain.
- Using recommended url inside the `exampleSite/config.toml`.
- Updated `source-sans-pro` and `source-serif-pro` fonts.
- Updated `autoprefixer` and `rollup`.

## [v0.1.1] - 2018-12-23

### Changed

- Updated inner dependencies inside the build toolchain.

### Fixed

- Some issues/missing parts in the `exampleSite/config.toml`.
- Placement of images inside `figure` tag is now centered on page.
- Links to categories, tags and series are now properly generated
  when the names contain spaces.

## [v0.1.0] - 2018-12-21

### Added

- Added `.editorconfig` file.
- Started `package.json` file for `npm`.
- Added `source-code-pro`, `source-sans-pro` and
  `source-serif-pro` fonts.
- Added `purecss` as css framework.
- Implemented a build toolchain using `rollup`,
  `postcss-import`, `postcss-url`.
- Added Twitter Cards, Open Graph and Schema.org integration
  (using internal `hugo` templates).
- Added a fully customizable menu for the footer.
- Added RSS Feed with complete entries (Atom format).
- Added a fully customizable menu for the header.
- Implemented pagination for posts and taxonomies displays.
- Added `Tomorrow Night` color scheme for syntax highlighting.
- Extended build toolchain with `autoprefixer`,
  `postcss-discard-comments`, `postcss-advanced-variables`.
- Implemented a custom stylesheet using colors from the
  `Tomorrow` color scheme.
- Added `build-example.js` script to build `exampleSite`
  locally (through `node`).
- Extended build toolchain with run commands
  (`dev`, `dist`, `version`, etc...).

### Changed

- Unified whitespace inside all templates from the fork.
- Updated entries for `exampleSite` to more recent versions.
- Copyright notice in footer sets year automatically.
- Merged main and font stylesheets into one.
- Updated `README.md` with current information.
- Improved display of page metadata.
- Changed inclusion of templates using blocks instead of partials.
- Reduced css size (including only parts of `purecss` which are in use).

### Fixed

- Replaced "Back to top" feature with some proper JavaScript implementation.
- Using RFC 3339 time format inside `<time>` tags.
- Unified and simplified the usage of the css grid columns.
- Improve behaviour when config entries are missing
  (by setting/using sane defaults).

### Removed

- Dropped `custom_head.html` Template.
- Dropped Google Analytics feature.
- Dropped Google Fonts for enhanced privacy.
- Dropped highlightjs (`hugo` can do that using `pygments` or `chroma`).
- Cleaned many parts with duplicated code.
- Dropped unused `single.html` Template.
- Dropped all prebuilt stylesheets (building them with `rollup` now).

## [Pre-Fork]

Please have a look into the fork:
[Temple](https://github.com/aos/temple)

And the fork of the fork:
[Nofancy](https://github.com/gizak/nofancy)

[Unreleased]:   https://github.com/spookey/slick/compare/v0.5.0...HEAD
[v0.5.0]:       https://github.com/spookey/slick/compare/v0.4.6...v0.5.0
[v0.4.6]:       https://github.com/spookey/slick/compare/v0.4.5...v0.4.6
[v0.4.5]:       https://github.com/spookey/slick/compare/v0.4.4...v0.4.5
[v0.4.4]:       https://github.com/spookey/slick/compare/v0.4.3...v0.4.4
[v0.4.3]:       https://github.com/spookey/slick/compare/v0.4.2...v0.4.3
[v0.4.2]:       https://github.com/spookey/slick/compare/v0.4.1...v0.4.2
[v0.4.1]:       https://github.com/spookey/slick/compare/v0.4.0...v0.4.1
[v0.4.0]:       https://github.com/spookey/slick/compare/v0.3.9...v0.4.0
[v0.3.9]:       https://github.com/spookey/slick/compare/v0.3.8...v0.3.9
[v0.3.8]:       https://github.com/spookey/slick/compare/v0.3.7...v0.3.8
[v0.3.7]:       https://github.com/spookey/slick/compare/v0.3.6...v0.3.7
[v0.3.6]:       https://github.com/spookey/slick/compare/v0.3.5...v0.3.6
[v0.3.5]:       https://github.com/spookey/slick/compare/v0.3.4...v0.3.5
[v0.3.4]:       https://github.com/spookey/slick/compare/v0.3.3...v0.3.4
[v0.3.3]:       https://github.com/spookey/slick/compare/v0.3.2...v0.3.3
[v0.3.2]:       https://github.com/spookey/slick/compare/v0.3.1...v0.3.2
[v0.3.1]:       https://github.com/spookey/slick/compare/v0.3.0...v0.3.1
[v0.3.0]:       https://github.com/spookey/slick/compare/v0.2.2...v0.3.0
[v0.2.2]:       https://github.com/spookey/slick/compare/v0.2.1...v0.2.2
[v0.2.1]:       https://github.com/spookey/slick/compare/v0.2.0...v0.2.1
[v0.2.0]:       https://github.com/spookey/slick/compare/v0.1.5...v0.2.0
[v0.1.5]:       https://github.com/spookey/slick/compare/v0.1.4...v0.1.5
[v0.1.4]:       https://github.com/spookey/slick/compare/v0.1.3...v0.1.4
[v0.1.3]:       https://github.com/spookey/slick/compare/v0.1.2...v0.1.3
[v0.1.2]:       https://github.com/spookey/slick/compare/v0.1.1...v0.1.2
[v0.1.1]:       https://github.com/spookey/slick/compare/v0.1.0...v0.1.1
[v0.1.0]:       https://github.com/spookey/slick/compare/6bfdc70...v0.1.0
[Pre-Fork]:     https://github.com/spookey/slick/compare/3411e81...6bfdc70
