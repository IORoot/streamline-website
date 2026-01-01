---
sidebar_position: 2
title: Output
description: Copy output file to specified location with custom filename
---

# Output Node

<img src="/img/node-icons/output.svg" alt="ff_output Icon" className="node-icon" />

The **Output** node is the final step in your pipeline. It copies the processed file to a specified output location with a custom filename, supporting batch processing with auto-incrementing filenames.

## Overview

The Output node takes the processed file from your pipeline and saves it to your desired location. It supports custom filenames, automatic numbering for batch processing, and optional overwrite protection to prevent accidental file loss.

## Inputs

### Required Inputs

- **input** (`file`): The input file to copy (usually from a previous node)
  - Connect this to the output socket of your final processing node
  - Must be a valid file path from a previous node

- **outputFolder** (`folder`): Destination folder for the output file
  - Click to browse and select the destination folder
  - The folder must exist and have write permissions

- **outputFilename** (`string`): Name for the output file
  - Include the file extension (e.g., "final.mp4", "processed.mov")
  - For multiple files, use `{{auto_increment}}` placeholder (e.g., "video_{{auto_increment}}.mp4")
  - Default: "output.mp4"

### Optional Inputs

- **preventOverwrite** (`boolean`): Prevent overwriting existing files
  - When enabled (default): Automatically adds suffix (-1, -2, etc.) to avoid overwriting
  - When disabled: Files will be overwritten if they already exist
  - Default: `true`

- **notes** (`textarea`): Optional notes about the output
  - Useful for documenting the output destination or purpose

## Outputs

The Output node has no outputs - it's the terminal node in your pipeline.

## FFMPEG Command

The Output node uses FFMPEG's stream copy for fast, lossless file copying:

```bash
ffmpeg -i "input_file.mp4" -c copy "output_folder/output.mp4"
```

For multiple files with auto-increment:

```bash
ffmpeg -i "input1.mp4" -c copy "output_folder/video_1.mp4"
ffmpeg -i "input2.mp4" -c copy "output_folder/video_2.mp4"
ffmpeg -i "input3.mp4" -c copy "output_folder/video_3.mp4"
```

When `preventOverwrite` is enabled and a file exists:

```bash
# If output.mp4 exists, saves as output-1.mp4
ffmpeg -i "input.mp4" -c copy "output_folder/output-1.mp4"
```

## Usage Summary

### Basic Usage

1. **Add an Output Node**: Drag the Output node from the sidebar onto your canvas
2. **Connect Input**: Connect the output socket from your final processing node to the Output node's input
3. **Select Destination**: Click to browse and select the output folder
4. **Set Filename**: Enter the desired output filename (include extension)
5. **Run Pipeline**: Execute your pipeline to save the processed file

### Multiple Files & Auto-Increment

When processing multiple files, use these patterns:

- **With Placeholder**: `my_file_{{auto_increment}}.mp4`
  - Results in: `my_file_1.mp4`, `my_file_2.mp4`, `my_file_3.mp4`, etc.
  
- **Without Placeholder**: `output.mp4`
  - Results in: `1_output.mp4`, `2_output.mp4`, `3_output.mp4`, etc.

### Overwrite Protection

When `preventOverwrite` is enabled (default):

- If `output.mp4` exists, saves as `output-1.mp4`
- If `output-1.mp4` also exists, saves as `output-2.mp4`
- Continues incrementing until a unique filename is found

When `preventOverwrite` is disabled:

- Files will be overwritten if they already exist
- Use with caution to avoid data loss

### Common Use Cases

- **Save Final Processed Video**: Save your completed video to a specific folder
- **Batch Export**: Export multiple files with sequential numbering
- **Archive Processed Files**: Save processed files to a different location
- **Network/Cloud Export**: Export files to a network drive or cloud folder
- **Multiple Outputs**: Use multiple Output nodes to save to different locations

### Tips

- File extension is optional - it will be added automatically from the input if missing
- Make sure the output folder exists and has write permissions
- Use `{{auto_increment}}` for cleaner batch file naming
- You can use multiple Output nodes to save the same file to different locations
- Enable `preventOverwrite` to safely save files without worrying about overwriting existing ones
- The Output node uses stream copy (`-c copy`) for fast, lossless copying - no re-encoding occurs

## Example Workflow

```
Input Node (folder: "raw_videos/")
    ↓
Scale Video (1920x1080)
    ↓
Color Correct
    ↓
Output Node (folder: "processed/", filename: "final_{{auto_increment}}.mp4")
```

This workflow:
1. Processes all files from "raw_videos/"
2. Scales each to 1920x1080
3. Applies color correction
4. Saves each as `final_1.mp4`, `final_2.mp4`, etc. in the "processed/" folder
