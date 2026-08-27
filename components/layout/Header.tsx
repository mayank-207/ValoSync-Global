"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      { label: "CRM Development", href: "/services/crm-development" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Business Automation", href: "/services/business-automation" },
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        isScrolled
          ? "bg-white shadow-md border-b border-[#D9E1EC] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container">
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          <Logo variant={isScrolled ? "dark" : "light"} className="flex-shrink-0" />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
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
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]/40 ${
                        isScrolled
                          ? "text-[#1A1A1A] hover:text-[#0B3D91]"
                          : "text-white hover:text-[#D4AF37]"
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
                      <ul className="w-72 p-2 rounded-2xl shadow-2xl border bg-white border-[#D9E1EC]">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-3 text-sm font-semibold text-[#1A1A1A] rounded-xl transition-all duration-200 hover:bg-[#0B3D91]/10 hover:text-[#0B3D91]"
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
                    className={`inline-block px-4 py-2 text-sm font-bold rounded-lg transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]/40 ${
                      isScrolled
                        ? "text-[#1A1A1A] hover:text-[#0B3D91]"
                        : "text-white hover:text-[#D4AF37]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="md"
              rightIcon={<ArrowRightIcon size={16} />}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl transition-colors duration-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3D91]/40 ${
              isScrolled ? "text-[#1A1A1A]" : "text-white"
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

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[65px] bottom-0 z-40 transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <nav
          className="relative h-full overflow-y-auto bg-white shadow-2xl border-t border-[#D9E1EC]"
          aria-label="Mobile navigation"
        >
          <ul className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.dropdown ? (
                  <div className="flex flex-col">
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-4 py-3.5 text-base font-bold text-[#1A1A1A] rounded-xl transition-colors duration-200 hover:bg-[#F7F9FC] focus:outline-none"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.label ? null : item.label
                        )
                      }
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDownIcon
                        size={16}
                        className={`transition-transform duration-200 ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <ul className="pl-4 mt-1 flex flex-col gap-1 border-l-2 border-[#0D47A1]/30 ml-4">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm font-semibold text-[#4A5568] rounded-lg transition-colors duration-200 hover:text-[#0D47A1]"
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
                    className="block px-4 py-3.5 text-base font-bold text-[#1A1A1A] rounded-xl transition-colors duration-200 hover:bg-[#F7F9FC]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-6 mt-4 border-t border-[#D9E1EC]">
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
