"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/whatsapp";

const AUTOPLAY_DELAY = 5000;
const USER_PAUSE_MS = 7000;

const slides = [
  {
    title: "iPhones Lacrados",
    subtitle: "Os modelos mais desejados, novos e originais.",
    image: "/images/loja-hero-1.jpg"
  },
  {
    title: "Seminovos Premium",
    subtitle: "Revisados, com garantia e procedencia.",
    image: "/images/loja-hero-2.jpg"
  },
  {
    title: "Xiaomi / Redmi / Poco",
    subtitle: "Android com performance e custo-beneficio.",
    image: "/images/loja-banner-1.jpeg"
  },
  {
    title: "PlayStation 5 + Gamer",
    subtitle: "Consoles e acessorios para elevar o game.",
    image: "/images/loja-banner-2.jpeg"
  }
];

export default function HeroCarousel() {
  const swiperRef = useRef(null);
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  const scheduleAutoplayResume = () => {
    const swiper = swiperRef.current;
    if (!swiper || !swiper.autoplay) {
      return;
    }

    swiper.autoplay.stop();
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }, USER_PAUSE_MS);
  };

  const handlePrev = () => {
    if (!swiperRef.current) {
      return;
    }
    scheduleAutoplayResume();
    swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (!swiperRef.current) {
      return;
    }
    scheduleAutoplayResume();
    swiperRef.current.slideNext();
  };

  return (
    <section className="container-page">
      <div className="relative overflow-hidden rounded-2xl">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          slidesPerView={1}
          loop
          effect="fade"
          speed={900}
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: AUTOPLAY_DELAY,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onTouchStart={scheduleAutoplayResume}
          onSliderFirstMove={scheduleAutoplayResume}
          className="hero-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-neutral-900 text-white sm:min-h-[420px] lg:min-h-[520px]">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div
                  className="absolute inset-0 bg-black/40"
                  aria-hidden="true"
                />
                <div className="relative z-10 flex h-full flex-col gap-6 p-10 lg:p-16">
                  <div className="max-w-xl">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                      Fitch Tecnologia
                    </p>
                    <h1 className="mt-4 text-3xl font-semibold lg:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="mt-4 text-base text-white/80 lg:text-lg">
                      {slide.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="/catalogo"
                      className="btn-primary bg-white text-ink"
                    >
                      Ver Catalogo
                    </a>
                    <a
                      href={WHATSAPP_LINK}
                      className="btn-outline border-white text-white hover:bg-white hover:text-ink"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Comprar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden items-center lg:flex">
          <button
            type="button"
            onClick={handlePrev}
            className="pointer-events-auto ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Slide anterior"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center lg:flex">
          <button
            type="button"
            onClick={handleNext}
            className="pointer-events-auto mr-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Proximo slide"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
