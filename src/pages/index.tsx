import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Transform Video Editing with Visual Workflows">
      <HomepageHeader />
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <Heading as="h2" className="text-center" style={{color: '#F2F2F2', marginBottom: '2rem'}}>
                  Transform Video Editing with Visual Workflows
                </Heading>
                <p className="text-center" style={{color: '#BFBFBF', fontSize: '1.25rem', marginBottom: '3rem'}}>
                  STREAMLINE is a powerful, node-based video editing application that transforms complex FFMPEG operations into an intuitive visual workflow. Build professional video processing pipelines by simply connecting nodes—no command-line expertise required.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{padding: '4rem 0', background: '#1A1A1A'}}>
          <div className="container">
            <Heading as="h2" className="text-center" style={{color: '#F2F2F2', marginBottom: '3rem'}}>
              Key Features
            </Heading>
            <div className="row" style={{gap: '2rem'}}>
              <div className="col col--4">
                <div className="feature-card">
                  <Heading as="h3" style={{color: '#8BEF6C', marginBottom: '1rem'}}>
                    Visual Node-Based Editing
                  </Heading>
                  <p style={{color: '#BFBFBF'}}>
                    Create complex video processing pipelines by simply dragging and connecting nodes. No command-line expertise required.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card">
                  <Heading as="h3" style={{color: '#8BEF6C', marginBottom: '1rem'}}>
                    Real-Time Preview
                  </Heading>
                  <p style={{color: '#BFBFBF'}}>
                    See your changes instantly with real-time preview generation. Adjust parameters and watch your video transform in real-time.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card">
                  <Heading as="h3" style={{color: '#8BEF6C', marginBottom: '1rem'}}>
                    Comprehensive Node Library
                  </Heading>
                  <p style={{color: '#BFBFBF'}}>
                    Extensive library of pre-built nodes covering every aspect of video processing, from basic operations to advanced effects.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card">
                  <Heading as="h3" style={{color: '#8BEF6C', marginBottom: '1rem'}}>
                    AI-Powered Control
                  </Heading>
                  <p style={{color: '#BFBFBF'}}>
                    Built-in MCP server enables AI assistants to control the application programmatically. Describe what you want in natural language.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card">
                  <Heading as="h3" style={{color: '#8BEF6C', marginBottom: '1rem'}}>
                    Pipeline Validation
                  </Heading>
                  <p style={{color: '#BFBFBF'}}>
                    Automatic validation ensures your workflows are correct before execution. Clear error messages help you fix issues quickly.
                  </p>
                </div>
              </div>
              <div className="col col--4">
                <div className="feature-card">
                  <Heading as="h3" style={{color: '#8BEF6C', marginBottom: '1rem'}}>
                    Cross-Platform
                  </Heading>
                  <p style={{color: '#BFBFBF'}}>
                    Available for macOS, Windows, and Linux. Built on Electron and React for a consistent experience across all platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{padding: '4rem 0', background: '#0D0D0D'}}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text-center">
                <Heading as="h2" style={{color: '#F2F2F2', marginBottom: '2rem'}}>
                  Ready to Get Started?
                </Heading>
                <p style={{color: '#BFBFBF', fontSize: '1.125rem', marginBottom: '2rem'}}>
                  Download STREAMLINE today and discover how visual workflows can transform your video editing process.
                </p>
                <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
                  <Link
                    className="button button--primary button--lg btn-primary"
                    to="/docs/intro">
                    View Documentation
                  </Link>
                  <Link
                    className="button button--secondary button--lg btn-secondary"
                    href="https://github.com/IORoot/streamline">
                    View on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
