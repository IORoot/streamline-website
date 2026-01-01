---
sidebar_position: 12
title: Change FPS
description: Change the frame rate of a video
---

# Change FPS Node

<img src="/img/node-icons/fps.svg" alt="ff_fps Icon" className="node-icon" />

The **Change FPS** node changes the frame rate of a video using FFMPEG's fps filter. Useful for converting between different frame rates or creating slow/fast motion effects.

## Overview

The Change FPS node uses FFMPEG's `fps` filter to change the frame rate of your video. This is useful for standardizing frame rates, converting between formats, or creating motion effects.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

- **fps** (`string`): Target frame rate
  - Range: 1 - 120 fps
  - Common values: 24, 25, 30, 60
  - Can be decimal (e.g., "29.97", "23.976")

### Optional Inputs

- **notes** (`textarea`): Optional notes
  - Useful for documenting FPS settings

- **output** (`string`): Output filename
  - Default: `ff_fps.mp4`

## Outputs

- **output** (`file`): The video with changed frame rate
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Change FPS node generates FFMPEG filter commands:

```bash
ffmpeg -i input.mp4 -vf "fps=30" output.mp4
```

### Filter Explanation

- `fps=30`: Sets the output frame rate to 30 frames per second
- Frames are duplicated or dropped as needed to match the target FPS

## Usage Summary

### Basic Usage

1. **Add Change FPS Node**: Drag the Change FPS node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Change FPS node's input
3. **Set Target FPS**: Enter the desired frame rate (1-120)
4. **Run Pipeline**: Execute your pipeline to change the frame rate

### Common Frame Rates

- **24 fps**: Cinema standard, film look
- **25 fps**: PAL standard (Europe, Australia)
- **29.97 fps**: NTSC standard (North America)
- **30 fps**: Common web standard
- **60 fps**: Smooth motion, gaming content

### Common Use Cases

- **Standardize Frame Rate**: Convert all videos to the same FPS
- **Platform Requirements**: Match platform-specific frame rate requirements
- **Cinema Look**: Convert to 24fps for cinematic appearance
- **Smooth Motion**: Increase to 60fps for smoother motion
- **File Size Reduction**: Reduce FPS to decrease file size

### Tips

- Lowering FPS may result in choppy motion
- Increasing FPS duplicates frames (doesn't add new information)
- Use 24fps for cinematic look
- Use 30fps or 60fps for web content
- Match FPS to your target platform's requirements
- Preview your results to ensure motion looks natural

## Example Workflows

### Convert to Cinema Standard

```
Input Node
    ↓
Change FPS (fps: 24)
    ↓
Output Node
```

### Standardize for Web

```
Input Node
    ↓
Change FPS (fps: 30)
    ↓
Output Node
```

### High Frame Rate for Gaming

```
Input Node
    ↓
Change FPS (fps: 60)
    ↓
Output Node
```
