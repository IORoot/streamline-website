---
sidebar_position: 54
title: Vibrance
description: Boost muted colors without oversaturating already-vibrant colors
---

# Vibrance Node

<img src="/img/node-icons/vibrance.svg" alt="ff_vibrance Icon" className="node-icon" />

![Vibrance Node](/img/node-screenshots/ff_vibrance.png)

The **Vibrance** node boosts muted colors while preserving already-vibrant colors, providing more natural saturation enhancement than standard saturation adjustments.

## Overview

The Vibrance node uses FFMPEG's `vibrance` filter to enhance color saturation intelligently. Supports basic mode (intensity only) and advanced mode (per-channel balance controls).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **intensity** (`slider`): Vibrance intensity
  - Range: -2 to 2
  - Positive = boost muted colors
  - Negative = reduce saturation
  - Default: `0`

#### Advanced Mode

- **rbal** (`slider`): Red balance adjustment
  - Range: -10 to 10
  - Default: `1`

- **gbal** (`slider`): Green balance adjustment
  - Range: -10 to 10
  - Default: `1`

- **bbal** (`slider`): Blue balance adjustment
  - Range: -10 to 10
  - Default: `1`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_vibrance.mp4`

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "vibrance=intensity=1.0:rbal=1:gbal=1:bbal=1" output.mp4
```

## Usage Summary

Vibrance enhances muted colors while preserving vibrant ones, creating more natural saturation than standard saturation adjustments. Use basic mode for quick enhancement, or advanced mode for per-channel balance control.
