---
sidebar_position: 42
title: Orientation
description: Convert video orientation
---

# Orientation Node

<img src="/img/node-icons/orientation.svg" alt="ff_orientation Icon" className="node-icon" />

![Orientation Node](/img/node-screenshots/ff_orientation.png)

The **Orientation** node converts video orientation using rotation and vertical flip controls.

## Overview

The Orientation node uses FFMPEG's rotation and flip filters to adjust video orientation. Provides quick preset buttons for common rotations.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **rotate** (`buttongroup`): Rotation
  - Options: `90° CCW`, `Reset`, `90° CW`
  - Default: `Reset`

- **vertical** (`boolean`): Flip vertically
  - Default: `false`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_orientation.mp4`

## Outputs

- **output** (`file`): The reoriented video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "transpose=2" output.mp4  # 90° CCW
ffmpeg -i input.mp4 -vf "vflip" output.mp4  # Vertical flip
```

## Usage Summary

Orientation provides quick orientation adjustments with preset buttons. Use for fixing incorrectly oriented videos or converting between portrait and landscape orientations.
