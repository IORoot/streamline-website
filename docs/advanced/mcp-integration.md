# MCP Integration

STREAMLINE includes a built-in Model Context Protocol (MCP) server that enables AI assistants to control the application programmatically.

## What is MCP?

The Model Context Protocol is a standard for enabling AI assistants to interact with applications. STREAMLINE's MCP server exposes the application's functionality through a standardized interface.

## Enabling MCP

The MCP server runs automatically when STREAMLINE is launched. It listens on a local port and can be accessed by compatible AI assistants.

## AI Assistant Integration

### Supported Assistants

- **Claude** (via Cursor or other MCP clients)
- **Cursor AI**
- **Other MCP-compatible assistants**

### Connection

AI assistants connect to STREAMLINE's MCP server automatically when:
1. STREAMLINE is running
2. The assistant is configured to use MCP
3. The MCP server is enabled in settings

## MCP Capabilities

### Pipeline Creation

AI assistants can create pipelines programmatically:

```
"Create a pipeline that downloads a video, scales it to 1080p, 
adds a watermark in the bottom right, and exports it as MP4"
```

### Node Configuration

Configure nodes through natural language:

```
"Set the scale node to 1920x1080 and apply a blur effect with 
radius 10"
```

### Workflow Execution

Execute pipelines automatically:

```
"Run the current pipeline on the video in ~/Videos/input.mp4"
```

## MCP Commands

### Pipeline Commands

- `create_pipeline`: Create a new pipeline
- `add_node`: Add a node to the pipeline
- `connect_nodes`: Connect two nodes
- `configure_node`: Set node properties
- `execute_pipeline`: Run the pipeline

### Node Commands

- `list_nodes`: Get available nodes
- `get_node_info`: Get node details
- `validate_node`: Check node configuration

### File Commands

- `load_video`: Load a video file
- `save_pipeline`: Save pipeline to file
- `export_pipeline`: Export as JSON

## Example Interactions

### Creating a Simple Pipeline

**User**: "Create a pipeline that resizes a video to 1080p"

**AI**: Creates a pipeline with:
1. File Input node
2. Scale node (configured to 1920x1080)
3. File Output node
4. Connections between nodes

### Complex Workflow

**User**: "Create a pipeline that downloads a video from a URL, 
applies color correction, adds a watermark, and exports as MP4"

**AI**: Creates a complete pipeline with all required nodes and 
configurations.

## Natural Language Processing

STREAMLINE's MCP server understands:
- Video processing terminology
- Common operations (resize, crop, effects)
- Parameter specifications
- Pipeline structure

## Benefits

### Accessibility

- No need to learn the UI
- Describe what you want in plain language
- AI handles the technical details

### Efficiency

- Create pipelines faster
- Automate repetitive tasks
- Batch process with AI assistance

### Innovation

- Explore new workflows
- Get suggestions from AI
- Learn from AI-generated pipelines

## Configuration

### MCP Settings

Configure MCP server in STREAMLINE settings:
- **Port**: MCP server port (default: auto)
- **Enable/Disable**: Toggle MCP server
- **Logging**: Enable MCP command logging

### Security

- MCP server runs locally only
- No external network access
- AI assistants require local access

## Limitations

- AI assistants need to be MCP-compatible
- Some complex operations may require manual intervention
- Performance depends on AI assistant capabilities

## Future Enhancements

- Enhanced natural language understanding
- More sophisticated pipeline generation
- Learning from user patterns
- Integration with cloud AI services

## Next Steps

- Learn about [Custom Nodes](/docs/advanced/custom-nodes)
- Explore [Pipeline Validation](/docs/advanced/pipeline-validation)
- Explore more advanced features in the documentation
