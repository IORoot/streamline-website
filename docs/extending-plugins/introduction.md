---
sidebar_position: 1
title: Extending Plugins - Introduction
description: Learn how to create custom nodes to extend Streamline's functionality
---

# Extending Plugins - Introduction

Custom nodes are the building blocks of the visual video processing pipeline. Each node represents a single FFmpeg operation (or a combination of operations) that can be chained together to create complex video workflows.

## What Makes a Node?

A node is essentially a JavaScript object that implements the `NodePlugin` interface. It defines:

- **What it does** (description, help text)
- **What it needs** (input parameters)
- **What it produces** (output files)
- **How it works** (FFmpeg filter graph generation)

## Two Types of Nodes

1. **Built-in Nodes** (`src/nodes/*.ts`) - TypeScript files compiled with the application
2. **Custom Nodes** (`~/StreamlineCustomNodes/*.js`) - JavaScript files loaded at runtime

Both follow the same interface, but custom nodes must be written in JavaScript (not TypeScript) since they're loaded dynamically.

## Quick Start

### Creating Your First Node

Create a file named `ff_myfilter.js` in your custom nodes directory:

```javascript
const myFilterPlugin = {
    getNodeDefinition() {
        return {
            id: 'ff_myfilter',
            name: 'My Filter',
            category: 'effects',
            description: 'A simple example filter',
            skillLevel: 'beginner',
            inputs: [
                { name: 'input', type: 'file', required: true, description: 'Input video file' },
                { name: 'strength', type: 'slider', required: false, default: 50, min: 0, max: 100, description: 'Filter strength' }
            ],
            outputs: [
                { name: 'output', type: 'file' }
            ],
            icon: './assets/svg/blur.svg',
            preview: true
        };
    },

    getNodeIcon() {
        return {
            svg: '<svg viewBox="0 0 24 24"><path d="..."/></svg>',
            alt: 'My Filter Icon',
        };
    },

    async executeFilterGraph(parameters) {
        const { strength } = parameters;
        const strengthValue = strength || 50;
        
        return {
            filterGraph: `eq=brightness=${strengthValue / 100}`,
            inputLabels: ['[v]'],
            outputLabel: '[v]',
            streamType: 'video'
        };
    },

    validateParameters(parameters) {
        return !!parameters.input;
    },

    getHelpText() {
        return '<div class="text-neutral-100">My custom filter help text</div>';
    }
};

module.exports = myFilterPlugin;
```

Save the file and restart the application. Your node will appear in the sidebar!

## Node Plugin Interface

Every node must implement the `NodePlugin` interface with these required methods:

### Required Methods

- **`getNodeDefinition()`**: Returns the node's metadata and input/output configuration
- **`getNodeIcon()`**: Returns the SVG icon and styling information
- **`executeFilterGraph(parameters, context?)`**: Generates the FFmpeg filter graph string
- **`validateParameters(parameters)`**: Validates that all required parameters are present
- **`getHelpText()`**: Returns HTML help text displayed in the node's help panel

### Optional Methods

- **`previewFilterGraph(parameters)`**: Generate a simplified filter graph for preview images
- **`getFieldOutput()`**: Customize the visual layout of input fields

## Configuration

### Custom Nodes Directory

Set your custom nodes directory in **Settings → Plugins**:

1. Click the folder icon or enter the path manually
2. The directory should contain your `.js` node definition files
3. Nodes are automatically loaded on application startup

### Node File Requirements

- **File Extension**: Must be `.js` (JavaScript, not TypeScript)
- **File Naming**: Should start with `ff_` prefix (e.g., `ff_myfilter.js`)
- **Export Format**: Must use `module.exports = pluginObject`
- **Node ID**: Must start with `ff_` and be unique

## Node Categories

Nodes are organized into categories in the sidebar:

- **input** (IO) - Input/output nodes
- **image** (Image) - Image processing
- **size** (Size & Position) - Scaling, cropping, rotation
- **effects** (Effects) - Visual effects (blur, sharpen, etc.)
- **composition** (Composition) - Overlays, text, transitions
- **audio** (Audio) - Audio processing
- **format** (Format) - Format conversion, transcoding
- **timing** (Timing) - Frame rate, cutting, timing
- **assembly** (Assembly) - Concatenation, stacking
- **utilities** (Utilities) - Utility functions
- **custom** (Custom) - Custom user nodes

## Getting Started

1. **Set Custom Nodes Directory**: Configure in Settings → Plugins
2. **Create Your First Node**: Start with a simple example
3. **Test Your Node**: Restart the application and verify it appears
4. **Iterate**: Add parameters and functionality as needed

## Resources

For detailed information on creating custom nodes, see the comprehensive guide in the Video_FFMPEG-Scriptflow repository:

- **Location**: `docs/CUSTOM_NODES_GUIDE.md`
- **Content**: Complete guide with examples, patterns, and best practices

The guide covers:
- Complete Node Plugin Interface documentation
- All parameter types and options
- Filter graph construction
- Preview generation
- Custom field layouts
- Dynamic inputs
- Examples and patterns
- Best practices
- Troubleshooting

## Next Steps

1. Read the full [Custom Nodes Developer Guide](https://github.com/your-repo/Video_FFMPEG-Scriptflow/blob/main/docs/CUSTOM_NODES_GUIDE.md)
2. Review built-in nodes in `src/nodes/` for examples
3. Start with a simple node and iterate
4. Test thoroughly before deploying

## Tips

- Start simple and add complexity gradually
- Test your nodes with various inputs
- Use descriptive names and help text
- Follow FFmpeg documentation for filter syntax
- Review existing built-in nodes for patterns
- Use the console for debugging (Help → Toggle Developer Tools)
