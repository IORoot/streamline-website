---
sidebar_position: 3
title: Workflow Execution
description: Learn how pipelines are executed from node configuration to FFMPEG command execution
---

# Workflow Execution

This document explains how pipelines are executed in Streamline, from node configuration to FFMPEG command execution.

## Execution Overview

### Execution Flow

```
User Clicks Run
    ↓
Pipeline Validation
    ↓
JSON Generation
    ↓
Template Resolution
    ↓
FFMPEG Command Building
    ↓
Execution
    ↓
Status Updates
    ↓
Output Files
```

## Pipeline Validation

### Pre-Execution Checks

Before running a pipeline, Streamline validates:

1. **License Check**: Valid license required
2. **Node Connections**: Nodes must be properly connected
3. **Required Parameters**: All required parameters must be set
4. **File Existence**: Input files must exist (if specified)
5. **FFMPEG Availability**: FFMPEG must be installed and accessible

### Validation Process

```javascript
validatePipeline() {
  // Check license
  if (!licenseService.isValid()) {
    throw new Error('License required');
  }
  
  // Check nodes
  if (nodes.length === 0) {
    throw new Error('Pipeline is empty');
  }
  
  // Check connections
  validateConnections();
  
  // Check parameters
  validateParameters();
}
```

## JSON Generation

### Node to JSON Conversion

Nodes are converted to JSON configuration:

1. **Node Collection**: All nodes collected from canvas
2. **Connection Analysis**: Dependencies determined
3. **Topological Sort**: Execution order determined
4. **JSON Assembly**: JSON structure created

### JSON Structure

```json
{
  "steps": {
    "step1": {
      "type": "ff_input",
      "params": {
        "filefolder": "input.mp4"
      }
    },
    "step2": {
      "type": "ff_scale",
      "params": {
        "width": 1920,
        "height": 1080
      },
      "dependencies": ["step1"]
    }
  }
}
```

## Template Resolution

### Variable Resolution Process

Template variables are resolved before execution:

1. **Variable Detection**: `{{variable}}` patterns found
2. **Data Store Lookup**: Values retrieved from data store
3. **Mathematical Evaluation**: Expressions evaluated
4. **Replacement**: Variables replaced with values

### Resolution Order

1. **File Data**: File metadata variables
2. **System Values**: System date, time, etc.
3. **Random Values**: Random numbers, colors
4. **Node Parameters**: Other node parameters
5. **Custom Values**: User-defined custom values

### Example Resolution

```
Input: "output_{{date}}_{{random}}.mp4"
    ↓
Resolution:
  date → "2024-01-15"
  random → "12345"
    ↓
Output: "output_2024-01-15_12345.mp4"
```

## FFMPEG Command Building

### Command Assembly

FFMPEG commands are built from JSON configuration:

1. **Input Collection**: Input files identified
2. **Filter Graph**: Filter chain constructed
3. **Output Mapping**: Output files determined
4. **Command String**: Final command assembled

### Filter Graph Construction

```javascript
buildFilterGraph(steps) {
  // Topological sort
  const sorted = topologicalSort(steps);
  
  // Build filter chain
  let filterChain = [];
  sorted.forEach(step => {
    const filter = getFilterForStep(step);
    filterChain.push(filter);
  });
  
  // Connect filters
  return connectFilters(filterChain);
}
```

### Command Generation

```javascript
generateFFMPEGCommand(config) {
  let command = 'ffmpeg';
  
  // Global options
  command += ` -loglevel ${logLevel}`;
  
  // Input files
  config.inputs.forEach(input => {
    command += ` -i "${input.path}"`;
  });
  
  // Filter graph
  if (config.filterGraph) {
    command += ` -filter_complex "${config.filterGraph}"`;
  }
  
  // Output
  command += ` "${config.output}"`;
  
  return command;
}
```

## Execution

### Execution Methods

Streamline supports multiple execution methods:

#### Direct Execution

FFMPEG executed directly via Electron:

```javascript
const result = await electronAPI.executeFFMPEG(command);
```

#### API Execution

Optional API-based execution (if configured):

```javascript
const result = await fetch('/api/execute', {
  method: 'POST',
  body: JSON.stringify({ command })
});
```

### Execution Process

1. **Command Execution**: FFMPEG process started
2. **Output Capture**: stdout/stderr captured
3. **Progress Monitoring**: Progress tracked from output
4. **Status Updates**: Status updated in real-time
5. **Completion**: Process completion handled

### Status Updates

Execution status is updated throughout:

```javascript
{
  isRunning: true,
  currentStep: "step2",
  progress: 45,
  logs: ["[00:01] Processing step2..."]
}
```

## Error Handling

### Error Detection

Errors are detected from:

1. **Exit Codes**: Non-zero FFMPEG exit codes
2. **Error Messages**: Parsed from stderr
3. **Log Analysis**: Error patterns in logs
4. **Timeout**: Execution timeout detection

### Error Reporting

Errors are reported to:

1. **Log Viewer**: Detailed error messages
2. **Status Display**: Error status shown
3. **User Notification**: Alert dialogs
4. **Error Recovery**: Attempts to recover when possible

## Multi-Pipeline Execution

### Pipeline Detection

Multiple separate pipelines are detected:

1. **Connection Analysis**: Nodes grouped by connections
2. **Pipeline Identification**: Separate pipelines identified
3. **Execution Order**: Pipelines executed sequentially

### Execution Strategy

```javascript
executePipelines(pipelines) {
  for (let i = 0; i < pipelines.length; i++) {
    const pipeline = pipelines[i];
    await executePipeline(pipeline);
  }
}
```

## Progress Tracking

### Progress Calculation

Progress is calculated from:

1. **Step Count**: Total number of steps
2. **Current Step**: Currently executing step
3. **Step Progress**: Progress within current step
4. **Overall Progress**: Combined progress percentage

### Progress Updates

Progress updates are sent to UI:

```javascript
updateProgress(currentStep, totalSteps, stepProgress) {
  const overall = ((currentStep / totalSteps) * 100) + 
                  (stepProgress / totalSteps);
  updateStatus({ progress: overall });
}
```

## Log Management

### Log Collection

Logs are collected from:

1. **FFMPEG Output**: stdout and stderr
2. **Execution Events**: Pipeline execution events
3. **Error Messages**: Error and warning messages
4. **Status Updates**: Status change messages

### Log Storage

Logs are stored:

1. **In-Memory**: Current execution logs
2. **Per-Tab**: Logs stored per tab
3. **Persistence**: Logs saved to tab state
4. **Display**: Logs shown in log viewer

## Output Management

### File Naming

Output files are named:

1. **User Specified**: If user provides name
2. **Auto-Generated**: Based on input and step
3. **Conflict Resolution**: Auto-increment if exists
4. **Extension Handling**: Proper extensions added

### File Location

Output files are saved:

1. **Working Directory**: Relative to working directory
2. **Absolute Paths**: If absolute path specified
3. **Overwrite Handling**: Based on overwrite settings

## Best Practices

### Pipeline Design

1. **Keep It Simple**: Start with simple pipelines
2. **Test Incrementally**: Test as you build
3. **Validate Inputs**: Ensure input files are valid
4. **Check Outputs**: Verify output files

### Execution

1. **Monitor Logs**: Watch logs during execution
2. **Check Progress**: Monitor execution progress
3. **Handle Errors**: Address errors promptly
4. **Verify Results**: Check output files

### Performance

1. **Optimize Filter Graphs**: Minimize complexity
2. **Use Appropriate Settings**: Match settings to needs
3. **Batch Processing**: Process multiple files efficiently
4. **Resource Management**: Monitor system resources
