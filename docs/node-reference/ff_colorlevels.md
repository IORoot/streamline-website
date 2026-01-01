---
sidebar_position: 23
title: Color Levels
description: Adjust color levels - input and output black/white points per channel
---

# Color Levels Node

<img src="/img/node-icons/colorlevels.svg" alt="ff_colorlevels Icon" className="node-icon" />

![Color Levels Node](/img/node-screenshots/ff_colorlevels.png)

The **Color Levels** node adjusts color levels with separate input and output black/white points for each color channel (red, green, blue, alpha).

## Overview

The Color Levels node uses FFMPEG's `colorlevels` filter to adjust color levels per channel. It supports basic mode (brightness and contrast) and advanced mode (detailed per-channel level control).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **brightness** (`slider`): Overall brightness adjustment
  - Range: -1.0 to 1.0
  - Default: `0`

- **contrast** (`slider`): Overall contrast adjustment
  - Range: -1.0 to 1.0
  - Default: `0`

#### Advanced Mode

- **rimin, gimin, bimin, aimin**: Input black points per channel
- **rimax, gimax, bimax, aimax**: Input white points per channel
- **romin, gomin, bomin, aomin**: Output black points per channel
- **romax, gomax, bomax, aomax**: Output white points per channel

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colorlevels.mp4`

## Outputs

- **output** (`file`): The level-adjusted video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colorlevels=rimin=0:gimin=0:bimin=0:rimax=1:gimax=1:bimax=1" output.mp4
```

## Usage Summary

Color Levels provides precise control over input and output levels for each color channel. Use basic mode for overall brightness/contrast, or advanced mode for per-channel level adjustments.
