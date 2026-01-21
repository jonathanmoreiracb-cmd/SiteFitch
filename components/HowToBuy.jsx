import { CreditCard, MessageCircle, Search, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    label: "Explore nosso catalogo e selecione o produto desejado.",
    Icon: Search
  },
  {
    number: "02",
    label: "Inicie um atendimento personalizado via WhatsApp.",
    Icon: MessageCircle
  },
  {
    number: "03",
    label: "Confirmamos disponibilidade, cor e detalhes de pagamento.",
    Icon: CreditCard
  },
  {
    number: "04",
    label: "Receba via entrega expressa ou retire em nossas lojas.",
    Icon: Truck
  }
];

export default function HowToBuy() {
  return (
    <section id="como-comprar" className="container-page py-16">
      <div className="mb-10 flex flex-col items-center gap-3 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
          ATENDIMENTO PREMIUM
        </p>
        <h2 className="text-2xl font-semibold text-ink lg:text-3xl">
          Como comprar na Fitch Tecnologia?
        </h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-4">
        {steps.map(({ number, label, Icon }, index) => (
          <div key={number} className="relative">
            {index !== 0 && (
              <span className="absolute -top-6 left-7 h-6 w-px border-l border-dashed border-gray-200 lg:hidden" />
            )}
            <div className="card flex gap-4 rounded-2xl border border-gray-100 p-4 shadow-sm transition lg:flex-col lg:p-6 lg:hover:-translate-y-1 lg:hover:shadow-lg">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-gray-50 text-ink">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="text-lg font-semibold text-ink lg:text-3xl">
                  {number}
                </div>
              </div>
              <p className="text-sm text-neutral-600 lg:mt-2">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
