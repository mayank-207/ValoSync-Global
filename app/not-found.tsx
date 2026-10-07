import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import {
  ArrowRightIcon,
  GlobeIcon,
  LayersIcon,
  CodeIcon,
  PhoneIcon,
  SparkleIcon,
} from "@/components/ui/Icons";

export default function NotFound() {
  const quickLinks = [
    {
      title: "Our 6 Departments",
      description: "Explore engineering, loan & finance, accounting, property, and conveyancing.",
      href: "/departments",
      icon: <LayersIcon size={22} />,
    },
    {
      title: "Technology Services",
      description: "Custom software engineering, AI automation, CRM, and cloud DevOps solutions.",
      href: "/services",
      icon: <CodeIcon size={22} />,
    },
    {
      title: "Client Case Studies",
      description: "Review delivered projects, system architectures, and verified ROI outcomes.",
      href: "/portfolio",
      icon: <GlobeIcon size={22} />,
    },
    {
      title: "Industry Solutions",
      description: "Tailored enterprise solutions for healthcare, finance, logistics, and retail.",
      href: "/industries",
      icon: <SparkleIcon size={22} />,
    },
  ];

  return (
    <>
      <Header />
      <main id="main" className="min-h-[75vh] flex flex-col justify-center bg-[#071A33] text-white relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0B3D91]/30 blur-[140px] rounded-full pointer-events-none" />

        <div className="container relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <span>HTTP 404 • Resource Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
            The page you are looking for{" "}
            <span className="text-[#D4AF37]">does not exist</span>.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            The link you clicked may be broken, or the page may have been moved or updated. Use the navigation hubs below to find what you need or return to the homepage.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              as="link"
              href="/"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRightIcon size={18} />}
            >
              Return to Homepage
            </Button>
            <Button
              as="link"
              href="/contact"
              variant="outline"
              size="lg"
              leftIcon={<PhoneIcon size={18} className="text-[#D4AF37]" />}
            >
              Contact Support
            </Button>
          </div>

          <div className="border-t border-white/10 pt-12 text-left">
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[#D4AF37] mb-6 text-center">
              Explore Popular Hubs
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-5 rounded-2xl bg-[#041026] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#071A3D] transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors mb-1 flex items-center gap-1.5">
                      {item.title}
                      <ArrowRightIcon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
