---
sidebar_position: 55
title: Watermark
description: Overlay a watermark on the video with positioning and transparency
---

# Watermark Node

<img src="/img/node-icons/watermark.svg" alt="ff_watermark Icon" className="node-icon" />

![Watermark Node](/img/node-screenshots/ff_watermark.png)

The **Watermark** node overlays a watermark image on video with positioning, scaling, transparency, and time-based control.

## Overview

The Watermark node uses FFMPEG's `overlay` filter to composite watermark images. Supports pixel-based positioning, scaling, alpha transparency, and time-based enable/disable.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

- **watermark** (`file`): Watermark image file
  - Supported: .png, .jpg, .jpeg, .gif, .bmp, .tiff, .webp, .svg

### Optional Inputs

- **xpixels** (`number`): X position from left
  - Range: 0 to video width
  - Default: `10`

- **ypixels** (`number`): Y position from top
  - Range: 0 to video height
  - Default: `10`

- **scale** (`number`): Scale factor
  - Range: 0.1 - 2.0
  - Default: `0.2`

- **alpha** (`number`): Transparency
  - Range: 0.0 - 1.0
  - 0.0 = fully transparent, 1.0 = fully opaque
  - Default: `1`

- **start** (`number`): Start time in seconds
  - Default: `0`

- **end** (`number`): End time in seconds
  - Use large number (99999) for full video
  - Default: `99999`

- **duration** (`string`): Override end time with duration
  - Alternative to end time

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_watermark.mp4`

## Outputs

- **output** (`file`): The watermarked video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -i watermark.png -filter_complex "[1:v]scale=iw*0.2:ih*0.2[wm];[0:v][wm]overlay=10:10:alpha=1.0:enable='between(t,0,99999)'" output.mp4
```

## Usage Summary

Watermark overlays images on video with precise control. Use pixel positioning for exact placement, scale for size adjustment, and alpha for transparency. Set start/end times to control when the watermark appears.
