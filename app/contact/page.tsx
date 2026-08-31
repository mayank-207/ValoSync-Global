"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparkleIcon,
  ShieldIcon,
} from "@/components/ui/Icons";
import FAQAccordion from "@/components/ui/FAQAccordion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Technology Services",
    budget: "To be discussed",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <PhoneIcon size={24} />,
      title: "General Enquiries",
      detail: "+61 (02) 8000 0000 / +91 98765 43210",
      subtext: "Mon-Fri from 9am to 6pm (AEST)",
      href: "tel:+61280000000",
    },
    {
      icon: <MailIcon size={24} />,
      title: "Official Email",
      detail: "contact@valosyncglobal.com",
      subtext: "Guaranteed reply within 24 hours",
      href: "mailto:contact@valosyncglobal.com",
    },
    {
      icon: <MapPinIcon size={24} />,
      title: "Global Delivery Hub",
      detail: "Global Service Coordination",
      subtext: "Department and Client Support",
      href: "#contact-form",
    },
  ];

  const contactFaqs = [
    {
      question: "How quickly will your team respond to my inquiry?",
      answer:
        "Our team reviews each submission and directs it to the relevant department for an appropriate follow-up.",
    },
    {
      question: "Do you sign a Non-Disclosure Agreement (NDA) before discussing my project?",
      answer:
        "Yes. We strictly protect your proprietary ideas and business data under a 100% confidential NDA upon initial contact.",
    },
    {
      question: "How will my enquiry reach the correct department?",
      answer:
        "Select the most relevant department in the form. If your requirement crosses service areas, our team will coordinate the initial review and confirm the appropriate contacts.",
    },
  ];

  return (
    <>
      <Header />
      <main id="main">
        {/* Contact Hero */}
        {/* <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-[#0B1B3D] via-[#0F172A] to-[#0B1B3D] text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-[#D4AF37]/15 blur-[130px] rounded-full pointer-events-none" />

          <div className="container relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <SparkleIcon size={16} />
              <span>Let&apos;s Build Success Together</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-6">
              Book Your Free Technical Discovery &{" "}
              <span className="text-[#D4AF37]">
                Project Consultation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
              Speak directly with our senior software architects to scope your custom software, CRM build, AI automation workflow, or digital lead generation campaign.
            </p>
          </div>
        </section> */}

        {/* Contact Method Cards */}
        <section className="pt-32 pb-20 py-12 bg-slate-900 border-b border-slate-800 text-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group p-6 rounded-2xl bg-[#041026] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      {item.title}
                    </h3>
                    <p className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.detail}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{item.subtext}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="section-padding bg-[#F7F9FC] relative">
          <div className="container">
            <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#D9E1EC] shadow-2xl">
              <SectionHeading
                // badge="Consultation Form"
                title="Send Us Your Requirements"
                subtitle="Fill out the form below to receive a custom proposal and 30-minute discovery session."
                center
              />

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center mx-auto">
                    <CheckCircleIcon size={44} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1A1A]">
                    Consultation Request Sent!
                  </h3>
                  <p className="text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#0D47A1]">{formData.name}</strong>. Our lead solutions architect will review your submission and contact you at <span className="font-semibold text-[#1A1A1A]">{formData.email}</span> within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="md"
                    className="mt-6"
                  >
                    Submit Another Project Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-300">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="e.g. Alex Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border bg-[#F7F9FC] border-[#D9E1EC] focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] text-[#1A1A1A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1A1A1A]">
                        Corporate Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border bg-[#F7F9FC] border-[#D9E1EC] focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] text-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1A1A1A]">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+61 400 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border bg-[#F7F9FC] border-[#D9E1EC] focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] text-[#1A1A1A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1A1A1A]">
                        Company Name
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border bg-[#F7F9FC] border-[#D9E1EC] focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] text-[#1A1A1A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1A1A1A]">
                        Primary Service Required *
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border bg-[#F7F9FC] border-[#D9E1EC] focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] text-[#1A1A1A]"
                      >
                        <option value="Technology Services">Technology Services</option>
                          <option value="Accounting Services">Accounting Services</option>
                          <option value="Conveyancing Services">Conveyancing Services</option>
                          <option value="Civil Engineering Services">Civil Engineering Services</option>
                          <option value="Real Estate Services">Real Estate Services</option>
                          <option value="Home Loan Services">Home Loan Services</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider mb-2 text-[#1A1A1A]">
                        Estimated Budget Range
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border bg-[#F7F9FC] border-[#D9E1EC] focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] text-[#1A1A1A]"
                      >
                        <option value="Under $10,000">Under $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-700 dark:text-slate-300">
                      Requirements and Brief Description
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Outline your requirements, priorities and any relevant timing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border bg-[#F7F9FC] border-[#D9E1EC] focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] text-[#1A1A1A]"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-[#071A3D]/10 border border-[#071A3D]/30 text-[#071A3D] text-xs font-semibold">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex items-center gap-3 p-4 rounded-xl bg-[#0D47A1]/10 border border-[#0D47A1]/20 text-xs text-[#4A5568]">
                    <ShieldIcon size={20} className="text-[#0D47A1] flex-shrink-0" />
                    <span>Your information is 100% confidential under our NDA policy. We never share your data.</span>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    rightIcon={<ArrowRightIcon size={18} />}
                  >
                    {isSubmitting ? "Sending Request..." : "Submit Enquiry"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Contact FAQs */}
        <section className="section-padding bg-white">
          <div className="container max-w-3xl mx-auto">
            <SectionHeading
              badge="Service Enquiry FAQs"
              title="Frequently Asked Questions"
              subtitle="Quick answers about submitting an enquiry and connecting with the appropriate department."
              center
            />
            <FAQAccordion items={contactFaqs} defaultOpenIndex={0} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
