import Link from "next/link";

interface LogoProps {
  className?: string;
  dark?: boolean;
}

export function Logo({ className, dark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={className ?? "flex items-center gap-0"}
      aria-label="DevCity home"
    >
      <span className={`text-xl font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        Dev
      </span>
      <span className="logo-gradient text-xl font-extrabold tracking-tight">City</span>
    </Link>
  );
}
