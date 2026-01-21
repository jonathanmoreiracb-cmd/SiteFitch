"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const modalContent = {
  trocas: {
    title: "Politica de Trocas e Garantia - Fitch Tecnologia",
    description: [
      {
        text: "Na Fitch Tecnologia, trabalhamos com transparencia total sobre a garantia de seus produtos:"
      },
      {
        label: "Direito de Arrependimento: ",
        text: "Para compras online, voce tem ate 7 dias corridos apos o recebimento para solicitar a devolucao, desde que o produto esteja com embalagem original e sem marcas de uso."
      },
      {
        label: "Garantia Apple Lacrado: ",
        text: "Exclusivamente para iPhones e produtos Apple novos/lacrados, a garantia e de 1 (um) ano diretamente com a Apple (garantia mundial)."
      },
      {
        label: "Garantia Geral (Outros Produtos): ",
        text: "Todos os demais produtos (Xiaomi, Android, Eletronicos, Acessorios) e toda a linha de Seminovos possuem garantia de 3 meses (90 dias) contra defeitos de fabricacao."
      },
      {
        label: "Condicoes: ",
        text: "A garantia nao cobre danos por mau uso, quedas ou contato com liquidos. O produto deve estar com os selos de garantia da loja preservados."
      }
    ]
  },
  privacidade: {
    title: "Privacidade e Seguranca dos Seus Dados",
    description: [
      {
        text: "Sua privacidade e prioridade. Em conformidade com a LGPD:"
      },
      {
        label: "Dados: ",
        text: "Coletamos apenas o necessario para entrega e faturamento do seu pedido."
      },
      {
        label: "Seguranca: ",
        text: "Nosso site utiliza criptografia SSL para proteger suas informacoes."
      },
      {
        label: "Uso: ",
        text: "Seus dados nunca sao compartilhados com terceiros e sao usados apenas para a sua experiencia de compra na Fitch Tecnologia."
      }
    ]
  },
  termos: {
    title: "Termos e Condicoes de Compra",
    description: [
      {
        label: "Precos e Estoque: ",
        text: "Valores e disponibilidade podem mudar sem aviso previo. Erros de digitacao estao sujeitos a correcao."
      },
      {
        label: "Pagamentos: ",
        text: "Parcelamento em ate 21x sujeito a aprovacao e taxas. Descontos a vista exclusivos para Pix ou Dinheiro."
      },
      {
        label: "Prazos de Garantia: ",
        text: "O cliente declara estar ciente de que o prazo de garantia e de 1 ano apenas para Apple Lacrado e de 3 meses para os demais produtos do catalogo."
      },
      {
        label: "Entrega: ",
        text: "Entregas em Angra dos Reis e retiradas em nossas lojas (Centro ou Shopping Piratas) devem ser coordenadas via WhatsApp."
      }
    ]
  }
};

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);
  const content = activeModal ? modalContent[activeModal] : null;

  return (
    <footer id="contato" className="bg-ink text-white">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-full border border-white/20 bg-black">
              <img
                src="/images/logo-fitch.jpeg"
                alt="Fitch Tecnologia"
                className="h-10 w-10 object-cover"
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white">
                Fitch Tecnologia
              </h3>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/60">
                Tecnologia premium em Angra dos Reis
              </p>
            </div>
          </div>
          <p className="text-sm text-white/60">
            Sua referencia em Apple e tecnologia premium na Costa Verde.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/fitch.tecnologia"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M14.5 8.5H17V5h-2.6C12 5 10.5 6.6 10.5 9v2H8v3h2.5v5h3v-5h2.9l.4-3h-3.3V9.3c0-.5.3-.8 1-.8z" />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
            >
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
            </a>
          </div>
          <a
            href="https://www.instagram.com/fitch.tecnologia"
            className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink transition hover:bg-white/90"
            target="_blank"
            rel="noreferrer"
          >
            Acesse nosso Instagram
          </a>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">
            Institucional
          </p>
          <ul className="space-y-2 text-white/60">
            <li>
              <a href="/" className="transition hover:text-white hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a
                href="/catalogo"
                className="transition hover:text-white hover:underline"
              >
                Produtos
              </a>
            </li>
            <li>
              <a
                href="/catalogo?brand=Apple"
                className="transition hover:text-white hover:underline"
              >
                iPhones
              </a>
            </li>
            <li>
              <a
                href="/catalogo?q=Watch"
                className="transition hover:text-white hover:underline"
              >
                Apple Watch
              </a>
            </li>
            <li>
              <a
                href="/catalogo?category=Android"
                className="transition hover:text-white hover:underline"
              >
                Android
              </a>
            </li>
            <li>
              <a
                href="/quem-somos"
                className="transition hover:text-white hover:underline"
              >
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="/#novidades"
                className="transition hover:text-white hover:underline"
              >
                Blog / Novidades
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">
            Ajuda e suporte
          </p>
          <ul className="space-y-2 text-white/60">
            <li>
              <button
                type="button"
                onClick={() => setActiveModal("trocas")}
                className="transition hover:text-white hover:underline"
              >
                Trocas e devolucoes
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setActiveModal("privacidade")}
                className="transition hover:text-white hover:underline"
              >
                Politica de privacidade
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setActiveModal("termos")}
                className="transition hover:text-white hover:underline"
              >
                Termos de uso
              </button>
            </li>
            <li>
              <a
                href="/#faq"
                className="transition hover:text-white hover:underline"
              >
                Duvidas frequentes
              </a>
            </li>
          </ul>
          <div className="space-y-2 pt-2">
            <a
              href={WHATSAPP_LINK}
              className="inline-flex items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#25D366] transition hover:bg-[#25D366] hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <div className="text-xs text-white/60">
              WhatsApp: (24) 99974-3888
            </div>
            <div className="text-xs text-white/60">
              Instagram: @fitch.tecnologia
            </div>
          </div>
        </div>

        <div className="space-y-4 text-sm text-white/60">
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">
            Nossas lojas
          </p>
          <div className="space-y-4">
            <div>
              <div className="flex items-start gap-2 text-white/90">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Loja Centro</p>
                  <a
                    href="https://maps.app.goo.gl/UY6V22L3Uiv4kdch8"
                    className="text-white/70 transition hover:text-white hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tv. Eloy Fonseca, 25 - Centro, Angra dos Reis - RJ, 23900-282
                  </a>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-white/50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>Segunda a sexta: 09:00 as 18:30</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-white/50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>Sabado: 09:00 as 14:00</span>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-2 text-white/90">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-4 w-4 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
                <div>
                  <p className="font-semibold text-white">
                    Loja Shopping Piratas
                  </p>
                  <a
                    href="https://share.google/5134S0viJaomDZfeK"
                    className="text-white/70 transition hover:text-white hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Estr. das Marinas, 91 - Praia do Jardim, Angra dos Reis - RJ,
                    23907-900
                  </a>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-white/50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>Segunda a sabado: 10:00 as 22:00</span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-xs text-white/50">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 7v5l3 2" />
                </svg>
                <span>Domingo: 15:00 as 21:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {content && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-white p-6 text-ink shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition hover:border-neutral-300 hover:text-neutral-700"
              aria-label="Fechar modal"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              {content.title}
            </h3>
            <div className="mt-4 space-y-3 text-sm text-neutral-600">
              {content.description.map((item, index) => (
                <p key={`${content.title}-${index}`}>
                  {item.label && (
                    <span className="font-semibold text-ink">
                      {item.label}
                    </span>
                  )}
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Formas de pagamento
            </span>
            <div className="flex flex-wrap gap-2">
              {["Pix", "Visa", "Master", "Elo", "Apple Pay"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-wide text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/70">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V8a4 4 0 1 1 8 0v3" />
            </svg>
            Site seguro SSL
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-2 py-6 text-center text-xs text-white/50">
          <span className="uppercase tracking-[0.2em]">
            Fitch Tecnologia - Angra dos Reis
          </span>
          <span className="text-[11px] uppercase tracking-[0.25em]">
            CNPJ: 52.311.538/0001-10 - Fitch Tecnologia Ltda.
          </span>
        </div>
      </div>
    </footer>
  );
}
