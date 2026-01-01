# Audio Monitors

Audio monitors provide visualization and analysis tools for audio processing in STREAMLINE.

## Audio Preview

Audio nodes display waveform visualizations instead of video frames.

### Waveform Display

The audio waveform shows:
- **Amplitude**: Vertical position represents volume
- **Time**: Horizontal axis represents time
- **Channels**: Separate displays for stereo channels
- **Zoom**: Zoomable for detailed inspection

### Waveform Features

**Visualization:**
- Real-time waveform rendering
- Color-coded amplitude levels
- Channel separation (L/R)
- Time markers and labels

**Interaction:**
- Click to scrub playback
- Zoom for detail inspection
- Pan to navigate timeline
- Frame-accurate positioning

## Audio Playback Controls

### Playback Controls

- **Play**: Start audio playback
- **Pause**: Pause playback
- **Stop**: Stop and reset to beginning
- **Scrub**: Click waveform to jump to position

### Playback Features

- **Real-time Playback**: Play audio through selected output device
- **Scrubbing**: Click waveform to jump to any position
- **Loop Playback**: Option to loop audio (if supported)
- **Speed Control**: Adjust playback speed (if supported)

## Audio Stream Selection

### Multiple Streams

When audio has multiple streams:
- **Stream Selector**: Choose which stream to preview
- **Stream Information**: Display stream details
- **Channel Count**: Show number of channels
- **Sample Rate**: Display sample rate

### Stream Information

Each stream shows:
- **Stream Index**: Stream number
- **Codec**: Audio codec name
- **Channels**: Number of audio channels
- **Sample Rate**: Samples per second
- **Bitrate**: Audio bitrate

## Waveform Analysis

### Reading Waveforms

**Amplitude:**
- **High Peaks**: Loud sections
- **Low Peaks**: Quiet sections
- **Flat Lines**: Silence
- **Variations**: Dynamic range

**Time:**
- **Duration**: Total audio length
- **Position**: Current playback position
- **Markers**: Time markers for navigation
- **Zoom**: Time scale adjustment

### Waveform Patterns

**Common Patterns:**
- **Music**: Regular patterns, varying amplitude
- **Speech**: Irregular patterns, moderate amplitude
- **Silence**: Flat line at zero
- **Noise**: Random high-frequency variations

## Audio Processing Preview

### Node-Specific Previews

Different audio nodes show:
- **Volume Nodes**: Amplitude changes
- **EQ Nodes**: Frequency response changes
- **Effect Nodes**: Applied effects visible
- **Filter Nodes**: Filtered output

### Preview Updates

- **Real-time**: Updates as you adjust parameters
- **Automatic**: Refreshes when nodes change
- **Manual**: Option to manually refresh
- **Cached**: Waveforms cached for performance

## Spectrum Analyzer

### Frequency Analysis

The spectrum analyzer shows:
- **Frequency Range**: Audio frequency spectrum
- **Amplitude**: Level at each frequency
- **Time**: Frequency content over time
- **3D Visualization**: Spectrogram view (if available)

### Reading Spectrum

**Frequency Distribution:**
- **Low Frequencies**: Bass content (left side)
- **Mid Frequencies**: Midrange content (center)
- **High Frequencies**: Treble content (right side)
- **Peaks**: Strong frequencies

**Use Cases:**
- **EQ Analysis**: Identify frequency issues
- **Noise Detection**: Find unwanted frequencies
- **Balance Check**: Verify frequency balance
- **Effect Verification**: Confirm effect application

## Audio Device Selection

### Output Device

Select audio output device:
1. Open Settings → **Output** tab
2. Select **Audio Output Device**
3. Choose from available devices
4. Audio plays through selected device

### Device Options

- **Default**: System default device
- **Specific Device**: Choose specific output
- **Multiple Devices**: Switch between devices
- **Device Information**: View device details

## Best Practices

1. **Use Waveform for Timing**: Check timing and synchronization
2. **Monitor Levels**: Watch for clipping and distortion
3. **Compare Before/After**: Compare original and processed audio
4. **Check All Streams**: Preview all audio streams
5. **Test Playback**: Verify audio through output device

## Troubleshooting

### No Audio Playback

- Check audio output device selection
- Verify audio node is connected
- Check system volume
- Ensure audio file is valid

### Waveform Not Displaying

- Verify audio node has audio output
- Check node is properly connected
- Refresh preview manually
- Check for errors in logs

### Distorted Audio

- Check for clipping in waveform
- Verify audio processing settings
- Review node parameters
- Check sample rate compatibility

## Next Steps

- Learn about [Modal Interface](/docs/user-guide/preview-system/modal-interface) - Preview controls
- Explore [Video Monitors](/docs/user-guide/preview-system/video-monitors) - Video analysis
- Understand [Running Pipelines](/docs/user-guide/running-pipelines) - Audio processing
