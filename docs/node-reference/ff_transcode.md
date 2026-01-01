---
sidebar_position: 51
title: Transcode Video
description: Transcode video with scaling and padding
---

# Transcode Video Node

<img src="/img/node-icons/transcode.svg" alt="ff_transcode Icon" className="node-icon" />

The **Transcode Video** node transcodes video with scaling, padding, frame rate conversion, and codec selection.

## Overview

The Transcode Video node provides comprehensive video transcoding with dimension control, frame rate conversion, aspect ratio adjustment, and codec selection for both video and audio.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **width** (`string`): Output width in pixels
  - Range: 320 - 7680
  - Default: `1920`

- **height** (`string`): Output height in pixels
  - Range: 180 - 4320
  - Default: `1080`

- **fps** (`string`): Output frame rate
  - Range: 1 - 120 fps
  - Default: `30`

- **sar** (`string`): Sample Aspect Ratio
  - Format: width/height (e.g., 1/1, 4/3, 16/9)
  - Default: `1/1`

- **video_codec** (`select`): Video codec
  - Extensive list including: libx264, libx265, h264, hevc, vp8, vp9, av1, prores, and many more
  - Default: `libx264`

- **audio_codec** (`select`): Audio codec
  - Extensive list including: aac, mp3, opus, flac, pcm variants, and many more
  - Default: `aac`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename

## Outputs

- **output** (`file`): The transcoded video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "scale=1920:1080,setsar=1/1" -r 30 -c:v libx264 -c:a aac output.mp4
```

## Usage Summary

Transcode Video provides comprehensive video conversion with scaling, frame rate, aspect ratio, and codec controls. Use for format conversion, dimension standardization, and codec optimization.
