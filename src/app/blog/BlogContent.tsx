"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Brand color ────────────────────────────────────── */
const BRAND_COLOR = "#424874";

/* ══════════════════════════════════════════════════════════
   Section 1 — BlogHero
   ══════════════════════════════════════════════════════════ */

function BlogHero() {
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
              Blog
            </span>
          </div>

          <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
            Teknoloji dünyasından güncel yazılar
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
            Yazılım geliştirme, yapay zeka, dijital dönüşüm ve teknoloji
            trendleri hakkında ekibimizin deneyimlerini paylaştığımız blog.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 2 — BlogGrid
   ══════════════════════════════════════════════════════════ */

const blogPosts = [
  {
    category: "Yapay Zeka",
    title: "2026'da AI Trendleri: İşletmeler İçin Rehber",
    date: "15 Şubat 2026",
    excerpt:
      "Yapay zeka teknolojilerinin 2026 yılında işletmelere sunduğu fırsatları ve stratejik avantajları keşfedin.",
  },
  {
    category: "Web Geliştirme",
    title: "Next.js 16 ile Performans Optimizasyonu",
    date: "10 Şubat 2026",
    excerpt:
      "Next.js 16 ile gelen yenilikler ve web uygulamalarınızda performansı artırmanın yolları.",
  },
  {
    category: "Mobil",
    title: "Flutter vs React Native: 2026 Karşılaştırması",
    date: "5 Şubat 2026",
    excerpt:
      "Mobil uygulama geliştirmede iki popüler framework'ün güncel karşılaştırması ve seçim rehberi.",
  },
  {
    category: "DevOps",
    title: "Kubernetes ile Ölçeklenebilir Mimari Kurma",
    date: "28 Ocak 2026",
    excerpt:
      "Kubernetes kullanarak yüksek erişilebilirlik ve otomatik ölçeklendirme altyapısı oluşturma rehberi.",
  },
  {
    category: "UI/UX",
    title: "Kullanıcı Araştırmasının Tasarıma Etkisi",
    date: "20 Ocak 2026",
    excerpt:
      "Kullanıcı araştırma yöntemleri ve bu verilerin tasarım sürecine nasıl entegre edildiği üzerine notlar.",
  },
  {
    category: "Güvenlik",
    title: "KVKK Uyumlu Yazılım Geliştirme Rehberi",
    date: "15 Ocak 2026",
    excerpt:
      "Kişisel verilerin korunması kanununa uyumlu yazılım geliştirme süreçleri ve en iyi uygulamalar.",
  },
];

function BlogGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* 3x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.title}
              className="glass rounded-xl overflow-hidden hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              {/* Placeholder image area */}
              <div className="h-48 rounded-t-xl bg-accent/10 flex items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-accent/30"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>

              {/* Content area */}
              <div className="p-6">
                <span className="text-[12px] font-semibold text-accent uppercase tracking-wide">
                  {post.category}
                </span>
                <h3 className="text-[18px] font-semibold text-foreground leading-snug mt-2 mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-[13px] text-muted mb-3">
                  {post.date}
                </p>
                <p className="text-[14px] text-muted leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
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

export default function BlogContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHero />
      <BlogGrid />
      <CTASection />
      <Footer />
    </div>
  );
}
