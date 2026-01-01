---
sidebar_position: 6
title: Custom
description: User-defined key-value pairs that persist across sessions
---

# Custom Values

Custom values allow you to define your own key-value pairs that persist across application sessions. These are stored in localStorage and can be used throughout your pipelines.

## Overview

Custom values provide a way to store user-defined data that persists between sessions. Unlike file metadata or system values, custom values are manually created and managed by you.

## Creating Custom Values

### Via Data Modal

1. Open the Data Modal (toolbar or keyboard shortcut)
2. Navigate to the "Custom" tab
3. Click "Add Custom Value"
4. Enter a key and value
5. Save

### Via Settings

1. Open Settings (File → Settings)
2. Navigate to "Data Store" or "Custom Data"
3. Add new key-value pairs
4. Values are saved automatically

## Usage

Reference custom values using standard template syntax:

```
{{my_custom_key}}
```

### Examples

```
{{company_name}}
{{project_id}}
{{output_base_path}}
{{default_width}}
```

## Use Cases

### Project Configuration

Store project-specific values:

```
company_name: "Acme Corp"
project_id: "PROJ-2024-001"
output_base_path: "/Users/Projects/Output"
```

### Reusable Values

Define values used across multiple pipelines:

```
default_width: 1920
default_height: 1080
default_fps: 30
```

### Organization

Store organizational information:

```
department: "Marketing"
team: "Video Production"
```

## Persistence

- Custom values are stored in browser localStorage
- Values persist across application restarts
- Values are shared across all tabs/canvases
- Values can be manually edited or deleted

## Best Practices

- Use descriptive key names (e.g., `project_name` not `p`)
- Group related values with prefixes (e.g., `project_*`, `output_*`)
- Document custom values for team members
- Clean up unused values periodically

## Notes

- Custom values are user-specific (stored locally)
- Values are plain text or numbers
- No validation is performed on custom values
- Custom values take precedence over system values with the same key (if applicable)
