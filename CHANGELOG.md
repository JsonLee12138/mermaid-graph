# Change Log

All notable changes to the "mermaid-graph" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [0.0.3] - 2025-10-23

### Fixed
- **Critical**: Removed `.md` file extension association that caused conflicts with other Markdown plugins (e.g., Markdown Preview Enhanced)
- Fixed preview not updating when switching between `.mmd` and `.md` files
- Fixed webview rendering issues where SVG elements were not properly cleared between renders
- Improved svg-pan-zoom instance lifecycle management to prevent memory leaks

### Improved
- Adjusted menu button priority from `@99` to `@1` for better visibility in editor toolbar
- Enhanced markdown file support with preview button now visible in markdown editors
- Better handling of multi-diagram rendering in markdown files

### Technical
- Webview now properly destroys old svg-pan-zoom instances before creating new ones
- Container elements are fully cleared before rendering new diagrams
- Improved error handling in webview rendering pipeline

## [0.0.2]

### Added
- C4 Diagram syntax highlighting support (Context, Container, Component, Dynamic, Deployment)
- Comprehensive documentation for syntax grammar specification
- Implementation plan for adding new diagram types

## [0.0.1] - Initial Release

- Initial release
- Mermaid syntax highlighting support
- Real-time preview functionality
- SVG zoom and pan interaction
- Support for Mermaid code blocks in Markdown and MDX
