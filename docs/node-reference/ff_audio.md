---
sidebar_position: 16
title: Audio Overlay
description: Overlay an audio track at specific time on the video
---

# Audio Overlay Node

<img src="/img/node-icons/audio.svg" alt="ff_audio Icon" className="node-icon" />

The **Audio Overlay** node overlays an audio track onto a video at a specific start time. You can mix it with the original audio or replace it entirely, and adjust playback speed.

## Overview

The Audio Overlay node uses FFMPEG's audio mixing capabilities to combine audio tracks. It supports starting the overlay at a specific time, adjusting playback speed, and optionally removing the original video audio.

## Inputs

### Required Inputs

- **input** (`file`): Input video file
  - Connect this to the output of a previous node or an Input node

- **audio** (`file`): Audio file to overlay
  - Supported formats: .mp3, .wav, .flac, .alac, .aiff, .aac, .m4a, .ogg, .opus, .wma, .ac3, .dts

### Optional Inputs

- **start** (`string`): Start time in seconds
  - Range: 0 to video length
  - Default: `0`

- **speed** (`string`): Playback speed
  - Range: 0.25 - 4.0
  - 1.0 = Normal speed
  - < 1.0 = Slower
  - > 1.0 = Faster
  - Default: `1.0`

- **shortest** (`boolean`): End when shortest stream ends
  - When enabled, output ends when the shorter stream (video or audio) ends
  - Default: `false`

- **remove** (`boolean`): Remove original video audio
  - When enabled, only the overlay audio is kept
  - When disabled, both audio tracks are mixed together
  - Default: `false`

- **notes** (`textarea`): Optional notes
  - Useful for documenting audio overlay settings

- **output** (`string`): Output filename
  - Default: `ff_audio.mp4`

## Outputs

- **output** (`file`): The video with overlaid audio
  - Can be connected to subsequent processing nodes or an Output node

## FFMPEG Command

The Audio Overlay node generates FFMPEG filter commands:

### Mix Audio (remove: false)

```bash
ffmpeg -i input.mp4 -i audio.mp3 -filter_complex "[1:a]atempo=1.0[aud];[0:a][aud]amix=inputs=2[outa]" -map 0:v -map "[outa]" output.mp4
```

### Replace Audio (remove: true)

```bash
ffmpeg -i input.mp4 -i audio.mp3 -filter_complex "[1:a]atempo=1.0[outa]" -map 0:v -map "[outa]" output.mp4
```

### With Start Time

```bash
ffmpeg -i input.mp4 -i audio.mp3 -filter_complex "[1:a]adelay=3000|3000[aud];[0:a][aud]amix=inputs=2[outa]" -map 0:v -map "[outa]" output.mp4
```

## Usage Summary

### Basic Usage

1. **Add Audio Overlay Node**: Drag the Audio Overlay node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from a previous node to the Audio Overlay node's input
3. **Select Audio File**: Choose the audio file to overlay
4. **Set Start Time** (optional): Enter when the audio should start
5. **Set Speed** (optional): Adjust playback speed if needed
6. **Choose Audio Mode**: Mix with original or replace entirely
7. **Run Pipeline**: Execute your pipeline

### Audio Modes

- **Mix** (remove: false): Combines original video audio with overlay audio
  - Both tracks play simultaneously
  - Useful for: Background music, sound effects, narration
  
- **Replace** (remove: true): Removes original audio, uses only overlay
  - Only the overlay audio is included
  - Useful for: Complete audio replacement, music videos

### Common Use Cases

- **Add Background Music**: Overlay music onto video
- **Add Narration**: Add voiceover or narration
- **Add Sound Effects**: Overlay sound effects at specific times
- **Replace Audio**: Replace original audio with new track
- **Speed Adjustment**: Slow down or speed up audio playback
- **Synchronize Audio**: Start audio at specific time to sync with video

### Tips

- Use start time to synchronize audio with specific video moments
- Speed adjustment affects audio pitch (use tempo filter for pitch-preserving speed change)
- Mixing audio may require volume adjustment to balance levels
- Use shortest option to ensure output matches the shorter stream
- Preview your results to ensure audio sync is correct

## Example Workflows

### Add Background Music

```
Input Node
    ↓
Audio Overlay (audio: music.mp3, start: 0, remove: false)
    ↓
Output Node
```

### Replace Audio Track

```
Input Node
    ↓
Audio Overlay (audio: new_audio.mp3, start: 0, remove: true)
    ↓
Output Node
```

### Add Sound Effect at Specific Time

```
Input Node
    ↓
Audio Overlay (audio: effect.wav, start: 5.5, remove: false)
    ↓
Output Node
```
