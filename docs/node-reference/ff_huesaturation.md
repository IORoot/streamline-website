---
sidebar_position: 37
title: Hue Saturation
description: Apply hue-saturation-intensity adjustments to specific color ranges
---

# Hue Saturation Node

<img src="/img/node-icons/huesaturation.svg" alt="ff_huesaturation Icon" className="node-icon" />

The **Hue Saturation** node applies hue, saturation, and intensity adjustments to specific color ranges, allowing selective color grading.

## Overview

The Hue Saturation node uses FFMPEG's `huesaturation` filter to adjust colors selectively. Supports basic mode (overall adjustments) and advanced mode (per-color-range adjustments).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **hue** (`slider`): Hue shift in degrees
  - Range: -180 to 180
  - Default: `0`

- **saturation** (`slider`): Saturation shift
  - Range: -1 to 1
  - Default: `0`

- **intensity** (`slider`): Intensity/lightness shift
  - Range: -1 to 1
  - Default: `0`

#### Advanced Mode

- **colors** (`select`): Target colors to adjust
  - Options: All, Red, Yellow, Green, Cyan, Blue, Magenta
  - Default: `a` (All)

- **strength** (`slider`): Strength of filtering
  - Range: 0 to 100
  - Default: `1`

- **lightness** (`boolean`): Preserve lightness
  - Default: `false`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_huesaturation.mp4`

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "huesaturation=h=0:s=0:i=0" output.mp4
```

## Usage Summary

Hue Saturation provides selective color adjustment by color range. Use basic mode for overall adjustments, or advanced mode to target specific colors (red, yellow, green, cyan, blue, magenta) for precise color grading.
