---
sidebar_position: 44
title: Perspective
description: Apply perspective transformation by adjusting corner coordinates
---

# Perspective Node

<img src="/img/node-icons/perspective.svg" alt="ff_perspective Icon" className="node-icon" />

The **Perspective** node applies perspective transformation by adjusting the four corner coordinates of the video.

## Overview

The Perspective node uses FFMPEG's `perspective` filter to warp video by repositioning corners. Supports expression-based coordinates and interpolation methods.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **x0, y0** (`string`): Top-left corner coordinates
  - Default: `0, 0`

- **x1, y1** (`string`): Top-right corner coordinates
  - Default: `iw, 0`

- **x2, y2** (`string`): Bottom-left corner coordinates
  - Default: `0, ih`

- **x3, y3** (`string`): Bottom-right corner coordinates
  - Default: `iw, ih`

- **padding** (`number`): Transparent padding in pixels
  - Prevents edge pixel stretching
  - Default: `1`

- **interpolation** (`select`): Interpolation method
  - Options: `linear`, `cubic`
  - Default: `linear`

- **sense** (`select`): Coordinate system reference
  - Options: `source`, `destination`
  - Default: `destination`

- **eval** (`select`): When to evaluate expressions
  - Options: `init`, `frame`
  - Default: `frame`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_perspective.mp4`

## Outputs

- **output** (`file`): The perspective-transformed video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "perspective=x0=0:y0=0:x1=iw:y1=0:x2=0:y2=ih:x3=iw:y3=ih" output.mp4
```

## Usage Summary

Perspective warps video by repositioning the four corners. Use expressions (iw, ih) for dynamic positioning. Adjust padding to prevent edge artifacts. Useful for correcting perspective distortion or creating creative warping effects.
