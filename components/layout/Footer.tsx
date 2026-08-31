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
  { label: "Technology Services", href: "/services" },
  { label: "Accounting Services", href: "/accounting" },
  { label: "Conveyancing Services", href: "/conveyancing" },
  { label: "Civil Engineering Services", href: "/civil-engineering" },
  { label: "Real Estate Services", href: "/real-estate" },
  { label: "Home Loan Services", href: "/home-loans" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
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

      <div className="container py-14 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr] gap-10 lg:gap-16">
          <div>
            <Logo variant="light" />
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300">
              ValoSync Global is an umbrella organisation connecting specialist departments across technology, finance, property and project services.
            </p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
              Connected Expertise. Coordinated Delivery.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-gold">Our Departments</h2>
            <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-3">
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

        <div className="mt-14 pt-7 border-t border-white/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
