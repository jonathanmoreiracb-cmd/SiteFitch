import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import { products, getProductBySlug } from "@/lib/products";
import { formatBRL } from "@/lib/format";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { notFound } from "next/navigation";
import { CheckCircle, MapPin, Truck } from "lucide-react";

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <Header />
      <main className="container-page flex flex-col gap-8 py-10 pb-24 lg:gap-10 lg:py-12">
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[1.1fr,0.9fr] lg:items-start lg:gap-10">
          <ProductGallery images={product.images} name={product.name} />

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                {product.category}
              </p>
              <h1 className="mt-3 break-words text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap gap-2 text-xs text-neutral-500">
                {[product.storage, product.color, product.condition].map(
                  (item, index) => (
                    <span
                      key={`${item}-${index}`}
                      className="rounded-full border border-stone bg-neutral-100 px-3 py-1"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <p className="text-sm text-neutral-600 whitespace-pre-line">
              {product.fullDescription}
            </p>

            <div className="space-y-5 rounded-3xl border border-stone p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-2xl font-semibold text-ink sm:text-3xl">
                  {formatBRL(product.priceCash)}
                </p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">
                  a vista / pix / dinheiro
                </p>
              </div>
              <div className="grid gap-3 text-sm text-neutral-600">
                <div className="flex items-baseline justify-between gap-4 rounded-3xl border border-stone/70 bg-white px-4 py-3">
                  <span>12x no cartao</span>
                  <div className="text-right">
                    <span className="font-semibold text-ink">
                      {formatBRL(product.installment12xValue)}
                    </span>
                    <span className="ml-2 text-xs text-neutral-400">
                      total {formatBRL(product.installment12xTotal)}
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between gap-4 rounded-3xl border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-3">
                  <span>21x no cartao</span>
                  <div className="text-right">
                    <span className="font-semibold text-ink">
                      {formatBRL(product.installment21xValue)}
                    </span>
                    <span className="ml-2 text-xs text-neutral-400">
                      total {formatBRL(product.installment21xTotal)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              className="btn-primary w-full text-sm"
              target="_blank"
              rel="noreferrer"
            >
              Comprar no WhatsApp
            </a>

            <div className="rounded-3xl border border-stone bg-white p-6 text-sm text-neutral-600 shadow-soft space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 text-[#25D366]" />
                <p>Procedencia e garantia confirmadas</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-neutral-500" />
                <p>Retirada na loja com atendimento dedicado</p>
              </div>
              <div className="flex items-start gap-3">
                <Truck className="mt-0.5 h-4 w-4 text-neutral-500" />
                <p>Entrega sob combinacao pelo WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-stone bg-white p-4 shadow-lg lg:hidden">
        <a
          href={WHATSAPP_LINK}
          className="btn-primary w-full text-sm"
          target="_blank"
          rel="noreferrer"
        >
          Comprar no WhatsApp
        </a>
      </div>

      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}
