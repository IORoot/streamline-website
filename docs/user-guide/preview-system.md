# Preview System

STREAMLINE's real-time preview system lets you see your changes instantly as you build and modify pipelines.

## How Preview Works

The preview system generates preview images showing how your video will look after processing. As you adjust parameters or connect nodes, previews update automatically to reflect your changes.

## Enabling Preview

1. Click the "Preview" button in the toolbar
2. Or press `P` to toggle preview mode
3. The preview panel opens showing your pipeline output

## Preview Modes

### Single Frame Preview
- Shows a single frame from your video
- Default frame is usually the first frame or middle frame
- Use the timeline scrubber to view different frames

### Timeline Preview
- Scrub through your video timeline
- See how effects change over time
- Useful for animations and transitions

### Multi-Node Preview
- Preview individual nodes in your pipeline
- See how each transformation affects the video
- Helps debug complex pipelines

## Preview Settings

### Frame Selection
- **First Frame**: Preview the first frame
- **Middle Frame**: Preview the middle frame
- **Custom Frame**: Select a specific frame number
- **Time Position**: Preview at a specific time

### Quality Settings
- **Low Quality**: Faster preview, lower resolution
- **Medium Quality**: Balanced speed and quality
- **High Quality**: Slower preview, full resolution

### Update Frequency
- **Auto**: Updates automatically when changes are made
- **Manual**: Update only when you click "Refresh"
- **On Change**: Updates when you finish editing a parameter

## Using Preview Effectively

### Iterative Workflow
1. Add a node to your pipeline
2. Configure its parameters
3. Check the preview
4. Adjust parameters based on preview
5. Repeat for each node

### Debugging Pipelines
- If preview looks wrong, check each node individually
- Use multi-node preview to isolate issues
- Compare previews before and after problematic nodes

### Performance Tips
- Use low-quality preview for faster iteration
- Switch to high quality for final checks
- Disable preview when not needed to save resources

## Preview Limitations

- Previews are generated from a single frame or short segment
- Complex effects may take longer to preview
- Some nodes may not support preview
- Preview quality may differ slightly from final output

## Next Steps

- Learn about [Creating Pipelines](/docs/user-guide/creating-pipelines)
- Explore [Export and Execution](/docs/user-guide/export-execution)
- Read about [Pipeline Validation](/docs/advanced/pipeline-validation)
