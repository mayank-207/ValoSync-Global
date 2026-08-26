import Link from "next/link";
import Logo from "../ui/Logo";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  LinkedinIcon,
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
  ArrowRightIcon,
} from "../ui/Icons";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Industries", href: "/industries" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Custom Software Development", href: "/services/custom-software" },
    { label: "CRM Development", href: "/services/crm-development" },
    { label: "AI Automation", href: "/services/ai-automation" },
    { label: "Business Automation", href: "/services/business-automation" },
    { label: "Web Development", href: "/services/web-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
  ],
  industries: [
    { label: "Healthcare & MedTech", href: "/industries#healthcare" },
    { label: "FinTech & Banking", href: "/industries#finance" },
    { label: "E-Commerce & Retail", href: "/industries#retail" },
    { label: "Logistics & Supply Chain", href: "/industries#logistics" },
    { label: "Real Estate & Construction", href: "/industries#realestate" },
  ],
};

const contactInfo = [
  {
    icon: <PhoneIcon size={18} />,
    label: "Sales & Inquiries",
    value: "+61 (02) 8000 0000 / +91 98765 43210",
    href: "tel:+61280000000",
  },
  {
    icon: <MailIcon size={18} />,
    label: "Official Email",
    value: "contact@velosyncglobal.com",
    href: "mailto:contact@velosyncglobal.com",
  },
  {
    icon: <MapPinIcon size={18} />,
    label: "Global Reach",
    value: "Australia & Global Delivery Hub",
    href: "/contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto pt-16" style={{ background: "var(--primary-color)" }}>
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgb(6 182 212) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgb(30 58 138) 0%, transparent 50%)",
        }}
      />

      <div className="relative container">
        {/* Pre-footer Call to Action Card */}
        <section
          className="relative mb-16 p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl border"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.85) 50%, rgba(6, 182, 212, 0.2) 100%)",
            borderColor: "rgba(6, 182, 212, 0.3)",
          }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full mb-4 border"
                style={{
                  background: "rgba(6, 182, 212, 0.15)",
                  borderColor: "rgba(6, 182, 212, 0.4)",
                  color: "var(--accent-color)",
                }}
              >
                Let&apos;s Build Success Together
              </span>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3"
                style={{ color: "var(--text-light)" }}
              >
                Ready to Accelerate Your{" "}
                <span style={{ color: "var(--accent-color)" }}>Digital Growth?</span>
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "rgba(203, 213, 225, 0.9)" }}
              >
                Connect with Velosync Global today to discuss custom software development, AI automation, or lead generation strategies tailored for your business.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-base font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/40"
                style={{
                  background: "var(--gradient-accent)",
                  color: "var(--text-light)",
                  boxShadow: "0 10px 30px -10px rgba(6, 182, 212, 0.5)",
                }}
              >
                Book Free Consultation
                <ArrowRightIcon
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16">
          <div className="lg:col-span-2">
            <Logo variant="light" className="mb-6" />
            <p
              className="text-sm leading-relaxed mb-6 max-w-md"
              style={{ color: "rgba(203, 213, 225, 0.85)" }}
            >
              Velosync Global delivers enterprise-grade software development, customized CRM systems, AI & business automation, modern web applications, and ROI-driven digital marketing.
            </p>
            <div className="flex flex-col gap-3.5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 group transition-colors duration-200"
                >
                  <span
                    className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 group-hover:bg-cyan-500/20"
                    style={{
                      background: "rgba(255, 255, 255, 0.06)",
                      color: "var(--accent-color)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "rgba(148, 163, 184, 0.8)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-semibold transition-colors duration-200 group-hover:text-cyan-400"
                      style={{ color: "var(--text-light)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-5"
              style={{ color: "var(--text-light)" }}
            >
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-200 hover:text-cyan-400"
                    style={{ color: "rgba(203, 213, 225, 0.85)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-5"
              style={{ color: "var(--text-light)" }}
            >
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-200 hover:text-cyan-400"
                    style={{ color: "rgba(203, 213, 225, 0.85)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs font-bold uppercase tracking-wider mb-5"
              style={{ color: "var(--text-light)" }}
            >
              Industries
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium transition-colors duration-200 hover:text-cyan-400"
                    style={{ color: "rgba(203, 213, 225, 0.85)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
        >
          <p
            className="text-xs text-center md:text-left"
            style={{ color: "rgba(148, 163, 184, 0.85)" }}
          >
            © {currentYear} Velosync Global. All rights reserved. Built for global technology leadership.
          </p>

          <div className="flex items-center gap-3">
            {[
              {
                icon: <LinkedinIcon size={18} />,
                href: "https://linkedin.com/company/velosyncglobal",
                label: "LinkedIn Company Account",
              },
              {
                icon: <InstagramIcon size={18} />,
                href: "https://instagram.com/velosyncglobal",
                label: "Instagram Company Account",
              },
              {
                icon: <TwitterIcon size={18} />,
                href: "https://twitter.com/velosyncglobal",
                label: "Twitter Account",
              },
              {
                icon: <GithubIcon size={18} />,
                href: "https://github.com/velosyncglobal",
                label: "GitHub Repositories",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "rgba(203, 213, 225, 0.85)",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-cyan-400"
              style={{ color: "rgba(148, 163, 184, 0.85)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors duration-200 hover:text-cyan-400"
              style={{ color: "rgba(148, 163, 184, 0.85)" }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
