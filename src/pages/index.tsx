import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Transform Video Editing with Visual Workflows
        </Heading>
        <p className="hero__subtitle">
          STREAMLINE is a powerful, node-based video editing application that transforms complex FFMPEG operations into an intuitive visual workflow. Build professional video processing pipelines by simply connecting nodes—no command-line expertise required.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/showcase">
            View Showcase
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureSection() {
  const features = [
    {
      title: 'Visual Node-Based Editing',
      description: 'Create complex video processing pipelines by simply dragging and connecting nodes. No command-line expertise required.',
      icon: '🎨',
    },
    {
      title: 'Real-Time Preview',
      description: 'See your changes instantly with real-time preview generation. Iterate quickly and perfect your workflow before rendering.',
      icon: '⚡',
    },
    {
      title: 'Comprehensive Node Library',
      description: 'Access extensive pre-built nodes covering every aspect of video processing—from basic operations to advanced effects.',
      icon: '📚',
    },
    {
      title: 'AI-Powered Control',
      description: 'Use AI assistants to control the application programmatically. Describe what you want in natural language.',
      icon: '🤖',
    },
    {
      title: 'Pipeline Validation',
      description: 'Automatic validation ensures your workflows execute successfully with clear, actionable error messages.',
      icon: '✅',
    },
    {
      title: 'Cross-Platform',
      description: 'Available for macOS, Windows, and Linux with a consistent experience across all platforms.',
      icon: '🖥️',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--4 margin-bottom--lg">
              <div className={clsx('card', styles.featureCard)}>
                <div className="card__header">
                  <h3>{feature.icon} {feature.title}</h3>
                </div>
                <div className="card__body">
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const useCases = [
    {
      title: 'Content Creators',
      description: 'Quickly adapt videos for different platforms, apply aspect ratios, and batch process entire folders.',
    },
    {
      title: 'Video Production Teams',
      description: 'Create reusable pipeline templates for color correction, format conversion, and proxy generation.',
    },
    {
      title: 'Developers & Automation',
      description: 'Integrate JSON export format into automated workflows with AI-driven automation capabilities.',
    },
    {
      title: 'Educators & Trainers',
      description: 'Teach video processing concepts visually without requiring students to learn complex command-line syntax.',
    },
  ];

  return (
    <section className={styles.useCases}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--xl">
          Who Uses STREAMLINE?
        </Heading>
        <div className="row">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="col col--6 margin-bottom--lg">
              <div className={clsx('card', styles.useCaseCard)}>
                <div className="card__header">
                  <h3>{useCase.title}</h3>
                </div>
                <div className="card__body">
                  <p>{useCase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="STREAMLINE - Visual Video Editing, Powered by FFMPEG"
      description="Transform complex FFMPEG operations into intuitive visual workflows. Build professional video processing pipelines with a node-based editor.">
      <HomepageHeader />
      <main>
        <FeatureSection />
        <UseCasesSection />
      </main>
    </Layout>
  );
}
