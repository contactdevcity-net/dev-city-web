"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-white/90 shadow-sm backdrop-blur-xl"
          : "border-b border-border/40 bg-white/70 backdrop-blur-md"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) => {
            if (item.children) {
              const isOpen = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-slate-100/80 hover:text-ink"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-3.5 transition-transform duration-200 text-muted", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    inert={!isOpen}
                    className={cn(
                      "absolute left-0 top-full grid w-[min(540px,calc(100vw-3rem))] grid-cols-2 gap-1 rounded-2xl p-3 shadow-2xl shadow-primary/10 transition-all duration-200",
                      "border border-border/80 backdrop-blur-2xl bg-white/95",
                      isOpen
                        ? "pointer-events-auto translate-y-2 opacity-100"
                        : "pointer-events-none translate-y-0 opacity-0"
                    )}
                  >
                    {item.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary/5"
                        >
                          {Icon && (
                            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                              <Icon className="size-4" aria-hidden="true" />
                            </span>
                          )}
                          <span>
                            <span className="block text-sm font-semibold text-ink">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-muted leading-snug">
                              {child.description}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-slate-100/80 hover:text-ink"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hero-btn-primary relative hidden overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-sm lg:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
