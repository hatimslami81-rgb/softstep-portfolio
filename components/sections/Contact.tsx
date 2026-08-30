import { useTranslations } from "next-intl";
import { MapPin, BadgeCheck, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "./ContactForm";
import { site, whatsappUrl, whatsappLabelKey } from "@/lib/site";

export default function Contact() {
  const t = useTranslations("contact");

  const tiles = [
    {
      icon: MapPin,
      label: t("locationLabel"),
      value: site.addressFull,
    },
    {
      icon: BadgeCheck,
      label: t("nibLabel"),
      value: site.nib,
    },
  ];

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHeading
              eyebrow={t("eyebrow")}
              title={t("title")}
              subtitle={t("subtitle")}
            />

            <Reveal delay={0.06} className="mt-8">
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                {t("whatsappLabel")}
              </p>
              <ul className="mt-3 space-y-2">
                {site.whatsapp.map((line) => (
                  <li key={line.id}>
                    <a
                      href={whatsappUrl(line.e164)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-xl border border-border bg-bg-elev p-4 transition-colors hover:border-cyan/50"
                    >
                      <MessageCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-cyan"
                      />
                      <span className="min-w-0">
                        <span className="block text-sm font-medium text-text">
                          {t(whatsappLabelKey(line.id))}
                        </span>
                        <span
                          className="mt-1 block text-sm text-cyan"
                          dir="ltr"
                        >
                          {line.display}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {tiles.map((tile, i) => (
                <Reveal
                  key={tile.label}
                  delay={0.12 + i * 0.06}
                  className="flex items-start gap-3 rounded-xl border border-border bg-bg-elev p-4"
                >
                  <tile.icon size={18} className="mt-0.5 shrink-0 text-cyan" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                      {tile.label}
                    </p>
                    <p
                      className="mt-1 text-sm font-medium text-text"
                      dir={tile.label === t("nibLabel") ? "ltr" : undefined}
                    >
                      {tile.value}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
