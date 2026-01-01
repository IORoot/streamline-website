---
sidebar_position: 11
title: Cut Video
description: Cut video to specific time range
---

# Cut Video Node

<img src="/img/node-icons/cut.svg" alt="ff_cut Icon" className="node-icon" />

The **Cut Video** node cuts a video to a specific time range using start and end times. Supports various time formats including HH:MM:SS and seconds.

## Overview

The Cut Video node uses FFMPEG's `trim` filter to extract a specific segment from your video. It's useful for creating clips, removing unwanted sections, or extracting highlights.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

- **start** (`string`): Start time
  - Format: HH:MM:SS, MM:SS, or seconds (e.g., "00:01:30", "1:30", "90")
  - Range: 0 to video length
  - Default: `0`

- **end** (`string`): End time
  - Format: HH:MM:SS, MM:SS, or seconds (e.g., "00:02:00", "2:00", "120")
  - Range: start time to video length
  - Must be greater than start time

### Optional Inputs

- **notes** (`textarea`): Optional notes
  - Useful for documenting cut settings

- **output** (`string`): Output filename
  - Default: `ff_cut.mp4`

## Outputs

- **output** (`file`): The cut video file
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Cut Video node generates FFMPEG filter commands:

```bash
ffmpeg -i input.mp4 -vf "trim=start=30:end=120,setpts=PTS-STARTPTS" output.mp4
```

### Filter Explanation

- `trim=start=X:end=Y`: Extracts frames from start to end time
- `setpts=PTS-STARTPTS`: Resets timestamps so the output starts at 0:00:00

## Usage Summary

### Basic Usage

1. **Add Cut Video Node**: Drag the Cut Video node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Cut Video node's input
3. **Set Start Time**: Enter the start time in your preferred format
4. **Set End Time**: Enter the end time in your preferred format
5. **Run Pipeline**: Execute your pipeline to cut the video

### Time Format Examples

- **Seconds**: `30`, `120.5`, `90`
- **MM:SS**: `1:30`, `2:00`, `5:45`
- **HH:MM:SS**: `00:01:30`, `00:02:00`, `01:05:45`

### Common Use Cases

- **Extract Clip**: Extract a specific scene or segment
- **Remove Sections**: Cut out unwanted parts of the video
- **Create Highlights**: Extract highlight reels
- **Trim Length**: Shorten videos to specific durations
- **Split Videos**: Create multiple cuts from one source

### Tips

- Start time must be less than end time
- End time cannot exceed video length
- The output video starts at 0:00:00 regardless of input start time
- Use preview to verify the cut points before processing
- Combine multiple Cut nodes to create multiple clips from one source

## Example Workflows

### Extract 30-Second Clip

```
Input Node
    ↓
Cut Video (start: 30, end: 60)
    ↓
Output Node
```

### Extract Specific Scene

```
Input Node
    ↓
Cut Video (start: 00:01:30, end: 00:02:15)
    ↓
Output Node
```

### Create Multiple Clips

```
Input Node
    ↓
Cut Video (start: 0, end: 30) → Output 1
    ↓
Cut Video (start: 60, end: 90) → Output 2
    ↓
Cut Video (start: 120, end: 150) → Output 3
```
