import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/projects";

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const t = useTranslations("projects");

  const config: Record<ProjectStatus, { label: string; dot: string; text: string }> = {
    live: { label: t("statusLive"), dot: "bg-emerald-400", text: "text-emerald-300" },
    offline: { label: t("statusOffline"), dot: "bg-slate-500", text: "text-slate-400" },
    mixed: { label: t("statusMixed"), dot: "bg-amber-400", text: "text-amber-300" },
  };

  const { label, dot, text } = config[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-elev px-2.5 py-1 text-xs font-medium",
        text
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {label}
    </span>
  );
}
