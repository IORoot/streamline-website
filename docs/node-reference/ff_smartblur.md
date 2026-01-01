---
sidebar_position: 46
title: Smart Blur
description: Apply edge-preserving blur - blurs noise while keeping edges sharp
---

# Smart Blur Node

<img src="/img/node-icons/smartblur.svg" alt="ff_smartblur Icon" className="node-icon" />

![Smart Blur Node](/img/node-screenshots/ff_smartblur.png)

The **Smart Blur** node applies edge-preserving blur that reduces noise while maintaining sharp edges.

## Overview

The Smart Blur node uses FFMPEG's `smartblur` filter to blur video intelligently. Supports basic mode (uniform blur) and advanced mode (per-channel control over luma, chroma, and alpha).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **radius** (`slider`): Blur radius for all channels
  - Range: 0.1 - 5.0
  - Default: `1.0`

- **strength** (`slider`): Blur/sharpen strength
  - Range: -1.0 to 1.0
  - Negative = sharpen, positive = blur
  - Default: `1.0`

- **threshold** (`slider`): Edge detection threshold
  - Range: -30 to 30
  - Default: `0`

#### Advanced Mode

- **luma_radius, luma_strength, luma_threshold**: Luma channel controls
- **chroma_radius, chroma_strength, chroma_threshold**: Chroma channel controls
- **alpha_radius, alpha_strength, alpha_threshold**: Alpha channel controls

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_smartblur.mp4`

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "smartblur=luma_radius=1.0:luma_strength=1.0:luma_threshold=0" output.mp4
```

## Usage Summary

Smart Blur reduces noise while preserving edges. Use basic mode for uniform blur, or advanced mode for per-channel control. Adjust threshold to control edge detection sensitivity.
