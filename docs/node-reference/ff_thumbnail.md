---
sidebar_position: 50
title: Thumbnail
description: Extract a single frame at a specific timestamp
---

# Thumbnail Node

<img src="/img/node-icons/thumbnail.svg" alt="ff_thumbnail Icon" className="node-icon" />

![Thumbnail Node](/img/node-screenshots/ff_thumbnail.png)

The **Thumbnail** node extracts a single frame from a video at a specific timestamp and saves it as an image file.

## Overview

The Thumbnail node uses FFMPEG to extract a single frame at a specified time. Supports timestamp input in hours, minutes, and seconds, with output format selection.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **hours** (`number`): Hours component of timestamp
  - Range: 0 - 24
  - Default: `0`

- **minutes** (`number`): Minutes component of timestamp
  - Range: 0 - 60
  - Default: `0`

- **seconds** (`number`): Seconds component of timestamp
  - Range: 0 - 60
  - Default: `1`

- **format** (`select`): Output image format
  - Options: png, jpg, jpeg, bmp, webp
  - Default: `png`

- **outputFolder** (`folder`): Destination folder for thumbnail
  - Required for extraction

- **filename** (`string`): Thumbnail filename
  - Default: `thumbnail.png`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename (not used for thumbnail extraction)

## Outputs

- **output** (`file`): The original video file (passthrough)

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -ss 00:00:01 -vframes 1 output_folder/thumbnail.png
```

## Usage Summary

Thumbnail extracts a single frame at a specified timestamp. Set hours, minutes, and seconds to define the extraction point. Choose output format and destination folder. Useful for generating video thumbnails or preview images.
