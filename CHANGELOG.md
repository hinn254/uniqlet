# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.2] - 2025-09-13

### Changed
- Updated package dependencies

## [0.1.1] - 2025-09-10

### Changed
- Updated package dependencies

## [0.1.0] - 2025-09-10

### Added
- Initial release of uniqlet
- Core functionality for generating random IDs with configurable length
- Prefix support with validation
- URL-safe alphabet using Crockford Base32 encoding
- Input validation and error handling
- Utility functions for parsing generated IDs:
  - `getPrefix()` - Extract prefix from generated ID
  - `getSuffix()` - Extract suffix from generated ID
  - `parseUniqlet()` - Parse ID into prefix and suffix object
- TypeScript support with full type definitions
- Comprehensive documentation and usage examples
- MIT license
- Test suite with vitest

### Features
- ⚡ Super small & dependency-free
- 🔑 Configurable length (1-1000 characters)
- 🏷️ Prefix support with validation (lowercase letters, digits, underscores)
- 🌍 URL-safe alphabet (Crockford Base32)
- 🛡️ Input validation & error handling
- 🔧 Utility functions for parsing IDs

[Unreleased]: https://github.com/hinn254/uniqlet/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/hinn254/uniqlet/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/hinn254/uniqlet/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/hinn254/uniqlet/releases/tag/v0.1.0
