# Audio Tempo

<img src="/img/node-icons/audio-tempo.svg" alt="ff_a_tempo Icon" className="node-icon" />

Adjust audio tempo (speed) without changing pitch using time-stretching.

## Description

The Audio Tempo node adjusts audio tempo without changing pitch using FFMPEG's `atempo` filter. This uses a phase vocoder algorithm to change playback speed while maintaining the original pitch.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **tempo** (slider, 0.5 - 100.0, default: 1.0): Tempo scale factor
  - `0.5`: Half speed (slow motion)
  - `1.0`: Original speed
  - `2.0`: Double speed
  - `100.0`: 100x speed
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_tempo.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with tempo adjusted

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]atempo=2.0[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "atempo=2.0" output.mp4
```

## Usage

### Adjusting Tempo

1. Connect audio source to **input**
2. Set **tempo** to desired speed multiplier
3. Audio plays at new speed with original pitch

### Tempo Examples

- **0.5**: Half speed (slow motion)
- **1.0**: Original speed
- **1.5**: 1.5x speed
- **2.0**: Double speed
- **10.0**: 10x speed

## Tips

- Pitch remains constant while speed changes
- Use for music tempo adjustment
- Supports range 0.5x to 100x
- Higher values may reduce quality
- Test with preview to verify effect

## Common Use Cases

- **Music Tempo**: Speed up or slow down music
- **Tempo Matching**: Match tempo between tracks
- **Time Stretching**: Adjust duration without pitch change
- **Video Editing**: Match audio to video speed

## Related Nodes

- [Audio Set Rate](/docs/node-reference/ff_a_setrate) - Speed and pitch together
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
- [Audio Fade](/docs/node-reference/ff_a_fade) - Fade in/out
