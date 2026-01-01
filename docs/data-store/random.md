---
sidebar_position: 4
title: Random
description: Generated random values (numbers, colors, strings)
---

# Random Values

Random values provide dynamically generated data including random numbers, colors, and strings. Each time a random value is referenced, a new value is generated.

## Overview

Random values are generated on-demand when referenced in templates. They're useful for creating varied outputs, testing, and dynamic content generation.

## Available Random Values

### Numbers

- **`RANDOM_INT_0_1`** - Random integer (0 or 1)
  - Example: `0` or `1`

- **`RANDOM_FLOAT_0_1`** - Random float between 0 and 1
  - Example: `0.742`

### Colors

- **`RANDOM_COLOUR_WORD`** - Random color name
  - Examples: `red`, `blue`, `green`, `yellow`, `orange`, `purple`, `pink`, `cyan`, etc.

- **`RANDOM_COLOUR_HEX`** - Random hex color
  - Example: `#a3f2c1`

- **`RANDOM_COLOUR_HEX_COMPLIMENT`** - Complement color for the last generated hex color
  - Returns `white` or `black` based on the cached hex color's luminance
  - Pairs with `RANDOM_COLOUR_HEX` for contrast

- **`RANDOM_COLOUR_HEX_ALPHA`** - Random hex color with alpha channel
  - Example: `#a3f2c1ff`

- **`RANDOM_COLOUR_RGB`** - Random RGB color
  - Example: `rgb(163, 242, 193)`

- **`RANDOM_COLOUR_RGBA`** - Random RGBA color
  - Example: `rgba(163, 242, 193, 0.742)`

## Usage Examples

### Random Colors

```
{{RANDOM_COLOUR_HEX}}
```

Use in color picker fields or text overlays.

### Paired Colors

```
Background: {{RANDOM_COLOUR_HEX}}
Text Color: {{RANDOM_COLOUR_HEX_COMPLIMENT}}
```

The complement automatically provides good contrast.

### Random Values in Expressions

```
{{RANDOM_INT_0_1 * 100}}
```

Generates 0 or 100.

### Dynamic Styling

```
color={{RANDOM_COLOUR_RGB}}
```

## Special Behavior

### Color Pairing

When you use `RANDOM_COLOUR_HEX` and `RANDOM_COLOUR_HEX_COMPLIMENT` together in the same template replacement cycle, the complement is calculated from the same base color, ensuring proper contrast:

```
background={{RANDOM_COLOUR_HEX}} color={{RANDOM_COLOUR_HEX_COMPLIMENT}}
```

### Generation Timing

- Random values are generated each time they're referenced
- Multiple references to the same random key in one template will generate different values
- Use the same reference multiple times if you need the same value

## Notes

- Random values are generated fresh each time
- Color complement pairing only works within the same template replacement cycle
- All random values are read-only (cannot be set manually)
