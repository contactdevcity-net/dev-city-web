"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ko", label: "한국어", short: "KO" },
];

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Extract current locale from pathname (e.g. /fr/about -> fr)
  const currentLocale = pathname.split("/")[1] || "en";
  const currentLang = LANGUAGES.find((l) => l.code === currentLocale) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = (locale: string) => {
    setIsOpen(false);
    
    // If it's already the current locale, do nothing
    if (locale === currentLocale) return;

    // Replace the locale in the pathname
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    
    // Set a cookie so middleware remembers the choice
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    
    // Let middleware handle routing properly if on root
    if (pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`) {
      router.push(`/${locale}`);
    } else {
      router.push(newPathname);
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-ink/75 transition-colors hover:bg-slate-100/80 hover:text-ink"
        aria-expanded={isOpen}
      >
        <Globe className="size-4" />
        <span className="hidden sm:inline-block">{currentLang.short}</span>
        <ChevronDown
          className={cn(
            "size-3.5 text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute right-0 top-full mt-2 w-40 rounded-2xl border border-border/80 bg-white/95 p-2 shadow-2xl shadow-primary/10 backdrop-blur-2xl transition-all duration-200 z-50",
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="flex flex-col gap-1">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
                currentLocale === lang.code
                  ? "bg-primary/10 font-semibold text-primary"
                  : "text-ink hover:bg-slate-100/80"
              )}
            >
              <span>{lang.label}</span>
              {currentLocale === lang.code && <Check className="size-4" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
