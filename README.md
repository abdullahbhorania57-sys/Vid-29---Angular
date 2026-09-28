# Angular GitHub Actions Demo

A simple Angular application with a GitHub Actions workflow.

## Run locally

```bash
npm install
npm start
```

## GitHub Actions

Every push to the `main` branch triggers `.github/workflows/main.yml`.

The workflow:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the Angular application
