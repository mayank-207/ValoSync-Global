import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Velosync Global",
  description:
    "Velosync Global Privacy Policy outlining compliance with Australian Privacy Principles (APPs), data protection, confidentiality, and security standards.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-32 pb-24 bg-white dark:bg-[#060e24] text-slate-900 dark:text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 font-semibold text-xs uppercase tracking-wider">
              Legal Compliance
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Last Updated: August 2026 | Compliant with Australian Privacy Act 1988 & APPs
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                1. Information We Collect
              </h2>
              <p>
                Velosync Global collects personal and corporate information provided directly by clients and website visitors when submitting consultation forms, booking technical discovery sessions, or engaging our software engineering services. This includes names, corporate email addresses, phone numbers, company names, and project specifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use collected data strictly for evaluating project scope, preparing commercial proposals, delivering custom software services, fulfilling contractual obligations, and communicating technical updates. We do not sell, rent, or trade your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                3. Australian Privacy Principles (APPs) & Data Residency
              </h2>
              <p>
                For our Australian clients, data handling complies fully with the 13 Australian Privacy Principles under the Privacy Act 1988 (Cth). Software systems and client databases engineered for Australian operations are hosted on secure, ISO 27001-certified local data centers (AWS Sydney / Azure Australia East).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                4. Non-Disclosure & Intellectual Property
              </h2>
              <p>
                All proprietary client workflows, source code, data feeds, and project specifications shared with Velosync Global are protected under strict Non-Disclosure Agreements (NDAs). Upon final project payment, 100% of source code rights and intellectual property belong exclusively to the client.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                5. Security Standards & Data Protection
              </h2>
              <p>
                We enforce industry-standard security practices, including AES-256 bit data encryption at rest, TLS 1.3 encryption in transit, strict OAuth2 role-based access controls, and regular vulnerability audits to safeguard your business systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                6. Contact Privacy Officer
              </h2>
              <p>
                If you have questions regarding this Privacy Policy or wish to request access to or correction of your personal information, please email our Privacy Officer at{" "}
                <a href="mailto:privacy@velosyncglobal.com" className="text-cyan-500 font-semibold hover:underline">
                  privacy@velosyncglobal.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
