---
sidebar_position: 8
title: Flip Video
description: Flip video horizontally or vertically
---

# Flip Video Node

<img src="/img/node-icons/flip.svg" alt="ff_flip Icon" className="node-icon" />

![Flip Video Node](/img/node-screenshots/ff_flip.png)

The **Flip Video** node flips a video horizontally (left-right) or vertically (up-down), or both. This is useful for correcting orientation issues, creating mirror effects, or fixing incorrectly recorded footage.

## Overview

The Flip Video node uses FFMPEG's `hflip` and `vflip` filters to mirror video content. You can flip horizontally, vertically, or both simultaneously.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

### Optional Inputs

- **horizontal** (`boolean`): Flip horizontally (left-right)
  - When enabled, mirrors the video left-to-right
  - Default: `false`

- **vertical** (`boolean`): Flip vertically (up-down)
  - When enabled, mirrors the video top-to-bottom
  - Default: `false`

- **notes** (`textarea`): Optional notes
  - Useful for documenting flip settings

- **output** (`string`): Output filename
  - Default: `ff_flip.mp4`

## Outputs

- **output** (`file`): The flipped video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Flip Video node generates FFMPEG filter commands:

### Horizontal Flip Only

```bash
ffmpeg -i input.mp4 -vf "hflip" output.mp4
```

### Vertical Flip Only

```bash
ffmpeg -i input.mp4 -vf "vflip" output.mp4
```

### Both Horizontal and Vertical

```bash
ffmpeg -i input.mp4 -vf "hflip,vflip" output.mp4
```

### No Flip (Passthrough)

```bash
ffmpeg -i input.mp4 -vf "null" output.mp4
```

## Usage Summary

### Basic Usage

1. **Add Flip Video Node**: Drag the Flip Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Flip Video node's input
3. **Enable Flips**: Toggle horizontal and/or vertical flip as needed
4. **Run Pipeline**: Execute your pipeline to flip the video

### Flip Options

- **Horizontal Flip**: Mirrors the video left-to-right
  - Useful for: Fixing mirror-image recordings, creating mirror effects, correcting reversed footage
  
- **Vertical Flip**: Mirrors the video top-to-bottom
  - Useful for: Fixing upside-down recordings, creating inverted effects
  
- **Both Flips**: Applies both horizontal and vertical flips
  - Equivalent to a 180° rotation
  - Useful for: Fixing footage that's both reversed and upside-down

### Common Use Cases

- **Fix Mirror Recordings**: Correct videos recorded with front-facing cameras that show mirror images
- **Correct Orientation**: Fix videos that were recorded upside-down or reversed
- **Create Mirror Effects**: Create artistic mirror effects for creative projects
- **Fix Reversed Text**: Fix videos where text or logos appear backwards
- **Match Reference**: Flip video to match a reference orientation

### Tips

- Horizontal flip creates a mirror image (left becomes right)
- Vertical flip creates an inverted image (top becomes bottom)
- Both flips together is equivalent to a 180° rotation
- Use horizontal flip to fix front-facing camera recordings
- Use vertical flip to fix upside-down recordings
- Preview your results to ensure the flip is correct
- Text and logos will be mirrored with horizontal flip - ensure this is desired

## Example Workflows

### Fix Front-Facing Camera Recording

```
Input Node
    ↓
Flip Video (horizontal: true)
    ↓
Output Node
```

### Fix Upside-Down Recording

```
Input Node
    ↓
Flip Video (vertical: true)
    ↓
Output Node
```

### Complete Orientation Fix

```
Input Node
    ↓
Flip Video (horizontal: true, vertical: true)
    ↓
Output Node
```
