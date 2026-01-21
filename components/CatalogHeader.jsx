import Link from "next/link";

export default function CatalogHeader() {
  return (
    <header className="bg-black text-white">
      <div className="container-page flex flex-col items-center gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center justify-center">
          <img
            src="/images/logo-fitch-lux.png"
            alt="Fitch Tecnologia"
            className="h-9 w-auto sm:h-10"
          />
        </Link>
      </div>
    </header>
  );
}
