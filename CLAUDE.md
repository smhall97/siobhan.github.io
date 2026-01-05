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

## Branching Strategy

This repository uses a two-branch workflow for safe development and deployment:

### Branch Overview

- **`main`** - Production branch
  - Always deployable and stable
  - Automatically deploys to siobhanmackenziehall.com via GitHub Actions
  - Protected - only merge tested, working code from `dev`

- **`dev`** - Development branch
  - Default working branch for all development
  - No automatic deployment (safe for experimentation)
  - Create feature commits here and test thoroughly before merging to `main`

### Development Workflow

1. **Daily Development** (on `dev` branch):
   ```bash
   git checkout dev
   git pull origin dev        # Sync with remote
   # Make changes, test locally
   git add .
   git commit -m "Description of changes"
   git push origin dev        # Push to remote dev (no deployment)
   ```

2. **Testing Changes**:
   ```bash
   npm run dev                # Test in development mode
   npm run build              # Verify production build works
   npm run preview            # Preview production build locally
   ```

3. **Deploying to Production**:
   ```bash
   git checkout main
   git pull origin main       # Ensure main is up to date
   git merge dev              # Merge tested changes from dev
   git push origin main       # Deploy automatically via GitHub Actions
   ```

4. **After Deployment**:
   ```bash
   git checkout dev           # Switch back to dev for next changes
   ```

### Merge Conflict Resolution

If you encounter merge conflicts when merging `dev` into `main`:

```bash
git checkout main
git merge dev                # Conflict occurs
# Resolve conflicts in your editor
git add .                    # Stage resolved files
git commit                   # Complete the merge
git push origin main         # Deploy
git checkout dev
```

### Branch Protection Best Practices

- **Always work on `dev`** for new features and changes
- **Test thoroughly** before merging to `main`
- **Keep `main` deployable** at all times
- **Merge frequently** from `dev` to `main` to avoid large, complex merges
- **Pull before you push** to stay synchronized

## Making Changes

### On Dev Branch (Daily Development)

1. Ensure you're on the `dev` branch: `git checkout dev`
2. Pull latest changes: `git pull origin dev`
3. Make changes to source files in `/src`
4. Test locally with `npm run dev`
5. Build with `npm run build` to verify production build
6. Commit and push to `dev`: `git push origin dev` (no deployment happens)

### Deploying to Production

1. Ensure all changes are committed on `dev`
2. Test thoroughly: `npm run dev` and `npm run build`
3. Switch to main: `git checkout main`
4. Pull latest: `git pull origin main`
5. Merge dev: `git merge dev`
6. Push to main: `git push origin main` - GitHub Actions will deploy automatically
7. Switch back to dev: `git checkout dev`

### Manual Deployment (Alternative)

```bash
npm run deploy
```
This uses `gh-pages` package to deploy the `dist` folder directly to the `gh-pages` branch, bypassing the GitHub Actions workflow. Useful for emergency hotfixes.

## Customization

- Update site content in [src/App.tsx](src/App.tsx)
- Modify styles in [src/App.css](src/App.css) and [src/index.css](src/index.css)
- Add new components in `/src` as needed
- Place static assets in `/public` (copied as-is) or `/src/assets` (processed by Vite)
