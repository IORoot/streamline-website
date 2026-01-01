---
sidebar_position: 33
title: Draw Box
description: Draw colored boxes and lines on video
---

# Draw Box Node

<img src="/img/node-icons/drawbox.svg" alt="ff_drawbox Icon" className="node-icon" />

The **Draw Box** node draws colored boxes and lines on video at specified positions and sizes.

## Overview

The Draw Box node uses FFMPEG's `drawbox` filter to draw rectangles or lines on video. Supports filled boxes or outlined boxes with customizable thickness.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **x** (`string`): X position of top-left corner
  - Can use expressions like `w/2` for center
  - Default: `0`

- **y** (`string`): Y position of top-left corner
  - Can use expressions like `h/2` for center
  - Default: `0`

- **width** (`string`): Box width
  - `0` = full width
  - Can use expressions like `w/2`
  - Default: `0`

- **height** (`string`): Box height
  - `0` = full height
  - Can use expressions like `h/2`
  - Default: `0`

- **color** (`colourpicker`): Box color
  - Default: `black`

- **thickness** (`string`): Box edge thickness
  - Number for outline thickness
  - `fill` for filled box
  - Default: `3`

- **replace** (`boolean`): Replace pixels with alpha
  - `false` = composite (default)
  - `true` = replace
  - Default: `false`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_drawbox.mp4`

## Outputs

- **output** (`file`): The video with drawn box

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "drawbox=x=10:y=10:w=100:h=50:color=red:t=fill" output.mp4
```

## Usage Summary

Draw Box adds colored rectangles or lines to video. Use expressions for dynamic positioning (e.g., `w/2` for center). Set thickness to `fill` for solid boxes, or a number for outlined boxes.
