---
sidebar_position: 4
title: Audio Monitors
description: Learn how to use audio waveform visualization, playback controls, and stream selection
---

# Audio Monitors

The Preview Modal provides comprehensive audio analysis tools for audio processing nodes, including waveform visualization, audio playback controls, and stream selection.

## Audio Waveform Display

The audio waveform provides a visual representation of audio amplitude over time.

### Features

- **Visual waveform**: Displays audio amplitude as a waveform graph
- **Time-based**: Horizontal axis represents time
- **Amplitude-based**: Vertical axis represents audio level
- **Zoom support**: Zoom in/out to see details or overview
- **Interactive**: Click on waveform to seek to that position

### Using the Waveform

1. Open the Preview Modal
2. Select an audio processing node (nodes starting with `ff_a_`)
3. The waveform automatically loads and displays
4. Use zoom controls to adjust the view

### Waveform Characteristics

- **Peaks**: Represent loud audio moments
- **Valleys**: Represent quiet or silent moments
- **Pattern**: Shows audio rhythm and structure
- **Color**: Typically uses color to represent different channels

### Interpreting the Waveform

- **High amplitude**: Loud audio
- **Low amplitude**: Quiet audio
- **Flat line**: Silence or no audio
- **Regular patterns**: Rhythmic content (music, beats)
- **Irregular patterns**: Speech or complex audio

## Audio Playback Controls

Control audio playback directly from the preview modal.

### Playback Features

- **Play/Pause**: Start and stop audio playback
- **Seek**: Click on waveform to jump to that position
- **Time display**: Shows current playback position
- **Duration**: Displays total audio duration
- **Selection**: Define a time range for playback

### Using Playback Controls

1. Select an audio node in the preview modal
2. Wait for waveform to load
3. Click play to start playback
4. Click pause to stop playback
5. Click on waveform to seek to that position

### Selection Playback

- **Define selection**: Click and drag on waveform to select a range
- **Play selection**: Playback only the selected portion
- **Adjust selection**: Drag selection handles to modify range
- **Clear selection**: Click outside selection to clear

## Audio Stream Selection

When previewing audio from video files, you can select which audio stream to analyze.

### Stream Selection

- **Multiple streams**: Video files may contain multiple audio streams
- **Stream info**: Each stream shows channels, sample rate, and codec
- **Stream selection**: Choose which stream to preview
- **Auto-detection**: Streams are automatically detected from source video

### Using Stream Selection

1. Select an audio node connected to a video source
2. Audio streams are automatically detected
3. Select a stream from the dropdown
4. Waveform updates for the selected stream

### Stream Information

Each stream displays:
- **Stream index**: The stream number in the file
- **Channels**: Number of audio channels (mono, stereo, etc.)
- **Sample rate**: Audio sample rate (e.g., 44100 Hz, 48000 Hz)
- **Codec**: Audio codec used (e.g., AAC, PCM)

## Waveform Zoom

Zoom controls work specifically for audio waveforms.

### Zoom Features

- **Zoom in**: See more detail in the waveform
- **Zoom out**: See more of the audio timeline
- **Zoom range**: Adjustable from overview to sample-level detail
- **Responsive**: Waveform width adjusts based on zoom level

### Using Waveform Zoom

- **Zoom buttons**: Use `+` and `-` buttons in toolbar
- **Mouse wheel**: Scroll to zoom in/out
- **Reset zoom**: Click `0` to reset to default view
- **Zoom level**: Displayed in toolbar

## Audio Analysis

Use the waveform for various audio analysis tasks.

### Level Analysis

- **Peak detection**: Identify loudest moments
- **Dynamic range**: See the range between quiet and loud
- **Clipping detection**: Identify potential clipping (flat peaks)
- **Silence detection**: Find silent or quiet sections

### Timing Analysis

- **Beat detection**: Identify rhythmic patterns
- **Transient detection**: Find sharp audio events
- **Timing alignment**: Align audio with video
- **Duration measurement**: Measure audio segment lengths

### Quality Analysis

- **Noise detection**: Identify unwanted noise
- **Distortion detection**: Find distorted sections
- **Frequency content**: Understand audio characteristics
- **Channel balance**: Check stereo balance

## Best Practices

### Audio Monitoring

1. **Use waveform** to understand audio structure
2. **Play audio** to hear what you're analyzing
3. **Zoom in** to see fine details
4. **Zoom out** to see overall structure
5. **Use selection** to focus on specific sections

### Stream Selection

1. **Check available streams** before processing
2. **Select appropriate stream** for your needs
3. **Verify stream info** matches expectations
4. **Test playback** to ensure correct stream

### Analysis Workflow

1. **Load audio node** in preview modal
2. **Select audio stream** if multiple available
3. **Review waveform** for overall structure
4. **Play audio** to hear the content
5. **Zoom in** on areas of interest
6. **Make adjustments** based on analysis

## Tips

- Waveform provides immediate visual feedback
- Combine visual and auditory analysis for best results
- Use zoom to see both detail and overview
- Selection playback helps focus on specific sections
- Stream selection is crucial for multi-stream sources
- Waveform updates automatically when nodes change

## Troubleshooting

### No Waveform Displayed

- Ensure the node is an audio node (`ff_a_` prefix)
- Check that audio source is connected
- Verify audio file is accessible
- Wait for waveform to load (may take a moment)

### No Audio Playback

- Check audio output device in settings
- Verify system volume is not muted
- Ensure audio file is valid and accessible
- Check audio stream selection

### Waveform Not Updating

- Refresh the preview modal
- Check node connections
- Verify source file is accessible
- Clear preview cache if needed
