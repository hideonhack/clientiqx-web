"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Service color ────────────────────────────────────── */
const SERVICE_COLOR = "#6366F1";

/* ══════════════════════════════════════════════════════════
   Section 1 — ServiceHero
   ══════════════════════════════════════════════════════════ */

function ErpCrmMockUI() {
  return (
    <div className="relative w-full h-full">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${SERVICE_COLOR}, #818CF8, #A78BFA)`,
        }}
      />

      {/* Dashboard window */}
      <div className="absolute top-[10%] left-[6%] w-[58%] h-[70%] bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-8 bg-gray-100/90 flex items-center gap-1.5 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <div className="ml-3 h-4 w-24 bg-gray-200/80 rounded-full" />
        </div>
        <div className="p-4 space-y-3">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            <div
              className="h-12 rounded-lg flex flex-col items-center justify-center"
              style={{ backgroundColor: `${SERVICE_COLOR}12` }}
            >
              <div className="h-2 w-8 bg-foreground/10 rounded mb-1" />
              <div className="h-3 w-10 rounded" style={{ backgroundColor: `${SERVICE_COLOR}40` }} />
            </div>
            <div className="h-12 bg-foreground/[0.04] rounded-lg flex flex-col items-center justify-center">
              <div className="h-2 w-8 bg-foreground/10 rounded mb-1" />
              <div className="h-3 w-10 bg-foreground/10 rounded" />
            </div>
            <div className="h-12 bg-foreground/[0.04] rounded-lg flex flex-col items-center justify-center">
              <div className="h-2 w-8 bg-foreground/10 rounded mb-1" />
              <div className="h-3 w-10 bg-foreground/10 rounded" />
            </div>
          </div>
          {/* Data table rows */}
          <div className="space-y-1.5 mt-2">
            <div className="flex gap-2">
              <div className="h-2 w-16 bg-foreground/8 rounded" />
              <div className="h-2 w-12 bg-foreground/5 rounded" />
              <div className="h-2 w-10 rounded" style={{ backgroundColor: `${SERVICE_COLOR}20` }} />
              <div className="h-2 w-8 bg-foreground/5 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-16 bg-foreground/6 rounded" />
              <div className="h-2 w-12 bg-foreground/5 rounded" />
              <div className="h-2 w-10 bg-foreground/5 rounded" />
              <div className="h-2 w-8 bg-foreground/5 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-16 bg-foreground/6 rounded" />
              <div className="h-2 w-12 bg-foreground/5 rounded" />
              <div className="h-2 w-10 rounded" style={{ backgroundColor: `${SERVICE_COLOR}20` }} />
              <div className="h-2 w-8 bg-foreground/5 rounded" />
            </div>
            <div className="flex gap-2">
              <div className="h-2 w-16 bg-foreground/6 rounded" />
              <div className="h-2 w-12 bg-foreground/5 rounded" />
              <div className="h-2 w-10 bg-foreground/5 rounded" />
              <div className="h-2 w-8 bg-foreground/5 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Chart panel */}
      <div className="absolute top-[18%] right-[5%] w-[40%] h-[55%] bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-7 bg-gray-100/90 flex items-center px-3">
          <div className="h-3 w-16 bg-gray-200/80 rounded" />
        </div>
        <div className="p-4">
          {/* Bar chart */}
          <div className="flex items-end gap-1.5 h-20">
            <div className="w-4 h-6 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}30` }} />
            <div className="w-4 h-10 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}50` }} />
            <div className="w-4 h-14 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}70` }} />
            <div className="w-4 h-8 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}40` }} />
            <div className="w-4 h-16 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}60` }} />
            <div className="w-4 h-20 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}90` }} />
            <div className="w-4 h-12 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}50` }} />
          </div>
          <div className="mt-3 space-y-1">
            <div className="h-2 w-full bg-foreground/5 rounded" />
            <div className="h-2 w-3/4 bg-foreground/5 rounded" />
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
                ERP &amp; CRM
              </span>
            </div>

            <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
              Kurumsal süreçlerinizi tek platformda yönetin
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
              Özel ERP ve CRM çözümleri ile satış, stok, muhasebe ve müşteri
              ilişkilerinizi entegre bir platformda yönetin. Veri silosu
              sorunlarını ortadan kaldırın, gerçek zamanlı raporlarla karar alın.
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
              <ErpCrmMockUI />
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
    icon: "erp",
    title: "Özel ERP Çözümleri",
    description:
      "İş süreçlerinize özel modüler ERP sistemleri tasarlıyor ve geliştiriyoruz.",
  },
  {
    icon: "crm",
    title: "CRM Platformları",
    description:
      "Müşteri yaşam döngüsünü uçtan uca yöneten özel CRM platformları.",
  },
  {
    icon: "bi",
    title: "İş Zekası & Raporlama",
    description:
      "Gerçek zamanlı dashboard'lar, KPI takibi ve otomatik raporlama araçları.",
  },
  {
    icon: "integration",
    title: "Entegrasyon & Migrasyon",
    description:
      "Mevcut sistemlerinizi yeni platforma sorunsuz taşıyor, üçüncü parti entegrasyonlar yapıyoruz.",
  },
  {
    icon: "automation",
    title: "Süreç Otomasyonu",
    description:
      "Tekrarlayan iş süreçlerini otomatikleştirerek operasyonel verimliliği artırıyoruz.",
  },
  {
    icon: "support",
    title: "Eğitim & Destek",
    description:
      "Kullanıcı eğitimleri, teknik dokümantasyon ve sürekli destek hizmeti sunuyoruz.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const style = { color: SERVICE_COLOR };
  switch (type) {
    case "erp":
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
    case "crm":
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
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "bi":
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
          <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" />
          <path d="M2 20h20" />
        </svg>
      );
    case "integration":
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
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" strokeLinecap="round" />
          <path d="M17 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "automation":
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
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "support":
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
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          <path d="M8 10h8M8 14h4" strokeLinecap="round" />
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
        <h2 className="font-bold text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-3xl mb-5">
          Uçtan uca ERP &amp; CRM çözümleri
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Satıştan muhasebeye, stoktan müşteri ilişkilerine kadar tüm iş
          süreçlerinizi tek bir platformda yönetin.
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
    kubernetes: {
      color: "#326CE5",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#326CE5" fillOpacity="0.15" stroke="#326CE5" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="3" stroke="#326CE5" strokeWidth="1.2" />
          <path d="M12 9v-2M12 17v-2M9 12H7M17 12h-2M9.5 9.5L8 8M16 16l-1.5-1.5M9.5 14.5L8 16M16 8l-1.5 1.5" stroke="#326CE5" strokeWidth="0.8" strokeLinecap="round" />
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
  { name: "node", label: "Node.js" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "typescript", label: "TypeScript" },
  { name: "python", label: "Python" },
  { name: "aws", label: "AWS" },
  { name: "docker", label: "Docker" },
  { name: "next", label: "Next.js" },
  { name: "stripe", label: "Stripe" },
  { name: "kubernetes", label: "Kubernetes" },
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
          <p className="font-bold text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.01em] text-foreground">
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
    title: "Süreç Analizi",
    description:
      "Mevcut iş süreçlerinizi haritalıyor, darboğazları ve iyileştirme fırsatlarını belirliyoruz.",
  },
  {
    num: "02",
    title: "Mimari Tasarım",
    description:
      "Modüler ve ölçeklenebilir sistem mimarisini planlıyoruz.",
  },
  {
    num: "03",
    title: "Geliştirme",
    description:
      "Sprint bazlı geliştirme ile modülleri teker teker hayata geçiriyoruz.",
  },
  {
    num: "04",
    title: "Veri Aktarımı",
    description:
      "Mevcut verilerinizi güvenli şekilde yeni sisteme taşıyoruz.",
  },
  {
    num: "05",
    title: "Canlıya Geçiş",
    description:
      "Eğitim, paralel çalışma ve sorunsuz geçiş ile sistemi devreye alıyoruz.",
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
        <h2 className="font-bold text-[40px] lg:text-[52px] leading-[1.08] tracking-[-0.02em] text-foreground max-w-3xl mb-5">
          Analizden canlıya, adım adım
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Şeffaf ve öngörülebilir bir süreç ile ERP &amp; CRM projenizi
          zamanında ve bütçe dahilinde teslim ediyoruz.
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

export default function ErpCrmContent() {
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
