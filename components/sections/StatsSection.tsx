import StatCard from "../ui/StatCard";
import {
  UsersIcon,
  AwardIcon,
  BriefcaseIcon,
  GlobeIcon,
} from "../ui/Icons";

const stats = [
  {
    value: "10",
    suffix: "+",
    label: "Years of Experience",
    icon: <AwardIcon size={48} />,
  },
  {
    value: "500",
    suffix: "+",
    label: "Projects Delivered",
    icon: <BriefcaseIcon size={48} />,
  },
  {
    value: "200",
    suffix: "+",
    label: "Happy Clients Globally",
    icon: <UsersIcon size={48} />,
  },
  {
    value: "30",
    suffix: "+",
    label: "Countries Served",
    icon: <GlobeIcon size={48} />,
  },
];

export default function StatsSection() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "var(--gradient-primary)",
      }}
      aria-labelledby="stats-heading"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(6 182 212 / 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgb(30 58 138 / 0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative container">
        <h2 id="stats-heading" className="sr-only">
          Velosync Global Company Statistics
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              className={`animate-fade-in-up animate-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
