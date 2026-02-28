"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";

/* ── Service color ────────────────────────────────────── */
const SERVICE_COLOR = "#8B5CF6";

/* ══════════════════════════════════════════════════════════
   Section 1 — ServiceHero
   ══════════════════════════════════════════════════════════ */

function PhoneMockUI() {
  return (
    <div className="relative w-full h-full">
      {/* Gradient background */}
      <div
        className="absolute inset-0 rounded-2xl opacity-20"
        style={{
          background: `linear-gradient(135deg, ${SERVICE_COLOR}, #A78BFA, #C4B5FD)`,
        }}
      />

      {/* Phone 1 — left */}
      <div className="absolute top-[8%] left-[14%] w-[30%] h-[78%] bg-foreground/90 rounded-[20px] shadow-2xl overflow-hidden border-2 border-foreground/20">
        <div className="h-5 bg-foreground flex items-center justify-center">
          <div className="w-12 h-1.5 bg-white/15 rounded-full" />
        </div>
        <div className="bg-white h-full p-2 space-y-2">
          <div
            className="h-20 rounded-lg"
            style={{ backgroundColor: `${SERVICE_COLOR}15` }}
          />
          <div className="h-3 bg-foreground/8 rounded w-3/4" />
          <div className="h-2 bg-foreground/5 rounded w-full" />
          <div className="grid grid-cols-2 gap-1.5 mt-2">
            <div className="h-10 bg-foreground/[0.04] rounded-md" />
            <div
              className="h-10 rounded-md"
              style={{ backgroundColor: `${SERVICE_COLOR}12` }}
            />
          </div>
        </div>
      </div>

      {/* Phone 2 — right */}
      <div className="absolute top-[14%] right-[14%] w-[30%] h-[72%] bg-foreground/90 rounded-[20px] shadow-2xl overflow-hidden border-2 border-foreground/20">
        <div className="h-5 bg-foreground flex items-center justify-center">
          <div className="w-12 h-1.5 bg-white/15 rounded-full" />
        </div>
        <div className="bg-white/95 h-full p-2 space-y-2">
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-6 h-6 rounded-full"
              style={{ backgroundColor: `${SERVICE_COLOR}25` }}
            />
            <div className="h-2 bg-foreground/10 rounded w-1/2" />
          </div>
          <div className="h-16 bg-foreground/[0.04] rounded-lg" />
          <div className="h-2 bg-foreground/6 rounded w-full" />
          <div className="h-2 bg-foreground/4 rounded w-2/3" />
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
                Mobil Uygulama
              </span>
            </div>

            <h1 className="font-bold text-[44px] lg:text-[56px] leading-[1.08] tracking-[-0.02em] text-foreground animate-fade-in-up">
              iOS ve Android&apos;de fark yaratan mobil deneyimler
            </h1>

            <p className="mt-6 text-[17px] leading-relaxed text-muted animate-fade-in-up-delay-1">
              iOS ve Android platformlarında native ve cross-platform mobil
              uygulamalar geliştiriyoruz. Kullanıcı odaklı tasarım, yüksek
              performans ve sorunsuz kullanıcı deneyimi ile markanızı mobilde
              güçlendiriyoruz.
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
              <PhoneMockUI />
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
    icon: "ios",
    title: "iOS Uygulama Geliştirme",
    description:
      "Swift ve SwiftUI ile native, performanslı iOS uygulamaları geliştiriyoruz.",
  },
  {
    icon: "android",
    title: "Android Uygulama Geliştirme",
    description:
      "Kotlin ile modern Material Design Android uygulamaları.",
  },
  {
    icon: "cross",
    title: "Cross-Platform Çözümler",
    description:
      "React Native ve Flutter ile tek kod tabanından iki platforma ulaşın.",
  },
  {
    icon: "palette",
    title: "Mobil UI/UX Tasarım",
    description:
      "Platform kurallarına uygun, kullanıcı odaklı mobil arayüz tasarımı.",
  },
  {
    icon: "api",
    title: "Backend & API Entegrasyonu",
    description:
      "Mobil uygulamalar için güvenli, ölçeklenebilir API ve backend altyapıları.",
  },
  {
    icon: "store",
    title: "Uygulama Mağazası Yönetimi",
    description:
      "App Store ve Google Play yayınlama, ASO ve süreç yönetimi.",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  const style = { color: SERVICE_COLOR };
  switch (type) {
    case "ios":
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
        </svg>
      );
    case "android":
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
          <rect x="4" y="10" width="16" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 018 0v3" />
          <circle cx="9" cy="6" r="0.8" fill="currentColor" />
          <circle cx="15" cy="6" r="0.8" fill="currentColor" />
          <path d="M5 20v3M19 20v3M3 14h2M19 14h2" strokeLinecap="round" />
        </svg>
      );
    case "cross":
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
          <rect x="3" y="5" width="8" height="14" rx="1.5" />
          <rect x="13" y="5" width="8" height="14" rx="1.5" />
          <path d="M7 19h.01M17 19h.01" strokeWidth="2" strokeLinecap="round" />
          <path d="M9 12h6" strokeDasharray="2 2" />
        </svg>
      );
    case "palette":
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
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3-1.3 3-3 0-.8-.3-1.5-.8-2-.5-.5-.8-1.2-.8-2 0-1.7 1.3-3 3-3h3.5c2.5 0 4.1-2.5 3-4.6C21.1 4.1 16.9 2 12 2z" />
          <circle cx="7.5" cy="11" r="1.5" fill="currentColor" />
          <circle cx="10.5" cy="7" r="1.5" fill="currentColor" />
          <circle cx="15" cy="7.5" r="1.5" fill="currentColor" />
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
    case "store":
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
          <path d="M3 9l1-4h16l1 4" />
          <path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" />
          <path d="M3 9h18" />
          <path d="M9 21V13h6v8" />
          <path d="M7 9v2a2 2 0 01-4 0" />
          <path d="M11 9v2a2 2 0 01-4 0" />
          <path d="M15 9v2a2 2 0 01-4 0" />
          <path d="M19 9v2a2 2 0 01-4 0" />
          <path d="M21 9v2a2 2 0 01-4 0" />
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
          Her platforma uygun mobil çözümler
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Native iOS ve Android uygulamalarından cross-platform çözümlere,
          mobil UI/UX tasarımından mağaza yönetimine kadar eksiksiz hizmet
          sunuyoruz.
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
    flutter: {
      color: "#02569B",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M14 2L4 12l3.5 3.5L18 5h-4z" fill="#02569B" />
          <path d="M14 12l-3.5 3.5L14 19h4l-3.5-3.5L18 12h-4z" fill="#02569B" />
          <path d="M10.5 15.5L14 19h4l-7-7z" fill="#02569B" fillOpacity="0.6" />
        </svg>
      ),
    },
    swift: {
      color: "#FA7343",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M20.2 17.2c.1-.5.2-1 .2-1.6 0-3.1-1.7-6.5-4.8-9.1 1.5 2.2 2.3 4.7 2 6.8-2.6-1.8-4.8-4.3-6.4-6.5.8 1.5 1.8 3 3 4.3-1.5-1-4.5-3.6-5.3-4.3 0 0 2.5 3.3 4.8 5.5-2.3-1-4.2-2.5-5.8-4.2.3.9.8 1.7 1.5 2.5 1.5 1.8 3.5 3.3 5.7 4.2-2.3.8-4.8.5-7-.5 4 2.7 9.3 2.8 12.5-.2l-.2.1c.3-.2.5-.4.8-.7 1-.9 1.5-2 1.5-3.2" fill="#FA7343" />
        </svg>
      ),
    },
    kotlin: {
      color: "#7F52FF",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 4h16L12 12l8 8H4V4z" fill="#7F52FF" />
          <path d="M4 4h8l-8 8V4z" fill="#7F52FF" fillOpacity="0.6" />
        </svg>
      ),
    },
    firebase: {
      color: "#FFCA28",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5.5 20L7.5 3.5l4.5 8-3 2.5L5.5 20z" fill="#FFA000" />
          <path d="M9 14l3-2.5 6.5 8.5H5.5L9 14z" fill="#FFCA28" />
          <path d="M12 11.5L9 14l-1.5-6.5L12 11.5z" fill="#FF6F00" />
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
    node: {
      color: "#339933",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.3" />
          <text x="12" y="15" textAnchor="middle" fill="#339933" fontSize="9" fontWeight="bold">JS</text>
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
    dart: {
      color: "#0175C2",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M7 4l10 0 5 5v10l-5 3H7l-3-3V7l3-3z" fill="#0175C2" fillOpacity="0.15" stroke="#0175C2" strokeWidth="1.3" />
          <text x="12" y="15" textAnchor="middle" fill="#0175C2" fontSize="7" fontWeight="bold">Dart</text>
        </svg>
      ),
    },
    figma: {
      color: "#F24E1E",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="15" cy="9" r="3" fill="#1ABCFE" />
          <path d="M12 6a3 3 0 00-3 3 3 3 0 003 3h0V6z" fill="#A259FF" />
          <path d="M12 12a3 3 0 00-3 3 3 3 0 003 3h0v-6z" fill="#0ACF83" />
          <path d="M12 18a3 3 0 00-3 3 3 3 0 106 0 3 3 0 00-3-3z" fill="#0ACF83" />
          <path d="M12 6a3 3 0 01-3-3 3 3 0 016 0 3 3 0 01-3 3z" fill="#FF7262" />
          <path d="M9 6a3 3 0 000 6h3V6H9z" fill="#A259FF" />
        </svg>
      ),
    },
  };

  const icon = icons[name];
  if (!icon) return null;

  return <div className={base}>{icon.svg}</div>;
}

