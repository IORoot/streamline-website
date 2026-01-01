---
sidebar_position: 7
title: Rotate Video
description: Rotate a video by specified degrees
---

# Rotate Video Node

<img src="/img/node-icons/rotate.svg" alt="ff_rotate Icon" className="node-icon" />

The **Rotate Video** node rotates a video by a specified number of degrees in either clockwise or counter-clockwise direction. This is useful for correcting orientation issues, creating portrait versions of landscape videos, or applying creative rotations.

## Overview

The Rotate Video node uses FFMPEG's `rotate` filter to rotate video content. You can specify any angle from 0 to 360 degrees and choose the direction of rotation (clockwise or counter-clockwise).

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

- **rotation** (`slider`): Rotation angle in degrees
  - Range: 0 - 360
  - Common values: 0, 90, 180, 270, 360
  - Default: `0`

- **direction** (`buttongroup`): Direction of rotation
  - Options: `clockwise` or `counter-clockwise`
  - Clockwise rotates to the right (↻)
  - Counter-clockwise rotates to the left (↺)
  - Default: `clockwise`

### Optional Inputs

- **notes** (`textarea`): Optional notes
  - Useful for documenting rotation settings

- **output** (`string`): Output filename
  - Default: `ff_rotate.mp4`

## Outputs

- **output** (`file`): The rotated video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Rotate Video node generates FFMPEG filter commands:

### Clockwise Rotation

```bash
ffmpeg -i input.mp4 -vf "rotate=90*(PI/180)" output.mp4
```

### Counter-Clockwise Rotation

```bash
ffmpeg -i input.mp4 -vf "rotate=-90*(PI/180)" output.mp4
```

### Filter Explanation

- The rotation angle is converted from degrees to radians using `*(PI/180)`
- Positive values rotate clockwise, negative values rotate counter-clockwise
- The video canvas is automatically adjusted to fit the rotated content

## Usage Summary

### Basic Usage

1. **Add Rotate Video Node**: Drag the Rotate Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Rotate Video node's input
3. **Set Rotation Angle**: Adjust the rotation slider (0-360 degrees)
4. **Choose Direction**: Select clockwise (↻) or counter-clockwise (↺)
5. **Run Pipeline**: Execute your pipeline to rotate the video

### Common Rotations

- **90° Clockwise (↻)**: Rotate portrait to landscape (right)
  - Common for fixing phone recordings shot in portrait mode
  
- **90° Counter-Clockwise (↺)**: Rotate landscape to portrait (left)
  - Common for creating portrait versions of landscape videos
  
- **180°**: Flip upside down (direction doesn't matter)
  - Useful for correcting inverted footage
  
- **270° Clockwise (↻)**: Same as 90° counter-clockwise
  - Alternative way to achieve the same result

### Common Use Cases

- **Fix Orientation**: Correct incorrectly oriented videos from cameras or phones
- **Portrait Conversion**: Create portrait versions of landscape videos for mobile platforms
- **Creative Rotation**: Apply artistic rotations for creative effects
- **Fine-Tune Correction**: Make small angle adjustments for perfect alignment
- **Batch Correction**: Rotate multiple videos that were recorded in the wrong orientation

### Tips

- For 90° and 270° rotations, the output dimensions will be swapped (width becomes height)
- The video canvas automatically adjusts to fit rotated content
- Use 180° rotation to flip video upside down (alternative to using Flip node)
- Small angle rotations (1-10°) can be used for fine correction
- Combine with Scale Video node if you need to maintain specific output dimensions
- Preview your results to ensure the rotation is correct before final processing

## Example Workflows

### Fix Portrait Phone Recording

```
Input Node
    ↓
Rotate Video (rotation: 90, direction: clockwise)
    ↓
Output Node
```

### Create Portrait Version

```
Input Node
    ↓
Rotate Video (rotation: 90, direction: counter-clockwise)
    ↓
Scale Video (to maintain aspect ratio)
    ↓
Output Node
```

### Fine Angle Correction

```
Input Node
    ↓
Rotate Video (rotation: 5, direction: clockwise)
    ↓
Output Node
```
