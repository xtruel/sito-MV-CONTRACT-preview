# Build
Write-Host "Building..."
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Fix structure for desired URL
Write-Host "Structuring for anteprimasitovetrina..."
if (Test-Path dist\anteprimasitovetrina) { Remove-Item dist\anteprimasitovetrina -Recurse -Force }
New-Item -ItemType Directory -Path dist\anteprimasitovetrina | Out-Null
Get-ChildItem dist -Exclude anteprimasitovetrina | Move-Item -Destination dist\anteprimasitovetrina

# Add a root redirect index.html
$redirectHtml = '<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=anteprimasitovetrina/" /></head><body>Redirecting...</body></html>'
Set-Content -Path dist\index.html -Value $redirectHtml

# Deploy to gh-pages branch manually
Write-Host "Deploying to gh-pages branch..."

# Create a temporary git repo in dist to push from
Set-Location dist
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy anteprimasitovetrina"

# Push to origin gh-pages force
# Need remote URL. Assuming origin is set in parent.
# fetching parent remote
$remoteUrl = "https://github.com/xtruel/sito-MV-CONTRACT-preview.git"
git remote add origin $remoteUrl
git push -f origin gh-pages

Set-Location ..
Write-Host "Deployment Done."
