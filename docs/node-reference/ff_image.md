---
sidebar_position: 38
title: Image to Video
description: Convert image to video
---

# Image to Video Node

<img src="/img/node-icons/image.svg" alt="ff_image Icon" className="node-icon" />

![Image to Video Node](/img/node-screenshots/ff_image.png)

The **Image to Video** node converts a static image into a video by looping it for a specified duration at a given frame rate.

## Overview

The Image to Video node uses FFMPEG to create a video from an image. The image is looped for the specified duration at the specified frame rate.

## Inputs

### Required Inputs

- **input** (`file`): Input image file
  - Supports common image formats (JPG, PNG, etc.)

### Optional Inputs

- **duration** (`number`): Video duration in seconds
  - Default: `5`

- **fps** (`number`): Frame rate
  - Range: 1 - 120 fps
  - Default: `29.97`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_image.mp4`

## Outputs

- **output** (`file`): The video created from the image

## FFMPEG Command

```bash
ffmpeg -loop 1 -i input.jpg -t 5 -r 29.97 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2,fps=29.97" output.mp4
```

## Usage Summary

Image to Video creates a video from a static image by looping it. Useful for creating video slideshows, adding images to video sequences, or converting image sequences to video format.
