#!/usr/bin/env bash

trap 'exit' ERR

# set up hosts file
echo "📄 Updating hosts file..."
if ! grep -q "127.0.0.1 dev.gotocompany.com" /etc/hosts; then
    sudo bash -c 'echo "127.0.0.1 dev.gotocompany.com" >> /etc/hosts'
fi

if ! grep -q "127.0.0.1 localhost" /etc/hosts; then
    sudo bash -c 'echo "127.0.0.1 localhost" >> /etc/hosts'
fi

# show hosts file
echo "📄 /etc/hosts"
cat /etc/hosts
echo "✅ Updated hosts file"

# installing dependencies
echo "📦 Installing dependencies..."
pnpm install
echo "✅ Dependencies Installed"

# run development server
echo "🚀 Running dev server..."
pnpm run dev