---
sidebar_position: 2
title: Running Pipelines
description: Learn how to execute pipelines and monitor their progress
---

# Running Pipelines

This guide covers how to execute your video processing pipelines and monitor their progress.

## Starting a Pipeline

### Execution Methods

1. **Run Button**: Click the "Run" button in the toolbar
2. **Keyboard Shortcut**: `Ctrl/Cmd + R` (if available)
3. **Context Menu**: Right-click on canvas → "Run Pipeline"

### Before Running

Ensure your pipeline is complete:
- All required inputs are connected
- Output nodes are configured
- File paths are valid
- Parameters are set correctly

## Execution Status

### Status Indicators

- **Idle**: Pipeline is ready to run
- **Running**: Pipeline is currently executing
- **Success**: Pipeline completed successfully
- **Error**: Pipeline encountered an error
- **Cancelled**: Pipeline execution was cancelled

### Progress Tracking

During execution, you can monitor:
- **Current Step**: Which operation is being performed
- **Progress**: Percentage complete (if available)
- **Logs**: Real-time execution logs
- **Output Files**: Generated output files

## Execution Logs

### Viewing Logs

- **Log Viewer**: Opens automatically during execution
- **Log Level**: Configure in Settings → Logs
- **Filter**: Filter logs by type (info, warning, error)

### Log Types

- **Info**: General information messages
- **Warning**: Non-critical issues
- **Error**: Execution errors
- **FFMPEG**: FFMPEG command output

## Pipeline Execution Flow

1. **Validation**: Pipeline is validated for errors
2. **JSON Generation**: Pipeline is converted to JSON configuration
3. **Execution**: FFMPEG commands are executed
4. **Monitoring**: Progress is tracked and reported
5. **Completion**: Results are displayed

## Multiple File Processing

When processing multiple files:

- Each file is processed sequentially
- Progress is tracked per file
- Output files are numbered automatically
- Errors in one file don't stop the batch

## Working Directory

The working directory affects:

- **Relative Paths**: File paths relative to working directory
- **Output Location**: Default output location
- **Temporary Files**: Where temporary files are stored

### Setting Working Directory

- Configure in tab settings
- Each tab can have its own working directory
- Default: User's home directory

## Execution Options

### Auto-Overwrite

- **Enabled**: Output files overwrite existing files
- **Disabled**: Output files are renamed with suffix (-1, -2, etc.)

### Execution Mode

- **Filter Graph**: Uses FFMPEG filter graphs (faster, more efficient)
- **Direct Execution**: Individual FFMPEG commands per node

## Cancelling Execution

- **Cancel Button**: Click during execution
- **Keyboard**: `Esc` (if available)
- **Graceful Shutdown**: Current operation completes before stopping

## Error Handling

### Common Errors

- **File Not Found**: Input file doesn't exist
- **Invalid Parameters**: Parameter values out of range
- **FFMPEG Errors**: FFMPEG command failures
- **Permission Errors**: File system permission issues

### Error Recovery

- Check error messages in logs
- Verify file paths and parameters
- Check file permissions
- Review FFMPEG command output

## Output Files

### File Naming

- **Single File**: Uses specified output filename
- **Multiple Files**: Auto-incrementing numbers (1_output.mp4, 2_output.mp4)
- **Template Variables**: Can use `&#123;&#123;auto_increment&#125;&#125;` for custom naming

### Output Location

- **Specified Folder**: Output node's configured folder
- **Working Directory**: Default location if not specified
- **Prevent Overwrite**: Automatic suffix if file exists

## Performance Tips

- Use filter graphs for better performance
- Process files in batches for efficiency
- Monitor system resources during execution
- Use proxy files for faster previews

## Debugging

### Execution Debugging

- **Enable Verbose Logging**: Set log level to "verbose" or "debug"
- **Check FFMPEG Commands**: Review generated commands
- **Test Individual Nodes**: Run nodes separately to isolate issues
- **Review Logs**: Check execution logs for detailed information

### Common Issues

- **Slow Execution**: Check system resources, use proxy files
- **Memory Issues**: Process smaller batches, reduce resolution
- **File Locking**: Ensure files aren't open in other applications
- **Path Issues**: Use absolute paths or verify working directory
