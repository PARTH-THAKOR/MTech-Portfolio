# MTech-Portfolio

Personal portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Deployed on Firebase Hosting.

Live: [paraglide.in](https://paraglide.in)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Build and Deploy](#build-and-deploy)
- [License](#license)

---

## Overview

A modern, dark-themed portfolio website designed with a monochromatic grayscale aesthetic. The site features an animated canvas grid background, glassmorphism card effects, smooth scroll navigation, and a fully responsive layout optimized for desktop, tablet, and mobile viewports.

### Sections

- **Hero** -- Introduction with typewriter role cycling and call-to-action buttons.
- **About** -- Bio, academic achievements, and categorized technical skills.
- **Education** -- Premium bento grid layout detailing postgraduate and undergraduate studies with typographic year graphics.
- **Experience** -- Timeline-based professional experience cards.
- **Projects** -- Highlighted engineering and research projects with GitHub links.
- **Achievements** -- 2x2 grid representing national exams and academic rank accomplishments.
- **Profile Links** -- External links to GitHub, LinkedIn, LeetCode, and Medium.
- **More About Me** -- LinkedIn call-to-action section.
- **Contact** -- Direct email and current location cards.
- **Footer** -- Branding, copyright, and back-to-top navigation.

---

## Tech Stack

| Layer        | Technology                        |
|--------------|-----------------------------------|
| Framework    | React 19                          |
| Language     | TypeScript 6                      |
| Styling      | Tailwind CSS 4                    |
| Build Tool   | Vite 8                            |
| Icons        | Lucide React                      |
| Fonts        | Inter, Outfit (Google Fonts)      |
| Hosting      | Firebase Hosting                  |
| Linting      | OxLint                            |

---

## Project Structure

```
Portfolio/
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── AnimatedGridBackground.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── MoreAboutMe.tsx
│   │   ├── ProfileLinks.tsx
│   │   └── Projects.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── firebase.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

```bash
git clone https://github.com/PARTH-THAKOR/MTech-Portfolio.git
cd MTech-Portfolio
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## Build and Deploy

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Firebase Deployment

Ensure Firebase CLI is installed and the project is configured:

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting
```

The site is deployed to [paraglide.in](https://paraglide.in).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
