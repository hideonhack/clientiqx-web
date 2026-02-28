"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Mega-menu data                                                     */
/* ------------------------------------------------------------------ */

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  href?: string;
}

interface SolutionItem {
  icon: string;
  title: string;
  description: string;
  color: string;
  href?: string;
}

interface ResourceItem {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

const servicesData: ServiceItem[] = [
  { icon: "globe", title: "Web Geliştirme", description: "Modern ve ölçeklenebilir web uygulamaları", color: "#424874", href: "/hizmetler/web-gelistirme" },
  { icon: "phone", title: "Mobil Uygulama", description: "iOS ve Android'de yüksek performans", color: "#8B5CF6", href: "/hizmetler/mobil-uygulama" },
  { icon: "sparkle", title: "Yapay Zeka & ML", description: "AI ile iş süreçlerini otomatikleştirin", color: "#F59E0B", href: "/hizmetler/yapay-zeka" },
  { icon: "cart", title: "E-Ticaret", description: "Online satışlarınızı artırın", color: "#10B981", href: "/hizmetler/e-ticaret" },
  { icon: "database", title: "ERP & CRM", description: "Kurumsal kaynak ve müşteri yönetimi", color: "#6366F1", href: "/hizmetler/erp-crm" },
  { icon: "palette", title: "UI/UX Tasarım", description: "Kullanıcı merkezli dijital deneyim", color: "#EC4899", href: "/hizmetler/ui-ux-tasarim" },
  { icon: "briefcase", title: "Danışmanlık", description: "Dijital dönüşüm stratejisi ve proje yönetimi", color: "#A16207", href: "/hizmetler/danismanlik" },
];

const solutionsData: SolutionItem[] = [
  { icon: "target", title: "Satış & Pazarlama", description: "Potansiyel müşterileri yakalayın, satış süreçlerini otomatikleştirin", color: "#F59E0B", href: "/cozumler/satis-pazarlama" },
  { icon: "headset", title: "Müşteri Hizmetleri", description: "7/24 kesintisiz profesyonel müşteri deneyimi", color: "#3B82F6", href: "/cozumler/musteri-hizmetleri" },
  { icon: "heart", title: "Sağlık", description: "Randevu yönetimi, hasta takibi ve otomasyon", color: "#10B981", href: "/cozumler/saglik" },
  { icon: "shield", title: "Finans", description: "Güvenli finansal işlem altyapıları", color: "#6366F1", href: "/cozumler/finans" },
  { icon: "store", title: "E-Ticaret & Perakende", description: "Çok kanallı satış ve stok yönetimi", color: "#EC4899", href: "/cozumler/e-ticaret-perakende" },
];

const resourcesData: ResourceItem[] = [
  { icon: "pen", title: "Blog", description: "Teknoloji ve yazılım üzerine güncel içerikler", href: "/blog" },
  { icon: "lifebuoy", title: "Destek Merkezi", description: "Teknik destek ve yardım", href: "/destek" },
  { icon: "mail", title: "İletişim", description: "Bizimle iletişime geçin", href: "/iletisim" },
  { icon: "building", title: "Hakkımızda", description: "ClientIQX'i daha yakından tanıyın", href: "/hakkimizda" },
];

/* ------------------------------------------------------------------ */
/*  SVG Icons                                                          */
/* ------------------------------------------------------------------ */

function MenuIcon({ type, color, size = 22 }: { type: string; color?: string; size?: number }) {
  const c = color || "currentColor";
  const s = { color: c };

  switch (type) {
    case "globe":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );
    case "phone":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "sparkle":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={s}>
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>
      );
    case "cart":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
        </svg>
      );
    case "database":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "palette":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.04-.23-.29-.38-.63-.38-1.01 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-5.17-4.49-9-10-9z" />
          <circle cx="7.5" cy="11.5" r="1.5" fill="currentColor" /><circle cx="12" cy="7.5" r="1.5" fill="currentColor" />
          <circle cx="16.5" cy="11.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "briefcase":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
      );
    case "target":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "headset":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <path d="M3 18v-6a9 9 0 0118 0v6" />
          <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
        </svg>
      );
    case "heart":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
        </svg>
      );
    case "shield":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "store":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <path d="M3 9l1-4h16l1 4" />
          <path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9" />
          <path d="M9 21V13h6v8" />
          <path d="M3 9c0 1.1.9 2 2 2s2-.9 2-2" />
          <path d="M7 9c0 1.1.9 2 2 2s2-.9 2-2" />
          <path d="M11 9c0 1.1.9 2 2 2s2-.9 2-2" />
          <path d="M15 9c0 1.1.9 2 2 2s2-.9 2-2" />
        </svg>
      );
    case "pen":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <path d="M12 20h9" strokeLinecap="round" />
          <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      );
    case "lifebuoy":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24" />
        </svg>
      );
    case "mail":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-10 6L2 7" />
        </svg>
      );
    case "building":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={s}>
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <path d="M9 22V18h6v4" />
          <path d="M8 6h2M14 6h2M8 10h2M14 10h2M8 14h2M14 14h2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function ChevronDown({ open }: { open?: boolean }) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      className={`ml-1 opacity-50 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Mega Menu Panels                                                   */
