"use client";

import { useState } from "react";
import Button from "../ui/Button";
import { ArrowRightIcon, CheckCircleIcon, SparkleIcon } from "../ui/Icons";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Custom Software Development",
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
      setErrorMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact-teaser"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--background-color)" }}
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden border border-[#0D47A1]/30 bg-gradient-to-br from-[#041026] via-[#071A3D] to-[#0D47A1] shadow-2xl">
          {/* Background Decorative Glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgb(212 175 55 / 0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 text-white">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full mb-6 border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37]">
                <SparkleIcon size={14} />
                Start a Project Conversation
              </span>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white"
              >
                Ready to Turn Your{" "}
                <span className="block text-[#D4AF37] mt-1">
                  Business Challenge Into a Working Solution?
                </span>
              </h2>

              {/* <p className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-slate-200">
                Discuss your custom software, CRM, web development, automation, cloud delivery or digital growth requirements with ValoSync Global.
              </p> */}

              <div className="space-y-4">
                {[
                  "Initial Project Discovery Conversation",
                  "Confidentiality Options for Sensitive Projects",
                  "Clear Scope, Milestones and Commercial Proposal",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm font-medium">
                    <span className="p-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                      <CheckCircleIcon size={16} />
                    </span>
                    <span className="text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quick Interactive Enquiry Form */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-3xl border border-slate-200/80 bg-white text-slate-900 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center mx-auto">
                      <CheckCircleIcon size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Consultation Request Sent!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-[#0D47A1]">{formData.name}</strong>. Our team will review your requirements and contact you at <span className="font-semibold text-slate-900">{formData.email}</span> as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-block mt-4 text-xs font-bold text-[#0D47A1] uppercase tracking-wider hover:underline"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-slate-900">
                        Book a Free Consultation
                      </h3>
                      <p className="text-xs text-slate-500 mb-4">
                        Share a few details so we can prepare for a useful project conversation.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="e.g. Alex Smith"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-slate-50/80 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-slate-50/80 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+61 400 000 000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-slate-50/80 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] transition-all"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700"
                        >
                          Primary Service *
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-slate-50/80 text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] transition-all"
                        >
                          <option value="Custom Software Development" className="text-slate-900 bg-white">Custom Software</option>
                          <option value="Application Development" className="text-slate-900 bg-white">Application Development</option>
                          <option value="AI Automation" className="text-slate-900 bg-white">AI Automation</option>
                          <option value="Business Process Automation" className="text-slate-900 bg-white">Automation Process</option>
                          <option value="Web Development" className="text-slate-900 bg-white">Web Development</option>
                          <option value="Digital Marketing" className="text-slate-900 bg-white">Digital Marketing & SEO</option>
                          <option value="Accounting Services" className="text-slate-900 bg-white">Accounting Services</option>
                          <option value="Conveyancing Services" className="text-slate-900 bg-white">Conveyancing Services</option>
                          <option value="Civil Engineering Services" className="text-slate-900 bg-white">Civil Engineering Services</option>
                          <option value="Real Estate Services" className="text-slate-900 bg-white">Real Estate Services</option>
                          <option value="Home Loan Services" className="text-slate-900 bg-white">Home Loan Services</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700"
                      >
                        Project Brief / Message
                      </label>
                      <textarea
                        id="cta-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your target timeline, business goals, or current application..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-[#D9E1EC] bg-[#F7F9FC] text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:border-[#0D47A1] transition-all"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 text-xs font-semibold">
                        {errorMessage}
                      </div>
                    )}

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      disabled={isSubmitting}
                      rightIcon={<ArrowRightIcon size={18} />}
                    >
                      {isSubmitting ? "Sending Request..." : "Submit Request"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
