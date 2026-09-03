export type DepartmentSlug =
  | "technology"
  | "accounting"
  | "conveyancing"
  | "civil-engineering"
  | "real-estate"
  | "home-loans"
  | "town-planning"
  | "architecture"
  | "financial-planning"
  | "legal-advisory"
  | "insurance"
  | "hr-advisory";

export interface DepartmentData {
  slug: DepartmentSlug;
  number: string;
  category: "Property & Built Environment" | "Finance, Risk & Advisory" | "Technology & People";
  title: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  image: string;
  alt: string;
  highlights: string[];
  painPoints: string[];
  solutions: string[];
  capabilities: { title: string; description: string }[];
  metrics: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  keyServices: { title: string; description: string; href?: string }[];
}

export const departmentsData: Record<DepartmentSlug, DepartmentData> = {
  technology: {
    slug: "technology",
    number: "01",
    category: "Technology & People",
    title: "Technology Services",
    badge: "Digital Platforms & Software",
    metaTitle: "Technology & Software Engineering Services | ValoSync Global",
    metaDescription:
      "Engineered custom software platforms, high-conversion CRMs, AI workflow automation, mobile applications, and digital growth funnels for modern enterprises.",
    heroHeadline: "Bespoke Technology, AI & Cloud Platforms Built to Scale Your Enterprise",
    heroSubtitle:
      "Transform your operational vision into high-performing, cloud-native software and automated digital systems engineered around your proprietary workflows.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82",
    alt: "Electronic circuit board representing technology services",
    highlights: [
      "100% Client Code IP Ownership",
      "AI & Process Automation",
      "Scalable Cloud Microservices",
      "Zero Legacy Friction",
    ],
    painPoints: [
      "Rigid off-the-shelf software forcing complex manual workarounds.",
      "High ongoing per-user license fees crippling operational margins.",
      "Fragmented software tools causing data siloing and team miscommunication.",
    ],
    solutions: [
      "Custom software architecture engineered 100% around your business rules.",
      "Intelligent AI automation reducing manual administrative processing.",
      "Seamless API middleware connecting CRMs, databases, and third-party tools.",
    ],
    capabilities: [
      {
        title: "Custom Software & SaaS",
        description:
          "Purpose-built web and mobile applications engineered with Next.js, React, Node.js, and cloud microservices.",
      },
      {
        title: "CRM & Business Platforms",
        description:
          "Tailored sales pipelines, automated lead scoring, and omnichannel customer portals designed for business teams.",
      },
      {
        title: "AI & Process Automation",
        description:
          "Private RAG assistants, intelligent PDF document processing engines, and automated workflow triggers.",
      },
      {
        title: "Cloud & DevOps Infrastructure",
        description:
          "Containerized AWS cloud architecture, CI/CD automation pipelines, and high-availability monitoring.",
      },
    ],
    metrics: [
      { value: "100%", label: "Source Code IP Ownership" },
      { value: "99.9%", label: "System Uptime Guarantee" },
      { value: "-45%", label: "Operational Friction" },
    ],
    faqs: [
      {
        question: "Do we own the source code for our technology projects?",
        answer:
          "Yes. Full source code repositories, IP rights, and deployment scripts are completely transferred to your organization upon project completion.",
      },
      {
        question: "Can ValoSync integrate with our existing legacy systems?",
        answer:
          "Yes, we build robust API bridges and custom middleware to connect new cloud tools with existing legacy databases.",
      },
    ],
    keyServices: [
      { title: "Custom Software Development", description: "Bespoke web and mobile platforms built to your specs.", href: "/services/custom-software" },
      { title: "CRM Development", description: "Tailored sales pipelines and client management platforms.", href: "/services/crm-development" },
      { title: "AI Automation", description: "Document extraction engines and intelligent chatbots.", href: "/services/ai-automation" },
      { title: "Web Development", description: "Fast, modern Next.js web applications and portals.", href: "/services/web-development" },
      { title: "Mobile App Development", description: "Cross-platform iOS and Android mobile solutions.", href: "/services/mobile-app-development" },
      { title: "Cloud & DevOps Support", description: "Infrastructure setup, CI/CD pipelines, and cloud security.", href: "/services/cloud-devops" },
    ],
  },

  accounting: {
    slug: "accounting",
    number: "02",
    category: "Finance, Risk & Advisory",
    title: "Accounting Services",
    badge: "Financial Precision & Advisory",
    metaTitle: "Corporate Accounting & Financial Management Services | ValoSync Global",
    metaDescription:
      "Structured bookkeeping, financial reporting, compliance management, tax advisory, and payroll administrative support for growing businesses.",
    heroHeadline: "Strategic Accounting & Financial Clarity for Growing Businesses",
    heroSubtitle:
      "Eliminate financial complexity with accurate bookkeeping, timely compliance reporting, structured payroll management, and proactive business financial advisory.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=82",
    alt: "Financial documents, calculator and laptop arranged for professional accounting work",
    highlights: [
      "Accurate Bookkeeping & Accounts",
      "Tax & Compliance Preparedness",
      "Payroll & Superannuation Admin",
      "Financial Forecasting & Cash Flow",
    ],
    painPoints: [
      "Business owners spending late nights reconciling receipts instead of scaling operations.",
      "Unexpected compliance fines due to missed statutory reporting deadlines.",
      "Lack of cash flow forecasting leaving management unprepared for tax cycles.",
    ],
    solutions: [
      "Structured monthly bookkeeping and automated cloud ledger reconciliation.",
      "Proactive tax readiness schedules guaranteeing zero missed compliance windows.",
      "Executive financial reporting dashboards providing clear visibility into margins.",
    ],
    capabilities: [
      {
        title: "Bookkeeping & Financial Administration",
        description:
          "Daily ledger management, bank reconciliations, accounts payable/receivable tracking, and digital receipt capture.",
      },
      {
        title: "Compliance & Statutory Reporting",
        description:
          "Preparation of periodic activity statements, financial reporting packages, and compliance documentation.",
      },
      {
        title: "Payroll & Employee Administration",
        description:
          "End-to-end payroll processing, superannuation tracking, leave entitlements, and Single Touch Payroll compliance.",
      },
      {
        title: "Cash Flow & Management Advisory",
        description:
          "Custom budgeting, cash flow forecasting, profit margin analysis, and business growth advisory.",
      },
    ],
    metrics: [
      { value: "100%", label: "On-Time Compliance" },
      { value: "15+ Hrs", label: "Saved Weekly / Business" },
      { value: "Zero", label: "Late Statutory Penalties" },
    ],
    faqs: [
      {
        question: "Which accounting software systems do you support?",
        answer:
          "We work seamlessly with Xero, MYOB, QuickBooks, and enterprise ERP financial modules.",
      },
      {
        question: "Can ValoSync manage our weekly staff payroll?",
        answer:
          "Yes. We handle complete payroll runs, payslip distribution, leave tracking, superannuation lodgements, and end-of-year roll-overs.",
      },
    ],
    keyServices: [
      { title: "Bookkeeping & Bank Reconciliation", description: "Structured ledger management and receipt tracking." },
      { title: "Statutory Reporting Support", description: "Preparation and audit-ready compliance reporting." },
      { title: "Payroll & Super Management", description: "Complete end-to-end staff payroll administration." },
      { title: "Cash Flow Advisory", description: "Budgeting, margin analysis, and growth forecasting." },
    ],
  },

  conveyancing: {
    slug: "conveyancing",
    number: "03",
    category: "Property & Built Environment",
    title: "Conveyancing Services",
    badge: "Property Legal & Settlement Co-ordination",
    metaTitle: "Property Conveyancing & Legal Settlement Services | ValoSync Global",
    metaDescription:
      "Expert property conveyancing support for residential and commercial property contracts, title searches, transfer documentation, and seamless settlement execution.",
    heroHeadline: "Seamless Property Transfers & Stress-Free Settlement Execution",
    heroSubtitle:
      "Protect your property transactions with thorough contract reviews, title searches, settlement coordination, and transparent legal documentation guidance.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=82",
    alt: "House keys and property documents representing conveyancing support",
    highlights: [
      "Rigorous Contract Review",
      "Electronic Settlement Co-ordination",
      "Comprehensive Title Searches",
      "Fixed Transparent Fees",
    ],
    painPoints: [
      "Unclear contract terms risking deposit forfeiture or costly property defects.",
      "Settlement delays caused by missed documentation or poor communication between lenders.",
      "Hidden legal costs and surprise administrative fees during property transfers.",
    ],
    solutions: [
      "Thorough contract review prior to signing, identifying critical special conditions.",
      "Electronic settlement platform coordination ensuring on-time financial settlement.",
      "Fixed, transparent service pricing with clear breakdown of statutory search costs.",
    ],
    capabilities: [
      {
        title: "Residential Property Conveyancing",
        description:
          "Complete buying and selling legal coordination for houses, townhouses, land, and apartments.",
      },
      {
        title: "Commercial Property Settlements",
        description:
          "Specialized conveyancing for commercial buildings, industrial warehouses, and retail leases.",
      },
      {
        title: "Title Searches & Due Diligence",
        description:
          "Detailed title background checks, easement verifications, planning certificates, and encumbrance reports.",
      },
      {
        title: "Private & Off-Market Transfers",
        description:
          "Facilitating family transfers, spousal title additions, and off-market property agreement settlements.",
      },
    ],
    metrics: [
      { value: "100%", label: "Settlement Success Rate" },
      { value: "< 24 Hrs", label: "Contract Review Turnaround" },
      { value: "Fixed", label: "Transparent Service Fees" },
    ],
    faqs: [
      {
        question: "When should I engage a conveyancer when buying property?",
        answer:
          "You should ideally engage us *before* signing any contract of sale so we can review the contract terms, vendor disclosure statements, and special conditions.",
      },
      {
        question: "How are settlements handled?",
        answer:
          "Settlements are conducted securely via online electronic settlement platforms (e.g. PEXA), coordinating with your lender, vendor conveyancer, and revenue offices seamlessly.",
      },
    ],
    keyServices: [
      { title: "Buyers & Sellers Conveyancing", description: "Full legal preparation and settlement support." },
      { title: "Contract of Sale Review", description: "Comprehensive legal check of terms and special conditions." },
      { title: "Title & Property Searches", description: "Verification of easements, encumbrances, and council searches." },
      { title: "Family & Related Transfers", description: "Spousal, estate, and internal property title updates." },
    ],
  },

  "civil-engineering": {
    slug: "civil-engineering",
    number: "04",
    category: "Property & Built Environment",
    title: "Civil Engineering Services",
    badge: "Structural Planning & Project Co-ordination",
    metaTitle: "Civil & Structural Engineering Services | ValoSync Global",
    metaDescription:
      "Comprehensive civil engineering, structural drafting, site planning, stormwater management, and development approval coordination for property projects.",
    heroHeadline: "Engineered Precision for Structural, Civil & Land Infrastructure",
    heroSubtitle:
      "Deliver safe, compliant, and cost-effective development projects with our civil planning, structural drafting, site coordination, and regulatory compliance expertise.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=82",
    alt: "Civil engineering team reviewing plans at a construction site",
    highlights: [
      "Structural Drafting & Design",
      "Stormwater & Drainage Planning",
      "Council DA Documentation",
      "Site Inspection & Coordination",
    ],
    painPoints: [
      "Council development applications delayed due to non-compliant civil plan submissions.",
      "Unexpected site drainage issues leading to budget overruns during excavation.",
      "Miscommunication between structural engineers, architects, and site builders.",
    ],
    solutions: [
      "Strict engineering documentation prepared specifically to meet local council guidelines.",
      "Integrated stormwater and earthworks planning resolving site constraints early.",
      "Dedicated project engineering coordination bridging architectural intent with builder execution.",
    ],
    capabilities: [
      {
        title: "Structural Engineering & Design",
        description:
          "Structural calculations, footing design, concrete slab details, steel framing, and retaining wall engineering.",
      },
      {
        title: "Stormwater & Drainage Engineering",
        description:
          "Site stormwater management plans, OSD (On-site Stormwater Detention) design, and flood impact assessments.",
      },
      {
        title: "Subdivision & Land Infrastructure",
        description:
          "Civil design for multi-lot residential subdivisions, road alignments, utility layouts, and earthworks modeling.",
      },
      {
        title: "Council & DA Liaison Support",
        description:
          "Preparation of engineering reports, certificates of compliance, and liaison with local approval authorities.",
      },
    ],
    metrics: [
      { value: "100%", label: "Standards Compliance" },
      { value: "-20%", label: "Structural Material Waste" },
      { value: "Fast", label: "Council Approval Readiness" },
    ],
    faqs: [
      {
        question: "Can you provide engineering certifications for council approval?",
        answer:
          "Yes, we prepare engineering documentation and compliance certificates required for Development Applications (DA) and Construction Certificates (CC).",
      },
      {
        question: "What scale of engineering projects do you accept?",
        answer:
          "We handle single residential builds, townhouse developments, multi-lot land subdivisions, and commercial structural works.",
      },
    ],
    keyServices: [
      { title: "Structural Design & Calculations", description: "Foundations, slabs, steel framing, and retaining walls." },
      { title: "Stormwater & OSD Design", description: "Detention system modeling and site drainage design." },
      { title: "Subdivision Infrastructure", description: "Roadways, sewer/water servicing, and civil earthworks." },
      { title: "Council DA & CC Documentation", description: "Engineering reports and compliance certificates." },
    ],
  },

  "real-estate": {
    slug: "real-estate",
    number: "05",
    category: "Property & Built Environment",
    title: "Real Estate Services",
    badge: "Property Advisory & Asset Management",
    metaTitle: "Real Estate Advisory, Sales & Property Management | ValoSync Global",
    metaDescription:
      "End-to-end real estate solutions: residential & commercial sales, property management, leasing, tenant placement, and strategic property investment guidance.",
    heroHeadline: "Strategic Real Estate Services for Buyers, Sellers & Investors",
    heroSubtitle:
      "Maximize property value and portfolio growth through dedicated sales advocacy, proactive asset management, market research, and seamless leasing services.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=82",
    alt: "Contemporary residential property representing real estate services",
    highlights: [
      "Targeted Property Marketing",
      "Buyers & Sellers Representation",
      "Proactive Property Management",
      "Market Valuation Insights",
    ],
    painPoints: [
      "Property listings stagnating on the market due to poor marketing strategy and weak buyer targeting.",
      "Landlords dealing with tenant arrears, unmaintained properties, and communication gaps.",
      "Investors purchasing sub-optimal assets without rigorous yield and growth analysis.",
    ],
    solutions: [
      "Multi-channel property marketing campaigns attracting active qualified buyers and tenants.",
      "Proactive asset management ensuring zero rent arrears and regular property condition inspections.",
      "Data-backed property research guiding strategic buying decisions for maximum capital growth.",
    ],
    capabilities: [
      {
        title: "Residential Property Sales & Acquisition",
        description:
          "Strategic property listing, professional photography, digital campaigns, private open homes, and negotiation.",
      },
      {
        title: "Commercial Real Estate Advisory",
        description:
          "Commercial sales, retail and office leasing, landlord representation, and long-term lease structuring.",
      },
      {
        title: "Proactive Property Management",
        description:
          "Tenant screening, rent collection, routine digital inspections, emergency maintenance, and lease renewals.",
      },
      {
        title: "Buyer's Agent & Investment Strategy",
        description:
          "Independent property search, off-market deal access, auction bidding, and yield calculation for investors.",
      },
    ],
    metrics: [
      { value: "98%", label: "Occupancy Rate" },
      { value: "Top 5%", label: "Market Exposure" },
      { value: "100%", label: "Transparent Reporting" },
    ],
    faqs: [
      {
        question: "How do you market properties for maximum sale price?",
        answer:
          "We combine high-end visual media, targeted digital marketing campaigns across social media, portal features, and our active database of qualified buyers.",
      },
      {
        question: "What sets ValoSync property management apart?",
        answer:
          "We offer low landlord-to-manager ratios, zero tolerance on rent arrears, digital inspection reports with photos, and transparent owner portal access.",
      },
    ],
    keyServices: [
      { title: "Residential Sales & Marketing", description: "High-impact listing strategy and buyer negotiation." },
      { title: "Commercial Leasing & Sales", description: "Retail, office, and industrial property transaction services." },
      { title: "Property & Asset Management", description: "Proactive tenant care, rent collection, and maintenance." },
      { title: "Buyer Representation", description: "Independent property sourcing, negotiation, and auction bidding." },
    ],
  },

  "home-loans": {
    slug: "home-loans",
    number: "06",
    category: "Finance, Risk & Advisory",
    title: "Home Loan Services",
    badge: "Mortgage Brokerage & Finance Solutions",
    metaTitle: "Home Loans, Mortgage Brokerage & Refinancing | ValoSync Global",
    metaDescription:
      "Expert home loan and mortgage solutions: first home owner loans, competitive refinancing, property investment lending, and commercial finance advisory.",
    heroHeadline: "Tailored Mortgage & Property Lending Solutions Built for You",
    heroSubtitle:
      "Navigate the home loan landscape with confidence. We compare lending options across leading banks and lenders to secure competitive rates and smooth loan approval.",
    image: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=82",
    alt: "Modern family home representing home loan support",
    highlights: [
      "Access to 30+ Leading Lenders",
      "First Home Buyer Specialist",
      "Refinancing & Rate Reductions",
      "Fast Pre-Approval Support",
    ],
    painPoints: [
      "Home buyers overwhelmed by complex bank jargon, strict borrowing criteria, and endless paperwork.",
      "Existing homeowners paying high interest rates because their bank hasn't updated their loan discount.",
      "Investors struggling to structure loan facilities for tax efficiency and ongoing borrowing capacity.",
    ],
    solutions: [
      "Single streamlined loan application process comparing options across top tier banks and specialist lenders.",
      "Proactive rate reviews securing lower interest rates or cash-back refinancing deals.",
      "Structured lending strategies tailored for multi-property investment portfolio growth.",
    ],
    capabilities: [
      {
        title: "First Home Buyer Loans",
        description:
          "Step-by-step guidance on government grants, deposit schemes, borrowing power assessment, and loan pre-approvals.",
      },
      {
        title: "Refinancing & Rate Optimization",
        description:
          "Comprehensive health checks on your current mortgage to unlock lower interest rates, reduce payments, or consolidate debt.",
      },
      {
        title: "Investment Property Loans",
        description:
          "Interest-only options, equity release for deposit funding, and loan structures aligned with your tax strategy.",
      },
      {
        title: "Commercial & Business Lending",
        description:
          "Commercial property loans, equipment finance, business expansion lines of credit, and asset finance.",
      },
    ],
    metrics: [
      { value: "30+", label: "Lender Panel Choices" },
      { value: "$0", label: "Broker Advisory Fee" },
      { value: "Fast", label: "Pre-Approval Turnaround" },
    ],
    faqs: [
      {
        question: "Does it cost me anything to use ValoSync Home Loan services?",
        answer:
          "In most standard home loan scenarios, our mortgage broker service is at zero cost to you, as lenders pay a commission upon successful settlement.",
      },
      {
        question: "How much deposit do I need for a home loan?",
        answer:
          "While a 20% deposit avoids Lenders Mortgage Insurance (LMI), options exist for deposits as low as 5% or 0% with First Home Guarantee programs or guarantor support.",
      },
    ],
    keyServices: [
      { title: "First Home Owner Loans", description: "Pre-approval, grant applications, and guided home buying." },
      { title: "Mortgage Refinancing", description: "Rate reduction, debt consolidation, and cash-back offers." },
      { title: "Investment Property Finance", description: "Equity releases and strategic multi-property loan structures." },
      { title: "Commercial & Equipment Finance", description: "Business loans, vehicle funding, and commercial property finance." },
    ],
  },

  "town-planning": {
    slug: "town-planning",
    number: "07",
    category: "Property & Built Environment",
    title: "Town Planning Services",
    badge: "Development Approvals & Zoning Advisory",
    metaTitle: "Town Planning, DA Approvals & Land Zoning Services | ValoSync Global",
    metaDescription:
      "Expert town planning, council Development Application (DA) management, site zoning feasibility studies, and master planning for property developments.",
    heroHeadline: "Navigating Planning Approvals & Council DA Compliance with Confidence",
    heroSubtitle:
      "Unlock the development potential of your site with expert zoning analysis, planning statement preparation, environmental assessments, and council DA management.",
    image: "/images/town-planning.jpg",
    alt: "Town planner and architectural blueprints for development planning",
    highlights: [
      "Council DA Application Management",
      "Site Zoning Feasibility Studies",
      "Environmental Impact Reports",
      "Master Planning & Subdivision Advice",
    ],
    painPoints: [
      "Development applications rejected or stalled for months due to non-compliant planning reports.",
      "Uncertainty around site zoning regulations, height limits, and floor space ratios (FSR).",
      "Complex environmental and heritage overlays creating expensive site redesigns late in project cycles.",
    ],
    solutions: [
      "Rigorous pre-lodgement planning reviews identifying site constraints before submitting to council.",
      "Comprehensive Statements of Environmental Effects (SEE) designed to clear DA hurdles swiftly.",
      "Proactive liaison with local council planning officers to resolve queries and fast-track approvals.",
    ],
    capabilities: [
      {
        title: "Development Application (DA) Lodgement",
        description:
          "Preparation and coordination of all planning documentation required for local council DA and Clause 4.6 variation submissions.",
      },
      {
        title: "Site Feasibility & Due Diligence",
        description:
          "Detailed zoning reports evaluating site yield, height controls, setback requirements, and development potential.",
      },
      {
        title: "Master Planning & Urban Strategy",
        description:
          "Strategic planning for large residential subdivisions, commercial hubs, and industrial park precincts.",
      },
      {
        title: "Council Appeals & Dispute Resolution",
        description:
          "Expert representation for planning negotiations, conciliation conferences, and local planning panel reviews.",
      },
    ],
    metrics: [
      { value: "95%+", label: "DA Approval Rate" },
      { value: "Fast", label: "Pre-Lodgement Assessment" },
      { value: "100%", label: "Council Compliance" },
    ],
    faqs: [
      {
        question: "When should I engage a town planner for my development?",
        answer:
          "Engage a town planner during site acquisition or preliminary design. We identify zoning restrictions, height limits, and council requirements before you commit capital.",
      },
      {
        question: "What is a Statement of Environmental Effects (SEE)?",
        answer:
          "An SEE is a mandatory planning report that explains the environmental impacts of a proposed development, how those impacts have been minimized, and why it complies with council LEP and DCP controls.",
      },
    ],
    keyServices: [
      { title: "DA Planning Statements (SEE)", description: "Mandatory reports for local council approval." },
      { title: "Zoning & Feasibility Audits", description: "Unlocking property yield, height, and FSR capacity." },
      { title: "Clause 4.6 Variations", description: "Justifying variations to council development standards." },
      { title: "Subdivision Planning", description: "Land parcel splitting and master plan coordination." },
    ],
  },

  architecture: {
    slug: "architecture",
    number: "08",
    category: "Property & Built Environment",
    title: "Architecture & Building Design",
    badge: "Bespoke Architectural Concepts & Drafting",
    metaTitle: "Architectural Design, Drafting & 3D Renderings | ValoSync Global",
    metaDescription:
      "Modern architectural design, residential & commercial drafting, 3D photorealistic renderings, interior space planning, and construction documentation.",
    heroHeadline: "Visionary Architecture & Precision Building Design",
    heroSubtitle:
      "Bring your property vision to life with custom architectural concepts, detailed building blueprints, 3D renderings, and seamless integration with civil engineering.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82",
    alt: "Modern architectural house design with clean lines and glass facade",
    highlights: [
      "Custom Residential & Commercial Design",
      "3D Photorealistic Renderings",
      "Construction Blueprint Drafting",
      "Building Code & Standard Compliance",
    ],
    painPoints: [
      "Generic building plans that fail to optimize natural light, energy efficiency, or site orientation.",
      "Mismatch between architectural blueprints and engineering structural constraints causing site rework.",
      "Difficulty visualizing final spaces before construction begins.",
    ],
    solutions: [
      "Purpose-designed architecture balancing aesthetic beauty with site orientation and practical functionality.",
      "Fully integrated architectural and civil engineering drafting eliminating clashes before construction.",
      "Ultra-detailed 3D virtual walkthroughs allowing you to experience spaces before breaking ground.",
    ],
    capabilities: [
      {
        title: "Bespoke Residential Architecture",
        description:
          "Custom luxury homes, multi-unit townhouses, luxury renovations, and modern apartment buildings.",
      },
      {
        title: "Commercial & Retail Architecture",
        description:
          "Office building facades, retail fit-outs, industrial warehouse design, and hospitality venue architecture.",
      },
      {
        title: "3D Visualisation & Renderings",
        description:
          "Photorealistic exterior and interior 3D renders, sun shadow studies, and virtual walkthrough animations.",
      },
      {
        title: "Construction Documentation & CC Drawings",
        description:
          "Detailed Working Drawings and Construction Certificate (CC) documentation for builders.",
      },
    ],
    metrics: [
      { value: "100%", label: "Bespoke Custom Designs" },
      { value: "3D", label: "Virtual Walkthrough Renders" },
      { value: "Seamless", label: "Engineering Integration" },
    ],
    faqs: [
      {
        question: "Do you design both residential and commercial buildings?",
        answer:
          "Yes. Our design team covers high-end luxury homes, townhouse developments, commercial offices, industrial facilities, and interior fit-outs.",
      },
      {
        question: "How do your architectural designs integrate with engineering?",
        answer:
          "Because ValoSync houses both Civil Engineering and Architecture under one roof, our designers work directly alongside structural engineers to prevent site clashes.",
      },
    ],
    keyServices: [
      { title: "Luxury Home Design", description: "Bespoke architectural concepts tailored to lifestyle and site." },
      { title: "Multi-Unit Townhouse Design", description: "High-density residential yield and floorplan optimization." },
      { title: "3D Renderings & Animations", description: "Photorealistic marketing and presentation renders." },
      { title: "Construction Certificate Drawings", description: "Full working blueprints for builders and council CC." },
    ],
  },

  "financial-planning": {
    slug: "financial-planning",
    number: "09",
    category: "Finance, Risk & Advisory",
    title: "Financial Planning & Wealth",
    badge: "Strategic Wealth Accumulation & Retirement",
    metaTitle: "Financial Planning, Wealth Management & SMSF | ValoSync Global",
    metaDescription:
      "Personalized financial planning, wealth accumulation, retirement strategies, Self-Managed Super Funds (SMSF), and tax-effective investment advisory.",
    heroHeadline: "Strategic Wealth Management Built for Your Life Goals",
    heroSubtitle:
      "Secure your family's future and accelerate wealth creation with tailored investment portfolios, retirement planning, SMSF guidance, and proactive risk protection.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82",
    alt: "Financial planner discussing investment portfolio growth with clients",
    highlights: [
      "Tailored Wealth Accumulation",
      "Self-Managed Super Funds (SMSF)",
      "Retirement & Income Planning",
      "Personal & Family Insurance",
    ],
    painPoints: [
      "Idle savings eroding in low-interest accounts without a strategic inflation-beating growth plan.",
      "Confusion around complex superannuation rules, SMSF compliance, and contribution limits.",
      "Lack of personal risk protection leaving family assets vulnerable to unexpected illness or injury.",
    ],
    solutions: [
      "Personalized Statement of Advice (SOA) setting a clear roadmap for long-term capital growth.",
      "Expert SMSF setup and investment allocation advice aligned with your risk tolerance.",
      "Comprehensive income protection and life insurance coverage safeguarding your household.",
    ],
    capabilities: [
      {
        title: "Investment Portfolio Management",
        description:
          "Diversified asset allocation across equities, property, fixed income, and ethical growth funds.",
      },
      {
        title: "Superannuation & SMSF Advisory",
        description:
          "Super consolidation, SMSF establishment, property purchase within SMSF, and compliant retirement strategies.",
      },
      {
        title: "Retirement & Transition Planning",
        description:
          "Structuring tax-free retirement streams, pension optimization, and capital preservation.",
      },
      {
        title: "Personal Insurance & Asset Protection",
        description:
          "Life insurance, Total & Permanent Disability (TPD), trauma cover, and income protection advisory.",
      },
    ],
    metrics: [
      { value: "Tailored", label: "Growth Portfolios" },
      { value: "100%", label: "Independent Advice" },
      { value: "Secure", label: "Retirement Planning" },
    ],
    faqs: [
      {
        question: "Can I buy investment property using my Self-Managed Super Fund (SMSF)?",
        answer:
          "Yes. We collaborate across our Home Loan and Accounting departments to help structure compliant Limited Recourse Borrowing Arrangements (LRBA) for property in SMSFs.",
      },
      {
        question: "How do you determine my investment strategy?",
        answer:
          "We conduct a comprehensive financial health audit, evaluating your timeframe, risk profile, existing assets, and personal retirement goals before formulating a strategy.",
      },
    ],
    keyServices: [
      { title: "Wealth Creation Strategies", description: "Portfolio diversification, shares, and managed funds." },
      { title: "SMSF Setup & Property Advice", description: "Self-Managed Super Fund creation and investment guidance." },
      { title: "Retirement Income Planning", description: "Tax-effective pension streams and capital security." },
      { title: "Personal Risk Insurance", description: "Income protection, life, TPD, and trauma cover." },
    ],
  },

  "legal-advisory": {
    slug: "legal-advisory",
    number: "10",
    category: "Finance, Risk & Advisory",
    title: "Legal & Corporate Advisory",
    badge: "Commercial Law & Business Governance",
    metaTitle: "Commercial Legal Advisory & Business Governance | ValoSync Global",
    metaDescription:
      "Comprehensive corporate legal advisory: commercial contracts, shareholder agreements, IP protection, employment compliance, and corporate dispute resolution.",
    heroHeadline: "Commercial Legal Guidance Safeguarding Your Business Operations",
    heroSubtitle:
      "Protect your enterprise with expert commercial legal contracts, corporate governance advice, IP enforcement, employment agreements, and strategic legal counsel.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=82",
    alt: "Gavel and legal books representing corporate legal advisory",
    highlights: [
      "Commercial Contract Drafting",
      "Intellectual Property (IP) Protection",
      "Shareholder & Partnership Agreements",
      "Corporate Compliance & Governance",
    ],
    painPoints: [
      "Using downloaded contract templates exposing your business to severe financial liabilities.",
      "Partnership disputes due to poorly drafted shareholder buy-sell agreements.",
      "Valuable company IP and software assets stolen or unregistered without trademark protection.",
    ],
    solutions: [
      "Custom-drafted commercial agreements tailored specifically to your business model.",
      "Watertight shareholder and joint venture agreements with clear dispute resolution mechanisms.",
      "Comprehensive IP registration, trademark protection, and licensing strategy.",
    ],
    capabilities: [
      {
        title: "Commercial & Business Contracts",
        description:
          "Drafting and reviewing client service agreements, vendor contracts, terms of trade, and NDA documents.",
      },
      {
        title: "Corporate Structuring & Shareholder Agreements",
        description:
          "Company registration, discretionary trust setups, shareholder agreements, and buy-sell deeds.",
      },
      {
        title: "Intellectual Property (IP) Protection",
        description:
          "Trademark registration, software licensing agreements, copyright defense, and IP transfer deeds.",
      },
      {
        title: "Employment & Workplace Law",
        description:
          "Employment contracts, executive employment agreements, contractor deeds, and workplace policy handbooks.",
      },
    ],
    metrics: [
      { value: "100%", label: "Legal Compliance" },
      { value: "Custom", label: "Watertight Agreements" },
      { value: "Confidential", label: "Client Representation" },
    ],
    faqs: [
      {
        question: "Why should we have custom shareholder agreements rather than basic articles?",
        answer:
          "Shareholder agreements govern critical scenarios such as partner exits, valuation methods, dispute resolution, drag-along rights, and deadlocks that basic company constitutions omit.",
      },
      {
        question: "How does legal advisory connect with technology projects?",
        answer:
          "For technology and software clients, our legal team drafts custom SaaS End User License Agreements (EULA), API integration deeds, and data privacy policies.",
      },
    ],
    keyServices: [
      { title: "Commercial Contracts & Terms", description: "Bespoke client agreements, vendor terms, and SLAs." },
      { title: "Shareholder & Buy-Sell Deeds", description: "Protecting equity, partner exits, and business valuation." },
      { title: "IP & Trademark Protection", description: "Securing brand assets, patents, and software code IP." },
      { title: "Employment Deeds & Policies", description: "Executive employment contracts and workplace deeds." },
    ],
  },

  insurance: {
    slug: "insurance",
    number: "11",
    category: "Finance, Risk & Advisory",
    title: "Insurance & Risk Advisory",
    badge: "Corporate & Property Risk Protection",
    metaTitle: "Commercial & Property Insurance Advisory | ValoSync Global",
    metaDescription:
      "Comprehensive business and property insurance broking: professional indemnity, public liability, landlord protection, cyber liability, and commercial property cover.",
    heroHeadline: "Proactive Risk Protection & Corporate Insurance Solutions",
    heroSubtitle:
      "Mitigate business and property vulnerabilities with tailored commercial insurance policies, asset protection, risk management audits, and fast claims advocacy.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=82",
    alt: "Shield symbol and umbrella representing corporate risk and insurance advisory",
    highlights: [
      "Commercial Liability & Indemnity",
      "Landlord & Commercial Property Cover",
      "Cyber Risk & Data Breach Protection",
      "Dedicated Claims Advocacy",
    ],
    painPoints: [
      "Overpaying for cookie-cutter insurance policies with critical coverage exclusions.",
      "High financial exposure to cyber attacks, ransomware, or customer data breaches.",
      "Claims being denied or delayed due to improper policy disclosures during sign-up.",
    ],
    solutions: [
      "Independent risk audits matching your exact operational profile with leading policy underwriters.",
      "Tailored cyber insurance covering ransom demands, system restoration, and customer notification.",
      "Dedicated broker claims management advocating on your behalf for maximum settlement payouts.",
    ],
    capabilities: [
      {
        title: "Professional Indemnity & Public Liability",
        description:
          "Protection for consultants, engineers, software teams, and service businesses against liability claims.",
      },
      {
        title: "Commercial Property & Landlord Insurance",
        description:
          "Comprehensive insurance for commercial buildings, residential rental properties, loss of rent, and tenant damage.",
      },
      {
        title: "Cyber Liability & Data Breach Cover",
        description:
          "Financial protection against ransomware, data loss, forensic IT costs, and regulatory fines.",
      },
      {
        title: "Directors & Officers (D&O) Liability",
        description:
          "Safeguarding company directors against personal liability arising from corporate management decisions.",
      },
    ],
    metrics: [
      { value: "30+", label: "Underwriter Partners" },
      { value: "Fast", label: "Claims Advocacy" },
      { value: "Zero", label: "Hidden Policy Exclusions" },
    ],
    faqs: [
      {
        question: "Why do technology and engineering firms need Cyber Liability Insurance?",
        answer:
          "Traditional public liability policies exclude digital losses. Cyber insurance covers data restoration costs, legal defense, customer notifications, and business interruption revenue loss during an IT security breach.",
      },
      {
        question: "How do you handle claims when something goes wrong?",
        answer:
          "We act as your dedicated claims advocate, preparing documentation, negotiating directly with insurance adjusters, and driving speedy claim settlement.",
      },
    ],
    keyServices: [
      { title: "Professional Indemnity Insurance", description: "Cover for professional advice, design, and service errors." },
      { title: "Landlord & Building Insurance", description: "Protection for commercial and residential property assets." },
      { title: "Cyber Security & Data Cover", description: "Ransomware, data recovery, and liability protection." },
      { title: "Directors & Officers Liability", description: "Protecting board members and company directors." },
    ],
  },

  "hr-advisory": {
    slug: "hr-advisory",
    number: "12",
    category: "Technology & People",
    title: "HR & Talent Advisory",
    badge: "Human Resources & Executive Talent Search",
    metaTitle: "HR Advisory, Talent Acquisition & Workforce Management | ValoSync Global",
    metaDescription:
      "Strategic HR advisory, executive recruitment, workplace compliance, offshore team integration, performance management, and team building solutions.",
    heroHeadline: "Building High-Performing Teams & Compliant Workforces",
    heroSubtitle:
      "Scale your organization with expert talent acquisition, compliant employment frameworks, performance management systems, and strategic HR leadership.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=82",
    alt: "Diverse corporate team collaborating around a conference table",
    highlights: [
      "Executive & Technical Recruitment",
      "Fair Work & Employment Compliance",
      "Performance Management Systems",
      "Offshore & Global Team Integration",
    ],
    painPoints: [
      "High staff turnover and expensive bad hires draining corporate productivity.",
      "Workplace disputes or Fair Work penalties caused by outdated employment contracts and policies.",
      "Inability to find specialized technical, engineering, or financial talent locally.",
    ],
    solutions: [
      "Rigorous multi-stage talent vetting ensuring cultural alignment and proven technical skills.",
      "Audited HR handbooks and performance frameworks guaranteeing compliance with labor standards.",
      "Seamless global delivery team integration expanding your workforce cost-effectively.",
    ],
    capabilities: [
      {
        title: "Executive & Specialist Talent Acquisition",
        description:
          "Headhunting and sourcing top-tier talent across technology, engineering, finance, and executive roles.",
      },
      {
        title: "HR Compliance & Workplace Audits",
        description:
          "Award interpretation, employment contract reviews, workplace safety compliance, and dispute resolution.",
      },
      {
        title: "Performance Management & OKRs",
        description:
          "Designing performance appraisal frameworks, KPI/OKR tracking, and staff retention programs.",
      },
      {
        title: "Offshore Team Building & Co-Management",
        description:
          "Establishing dedicated global delivery squads with complete payroll and operational management.",
      },
    ],
    metrics: [
      { value: "92%", label: "Placement Retention Rate" },
      { value: "100%", label: "Labor Law Compliance" },
      { value: "Global", label: "Talent Sourcing Pool" },
    ],
    faqs: [
      {
        question: "How do you help companies build dedicated offshore teams?",
        answer:
          "We handle end-to-end recruitment, hardware provisioning, office space, payroll, and local HR compliance so your global staff integrates smoothly into your daily operations.",
      },
      {
        question: "Can ValoSync conduct an audit of our existing HR contracts?",
        answer:
          "Yes. We review your current employment contracts, award rates, position descriptions, and safety policies to ensure complete Fair Work compliance.",
      },
    ],
    keyServices: [
      { title: "Executive Search & Placement", description: "Targeted headhunting for key engineering and business roles." },
      { title: "HR Compliance & Handbooks", description: "Fair Work compliant contracts and staff policies." },
      { title: "Offshore Delivery Squads", description: "Dedicated international teams co-managed for performance." },
      { title: "Performance & Retention Systems", description: "Structured KPI/OKR frameworks for employee growth." },
    ],
  },
};
