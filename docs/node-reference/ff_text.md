---
sidebar_position: 49
title: Add Text
description: Add text overlay to video
---

# Add Text Node

<img src="/img/node-icons/text.svg" alt="ff_text Icon" className="node-icon" />

The **Add Text** node adds text overlays to video with extensive styling options including fonts, colors, positioning, and animations.

## Overview

The Add Text node uses FFMPEG's `drawtext` filter to add text to video. Supports inline text or text files, system fonts or custom font files, and extensive styling options.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **text** (`textarea`): Text to display (inline)
  - Default: `Write text here!`

- **textfile** (`file`): Text file containing text content
  - Supported: .txt, .md, .log
  - Alternative to inline text

- **systemfont** (`select`): System font
  - Populated dynamically from system fonts

- **fontfile** (`file`): Custom font file
  - Supported: .ttf, .otf
  - Overrides system font if provided

- **fontsize** (`number`): Font size in pixels
  - Range: 8 - 2000
  - Default: `24`

- **color** (`colourpicker`): Text color
  - Default: `white`

- **lineheight** (`number`): Line height multiplier
  - Range: 0.5 - 3.0
  - Default: `1.2`

- **x** (`string`): X position expression
  - Can use: w, h, tw, th, etc.

- **y** (`string`): Y position expression
  - Can use: w, h, tw, th, etc.

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_text.mp4`

## Outputs

- **output** (`file`): The video with text overlay

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "drawtext=text='Hello World':fontfile=font.ttf:fontsize=24:x=10:y=10:fontcolor=white" output.mp4
```

## Usage Summary

Add Text overlays text on video with extensive styling. Use inline text or text files, system or custom fonts, and expression-based positioning. Supports animations, effects, and multi-line text with line height control.
