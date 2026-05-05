# Deployment Instructions for Vercel

This project is ready to deploy to Vercel. Follow these steps:

## Quick Deploy

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Horizon Mabati Factory website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the settings
6. Click "Deploy"

## Build Configuration (auto-detected)

- Build Command: `pnpm build`
- Output Directory: `dist`
- Install Command: `pnpm install`

## Environment

The project uses:
- React 18.3.1
- Vite 6.3.5
- Tailwind CSS v4
- Motion (Framer Motion)
- TypeScript

All dependencies will be installed automatically during deployment.

## After Deployment

Your website will be live at: `https://<your-project-name>.vercel.app`

You can also add a custom domain in the Vercel dashboard.
