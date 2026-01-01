---
sidebar_position: 1
title: Template Variables
description: Using mustache syntax and mathematical expressions in template variables
---

# Template Variables

Template variables allow you to reference dynamic values throughout your pipeline using mustache syntax (`{{key}}`). They support mathematical expressions and can reference Data Store values, node parameters, and system information.

## Syntax

### Basic Syntax

```
{{key}}
```

### Mathematical Expressions

```
{{expression}}
```

Expressions support:
- Arithmetic operations: `+`, `-`, `*`, `/`
- Parentheses for grouping: `(a + b) * 2`
- Comparisons: `>`, `<`, `>=`, `<=`, `===`, `!==`
- Ternary operators: `condition ? value1 : value2`

## Data Store References

### File Metadata

```
{{width}}
{{height}}
{{fps}}
{{duration}}
{{codec}}
```

### System Values

```
{{DATETIME}}
{{DATE}}
{{TIME}}
{{PLATFORM}}
{{APP_VERSION}}
```

### Random Values

```
{{RANDOM_INT_0_1}}
{{RANDOM_FLOAT_0_1}}
{{RANDOM_COLOUR_HEX}}
{{RANDOM_COLOUR_WORD}}
```

### Node Parameters

```
{{ff_scale.width}}
{{ff_crop.x}}
{{ff_text.fontsize}}
{{ff_overlay_2.x}}
```

### Custom Values

```
{{my_custom_key}}
{{project_name}}
{{output_path}}
```

## Mathematical Expressions

### Arithmetic Operations

```
{{width * 2}}           // Double the width
{{height / 2}}          // Half the height
{{fps + 10}}            // Add 10 to frame rate
{{(width + height) / 2}} // Average of width and height
```

### Comparisons

```
{{width > 1920 ? 'HD' : 'SD'}}
{{fps >= 30 ? 'smooth' : 'standard'}}
{{duration < 60 ? 'short' : 'long'}}
```

### Complex Expressions

```
{{(width * height) / 1000000}}  // Megapixels
{{width / height}}              // Aspect ratio
{{fps * duration}}              // Total frames
```

## Use Cases

### Dynamic Filenames

```
output_{{width}}x{{height}}}_@{{fps}}fps.mp4
```

Results in: `output_1920x1080_@30fps.mp4`

### Conditional Values

```
{{width > 1920 ? 1920 : width}}
```

Scales down if width exceeds 1920.

### Calculations

```
{{(width + height) / 2}}
```

Calculates average dimension.

### Node Parameter References

```
{{ff_scale.width}}
```

References width from Scale Video node.

## Expression Examples

### Aspect Ratio

```
{{width / height}}
```

### Total Pixels

```
{{width * height}}
```

### Conditional Scaling

```
{{width > 1920 ? 1920 : width}}
{{height > 1080 ? 1080 : height}}
```

### Frame Calculations

```
{{fps * duration}}
{{duration * 1000}}
```

## Best Practices

- **Use Descriptive Keys**: Use clear key names for custom values
- **Document Expressions**: Comment complex expressions
- **Test Values**: Verify template variable values before execution
- **Error Handling**: Provide fallback values in ternary expressions
- **Performance**: Avoid complex expressions in frequently evaluated contexts

## Notes

- Template variables are evaluated at execution time
- Invalid expressions result in errors
- Mathematical operations follow standard order of operations
- Division by zero results in errors
- Comparisons return boolean values (use in ternary expressions)
