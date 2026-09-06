"use client";

/* ─────────────────────────────────────────────
 * Simplified continent SVG paths (viewBox 0 0 100 50)
 * Equirectangular projection: x = (lon+180)/3.6, y = (90-lat)/3.6
 * ───────────────────────────────────────────── */

const CONTINENTS = [
  // North America
  "M5,9 L10,6 16,5 22,6 27,4 30,8 30,12 28,15 27,18 24,19 21,21 19,19 17,15 16,11 15,9 8,8 Z",
  // Central America
  "M21,21 L22,23 21,25 19,25 20,23 Z",
  // Greenland
  "M30,3 L34,2 35,5 33,7 30,6 Z",
  // South America
  "M22,27 L26,25 29,27 31,30 31,35 29,39 27,43 24,45 22,42 20,37 20,31 21,28 Z",
  // Europe
  "M45,5 L48,4 52,5 54,8 53,12 50,14 47,13 45,10 44,7 Z",
  // British Isles
  "M43,6 L44.5,5 45,8 43.5,9 Z",
  // Scandinavia
  "M48,3 L50,2 52,3 51,6 49,5 Z",
  // Africa
  "M46,17 L50,15 54,17 56,22 57,28 55,34 52,38 49,40 46,37 44,31 43,25 44,20 Z",
  // Middle East / Arabian Peninsula
  "M55,14 L59,12 63,15 64,18 62,21 58,20 55,17 Z",
  // Asia mainland
  "M54,5 L60,3 68,2 76,4 82,5 88,8 92,13 91,16 87,18 82,19 78,18 72,16 67,15 62,13 58,10 55,8 Z",
  // India
  "M67,16 L71,14 74,17 72,22 70,25 68,22 66,18 Z",
  // Southeast Asia
  "M78,21 L82,19 85,22 84,26 80,27 77,24 Z",
  // Japan
  "M89,7 L91,5 92,9 91,13 89,11 Z",
  // Taiwan
  "M85,14 L86,13 86.5,15.5 85.5,15.5 Z",
  // Australia
  "M80,32 L86,30 92,32 95,36 93,40 88,42 84,41 81,37 Z",
  // New Zealand
  "M95,39 L96.5,37 97,41 96,43 95,42 Z",
  // Sri Lanka
  "M71,24 L72,23 72.5,25 71.5,25.5 Z",
  // Madagascar
  "M58,35 L59,33 60,36 59,38 Z",
];

/* ─── Marker locations (same coordinate system) ─── */

interface MapLocation {
  name: string;
  x: number;
  y: number;
}

const LOCATIONS: MapLocation[] = [
  { name: "New York", x: 29, y: 13 },
  { name: "Europe", x: 49, y: 8 },
  { name: "Middle East", x: 60, y: 17 },
  { name: "Asia Pacific", x: 80, y: 22 },
  { name: "Australia", x: 89, y: 36 },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], // NY → Europe
  [1, 2], // Europe → Middle East
  [2, 3], // Middle East → Asia Pacific
  [3, 4], // Asia Pacific → Australia
];

function arcPath(from: MapLocation, to: MapLocation): string {
  const cpX = (from.x + to.x) / 2;
  const cpY = Math.min(from.y, to.y) - Math.abs(to.x - from.x) * 0.14;
  return `M${from.x},${from.y} Q${cpX},${cpY} ${to.x},${to.y}`;
}

/* ─── Service tags around the orb ─── */

const SERVICE_TAGS = [
  { label: "Web Apps", dot: "bg-primary", pos: { top: "18%", right: "-10%" } as React.CSSProperties },
  { label: "Cloud Solutions", dot: "bg-accent", pos: { top: "-4%", right: "20%" } as React.CSSProperties },
  { label: "Custom Software", dot: "bg-primary", pos: { top: "44%", left: "-14%" } as React.CSSProperties },
  { label: "AI & ML", dot: "bg-accent", pos: { bottom: "30%", left: "-8%" } as React.CSSProperties },
  { label: "Mobile Apps", dot: "bg-blue-400", pos: { top: "-4%", left: "15%" } as React.CSSProperties },
  { label: "SaaS Products", dot: "bg-accent", pos: { bottom: "10%", right: "-6%" } as React.CSSProperties },
  { label: "UI/UX Design", dot: "bg-primary", pos: { bottom: "-4%", left: "30%" } as React.CSSProperties },
];

