import Link from "next/link";
import type { ReactNode } from "react";

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
}) {
  return (
    <Link href={href} className={`button button-${variant} ${className}`}>
      <span>{children}</span>
    </Link>
  );
}
