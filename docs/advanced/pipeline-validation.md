# Pipeline Validation

STREAMLINE automatically validates your pipelines before execution, ensuring they're correct and will execute successfully.

## Why Validation?

Pipeline validation helps you:
- Catch errors before execution
- Understand what's wrong
- Fix issues quickly
- Ensure successful processing

## Automatic Validation

STREAMLINE validates pipelines:
- When you connect nodes
- When you configure properties
- Before execution
- In real-time as you work

## Validation Checks

### Connection Validation

- **Port Compatibility**: Ensures output types match input types
- **Required Connections**: Checks that required inputs are connected
- **Circular Dependencies**: Detects circular node connections
- **Multiple Connections**: Validates connection rules

### Property Validation

- **Required Properties**: Ensures all required properties are set
- **Property Types**: Validates property value types
- **Property Ranges**: Checks numeric values are in valid ranges
- **Property Formats**: Validates string formats (URLs, paths, etc.)

### Node Validation

- **Node State**: Checks nodes are properly initialized
- **Node Dependencies**: Validates node dependencies are met
- **Node Compatibility**: Ensures nodes work together
- **Node Configuration**: Validates node-specific settings

### Pipeline Validation

- **Complete Paths**: Ensures paths from input to output
- **No Orphaned Nodes**: Checks all nodes are connected
- **Output Nodes**: Validates at least one output node exists
- **Input Nodes**: Validates at least one input node exists

## Validation Messages

### Error Messages

Errors prevent execution and must be fixed:
- **Missing Connection**: Required input not connected
- **Invalid Property**: Property value is invalid
- **Type Mismatch**: Connection types don't match
- **Circular Dependency**: Nodes form a cycle

### Warning Messages

Warnings don't prevent execution but indicate potential issues:
- **Unused Node**: Node not connected to output
- **Default Property**: Using default property value
- **Performance Warning**: Pipeline may be slow
- **Compatibility Warning**: Potential compatibility issue

### Information Messages

Informational messages provide helpful context:
- **Validation Passed**: Pipeline is valid
- **Optimization Suggestion**: Performance improvement available
- **Best Practice**: Suggestion for better workflow

## Fixing Validation Errors

### Missing Connections

1. Identify the node with missing input
2. Connect the required input
3. Validation updates automatically

### Invalid Properties

1. Select the node with the error
2. Check the property value
3. Adjust to a valid value
4. Error clears when valid

### Type Mismatches

1. Check connection types
2. Ensure output type matches input type
3. Add conversion nodes if needed
4. Reconnect with correct types

## Validation Panel

The validation panel shows:
- **Error Count**: Number of errors
- **Warning Count**: Number of warnings
- **Error List**: Detailed error messages
- **Quick Fix**: Suggested fixes for errors

## Best Practices

1. **Fix Errors Immediately**: Don't ignore validation errors
2. **Read Messages**: Understand what's wrong
3. **Use Quick Fix**: Apply suggested fixes when available
4. **Validate Often**: Check validation as you build
5. **Test After Fixes**: Verify fixes resolve issues

## Advanced Validation

### Custom Validation

Custom nodes can implement validation:

```typescript
validate: (properties, inputs) => {
  const errors = [];
  
  if (properties.width < 1) {
    errors.push('Width must be greater than 0');
  }
  
  if (!inputs.video) {
    errors.push('Video input is required');
  }
  
  return errors;
},
```

### Validation Rules

Define custom validation rules:
- Node-specific rules
- Pipeline-level rules
- Property constraints
- Connection rules

## Troubleshooting

### Persistent Errors

- Check node documentation
- Verify all connections
- Review property values
- Check for updates

### False Positives

- Some warnings may be intentional
- Ignore if you understand the implications
- Report false positives for improvement

## Next Steps

- Learn about [Creating Pipelines](/docs/user-guide/creating-pipelines)
- Explore [Export and Execution](/docs/user-guide/export-execution)
- Read about [Custom Nodes](/docs/advanced/custom-nodes)
