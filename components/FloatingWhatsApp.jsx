export default function FloatingWhatsApp({ href }) {
  return (
    <a
      href={href}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      aria-label="Comprar no WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-xs font-semibold">WA</span>
    </a>
  );
}
