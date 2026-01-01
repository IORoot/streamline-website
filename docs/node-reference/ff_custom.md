---
sidebar_position: 30
title: Custom FFMPEG
description: Custom FFMPEG processing with user-defined parameters
---

# Custom FFMPEG Node

<img src="/img/node-icons/custom.svg" alt="ff_custom Icon" className="node-icon" />

The **Custom FFMPEG** node allows you to apply custom FFMPEG filter parameters directly, providing full control over video processing for advanced users.

## Overview

The Custom FFMPEG node accepts raw FFMPEG filter parameters, allowing you to use any FFMPEG filter or filter chain. It includes preset buttons for common operations.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

- **params** (`textarea`): Custom FFMPEG parameters
  - Enter FFMPEG filter chain syntax
  - Preset buttons available: Instagram, Instagram Story, Enhance

### Optional Inputs

- **notes** (`textarea`): Optional notes
  - Default: "Custom FFMPEG processing"

- **output** (`string`): Output filename
  - Default: `ff_custom.mp4`

## Outputs

- **output** (`file`): The processed video file

## FFMPEG Command

The Custom FFMPEG node passes your parameters directly to FFMPEG:

```bash
ffmpeg -i input.mp4 -vf "your_custom_filter_chain" output.mp4
```

## Usage Summary

Custom FFMPEG provides direct access to FFMPEG filters for advanced users. Enter filter chain syntax (e.g., `scale=1920:1080,eq=contrast=1.2`) or use preset buttons for common operations. Requires knowledge of FFMPEG filter syntax.
