"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import {
  ArrowRightIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from "../ui/Icons";

interface SubLink {
  label: string;
  href: string;
}

interface CategoryTab {
  id: string;
  title: string;
  items: SubLink[];
}

const departmentTabs: CategoryTab[] = [
  {
    id: "property",
    title: "Property & Construction",
    items: [
      { label: "Conveyancing Services", href: "/departments/conveyancing" },
      { label: "Civil Engineering Services", href: "/departments/civil-engineering" },
      { label: "Real Estate Services", href: "/departments/real-estate" },
      { label: "Town Planning Services", href: "/departments/town-planning" },
      { label: "Architecture & Design", href: "/departments/architecture" },
    ],
  },
  {
    id: "finance",
    title: "Finance & Legal",
    items: [
      { label: "Accounting Services", href: "/departments/accounting" },
      { label: "Home Loan Services", href: "/departments/home-loans" },
      { label: "Financial Planning & Wealth", href: "/departments/financial-planning" },
      { label: "Legal & Corporate Advisory", href: "/departments/legal-advisory" },
      { label: "Insurance & Risk Advisory", href: "/departments/insurance" },
    ],
  },
  {
    id: "technology",
    title: "Technology & HR",
    items: [
      { label: "Technology Services", href: "/departments/technology" },
      { label: "HR & Talent Advisory", href: "/departments/hr-advisory" },
    ],
  },
];

