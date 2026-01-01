---
sidebar_position: 29
title: Convert Format
description: Convert video to different format
---

# Convert Format Node

<img src="/img/node-icons/convert.svg" alt="ff_convert Icon" className="node-icon" />

![Convert Format Node](/img/node-screenshots/ff_convert.png)

The **Convert Format** node converts videos between different container formats and codecs, automatically selecting appropriate codecs for each format.

## Overview

The Convert Format node uses FFMPEG to convert videos between formats. It automatically selects codecs based on the target format (e.g., H.264 for MP4, VP9 for WebM).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **format** (`select`): Output format
  - Options: mp4, mov, avi, webm, mkv, gif, av1, hevc/h265, flv, m4v, 3gp
  - Default: `mp4`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_convert.mp4`

## Outputs

- **output** (`file`): The converted video file

## FFMPEG Command

The Convert Format node generates format-specific FFMPEG commands:

### MP4/MOV

```bash
ffmpeg -i input.mp4 -c:v libx264 -c:a aac output.mp4
```

### WebM

```bash
ffmpeg -i input.mp4 -c:v libvpx-vp9 -c:a libopus output.webm
```

### AV1

```bash
ffmpeg -i input.mp4 -c:v libaom-av1 -c:a aac -strict experimental -cpu-used 6 -crf 32 output.mp4
```

## Usage Summary

Convert Format changes video container and codec. The node automatically selects appropriate codecs for each format. Use for platform-specific requirements or format standardization.
