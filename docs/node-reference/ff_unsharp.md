---
sidebar_position: 53
title: Unsharp Mask
description: Apply unsharp mask filter to video
---

# Unsharp Mask Node

<img src="/img/node-icons/unsharp.svg" alt="ff_unsharp Icon" className="node-icon" />

![Unsharp Mask Node](/img/node-screenshots/ff_unsharp.png)

The **Unsharp Mask** node applies an unsharp mask filter for sharpening or blurring video with per-channel control.

## Overview

The Unsharp Mask node uses FFMPEG's `unsharp` filter to sharpen or blur video. Supports basic mode (uniform effect) and advanced mode (per-channel control over luma, chroma, and alpha).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **radius** (`slider`): Matrix size for all channels
  - Range: 3 - 13 (odd integers)
  - Default: `5`

- **amount** (`slider`): Effect strength
  - Range: -3 to 3
  - Negative = blur, positive = sharpen
  - Default: `1.0`

#### Advanced Mode

- **lx, ly, la**: Luma channel controls (horizontal, vertical, amount)
- **cx, cy, ca**: Chroma channel controls (horizontal, vertical, amount)
- **ax, ay, aa**: Alpha channel controls (horizontal, vertical, amount)

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_unsharp.mp4`

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "unsharp=luma_msize_x=5:luma_msize_y=5:luma_amount=1.0" output.mp4
```

## Usage Summary

Unsharp Mask provides advanced sharpening or blurring with per-channel control. Use basic mode for uniform sharpening, or advanced mode for precise luma/chroma/alpha control. Negative amounts create blur effects.
