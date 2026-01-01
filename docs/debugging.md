---
sidebar_position: 1
title: Debugging Guide
description: Troubleshoot common issues and debug problems in Streamline
---

# Debugging Guide

This guide helps you troubleshoot common issues and debug problems in Streamline.

## Common Issues

### Pipeline Execution Problems

#### Pipeline Not Running

**Symptoms:**
- Pipeline doesn't start when you click Run
- No error messages appear
- Status shows "Not Running"

**Solutions:**
1. **Check License**: Ensure you have a valid license (Settings → License)
2. **Check FFMPEG**: Verify FFMPEG is installed and accessible (Settings → Info)
3. **Check Logs**: Review the log viewer for error messages
4. **Check Connections**: Ensure nodes are properly connected
5. **Check Input Files**: Verify input file paths are correct

#### Pipeline Fails with Errors

**Symptoms:**
- Pipeline starts but fails immediately
- Error messages in logs
- Status shows "Error"

**Solutions:**
1. **Review Logs**: Check the log viewer for specific error messages
2. **Check FFMPEG Log Level**: Increase log level to see more details (Settings → Logs)
3. **Verify File Paths**: Ensure all file paths are correct and accessible
4. **Check File Permissions**: Verify you have read/write permissions
5. **Check Node Parameters**: Verify all required parameters are set

#### Pipeline Runs But Produces No Output

**Symptoms:**
- Pipeline completes successfully
- No output file is created
- Status shows "Success" but no file

**Solutions:**
1. **Check Output Path**: Verify output file path is correct
2. **Check Working Directory**: Ensure working directory is set correctly (Settings → Output)
3. **Check File Overwrite**: If file exists, check overwrite settings (Settings → File)
4. **Check File Permissions**: Verify write permissions in output directory
5. **Check Disk Space**: Ensure sufficient disk space is available

### Node Issues

#### Node Not Appearing

**Symptoms:**
- Node doesn't show in sidebar
- Node can't be dragged onto canvas
- Node category is missing

**Solutions:**
1. **Check Node Definition**: Verify node definition file exists
2. **Check Console**: Look for JavaScript errors in browser console
3. **Refresh Application**: Restart the application
4. **Check Custom Nodes**: Verify custom nodes directory is correct (Settings → Plugins)

#### Node Parameters Not Working

**Symptoms:**
- Parameter changes don't affect output
- Parameters are grayed out
- Parameters show incorrect values

**Solutions:**
1. **Check Node Connections**: Ensure nodes are properly connected
2. **Check Parameter Types**: Verify parameter types match expected values
3. **Check Template Variables**: Verify template variable syntax is correct
4. **Check Data Store**: Ensure required data store values are set

#### Node Preview Not Updating

**Symptoms:**
- Preview image doesn't change
- Preview shows old results
- Preview is missing

**Solutions:**
1. **Regenerate Preview**: Run the pipeline to generate new previews
2. **Check Preview Settings**: Verify preview settings (Settings → File)
3. **Clear Previews**: Clear preview cache if needed
4. **Check Node Output**: Verify node is producing output

### File Path Issues

#### Files Not Found

**Symptoms:**
- Error: "File not found"
- Pipeline can't locate input files
- Relative paths not working

**Solutions:**
1. **Use Absolute Paths**: Use full system paths instead of relative paths
2. **Check Working Directory**: Verify working directory is set correctly
3. **Check File Exists**: Verify files exist at specified paths
4. **Check Path Format**: Use correct path separators for your OS

#### Path Resolution Problems

**Symptoms:**
- Template variables not resolving
- Paths show as placeholders
- File paths are incorrect

**Solutions:**
1. **Check Template Syntax**: Verify `{{variable}}` syntax is correct
2. **Check Data Store**: Ensure variables are set in data store
3. **Check Variable Names**: Verify variable names match exactly
4. **Check File Data**: Ensure file metadata is loaded

## Debugging Tools

### Log Viewer

The log viewer displays execution logs and error messages.

**Access:**
- Click the log viewer icon in the toolbar
- Or use the log viewer panel

**Features:**
- Real-time log updates
- Filter by log level
- Search functionality
- Copy logs to clipboard

