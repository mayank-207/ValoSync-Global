/**
 * Centralized site configuration populated dynamically from environment variables.
 * Prefix variables with NEXT_PUBLIC_ to expose them safely to client and server components.
 */

export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "ValoSync Global",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "ValoSync Global Pty Ltd",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://valosync-global.netlify.app").replace(/\/$/, ""),

  // Contact & Notification Emails
  email: {
    contact: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@valosyncglobal.com",
    support: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@valosyncglobal.com",
    privacy: process.env.NEXT_PUBLIC_PRIVACY_EMAIL || "privacy@valosyncglobal.com",
  },

  // Phone, Mobile & Messaging
  phone: {
    primary: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+61 (02) 8000 0000",
    primaryTel: process.env.NEXT_PUBLIC_CONTACT_PHONE_TEL || "+61280000000",
    secondary: process.env.NEXT_PUBLIC_CONTACT_PHONE_SECONDARY || "+91 98765 43210",
    secondaryTel: process.env.NEXT_PUBLIC_CONTACT_PHONE_SECONDARY_TEL || "+919876543210",
    display:
      process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ||
      (process.env.NEXT_PUBLIC_CONTACT_PHONE
        ? process.env.NEXT_PUBLIC_CONTACT_PHONE +
        (process.env.NEXT_PUBLIC_CONTACT_PHONE_SECONDARY
          ? ` / ${process.env.NEXT_PUBLIC_CONTACT_PHONE_SECONDARY}`
          : "")
        : "+61 (02) 8000 0000 / +91 98765 43210"),
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+61400000000",
  },

  // Office & Delivery Location (India Global Delivery HQ & Australia Client Hub)
  address: {
    street: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || "Tech Gateway Corridor",
    city: process.env.NEXT_PUBLIC_OFFICE_CITY || "Ahmedabad",
    state: process.env.NEXT_PUBLIC_OFFICE_STATE || "Gujarat",
    postalCode: process.env.NEXT_PUBLIC_OFFICE_POSTAL_CODE || "380015",
    country: process.env.NEXT_PUBLIC_OFFICE_COUNTRY || "India",
    full:
      process.env.NEXT_PUBLIC_OFFICE_FULL_ADDRESS ||
      "Global Delivery HQ: Gujarat, India | Australia Client Delivery Hub: Sydney, NSW",
    hubLabel: process.env.NEXT_PUBLIC_OFFICE_HUB_LABEL || "Global Engineering HQ (India) & Client Hub (Australia)",
    subtext: process.env.NEXT_PUBLIC_OFFICE_SUBTEXT || "Global Engineering & Australian Client Success",
    indiaHq: {
      name: "ValoSync Global Delivery HQ",
      city: "Ahmedabad",
      state: "Gujarat",
      country: "India",
      countryCode: "IN",
    },
    australiaHub: {
      name: "ValoSync Global Client Relations",
      city: "Sydney",
      state: "NSW",
      country: "Australia",
      countryCode: "AU",
    },
  },

  // Business Hours
  hours: {
    display: process.env.NEXT_PUBLIC_OFFICE_HOURS || "Mon-Fri from 9am to 6pm (AEST / IST)",
    sla: process.env.NEXT_PUBLIC_CONTACT_SLA || "Guaranteed reply within 24 hours across Australia and India",
  },

  // Performance Marketing & Analytics IDs
  marketing: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    gaId: process.env.NEXT_PUBLIC_GA_ID || "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
    linkedinPartnerId: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || "",
    googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
  },

  // Target SEO Keywords for Australia & India Performance Marketing
  seoKeywords: [
    "custom software development Australia",
    "software engineering services Australia",
    "custom CRM development Australia",
    "enterprise AI automation solutions",
    "mobile app development iOS Android Australia",
    "Next.js web development company",
    "cloud devops consulting Australia",
    "offshore software engineering team India",
    "IT services Australia India",
    "dedicated development squad Australia",
    "digital transformation agency Australia",
    "B2B software developers Australia",
    "full stack software development",
    "enterprise software development India HQ",
    "technology services Australia",
  ],

  // Social Channels
  socials: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/valosyncglobal",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/valosyncglobal",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
