import {
  Server,
  ShoppingCart,
  Smartphone,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const SERVICE_KEYS = ["backend", "commerce", "mobile", "devops"] as const;

const ICONS: Record<(typeof SERVICE_KEYS)[number], LucideIcon> = {
  backend: Server,
  commerce: ShoppingCart,
  mobile: Smartphone,
  devops: Cloud,
};

export default function Services() {
  const t = useTranslations("services");

  return (
    <section id="services" className="border-t border-border py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICE_KEYS.map((key, i) => {
            const Icon = ICONS[key];
            const bullets = t.raw(`items.${key}.bullets`) as string[];
            return (
              <Reveal
                key={key}
                delay={(i % 2) * 0.08}
                className="group rounded-2xl border border-border bg-bg-elev p-7 transition-colors duration-200 hover:border-cyan/50"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-text">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {t(`items.${key}.desc`)}
                </p>
                <ul className="mt-4 space-y-2 border-t border-border pt-4">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
