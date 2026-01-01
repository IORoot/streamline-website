---
sidebar_position: 1
title: Audio Equalizer
description: Apply peaking equalization filter to boost or cut specific frequency ranges
---

# Audio Equalizer

<img src="/img/node-icons/audio-equalizer.svg" alt="ff_a_equalizer Icon" className="node-icon" />

Apply peaking equalization filter to boost or cut specific frequency ranges.

## Description

The Audio Equalizer node applies a peaking equalization filter using FFMPEG's `equalizer` filter. This allows you to boost or cut specific frequency ranges while maintaining other frequencies.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **frequency** (slider, 0 - 20000 Hz, default: 0): Central frequency in Hz
- **width_type** (buttongroup, default: "q"): Filter width type
  - `h`: Hertz (Hz)
  - `q`: Q-Factor (default)
  - `o`: Octave
  - `s`: Slope
  - `k`: Kilohertz (kHz)
- **width** (slider, 0 - 100, default: 1.0): Filter width
- **gain** (slider, -900 - 900 dB, default: 0): Gain in decibels
- **mix** (slider, 0.0 - 1.0, default: 1.0): Dry/wet mix
- **channels** (string, default: "all"): Channels to filter (e.g., "all", "0", "0|1")
- **normalize** (boolean, default: false): Normalize filter coefficients
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_equalizer.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with equalization applied

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]equalizer=frequency=1000:width_type=q:width=1:gain=6[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "equalizer=frequency=1000:gain=6:width=1" output.mp4
```

## Usage

### Basic Equalization

1. Connect audio source to **input**
2. Set **frequency** to target frequency (e.g., 1000 Hz)
3. Set **gain** to boost (positive) or cut (negative) in dB
4. Adjust **width** to control frequency range affected

### Frequency Ranges

Common frequency ranges:
- **20-250 Hz**: Bass
- **250-2000 Hz**: Low-mid
- **2000-4000 Hz**: Mid
- **4000-8000 Hz**: High-mid
- **8000-20000 Hz**: Treble

## Tips

- Use Q-factor (default) for musical equalization
- Narrow width for precise frequency targeting
- Wide width for broad frequency shaping
- Positive gain boosts, negative gain cuts
- Use multiple equalizer nodes for complex EQ curves

## Common Use Cases

- **Frequency Shaping**: Boost or cut specific frequencies
- **Vocal Enhancement**: Enhance vocal clarity
- **Bass Boost**: Increase low frequencies
- **Treble Adjustment**: Adjust high frequencies

## Related Nodes

- [Audio High Pass](/docs/node-reference/ff_a_highpass) - Remove low frequencies
- [Audio Low Pass](/docs/node-reference/ff_a_lowpass) - Remove high frequencies
- [Audio Compressor](/docs/node-reference/ff_a_compressor) - Dynamic range
