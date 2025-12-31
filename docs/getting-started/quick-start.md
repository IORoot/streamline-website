# Quick Start Guide

This guide will walk you through creating your first video processing pipeline in STREAMLINE.

## Creating Your First Pipeline

### Step 1: Open STREAMLINE

Launch STREAMLINE and click "Create New Pipeline" from the welcome screen.

### Step 2: Add an Input Node

1. Click the "+" button or right-click on the canvas
2. Select "Input & Output" category
3. Choose "File Input" node
4. Click on the canvas to place it

### Step 3: Configure the Input

1. Click on the File Input node
2. In the inspector panel, click "Browse" to select a video file
3. Your video file is now loaded

### Step 4: Add a Processing Node

1. Add a "Scale" node from the "Size & Position" category
2. Connect the output of the File Input node to the input of the Scale node
3. Configure the Scale node to set your desired resolution (e.g., 1920x1080)

### Step 5: Add an Output Node

1. Add a "File Output" node from the "Input & Output" category
2. Connect the output of the Scale node to the input of the File Output node
3. Configure the output path and filename

### Step 6: Preview

1. Click the "Preview" button to see a preview of your pipeline
2. Adjust any parameters as needed
3. The preview updates in real-time

### Step 7: Execute

1. Click the "Execute" button to process your video
2. Monitor the progress in the execution panel
3. Your processed video will be saved to the specified output path

## Example Pipeline

Here's a simple example pipeline structure:

```
File Input → Scale → File Output
```

This pipeline:
1. Loads a video file
2. Scales it to a specific resolution
3. Saves the result

## Next Steps

- Learn about the [Node Library](/docs/user-guide/node-library)
- Explore [Creating Complex Pipelines](/docs/user-guide/creating-pipelines)
- Read about [Preview System](/docs/user-guide/preview-system)
