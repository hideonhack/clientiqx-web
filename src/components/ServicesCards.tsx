import Link from "next/link";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}

const cards: ServiceCard[] = [
  {
    icon: "globe",
    title: "Web & mobil uygulama geliştirme",
    description:
      "Modern teknolojilerle ölçeklenebilir, performanslı web ve mobil çözümler üretin.",
  },
  {
    icon: "brain",
    title: "Yapay zeka ve otomasyon çözümleri",
    description:
      "AI destekli araçlarla iş süreçlerinizi otomatikleştirin ve veriden değer üretin.",
  },
  {
    icon: "shield",
    title: "Kurumsal düzeyde güvenlik ve uyumluluk",
    description:
      "SOC 2, KVKK ve ISO 27001 standartlarına uygun güvenli yazılım altyapıları.",
  },
  {
    icon: "cloud",
    title: "Bulut altyapı ve DevOps hizmetleri",
    description:
      "Yüksek erişilebilirlik ve otomatik ölçekleme ile kesintisiz bulut altyapıları kurun.",
  },
  {
    icon: "layers",
    title: "Uçtan uca proje yönetimi ve danışmanlık",
    description:
      "Dijital dönüşüm stratejinizi planlayın, uygulayın ve sürdürülebilir büyüme sağlayın.",
  },
];

const links = [
  { label: "Tüm hizmetler", href: "#" },
  { label: "Güvenlik ve Uyumluluk", href: "#" },
  { label: "Demo talep edin", href: "#" },
];

function CardIcon({ type }: { type: string }) {
  const cls = "text-accent";
  switch (type) {
    case "globe":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );
    case "brain":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <path d="M12 2a7 7 0 017 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 017-7z" />
          <path d="M10 21h4M12 17v4" />
          <circle cx="10" cy="9" r="1" fill="currentColor" />
          <circle cx="14" cy="9" r="1" fill="currentColor" />
        </svg>
      );
    case "shield":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <path d="M17.5 19H9a7 7 0 110-14h.5A5.5 5.5 0 0120 9.5a4.5 4.5 0 01-2.5 9.5z" />
        </svg>
      );
    case "layers":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cls}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesCards() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-4">
          {/* First row: 3 cards */}
          {cards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className="glass-dark rounded-xl p-7 pb-8 flex flex-col justify-between min-h-[260px] hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="mb-16">
                <CardIcon type={card.icon} />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-foreground leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

          {/* Second row: 2 cards + links column */}
          {cards.slice(3, 5).map((card) => (
            <div
              key={card.title}
              className="glass-dark rounded-xl p-7 pb-8 flex flex-col justify-between min-h-[260px] hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <div className="mb-16">
                <CardIcon type={card.icon} />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-foreground leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}

          {/* Links column */}
          <div className="flex flex-col justify-center py-4 lg:pl-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group/link flex items-center justify-between py-5 border-b border-accent/10 hover:border-accent/30 transition-colors"
              >
                <span className="text-[17px] font-semibold text-foreground group-hover/link:text-accent transition-colors">
                  {link.label}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-foreground/40 group-hover/link:text-accent group-hover/link:translate-x-1 transition-all"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
