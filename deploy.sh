# abort on errors
set -e

env PUBLIC_URL=https://sicelukwanda.com/ npm run build

cd build

# Create or update the CNAME file with your custom domain
echo "sicelukwanda.com" > CNAME

git init
git checkout -b main
git add -A

git commit -m 'deploy'

# deploying to https://{USERNAME}.github.io (see https://pages.github.com for instructions)
git push -f git@github.com:Sicelukwanda/Sicelukwanda.github.io.git main

# deploying to https://{USERNAME}.github.io/{REPO}
# git push -f git@github.com:{USERNAME}/{USERNAME}.github.io.git  main:{REPO}