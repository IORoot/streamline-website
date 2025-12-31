# Node Library

STREAMLINE comes with an extensive library of pre-built nodes organized into intuitive categories.

## Node Categories

### Input & Output

Nodes for loading and saving videos:
- **File Input**: Load videos from local files
- **URL Input**: Download videos from URLs
- **Folder Input**: Process entire folders
- **File Output**: Save processed videos
- **Stream Output**: Stream to external services

### Size & Position

Transform video dimensions and positioning:
- **Scale**: Resize videos to any resolution
- **Crop**: Extract specific regions
- **Pad**: Add padding/borders
- **Rotate**: Rotate videos
- **Flip**: Flip horizontally or vertically
- **Aspect Ratio**: Convert aspect ratios

### Visual Effects

Apply professional-grade visual effects:
- **Blur**: Gaussian, motion, and directional blur
- **Sharpen**: Enhance video sharpness
- **Color Correction**: Adjust color balance
- **Color Grading**: Apply LUTs and color grades
- **Brightness/Contrast**: Adjust exposure
- **Saturation**: Modify color intensity
- **Hue Shift**: Change color hues

### Composition

Layer and combine multiple videos:
- **Overlay**: Layer videos with positioning
- **Watermark**: Add watermarks and logos
- **Text Overlay**: Insert text with styling
- **Subtitle Burn-in**: Burn subtitles into video
- **Audio Mix**: Mix audio tracks
- **Alpha Blend**: Blend with transparency

### Format & Encoding

Handle video formats and codecs:
- **Format Convert**: Convert between formats
- **Codec Select**: Choose video codecs
- **Quality Settings**: Adjust bitrate and quality
- **Platform Optimize**: Optimize for platforms
- **Container Change**: Change container format

### Timing & Assembly

Manipulate video timing and assembly:
- **Trim**: Cut to time ranges
- **Frame Rate**: Change frame rates
- **Concatenate**: Join multiple clips
- **Transition**: Add transitions between clips
- **Stack**: Stack videos side-by-side or vertically
- **Loop**: Loop video segments

### Utilities

Helper nodes for common tasks:
- **Proxy Generator**: Create proxy files
- **Thumbnail Extract**: Extract thumbnails
- **Ken Burns**: Create Ken Burns effects
- **Batch Process**: Process multiple files
- **Metadata**: Read/write video metadata

## Using Nodes

### Finding Nodes

1. **Browse by Category**: Open the node library and browse categories
2. **Search**: Use the search bar to find nodes by name
3. **Recent**: Access recently used nodes from the quick menu

### Node Properties

Each node has configurable properties:
- **Required Properties**: Must be set before execution
- **Optional Properties**: Have default values
- **Dynamic Properties**: Change based on connections

### Node Connections

- **Input Ports**: Receive data from other nodes
- **Output Ports**: Send data to other nodes
- **Multiple Ports**: Some nodes have multiple inputs/outputs
- **Port Types**: Video, audio, and data ports

## Node Examples

### Example 1: Resize Video
```
File Input → Scale (1920x1080) → File Output
```

### Example 2: Add Watermark
```
File Input → Overlay (Watermark Image) → File Output
```

### Example 3: Color Correction
```
File Input → Color Correction → Color Grading (LUT) → File Output
```

## Custom Nodes

Advanced users can create custom nodes. See the [Custom Nodes](/docs/advanced/custom-nodes) guide for details.

## Next Steps

- Learn about [Creating Pipelines](/docs/user-guide/creating-pipelines)
- Understand the [Preview System](/docs/user-guide/preview-system)
- Explore [Export and Execution](/docs/user-guide/export-execution)
