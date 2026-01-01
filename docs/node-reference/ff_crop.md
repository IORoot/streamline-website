---
sidebar_position: 9
title: Crop Video
description: Crop a video to specific dimensions
---

# Crop Video Node

<img src="/img/node-icons/crop.svg" alt="ff_crop Icon" className="node-icon" />

The **Crop Video** node crops a video to specific dimensions. You can crop by specifying edges (top, right, bottom, left) or by specifying size and position (width, height, x, y).

## Overview

The Crop Video node uses FFMPEG's `crop` filter to remove portions of the video. It supports two modes: cropping by edges (removing pixels from each side) or cropping to a specific rectangle with positioning.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **mode** (`buttongroup`): Choose how to crop
  - Options: `edges` or `sizepos`
  - **Edges**: Crop by removing pixels from each side (Top, Right, Bottom, Left)
  - **Size & Position**: Crop to a specific rectangle with positioning (Width, Height, X, Y)
  - Default: `edges`

#### Edges Mode

- **top** (`number`): Pixels to crop from the top
  - Range: 0 and above
  - Default: `0`

- **right** (`number`): Pixels to crop from the right
  - Range: 0 and above
  - Default: `0`

- **bottom** (`number`): Pixels to crop from the bottom
  - Range: 0 and above
  - Default: `0`

- **left** (`number`): Pixels to crop from the left
  - Range: 0 and above
  - Default: `0`

#### Size & Position Mode

- **width** (`number`): Crop width in pixels
  - Range: 1 to input width
  - Default: `480`

- **height** (`number`): Crop height in pixels
  - Range: 1 to input height
  - Default: `360`

- **x** (`number`): X offset from left
  - Range: 0 to input width
  - Default: `0`

- **y** (`number`): Y offset from top
  - Range: 0 to input height
  - Default: `0`

- **notes** (`textarea`): Optional notes
  - Useful for documenting crop settings

- **output** (`string`): Output filename
  - Default: `ff_crop.mp4`

## Outputs

- **output** (`file`): The cropped video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Crop Video node generates FFMPEG filter commands:

### Edges Mode

```bash
ffmpeg -i input.mp4 -vf "crop=w=iw-(100+50):h=ih-(20+30):x=100:y=20" output.mp4
```

This crops 100px from left, 50px from right, 20px from top, and 30px from bottom.

### Size & Position Mode

```bash
ffmpeg -i input.mp4 -vf "crop=w='if(lt(iw-100,480),iw-100,480)':h='if(lt(ih-50,360),ih-50,360)':x=100:y=50" output.mp4
```

This crops to 480x360 starting at position (100, 50), with automatic clamping to input dimensions.

## Usage Summary

### Basic Usage

1. **Add Crop Video Node**: Drag the Crop Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Crop Video node's input
3. **Choose Mode**: Select "Edges" or "Size & Position"
4. **Set Crop Values**: Enter the crop dimensions based on your selected mode
5. **Run Pipeline**: Execute your pipeline to crop the video

### Edges Mode

Use when you want to remove pixels from specific sides:
- Remove letterboxing (top/bottom)
- Remove pillarboxing (left/right)
- Remove unwanted borders
- Center crop by removing equal amounts from opposite sides

### Size & Position Mode

Use when you want to extract a specific region:
- Extract a specific area of the video
- Create a zoomed-in view
- Focus on a particular subject
- Create square or custom aspect ratio crops

### Common Use Cases

- **Remove Letterboxing**: Crop black bars from top and bottom
- **Remove Pillarboxing**: Crop black bars from left and right
- **Extract Region**: Crop to focus on a specific area
- **Aspect Ratio Conversion**: Crop to change aspect ratio (e.g., 16:9 to 4:3)
- **Square Crop**: Create square videos for social media
- **Remove Watermarks**: Crop out watermarks or logos from edges

### Tips

- Edges mode is intuitive for removing borders
- Size & Position mode gives precise control over the crop region
- The crop dimensions are automatically clamped to not exceed input dimensions
- Combine with Scale Video to maintain specific output dimensions
- Use preview to see the crop region before processing
- Negative values are not allowed - use 0 for no crop on that side

## Example Workflows

### Remove Letterboxing

```
Input Node
    ↓
Crop Video (mode: edges, top: 60, bottom: 60)
    ↓
Output Node
```

### Extract Center Region

```
Input Node
    ↓
Crop Video (mode: sizepos, width: 1920, height: 1080, x: 240, y: 0)
    ↓
Output Node
```

### Square Crop for Social Media

```
Input Node
    ↓
Crop Video (mode: sizepos, width: 1080, height: 1080, x: 420, y: 0)
    ↓
Output Node
```
