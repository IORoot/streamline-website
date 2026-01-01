# Preview Modal Interface

The preview modal provides a comprehensive interface for viewing and analyzing video and audio previews with advanced controls.

## Opening the Preview Modal

### Methods

1. **Toolbar Button**: Click the Preview button (👁️) in the toolbar
2. **Keyboard Shortcut**: Press `P` to toggle preview
3. **Node Preview**: Click the preview icon on any node

## Modal Features

### Draggable and Resizable

The preview modal is:
- **Draggable**: Click and drag the header to move
- **Resizable**: Drag corners or edges to resize
- **Persistent**: Size and position are saved between sessions
- **Minimum Size**: 400x300 pixels

### Modal Controls

**Header Controls:**
- **Close Button**: Close the modal
- **Minimize**: Minimize to taskbar (if supported)
- **Node Selector**: Choose which node to preview

**Toolbar Controls:**
- **Zoom Controls**: Zoom in, out, reset, fit
- **Pan Controls**: Pan the preview image
- **Display Options**: Pixel-perfect mode, grid, guides
- **Color Scopes**: Waveform, vectorscope, histogram, parade
- **Audio Controls**: Play, pause, stop (for audio nodes)

## Node Selection

### Selecting Preview Node

1. Use the **Node Selector** dropdown in the modal header
2. Select from available nodes with previews
3. Preview updates immediately

### Available Nodes

Nodes with previews include:
- Input nodes (video player)
- Processing nodes (filtered output)
- Output nodes (final result)

### Node Information

Each preview shows:
- **Node Label**: Node name and instance number
- **Pipeline Number**: Which pipeline the node belongs to
- **Preview Status**: Whether preview is available

## Zoom and Pan

### Zoom Controls

- **Zoom In**: Click zoom in button or use mouse wheel
- **Zoom Out**: Click zoom out button or use mouse wheel
- **Reset Zoom**: Click reset button to return to 100%
- **Fit to View**: Click fit button to fit image to viewport

### Pan Controls

- **Pan**: Click and drag the preview image
- **Pan Reset**: Reset pan to center image
- **Mouse Wheel**: Zoom while maintaining center point

### Zoom Levels

- **Minimum**: 10% (very zoomed out)
- **Maximum**: 1000% (very zoomed in)
- **Default**: 100% (1:1 pixel ratio)

## Display Options

### Pixel-Perfect Mode

When enabled:
- Image is displayed at exact pixel size
- No interpolation or smoothing
- Useful for precise pixel-level inspection
- Maintains sharp edges

### Grid Overlay

Toggle grid overlay:
- Shows pixel grid over preview
- Configurable grid size
- Helps with alignment and measurement
- Useful for precise positioning

### Guides

Add guide lines for alignment:
- **Horizontal Guides**: Click horizontal ruler to add
- **Vertical Guides**: Click vertical ruler to add
- **Drag Guides**: Drag guides to reposition
- **Delete Guides**: Click guide to delete

## Color Scopes

Access professional color analysis tools:

### Waveform Monitor

- Shows luminance distribution
- Vertical axis represents brightness
- Horizontal axis represents horizontal position
- Useful for exposure analysis

### Vectorscope

- Shows color information
- Displays hue and saturation
- Useful for color grading
- Shows color relationships

### Histogram

- Shows pixel value distribution
- Separate channels (RGB)
- Useful for exposure and contrast analysis
- Shows distribution of values

### Parade

- Shows RGB channels separately
- Side-by-side channel comparison
- Useful for color balance analysis
- Shows channel relationships

## Audio Preview

For audio nodes, the modal shows:

### Waveform Display

- Visual waveform representation
- Time-based audio visualization
- Zoom and pan support
- Frame-accurate scrubbing

### Audio Controls

- **Play**: Play audio preview
- **Pause**: Pause playback
- **Stop**: Stop and reset playback
- **Scrub**: Click waveform to jump to position

### Audio Stream Selection

- Select which audio stream to preview
- Multiple streams supported
- Stream information displayed

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Toggle Preview | `P` |
| Close Modal | `Escape` |
| Zoom In | `Ctrl/Cmd + Plus` |
| Zoom Out | `Ctrl/Cmd + Minus` |
| Reset Zoom | `Ctrl/Cmd + 0` |
| Fit to View | `Ctrl/Cmd + F` |

## Best Practices

1. **Use Pixel-Perfect for Precision**: Enable pixel-perfect mode for exact inspection
2. **Add Guides for Alignment**: Use guides to check alignment and positioning
3. **Use Color Scopes**: Leverage color scopes for professional color work
4. **Compare Nodes**: Switch between nodes to see transformations
5. **Zoom for Details**: Zoom in to check fine details

## Next Steps

- Learn about [Guides and Grid](/docs/user-guide/preview-system/guides-and-grid) - Alignment tools
- Explore [Video Monitors](/docs/user-guide/preview-system/video-monitors) - Color analysis
- Understand [Audio Monitors](/docs/user-guide/preview-system/audio-monitors) - Audio visualization
