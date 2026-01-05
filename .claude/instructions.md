# Claude Instructions for siobhan.github.io

## Project Overview
This is Siobhan Hall's personal portfolio website built with React and deployed on GitHub Pages.

## Deployment Workflow

### Branch Structure
- `main` - Production branch (auto-deploys to GitHub Pages)
- `dev` - Development branch for active work

### How to Deploy Changes

**IMPORTANT**: To deploy to production, push to the `main` branch:

```bash
git checkout main
git merge dev
git push origin main
```

GitHub Pages automatically deploys from `main` within a few minutes.

## Development Guidelines

1. **Make changes on `dev` branch** - All active development happens here
2. **Test before merging** - Ensure changes work as expected
3. **Merge to main to deploy** - Only merge to main when ready to go live
4. **Keep context files updated** - Experience, projects, and publications in `siobhan_experience_context/`

## Project Structure

- `src/` - React source code (components, styles, assets)
- `public/` - Public static files
- `siobhan_experience_context/` - Personal context files (gitignored, not deployed)
- Root files (index.html, etc.) - Build artifacts for GitHub Pages

## Permissions

You have pre-approved permissions for:
- Git operations (add, commit, push, merge, checkout, rebase, etc.)
- Build commands (npm run build)
- Python scripts
- File operations (rm, rsync, find, cat)

## Content Updates

When updating experience, projects, or publications, always:
1. Update the relevant file in `siobhan_experience_context/`
2. Update the corresponding React component in `src/`
3. Test the changes
4. Commit and push to dev
5. When ready to deploy, merge dev to main and push

## Notes

- Build artifacts are committed to the repo for GitHub Pages deployment
- The site is live at siobhanmackenziehall.com (CNAME configured)
- Changes to main are deployed automatically