/* ─── Component ─── */

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[460px]"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Outer pulsing rings */}
      <div
        className="absolute inset-0 rounded-full border border-primary/10"
        style={{ animation: "pulseRing 6s ease-in-out infinite" }}
      />
      <div
        className="absolute -inset-4 rounded-full border border-accent/[0.06]"
        style={{ animation: "pulseRing 6s ease-in-out infinite 1s" }}
      />
      <div
        className="absolute -inset-8 rounded-full border border-primary/[0.04]"
        style={{ animation: "pulseRing 6s ease-in-out infinite 2s" }}
      />

      {/* Orbiting dashed ring with traveling dot */}
      <div
        className="absolute -inset-6 rounded-full border border-dashed border-primary/10"
        style={{ animation: "spinSlow 40s linear infinite" }}
      >
        <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/40" />
      </div>
      <div
        className="absolute -inset-14 rounded-full border border-dashed border-accent/[0.07]"
        style={{ animation: "spinReverse 55s linear infinite" }}
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-lg shadow-accent/40" />
      </div>

      {/* ─── Inner orb ─── */}
      <div className="absolute inset-4 overflow-hidden rounded-full">
        {/* Gradient mesh blobs */}
        <div
          className="absolute -left-8 -top-8 h-3/4 w-3/4 rounded-full opacity-40 blur-3xl"
          style={{
            background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
            animation: "meshBlob1 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-8 -right-8 h-3/4 w-3/4 rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
            animation: "meshBlob2 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rounded-full opacity-25 blur-2xl"
          style={{
            background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)",
            animation: "meshBlob3 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 h-1/2 w-1/2 rounded-full opacity-20 blur-2xl"
          style={{
            background: "radial-gradient(circle, #6d28d9 0%, transparent 70%)",
            animation: "meshBlob4 18s ease-in-out infinite",
          }}
        />

        {/* ─── World map SVG ─── */}
        <svg
          viewBox="-2 -2 104 54"
          className="absolute inset-0 h-full w-full p-6"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* Grid lines (subtle lat/lon) */}
          <g stroke="#2563eb" strokeWidth="0.08" opacity="0.08">
            {[10, 20, 30, 40].map((y) => (
              <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} />
            ))}
            {[20, 40, 60, 80].map((x) => (
              <line key={`v${x}`} x1={x} y1="0" x2={x} y2="50" />
            ))}
          </g>

          {/* Continents */}
          <g fill="url(#mapGrad)" opacity="0.4" stroke="url(#mapGrad)" strokeWidth="0.2" strokeOpacity="0.6">
            {CONTINENTS.map((d, i) => (
              <path key={i} d={d} />
            ))}
          </g>

          {/* Connection arcs with flowing dashes */}
          {CONNECTIONS.map(([fi, ti], i) => {
            const d = arcPath(LOCATIONS[fi], LOCATIONS[ti]);
            return (
              <g key={`arc-${i}`}>
                {/* Arc path */}
                <path
                  d={d}
                  fill="none"
                  stroke="url(#arcGrad)"
                  strokeWidth="0.35"
                  opacity="0.5"
                  strokeDasharray="1.5 1"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-5"
                    dur={`${2.5 + i * 0.5}s`}
                    repeatCount="indefinite"
                  />
                </path>

                {/* Traveling dot */}
                <circle r="0.6" fill="#2563eb" opacity="0.9">
                  <animateMotion
                    dur={`${3 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                </circle>
              </g>
            );
          })}

          {/* Location markers */}
          {LOCATIONS.map((loc, i) => (
            <g key={`loc-${i}`}>
              {/* Pulse ring */}
              <circle cx={loc.x} cy={loc.y} r="1.5" fill="none" stroke="#2563eb" strokeWidth="0.25">
                <animate
                  attributeName="r"
                  values="1;3.5;1"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.6}s`}
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0;0.6"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${i * 0.6}s`}
                />
              </circle>

              {/* Outer dot */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r="1.1"
                fill={i % 2 === 0 ? "#2563eb" : "#7c3aed"}
                opacity="0.9"
              />
              {/* Inner bright dot */}
              <circle cx={loc.x} cy={loc.y} r="0.5" fill="white" opacity="0.9" />

              {/* Label */}
              <text
                x={loc.x}
                y={loc.y - 2.8}
                textAnchor="middle"
                fontSize="2.2"
                fontWeight="800"
                fontFamily="var(--font-jakarta), sans-serif"
                fill="#0f172a"
                stroke="white"
                strokeWidth="0.4"
                paintOrder="stroke fill"
                opacity="0.95"
              >
                {loc.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Frosted overlay */}
        <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-[0.5px]" />
      </div>

      {/* ─── Center monogram ─── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-white/50 bg-white/80 shadow-xl shadow-primary/10 backdrop-blur-md sm:h-20 sm:w-20 sm:rounded-2xl">
          <span className="text-lg font-extrabold tracking-tight text-ink sm:text-xl">
            D<span className="logo-gradient">C</span>
          </span>
          <div
            className="absolute -inset-2 -z-10 rounded-2xl opacity-40 blur-lg"
            style={{ background: "linear-gradient(135deg, #2563eb30, #7c3aed30)" }}
          />
        </div>
      </div>

      {/* ─── Service tags (desktop only) ─── */}
      <div className="hidden md:block">
        {SERVICE_TAGS.map((tag, i) => (
          <div
            key={tag.label}
            className="absolute rounded-xl border border-border/80 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl"
            style={{
              ...tag.pos,
              animation: `meshBlob${(i % 4) + 1} ${9 + i * 1.2}s ease-in-out infinite`,
            }}
          >
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${tag.dot}`} />
              <span className="whitespace-nowrap text-[11px] font-semibold text-ink">{tag.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Glow behind the whole orb */}
      <div
        className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-30 blur-3xl"
        style={{ background: "linear-gradient(135deg, #2563eb25, #7c3aed20)" }}
      />
    </div>
  );
}
