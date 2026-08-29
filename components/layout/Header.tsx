"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import LogoMark from "@/components/brand/LogoMark";
import Wordmark from "@/components/brand/Wordmark";
import LanguageSwitcher from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/#about", label: t("about") },
    { href: "/#services", label: t("services") },
    { href: "/projects", label: t("projects") },
    { href: "/#contact", label: t("contact") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled ? "glass border-b border-border" : "bg-transparent"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={32} />
            <Wordmark size="sm" />
          </Link>
          {/* Mobile: language switch next to the logo (always visible) */}
          <div className="md:hidden">
            <LanguageSwitcher compact onLocaleChange={() => setMobileOpen(false)} />
          </div>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted transition-colors hover:text-cyan"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button href="/#contact" variant="primary" className="!py-2.5">
            {t("contactCta")}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-border p-2 text-text md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="glass border-t border-border md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-text-muted transition-colors hover:bg-bg-elev hover:text-cyan"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-4">
              <Button
                href="/#contact"
                variant="primary"
                className="!py-2.5"
                onClick={() => setMobileOpen(false)}
              >
                {t("contactCta")}
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
