import Link from "next/link";

export default function BrandTopBar() {
  return (
    <div className="bg-black text-white">
      <div className="container-page flex h-10 items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 whitespace-nowrap"
        >
          <span className="font-brand text-[clamp(0.65rem,2.4vw,0.95rem)] uppercase tracking-[0.2em] text-white">
            FITCH TECNOLOGIA
          </span>
          <img
            src="/images/leao-fitch.png"
            alt="Logo Fitch"
            className="h-6 w-auto"
          />
        </Link>
      </div>
    </div>
  );
}
