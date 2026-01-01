---
sidebar_position: 48
title: Subtitles
description: Embed subtitles over a video with style customization
---

# Subtitles Node

<img src="/img/node-icons/subtitles.svg" alt="ff_subtitles Icon" className="node-icon" />

The **Subtitles** node embeds subtitle files over video with customizable styling using ASS format styles.

## Overview

The Subtitles node uses FFMPEG's `subtitles` filter to overlay subtitle files. Supports multiple subtitle formats and ASS-formatted style customization.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

- **subtitles** (`file`): Subtitle file
  - Supported formats: .srt, .ass, .vtt, .ssa, .sub, .mpl, .jss, .rt, .smi, .sami

### Optional Inputs

- **styles** (`textarea`): Custom ASS-formatted styles
  - Example: `FontSize=30,Bold=-1,PrimaryColour=&H00FFFF00&,OutlineColour=&H00FF1100&,Outline=2,Shadow=1,Alignment=2`
  - Preset button: example styles

- **removedupes** (`boolean`): Remove duplicate subtitles
  - Default: `false`

- **dynamictext** (`boolean`): Enable dynamic text rendering
  - Default: `false`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_subtitles.mp4`

## Outputs

- **output** (`file`): The video with embedded subtitles

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "subtitles=subtitles.srt" output.mp4
```

## Usage Summary

Subtitles embeds subtitle files over video. Use ASS-formatted styles for customization (font size, color, outline, shadow, alignment). Supports multiple subtitle formats and style options.
