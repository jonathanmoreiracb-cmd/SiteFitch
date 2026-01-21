import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Clock, ShieldCheck } from "lucide-react";

const authorityItems = [
  {
    title: "Time Expert",
    text: "Equipe de 10 Especialistas Apple prontos para te atender.",
    Icon: Users
  },
  {
    title: "Horario Extendido",
    text: "Flexibilidade total: Unidades abertas das 09h as 22h.",
    Icon: Clock
  },
  {
    title: "Procedencia",
    text: "Produtos 100% originais com garantia e suporte tecnico dedicado.",
    Icon: ShieldCheck
  }
];

const stores = [
  {
    name: "Unidade Centro",
    image: "/images/loja-bento/loja-centro-1.jpg",
    address: "Tv. Eloy Fonseca, 25 - Centro.",
    hours: "Seg a Sex (09h as 18:30) | Sab (09h as 14h).",
    mapUrl:
      "https://www.google.com/maps?q=Tv.+Eloy+Fonseca,+25+-+Centro,+Angra+dos+Reis"
  },
  {
    name: "Unidade Shopping Piratas",
    image: "/images/loja-bento/loja-shopping-1.jpeg",
    address: "Estr. das Marinas, 91 - Praia do Jardim.",
    hours: "Seg a Sab (10h as 22h) | Dom (15h as 21h).",
    mapUrl:
      "https://www.google.com/maps?q=Estr.+das+Marinas,+91+-+Praia+do+Jardim,+Angra+dos+Reis"
  }
];

export default function QuemSomosPage() {
  return (
    <div className="bg-white">
      <Header />
      <main className="container-page py-12 sm:py-16 lg:py-20">
        <section className="flex flex-col gap-6 lg:gap-8">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Quem Somos
            </p>
            <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl">
              Fitch Tecnologia: A Maior Estrutura Premium de Angra
            </h1>
            <p className="mt-4 text-sm text-neutral-600 sm:text-base">
              2 Lojas Fisicas - A experiencia de compra que so o maior time de
              especialistas Apple da regiao pode oferecer.
            </p>
          </div>

          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-neutral-600">
            <p>
              A Fitch Tecnologia nasceu de um proposito claro: elevar o padrao
              de consumo tecnologico na Costa Verde. Especialistas em Apple e
              nas principais marcas mundiais, nao somos apenas uma loja de
              eletronicos, mas um centro de experiencia para quem busca o que ha
              de melhor no mundo digital.
            </p>
            <p>
              Com duas unidades fisicas estrategicamente localizadas em Angra
              dos Reis - no Centro e no Shopping Piratas - oferecemos aos nossos
              clientes a seguranca de um atendimento presencial combinado com a
              agilidade do mercado online.
            </p>
            <p>
              Nosso compromisso vai alem da venda. Trabalhamos com produtos de
              procedencia garantida, oferecendo 1 ano de garantia para a linha
              Apple Lacrada e suporte completo para todo o nosso catalogo. Na
              Fitch, voce encontra condicoes exclusivas, como o parcelamento em
              ate 21x, garantindo que a tecnologia de ponta esteja sempre ao seu
              alcance com total transparencia e confianca.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
          {authorityItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-3xl border border-stone bg-white p-5 shadow-soft"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-stone bg-white text-ink">
                <item.Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-xs text-neutral-600">{item.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 space-y-6 lg:mt-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Nossas Unidades
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-ink sm:text-3xl">
              Presenca estrategica com atendimento premium
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              Atendimento presencial com time especialista e suporte completo
              para sua compra.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {stores.map((store) => (
              <article
                key={store.name}
                className="rounded-3xl border border-stone bg-white p-5 shadow-soft"
              >
                <div className="group overflow-hidden rounded-3xl">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 space-y-3">
                  <h3 className="text-xl font-semibold text-ink">
                    {store.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{store.address}</p>
                  <p className="text-sm text-neutral-600">{store.hours}</p>
                  <a
                    href={store.mapUrl}
                    className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-900"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Como Chegar (Maps)
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 lg:mt-16">
          <div className="rounded-3xl border border-stone bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              Manifesto de Marca
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Na Fitch, voce nao e apenas um cliente, mas um parceiro em sua
              jornada tecnologica. Nao escondemos detalhes. Nossas descricoes
              sao honestas e nosso suporte esta sempre pronto para responder
              todas as suas duvidas.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
