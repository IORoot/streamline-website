---
sidebar_position: 27
title: Colour Contrast
description: Adjust color contrast between RGB components
---

# Colour Contrast Node

<img src="/img/node-icons/colour-contrast.svg" alt="ff_colour_contrast Icon" className="node-icon" />

![Colour Contrast Node](/img/node-screenshots/ff_colour_contrast.png)

The **Colour Contrast** node adjusts color contrast between RGB components using opponent color theory (red-cyan, green-magenta, blue-yellow).

## Overview

The Colour Contrast node uses FFMPEG's `colorcontrast` filter to adjust contrast in opponent color pairs. It provides controls for red-cyan, green-magenta, and blue-yellow contrast adjustments.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **rc** (`slider`): Red-Cyan contrast
  - Range: -1.0 to 1.0
  - Default: `0`

- **gm** (`slider`): Green-Magenta contrast
  - Range: -1.0 to 1.0
  - Default: `0`

- **by** (`slider`): Blue-Yellow contrast
  - Range: -1.0 to 1.0
  - Default: `0`

- **rcw** (`slider`): Red-Cyan weight
  - Range: 0.0 to 1.0
  - Default: `0`

- **gmw** (`slider`): Green-Magenta weight
  - Range: 0.0 to 1.0
  - Default: `0`

- **byw** (`slider`): Blue-Yellow weight
  - Range: 0.0 to 1.0
  - Default: `0`

- **pl** (`slider`): Preserve lightness
  - Range: 0.0 to 1.0
  - Default: `0`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colour_contrast.mp4`

## Outputs

- **output** (`file`): The contrast-adjusted video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colorcontrast=rc=0:gm=0:by=0" output.mp4
```

## Usage Summary

Colour Contrast adjusts contrast in opponent color pairs. Use to enhance or reduce contrast between complementary colors for creative color grading effects.
