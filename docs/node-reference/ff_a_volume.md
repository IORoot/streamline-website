# Audio Volume

<img src="/img/node-icons/audio-volume.svg" alt="ff_a_volume Icon" className="node-icon" />

![Audio Volume Node](/img/node-screenshots/ff_a_volume.png)

Control audio volume level using multiplier or decibel adjustment.

## Description

The Audio Volume node controls audio volume using FFMPEG's `volume` filter. You can adjust volume using either a multiplier (0.0 to 2.0) or decibels (-60dB to +60dB).

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **volume** (slider, 0.0 - 2.0, default: 1.0): Volume multiplier
  - `0.0`: Silent
  - `1.0`: Original volume
  - `2.0`: Double volume
- **volume_db** (slider, -60 - 60 dB, default: 0): Volume in decibels
  - `-60dB`: Very quiet
  - `0dB`: Original volume
  - `+60dB`: Very loud
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_volume.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with volume adjusted

## FFMPEG Command

The node generates FFMPEG filter:

**Using Multiplier:**
```bash
[0:a]volume=1.5[outa]
```

**Using Decibels:**
```bash
[0:a]volume=6dB[outa]
```

### Example Commands

**Double volume:**
```bash
ffmpeg -i input.mp4 -af "volume=2.0" output.mp4
```

**Increase by 6dB:**
```bash
ffmpeg -i input.mp4 -af "volume=6dB" output.mp4
```

## Usage

### Volume Multiplier

1. Connect audio source to **input**
2. Set **volume** to multiplier (1.0 = original, 2.0 = double)
3. Use for simple volume adjustment

### Decibel Adjustment

1. Connect audio source to **input**
2. Set **volume_db** to decibel value (0dB = original)
3. Use for precise volume control

### Priority

- If **volume_db** is set and not 0, it takes priority
- Otherwise, **volume** multiplier is used
- If neither is set, volume remains unchanged

## Volume Examples

**Multiplier:**
- `0.5` = Half volume (-6dB)
- `1.0` = Original volume (0dB)
- `2.0` = Double volume (+6dB)

**Decibels:**
- `-12dB` = Quarter volume
- `0dB` = Original volume
- `+6dB` = Double volume
- `+12dB` = 4x volume

## Tips

- Use decibels for professional audio work
- Use multiplier for simple adjustments
- Watch for clipping at high volumes
- Negative dB values reduce volume
- Positive dB values increase volume

## Common Use Cases

- **Volume Normalization**: Adjust overall volume levels
- **Audio Mixing**: Balance multiple audio sources
- **Volume Correction**: Fix quiet or loud audio
- **Mastering**: Final volume adjustment

## Related Nodes

- [Audio Compressor](/docs/node-reference/ff_a_compressor) - Dynamic range
- [Audio Limiter](/docs/node-reference/ff_a_limiter) - Peak limiting
- [Audio Fade](/docs/node-reference/ff_a_fade) - Fade in/out
