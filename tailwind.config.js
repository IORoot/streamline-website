/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docusaurus.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        // Base Colors
        'bg-dark': '#0D0D0D',
        'bg-base': '#1A1A1A',
        'bg-light': '#262626',
        'border': '#333333',
        'text': '#F2F2F2',
        'text-muted': '#BFBFBF',
        // Accent Colors
        'primary': '#8BEF6C',
        'secondary': '#D06CEF',
        'success': '#63B363',
        'warning': '#E0B052',
        'danger': '#C24040',
        'info': '#529EE0',
      },
      fontFamily: {
        sans: ['Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        mono: ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      borderRadius: {
        'lg': '1.5rem',
        'md': '22px',
        'sm': '20px',
        'xs': '6px',
      },
      boxShadow: {
        'small': 'inset 0 1px 2px rgba(255, 255, 255, 0.19), 0 1px 2px rgba(0, 0, 0, 0.19), 0 2px 4px rgba(0, 0, 0, 0.08)',
        'standard': 'inset 0 1px 2px rgba(255, 255, 255, 0.19), 0 2px 4px rgba(0, 0, 0, 0.19), 0 4px 8px rgba(0, 0, 0, 0.08)',
        'node': '0 4px 12px rgba(0, 0, 0, 0.2)',
        'node-hover': '0 6px 16px rgba(0, 0, 0, 0.3)',
        'node-selected': '0 6px 16px rgba(139, 239, 108, 0.3)',
      },
    },
  },
  plugins: [],
};
