# Audio Reverse

<img src="/img/node-icons/audio-reverse.svg" alt="ff_a_reverse Icon" className="node-icon" />

![Audio Reverse Node](/img/node-screenshots/ff_a_reverse.png)

Reverse audio playback to play audio backwards.

## Description

The Audio Reverse node reverses audio playback using FFMPEG's `areverse` filter. The audio plays backwards, creating a reverse effect commonly used in music production.

## Inputs

### Required

- **input** (file): Input video file containing audio to reverse

### Optional

- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_reverse.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with reversed audio

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]areverse[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "areverse" output.mp4
```

## Usage

### Reversing Audio

1. Connect audio source to **input**
2. No additional parameters needed
3. Audio is reversed completely

## Tips

- Entire audio stream is reversed
- Video stream passes through unchanged
- Useful for creative effects
- Combine with other effects for unique sounds
- Test with preview to hear effect

## Common Use Cases

- **Reverse Reverb**: Create reverse reverb effects
- **Creative Effects**: Experimental audio processing
- **Build-ups**: Create build-up effects before drops
- **Mysterious Sounds**: Create eerie or mysterious audio

## Related Nodes

- [Audio Echo](/docs/node-reference/ff_a_echo) - Echo/reverb effects
- [Audio Delay](/docs/node-reference/ff_a_delay) - Delay effects
- [Audio Fade](/docs/node-reference/ff_a_fade) - Fade in/out
