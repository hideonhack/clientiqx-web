import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Hizmetler",
    links: [
      { label: "Web Geliştirme", href: "/hizmetler/web-gelistirme" },
      { label: "Mobil Uygulama", href: "/hizmetler/mobil-uygulama" },
      { label: "Yapay Zeka & ML", href: "/hizmetler/yapay-zeka" },
      { label: "E-Ticaret", href: "/hizmetler/e-ticaret" },
      { label: "ERP & CRM", href: "/hizmetler/erp-crm" },
      { label: "UI/UX Tasarım", href: "/hizmetler/ui-ux-tasarim" },
      { label: "Danışmanlık", href: "/hizmetler/danismanlik" },
    ],
  },
  {
    title: "Çözümler",
    links: [
      { label: "Satış & Pazarlama", href: "/cozumler/satis-pazarlama" },
      { label: "Müşteri Hizmetleri", href: "/cozumler/musteri-hizmetleri" },
      { label: "Sağlık", href: "/cozumler/saglik" },
      { label: "Finans", href: "/cozumler/finans" },
      { label: "E-Ticaret & Perakende", href: "/cozumler/e-ticaret-perakende" },
    ],
  },
  {
    title: "Şirket",
    links: [
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "Blog", href: "/blog" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
  {
    title: "Destek",
    links: [
      { label: "Destek Merkezi", href: "/destek" },
      { label: "İletişim", href: "/iletisim" },
    ],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "X",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

const bottomLinks = [
  "Yardım",
  "Kurumsal",
  "Gizlilik",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/[0.06]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-14 lg:py-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold text-foreground mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href || "#"}
                      className="text-[13px] text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Social + Bottom Links */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 py-8">
          {/* Social */}
          <div className="flex items-center gap-4">
            <span className="text-[13px] text-muted">Bizi takip edin</span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-8 h-8 rounded-full bg-accent/[0.08] hover:bg-accent/[0.15] flex items-center justify-center text-foreground/50 hover:text-accent transition-all"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {bottomLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-[13px] font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-cropped.png"
              alt="ClientIQX"
              width={654}
              height={102}
              className="h-5 w-auto opacity-60"
            />
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-muted">
            <span>&copy; 2026 ClientIQX. Tüm hakları saklıdır.</span>
            <Link href="#" className="hover:text-foreground transition-colors">
              Çerez Ayarları
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Yasal Bilgiler
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Gizlilik Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
