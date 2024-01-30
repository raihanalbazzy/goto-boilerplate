#!/bin/bash

# Remove node_modules
echo "Removing node_modules..."
find . -name "node_modules" -type d -prune -exec rm -rf '{}' +

# Remove .next (Next.js build output)
echo "Removing .next..."
rm -rf ./.next

# Remove pnpm-lock.yaml
echo "Removing pnpm-lock.yaml..."
find . -name "pnpm-lock.yaml" -type f -prune -exec rm -rf '{}' +

echo "Cleanup complete!"