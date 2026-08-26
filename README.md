# VeloSync Global

**VeloSync Global** is a modern, high-performance web application built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS. Designed to deliver sleek digital experiences, showcase custom software solutions, enterprise CRMs, AI automation services, and detailed portfolio case studies.

---

## 🚀 Features

- **Next.js 16 App Router & Turbopack**: Fast page loads, server-side rendering, and static site generation.
- **Modern UI & Responsive Design**: Crafted with Tailwind CSS v4, responsive component design, and smooth transitions.
- **Services & Portfolio Showcase**: Dynamic route handlers for services (`/services/[slug]`) and case studies (`/portfolio/[slug]`).
- **Contact Form Integration**: API endpoint (`/api/contact`) configured with [Resend](https://resend.com) for reliable transactional email delivery.
- **Netlify Ready**: Preconfigured with `netlify.toml` and `@netlify/plugin-nextjs` for seamless deployment.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Email Service**: [Resend](https://resend.com/)
- **Deployment**: [Netlify](https://www.netlify.com/)

---

## 📂 Project Structure

```text
velosync_global/
├── app/                      # Next.js App Router pages and API routes
│   ├── about/                # About page
│   ├── api/contact/          # Contact API route (Resend email integration)
│   ├── contact/              # Contact page
│   ├── industries/           # Industries page
│   ├── portfolio/            # Portfolio grid & dynamic case studies ([slug])
│   ├── services/             # Services grid & dynamic service details ([slug])
│   ├── globals.css           # Global CSS and Tailwind directives
│   ├── layout.tsx            # Root layout wrapper
│   └── page.tsx              # Home page
├── components/               # Reusable UI & section components
│   ├── layout/               # Header, Footer
│   ├── sections/             # Page sections (Hero, About, Services, Portfolio, Stats, etc.)
│   └── ui/                   # Primitive UI components (Button, Icons, Cards, Logo)
├── public/                   # Static assets (SVGs, images)
├── netlify.toml              # Netlify build & plugin configuration
├── .env.example              # Environment variables template
└── package.json              # Project dependencies and scripts
```

---

## 💻 Getting Started Locally

### Prerequisites

- Node.js `^20.19.0`, `^22.13.0`, or `>=24`
- `npm` (v10 or later)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mayank-207/VeloSync-Global.git
   cd VeloSync-Global
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Copy `.env.example` to `.env.local` and fill in your API keys:
   ```bash
   cp .env.example .env.local
   ```
   Add your Resend API key:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts the local development server with Turbopack |
| `build` | `npm run build` | Builds the production bundle |
| `start` | `npm run start` | Starts the production server locally |
| `lint` | `npm run lint` | Runs ESLint code quality check |

---

## ☁️ Netlify Deployment

This repository includes a `netlify.toml` configuration file tuned for Next.js App Router applications.

1. Connect your repository (`mayank-207/VeloSync-Global`) to **Netlify**.
2. Netlify will auto-detect the build command and publish directory:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
3. Add Environment Variables in the **Netlify Dashboard**:
   - Go to `Site settings > Environment variables`
   - Add `RESEND_API_KEY`
4. Deploy! Netlify handles static pages and dynamic API routes automatically using `@netlify/plugin-nextjs`.

---

## 📜 License

Private & Proprietary - **VeloSync Global**.
