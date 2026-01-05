# Siobhan Mackenzie Hall - Portfolio Website

Personal portfolio website built with React, TypeScript, and Vite.

🌐 **Live Site:** [siobhanmackenziehall.com](https://siobhanmackenziehall.com)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Tech Stack

- React 18 + TypeScript
- Vite 6
- GitHub Pages deployment
- GitHub Actions for CI/CD

## Development

This project uses a two-branch workflow:
- `dev` - Development branch (default for all work)
- `main` - Production branch (auto-deploys to live site)

```bash
# Switch to dev branch
git checkout dev

# Start development server
npm run dev
```

Visit `http://localhost:5173` after running `npm run dev`.

**Important:** The site only deploys when you merge to `main` and push. Working on `dev` is safe and won't affect the live site.

See [CLAUDE.md](CLAUDE.md) for detailed branching workflow and deployment guidelines.

## Project Structure

- `/src` - React source code
- `/public` - Static assets (including CNAME for custom domain)
- `/.github/workflows` - GitHub Actions deployment configuration

See [CLAUDE.md](CLAUDE.md) for detailed development guidelines.
