---
sidebar_position: 28
title: Concatenate Videos
description: Concatenate multiple videos
---

# Concatenate Videos Node

<img src="/img/node-icons/concat.svg" alt="ff_concat Icon" className="node-icon" />

![Concatenate Videos Node](/img/node-screenshots/ff_concat.png)

The **Concatenate Videos** node joins multiple video files together end-to-end to create a single continuous video.

## Overview

The Concatenate Videos node uses FFMPEG's concat demuxer to join multiple videos. It supports dynamic inputs (up to 100 videos) and can normalize dimensions before concatenation.

## Inputs

### Required Inputs

- **input** (`file`): First input video file
  - Dynamic: Supports up to 100 inputs (input, input2, input3, ...)

### Optional Inputs

- **input2** (`file`): Second input video file
- **input3** (`file`): Third input video file
- ... (up to input100)

- **width** (`number`): Output width for normalization
  - Default: `1280`

- **height** (`number`): Output height for normalization
  - Default: `720`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_concat.mp4`

## Outputs

- **output** (`file`): The concatenated video file

## FFMPEG Command

The Concatenate Videos node creates a concat file list and uses FFMPEG's concat demuxer:

```bash
ffmpeg -f concat -safe 0 -i filelist.txt -c copy output.mp4
```

## Usage Summary

Concatenate Videos joins multiple videos sequentially. Videos are normalized to the same dimensions before concatenation. Connect multiple input sockets to add more videos to the sequence.
