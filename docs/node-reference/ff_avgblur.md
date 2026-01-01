---
sidebar_position: 17
title: Average Blur
description: Apply average blur effect using local pixel averaging
---

# Average Blur Node

<img src="/img/node-icons/avgblur.svg" alt="ff_avgblur Icon" className="node-icon" />

![Average Blur Node](/img/node-screenshots/ff_avgblur.png)

The **Average Blur** node applies an average blur effect using local pixel averaging. It supports separate control over horizontal and vertical blur sizes, and selective channel blurring (Y, U, V, A planes).

## Overview

The Average Blur node uses FFMPEG's `avgblur` filter to blur video by averaging pixels in a local area. It provides basic mode (simple blur amount) and advanced mode (detailed control over size and channels).

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

#### Basic Mode

- **blurAmount** (`slider`): Blur intensity
  - Range: 0 - 100
  - Simplified control that maps to both horizontal and vertical sizes
  - Default: `0`

#### Advanced Mode

- **sizeX** (`slider`): Horizontal kernel size
  - Range: 1 - 1024 pixels
  - Controls horizontal blur strength
  - Default: `3`

- **sizeY** (`slider`): Vertical kernel size
  - Range: 0 - 1024 pixels
  - 0 = same as horizontal
  - Controls vertical blur strength
  - Default: `0`

- **planeY** (`togglebutton`): Blur Y/Luma/Brightness channel
  - Default: `true`

- **planeU** (`togglebutton`): Blur U/Chroma blue-diff channel
  - Default: `true`

- **planeV** (`togglebutton`): Blur V/Chroma red-diff channel
  - Default: `true`

- **planeA** (`togglebutton`): Blur A/Alpha/Transparency channel
  - Default: `true`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_avgblur.mp4`

## Outputs

- **output** (`file`): The blurred video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "avgblur=sizeX=5:sizeY=5:planes=15" output.mp4
```

## Usage Summary

Average blur uses local pixel averaging for a simple, fast blur effect. Use basic mode for quick adjustments, or advanced mode for precise control over blur size and color channels.
