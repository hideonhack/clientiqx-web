"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Service color ────────────────────────────────────── */
const SERVICE_COLOR = "#A16207";

/* ══════════════════════════════════════════════════════════
   Section 1 — ServiceHero
   ══════════════════════════════════════════════════════════ */

function DanismanlikMockUI() {
  return (
    <div className="relative w-full h-full">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${SERVICE_COLOR}, #D97706, #F59E0B)`,
        }}
      />

      {/* Gantt chart / Timeline window */}
      <div className="absolute top-[10%] left-[6%] w-[60%] h-[70%] bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-8 bg-gray-100/90 flex items-center gap-1.5 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <div className="ml-3 h-4 w-28 bg-gray-200/80 rounded-full" />
        </div>
        <div className="p-4">
          {/* Timeline header */}
          <div className="flex gap-1 mb-3">
            <div className="w-20 h-3 bg-foreground/8 rounded" />
            <div className="flex-1 flex gap-0.5">
              <div className="flex-1 h-3 bg-foreground/[0.04] rounded" />
              <div className="flex-1 h-3 bg-foreground/[0.04] rounded" />
              <div className="flex-1 h-3 bg-foreground/[0.04] rounded" />
              <div className="flex-1 h-3 bg-foreground/[0.04] rounded" />
              <div className="flex-1 h-3 bg-foreground/[0.04] rounded" />
              <div className="flex-1 h-3 bg-foreground/[0.04] rounded" />
            </div>
          </div>
          {/* Gantt bars */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-1">
              <div className="w-20 h-2 bg-foreground/8 rounded" />
              <div className="flex-1 flex">
                <div className="w-[45%] h-5 rounded-md" style={{ backgroundColor: `${SERVICE_COLOR}40` }} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-20 h-2 bg-foreground/6 rounded" />
              <div className="flex-1 flex pl-[15%]">
                <div className="w-[35%] h-5 rounded-md" style={{ backgroundColor: `${SERVICE_COLOR}30` }} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-20 h-2 bg-foreground/6 rounded" />
              <div className="flex-1 flex pl-[30%]">
                <div className="w-[50%] h-5 rounded-md" style={{ backgroundColor: `${SERVICE_COLOR}50` }} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-20 h-2 bg-foreground/6 rounded" />
              <div className="flex-1 flex pl-[50%]">
                <div className="w-[30%] h-5 rounded-md" style={{ backgroundColor: `${SERVICE_COLOR}35` }} />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-20 h-2 bg-foreground/6 rounded" />
              <div className="flex-1 flex pl-[60%]">
                <div className="w-[35%] h-5 rounded-md" style={{ backgroundColor: `${SERVICE_COLOR}45` }} />
              </div>
            </div>
          </div>
          {/* Milestone markers */}
          <div className="flex mt-3 pl-20">
            <div className="flex-1 flex items-center justify-around">
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: `${SERVICE_COLOR}70` }} />
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: `${SERVICE_COLOR}70` }} />
              <div className="w-3 h-3 rotate-45" style={{ backgroundColor: `${SERVICE_COLOR}70` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Strategy card */}
      <div className="absolute top-[18%] right-[5%] w-[38%] h-[45%] bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-7 bg-gray-100/90 flex items-center px-3">
          <div className="h-3 w-14 bg-gray-200/80 rounded" />
        </div>
        <div className="p-3 space-y-2">
          {/* Progress indicators */}
          <div className="space-y-2">
            <div>
              <div className="flex justify-between mb-1">
                <div className="h-2 w-12 bg-foreground/8 rounded" />
                <div className="h-2 w-6 bg-foreground/6 rounded" />
              </div>
              <div className="h-2 bg-foreground/[0.06] rounded-full">
                <div className="h-2 rounded-full w-[85%]" style={{ backgroundColor: `${SERVICE_COLOR}60` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <div className="h-2 w-14 bg-foreground/8 rounded" />
                <div className="h-2 w-6 bg-foreground/6 rounded" />
              </div>
              <div className="h-2 bg-foreground/[0.06] rounded-full">
                <div className="h-2 rounded-full w-[60%]" style={{ backgroundColor: `${SERVICE_COLOR}50` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <div className="h-2 w-10 bg-foreground/8 rounded" />
                <div className="h-2 w-6 bg-foreground/6 rounded" />
              </div>
              <div className="h-2 bg-foreground/[0.06] rounded-full">
                <div className="h-2 rounded-full w-[40%]" style={{ backgroundColor: `${SERVICE_COLOR}40` }} />
              </div>
            </div>
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
                Danışmanlık
              </span>
            </div>

            <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
              Dijital dönüşüm stratejinizi birlikte oluşturalım
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
              Teknoloji seçimi, proje planlama ve ekip yapılandırmasından süreç
              iyileştirmeye kadar dijital dönüşüm yolculuğunuzda yanınızdayız.
              Doğru strateji ile yatırımınızın geri dönüşünü maksimize edin.
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
              <DanismanlikMockUI />
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
    icon: "strategy",
    title: "Dijital Dönüşüm Stratejisi",
    description:
      "Mevcut durumunuzu analiz ediyor, dijital olgunluk haritanızı çıkarıyoruz.",
  },
  {
    icon: "tech",
    title: "Teknoloji Danışmanlığı",
    description:
      "Doğru teknoloji yığını seçimi, mimari kararlar ve vendor değerlendirme.",
  },
  {
    icon: "project",
    title: "Proje Yönetimi",
    description:
      "Agile/Scrum metodolojileri ile proje planlama, takip ve risk yönetimi.",
  },
  {
    icon: "process",
    title: "Süreç İyileştirme",
    description:
      "İş süreçlerinizi analiz ediyor, verimlilik artışı için optimizasyonlar öneriyoruz.",
  },
  {
    icon: "team",
    title: "Ekip Oluşturma & Mentorluk",
    description:
      "Teknik ekip kurulumu, yetenek değerlendirme ve geliştirici mentorluk programları.",
  },
  {
    icon: "security",
    title: "Güvenlik & Uyumluluk",
    description:
      "KVKK, ISO 27001 ve SOC 2 uyumluluk danışmanlığı ve güvenlik denetimleri.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const style = { color: SERVICE_COLOR };
  switch (type) {
    case "strategy":
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
          <path d="M2 20h20M5 20V10l4-6h6l4 6v10" />
          <path d="M9 20v-4h6v4" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      );
    case "tech":
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
    case "project":
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
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "process":
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
    case "team":
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
    case "security":
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
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
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
          Dijital dönüşümde kapsamlı danışmanlık
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Strateji belirleme, teknoloji seçimi ve ekip yapılandırmasından
          güvenlik uyumluluğuna kadar her aşamada uzman desteği sunuyoruz.
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
    terraform: {
      color: "#7B42BC",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M1 4l7 4v8l-7-4V4z" fill="#7B42BC" fillOpacity="0.3" />
          <path d="M9 8l7 4v8l-7-4V8z" fill="#7B42BC" />
          <path d="M17 4l7 4v8l-7-4V4z" fill="#7B42BC" fillOpacity="0.6" />
          <path d="M9 0l7 4v8l-7-4V0z" fill="#7B42BC" fillOpacity="0.45" />
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
  };

  const icon = icons[name];
  if (!icon) return null;

  return <div className={base}>{icon.svg}</div>;
}

const techStack = [
  { name: "aws", label: "AWS" },
  { name: "docker", label: "Docker" },
  { name: "kubernetes", label: "Kubernetes" },
  { name: "terraform", label: "Terraform" },
  { name: "python", label: "Python" },
  { name: "node", label: "Node.js" },
  { name: "postgresql", label: "PostgreSQL" },
  { name: "typescript", label: "TypeScript" },
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

        {/* 4-column grid for 8 techs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
    title: "Değerlendirme",
    description:
      "Mevcut altyapınızı, süreçlerinizi ve ekibinizi kapsamlı değerlendiriyoruz.",
  },
  {
    num: "02",
    title: "Strateji",
    description:
      "İş hedeflerinize uygun dijital dönüşüm stratejisi ve yol haritası oluşturuyoruz.",
  },
  {
    num: "03",
    title: "Yol Haritası",
    description:
      "Önceliklendirme, bütçe planlaması ve milestone'ları belirliyoruz.",
  },
  {
    num: "04",
    title: "Uygulama",
    description:
      "Stratejiyi hayata geçiriyor, ekibinizle birlikte çalışıyoruz.",
  },
  {
    num: "05",
    title: "İzleme",
    description:
      "Sonuçları ölçüyor, sürekli iyileştirme döngüsünü devam ettiriyoruz.",
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
          Değerlendirmeden uygulamaya, adım adım
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Şeffaf ve sonuç odaklı danışmanlık sürecimiz ile dijital dönüşüm
          yolculuğunuzu güvenle yönetiyoruz.
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

export default function DanismanlikContent() {
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
