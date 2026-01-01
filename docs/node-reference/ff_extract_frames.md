---
sidebar_position: 34
title: Extract Frames
description: Extract frames from video to a folder
---

# Extract Frames Node

<img src="/img/node-icons/extract-frames.svg" alt="ff_extract_frames Icon" className="node-icon" />

![Extract Frames Node](/img/node-screenshots/ff_extract_frames.png)

The **Extract Frames** node extracts individual frames from a video and saves them as image files to a specified folder.

## Overview

The Extract Frames node uses FFMPEG to extract frames from video. Supports extraction by frame count or time interval, with automatic folder creation and sequential naming.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **extractMode** (`buttongroup`): Extract by count or time interval
  - Options: `count` or `time`
  - Default: `count`

#### Count Mode

- **count** (`number`): Number of frames to extract
  - Range: 1 and above
  - Default: `10`

#### Time Mode

- **interval** (`string`): Time interval between frames
  - Format: seconds or HH:MM:SS
  - Default: `1`

- **outputFolder** (`folder`): Destination folder for extracted frames
  - Required for extraction

- **filename** (`string`): Frame filename pattern
  - Use `%d` or `%03d` for sequential numbering
  - Default: `frame_%03d.png`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename (not used for frame extraction)

## Outputs

- **output** (`file`): The original video file (passthrough)

## FFMPEG Command

### Count Mode

```bash
ffmpeg -i input.mp4 -vf "select='not(mod(n,10))'" -vsync vfr output_folder/frame_%03d.png
```

### Time Mode

```bash
ffmpeg -i input.mp4 -vf "fps=1/1" output_folder/frame_%03d.png
```

## Usage Summary

Extract Frames saves individual video frames as images. Use count mode to extract a specific number of evenly-spaced frames, or time mode to extract frames at regular time intervals.
