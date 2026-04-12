import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  /** "default" = gap-2, 16px icon. "sm" = gap-1.5, text-sm, 14px icon. */
  size?: "default" | "sm";
  className?: string;
}

export function IconLink({
  href,
  icon: Icon,
  label,
  size = "default",
  className,
}: IconLinkProps) {
  const isExternal = !href.startsWith("mailto");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground rounded-sm",
        size === "sm" ? "gap-1.5 text-sm" : "gap-2",
        className
      )}
    >
      <Icon size={size === "sm" ? 14 : 16} />
      <span>{label}</span>
    </a>
  );
}
