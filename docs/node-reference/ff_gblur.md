---
sidebar_position: 5
title: Gaussian Blur
description: Apply high-quality Gaussian blur with separate horizontal/vertical control
---

# Gaussian Blur Node

<img src="/img/node-icons/gblur.svg" alt="ff_gblur Icon" className="node-icon" />

The **Gaussian Blur** node applies a high-quality Gaussian blur effect to your video with separate control over horizontal and vertical blur, multiple blur steps for quality, and selective channel blurring (Y, U, V, A planes).

## Overview

The Gaussian Blur node uses FFMPEG's `gblur` filter to apply a sophisticated blur effect. Unlike the basic Blur node, this node provides advanced controls including separate horizontal and vertical sigma values, multiple blur steps for quality, and the ability to blur specific color channels.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

#### Basic Mode

- **blurAmount** (`slider`): Blur intensity
  - Range: 0 - 100
  - Simplified control that maps to both horizontal and vertical sigma
  - Default: `0`

#### Advanced Mode

- **sigma** (`slider`): Horizontal blur standard deviation
  - Range: 0 - 1024
  - Controls horizontal blur strength
  - Default: `0.5`

- **sigmaV** (`slider`): Vertical blur standard deviation
  - Range: -1 - 1024
  - Controls vertical blur strength
  - When set to `-1`, uses the same value as horizontal sigma (uniform blur)
  - Default: `-1`

- **steps** (`slider`): Number of approximation steps
  - Range: 1 - 6
  - More steps provide smoother, higher quality blur but take longer to process
  - Default: `1`

- **planeY** (`togglebutton`): Blur Y/Luma/Brightness channel
  - Enable/disable blur on the luma (brightness) channel
  - Default: `true`

- **planeU** (`togglebutton`): Blur U/Chroma blue-diff channel
  - Enable/disable blur on the U chroma channel
  - Default: `true`

- **planeV** (`togglebutton`): Blur V/Chroma red-diff channel
  - Enable/disable blur on the V chroma channel
  - Default: `true`

- **planeA** (`togglebutton`): Blur A/Alpha/Transparency channel
  - Enable/disable blur on the alpha (transparency) channel
  - Default: `true`

- **notes** (`textarea`): Optional notes
  - Useful for documenting blur settings

- **output** (`string`): Output filename
  - Default: `ff_gblur.mp4`

## Outputs

- **output** (`file`): The blurred video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Gaussian Blur node generates FFMPEG filter commands:

### Basic Example

```bash
ffmpeg -i input.mp4 -vf "gblur=sigma=5.0:steps=2:planes=15" output.mp4
```

### With Separate Vertical Sigma

```bash
ffmpeg -i input.mp4 -vf "gblur=sigma=5.0:sigmaV=10.0:steps=3:planes=15" output.mp4
```

### Filter Parameters

- `sigma`: Horizontal blur standard deviation (0-1024)
- `sigmaV`: Vertical blur standard deviation (-1 to 1024, -1 = use sigma)
- `steps`: Number of approximation steps (1-6)
- `planes`: Bitmask for which channels to blur
  - Bit 1 (value 1) = Y/Luma
  - Bit 2 (value 2) = U/Chroma blue-diff
  - Bit 4 (value 4) = V/Chroma red-diff
  - Bit 8 (value 8) = A/Alpha

## Usage Summary

### Basic Usage

1. **Add Gaussian Blur Node**: Drag the Gaussian Blur node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Gaussian Blur node's input
3. **Set Blur Amount** (Basic Mode): Adjust the blurAmount slider (0-100)
4. **Run Pipeline**: Execute your pipeline to apply the blur effect

### Advanced Usage

1. **Switch to Advanced Mode**: Click the advanced mode toggle
2. **Set Horizontal Sigma**: Adjust the horizontal blur strength (0-1024)
3. **Set Vertical Sigma** (optional): Adjust vertical blur strength, or leave at -1 to match horizontal
4. **Set Steps**: Choose quality vs speed (1-6 steps)
5. **Select Channels**: Toggle which color channels to blur (Y, U, V, A)
6. **Run Pipeline**: Execute your pipeline

### Blur Strength Guidelines

- **Light Blur (0.5-5)**: Subtle softening, privacy for faces
- **Moderate Blur (5-20)**: Noticeable blur, good for backgrounds
- **Heavy Blur (20-100)**: Strong blur, complete privacy
- **Extreme Blur (100-1024)**: Maximum blur effect

### Steps Guidelines

- **1 Step**: Fastest processing, good for real-time preview
- **2-3 Steps**: Balanced quality and speed, recommended for most use cases
- **4-6 Steps**: Highest quality, smoother blur, slower processing

### Channel Selection

- **Y (Luma)**: Blur brightness - affects overall image sharpness
- **U/V (Chroma)**: Blur color - affects color bleeding and saturation
- **A (Alpha)**: Blur transparency - affects edge softness in transparent videos

### Common Use Cases

- **Privacy Protection**: Blur faces, license plates, or sensitive information
- **Background Blur**: Create depth of field effects by blurring backgrounds
- **Artistic Effects**: Create dreamy, soft-focus artistic effects
- **Anisotropic Blur**: Use different horizontal/vertical sigma for directional blur
- **Selective Channel Blur**: Blur only brightness or only color channels
- **High-Quality Blur**: Use more steps for professional-grade blur effects

### Tips

- Start with lower sigma values and increase as needed
- Use more steps for final renders, fewer steps for previews
- Set sigmaV to -1 for uniform blur, or set a different value for directional blur
- Experiment with channel selection for creative effects
- Heavy blur with many steps can significantly increase processing time
- Basic mode automatically maps blurAmount to both sigma values for uniform blur

## Example Workflows

### Privacy Blur (Basic Mode)

```
Input Node
    ↓
Gaussian Blur (blurAmount: 30)
    ↓
Output Node
```

### Anisotropic Blur (Advanced Mode)

```
Input Node
    ↓
Gaussian Blur (sigma: 10, sigmaV: 5, steps: 3)
    ↓
Output Node
```

### Selective Channel Blur

```
Input Node
    ↓
Gaussian Blur (sigma: 15, steps: 2, planeY: true, planeU: false, planeV: false)
    ↓
Output Node
```
