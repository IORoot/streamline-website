---
sidebar_position: 36
title: Group Time
description: Trim a group of videos proportionally to fit a specified duration
---

# Group Time Node

<img src="/img/node-icons/grouptime.svg" alt="ff_grouptime Icon" className="node-icon" />

![Group Time Node](/img/node-screenshots/ff_grouptime.png)

The **Group Time** node trims multiple videos proportionally to fit a specified total duration, then concatenates them.

## Overview

The Group Time node takes multiple input videos, trims each proportionally to fit a target duration, and concatenates them. Supports various arrangement modes and transcoding options.

## Inputs

### Required Inputs

- **input** (`file`): First input video file
  - Dynamic: Supports up to 8 inputs (input, input2, input3, ...)

### Optional Inputs

- **input2** (`file`): Second input video file
- **input3** (`file`): Third input video file
- ... (up to input8)

- **duration** (`string`): Group duration in seconds
  - Range: 1 - 3600
  - Default: `60`

- **arrangement** (`select`): Order to read input files
  - Options: `standard`, `reversed`, `skip1`, `skip1reversed`, `random`, `even`, `odd`
  - Default: `standard`

- **width** (`string`): Output width
  - Default: `1920`

- **height** (`string`): Output height
  - Default: `1080`

- **fps** (`string`): Output frame rate
  - Default: `30`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_grouptime.mp4`

## Outputs

- **output** (`file`): The grouped and trimmed video

## Usage Summary

Group Time proportionally trims multiple videos to fit a target duration, then concatenates them. Use arrangement modes to control input order. Supports transcoding to standardize dimensions and frame rate.
