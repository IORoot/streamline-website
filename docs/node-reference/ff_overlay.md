---
sidebar_position: 43
title: Overlay
description: Overlay a video/image at specific time on the video
---

# Overlay Node

<img src="/img/node-icons/overlay.svg" alt="ff_overlay Icon" className="node-icon" />

The **Overlay** node overlays a video or image onto another video at a specific position and time range.

## Overview

The Overlay node uses FFMPEG's `overlay` filter to composite videos/images. Supports basic mode (simple positioning) and advanced mode (expression-based positioning and format control).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

- **overlay** (`file`): Overlay video or image file
  - Supports: .mp4, .mov, .avi, .webm, .mkv, .png, .jpg, .jpeg, .gif, .bmp, .tiff, .webp

### Optional Inputs

#### Basic Mode

- **start** (`string`): Start time in seconds
  - Default: `0`

- **end** (`string`): End time in seconds
  - Default: `3`

- **x_basic** (`number`): X position in pixels
  - Default: `0`

- **y_basic** (`number`): Y position in pixels
  - Default: `0`

#### Advanced Mode

- **x** (`string`): X position expression
  - Can use: main_w, overlay_w, main_h, overlay_h, etc.
  - Preset buttons: Left, Center, Right

- **y** (`string`): Y position expression
  - Can use: main_w, overlay_w, main_h, overlay_h, etc.
  - Preset buttons: Top, Center, Bottom

- **format** (`select`): Output pixel format
  - Options: auto, yuv420p, yuv422p, yuv444p, rgb24, rgba
  - Default: `auto`

- **alpha** (`select`): Alpha channel format
  - Options: straight, premultiplied
  - Default: `straight`

- **fit** (`boolean`): Scale overlay to fit input
  - Default: `false`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_overlay.mp4`

## Outputs

- **output** (`file`): The composited video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -i overlay.png -filter_complex "[0:v][1:v]overlay=x=10:y=10:enable='between(t,0,3)'" output.mp4
```

## Usage Summary

Overlay composites videos/images onto another video. Use basic mode for simple positioning, or advanced mode for expression-based positioning and format control. Supports time-based enable/disable for animated overlays.