### FFMPEG Log Level

Control FFMPEG verbosity to see more or less detail.

**Settings:**
- Settings → Logs → FFMPEG Log Level

**Levels:**
- **quiet**: No output
- **error**: Errors only (recommended)
- **warning**: Warnings and errors
- **info**: Informative messages
- **debug**: Debugging information
- **trace**: Maximum verbosity

### Debug Information

Access debug information in Settings → Info.

**Information Available:**
- Application version
- FFMPEG version and path
- System information
- Debug logs

### Console Logs

Browser/Electron console provides detailed debugging information.

**Access:**
- **Electron**: View → Toggle Developer Tools
- **Browser**: F12 or Right-click → Inspect

**What to Look For:**
- JavaScript errors
- Network errors
- FFMPEG execution logs
- Node processing errors

## Debugging Workflow

### Step 1: Reproduce the Issue

1. Note the exact steps that cause the problem
2. Document what you expect vs. what happens
3. Check if the issue is consistent or intermittent

### Step 2: Check Logs

1. Open the log viewer
2. Review error messages
3. Increase log level if needed (Settings → Logs)
4. Look for specific error codes or messages

### Step 3: Verify Configuration

1. Check all node parameters
2. Verify file paths are correct
3. Ensure working directory is set
4. Check license status

### Step 4: Isolate the Problem

1. Create a minimal test case
2. Remove nodes one by one to isolate the issue
3. Test with simple inputs
4. Verify FFMPEG works independently

### Step 5: Check System Requirements

1. Verify FFMPEG is installed and accessible
2. Check system permissions
3. Verify disk space is available
4. Check network connectivity (if using remote resources)

### Step 6: Review Documentation

1. Check node documentation for requirements
2. Review FFMPEG documentation for specific filters
3. Check known issues or limitations
4. Review template variable syntax

## Advanced Debugging

### FFMPEG Command Inspection

View the actual FFMPEG commands being executed:

1. Increase log level to "debug" or "trace"
2. Run the pipeline
3. Review logs for FFMPEG command strings
4. Test commands manually in terminal

### Node Data Inspection

Inspect node data and parameters:

1. Open browser console (F12)
2. Use `nodeDataService.getAllNodeData()` to see all node data
3. Check data store values
4. Verify template variable resolution

### Preview Debugging

Debug preview generation:

1. Check preview settings (Settings → File)
2. Verify preview directory exists
3. Check preview file permissions
4. Clear preview cache if needed

## Getting Help

### Information to Provide

When seeking help, provide:

1. **Error Messages**: Exact error text from logs
2. **Steps to Reproduce**: Detailed steps that cause the issue
3. **System Information**: OS, FFMPEG version (Settings → Info)
4. **Configuration**: Relevant node parameters and settings
5. **Logs**: Relevant log entries (copy from log viewer)
6. **Screenshots**: Visual representation of the issue

### Reporting Issues

1. **Check Existing Issues**: Search for similar problems
2. **Create Detailed Report**: Include all information above
3. **Provide Minimal Example**: Create simplest case that reproduces issue
4. **Test Workarounds**: Document any workarounds you've found

## Prevention

### Best Practices

1. **Save Regularly**: Export layouts before major changes
2. **Test Incrementally**: Test pipelines as you build them
3. **Use Absolute Paths**: Avoid relative path issues
4. **Check Logs Regularly**: Monitor logs during development
5. **Validate Inputs**: Verify input files before processing
6. **Keep FFMPEG Updated**: Use current FFMPEG versions
7. **Document Pipelines**: Add comments to explain complex setups

### Common Mistakes to Avoid

1. **Relative Paths**: Use absolute paths for reliability
2. **Missing Parameters**: Ensure all required parameters are set
3. **Incorrect Types**: Verify parameter types match requirements
4. **Template Variable Errors**: Check syntax and variable names
5. **File Permissions**: Ensure read/write permissions
6. **Overwrite Settings**: Check file overwrite behavior

## Tips

- Use error log level for normal operation
- Increase log level only when debugging
- Keep logs for reference when reporting issues
- Test with simple cases before complex pipelines
- Verify FFMPEG installation regularly
- Check system requirements before processing large files
