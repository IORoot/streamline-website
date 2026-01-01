---
sidebar_position: 2
title: File Data
description: File metadata automatically extracted from video files
---

# File Data

File Data contains metadata automatically extracted from video files using FFprobe. This metadata is available immediately after a file is loaded into an Input node.

## Overview

When you add a video file to an Input node, the system automatically extracts metadata using FFprobe and stores it in the Data Store. This metadata includes technical properties like dimensions, frame rate, codec information, and more.

## Available File Metadata

### Video Properties

- **`width`** - Video width in pixels
- **`height`** - Video height in pixels
- **`fps`** - Frame rate (frames per second)
- **`duration`** - Video duration in seconds
- **`bitrate`** - Video bitrate
- **`codec`** - Video codec name
- **`pixel_format`** - Pixel format (e.g., yuv420p)

### Audio Properties

- **`audio_codec`** - Audio codec name
- **`audio_bitrate`** - Audio bitrate
- **`audio_sample_rate`** - Audio sample rate in Hz
- **`audio_channels`** - Number of audio channels

### Container Properties

- **`format`** - Container format (e.g., mp4, mov)
- **`file_size`** - File size in bytes
- **`filename`** - Original filename
- **`filepath`** - Full file path

## Usage Examples

### Dynamic Output Filenames

```
output_{{width}}x{{height}}_@{{fps}}fps.mp4
```

Results in: `output_1920x1080_@30fps.mp4`

### Conditional Scaling

Use in expressions:

```
{{width > 1920 ? 1920 : width}}
```

### Aspect Ratio Calculations

```
{{width / height}}
```

### Duration-Based Processing

```
{{duration / 2}}
```

## How File Data is Populated

1. **Input Node**: When you add a file to an Input node, metadata is automatically extracted
2. **FFprobe**: The system runs FFprobe to analyze the video file
3. **Data Store**: Metadata is stored with keys matching the property names
4. **Template Access**: Values are immediately available via `{{key}}` syntax

## Multiple Files

When processing multiple files:

- Each file's metadata is extracted separately
- Values are updated for each file in the batch
- Template variables reference the current file's metadata

## Notes

- File metadata is extracted automatically - no manual setup required
- Values are updated when new files are loaded
- Metadata persists for the duration of the pipeline execution
- Some properties may be unavailable depending on the file format
