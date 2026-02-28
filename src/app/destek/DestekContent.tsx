"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Brand color ────────────────────────────────────── */
const BRAND_COLOR = "#424874";

/* ══════════════════════════════════════════════════════════
   Section 1 — SupportHero
   ══════════════════════════════════════════════════════════ */

function SupportHero() {
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
              Destek Merkezi
            </span>
          </div>

          <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
            Size nasıl yardımcı olabiliriz?
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
            Teknik destek, dokümantasyon ve sık sorulan sorular ile ihtiyacınız
            olan yardıma hızlıca ulaşın.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 2 — SupportCategories
   ══════════════════════════════════════════════════════════ */

const categories = [
  {
    icon: "book",
    title: "Başlangıç Rehberi",
    description: "Projenize nasıl başlayacağınızı adım adım öğrenin.",
  },
  {
    icon: "user",
    title: "Hesap Yönetimi",
    description: "Hesap ayarları, faturalama ve abonelik yönetimi.",
  },
  {
    icon: "wrench",
    title: "Teknik Destek",
    description: "Teknik sorunlar, hata raporlama ve çözüm önerileri.",
  },
  {
    icon: "receipt",
    title: "Fatura & Ödeme",
    description: "Fatura detayları, ödeme yöntemleri ve iade süreçleri.",
  },
  {
    icon: "code",
    title: "API & Entegrasyon",
    description:
      "API dokümantasyonu, webhook'lar ve üçüncü parti entegrasyonlar.",
  },
  {
    icon: "shield",
    title: "Güvenlik",
    description: "Hesap güvenliği, iki faktörlü doğrulama ve veri koruma.",
  },
];

function CategoryIcon({ type }: { type: string }) {
  const style = { color: BRAND_COLOR };
  switch (type) {
    case "book":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={style}
        >
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          <path d="M8 7h8M8 11h6" />
        </svg>
      );
    case "user":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={style}
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "wrench":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={style}
        >
          <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
        </svg>
      );
    case "receipt":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={style}
        >
          <path d="M4 2v20l3-2 3 2 3-2 3 2 3-2 3 2V2l-3 2-3-2-3 2-3-2-3 2-3-2z" />
          <path d="M8 10h8M8 14h4" />
        </svg>
      );
    case "code":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={style}
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      );
    case "shield":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={style}
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}

function SupportCategories() {
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
            Kategoriler
          </span>
        </div>
        <h2 className="font-bold text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-3xl mb-12">
          Destek Kategorileri
        </h2>

        {/* 3x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass-dark rounded-xl p-7 pb-8 flex flex-col hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="mb-5">
                <CategoryIcon type={cat.icon} />
              </div>
              <h3 className="text-[18px] font-semibold text-foreground leading-snug mb-2">
                {cat.title}
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 3 — FAQ
   ══════════════════════════════════════════════════════════ */

const faqItems = [
  {
    question: "Proje süreci nasıl işliyor?",
    answer:
      "Keşif, tasarım, geliştirme, test ve lansman adımlarından oluşan yapılandırılmış bir süreç izliyoruz. Her aşamada düzenli bilgilendirme ve onay süreçleri uygulanır.",
  },
  {
    question: "Proje maliyeti nasıl belirleniyor?",
    answer:
      "Proje kapsamı, teknoloji gereksinimleri ve süre gibi faktörlere göre özel teklif hazırlıyoruz. İlk görüşme ve danışmanlık ücretsizdir.",
  },
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer:
      "React, Next.js, Node.js, Python, AWS gibi modern teknolojiler kullanıyoruz. Proje ihtiyacına göre en uygun teknoloji yığınını belirleriz.",
  },
  {
    question: "Proje sonrası destek sağlıyor musunuz?",
    answer:
      "Evet, tüm projelerimizde lansman sonrası teknik destek, bakım ve güncelleme hizmetleri sunuyoruz.",
  },
  {
    question: "Uzaktan çalışabiliyor musunuz?",
    answer:
      "Evet, tüm süreçlerimiz uzaktan çalışmaya uygun yapılandırılmıştır. Düzenli video toplantılar ve proje yönetim araçları ile iletişimi sürekli tutarız.",
  },
  {
    question: "Gizlilik ve veri güvenliği nasıl sağlanıyor?",
    answer:
      "NDA anlaşması, şifreli iletişim, erişim kontrolü ve KVKK uyumlu süreçler ile verilerinizi koruyoruz.",
  },
];

function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: BRAND_COLOR }}
            />
            <h2 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground">
              SSS
            </h2>
          </div>
          <p className="font-bold text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.01em] text-foreground">
            Sık Sorulan Sorular
          </p>
        </div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-[16px] font-semibold text-foreground pr-4">
                  {item.question}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`flex-shrink-0 text-muted transition-transform duration-200 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-[14px] text-muted leading-relaxed">
                    {item.answer}
                  </p>
                </div>
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

export default function DestekContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <SupportHero />
      <SupportCategories />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
