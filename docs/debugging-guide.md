# Debugging Guide

This guide helps you troubleshoot issues, understand error messages, and debug pipeline problems in STREAMLINE.

## Common Issues

### Pipeline Won't Execute

**Symptoms:**
- Run button is disabled
- Validation errors shown
- Execution fails immediately

**Solutions:**
1. **Check Validation**: Review validation errors in modal
2. **Verify Connections**: Ensure all required inputs are connected
3. **Check Parameters**: Verify all required parameters are set
4. **Review Logs**: Check execution logs for details

### Preview Not Working

**Symptoms:**
- Preview shows black screen
- Preview doesn't update
- Preview errors displayed

**Solutions:**
1. **Check Input File**: Verify input file is valid
2. **Verify Node Connections**: Ensure pipeline is connected correctly
3. **Check Preview Settings**: Review preview quality settings
4. **Restart Preview**: Close and reopen preview modal

### Nodes Not Appearing

**Symptoms:**
- Node doesn't appear after adding
- Node appears but is invisible
- Node is in wrong position

**Solutions:**
1. **Check Canvas Zoom**: Zoom out to see all nodes
2. **Use Auto-Layout**: Auto-arrange nodes
3. **Fit to View**: Double-click canvas to fit all nodes
4. **Check Node Visibility**: Verify node isn't minimized

## Error Messages

### Validation Errors

**Missing Connection:**
```
Error: Required input 'video' is not connected
```
**Solution:** Connect the required input to a node output

**Invalid Parameter:**
```
Error: Parameter 'width' must be a number
```
**Solution:** Check parameter value is correct type

**Circular Dependency:**
```
Error: Circular dependency detected
```
**Solution:** Remove circular node connections

### Execution Errors

**File Not Found:**
```
Error: Input file not found: /path/to/file.mp4
```
**Solution:** Verify file path is correct and file exists

**FFMPEG Error:**
```
Error: FFMPEG execution failed
```
**Solution:** Check FFMPEG logs for detailed error

**Output Error:**
```
Error: Cannot write to output path
```
**Solution:** Check output directory exists and is writable

## Debugging Tools

### Log Viewer

Access detailed logs:

1. Open Settings → **Logs** tab
2. View FFMPEG log level
3. Check debug logs
4. Review execution history

### Debug Logs

View comprehensive debug information:

1. Settings → **Info** tab
2. Toggle **Show Debug Logs**
3. Browse recent debug output
4. Look for error patterns

### Preview System

Use preview to debug:

1. **Node-by-Node**: Preview each node individually
2. **Before/After**: Compare before and after nodes
3. **Isolate Issues**: Find problematic nodes
4. **Visual Inspection**: Check visual output

## Debugging Workflow

### Step 1: Identify the Problem

1. **Read Error Messages**: Understand what went wrong
2. **Check Validation**: Review validation errors
3. **Review Logs**: Check execution logs
4. **Test Components**: Test individual nodes

### Step 2: Isolate the Issue

1. **Simplify Pipeline**: Remove unnecessary nodes
2. **Test Individually**: Test each node separately
3. **Check Connections**: Verify node connections
4. **Review Parameters**: Verify parameter values

### Step 3: Fix the Issue

1. **Correct Parameters**: Fix invalid parameters
2. **Fix Connections**: Correct node connections
3. **Update Files**: Fix file paths
4. **Adjust Settings**: Change problematic settings

### Step 4: Verify the Fix

1. **Re-validate**: Check validation passes
2. **Test Preview**: Verify preview works
3. **Test Execution**: Run pipeline
4. **Check Output**: Verify output is correct

## Log Analysis

### Understanding Logs

**FFMPEG Logs:**
- Command execution details
- Filter graph construction
- Process information
- Error messages

**Application Logs:**
- Node operations
- Connection changes
- Preview generation
- System events

### Log Levels

**Error Level (Default):**
- Shows errors only
- Minimal output
- Good for normal operation

**Warning Level:**
- Shows warnings and errors
- More detailed
- Useful for troubleshooting

**Debug Level:**
- Very detailed output
- All operations logged
- Use for deep debugging

## Common Debugging Scenarios

### Pipeline Validation Fails

**Check:**
1. All required inputs connected
2. All required parameters set
3. No circular dependencies
4. File paths are valid

**Debug:**
1. Review validation error messages
2. Check each node individually
3. Verify connections are correct
4. Test with minimal pipeline

### Execution Fails

**Check:**
1. Input files exist
2. Output path is writable
3. FFMPEG is installed
4. System resources available

**Debug:**
1. Review FFMPEG logs
2. Check file permissions
3. Verify disk space
4. Test FFMPEG directly

### Preview Issues

**Check:**
1. Input file is valid video
2. Nodes are connected
3. Preview is enabled
4. Preview settings correct

**Debug:**
1. Test preview on input node
2. Preview each node individually
3. Check preview generation logs
4. Verify preview cache

## Advanced Debugging

### FFMPEG Command Inspection

View generated FFMPEG commands:

1. Export pipeline as JSON
2. Review filter graph structure
3. Test FFMPEG command manually
4. Compare with expected command

### Node Parameter Inspection

Check node parameters:

1. Open Data Store → **Nodes** tab
2. View all node parameters
3. Verify parameter values
4. Check template variable resolution

### Filter Graph Analysis

Understand filter graph:

1. Review JSON export
2. Analyze filter chain
3. Check filter compatibility
4. Verify filter order

## Performance Debugging

### Slow Execution

**Check:**
1. File sizes (larger = slower)
2. System resources (CPU, RAM)
3. FFMPEG settings
4. Other applications running

**Debug:**
1. Monitor system resources
2. Check FFMPEG logs for bottlenecks
3. Test with smaller files
4. Review filter complexity

### Preview Performance

**Check:**
1. Preview quality settings
2. Preview update frequency
3. Number of nodes
4. System performance

**Debug:**
1. Lower preview quality
2. Disable auto-update
3. Preview fewer nodes
4. Check system resources

## Getting Help

### Information to Provide

When seeking help, include:
- **Error Messages**: Complete error text
- **Logs**: Relevant log excerpts
- **Pipeline**: JSON export of pipeline
- **System Info**: OS, version, FFMPEG version
- **Steps to Reproduce**: How to trigger the issue

### Support Channels

- **GitHub Issues**: Report bugs and issues
- **Documentation**: Check this guide and other docs
- **Community**: Ask in community forums
- **Feedback**: Use feedback system in app

## Best Practices

1. **Start Simple**: Build pipelines incrementally
2. **Test Frequently**: Test as you build
3. **Use Preview**: Preview before execution
4. **Check Logs**: Review logs regularly
5. **Save Often**: Save pipelines before major changes

## Next Steps

- Learn about [Running Pipelines](/docs/user-guide/running-pipelines) - Execution details
- Explore [Technical Details](/docs/technical-details/workflow-execution) - How execution works
- Understand [Pipeline Validation](/docs/advanced/pipeline-validation) - Validation system
