---
sidebar_position: 22
title: Colorkey (Chroma Key)
description: Make a specific color transparent - perfect for green screen removal
---

# Colorkey (Chroma Key) Node

<img src="/img/node-icons/colorkey.svg" alt="ff_colorkey Icon" className="node-icon" />

The **Colorkey** node makes a specific color transparent, perfect for green screen removal and chroma key compositing.

## Overview

The Colorkey node uses FFMPEG's `colorkey` filter to remove a specific color from video, making it transparent. It supports basic mode (color and similarity) and advanced mode (includes edge blending).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **color** (`colourpicker`): Key color to make transparent
  - Examples: green, blue, #00FF00
  - Default: `green`

- **similarity** (`slider`): Color similarity tolerance
  - Range: 0.01 - 1.0
  - Lower = more precise, higher = more forgiving
  - Default: `0.01`

#### Advanced Mode

- **blend** (`slider`): Alpha blending for edges
  - Range: 0.0 - 1.0
  - Helps smooth edges for better compositing
  - Default: `0.0`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colorkey.mp4`

## Outputs

- **output** (`file`): The video with transparent key color

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colorkey=green:0.01:0.0" output.mp4
```

## Usage Summary

Colorkey removes a specific color (typically green or blue) to create transparency for compositing. Use basic mode for standard green screen removal, or advanced mode for edge blending to improve compositing quality.
