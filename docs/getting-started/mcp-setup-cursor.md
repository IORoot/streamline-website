---
sidebar_position: 2
title: MCP Setup with Cursor
description: Detailed instructions for setting up MCP (Model Context Protocol) with Cursor IDE
---

# MCP Setup with Cursor

This guide explains how to set up the Model Context Protocol (MCP) server to enable AI assistant control of the application from Cursor IDE.

## Overview

MCP allows AI assistants in Cursor IDE to control the application, create pipelines, add nodes, and execute video processing workflows programmatically.

## Prerequisites

- Cursor IDE installed
- Application running in development mode
- Chrome DevTools Protocol enabled (port 9222)

## Setup Steps

### 1. Start the Application in Development Mode

The application must be running with remote debugging enabled:

```bash
npm run electron-dev
```

This starts the Electron app with Chrome DevTools Protocol on port 9222.

### 2. Configure Cursor IDE

#### Add MCP Server Configuration

1. Open Cursor IDE settings
2. Navigate to MCP settings
3. Add a new MCP server configuration

#### Configuration Format

```json
{
  "mcpServers": {
    "streamline": {
      "command": "node",
      "args": ["/path/to/Video_FFMPEG-Scriptflow/mcp-server/server.js"],
      "env": {}
    }
  }
}
```

### 3. Verify Connection

The MCP server connects to the Electron app via Chrome DevTools Protocol:

- **Port**: 9222 (default)
- **Protocol**: Chrome DevTools Protocol (CDP)
- **Connection**: Automatic when app is running

## Available MCP Tools

The MCP server provides the following tools:

### Pipeline Management

- **`create_pipeline`**: Create a new pipeline
- **`clear_canvas`**: Clear the current canvas
- **`get_json`**: Get the current pipeline JSON

### Node Operations

- **`add_node`**: Add a node to the canvas
- **`update_node_field`**: Update a field on a node
- **`connect_nodes`**: Connect two nodes together
- **`delete_node`**: Delete a node from the canvas

### Execution

- **`run_pipeline`**: Execute the pipeline
- **`get_preview_image`**: Get a preview image from a node
- **`get_debug_logs`**: Get debug logs from pipeline execution

## Usage in Cursor

Once configured, you can use natural language to control the application:

```
"Create a pipeline that scales video to 1920x1080"
"Add a blur node with strength 10"
"Connect the input node to the scale node"
"Run the pipeline"
```

## Troubleshooting

### Connection Issues

- **App Not Running**: Ensure the app is running with `npm run electron-dev`
- **Port Conflict**: Check if port 9222 is available
- **CDP Not Enabled**: Verify remote debugging is enabled

### MCP Server Issues

- **Path Incorrect**: Verify the path to `server.js`
- **Node Not Found**: Ensure Node.js is in PATH
- **Permissions**: Check file permissions for server.js

### Tool Execution Errors

- **Editor Not Initialized**: Wait for app to fully load
- **Node Not Found**: Verify node IDs are correct
- **Invalid Parameters**: Check parameter values and types

## Security Considerations

- MCP server only works when app is running locally
- Chrome DevTools Protocol is localhost-only
- No external network access required
- API keys and credentials are not exposed

## Notes

- MCP server requires the app to be running
- Connection is established automatically
- Tools execute JavaScript in the Electron app context
- All operations are synchronous and return results immediately
