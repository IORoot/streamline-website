---
sidebar_position: 21
title: Colorize
description: Apply a color overlay to a video stream
---

# Colorize Node

<img src="/img/node-icons/colorize.svg" alt="ff_colorize Icon" className="node-icon" />

![Colorize Node](/img/node-screenshots/ff_colorize.png)

The **Colorize** node applies a color overlay to a video stream, converting it to a specific hue while preserving the original lightness structure.

## Overview

The Colorize node uses FFMPEG's `colorize` filter to tint video with a specific color. It supports basic mode (hue, saturation, mix) and advanced mode (includes lightness control).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **hue** (`slider`): Color hue
  - Range: 0 - 360 degrees
  - Default: `0`

- **saturation** (`slider`): Color saturation
  - Range: 0.0 - 1.0
  - Default: `0.5`

- **mix** (`slider`): Mix of source lightness
  - Range: 0.0 - 1.0
  - Default: `1.0`

#### Advanced Mode

- **lightness** (`slider`): Color lightness
  - Range: 0.0 - 1.0
  - Default: `0.5`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colorize.mp4`

## Outputs

- **output** (`file`): The colorized video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colorize=hue=180:saturation=0.5:mix=1.0:lightness=0.5" output.mp4
```

## Usage Summary

Colorize applies a color tint to video while preserving the original lightness structure. Use basic mode for quick colorization, or advanced mode for precise lightness control.
