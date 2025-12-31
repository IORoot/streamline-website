# STREAMLINE Website

Documentation and showcase website for STREAMLINE - a visual, node-based video editing application powered by FFMPEG.

## Tech Stack

- **Docusaurus 3.9.2** - Documentation framework
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **React 19** - UI library

## Getting Started

### Prerequisites

- Node.js 20.0 or above
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/streamline/streamline-website.git
cd streamline-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000`.

### Build

To build the site for production:

```bash
npm run build
```

The built files will be in the `build` directory.

### Serve Production Build

To serve the production build locally:

```bash
npm run serve
```

## Deployment

### Netlify (via GitHub Actions)

This project is configured to automatically deploy to Netlify when changes are pushed to the `main` or `master` branch.

#### Setup

1. Create a Netlify site and get your Site ID
2. Generate a Netlify Auth Token from your Netlify account settings
3. Add the following secrets to your GitHub repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify authentication token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

The GitHub Actions workflow (`.github/workflows/netlify-deploy.yml`) will automatically:
- Build the Docusaurus site
- Deploy to Netlify on every push to main/master

### Manual Netlify Deployment

You can also deploy manually using the Netlify CLI:

```bash
npm run build
netlify deploy --dir=build --prod
```

## Project Structure

```
streamline-website/
├── blog/                 # Blog posts
├── docs/                 # Documentation pages
├── src/
│   ├── components/      # React components
│   ├── css/             # Global styles and Tailwind
│   └── pages/           # Custom pages (homepage, showcase)
├── static/              # Static assets (images, etc.)
├── docusaurus.config.ts # Docusaurus configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── netlify.toml         # Netlify deployment configuration
```

## Design System

The website uses the STREAMLINE design system with:

- **Colors**: Dark theme with primary green (#8BEF6C) and secondary purple (#D06CEF)
- **Typography**: Open Sans font family
- **Spacing**: Consistent 4px-based spacing scale
- **Border Radius**: 1.5rem base radius

See `src/css/custom.css` for the complete design system implementation.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Copyright © 2024 STREAMLINE. All rights reserved.
