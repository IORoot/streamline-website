# Node.js Version Requirements

This project requires **Node.js v20.x** (LTS) to build successfully.

Node.js v24+ has compatibility issues with Docusaurus's webpack configuration.

## Installing Node.js v20

### Option 1: Using Homebrew (macOS)

```bash
# Install Node.js 20 via Homebrew
brew install node@20

# Link it (if needed)
brew link node@20 --force --overwrite
```

### Option 2: Using nvm (Node Version Manager)

If you don't have nvm installed:

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal or run:
source ~/.zshrc

# Install and use Node.js 20
nvm install 20
nvm use 20
```

### Option 3: Download from nodejs.org

1. Visit https://nodejs.org/
2. Download Node.js v20.x LTS
3. Install the package

### Option 4: Using fnm (Fast Node Manager)

```bash
# Install fnm
brew install fnm

# Add to your shell (add to ~/.zshrc)
eval "$(fnm env --use-on-cd)"

# Install and use Node.js 20
fnm install 20
fnm use 20
```

## Verifying Installation

After installing Node.js v20, verify:

```bash
node --version  # Should show v20.x.x
npm --version
```

## Building the Project

Once you have Node.js v20 installed:

```bash
npm install
npm run build
```

## GitHub Actions

The GitHub Actions workflow is already configured to use Node.js v20.x automatically.
