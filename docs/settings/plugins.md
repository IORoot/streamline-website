---
sidebar_position: 8
title: Plugins Settings
description: Configure custom node definitions and manage plugin directories
---

# Plugins Settings

The Plugins settings tab allows you to configure custom node definitions and manage plugin directories.

## Custom Nodes Directory

Set the directory where custom node definition files are located. Custom nodes extend Streamline's functionality with user-defined processing units.

### Setting the Custom Nodes Directory

**Method 1: Manual Entry**
1. Type the full path directly into the text field
2. Press Enter or click outside the field to save

**Method 2: Folder Selection**
1. Click the folder icon button
2. Select a directory from the file browser
3. The full path will be automatically filled in

### Directory Structure

The custom nodes directory should contain:
- **Node definition files**: JavaScript or TypeScript files that define custom nodes
- **Supporting files**: Any additional files required by your custom nodes

### Loading Custom Nodes

Once the directory is set:
1. Custom nodes are automatically loaded on application startup
2. Custom nodes appear in the sidebar alongside built-in nodes
3. Custom nodes are organized by category (if specified in the node definition)

### Node Definition Requirements

Custom node files must:
- Export a `getNodeDefinition` function
- Follow the node plugin interface
- Be valid JavaScript or TypeScript modules

For detailed information on creating custom nodes, see:
- [Extending Plugins](/docs/extending-plugins/introduction)

## Current Directory

The current custom nodes directory is displayed below the input field for reference.

## Best Practices

### Directory Organization

- **Dedicated folder**: Use a dedicated folder for custom nodes
- **Version control**: Keep custom nodes in version control for backup
- **Naming conventions**: Use clear, descriptive names for node files
- **Documentation**: Document your custom nodes for future reference

### Development Workflow

1. **Development**: Create and test custom nodes in a development directory
2. **Testing**: Test nodes thoroughly before adding to the main directory
3. **Deployment**: Copy tested nodes to the production custom nodes directory
4. **Backup**: Keep backups of your custom node definitions

## Troubleshooting

### Custom Nodes Not Loading

**Check the directory path:**
- Verify the path is correct and exists
- Ensure you have read permissions on the directory
- Check for typos in the path

**Check node definitions:**
- Verify node files export the required functions
- Check for syntax errors in node definition files
- Review the browser console for error messages

**Check file format:**
- Ensure files are valid JavaScript or TypeScript
- Verify files are properly formatted
- Check that exports are correct

### Node Errors

**Node not appearing:**
- Check that the node definition is valid
- Verify the node is exported correctly
- Review the application console for errors

**Node not working:**
- Check node implementation for errors
- Verify all required functions are implemented
- Test the node in isolation

**Category issues:**
- Ensure category names are valid
- Check that categories are properly defined
- Verify node categorization logic

## Additional Resources

For more information on creating and using custom nodes:
- [Extending Plugins - Introduction](/docs/extending-plugins/introduction)
- [Extending Plugins - Node Plugin Interface](/docs/extending-plugins/node-plugin-interface)
- [Extending Plugins - Creating Custom Nodes](/docs/extending-plugins/creating-custom-nodes)
