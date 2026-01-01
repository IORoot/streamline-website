# Audio Compressor

<img src="/img/node-icons/audio-compressor.svg" alt="ff_a_compressor Icon" className="node-icon" />

![Audio Compressor Node](/img/node-screenshots/ff_a_compressor.png)

Apply dynamic range compression to audio to reduce the difference between loud and quiet sounds.

## Description

The Audio Compressor node applies dynamic range compression to audio tracks using FFMPEG's `acompressor` filter. Compression reduces the dynamic range by making loud sounds quieter and quiet sounds louder, resulting in a more consistent audio level.

## Inputs

### Required

- **input** (file): Input video file containing audio to compress

### Optional

- **level_in** (slider, 0.016 - 64.0, default: 1.0): Input gain level
- **mode** (select, default: "downward"): Compression mode
  - `downward`: Standard downward compression
  - `upward`: Upward compression
- **threshold** (slider, 0.001 - 1.0, default: 0.125): Compression threshold level
- **ratio** (slider, 1.0 - 20.0, default: 2.0): Compression ratio (higher = more compression)
- **attack** (slider, 0.01 - 2000 ms, default: 20): Attack time in milliseconds
- **release** (slider, 0.01 - 9000 ms, default: 250): Release time in milliseconds
- **makeup** (slider, 1.0 - 64.0, default: 1.0): Makeup gain to compensate for compression
- **knee** (slider, 1.0 - 8.0, default: 2.82843): Knee width for smooth compression curve
- **link** (select, default: "average"): Link type for multi-channel audio
  - `average`: Average across channels
  - `maximum`: Maximum across channels
- **detection** (select, default: "rms"): Detection type
  - `peak`: Peak detection
  - `rms`: RMS (Root Mean Square) detection
- **mix** (slider, 0.0 - 1.0, default: 1.0): Dry/wet mix (0.0 = dry, 1.0 = wet)
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_compressor.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with compressed audio

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]acompressor=level_in=1:mode=downward:threshold=0.125:ratio=2:attack=20:release=250:makeup=1:knee=2.82843:link=average:detection=rms:mix=1[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "acompressor=threshold=0.125:ratio=4:attack=10:release=100" output.mp4
```

## Usage

### Basic Compression

1. Connect audio source to **input**
2. Set **threshold** to level where compression should start
3. Set **ratio** to desired compression amount
4. Adjust **attack** and **release** for response speed
5. Use **makeup** to restore overall level

### Advanced Settings

- **Mode**: Use upward compression for gentle enhancement
- **Knee**: Wider knee for smoother compression curve
- **Link**: Use maximum for aggressive multi-channel compression
- **Detection**: RMS for musical content, peak for speech

## Tips

- Start with default settings and adjust threshold first
- Higher ratios (4:1, 8:1) for more aggressive compression
- Faster attack (5-10ms) for transients, slower (20-50ms) for musical
- Use makeup gain to compensate for level reduction
- Monitor for over-compression artifacts

## Common Use Cases

- **Vocal Processing**: Compress vocals for consistent level
- **Music Mastering**: Control dynamic range in mixes
- **Podcast Audio**: Even out speech levels
- **Live Recording**: Reduce dynamic range in recordings

## Related Nodes

- [Audio Volume](/docs/node-reference/ff_a_volume) - Simple volume control
- [Audio Limiter](/docs/node-reference/ff_a_limiter) - Peak limiting
- [Audio Equalizer](/docs/node-reference/ff_a_equalizer) - Frequency shaping
