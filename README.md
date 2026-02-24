# Akash Potraje - Developer Portfolio

This is a modern, responsive, and highly-animated developer portfolio built specifically for a DevOps / Cloud Engineer.

## Tech Stack
- Next.js 15 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion (for animations)
- Lucide React (for icons)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizing Content
All the personal data, skills, experience, and projects are centralized in `src/data/portfolioData.ts`. Edit this file to update the content without needing to dig through the React components.

Remember to replace the placeholder `resume.pdf` in the `public` directory with your actual resume before deploying.

## Deployment Instructions

### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a GitHub repository.
2. Log in to Vercel and click "Add New... > Project".
3. Import your GitHub repository.
4. Leave the default settings (Vercel automatically detects Next.js) and click **Deploy**.

### Netlify
1. Push your code to a GitHub repository.
2. Log in to Netlify and click "Add new site > Import an existing project".
3. Select your GitHub repository.
4. Netlify should auto-detect the build command (`npm run build`) and publish directory (`.next`). Click **Deploy Site**.

## Domain Suggestions
To make your portfolio look as professional as possible, consider purchasing a custom domain name from providers like Namecheap, Google Domains, or directly through Vercel.

Some domain ideas for your brand:
- `akashpotraje.com`
- `akashpotraje.dev`
- `shadowaks.dev`
- `akashcloud.dev`
