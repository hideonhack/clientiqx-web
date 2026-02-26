"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Service color ────────────────────────────────────── */
const SERVICE_COLOR = "#424874";

/* ══════════════════════════════════════════════════════════
   Section 1 — ServiceHero
   ══════════════════════════════════════════════════════════ */

function WebMockUI() {
  return (
    <div className="relative w-full h-full">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${SERVICE_COLOR}, #60A5FA, #818CF8)`,
        }}
      />

      {/* Browser window */}
      <div className="absolute top-[12%] left-[8%] w-[52%] h-[65%] bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-8 bg-gray-100/90 flex items-center gap-1.5 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <div className="ml-3 h-4 w-32 bg-gray-200/80 rounded-full" />
        </div>
        <div className="p-4 space-y-3">
          <div className="h-4 bg-foreground/8 rounded w-3/4" />
          <div className="h-3 bg-foreground/5 rounded w-full" />
          <div className="h-3 bg-foreground/5 rounded w-2/3" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div
              className="h-16 rounded-lg"
              style={{ backgroundColor: `${SERVICE_COLOR}15` }}
            />
            <div className="h-16 bg-foreground/[0.04] rounded-lg" />
          </div>
        </div>
      </div>

      {/* Code editor */}
      <div className="absolute top-[20%] right-[6%] w-[42%] h-[50%] bg-[#1e1e2e]/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-7 bg-[#181825] flex items-center gap-1.5 px-3">
          <div className="h-3 w-12 bg-white/10 rounded" />
          <div className="h-3 w-10 bg-white/5 rounded" />
        </div>
        <div className="p-3 space-y-1.5">
          <div className="flex gap-2">
            <div className="h-2 w-8 bg-purple-400/30 rounded" />
            <div className="h-2 w-14 bg-blue-400/25 rounded" />
          </div>
          <div className="flex gap-2 ml-3">
            <div className="h-2 w-10 bg-green-400/25 rounded" />
            <div className="h-2 w-16 bg-yellow-400/20 rounded" />
          </div>
          <div className="flex gap-2 ml-3">
            <div className="h-2 w-12 bg-cyan-400/25 rounded" />
            <div className="h-2 w-8 bg-orange-400/20 rounded" />
          </div>
          <div className="flex gap-2 ml-6">
            <div className="h-2 w-6 bg-pink-400/25 rounded" />
            <div className="h-2 w-18 bg-blue-400/20 rounded" />
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-4 bg-purple-400/30 rounded" />
          </div>
        </div>
      </div>

      {/* Floating accent shape */}
      <div
        className="absolute bottom-[8%] left-[12%] w-12 h-12 rounded-xl shadow-lg animate-float"
        style={{ backgroundColor: `${SERVICE_COLOR}CC` }}
      />
    </div>
  );
}

function ServiceHero() {
  return (
    <section className="bg-surface relative overflow-hidden">
      {/* Background glow orb */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl -translate-y-1/3 translate-x-1/4"
        style={{ backgroundColor: `${SERVICE_COLOR}0A` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text */}
          <div className="max-w-xl">
            {/* Category label */}
            <div className="flex items-center gap-2.5 mb-6 animate-fade-in-up">
              <div
                className="w-5 h-5 rounded"
                style={{ backgroundColor: SERVICE_COLOR }}
              />
              <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
                Web Geliştirme
              </span>
            </div>

            <h1 className="font-serif text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
              Modern web uygulamalarıyla dijital varlığınızı güçlendirin
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
              Kurumsal web sitelerinden SaaS platformlarına, e-ticaret
              çözümlerinden progressive web app&apos;lere kadar geniş bir
              yelpazede, performans odaklı ve ölçeklenebilir web uygulamaları
              geliştiriyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up-delay-2">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center px-7 py-3.5 text-[15px] font-semibold text-white rounded-xl transition-all duration-200"
                style={{
                  backgroundColor: SERVICE_COLOR,
                  boxShadow: `0 0 20px ${SERVICE_COLOR}33, 0 0 60px ${SERVICE_COLOR}14`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${SERVICE_COLOR}4D, 0 0 80px ${SERVICE_COLOR}1F`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${SERVICE_COLOR}33, 0 0 60px ${SERVICE_COLOR}14`;
                }}
              >
                Proje Başlat
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-foreground glass-button rounded-xl transition-all duration-200"
              >
                Detayları İncele
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right — Illustration */}
          <div className="hidden lg:block">
            <div className="relative w-full aspect-[4/3]">
              <WebMockUI />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 2 — CapabilitiesGrid
   ══════════════════════════════════════════════════════════ */

const capabilities = [
  {
    icon: "globe",
    title: "Kurumsal Web Siteleri",
    description:
      "Markanızı dijitalde en iyi şekilde temsil eden, hızlı ve SEO dostu kurumsal web siteleri.",
  },
  {
    icon: "saas",
    title: "SaaS Platformları",
    description:
      "Ölçeklenebilir mimari, çoklu kiracı yapısı ve abonelik yönetimi ile SaaS çözümleri.",
  },
  {
    icon: "cart",
    title: "E-Ticaret Çözümleri",
    description:
      "Güvenli ödeme entegrasyonu, stok yönetimi ve yüksek dönüşüm oranı için optimize edilmiş mağazalar.",
  },
  {
    icon: "pwa",
    title: "Progressive Web Apps",
    description:
      "Çevrimdışı çalışabilen, push bildirim destekli, mobil uygulama deneyimi sunan web uygulamaları.",
  },
  {
    icon: "api",
    title: "API & Backend Geliştirme",
    description:
      "RESTful ve GraphQL API&apos;ler, mikroservis mimarisi ve güvenli backend altyapıları.",
  },
  {
    icon: "performance",
    title: "Performans & SEO Optimizasyonu",
    description:
      "Core Web Vitals uyumlu, arama motorlarında üst sıralara çıkan performans optimizasyonları.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const style = { color: SERVICE_COLOR };
  switch (type) {
    case "globe":
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
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );
    case "saas":
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
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M3 9h18M9 3v18" />
          <circle cx="15" cy="15" r="2" />
        </svg>
      );
    case "cart":
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
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.99-1.61L23 6H6" />
        </svg>
      );
    case "pwa":
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
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 8h6M9 11h6" />
        </svg>
      );
    case "api":
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
    case "performance":
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
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    default:
      return null;
  }
}

