## INTRODUCTION TO REACT

## Table of contents

- [Overview](#overview)
    - [Induction](#induction)
    - [Introduction](#introduction)
- [React Content](#react-content)
- [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### Induction
- We will be creating a Weather API project. The Portfolio Project will be found at the Root Repository.

### Introduction
- React is a Javascript library used to create websites. Allows creation of Ingle Page App (SPA)

## React Content

### Install Node.js
- Node.js installed on your computer. Download it from the official website.

### Creating a React App using Vite + Tailwind CSS

```bash
# Terminal or command prompt.
npm create vite@latest
cd frontend
npm install
npm run dev -- --host

# Install tailwindcss via npm, and create your tailwind.config.js file.
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install any other dependencies/ packages
npm install react-router-dom
npm i -D daisyui@latest
npm i @vercel/analytics

# Tailwind directives to your CSS.
@tailwind base;
@tailwind components;
@tailwind utilities;

# Add the paths to all of your template files in your tailwind.config.js file.
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

npm run dev -- --host
```

## Components + Templates & Dynamic Values

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Useful Resources
- [Tailwind Website](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React In Depth - Tech with Nader Youtube](https://www.youtube.com/watch?v=qnrYvsBdtD8&list=PLovN13bqAx7CKHNJnW3npFEXlXUQBghNI)

**More content to be added, feel free to add any engaging content**

## Author

- Momanyi Brian - [Website](https://momanyi-brian-portfolio.vercel.app)