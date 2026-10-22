<div align="center">

# 📊 AI-Powered Analytics Dashboard

**A high-performance enterprise analytics & metric visualization platform built with Next.js 15, React 19, Tailwind CSS, and Lucide React.**

[![Next.js](https://img.shields.io/badge/Next.js-15.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.1-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![CI](https://github.com/deekshi07/AI-Powered-Analytics-Dashboard/actions/workflows/ci.yml/badge.svg)](https://github.com/deekshi07/AI-Powered-Analytics-Dashboard/actions/workflows/ci.yml)

[Features](#-key-features) • [Tech Stack](#-technology-stack) • [Quickstart](#-quickstart-guide) • [Architecture](#-architecture)

</div>

---

## 💡 Overview

**AI-Powered Analytics Dashboard** provides real-time visualization of key business performance indicators (KPIs) such as total revenue, active user engagement, conversion velocity, and percentage growth. Designed with clean modular UI architecture and modern theme controls, it enables rapid expansion into enterprise-scale reporting.

---

## ✨ Key Features

- **⚡ Modern Next.js 15 App Router**: Server and client component optimization utilizing the latest React 19 features.
- **📈 Dynamic Metric Cards**: Responsive KPI indicators with custom Lucide icon integration.
- **🎨 Dark / Light Mode Theming**: Built-in `next-themes` provider for seamless UI appearance transitions.
- **📱 Fluid Responsive Grid**: Optimized layout adapting seamlessly across mobile, tablet, and widescreen enterprise dashboards.
- **🧩 Extensible Data Layer**: Decoupled mock and API data pipelines ready for real-time backend integration.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons & Visuals** | [Lucide React](https://lucide.dev/) & [Recharts](https://recharts.org/) |
| **Theme Management**| [next-themes](https://github.com/pacocoursey/next-themes) |

---

## 🚀 Quickstart Guide

### 1. Clone the Repository
```bash
git clone https://github.com/deekshi07/AI-Powered-Analytics-Dashboard.git
cd AI-Powered-Analytics-Dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the live dashboard.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```bash
AI-Powered-Analytics-Dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with theme provider
│   │   ├── page.tsx           # Dashboard view with KPI cards
│   │   └── styles/
│   │       └── globals.css    # Global theme design tokens
│   ├── components/
│   │   ├── cards/
│   │   │   └── metric-card.tsx # Reusable KPI display component
│   │   ├── theme-provider.tsx # Next-themes context wrapper
│   │   └── theme-toggle.tsx   # Theme switcher toggle
│   └── lib/
│       ├── mockData.ts        # Business metrics dataset
│       └── utils.ts           # Tailwind utility helper (cn)
├── package.json
└── tsconfig.json
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
