"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceTemplate {
  title: string;
  icons: string[];
}

interface Service {
  id: string;
  label: string;
  icon: string;
  iconColor: string;
  title: string;
  description: string;
  cta: string;
  ctaHref?: string;
  templates: ServiceTemplate[];
  gradient: string;
}

const services: Service[] = [
  {
    id: "web",
    label: "Web Geliştirme",
    icon: "globe",
    iconColor: "#424874",
    title: "Web Geliştirme",
    description:
      "Modern ve ölçeklenebilir web uygulamaları ile işletmenizin dijital varlığını güçlendirin.",
    cta: "Web Geliştirmeyi Keşfet",
    ctaHref: "/hizmetler/web-gelistirme",
    templates: [
      { title: "Kurumsal web sitenizi modern teknolojilerle oluşturun", icons: ["react", "next", "tailwind"] },
      { title: "SaaS platformunuzu bulut tabanlı mimariye taşıyın", icons: ["node", "aws"] },
      { title: "E-ticaret sitenizi headless CMS ile güçlendirin", icons: ["next", "stripe"] },
    ],
    gradient:
      "radial-gradient(ellipse at 25% 70%, rgba(120,200,170,0.25) 0%, transparent 55%), radial-gradient(ellipse at 75% 30%, rgba(180,210,200,0.3) 0%, transparent 50%), linear-gradient(145deg, #e8e2d4 0%, #d0c8b8 30%, #a8bab0 55%, #c0ccc4 80%, #e0d8cc 100%)",
  },
  {
    id: "mobile",
    label: "Mobil Uygulama",
    icon: "phone",
    iconColor: "#8B5CF6",
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformlarında yüksek performanslı, kullanıcı dostu mobil uygulamalar geliştirin.",
    cta: "Mobil Çözümleri Keşfet",
    templates: [
      { title: "Tek kod tabanıyla iOS ve Android uygulaması yayınlayın", icons: ["flutter", "dart"] },
      { title: "Mevcut sisteminizi mobil uygulamaya dönüştürün", icons: ["react", "firebase"] },
      { title: "Gerçek zamanlı bildirim ve mesajlaşma sistemi kurun", icons: ["swift", "kotlin"] },
    ],
    gradient:
      "radial-gradient(ellipse at 30% 60%, rgba(167,139,250,0.2) 0%, transparent 55%), radial-gradient(ellipse at 70% 25%, rgba(196,181,253,0.2) 0%, transparent 50%), linear-gradient(145deg, #ece6f0 0%, #d8d0e0 30%, #b8a8d0 55%, #d0c8dc 80%, #e8e0ec 100%)",
  },
  {
    id: "ai",
    label: "Yapay Zeka",
    icon: "sparkle",
    iconColor: "#F59E0B",
    title: "Yapay Zeka & ML",
    description:
      "Yapay zeka ve makine öğrenimi çözümleriyle iş süreçlerinizi otomatikleştirin ve veriden değer üretin.",
    cta: "AI Çözümlerini Keşfet",
    templates: [
      { title: "Müşteri hizmetlerini AI chatbot ile otomatikleştirin", icons: ["openai", "python"] },
      { title: "Satış verilerinizi makine öğrenimi ile analiz edin", icons: ["tensorflow", "python"] },
      { title: "Doğal dil işleme ile belge analizi yapın", icons: ["openai", "node"] },
    ],
    gradient:
      "radial-gradient(ellipse at 40% 50%, rgba(251,191,36,0.15) 0%, transparent 55%), radial-gradient(ellipse at 65% 30%, rgba(245,158,11,0.12) 0%, transparent 50%), linear-gradient(145deg, #f0e8d8 0%, #e0d0b8 30%, #c8b898 55%, #d8cca8 80%, #ece0cc 100%)",
  },
  {
    id: "ecommerce",
    label: "E-Ticaret",
    icon: "cart",
    iconColor: "#10B981",
    title: "E-Ticaret",
    description:
      "Güçlü e-ticaret platformları ile online satışlarınızı artırın ve müşteri deneyimini iyileştirin.",
    cta: "E-Ticaret Çözümlerini Keşfet",
    templates: [
      { title: "Çok kanallı satış platformu oluşturun", icons: ["next", "stripe"] },
      { title: "Ödeme ve kargo entegrasyonlarını otomatikleştirin", icons: ["node", "stripe"] },
      { title: "Stok ve sipariş yönetim sistemi kurun", icons: ["react", "node"] },
    ],
    gradient:
      "radial-gradient(ellipse at 35% 55%, rgba(52,211,153,0.18) 0%, transparent 55%), radial-gradient(ellipse at 70% 35%, rgba(110,231,183,0.15) 0%, transparent 50%), linear-gradient(145deg, #e4f0e8 0%, #c8dcd0 30%, #a0c4b0 55%, #c0d8c8 80%, #e0ece4 100%)",
  },
  {
    id: "erp",
    label: "ERP & CRM",
    icon: "database",
    iconColor: "#6366F1",
    title: "ERP & CRM Sistemleri",
    description:
      "Kurumsal kaynak planlaması ve müşteri ilişkileri yönetimi ile operasyonel verimliliğinizi artırın.",
    cta: "ERP Çözümlerini Keşfet",
    templates: [
      { title: "Özel CRM sistemi ile müşteri ilişkilerinizi yönetin", icons: ["react", "node"] },
      { title: "ERP modülleriyle iş süreçlerinizi entegre edin", icons: ["python", "aws"] },
      { title: "Raporlama ve dashboard altyapısı kurun", icons: ["react", "node"] },
    ],
    gradient:
      "radial-gradient(ellipse at 25% 50%, rgba(99,102,241,0.15) 0%, transparent 55%), radial-gradient(ellipse at 70% 40%, rgba(165,180,252,0.18) 0%, transparent 50%), linear-gradient(145deg, #e6e4f4 0%, #d0cee4 30%, #a8a4d0 55%, #c4c0dc 80%, #e0dde8 100%)",
  },
  {
    id: "uiux",
    label: "UI/UX Tasarım",
    icon: "palette",
    iconColor: "#EC4899",
    title: "UI/UX Tasarım",
    description:
      "Kullanıcı merkezli tasarım yaklaşımı ile markanızı dijitalde farklılaştırın.",
    cta: "Tasarım Hizmetlerini Keşfet",
    templates: [
      { title: "Kullanıcı araştırması ve persona oluşturma", icons: ["figma", "sketch"] },
      { title: "Tasarım sistemi ve komponent kütüphanesi kurulumu", icons: ["figma", "react"] },
      { title: "Prototipleme ve kullanılabilirlik testleri", icons: ["figma", "sketch"] },
    ],
    gradient:
      "radial-gradient(ellipse at 30% 45%, rgba(244,114,182,0.15) 0%, transparent 55%), radial-gradient(ellipse at 65% 55%, rgba(251,146,60,0.12) 0%, transparent 50%), linear-gradient(145deg, #f4e8ec 0%, #e0d0d8 30%, #d0b0c0 55%, #dcc4cc 80%, #ece0e4 100%)",
  },
  {
    id: "consulting",
    label: "Danışmanlık",
    icon: "briefcase",
    iconColor: "#A16207",
    title: "Teknoloji Danışmanlığı",
    description:
      "Dijital dönüşüm stratejisi, teknoloji seçimi ve proje yönetimi konularında uzman danışmanlık alın.",
    cta: "Danışmanlık Hizmetlerini Keşfet",
    templates: [
      { title: "Dijital dönüşüm yol haritası oluşturun", icons: ["notion", "figma"] },
      { title: "Teknoloji stack seçimi ve mimari danışmanlık", icons: ["aws", "node"] },
      { title: "Agile proje yönetimi ve ekip mentörlüğü", icons: ["notion", "figma"] },
    ],
    gradient:
      "radial-gradient(ellipse at 30% 50%, rgba(180,160,140,0.2) 0%, transparent 55%), radial-gradient(ellipse at 70% 40%, rgba(200,185,165,0.18) 0%, transparent 50%), linear-gradient(145deg, #ece8e0 0%, #dcd4c8 30%, #beb4a4 55%, #d0c8b8 80%, #e8e0d8 100%)",
  },
];

