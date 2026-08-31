"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { ArrowRightIcon, MenuIcon, CloseIcon, ChevronDownIcon } from "../ui/Icons";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Custom Software Development", href: "/services/custom-software" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "CRM Development", href: "/services/crm-development" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Cloud & DevOps Support", href: "/services/cloud-devops" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Auto close mobile menu on page navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-2 sm:py-2.5"
          : "bg-primary-dark/90 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3"
      }`}
    >
      <div className="container">
        <nav
          className="flex min-h-12 items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo
            variant={isScrolled || isMobileMenuOpen ? "dark" : "light"}
            size="md"
            className="flex-shrink-0"
          />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                        isScrolled
                          ? "text-text-primary hover:text-primary"
                          : "text-white hover:text-gold"
                      }`}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDownIcon
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        openDropdown === item.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <ul className="w-72 p-2 rounded-2xl shadow-2xl border bg-white border-border">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm font-semibold text-text-primary rounded-xl transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`inline-block px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                      isScrolled
                        ? "text-text-primary hover:text-primary"
                        : "text-white hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="sm"
              rightIcon={<ArrowRightIcon size={15} />}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
              isScrolled || isMobileMenuOpen
                ? "text-primary-dark hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <CloseIcon size={24} />
            ) : (
              <MenuIcon size={24} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Navigation (Slide-Down Full Screen Overlay) */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-full h-[calc(100dvh-100%)] z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-2 pointer-events-none invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Navigation Content Card */}
        <nav
          className="relative h-full overflow-y-auto bg-white shadow-2xl border-t border-border px-4 py-5 flex flex-col justify-between"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between w-full rounded-xl transition-colors duration-200 hover:bg-surface">
                      <Link
                        href={item.href}
                        className="flex-1 px-4 py-3 text-base font-bold text-primary-dark"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        className="p-3 text-primary-dark hover:text-primary focus:outline-none"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          );
                        }}
                        aria-expanded={openDropdown === item.label}
                        aria-label={`Toggle ${item.label} sub-menu`}
                      >
                        <ChevronDownIcon
                          size={18}
                          className={`transition-transform duration-200 ${
                            openDropdown === item.label
                              ? "rotate-180 text-primary"
                              : ""
                          }`}
                        />
                      </button>
                    </div>
                    {openDropdown === item.label && (
                      <ul className="pl-3 my-1 flex flex-col gap-1 border-l-2 border-primary/20 ml-4">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block px-3 py-2 text-sm font-semibold text-slate-700 rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-bold text-primary-dark rounded-xl transition-colors duration-200 hover:bg-surface"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="pt-5 mt-4 border-t border-border flex flex-col gap-3">
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="lg"
              fullWidth
              rightIcon={<ArrowRightIcon size={18} />}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Free Consultation
            </Button>
            <div className="text-center text-xs text-slate-500 font-medium">
              contact@valosyncglobal.com
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