function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <div className="flex items-center gap-2.5 mb-6">
          <div
            className="w-5 h-5 rounded"
            style={{ backgroundColor: SERVICE_COLOR }}
          />
          <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
            Yeteneklerimiz
          </span>
        </div>
        <h2 className="font-serif text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-3xl mb-5">
          Her ihtiyaca uygun web çözümleri
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Startup&apos;lardan kurumsal şirketlere, basit web sitelerinden
          karmaşık SaaS platformlarına kadar her ölçekte çözüm üretiyoruz.
        </p>

        {/* 3x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl p-7 pb-8 flex flex-col justify-between min-h-[260px] hover:shadow-md transition-all duration-200 group cursor-pointer"
              style={{
                background: `${SERVICE_COLOR}0A`,
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: `1px solid ${SERVICE_COLOR}1F`,
              }}
            >
              <div className="mb-16">
                <CapabilityIcon type={cap.icon} />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-foreground leading-snug mb-2">
                  {cap.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  {cap.description}
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
   Section 3 — TechStack
   ══════════════════════════════════════════════════════════ */

function TechIcon({ name }: { name: string }) {
  const base =
    "w-9 h-9 rounded-lg border border-black/[0.08] flex items-center justify-center bg-white shadow-sm";

  const icons: Record<string, { color: string; svg: React.ReactNode }> = {
    react: {
      color: "#61DAFB",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        </svg>
      ),
    },
    next: {
      color: "#000",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#000" />
          <path d="M16.5 18.5L10 10v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 8v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    node: {
      color: "#339933",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.3" />
          <text x="12" y="15" textAnchor="middle" fill="#339933" fontSize="9" fontWeight="bold">JS</text>
        </svg>
      ),
    },
    typescript: {
      color: "#3178C6",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">TS</text>
        </svg>
      ),
    },
    tailwind: {
      color: "#06B6D4",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.42 10.88 14.56 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.58 7.12 14.44 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.42 16.88 9.56 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.58 13.12 9.44 12 7 12z" />
        </svg>
      ),
    },
    python: {
      color: "#3776AB",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2c-3 0-5 1-5 3.5V8h5v1H6c-2 0-4 1.5-4 4.5S4 18 6 18h2v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 3-1 3-2.5V5.5C19.5 3 17 2 12 2zm-2.5 2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" />
          <path d="M12 22c3 0 5-1 5-3.5V16h-5v-1h6c2 0 4-1.5 4-4.5S20 6 18 6h-2v2.5c0 2-1.5 3.5-3.5 3.5h-5c-1.5 0-3 1-3 2.5v4.5C4.5 21 7 22 12 22zm2.5-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B" />
        </svg>
      ),
    },
    aws: {
      color: "#FF9900",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M6.5 12.5c0 2.5 2.5 4.5 5.5 4.5s5.5-2 5.5-4.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 14l2 1.5M20 14l-2 1.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 7.5l2 4.5 2-3 2 3 2-4.5" stroke="#232F3E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    docker: {
      color: "#2496ED",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="11" width="3" height="2.5" rx="0.3" fill="#2496ED" />
          <rect x="7" y="11" width="3" height="2.5" rx="0.3" fill="#2496ED" />
          <rect x="11" y="11" width="3" height="2.5" rx="0.3" fill="#2496ED" />
          <rect x="7" y="8" width="3" height="2.5" rx="0.3" fill="#2496ED" />
          <rect x="11" y="8" width="3" height="2.5" rx="0.3" fill="#2496ED" />
          <rect x="11" y="5" width="3" height="2.5" rx="0.3" fill="#2496ED" />
          <path d="M1 13.5c1-2 3-2.5 5-2.5h14c2 0 3 2 2.5 4-1 4-5 6-10.5 6S2 18 1 13.5z" stroke="#2496ED" strokeWidth="1.2" fill="none" />
        </svg>
      ),
    },
    postgresql: {
      color: "#336791",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="7" rx="8" ry="4" stroke="#336791" strokeWidth="1.3" />
          <path d="M4 7v10c0 2.2 3.6 4 8 4s8-1.8 8-4V7" stroke="#336791" strokeWidth="1.3" />
          <path d="M4 12c0 2.2 3.6 4 8 4s8-1.8 8-4" stroke="#336791" strokeWidth="1.3" />
        </svg>
      ),
    },
    stripe: {
      color: "#635BFF",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#635BFF" />
          <path d="M12.5 8c-2 0-3 .8-3 2.2 0 2.6 4 2 4 3.6 0 .6-.6 1-1.5 1-1.2 0-2.3-.5-3-1.2v2.2c.8.5 1.8.7 3 .7 2 0 3.2-.8 3.2-2.3 0-2.7-4-2-4-3.5 0-.5.5-.9 1.3-.9 1 0 2 .4 2.7 1V9c-.8-.6-1.8-.9-2.7-.9z" fill="#fff" />
        </svg>
      ),
    },
  };

  const icon = icons[name];
  if (!icon) return null;

  return <div className={base}>{icon.svg}</div>;
}