function ServiceIcon({ type, color }: { type: string; color: string }) {
  const iconStyle = { color };
  switch (type) {
    case "globe":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );
    case "phone":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "sparkle":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={iconStyle}>
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <path d="M17.5 19H9a7 7 0 110-14h.5A5.5 5.5 0 0120 9.5a4.5 4.5 0 01-2.5 9.5z" />
        </svg>
      );
    case "cart":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      );
    case "database":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "palette":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.01 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.49-9-10-9z" />
          <circle cx="7.5" cy="11.5" r="1.5" fill="currentColor" /><circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
          <circle cx="16.5" cy="11.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "terminal":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <polyline points="4,17 10,11 4,5" /><line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      );
    case "briefcase":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={iconStyle}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
      );
    default:
      return null;
  }
}

function TechIcon({ name }: { name: string }) {
  const base = "w-9 h-9 rounded-lg border border-black/[0.08] flex items-center justify-center bg-white shadow-sm";

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
    python: {
      color: "#3776AB",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2c-3 0-5 1-5 3.5V8h5v1H6c-2 0-4 1.5-4 4.5S4 18 6 18h2v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 3-1 3-2.5V5.5C19.5 3 17 2 12 2zm-2.5 2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" />
          <path d="M12 22c3 0 5-1 5-3.5V16h-5v-1h6c2 0 4-1.5 4-4.5S20 6 18 6h-2v2.5c0 2-1.5 3.5-3.5 3.5h-5c-1.5 0-3 1-3 2.5v4.5C4.5 21 7 22 12 22zm2.5-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B" />
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
          <circle cx="12" cy="12" r="9" stroke="#326CE5" strokeWidth="1.3" />
          <circle cx="12" cy="12" r="2" fill="#326CE5" />
          <path d="M12 5v4M12 15v4M5.5 8.5l3.5 2M15 13.5l3.5 2M5.5 15.5l3.5-2M15 10.5l3.5-2" stroke="#326CE5" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      ),
    },
    terraform: {
      color: "#7B42BC",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M1 4.5L8.5 8.5v8L1 12.5z" fill="#7B42BC" fillOpacity="0.5" />
          <path d="M9.5 8.5L17 4.5v8L9.5 16.5z" fill="#7B42BC" />
          <path d="M9.5 17.5L17 13.5v8L9.5 25.5z" fill="#7B42BC" fillOpacity="0.7" />
          <path d="M18 4.5L25.5 8.5v8L18 12.5z" fill="#7B42BC" fillOpacity="0.3" />
        </svg>
      ),
    },
    firebase: {
      color: "#FFCA28",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M5 19L7.5 3.5l4 7.5-2 3L5 19z" fill="#FFA000" />
          <path d="M12 20l7-4-3-5-4 3v6z" fill="#FFCA28" />
          <path d="M5 19l7 1 7-4-6.5-10L9.5 11 5 19z" fill="#F57C00" fillOpacity="0.4" />
        </svg>
      ),
    },
    flutter: {
      color: "#02569B",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M14 3l-9 9 3 3 12-12h-6z" fill="#02569B" />
          <path d="M14 13l-3 3 3 3h6l-3-3-3-3z" fill="#02569B" />
          <path d="M8 12l3 3 3-3-3-3-3 3z" fill="#54C5F8" />
        </svg>
      ),
    },
    dart: {
      color: "#0175C2",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 12l4-8h8l4 4v8l-4 4H8l-4-4v-4z" fill="#0175C2" fillOpacity="0.15" stroke="#0175C2" strokeWidth="1.3" />
          <path d="M7 12l5-5v5h5" stroke="#0175C2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    swift: {
      color: "#FA7343",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M20 5c-1-1-8 4-12.5 9C11 12 14.5 9 16 7.5c-3 2-7 4-10 4.5 2 2 4.5 3 7 3 4 0 7-2 8-5.5.5-1.5.5-3-1-4.5z" fill="#FA7343" />
        </svg>
      ),
    },
    kotlin: {
      color: "#7F52FF",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M4 20V4h16L12 12l8 8H4z" fill="url(#kt)" />
          <defs>
            <linearGradient id="kt" x1="4" y1="4" x2="20" y2="20">
              <stop stopColor="#7F52FF" />
              <stop offset="1" stopColor="#C811E2" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    openai: {
      color: "#000",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 3a9 9 0 00-4.5 16.8l.5-2.8-2.5-1.5a5 5 0 013-9l.5.1A5 5 0 0117 5.5l-.5 2.8 2.5 1.5a5 5 0 01-3 9l-.5-.1A5 5 0 017 20.5" stroke="#000" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      ),
    },
    tensorflow: {
      color: "#FF6F00",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 6v4l4-2v12l4 2V6l4 2V4l-4-2z" fill="#FF6F00" />
          <path d="M12 10v12l4-2V8l-4 2z" fill="#FF6F00" fillOpacity="0.6" />
        </svg>
      ),
    },
    figma: {
      color: "#F24E1E",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
          <path d="M9 21a3 3 0 003-3v-3H9a3 3 0 000 6z" fill="#0ACF83" />
          <path d="M9 3a3 3 0 000 6h3V3H9z" fill="#F24E1E" />
          <path d="M12 3v6h3a3 3 0 000-6h-3z" fill="#FF7262" />
          <path d="M9 9a3 3 0 000 6h3V9H9z" fill="#A259FF" />
        </svg>
      ),
    },
    sketch: {
      color: "#F7B500",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 3l-8 6 8 12 8-12-8-6z" fill="#F7B500" fillOpacity="0.3" />
          <path d="M4 9h16l-8 12L4 9z" fill="#F7B500" />
          <path d="M12 3L4 9h16l-8-6z" fill="#F7B500" fillOpacity="0.7" />
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
    notion: {
      color: "#000",
      svg: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="3" width="16" height="18" rx="2" stroke="#000" strokeWidth="1.3" />
          <path d="M8 7h3l4 6V7h2v10h-2.5L10 11v6H8V7z" fill="#000" />
        </svg>
      ),
    },
  };

  const icon = icons[name];
  if (!icon) return null;

  return (
    <div className={base}>
      {icon.svg}
    </div>
  );
}

