# Claude Instructions for siobhan.github.io

## Project Overview
This is Siobhan Hall's personal portfolio website built with React and deployed on GitHub Pages.

## Git Workflow - MANDATORY

### Branch Rules (NON-NEGOTIABLE)
⚠️ **CRITICAL**: NEVER commit directly to the `main` branch

- `main` - Production-only branch (auto-deploys to GitHub Pages, NO direct commits)
- `dev` - ALL development work happens here

### Before ANY git commit:
1. **ALWAYS verify you are on the dev branch**: Run `git branch` or `git status`
2. **If on main, immediately switch to dev**: Run `git checkout dev`
3. **NEVER use `git commit` while on main** - This will be blocked by pre-commit hook

### Deployment Workflow

To deploy changes to production:

```bash
# Ensure dev is ready for production
git checkout dev
git status  # Verify everything is committed

# Switch to main and merge
git checkout main
git merge dev
git push origin main

# Return to dev for continued work
git checkout dev
```

GitHub Pages automatically deploys from `main` within a few minutes.

## Development Guidelines

1. **Make ALL changes on `dev` branch** - This is enforced by pre-commit hook
2. **Test before merging** - Ensure changes work as expected
3. **Merge to main ONLY to deploy** - Main is production-only, not for development
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
