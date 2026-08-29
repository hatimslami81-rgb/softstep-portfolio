"use client";

import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { Globe, Check } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "en", label: "English" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ar", label: "العربية" },
] as const;

export default function LanguageSwitcher({
  compact = false,
  onLocaleChange,
}: {
  compact?: boolean;
  onLocaleChange?: () => void;
}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  function switchLocale(code: string) {
    if (code === locale) {
      setOpen(false);
      return;
    }
    if (!(routing.locales as readonly string[]).includes(code)) return;

    // Keep the current path + hash so /projects/indoform#… and /#contact stay put
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const search = typeof window !== "undefined" ? window.location.search : "";
    router.replace(`${pathname}${search}${hash}`, { locale: code as AppLocale });
    setOpen(false);
    onLocaleChange?.();
  }

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Change language"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2 text-xs font-medium text-text-muted transition-colors hover:border-cyan hover:text-cyan",
          compact && "px-2.5 py-1.5"
        )}
      >
        <Globe size={14} />
        <span className="uppercase">{current.code}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className={cn(
            "absolute z-50 mt-2 w-44 overflow-hidden rounded-xl border border-border bg-bg-elev py-1 shadow-card",
            // Next to the logo on mobile: open toward the page center (start).
            // Desktop (end of header): open toward the header edge (end).
            compact ? "start-0" : "end-0"
          )}
        >
          {LOCALES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === locale}
                onClick={() => switchLocale(l.code)}
                className={cn(
                  "flex w-full items-center justify-between px-3.5 py-2 text-sm text-text-muted hover:bg-bg-elev-2 hover:text-text",
                  l.code === locale && "text-cyan"
                )}
              >
                {l.label}
                {l.code === locale && <Check size={14} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
