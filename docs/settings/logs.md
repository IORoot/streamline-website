---
sidebar_position: 3
title: Logs Settings
description: Control FFMPEG log level and verbosity during pipeline execution
---

# Logs Settings

The Logs settings tab controls the verbosity of FFMPEG output during pipeline execution.

## FFMPEG Log Level

Control how much information FFMPEG displays during pipeline execution. This setting applies globally to all nodes in your pipeline.

### Available Log Levels

#### quiet
- **Output**: Nothing
- **Use Case**: Suppresses all output. Use only when you're confident in your pipeline.

#### panic
- **Output**: Only fatal errors that stop execution
- **Use Case**: Minimal output for critical errors only

#### fatal
- **Output**: Fatal errors that stop execution
- **Use Case**: Critical errors only

#### error (Recommended)
- **Output**: Errors without overwhelming detail
- **Use Case**: Best for most users. Shows errors without cluttering the output.

#### warning
- **Output**: Errors and potential issues that don't stop execution
- **Use Case**: Includes warnings about potential problems

#### info
- **Output**: Detailed progress information
- **Use Case**: Useful for understanding what's happening during execution

#### verbose
- **Output**: Very detailed information
- **Use Case**: Shows extensive progress and operation details

#### debug
- **Output**: All internal FFMPEG operations
- **Use Case**: Use when troubleshooting issues

#### trace
- **Output**: Everything, including all internal operations
- **Use Case**: Maximum verbosity for deep troubleshooting

## Selecting a Log Level

1. Open the Settings modal
2. Navigate to the Logs tab
3. Select your desired log level from the dropdown
4. The setting is saved automatically and applies to all future pipeline executions

## Recommendations

- **For most users**: Use `error` level - it shows important errors without overwhelming detail
- **For troubleshooting**: Use `warning` or `info` to see more context
- **For deep debugging**: Use `debug` or `trace` to see all internal operations
- **For production**: Use `quiet` or `error` to minimize output

## Log Level Impact

The log level affects:
- Console output during pipeline execution
- Log viewer content
- Error reporting and debugging information
- Performance (higher verbosity may slightly impact performance)

**Note**: The log level setting is global and applies to all nodes in all pipelines. Individual nodes cannot override this setting.
