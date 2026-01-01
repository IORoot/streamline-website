---
sidebar_position: 6
title: MCP Settings
description: Learn about Model Context Protocol server integration and configuration
---

# MCP Settings

The MCP settings tab provides information about the Model Context Protocol (MCP) server integration and how to configure it with AI assistants.

## Overview

The Model Context Protocol (MCP) server allows AI assistants like Claude or Cursor to control Streamline programmatically. The MCP server runs externally and connects to the application via Chrome DevTools Protocol (CDP).

## How It Works

1. The MCP server runs as a separate process
2. It connects to Streamline via Chrome DevTools Protocol
3. AI assistants communicate with the MCP server
4. The MCP server translates commands into application actions

## Configuration

### For Claude Desktop

Add the MCP server to your Claude Desktop configuration:

1. Open or create the configuration file at:
   ```
   ~/Library/Application Support/Claude/claude_desktop_config.json
   ```

2. Add the following configuration:
   ```json
   {
     "mcpServers": {
       "video-ffmpeg-scriptflow": {
         "command": "node",
         "args": ["/path/to/Video_FFMPEG-Scriptflow/mcp-server/server.js"]
       }
     }
   }
   ```

3. Replace `/path/to/Video_FFMPEG-Scriptflow` with the actual path to your project directory

4. Restart Claude Desktop

### For Cursor

Add the MCP server to your Cursor MCP settings:

1. Open Cursor settings
2. Navigate to MCP configuration
3. Add the following configuration:
   ```json
   {
     "mcpServers": {
       "video-ffmpeg-scriptflow": {
         "command": "node",
         "args": ["/path/to/Video_FFMPEG-Scriptflow/mcp-server/server.js"]
       }
     }
   }
   ```

4. Replace `/path/to/Video_FFMPEG-Scriptflow` with the actual path to your project directory

5. Restart Cursor

## Path Configuration

### Development Mode

In development mode, use the path to your project directory:
```
/path/to/Video_FFMPEG-Scriptflow/mcp-server/server.js
```

### Production Builds

For production builds, use the path to the unpacked app resources:
```
/path/to/Streamline.app/Contents/Resources/mcp-server/server.js
```

**Note**: The exact path depends on your installation method and operating system.

## MCP Server Features

The MCP server provides AI assistants with the ability to:

- **Control the application**: Execute commands and interact with the UI
- **Read application state**: Get information about nodes, pipelines, and settings
- **Modify pipelines**: Create, edit, and manage pipelines programmatically
- **Execute operations**: Run pipelines, generate previews, and more

## Troubleshooting

### Server Not Starting

If the MCP server doesn't start:
1. Verify Node.js is installed and in your PATH
2. Check that the server.js file exists at the specified path
3. Ensure you have read/execute permissions on the file
4. Check the AI assistant's logs for error messages

### Connection Issues

If the MCP server can't connect to Streamline:
1. Ensure Streamline is running
2. Verify Chrome DevTools Protocol is enabled
3. Check that no firewall is blocking the connection
4. Review the MCP server logs for connection errors

### Path Issues

If you encounter path-related errors:
1. Use absolute paths instead of relative paths
2. Verify the path is correct for your operating system
3. On Windows, use forward slashes or escaped backslashes
4. Ensure the path doesn't contain special characters that need escaping

## Additional Resources

For more detailed setup instructions, see:
- [MCP Setup with Cursor](/docs/getting-started/mcp-setup-cursor)

For information about the MCP server implementation, see:
- [Technical Details - MCP Integration](/docs/technical-details/mcp-integration)
