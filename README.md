# Project Showcase

A showcase of my coding projects built with Next.js, React, and Tailwind CSS.

## GitHub Actions Workflow

This project includes a GitHub Actions workflow that automates the testing and building of the application. The workflow is triggered when:

- You push to the `main` or `master` branch
- You open a pull request to the `main` or `master` branch
- You manually trigger the workflow

### What the Workflow Does

1. **Checkout**: Retrieves the repository code
2. **Setup Node.js**: Sets up Node.js environment (testing on multiple versions)
3. **Install Dependencies**: Installs project dependencies 
4. **Lint Code**: Runs ESLint to check code quality
5. **Build Application**: Builds the Next.js application
6. **Cache Build Output**: Caches the build output to speed up future builds

### Deployment (Optional)

The workflow includes a commented-out deployment job that you can configure to automatically deploy your application when changes are pushed to the main branch. The example is set up for Vercel deployment, but you can modify it for other platforms.

To enable automatic deployment to Vercel:

1. Uncomment the `deploy` job in the workflow file
2. Set up the following secrets in your GitHub repository:
   - `VERCEL_TOKEN`: Your Vercel API token
   - `VERCEL_ORG_ID`: Your Vercel organization ID
   - `VERCEL_PROJECT_ID`: Your Vercel project ID

### Manually Triggering the Workflow

You can manually trigger the workflow from the "Actions" tab in your GitHub repository by clicking on "Project Showcase CI/CD" and then "Run workflow".

## Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start the production server
npm start

# Run linting
npm run lint
