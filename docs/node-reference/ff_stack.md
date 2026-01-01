---
sidebar_position: 47
title: Stack Videos
description: Stack videos vertically or horizontally
---

# Stack Videos Node

<img src="/img/node-icons/stack.svg" alt="ff_stack Icon" className="node-icon" />

The **Stack Videos** node arranges multiple videos side-by-side or stacked vertically in a single output.

## Overview

The Stack Videos node uses FFMPEG's `xstack` filter to arrange multiple videos in a grid layout. Supports horizontal, vertical, and stack layouts with up to 4 inputs.

## Inputs

### Required Inputs

- **input** (`file`): First input video file
  - Dynamic: Supports up to 4 inputs (input, input2, input3, input4)

- **input2** (`file`): Second input video file

### Optional Inputs

- **input3** (`file`): Third input video file
- **input4** (`file`): Fourth input video file

- **layout** (`select`): Stack layout
  - Options: `horizontal`, `vertical`, `stack`
  - Default: `vertical`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_stack.mp4`

## Outputs

- **output** (`file`): The stacked video file

## FFMPEG Command

```bash
ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex "[0:v][1:v]xstack=inputs=2:layout=0_0|w0_0[v]" -map "[v]" output.mp4
```

## Usage Summary

Stack Videos arranges multiple videos in a grid. Use horizontal for side-by-side, vertical for top-to-bottom, or stack for layered composition. All inputs are normalized to the same dimensions before stacking.
