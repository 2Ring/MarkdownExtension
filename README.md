# 2ring-markdown-extension README

The 2Ring Markdown Extension should be used for editing internal documentation files.

## Features

The extension contains support for the following markup:
> ```
> ::: classNameOne classNameTwo
> content
> :::
> ```
> results in:
> ```html
> <div class="classNameOne classNameTwo">content<div>
> ```

> ```plain
> :fa-icon:
> :fas-icon:
> :far-icon:
> :fab-icon:
> ```
> results in:
> ```html
> <i class="fa fa-icon"></i>
> <i class="fas fa-icon"></i>
> <i class="far fa-icon"></i>
> <i class="fab fa-icon"></i>
> ```

> ```plain
> [ ] for checkboxes
> [x] for filled checkboxes
> ```

> ```plain
> ^ok^
> ^sample:custom^
> ```
> results in:
> ```html
> <span class="btn btn-primary">ok</span>
> <span class="custom">sample</span>
> ```

## Table of Contents
The extension also looks for the `%TABLE_OF_CONTENTS%` placeholder line in the markdown file, which will be replaced with an actual table of contents in the preview.

A configuration setting `"2r_md.tocLevel"` can be set to use a specific heading for the generated table of contents.

## Release Notes

### 0.0.6
- Added syntax highlighting to custom markdown syntax. New tokens are:
  - `markup.container.markdown`
  - `meta.container.content`
  - `meta.container.classes`
  - `punctuation.definition.container.markdown`
  - `markup.span.inline.markdown`
  - `meta.inline.span.text`
  - `meta.inline.span.classes`
  - `meta.inline.span.classes.delimiter`

### 0.0.5
- Added commands for changing text to different formatted spans:
  - List label
  - Annotation
  - Link

### 0.0.4
- Changed button plugin to span plugin.

### 0.0.3
- Configurable Table of Contents heading level.

### 0.0.2
- Support for any container.
- Support for button classes.

### 0.0.1

- Initial version.
