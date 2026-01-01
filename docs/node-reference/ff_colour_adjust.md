---
sidebar_position: 25
title: Colour Adjust
description: Alter the colour of a video
---

# Colour Adjust Node

<img src="/img/node-icons/colour-adjust.svg" alt="ff_colour_adjust Icon" className="node-icon" />

The **Colour Adjust** node alters the color of a video with controls for brightness, contrast, saturation, and gamma.

## Overview

The Colour Adjust node uses FFMPEG's `eq` filter to adjust color properties. It supports basic mode (brightness, contrast, saturation) and advanced mode (includes gamma and effect weight).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **brightness** (`slider`): Brightness adjustment
  - Range: -1.0 to 1.0
  - Default: `0`

- **contrast** (`slider`): Contrast multiplier
  - Range: -10.0 to 10.0
  - Default: `1`

- **saturation** (`slider`): Saturation multiplier
  - Range: 0.0 to 3.0
  - Default: `1`

#### Advanced Mode

- **gamma** (`slider`): Gamma correction
  - Range: 0.1 to 10.0
  - Default: `1`

- **weight** (`slider`): Effect weight
  - Range: 0.0 to 1.0
  - Default: `1`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colour.mp4`

## Outputs

- **output** (`file`): The color-adjusted video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "eq=brightness=0:contrast=1:saturation=1:gamma=1" output.mp4
```

## Usage Summary

Colour Adjust provides comprehensive color adjustment controls. Use basic mode for standard adjustments, or advanced mode for gamma correction and effect weighting.
