/**
 * Script to process all nodes: clear canvas, add node, reset zoom, screenshot, add to docs
 * This will be executed step by step via MCP server calls
 */

const fs = require('fs');
const path = require('path');

const nodeData = JSON.parse(fs.readFileSync('/tmp/node_names.json', 'utf8'));
const docsDir = path.join(__dirname, '../docs/node-reference');
const screenshotsDir = path.join(__dirname, '../static/img/node-screenshots');

console.log(`Will process ${nodeData.length} nodes`);

// Function to add screenshot to markdown file
function addScreenshotToDoc(nodeId, nodeName) {
  const docPath = path.join(docsDir, `${nodeId}.md`);
  if (!fs.existsSync(docPath)) {
    console.log(`Warning: ${docPath} does not exist`);
    return false;
  }
  
  let content = fs.readFileSync(docPath, 'utf8');
  
  // Check if screenshot already exists
  if (content.includes('/img/node-screenshots/')) {
    console.log(`Screenshot already in ${nodeId}.md`);
    return true;
  }
  
  // Find the icon line and add screenshot after it
  const iconMatch = content.match(/(<img src="\/img\/node-icons\/[^"]+"[^>]*\/>\s*\n)/);
  if (iconMatch) {
    const screenshotLine = `![${nodeName} Node](/img/node-screenshots/${nodeId}.png)\n\n`;
    content = content.replace(iconMatch[1], iconMatch[1] + screenshotLine);
    fs.writeFileSync(docPath, content);
    console.log(`Added screenshot to ${nodeId}.md`);
    return true;
  }
  
  // If no icon, add after first heading
  const headingMatch = content.match(/^(#\s+.+)$/m);
  if (headingMatch) {
    const screenshotLine = `\n![${nodeName} Node](/img/node-screenshots/${nodeId}.png)\n\n`;
    content = content.replace(headingMatch[1], headingMatch[1] + screenshotLine);
    fs.writeFileSync(docPath, content);
    console.log(`Added screenshot to ${nodeId}.md`);
    return true;
  }
  
  console.log(`Could not find insertion point in ${nodeId}.md`);
  return false;
}

module.exports = { nodeData, addScreenshotToDoc };
