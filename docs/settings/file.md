---
sidebar_position: 1
title: File Settings
description: Configure file handling, preview management, and layout operations
---

# File Settings

The File settings tab allows you to configure file handling, preview management, and layout operations.

## File Overwrite

Control whether existing output files are automatically overwritten when running a pipeline.

- **Auto Overwrite ON**: Existing output files will be automatically overwritten without prompting
- **Auto Overwrite OFF**: The pipeline will prompt before overwriting existing files

Toggle this setting using the switch in the File settings tab.

## Preview Settings

Manage preview image storage and cleanup.

### Clear Previews on Startup

- **Enabled**: Preview images will be automatically deleted when the application starts
- **Disabled**: Preview images will persist between sessions

Preview images are stored in `.streamline-temp` within your working directory.

### Clear All Previews Now

Manually clear all preview images immediately by clicking the "Clear All Previews Now" button. This action:

- Removes all preview files from `.streamline-temp`
- Displays a confirmation message with the number of files cleared
- Cannot be undone

## Layout Management

Save and load your node layout configurations for reuse across sessions.

### Export Layout

Export your current canvas layout to a JSON file:

1. Click the "Export Layout" button
2. Choose a location and filename in the save dialog
3. The layout file contains all node positions, connections, and canvas state

### Import Layout

Load a previously saved layout:

1. Click the "Import Layout" button
2. Select a layout JSON file
3. The canvas will be restored to match the saved layout

**Note**: Importing a layout will replace your current canvas state. Make sure to save your current work if needed.
