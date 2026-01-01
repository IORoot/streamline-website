---
sidebar_position: 39
title: LUT Color Grading
description: Apply LUT color grading to video
---

# LUT Color Grading Node

<img src="/img/node-icons/lut.svg" alt="ff_lut Icon" className="node-icon" />

![LUT Color Grading Node](/img/node-screenshots/ff_lut.png)

The **LUT Color Grading** node applies Look-Up Table (LUT) color grading to video, allowing you to use professional color grading presets.

## Overview

The LUT Color Grading node uses FFMPEG's `lut3d` filter to apply LUT files. Supports basic mode (LUT file only) and advanced mode (includes pixel format selection).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

- **lut** (`file`): LUT file
  - Supported formats: .cube, .3dl, .dat, .lut

### Optional Inputs

#### Advanced Mode

- **pixel_format** (`select`): Output pixel format
  - Options: yuv420p, yuv444p, yuv422p, yuv420p10le, yuv444p10le
  - Default: `yuv420p`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_lut.mp4`

## Outputs

- **output** (`file`): The color-graded video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "lut3d=lut.cube" output.mp4
```

## Usage Summary

LUT Color Grading applies professional color grading presets from LUT files. Use basic mode for standard LUT application, or advanced mode to control pixel format for higher quality processing.
