import Link from "next/link";
import Logo from "../ui/Logo";
import {
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
    { label: "Cloud & DevOps Support", href: "/services/cloud-devops" },
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
    icon: <MailIcon size={18} />,
    label: "Official Email",
    value: "contact@valosyncglobal.com",
    href: "mailto:contact@valosyncglobal.com",
  },
  {
    icon: <MapPinIcon size={18} />,
    label: "Global Reach",
    value: "Supporting Businesses",
    href: "/contact",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto pt-16 bg-[#071A3D] text-white">
      <div className="relative container">
        {/* Pre-footer Call to Action Card */}
        <section className="relative mb-16 p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl border border-[#0D47A1]/40 bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1]">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full mb-4 border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                Let&apos;s Build Success Together
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3 text-white">
                Ready to Accelerate Your{" "}
                <span className="text-[#D4AF37]">Digital Growth?</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                Talk with ValoSync Global about custom software, CRM, web development, automation, cloud delivery or digital growth requirements.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-base font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg bg-[#0D47A1] hover:bg-[#0a3882] text-white"
              >
                Book Free Consultation
                <ArrowRightIcon
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
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
              style={{ color: "var(--color-inverse-muted)" }}
            >
              ValoSync Global builds custom software, CRM platforms, websites and connected digital solutions, supported by cloud delivery and digital growth services.
            </p>
            <div className="flex flex-col gap-3.5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-3 group transition-colors duration-200"
                >
                  <span
                    className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200 group-hover:bg-accent/20"
                    style={{
                      background: "var(--color-inverse-subtle)",
                      color: "var(--accent-color)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="text-[11px] font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--color-inverse-muted)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm font-semibold transition-colors duration-200 group-hover:text-accent"
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
                    className="text-sm font-medium transition-colors duration-200 hover:text-accent"
                    style={{ color: "var(--color-inverse-muted)" }}
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
                    className="text-sm font-medium transition-colors duration-200 hover:text-accent"
                    style={{ color: "var(--color-inverse-muted)" }}
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
                    className="text-sm font-medium transition-colors duration-200 hover:text-accent"
                    style={{ color: "var(--color-inverse-muted)" }}
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
          style={{ borderColor: "var(--color-inverse-subtle)" }}
        >
          <p
            className="text-xs text-center md:text-left"
            style={{ color: "var(--color-inverse-muted)" }}
          >
            © {currentYear} Valosync Global. All rights reserved. Technology solutions built around your business.
          </p>

          <div className="flex items-center gap-3">
            {[
              {
                icon: <LinkedinIcon size={18} />,
                href: "https://linkedin.com/company/valosyncglobal",
                label: "LinkedIn Company Account",
              },
              {
                icon: <InstagramIcon size={18} />,
                href: "https://instagram.com/valosyncglobal",
                label: "Instagram Company Account",
              },
              {
                icon: <TwitterIcon size={18} />,
                href: "https://twitter.com/valosyncglobal",
                label: "Twitter Account",
              },
              {
                icon: <GithubIcon size={18} />,
                href: "https://github.com/valosyncglobal",
                label: "GitHub Repositories",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                style={{
                  background: "var(--color-inverse-subtle)",
                  color: "var(--color-inverse-muted)",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-accent"
              style={{ color: "var(--color-inverse-muted)" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors duration-200 hover:text-accent"
              style={{ color: "var(--color-inverse-muted)" }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
