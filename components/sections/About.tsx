import { useTranslations } from "next-intl";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  const t = useTranslations("about");
  const facts = t.raw("facts") as { title: string; desc: string }[];

  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("body")}
          />

          <div className="flex flex-col gap-5">
            {facts.map((fact, i) => (
              <Reveal
                key={fact.title}
                delay={i * 0.08}
                className="rounded-2xl border border-border bg-bg-elev p-6"
              >
                <p className="font-display text-lg font-semibold text-text">
                  {fact.title}
                </p>
                <p className="mt-2 text-sm text-text-muted">{fact.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
