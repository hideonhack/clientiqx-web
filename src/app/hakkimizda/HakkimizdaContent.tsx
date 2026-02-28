"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Brand color ────────────────────────────────────── */
const BRAND_COLOR = "#424874";

/* ══════════════════════════════════════════════════════════
   Section 1 — CompanyHero
   ══════════════════════════════════════════════════════════ */

function CompanyHero() {
  return (
    <section className="bg-surface relative overflow-hidden">
      {/* Background glow orb */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"
        style={{ backgroundColor: `${BRAND_COLOR}0A` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Category label */}
          <div className="flex items-center justify-center gap-2.5 mb-6 animate-fade-in-up">
            <div
              className="w-5 h-5 rounded"
              style={{ backgroundColor: BRAND_COLOR }}
            />
            <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
              Hakkımızda
            </span>
          </div>

          <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
            Teknolojiyle geleceği birlikte inşa ediyoruz
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
            ClientIQX olarak, işletmelerin dijital dönüşüm yolculuğunda güvenilir
            teknoloji ortağı olarak hizmet veriyoruz. Modern yazılım çözümleri,
            yapay zeka teknolojileri ve müşteri odaklı yaklaşımımızla fark
            yaratıyoruz.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 2 — MissionValues
   ══════════════════════════════════════════════════════════ */

const values = [
  {
    title: "İnovasyon",
    description:
      "Sürekli öğreniyor, en yeni teknolojileri uygulamalara taşıyoruz.",
  },
  {
    title: "Güvenilirlik",
    description:
      "Söz verdiğimiz kalite ve sürelere sadık kalıyoruz.",
  },
  {
    title: "Müşteri Odaklılık",
    description:
      "Her projede müşteri başarısını birinci öncelik olarak görüyoruz.",
  },
  {
    title: "Şeffaflık",
    description:
      "Süreçlerimizi açık tutuyor, düzenli ilerleme raporları paylaşıyoruz.",
  },
];

function MissionValues() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <div className="flex items-center gap-2.5 mb-6">
          <div
            className="w-5 h-5 rounded"
            style={{ backgroundColor: BRAND_COLOR }}
          />
          <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
            Misyon &amp; Değerlerimiz
          </span>
        </div>
        <h2 className="font-bold text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-3xl mb-12">
          Misyon &amp; Değerlerimiz
        </h2>

        {/* 2-column grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — Mission & Vision card */}
          <div className="glass-dark rounded-xl p-8 flex flex-col justify-center">
            <h3 className="font-bold text-[24px] text-foreground mb-4">
              Misyonumuz
            </h3>
            <p className="text-[16px] text-muted leading-relaxed mb-8">
              İşletmelerin dijital potansiyelini maksimize etmek, teknolojiyi
              erişilebilir kılmak ve sürdürülebilir büyümelerine katkıda
              bulunmak.
            </p>

            <h3 className="font-bold text-[24px] text-foreground mb-4">
              Vizyonumuz
            </h3>
            <p className="text-[16px] text-muted leading-relaxed">
              Türkiye&apos;nin lider dijital dönüşüm partneri olarak, global
              standartlarda yazılım çözümleri sunmak.
            </p>
          </div>

          {/* Right — 4 value cards (2x2) */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass rounded-xl p-6 flex flex-col hover:shadow-md transition-all duration-200"
              >
                <h4 className="font-bold text-[18px] text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-[14px] text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 3 — Stats
   ══════════════════════════════════════════════════════════ */

const stats = [
  { number: "150+", label: "Tamamlanan Proje" },
  { number: "80+", label: "Mutlu Müşteri" },
  { number: "35+", label: "Ekip Üyesi" },
  { number: "8+", label: "Yıllık Deneyim" },
];

function Stats() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-8 text-center hover:shadow-md transition-all duration-200"
            >
              <div className="text-[48px] font-bold text-accent leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-[14px] text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Main Page Component
   ══════════════════════════════════════════════════════════ */

export default function HakkimizdaContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <CompanyHero />
      <MissionValues />
      <Stats />
      <CTASection />
      <Footer />
    </div>
  );
}
