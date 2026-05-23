<div align="center">

# Likith V K — Portfolio

[![Live](https://img.shields.io/badge/🌐_Live_Site-likith--portfolio--psi.vercel.app-6366f1?style=for-the-badge)](https://likith-portfolio-psi.vercel.app)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org)

<br/>

> **Aspiring AI Engineer** passionate about Deep Learning, Computer Vision & Explainable AI.  
> This portfolio is crafted with interactive 3D visuals, animated type, and a dark futuristic aesthetic — built to stand out.

</div>

---

## 📸 Preview

| Landing | About |
|--------|-------|
| <img width="3200" height="1800" alt="Screenshot (458)" src="https://github.com/user-attachments/assets/6c802f7b-5abc-4c77-9b78-74fba639cbbf" /> |<img width="3200" height="1800" alt="Screenshot (459)" src="https://github.com/user-attachments/assets/9368915a-69e0-4df4-99d0-2aa2f82c8fad" />|

| Tech Stack | Projects |
|-----------|---------|
| <img width="3200" height="1800" alt="Screenshot (461)" src="https://github.com/user-attachments/assets/2d86fd4a-971a-496c-9d12-52f79b965938" /> |<img width="3200" height="1800" alt="Screenshot (460)" src="https://github.com/user-attachments/assets/43eece28-3d79-42cd-b430-79082a22fbb7" />|

---

## ✨ Highlights

- **🤖 3D Character** — Interactive Three.js character on the hero with mouse-tracking animations
- **🔤 Animated Type** — Scrambled text reveal cycling through roles: *Full Stack Developer*, *AI Engineer*
- **⚽ Physics-Based Tech Balls** — 3D bouncing spheres in the Tech Stack section, each branded with a technology logo
- **🧠 AI Project Showcase** — Featured work including a Brain Tumor Detection system (98.67% accuracy with Grad-CAM)
- **🖱️ Custom Cursor** — Bespoke cursor with hover glow effects throughout
- **📋 Resume Download** — One-click resume access pinned in the corner
- **📱 Fully Responsive** — Adapts seamlessly across all screen sizes
- **⚡ Blazing Fast** — Vite + optimized Three.js scenes for smooth 60fps performance

---

## 🗂️ Sections

| Section | Component | Description |
|---------|-----------|-------------|
| **Landing** | `Landing.tsx` | Hero with 3D character, animated name & scrolling role titles |
| **About** | `About.tsx` | Bio as an Aspiring AI Engineer — Deep Learning, CV, XAI |
| **What I Do** | `WhatIDo.tsx` | Service cards: AI & Deep Learning · Full Stack & Deployment |
| **Tech Stack** | `TechStack.tsx` | Interactive 3D physics balls with tech logos |
| **Work** | `Work.tsx` + `WorkImage.tsx` | Featured projects with numbered cards & live previews |
| **Career** | `Career.tsx` | Professional timeline & experience |
| **Education** | — | University · College · School |
| **Contact** | `Contact.tsx` | Email · Social links · Footer |

---

## 🛠️ Tech Stack

```
React 18 + TypeScript   —  Type-safe, component-driven UI
Vite                    —  Lightning-fast dev server & bundler
Tailwind CSS            —  Utility-first styling system
Three.js                —  WebGL-powered 3D scenes & character rendering
ESLint                  —  Code quality & consistency
Vercel                  —  Zero-config CI/CD deployment
```

---

## 📁 Project Structure

```
Likith-portfolio/
├── public/                        # Static assets & favicon
├── src/
│   ├── assets/                    # Images, 3D models, fonts
│   ├── components/
│   │   ├── Character/             # Three.js 3D character scene
│   │   ├── styles/                # Shared component styles
│   │   ├── utils/                 # Helper functions & hooks
│   │   ├── About.tsx              # About Me section
│   │   ├── Career.tsx             # Career / experience timeline
│   │   ├── Contact.tsx            # Contact section & social links
│   │   ├── Cursor.tsx             # Custom animated cursor
│   │   ├── HoverLinks.tsx         # Animated nav hover effects
│   │   ├── Landing.tsx            # Hero — 3D character + type animation
│   │   ├── Loading.tsx            # Page loader / intro animation
│   │   ├── MainContainer.tsx      # Root layout wrapper
│   │   ├── Navbar.tsx             # Fixed navbar (ABOUT · WORK · CONTACT)
│   │   ├── SocialIcons.tsx        # GitHub · LinkedIn · Instagram sidebar
│   │   ├── TechStack.tsx          # 3D bouncing tech-logo balls
│   │   ├── WhatIDo.tsx            # Services / specialisation cards
│   │   ├── Work.tsx               # Projects listing
│   │   └── WorkImage.tsx          # Project image/preview renderer
│   ├── context/                   # React context providers
│   ├── data/                      # Static data (projects, skills, etc.)
│   ├── types/                     # TypeScript type definitions
│   ├── App.tsx                    # Root component
│   ├── App.css
│   ├── index.css
│   ├── main.tsx                   # Entry point
│   └── vite-env.d.ts
├── index.html
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/Likith-2004/Likith-portfolio.git

# 2. Enter the directory
cd Likith-portfolio

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) — hot-reload is enabled out of the box. 🎉

### Build & Preview

```bash
# Production build
npm run build

# Preview the production build locally
npm run preview
```

Compiled output lands in `dist/` — ready to ship.

---

## 🌐 Deployment

Deployed on **Vercel** with automatic CI/CD. Every push to `main` triggers a new deploy.

**Live URL:** [https://likith-portfolio-psi.vercel.app](https://likith-portfolio-psi.vercel.app)

Want to fork and deploy your own?

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Likith-2004/Likith-portfolio)

---

## 🧠 Featured Project

### Brain Tumor Detection — Medical AI System
> Deep learning model that detects and classifies brain tumors from MRI scans with visual explanations via Grad-CAM.

- **Model:** ResNet18
- **Technique:** Grad-CAM explainability heatmaps
- **Stack:** PyTorch · Python · Flask · OpenCV · Grad-CAM

---

## 📬 Connect

| Platform | Link |
|----------|------|
| 🌐 Portfolio | [likith-portfolio-psi.vercel.app](https://likith-portfolio-psi.vercel.app) |
| 💼 GitHub | [@Likith-2004](https://github.com/Likith-2004) |
| 🔗 LinkedIn | [linkedin.com/in/likithvk](www.linkedin.com/in/likith-vk-929b5b280) |
| 📧 Email | likithvk2004@gmail.com |

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

Built with ❤️ by **Likith V K**  
BE Computer Science (AI) · Maharaja Institute of Technology, Mysore

**If this project inspired you, a ⭐ goes a long way!**

</div>
