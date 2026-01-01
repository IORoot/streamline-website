---
sidebar_position: 19
title: Color Channel Mixer
description: Adjust video frames by remixing color channels
---

# Color Channel Mixer Node

<img src="/img/node-icons/colorchannelmixer.svg" alt="ff_colorchannelmixer Icon" className="node-icon" />

![Color Channel Mixer Node](/img/node-screenshots/ff_colorchannelmixer.png)

The **Color Channel Mixer** node remixes and adjusts video color channels. It provides advanced control over how red, green, blue, and alpha channels contribute to each output channel, enabling creative color effects and corrections.

## Overview

The Color Channel Mixer node uses FFMPEG's `colorchannelmixer` filter to remix color channels. It supports basic mode (simple channel intensity) and advanced mode (full channel matrix control).

## Inputs

### Required Inputs

- **input** (`file`): Input video file

### Optional Inputs

#### Basic Mode

- **red** (`slider`): Red channel intensity
  - Range: 0 - 2.0
  - Default: `1.0`

- **green** (`slider`): Green channel intensity
  - Range: 0 - 2.0
  - Default: `1.0`

- **blue** (`slider`): Blue channel intensity
  - Range: 0 - 2.0
  - Default: `1.0`

- **grayscale** (`togglebutton`): Convert to grayscale
  - Default: `false`

#### Advanced Mode

- **rr, rg, rb, ra**: Red output channel contributions
- **gr, gg, gb, ga**: Green output channel contributions
- **br, bg, bb, ba**: Blue output channel contributions
- **ar, ag, ab, aa**: Alpha output channel contributions

- **notes** (`textarea`): Optional notes

- **output** (`string`): Output filename
  - Default: `ff_colorchannelmixer.mp4`

## Outputs

- **output** (`file`): The color-adjusted video file

## FFMPEG Command

```bash
ffmpeg -i input.mp4 -vf "colorchannelmixer=rr=1:gg=1:bb=1" output.mp4
```

## Usage Summary

Color Channel Mixer provides advanced color remixing capabilities. Use basic mode for simple channel intensity adjustments, or advanced mode for full matrix control over color channel contributions.
