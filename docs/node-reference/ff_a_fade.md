# Audio Fade

<img src="/img/node-icons/audio-fade.svg" alt="ff_a_fade Icon" className="node-icon" />

![Audio Fade Node](/img/node-screenshots/ff_a_fade.png)

Apply fade-in or fade-out effects to audio with various curve types.

## Description

The Audio Fade node applies fade-in or fade-out effects to audio using FFMPEG's `afade` filter. Supports multiple fade curve types for different artistic effects.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **type** (buttongroup, default: "in"): Fade type
  - `in`: Fade in (from silence to full volume)
  - `out`: Fade out (from full volume to silence)
- **start_time** (slider, 0 - 3600 s, default: 0): Start time in seconds
- **duration** (slider, 0.1 - 60 s, default: 1.0): Fade duration in seconds
- **curve** (select, default: "tri"): Fade curve type
  - `tri`: Triangular (linear)
  - `qsin`: Quarter sine
  - `esin`: Exponential sine
  - `hsin`: Half sine
  - `log`: Logarithmic
  - `ipar`: Inverse parabola
  - `qua`: Quadratic
  - `cub`: Cubic
  - `squ`: Square
  - `cbr`: Cube root
  - `par`: Parabola
  - `exp`: Exponential
  - `iqsin`: Inverse quarter sine
  - `ihsin`: Inverse half sine
  - `dese`: Descent
  - `desi`: Descent inverted
  - `losi`: Logarithmic sine
  - `nofade`: No fade
  - `linear`: Linear
- **silence** (slider, 0.0 - 1.0, default: 0.0): Silence gain (volume at start of fade-in or end of fade-out)
- **unity** (slider, 0.0 - 1.0, default: 1.0): Unity gain (volume at end of fade-in or start of fade-out)
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_fade.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with fade effect

## FFMPEG Command

The node generates FFMPEG filter:

**Fade In:**
```bash
[0:a]afade=t=in:ss=0:d=1:curve=tri[outa]
```

**Fade Out:**
```bash
[0:a]afade=t=out:st=10:d=2:curve=tri[outa]
```

### Example Commands

**Fade in at start:**
```bash
ffmpeg -i input.mp4 -af "afade=t=in:ss=0:d=2" output.mp4
```

**Fade out at end:**
```bash
ffmpeg -i input.mp4 -af "afade=t=out:st=10:d=3" output.mp4
```

## Usage

### Fade In

1. Connect audio source to **input**
2. Set **type** to "Fade In"
3. Set **start_time** to 0 (beginning)
4. Set **duration** to desired fade length
5. Choose **curve** type for fade shape

### Fade Out

1. Connect audio source to **input**
2. Set **type** to "Fade Out"
3. Set **start_time** to fade start position
4. Set **duration** to desired fade length
5. Choose **curve** type for fade shape

## Curve Types

- **tri/linear**: Smooth linear fade
- **log/exp**: Logarithmic/exponential curves
- **qsin/esin**: Sine-based curves
- **qua/cub**: Polynomial curves

## Tips

- Use 1-3 second fades for most content
- Linear curves for simple fades
- Logarithmic curves for natural-sounding fades
- Adjust silence/unity for custom fade levels
- Test different curves to find best sound

## Common Use Cases

- **Music Intros**: Fade in at song start
- **Music Outros**: Fade out at song end
- **Speech**: Smooth audio transitions
- **Video Editing**: Professional audio fades

## Related Nodes

- [Audio Volume](/docs/node-reference/ff_a_volume) - Volume control
- [Audio Delay](/docs/node-reference/ff_a_delay) - Delay effects
- [Audio Echo](/docs/node-reference/ff_a_echo) - Echo/reverb
