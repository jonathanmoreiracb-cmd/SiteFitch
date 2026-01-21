import { Banknote, CreditCard, Shield, ShoppingBag } from "lucide-react";

const benefits = [
  { label: "Garantia de Originalidade", Icon: Shield },
  { label: "Desconto no Pix/Dinheiro", Icon: Banknote },
  { label: "Parcelamento em ate 21x", Icon: CreditCard },
  { label: "Retirada na loja ou entrega combinada", Icon: ShoppingBag }
];

export default function BenefitsRow() {
  return (
    <div className="container-page mt-6">
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-stone bg-gray-50 px-6 py-5 text-[13px] text-neutral-600 shadow-soft lg:grid-cols-4 lg:px-8 lg:py-6">
        {benefits.map(({ label, Icon }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
            <span className="leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
