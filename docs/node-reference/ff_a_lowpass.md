# Audio Low Pass

<img src="/img/node-icons/audio-lowpass.svg" alt="ff_a_lowpass Icon" className="node-icon" />

![Audio Low Pass Node](/img/node-screenshots/ff_a_lowpass.png)

Apply low-pass filter to remove high frequencies, allowing only low frequencies to pass through.

## Description

The Audio Low Pass node applies a low-pass filter using FFMPEG's `lowpass` filter. This removes frequencies above the cutoff frequency, useful for removing hiss, sibilance, or unwanted high frequencies.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **frequency** (slider, 0 - 20000 Hz, default: 500): Cutoff frequency in Hz
- **width_type** (buttongroup, default: "q"): Filter width type
  - `h`: Hertz (Hz)
  - `q`: Q-Factor (default)
  - `o`: Octave
  - `s`: Slope
  - `k`: Kilohertz (kHz)
- **width** (slider, 0 - 100, default: 0.707): Filter width
- **poles** (slider, 1 - 2, default: 2): Number of filter poles
- **mix** (slider, 0.0 - 1.0, default: 1.0): Dry/wet mix
- **notes** (textarea): Optional notes
- **output** (string, default: "ff_a_lowpass.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with low-pass filter applied

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]lowpass=frequency=500:width_type=q:width=0.707:poles=2[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "lowpass=frequency=5000:width=0.707" output.mp4
```

## Usage

### Removing High Frequencies

1. Connect audio source to **input**
2. Set **frequency** to cutoff point (e.g., 5000 Hz)
3. Adjust **width** to control filter steepness
4. Use **poles** for steeper filtering

### Common Cutoff Frequencies

- **3000-5000 Hz**: Remove sibilance and hiss
- **8000-10000 Hz**: Remove high-frequency noise
- **12000+ Hz**: Remove most high frequencies
- **500-1000 Hz**: Very aggressive filtering

## Tips

- Start with 5000-8000 Hz for general cleanup
- Use 2 poles for steeper filtering
- Narrow width for precise cutoff
- Monitor for over-filtering (muffled sound)
- Combine with high-pass for band-pass effect

## Common Use Cases

- **Noise Removal**: Remove high-frequency noise
- **Sibilance Reduction**: Reduce harsh "s" sounds
- **Vintage Effect**: Create old-time radio effect
- **Low-Frequency Focus**: Isolate low frequencies

## Related Nodes

- [Audio High Pass](/docs/node-reference/ff_a_highpass) - Remove low frequencies
- [Audio Equalizer](/docs/node-reference/ff_a_equalizer) - Frequency shaping
- [Audio DeEsser](/docs/node-reference/ff_a_deesser) - Sibilance reduction
