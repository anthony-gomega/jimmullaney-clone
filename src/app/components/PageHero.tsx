import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
}

/**
 * Editorial hero for inner pages. Rich navy field with a subtle brass
 * pinstripe pattern, a serif title, and a gold accent divider. More
 * premium than a stock photo, and legally-themed without being literal.
 */
export default function PageHero({ title, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #03254B 0%, #0a1a3f 55%, #050e24 100%)",
        minHeight: 320,
        paddingTop: 96,
        paddingBottom: 72,
      }}
    >
      {/* Diagonal brass pinstripe texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent 0 48px, rgba(224,177,88,0.035) 48px 49px)",
        }}
      />
      {/* Large soft brass glow to break the field */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "-30%",
          right: "-10%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224,177,88,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        <p
          className="text-[#E0B158] text-[12px] uppercase tracking-[3px] mb-4 font-semibold"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Experienced. Personable. Effective.
        </p>
        <h1
          className="text-white text-[38px] lg:text-[52px] leading-[1.1] mb-5 max-w-[840px]"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
        >
          {title}
        </h1>
        <div
          aria-hidden="true"
          className="mb-6"
          style={{
            width: 64,
            height: 2,
            background: "linear-gradient(90deg, #E0B158 0%, #8B2635 100%)",
          }}
        />
        {breadcrumbs.length > 0 && (
          <nav
            className="flex flex-wrap items-center gap-2 text-white/65 text-[13px]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-white/30">/</span>
                {b.href ? (
                  <Link href={b.href} className="hover:text-white transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
