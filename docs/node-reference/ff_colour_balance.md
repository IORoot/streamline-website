---
sidebar_position: 26
title: Colour Balance
description: Adjust color balance in shadows, midtones, and highlights
---

# Colour Balance Node

<img src="/img/node-icons/colour-balance.svg" alt="ff_colour_balance Icon" className="node-icon" />

The **Colour Balance** node adjusts color balance separately in shadows, midtones, and highlights, with independent red, green, and blue controls for each tonal range.

## Overview

The Colour Balance node uses FFMPEG's `colorbalance` filter to adjust color balance in different tonal ranges. It provides separate controls for shadows, midtones, and highlights.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Shadows

- **shadow_red** (`slider`): Adjust red in shadows
  - Range: -1.0 to 1.0
  - Default: `0`

- **shadow_green** (`slider`): Adjust green in shadows
  - Range: -1.0 to 1.0
  - Default: `0`

- **shadow_blue** (`slider`): Adjust blue in shadows
  - Range: -1.0 to 1.0
  - Default: `0`

#### Midtones

- **midtone_red** (`slider`): Adjust red in midtones
  - Range: -1.0 to 1.0
  - Default: `0`

- **midtone_green** (`slider`): Adjust green in midtones
  - Range: -1.0 to 1.0
  - Default: `0`

- **midtone_blue** (`slider`): Adjust blue in midtones
  - Range: -1.0 to 1.0
  - Default: `0`

#### Highlights

- **highlight_red** (`slider`): Adjust red in highlights
  - Range: -1.0 to 1.0
  - Default: `0`

- **highlight_green** (`slider`): Adjust green in highlights
  - Range: -1.0 to 1.0
  - Default: `0`

- **highlight_blue** (`slider`): Adjust blue in highlights
  - Range: -1.0 to 1.0
  - Default: `0`

- **preserve_lightness** (`boolean`): Preserve lightness when adjusting color balance
  - Default: `false`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colour_balance.mp4`

## Outputs

- **output** (`file`): The color-balanced video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colorbalance=rs=0:gs=0:bs=0:rm=0:gm=0:bm=0:rh=0:gh=0:bh=0" output.mp4
```

## Usage Summary

Colour Balance provides selective color adjustment in shadows, midtones, and highlights. Adjust each tonal range independently to achieve precise color grading and correction.
