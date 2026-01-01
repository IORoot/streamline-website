---
sidebar_position: 1
title: Preview Modal Interface
description: Learn how to use the preview modal to view and analyze node outputs
---

# Preview Modal Interface

The Preview Modal provides a comprehensive interface for viewing and analyzing node outputs, supporting both video frames and audio waveforms.

## Opening the Preview Modal

Access the preview modal using:
- **Keyboard shortcut**: Press `P`
- **Toolbar button**: Click the preview icon in the toolbar

## Modal Features

### Draggable and Resizable

The modal can be:
- **Dragged**: Click and drag the title bar to reposition
- **Resized**: Drag the bottom-right corner to resize
- **Persistent**: Position and size are saved between sessions

### Node Selection

Select nodes to preview from the dropdown menu:
- All nodes on the canvas are listed
- Nodes are organized by pipeline number
- Nodes with previews are marked
- Selection persists when switching between nodes

### View Modes

The modal supports two main view modes:

#### Image Preview Mode
- For video/image processing nodes
- Displays preview images
- Supports zoom and pan controls
- Includes rulers, grid, and guides

#### Audio Preview Mode
- For audio processing nodes
- Displays audio waveforms
- Supports audio playback controls
- Shows audio stream information

## Controls

### Zoom Controls

- **Zoom In**: Click the `+` button or use mouse wheel
- **Zoom Out**: Click the `-` button or use mouse wheel
- **Reset Zoom**: Click the `0` button to fit content
- **Zoom Range**: 10% to 1000%

### Pan Controls

- **Pan**: Click and drag the image/waveform
- **Reset Pan**: Double-click to center the view
- **Cursor-Centered Zoom**: Zoom centers on mouse cursor position

### Pixel Perfect Mode

Toggle pixel-perfect rendering:
- **Enabled**: Each pixel is displayed at exact size (1:1)
- **Disabled**: Smooth scaling for better overview
- Toggle with the pixel-perfect button

## Toolbar

The preview modal includes a toolbar with:

- **Node selector**: Dropdown to choose which node to preview
- **Zoom controls**: `+`, `-`, `0` buttons
- **Pixel perfect toggle**: Switch between pixel-perfect and scaled view
- **Monitor buttons**: Access video and audio monitors
- **Grid toggle**: Show/hide grid overlay
- **Close button**: Close the modal

## State Persistence

The modal saves:
- Position on screen
- Size
- Zoom level
- Pan position
- Selected node
- Grid settings
- Guide positions
- Monitor selections

All settings are restored when reopening the modal.

## Keyboard Shortcuts

- **P**: Open/close preview modal
- **Mouse wheel**: Zoom in/out
- **Click + drag**: Pan the view
- **Double-click**: Reset pan to center

## Tips

- Use pixel-perfect mode for precise pixel-level inspection
- Adjust zoom to see fine details or overview
- Pan to explore different areas of large images
- Switch between nodes quickly using the dropdown
- Resize the modal to match your workflow needs
