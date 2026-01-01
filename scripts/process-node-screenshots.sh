#!/bin/bash
# This script will be used to process nodes in batches
# The actual MCP commands will be executed separately

NODES_FILE="/tmp/node_names.json"
SCREENSHOT_DIR="/Users/andypearson/Code/Streamline_website/static/img/node-screenshots"
DOCS_DIR="/Users/andypearson/Code/Streamline_website/docs/node-reference"

mkdir -p "$SCREENSHOT_DIR"

# Read nodes
NODES=$(cat "$NODES_FILE")

echo "Will process $(echo "$NODES" | jq 'length') nodes"
