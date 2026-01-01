---
sidebar_position: 32
title: Download
description: Download a video or file to use in the scriptflow
---

# Download Node

<img src="/img/node-icons/download.svg" alt="ff_download Icon" className="node-icon" />

![Download Node](/img/node-screenshots/ff_download.png)

The **Download** node downloads videos or files from URLs for use in your pipeline.

## Overview

The Download node uses FFMPEG to download files from HTTP/HTTPS URLs. It can copy streams without re-encoding for efficient downloads.

## Inputs

### Required Inputs

- **URL** (`textarea`): URL to download video from
  - Supports HTTP/HTTPS URLs
  - FFMPEG-compatible video URLs

### Optional Inputs

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_download.mp4`

## Outputs

- **output** (`file`): The downloaded video file

## FFMPEG Command

The Download node uses FFMPEG to download from URLs:

```bash
ffmpeg -i "https://example.com/video.mp4" -c copy output.mp4
```

## Usage Summary

Download retrieves videos from URLs for processing. FFMPEG can directly access HTTP/HTTPS URLs and copy streams without re-encoding. Use for downloading source material from the web.
