import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Velosync Global",
  description:
    "Velosync Global Terms and Conditions governing software engineering services, IP ownership, milestone payments, and client service level agreements (SLAs).",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-32 pb-24 bg-white dark:bg-[#060e24] text-slate-900 dark:text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-12 text-center">
            <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-500 font-semibold text-xs uppercase tracking-wider">
              Service Agreement
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mt-4 mb-3">
              Terms & Conditions
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Last Updated: August 2026 | Governing IT & Software Development Services
            </p>
          </div>

          <div className="prose dark:prose-invert max-w-none space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our website, requesting a consultation, or entering into a project statement of work (SOW) with Velosync Global, you agree to be bound by these Terms and Conditions. These terms govern all software engineering, CRM development, AI automation, web development, and digital marketing services provided by Velosync Global.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                2. Scope of Services & Milestone Execution
              </h2>
              <p>
                All custom software development and IT projects are governed by formal project agreements detailing technical deliverables, acceptance criteria, milestone schedules, and commercial terms. Development progresses through 2-week agile sprints with regular staging demonstrations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                3. Intellectual Property (IP) Transfer
              </h2>
              <p>
                Upon receipt of full payment for agreed milestones, Velosync Global transfers 100% of custom source code rights, database schemas, software documentation, and design assets to the client. Velosync Global retains rights only to pre-existing open-source libraries or third-party frameworks incorporated into the solution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                4. Payment Terms & Billing
              </h2>
              <p>
                Services are invoiced based on agreed milestone structures (advance, staging completion, and final deployment) or monthly dedicated squad retainers. Invoices are payable according to the commercial terms specified in the signed project contract.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                5. Warranty & Service Level Agreements (SLAs)
              </h2>
              <p>
                Velosync Global provides 30 to 90 days of complimentary post-launch warranty support covering bug fixes and performance optimization. Ongoing maintenance, 24/7 server monitoring, and SLA guarantees are governed under separate SLA support contracts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                6. Governing Law
              </h2>
              <p>
                These Terms & Conditions are governed by and construed in accordance with the laws of Australia and the jurisdiction of Australian courts for Australian client engagements, or standard international arbitration for global client contracts.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
