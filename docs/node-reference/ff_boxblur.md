---
sidebar_position: 18
title: Box Blur
description: Apply box blur algorithm with separate control over luma, chroma, and alpha
---

# Box Blur Node

<img src="/img/node-icons/boxblur.svg" alt="ff_boxblur Icon" className="node-icon" />

![Box Blur Node](/img/node-screenshots/ff_boxblur.png)

The **Box Blur** node applies a box blur algorithm with separate control over luma (brightness), chroma (color), and alpha (transparency) channels. Supports basic mode (uniform blur) and advanced mode (per-channel control).

## Overview

The Box Blur node uses FFMPEG's `boxblur` filter to apply a fast box blur effect. It provides separate radius and power controls for luma, chroma, and alpha channels.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **radius** (`slider`): Blur radius for all channels
  - Range: 0 - 360 pixels
  - Default: `0`

- **power** (`slider`): Number of times to apply blur
  - Range: 0 - 10
  - Default: `0`

#### Advanced Mode

- **luma_radius** (`slider`): Luma blur radius
  - Range: 0 - 360 pixels
  - Default: `0`

- **luma_power** (`slider`): Luma blur iterations
  - Range: 0 - 10
  - Default: `0`

- **chroma_radius** (`slider`): Chroma blur radius
  - Range: -1 - 180 pixels
  - -1 = use luma radius
  - Default: `0`

- **chroma_power** (`slider`): Chroma blur iterations
  - Range: -1 - 10
  - -1 = use luma power
  - Default: `0`

- **alpha_radius** (`slider`): Alpha blur radius
  - Range: -1 - 360 pixels
  - -1 = use luma radius
  - Default: `0`

- **alpha_power** (`slider`): Alpha blur iterations
  - Range: -1 - 10
  - -1 = use luma power
  - Default: `0`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_boxblur.mp4`

## Outputs

- **output** (`file`): The blurred video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "boxblur=luma_radius=5:luma_power=2:chroma_radius=5:chroma_power=2" output.mp4
```

## Usage Summary

Box blur provides fast, efficient blurring with per-channel control. Use basic mode for uniform blur, or advanced mode to blur brightness, color, or transparency channels independently.
