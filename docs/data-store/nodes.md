---
sidebar_position: 5
title: Nodes
description: Accessing parameters from all nodes on the canvas
---

# Node Parameters

Node parameters allow you to reference values from any node on the canvas using dot notation syntax.

## Overview

The Data Store automatically tracks all nodes on the canvas and makes their parameters available for template variable access. This enables dynamic references between nodes and parameter reuse.

## Syntax

Access node parameters using dot notation:

```
{{nodeType.parameter}}
```

For nodes with multiple instances, use numbered suffixes:

```
{{nodeType_2.parameter}}
```

## Examples

### Single Instance

If you have one Scale Video node:

```
{{ff_scale.width}}
{{ff_scale.height}}
```

### Multiple Instances

If you have multiple Scale Video nodes:

- First instance: `{{ff_scale.width}}`
- Second instance: `{{ff_scale_2.width}}`
- Third instance: `{{ff_scale_3.width}}`

### Common Node References

```
{{ff_crop.x}}
{{ff_crop.y}}
{{ff_crop.width}}
{{ff_crop.height}}

{{ff_text.text}}
{{ff_text.fontsize}}
{{ff_text.color}}

{{ff_overlay.x}}
{{ff_overlay.y}}
```

## Use Cases

### Parameter Reuse

Reference a value from one node in another:

```
Scale Video (width: 1920)
  ↓
Crop Video (width: {{ff_scale.width}})
```

### Dynamic Calculations

Use node parameters in expressions:

```
{{ff_scale.width / 2}}
{{ff_crop.x + 10}}
{{ff_text.fontsize * 1.5}}
```

### Conditional Logic

```
{{ff_scale.width > 1920 ? 'HD' : 'SD'}}
```

## Node Instance Numbering

- First instance of a node type: No suffix (e.g., `ff_scale`)
- Second instance: `_2` suffix (e.g., `ff_scale_2`)
- Third instance: `_3` suffix (e.g., `ff_scale_3`)
- And so on...

## Available Parameters

All parameters from all nodes are available, including:

- Input values (file paths, strings, numbers)
- Configuration values (colors, positions, dimensions)
- Calculated values (output filenames, etc.)

## Notes

- Node parameters update automatically when nodes change
- Only non-empty parameters are available
- Parameters are scoped to the current tab/canvas
- Node numbering is based on creation order
