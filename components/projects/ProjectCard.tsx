"use client";

import { useRef, type MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import StatusBadge from "./StatusBadge";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const t = useTranslations("projects");
  const ref = useRef<HTMLElement>(null);

  function handleMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--y", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elev p-7 transition-colors duration-200 hover:border-cyan/50"
      style={{
        // pointer-tracked highlight
        backgroundImage:
          "radial-gradient(600px circle at var(--x, 50%) var(--y, 0%), rgba(0,210,255,0.06), transparent 40%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-cyan">
          {t(`items.${project.key}.category`)}
        </span>
        <div className="flex flex-wrap items-center gap-2">
          {project.licensedInIndonesia && (
            <span className="inline-flex items-center gap-1 rounded-full border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-medium text-cyan">
              <BadgeCheck size={11} />
              {t("licensedBadge")}
            </span>
          )}
          <StatusBadge status={project.status} />
        </div>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-text">
        {t(`items.${project.key}.name`)}
      </h3>
      <p className="mt-1 text-sm font-medium text-text-muted">
        {t(`items.${project.key}.tagline`)}
      </p>
      <p className="mt-3 text-sm text-text-muted">
        {t(`items.${project.key}.desc`)}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-bg px-2.5 py-1 text-[11px] font-medium text-text-muted transition-colors group-hover:border-cyan/30"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-cyan"
        >
          {t("viewDetails")}
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5"
          />
        </Link>

        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan transition-transform group-hover:translate-x-0.5"
          >
            {t("viewLive")}
            <ArrowUpRight size={14} />
          </a>
        ) : project.status === "offline" ? (
          <span className="text-sm font-medium text-text-muted/60">
            {t("statusOffline")}
          </span>
        ) : null}
      </div>
    </motion.article>
  );
}
