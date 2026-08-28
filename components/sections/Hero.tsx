import { useTranslations } from "next-intl";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-40 start-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-radial opacity-20 blur-3xl animate-pulse-glow" />

      <Container className="relative grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center rounded-full border border-border bg-bg-elev px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan">
              {t("eyebrow")}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.1] tracking-tight text-text md:text-5xl lg:text-6xl">
              {t("headline")}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-balance text-base text-text-muted md:text-lg">
              {t("sub")}
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/projects" variant="primary">
                {t("ctaPrimary")}
              </Button>
              <Button href="/#contact" variant="secondary">
                {t("ctaSecondary")}
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-brand-gradient opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-bg-elev shadow-card">
            <Image
              src="/logo.jpg"
              alt="Soft Step"
              width={1024}
              height={576}
              priority
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
