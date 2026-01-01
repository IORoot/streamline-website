---
sidebar_position: 1
title: Interface and Canvas
description: Learn how to navigate and interact with the canvas, including zooming, panning, tabs, comments, and auto-layout
---

# Interface and Canvas

The canvas is the main workspace where you build your video processing pipelines. This guide covers all the ways to navigate and interact with the canvas.

## Canvas Navigation

### Zooming

- **Zoom In**: `Ctrl/Cmd + Mouse Wheel Up` or `Ctrl/Cmd + Plus (+)
- **Zoom Out**: `Ctrl/Cmd + Mouse Wheel Down` or `Ctrl/Cmd + Minus (-)`
- **Reset Zoom**: `Ctrl/Cmd + 0`
- **Fit to Screen**: `Ctrl/Cmd + F`

### Panning

- **Pan**: Click and drag on empty canvas area
- **Middle Mouse Drag**: Pan the canvas
- **Space + Drag**: Pan the canvas (alternative)

### Canvas Controls

- **Minimize Nodes**: Click the minimize button on any node to collapse it
- **Auto-Layout**: Use the auto-layout button to automatically arrange nodes
- **Node Selection**: Click nodes to select them, drag to move

## Tabs

The application supports multiple canvas tabs, allowing you to work on multiple pipelines simultaneously.

### Creating Tabs

- **New Tab**: Click the "+" button in the tab bar
- **Keyboard**: `Ctrl/Cmd + T` (if available)

### Managing Tabs

- **Switch Tabs**: Click on a tab to switch to it
- **Rename Tab**: Double-click on a tab name to edit it
- **Delete Tab**: Click the "×" button on a tab
  - Last tab cannot be deleted (new empty tab is created instead)

### Tab Features

- Each tab maintains its own:
  - Node layout and connections
  - Data Store values
  - Comments and annotations
  - Pipeline state

## Comments

Comments are interactive annotations that you can add to the canvas to document your pipelines.

### Adding Comments

1. Right-click on the canvas
2. Select "Add Comment" from the context menu
3. Enter your comment text

### Editing Comments

- **Text**: Click on a comment to edit its text
- **Position**: Drag a comment to move it
- **Size**: Drag the resize handle (bottom-right corner) to resize
- **Color**: Use the color picker in the comment menu

### Comment Features

- **Customizable Colors**: Set background and text colors
- **Font Size**: Adjustable font size
- **Text Alignment**: Left, center, or right alignment
- **Resizable**: Drag corners to resize
- **Movable**: Drag to reposition

### Comment Menu

Right-click on a comment to access:
- Color picker (background and text)
- Font size adjustment
- Text alignment options
- Delete comment

## Auto-Layout

Auto-layout automatically arranges nodes on the canvas based on their connections.

### Using Auto-Layout

1. Click the "Auto-Layout" button in the toolbar
2. Nodes are automatically arranged from left to right
3. Multiple pipelines are arranged horizontally

### How It Works

- **Pipeline Detection**: Identifies separate pipelines (connected components)
- **Hierarchical Layout**: Arranges nodes by depth in the pipeline
- **Spacing**: Maintains consistent spacing between nodes
- **Multiple Pipelines**: Continues layout horizontally across pipelines

### Layout Algorithm

- Uses graph theory to identify connected components
- Performs topological sorting to determine node hierarchy
- Uses breadth-first search to assign levels
- Positions nodes with consistent spacing

## Sidebar Modes

The sidebar can display nodes in different modes:

- **List Mode**: Simple list of all nodes
- **Category Mode**: Nodes grouped by category
- **Search**: Filter nodes by name or description

### Pinning Nodes

- Click the pin icon on a node to pin it to the top
- Pinned nodes remain visible when scrolling
- Useful for frequently used nodes

## Node Minimization

- **Minimize**: Click the minimize button on any node
- **Expand**: Click again to expand
- **Minimized State**: Shows only the node title and connections

## Canvas Shortcuts

- **Delete**: `Delete` or `Backspace` - Delete selected nodes
- **Copy**: `Ctrl/Cmd + C` - Copy selected nodes
- **Paste**: `Ctrl/Cmd + V` - Paste nodes
- **Undo**: `Ctrl/Cmd + Z` - Undo last action
- **Redo**: `Ctrl/Cmd + Shift + Z` - Redo last action
- **Select All**: `Ctrl/Cmd + A` - Select all nodes

## Working Directory

Each tab can have its own working directory:

- **Set Working Directory**: Configure in tab settings
- **Relative Paths**: File paths can be relative to working directory
- **Tab-Specific**: Each tab maintains its own working directory

## Node Instance Numbering

When you have multiple instances of the same node type:

- First instance: No suffix (e.g., `ff_scale`)
- Second instance: `_2` suffix (e.g., `ff_scale_2`)
- Third instance: `_3` suffix (e.g., `ff_scale_3`)

This numbering is used in:
- Data Store node parameter references
- Node identification
- Template variables

## Tips

- Use auto-layout after creating complex pipelines
- Add comments to document your workflow
- Use tabs to organize different projects
- Minimize nodes to reduce canvas clutter
- Pin frequently used nodes for quick access
