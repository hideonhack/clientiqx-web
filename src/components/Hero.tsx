"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import anime from "animejs";

function AnimatedGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const squares = ref.current.querySelectorAll(".sq");

    anime({
      targets: squares,
      scale: [
        { value: 0.1, easing: "easeOutSine", duration: 500 },
        { value: 1, easing: "easeInOutQuad", duration: 1200 },
      ],
      rotate: { value: "1turn" },
      translateX: () => anime.random(-8, 8),
      translateY: () => anime.random(-8, 8),
      borderRadius: ["20%", "50%"],
      delay: anime.stagger(100, { grid: [7, 5], from: "center" }),
      duration: 3000,
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
    });
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none opacity-30">
      <div className="grid grid-cols-7 grid-rows-5 w-full h-full p-6">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="flex items-center justify-center">
            <div className="sq w-[7px] h-[7px] bg-accent rounded-[2px]" />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[5/4] mx-auto">
      {/* Animated geometric grid behind illustration */}
      <AnimatedGrid />

      {/* Main dashboard card — glass */}
      <div className="absolute top-[12%] left-[8%] w-[58%] h-[62%] bg-foreground/95 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up ring-1 ring-white/10">
        <div className="p-5">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <div className="space-y-2.5">
            <div className="h-2 bg-white/12 rounded-full w-[70%]" />
            <div className="h-2 bg-white/8 rounded-full w-[50%]" />
            <div className="h-2 bg-white/8 rounded-full w-[60%]" />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">
            <div className="h-14 bg-white/[0.05] rounded-lg" />
            <div className="h-14 bg-accent/20 rounded-lg" />
            <div className="h-14 bg-white/[0.05] rounded-lg" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-10 bg-white/[0.05] rounded-lg" />
            <div className="h-10 bg-white/[0.07] rounded-lg" />
          </div>
        </div>
      </div>

      {/* Secondary floating card — glass */}
      <div className="absolute top-[4%] right-[4%] w-[44%] h-[36%] glass rounded-xl shadow-xl p-4 animate-float-slow ring-1 ring-accent/10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-accent/20" />
          <div className="h-2 bg-foreground/15 rounded-full w-[55%]" />
        </div>
        <div className="space-y-2">
          <div className="h-1.5 bg-foreground/10 rounded-full w-[80%]" />
          <div className="h-1.5 bg-foreground/8 rounded-full w-[65%]" />
        </div>
        <div className="mt-3 h-8 bg-accent/10 rounded-md" />
      </div>

      {/* Accent glow orb */}
      <div className="absolute top-[2%] right-[30%] w-16 h-16 bg-accent/30 rounded-full blur-xl animate-pulse-soft" />

      {/* Bottom floating card — glass */}
      <div className="absolute bottom-[6%] right-[8%] w-[38%] h-[22%] glass rounded-xl shadow-xl p-3 animate-float ring-1 ring-accent/10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded bg-accent/30" />
          <div className="h-1.5 bg-foreground/15 rounded-full w-[50%]" />
        </div>
        <div className="flex items-end gap-1.5 h-8 mt-2">
          <div className="w-3 h-[40%] bg-foreground/10 rounded-sm" />
          <div className="w-3 h-[70%] bg-accent/40 rounded-sm" />
          <div className="w-3 h-[55%] bg-foreground/10 rounded-sm" />
          <div className="w-3 h-[85%] bg-accent/30 rounded-sm" />
          <div className="w-3 h-[45%] bg-foreground/10 rounded-sm" />
          <div className="w-3 h-[90%] bg-accent/50 rounded-sm" />
        </div>
      </div>

      {/* Accent shapes */}
      <div className="absolute bottom-[18%] left-[3%] w-10 h-10 bg-accent/80 rounded-xl shadow-lg glow-accent animate-float" />
      <div className="absolute top-[42%] right-[1%] w-5 h-5 bg-accent rounded-full opacity-60 animate-pulse-soft" />

      {/* Connection arc */}
      <svg className="absolute bottom-[5%] left-[10%] w-[75%] h-[40%] pointer-events-none" viewBox="0 0 400 160" fill="none">
        <path d="M 30 140 C 80 40, 320 40, 370 140" stroke="#424874" strokeWidth="2" strokeDasharray="6 4" opacity="0.3" />
        <circle cx="30" cy="140" r="4" fill="#424874" opacity="0.4" />
        <circle cx="370" cy="140" r="4" fill="#424874" opacity="0.4" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-surface relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="font-serif text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
              Her ekip için dönüştürücü yazılım çözümleri
            </h1>
            <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
              ClientIQX, web geliştirmeden yapay zekaya, mobil uygulamalardan
              bulut altyapısına kadar geniş bir yelpazede uçtan uca yazılım
              hizmetleri sunar. İşletmenizi dijital geleceğe taşıyın.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up-delay-2">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-200 glow-accent glow-accent-hover"
              >
                Ücretsiz danışmanlık alın
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-foreground glass-button rounded-xl transition-all duration-200"
              >
                Demo talep edin
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
