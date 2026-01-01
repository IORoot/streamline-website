# Audio Limiter

<img src="/img/node-icons/audio-limiter.svg" alt="ff_a_limiter Icon" className="node-icon" />

Apply lookahead limiter to prevent audio clipping and control peak levels.

## Description

The Audio Limiter node applies a lookahead limiter using FFMPEG's `alimiter` filter. This prevents audio from exceeding a threshold level, protecting against clipping and distortion.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **level_in** (slider, 0.016 - 64.0, default: 1.0): Input level
- **level_out** (slider, 0.016 - 64.0, default: 1.0): Output level
- **limit** (slider, 0.0625 - 1.0, default: 1.0): Limit threshold
- **attack** (slider, 0.1 - 80 ms, default: 5): Attack time in milliseconds
- **release** (slider, 1 - 8000 ms, default: 50): Release time in milliseconds
- **asc** (boolean, default: false): Enable Automatic Spectral Compensation
- **asc_level** (slider, 0.0 - 1.0, default: 0.5): ASC level
- **level** (boolean, default: true): Auto level compensation
- **latency** (boolean, default: false): Compensate delay
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_limiter.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with limiting applied

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]alimiter=level_in=1:level_out=1:limit=1:attack=5:release=50:asc=0:asc_level=0.5:level=1:latency=0[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "alimiter=limit=0.95:attack=5:release=50" output.mp4
```

## Usage

### Basic Limiting

1. Connect audio source to **input**
2. Set **limit** to maximum level (e.g., 0.95 for -0.5 dB)
3. Adjust **attack** for response speed (5-10ms typical)
4. Set **release** for recovery time (50-100ms typical)

### Advanced Settings

- **ASC**: Enable for spectral compensation
- **Level**: Auto-compensate for level changes
- **Latency**: Compensate for processing delay

## Tips

- Set limit below 1.0 to prevent clipping
- Faster attack for aggressive limiting
- Slower release for smoother sound
- Enable ASC for better quality
- Use as final stage in audio chain

## Common Use Cases

- **Mastering**: Final peak limiting
- **Broadcast**: Ensure compliance levels
- **Live Recording**: Prevent clipping
- **Podcast Audio**: Control peak levels

## Related Nodes

- [Audio Compressor](/docs/node-reference/ff_a_compressor) - Dynamic range compression
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
- [Audio Equalizer](/docs/node-reference/ff_a_equalizer) - Frequency shaping
