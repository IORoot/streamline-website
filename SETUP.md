# Setup Instructions

## Initial Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Tailwind CSS v4

This project uses Tailwind CSS v4 with the new CSS-first configuration approach. The Tailwind styles are imported directly in `src/css/custom.css` using:

```css
@import "tailwindcss";
```

The Tailwind configuration is in `tailwind.config.js` and includes the Streamline design system colors, typography, and spacing.

**Note:** If Tailwind v4 is not yet available, you may need to:
- Use Tailwind CSS v3.x instead
- Or use the Tailwind v4 alpha/beta version if available

## Netlify Deployment Setup

### GitHub Secrets Required

Add these secrets to your GitHub repository (Settings > Secrets and variables > Actions):

1. **NETLIFY_AUTH_TOKEN**: 
   - Go to Netlify > User Settings > Applications > Personal Access Tokens
   - Generate a new token and add it as `NETLIFY_AUTH_TOKEN`

2. **NETLIFY_SITE_ID**:
   - Go to your Netlify site > Site Settings > General
   - Copy the "Site ID" and add it as `NETLIFY_SITE_ID`

### Automatic Deployment

Once the secrets are configured, pushing to the `main` or `master` branch will automatically:
1. Build the Docusaurus site
2. Deploy to Netlify

The workflow file is located at `.github/workflows/netlify-deploy.yml`.

## Customization

### Design System

The Streamline design system is defined in:
- `src/css/custom.css` - CSS variables and global styles
- `tailwind.config.js` - Tailwind theme configuration

### Pages

- Homepage: `src/pages/index.tsx`
- Showcase: `src/pages/showcase.tsx`
- Documentation: `docs/` directory

### Configuration

- Docusaurus config: `docusaurus.config.ts`
- Sidebar config: `sidebars.ts`
- Netlify config: `netlify.toml`
