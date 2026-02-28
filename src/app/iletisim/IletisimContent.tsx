"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Brand color ────────────────────────────────────── */
const BRAND_COLOR = "#424874";

/* ══════════════════════════════════════════════════════════
   Section 1 — ContactHero
   ══════════════════════════════════════════════════════════ */

function ContactHero() {
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
              İletişim
            </span>
          </div>

          <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
            Projenizi birlikte hayata geçirelim
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
            Dijital dönüşüm yolculuğunuza başlamak için bizimle iletişime geçin.
            Ekibimiz en kısa sürede size dönüş yapacaktır.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 2 — ContactSection
   ══════════════════════════════════════════════════════════ */

function ContactSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12">
          {/* Left — Contact form */}
          <div className="glass-dark rounded-xl p-8">
            <h2 className="font-bold text-[28px] text-foreground mb-8">
              Bize Ulaşın
            </h2>

            <form className="space-y-5">
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-semibold text-foreground mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    className="w-full px-4 py-3 rounded-lg border border-black/[0.08] bg-white text-[15px] text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[14px] font-semibold text-foreground mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    placeholder="ornek@sirket.com"
                    className="w-full px-4 py-3 rounded-lg border border-black/[0.08] bg-white text-[15px] text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-[14px] font-semibold text-foreground mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  placeholder="+90 (5XX) XXX XX XX"
                  className="w-full px-4 py-3 rounded-lg border border-black/[0.08] bg-white text-[15px] text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
                />
              </div>

              {/* Subject select */}
              <div>
                <label className="block text-[14px] font-semibold text-foreground mb-2">
                  Konu
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-black/[0.08] bg-white text-[15px] text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all appearance-none">
                  <option value="" disabled selected>
                    Konu seçiniz
                  </option>
                  <option value="proje">Yeni Proje</option>
                  <option value="danismanlik">Danışmanlık</option>
                  <option value="destek">Teknik Destek</option>
                  <option value="ortaklik">İş Ortaklığı</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              {/* Message textarea */}
              <div>
                <label className="block text-[14px] font-semibold text-foreground mb-2">
                  Mesaj
                </label>
                <textarea
                  rows={4}
                  placeholder="Projeniz hakkında kısaca bilgi verin..."
                  className="w-full px-4 py-3 rounded-lg border border-black/[0.08] bg-white text-[15px] text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full py-3.5 text-[15px] font-semibold text-white rounded-xl transition-all duration-200 bg-accent"
                style={{
                  boxShadow: `0 0 20px ${BRAND_COLOR}33, 0 0 60px ${BRAND_COLOR}14`,
                }}
              >
                Mesaj Gönder
              </button>
            </form>
          </div>

          {/* Right — Info cards */}
          <div className="space-y-4">
            {/* Adres */}
            <div className="glass rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${BRAND_COLOR}15` }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: BRAND_COLOR }}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[16px] text-foreground mb-1">
                  Adres
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  İstanbul, Türkiye
                </p>
                <p className="text-[14px] text-muted leading-relaxed">
                  Levent, Büyükdere Cad. No:123
                </p>
              </div>
            </div>

            {/* Telefon */}
            <div className="glass rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${BRAND_COLOR}15` }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: BRAND_COLOR }}
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[16px] text-foreground mb-1">
                  Telefon
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  +90 (212) 555 0123
                </p>
              </div>
            </div>

            {/* E-posta */}
            <div className="glass rounded-xl p-6 flex items-start gap-4 hover:shadow-md transition-all duration-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${BRAND_COLOR}15` }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: BRAND_COLOR }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[16px] text-foreground mb-1">
                  E-posta
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  info@clientiqx.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Main Page Component
   ══════════════════════════════════════════════════════════ */

export default function IletisimContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <ContactHero />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