const techStack = [
  { name: "react", label: "React" },
  { name: "next", label: "Next.js" },
  { name: "node", label: "Node.js" },
  { name: "typescript", label: "TypeScript" },
  { name: "tailwind", label: "Tailwind CSS" },
  { name: "python", label: "Python" },
  { name: "aws", label: "AWS" },
  { name: "docker", label: "Docker" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "stripe", label: "Stripe" },
];

function TechStackSection() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: SERVICE_COLOR }}
            />
            <h2 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground">
              Teknoloji Yığını
            </h2>
          </div>
          <p className="font-serif text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.01em] text-foreground">
            Güvendiğimiz teknolojiler
          </p>
        </div>

        {/* 5-column grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="glass rounded-xl p-5 flex flex-col items-center gap-3 hover:shadow-md transition-all duration-200"
            >
              <TechIcon name={tech.name} />
              <span className="text-[14px] font-semibold text-foreground">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   Section 4 — ProcessTimeline
   ══════════════════════════════════════════════════════════ */

const processSteps = [
  {
    num: "01",
    title: "Keşif",
    description:
      "İş hedeflerinizi, kullanıcı ihtiyaçlarını ve teknik gereksinimleri derinlemesine analiz ediyoruz.",
  },
  {
    num: "02",
    title: "Tasarım",
    description:
      "Kullanıcı deneyimi odaklı wireframe ve UI tasarımları oluşturuyor, onayınızı alıyoruz.",
  },
  {
    num: "03",
    title: "Geliştirme",
    description:
      "Agile metodoloji ile sprint bazlı geliştirme yapıyor, düzenli demo sunuyoruz.",
  },
  {
    num: "04",
    title: "Test",
    description:
      "Kapsamlı QA süreçleri, performans testleri ve güvenlik taramaları uyguluyoruz.",
  },
  {
    num: "05",
    title: "Lansman",
    description:
      "Sorunsuz deployment, izleme ve lansman sonrası destek ile projeyi hayata geçiriyoruz.",
  },
];

function ProcessTimeline() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <div className="flex items-center gap-2.5 mb-6">
          <div
            className="w-5 h-5 rounded"
            style={{ backgroundColor: SERVICE_COLOR }}
          />
          <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
            Sürecimiz
          </span>
        </div>
        <h2 className="font-serif text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-3xl mb-5">
          Fikirden lansmanına, adım adım
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Şeffaf ve öngörülebilir bir süreç ile projenizi zamanında ve bütçe
          dahilinde teslim ediyoruz.
        </p>

        {/* 5-column timeline */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {processSteps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="glass rounded-xl p-6 h-full flex flex-col hover:shadow-md transition-all duration-200">
                <span
                  className="text-[40px] font-bold leading-none mb-4 opacity-20"
                  style={{ color: SERVICE_COLOR }}
                >
                  {step.num}
                </span>
                <h3 className="text-[18px] font-semibold text-foreground leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (hidden on last item and mobile) */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 z-10">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ color: SERVICE_COLOR }}
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              )}
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

export default function WebGelistirmeContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServiceHero />
      <CapabilitiesGrid />
      <TechStackSection />
      <ProcessTimeline />
      <CTASection />
      <Footer />
    </div>
  );
}
