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
  AwardIcon,
} from "@/components/ui/Icons";

type CaseStudySlug =
  | "ai-enterprise-crm"
  | "australian-lead-portal"
  | "multi-tenant-erp"
  | "healthcare-telehealth-portal"
  | "logistics-dispatch-tracker"
  | "fintech-kyc-onboarding"
  | "headless-ecommerce-store"
  | "industrial-iot-dashboard";

interface CaseStudyData {
  title: string;
  category: string;
  industry: string;
  country: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  metric: string;
  clientOverview: string;
  challenges: string[];
  solutions: string[];
  features: { title: string; description: string }[];
  deliverables: string[];
  results: { value: string; label: string }[];
  techStack: string[];
}

const caseStudyMap: Record<CaseStudySlug, CaseStudyData> = {
  "ai-enterprise-crm": {
    title: "AI-Powered Enterprise CRM Platform",
    category: "CRM Development",
    industry: "Financial Services",
    country: "Australia",
    metaTitle: "AI Enterprise CRM Case Study | Velosync Global",
    metaDescription:
      "Explore how Velosync Global engineered an AI-powered CRM with automated lead scoring and WhatsApp sync, driving 70% faster deal closure.",
    heroHeadline: "AI-Powered Enterprise CRM Accelerating B2B Deal Closure",
    heroSubtitle:
      "Engineered for an Australian enterprise consulting firm to eliminate sales friction, automate lead scoring, and unify omnichannel communication.",
    metric: "70% Faster Deal Closure",
    clientOverview:
      "Our client is a high-touch Australian enterprise advisory firm managing complex B2B sales cycles involving multiple stakeholders, custom contract terms, and high-value deals.",
    challenges: [
      "Sales reps losing 20+ hours weekly to manual CRM data entry and spreadsheet tracking.",
      "Inbound lead inquiries cooling down due to 24-hour delayed initial outreach.",
      "Executive team lacking real-time visibility into deal pipeline stages and revenue forecasts.",
    ],
    solutions: [
      "Custom Next.js & PostgreSQL CRM dashboard built 100% around client's sales workflow.",
      "Automated AI lead quality scoring evaluating lead intent and assigning leads instantly.",
      "Omnichannel WhatsApp Business API & Gmail integration logging all customer communications.",
    ],
    features: [
      {
        title: "Intelligent Lead Scoring",
        description:
          "AI algorithms evaluating prospect engagement, company size, and urgency to prioritize high-intent deals.",
      },
      {
        title: "WhatsApp & Email Sync",
        description:
          "Automatic logging of emails and WhatsApp messages directly under contact timeline feeds.",
      },
      {
        title: "Proposal & Contract Automation",
        description:
          "Instant PDF proposal generation with embedded digital signature requests.",
      },
      {
        title: "Real-Time Revenue Analytics",
        description:
          "Executive visual dashboards projecting monthly recurring revenue and rep conversion rates.",
      },
    ],
    deliverables: [
      "Custom Next.js CRM Application",
      "AI Intent & Scoring Pipeline",
      "Omnichannel Messaging Integration",
      "Stripe & Xero Billing Connector",
    ],
    results: [
      { value: "+70%", label: "Deal Closure Speed" },
      { value: "< 2 Mins", label: "Lead Response Time" },
      { value: "20+ Hrs", label: "Saved / Rep / Week" },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Twilio WhatsApp", "AWS"],
  },
  "australian-lead-portal": {
    title: "Australian Lead Generation & Quote Engine",
    category: "Digital Marketing",
    industry: "Professional Services",
    country: "Australia",
    metaTitle: "Australian Lead Gen Portal Case Study | Velosync Global",
    metaDescription:
      "Discover how Velosync Global designed a high-converting web portal and Google Ads campaign delivering 3.5x qualified commercial leads.",
    heroHeadline: "Conquering Commercial Search & Tripling Qualified Inquiries",
    heroSubtitle:
      "A complete digital overhaul combining sub-second Next.js web design, technical SEO, and high-intent Google Search campaigns for Australian B2B buyers.",
    metric: "3.5x Qualified Inquiries",
    clientOverview:
      "An established Australian commercial equipment and facility supplier targeting corporate facility managers across Sydney, Melbourne, and Brisbane.",
    challenges: [
      "Sluggish legacy website causing high bounce rates on mobile ad traffic.",
      "High cost-per-click on generic search terms yielding unqualified consumer inquiries.",
      "No automated quote generator forcing prospects to wait days for pricing estimates.",
    ],
    solutions: [
      "Ultra-fast Next.js landing portal built for 100/100 Core Web Vitals performance.",
      "Targeted commercial-intent Google PPC ad funnels with strict negative keyword filters.",
      "Interactive multi-step quote calculator capturing pre-qualified lead requirements.",
    ],
    features: [
      {
        title: "Instant Interactive Quote Engine",
        description:
          "Self-service quote calculator providing prospects with estimated pricing based on specs.",
      },
      {
        title: "Sub-Second Next.js Speed",
        description:
          "Lightning-fast page loads ensuring zero drop-off from mobile search ad clicks.",
      },
      {
        title: "Technical SEO Domination",
        description:
          "Comprehensive schema markup and local landing page targeting across major Australian metros.",
      },
      {
        title: "End-to-End GA4 Attribution",
        description:
          "Precise tracking linking Google Ad clicks to phone calls, quote forms, and closed sales.",
      },
    ],
    deliverables: [
      "Next.js High-Conversion Portal",
      "Interactive Quote Calculation Engine",
      "Google Search PPC Ad Campaigns",
      "Technical SEO Optimization Package",
    ],
    results: [
      { value: "3.5x", label: "Qualified Lead Volume" },
      { value: "-42%", label: "Cost Per Acquisition" },
      { value: "< 0.5s", label: "Page Load Speed" },
    ],
    techStack: ["Next.js", "React 19", "Tailwind CSS", "Google Ads", "GA4", "Vercel"],
  },
  "multi-tenant-erp": {
    title: "Multi-Tenant Business ERP & Billing System",
    category: "Custom Software",
    industry: "Enterprise Operations",
    country: "Global",
    metaTitle: "Multi-Tenant Business ERP Case Study | Velosync Global",
    metaDescription:
      "See how Velosync Global engineered a multi-tenant cloud ERP with automated Xero and Stripe integration, achieving 99.9% billing accuracy.",
    heroHeadline: "Cloud ERP & Automated Billing Streamlining Global Operations",
    heroSubtitle:
      "Architected for a multi-national logistics and technology company to unify project scheduling, multi-currency invoicing, and client milestone approvals.",
    metric: "99.9% Automated Billing",
    clientOverview:
      "A global services firm with operations in Australia, Singapore, and Europe managing hundreds of active client projects with complex billing contracts.",
    challenges: [
      "Fragmented spreadsheet invoicing causing delayed client billing and cash flow lags.",
      "Lack of role-based permissions leading to data security risks across sub-branches.",
      "Manual milestone sign-off processes creating friction between delivery teams and finance.",
    ],
    solutions: [
      "Custom multi-tenant cloud ERP with isolated tenant data access controls.",
      "Automated Stripe & Xero integration triggering invoices upon milestone sign-off.",
      "Centralized executive monitoring dashboard tracking resource utilization and margins.",
    ],
    features: [
      {
        title: "Multi-Currency Automated Invoicing",
        description:
          "Auto-generating invoices in AUD, USD, and EUR synced directly with Xero and Stripe.",
      },
      {
        title: "Milestone Sign-Off Workflow",
        description:
          "Digital client approval portal triggering automatic invoice generation upon milestone acceptance.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Granular permission settings ensuring regional teams access only authorized project data.",
      },
      {
        title: "Real-Time Profitability Analytics",
        description:
          "Instant reporting on project margins, staff billable hours, and revenue recognition.",
      },
    ],
    deliverables: [
      "Multi-Tenant Cloud ERP Core",
      "Client Digital Milestone Portal",
      "Stripe & Xero Automated Sync",
      "Executive Financial Dashboard",
    ],
    results: [
      { value: "99.9%", label: "Billing Accuracy" },
      { value: "3x", label: "Faster Cash Collection" },
      { value: "100%", label: "Audit Compliance" },
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "Stripe API", "Xero API", "Docker"],
  },
  "healthcare-telehealth-portal": {
    title: "Compliant Telehealth & EHR Patient Portal",
    category: "Custom Software",
    industry: "Healthcare",
    country: "Australia",
    metaTitle: "Healthcare Telehealth Portal Case Study | Velosync Global",
    metaDescription:
      "Discover how Velosync Global delivered an AHPRA/HIPAA compliant telehealth portal with automated intake and EHR sync, dropping no-shows by 60%.",
    heroHeadline: "AHPRA-Compliant Digital Health & Patient Intake Portal",
    heroSubtitle:
      "Engineered for an Australian healthcare network to streamline patient onboarding, secure video consultation, and EHR record management.",
    metric: "60% Lower Patient No-Shows",
    clientOverview:
      "A multi-clinic medical group in Australia providing specialized consultations both in-clinic and via secure digital health channels.",
    challenges: [
      "Paper patient intake forms causing long waiting room queues and data entry errors.",
      "High patient no-show rates due to lack of automated SMS and email reminders.",
      "Strict AHPRA and Australian Privacy Principles compliance requirements.",
    ],
    solutions: [
      "Self-service digital patient intake portal accessible on any smartphone before visits.",
      "Automated SMS/Email appointment reminder sequence with instant 1-click confirmation.",
      "Encrypted WebRTC telehealth engine with direct EHR integration.",
    ],
    features: [
      {
        title: "Digital Patient Onboarding",
        description:
          "Mobile-friendly digital intake forms capturing medical history and Medicare info.",
      },
      {
        title: "Automated Reminders",
        description:
          "Multi-stage SMS & email reminders reducing appointment no-shows significantly.",
      },
      {
        title: "Encrypted Telehealth Engine",
        description:
          "End-to-end encrypted HD video consultation rooms integrated into patient charts.",
      },
      {
        title: "Seamless EHR Integration",
        description:
          "Instant synchronization of patient consult notes directly into practice management systems.",
      },
    ],
    deliverables: [
      "AHPRA-Compliant Patient Portal",
      "Automated Intake & Reminders",
      "Encrypted Telehealth Engine",
      "EHR Integration Middleware",
    ],
    results: [
      { value: "-60%", label: "Patient No-Show Rate" },
      { value: "< 2 Mins", label: "Intake Processing Time" },
      { value: "100%", label: "Privacy Compliance" },
    ],
    techStack: ["Next.js", "TypeScript", "Python AI", "WebRTC", "PostgreSQL", "AWS Health"],
  },
  "logistics-dispatch-tracker": {
    title: "Real-Time Fleet Tracking & Dispatch Engine",
    category: "AI & Automation",
    industry: "Logistics",
    country: "Australia",
    metaTitle: "Logistics Fleet Tracking Case Study | Velosync Global",
    metaDescription:
      "Learn how Velosync Global built a real-time GPS fleet tracking and automated dispatch portal for Australian logistics operators, saving 25+ hours/week.",
    heroHeadline: "Real-Time Fleet Telematics & Automated Dispatch Engine",
    heroSubtitle:
      "Developed for an Australian transport & logistics company to optimize driver routes, automate customer tracking notifications, and sync inventory.",
    metric: "25+ Hours Saved / Week",
    clientOverview:
      "An Australian freight and logistics provider operating a fleet of 40+ transport vehicles across interstate routes.",
    challenges: [
      "Manual phone dispatch communication consuming 20+ hours of operational labor weekly.",
      "Inability to provide customers with accurate real-time shipment arrival windows.",
      "Unoptimized delivery routes resulting in high fuel consumption and vehicle wear.",
    ],
    solutions: [
      "Centralized live GPS fleet telematics portal displaying driver locations and load status.",
      "Automated route optimization engine reducing transit times and fuel burn.",
      "Client tracking portal with live SMS updates upon dispatch, transit, and delivery.",
    ],
    features: [
      {
        title: "Live GPS Fleet Tracking",
        description:
          "Interactive Mapbox dashboard displaying real-time vehicle coordinates and speed.",
      },
      {
        title: "Automated Dispatch Matching",
        description:
          "Matching freight orders automatically with nearest available drivers based on capacity.",
      },
      {
        title: "Client Self-Service Portal",
        description:
          "Branded tracking links allowing customers to view live driver ETA without calling support.",
      },
      {
        title: "Automated Maintenance Alerts",
        description:
          "Vehicle health monitoring triggering alerts when servicing thresholds are reached.",
      },
    ],
    deliverables: [
      "Fleet Telematics Control Portal",
      "Automated Route Optimization Engine",
      "Customer Tracking Web Portal",
      "Driver Mobile Web App",
    ],
    results: [
      { value: "25+ Hrs", label: "Saved Per Week" },
      { value: "98.4%", label: "On-Time Deliveries" },
      { value: "18%", label: "Fuel Cost Savings" },
    ],
    techStack: ["Node.js", "React", "PostgreSQL", "Google Maps API", "WebSockets", "Redis"],
  },
  "fintech-kyc-onboarding": {
    title: "Secure Fintech KYC & Loan Approval Engine",
    category: "Custom Software",
    industry: "Fintech",
    country: "Global",
    metaTitle: "Fintech KYC Onboarding Case Study | Velosync Global",
    metaDescription:
      "Read how Velosync Global engineered an encrypted KYC onboarding and automated loan evaluation engine, achieving instant customer verification.",
    heroHeadline: "Automated KYC Onboarding & Instant Credit Evaluation",
    heroSubtitle:
      "Built for an emerging digital lending platform to eliminate paper verification, prevent fraud, and accelerate borrower onboarding.",
    metric: "Instant Onboarding Turnaround",
    clientOverview:
      "A fast-growing fintech company offering digital working capital loans to Australian SMEs and micro-enterprises.",
    challenges: [
      "Slow, paper-heavy onboarding taking up to 5 business days for borrower approval.",
      "High application drop-off rate during manual bank statement submission steps.",
      "Security audit vulnerabilities and compliance risks with manual document verification.",
    ],
    solutions: [
      "Encrypted digital customer onboarding portal featuring automated identity checks.",
      "Automated credit evaluation engine analyzing bank feeds and business revenue rules.",
      "End-to-end audit logging guaranteeing 100% compliance with financial regulations.",
    ],
    features: [
      {
        title: "Automated Identity & KYC Check",
        description:
          "Instant biometric facial check and ID document verification in under 30 seconds.",
      },
      {
        title: "Bank Feed Financial Parser",
        description:
          "Secure connection with open banking APIs to evaluate revenue metrics automatically.",
      },
      {
        title: "Automated Risk Scoring",
        description:
          "Custom decision engine assigning risk tier scores and pre-approved credit limits.",
      },
      {
        title: "Encrypted Document Vault",
        description:
          "AES-256 encrypted cloud storage for sensitive financial documents and loan agreements.",
      },
    ],
    deliverables: [
      "Digital KYC Onboarding Portal",
      "Automated Credit Decision Engine",
      "Open Banking Integration Hub",
      "Compliance Audit System",
    ],
    results: [
      { value: "Instant", label: "Onboarding Approval" },
      { value: "-45%", label: "Customer Drop-off Rate" },
      { value: "100%", label: "Audit Compliance" },
    ],
    techStack: ["Next.js", "TypeScript", "Python Security", "OAuth2", "PostgreSQL", "AWS"],
  },
  "headless-ecommerce-store": {
    title: "Next.js Headless E-Commerce Platform",
    category: "Web & E-Commerce",
    industry: "Retail",
    country: "Australia",
    metaTitle: "Headless E-Commerce Case Study | Velosync Global",
    metaDescription:
      "Explore how Velosync Global built a Next.js headless storefront delivering sub-second speed and a 38% increase in repeat customer purchases.",
    heroHeadline: "Sub-Second Headless Commerce Driving Repeat Customer Sales",
    heroSubtitle:
      "Re-platforming an Australian retail brand from legacy monolithic architecture to a modern Next.js headless e-commerce ecosystem.",
    metric: "38% Increase in Repeat Purchases",
    clientOverview:
      "A boutique Australian lifestyle brand selling high-value apparel and homewares online and through pop-up retail stores.",
    challenges: [
      "Legacy e-commerce store suffering 4+ second load times destroys mobile ad conversion.",
      "Disconnected inventory across physical stores and web channel causing stockouts.",
      "Generic email outreach failing to retain past buyers and boost customer lifetime value.",
    ],
    solutions: [
      "Ultra-fast Next.js headless storefront delivering sub-0.6s page transitions globally.",
      "Automated inventory sync engine across Shopify, physical POS, and warehouse ERP.",
      "AI recommendation engine powering personalized automated email retention sequences.",
    ],
    features: [
      {
        title: "Sub-Second Headless Storefront",
        description:
          "Lightning-fast Next.js frontend delivering instantaneous page renders and cart additions.",
      },
      {
        title: "Multi-Channel Inventory Sync",
        description:
          "Real-time synchronization of stock levels across Shopify API, physical stores, and ERP.",
      },
      {
        title: "AI Product Recommendations",
        description:
          "Smart algorithms suggesting complementary products based on browsing behavior.",
      },
      {
        title: "One-Click Instant Checkout",
        description:
          "Optimized checkout funnel supporting Apple Pay, Google Pay, and Shop Pay.",
      },
    ],
    deliverables: [
      "Next.js Headless Storefront",
      "Shopify API & POS Sync Engine",
      "AI Recommendation Engine",
      "Performance & SEO Optimization",
    ],
    results: [
      { value: "< 0.6s", label: "Page Load Speed" },
      { value: "+38%", label: "Repeat Purchase Rate" },
      { value: "-32%", label: "Cart Abandonment" },
    ],
    techStack: ["Next.js", "React", "Shopify Storefront API", "Tailwind CSS", "Stripe", "Vercel"],
  },
  "industrial-iot-dashboard": {
    title: "Industrial Manufacturing IoT & OEE Dashboard",
    category: "AI & Automation",
    industry: "Manufacturing",
    country: "Global",
    metaTitle: "Industrial IoT Dashboard Case Study | Velosync Global",
    metaDescription:
      "Discover how Velosync Global built a real-time IoT manufacturing dashboard, reducing unplanned machine downtime by 40%.",
    heroHeadline: "Industry 4.0 IoT Telematics & Predictive Maintenance",
    heroSubtitle:
      "Developed for an industrial manufacturing facility to connect machine IoT sensors, track Overall Equipment Effectiveness (OEE), and predict maintenance.",
    metric: "40% Downtime Reduction",
    clientOverview:
      "An industrial manufacturing plant producing precision components with high-speed automated production lines.",
    challenges: [
      "Unplanned machine breakdowns causing expensive line halts and missed production deadlines.",
      "Paper-based logbooks failing to give plant managers real-time visibility into OEE metrics.",
      "Difficulty coordinating raw material inventory with active machine schedules.",
    ],
    solutions: [
      "Custom IoT telematics control room connecting sensors via MQTT and Python data pipelines.",
      "Predictive AI maintenance alert system flagging anomalous vibration and heat readings.",
      "Automated production schedule software syncing raw materials with order dispatch.",
    ],
    features: [
      {
        title: "Real-Time OEE Telematics",
        description:
          "Live dashboards measuring machine Availability, Performance, and Quality metrics.",
      },
      {
        title: "Predictive Maintenance Alerts",
        description:
          "Machine learning models detecting component wear before failures occur.",
      },
      {
        title: "Automated Production Scheduling",
        description:
          "Optimizing job sequences across active machines to minimize changeover downtime.",
      },
      {
        title: "Shop-Floor Mobile App",
        description:
          "Tablet interface for machine operators to record quality checks and log downtime reasons.",
      },
    ],
    deliverables: [
      "Industrial Control Room Dashboard",
      "Predictive AI Maintenance Pipeline",
      "IoT Sensor Integration Bus",
      "Shop-Floor Mobile Web App",
    ],
    results: [
      { value: "-40%", label: "Unplanned Downtime" },
      { value: "+22%", label: "Total Plant Output" },
      { value: "Real-Time", label: "OEE Visibility" },
    ],
    techStack: ["Python", "React", "PostgreSQL", "MQTT", "Docker", "Tailwind CSS"],
  },
};

export async function generateStaticParams() {
  return [
    { slug: "ai-enterprise-crm" },
    { slug: "australian-lead-portal" },
    { slug: "multi-tenant-erp" },
    { slug: "healthcare-telehealth-portal" },
    { slug: "logistics-dispatch-tracker" },
    { slug: "fintech-kyc-onboarding" },
    { slug: "headless-ecommerce-store" },
    { slug: "industrial-iot-dashboard" },
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as CaseStudySlug;
  const data = caseStudyMap[slug];

  if (!data) {
    return {
      title: "Case Study Not Found | Velosync Global",
    };
  }

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      title: `${data.title} | Velosync Global Case Study`,
      description: data.metaDescription,
      url: `https://velosyncglobal.com/portfolio/${slug}`,
      siteName: "Velosync Global",
      type: "website",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug as CaseStudySlug;
  const data = caseStudyMap[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main">
        {/* Dynamic Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                  {data.category}
                </span>
                <span className="px-3 py-1.5 rounded-full bg-white/10 text-slate-300 text-xs font-semibold">
                  {data.country} • {data.industry}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
                {data.heroHeadline}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
                {data.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button
                  as="link"
                  href="/contact"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRightIcon size={18} />}
                >
                  Build a Similar Solution
                </Button>
                <Button
                  as="link"
                  href="#case-details"
                  variant="outline"
                  size="lg"
                  leftIcon={<ZapIcon size={18} className="text-cyan-400" />}
                >
                  Explore System Features
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Banner */}
        <section className="py-10 bg-slate-900 border-y border-slate-800 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.results.map((r, idx) => (
                <div key={idx} className="text-center p-4">
                  <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-1">
                    {r.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium uppercase tracking-wider">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Story & Challenge vs Solution */}
        <section id="case-details" className="section-padding bg-slate-50 dark:bg-[#060e24]/60 relative">
          <div className="container">
            {/* Overview */}
            <div className="max-w-3xl mx-auto mb-16 bg-white dark:bg-[#0F172A] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md">
              <span className="text-cyan-500 font-bold text-xs uppercase tracking-wider block mb-2">
                Client Context & Overview
              </span>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                About the Client
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {data.clientOverview}
              </p>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* Challenges */}
              <div className="bg-white dark:bg-[#0F172A] p-8 rounded-3xl border border-red-500/20 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center text-base">
                    ✕
                  </span>
                  Technical & Operational Bottlenecks
                </h3>
                <ul className="space-y-4">
                  {data.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-red-500 font-bold mt-0.5">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="bg-white dark:bg-[#0F172A] p-8 rounded-3xl border border-cyan-500/30 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                  <CheckCircleIcon size={24} className="text-cyan-400" />
                  Velosync Global Engineered Solution
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

            {/* Features Grid */}
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="text-cyan-500 font-bold text-xs uppercase tracking-wider block mb-2">
                  System Architecture & Capabilities
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  Key Features Engineered
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-7 rounded-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 font-bold flex items-center justify-center text-sm mb-4">
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Deliverables Bar */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {data.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm font-medium text-slate-200">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                    Technology Stack Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {data.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 text-cyan-300 text-xs font-semibold border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
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
