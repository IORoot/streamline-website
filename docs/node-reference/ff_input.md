---
sidebar_position: 1
title: Input
description: Define input file(s) or folder for pipeline
---

# Input Node

<img src="/img/node-icons/input.svg" alt="ff_input Icon" className="node-icon" />

![Input Node](/img/node-screenshots/ff_input.png)

The **Input** node is the starting point of any pipeline. It defines the source file(s) or folder that will be processed through your video editing workflow.

## Overview

The Input node allows you to specify one or more input files, or an entire folder, that will be used as the source material for your pipeline. All selected files are automatically copied to a temporary processing folder, making them available for subsequent nodes in your pipeline.

## Inputs

### Required Inputs

- **filefolder** (`filefolder`): Input file(s), multiple files, or folder
  - You can drag and drop files or folders directly into the node
  - Supports single files, multiple file selection, or entire folders
  - All files are copied to the temporary processing folder

### Optional Inputs

- **notes** (`textarea`): Optional notes about the input
  - Useful for documenting the purpose or source of the input
  - Helps organize complex pipelines with multiple inputs

## Outputs

- **output** (`file`): The input file(s) ready for processing
  - Can be connected to any node that accepts file inputs
  - For multiple files, each file is processed separately through the pipeline

## FFMPEG Command

Input nodes don't generate FFMPEG filter commands directly. Instead, they define the source files that will be used as input arguments in the final FFMPEG command:

```bash
ffmpeg -i "input_file.mp4" [filter_complex] [output_options] output.mp4
```

For multiple files or folders, FFMPEG processes each file individually:

```bash
# For each file in the folder:
ffmpeg -i "file1.mp4" [filters] output1.mp4
ffmpeg -i "file2.mp4" [filters] output2.mp4
# ... and so on
```

## Usage Summary

### Basic Usage

1. **Add an Input Node**: Drag the Input node from the sidebar onto your canvas
2. **Select Files**: Click the node to open the file browser, or drag and drop files/folders directly
3. **Connect to Pipeline**: Connect the output socket to the next node in your pipeline
4. **View File List**: The node displays all files that will be processed

### Input Methods

- **Drag & Drop**: Drop one or more files, or a folder directly into the drop zone
- **Browse**: Click the button to open a file/folder browser dialog
- **File Listing**: View all included files in the file list below the drop zone

### Multiple Files Processing

When you select multiple files or a folder:

- Each file is processed independently through the pipeline
- Files maintain their original names (unless renamed by subsequent nodes)
- Use with the **Grep Filter** node to filter specific files by pattern
- Output nodes can use `&#123;&#123;auto_increment&#125;&#125;` for sequential numbering

### Common Use Cases

- **Single File Processing**: Process one video or image file
- **Batch Processing**: Process multiple files at once with the same pipeline
- **Folder Processing**: Process all files in a folder automatically
- **Multiple Input Sources**: Use multiple Input nodes to organize different source materials

### Tips

- Input nodes support video files, image files, and audio files
- Folders are recursively scanned for all supported media files
- Files are copied to a temporary folder, so original files are never modified
- Use notes to document the purpose of each input in complex pipelines
- Combine with the **Grep Filter** node to process only specific file types or patterns

## Example Workflow

```
Input Node (folder: "raw_videos/")
    ↓
Grep Filter (pattern: "*.mp4")
    ↓
Scale Video (1920x1080)
    ↓
Color Correct
    ↓
Output Node (destination: "processed/")
```

This workflow:
1. Selects all files from the "raw_videos/" folder
2. Filters to only MP4 files
3. Scales them to 1920x1080
4. Applies color correction
5. Saves processed files to the "processed/" folder
