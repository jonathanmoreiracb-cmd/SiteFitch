const noticeItems = [
  "Retirada na loja disponivel.",
  "Entrega disponivel apenas sob combinacao no WhatsApp.",
  "Valor e prazo de entrega variam por regiao."
];

export default function NoticeBlock() {
  return (
    <div className="card flex flex-col gap-3 bg-stone px-6 py-4 text-sm text-neutral-700">
      {noticeItems.map((item) => (
        <div key={item} className="flex items-start gap-2">
          <span className="text-xs font-semibold text-neutral-500">INFO</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
