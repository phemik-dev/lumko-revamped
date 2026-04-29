import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "white" | "soft" | "dark";
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "white",
  className = ""
}: SectionProps) {
  const toneClass = {
    white: "bg-white text-ink",
    soft: "bg-surface text-ink",
    dark: "bg-navy text-white"
  };

  return (
    <section className={`relative overflow-hidden ${toneClass[tone]} ${className}`} id={id}>
      {tone !== "dark" && (
        <>
          <div className="dot-field left-0 top-0" />
          <div className="dot-field bottom-6 right-0 hidden sm:block" />
          <div className="wave-field" />
        </>
      )}
      <div className="relative mx-auto w-full max-w-[1320px] px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.22em] text-blue">{eyebrow}</p>}
          <h2 className="text-balance text-4xl font-black leading-[1.08] tracking-normal text-current sm:text-5xl lg:text-[58px]">
            {title}
          </h2>
          {subtitle && <p className="mx-auto mt-5 max-w-3xl text-xl leading-8 text-muted">{subtitle}</p>}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
