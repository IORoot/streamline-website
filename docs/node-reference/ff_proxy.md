---
sidebar_position: 45
title: Generate Proxy
description: Generate low-res proxy video
---

# Generate Proxy Node

<img src="/img/node-icons/proxy.svg" alt="ff_proxy Icon" className="node-icon" />

The **Generate Proxy** node creates low-resolution proxy videos for faster editing and preview workflows.

## Overview

The Generate Proxy node generates smaller, lower-quality versions of videos for use in editing workflows. Proxies are faster to process and require less storage.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **width** (`string`): Proxy width in pixels
  - Range: 320 - 1920
  - Default: `640`

- **height** (`string`): Proxy height in pixels
  - Range: 180 - 1080
  - Default: `360`

- **fps** (`string`): Proxy frame rate
  - Range: 5 - 30 fps
  - Default: `15`

- **codec** (`select`): Video codec
  - Options: libx264, libx265, h264_videotoolbox, hevc_videotoolbox, libvpx, libvpx-vp9, libaom-av1, and more
  - Default: `libx264`

- **crf** (`string`): Quality setting
  - Range: 18 - 51 (lower = higher quality)
  - Default: `28`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_proxy.mp4`

## Outputs

- **output** (`file`): The proxy video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "scale=640:360" -r 15 -c:v libx264 -crf 28 output.mp4
```

## Usage Summary

Generate Proxy creates low-resolution versions of videos for faster editing workflows. Use lower resolution, frame rate, and higher CRF values for smaller file sizes. Replace with original files for final export.
