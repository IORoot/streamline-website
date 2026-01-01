# Audio High Pass

<img src="/img/node-icons/audio-highpass.svg" alt="ff_a_highpass Icon" className="node-icon" />

Apply high-pass filter to remove low frequencies, allowing only high frequencies to pass through.

## Description

The Audio High Pass node applies a high-pass filter using FFMPEG's `highpass` filter. This removes frequencies below the cutoff frequency, useful for removing rumble, noise, or unwanted bass.

## Inputs

### Required

- **input** (file): Input video file containing audio to process

### Optional

- **frequency** (slider, 0 - 20000 Hz, default: 3000): Cutoff frequency in Hz
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
- **output** (string, default: "ff_a_highpass.mp4"): Output filename

## Outputs

- **output** (file): Processed video file with high-pass filter applied

## FFMPEG Command

The node generates FFMPEG filter:

```bash
[0:a]highpass=frequency=3000:width_type=q:width=0.707:poles=2[outa]
```

### Example Command

```bash
ffmpeg -i input.mp4 -af "highpass=frequency=200:width=0.707" output.mp4
```

## Usage

### Removing Low Frequencies

1. Connect audio source to **input**
2. Set **frequency** to cutoff point (e.g., 200 Hz for rumble removal)
3. Adjust **width** to control filter steepness
4. Use **poles** for steeper filtering (2 poles = steeper)

### Common Cutoff Frequencies

- **80-120 Hz**: Remove sub-bass rumble
- **200-300 Hz**: Remove low-frequency noise
- **500-1000 Hz**: Remove muddiness
- **3000+ Hz**: Remove most low frequencies

## Tips

- Start with 200-300 Hz for general cleanup
- Use 2 poles for steeper filtering
- Narrow width for precise cutoff
- Monitor for over-filtering artifacts
- Combine with low-pass for band-pass effect

## Common Use Cases

- **Noise Removal**: Remove low-frequency noise
- **Rumble Removal**: Eliminate rumble and vibration
- **Vocal Clarity**: Remove muddiness from vocals
- **High-Frequency Focus**: Isolate high frequencies

## Related Nodes

- [Audio Low Pass](/docs/node-reference/ff_a_lowpass) - Remove high frequencies
- [Audio Equalizer](/docs/node-reference/ff_a_equalizer) - Frequency shaping
- [Audio Compressor](/docs/node-reference/ff_a_compressor) - Dynamic range
