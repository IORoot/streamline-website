---
sidebar_position: 31
title: Directional Blur
description: Apply directional blur - perfect for motion blur effects
---

# Directional Blur Node

<img src="/img/node-icons/dblur.svg" alt="ff_dblur Icon" className="node-icon" />

The **Directional Blur** node applies blur in a specific direction, perfect for creating motion blur effects or directional softening.

## Overview

The Directional Blur node uses FFMPEG's `dblur` filter to apply blur at a specific angle. It supports basic mode (angle and radius) and advanced mode (includes channel selection).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **angle** (`slider`): Blur direction in degrees
  - Range: 0 - 360
  - Default: `0`

- **radius** (`slider`): Blur length/strength
  - Range: 0 - 100 (maps to 0-8192 pixels)
  - Default: `5`

#### Advanced Mode

- **planeY** (`togglebutton`): Blur Y/Luma channel
  - Default: `true`

- **planeU** (`togglebutton`): Blur U/Chroma channel
  - Default: `true`

- **planeV** (`togglebutton`): Blur V/Chroma channel
  - Default: `true`

- **planeA** (`togglebutton`): Blur A/Alpha channel
  - Default: `true`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_dblur.mp4`

## Outputs

- **output** (`file`): The directionally blurred video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "dblur=angle=45:radius=10:planes=15" output.mp4
```

## Usage Summary

Directional Blur creates motion blur effects by blurring in a specific direction. Use basic mode for quick motion blur, or advanced mode for selective channel blurring.
