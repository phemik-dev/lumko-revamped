"use client";

import { useState } from "react";
import Button from "./Button";

type MenuKey = "product" | "solutions" | "developers" | "resources" | "company";

const links: { key: MenuKey; label: string }[] = [
  { key: "product", label: "Product" },
  { key: "solutions", label: "Solutions" },
  { key: "developers", label: "Developers" },
  { key: "resources", label: "Resources" },
  { key: "company", label: "Company" }
];

const menuItems: Record<MenuKey, string[]> = {
  product: ["How it works", "Security by design", "Data model", "Compliance"],
  solutions: ["Health Systems", "Life Sciences", "Payers", "Public Health"],
  developers: ["API overview", "Documentation", "SDKs", "Sandbox"],
  resources: ["Blog", "Case studies", "Whitepapers", "Support"],
  company: ["About us", "Careers", "Newsroom", "Contact"]
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-5 px-6 py-4 sm:px-8">
        <a className="text-2xl font-black tracking-normal text-ink" href="#top" aria-label="LumkoMDX home">
          <span>Lumko</span>
          <span className="text-blue">MDX</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main navigation">
          {links.map((link) => (
            <button
              className="flex items-center gap-2 text-sm font-bold text-ink transition hover:text-blue"
              key={link.key}
              onClick={() => setOpenMenu(openMenu === link.key ? null : link.key)}
              onMouseEnter={() => setOpenMenu(link.key)}
              type="button"
            >
              {link.label}
              <span className="text-[10px] text-muted">v</span>
            </button>
          ))}
        </nav>

        <Button href="#demo" variant="primary" className="hidden px-6 py-2.5 text-sm sm:inline-flex">
          Request demo
        </Button>
      </div>

      {openMenu && (
        <div className="hidden border-t border-line bg-white shadow-soft lg:block" onMouseLeave={() => setOpenMenu(null)}>
          <div className="mx-auto grid w-full max-w-[1320px] grid-cols-[1fr_310px] gap-8 px-8 py-7">
            <div className="grid grid-cols-5 gap-6">
              {links.map((link) => (
                <div className="border-r border-line last:border-r-0" key={link.key}>
                  <p className="text-sm font-black text-blue">{link.label}</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted">
                    {menuItems[link.key].map((item) => (
                      <li className="font-semibold hover:text-ink" key={item}>
                        <a href={item === "How it works" ? "#how-it-works" : "#demo"}>{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-line bg-[#f7fbff] p-6">
              <p className="text-2xl font-black leading-tight text-ink">See the platform in action.</p>
              <p className="mt-3 text-sm leading-6 text-muted">Explore a sample clinical cohort in minutes.</p>
              <div className="mt-5">
                <Button href="#demo" variant="secondary">
                  Request demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
