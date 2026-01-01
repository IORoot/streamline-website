# Audio Delay

<img src="/img/node-icons/audio-delay.svg" alt="ff_a_delay Icon" className="node-icon" />

![Audio Delay Node](/img/node-screenshots/ff_a_delay.png)

Delay audio channels by a specified amount of time, either uniformly or per-channel.

## Description

The Audio Delay node delays audio channels using FFMPEG's `adelay` filter. You can delay all channels uniformly or specify different delays for each channel individually.

## Inputs

### Required

- **input** (file): Input video file containing audio to delay

### Optional

- **delay** (slider, 0 - 10000 ms, default: 0): Delay in milliseconds for all channels
- **channel_delays** (string, default: ""): Per-channel delays in milliseconds, separated by `|` (e.g., "1000|0|500")
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_delay.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with delayed audio

## FFMPEG Command

The node generates FFMPEG filter:

**Uniform Delay:**
```bash
[0:a]adelay=500[outa]
```

**Per-Channel Delay:**
```bash
[0:a]adelay=1000|0|500[outa]
```

### Example Commands

**Delay all channels by 500ms:**
```bash
ffmpeg -i input.mp4 -af "adelay=500" output.mp4
```

**Delay left channel by 1000ms, right by 0ms:**
```bash
ffmpeg -i input.mp4 -af "adelay=1000|0" output.mp4
```

## Usage

### Uniform Delay

1. Connect audio source to **input**
2. Set **delay** to desired milliseconds
3. All channels delayed by same amount

### Per-Channel Delay

1. Connect audio source to **input**
2. Set **channel_delays** with format: `"delay1|delay2|delay3"`
3. Each channel delayed independently

### Examples

- **"1000|0"**: Delay left channel 1000ms, right channel 0ms
- **"1500|0|500"**: Delay channel 1 by 1500ms, channel 2 by 0ms, channel 3 by 500ms
- **"0|1000"**: Delay right channel 1000ms, left channel 0ms

## Tips

- Use uniform delay for simple time shifting
- Per-channel delays useful for stereo effects
- Delays up to 10 seconds supported
- Zero delay passes audio through unchanged
- Test with preview to hear effect

## Common Use Cases

- **Stereo Effects**: Create stereo width with channel delays
- **Sync Correction**: Fix audio sync issues
- **Echo Effects**: Combine with other effects for echo
- **Multi-Channel Processing**: Delay specific channels

## Related Nodes

- [Audio Echo](/docs/node-reference/ff_a_echo) - Echo/reverb effects
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
- [Audio Fade](/docs/node-reference/ff_a_fade) - Fade in/out
