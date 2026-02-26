"use client";

import { useState } from "react";

interface TemplateIcon {
  type: string;
  color: string;
  bg: string;
}

interface Template {
  title: string;
  icons: TemplateIcon[];
}

function TemplateIconSVG({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "ai":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M12 2L14.5 9.5 22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" />
          <circle cx="12" cy="12" r="2" fill={color} fillOpacity="0.3" />
        </svg>
      );
    case "crm":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <circle cx="9" cy="7" r="3" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M3 20c0-3.3 2.7-6 6-6 1.5 0 2.8.5 3.8 1.4" />
          <path d="M14 20c0-2.2 1.3-4 3-4s3 1.8 3 4" />
        </svg>
      );
    case "phone":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      );
    case "chart":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <rect x="3" y="12" width="4" height="8" rx="1" fill={color} fillOpacity="0.15" />
          <rect x="10" y="6" width="4" height="14" rx="1" fill={color} fillOpacity="0.15" />
          <rect x="17" y="9" width="4" height="11" rx="1" fill={color} fillOpacity="0.15" />
          <rect x="3" y="12" width="4" height="8" rx="1" />
          <rect x="10" y="6" width="4" height="14" rx="1" />
          <rect x="17" y="9" width="4" height="11" rx="1" />
        </svg>
      );
    case "calendar":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <circle cx="12" cy="16" r="1.5" fill={color} />
        </svg>
      );
    case "headset":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <path d="M3 18v-6a9 9 0 0118 0v6" />
          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
        </svg>
      );
    case "analytics":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v9l6.36 3.64" />
          <path d="M12 12L5.64 15.64" strokeOpacity="0.4" />
        </svg>
      );
    default:
      return null;
  }
}

const templates: Template[] = [
  {
    title: "Gelen satış aramalarını otomatik olarak nitelendirin",
    icons: [
      { type: "ai", color: "#1c1c1c", bg: "#f3f4f6" },
      { type: "crm", color: "#6366F1", bg: "#EEF2FF" },
    ],
  },
  {
    title: "Müşteri geri bildirimlerini toplayın ve raporlayın",
    icons: [
      { type: "phone", color: "#424874", bg: "#EDEEF5" },
      { type: "ai", color: "#1c1c1c", bg: "#f3f4f6" },
      { type: "chart", color: "#059669", bg: "#F0FDFA" },
    ],
  },
  {
    title: "Randevu hatırlatma ve onay süreçlerini yönetin",
    icons: [
      { type: "calendar", color: "#3B82F6", bg: "#EFF6FF" },
      { type: "ai", color: "#1c1c1c", bg: "#f3f4f6" },
    ],
  },
  {
    title: "Potansiyel müşterilere otomatik geri arama yapın",
    icons: [
      { type: "ai", color: "#1c1c1c", bg: "#f3f4f6" },
      { type: "phone", color: "#424874", bg: "#EDEEF5" },
    ],
  },
  {
    title: "Destek taleplerini kategorize edip yönlendirin",
    icons: [
      { type: "ai", color: "#1c1c1c", bg: "#f3f4f6" },
      { type: "headset", color: "#8B5CF6", bg: "#F5F3FF" },
      { type: "crm", color: "#6366F1", bg: "#EEF2FF" },
    ],
  },
  {
    title: "Anket ve memnuniyet aramaları otomatikleştirin",
    icons: [
      { type: "ai", color: "#1c1c1c", bg: "#f3f4f6" },
      { type: "analytics", color: "#0EA5E9", bg: "#F0F9FF" },
    ],
  },
];

export default function AITemplates() {
  const [offset, setOffset] = useState(0);
  const visible = templates.slice(offset, offset + 3);
  const canNext = offset + 3 < templates.length;
  const canPrev = offset > 0;

  return (
    <section className="bg-surface py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-5 h-5 rounded bg-accent" />
          <span className="text-[12px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
            Kullanım Senaryoları
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-[32px] lg:text-[40px] leading-[1.1] tracking-[-0.01em] text-foreground mb-10">
          AI şablonlarıyla hızlıca başlayın
        </h2>

        {/* Template Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((template, i) => (
            <div
              key={`${offset}-${i}`}
              className="glass rounded-xl p-6 hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              {/* Icons */}
              <div className="flex gap-2.5 mb-5">
                {template.icons.map((icon, j) => (
                  <div
                    key={j}
                    className="w-10 h-10 rounded-lg flex items-center justify-center border border-black/[0.06] group-hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: icon.bg }}
                  >
                    <TemplateIconSVG type={icon.type} color={icon.color} />
                  </div>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-semibold text-foreground leading-snug">
                {template.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-end gap-2 mt-8">
          <button
            onClick={() => canPrev && setOffset(offset - 1)}
            disabled={!canPrev}
            className={`w-10 h-10 rounded-full border border-black/[0.1] flex items-center justify-center transition-all ${
              canPrev
                ? "hover:border-black/[0.25] hover:bg-black/[0.02] text-foreground"
                : "opacity-25 cursor-not-allowed text-muted"
            }`}
            aria-label="Önceki"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => canNext && setOffset(offset + 1)}
            disabled={!canNext}
            className={`w-10 h-10 rounded-full border border-black/[0.1] flex items-center justify-center transition-all ${
              canNext
                ? "hover:border-black/[0.25] hover:bg-black/[0.02] text-foreground"
                : "opacity-25 cursor-not-allowed text-muted"
            }`}
            aria-label="Sonraki"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
