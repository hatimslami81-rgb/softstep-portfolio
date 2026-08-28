import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import LogoMark from "@/components/brand/LogoMark";
import Wordmark from "@/components/brand/Wordmark";
import { site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const year = new Date().getFullYear();

  const links = [
    { href: "/#about", label: tNav("about") },
    { href: "/#services", label: tNav("services") },
    { href: "/projects", label: tNav("projects") },
    { href: "/#contact", label: tNav("contact") },
  ];

  return (
    <footer className="border-t border-border bg-bg-elev/40">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <LogoMark size={32} />
            <Wordmark size="sm" />
          </Link>
          <p className="mt-4 max-w-sm text-sm text-text-muted">{t("tagline")}</p>
          <p className="mt-6 text-xs text-text-muted">{site.legalName}</p>
          <p className="mt-1 text-xs text-text-muted" dir="ltr">
            {tContact("nibLabel")}: {site.nib}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">{t("quickLinksTitle")}</p>
          <ul className="mt-4 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-muted transition-colors hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-text">{t("contactTitle")}</p>
          <ul className="mt-4 space-y-3 text-sm text-text-muted">
            {site.whatsapp.map((line) => (
              <li key={line.id}>
                {tContact(`whatsapp${line.id === "indonesia" ? "Indonesia" : "Syria"}`)}:{" "}
                <a
                  href={whatsappUrl(line.e164)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan transition-colors hover:text-cyan/80"
                  dir="ltr"
                >
                  {line.display}
                </a>
              </li>
            ))}
            <li>
              {tContact("locationLabel")}: {site.addressShort}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {site.legalName}. {t("rights")}
        </p>
      </Container>
    </footer>
  );
}
