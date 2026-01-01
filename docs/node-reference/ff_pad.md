---
sidebar_position: 10
title: Pad Video
description: Add padding to video dimensions
---

# Pad Video Node

<img src="/img/node-icons/pad.svg" alt="ff_pad Icon" className="node-icon" />

![Pad Video Node](/img/node-screenshots/ff_pad.png)

The **Pad Video** node adds padding (borders) to your video. You can pad by specifying edges (top, right, bottom, left) or by specifying total output size and position. Supports both outwards (expanding dimensions) and inwards (squashing content) modes.

## Overview

The Pad Video node uses FFMPEG's `pad` filter to add colored borders around your video. It supports two modes: padding by edges (adding pixels to each side) or padding by size and position (specifying total output size with input video positioning).

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **mode** (`buttongroup`): Choose how to pad
  - Options: `edges` or `sizepos`
  - **Edges**: Add padding pixels to each side (Top, Right, Bottom, Left)
  - **Size & Position**: Specify total output size with input video positioning (Width, Height, X, Y)
  - Default: `edges`

#### Edges Mode

- **top** (`number`): Pixels to pad on the top
  - Range: 0 and above
  - Default: `0`

- **right** (`number`): Pixels to pad on the right
  - Range: 0 and above
  - Default: `0`

- **bottom** (`number`): Pixels to pad on the bottom
  - Range: 0 and above
  - Default: `0`

- **left** (`number`): Pixels to pad on the left
  - Range: 0 and above
  - Default: `0`

- **padDirection** (`buttongroup`): Choose padding direction
  - Options: `outwards` or `inwards`
  - **Outwards**: Expands video dimensions by adding padding (recommended)
  - **Inwards**: Keeps dimensions but squashes video content to fit padding
  - Default: `outwards`

#### Size & Position Mode

- **width** (`number`): Total output width in pixels
  - Must be ≥ input width
  - Default: `1920`

- **height** (`number`): Total output height in pixels
  - Must be ≥ input height
  - Default: `1080`

- **x** (`number`): X position of input video in output
  - 0 = left edge
  - Default: `0`

- **y** (`number`): Y position of input video in output
  - 0 = top edge
  - Default: `0`

- **color** (`colourpicker`): Padding color
  - Hex, RGB, or named color
  - Default: `#000000` (black)

- **notes** (`textarea`): Optional notes
  - Useful for documenting padding settings

- **output** (`string`): Output filename
  - Default: `ff_pad.mp4`

## Outputs

- **output** (`file`): The padded video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Pad Video node generates FFMPEG filter commands:

### Edges Mode (Outwards)

```bash
ffmpeg -i input.mp4 -vf "pad=w=iw+100+50:h=ih+20+30:x=100:y=20:color=black" output.mp4
```

This adds 100px left, 50px right, 20px top, and 30px bottom padding.

### Edges Mode (Inwards)

```bash
ffmpeg -i input.mp4 -vf "scale='iw-150':'ih-50':flags=lanczos,setsar=1,pad=w=iw:h=ih:x=0:y=0:color=black" output.mp4
```

This scales down the video to make room for padding, then pads back to original dimensions.

### Size & Position Mode

```bash
ffmpeg -i input.mp4 -vf "pad=w=1920:h=1080:x=100:y=50:color=black" output.mp4
```

This creates a 1920x1080 output with the input video positioned at (100, 50).

## Usage Summary

### Basic Usage

1. **Add Pad Video Node**: Drag the Pad Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Pad Video node's input
3. **Choose Mode**: Select "Edges" or "Size & Position"
4. **Set Padding Values**: Enter the padding dimensions based on your selected mode
5. **Choose Color**: Select the padding color (default: black)
6. **Run Pipeline**: Execute your pipeline to add padding

### Edges Mode

Use when you want to add padding to specific sides:
- Add letterboxing (top/bottom)
- Add pillarboxing (left/right)
- Add borders for aesthetic purposes
- Center video by adding equal padding to opposite sides

### Size & Position Mode

Use when you want to create a specific output size:
- Create standard output dimensions (e.g., 1920x1080)
- Position video within a larger canvas
- Add borders for aspect ratio conversion
- Create custom frame sizes

### Padding Direction

- **Outwards** (recommended): Expands video dimensions
  - Original video remains unchanged
  - Output is larger than input
  
- **Inwards**: Keeps original dimensions but scales video down
  - Video content is compressed to fit padding
  - Output size matches input size

### Common Use Cases

- **Add Letterboxing**: Add black bars for cinematic effect
- **Aspect Ratio Conversion**: Pad to convert aspect ratios (e.g., 4:3 to 16:9)
- **Add Borders**: Add colored borders for aesthetic purposes
- **Center Video**: Center video in a larger canvas
- **Standardize Dimensions**: Ensure all videos have the same output size
- **Create Frames**: Add padding to create frame-like effects

### Tips

- Use "Outwards" mode to preserve video quality
- Use "Inwards" mode only when you need to maintain input dimensions
- Black padding (#000000) is standard for letterboxing
- Use colored padding for creative effects
- Combine with Scale Video to maintain aspect ratio while padding
- Preview your results to ensure padding looks correct

## Example Workflows

### Add Letterboxing

```
Input Node
    ↓
Pad Video (mode: edges, top: 120, bottom: 120, color: black)
    ↓
Output Node
```

### Center Video in Canvas

```
Input Node
    ↓
Pad Video (mode: sizepos, width: 1920, height: 1080, x: 100, y: 0)
    ↓
Output Node
```

### Add Colored Border

```
Input Node
    ↓
Pad Video (mode: edges, top: 20, right: 20, bottom: 20, left: 20, color: #FF0000)
    ↓
Output Node
```
