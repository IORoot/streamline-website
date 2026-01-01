# Audio Loop

<img src="/img/node-icons/audio-loop.svg" alt="ff_a_loop Icon" className="node-icon" />

![Audio Loop Node](/img/node-screenshots/ff_a_loop.png)

Loop audio samples a specified number of times or infinitely.

## Description

The Audio Loop node loops audio samples using FFMPEG's `aloop` filter. You can loop a specific segment of audio a specified number of times or create infinite loops.

## Inputs

### Required

- **input** (file): Input video file containing audio to loop

### Optional

- **loop** (slider, -1 - 100, default: 0): Number of loops
  - `-1`: Infinite loop
  - `0`: No loop (pass through)
  - `1+`: Number of loops
- **size** (number, default: 0): Max number of samples to loop (0 = entire stream)
- **start** (number, default: 0): Loop start sample (-1 = from beginning)
- **time** (string, default: ""): Loop start time (e.g., "00:00:05" or "5s")
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_loop.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with looped audio

## FFMPEG Command

The node generates FFMPEG filter:

**Finite Loop:**
```bash
[0:a]aloop=loop=3:size=0:start=0[outa]
```

**Infinite Loop:**
```bash
[0:a]aloop=loop=-1:size=0:start=0[outa]
```

### Example Commands

**Loop 5 times:**
```bash
ffmpeg -i input.mp4 -af "aloop=loop=5" output.mp4
```

**Infinite loop:**
```bash
ffmpeg -i input.mp4 -af "aloop=loop=-1" output.mp4
```

## Usage

### Basic Looping

1. Connect audio source to **input**
2. Set **loop** to desired number of loops
3. Set **size** to 0 for entire stream, or specify sample count
4. Set **start** to loop start position

### Time-Based Looping

1. Connect audio source to **input**
2. Set **time** to start time (e.g., "5s" or "00:00:05")
3. Set **loop** count
4. Audio loops from specified time

## Tips

- Use -1 for infinite loops (background music)
- Set size to 0 to loop entire stream
- Use time parameter for precise start points
- Test loop points for seamless transitions
- Combine with fade for smooth loops

## Common Use Cases

- **Background Music**: Create looping background tracks
- **Game Audio**: Loop sound effects
- **Extended Audio**: Extend short clips
- **Seamless Loops**: Create perfect loop points

## Related Nodes

- [Audio Fade](/docs/node-reference/ff_a_fade) - Fade in/out
- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
- [Audio Delay](/docs/node-reference/ff_a_delay) - Delay effects