const techStack = [
  { name: "react", label: "React Native" },
  { name: "flutter", label: "Flutter" },
  { name: "swift", label: "Swift" },
  { name: "kotlin", label: "Kotlin" },
  { name: "firebase", label: "Firebase" },
  { name: "typescript", label: "TypeScript" },
  { name: "node", label: "Node.js" },
  { name: "aws", label: "AWS" },
  { name: "dart", label: "Dart" },
  { name: "figma", label: "Figma" },
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
    title: "Keşif",
    description:
      "Kullanıcı ihtiyaçlarını, platform gereksinimlerini ve iş hedeflerini analiz ediyoruz.",
  },
  {
    num: "02",
    title: "Prototip",
    description:
      "Wireframe ve interaktif prototipler ile uygulama akışını doğruluyoruz.",
  },
  {
    num: "03",
    title: "Geliştirme",
    description:
      "Agile sprintler ile native veya cross-platform geliştirme yapıyoruz.",
  },
  {
    num: "04",
    title: "Test",
    description:
      "Cihaz uyumluluk testleri, performans testleri ve beta süreçleri yürütüyoruz.",
  },
  {
    num: "05",
    title: "Yayınlama",
    description:
      "App Store ve Google Play&apos;e yayınlama, izleme ve güncelleme desteği.",
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
          Fikirden mağazalara, adım adım
        </h2>
        <p className="text-[17px] text-muted leading-relaxed max-w-2xl mb-12">
          Şeffaf ve öngörülebilir bir süreç ile mobil uygulamanızı zamanında ve
          bütçe dahilinde teslim ediyoruz.
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

export default function MobilUygulamaContent() {
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
