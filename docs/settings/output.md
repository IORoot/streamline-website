---
sidebar_position: 7
title: Output Settings
description: Configure working directories, file paths, and audio output devices
---

# Output Settings

The Output settings tab allows you to configure working directories, file paths, and audio output devices.

## Video Settings

### Working Directory

Set the directory where input/output files are located and where pipelines will execute.

#### Setting the Working Directory

**Method 1: Manual Entry**
1. Type the full path directly into the text field
2. Press Enter or click outside the field to save

**Method 2: Folder Selection**
1. Click the folder icon button
2. Select a directory from the file browser
3. The full path will be automatically filled in

#### Working Directory Behavior

The working directory is used for:
- **Input files**: Relative paths in nodes are resolved from this directory
- **Output files**: Pipeline outputs are saved relative to this directory
- **Preview files**: Preview images are stored in `.streamline-temp` within this directory
- **Temporary files**: Temporary processing files are created here

#### Path Format

- **Absolute paths**: Use full system paths (e.g., `/Users/username/Videos` or `C:\Users\username\Videos`)
- **Relative paths**: Not recommended for working directory; use absolute paths for reliability

#### Current Working Directory

The current working directory is displayed below the input field for reference.

## Audio Settings

### Audio Output Device

Select the audio output device for application audio playback.

#### Selecting an Audio Device

1. Open the Output settings tab
2. Wait for audio devices to load (may take a moment)
3. Select your desired device from the dropdown menu
4. The selection is saved automatically

#### Available Devices

The dropdown includes:
- **Default**: System default audio output
- **System Devices**: All available audio output devices detected by your system

#### Device Labels

Device labels are provided by your operating system. If labels are empty:
- Grant microphone/media device permissions when prompted
- Labels may be unavailable if permissions are denied
- The device will still work, but may show as "Device [ID]"

#### Applying Changes

- Changes apply to new audio playback immediately
- Existing audio elements may need to be refreshed or restarted
- Refresh the page or restart playback for existing audio elements to use the new device

## Best Practices

### Working Directory

- **Use dedicated folders**: Create separate folders for different projects
- **Use absolute paths**: Always use full system paths for reliability
- **Organize files**: Keep input and output files organized within the working directory
- **Backup important files**: The working directory may contain temporary files that can be cleared

### Audio Output

- **Select before playback**: Choose your audio device before starting audio playback
- **Test devices**: Test different devices to find the best one for your setup
- **System permissions**: Ensure your system allows access to audio devices

## Troubleshooting

### Working Directory Issues

**Path not found:**
- Verify the path exists
- Check for typos in the path
- Ensure you have read/write permissions

**Files not found:**
- Check that input files are in the working directory or use absolute paths
- Verify file names match exactly (case-sensitive on some systems)

**Permission errors:**
- Ensure you have write permissions in the working directory
- Check folder permissions on your system

### Audio Device Issues

**No devices listed:**
- Grant media device permissions when prompted
- Check system audio settings
- Restart the application

**Device not working:**
- Verify the device is connected and powered on
- Check system audio settings
- Try selecting a different device

**Audio not playing:**
- Ensure an audio device is selected
- Check system volume settings
- Verify audio files are valid and accessible
