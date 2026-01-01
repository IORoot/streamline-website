---
sidebar_position: 41
title: Negate (Invert)
description: Invert the colors of the video (negative effect)
---

# Negate (Invert) Node

<img src="/img/node-icons/negate.svg" alt="ff_negate Icon" className="node-icon" />

The **Negate** node inverts the colors of the video, creating a negative effect similar to film negatives.

## Overview

The Negate node uses FFMPEG's `negate` filter to invert video colors. Optionally includes alpha channel inversion.

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

- **negate_alpha** (`boolean`): Also negate the alpha channel
  - When enabled, inverts transparency as well
  - Default: `false`

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_negate.mp4`

## Outputs

- **output** (`file`): The inverted video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "negate" output.mp4
```

Or without alpha:

```bash
ffmpeg -i input.mp4 -vf "negate=negate_alpha=0" output.mp4
```

## Usage Summary

Negate creates a negative/inverted color effect. Enable negate_alpha to also invert transparency channels. Useful for creative effects or converting negative film to positive.
