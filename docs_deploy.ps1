# Build
Write-Host "Re-building for Docs deployment..."
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# Docs folder setup
Write-Host "Setting up docs..."
New-Item -ItemType Directory -Path docs -Force | Out-Null
Copy-Item dist\* -Destination docs -Recurse -Force

# Docs subfolder for anteprima
New-Item -ItemType Directory -Path docs\anteprimasitovetrina -Force | Out-Null
Copy-Item dist\* -Destination docs\anteprimasitovetrina -Recurse -Force -Exclude "anteprimasitovetrina"

# Add .nojekyll
New-Item -ItemType File -Path docs\.nojekyll -Force | Out-Null
New-Item -ItemType File -Path docs\anteprimasitovetrina\.nojekyll -Force | Out-Null

# Commit to MAIN branch including DOCS
Write-Host "Committing docs to main..."
git add docs
git add .
git commit -m "Update docs for github pages on main"
git push origin main

Write-Host "Docs push done."
