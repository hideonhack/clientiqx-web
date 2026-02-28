"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Service color ────────────────────────────────────── */
const SERVICE_COLOR = "#EC4899";

/* ══════════════════════════════════════════════════════════
   Section 1 — ServiceHero
   ══════════════════════════════════════════════════════════ */

function DesignToolMockUI() {
  return (
    <div className="relative w-full h-full">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${SERVICE_COLOR}, #F472B6, #FBCFE8)`,
        }}
      />

      {/* Main artboard window */}
      <div className="absolute top-[10%] left-[8%] w-[54%] h-[68%] bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-8 bg-gray-100/90 flex items-center gap-1.5 px-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <div className="ml-3 h-4 w-20 bg-gray-200/80 rounded-full" />
        </div>
        <div className="p-4">
          {/* Artboard with design elements */}
          <div className="bg-foreground/[0.03] rounded-lg p-3 h-[calc(100%-8px)]">
            {/* Header element */}
            <div
              className="w-full h-10 rounded-lg mb-2"
              style={{ backgroundColor: `${SERVICE_COLOR}18` }}
            />
            {/* Circle and square side by side */}
            <div className="flex gap-2 mb-2">
              <div
                className="w-10 h-10 rounded-full"
                style={{ backgroundColor: `${SERVICE_COLOR}25` }}
              />
              <div
                className="w-10 h-10 rounded-md"
                style={{ backgroundColor: `${SERVICE_COLOR}15` }}
              />
              <div className="flex-1 h-10 bg-foreground/[0.04] rounded-lg" />
            </div>
            {/* Text line placeholders */}
            <div className="space-y-1.5 mt-3">
              <div className="h-2.5 bg-foreground/8 rounded w-3/4" />
              <div className="h-2 bg-foreground/5 rounded w-full" />
              <div className="h-2 bg-foreground/5 rounded w-1/2" />
            </div>
            {/* Button mockup */}
            <div
              className="mt-3 h-7 w-20 rounded-md"
              style={{ backgroundColor: `${SERVICE_COLOR}30` }}
            />
          </div>
        </div>
      </div>

      {/* Color palette panel */}
      <div className="absolute top-[15%] right-[5%] w-[36%] h-[40%] bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div
          className="h-7 flex items-center px-3"
          style={{ backgroundColor: `${SERVICE_COLOR}15` }}
        >
          <div className="h-3 w-14 bg-foreground/10 rounded" />
        </div>
        <div className="p-3 space-y-2">
          <div className="text-[7px] text-foreground/30 font-medium uppercase tracking-wider">Renkler</div>
          <div className="grid grid-cols-4 gap-1.5">
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#EC4899" }} />
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#F472B6" }} />
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#FBCFE8" }} />
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#1F2937" }} />
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#6366F1" }} />
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#818CF8" }} />
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#F9FAFB" }} />
            <div className="w-full aspect-square rounded-md" style={{ backgroundColor: "#9CA3AF" }} />
          </div>
          <div className="mt-1 space-y-1">
            <div className="h-2 bg-foreground/5 rounded w-full" />
            <div className="h-2 bg-foreground/5 rounded w-2/3" />
          </div>
        </div>
      </div>

      {/* Layers panel */}
      <div className="absolute bottom-[8%] right-[8%] w-[34%] h-[28%] bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
        <div className="h-6 bg-gray-100/90 flex items-center px-3">
          <div className="h-2.5 w-12 bg-gray-200/80 rounded" />
        </div>
        <div className="p-2 space-y-1">
          <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded" style={{ backgroundColor: `${SERVICE_COLOR}12` }}>
            <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: `${SERVICE_COLOR}40` }} />
            <div className="h-2 w-12 bg-foreground/10 rounded" />
          </div>
          <div className="flex items-center gap-1.5 px-1.5 py-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
            <div className="h-2 w-14 bg-foreground/6 rounded" />
          </div>
          <div className="flex items-center gap-1.5 px-1.5 py-0.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-foreground/10" />
            <div className="h-2 w-10 bg-foreground/6 rounded" />
          </div>
          <div className="flex items-center gap-1.5 px-1.5 py-0.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-foreground/10" />
            <div className="h-2 w-16 bg-foreground/6 rounded" />
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
                UI/UX Tasarım
              </span>
            </div>

            <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
              Kullanıcı merkezli dijital deneyimler tasarlıyoruz
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
              Derinlemesine kullanıcı araştırması, modern arayüz tasarımı ve
              kapsamlı test süreçleri ile dijital ürünlerinizi farklılaştırıyoruz.
              Tutarlı tasarım sistemleri ve erişilebilir deneyimlerle markanızı güçlendirin.
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
              <DesignToolMockUI />
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
    icon: "research",
    title: "Kullanıcı Araştırması",
    description:
      "Derinlemesine kullanıcı araştırması ve persona oluşturma.",
  },
  {
    icon: "wireframe",
    title: "Wireframe & Prototipleme",
    description:
      "Hızlı iterasyonlarla düşük ve yüksek sadakatli prototipler.",
  },
  {
    icon: "uidesign",
    title: "UI Tasarım",
    description:
      "Modern, erişilebilir ve marka uyumlu arayüz tasarımı.",
  },
  {
    icon: "designsystem",
    title: "Tasarım Sistemi",
    description:
      "Tutarlı ve ölçeklenebilir komponent kütüphaneleri.",
  },
  {
    icon: "testing",
    title: "Kullanılabilirlik Testi",
    description:
      "A/B testleri ve kullanıcı geri bildirim analizi.",
  },
  {
    icon: "responsive",
    title: "Responsive & Erişilebilirlik",
    description:
      "Tüm cihazlarda kusursuz ve erişilebilir deneyimler.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const style = { color: SERVICE_COLOR };
  switch (type) {
    case "research":
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
          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
          <path d="M11 8v6M8 11h6" strokeLinecap="round" />
        </svg>
      );
    case "wireframe":
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
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 9v12" />
          <rect x="12" y="12" width="6" height="3" rx="0.5" />
        </svg>
      );
    case "uidesign":
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
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "designsystem":
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
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "testing":
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
          <path d="M9 11l3 3L22 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      );
    case "responsive":
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
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <rect x="6" y="6" width="5" height="8" rx="1" />
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
          Uçtan uca tasarım çözümleri
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Kullanıcı araştırmasından tasarım sistemlerine, prototiplemeden
          erişilebilirlik testlerine kadar dijital ürünlerinizi mükemmelleştiren
          tüm tasarım hizmetlerini sunuyoruz.
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
    figma: {
      color: "#F24E1E",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="8" y="2" width="6" height="6" rx="3" fill="#FF7262" />
          <rect x="2" y="2" width="6" height="6" rx="3" fill="#F24E1E" />
          <rect x="2" y="8" width="6" height="6" rx="3" fill="#A259FF" />
          <rect x="2" y="14" width="6" height="6" rx="3" fill="#0ACF83" />
          <circle cx="11" cy="11" r="3" fill="#1ABCFE" />
        </svg>
      ),
    },
    sketch: {
      color: "#F7B500",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 9l9 13 9-13-9-7z" fill="#F7B500" fillOpacity="0.2" stroke="#F7B500" strokeWidth="1.3" />
          <path d="M3 9h18" stroke="#F7B500" strokeWidth="1.2" />
          <path d="M7 2l-4 7M17 2l4 7M12 22l-5-13M12 22l5-13" stroke="#F7B500" strokeWidth="1" />
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
    tailwind: {
      color: "#06B6D4",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.42 10.88 14.56 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.58 7.12 14.44 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.42 16.88 9.56 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.58 13.12 9.44 12 7 12z" />
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
    typescript: {
      color: "#3178C6",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
          <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">TS</text>
        </svg>
      ),
    },
    framer: {
      color: "#0055FF",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 2h14v7H12l7 7H5v-7h7L5 2z" fill="#0055FF" fillOpacity="0.15" stroke="#0055FF" strokeWidth="1.3" strokeLinejoin="round" />
          <path d="M5 16l7 6v-6H5z" fill="#0055FF" fillOpacity="0.3" stroke="#0055FF" strokeWidth="1.3" strokeLinejoin="round" />
        </svg>
      ),
    },
    adobexd: {
      color: "#FF61F6",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="#470137" />
          <text x="12" y="16" textAnchor="middle" fill="#FF61F6" fontSize="9" fontWeight="bold">Xd</text>
        </svg>
      ),
    },
    storybook: {
      color: "#FF4785",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="2" width="16" height="20" rx="2" fill="#FF4785" fillOpacity="0.15" stroke="#FF4785" strokeWidth="1.3" />
          <path d="M15 3v2l-1-1-1 1V3" stroke="#FF4785" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          <text x="12" y="16" textAnchor="middle" fill="#FF4785" fontSize="6" fontWeight="bold">SB</text>
        </svg>
      ),
    },
    css: {
      color: "#264DE4",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 2l1.5 17L12 22l6.5-3L20 2H4z" fill="#264DE4" fillOpacity="0.15" stroke="#264DE4" strokeWidth="1.3" />
          <text x="12" y="15" textAnchor="middle" fill="#264DE4" fontSize="7" fontWeight="bold">CSS</text>
        </svg>
      ),
    },
  };

  const icon = icons[name];
  if (!icon) return null;

  return <div className={base}>{icon.svg}</div>;
}

