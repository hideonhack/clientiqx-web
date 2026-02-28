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

function FinansMockUI() {
  return (
    <div className="relative w-full h-full">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${SERVICE_COLOR}, #818CF8, #A78BFA)`,
        }}
      />

      {/* Financial dashboard */}
      <div className="absolute top-[10%] left-[6%] w-[55%] h-[68%] bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-8 bg-gray-100/90 flex items-center gap-1.5 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <div className="ml-3 h-4 w-28 bg-gray-200/80 rounded-full" />
        </div>
        <div className="p-4 space-y-3">
          <div className="flex gap-2">
            <div
              className="h-12 flex-1 rounded-lg"
              style={{ backgroundColor: `${SERVICE_COLOR}15` }}
            />
            <div className="h-12 flex-1 bg-foreground/[0.04] rounded-lg" />
          </div>
          {/* Chart lines */}
          <div className="h-20 bg-foreground/[0.03] rounded-lg relative overflow-hidden">
            <div
              className="absolute bottom-0 left-0 right-0 h-12 opacity-30 rounded-b-lg"
              style={{
                background: `linear-gradient(to top, ${SERVICE_COLOR}30, transparent)`,
              }}
            />
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
              <path d="M0 60 Q30 45, 50 50 T100 35 T150 25 T200 15" stroke={SERVICE_COLOR} strokeWidth="2" fill="none" opacity="0.4" />
            </svg>
          </div>
          <div className="h-3 bg-foreground/5 rounded w-2/3" />
        </div>
      </div>

      {/* Transaction card */}
      <div className="absolute top-[18%] right-[5%] w-[40%] h-[52%] bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="p-4 space-y-3">
          <div className="h-3 bg-foreground/8 rounded w-1/2" />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: `${SERVICE_COLOR}20` }}
              />
              <div className="h-2.5 bg-foreground/[0.06] rounded flex-1" />
              <div className="h-2.5 w-12 bg-green-100 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: `${SERVICE_COLOR}15` }}
              />
              <div className="h-2.5 bg-foreground/[0.06] rounded flex-1" />
              <div className="h-2.5 w-12 bg-red-100 rounded" />
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded"
                style={{ backgroundColor: `${SERVICE_COLOR}10` }}
              />
              <div className="h-2.5 bg-foreground/[0.06] rounded flex-1" />
              <div className="h-2.5 w-12 bg-green-100 rounded" />
            </div>
          </div>
          <div className="mt-2 h-10 bg-foreground/[0.03] rounded-lg" />
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
                Finans Çözümleri
              </span>
            </div>

            <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
              Güvenli ve uyumlu finansal teknoloji altyapıları
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
              Ödeme sistemleri, risk yönetimi, regülasyon uyumluluğu ve finansal
              raporlama çözümleri ile finans sektörüne özel, güvenli ve
              ölçeklenebilir yazılımlar geliştiriyoruz.
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
              <FinansMockUI />
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
    icon: "payment",
    title: "Ödeme Altyapıları",
    description:
      "PCI DSS uyumlu, güvenli ödeme işleme ve para transferi sistemleri.",
  },
  {
    icon: "risk",
    title: "Risk Yönetimi",
    description:
      "Kredi skorlama, risk değerlendirme ve portföy yönetimi araçları.",
  },
  {
    icon: "compliance",
    title: "Regülasyon & Uyumluluk",
    description:
      "BDDK, SPK ve uluslararası finansal düzenlemelere uyum.",
  },
  {
    icon: "reporting",
    title: "Finansal Raporlama",
    description:
      "Gerçek zamanlı finansal dashboard&apos;lar, otomatik raporlama ve denetim izi.",
  },
  {
    icon: "fraud",
    title: "Dolandırıcılık Tespiti",
    description:
      "AI destekli anomali tespiti ve gerçek zamanlı işlem izleme.",
  },
  {
    icon: "blockchain",
    title: "Blockchain & DeFi",
    description:
      "Akıllı kontratlar, tokenizasyon ve merkeziyetsiz finans çözümleri.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const style = { color: SERVICE_COLOR };
  switch (type) {
    case "payment":
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
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
          <line x1="5" y1="15" x2="9" y2="15" />
        </svg>
      );
    case "risk":
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
          <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
        </svg>
      );
    case "compliance":
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
          <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      );
    case "reporting":
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
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    case "fraud":
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
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8v3l2 2" />
        </svg>
      );
    case "blockchain":
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
          <rect x="1" y="6" width="8" height="8" rx="1" />
          <rect x="15" y="6" width="8" height="8" rx="1" />
          <rect x="8" y="14" width="8" height="8" rx="1" />
          <path d="M9 10h6M12 14V10" />
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
          Finans sektörüne özel güvenli çözümler
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Ödeme altyapılarından risk yönetimine, regülasyon uyumluluğundan
          blockchain çözümlerine kadar finans sektörünün tüm dijital
          ihtiyaçlarını karşılıyoruz.
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
    python: {
      color: "#3776AB",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2c-3 0-5 1-5 3.5V8h5v1H6c-2 0-4 1.5-4 4.5S4 18 6 18h2v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 3-1 3-2.5V5.5C19.5 3 17 2 12 2zm-2.5 2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" />
          <path d="M12 22c3 0 5-1 5-3.5V16h-5v-1h6c2 0 4-1.5 4-4.5S20 6 18 6h-2v2.5c0 2-1.5 3.5-3.5 3.5h-5c-1.5 0-3 1-3 2.5v4.5C4.5 21 7 22 12 22zm2.5-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B" />
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
    typescript: {
      color: "#3178C6",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">TS</text>
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
    kubernetes: {
      color: "#326CE5",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#326CE5" fillOpacity="0.15" stroke="#326CE5" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="3" stroke="#326CE5" strokeWidth="1.2" />
          <path d="M12 9v-2M12 17v-2M9.5 10.5L8 9M16 15l-1.5-1.5M9.5 13.5L8 15M16 9l-1.5 1.5" stroke="#326CE5" strokeWidth="1" strokeLinecap="round" />
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
    stripe: {
      color: "#635BFF",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="4" fill="#635BFF" />
          <path d="M12.5 8c-2 0-3 .8-3 2.2 0 2.6 4 2 4 3.6 0 .6-.6 1-1.5 1-1.2 0-2.3-.5-3-1.2v2.2c.8.5 1.8.7 3 .7 2 0 3.2-.8 3.2-2.3 0-2.7-4-2-4-3.5 0-.5.5-.9 1.3-.9 1 0 2 .4 2.7 1V9c-.8-.6-1.8-.9-2.7-.9z" fill="#fff" />
        </svg>
      ),
    },
    terraform: {
      color: "#7B42BC",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M1 4.5l7 4v8l-7-4z" fill="#7B42BC" fillOpacity="0.4" />
          <path d="M9 0.5l7 4v8l-7-4z" fill="#7B42BC" fillOpacity="0.7" />
          <path d="M17 4.5l7 4v8l-7-4z" fill="#7B42BC" fillOpacity="0.4" />
          <path d="M9 13.5l7 4v8l-7-4z" fill="#7B42BC" />
        </svg>
      ),
    },
  };

  const icon = icons[name];
  if (!icon) return null;

  return <div className={base}>{icon.svg}</div>;
}

