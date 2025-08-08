FROM mcr.microsoft.com/devcontainers/javascript-node:1-18


RUN mkdir -p /workspaces/schmiegelt.it/node_modules && chown node /workspaces/schmiegelt.it/node_modules

# Install latest pnpm
RUN npm install -g pnpm

# Set the working directory
WORKDIR /workspace

