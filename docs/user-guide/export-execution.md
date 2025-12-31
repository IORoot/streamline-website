# Export & Execution

Once your pipeline is complete, you can export it for command-line execution or execute it directly from STREAMLINE.

## Executing Pipelines

### Direct Execution

1. Click the "Execute" button in the toolbar
2. Or press `Ctrl/Cmd + E`
3. The execution panel opens showing progress

### Execution Options

- **Output Path**: Choose where to save processed videos
- **Quality Settings**: Adjust encoding quality
- **Progress Tracking**: Monitor execution in real-time
- **Error Handling**: Automatic error recovery

### Execution Panel

The execution panel shows:
- **Progress Bar**: Overall completion percentage
- **Current Operation**: What's being processed
- **Log Output**: Detailed execution logs
- **Time Estimates**: Remaining time
- **Error Messages**: Any issues encountered

## Exporting Pipelines

### JSON Export

Export your pipeline as a JSON configuration file:

1. File → Export → JSON
2. Choose a save location
3. The JSON file contains all pipeline configuration

### Command-Line Execution

The exported JSON can be executed using the STREAMLINE CLI:

```bash
streamline execute pipeline.json --input video.mp4 --output result.mp4
```

### Pipeline Sharing

Exported JSON files can be:
- Shared with team members
- Version controlled
- Used in automated workflows
- Imported into other STREAMLINE instances

## Batch Processing

### Process Multiple Files

1. Use a Folder Input node
2. Configure output naming pattern
3. Execute the pipeline
4. All files in the folder are processed

### Template Pipelines

1. Create a pipeline template
2. Save it as a template
3. Apply to multiple files or folders
4. Execute in batch mode

## Execution Settings

### Performance Options

- **Thread Count**: Number of parallel processing threads
- **Memory Limit**: Maximum memory usage
- **Priority**: Process priority (low/normal/high)

### Output Options

- **Format**: Output video format
- **Codec**: Video codec selection
- **Quality**: Encoding quality preset
- **Metadata**: Include/exclude metadata

### Error Handling

- **Stop on Error**: Halt execution on first error
- **Continue on Error**: Skip errors and continue
- **Retry Failed**: Automatically retry failed operations
- **Error Log**: Save error log to file

## Monitoring Execution

### Real-Time Monitoring

- Watch progress in the execution panel
- View detailed logs
- Monitor system resources
- Check for warnings or errors

### Execution History

- View past executions
- Re-run previous executions
- Compare execution times
- Debug failed executions

## Best Practices

1. **Preview First**: Always preview before executing
2. **Test on Small Files**: Test pipelines on small files first
3. **Check Output Path**: Ensure output directory exists
4. **Monitor Resources**: Watch CPU and memory usage
5. **Save Pipelines**: Save before executing
6. **Export Templates**: Export reusable pipelines

## Troubleshooting

### Execution Fails

- Check error messages in the log
- Verify input files exist and are valid
- Ensure output path is writable
- Check system resources (disk space, memory)

### Slow Execution

- Reduce output quality settings
- Use proxy files for large videos
- Close other applications
- Check system performance

### Missing Output

- Verify output path is correct
- Check for error messages
- Ensure pipeline is complete
- Validate all node connections

## Next Steps

- Learn about [Pipeline Validation](/docs/advanced/pipeline-validation)
- Explore [Custom Nodes](/docs/advanced/custom-nodes)
- Read about [MCP Integration](/docs/advanced/mcp-integration)
