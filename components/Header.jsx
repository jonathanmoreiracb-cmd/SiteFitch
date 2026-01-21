"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  CreditCard,
  ShieldCheck,
  MapPin,
  Search,
  MessageCircle,
  X,
  Instagram
} from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const benefitItems = [
  { Icon: CreditCard, text: "Ate 21x no Cartao" },
  { Icon: ShieldCheck, text: "1 Ano de Garantia Apple" },
  { Icon: MapPin, text: "Retirada em Angra" }
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Produtos", href: "/catalogo" },
  { label: "Quem Somos", href: "/quem-somos" }
];

const primaryMenuLinks = [
  { label: "Quem Somos", href: "/quem-somos", icon: "lion" },
  { label: "Catalogo", href: "/catalogo", Icon: Search },
  {
    label: "Contatos",
    href: WHATSAPP_LINK,
    Icon: MessageCircle,
    external: true
  }
];

const supportLinks = [
  { label: "Trocas e Devolucoes", href: "/#contato" },
  { label: "Duvidas Frequentes", href: "/#faq" }
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/fitch.tecnologia",
    Icon: Instagram
  },
  { label: "TikTok", href: "https://www.tiktok.com", icon: "tiktok" }
];

const visualCategories = [
  {
    label: "iPhones Lacrados",
    href: "/catalogo?category=iPhones%20Lacrados",
    image:
      "/images/produtos/Iphone 16 branco/Screenshot_20260109_133504_Pontofrio.jpg"
  },
  {
    label: "Seminovos",
    href: "/catalogo?condition=Seminovo",
    image:
      "/images/produtos/Apple iPhone 11 Pro - Seminovo Premium/1.webp"
  },
  {
    label: "Android",
    href: "/catalogo?category=Android",
    image:
      "/images/produtos/Smartphone Xiaomi Redmi Note 14 256GB  8GB RAM - Lacrado/1.webp"
  },
  {
    label: "Apple",
    href: "/catalogo?brand=Apple",
    image:
      "/images/produtos/Apple Watch SE (2a Geracao) GPS 40mm - Novo Lacrado/D_NQ_NP_2X_875074-MLU77127019882_062024-F.webp"
  },
  {
    label: "Acessorios",
    href: "/catalogo?category=Acessorios",
    image:
      "/images/produtos/Apple AirTag - Kit com 4 Unidades (Pack C4)/D_Q_NP_793729-MLA99938078151_112025-F.webp"
  }
];

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const isCategoryActive = (href) => {
    const url = new URL(href, "http://localhost");
    if (url.pathname !== pathname) {
      return false;
    }

    const hrefParams = url.searchParams;
    const hasFilter =
      searchParams?.get("category") ||
      searchParams?.get("brand") ||
      searchParams?.get("condition");

    if (!hrefParams.toString()) {
      return !hasFilter;
    }

    for (const [key, value] of hrefParams.entries()) {
      if (searchParams?.get(key) !== value) {
        return false;
      }
    }

    return true;
  };

  return (
    <header className="bg-white">
      <div className="bg-gray-100">
        <div className="container-page overflow-hidden py-1.5 sm:py-2">
          <div className="flex w-max items-center gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 animate-[ticker_18s_linear_infinite] sm:hidden">
            {benefitItems.map((item) => {
              const Icon = item.Icon;
              return (
                <span
                  key={item.text}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  <span>{item.text}</span>
                </span>
              );
            })}
            {benefitItems.map((item) => {
              const Icon = item.Icon;
              return (
                <span
                  key={`${item.text}-dup`}
                  className="flex items-center gap-2 whitespace-nowrap"
                  aria-hidden="true"
                >
                  <Icon className="h-3 w-3" aria-hidden="true" />
                  <span>{item.text}</span>
                </span>
              );
            })}
          </div>

          <div className="hidden items-center justify-center gap-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:flex lg:text-xs">
            {benefitItems.map((item) => {
              const Icon = item.Icon;
              return (
                <span
                  key={item.text}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.text}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="container-page">
          <div className="grid h-12 grid-cols-[auto,1fr,auto] items-center sm:h-14 sm:grid-cols-[1fr_auto_1fr] lg:h-16">
            <div className="flex items-center">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 sm:hidden"
                aria-label="Abrir menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(true)}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 whitespace-nowrap sm:gap-3">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-brand text-[clamp(0.65rem,2.6vw,1rem)] uppercase tracking-[0.2em] text-white">
                  FITCH TECNOLOGIA
                </span>
                <img
                  src="/images/leao-fitch.png"
                  alt="Logo Fitch"
                  className="h-6 w-auto sm:h-7"
                />
              </Link>
            </div>

            <div className="flex items-center justify-end gap-4">
              <nav className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 sm:hidden"
                aria-label="Buscar"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="11" cy="11" r="6" />
                  <path d="M16 16l4 4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page py-4 sm:py-6">
        <form
          action="/catalogo"
          method="GET"
          className="mx-auto w-full max-w-2xl"
        >
          <div className="relative">
            <input
              type="text"
              name="q"
              placeholder="Buscar produtos..."
              className="input-base bg-gray-50 pr-12"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-stone text-neutral-500 transition hover:border-ink hover:text-ink"
              aria-label="Buscar"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="M16 16l4 4" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className="container-page pb-4 sm:pb-6">
        <div className="flex gap-4 overflow-x-auto pb-1 sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible md:flex-nowrap md:justify-center lg:justify-between">
          {visualCategories.map((category) => (
            <Link
              key={category.label}
              href={category.href}
              className="group flex w-20 flex-shrink-0 flex-col items-center gap-2 text-center text-[11px] font-semibold text-ink sm:w-24 sm:text-xs md:w-28 md:text-sm lg:w-32 lg:text-sm"
            >
              <span
                className={`flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm transition duration-300 sm:h-20 sm:w-20 sm:shadow-md md:h-24 md:w-24 md:group-hover:scale-110 md:group-hover:shadow-xl lg:h-28 lg:w-28 ${
                  isCategoryActive(category.href)
                    ? "border-ink"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="leading-tight">{category.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition sm:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-[85%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-stone px-6 py-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">
              Menu
            </span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-stone text-neutral-500 transition hover:border-ink hover:text-ink"
              onClick={closeMenu}
              aria-label="Fechar menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex flex-col gap-3 px-6 py-6">
            {primaryMenuLinks.map((item) => {
              const Icon = item.Icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 rounded-2xl border border-stone/80 bg-white px-4 py-3 text-[13px] font-semibold uppercase tracking-widest text-ink transition hover:border-ink font-brand"
                  onClick={closeMenu}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  {item.icon === "lion" ? (
                    <img
                      src="/images/leao-fitch.png"
                      alt=""
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  ) : (
                    Icon && (
                      <Icon
                        className="h-4 w-4 text-neutral-400 transition group-hover:text-ink"
                        aria-hidden="true"
                      />
                    )
                  )}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="px-6">
            <div className="h-px bg-stone" />
            <div className="mt-4 flex flex-col gap-3 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {supportLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-ink"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-auto px-6 pb-6 pt-6">
            <div className="flex items-center gap-3 pb-5">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-stone text-neutral-500 transition hover:border-ink hover:text-ink"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                >
                  {link.icon === "tiktok" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M14 5v7.2a3.8 3.8 0 1 1-3-3.7V12a1.8 1.8 0 1 0 2 1.8V5h1z" />
                      <path d="M14 5c.6 2 2.1 3.4 4 3.9" />
                    </svg>
                  ) : (
                    link.Icon && (
                      <link.Icon className="h-4 w-4" aria-hidden="true" />
                    )
                  )}
                </a>
              ))}
            </div>
            <a
              href={WHATSAPP_LINK}
              className="btn-primary w-full text-xs"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Falar com Especialista
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