function PlayButton() {
  return (
    <button className="absolute bottom-5 right-5 w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all duration-200 z-10">
      <svg
        width="13"
        height="15"
        viewBox="0 0 13 15"
        fill="currentColor"
        className="text-foreground ml-0.5"
      >
        <path d="M0 0.5L13 7.5L0 14.5V0.5Z" />
      </svg>
    </button>
  );
}

function MockUI({ serviceId }: { serviceId: string }) {
  switch (serviceId) {
    case "web":
      return (
        <>
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
                <div className="h-16 bg-accent/10 rounded-lg" />
                <div className="h-16 bg-foreground/[0.04] rounded-lg" />
              </div>
            </div>
          </div>
          <div className="absolute top-[20%] right-[6%] w-[42%] h-[50%] bg-[#1e1e2e]/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden">
            <div className="h-7 bg-[#181825] flex items-center gap-1.5 px-3">
              <div className="h-3 w-12 bg-white/10 rounded" />
              <div className="h-3 w-10 bg-white/5 rounded" />
            </div>
            <div className="p-3 space-y-1.5">
              <div className="flex gap-2"><div className="h-2 w-8 bg-purple-400/30 rounded" /><div className="h-2 w-14 bg-blue-400/25 rounded" /></div>
              <div className="flex gap-2 ml-3"><div className="h-2 w-10 bg-green-400/25 rounded" /><div className="h-2 w-16 bg-yellow-400/20 rounded" /></div>
              <div className="flex gap-2 ml-3"><div className="h-2 w-12 bg-cyan-400/25 rounded" /><div className="h-2 w-8 bg-orange-400/20 rounded" /></div>
              <div className="flex gap-2 ml-6"><div className="h-2 w-6 bg-pink-400/25 rounded" /><div className="h-2 w-18 bg-blue-400/20 rounded" /></div>
              <div className="flex gap-2"><div className="h-2 w-4 bg-purple-400/30 rounded" /></div>
            </div>
          </div>
        </>
      );
    case "mobile":
      return (
        <>
          <div className="absolute top-[8%] left-[27%] w-[20%] h-[78%] bg-foreground/90 rounded-[20px] shadow-2xl overflow-hidden border-2 border-foreground/20">
            <div className="h-5 bg-foreground flex items-center justify-center"><div className="w-12 h-1.5 bg-white/15 rounded-full" /></div>
            <div className="bg-white h-full p-2 space-y-2">
              <div className="h-20 bg-accent/10 rounded-lg" />
              <div className="h-3 bg-foreground/8 rounded w-3/4" />
              <div className="h-2 bg-foreground/5 rounded w-full" />
              <div className="grid grid-cols-2 gap-1.5 mt-2"><div className="h-10 bg-foreground/[0.04] rounded-md" /><div className="h-10 bg-accent/10 rounded-md" /></div>
            </div>
          </div>
          <div className="absolute top-[14%] right-[24%] w-[20%] h-[72%] bg-foreground/90 rounded-[20px] shadow-2xl overflow-hidden border-2 border-foreground/20">
            <div className="h-5 bg-foreground flex items-center justify-center"><div className="w-12 h-1.5 bg-white/15 rounded-full" /></div>
            <div className="bg-white/95 h-full p-2 space-y-2">
              <div className="flex items-center gap-2 mb-2"><div className="w-6 h-6 rounded-full bg-accent/20" /><div className="h-2 bg-foreground/10 rounded w-1/2" /></div>
              <div className="h-16 bg-foreground/[0.04] rounded-lg" />
              <div className="h-2 bg-foreground/6 rounded w-full" />
              <div className="h-2 bg-foreground/4 rounded w-2/3" />
            </div>
          </div>
        </>
      );
    case "ai":
      return (
        <div className="absolute inset-[10%] flex items-center justify-center">
          <svg viewBox="0 0 400 250" fill="none" className="w-full h-full opacity-80">
            {[[60,50],[60,125],[60,200],[170,40],[170,95],[170,155],[170,210],[280,65],[280,125],[280,185],[360,100],[360,160]].map(([cx,cy],i)=>(
              <circle key={i} cx={cx} cy={cy} r={i>=10?12:9} fill={i>=10?"#424874":"white"} fillOpacity={i>=10?0.8:0.7} stroke={i>=10?"#424874":"white"} strokeWidth="1.5" strokeOpacity={0.4}/>
            ))}
            {[[60,50,170,40],[60,50,170,95],[60,125,170,95],[60,125,170,155],[60,200,170,155],[60,200,170,210],[170,40,280,65],[170,95,280,125],[170,155,280,125],[170,155,280,185],[170,210,280,185],[280,65,360,100],[280,125,360,160],[280,185,360,160]].map(([x1,y1,x2,y2],i)=>(
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="1" strokeOpacity={0.2}/>
            ))}
          </svg>
        </div>
      );
    default:
      return (
        <div className="absolute inset-[10%] bg-white/40 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden">
          <div className="h-7 bg-foreground/5 flex items-center px-3 gap-1.5">
            <div className="w-2 h-2 rounded-full bg-foreground/10" /><div className="w-2 h-2 rounded-full bg-foreground/10" /><div className="w-2 h-2 rounded-full bg-foreground/10" />
          </div>
          <div className="p-4 space-y-3">
            <div className="h-3 bg-foreground/6 rounded w-2/3" />
            <div className="h-2.5 bg-foreground/4 rounded w-full" />
            <div className="h-2.5 bg-foreground/4 rounded w-4/5" />
            <div className="mt-4 h-20 bg-accent/8 rounded-lg" />
          </div>
        </div>
      );
  }
}

