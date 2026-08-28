import type { ReactNode } from "react";
import WhatsAppIcon from "@/components/brand/WhatsAppIcon";
import { cn } from "@/lib/utils";

export default function WhatsAppButton({
  href,
  children,
  className,
  subtitle,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  subtitle?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex min-w-[min(100%,280px)] items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold text-white transition-all duration-200",
        "bg-[#25D366] hover:bg-[#20BD5A] hover:shadow-[0_8px_28px_rgba(37,211,102,0.38)] hover:-translate-y-0.5 active:translate-y-0",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-bg",
        className
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
        <WhatsAppIcon size={22} />
      </span>
      <span className="flex flex-col items-start leading-tight" dir="ltr">
        <span>{children}</span>
        {subtitle && (
          <span className="mt-0.5 text-xs font-medium text-white/90">{subtitle}</span>
        )}
      </span>
    </a>
  );
}
