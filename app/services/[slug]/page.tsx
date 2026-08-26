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

type ServiceSlug =
  | "custom-software"
  | "crm-development"
  | "ai-automation"
  | "business-automation"
  | "web-development"
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
  techStack: string[];
  metrics: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
}

const serviceContentMap: Record<ServiceSlug, ServiceData> = {
  "custom-software": {
    title: "Custom Software Development",
    badge: "Bespoke Enterprise Software",
    metaTitle: "Custom Software Development Services | Velosync Global",
    metaDescription:
      "Engineered bespoke software applications, scalable microservices, SaaS platforms, and API integrations tailored for your exact business requirements.",
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
    techStack: ["Next.js", "React", "Node.js", "Python", "PostgreSQL", "AWS / Docker"],
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
    metaTitle: "Custom CRM Development Services | Velosync Global",
    metaDescription:
      "Build custom CRM platforms engineered to manage sales pipelines, customer interactions, lead scoring, and automated client onboarding.",
    heroHeadline: "Custom CRM Platforms Built for High-Converting Sales Teams",
    heroSubtitle:
      "Eliminate clunky generic CRMs. Velosync Global engineers tailored sales pipelines, automated lead scoring, and omnichannel client management systems.",
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
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Twilio / WhatsApp API", "Stripe API"],
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
          "Absoutely. We provide complete video tutorials, user documentation, and live onboarding sessions for your staff.",
      },
    ],
  },
  "ai-automation": {
    title: "AI Automation Solutions",
    badge: "Intelligent Artificial Intelligence & ML",
    metaTitle: "AI Automation & Custom LLM Services | Velosync Global",
    metaDescription:
      "Deploy custom AI solutions, RAG knowledge bots, intelligent document extraction pipelines, and 24/7 conversational agents.",
    heroHeadline: "Harness AI to Automate Complex Workflows & Data Processing",
    heroSubtitle:
      "Empower your workforce with enterprise AI assistants, automated medical & invoice extraction engines, and intelligent customer support bots.",
    iconName: "brain",
    highlights: [
      "Private Enterprise RAG Bots",
      "Automated OCR Data Extraction",
      "24/7 Conversational AI Agents",
      "Zero Data Leakage Security",
    ],
    painPoints: [
      "Human staff spending hours copying data from invoices, medical files, or contracts.",
      "Customer support queues piling up during nights, weekends, and holidays.",
      "Corporate knowledge hidden across thousands of PDFs without instant search.",
    ],
    solutions: [
      "Custom RAG-powered knowledge assistants with instant semantic retrieval across all documents.",
      "Automated OCR extraction pipelines sending structured data straight into your ERP/CRM.",
      "24/7 autonomous support bots resolving 65%+ of routine queries with human-like accuracy.",
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
    techStack: ["OpenAI / Anthropic APIs", "LangChain", "LlamaIndex", "Pinecone Vector DB", "Python / FastAPI", "Next.js"],
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
  "business-automation": {
    title: "Business Process Automation",
    badge: "Operational Workflow Orchestration",
    metaTitle: "Business Process Automation Services | Velosync Global",
    metaDescription:
      "Automate manual business processes, inter-departmental data sync, approval chains, and automated task dispatching.",
    heroHeadline: "Streamline Operations & Eliminate Repetitive Manual Labor",
    heroSubtitle:
      "Interconnect your software applications, automate cross-departmental tasks, and eliminate costly human errors across your organization.",
    iconName: "automation",
    highlights: [
      "Cross-App API Middleware",
      "Automated Multi-Tier Approvals",
      "Elimination of Human Error",
      "Real-Time Operational Audit",
    ],
    painPoints: [
      "Staff performing repetitive copy-paste work between disparate software systems.",
      "Critical purchase orders and approval requests stalled in manager inboxes.",
      "Billing discrepancies and inventory mismatches due to delayed manual updates.",
    ],
    solutions: [
      "Custom integration middleware connecting inventory, accounting, CRM, and logistics.",
      "Automated approval workflows with instant Slack, Teams, and SMS escalation alerts.",
      "Real-time data synchronization ensuring 100% consistency across all software tools.",
    ],
    capabilities: [
      {
        title: "Multi-App Workflow Integration",
        description:
          "Sync data between Xero, Salesforce, Shopify, Google Sheets, and custom databases automatically.",
      },
      {
        title: "Automated Document & Invoice Generation",
        description:
          "Instantly generate PDFs, contracts, shipping labels, and invoices upon transaction triggers.",
      },
      {
        title: "Approval & Task Dispatch Engines",
        description:
          "Route requests automatically based on manager availability, price thresholds, or department rules.",
      },
      {
        title: "System Audit & Error Monitoring",
        description:
          "Centralized monitoring console catching data anomalies and alerting admins before issues compound.",
      },
    ],
    techStack: ["Node.js", "Python", "Zapier / Make APIs", "WebSockets", "Redis", "PostgreSQL"],
    metrics: [
      { value: "10x", label: "Execution Speed" },
      { value: "20+ Hrs", label: "Saved / Team / Week" },
      { value: "0%", label: "Manual Data Copying" },
    ],
    faqs: [
      {
        question: "Can you automate workflows across legacy systems without APIs?",
        answer:
          "Yes. We use robotic process automation (RPA) and custom headless scripts to interact with legacy systems safely.",
      },
      {
        question: "What happens if a third-party app changes its API?",
        answer:
          "Our automated error monitoring triggers alerts instantly, and our support team updates integration schemas under SLA agreements.",
      },
    ],
  },
  "web-development": {
    title: "Web Development",
    badge: "Ultra-Fast Web Platforms",
    metaTitle: "Web Development Services | Next.js & Headless Apps | Velosync Global",
    metaDescription:
      "Engineered business websites, web applications, client portals, and headless e-commerce built with modern Next.js and high-performance tech stack.",
    heroHeadline: "High-Performance Web Applications Built for Maximum Growth",
    heroSubtitle:
      "Deliver sub-second page loads, flawless mobile responsiveness, and high conversion rates with modern Next.js and React architecture.",
    iconName: "layers",
    highlights: [
      "Sub-Second Next.js Speed",
      "100/100 Core Web Vitals",
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
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Stripe API"],
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
  "digital-marketing": {
    title: "Digital Marketing & SEO",
    badge: "ROI-Focused Lead Generation",
    metaTitle: "Digital Marketing & Technical SEO Services | Velosync Global",
    metaDescription:
      "Data-driven digital marketing campaigns, technical SEO optimization, lead generation funnels, and targeted audience acquisition.",
    heroHeadline: "Data-Driven Digital Marketing That Conquers Markets & Drives Revenue",
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
    techStack: ["Google Analytics 4", "Google Search Console", "Google Ads", "Meta Ads", "Semrush", "Hotjar"],
    metrics: [
      { value: "4.5x", label: "Average Campaign ROAS" },
      { value: "+220%", label: "Qualified Lead Volume" },
      { value: "-35%", label: "Cost Per Lead" },
    ],
    faqs: [
      {
        question: "How quickly can we expect results from SEO vs PPC?",
        answer:
          "PPC ad campaigns generate qualified leads within 24-48 hours of launch. SEO builds sustainable organic dominance over 3 to 6 months.",
      },
      {
        question: "How do you report campaign performance?",
        answer:
          "We provide a live 24/7 custom analytics dashboard and conduct bi-weekly strategy calls reviewing cost per lead, traffic, and sales closed.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return [
    { slug: "custom-software" },
    { slug: "crm-development" },
    { slug: "ai-automation" },
    { slug: "business-automation" },
    { slug: "web-development" },
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
      title: "Service Not Found | Velosync Global",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${data.title} | Velosync Global`,
      description: data.metaDescription,
      url: `https://velosyncglobal.com/services/${slug}`,
      siteName: "Velosync Global",
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
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide mb-6">
                <SparkleIcon size={16} className="text-cyan-400" />
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
                  leftIcon={<ZapIcon size={18} className="text-cyan-400" />}
                >
                  Explore Capabilities
                </Button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-8 border-t border-slate-800/80">
                {data.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircleIcon size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Banner */}
        <section className="py-10 bg-slate-900 border-y border-slate-800 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.metrics.map((m, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem vs Solution Section */}
        <section className="section-padding bg-slate-50 dark:bg-[#060e24]/60 relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-500 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider block mb-2">
                Problem & Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Overcoming Common Industry Bottlenecks
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Pain Points */}
              <div className="bg-white dark:bg-[#0F172A] p-8 rounded-3xl border border-red-500/20 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center text-base">
                    ✕
                  </span>
                  Common Challenges
                </h3>
                <ul className="space-y-4">
                  {data.painPoints.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Engineered Solution */}
              <div className="bg-white dark:bg-[#0F172A] p-8 rounded-3xl border border-cyan-500/30 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <CheckCircleIcon size={24} className="text-cyan-400" />
                  Velosync Global Approach
                </h3>
                <ul className="space-y-4">
                  {data.solutions.map((s, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircleIcon size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section id="capabilities" className="section-padding bg-white dark:bg-[#060e24] relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-cyan-500 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider block mb-2">
                Core Modules & Features
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                What We Build in {data.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Bar */}
        <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
          <div className="container text-center">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-8">
              Core Tech Stack & Frameworks
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {data.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 text-cyan-300 text-sm font-semibold border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic FAQ Accordion */}
        <section className="section-padding bg-slate-50 dark:bg-[#060e24]/80">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                {data.title} FAQs
              </h2>
            </div>
            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Action Call to Action */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
