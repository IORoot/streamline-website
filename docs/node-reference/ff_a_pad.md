# Audio Pad

<img src="/img/node-icons/audio-pad.svg" alt="ff_a_pad Icon" className="node-icon" />

Pad audio with silence to extend duration or ensure minimum length.

## Description

The Audio Pad node adds silence to audio using FFMPEG's `apad` filter. You can add a specific duration of silence or ensure the audio meets a minimum duration.

## Inputs

### Required

- **input** (file): Input video file containing audio to pad

### Optional

- **pad_dur** (string, default: ""): Duration of silence to add (e.g., "5s" or "00:00:05")
- **whole_dur** (string, default: ""): Minimum target duration (e.g., "10s" or "00:00:10")
- **pad_len** (number, default: 0): Number of samples of silence to add (0 = auto)
- **whole_len** (number, default: 0): Minimum target number of samples (0 = auto)
- **packet_size** (number, default: 4096): Silence packet size
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_pad.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with padded audio

## FFMPEG Command

The node generates FFMPEG filter:

**Add 5 seconds of silence:**
```bash
[0:a]apad=pad_dur=5s[outa]
```

**Ensure minimum 10 seconds:**
```bash
[0:a]apad=whole_dur=10s[outa]
```

### Example Commands

**Add 3 seconds of silence:**
```bash
ffmpeg -i input.mp4 -af "apad=pad_dur=3s" output.mp4
```

**Ensure minimum 15 seconds:**
```bash
ffmpeg -i input.mp4 -af "apad=whole_dur=15s" output.mp4
```

## Usage

### Adding Silence

1. Connect audio source to **input**
2. Set **pad_dur** to desired duration (e.g., "5s")
3. Silence is added to the end of audio

### Minimum Duration

1. Connect audio source to **input**
2. Set **whole_dur** to minimum duration (e.g., "10s")
3. Silence added if audio is shorter than minimum

## Time Formats

- **Seconds**: "5s", "10.5s"
- **Time**: "00:00:05", "00:00:10.5"
- **Minutes**: "1m", "2.5m"

## Tips

- Use pad_dur for fixed silence addition
- Use whole_dur for minimum duration requirements
- Combine with fade for smooth transitions
- Useful for video synchronization
- Test duration to ensure correct length

## Common Use Cases

- **Video Sync**: Match audio to video length
- **Minimum Duration**: Ensure minimum audio length
- **Spacing**: Add silence between segments
- **Format Requirements**: Meet format duration requirements

## Related Nodes

- [Audio Fade](/docs/node-reference/ff_a_fade) - Fade in/out
- [Audio Delay](/docs/node-reference/ff_a_delay) - Delay effects
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
