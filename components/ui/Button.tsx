import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  showIcon?: boolean;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: () => void;
}

interface ButtonElProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-[#05070d] hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-border text-text hover:border-cyan hover:text-cyan hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-text-muted hover:text-cyan",
};

export default function Button(props: LinkButtonProps | ButtonElProps) {
  const { children, variant = "primary", className, external, showIcon } = props;
  const classes = cn(base, variants[variant], className);

  if (props.href) {
    if (external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={props.onClick}
        >
          {children}
          {showIcon && <ArrowUpRight size={16} />}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
        {showIcon && <ArrowUpRight size={16} />}
      </Link>
    );
  }

  const buttonProps = props as ButtonElProps;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      className={classes}
    >
      {children}
      {showIcon && <ArrowUpRight size={16} />}
    </button>
  );
}