export default function ServicesShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [templateOffset, setTemplateOffset] = useState(0);

  const current = services[activeTab];
  const visibleTemplates = current.templates.slice(templateOffset, templateOffset + 2);
  const canGoNext = templateOffset + 2 < current.templates.length;
  const canGoPrev = templateOffset > 0;

  function handleTabChange(i: number) {
    setActiveTab(i);
    setTemplateOffset(0);
  }

  return (
    <section className="bg-white py-10 lg:py-14">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-accent" />
          <h2 className="text-[13px] font-semibold tracking-[0.15em] uppercase text-foreground">
            Yazılım hizmetlerinde komple çözüm ortağınız
          </h2>
        </div>

        {/* Tabs — pill style */}
        <div className="flex items-center justify-center overflow-x-auto scrollbar-hide mb-4">
          <div className="flex items-center gap-2 min-w-max bg-black/[0.04] rounded-full p-1">
            {services.map((service, i) => (
              <button
                key={service.id}
                onClick={() => handleTabChange(i)}
                className={`px-4 py-2 text-[13px] font-medium whitespace-nowrap rounded-full transition-all duration-200 ${
                  activeTab === i
                    ? "bg-accent text-white shadow-sm glow-accent"
                    : "text-muted hover:text-foreground hover:bg-white/60"
                }`}
              >
                {service.label}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Preview */}
        <div className="relative w-full aspect-[16/5] rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{ background: current.gradient }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="absolute inset-0 transition-opacity duration-500">
            <MockUI serviceId={current.id} />
          </div>
          <PlayButton />
        </div>

        {/* Service Detail Panel */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-0 border-t border-black/[0.06]">
          {/* Left: Service Info */}
          <div className="py-6 pr-8 lg:border-r border-black/[0.06]">
            <div className="mb-4">
              <ServiceIcon type={current.icon} color={current.iconColor} />
            </div>
            <h3 className="text-[26px] font-semibold text-foreground leading-tight mb-3">
              {current.title}
            </h3>
            <p className="text-[15px] text-muted leading-relaxed mb-8">
              {current.description}
            </p>
            <Link
              href={current.ctaHref || "#"}
              className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 glow-accent glow-accent-hover"
            >
              {current.cta}
            </Link>
          </div>

          {/* Right: Templates */}
          <div className="py-6 lg:pl-10">
            <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-muted mb-6">
              Hazır çözümlerle hızlıca başlayın
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {visibleTemplates.map((template, i) => (
                <div
                  key={`${current.id}-${templateOffset}-${i}`}
                  className="glass rounded-xl p-5 hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <h4 className="text-[15px] font-semibold text-foreground leading-snug mb-4">
                    {template.title}
                  </h4>
                  <div className="flex gap-2">
                    {template.icons.map((icon, j) => (
                      <TechIcon key={j} name={icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={() => canGoPrev && setTemplateOffset(templateOffset - 1)}
                className={`w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center transition-all ${
                  canGoPrev
                    ? "hover:border-black/[0.3] hover:bg-black/[0.02] text-foreground"
                    : "opacity-30 cursor-not-allowed text-muted"
                }`}
                disabled={!canGoPrev}
                aria-label="Önceki"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => canGoNext && setTemplateOffset(templateOffset + 1)}
                className={`w-9 h-9 rounded-full border border-black/[0.12] flex items-center justify-center transition-all ${
                  canGoNext
                    ? "hover:border-black/[0.3] hover:bg-black/[0.02] text-foreground"
                    : "opacity-30 cursor-not-allowed text-muted"
                }`}
                disabled={!canGoNext}
                aria-label="Sonraki"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
