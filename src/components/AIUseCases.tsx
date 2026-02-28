"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import anime from "animejs";

interface UseCase {
  category: string;
  headline: string;
  description: string;
  gradient: string;
}

const useCases: UseCase[] = [
  {
    category: "Satış",
    headline: "Her potansiyel müşteriyi yakalayın, hiçbir fırsatı kaçırmayın",
    description:
      "Gelen ve giden aramaları akıllı asistanlarla yönetin—potansiyel müşterileri otomatik olarak nitelendirin, zenginleştirin ve hiçbir fırsatı kaçırmadan satış ekibinize yönlendirin.",
    gradient:
      "radial-gradient(ellipse at 30% 60%, rgba(251,191,36,0.12) 0%, transparent 55%), radial-gradient(ellipse at 70% 35%, rgba(245,158,11,0.1) 0%, transparent 50%), linear-gradient(145deg, #f0ebe0 0%, #e0d8c8 30%, #c8c0a8 55%, #d8d0b8 80%, #ece4d0 100%)",
  },
  {
    category: "Müşteri Hizmetleri",
    headline: "7/24 kesintisiz, profesyonel müşteri deneyimi sunun",
    description:
      "Gelen talepleri ve aramaları akıllı bir şekilde karşılayın, müşterilerinize her an doğal ve profesyonel destek sağlayın—bekletme sürelerini sıfıra indirin.",
    gradient:
      "radial-gradient(ellipse at 35% 50%, rgba(96,165,250,0.12) 0%, transparent 55%), radial-gradient(ellipse at 65% 40%, rgba(147,197,253,0.1) 0%, transparent 50%), linear-gradient(145deg, #e8ecf4 0%, #d0d8e8 30%, #b0c0d4 55%, #c8d4e4 80%, #e4e8f0 100%)",
  },
  {
    category: "Sağlık",
    headline: "Randevu süreçlerinizi sorunsuz ve otomatik yönetin",
    description:
      "Hasta randevularını planlayın, hatırlatmalar gönderin ve iptal veya değişiklik taleplerini sorunsuz bir şekilde yönetin—personel yükünü azaltın, hasta memnuniyetini artırın.",
    gradient:
      "radial-gradient(ellipse at 25% 55%, rgba(52,211,153,0.12) 0%, transparent 55%), radial-gradient(ellipse at 70% 40%, rgba(110,231,183,0.1) 0%, transparent 50%), linear-gradient(145deg, #e8f0ec 0%, #d0dcd4 30%, #a8c4b4 55%, #c0d4c8 80%, #e0ece4 100%)",
  },
  {
    category: "Operasyon",
    headline: "Tekrarlayan iş süreçlerini akıllıca otomatikleştirin",
    description:
      "Rutin aramaları, bilgi toplama süreçlerini ve iş akışlarını AI destekli asistanlarla otomatikleştirerek ekibinizin stratejik işlere odaklanmasını sağlayın.",
    gradient:
      "radial-gradient(ellipse at 30% 45%, rgba(167,139,250,0.12) 0%, transparent 55%), radial-gradient(ellipse at 65% 55%, rgba(196,181,253,0.1) 0%, transparent 50%), linear-gradient(145deg, #ece8f0 0%, #dcd4e4 30%, #c0b4d4 55%, #d0c8dc 80%, #e8e4ec 100%)",
  },
];

function SoundWave() {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!waveRef.current) return;
    const bars = waveRef.current.querySelectorAll(".wave-bar");

    const animation = anime({
      targets: bars,
      height: (_el: Element, i: number) => {
        const heights = [28, 44, 56, 68, 80, 68, 56, 44, 36, 48, 64, 76, 60, 44, 32];
        const min = Math.max(heights[i] * 0.3, 8);
        return [min, heights[i]];
      },
      duration: 1400,
      delay: anime.stagger(60),
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    });

    return () => animation.pause();
  }, []);

  const heights = [28, 44, 56, 68, 80, 68, 56, 44, 36, 48, 64, 76, 60, 44, 32];

  return (
    <div ref={waveRef} className="flex items-center gap-1">
      {heights.map((h, i) => (
        <div
          key={i}
          className="wave-bar w-1 rounded-full bg-foreground/[0.12]"
          style={{ height: `${h * 0.3}px` }}
        />
      ))}
    </div>
  );
}

export default function AIUseCases() {
  const [activeCategory, setActiveCategory] = useState(0);
  const current = useCases[activeCategory];

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Label */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-5 h-5 rounded bg-accent" />
          <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
            AI Asistan
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-bold text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-3xl mb-5">
          Gerçek ekipler, gerçek AI
          <br className="hidden lg:block" /> çözümleri, gerçek sonuçlar
        </h2>

        {/* Description */}
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          AI destekli sesli asistanlarla iş süreçlerinizi nasıl
          dönüştürebileceğinizi keşfedin. Ekiplerimiz şu anda gerçek işleri
          yapay zeka ile yönetiyor. Siz de yapabilirsiniz.
        </p>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {useCases.map((uc, i) => (
            <button
              key={uc.category}
              onClick={() => setActiveCategory(i)}
              className={`py-4 px-6 rounded-lg text-[15px] font-semibold transition-all duration-200 ${
                activeCategory === i
                  ? "bg-accent text-white shadow-lg glow-accent"
                  : "glass text-foreground/60 hover:bg-white/80 hover:text-foreground"
              }`}
            >
              {uc.category}
            </button>
          ))}
        </div>

        {/* Use Case Content */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 mb-10">
          {/* Left: Headline + Link */}
          <div>
            <h3 className="font-bold text-[30px] lg:text-[38px] leading-[1.12] tracking-[-0.01em] text-foreground mb-5">
              {current.headline}
            </h3>
            <Link
              href="#"
              className="inline-flex items-center gap-1.5 text-[15px] font-medium text-foreground underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
            >
              Daha fazla bilgi
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right: Description */}
          <div className="flex items-start">
            <p className="text-[16px] text-foreground/70 leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>

        {/* Atmospheric Preview */}
        <div className="relative w-full aspect-[2.4/1] rounded-2xl overflow-hidden">
          <div
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{ background: current.gradient }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Animated Sound Wave */}
          <div className="absolute inset-0 flex items-center justify-center">
            <SoundWave />
          </div>
          {/* Play button */}
          <button className="absolute bottom-5 right-5 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all duration-200">
            <svg width="13" height="15" viewBox="0 0 13 15" fill="currentColor" className="text-foreground ml-0.5">
              <path d="M0 0.5L13 7.5L0 14.5V0.5Z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
