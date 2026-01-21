import HeroCarousel from "@/components/HeroCarousel";
import BenefitsRow from "@/components/BenefitsRow";
import ProductCard from "@/components/ProductCard";
import HowToBuy from "@/components/HowToBuy";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { products } from "@/lib/products";

export default function Home() {
  const categoryPriority = [
    "iPhones Lacrados",
    "iPhones Seminovos",
    "Apple",
    "Android",
    "Video Games",
    "Acessorios"
  ];
  const excludedFeaturedNames = new Set([
    "Tablet Samsung Galaxy Tab A9 64GB (4G + Wi-Fi) - Lacrado"
  ]);
  const featuredPool = products.filter(
    (product) => !excludedFeaturedNames.has(product.name)
  );
  const featuredMap = new Map();
  featuredPool.forEach((product) => {
    if (!featuredMap.has(product.category)) {
      featuredMap.set(product.category, product);
    }
  });
  const featured = [
    ...categoryPriority
      .map((category) => featuredMap.get(category))
      .filter(Boolean),
    ...[...featuredMap.entries()]
      .filter(([category]) => !categoryPriority.includes(category))
      .map(([, product]) => product)
  ].slice(0, 6);
  const storeGallery = [
    {
      src: "/images/loja-bento/loja-centro-1.jpg",
      alt: "Unidade Centro",
      label: "📍 Unidade Centro",
      className: "lg:col-span-5 lg:row-span-2"
    },
    {
      src: "/images/loja-bento/loja-shopping-1.jpeg",
      alt: "Shopping Piratas",
      label: "📍 Shopping Piratas",
      className: "lg:col-span-4 lg:row-span-1"
    },
    {
      src: "/images/loja-bento/loja-centro-2.jpg",
      alt: "Ambiente premium",
      className: "lg:col-span-3 lg:row-span-2"
    },
    {
      src: "/images/loja-bento/loja-centro-3.jpg",
      alt: "Detalhes da vitrine",
      className: "lg:col-span-4 lg:row-span-1"
    },
    {
      src: "/images/loja-bento/loja-shopping-2.jpeg",
      alt: "Espaco da loja",
      className: "lg:col-span-12 lg:row-span-1"
    }
  ];

  return (
    <div className="bg-white">
      <Header />
      <main className="flex flex-col gap-16 pb-20">
        <HeroCarousel />
        <BenefitsRow />

        <section className="container-page">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
                Selecionados
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-ink lg:text-3xl">
                Produtos em destaque
              </h2>
            </div>
            <a
              href="/catalogo"
              className="hidden text-sm uppercase tracking-[0.3em] text-neutral-500 lg:block"
            >
              Ver catalogo completo
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="container-page">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
              Nossa loja
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ink lg:text-4xl">
              Experiencia presencial Fitch Tecnologia
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-neutral-600">
              Atendimento premium em um ambiente moderno, com estoque real e
              suporte completo para sua compra.
            </p>
          </div>
          <div className="lg:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
              {storeGallery.map((item) => (
                <div
                  key={item.src}
                  className="group relative min-w-[80%] snap-center overflow-hidden rounded-3xl bg-neutral-100 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {item.label && (
                    <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-12 lg:auto-rows-[180px] lg:gap-4">
            {storeGallery.map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-3xl bg-neutral-100 shadow-sm transition-shadow duration-300 hover:shadow-lg ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.label && (
                  <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <HowToBuy />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
