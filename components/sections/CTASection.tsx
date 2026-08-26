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
        <div
          className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden border shadow-2xl"
          style={{
            background: "var(--gradient-hero)",
            borderColor: "rgba(6, 182, 212, 0.25)",
          }}
        >
          {/* Background Lighting Elements */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(30, 58, 138, 0.4) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-6 text-white">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full mb-6 border"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  borderColor: "rgba(6, 182, 212, 0.4)",
                  color: "var(--accent-color)",
                }}
              >
                <SparkleIcon size={14} />
                Book Your Consultation & Project Scope
              </span>

              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6"
                style={{ color: "var(--text-light)" }}
              >
                Ready to Build Your{" "}
                <span className="block gradient-text mt-1">
                  Next Tech Breakthrough?
                </span>
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
                style={{ color: "rgba(203, 213, 225, 0.9)" }}
              >
                Partner with Velosync Global for custom software development, CRM engineering, AI workflow automation, or targeted lead generation campaigns.
              </p>

              <div className="space-y-4">
                {[
                  "Free 30-Minute Technical Scope Consultation",
                  "100% Confidential Non-Disclosure Agreement (NDA)",
                  "Custom Proposal & Transparent Milestone Estimates",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm font-medium">
                    <span className="p-1 rounded-full bg-cyan-500/20 text-cyan-400">
                      <CheckCircleIcon size={16} />
                    </span>
                    <span className="text-slate-200">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Quick Interactive Enquiry Form */}
            <div className="lg:col-span-6">
              <div
                className="p-6 sm:p-8 rounded-3xl backdrop-blur-xl border bg-white/95 dark:bg-[#0F172A]/95 text-slate-900 dark:text-white shadow-2xl"
                style={{ borderColor: "rgba(255, 255, 255, 0.15)" }}
              >
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-500 flex items-center justify-center mx-auto">
                      <CheckCircleIcon size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      Consultation Request Sent!
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-cyan-500">{formData.name}</strong>. Our senior solutions architect will contact you at <span className="font-semibold">{formData.email}</span> within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-block mt-4 text-xs font-bold text-cyan-500 uppercase tracking-wider hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-slate-900 dark:text-white">
                        Book a Free Consultation
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                        Fill in your project requirements for an instant callback.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
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
                          className="w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
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
                          className="w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+61 400 000 000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
                        >
                          Primary Service *
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        >
                          <option value="Custom Software Development">Custom Software Development</option>
                          <option value="CRM Development">CRM Development</option>
                          <option value="AI Automation">AI Automation</option>
                          <option value="Business Process Automation">Business Process Automation</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Digital Marketing">Digital Marketing & SEO</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-bold uppercase tracking-wider mb-1.5 text-slate-700 dark:text-slate-300"
                      >
                        Project Brief / Message
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        placeholder="Briefly describe your goals, budget, or timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-sm rounded-xl border bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>

                    {errorMessage && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
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
                      {isSubmitting ? "Sending Request..." : "Submit Consultation Request"}
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
