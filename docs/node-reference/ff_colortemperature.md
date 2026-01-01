---
sidebar_position: 24
title: Color Temperature
description: Adjust the color temperature to simulate warm or cool lighting
---

# Color Temperature Node

<img src="/img/node-icons/colortemperature.svg" alt="ff_colortemperature Icon" className="node-icon" />

![Color Temperature Node](/img/node-screenshots/ff_colortemperature.png)

The **Color Temperature** node adjusts the color temperature to simulate warm or cool lighting conditions, measured in Kelvin.

## Overview

The Color Temperature node uses FFMPEG's `colortemperature` filter to adjust color temperature. It supports basic mode (temperature only) and advanced mode (includes mix and preserve lightness).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **temperature** (`slider`): Color temperature in Kelvin
  - Range: 1000 - 40000 K
  - Lower = warmer (orange), higher = cooler (blue)
  - Default: `6500` (daylight)

#### Advanced Mode

- **mix** (`slider`): Mix with filtered output
  - Range: 0.0 - 1.0
  - Default: `1`

- **pl** (`slider`): Preserve lightness
  - Range: 0.0 - 1.0
  - Default: `0`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colortemperature.mp4`

## Outputs

- **output** (`file`): The temperature-adjusted video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colortemperature=6500" output.mp4
```

## Usage Summary

Color Temperature adjusts the warmth/coolness of video lighting. Use basic mode for quick temperature adjustments, or advanced mode for mixing and lightness preservation.
