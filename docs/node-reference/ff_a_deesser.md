# Audio DeEsser

<img src="/img/node-icons/audio-deesser.svg" alt="ff_a_deesser Icon" className="node-icon" />

Apply de-essing to reduce sibilance (harsh "s", "sh", "ch" sounds) in vocal recordings.

## Description

The Audio DeEsser node reduces sibilance in vocals using FFMPEG's `deesser` filter. Sibilance refers to harsh consonant sounds like "s", "sh", and "ch" that can be unpleasant in recordings.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **i** (slider, 0.0 - 1.0, default: 0.0): Intensity of de-essing effect
- **m** (slider, 0.0 - 1.0, default: 0.5): Maximum de-essing amount
- **f** (slider, 0.0 - 1.0, default: 0.5): Frequency adjustment
- **s** (select, default: "o"): Output mode
  - `i`: Input (dry signal)
  - `o`: Output (processed signal)
  - `e`: Ess (sibilant frequencies only)
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_deesser.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with de-essed audio

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]deesser=i=0:m=0.5:f=0.5:s=o[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "deesser=i=0.5:m=0.7:f=0.6" output.mp4
```

## Usage

### Basic De-Essing

1. Connect audio source to **input**
2. Set **i** (intensity) to 0.3-0.7 for moderate de-essing
3. Adjust **m** (max) to control maximum reduction
4. Fine-tune **f** (frequency) to target sibilant frequencies
5. Use **s** mode to monitor effect

### Monitoring

- Use **s=e** to hear only the sibilant frequencies being reduced
- Use **s=i** to compare original vs processed
- Adjust intensity based on vocal characteristics

## Tips

- Start with low intensity (0.3-0.5) and increase if needed
- Higher **m** values for more aggressive reduction
- Adjust **f** to match vocal sibilance frequency
- Use preview to hear effect in real-time
- Don't over-process - subtle is better

## Common Use Cases

- **Vocal Recordings**: Reduce harsh "s" sounds in vocals
- **Podcast Audio**: Clean up speech sibilance
- **Voiceovers**: Improve voice clarity
- **Music Production**: Polish vocal tracks

## Related Nodes

- [Audio Compressor](/docs/node-reference/ff_a_compressor) - Dynamic range control
- [Audio Equalizer](/docs/node-reference/ff_a_equalizer) - Frequency shaping
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