/* ------------------------------------------------------------------ */

function ServicesMenu() {
  return (
    <div className="grid grid-cols-[1fr_300px] gap-0">
      {/* Left: Services Grid */}
      <div className="py-8 px-8">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/40 mb-5">
          Hizmetlerimiz
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {servicesData.map((item) => (
            <Link
              key={item.title}
              href={item.href || "#"}
              className="group flex items-start gap-3.5 p-3 -mx-3 rounded-xl hover:bg-black/[0.03] transition-colors duration-150"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <MenuIcon type={item.icon} color={item.color} size={20} />
              </div>
              <div>
                <span className="text-[14px] font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </span>
                <p className="text-[12px] text-foreground/45 leading-snug mt-0.5">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right: Featured */}
      <div className="border-l border-black/[0.06] bg-surface py-8 px-8">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/40 mb-5">
          Popüler
        </p>
        <div className="space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 p-5 border border-accent/10">
            <div className="w-9 h-9 rounded-lg bg-accent/15 flex items-center justify-center mb-3">
              <MenuIcon type="sparkle" color="#424874" size={18} />
            </div>
            <h4 className="text-[14px] font-semibold text-foreground mb-1">
              AI destekli çözümler
            </h4>
            <p className="text-[12px] text-foreground/50 leading-relaxed mb-3">
              Yapay zeka ile iş süreçlerinizi otomatikleştirin ve rekabet avantajı kazanın.
            </p>
            <span className="text-[12px] font-semibold text-accent">
              Keşfedin &rarr;
            </span>
          </div>
          <Link
            href="#"
            className="flex items-center gap-2 text-[13px] font-medium text-foreground/60 hover:text-accent transition-colors"
          >
            Tüm hizmetleri görüntüleyin
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="col-span-full border-t border-black/[0.06] px-8 py-4 flex items-center gap-6">
        <Link href="#" className="flex items-center gap-2 text-[13px] font-medium text-foreground/60 hover:text-accent transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
          </svg>
          Tüm hizmetleri keşfedin
        </Link>
        <Link href="#" className="flex items-center gap-2 text-[13px] font-medium text-foreground/60 hover:text-accent transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          AI çözümlerini inceleyin
        </Link>
        <Link href="#" className="flex items-center gap-2 text-[13px] font-medium text-foreground/60 hover:text-accent transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          Ücretsiz danışmanlık alın
        </Link>
      </div>
    </div>
  );
}

function SolutionsMenu() {
  return (
    <div className="grid grid-cols-[1fr_300px] gap-0">
      {/* Left: Solutions */}
      <div className="py-8 px-8">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/40 mb-5">
          Sektörel Çözümler
        </p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-1">
          {solutionsData.map((item) => (
            <Link
              key={item.title}
              href={item.href || "#"}
              className="group flex items-start gap-3.5 p-3 -mx-3 rounded-xl hover:bg-black/[0.03] transition-colors duration-150"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${item.color}10` }}
              >
                <MenuIcon type={item.icon} color={item.color} size={20} />
              </div>
              <div>
                <span className="text-[14px] font-semibold text-foreground group-hover:text-accent transition-colors">
                  {item.title}
                </span>
                <p className="text-[12px] text-foreground/45 leading-snug mt-0.5">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Right: Featured */}
      <div className="border-l border-black/[0.06] bg-surface py-8 px-8">
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/40 mb-5">
          Öne Çıkan
        </p>
        <div className="space-y-4">
          <div className="rounded-xl bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-5 border border-blue-500/10">
            <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center mb-3">
              <MenuIcon type="headset" color="#3B82F6" size={18} />
            </div>
            <h4 className="text-[14px] font-semibold text-foreground mb-1">
              Müşteri deneyimini dönüştürün
            </h4>
            <p className="text-[12px] text-foreground/50 leading-relaxed mb-3">
              AI asistanlar ile 7/24 profesyonel destek sunun, müşteri memnuniyetini artırın.
            </p>
            <span className="text-[12px] font-semibold text-accent">
              Daha fazla &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesMenu() {
  return (
    <div className="py-8 px-8">
      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/40 mb-5">
        Kaynaklar
      </p>
      <div className="grid grid-cols-4 gap-x-6 gap-y-1">
        {resourcesData.map((item) => (
          <Link
            key={item.title}
            href={item.href || "#"}
            className="group flex items-start gap-3.5 p-3 -mx-3 rounded-xl hover:bg-black/[0.03] transition-colors duration-150"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-foreground/[0.04]">
              <MenuIcon type={item.icon} color="#424874" size={20} />
            </div>
            <div>
              <span className="text-[14px] font-semibold text-foreground group-hover:text-accent transition-colors">
                {item.title}
              </span>
              <p className="text-[12px] text-foreground/45 leading-snug mt-0.5">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Nav Items                                                          */
/* ------------------------------------------------------------------ */

type DropdownKey = "hizmetler" | "cozumler" | "kaynaklar";

interface NavItem {
  label: string;
  dropdown?: DropdownKey;
}

const navItems: NavItem[] = [
  { label: "Hizmetler", dropdown: "hizmetler" },
  { label: "Çözümler", dropdown: "cozumler" },
  { label: "Kaynaklar", dropdown: "kaynaklar" },
  { label: "Kurumsal" },
];

/* ------------------------------------------------------------------ */
/*  Header Component                                                   */
/* ------------------------------------------------------------------ */

export default function Header() {
  const [showBanner, setShowBanner] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveDropdown(null);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  function handleMouseEnter(key: DropdownKey) {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setActiveDropdown(key);
  }

  function handleMouseLeave() {
    closeTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }

  function handleDropdownEnter() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  }

  const dropdownContent: Record<DropdownKey, React.ReactNode> = {
    hizmetler: <ServicesMenu />,
    cozumler: <SolutionsMenu />,
    kaynaklar: <ResourcesMenu />,
  };

  return (
    <header ref={headerRef} className="w-full sticky top-0 z-50">
      {/* Announcement Bar */}
      {showBanner && (
        <div className="relative bg-gradient-to-r from-accent/95 via-accent to-[#363C62] text-white text-[13px] text-center py-2.5 px-12">
          <p className="tracking-wide">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/80 mr-2 animate-pulse-soft" />
            Yapay zeka destekli yeni nesil yazılım çözümlerimizi keşfedin.{" "}
            <Link href="#" className="underline underline-offset-2 font-medium hover:opacity-80 transition-opacity">
              Daha fazla bilgi &rarr;
            </Link>
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors text-lg leading-none"
            aria-label="Duyuruyu kapat"
          >
            &times;
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative bg-white/70 backdrop-blur-xl border-b border-white/40 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between px-6 lg:px-8 h-14">
          <div className="flex items-center gap-7">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo-cropped.png" alt="ClientIQX" width={654} height={102} className="h-6 w-auto" priority />
            </Link>
            <ul className="hidden lg:flex items-center">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  onMouseEnter={() => item.dropdown && handleMouseEnter(item.dropdown)}
                  onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
                >
                  {item.dropdown ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.dropdown ? null : item.dropdown!)
                      }
                      className={`flex items-center px-3 py-1.5 text-[14px] rounded-lg transition-all duration-150 ${
                        activeDropdown === item.dropdown
                          ? "text-foreground bg-black/[0.04]"
                          : "text-foreground/70 hover:text-foreground hover:bg-black/[0.03]"
                      }`}
                    >
                      {item.label}
                      <ChevronDown open={activeDropdown === item.dropdown} />
                    </button>
                  ) : (
                    <Link
                      href="#"
                      className="flex items-center px-3 py-1.5 text-[14px] text-foreground/70 hover:text-foreground rounded-lg hover:bg-black/[0.03] transition-all duration-150"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            <Link href="#" className="px-3 py-1.5 text-[14px] text-foreground/60 hover:text-foreground transition-colors duration-150">
              Hizmetleri keşfet
            </Link>
            <Link href="/iletisim" className="px-3 py-1.5 text-[14px] text-foreground/60 hover:text-foreground transition-colors duration-150">
              İletişim
            </Link>
            <Link
              href="/iletisim"
              className="ml-2 px-5 py-2 text-[13px] font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 glow-accent glow-accent-hover"
            >
              Teklif Alın
            </Link>
          </div>

          <button
            className="lg:hidden p-2 -mr-2"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null); }}
          >
            {mobileOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Fullscreen Mobile Menu — absolute from nav bottom */}
        {mobileOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full z-50 bg-white flex flex-col h-[calc(100dvh-3.5rem)]">
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.dropdown ? null : item.dropdown!)
                        }
                        className="flex items-center justify-between w-full py-3.5 text-[16px] font-semibold text-foreground"
                      >
                        {item.label}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 12 12"
                          fill="none"
                          className={`transition-transform duration-200 ${mobileExpanded === item.dropdown ? "rotate-180" : ""}`}
                        >
                          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {mobileExpanded === item.dropdown && (
                        <div className="pb-3 pl-1 space-y-0.5">
                          {item.dropdown === "hizmetler" &&
                            servicesData.map((s) => (
                              <Link
                                key={s.title}
                                href={s.href || "#"}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 py-3 px-2 rounded-lg active:bg-black/[0.03] transition-colors"
                              >
                                <div
                                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ backgroundColor: `${s.color}10` }}
                                >
                                  <MenuIcon type={s.icon} color={s.color} size={18} />
                                </div>
                                <div>
                                  <span className="text-[15px] font-medium text-foreground">{s.title}</span>
                                  <p className="text-[12px] text-foreground/40">{s.description}</p>
                                </div>
                              </Link>
                            ))}
                          {item.dropdown === "cozumler" &&
                            solutionsData.map((s) => (
                              <Link
                                key={s.title}
                                href={s.href || "#"}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 py-3 px-2 rounded-lg active:bg-black/[0.03] transition-colors"
                              >
                                <div
                                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                                  style={{ backgroundColor: `${s.color}10` }}
                                >
                                  <MenuIcon type={s.icon} color={s.color} size={18} />
                                </div>
                                <div>
                                  <span className="text-[15px] font-medium text-foreground">{s.title}</span>
                                  <p className="text-[12px] text-foreground/40">{s.description}</p>
                                </div>
                              </Link>
                            ))}
                          {item.dropdown === "kaynaklar" &&
                            resourcesData.map((r) => (
                              <Link
                                key={r.title}
                                href={r.href || "#"}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-3 py-3 px-2 rounded-lg active:bg-black/[0.03] transition-colors"
                              >
                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-foreground/[0.04]">
                                  <MenuIcon type={r.icon} size={18} />
                                </div>
                                <div>
                                  <span className="text-[15px] font-medium text-foreground">{r.title}</span>
                                  <p className="text-[12px] text-foreground/40">{r.description}</p>
                                </div>
                              </Link>
                            ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href="#"
                      onClick={() => setMobileOpen(false)}
                      className="block py-3.5 text-[16px] font-semibold text-foreground"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA — pinned to bottom */}
            <div className="flex-shrink-0 px-6 py-5 border-t border-black/[0.06] space-y-3 bg-white">
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3.5 text-[15px] font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-200 glow-accent"
              >
                Teklif Alın
              </Link>
              <Link
                href="/iletisim"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3.5 text-[15px] font-semibold text-foreground glass-button rounded-xl transition-all duration-200"
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Full-width Mega Menu */}
      {activeDropdown && (
        <div
          className="absolute left-0 right-0 top-full z-40 animate-mega-menu-in"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white border-b border-black/[0.08] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)]">
            <div className="max-w-[1200px] mx-auto">
              {dropdownContent[activeDropdown]}
            </div>
          </div>
        </div>
      )}

      {/* Overlay when dropdown is open */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black/[0.06] -z-10 animate-fade-in"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </header>
  );
}
