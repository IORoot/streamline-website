---
sidebar_position: 6
title: Sharpen Video
description: Apply sharpening effect to video
---

# Sharpen Video Node

<img src="/img/node-icons/sharpen.svg" alt="ff_sharpen Icon" className="node-icon" />

![Sharpen Video Node](/img/node-screenshots/ff_sharpen.png)

The **Sharpen Video** node applies a sharpening effect to enhance details and make video appear crisper. It uses FFMPEG's unsharp filter with configurable pixel radius and sharpening strength.

## Overview

The Sharpen Video node uses FFMPEG's `unsharp` filter to enhance image sharpness. This is useful for improving detail in soft or slightly out-of-focus footage, or for creating a more crisp, professional look.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **sharpen** (`slider`): Sharpening strength
  - Range: 0 - 1.5
  - Higher values create stronger sharpening effects
  - Default: `1.0`

- **pixel** (`slider`): Pixel radius for sharpening
  - Range: 3 - 23 (odd integers only: 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23)
  - Larger radius affects more pixels, creating broader sharpening
  - Smaller radius creates more localized sharpening
  - Default: `5`

- **notes** (`textarea`): Optional notes
  - Useful for documenting sharpening settings

- **output** (`string`): Output filename
  - Default: `ff_sharpen.mp4`

## Outputs

- **output** (`file`): The sharpened video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Sharpen Video node generates FFMPEG filter commands:

```bash
ffmpeg -i input.mp4 -vf "unsharp=5:5:1.0:5:5:1.0" output.mp4
```

### Filter Parameters

- `unsharp=luma_msize_x:luma_msize_y:luma_amount:chroma_msize_x:chroma_msize_y:chroma_amount`
  - `luma_msize_x` and `luma_msize_y`: Horizontal and vertical luma matrix size (pixel radius)
  - `luma_amount`: Luma sharpening strength (0-1.5)
  - `chroma_msize_x` and `chroma_msize_y`: Horizontal and vertical chroma matrix size (same as luma)
  - `chroma_amount`: Chroma sharpening strength (same as luma)

The node uses the same values for both luma and chroma, and for both horizontal and vertical dimensions.

## Usage Summary

### Basic Usage

1. **Add Sharpen Video Node**: Drag the Sharpen Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Sharpen Video node's input
3. **Set Sharpening Strength**: Adjust the sharpen slider (0-1.5)
4. **Set Pixel Radius** (optional): Adjust the pixel slider (3-23, odd numbers only)
5. **Run Pipeline**: Execute your pipeline to apply the sharpening effect

### Sharpening Strength Guidelines

- **Light Sharpening (0.1-0.5)**: Subtle enhancement, good for already sharp footage
- **Moderate Sharpening (0.5-1.0)**: Noticeable enhancement, recommended for most use cases
- **Heavy Sharpening (1.0-1.5)**: Strong enhancement, use with caution to avoid artifacts

### Pixel Radius Guidelines

- **Small Radius (3-5)**: More localized sharpening, preserves fine details
- **Medium Radius (5-9)**: Balanced sharpening, good for most content
- **Large Radius (9-23)**: Broader sharpening, affects larger areas

### Common Use Cases

- **Enhance Soft Footage**: Improve detail in slightly out-of-focus or soft video
- **Professional Look**: Add crispness to professional video productions
- **Low-Quality Enhancement**: Improve perceived quality of lower resolution footage
- **Detail Enhancement**: Bring out fine details in textures, text, or patterns
- **Post-Processing**: Apply after other effects to restore sharpness

### Tips

- Start with lower sharpening values and increase gradually
- Over-sharpening can create halos, artifacts, and an unnatural look
- Use smaller pixel radius for fine details, larger for broader enhancement
- Sharpening cannot add detail that wasn't captured - it enhances existing detail
- Combine with other nodes (like Blur or Color Correct) for balanced results
- Preview your results carefully - sharpening effects can vary significantly by content

## Example Workflows

### Subtle Enhancement

```
Input Node
    ↓
Sharpen Video (sharpen: 0.5, pixel: 5)
    ↓
Output Node
```

### Strong Enhancement

```
Input Node
    ↓
Sharpen Video (sharpen: 1.2, pixel: 7)
    ↓
Output Node
```

### Fine Detail Enhancement

```
Input Node
    ↓
Sharpen Video (sharpen: 0.8, pixel: 3)
    ↓
Output Node
```
