---
sidebar_position: 40
title: Extract Middle
description: Extract middle portion of video
---

# Extract Middle Node

<img src="/img/node-icons/middle.svg" alt="ff_middle Icon" className="node-icon" />

![Extract Middle Node](/img/node-screenshots/ff_middle.png)

The **Extract Middle** node extracts the middle portion of a video for a specified duration.

## Overview

The Extract Middle node uses FFMPEG's `trim` filter to extract the center segment of a video. It automatically calculates the start time based on video duration and desired extract length.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **duration** (`string`): Duration to extract in seconds
  - Range: 1 to video length
  - Default: `1`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_middle.mp4`

## Outputs

- **output** (`file`): The extracted middle segment

## FFMPEG Command

The Extract Middle node calculates the start time and uses trim:

```bash
ffmpeg -i input.mp4 -vf "trim=start=45:end=60,setpts=PTS-STARTPTS" output.mp4
```

## Usage Summary

Extract Middle extracts the center portion of a video. Useful for extracting the middle segment when you want to focus on the center of a video without manually calculating start/end times.
