---
sidebar_position: 5
title: Info Settings
description: View application version, FFMPEG information, system details, and debugging tools
---

# Info Settings

The Info settings tab displays application version information, FFMPEG details, system information, and provides access to debugging tools.

## Application Version

View the current version of Streamline. This information is useful for:
- Reporting bugs
- Checking for updates
- Verifying installation

## FFMPEG Information

View detailed information about your FFMPEG installation.

### FFMPEG

Displays:
- **Version**: The installed FFMPEG version
- **Path**: The full path to the FFMPEG executable

Status indicators:
- **Green**: FFMPEG is properly installed and accessible
- **Red**: FFMPEG has issues (not found, permission denied, architecture mismatch, etc.)

### FFprobe

Displays:
- **Version**: The installed FFprobe version
- **Path**: The full path to the FFprobe executable

Status indicators:
- **Green**: FFprobe is properly installed and accessible
- **Red**: FFprobe has issues (not found, permission denied, architecture mismatch, etc.)

### Common Status Messages

- **Error**: An error occurred while checking FFMPEG
- **Timeout**: The check timed out
- **Permission Denied**: Insufficient permissions to execute FFMPEG
- **Not Found**: FFMPEG is not installed or not in PATH
- **Code Signing Required**: macOS code signing issue
- **Not Executable**: File is not executable
- **Architecture Mismatch**: Architecture mismatch (e.g., trying to run ARM binary on x86)

## System Information

View system-level information about your environment:

- **Platform**: Your operating system (Windows, macOS, Linux)
- **Environment**: Whether you're running in Development or Production mode

## Interactive Tutorial

Restart the interactive step-by-step tutorial:

1. Click the "Restart Tutorial" button
2. The tutorial will begin from the first step
3. Follow the on-screen instructions to learn Streamline

The tutorial covers:
- Basic navigation
- Creating pipelines
- Using nodes
- Running pipelines
- Preview features

## Debug Information

Access debug logs for troubleshooting:

### Show/Hide Debug Logs

Toggle the display of debug logs:
1. Click the "Show Debug Logs" button to display logs
2. Click "Hide Debug Logs" to hide them

### Debug Log Contents

Debug logs include:
- **Elapsed Time**: Time since application start
- **Step**: The operation or step being logged
- **Message**: The log message
- **Data**: Additional data (if available) in JSON format

### Using Debug Logs

Debug logs are useful for:
- Troubleshooting issues
- Understanding application flow
- Reporting bugs with detailed information
- Development and testing

**Note**: Debug logs are only available in development mode or when explicitly enabled.

## Troubleshooting

### FFMPEG Not Found

If FFMPEG shows as "Not Found":
1. Ensure FFMPEG is installed on your system
2. Verify FFMPEG is in your system PATH
3. Check the path displayed in the Info tab
4. Reinstall FFMPEG if necessary

### Architecture Mismatch

If you see "Architecture Mismatch":
- Ensure you're using the correct FFMPEG binary for your system architecture
- On macOS with Apple Silicon, use ARM64 binaries
- On macOS with Intel, use x86_64 binaries

### Permission Denied

If you see "Permission Denied":
- Check file permissions on the FFMPEG executable
- On macOS/Linux, you may need to use `chmod +x` to make it executable
- Ensure you have the necessary system permissions
