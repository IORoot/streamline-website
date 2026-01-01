---
sidebar_position: 2
title: FFMPEG Integration
description: Learn how Streamline integrates with FFMPEG for video and audio processing
---

# FFMPEG Integration

Streamline uses FFMPEG as its core video and audio processing engine. This document explains how FFMPEG is integrated and used throughout the application.

## FFMPEG Overview

FFMPEG is a powerful multimedia framework that can decode, encode, transcode, mux, demux, stream, filter, and play media files.

### Components Used

- **ffmpeg**: Main processing executable
- **ffprobe**: Media file analysis tool

## FFMPEG Detection

### Installation Detection

Streamline automatically detects FFMPEG installation:

1. **Path Check**: Checks common installation paths
2. **Version Check**: Executes `ffmpeg -version` to verify installation
3. **Path Display**: Shows detected path in Settings → Info

### Detection Process

```
Application Start
    ↓
FFMPEG Detection Service
    ↓
Check Common Paths
    ↓
Execute Version Command
    ↓
Store Path and Version
    ↓
Display in Settings
```

## FFMPEG Execution

### Command Generation

FFMPEG commands are generated from node configurations:

1. **Node Parameters**: Collected from node inputs
2. **Template Resolution**: Template variables resolved
3. **Filter Graph**: Built from node connections
4. **Command Assembly**: Final FFMPEG command created

### Command Structure

```bash
ffmpeg [global options] -i input [input options] \
  [filter graph] \
  [output options] output
```

### Filter Graph Construction

Filter graphs are built by:
1. **Topological Sort**: Nodes sorted by dependencies
2. **Filter Chaining**: Filters connected in sequence
3. **Label Assignment**: Stream labels for complex graphs
4. **Output Mapping**: Output streams mapped to files

## Node to FFMPEG Mapping

### Input Nodes

- **File Input**: `-i input.mp4`
- **Image Input**: `-loop 1 -i image.jpg`
- **URL Input**: `-i https://example.com/video.mp4`

### Processing Nodes

Each processing node generates FFMPEG filter parameters:

```javascript
// Example: Scale node
getFieldOutput(params) {
  return `scale=${params.width}:${params.height}`;
}
```

### Output Nodes

- **Video Output**: `-c:v codec -b:v bitrate output.mp4`
- **Audio Output**: `-c:a codec -b:a bitrate output.mp3`
- **Image Output**: `-frames:v 1 output.jpg`

## Filter Graph Examples

### Simple Pipeline

```
Input → Scale → Output
```

FFMPEG Command:
```bash
ffmpeg -i input.mp4 -vf "scale=1920:1080" output.mp4
```

### Complex Pipeline

```
Input → Scale → Overlay → Color Adjust → Output
```

FFMPEG Command:
```bash
ffmpeg -i input.mp4 -i overlay.png \
  -filter_complex "[0:v]scale=1920:1080[scaled]; \
                   [scaled][1:v]overlay=10:10[overlaid]; \
                   [overlaid]eq=brightness=0.1[adjusted]" \
  -map "[adjusted]" output.mp4
```

## Log Level Integration

### Log Level Control

FFMPEG log level is controlled globally (Settings → Logs):

- **quiet**: `-loglevel quiet`
- **error**: `-loglevel error`
- **warning**: `-loglevel warning`
- **info**: `-loglevel info`
- **verbose**: `-loglevel verbose`
- **debug**: `-loglevel debug`
- **trace**: `-loglevel trace`

### Log Processing

FFMPEG output is captured and processed:

1. **Output Capture**: FFMPEG stdout/stderr captured
2. **Log Parsing**: Logs parsed for errors and warnings
3. **Status Updates**: Execution status updated from logs
4. **Progress Tracking**: Progress extracted from log output

## Preview Generation

### Image Preview

Preview images are generated using FFMPEG:

```bash
ffmpeg -i input.mp4 -vf "scale=400:-1" -frames:v 1 preview.jpg
```

### Audio Waveform

Audio waveforms are extracted using FFMPEG:

```bash
ffmpeg -i input.mp4 -af "aresample=8000" -f f32le - | \
  waveform extraction process
```

## Error Handling

### FFMPEG Error Detection

Errors are detected from:
1. **Exit Codes**: Non-zero exit codes indicate errors
2. **Error Messages**: Parsed from stderr output
3. **Log Analysis**: Error patterns in log output

### Error Reporting

Errors are reported to:
1. **Log Viewer**: Displayed in application logs
2. **Status Updates**: Shown in pipeline status
3. **User Notifications**: Alert dialogs for critical errors

## Performance Optimization

### Execution Strategies

1. **Direct Execution**: FFMPEG executed directly via Electron
2. **API Execution**: Optional API-based execution (if configured)
3. **Batch Processing**: Multiple files processed in sequence

### Resource Management

- **Process Management**: FFMPEG processes managed and monitored
- **Memory Management**: Large file handling
- **Timeout Handling**: Long-running process timeouts

## FFMPEG Version Compatibility

### Version Requirements

- **Minimum**: FFMPEG 4.0+
- **Recommended**: Latest stable version
- **Features**: Some features require specific versions

### Version Detection

Version is detected and displayed:
- **Settings → Info**: Shows FFMPEG version
- **Version Check**: Validates version compatibility
- **Feature Detection**: Checks for available features

## Custom FFMPEG Options

### Global Options

Global FFMPEG options can be configured:
- **Thread Count**: `-threads` option
- **Hardware Acceleration**: Platform-specific options
- **Codec Options**: Default codec settings

### Node-Specific Options

Individual nodes can specify:
- **Filter Options**: Node-specific filter parameters
- **Codec Options**: Output codec settings
- **Quality Settings**: Quality/bitrate options

## Best Practices

### Command Generation

1. **Validate Parameters**: Ensure all parameters are valid
2. **Escape Paths**: Properly escape file paths
3. **Quote Arguments**: Quote arguments with spaces
4. **Error Handling**: Handle FFMPEG errors gracefully

### Performance

1. **Use Hardware Acceleration**: When available
2. **Optimize Filter Graphs**: Minimize filter complexity
3. **Batch Processing**: Process multiple files efficiently
4. **Preview Optimization**: Use lower quality for previews

### Debugging

1. **Increase Log Level**: Use debug/trace for troubleshooting
2. **Test Commands**: Test FFMPEG commands manually
3. **Check Versions**: Verify FFMPEG version compatibility
4. **Review Logs**: Analyze FFMPEG output logs

## Troubleshooting

### FFMPEG Not Found

- Check installation path
- Verify PATH environment variable
- Reinstall FFMPEG if needed

### Command Execution Errors

- Check file paths and permissions
- Verify input file formats
- Review FFMPEG error messages
- Check filter graph syntax

### Performance Issues

- Check system resources
- Optimize filter graphs
- Use hardware acceleration
- Consider file size and format
