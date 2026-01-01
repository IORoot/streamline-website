---
sidebar_position: 52
title: Video Transitions
description: Create transitions between videos
---

# Video Transitions Node

<img src="/img/node-icons/transition.svg" alt="ff_transition Icon" className="node-icon" />

![Video Transitions Node](/img/node-screenshots/ff_transition.png)

The **Video Transitions** node creates transitions between multiple videos using various transition effects.

## Overview

The Video Transitions node uses FFMPEG's `xfade` filter to create transitions between videos. Supports up to 10 input videos with numerous transition types including fades, wipes, slides, and more.

## Inputs

### Required Inputs

- **input** (`file`): First input video file
  - Dynamic: Supports up to 10 inputs (input, input2, input3, ...)

- **input2** (`file`): Second input video file

### Optional Inputs

- **input3** through **input10** (`file`): Additional input videos

- **transition** (`textarea`): Transition type(s)
  - Single value or CSV for multiple transitions
  - Options: fade, fadeblack, fadewhite, distance, wipeleft, wiperight, wipeup, wipedown, slideleft, slideright, slideup, slidedown, smoothleft, smoothright, smoothup, smoothdown, circlecrop, rectcrop, circleclose, circleopen, horzclose, horzopen, vertclose, vertopen, diagbl, diagbr, diagtl, diagtr, hlslice, hrslice, vuslice, vdslice, dissolve, pixelize, radial, and more
  - Default: `fade`
  - Preset buttons available for common transitions

- **duration** (`string`): Transition duration in seconds
  - Default: `1`

- **offset** (`string`): Offset for transition start
  - Default: `0`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_transition.mp4`

## Outputs

- **output** (`file`): The video with transitions applied

## FFMPEG Command

```bash
ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex "[0:v][1:v]xfade=transition=fade:duration=1:offset=5[v]" -map "[v]" output.mp4
```

## Usage Summary

Video Transitions creates smooth transitions between multiple videos. Use a single transition type for uniform transitions, or CSV for varied transitions. Supports extensive transition types for creative video editing.
