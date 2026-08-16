# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [1.0.2] - 2026-08-16

### Added

- Globally unique WeiDU **LABEL**s on both install components (`PF#-kensai-reforged-replace-vanilla`, `PF#-kensai-reforged-add-kensai-adept`), quoted so the `PF#` modder prefix is not treated as a comment, per the [G3 LABEL tutorial](https://www.gibberlings3.net/forums/topic/32516-tutorial-what-is-label-why-you-should-create-it-and-how-to-do-it-properly/). Project Infinity metadata already declares `LabelType = GloballyUnique`.

---

## [1.0.1] - 2026-08-12

### Fixed

- **Removed** the HANDLE_CHARSETS call from `SETUP-PF#kensai.tp2`. This mod is EE-only and the TRA files are already UTF-8, so charset conversion isn’t needed.

---

## [1.0.0] - 2026-08-11

### Added

- **Kensai Reforged** Fighter kit for BGEE, BG2EE, IWDEE, and EET (`PF#kensai`).
- Install choice to **replace the vanilla Kensai** (updates `CLABFI04` and kit description) or **add Kensai Adept** as a standalone Fighter kit via `ADD_KIT` / `fl#add_kit_ee`.
- Hit-and-run mobility focus: base movement bonus with further movement gains every 5 levels, plus **+½ APR every 5 levels through level 20**.
- Supporting spell resources `PF#FKADA.SPL` and `PF#FKRMA.SPL`, ability table `pf#clbfk.2da`, and English TRA (`PF#kensai/lang/english/setup.tra`).
- Project Infinity metadata (`pf#kensai.ini`), Keep a Changelog file, and GitHub Actions release packaging workflow.

### Changed

- N/A — initial public release.

### Fixed

- N/A — initial public release.

[unreleased]: https://github.com/P1nk-flaming0/kensai-reforged/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/P1nk-flaming0/kensai-reforged/releases/tag/v1.0.0
