import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ZapIcon,
  SparkleIcon,
  CodeIcon,
  CrmIcon,
  BrainIcon,
  AutomationIcon,
  LayersIcon,
  MarketingIcon,
  ChevronDownIcon,
} from "@/components/ui/Icons";
import FAQAccordion from "@/components/ui/FAQAccordion";
import TechStackFilterShowcase, { TechCategory } from "@/components/sections/services/TechStackFilterShowcase";

type ServiceSlug =
  | "custom-software"
  | "crm-development"
  | "ai-automation"
  | "web-development"
  | "mobile-app-development"
  | "cloud-devops"
  | "digital-marketing";

interface ServiceData {
  title: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  iconName: string;
  highlights: string[];
  painPoints: string[];
  solutions: string[];
  capabilities: { title: string; description: string }[];
  techStack: { name: string; role: string }[];
  metrics: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

const serviceContentMap: Record<ServiceSlug, ServiceData> = {
  "custom-software": {
    title: "Custom Software Development",
    badge: "Bespoke Enterprise Software",
    metaTitle: "Custom Software Development Services Australia | Valosync Global",
    metaDescription:
      "Engineered bespoke software applications, scalable microservices, SaaS platforms, and API integrations for Australian businesses and global enterprises.",
    heroHeadline: "Bespoke Software Platforms Built to Scale Your Business",
    heroSubtitle:
      "Transform your operational vision into high-performing, cloud-native software built specifically around your proprietary workflows and growth goals.",
    iconName: "code",
    highlights: [
      "100% Client Code IP Ownership",
      "Scalable Cloud Microservices",
      "API-First Architecture",
      "Zero Legacy Bloat",
    ],
    painPoints: [
      "Rigid off-the-shelf software forcing complex manual workarounds.",
      "High ongoing per-user license fees crippling operational margins.",
      "Inability to integrate custom databases with modern third-party APIs.",
    ],
    solutions: [
      "Bespoke software architecture engineered 100% around your business rules.",
      "Fixed milestone pricing or squad model with total IP transfer.",
      "Seamless API middleware linking legacy databases, ERPs, and cloud tools.",
    ],
    capabilities: [
      {
        title: "Full-Stack Web & Mobile Apps",
        description:
          "High-performance web applications built with Next.js, React, and Node.js for smooth cross-device execution.",
      },
      {
        title: "Enterprise SaaS Architecture",
        description:
          "Multi-tenant SaaS foundations with secure role-based access, automated billing (Stripe), and tenant isolation.",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Refactoring obsolete monolithic systems into cloud-native microservices without operational downtime.",
      },
      {
        title: "API Engineering & Integration",
        description:
          "Designing high-throughput REST and GraphQL APIs to connect internal software with external partner ecosystems.",
      },
    ],
    techStack: [
      { name: "Next.js", role: "Full-Stack Framework" },
      { name: "React", role: "Frontend UI Components" },
      { name: "TypeScript", role: "Type-Safe Architecture" },
      { name: "Node.js", role: "Backend Microservices" },
      { name: "Python", role: "Data Logic & APIs" },
      { name: "PostgreSQL", role: "Relational Database" },
      { name: "Docker", role: "Container Security" },
      { name: "AWS Cloud", role: "Elastic Infrastructure" },
      { name: "GitHub Actions", role: "CI/CD Deployment" },
      { name: "Tailwind CSS", role: "Modular Styling" },
    ],
    metrics: [
      { value: "100%", label: "Source Code Ownership" },
      { value: "99.9%", label: "Uptime Guarantee" },
      { value: "-45%", label: "Operational Friction" },
    ],
    faqs: [
      {
        question: "Do I own the source code upon project completion?",
        answer:
          "Yes. Full copyright, source code repositories, intellectual property, and database rights are transferred to you upon milestone sign-off.",
      },
      {
        question: "How do you handle software scalability and security?",
        answer:
          "We build on cloud-native containerized architecture (AWS/Docker) enforcing OAuth2 security, encrypted data storage, and automated load balancing.",
      },
    ],
  },
  "crm-development": {
    title: "CRM Development",
    badge: "Intelligent Sales & Customer Management",
    metaTitle: "Custom CRM Development Services Australia | Valosync Global",
    metaDescription:
      "Build custom CRM platforms engineered for sales pipelines, automated lead scoring, client onboarding, and CRM solutions for Australian and international businesses.",
    heroHeadline: "Custom CRM Platforms Built for Business-Focused Sales Teams",
    heroSubtitle:
      "Eliminate clunky generic CRMs. Valosync Global engineers tailored sales pipelines, automated lead scoring, and omnichannel client management systems.",
    iconName: "crm",
    highlights: [
      "Tailored Pipeline Stages",
      "Automated Lead Scoring",
      "WhatsApp & Email Sync",
      "Real-Time Sales Analytics",
    ],
    painPoints: [
      "Sales reps losing 15+ hours weekly to manual spreadsheet updates.",
      "High lead drop-off due to slow response times and lack of automated assignment.",
      "Executive team lacking real-time visibility into deal forecasts and conversion metrics.",
    ],
    solutions: [
      "Custom CRM dashboard with instant lead capture and auto-assignment triggers.",
      "Omnichannel messaging (WhatsApp/Email/SMS) logged automatically under contact profiles.",
      "Executive analytics dashboards tracking real-time conversion velocity.",
    ],
    capabilities: [
      {
        title: "Lead Pipeline Management",
        description:
          "Kanban and list views for deal stages, auto-tagging, lead scoring, and automated follow-up reminders.",
      },
      {
        title: "Omnichannel Communication Sync",
        description:
          "Seamlessly integrate WhatsApp Business API, Gmail/Outlook, and SMS so every customer touchpoint is recorded.",
      },
      {
        title: "Automated Onboarding & Contracts",
        description:
          "Generate instant proposals, e-signature requests, and client onboarding forms directly from deal stages.",
      },
      {
        title: "Custom Reporting & Analytics",
        description:
          "Track sales rep activity, deal conversion rates, revenue projections, and customer lifetime value in real time.",
      },
    ],
    techStack: [
      { name: "React", role: "Pipeline Dashboard" },
      { name: "TypeScript", role: "Enterprise Logic" },
      { name: "Node.js", role: "High-Speed APIs" },
      { name: "PostgreSQL", role: "Customer Records" },
      { name: "Twilio", role: "SMS & Telephony" },
      { name: "WhatsApp API", role: "Direct Messaging" },
      { name: "Stripe", role: "Recurring Billing" },
      { name: "Google Analytics", role: "Attribution Funnels" },
      { name: "Docker", role: "Secure Containers" },
      { name: "AWS", role: "High Availability" },
    ],
    metrics: [
      { value: "< 2 Mins", label: "Lead Response Time" },
      { value: "+35%", label: "Sales Conversion Rate" },
      { value: "15+ Hrs", label: "Saved / Rep / Week" },
    ],
    faqs: [
      {
        question: "Can custom CRM integrate with our existing accounting software?",
        answer:
          "Yes. We seamlessly connect custom CRMs with Xero, MYOB, QuickBooks, and bank payment gateways.",
      },
      {
        question: "Is training provided for our sales team?",
        answer:
          "Yes. We provide complete video tutorials, user documentation, and live onboarding sessions for your staff.",
      },
    ],
  },
  "ai-automation": {
    title: "AI Automation Solutions",
    badge: "Intelligent Artificial Intelligence & ML",
    metaTitle: "AI Automation & Custom LLM Services Australia | Valosync Global",
    metaDescription:
      "Deploy custom AI solutions, RAG knowledge bots, intelligent document extraction pipelines, and 24/7 conversational agents for Australian and global organizations.",
    heroHeadline: "Harness AI to Automate Complex Workflows & Data Processing",
    heroSubtitle:
      "Empower your workforce with enterprise AI assistants, automated medical & invoice extraction engines, and intelligent customer support bots.",
    iconName: "brain",
    highlights: [
      "Private Enterprise RAG Bots",
      "Automated OCR Data Extraction",
      "Conversational AI Assistants",
      "Security-Conscious Integration",
    ],
    painPoints: [
      "Human staff spending hours copying data from invoices, medical files, or contracts.",
      "Customer support queues piling up during nights, weekends, and holidays.",
      "Corporate knowledge hidden across thousands of PDFs without instant search.",
    ],
    solutions: [
      "Custom RAG-powered knowledge assistants with instant semantic retrieval across all documents.",
      "Automated OCR extraction pipelines sending structured data straight into your ERP/CRM.",
      "AI-assisted support workflows designed with escalation and human review where appropriate.",
    ],
    capabilities: [
      {
        title: "Enterprise Knowledge RAG Bots",
        description:
          "Secure AI assistants trained exclusively on your internal SOPs, technical manuals, and client contracts.",
      },
      {
        title: "Intelligent OCR & Data Extraction",
        description:
          "Automated pipelines parsing invoices, medical forms, and PDF reports into structured database tables.",
      },
      {
        title: "Autonomous 24/7 Support Agents",
        description:
          "Multi-channel AI chat and email agents resolving customer questions and qualifying leads continuously.",
      },
      {
        title: "Workflow Automation with LLMs",
        description:
          "Automate report generation, email drafts, compliance checks, and summary generation across toolchains.",
      },
    ],
    techStack: [
      { name: "OpenAI GPT-4o", role: "LLM & Reasoning Engine" },
      { name: "Anthropic Claude", role: "Complex Document Parsing" },
      { name: "LangChain", role: "Agent Framework" },
      { name: "Pinecone DB", role: "Vector Semantic Storage" },
      { name: "Python", role: "FastAPI Backend" },
      { name: "Next.js", role: "AI Web Interface" },
      { name: "Docker", role: "Container Sandbox" },
      { name: "AWS", role: "Cloud AI Infrastructure" },
      { name: "GitHub Actions", role: "Automated Testing" },
      { name: "PostgreSQL", role: "Vector Metadata DB" },
    ],
    metrics: [
      { value: "99.2%", label: "Data Extraction Accuracy" },
      { value: "65%", label: "Support Automated" },
      { value: "24/7", label: "Instant Availability" },
    ],
    faqs: [
      {
        question: "Is our proprietary data secure when using AI?",
        answer:
          "Yes. We implement private vector storage, local or dedicated enterprise LLM endpoints, and zero-data retention policies so your corporate IP is never used for public training.",
      },
      {
        question: "How accurate is the document data extraction?",
        answer:
          "Our OCR and multi-modal AI pipelines achieve over 99% accuracy, featuring automated confidence scoring for human review when necessary.",
      },
    ],
  },
  "web-development": {
    title: "Web Development",
    badge: "Ultra-Fast Web Platforms",
    metaTitle: "Web Development Services Australia | Next.js & Headless Apps | Valosync Global",
    metaDescription:
      "Engineered business websites, web applications, client portals, and headless e-commerce built with modern Next.js for Australian businesses and global enterprises.",
    heroHeadline: "High-Performance Web Applications Built for Maximum Growth",
    heroSubtitle:
      "Deliver sub-second page loads, flawless mobile responsiveness, and high conversion rates with modern Next.js and React architecture.",
    iconName: "layers",
    highlights: [
      "Modern Web Architecture",
      "Performance-Focused Delivery",
      "Headless CMS Freedom",
      "Mobile-First UX Design",
    ],
    painPoints: [
      "Sluggish WordPress/Wix websites losing mobile visitors due to slow loading times.",
      "Difficulty updating content without hiring expensive web developers every time.",
      "Poor Google search rankings caused by bloated code and poor Core Web Vitals.",
    ],
    solutions: [
      "Modern Next.js static & server-side rendering for instant page transitions globally.",
      "Headless CMS integration (Contentful/Sanity) empowering marketing teams to update content easily.",
      "Strict performance budgeting delivering 95+ Lighthouse scores out of the box.",
    ],
    capabilities: [
      {
        title: "Next.js Web Applications",
        description:
          "Built with Server-Side Rendering (SSR) and Static Site Generation (SSG) for ultra-fast load times.",
      },
      {
        title: "Headless E-Commerce Platforms",
        description:
          "Custom storefronts connected to Shopify/Stripe APIs with seamless cart and checkout experiences.",
      },
      {
        title: "Client & Customer Portals",
        description:
          "Secure self-service web portals for document sharing, invoice payments, and project tracking.",
      },
      {
        title: "UI/UX & Design System Creation",
        description:
          "Custom component libraries tailored to your brand guidelines for consistent long-term scaling.",
      },
    ],
    techStack: [
      { name: "Next.js", role: "SSR & Static Web" },
      { name: "React", role: "Interactive Frontend" },
      { name: "TypeScript", role: "Strict Type Safety" },
      { name: "Tailwind CSS", role: "Utility Design Tokens" },
      { name: "Vercel", role: "Global Edge CDN" },
      { name: "Stripe", role: "Payments & Invoicing" },
      { name: "Google Analytics 4", role: "User Analytics" },
      { name: "PostgreSQL", role: "Data Storage" },
      { name: "GitHub Actions", role: "Automated Builds" },
      { name: "Docker", role: "Dev Environment" },
    ],
    metrics: [
      { value: "< 0.6s", label: "Average Load Speed" },
      { value: "100/100", label: "Core Web Vitals" },
      { value: "+40%", label: "Mobile Conversions" },
    ],
    faqs: [
      {
        question: "Why choose Next.js over legacy WordPress?",
        answer:
          "Next.js offers superior security (no plugin vulnerabilities), sub-second page load speed, better SEO ranking potential, and unmatched scalability.",
      },
      {
        question: "Will our non-technical team be able to edit page content?",
        answer:
          "Yes. We integrate friendly Headless CMS editors like Contentful or Sanity so anyone can edit text, images, and blogs easily.",
      },
    ],
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    badge: "iOS, Android & Cross-Platform Apps",
    metaTitle: "Mobile App Development Services Australia | iOS, Android & Flutter | Valosync Global",
    metaDescription:
      "Custom iOS and Android mobile app development, React Native, Flutter, and enterprise mobile applications built for Australian businesses and global enterprises.",
    heroHeadline: "Native & Cross-Platform Mobile Apps Engineered for Performance",
    heroSubtitle:
      "Transform your product vision into high-performing, intuitive iOS & Android applications with offline sync, biometric security, and App Store approval guarantees.",
    iconName: "smartphone",
    highlights: [
      "Native iOS (Swift) & Android (Kotlin)",
      "Cross-Platform Flutter & React Native",
      "100% App & Play Store Approval",
      "Offline Sync & Biometric Security",
    ],
    painPoints: [
      "Sluggish hybrid apps that lag, drain battery, and receive 1-star reviews.",
      "High cost and friction of maintaining two separate engineering teams for iOS and Android.",
      "App Store and Google Play rejections due to complex privacy regulations and latency.",
    ],
    solutions: [
      "Modern cross-platform architecture (Flutter / React Native) cutting development cost by up to 40% with native 60fps performance.",
      "Single codebase architecture with automated testing and native device sensor integrations (Camera, GPS, Biometrics, Bluetooth).",
      "End-to-end publishing, testflight distribution, and guaranteed App Store & Play Store compliance.",
    ],
    capabilities: [
      {
        title: "iOS Native App Development",
        description:
          "High-performance native Apple iOS applications engineered with Swift, SwiftUI, and CoreData for iPhone and iPad devices.",
      },
      {
        title: "Android Native App Development",
        description:
          "Modern native Android applications built with Kotlin and Jetpack Compose optimized for global Android device compatibility.",
      },
      {
        title: "Cross-Platform Flutter & React Native",
        description:
          "Single codebase delivering near-native speed, fluid animations, and simultaneous release across both iOS and Android stores.",
      },
      {
        title: "Enterprise Mobile & API Integration",
        description:
          "Secure mobile portals with offline-first synchronization, push notifications, role-based access, and enterprise API sync.",
      },
    ],
    techStack: [
      { name: "Flutter", role: "Cross-Platform Framework" },
      { name: "React Native", role: "Native Performance Engine" },
      { name: "Swift", role: "Native Apple iOS" },
      { name: "Kotlin", role: "Modern Android" },
      { name: "Expo", role: "Mobile Tooling & OTA" },
      { name: "Firebase", role: "Realtime DB & Notifications" },
      { name: "Node.js", role: "Backend Mobile APIs" },
      { name: "PostgreSQL", role: "Relational Database" },
      { name: "AWS Cloud", role: "Cloud Sync Infrastructure" },
      { name: "Docker", role: "Container Security" },
    ],
    metrics: [
      { value: "4.9 ★", label: "Average App Rating" },
      { value: "99.9%", label: "Crash-Free Sessions" },
      { value: "-40%", label: "Time-to-Market" },
    ],
    faqs: [
      {
        question: "Should we choose Flutter, React Native, or Native iOS/Android?",
        answer:
          "For most consumer and enterprise applications, Flutter and React Native provide native 60fps performance while reducing development and maintenance costs by up to 40%. For specialized hardware-intensive apps (e.g. low-level Bluetooth or high-end 3D graphics), pure Swift and Kotlin are recommended. We provide a complete architecture recommendation during discovery.",
      },
      {
        question: "Do you handle App Store and Google Play publishing?",
        answer:
          "Yes. We handle developer portal configuration, TestFlight distribution, Apple & Google privacy manifest compliance, store screenshots, metadata optimization, and final publishing approval.",
      },
    ],
  },
  "cloud-devops": {
    title: "Cloud & DevOps Support",
    badge: "Reliable Cloud Delivery",
    metaTitle: "Cloud & DevOps Support Services Australia | Valosync Global",
    metaDescription:
      "Cloud setup, application deployment, CI/CD pipelines, containerisation, monitoring and infrastructure optimisation for Australian enterprises and growing global businesses.",
    heroHeadline: "Build a More Reliable Path From Code to Production",
    heroSubtitle:
      "We help businesses establish practical cloud and DevOps foundations that improve deployment consistency, system visibility and ongoing maintainability.",
    iconName: "cloud",
    highlights: [
      "Cloud Setup & Deployment",
      "CI/CD Pipeline Automation",
      "Docker & Containerisation",
      "Monitoring & Backup Planning",
    ],
    painPoints: [
      "Manual deployments creating delays, inconsistencies and avoidable release risk.",
      "Limited visibility into application health, errors and infrastructure performance.",
      "Cloud environments that are difficult to maintain, scale or recover.",
    ],
    solutions: [
      "A deployment approach aligned with your application, team and operating requirements.",
      "Automated build, test and release workflows using suitable CI/CD tooling.",
      "Monitoring, backup and infrastructure practices designed to improve operational confidence.",
    ],
    capabilities: [
      {
        title: "Cloud Setup & Application Deployment",
        description:
          "Configure and deploy applications across suitable AWS, Azure, Vercel or managed hosting environments.",
      },
      {
        title: "CI/CD Pipeline Implementation",
        description:
          "Automate build, test and deployment steps to create a more consistent release process.",
      },
      {
        title: "Containers & Environment Management",
        description:
          "Use Docker and environment configuration practices to improve portability and deployment consistency.",
      },
      {
        title: "Monitoring, Backups & Optimisation",
        description:
          "Improve visibility, recovery readiness, resource usage and ongoing infrastructure maintenance.",
      },
    ],
    techStack: [
      { name: "AWS", role: "Cloud Compute & VPC" },
      { name: "Microsoft Azure", role: "Enterprise Cloud" },
      { name: "Google Cloud", role: "Data Storage & Compute" },
      { name: "Docker", role: "Containerization" },
      { name: "GitHub Actions", role: "CI/CD Automation" },
      { name: "Vercel", role: "Serverless Deployment" },
      { name: "Linux", role: "Production OS" },
      { name: "PostgreSQL", role: "Database Clustering" },
      { name: "Node.js", role: "API Microservices" },
      { name: "Python", role: "Automation Scripts" },
    ],
    metrics: [
      { value: "Plan", label: "Assess Requirements" },
      { value: "Build", label: "Automate Delivery" },
      { value: "Improve", label: "Monitor & Optimise" },
    ],
    faqs: [
      {
        question: "Can you support an application that is already live?",
        answer:
          "Yes. We can review the current hosting and deployment setup, identify priority improvements and define a practical migration or optimisation plan.",
      },
      {
        question: "Do you provide ongoing cloud management?",
        answer:
          "Ongoing monitoring, maintenance and support can be scoped based on the application, infrastructure and response requirements.",
      },
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing & SEO",
    badge: "ROI-Focused Lead Generation",
    metaTitle: "Digital Marketing & Technical SEO Services Australia | Valosync Global",
    metaDescription:
      "Data-driven digital marketing campaigns, technical SEO optimization, lead generation funnels, and targeted customer acquisition for Australian and global markets.",
    heroHeadline: "Data-Driven Digital Marketing That Supports Visibility and Sustainable Growth",
    heroSubtitle:
      "Scale your qualified lead pipeline with technical SEO, high-intent Google Ads, social media campaigns, and conversion rate optimization.",
    iconName: "marketing",
    highlights: [
      "Technical & Local SEO",
      "High-Intent Google Ads",
      "ROI Revenue Attribution",
      "Conversion Rate Optimization",
    ],
    painPoints: [
      "Wasting monthly ad budget on low-intent clicks that fail to turn into paying clients.",
      "Invisibility on Google for lucrative local and national commercial search keywords.",
      "Lack of clear reporting connecting digital marketing spend directly to CRM sales.",
    ],
    solutions: [
      "Targeted search engine strategies capturing users searching with active buying intent.",
      "High-converting landing page funnels designed specifically to capture qualified leads.",
      "End-to-end GA4 and CRM attribution tracking showing clear Return on Ad Spend (ROAS).",
    ],
    capabilities: [
      {
        title: "Technical & Content SEO",
        description:
          "On-page optimization, schema markup, technical site audits, and high-authority link acquisition.",
      },
      {
        title: "PPC Search & Social Ads",
        description:
          "Laser-focused Google Search, Display, LinkedIn, and Meta ad campaigns engineered for low CPA.",
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description:
          "A/B testing landing page headlines, forms, and CTAs to maximize lead conversion percentage.",
      },
      {
        title: "Content Marketing & Lead Magnets",
        description:
          "Creating high-value whitepapers, case studies, and blog content that positions you as the market leader.",
      },
    ],
    techStack: [
      { name: "Google Analytics", role: "GA4 Traffic & Attribution" },
      { name: "Google Search Console", role: "Search Indexing" },
      { name: "Google Ads", role: "High-Intent PPC" },
      { name: "Meta Ads", role: "Social Retargeting" },
      { name: "Semrush", role: "Keyword & Backlink Intel" },
      { name: "HubSpot", role: "CRM & Inbound Automation" },
      { name: "Stripe", role: "Revenue Tracking" },
      { name: "Next.js", role: "Fast Landing Pages" },
      { name: "Tailwind CSS", role: "Conversion UI Layout" },
      { name: "GitHub Actions", role: "Continuous Optimization" },
    ],
    metrics: [
      { value: "4.5x", label: "Average Campaign ROAS" },
      { value: "+220%", label: "Qualified Lead Volume" },
      { value: "-35%", label: "Cost Per Lead" },
    ],
    faqs: [
      {
        question: "How quickly can we expect results from SEO vs PPC?",
        answer:
          "PPC can begin generating visibility soon after launch, while SEO usually requires sustained technical and content work. Timelines depend on competition, budget and the current website.",
      },
      {
        question: "How do you report campaign performance?",
        answer:
          "Reporting can cover traffic, enquiries, campaign cost and agreed conversion metrics, with a review cadence defined for the engagement.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return [
    { slug: "custom-software" },
    { slug: "crm-development" },
    { slug: "ai-automation" },
    { slug: "web-development" },
    { slug: "mobile-app-development" },
    { slug: "cloud-devops" },
    { slug: "digital-marketing" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as ServiceSlug;
  const data = serviceContentMap[slug];

  if (!data) {
    return {
      title: "Service Not Found | Valosync Global",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${data.title} | Valosync Global`,
      description: data.metaDescription,
      url: `https://valosyncglobal.com/services/${slug}`,
      siteName: "Valosync Global",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as ServiceSlug;
  const data = serviceContentMap[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main">
        {/* Dynamic Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
                <SparkleIcon size={16} className="text-[#D4AF37]" />
                <span>{data.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
                {data.heroHeadline}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
                {data.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                <Button
                  as="link"
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRightIcon size={18} />}
                >
                  Discuss Your {data.title} Project
                </Button>
                <Button
                  as="link"
                  href="#capabilities"
                  variant="outline"
                  size="lg"
                  leftIcon={<ZapIcon size={18} className="text-[#D4AF37]" />}
                >
                  Explore Capabilities
                </Button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-8 border-t border-slate-800/80">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon size={18} className="text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Problem vs Solution Section */}
        <section className="section-padding bg-[#F7F9FC] relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#0B3D91] font-bold text-xs uppercase tracking-wider block mb-2">
                Problem & Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                Overcoming Common Industry Bottlenecks
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pain Points */}
              <div className="bg-white p-8 rounded-3xl border border-[#D9E1EC] shadow-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#071A3D]/10 text-[#071A3D] flex items-center justify-center text-base font-bold">
                    ✕
                  </span>
                  Common Challenges
                </h3>
                <ul className="space-y-4">
                  {data.painPoints.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4A5568]">
                      <span className="text-[#071A3D] font-bold mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineered Solution */}
              <div className="bg-white p-8 rounded-3xl border border-[#0D47A1]/30 shadow-lg">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-6 flex items-center gap-3">
                  <CheckCircleIcon size={24} className="text-[#D4AF37]" />
                  ValoSync Global Approach
                </h3>
                <ul className="space-y-4">
                  {data.solutions.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#4A5568] font-medium">
                      <CheckCircleIcon size={18} className="text-[#0D47A1] flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="section-padding bg-white relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#0B3D91] font-bold text-xs uppercase tracking-wider block mb-2">
                Core Modules & Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A1A]">
                What We Build in {data.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
              {data.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#D9E1EC] hover:border-[#0B3D91]/40 hover:shadow-xl hover:bg-white transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3D91]/10 text-[#0B3D91] font-bold flex items-center justify-center text-sm mb-4 border border-[#0B3D91]/20">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                    {cap.title}
                  </h3>
                  </div>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Core Tech Stack, Frameworks & Tools with Filter Capsules */}
        <TechStackFilterShowcase
          initialServiceTitle={data.title}
          defaultCategory={
            slug === "custom-software"
              ? "all"
              : slug === "crm-development"
              ? "backend"
              : slug === "ai-automation"
              ? "ai-automation"
              : slug === "mobile-app-development"
              ? "mobile"
              : slug === "web-development"
              ? "frontend"
              : slug === "cloud-devops"
              ? "database-cloud"
              : "seo-marketing"
          }
        />

        {/* Dynamic FAQ Accordion */}
        <section className="section-padding bg-[#F7F9FC]">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] mb-3">
                {data.title} FAQs
              </h2>
            </div>
            <FAQAccordion items={data.faqs} defaultOpenIndex={0} />
          </div>
        </section>

        {/* Action Call to Action */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
