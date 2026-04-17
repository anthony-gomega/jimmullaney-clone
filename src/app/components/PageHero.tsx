import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHero({ title, breadcrumbs = [] }: PageHeroProps) {
  return (
    <section
      className="relative flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(19, 30, 77, 0.85) 0%, rgba(19, 30, 77, 0.7) 100%), url("/images/banner-jacksonville-new.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000",
        minHeight: "300px",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <p
          className="text-white/80 text-[14px] uppercase tracking-wider mb-4"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Experienced. Personable. Effective.
        </p>
        <h1
          className="text-white text-[38px] lg:text-[48px] leading-[1.1] font-normal mb-4"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          {title}
        </h1>
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-white/80 text-[14px]">
            <Link href="/" className="hover:text-white underline">
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>»</span>
                {b.href ? (
                  <Link href={b.href} className="hover:text-white underline">
                    {b.label}
                  </Link>
                ) : (
                  <span>{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  );
}
