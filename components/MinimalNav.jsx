"use client";

import Link from "next/link";
import { Fragment } from "react";

const defaultLinks = [
  { label: "Home", href: "/" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Contato", href: "#contato" }
];

const toneStyles = {
  light: {
    link: "text-white/70 hover:text-white focus-visible:text-white",
    separator: "text-white/35"
  },
  dark: {
    link: "text-neutral-500 hover:text-ink focus-visible:text-ink",
    separator: "text-neutral-300"
  }
};

export default function MinimalNav({
  tone = "dark",
  className = "",
  linkClassName = "",
  separatorClassName = "",
  links = defaultLinks
}) {
  const styles = toneStyles[tone] ?? toneStyles.dark;
  const linkStyles = `${styles.link} ${linkClassName}`.trim();
  const separatorStyles = `${styles.separator} ${separatorClassName}`.trim();
  const items = Array.isArray(links) ? links : defaultLinks;

  return (
    <nav
      aria-label="Navegacao principal"
      className={`flex flex-wrap items-center gap-3 text-[10px] font-light uppercase tracking-[0.35em] sm:text-[11px] ${className}`}
    >
      {items.map((link, index) => (
        <Fragment key={link.label}>
          {index > 0 && (
            <span aria-hidden="true" className={separatorStyles}>
              |
            </span>
          )}
          {link.href.startsWith("#") ? (
            <a
              href={link.href}
              className={`transition focus-visible:outline-none focus-visible:underline ${linkStyles}`}
            >
              {link.label}
            </a>
          ) : (
            <Link
              href={link.href}
              className={`transition focus-visible:outline-none focus-visible:underline ${linkStyles}`}
            >
              {link.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
