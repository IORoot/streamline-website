# Audio Echo

<img src="/img/node-icons/audio-echo.svg" alt="ff_a_echo Icon" className="node-icon" />

Apply echo/reverb effects to audio with configurable delay, decay, and gain settings.

## Description

The Audio Echo node applies echo and reverb effects to audio using FFMPEG's `aecho` filter. You can create single or multiple echoes with independent delay and decay settings.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **in_gain** (slider, 0.0 - 1.0, default: 1.0): Input gain level
- **out_gain** (slider, 0.0 - 1.0, default: 1.0): Output gain level
- **delay** (slider, 1 - 90000 ms, default: 1000): Delay time in milliseconds for single echo
- **decay** (slider, 0.0 - 1.0, default: 0.5): Decay factor for single echo
- **delays** (string, default: ""): Multiple delays in ms, separated by `|` (e.g., "1000|2000|3000")
- **decays** (string, default: ""): Multiple decay factors, separated by `|` (e.g., "0.5|0.3|0.2")
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_echo.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with echo effect

## FFMPEG Command

The node generates FFMPEG filter:

**Single Echo:**
```bash
[0:a]aecho=in_gain=1:out_gain=1:delays=1000:decays=0.5[outa]
```

**Multiple Echoes:**
```bash
[0:a]aecho=in_gain=1:out_gain=1:delays=1000|2000|3000:decays=0.5|0.3|0.2[outa]
```

### Example Commands

**Simple echo:**
```bash
ffmpeg -i input.mp4 -af "aecho=in_gain=0.6:out_gain=0.3:delays=1000:decays=0.5" output.mp4
```

**Multiple echoes:**
```bash
ffmpeg -i input.mp4 -af "aecho=delays=1000|2000|3000:decays=0.5|0.3|0.2" output.mp4
```

## Usage

### Single Echo

1. Connect audio source to **input**
2. Set **delay** to desired echo delay (e.g., 1000ms)
3. Set **decay** to control echo volume (0.0-1.0)
4. Adjust **in_gain** and **out_gain** for overall levels

### Multiple Echoes

1. Connect audio source to **input**
2. Set **delays** with format: `"1000|2000|3000"`
3. Set **decays** with format: `"0.5|0.3|0.2"`
4. Ensure delays and decays arrays match in length

## Tips

- Lower decay values create more subtle echoes
- Multiple echoes create richer reverb-like effects
- Adjust gains to prevent clipping
- Use delays between 100-5000ms for natural echo
- Combine with other audio effects for complex sounds

## Common Use Cases

- **Reverb Effects**: Create room/hall reverb
- **Echo Effects**: Add echo to vocals or instruments
- **Spatial Audio**: Create depth and space
- **Creative Effects**: Experimental audio processing

## Related Nodes

- [Audio Delay](/docs/node-reference/ff_a_delay) - Simple delay
- [Audio Compressor](/docs/node-reference/ff_a_compressor) - Dynamic range
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
