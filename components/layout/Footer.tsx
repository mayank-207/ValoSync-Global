import Link from "next/link";
import Logo from "../ui/Logo";
import {
  ArrowRightIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
} from "../ui/Icons";

const departmentLinks = [
  { label: "Property & Built Environment", href: "/departments#property" },
  { label: "Finance, Risk & Advisory", href: "/departments#finance" },
  { label: "Technology & People", href: "/departments#technology" },
];

const serviceLinks = [
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "Application Development", href: "/services/mobile-app-development" },
  { label: "CRM Platforms", href: "/services/crm-development" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "Cloud & DevOps", href: "/services/cloud-devops" },
  { label: "Digital Growth", href: "/services/digital-marketing" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "All Departments", href: "/departments" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-primary-dark text-white">
      <div className="border-y border-white/15">
        <div className="container grid sm:grid-cols-3">
          <a href="mailto:contact@valosyncglobal.com" className="footer-action sm:border-r border-white/15">
            <MailIcon size={20} />
            <span><small>Email</small>contact@valosyncglobal.com</span>
          </a>
          <Link href="/contact" className="footer-action sm:border-r border-white/15">
            <MapPinIcon size={20} />
            <span><small>Project enquiries</small>Discuss your requirements</span>
          </Link>
          <Link href="/contact" className="footer-action group">
            <ArrowRightIcon size={20} />
            <span><small>Consultation</small>Book a meeting</span>
          </Link>
        </div>
      </div>

      <div className="container pt-12 lg:pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              ValoSync Global provides integrated expertise across Technology, Accounting, Conveyancing, Civil Engineering, Real Estate, and Home Loans under one trusted organization.
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Integrated Multi-Department Group
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Departments</h2>
            <ul className="mt-5 space-y-3">
              {departmentLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Technology Services</h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Company</h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex gap-3">
              <a href="https://linkedin.com/company/valosyncglobal" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social">
                <LinkedinIcon size={18} />
              </a>
              <a href="https://instagram.com/valosyncglobal" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social">
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} ValoSync Global. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
