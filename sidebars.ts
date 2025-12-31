import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation', 'getting-started/quick-start'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'user-guide/creating-pipelines',
        'user-guide/node-library',
        'user-guide/preview-system',
        'user-guide/export-execution',
      ],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        'advanced/custom-nodes',
        'advanced/mcp-integration',
        'advanced/pipeline-validation',
      ],
    },
  ],
};

export default sidebars;
