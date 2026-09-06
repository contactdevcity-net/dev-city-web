"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNav } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // The overlay is portaled to <body> because the header it would
  // otherwise render inside uses backdrop-blur, which (like filter/
  // transform) makes that ancestor a containing block for position:fixed
  // descendants — breaking full-viewport sizing. `document` only exists
  // client-side, so the portal target is resolved post-hydration.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const overlay = (
    <div
      className={cn(
        "fixed inset-0 z-50",
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        inert={!isOpen}
        className={cn(
          "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <span className="text-lg font-bold text-ink">Menu</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-primary-light"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 px-4 py-4">
          {mainNav.map((item) => {
            if (item.children) {
              const isOpenSection = openSection === item.label;
              return (
                <div key={item.label} className="border-b border-border/70 last:border-none">
                  <button
                    type="button"
                    onClick={() => setOpenSection(isOpenSection ? null : item.label)}
                    aria-expanded={isOpenSection}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-semibold text-ink"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn("size-4 transition-transform", isOpenSection && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    aria-hidden={!isOpenSection}
                    className={cn(
                      "grid transition-all duration-200",
                      isOpenSection ? "grid-rows-[1fr] pb-3 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="flex flex-col gap-1 overflow-hidden pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          tabIndex={isOpenSection ? 0 : -1}
                          className="rounded-lg px-3 py-2 text-sm text-muted hover:bg-primary-light hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border-b border-border/70 px-3 py-3 text-base font-semibold text-ink last:border-none"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-border p-4">
          <Button href="/contact" className="w-full">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu-panel"
        className="flex size-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-primary-light"
      >
        <Menu className="size-6" aria-hidden="true" />
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
