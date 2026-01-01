/**
 * Helper script to process nodes in batches
 * This generates the workflow commands for each node
 */

const fs = require('fs');
const path = require('path');

const nodeData = JSON.parse(fs.readFileSync('/tmp/node_names.json', 'utf8'));

// Filter out already completed nodes
const completed = ['ff_a_fade', 'ff_a_compressor', 'ff_a_deesser', 'ff_a_delay', 'ff_a_echo'];
const remaining = nodeData.filter(n => !completed.includes(n.id));

console.log(`Total nodes: ${nodeData.length}`);
console.log(`Completed: ${completed.length}`);
console.log(`Remaining: ${remaining.length}`);

// Generate workflow for each remaining node
remaining.forEach((node, index) => {
  console.log(`\n${index + 1}. ${node.name} (${node.id})`);
  console.log(`   - Clear canvas`);
  console.log(`   - Search: "${node.name}"`);
  console.log(`   - Add node`);
  console.log(`   - Reset zoom`);
  console.log(`   - Screenshot: ff_${node.id}.png`);
  console.log(`   - Add to: docs/node-reference/${node.id}.md`);
});
