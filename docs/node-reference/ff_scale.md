---
sidebar_position: 3
title: Scale Video
description: Change the scale (physical dimensions) of the video
---

# Scale Video Node

<img src="/img/node-icons/scale.svg" alt="ff_scale Icon" className="node-icon" />

![Scale Video Node](/img/node-screenshots/ff_scale.png)

The **Scale Video** node changes the physical dimensions (resolution) of your video while maintaining or setting aspect ratios. You can scale by width or height, with automatic calculation of the other dimension to preserve aspect ratio.

## Overview

The Scale Video node resizes your video to a new resolution. It supports scaling by width or height (with automatic aspect ratio preservation), and allows you to set both display aspect ratio (DAR) and sample aspect ratio (SAR) for precise control over how the video is displayed.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **scaleBy** (`buttongroup`): Scale by width or height (aspect ratio locked)
  - Options: `width` or `height`
  - When set to `width`, the height is automatically calculated to maintain aspect ratio
  - When set to `height`, the width is automatically calculated to maintain aspect ratio
  - Default: `width`

- **width** (`string`): Output width in pixels
  - Range: 1 - 7680 pixels
  - Only shown when `scaleBy` is set to `width`
  - Default: `1920`

- **height** (`string`): Output height in pixels
  - Range: 1 - 4320 pixels
  - Only shown when `scaleBy` is set to `height`
  - Default: `1080`

- **dar** (`string`): Display aspect ratio
  - Format: `width/height` (e.g., `16/9`, `4/3`, `21/9`)
  - Controls how the video is displayed on screen
  - Default: `16/9`

- **sar** (`string`): Sample aspect ratio
  - Format: `width/height` (e.g., `1/1`, `4/3`)
  - Controls the pixel aspect ratio
  - Default: `1/1`

- **notes** (`textarea`)**: Optional notes
  - Useful for documenting scaling settings

- **output** (`string`): Output filename
  - Default: `ff_scale.mp4`

## Outputs

- **output** (`file`): The scaled video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Scale Video node generates FFMPEG filter commands:

### Scale by Width

```bash
ffmpeg -i input.mp4 -vf "scale=1920:-2,setdar=16/9,setsar=1/1" output.mp4
```

### Scale by Height

```bash
ffmpeg -i input.mp4 -vf "scale=-2:1080,setdar=16/9,setsar=1/1" output.mp4
```

### Filter Graph Explanation

- `scale=WIDTH:-2` or `scale=-2:HEIGHT`: The `-2` ensures the other dimension is calculated to maintain aspect ratio and is divisible by 2 (required for many codecs)
- `setdar=16/9`: Sets the display aspect ratio
- `setsar=1/1`: Sets the sample aspect ratio

## Usage Summary

### Basic Usage

1. **Add Scale Video Node**: Drag the Scale Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Scale Video node's input
3. **Choose Scale Method**: Select whether to scale by width or height
4. **Set Dimensions**: Enter the desired width or height (the other dimension is calculated automatically)
5. **Set Aspect Ratios** (optional): Adjust DAR and SAR if needed
6. **Run Pipeline**: Execute your pipeline to resize the video

### Scale by Width vs Height

- **Scale by Width**: Enter the desired width, height is calculated automatically
  - Best for: Ensuring videos fit a specific width requirement (e.g., 1920px for Full HD)
  
- **Scale by Height**: Enter the desired height, width is calculated automatically
  - Best for: Ensuring videos fit a specific height requirement (e.g., 1080px for Full HD)

### Aspect Ratios

- **Display Aspect Ratio (DAR)**: How the video appears on screen
  - Common values: `16/9` (widescreen), `4/3` (standard), `21/9` (ultrawide)
  
- **Sample Aspect Ratio (SAR)**: The pixel aspect ratio
  - Usually `1/1` for square pixels
  - May differ for certain video formats or standards

### Common Use Cases

- **Resize for Platform**: Scale videos to platform-specific resolutions (e.g., 1920x1080 for YouTube)
- **Downscale for Performance**: Reduce resolution for faster processing or smaller file sizes
- **Upscale for Quality**: Increase resolution (with quality considerations)
- **Standardize Resolution**: Ensure all videos in a batch have the same resolution
- **Aspect Ratio Conversion**: Change aspect ratio while maintaining or adjusting dimensions

### Tips

- The `-2` value in the scale filter ensures the calculated dimension is divisible by 2, which is required for many video codecs
- Scaling up may result in quality loss - consider using upscaling algorithms for better results
- Scaling down generally maintains quality better than scaling up
- Use DAR and SAR settings to ensure proper display on different devices
- Combine with other nodes (like Crop or Pad) for more complex resizing workflows

## Example Workflows

### Standard HD Output

```
Input Node
    ↓
Scale Video (scaleBy: width, width: 1920, dar: 16/9)
    ↓
Output Node
```

### Vertical Video (Mobile)

```
Input Node
    ↓
Scale Video (scaleBy: height, height: 1080, dar: 9/16)
    ↓
Output Node
```

### Batch Standardization

```
Input Node (multiple files)
    ↓
Scale Video (scaleBy: width, width: 1920)
    ↓
Output Node (with auto_increment)
```
