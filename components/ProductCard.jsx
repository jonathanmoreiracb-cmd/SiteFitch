import Link from "next/link";
import { formatBRL } from "@/lib/format";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

export default function ProductCard({ product }) {
  return (
    <div className="card flex h-full flex-col overflow-hidden">
      <Link href={`/produto/${product.slug}`} className="group">
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-neutral-100 p-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
              {product.category}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-ink">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              {product.storage} / {product.color} / {product.condition}
            </p>
          </div>
          <div className="mt-auto space-y-3 border-t border-stone/70 pt-3 text-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-lg font-semibold text-ink">
                {formatBRL(product.priceCash)}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400">
                a vista / pix/dinheiro
              </p>
            </div>
            <div className="grid gap-2 text-xs text-neutral-500">
              <div className="flex items-baseline justify-between gap-3">
                <span>12x no cartao</span>
                <div className="text-right">
                  <span className="font-semibold text-ink">
                    {formatBRL(product.installment12xValue)}
                  </span>
                  <span className="ml-2 text-[11px] text-neutral-400">
                    total {formatBRL(product.installment12xTotal)}
                  </span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span>21x no cartao</span>
                <div className="text-right">
                  <span className="font-semibold text-ink">
                    {formatBRL(product.installment21xValue)}
                  </span>
                  <span className="ml-2 text-[11px] text-neutral-400">
                    total {formatBRL(product.installment21xTotal)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-5 pt-0">
        <a
          href={WHATSAPP_LINK}
          className="btn-primary w-full text-xs"
          target="_blank"
          rel="noreferrer"
        >
          Comprar no WhatsApp
        </a>
      </div>
    </div>
  );
}
