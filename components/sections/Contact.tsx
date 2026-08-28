import { useTranslations } from "next-intl";
import { MapPin, BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ContactForm from "./ContactForm";
import { site, whatsappUrl } from "@/lib/site";

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
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {site.whatsapp.map((line) => (
                  <WhatsAppButton
                    key={line.id}
                    href={whatsappUrl(line.e164)}
                    subtitle={line.display}
                  >
                    {t(`whatsapp${line.id === "indonesia" ? "Indonesia" : "Syria"}`)}
                  </WhatsAppButton>
                ))}
              </div>
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
