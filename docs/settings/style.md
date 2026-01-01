---
sidebar_position: 2
title: Style Settings
description: Customize themes, colors, fonts, and layout variables to personalize Streamline
---

# Style Settings

The Style settings tab provides comprehensive theme customization options, allowing you to personalize the appearance of Streamline to match your preferences.

## Theme Selection

Choose from pre-made themes located in `./public/assets/themes/`:

1. Select a theme from the dropdown menu
2. The theme will be applied immediately
3. You can further customize any theme using the customization options below

If no themes are found, add `.json` theme files to the themes folder to see them here.

## Theme Customization

Customize colors, fonts, and layout variables to create your perfect workspace.

### Styling Modes

#### Basic Mode

Basic mode allows you to customize the main theme colors, fonts, radius, and shadows. All other colors will automatically adjust based on your selections.

**Available in Basic Mode:**
- Base theme colors
- Primary fonts (primary, mono, heading)
- Border radius
- Node shadows

#### Advanced Mode

Advanced mode gives you full control over all theme variables, allowing you to customize every aspect of the theme.

**Available in Advanced Mode:**
- All color variables
- All font variables
- All layout variables
- Complete theme control

### Theme Variables

Theme variables are organized by category:

#### Base Colors
- Primary colors
- Background colors
- Text colors
- Border colors

#### Component Colors
- Button colors
- Input colors
- Node colors
- Sidebar colors

#### Font Variables
- Primary font family
- Monospace font family
- Heading font family
- Font sizes

#### Layout Variables
- Border radius
- Spacing values
- Shadow values
- Node dimensions

### Working with Variables

#### Color Variables
- Use the color picker to select colors
- Click the reset button (↺) to restore default values
- Colors update in real-time

#### Font Variables
- Select from system fonts (if available)
- Or enter a custom font family name
- Font preview shows in the dropdown

#### Layout Variables
- Enter values in standard CSS units (px, rem, em, etc.)
- Examples: `8px`, `1rem`, `600`
- Use the reset button to restore defaults

### Theme Management

#### Export Theme

Save your custom theme to a JSON file:

1. Click the "Export" button
2. Choose a location and filename
3. The theme file can be shared or imported later

#### Import Theme

Load a previously exported theme:

1. Click the "Import" button
2. Select a theme JSON file
3. The theme will be applied immediately

#### Reset All

Reset all theme variables to their default values:

1. Click the "Reset All" button
2. Confirm the action
3. All customizations will be removed

### Category Expansion

Click on category headers to expand or collapse variable groups. This helps organize your customization workflow.

## Tips

- Start with Basic mode if you're new to theme customization
- Use Advanced mode for precise control over every visual element
- Export your favorite themes for backup or sharing
- Experiment with different color combinations to find what works best for you
- Font changes require system fonts to be available; custom fonts can be entered manually
