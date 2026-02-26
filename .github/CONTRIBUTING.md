# Contributing to weweb-cloudflare-ci

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (e.g., links, screenshots)
- **Describe the behavior you observed vs what you expected**
- **Include your environment details** (Node version, OS, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Explain why this enhancement would be useful** to most users
- **List some examples of how it would be used**

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies** if needed (`npm install` in the worker directory)
3. **Test your changes** thoroughly
4. **Update documentation** if you're changing functionality
5. **Make sure your code follows the existing style**
6. **Write clear commit messages**

## Development Setup

```bash
# Clone your fork
git clone https://github.com/Mel000000/weweb-cloudflare-ci.git

# Navigate to worker directory
cd weweb-cloudflare-ci/cloudflare-worker/weweb-trigger

# Install dependencies (if any)
npm install

# Test locally with Wrangler
wrangler dev
