# Custom Nodes

Advanced users can extend STREAMLINE's capabilities by creating custom nodes. Custom nodes integrate seamlessly with the visual editor and support all standard features.

## Node Types

### TypeScript Nodes

Built-in nodes written in TypeScript:
- Compiled with the application
- Full type safety
- Access to internal APIs
- Best performance

### JavaScript Nodes

Runtime-loaded nodes written in JavaScript:
- Loaded dynamically
- No recompilation needed
- Easier to distribute
- Good for plugins

## Creating a Custom Node

### Basic Structure

A custom node consists of:
1. **Node Definition**: Metadata and configuration
2. **Node Logic**: Processing implementation
3. **Node UI**: Inspector panel interface

### Example: Simple Scale Node

```typescript
import { NodeDefinition, NodeType } from '@streamline/core';

export const ScaleNode: NodeDefinition = {
  type: NodeType.VIDEO_PROCESSOR,
  name: 'Scale',
  category: 'Size & Position',
  inputs: [
    {
      name: 'video',
      type: 'video',
      required: true,
    },
  ],
  outputs: [
    {
      name: 'video',
      type: 'video',
    },
  ],
  properties: [
    {
      name: 'width',
      type: 'number',
      default: 1920,
      label: 'Width',
    },
    {
      name: 'height',
      type: 'number',
      default: 1080,
      label: 'Height',
    },
  ],
  execute: async (inputs, properties) => {
    const video = inputs.video;
    const { width, height } = properties;
    
    // FFMPEG processing logic
    return {
      video: await scaleVideo(video, width, height),
    };
  },
};
```

## Node Properties

### Property Types

- **number**: Numeric values
- **string**: Text values
- **boolean**: True/false values
- **enum**: Selection from options
- **color**: Color picker
- **file**: File selector
- **video**: Video reference

### Property Configuration

```typescript
{
  name: 'quality',
  type: 'enum',
  options: ['low', 'medium', 'high'],
  default: 'medium',
  label: 'Quality',
  description: 'Output quality setting',
}
```

## Node Execution

### Execution Function

The `execute` function receives:
- **inputs**: Data from connected nodes
- **properties**: Configured node properties
- **context**: Execution context (paths, temp files, etc.)

### Returning Results

Return an object with output port names as keys:

```typescript
return {
  video: processedVideo,
  audio: processedAudio,
  metadata: videoMetadata,
};
```

## Preview Generation

Custom nodes can generate previews:

```typescript
generatePreview: async (inputs, properties, frame) => {
  // Generate preview for specific frame
  return previewImage;
},
```

## Node Validation

Validate node configuration:

```typescript
validate: (properties) => {
  if (properties.width < 1) {
    return { error: 'Width must be greater than 0' };
  }
  return { valid: true };
},
```

## Loading Custom Nodes

### TypeScript Nodes

1. Place node files in `nodes/` directory
2. Register in `nodes/index.ts`
3. Rebuild application

### JavaScript Nodes

1. Create node file
2. Place in `plugins/` directory
3. Node loads automatically on startup

## Best Practices

1. **Follow Naming Conventions**: Use clear, descriptive names
2. **Document Properties**: Add descriptions for all properties
3. **Handle Errors**: Provide clear error messages
4. **Optimize Performance**: Use efficient algorithms
5. **Test Thoroughly**: Test with various inputs
6. **Provide Previews**: Generate previews when possible

## Distribution

### Sharing Nodes

- Package as npm package
- Share via GitHub
- Include in STREAMLINE plugins directory

### Node Packages

Create a package with:
- Node definitions
- Documentation
- Example pipelines
- Tests

## Next Steps

- Learn about [MCP Integration](/docs/advanced/mcp-integration)
- Explore [Pipeline Validation](/docs/advanced/pipeline-validation)
- Explore more advanced features in the documentation
