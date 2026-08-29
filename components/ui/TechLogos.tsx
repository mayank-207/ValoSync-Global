import React from "react";

export interface TechLogoProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechLogo({ name, className = "", size = 36 }: TechLogoProps) {
  const normalized = name.toLowerCase().trim();

  // Laravel
  if (normalized.includes("laravel")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#FF2D20" />
        <path d="M96 46L64 28L32 46V82L64 100L96 82V46ZM64 36L86 48L64 60L42 48L64 36ZM38 54L60 66V88L38 76V54ZM68 88V66L90 54V76L68 88Z" fill="white" />
      </svg>
    );
  }

  // PHP / Core PHP
  if (normalized.includes("php")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#777BB4" />
        <path d="M30 46H44C52 46 56 50 54 58C52 66 46 70 38 70H30L26 84H16L24 46ZM33 62H39C43 62 45 60 46 56C47 52 45 50 41 50H36L33 62ZM60 46H70L60 84H50L60 46ZM74 46H88C96 46 100 50 98 58C96 66 90 70 82 70H74L70 84H60L68 46ZM77 62H83C87 62 89 60 90 56C91 52 89 50 85 50H80L77 62Z" fill="white" />
      </svg>
    );
  }

  // WordPress
  if (normalized.includes("wordpress") || normalized.includes("wp")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#21759B" />
        <circle cx="64" cy="64" r="42" stroke="white" strokeWidth="6" fill="none" />
        <path d="M34 64C34 76 41 86 51 91L36 50C34.7 54.3 34 59 34 64ZM78 62C78 57 76 54 74 50C71 45 68 45 65 45C61 45 56 46 56 46L63 67L74 97C76 96 78 94 80 92L90 62C90 62 87 62 85 62C80 62 78 62 78 62ZM62 69L53 45C50 45 46 46 46 46L60 88L70 69L62 69ZM83 45C80 45 77 46 77 46L88 78C91 74 94 69 94 64C94 56 89 45 83 45Z" fill="white" />
      </svg>
    );
  }

  // n8n (Automation)
  if (normalized.includes("n8n")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#EA4B71" />
        <circle cx="44" cy="64" r="14" fill="white" />
        <circle cx="84" cy="44" r="12" fill="white" />
        <circle cx="84" cy="84" r="12" fill="white" />
        <path d="M44 64L84 44M44 64L84 84" stroke="white" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }

  // Make / Zapier
  if (normalized.includes("make") || normalized.includes("zapier")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#6D28D9" />
        <path d="M40 40H88L64 88L40 40Z" fill="#F59E0B" />
        <circle cx="64" cy="64" r="16" fill="white" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <mask id="next-mask-v2" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#next-mask-v2)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.438L69.1555 54H54V125.966H66.6713V69.7548L139.73 163.666C143.208 161.803 146.478 159.715 149.508 157.438Z" fill="url(#paint0_linear_v2)" />
          <rect x="115.111" y="54" width="12.7841" height="71.9659" fill="url(#paint1_linear_v2)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_v2" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_v2" x1="121.503" y1="54" x2="120.979" y2="104.793" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (normalized.includes("typescript") || normalized === "ts") {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#3178C6" />
        <path d="M74.4 78.5C75.8 85.3 80.9 89.4 89.2 89.4C96.9 89.4 101.9 85.6 101.9 79.9C101.9 66.8 82.5 68.8 82.5 53.6C82.5 45.4 89.3 39.5 99.8 39.5C108.7 39.5 114.6 44.5 116.3 52.8L103.8 55.4C102.7 50.8 99.5 48.3 95 48.3C90.7 48.3 87.6 50.7 87.6 54.3C87.6 64.9 107.1 63.8 107.1 79.2C107.1 88.6 99.8 94.6 88.4 94.6C77.4 94.6 70.1 88.7 68.3 78.8L74.4 78.5ZM25.2 41H63.6V50.7H49.7V93.5H39V50.7H25.2V41Z" fill="white" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#215732" />
        <path d="M64 22L102 44V88L64 110L26 88V44L64 22Z" fill="#339933" />
        <path d="M64 36L90 51V81L64 96L38 81V51L64 36Z" fill="#026E00" />
        <path d="M64 46L80 55V73L64 82L48 73V55L64 46Z" fill="white" />
      </svg>
    );
  }

  // Python
  if (normalized.includes("python") || normalized.includes("fastapi")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#1E293B" />
        <path d="M63.6 20C44 20 45.2 28.5 45.2 28.5L45.3 37.3H64.3V40H28.4C28.4 40 18.3 38.8 18.3 58.4C18.3 78 27.2 77.1 27.2 77.1H33.3V68.4C33.3 58.3 41.7 50 51.8 50H70.7C80.8 50 84.8 44.3 84.8 36.5C84.8 28.7 83.2 20 63.6 20ZM54.1 27.3C56.6 27.3 58.5 29.2 58.5 31.7C58.5 34.2 56.6 36.1 54.1 36.1C51.6 36.1 49.7 34.2 49.7 31.7C49.7 29.2 51.6 27.3 54.1 27.3Z" fill="#387EB8" />
        <path d="M64.4 111.4C84 111.4 82.8 102.9 82.8 102.9L82.7 94.1H63.7V91.4H99.6C99.6 91.4 109.7 92.6 109.7 73C109.7 53.4 100.8 54.3 100.8 54.3H94.7V63C94.7 73.1 86.3 81.4 76.2 81.4H57.3C47.2 81.4 43.2 87.1 43.2 94.9C43.2 102.7 44.8 111.4 64.4 111.4ZM73.9 104.1C71.4 104.1 69.5 102.2 69.5 99.7C69.5 97.2 71.4 95.3 73.9 95.3C76.4 95.3 78.3 97.2 78.3 99.7C78.3 102.2 76.4 104.1 73.9 104.1Z" fill="#FFE052" />
      </svg>
    );
  }

  // PostgreSQL / Database
  if (normalized.includes("postgres") || normalized.includes("sql") || normalized.includes("db")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#336791" />
        <path d="M64 26C44 26 32 33 32 43V85C32 95 44 102 64 102C84 102 96 95 96 85V43C96 33 84 26 64 26ZM64 36C78 36 86 40 86 43C86 46 78 50 64 50C50 50 42 46 42 43C42 40 50 36 64 36ZM86 85C86 88 78 92 64 92C50 92 42 88 42 85V73C48 76 56 78 64 78C72 78 80 76 86 73V85ZM86 65C86 68 78 72 64 72C50 72 42 68 42 65V53C48 56 56 58 64 58C72 58 80 56 86 53V65Z" fill="white" />
      </svg>
    );
  }

  // MongoDB
  if (normalized.includes("mongo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#13AA52" />
        <path d="M64 16C64 16 38 46 38 72C38 88 48 102 63 108C63 108 62 98 63 94V24C63 24 64 16 64 16Z" fill="#FFFFFF" opacity="0.9" />
        <path d="M64 16C64 16 90 46 90 72C90 88 80 102 65 108C65 108 66 98 65 94V24C65 24 64 16 64 16Z" fill="#C8F5D2" />
        <path d="M63 108V114L65 114V108C65 108 64 108 63 108Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#DC382D" />
        <path d="M28 48L64 30L100 48L64 66L28 48Z" fill="white" />
        <path d="M28 62L64 80L100 62L64 44L28 62Z" fill="white" opacity="0.7" />
        <path d="M28 78L64 96L100 78L64 60L28 78Z" fill="white" opacity="0.4" />
      </svg>
    );
  }

  // GraphQL
  if (normalized.includes("graphql")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#E10098" />
        <path d="M64 24L98 44V84L64 104L30 84V44L64 24Z" stroke="white" strokeWidth="6" fill="none" />
        <line x1="64" y1="24" x2="64" y2="104" stroke="white" strokeWidth="6" />
        <line x1="30" y1="44" x2="98" y2="84" stroke="white" strokeWidth="6" />
        <line x1="30" y1="84" x2="98" y2="44" stroke="white" strokeWidth="6" />
        <circle cx="64" cy="24" r="8" fill="white" />
        <circle cx="98" cy="44" r="8" fill="white" />
        <circle cx="98" cy="84" r="8" fill="white" />
        <circle cx="64" cy="104" r="8" fill="white" />
        <circle cx="30" cy="84" r="8" fill="white" />
        <circle cx="30" cy="44" r="8" fill="white" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#1D63ED" />
        <path d="M41 46H51V56H41V46ZM54 46H64V56H54V46ZM67 46H77V56H67V46ZM28 59H38V69H28V59ZM41 59H51V69H41V59ZM54 59H64V69H54V59ZM67 59H77V69H67V59ZM80 59H90V69H80V59ZM21 72C24 86 38 96 55 96C75 96 90 84 94 72H21Z" fill="white" />
        <circle cx="100" cy="65" r="4" fill="white" />
      </svg>
    );
  }

  // AWS
  if (normalized.includes("aws") || normalized.includes("amazon")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#232F3E" />
        <path d="M37 54L44 74H48L55 54H50L46 68L42 54H37ZM60 54V74H64V54H60ZM71 54V74H75V66H82C86 66 89 64 89 60C89 56 86 54 82 54H71ZM75 58H81C83 58 84 59 84 60C84 62 83 62 81 62H75V58Z" fill="white" />
        <path d="M34 85C50 95 78 95 94 85M91 82L96 85L93 90" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Microsoft Azure
  if (normalized.includes("azure")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#0078D4" />
        <path d="M32 94L54 34H72L46 94H32ZM56 94L76 56L96 94H56ZM72 48L62 66L82 66L72 48Z" fill="white" />
      </svg>
    );
  }

  // OpenAI / ChatGPT
  if (normalized.includes("openai") || normalized.includes("gpt")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#10A37F" />
        <circle cx="64" cy="64" r="32" fill="white" opacity="0.15" />
        <path d="M64 40L78 48V64L64 72L50 64V48L64 40Z" stroke="white" strokeWidth="6" strokeLinejoin="round" fill="none" />
        <circle cx="64" cy="56" r="4" fill="#FFE052" />
      </svg>
    );
  }

  // Anthropic / Claude
  if (normalized.includes("anthropic") || normalized.includes("claude")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#CC785C" />
        <path d="M46 92L64 36L82 92H69L64 74L59 92H46ZM54 80H74L64 48L54 80Z" fill="white" />
      </svg>
    );
  }

  // LangChain / LlamaIndex / Vectors
  if (normalized.includes("langchain") || normalized.includes("llama") || normalized.includes("pinecone")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#000000" />
        <path d="M42 42L86 86M86 42L42 86" stroke="#00A67E" strokeWidth="12" strokeLinecap="round" />
        <circle cx="42" cy="42" r="8" fill="#D4AF37" />
        <circle cx="86" cy="42" r="8" fill="#D4AF37" />
        <circle cx="42" cy="86" r="8" fill="#D4AF37" />
        <circle cx="86" cy="86" r="8" fill="#D4AF37" />
        <circle cx="64" cy="64" r="10" fill="#FFFFFF" />
      </svg>
    );
  }

  // Stripe
  if (normalized.includes("stripe")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#635BFF" />
        <path d="M64.7 48.8C64.7 45.4 67.5 44 71.9 44C77.4 44 83.9 45.8 88.6 48.3L91 35.8C85.7 33.7 79 32.5 71.3 32.5C54.4 32.5 44 41.6 44 54.7C44 75 72.1 71.4 72.1 82.5C72.1 86.8 68.3 88.6 63 88.6C56.3 88.6 48.6 85.9 43 82.9L40.2 95.8C46.8 98.6 54.8 100 62.7 100C80.3 100 91.5 90.7 91.5 77.2C91.5 55.4 64.7 59.8 64.7 48.8Z" fill="white" />
      </svg>
    );
  }

  // Twilio / WhatsApp
  if (normalized.includes("twilio") || normalized.includes("whatsapp")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#25D366" />
        <path d="M64 30C45 30 30 45 30 64C30 70.5 32 76.5 35.5 81.5L32 96L47 92.5C51.8 95.5 57.6 98 64 98C83 98 98 83 98 64C98 45 83 30 64 30ZM80 77C79 79 76 81 73 81.5C71 81.8 69 82 61 78.5C51.5 74.5 45.5 64.5 45 64C44.5 63.5 41 58.8 41 54C41 49.2 43.5 47 44.5 46C45.5 45 46.5 44.5 47.8 44.5C49 44.5 49.8 44.5 50.8 46C51.8 48 53.8 53 54 53.5C54.3 54 54.5 54.8 54 55.5C53.8 56 53.5 56.5 53 57C52.5 57.5 52 58 51.5 58.5C51 59 50.5 59.5 51 60.5C51.5 61.5 53.5 65 56.5 67.8C60.5 71.2 64 72.5 65 73C66 73.5 66.5 73.5 67 72.8C67.8 72 69.8 69.8 70.5 68.8C71.2 67.8 72 68 73 68.5C74 69 79 71.5 80 72C81 72.5 81.5 73 81.8 73.5C82 74 81 75 80 77Z" fill="white" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#0F172A" />
        <path d="M64 42C53.3 42 46.7 47.3 44 58C48 52.7 53.3 50.7 60 52C63.8 52.8 66.5 55.6 69.6 58.7C74.6 63.8 80.4 69.7 92 69.7C102.7 69.7 109.3 64.3 112 53.7C108 59 102.7 61 96 59.7C92.2 58.9 89.5 56.1 86.4 53C81.4 47.9 75.6 42 64 42ZM36 64.3C25.3 64.3 18.7 69.7 16 80.3C20 75 25.3 73 32 74.3C35.8 75.1 38.5 77.9 41.6 81C46.6 86.1 52.4 92 64 92C74.7 92 81.3 86.7 84 76C80 81.3 74.7 83.3 68 82C64.2 81.2 61.5 78.4 58.4 75.3C53.4 70.3 47.6 64.3 36 64.3Z" fill="#38BDF8" />
      </svg>
    );
  }

  // Vercel / Cloud
  if (normalized.includes("vercel")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#000000" />
        <path d="M64 34L98 94H30L64 34Z" fill="white" />
      </svg>
    );
  }

  // Google Analytics / Google Ads / SEO / Semrush / Ahrefs
  if (normalized.includes("google") || normalized.includes("analytics") || normalized.includes("seo") || normalized.includes("semrush") || normalized.includes("ahrefs")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#1E293B" />
        <path d="M96 64.5C96 61.7 95.8 59.3 95.3 57H64V71.2H82.2C81.4 75.4 78.9 78.9 75.1 81.4V89.8H86.4C93.1 83.6 96 74.7 96 64.5Z" fill="#4285F4" />
        <path d="M64 97C72.9 97 80.4 94.1 86.4 89.8L75.1 81.4C72 83.5 68.3 84.8 64 84.8C55.4 84.8 48.1 79 45.5 71.1H33.8V79.8C39.5 90.5 50.8 97 64 97Z" fill="#34A853" />
        <path d="M45.5 71.1C44.8 69.1 44.4 66.9 44.4 64.6C44.4 62.3 44.8 60.1 45.5 58.1V49.4H33.8C31.4 54.1 30 59.2 30 64.6C30 70 31.4 75.1 33.8 79.8L45.5 71.1Z" fill="#FBBC05" />
        <path d="M64 44.4C68.9 44.4 73.2 46.1 76.6 49.3L87 39C80.4 32.8 72.9 29.8 64 29.8C50.8 29.8 39.5 36.3 33.8 47L45.5 55.7C48.1 47.8 55.4 44.4 64 44.4Z" fill="#EA4335" />
      </svg>
    );
  }

  // HubSpot
  if (normalized.includes("hubspot")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#FF7A59" />
        <circle cx="82" cy="46" r="10" fill="white" />
        <circle cx="46" cy="64" r="14" fill="white" />
        <circle cx="82" cy="82" r="10" fill="white" />
        <path d="M46 64H82" stroke="white" strokeWidth="8" />
        <circle cx="46" cy="64" r="6" fill="#FF7A59" />
      </svg>
    );
  }

  // GitHub / DevOps / CI/CD
  if (normalized.includes("git") || normalized.includes("cicd") || normalized.includes("devops")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <rect width="128" height="128" rx="24" fill="#0D1117" />
        <path fillRule="evenodd" clipRule="evenodd" d="M64 24C41.9 24 24 41.9 24 64C24 81.7 35.5 96.7 51.4 102C53.4 102.4 54.1 101.1 54.1 100.1C54.1 99.1 54.1 96.6 54 93.2C42.9 95.6 40.5 87.8 40.5 87.8C38.7 83.2 36.1 82 36.1 82C32.5 79.5 36.4 79.6 36.4 79.6C40.4 79.9 42.5 83.7 42.5 83.7C46 89.8 51.8 88 54.1 87C54.5 84.4 55.5 82.7 56.6 81.7C47.7 80.7 38.4 77.2 38.4 61.8C38.4 57.4 40 53.8 42.5 51C42.1 50 40.7 45.9 42.9 40.4C42.9 40.4 46.3 39.3 54 44.5C57.2 43.6 60.6 43.2 64 43.2C67.4 43.2 70.8 43.6 74 44.5C81.7 39.3 85.1 40.4 85.1 40.4C87.3 45.9 85.9 50 85.5 51C88.1 53.8 89.6 57.4 89.6 61.8C89.6 77.3 80.2 80.7 71.3 81.7C72.7 82.9 74 85.4 74 89.2C74 94.7 73.9 99.1 73.9 100.1C73.9 101.1 74.6 102.4 76.7 102C92.5 96.7 104 81.7 104 64C104 41.9 86.1 24 64 24Z" fill="white" />
      </svg>
    );
  }

  // Default Tech / Tool Icon
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="128" height="128" rx="24" fill="#0B3D91" />
      <path d="M40 50L64 36L88 50V78L64 92L40 78V50Z" stroke="#D4AF37" strokeWidth="8" strokeLinejoin="round" fill="none" />
      <circle cx="64" cy="64" r="8" fill="white" />
    </svg>
  );
}
