---
sidebar_position: 14
title: Hue
description: Modify hue, saturation, and brightness of the video
---

# Hue Node

<img src="/img/node-icons/hue.svg" alt="ff_hue Icon" className="node-icon" />

![Hue Node](/img/node-screenshots/ff_hue.png)

The **Hue** node modifies the hue, saturation, and brightness of your video. Perfect for color correction, creative color effects, and adjusting the overall mood of your footage.

## Overview

The Hue node uses FFMPEG's `hue` filter to adjust color properties. It supports basic mode (hue only) and advanced mode (hue, saturation, brightness) for different levels of control.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

#### Basic Mode

- **h** (`slider`): Hue angle in degrees
  - Range: -180 to 180
  - Rotates colors around the color wheel
  - Default: `0`

#### Advanced Mode

- **h** (`slider`): Hue angle in degrees
  - Range: -180 to 180
  - Default: `0`

- **s** (`slider`): Saturation multiplier
  - Range: -10 to 10
  - 1.0 = Original saturation
  - < 1.0 = Desaturated
  - > 1.0 = Oversaturated
  - Default: `1`

- **b** (`slider`): Brightness adjustment
  - Range: -10 to 10
  - 0 = Original brightness
  - < 0 = Darker
  - > 0 = Brighter
  - Default: `0`

- **notes** (`textarea`): Optional notes
  - Useful for documenting hue settings

- **output** (`string`): Output filename
  - Default: `ff_hue.mp4`

## Outputs

- **output** (`file`): The adjusted video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Hue node generates FFMPEG filter commands:

```bash
ffmpeg -i input.mp4 -vf "hue=h=30:s=1.2:b=0.1" output.mp4
```

### Filter Parameters

- `h`: Hue angle in degrees (-180 to 180)
- `s`: Saturation multiplier (-10 to 10)
- `b`: Brightness adjustment (-10 to 10)

## Usage Summary

### Basic Usage

1. **Add Hue Node**: Drag the Hue node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Hue node's input
3. **Set Hue Angle**: Adjust the hue slider (-180 to 180 degrees)
4. **Run Pipeline**: Execute your pipeline to adjust colors

### Advanced Usage

1. **Switch to Advanced Mode**: Click the advanced mode toggle
2. **Set Hue Angle**: Adjust the hue slider
3. **Set Saturation**: Adjust saturation multiplier
4. **Set Brightness**: Adjust brightness
5. **Run Pipeline**: Execute your pipeline

### Hue Angle Guidelines

- **0°**: No change (original colors)
- **±30°**: Subtle color shift
- **±60°**: Moderate color shift
- **±90°**: Significant color shift
- **±180°**: Complete color inversion

### Saturation Guidelines

- **0.0**: Completely desaturated (grayscale)
- **0.5**: Half saturation
- **1.0**: Original saturation
- **2.0**: Double saturation (vivid colors)
- **> 2.0**: Extreme oversaturation

### Brightness Guidelines

- **-1.0**: Noticeably darker
- **0**: Original brightness
- **+1.0**: Noticeably brighter
- **±5.0**: Extreme brightness change

### Common Use Cases

- **Color Correction**: Fix color casts or white balance issues
- **Creative Color Effects**: Shift colors for artistic effects
- **Mood Adjustment**: Warm or cool color tones
- **Saturation Control**: Enhance or reduce color intensity
- **Brightness Adjustment**: Fine-tune overall brightness

### Tips

- Start with small hue adjustments (±30°)
- Use saturation to enhance or reduce color intensity
- Combine hue and saturation for creative color grading
- Brightness adjustment affects overall image brightness
- Preview your results to ensure colors look natural
- Use basic mode for simple hue shifts, advanced mode for full control

## Example Workflows

### Warm Color Tone

```
Input Node
    ↓
Hue (h: 15, s: 1.1, b: 0)
    ↓
Output Node
```

### Cool Color Tone

```
Input Node
    ↓
Hue (h: -15, s: 1.0, b: 0)
    ↓
Output Node
```

### Desaturated Look

```
Input Node
    ↓
Hue (h: 0, s: 0.5, b: 0)
    ↓
Output Node
```
