# Build
Write-Host "Cleaning and Building..."
if (Test-Path dist) { Remove-Item dist -Recurse -Force }
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Add .nojekyll to prevent 404s on underscores
New-Item -ItemType File -Path dist\.nojekyll -Force

# Duplicate for subfolder "anteprimasitovetrina"
Write-Host "Creating subfolder copy..."
New-Item -ItemType Directory -Path dist\anteprimasitovetrina | Out-Null
Copy-Item dist\* -Destination dist\anteprimasitovetrina -Recurse -Force -Exclude "anteprimasitovetrina"

# Deploy to gh-pages branch manually
Write-Host "Deploying to gh-pages branch..."

# Create a temporary git repo in dist to push from
Set-Location dist
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy double fail-safe"

# Push to origin gh-pages force
$remoteUrl = "https://github.com/xtruel/sito-MV-CONTRACT-preview.git"
git remote add origin $remoteUrl
git push -f origin gh-pages

Set-Location ..
Write-Host "Deployment Done."
