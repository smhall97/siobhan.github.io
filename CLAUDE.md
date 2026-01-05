# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a **React + TypeScript + Vite** portfolio website for Siobhan Mackenzie Hall, hosted on GitHub Pages with the custom domain **siobhanmackenziehall.com**.

## Tech Stack

- **React 18** with TypeScript
- **Vite 6** for build tooling and development server
- **GitHub Actions** for automated deployment to GitHub Pages

## Development Commands

### First-Time Setup
```bash
npm install
```

### Development
```bash
npm run dev           # Start development server (default: http://localhost:5173)
npm run build         # Build for production (outputs to ./dist)
npm run preview       # Preview production build locally
```

### Deployment
```bash
npm run deploy        # Build and deploy to GitHub Pages using gh-pages
```

The repository also includes a GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) that automatically builds and deploys when you push to the `main` branch.

## Project Structure

```
/
├── src/
│   ├── main.tsx              # Application entry point
│   ├── App.tsx               # Main App component
│   ├── App.css               # App-specific styles
│   ├── index.css             # Global styles
│   └── assets/               # Images, fonts, and other static assets
├── public/
│   └── CNAME                 # Custom domain configuration (siobhanmackenziehall.com)
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deployment workflow
├── index.html                # HTML entry point
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## Architecture Notes

- The app uses a simple single-page structure with React
- Vite is configured with `base: '/'` for custom domain deployment
- CNAME file in `/public` ensures the custom domain persists after builds
- TypeScript is configured in strict mode for type safety

## Deployment Configuration

### GitHub Pages Setup
1. Repository must have GitHub Pages enabled
2. Source should be set to "GitHub Actions" (not branch)
3. Custom domain configured in repository settings: siobhanmackenziehall.com
4. DNS must point to GitHub Pages IPs

### Automatic Deployment
- Every push to `main` triggers the GitHub Actions workflow
- The workflow builds the app and deploys to GitHub Pages
- CNAME file is automatically included in the build output

### Manual Deployment
```bash
npm run deploy
```
This uses `gh-pages` package to deploy the `dist` folder to the `gh-pages` branch.

## Making Changes

1. Make changes to source files in `/src`
2. Test locally with `npm run dev`
3. Build with `npm run build` to verify production build
4. Commit and push to `main` - GitHub Actions will deploy automatically
5. OR run `npm run deploy` to deploy manually

## Customization

- Update site content in [src/App.tsx](src/App.tsx)
- Modify styles in [src/App.css](src/App.css) and [src/index.css](src/index.css)
- Add new components in `/src` as needed
- Place static assets in `/public` (copied as-is) or `/src/assets` (processed by Vite)
