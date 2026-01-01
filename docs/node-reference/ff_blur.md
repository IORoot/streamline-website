---
sidebar_position: 4
title: Blur Video
description: Apply blur effect to video
---

# Blur Video Node

<img src="/img/node-icons/blur.svg" alt="ff_blur Icon" className="node-icon" />

![Blur Video Node](/img/node-screenshots/ff_blur.png)

The **Blur Video** node applies a Gaussian blur effect to your video. This is useful for creating privacy effects, artistic blur, or softening video content.

## Overview

The Blur Video node uses FFMPEG's `gblur` filter to apply a Gaussian blur effect. You can control the blur strength (sigma value) and the number of blur steps for different levels of blur intensity and quality.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **strength** (`slider`): Blur strength (sigma value)
  - Range: 0 - 1000
  - Higher values create stronger blur effects
  - Default: `10`

- **steps** (`slider`): Number of blur steps
  - Range: 1 - 6
  - More steps provide smoother, higher quality blur but take longer to process
  - Default: `1`

- **notes** (`textarea`): Optional notes
  - Useful for documenting blur settings

- **output** (`string`): Output filename
  - Default: `ff_blur.mp4`

## Outputs

- **output** (`file`): The blurred video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Blur Video node generates FFMPEG filter commands:

```bash
ffmpeg -i input.mp4 -vf "gblur=sigma=10:steps=1" output.mp4
```

### Filter Parameters

- `sigma`: The blur strength (0-1000)
  - Lower values (1-10): Light blur, subtle effect
  - Medium values (10-50): Moderate blur, noticeable effect
  - Higher values (50-1000): Heavy blur, strong effect

- `steps`: Number of blur iterations (1-6)
  - More steps = smoother, higher quality blur
  - Fewer steps = faster processing, slightly less smooth

## Usage Summary

### Basic Usage

1. **Add Blur Video Node**: Drag the Blur Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Blur Video node's input
3. **Set Blur Strength**: Adjust the strength slider (0-1000)
4. **Set Blur Steps** (optional): Adjust the steps slider (1-6) for quality
5. **Run Pipeline**: Execute your pipeline to apply the blur effect

### Blur Strength Guidelines

- **Light Blur (1-10)**: Subtle softening, privacy for faces, minor artistic effect
- **Moderate Blur (10-50)**: Noticeable blur, good for backgrounds, artistic effect
- **Heavy Blur (50-1000)**: Strong blur, complete privacy, dramatic artistic effect

### Blur Steps Guidelines

- **1 Step**: Fastest processing, good for real-time preview
- **2-3 Steps**: Balanced quality and speed, recommended for most use cases
- **4-6 Steps**: Highest quality, smoother blur, slower processing

### Common Use Cases

- **Privacy Protection**: Blur faces, license plates, or sensitive information
- **Background Blur**: Create depth of field effects by blurring backgrounds
- **Artistic Effects**: Create dreamy, soft-focus artistic effects
- **Content Censoring**: Blur inappropriate or unwanted content
- **Focus Effects**: Blur everything except the subject to draw attention

### Tips

- Start with lower strength values and increase as needed
- Use more steps for final renders, fewer steps for previews
- Combine with other nodes (like Crop or Mask) to blur specific regions
- Heavy blur can significantly increase processing time
- Consider using multiple blur nodes with different strengths for layered effects

## Example Workflows

### Privacy Blur

```
Input Node
    ↓
Blur Video (strength: 30, steps: 2)
    ↓
Output Node
```

### Artistic Soft Focus

```
Input Node
    ↓
Blur Video (strength: 15, steps: 3)
    ↓
Color Correct
    ↓
Output Node
```

### Selective Blur (with masking)

```
Input Node
    ↓
Crop Video (to isolate region)
    ↓
Blur Video (strength: 50, steps: 2)
    ↓
Overlay (blend back with original)
    ↓
Output Node
```