const techStack = [
  { name: "python", label: "Python" },
  { name: "node", label: "Node.js" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "typescript", label: "TypeScript" },
  { name: "aws", label: "AWS" },
  { name: "kubernetes", label: "Kubernetes" },
  { name: "docker", label: "Docker" },
  { name: "react", label: "React" },
  { name: "stripe", label: "Stripe" },
  { name: "terraform", label: "Terraform" },
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
    title: "Güvenlik Değerlendirme",
    description:
      "Mevcut altyapınızın güvenlik ve uyumluluk durumunu değerlendiriyoruz.",
  },
  {
    num: "02",
    title: "Mimari",
    description:
      "Yüksek güvenlikli, ölçeklenebilir ve regülasyona uygun mimari tasarlıyoruz.",
  },
  {
    num: "03",
    title: "Geliştirme",
    description:
      "Katmanlı güvenlik ile sprint bazlı geliştirme yapıyoruz.",
  },
  {
    num: "04",
    title: "Uyumluluk Testi",
    description:
      "Penetrasyon testleri, güvenlik denetimleri ve regülasyon kontrolü.",
  },
  {
    num: "05",
    title: "Devreye Alma",
    description:
      "Kontrollü go-live, 7/24 izleme ve incident response planı.",
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
          Güvenli finansal altyapıya giden yol
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Güvenlik değerlendirmesinden canlıya geçişe kadar her adımda
          regülasyon uyumluluğu ve veri güvenliğini ön planda tutuyoruz.
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

export default function FinansContent() {
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
