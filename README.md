# STREAMLINE Website

Documentation and showcase website for STREAMLINE - a visual, node-based video editing application powered by FFMPEG.

## Built With

- [Docusaurus](https://docusaurus.io/) - Documentation framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Development

### Prerequisites

- Node.js 20.x (LTS) and npm
- **Note**: Node.js v24+ has compatibility issues with Docusaurus. Please use Node.js v20.x

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The site is automatically deployed to Netlify on push to the `main` branch via GitHub Actions.

#### Manual Deployment

To deploy manually to Netlify:

1. Build the site: `npm run build`
2. Deploy using Netlify CLI: `netlify deploy --prod --dir=build`

#### GitHub Actions Setup

The GitHub Actions workflow requires the following secrets to be configured in your repository:

- `NETLIFY_AUTH_TOKEN`: Your Netlify authentication token
- `NETLIFY_SITE_ID`: Your Netlify site ID

To get these:
1. Go to Netlify → User settings → Applications → New access token
2. Create a token and add it as `NETLIFY_AUTH_TOKEN`
3. Get your Site ID from Netlify → Site settings → General → Site details

## Project Structure

```
streamline-website/
├── docs/                # Documentation markdown files
├── src/
│   ├── css/            # Custom CSS with Tailwind
│   ├── components/     # React components
│   └── pages/          # Custom pages
├── static/             # Static assets
├── docusaurus.config.ts # Docusaurus configuration
└── tailwind.config.js  # Tailwind configuration
```

## License

ISC
