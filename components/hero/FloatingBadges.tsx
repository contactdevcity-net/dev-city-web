"use client";

const TECH_BADGES = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "AWS",
  "AI / ML",
  "React Native",
  "PostgreSQL",
];

export function FloatingBadges() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[5] hidden overflow-hidden lg:block" aria-hidden="true">
      {TECH_BADGES.map((badge, i) => {
        const positions = [
          { top: "14%", left: "4%" },
          { top: "32%", right: "3%" },
          { top: "58%", left: "2%" },
          { bottom: "18%", right: "5%" },
          { top: "8%", right: "14%" },
          { bottom: "28%", left: "6%" },
          { top: "48%", right: "8%" },
          { bottom: "10%", left: "12%" },
        ];

        const isBlue = i % 2 === 0;

        return (
          <span
            key={badge}
            className={`absolute rounded-full border px-3 py-1.5 text-[11px] font-semibold shadow-sm backdrop-blur-sm ${
              isBlue
                ? "border-primary/15 bg-primary-light/80 text-primary/80"
                : "border-accent/15 bg-accent-light/80 text-accent/80"
            }`}
            style={{
              ...positions[i],
              animation: `floatBadge${(i % 4) + 1} ${6 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {badge}
          </span>
        );
      })}
    </div>
  );
}