const techStack = [
  { name: "figma", label: "Figma" },
  { name: "sketch", label: "Sketch" },
  { name: "react", label: "React" },
  { name: "tailwind", label: "Tailwind" },
  { name: "next", label: "Next.js" },
  { name: "typescript", label: "TypeScript" },
  { name: "framer", label: "Framer" },
  { name: "adobexd", label: "Adobe XD" },
  { name: "storybook", label: "Storybook" },
  { name: "css", label: "CSS" },
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
    title: "Araştırma",
    description:
      "Kullanıcı ihtiyaçlarını, iş hedeflerini ve pazar dinamiklerini analiz ediyoruz.",
  },
  {
    num: "02",
    title: "Wireframe",
    description:
      "Bilgi mimarisi ve kullanıcı akışlarını wireframe'lerle şekillendiriyoruz.",
  },
  {
    num: "03",
    title: "Tasarım",
    description:
      "Yüksek sadakatli UI tasarımlarını ve tasarım sistemini oluşturuyoruz.",
  },
  {
    num: "04",
    title: "Prototip",
    description:
      "Etkileşimli prototipler ile kullanıcı testleri ve iterasyonlar yapıyoruz.",
  },
  {
    num: "05",
    title: "Handoff",
    description:
      "Geliştirici dostu dokümantasyon ve tasarım sistemi teslimi sağlıyoruz.",
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
          Araştırmadan teslime, adım adım
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Kullanıcı odaklı ve veri destekli bir tasarım süreci ile dijital
          ürünlerinizi en yüksek kalitede teslim ediyoruz.
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

export default function UiUxTasarimContent() {
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
