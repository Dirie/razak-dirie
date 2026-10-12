# Razak Dirie Portfolio

A modern personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components. The site showcases professional experience, education, technical skills, blog posts, gallery highlights, and contact information.

## Overview

This project is a responsive portfolio for Abdulrazak A. Dirie, designed to present:

- About / profile summary
- Professional experience
- Education history
- Skills and technologies
- Blog articles
- Photo gallery
- Contact details

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- shadcn/ui
- Lucide React

## Project Structure

```bash
src/
├── components/
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   └── ui/
├── data/
│   └── blogs.js
├── hooks/
├── lib/
├── pages/
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── BlogDetail.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Gallery.tsx
│   ├── Home.tsx
│   ├── Index.tsx
│   ├── Login.tsx
│   └── Skills.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Features

- Responsive layout for desktop and mobile
- Smooth animated experience using Framer Motion
- Client-side routing with React Router
- Reusable UI building blocks from shadcn/ui
- Blog detail views and gallery sections
- Clean, modern design with Tailwind styling

## Prerequisites

Before running the app, make sure you have:

- Node.js 18+
- npm or Bun

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local URL shown in the terminal (typically http://localhost:5173)

## Available Scripts

```bash
npm run dev      # Start the Vite development server
npm run build    # Build the production bundle
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint checks
```

## Production Build

To create an optimized production build:

```bash
npm run build
```

Then preview it with:

```bash
npm run preview
```

## Notes

- The app uses a custom portfolio design with a glassmorphism-inspired navigation bar and modern card sections.
- The project includes a blog data source in `src/data/blogs.js`.
- The portfolio is designed to be easy to customize with your own content, personal information, and project details.

## License

This project is for personal portfolio use. Update the license as needed for your own deployment or distribution requirements.

## Contact

For inquiries or collaboration, contact the portfolio owner via the information presented in the site or the contact section.
