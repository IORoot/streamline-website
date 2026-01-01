# Audio Set Rate

<img src="/img/node-icons/audio-setrate.svg" alt="ff_a_setrate Icon" className="node-icon" />

![Audio Set Rate Node](/img/node-screenshots/ff_a_setrate.png)

Change sample rate without resampling, which changes both speed and pitch proportionally.

## Description

The Audio Set Rate node changes the sample rate without resampling using FFMPEG's `asetrate` filter. This changes both the playback speed and pitch proportionally - higher sample rates play faster with higher pitch, lower sample rates play slower with lower pitch.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **sample_rate** (slider, 8000 - 192000 Hz, default: 44100): Target sample rate in Hz
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_setrate.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with changed sample rate

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]asetrate=48000[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "asetrate=48000" output.mp4
```

## Usage

### Changing Sample Rate

1. Connect audio source to **input**
2. Set **sample_rate** to target rate
3. Audio speed and pitch change proportionally

### Common Sample Rates

- **44100 Hz**: CD quality
- **48000 Hz**: Video standard
- **96000 Hz**: High-resolution audio
- **192000 Hz**: Ultra high-resolution

## Tips

- Speed and pitch change together
- For tempo change without pitch, use Tempo node
- Higher rates = faster playback + higher pitch
- Lower rates = slower playback + lower pitch
- Useful for creative pitch/speed effects

## Common Use Cases

- **Chipmunk Effect**: High sample rate for fast, high-pitched sound
- **Slow Motion**: Low sample rate for slow, low-pitched sound
- **Sample Rate Matching**: Match rates between sources
- **Creative Effects**: Experimental pitch/speed changes

## Related Nodes

- [Audio Tempo](/docs/node-reference/ff_a_tempo) - Tempo change without pitch
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
- [Audio Delay](/docs/node-reference/ff_a_delay) - Delay effects
