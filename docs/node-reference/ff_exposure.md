---
sidebar_position: 13
title: Exposure
description: Adjust the exposure (brightness) of the video
---

# Exposure Node

<img src="/img/node-icons/exposure.svg" alt="ff_exposure Icon" className="node-icon" />

The **Exposure** node adjusts the exposure (overall brightness) of your video using EV (Exposure Value) units, similar to camera exposure compensation. It also allows you to adjust the black level to control shadow detail and contrast.

## Overview

The Exposure node uses FFMPEG's `exposure` filter to adjust video brightness. It works like camera exposure compensation, where each +1 EV doubles the brightness and each -1 EV halves it.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **exposure** (`slider`): Exposure adjustment in EV units
  - Range: -3 to 3
  - Each +1 EV doubles brightness (one stop brighter)
  - Each -1 EV halves brightness (one stop darker)
  - Default: `0`

- **black** (`slider`): Black level adjustment
  - Range: -1 to 1
  - Negative values = Crush blacks (darker shadows, more contrast)
  - Positive values = Lift blacks (brighter shadows, less contrast)
  - Default: `0`

- **notes** (`textarea`): Optional notes
  - Useful for documenting exposure settings

- **output** (`string`): Output filename
  - Default: `ff_exposure.mp4`

## Outputs

- **output** (`file`): The adjusted video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Exposure node generates FFMPEG filter commands:

```bash
ffmpeg -i input.mp4 -vf "exposure=exposure=1.0:black=0" output.mp4
```

### Filter Parameters

- `exposure`: Exposure adjustment in EV units (-3 to 3)
- `black`: Black level adjustment (-1 to 1)

## Usage Summary

### Basic Usage

1. **Add Exposure Node**: Drag the Exposure node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Exposure node's input
3. **Set Exposure**: Adjust the exposure slider (-3 to 3 EV)
4. **Set Black Level** (optional): Adjust the black level slider (-1 to 1)
5. **Run Pipeline**: Execute your pipeline to adjust exposure

### Understanding EV (Exposure Value)

- **+1 EV**: Doubles brightness (one stop brighter)
- **-1 EV**: Halves brightness (one stop darker)
- **+2 EV**: 4x brighter (two stops)
- **-2 EV**: 4x darker (two stops)
- **+3 EV**: 8x brighter (three stops)
- **-3 EV**: 8x darker (three stops)

### Exposure Guidelines

- **Fix Underexposed**: +1 to +2 EV
- **Fix Overexposed**: -1 to -2 EV
- **Creative Darkness**: -1 to -3 EV
- **High-Key Lighting**: +1 to +2 EV
- **No Change**: 0 EV

### Black Level Guidelines

- **Crush Blacks** (negative): Darker shadows, more contrast
- **Lift Blacks** (positive): Brighter shadows, less contrast
- **No Change**: 0

### Common Use Cases

- **Fix Underexposed Footage**: Increase exposure (+1 to +2 EV)
- **Fix Overexposed Footage**: Decrease exposure (-1 to -2 EV)
- **Match Exposure**: Normalize clips shot at different exposures
- **Creative Darkness**: Darken for moody, dramatic look
- **High-Key Lighting**: Brighten for airy, light aesthetic
- **Shadow Control**: Adjust black level for shadow detail

### Tips

- Start with small adjustments (±0.5 to ±1 EV)
- Use preview to see results in real-time
- Combine with Color Correct for comprehensive color grading
- Black level adjustment affects shadow detail and contrast
- Over-adjustment can cause clipping or loss of detail

## Example Workflows

### Fix Underexposed Video

```
Input Node
    ↓
Exposure (exposure: 1.5, black: 0)
    ↓
Output Node
```

### Creative Dark Look

```
Input Node
    ↓
Exposure (exposure: -1.5, black: -0.3)
    ↓
Output Node
```

### High-Key Bright Look

```
Input Node
    ↓
Exposure (exposure: 1.0, black: 0.2)
    ↓
Output Node
```
