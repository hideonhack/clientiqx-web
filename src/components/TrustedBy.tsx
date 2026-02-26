const technologies = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "next" },
  { name: "Node.js", icon: "node" },
  { name: "Python", icon: "python" },
  { name: "TypeScript", icon: "typescript" },
  { name: "AWS", icon: "aws" },
  { name: "Docker", icon: "docker" },
  { name: "Flutter", icon: "flutter" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Figma", icon: "figma" },
  { name: "OpenAI", icon: "openai" },
];

function TechLogo({ icon, name }: { icon: string; name: string }) {
  const size = 22;

  const logos: Record<string, React.ReactNode> = {
    react: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)" />
      </svg>
    ),
    next: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000" />
        <path d="M16.5 18.5L10 10v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 8v8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    node: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" fill="#339933" fillOpacity="0.15" stroke="#339933" strokeWidth="1.2" />
        <text x="12" y="15" textAnchor="middle" fill="#339933" fontSize="8" fontWeight="bold">JS</text>
      </svg>
    ),
    python: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2c-3 0-5 1-5 3.5V8h5v1H6c-2 0-4 1.5-4 4.5S4 18 6 18h2v-2.5c0-2 1.5-3.5 3.5-3.5h5c1.5 0 3-1 3-2.5V5.5C19.5 3 17 2 12 2zm-2.5 2a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB" />
        <path d="M12 22c3 0 5-1 5-3.5V16h-5v-1h6c2 0 4-1.5 4-4.5S20 6 18 6h-2v2.5c0 2-1.5 3.5-3.5 3.5h-5c-1.5 0-3 1-3 2.5v4.5C4.5 21 7 22 12 22zm2.5-2a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B" />
      </svg>
    ),
    typescript: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
        <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">TS</text>
      </svg>
    ),
    aws: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M6.5 12.5c0 2.5 2.5 4.5 5.5 4.5s5.5-2 5.5-4.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 14l2 1.5M20 14l-2 1.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 7.5l2 4.5 2-3 2 3 2-4.5" stroke="#232F3E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    docker: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="3" height="2.5" rx="0.3" fill="#2496ED" />
        <rect x="7" y="11" width="3" height="2.5" rx="0.3" fill="#2496ED" />
        <rect x="11" y="11" width="3" height="2.5" rx="0.3" fill="#2496ED" />
        <rect x="7" y="8" width="3" height="2.5" rx="0.3" fill="#2496ED" />
        <rect x="11" y="8" width="3" height="2.5" rx="0.3" fill="#2496ED" />
        <rect x="11" y="5" width="3" height="2.5" rx="0.3" fill="#2496ED" />
        <path d="M1 13.5c1-2 3-2.5 5-2.5h14c2 0 3 2 2.5 4-1 4-5 6-10.5 6S2 18 1 13.5z" stroke="#2496ED" strokeWidth="1" fill="none" />
      </svg>
    ),
    flutter: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M14 3l-9 9 3 3 12-12h-6z" fill="#02569B" />
        <path d="M14 13l-3 3 3 3h6l-3-3-3-3z" fill="#02569B" />
        <path d="M8 12l3 3 3-3-3-3-3 3z" fill="#54C5F8" />
      </svg>
    ),
    tailwind: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="#06B6D4">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C13.42 10.88 14.56 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.58 7.12 14.44 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.42 16.88 9.56 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.58 13.12 9.44 12 7 12z" />
      </svg>
    ),
    postgres: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="7" rx="7" ry="4" stroke="#336791" strokeWidth="1.3" />
        <path d="M5 7v5c0 2.2 3.1 4 7 4s7-1.8 7-4V7" stroke="#336791" strokeWidth="1.3" />
        <path d="M5 12v5c0 2.2 3.1 4 7 4s7-1.8 7-4v-5" stroke="#336791" strokeWidth="1.3" />
      </svg>
    ),
    figma: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="15" cy="12" r="3" fill="#1ABCFE" />
        <path d="M9 21a3 3 0 003-3v-3H9a3 3 0 000 6z" fill="#0ACF83" />
        <path d="M9 3a3 3 0 000 6h3V3H9z" fill="#F24E1E" />
        <path d="M12 3v6h3a3 3 0 000-6h-3z" fill="#FF7262" />
        <path d="M9 9a3 3 0 000 6h3V9H9z" fill="#A259FF" />
      </svg>
    ),
    openai: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 3a9 9 0 00-4.5 16.8l.5-2.8-2.5-1.5a5 5 0 013-9l.5.1A5 5 0 0117 5.5l-.5 2.8 2.5 1.5a5 5 0 01-3 9l-.5-.1A5 5 0 017 20.5" stroke="#000" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <div className="flex items-center justify-center gap-2.5">
      {logos[icon]}
      <span className="text-[13px] font-semibold text-foreground/35">{name}</span>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="bg-surface border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        {/* Header with line */}
        <div className="flex items-center gap-6 mb-10">
          <p className="text-[13px] text-muted whitespace-nowrap tracking-wide">
            Projelerimizde kullandığımız teknolojiler
          </p>
          <div className="flex-1 h-px bg-accent/[0.12]" />
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center justify-center h-12 hover:scale-105 transition-transform duration-300 select-none"
            >
              <TechLogo icon={tech.icon} name={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
