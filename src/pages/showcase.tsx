import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Showcase(): ReactNode {
  return (
    <Layout
      title="Showcase"
      description="Discover what you can build with STREAMLINE">
      <div className="container margin-vert--xl">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <Heading as="h1">STREAMLINE Showcase</Heading>
            <p>
              Explore examples of video processing pipelines created with STREAMLINE.
              From simple transformations to complex multi-layer compositions, see
              what's possible with visual video editing.
            </p>
            
            <div className="margin-top--xl">
              <Heading as="h2">Coming Soon</Heading>
              <p>
                We're collecting examples from the community. Check back soon for
                inspiring pipeline examples, use cases, and tutorials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
