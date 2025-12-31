# Creating Pipelines

Pipelines in STREAMLINE are visual representations of video processing workflows. This guide covers everything you need to know about creating and managing pipelines.

## Understanding Nodes

Nodes are the building blocks of pipelines. Each node represents a specific video processing operation:
- **Input Nodes**: Load videos from files or URLs
- **Processing Nodes**: Transform videos (scale, crop, effects, etc.)
- **Output Nodes**: Save processed videos

## Adding Nodes

### Method 1: Node Library Panel
1. Open the node library panel (usually on the left side)
2. Browse categories or search for a node
3. Click and drag a node onto the canvas

### Method 2: Context Menu
1. Right-click on the canvas
2. Select a category
3. Choose a node from the menu

### Method 3: Keyboard Shortcut
- Press `Space` to open the node search
- Type the node name
- Press `Enter` to place it

## Connecting Nodes

1. Hover over a node's output port (usually on the right)
2. Click and drag to another node's input port (usually on the left)
3. Release to create the connection

**Connection Rules:**
- Video outputs connect to video inputs
- Audio outputs connect to audio inputs
- Some nodes have multiple inputs/outputs
- Invalid connections are prevented automatically

## Configuring Nodes

1. Select a node by clicking on it
2. The inspector panel (usually on the right) shows node properties
3. Adjust parameters as needed
4. Changes are reflected in real-time previews

## Organizing Pipelines

### Grouping Nodes
- Select multiple nodes (Ctrl/Cmd + Click)
- Right-click and choose "Group"
- Groups can be collapsed/expanded

### Comments
- Add comments to document your pipeline
- Right-click on canvas → "Add Comment"
- Drag to position and resize as needed

### Canvas Navigation
- **Pan**: Middle-click and drag, or Space + drag
- **Zoom**: Mouse wheel, or Ctrl/Cmd + scroll
- **Fit to View**: Double-click canvas background

## Saving Pipelines

Pipelines are automatically saved as JSON files. You can:
- **Save**: File → Save (Ctrl/Cmd + S)
- **Save As**: File → Save As
- **Export**: Export pipeline for command-line execution

## Pipeline Templates

Save frequently used pipelines as templates:
1. Create and configure your pipeline
2. File → Save as Template
3. Templates appear in the "New Pipeline" dialog

## Best Practices

1. **Start Simple**: Begin with basic operations, then add complexity
2. **Use Preview**: Preview frequently to catch issues early
3. **Name Your Nodes**: Use descriptive names for clarity
4. **Organize Visually**: Group related nodes together
5. **Document**: Add comments for complex sections
6. **Validate**: Check for errors before executing

## Common Patterns

### Basic Processing
```
File Input → Processing Node → File Output
```

### Multiple Effects
```
File Input → Effect 1 → Effect 2 → Effect 3 → File Output
```

### Parallel Processing
```
File Input → Branch 1 → Merge
         → Branch 2 → Merge → File Output
```

## Next Steps

- Learn about the [Node Library](/docs/user-guide/node-library)
- Understand the [Preview System](/docs/user-guide/preview-system)
- Explore [Export and Execution](/docs/user-guide/export-execution)
