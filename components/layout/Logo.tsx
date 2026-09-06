import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={className ?? "flex items-center gap-0 text-ink"}
      aria-label="DevCity home"
    >
      <span className="text-xl font-extrabold tracking-tight text-ink">Dev</span>
      <span className="logo-gradient text-xl font-extrabold tracking-tight">City</span>
    </Link>
  );
}
