---
sidebar_position: 3
title: System
description: Built-in system values (date, time, platform, etc.)
---

# System Values

System values provide built-in information about the current system state, including date/time, platform information, and application details.

## Overview

System values are automatically available and update in real-time. They provide access to system information without requiring manual configuration.

## Available System Values

### Date and Time

- **`DATETIME`** - Current date and time in ISO format
  - Example: `2024-01-15T14:30:45.123Z`

- **`DATETIME_LOCAL`** - Current date and time in local format
  - Example: `1/15/2024, 2:30:45 PM`

- **`DATE`** - Current date (YYYY-MM-DD)
  - Example: `2024-01-15`

- **`TIME`** - Current time (HH:MM:SS)
  - Example: `14:30:45`

- **`YEAR`** - Current year (4 digits)
  - Example: `2024`

- **`MONTH`** - Current month (1-12)
  - Example: `1`

- **`DAY`** - Current day of month (1-31)
  - Example: `15`

- **`HOUR`** - Current hour (0-23)
  - Example: `14`

- **`MINUTE`** - Current minute (0-59)
  - Example: `30`

- **`SECOND`** - Current second (0-59)
  - Example: `45`

### Platform Information

- **`PLATFORM`** - Operating system platform
  - Values: `darwin`, `win32`, `linux`

- **`ARCH`** - System architecture
  - Values: `x64`, `arm64`, etc.

### Application Information

- **`APP_VERSION`** - Application version number
- **`APP_NAME`** - Application name

## Usage Examples

### Timestamped Outputs

```
output_{{DATE}}_{{TIME}}.mp4
```

Results in: `output_2024-01-15_14-30-45.mp4`

### Date-Based Organization

```
{{YEAR}}/{{MONTH}}/{{DAY}}/video.mp4
```

### Platform-Specific Paths

```
{{PLATFORM === 'win32' ? 'C:\\Videos' : '/Users/Videos'}}
```

### Version Tagging

```
processed_v{{APP_VERSION}}_{{DATETIME}}.mp4
```

## Notes

- System values update in real-time
- Date/time values reflect the current moment when the template is evaluated
- Platform values are constant for the current system
- All system values are read-only (cannot be modified)
