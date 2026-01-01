---
sidebar_position: 20
title: Color Correct
description: Adjust color white balance selectively for blacks and whites
---

# Color Correct Node

<img src="/img/node-icons/colorcorrect.svg" alt="ff_colorcorrect Icon" className="node-icon" />

The **Color Correct** node adjusts color white balance selectively for shadows and highlights. It provides separate warmth controls for dark and bright areas, plus saturation and detailed shadow/highlight color adjustments.

## Overview

The Color Correct node uses FFMPEG's `colorcorrect` filter to adjust color temperature and saturation with selective control over shadows and highlights. It supports basic mode (warmth and saturation) and advanced mode (detailed color adjustments).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **shadows_warmth** (`slider`): Warmth adjustment for shadows
  - Range: -1.0 to 1.0
  - -1.0 = cool, 1.0 = warm
  - Default: `0`

- **highlights_warmth** (`slider`): Warmth adjustment for highlights
  - Range: -1.0 to 1.0
  - -1.0 = cool, 1.0 = warm
  - Default: `0`

- **saturation** (`slider`): Saturation level
  - Range: -3.0 to 3.0
  - Default: `1`

#### Advanced Mode

- **rl** (`slider`): Red shadow spot
  - Range: -1.0 to 1.0
  - Default: `0`

- **bl** (`slider`): Blue shadow spot
  - Range: -1.0 to 1.0
  - Default: `0`

- **rh** (`slider`): Red highlight spot
  - Range: -1.0 to 1.0
  - Default: `0`

- **bh** (`slider`): Blue highlight spot
  - Range: -1.0 to 1.0
  - Default: `0`

- **analyze** (`select`): Analysis mode
  - Options: `manual`, `average`, `minmax`, `median`
  - Default: `manual`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colorcorrect.mp4`

## Outputs

- **output** (`file`): The color-corrected video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colorcorrect=rl=0:bl=0:rh=0:bh=0:saturation=1" output.mp4
```

## Usage Summary

Color Correct provides selective white balance adjustment for shadows and highlights. Use basic mode for quick warmth and saturation adjustments, or advanced mode for precise color temperature control in dark and bright areas.
