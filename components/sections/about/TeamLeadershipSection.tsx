import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { CodeIcon, ShieldIcon, MarketingIcon, BrainIcon } from "@/components/ui/Icons";

const teamRoles = [
  {
    title: "Technology Specialists",
    focus: "Applications, platforms, automation, cloud and digital growth",
    description:
      "Planning and delivering technology solutions aligned with practical operational requirements.",
    icon: <CodeIcon size={26} />,
  },
  {
    title: "Accounting Professionals",
    focus: "Bookkeeping, reporting, financial administration and coordination",
    description:
      "Supporting clear financial records, reporting and day-to-day accounting requirements.",
    icon: <BrainIcon size={26} />,
  },
  {
    title: "Property and Conveyancing Specialists",
    focus: "Transactions, documentation, leasing and property coordination",
    description:
      "Guiding relevant property enquiries through organised communication and documentation.",
    icon: <ShieldIcon size={26} />,
  },
  {
    title: "Engineering and Lending Specialists",
    focus: "Civil project support, home-loan enquiries and coordinated service",
    description:
      "Providing dedicated support through the department relevant to each client's objectives.",
    icon: <MarketingIcon size={26} />,
  },
];

export default function TeamLeadershipSection() {
  return (
    <section className="section-padding bg-white relative">
      <div className="container">
        <SectionHeading
          badge="Multidisciplinary Talent"
          title="Specialist Departments, Connected by One Standard"
          subtitle="Our structure brings different professional capabilities together while preserving specialist ownership in every department."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {teamRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#F7F9FC] border border-[#D9E1EC] hover:border-[#0B3D91]/40 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#0D47A1]/10 text-[#0D47A1] flex items-center justify-center mb-6 border border-[#0D47A1]/20">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">
                  {role.title}
                </h3>
                <p className="text-xs font-semibold text-[#0D47A1] mb-4">
                  {role.focus}
                </p>
                <p className="text-sm text-[#4A5568] leading-relaxed">
                  {role.description}
                </p>
              </div>

              {/* <div className="mt-6 pt-4 border-t border-[#F0F4FA] text-xs font-medium text-[#718096]">
                Dedicated ValoSync Global Engineering Division
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
