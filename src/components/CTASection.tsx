"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import anime from "animejs";

function FloatingShapes() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const shapes = ref.current.querySelectorAll(".float-shape");

    anime({
      targets: shapes,
      translateX: () => anime.random(-60, 60),
      translateY: () => anime.random(-40, 40),
      rotate: () => anime.random(-90, 90),
      scale: [0.6, 1.4],
      opacity: [0.15, 0.4],
      borderRadius: ["20%", "50%"],
      delay: anime.stagger(150, { from: "center" }),
      duration: 4000,
      easing: "easeInOutQuad",
      loop: true,
      direction: "alternate",
    });
  }, []);

  const positions = [
    { x: 8, y: 15, size: 12 },
    { x: 22, y: 65, size: 8 },
    { x: 38, y: 25, size: 10 },
    { x: 52, y: 75, size: 14 },
    { x: 65, y: 20, size: 9 },
    { x: 78, y: 55, size: 11 },
    { x: 88, y: 30, size: 7 },
    { x: 15, y: 80, size: 10 },
    { x: 45, y: 45, size: 6 },
    { x: 72, y: 78, size: 13 },
  ];

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {positions.map((p, i) => (
        <div
          key={i}
          className="float-shape absolute bg-white/10 rounded-sm"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-accent via-[#363C62] to-[#2D3250]">
      {/* Glass orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />

      {/* Animated floating shapes */}
      <FloatingShapes />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="font-serif text-[40px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-white max-w-3xl mb-5">
          İşletmenizin dijital dönüşümüne başlamaya hazır mısınız?
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed max-w-2xl mb-12">
          Vizyoner işletmeler kritik iş süreçlerinde ClientIQX&apos;e güveniyor.
          Siz de aramıza katılın.
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 text-[17px] font-semibold text-accent bg-white hover:bg-white/95 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Ücretsiz danışmanlık alın
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 text-[17px] font-semibold text-white rounded-xl transition-all duration-200 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30"
          >
            Satış ekibiyle iletişime geçin
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
