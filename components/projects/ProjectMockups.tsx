import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function ProjectMockups({ className }: { className?: string }) {
  const t = useTranslations("projects");

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-6 sm:flex-row sm:items-end",
        className
      )}
    >
      {/* Laptop / vendor dashboard */}
      <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
        <div className="rounded-t-xl border border-border bg-bg-elev-2 px-3 pt-3">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate-500" />
            <span className="h-2 w-2 rounded-full bg-slate-500" />
            <span className="h-2 w-2 rounded-full bg-slate-500" />
          </div>
          <div className="overflow-hidden rounded-t-md border border-border bg-bg">
            <div className="flex items-center justify-between border-b border-border px-3 py-2">
              <span className="text-[10px] font-medium uppercase tracking-wide text-cyan">
                {t("mockupDashboard")}
              </span>
              <span className="h-1.5 w-12 rounded-full bg-border" />
            </div>
            <div className="grid grid-cols-3 gap-2 p-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-10 rounded-md border border-border bg-bg-elev"
                />
              ))}
            </div>
            <div className="space-y-1.5 px-3 pb-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-6 items-center gap-2 rounded border border-border/60 bg-bg-elev/60 px-2"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan/60" />
                  <span className="h-1.5 flex-1 rounded-full bg-border" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-2 rounded-b-md border border-t-0 border-border bg-bg-elev" />
        <div className="mx-auto h-1.5 w-1/3 rounded-b-md bg-border" />
      </div>

      {/* Phone / mobile app */}
      <div className="relative w-[140px] shrink-0 sm:w-[150px] sm:-ms-6 sm:mb-2">
        <div className="rounded-[1.5rem] border-2 border-border bg-bg p-1.5 shadow-card">
          <div className="overflow-hidden rounded-[1.15rem] border border-border bg-bg-elev">
            <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-border" />
            <div className="px-2.5 pb-3 pt-3">
              <p className="text-[9px] font-medium uppercase tracking-wide text-cyan">
                {t("mockupMobile")}
              </p>
              <div className="mt-2 h-16 rounded-lg bg-brand-gradient opacity-80" />
              <div className="mt-2 space-y-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-5 rounded-md border border-border bg-bg"
                  />
                ))}
              </div>
              <div className="mt-3 h-7 rounded-full bg-cyan/90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
