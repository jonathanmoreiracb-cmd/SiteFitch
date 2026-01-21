export const WHATSAPP_LINK = "https://wa.me/message/MYKINK5QVJ2LM1";

const deliveryNote =
  "Retirada na loja disponivel. Entrega sob combinacao no WhatsApp. Valor e prazo variam por regiao.";

export function buildWhatsAppMessage({ name, pricePix, price12x, price21x }) {
  return `Ola! Quero comprar: ${name}
A vista (Pix/Dinheiro - condicao especial): ${pricePix}
12x: ${price12x}
21x: ${price21x}
Podem confirmar estoque e me informar retirada/entrega (combinando antes)?
${deliveryNote}`;
}
