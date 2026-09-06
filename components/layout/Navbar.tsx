"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

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
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-primary-light hover:text-primary"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    inert={!isOpen}
                    className={cn(
                      "absolute left-0 top-full grid w-[min(560px,calc(100vw-3rem))] grid-cols-2 gap-1 rounded-2xl border border-border bg-white p-3 shadow-xl transition-all duration-150",
                      isOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-2 opacity-0"
                    )}
                  >
                    {item.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-primary-light"
                        >
                          {Icon && (
                            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
                              <Icon className="size-5" aria-hidden="true" />
                            </span>
                          )}
                          <span>
                            <span className="block text-sm font-semibold text-ink">
                              {child.label}
                            </span>
                            <span className="mt-0.5 block text-xs text-muted">
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
                className="rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-primary-light hover:text-primary"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact" className="hidden lg:inline-flex">
            Let&apos;s Talk
          </Button>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
