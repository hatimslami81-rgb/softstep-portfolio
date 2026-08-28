import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Chip({
  children,
  className,
  active,
  as,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  active?: boolean;
  as?: ElementType;
  onClick?: () => void;
}) {
  const Tag: ElementType = as ?? "span";
  return (
    <Tag
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors duration-200",
        active
          ? "border-cyan bg-cyan/10 text-cyan"
          : "border-border bg-bg-elev text-text-muted",
        Tag === "button" && "hover:border-cyan hover:text-cyan cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
