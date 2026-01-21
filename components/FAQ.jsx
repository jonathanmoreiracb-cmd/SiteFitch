"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const faqSections = [
  {
    title: "Produtos e Garantia",
    items: [
      {
        question: "Os produtos sao originais?",
        answer:
          "Sim, trabalhamos exclusivamente com produtos 100% originais. Os modelos lacrados acompanham todos os acessorios de fabrica e os seminovos sao rigorosamente testados antes da venda."
      },
      {
        question: "Qual o prazo de garantia?",
        answer:
          "Para produtos Apple Novos/Lacrados, a garantia e de 1 ano (Mundial Apple). Para todos os outros produtos (Androids, Seminovos, Eletronicos e Acessorios), a garantia e de 3 meses (90 dias) contra defeitos de fabricacao pela Fitch Tecnologia."
      }
    ]
  },
  {
    title: "Pagamentos e Trocas",
    items: [
      {
        question: "Quais as formas de pagamento?",
        answer:
          "Aceitamos todos os cartoes de credito com parcelamento em ate 21x. Para pagamentos via Pix ou Dinheiro, oferecemos descontos exclusivos."
      },
      {
        question: "Posso dar meu iPhone usado como parte do pagamento?",
        answer:
          "Sim! Avaliamos seu iPhone usado como entrada na troca por um novo. A avaliacao e feita presencialmente em uma de nossas lojas."
      }
    ]
  },
  {
    title: "Entrega e Retirada",
    items: [
      {
        question: "Como funciona a entrega em Angra dos Reis?",
        answer:
          "Voce pode optar pela retirada imediata em nossas lojas (Centro ou Shopping Piratas) ou combinar a entrega via motoboy ou equipe propria atraves do nosso WhatsApp."
      },
      {
        question: "Voces enviam para outras cidades?",
        answer:
          "Sim, realizamos envios via Correios ou Transportadora com seguro total da mercadoria. Consulte o frete para sua regiao via WhatsApp."
      }
    ]
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="container-page py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[800px]">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
          Duvidas frequentes
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-ink lg:text-4xl">
          Respostas rapidas para sua compra
        </h2>

        <div className="mt-10 space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                {section.title}
              </p>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => {
                  const id = `${sectionIndex}-${itemIndex}`;
                  const isOpen = openId === id;
                  return (
                    <div
                      key={item.question}
                      className="rounded-2xl border border-gray-100 bg-white shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => handleToggle(id)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <span className="text-sm font-semibold text-ink">
                          {item.question}
                        </span>
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 text-neutral-500 transition ${
                            isOpen ? "rotate-45 text-ink" : ""
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </span>
                      </button>
                      <div
                        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${
                          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden px-5 pb-4 text-sm text-gray-600">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-neutral-600">
            Ainda tem duvidas?
          </p>
          <a
            href={WHATSAPP_LINK}
            className="btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
