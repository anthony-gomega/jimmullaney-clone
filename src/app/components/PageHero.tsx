import Link from "next/link";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: 340,
        paddingTop: 96,
        paddingBottom: 72,
        backgroundColor: "#03254B",
      }}
    >
      {/* Background image — legal-themed (gavel on dark backdrop) */}
      <Image
        src="/images/inner-hero-legal.jpg"
        alt=""
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover z-0"
        style={{ objectPosition: "right center" }}
      />
      {/* Gradient overlay darker on the left (where the title sits), revealing
          the gavel on the right */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(3,15,40,0.95) 0%, rgba(3,37,75,0.85) 40%, rgba(3,37,75,0.3) 75%, rgba(3,37,75,0.1) 100%)",
        }}
      />
      {/* Subtle brass glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none z-0"
        style={{
          top: "-40%",
          right: "-20%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(224,177,88,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <p
          className="text-[#E0B158] text-[12px] uppercase tracking-[3px] mb-4 font-semibold"
          style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
        >
          Experienced. Personable. Effective.
        </p>
        <h1
          className="text-white text-[36px] lg:text-[50px] leading-[1.1] mb-5 max-w-[860px]"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
        >
          {title}
        </h1>
        <div
          aria-hidden="true"
          className="mb-5"
          style={{
            width: 60,
            height: 2,
            background: "linear-gradient(90deg, #E0B158 0%, #8B2635 100%)",
          }}
        />
        {breadcrumbs.length > 0 && (
          <nav
            className="flex flex-wrap items-center gap-2 text-white/70 text-[13px]"
            style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
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
                  <span className="text-white">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
