# ValoSync Global

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployment](https://img.shields.io/badge/Netlify-Production-00C7B7?style=flat-square&logo=netlify)](https://valosync-global.netlify.app)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat-square)](#-license)

**ValoSync Global** is an enterprise-grade digital platform engineered with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. Built for high performance, accessibility, and authoritative corporate credibility, ValoSync Global connects cross-disciplinary teams across software engineering, cloud infrastructure, civil engineering, town planning, corporate accounting, taxation compliance, loan finance management, conveyancing, and real estate advisory.

🌐 **Production URL**: [https://valosync-global.netlify.app](https://valosync-global.netlify.app)

---

## 🚀 Key Features & Architectural Highlights

- **Next.js 16 App Router & Turbopack**: Blazing-fast page transitions, Server-Side Rendering (SSR), Static Site Generation (SSG), and sub-second local compilation.
- **18 Professional Department Portals**: Dedicated operational hubs (`/departments/[slug]`) complete with problem-solution breakdowns, quantifiable metrics, client pain points, FAQs, and key service offerings.
- **Flagship Solution Suites**: Bespoke high-touch service pages including **Network as a Service (NaaS)** (`/departments/technology/network-as-a-service`).
- **9 Vertical Industry Solutions**: Deep-dive strategy hubs (`/industries/[slug]`) tailored for Healthcare, Finance, Logistics, Automotive, Retail, Real Estate, Professional Services, Manufacturing, and Education.
- **Dynamic Services & Portfolio Showcase**: Dynamic route handlers displaying comprehensive capabilities (`/services/[slug]`) and client case studies (`/portfolio/[slug]`).
- **Automated Open Graph Social Card Engine**: On-the-fly branded social cards generated via `/share-image` using Next.js `ImageResponse` and `sharp` image optimization.
- **Transactional Lead Capture**: Resend-powered contact pipeline (`/api/contact`) supporting HTML email templates, automatic domain validation fallbacks, and multi-field lead routing.
- **Enterprise SEO & Structured Data**: Built-in JSON-LD schemas (`Organization`, `WebSite`, `BreadcrumbList`), programmatic XML sitemap (`/sitemap.xml`), and dynamic `robots.txt`.
- **Accessibility & Responsive Design**: Designed mobile-first using Tailwind CSS v4 with semantic HTML, fluid typography, smooth accordions, and touch-optimized multi-level navigation.

---

## 🎨 Brand Design System & Color Palette

ValoSync Global adheres to a strict corporate color hierarchy designed for premium contrast and authority:

| Token | Hex Code | Role & Usage |
| :--- | :--- | :--- |
| **Primary Blue** | `#0B3D91` | Dominant brand blue for primary call-to-actions, headings, and accents |
| **Brand Blue** | `#1565C0` | Tech highlights, interactive focus states, and linear gradients |
| **Gold Accent** | `#D4AF37` | Selective premium accents, badge highlights, and rating stars |
| **Dark Navy** | `#071A33` | Navigation bars, footers, high-contrast dark sections |
| **Dark Text** | `#1A1A1A` | High-readability primary body typography |
| **Borders** | `#D9E1EC` | Subtle card outlines, divider rules, and input borders |
| **Canvas** | `#FFFFFF` / `#F7F9FC` | Clean surface backgrounds and section alternates |

---

## 🛠️ Technology Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3.1](https://nextjs.org/) | React framework utilizing App Router & Turbopack |
| **UI Library** | [React 19.2.8](https://react.dev/) | Modern concurrent UI architecture |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Next-generation utility-first styling engine |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Type-safe enterprise code architecture |
| **Image Engine** | [Sharp 0.35.3](https://sharp.pixelplumbing.com/) & `next/og` | High-speed serverless image processing & social cards |
| **Email Delivery** | [Resend 6.22.1](https://resend.com/) | Transactional email delivery and admin notifications |
| **Deployment** | [Netlify](https://www.netlify.com/) | Edge-hosted CI/CD deployment with serverless routing |

---

## 📂 Project Structure

```text
ValoSync-Global/
├── app/                                    # Next.js App Router root
│   ├── about/                              # Company history, vision, and leadership
│   ├── api/
│   │   └── contact/                        # Contact form handler (Resend integration)
│   ├── contact/                            # Consultation request & contact page
│   ├── departments/                        # Department index & dynamic routing
│   │   ├── [slug]/                         # Dynamic department pages (18 domains)
│   │   └── technology/
│   │       └── network-as-a-service/       # Flagship NaaS solution page
│   ├── industries/                         # Industry index & dynamic routes
│   │   └── [slug]/                         # 9 vertical market solution pages
│   ├── portfolio/                          # Portfolio grid & dynamic case studies ([slug])
│   ├── privacy-policy/                     # Privacy compliance disclosure
│   ├── services/                           # Services index & dynamic details ([slug])
│   ├── share-image/                        # Dynamic Open Graph image generation endpoint
│   ├── terms-of-service/                   # Terms of service page
│   ├── globals.css                         # Tailwind CSS v4 directives & color tokens
│   ├── layout.tsx                          # Root layout, fonts (Geist), global metadata & SEO
│   ├── page.tsx                            # Landing page
│   ├── robots.ts                           # Programmatic robots.txt configuration
│   └── sitemap.ts                          # Programmatic XML sitemap generator
├── components/                             # Reusable modular UI components
│   ├── layout/                             # Header, mega-menu, and Footer
│   ├── sections/                           # Modular page sections (Hero, About, Stats, etc.)
│   ├── seo/                                # Structured schema markup (JsonLd.tsx)
│   └── ui/                                 # Atoms (Button, Icons, Cards, Logo, CountUp)
├── lib/                                    # Static datasets and business logic
│   ├── departmentsData.ts                  # Comprehensive data records for 18 departments
│   ├── industriesData.ts                   # Strategic datasets for 9 vertical industries
│   └── shareMetadata.ts                    # Dynamic Open Graph & Twitter metadata builder
├── public/                                 # Static assets (brand icons, WebP imagery)
├── .env.example                            # Template for environment variables
├── ecosystem.config.cjs                    # PM2 process manager cluster configuration
├── netlify.toml                            # Netlify build and deployment config
├── next.config.ts                          # Next.js runtime configuration
├── nginx.conf.example                      # Production Nginx reverse proxy template
├── package.json                            # Project scripts & package manifest
└── tsconfig.json                           # TypeScript compilation configuration
```

---

## 💻 Getting Started Locally

### Prerequisites

- **Node.js**: `^20.19.0`, `^22.13.0`, or `>=24`
- **Package Manager**: `npm` (v10 or later)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mayank-207/ValoSync-Global.git
   cd ValoSync-Global
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy the `.env.example` file to create your local `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Configure the following variables in `.env.local`:
   ```env
   # Resend API Key for transactional lead notifications
   RESEND_API_KEY=re_your_api_key_here

   # Lead recipient email (where contact inquiries are forwarded)
   ADMIN_EMAIL=contact@valosyncglobal.com

   # Verified sender email address (Resend verified domain or onboarding@resend.dev)
   SENDER_EMAIL=onboarding@resend.dev

   # Canonical Site URL (used for metadata, XML sitemap, and dynamic OG social cards)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Launch Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🔑 Environment Variables Reference

| Variable | Required | Default / Fallback | Description |
| :--- | :---: | :--- | :--- |
| `RESEND_API_KEY` | Optional* | None | Resend API key for sending contact emails. Form falls back gracefully when absent. |
| `ADMIN_EMAIL` | No | Code fallback | Recipient email address for consultation and lead inquiries. |
| `SENDER_EMAIL` | No | `onboarding@resend.dev` | `from:` address for outbound emails (must match a verified Resend domain in production). |
| `NEXT_PUBLIC_SITE_URL`| No | `https://valosync-global.netlify.app` | Base canonical domain used for metadata, XML sitemaps, and social share links. |
| `DEPLOY_PRIME_URL` | Auto | Managed by Netlify | Auto-injected by Netlify for preview builds to render dynamic share cards correctly. |

---

## 📦 Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Runs the local development server with Turbopack |
| `build` | `npm run build` | Compiles the production bundle and optimizes assets |
| `start` | `npm run start` | Boots the compiled production server locally |
| `lint` | `npm run lint` | Runs ESLint checks against TypeScript and JSX files |

---

## ☁️ Netlify Deployment

The project is preconfigured for continuous deployment on **Netlify** via `netlify.toml`:

1. Import repository `mayank-207/ValoSync-Global` into the **Netlify Dashboard**.
2. Netlify automatically detects Next.js:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `.next`
3. Set environment variables under `Site Configuration > Environment Variables`:
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
   - `SENDER_EMAIL`
   - `NEXT_PUBLIC_SITE_URL` (set to your custom domain or production URL)
4. Trigger deploy! Edge functions, dynamic Open Graph generation, and SSR route handlers will deploy automatically.

---

## 🖥️ Production Linux / VPS Server Setup & Nginx Reverse Proxy

For self-hosted Linux servers (e.g. AWS EC2, DigitalOcean, Hetzner, Linode, Ubuntu 22.04 / 24.04 LTS), use this enterprise-tested setup guide utilizing **PM2** process management, **Nginx** reverse proxy, and **Let's Encrypt SSL**.

### 1. Server Prerequisites & Sizing

| Resource | Minimum | Recommended | Notes |
| :--- | :--- | :--- | :--- |
| **OS** | Ubuntu 22.04 / 24.04 LTS | Ubuntu 24.04 LTS | Debian 12 also fully supported |
| **CPU** | 1 vCPU | 2+ vCPU | Enables multi-core PM2 cluster scaling |
| **RAM** | 1 GB (+ 2GB swap) | 2 GB - 4 GB | Next.js compilation (`npm run build`) benefits greatly from swap |
| **Storage** | 20 GB SSD | 40+ GB SSD | Node modules, build cache, and logs |
| **DNS** | Point A Record | Point `@` and `www` | Point your domain's A record to the server's public IP |

---

### 2. Package Installation

Connect to your server via SSH and install the required system packages:

```bash
# Update package lists and upgrade existing packages
sudo apt update && sudo apt upgrade -y

# Install essential dependencies
sudo apt install -y curl git build-essential ufw

# Install Node.js LTS (Node 20.x or 22.x) via NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify Node and npm installations
node -v   # v20.x or higher
npm -v    # v10.x or higher

# Install PM2 Process Manager globally
sudo npm install -g pm2

# Install Nginx Web Server
sudo apt install -y nginx

# Install Certbot and the Nginx plugin for free SSL
sudo apt install -y certbot python3-certbot-nginx
```

---

### 3. Configure Swap Memory (Critical for 1GB - 2GB VPS)

To ensure `npm run build` never runs out of memory during compilation:

```bash
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make swap permanent across reboots
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

---

### 4. Deploy the Project to `/var/www/`

```bash
# Create directory and assign ownership to current user
sudo mkdir -p /var/www/valosync-global
sudo chown -R $USER:$USER /var/www/valosync-global

# Clone the repository
git clone https://github.com/mayank-207/ValoSync-Global.git /var/www/valosync-global
cd /var/www/valosync-global

# Install dependencies
npm install

# Configure production environment variables
cp .env.example .env.local
nano .env.local
# Set RESEND_API_KEY, ADMIN_EMAIL, SENDER_EMAIL, NEXT_PUBLIC_SITE_URL

# Build production application bundle
npm run build
```

---

### 5. Start and Manage with PM2 (Cluster Mode)

The repository includes a ready-to-use [`ecosystem.config.cjs`](ecosystem.config.cjs) configured for auto-restart, cluster scaling, and memory limits.

```bash
# Start the application in cluster mode
pm2 start ecosystem.config.cjs

# Check cluster status and logs
pm2 status
pm2 logs valosync-global

# Enable PM2 to automatically revive the app on system boot
pm2 startup
# (Execute the sudo command output by the previous step if prompted)
pm2 save
```

---

### 6. Configure Nginx Reverse Proxy

Copy the included [`nginx.conf.example`](nginx.conf.example) to Nginx's `sites-available`:

```bash
# Copy template into Nginx sites-available
sudo cp nginx.conf.example /etc/nginx/sites-available/valosync-global.conf

# Edit the configuration file to replace yourdomain.com with your actual domain
sudo nano /etc/nginx/sites-available/valosync-global.conf
```

Enable the configuration and reload Nginx:

```bash
# Enable the site by creating a symbolic link
sudo ln -s /etc/nginx/sites-available/valosync-global.conf /etc/nginx/sites-enabled/

# Remove the default Nginx welcome page
sudo rm -f /etc/nginx/sites-enabled/default

# Test Nginx syntax for errors
sudo nginx -t

# Reload Nginx to apply changes
sudo systemctl reload nginx
```

---

### 7. Secure with Free SSL Certificate (Let's Encrypt / Certbot)

```bash
# Obtain and automatically install SSL certificates
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test automatic SSL certificate renewal
sudo certbot renew --dry-run
```

Certbot automatically configures HTTPS redirection and sets up automated renewal timers.

---

### 8. Configure UFW Firewall

Ensure your firewall permits SSH and web traffic:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
sudo ufw status
```

---

### 9. Zero-Downtime Deployment / Update Workflow

Whenever you push changes to GitHub, update your production server without downtime:

```bash
cd /var/www/valosync-global
git pull origin main
npm install
npm run build
pm2 reload valosync-global
```

---

## 📜 License

Private & Proprietary © **ValoSync Global**. All rights reserved.
