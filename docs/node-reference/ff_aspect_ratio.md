---
sidebar_position: 15
title: Aspect Ratio
description: Change the video aspect ratio by modifying container metadata
---

# Aspect Ratio Node

<img src="/img/node-icons/aspect-ratio.svg" alt="ff_aspect_ratio Icon" className="node-icon" />

![Aspect Ratio Node](/img/node-screenshots/ff_aspect_ratio.png)

The **Aspect Ratio** node changes the video aspect ratio by modifying container metadata (DAR - Display Aspect Ratio) without re-encoding the video file. Supports preset aspect ratios or custom values with different adaptation modes.

## Overview

The Aspect Ratio node modifies the display aspect ratio metadata without re-encoding, making it a fast operation. It supports three modes: stretch (modify metadata only), fit (add padding), and fill (crop).

## Inputs

### Required Inputs

- **input** (`file`): Input video file or folder
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **preset** (`select`): Preset aspect ratio or custom
  - Options: `custom`, `1:1`, `3:2`, `2:3`, `4:3`, `16:9`, `21:9`, `2.37:1`
  - Default: `custom`

- **mode** (`buttongroup`): How to adapt content to target aspect
  - Options: `stretch`, `fit`, `fill`
  - **Stretch**: Modify metadata only (fast, may distort)
  - **Fit**: Add padding to fit (preserves content, adds borders)
  - **Fill**: Crop to fill (preserves aspect, may crop content)
  - Default: `stretch`

- **width** (`string`): Aspect width (allows float)
  - Default: `1`

- **height** (`string`): Aspect height (allows float)
  - Default: `1`

- **aspect** (`string`): Computed aspect ratio
  - Format: `width:height` (e.g., `16:9`, `1:1`, `4:3`)
  - Default: `1:1`

- **notes** (`textarea`): Optional notes
  - Useful for documenting aspect ratio settings

- **output** (`string`): Output filename
  - Default: `ff_aspect_ratio.mp4`

## Outputs

- **output** (`file`): The video with modified aspect ratio
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Aspect Ratio node generates FFMPEG commands:

### Stretch Mode

```bash
ffmpeg -i input.mp4 -c copy -aspect 16:9 output.mp4
```

### Fit Mode (with padding)

```bash
ffmpeg -i input.mp4 -vf "scale=iw*sar:ih:force_original_aspect_ratio=decrease,pad=iw:ih*sar:0:(oh-ih)/2:color=black" -aspect 16:9 output.mp4
```

### Fill Mode (with cropping)

```bash
ffmpeg -i input.mp4 -vf "scale=iw*sar:ih:force_original_aspect_ratio=increase,crop=iw:ih*sar" -aspect 16:9 output.mp4
```

## Usage Summary

### Basic Usage

1. **Add Aspect Ratio Node**: Drag the Aspect Ratio node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Aspect Ratio node's input
3. **Choose Preset**: Select a preset aspect ratio or use custom
4. **Set Custom Values** (if custom): Enter width and height
5. **Choose Mode**: Select stretch, fit, or fill
6. **Run Pipeline**: Execute your pipeline to change aspect ratio

### Mode Comparison

- **Stretch**: Fastest, modifies metadata only, may distort content
- **Fit**: Preserves content, adds padding/borders, may change dimensions
- **Fill**: Preserves aspect, crops content, maintains dimensions

### Common Aspect Ratios

- **1:1**: Square (Instagram, social media)
- **4:3**: Standard (old TV, classic)
- **16:9**: Widescreen (modern TV, YouTube)
- **21:9**: Ultrawide (cinema, gaming)
- **2.37:1**: Anamorphic (cinema)

### Common Use Cases

- **Platform Requirements**: Convert to platform-specific aspect ratios
- **Social Media**: Create square (1:1) videos for Instagram
- **Cinema Look**: Convert to 21:9 or 2.37:1 for cinematic feel
- **Standardization**: Ensure all videos have the same aspect ratio
- **Quick Conversion**: Use stretch mode for fast metadata-only changes

### Tips

- Stretch mode is fastest but may distort content
- Fit mode preserves content but adds borders
- Fill mode maintains aspect but may crop content
- Use preview to see how each mode affects your video
- Combine with Scale Video for precise dimension control

## Example Workflows

### Square Video for Instagram

```
Input Node
    ↓
Aspect Ratio (preset: 1:1, mode: fit)
    ↓
Output Node
```

### Cinema Widescreen

```
Input Node
    ↓
Aspect Ratio (preset: 21:9, mode: fill)
    ↓
Output Node
```
