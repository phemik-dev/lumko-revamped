import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "link";
  className?: string;
};

export default function Button({ children, href, variant = "secondary", className = "" }: ButtonProps) {
  const base =
    "inline-flex min-h-12 items-center justify-center gap-3 rounded-lg text-base font-extrabold transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue/25";

  const styleByVariant = {
    primary:
      "bg-gold-gradient px-9 py-3.5 text-ink shadow-gold hover:-translate-y-0.5 hover:shadow-gold-lg",
    secondary:
      "border border-blue/25 bg-white px-7 py-3 text-blue shadow-soft hover:border-blue hover:bg-blue/5",
    link: "min-h-0 px-0 py-0 text-blue hover:text-[#034b9c]"
  };

  return (
    <a className={`${base} ${styleByVariant[variant]} ${className}`} href={href}>
      {children}
      {(variant === "primary" || variant === "link") && <span className="text-2xl leading-none">-&gt;</span>}
    </a>
  );
}
