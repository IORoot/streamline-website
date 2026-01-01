---
sidebar_position: 1
title: Introduction
description: Overview of the Data Store system and how to use it
---

# The Data Store

The **Data Store** is a centralized key-value storage system that provides dynamic data for your pipelines. It enables template variable replacement using mustache syntax (`{{key}}`) throughout your pipeline configuration.

## What is the Data Store?

The Data Store is a service that manages metadata and dynamic values that can be referenced in your pipeline nodes. It provides:

- **File Metadata**: Automatically extracted from video files (width, height, fps, duration, etc.)
- **System Values**: Built-in system information (date, time, platform, etc.)
- **Random Values**: Generated random numbers, colors, and strings
- **Node Parameters**: Access to all node parameters on the canvas
- **Custom Values**: User-defined key-value pairs that persist across sessions

## How It Works

The Data Store uses a simple key-value model where you can:

1. **Set values** - Automatically (from file metadata) or manually (custom values)
2. **Get values** - Access values by key name
3. **Use in templates** - Reference values using `{{key}}` syntax in any text field

## Template Variable Syntax

Use mustache syntax to reference Data Store values:

```
{{key}}
```

### Examples

- `{{width}}` - Video width in pixels
- `{{fps}}` - Frame rate
- `{{DATETIME}}` - Current date and time
- `{{RANDOM_COLOUR_HEX}}` - Random hex color
- `{{ff_scale.width}}` - Width parameter from Scale Video node

### Mathematical Expressions

The Data Store supports mathematical expressions within template variables:

```
{{width * 2}}
{{height / 2}}
{{fps + 10}}
{{(width + height) / 2}}
```

## Data Store Categories

The Data Store is organized into five categories:

1. **[File Data](./file-data.md)** - Metadata extracted from video files
2. **[System](./system.md)** - Built-in system values (date, time, platform)
3. **[Random](./random.md)** - Generated random values (numbers, colors, strings)
4. **[Nodes](./nodes.md)** - Parameters from all nodes on the canvas
5. **[Custom](./custom.md)** - User-defined key-value pairs

## Accessing the Data Store

You can view and manage the Data Store through:

- **Data Modal**: Open via the toolbar or keyboard shortcut to view all stored values
- **Template Variables**: Use `{{key}}` syntax in any text field
- **Settings**: Configure custom values in Settings → Data Store

## Common Use Cases

- **Dynamic Filenames**: `output_{{width}}x{{height}}.mp4`
- **Conditional Values**: Use expressions like `{{width > 1920 ? 'HD' : 'SD'}}`
- **Random Colors**: `{{RANDOM_COLOUR_HEX}}` for dynamic color generation
- **Node References**: `{{ff_scale.width}}` to reference other node parameters
- **Date/Time Stamps**: `{{DATETIME}}` for timestamped outputs

## Next Steps

- Learn about [File Data](./file-data.md) - automatically extracted metadata
- Explore [System Values](./system.md) - built-in system information
- Discover [Random Values](./random.md) - generated random data
- Understand [Node Parameters](./nodes.md) - accessing node data
- Create [Custom Values](./custom.md) - user-defined persistent data
