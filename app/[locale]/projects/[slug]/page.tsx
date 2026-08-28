import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, BadgeCheck } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StatusBadge from "@/components/projects/StatusBadge";
import ProjectMockups from "@/components/projects/ProjectMockups";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: `${t(`items.${project.key}.name`)} — Soft Step`,
    description: t(`items.${project.key}.desc`),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const t = await getTranslations("projects");
  const features = t.raw(`items.${project.key}.features`) as string[];
  const context =
    project.key === "indoform" ? t("items.indoform.context") : null;

  return (
    <section className="py-16 md:py-24">
      <Container className="max-w-5xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-cyan"
        >
          <ArrowLeft size={14} className="rtl:rotate-180" />
          {t("title")}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-cyan">
            {t(`items.${project.key}.category`)}
          </span>
          {project.licensedInIndonesia && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs font-medium text-cyan">
              <BadgeCheck size={13} />
              {t("licensedBadge")}
            </span>
          )}
          <StatusBadge status={project.status} />
        </div>

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-text md:text-4xl">
          {t(`items.${project.key}.name`)}
        </h1>
        <p className="mt-3 text-lg text-text-muted">
          {t(`items.${project.key}.tagline`)}
        </p>
        <p className="mt-5 max-w-2xl text-base text-text-muted">
          {t(`items.${project.key}.desc`)}
        </p>
        {context && (
          <p className="mt-3 text-sm font-medium text-cyan/90">{context}</p>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          {project.url && (
            <Button href={project.url} external showIcon>
              {t("viewLive")}
            </Button>
          )}
          <Button href="/projects" variant="secondary">
            {t("title")}
          </Button>
        </div>

        {project.showMockups && (
          <div className="mt-12 rounded-2xl border border-border bg-bg-elev/60 p-8 md:p-10">
            <ProjectMockups />
          </div>
        )}

        <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display text-lg font-semibold text-text">
              {t("roleLabel")}
            </h2>
            <p className="mt-2 text-sm text-text-muted">
              {t(`items.${project.key}.role`)}
            </p>

            <h2 className="mt-8 font-display text-lg font-semibold text-text">
              {t("stackLabel")}
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-bg-elev px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-text">
              {t("featuresLabel")}
            </h2>
            <ul className="mt-3 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-text-muted"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-cyan" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
