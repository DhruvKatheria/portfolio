"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Monogram } from "@/components/ui/Monogram";
import { Stripe } from "@/components/ui/Stripe";
import type { NavItem } from "@/types";

type Props = {
  name: string;
  items: NavItem[];
  resumeHref: string | null;
};

export function Navbar({ name, items, resumeHref }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const close = () => window.innerWidth >= 768 && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", close);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-night/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 rounded-md" onClick={() => setOpen(false)}>
          <Monogram size={34} />
          <span className="hidden text-sm font-medium tracking-tight text-chalk sm:inline">{name}</span>
          <span className="sr-only sm:hidden">{name}, home</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={`/${item.href}`}
                className="rounded-full px-3.5 py-2 text-sm text-mist transition-colors hover:text-chalk"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {resumeHref ? (
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-10 items-center gap-1.5 rounded-full border border-line-strong px-4 text-sm text-chalk transition-colors hover:border-chalk/40 hover:bg-turf md:inline-flex"
            >
              Resume <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : null}
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line-strong text-chalk md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-night md:hidden">
          <div className="container-page flex h-full flex-col py-8">
            <p className="kicker flex items-center gap-3 text-mist">
              <Stripe className="h-3 w-3 rounded-[1px]" width={1.5} /> Team sheet
            </p>
            <ul className="mt-6 flex flex-col">
              {items.map((item, i) => (
                <li key={item.href} className="border-b border-line">
                  <a
                    href={`/${item.href}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-4"
                  >
                    <span className="display text-5xl text-chalk">{item.label}</span>
                    <span className="kicker text-fog">{String(i + 1).padStart(2, "0")}</span>
                  </a>
                </li>
              ))}
            </ul>
            {resumeHref ? (
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-chalk text-sm font-medium text-night"
              >
                Resume <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
