import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import CatalogFilters from "@/components/CatalogFilters";
import { products } from "@/lib/products";

const priceOptions = [
  { value: "", label: "Todas as faixas" },
  { value: "0-2000", label: "Ate R$ 2.000", min: 0, max: 2000 },
  { value: "2000-5000", label: "R$ 2.000 - 5.000", min: 2000, max: 5000 },
  { value: "5000-8000", label: "R$ 5.000 - 8.000", min: 5000, max: 8000 },
  { value: "8000+", label: "Acima de R$ 8.000", min: 8000, max: Infinity }
];

const normalize = (value) => (value || "").toString().toLowerCase().trim();

const normalizeSearch = (value) =>
  normalize(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const sanitizeFilter = (value) => {
  const normalized = normalize(value);
  if (!normalized) {
    return "";
  }
  if (["todos", "todas", "all"].includes(normalized)) {
    return "";
  }
  return normalized;
};

const uniqueValues = (items) =>
  Array.from(new Set(items.filter(Boolean))).sort((a, b) =>
    a.localeCompare(b, "pt-BR")
  );

export default function Catalogo({ searchParams }) {
  const query = normalizeSearch(searchParams?.q);
  const category = sanitizeFilter(searchParams?.category);
  const brand = sanitizeFilter(searchParams?.brand);
  const condition = sanitizeFilter(searchParams?.condition);
  const storage = sanitizeFilter(searchParams?.storage);
  const price = sanitizeFilter(searchParams?.price);

  const availableCategories = uniqueValues(
    products.map((product) => product.category)
  );
  const availableBrands = uniqueValues(
    products.map((product) => product.brand)
  );
  const availableConditions = uniqueValues(
    products.map((product) => product.condition)
  );
  const availableStorages = uniqueValues(
    products
      .map((product) => product.storage)
      .filter((value) => value && value !== "-")
  );

  const priceFilter = priceOptions.find((option) => option.value === price);
  const priceOptionsUI = priceOptions.map(({ value, label }) => ({
    value,
    label
  }));

  const filteredProducts = products.filter((product) => {
    const normalizedCategory = normalize(product.category);
    const normalizedBrand = normalize(product.brand);
    const normalizedCondition = normalize(product.condition);

    const matchesQuery =
      !query ||
      normalizeSearch(
        `${product.name} ${product.brand} ${product.category} ${product.storage} ${product.condition} ${product.color}`
      ).includes(query);

    const matchesCategory =
      !category ||
      normalizedCategory === category ||
      (category === "apple" && normalizedBrand === "apple") ||
      (category === "seminovo" && normalizedCondition === "seminovo") ||
      (category === "seminovos" && normalizedCondition === "seminovo");
    const matchesBrand = !brand || normalizedBrand === brand;
    const matchesCondition =
      !condition || normalizedCondition === condition;
    const matchesStorage = !storage || normalize(product.storage) === storage;
    const matchesPrice =
      !priceFilter ||
      priceFilter.min == null ||
      priceFilter.max == null ||
      (product.priceCash >= priceFilter.min &&
        product.priceCash <= priceFilter.max);

    return (
      matchesQuery &&
      matchesCategory &&
      matchesBrand &&
      matchesCondition &&
      matchesStorage &&
      matchesPrice
    );
  });

  return (
    <div className="bg-white">
      <Header />
      <main className="container-page flex flex-col gap-10 py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-ink">Catalogo</h1>
          <CatalogFilters
            searchParams={searchParams}
            availableCategories={availableCategories}
            availableBrands={availableBrands}
            availableConditions={availableConditions}
            availableStorages={availableStorages}
            priceOptions={priceOptionsUI}
          />
          <p className="text-sm text-neutral-500">
            {filteredProducts.length} produto(s) encontrados
          </p>
        </div>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
        {filteredProducts.length === 0 && (
          <div className="card p-6 text-sm text-neutral-600">
            Nenhum produto encontrado com os filtros selecionados.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
