# Kensai Reforged

[![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/P1nk-flaming0/bloodmoon-reaver)
[![Engine](https://img.shields.io/badge/engine-BGEE%20%7C%20BG2EE%20%7C%20EET%20%7C%20IWDEE-informational.svg)](#compatibility--prerequisites)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](#license--legal)

A rebalanced Kensai kit for Infinity Engine Enhanced Edition games.

**\*\*Author:\*\*** [🦩 P1nk-flaming0](https://github.com/P1nk-flaming0) · **\*\*Download:\*\*** [_*latest*_](https://github.com/P1nk-flaming0/kensai-reforged/releases) · **\*\*Forum Thread:\*\*** _*To be updated...*_ · **\*\*Source:\*\*** [GitHub](https://github.com/P1nk-flaming0/kensai-reforged)

**\*\*Contact:\*\*** [✉️ ↴](https://p1nk-flaming0.github.io/bloodmoon-reaver/#contact)

---

## Table of Contents

1. [Overview](#overview)
2. [Kit Description & Progression](#kit-description--progression)
   - [Kit Description](#kit-description)
   - [Level Progression Matrix](#level-progression-matrix)
3. [Compatibility & Prerequisites](#compatibility--prerequisites)
4. [Localization](#localization)
5. [Installation Instructions](#installation-instructions)
6. [Credits & Tools](#credits--tools)
7. [License & Legal](#license--legal)

---

## Overview

**Kensai Reforged** rebalances and expands the classic Kensai Fighter kit for the Enhanced Edition engine.

The core philosophy is simple: if a warrior forgoes armor, helmets, and gauntlets, that sacrifice should buy real battlefield mobility. This mod leans into a hit-and-run identity—higher movement speed and an extra half-attack every five levels (through level 20)—so the Kensai can close, strike, and disengage instead of standing still as a glass cannon.

Vanilla strengths (Armor Class, hit/damage scaling, weapon speed, and Kai) remain. The reforged kit makes those strengths play better against the kit’s steep equipment restrictions.

During installation you may either **replace the vanilla Kensai** or add **Kensai Adept** as a separate Fighter kit.

---

## Kit Description & Progression

### Kit Description

In-game kit text (tokenized for gender pronouns as in the Infinity Engine):

```text
KENSAI: This class's name, which means "sword saint" in the common tongue, refers to a warrior who has been specially trained to be one with <PRO_HISHER> weapon. The kensai is deadly, fast, and trained to fight without the protection of armor. (Note: Despite its common name, a Kensai may use any melee weapon with which <PRO_HESHE> is proficient.)

Advantages:
– +2 bonus to Armor Class.
– +1 to hit and damage rolls every 3 levels.
– -1 bonus to Speed Factor every 4 levels.
– Moves 2 points faster than other characters. Movement rate further improves by 1 every 5 levels.
– Gains an additional 1/2 attack every 5 levels until level 20.
– May use the Kai ability once per day every 4 levels (starts at 1st level with one use).

KAI: All successful attacks within the next 10 seconds deal maximum damage.

Disadvantages:
– May not wear any armor.
– May not use missile weapons.
– May not wear gauntlets or bracers.
– Alignment restricted to any non-chaotic.
```

### Level Progression Matrix

Values below are **cumulative kit bonuses** at each level (levels 1–20). Fighter base THAC0, APR from weapon style/proficiency, and other class features are not included.

| Level | THAC0 / Damage | Speed Factor | Movement Rate | APR Bonus | Kai Uses / Day |
| ----: | :------------- | :----------- | :------------ | :-------- | :------------- |
|     1 | —              | —            | +2            | —         | 1              |
|     2 | —              | —            | +2            | —         | 1              |
|     3 | +1             | —            | +2            | —         | 1              |
|     4 | +1             | −1           | +2            | —         | 2              |
|     5 | +1             | −1           | +3            | +½        | 2              |
|     6 | +2             | −1           | +3            | +½        | 2              |
|     7 | +2             | −1           | +3            | +½        | 2              |
|     8 | +2             | −2           | +3            | +½        | 3              |
|     9 | +3             | −2           | +3            | +½        | 3              |
|    10 | +3             | −2           | +4            | +1        | 3              |
|    11 | +3             | −2           | +4            | +1        | 3              |
|    12 | +4             | −3           | +4            | +1        | 4              |
|    13 | +4             | −3           | +4            | +1        | 4              |
|    14 | +4             | −3           | +4            | +1        | 4              |
|    15 | +5             | −3           | +5            | +1½       | 4              |
|    16 | +5             | −4           | +5            | +1½       | 5              |
|    17 | +5             | −4           | +5            | +1½       | 5              |
|    18 | +6             | −4           | +5            | +1½       | 5              |
|    19 | +6             | −4           | +5            | +1½       | 5              |
|    20 | +6             | −5           | +6            | +2        | 6              |

**Milestone summary**

| Bonus                | Schedule                                            |
| :------------------- | :-------------------------------------------------- |
| +1 to hit and damage | Every 3 levels (3, 6, 9, 12, 15, 18, …)             |
| −1 Speed Factor      | Every 4 levels (4, 8, 12, 16, 20, …)                |
| Movement rate        | +2 at level 1; +1 every 5 levels (5, 10, 15, 20, …) |
| +½ APR               | Every 5 levels through level 20 (5, 10, 15, 20)     |
| Kai uses             | Level 1, then every 4 levels (4, 8, 12, 16, 20, …)  |

The kit also receives a **+2 Armor Class** bonus from level 1 (not repeated in the table).

---

## Compatibility & Prerequisites

### Requirements

- Infinity Engine **Enhanced Edition 2.0+**
- One of: **BG1EE**, **BG2EE**, **IWDEE**, or **EET** (Enhanced Edition Trilogy)

Classic (non-EE) games are not supported.

### Install options

The mod ships as a single WeiDU component group with two mutually exclusive choices:

1. **Replace vanilla Kensai** — overwrites the stock Kensai ability table and description.
2. **Add Kensai Adept** — registers a new Fighter kit alongside the vanilla Kensai.

### Install order

Follow normal WeiDU / Project Infinity conventions for kit mods:

1. Official patches / EE Fixpack (if used)
2. **Kensai Reforged** (and other kit mods)
3. Quest, NPC, and item mods
4. Tweak packs and AI/tactical mods (e.g. **Sword Coast Stratagems**) last or near-last

Installing kit changes before large tweak/AI overhauls reduces the chance of later components overwriting kit tables or descriptions.

---

## Localization

| Language | Status  | Path                               |
| :------- | :------ | :--------------------------------- |
| English  | Default | `PF#kensai/lang/english/setup.tra` |

Translations are welcome. New languages should follow the existing `PF#kensai/lang/<language>/` layout and use UTF-8 encoding (EE native).

---

## Installation Instructions

### Windows (WeiDU installer)

1. Extract the mod archive into your game directory (the folder that contains `chitin.key`).
2. You should see `setup-PF#kensai.exe` and the `PF#kensai` folder.
3. Run `setup-PF#kensai.exe`.
4. Choose your language (English).
5. Select **one** of the Kensai Reforged subcomponents when prompted.

### Project Infinity

1. Add or drop the mod into your Project Infinity mods folder.
2. Enable **Kensai Reforged** and select the desired subcomponent.
3. Install with your usual WeiDU queue / sort order (see [Compatibility & Prerequisites](#compatibility--prerequisites)).

### macOS / Linux (WeiDU CLI)

1. Extract the mod into the game directory.
2. Ensure a WeiDU binary is available as `weidu` (or `wesnoth`-style platform packaging used by your setup).
3. From the game directory, run:

```bash
./weidu setup-PF#kensai.tp2
```

(or point WeiDU at `PF#kensai/SETUP-PF#kensai.tp2` if that is how your package is laid out)

### Subcomponent choices

| Choice                            | Effect                                                                                                                 |
| :-------------------------------- | :--------------------------------------------------------------------------------------------------------------------- |
| **Replace vanilla Kensai kit**    | Replaces `CLABFI04` and updates the stock Kensai description. Existing Kensai characters use the reforged progression. |
| **Add Kensai Adept as a new kit** | Adds **Kensai Adept** (`PF#kensai`) as an additional Fighter kit; vanilla Kensai is left unchanged.                    |

Only one of these options can be installed at a time.

### Uninstallation

Re-run `setup-PF#kensai.exe` (or WeiDU) and uninstall the component. Always uninstall mods in reverse install order when possible.

---

## Credits & Tools

| Role              | Credit                                                               |
| :---------------- | :------------------------------------------------------------------- |
| Modding toolchain | [WeiDU](https://github.com/WeiDUorg/weidu)                           |
| Resource editor   | [Near Infinity](https://github.com/NearInfinityBrowser/NearInfinity) |
| Project Infinity  | AL\|EN                                                               |
| EE kit helper     | `fl#add_kit_ee` by **Wisp** (Fredrik Lindgren)                       |

Thanks to the Beamdog forums and the Infinity Engine modding community, especially **Gibberlings3** and **Spellhold Studios**, for documentation, tooling, and ongoing support of EE kit development.

---

## License & Legal

This is a fan-made unofficial modification. It is **not** affiliated with, endorsed by, or connected to Beamdog, BioWare, Black Isle Studios, Interplay, Wizards of the Coast, Hasbro, or any of their affiliates.

_Baldur’s Gate_, _Icewind Dale_, and related marks are trademarks of their respective owners. All rights to the original games and their assets belong to their respective copyright holders.

### Reuse

Unless otherwise noted in individual third-party files (for example `fl#add_kit_ee.tpa`), you may freely study, modify, and redistribute this mod for non-commercial Infinity Engine modding, provided you:

- Credit **P1nk_Flaming0** and any listed contributors
- Do not claim official affiliation with the rights holders above
- Respect the licenses of bundled tools and libraries

---

_Kensai Reforged — v1.0.0_
