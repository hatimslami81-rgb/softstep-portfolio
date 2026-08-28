import { cn } from "@/lib/utils";

export default function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl md:text-4xl",
  };

  return (
    <span
      className={cn(
        "font-display font-bold tracking-tight",
        sizes[size],
        className
      )}
    >
      <span className="text-text">Soft</span>
      <span className="text-cyan">Step</span>
    </span>
  );
}
