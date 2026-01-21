"use client";

import { useState } from "react";

const getParamValue = (searchParams, key) => {
  const value = searchParams?.[key];
  return typeof value === "string" ? value : "";
};

export default function CatalogFilters({
  searchParams,
  availableCategories,
  availableBrands,
  availableConditions,
  availableStorages,
  priceOptions
}) {
  const [isOpen, setIsOpen] = useState(false);
  const queryValue = getParamValue(searchParams, "q");
  const categoryValue = getParamValue(searchParams, "category");
  const brandValue = getParamValue(searchParams, "brand");
  const conditionValue = getParamValue(searchParams, "condition");
  const storageValue = getParamValue(searchParams, "storage");
  const priceValue = getParamValue(searchParams, "price");

  const closeDrawer = () => setIsOpen(false);

  const FilterFields = () => (
    <>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Categoria
        </p>
        <select
          name="category"
          defaultValue={categoryValue}
          className="mt-3 w-full rounded-full border border-white bg-white px-4 py-2 text-sm"
        >
          <option value="">Todas</option>
          {availableCategories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Marca
        </p>
        <select
          name="brand"
          defaultValue={brandValue}
          className="mt-3 w-full rounded-full border border-white bg-white px-4 py-2 text-sm"
        >
          <option value="">Todas</option>
          {availableBrands.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Condicao
        </p>
        <select
          name="condition"
          defaultValue={conditionValue}
          className="mt-3 w-full rounded-full border border-white bg-white px-4 py-2 text-sm"
        >
          <option value="">Todas</option>
          {availableConditions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Armazenamento
        </p>
        <select
          name="storage"
          defaultValue={storageValue}
          className="mt-3 w-full rounded-full border border-white bg-white px-4 py-2 text-sm"
        >
          <option value="">Todos</option>
          {availableStorages.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Faixa de preco
        </p>
        <select
          name="price"
          defaultValue={priceValue}
          className="mt-3 w-full rounded-full border border-white bg-white px-4 py-2 text-sm"
        >
          {priceOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  return (
    <form method="GET" className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          name="q"
          defaultValue={queryValue}
          placeholder="Busque por modelo, marca ou acessorio..."
          className="input-base flex-1 bg-gray-50"
        />
        <button type="submit" className="btn-primary text-xs">
          Buscar
        </button>
        <a href="/catalogo" className="btn-outline text-xs">
          Mostrar tudo
        </a>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-between rounded-full border border-stone bg-white px-4 py-3 text-sm text-ink shadow-sm transition hover:border-ink lg:hidden"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="catalogo-filtros"
      >
        <span className="font-semibold uppercase tracking-[0.2em] text-xs">
          Filtrar e Ordenar
        </span>
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-neutral-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M4 5h16l-6 7v5l-4 2v-7L4 5z" />
        </svg>
      </button>

      <section className="hidden gap-6 rounded-2xl border border-stone bg-stone p-6 lg:grid lg:grid-cols-5">
        <FilterFields />
        <div className="flex flex-wrap gap-3 lg:col-span-5">
          <button type="submit" className="btn-primary text-xs">
            Aplicar filtros
          </button>
          <a href="/catalogo" className="btn-outline text-xs">
            Limpar filtros
          </a>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-50 transition lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        />
        <div
          id="catalogo-filtros"
          className={`absolute inset-x-0 bottom-0 max-h-[85vh] rounded-t-3xl bg-white p-6 shadow-2xl transition-transform ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Filtros
              </p>
              <h2 className="mt-1 text-lg font-semibold text-ink">
                Filtrar e ordenar
              </h2>
            </div>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone text-neutral-500 transition hover:border-ink hover:text-ink"
              onClick={closeDrawer}
              aria-label="Fechar filtros"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FilterFields />
          </div>

          <div className="mt-6 grid gap-3">
            <button
              type="submit"
              className="btn-primary text-xs"
              onClick={closeDrawer}
            >
              Ver Resultados
            </button>
            <a
              href="/catalogo"
              className="btn-outline text-xs"
              onClick={closeDrawer}
            >
              Limpar filtros
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}
