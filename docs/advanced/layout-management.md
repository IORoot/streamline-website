---
sidebar_position: 2
title: Layout Management
description: Learn how to manage multiple tabs and save/load node layout configurations
---

# Layout Management

Streamline provides powerful layout management features, allowing you to work with multiple pipelines simultaneously and save/load your node configurations.

## Multi-Tab System

The multi-tab system allows you to work with multiple separate pipelines at the same time, each with its own state and configuration.

### Creating Tabs

- **New Tab Button**: Click the `+` button in the tab bar to create a new tab
- **Automatic Creation**: A new tab is automatically created when you delete the last tab
- **Default Name**: New tabs are named "Tab 1", "Tab 2", etc.

### Switching Between Tabs

- **Click Tab**: Click on any tab to switch to that layout
- **Active Tab**: The active tab is highlighted
- **State Preservation**: Each tab maintains its own:
  - Node positions and connections
  - Canvas zoom and pan
  - Comments and annotations
  - Pipeline state

### Renaming Tabs

1. **Double-click** on a tab name
2. **Edit** the name in the input field
3. **Press Enter** or click outside to save
4. **Press Escape** to cancel

### Deleting Tabs

- **Delete Button**: Click the `X` button on a tab to delete it
- **Last Tab**: Deleting the last tab creates a new empty tab automatically
- **Confirmation**: No confirmation is required (last tab protection is automatic)

### Tab Ordering

- Tabs are automatically sorted by creation order
- Tab order is preserved between sessions
- Each tab has a unique ID that persists

## Saving Layouts

Save your current node layout to a file for backup, sharing, or reuse.

### Export Layout

1. Open **Settings** → **File** tab
2. Click **"Export Layout"** button
3. Choose a location and filename
4. The layout is saved as a JSON file

### Layout File Contents

The layout file contains:
- **Node positions**: X and Y coordinates for each node
- **Node connections**: All connections between nodes
- **Viewport state**: Canvas zoom and pan position
- **Comments**: All comment annotations on the canvas
- **Node data**: Node parameters and configurations

### Layout File Format

Layout files are JSON format and can be:
- **Shared**: Send to other users
- **Version controlled**: Track changes in Git
- **Backed up**: Keep copies for safety
- **Imported**: Load into any Streamline instance

## Loading Layouts

Load a previously saved layout to restore your node configuration.

### Import Layout

1. Open **Settings** → **File** tab
2. Click **"Import Layout"** button
3. Select a layout JSON file
4. The layout is loaded and applied

### Import Behavior

When importing a layout:
- **Current layout is replaced**: Your current canvas is cleared
- **Nodes are restored**: All nodes are recreated at their saved positions
- **Connections are restored**: All connections are recreated
- **Viewport is restored**: Canvas zoom and pan are restored
- **Comments are restored**: All annotations are restored

### Import Validation

- **File format**: Only valid JSON layout files can be imported
- **Error handling**: Invalid files show an error message
- **Partial loads**: If some nodes fail to load, valid nodes are still created

## Menu Integration

Layout management is also available through the application menu:

### File Menu

- **Export Layout**: Save current layout to file
- **Import Layout**: Load layout from file

### Keyboard Shortcuts

- Menu shortcuts work the same as button clicks
- Shortcuts are platform-specific (Cmd/Ctrl)

## Best Practices

### Organization

- **Use tabs** for different projects or workflows
- **Name tabs** descriptively for easy identification
- **Save layouts** regularly for important pipelines
- **Version control** layout files for team collaboration

### Backup

- **Export layouts** before making major changes
- **Keep backups** of important pipeline configurations
- **Version naming**: Use descriptive names like "pipeline-v1.json"

### Sharing

- **Share layouts** with team members
- **Document layouts**: Add comments to explain complex pipelines
- **Test imports**: Verify layouts work after importing

## Tips

- Use tabs to work on multiple projects simultaneously
- Export layouts before experimenting with major changes
- Name tabs clearly to avoid confusion
- Save layouts regularly to prevent data loss
- Import layouts to quickly set up common workflows
- Use comments in layouts to document your pipelines

## Troubleshooting

### Layout Not Saving

- Check file permissions in the save location
- Verify you have write access to the directory
- Check available disk space

### Layout Not Loading

- Verify the file is a valid JSON layout file
- Check that the file wasn't corrupted
- Ensure the file format matches current version

### Nodes Missing After Import

- Some nodes may not be available if plugins are missing
- Verify all required node plugins are installed
- Check for error messages in the console

### Tab Issues

- Tabs are automatically saved
- Tab state persists between sessions
- If tabs are lost, check browser/application storage