const serviceTabs: CategoryTab[] = [
  {
    id: "software",
    title: "Software & Web",
    items: [
      { label: "Custom Software Development", href: "/services/custom-software" },
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "CRM Development", href: "/services/crm-development" },
    ],
  },
  {
    id: "ai-growth",
    title: "AI, Cloud & Growth",
    items: [
      { label: "AI Automation Solutions", href: "/services/ai-automation" },
      { label: "Cloud & DevOps Support", href: "/services/cloud-devops" },
      { label: "Digital Marketing Services", href: "/services/digital-marketing" },
    ],
  },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Departments",
    href: "/departments",
    isDeptMenu: true,
  },
  {
    label: "Services",
    href: "/services",
    isServiceMenu: true,
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
  const [activeDeptId, setActiveDeptId] = useState<string>("property");
  const [activeServiceId, setActiveServiceId] = useState<string>("software");

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
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  (item.isDeptMenu || item.isServiceMenu) && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.isDeptMenu ? (
                  <>
                    <Link
                      href={item.href}
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
                    </Link>
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        openDropdown === item.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {/* Proowrx-Style Clean 2-Column Submenu Container */}
                      <div className="w-[490px] rounded-b-md shadow-xl bg-white border-t-[3px] border-[#071A33] border-x border-b border-slate-200 overflow-hidden grid grid-cols-12 text-left">
                        {/* Left Column Categories */}
                        <div className="col-span-5 bg-white p-2 space-y-1">
                          {departmentTabs.map((tab) => {
                            const isActive = activeDeptId === tab.id;
                            return (
                              <button
                                key={tab.id}
                                type="button"
                                onMouseEnter={() => setActiveDeptId(tab.id)}
                                onClick={() => setActiveDeptId(tab.id)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-sm font-bold transition-all text-left ${
                                  isActive
                                    ? "bg-[#F3F5F8] text-[#071A33]"
                                    : "text-[#1A1A1A] hover:bg-[#F8FAFC] hover:text-[#0B3D91]"
                                }`}
                              >
                                <span>{tab.title}</span>
                                <ChevronDownIcon
                                  size={13}
                                  className={`transition-transform duration-200 ${
                                    isActive
                                      ? "text-[#071A33] opacity-100"
                                      : "text-slate-400 opacity-40"
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>

                        {/* Right Column Sub-Items */}
                        <div className="col-span-7 p-2.5 bg-white border-l border-slate-200 flex flex-col justify-between">
                          <div className="space-y-1">
                            {(() => {
                              const activeTab =
                                departmentTabs.find((t) => t.id === activeDeptId) || departmentTabs[0];
                              return activeTab.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm font-bold text-[#071A33] rounded hover:bg-[#F3F5F8] hover:text-[#0B3D91] transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              ));
                            })()}
                          </div>
                          <div className="pt-2 mt-2 border-t border-slate-100">
                            <Link
                              href="/departments"
                              className="flex items-center justify-between px-3 py-1.5 text-xs font-bold text-[#0B3D91] hover:text-[#D4AF37] transition-colors rounded hover:bg-slate-50"
                            >
                              <span>View All 12 Departments</span>
                              <ArrowRightIcon size={13} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : item.isServiceMenu ? (
                  <>
                    <Link
                      href={item.href}
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
                    </Link>
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        openDropdown === item.label
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {/* Proowrx-Style Clean 2-Column Submenu Container for Services */}
                      <div className="w-[490px] rounded-b-md shadow-xl bg-white border-t-[3px] border-[#071A33] border-x border-b border-slate-200 overflow-hidden grid grid-cols-12 text-left">
                        {/* Left Column Categories */}
                        <div className="col-span-5 bg-white p-2 space-y-1">
                          {serviceTabs.map((tab) => {
                            const isActive = activeServiceId === tab.id;
                            return (
                              <button
                                key={tab.id}
                                type="button"
                                onMouseEnter={() => setActiveServiceId(tab.id)}
                                onClick={() => setActiveServiceId(tab.id)}
                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-sm font-bold transition-all text-left ${
                                  isActive
                                    ? "bg-[#F3F5F8] text-[#071A33]"
                                    : "text-[#1A1A1A] hover:bg-[#F8FAFC] hover:text-[#0B3D91]"
                                }`}
                              >
                                <span>{tab.title}</span>
                                <ChevronDownIcon
                                  size={13}
                                  className={`transition-transform duration-200 ${
                                    isActive
                                      ? "text-[#071A33] opacity-100"
                                      : "text-slate-400 opacity-40"
                                  }`}
                                />
                              </button>
                            );
                          })}
                        </div>

                        {/* Right Column Sub-Items */}
                        <div className="col-span-7 p-2.5 bg-white border-l border-slate-200 flex flex-col justify-between">
                          <div className="space-y-1">
                            {(() => {
                              const activeTab =
                                serviceTabs.find((t) => t.id === activeServiceId) || serviceTabs[0];
                              return activeTab.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm font-bold text-[#071A33] rounded hover:bg-[#F3F5F8] hover:text-[#0B3D91] transition-colors"
                                >
                                  {subItem.label}
                                </Link>
                              ));
                            })()}
                          </div>
                          <div className="pt-2 mt-2 border-t border-slate-100">
                            <Link
                              href="/services"
                              className="flex items-center justify-between px-3 py-1.5 text-xs font-bold text-[#0B3D91] hover:text-[#D4AF37] transition-colors rounded hover:bg-slate-50"
                            >
                              <span>Explore All Services</span>
                              <ArrowRightIcon size={13} />
                            </Link>
                          </div>
                        </div>
                      </div>
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

      {/* Mobile Drawer Navigation */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-full h-[calc(100dvh-100%)] z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-2 pointer-events-none invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />

        <nav
          className="relative h-full overflow-y-auto bg-white shadow-2xl border-t border-border px-4 py-5 flex flex-col justify-between"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.isDeptMenu ? (
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
                      <div className="pl-3 my-1 flex flex-col gap-3 border-l-2 border-[#0B3D91]/30 ml-4">
                        {departmentTabs.map((tab) => (
                          <div key={tab.id} className="flex flex-col gap-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B3D91] pt-1">
                              {tab.title}
                            </span>
                            {tab.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-3 py-1.5 text-xs font-semibold text-slate-700 rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link
                          href="/departments"
                          className="block px-3 py-2 text-xs font-bold text-[#0B3D91] bg-slate-100 rounded-lg text-center mt-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All 12 Departments →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : item.isServiceMenu ? (
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
                      <div className="pl-3 my-1 flex flex-col gap-3 border-l-2 border-[#0B3D91]/30 ml-4">
                        {serviceTabs.map((tab) => (
                          <div key={tab.id} className="flex flex-col gap-1">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#0B3D91] pt-1">
                              {tab.title}
                            </span>
                            {tab.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-3 py-1.5 text-xs font-semibold text-slate-700 rounded-lg transition-colors duration-200 hover:bg-primary/10 hover:text-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                        <Link
                          href="/services"
                          className="block px-3 py-2 text-xs font-bold text-[#0B3D91] bg-slate-100 rounded-lg text-center mt-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Explore All Services →
                        </Link>
                      </div>
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
