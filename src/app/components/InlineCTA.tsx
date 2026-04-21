import Link from "next/link";

/**
 * Mid-content call-to-action card. Drop into practice-area pages and blog
 * posts as a conversion anchor. Tuned to read as a natural break in the
 * content rather than an ad.
 */
export default function InlineCTA({
  title = "Ready to discuss your case?",
  subtitle = "25+ years of Florida family-law experience. Direct access to Jim — no handoffs.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <aside
      className="my-10 bg-[#FAF7F2] border-l-4 border-[#8B2635] p-6 md:p-8 not-prose"
      aria-label="Schedule a consultation"
    >
      <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h3
            className="text-[#03254B] text-[22px] leading-[1.2] mb-2"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 500,
            }}
          >
            {title}
          </h3>
          <p
            className="text-[#03254B]/75 text-[15px] leading-[1.55]"
            style={{
              fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif",
            }}
          >
            {subtitle}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:flex-col lg:flex-row flex-shrink-0">
          <a
            href="tel:+1-904-364-4565"
            className="inline-flex items-center justify-center gap-2 bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-semibold tracking-[2px] text-[12px] px-5 py-3 transition-colors whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            904-364-4565
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-[#03254B] text-[#03254B] hover:bg-[#03254B] hover:text-white uppercase font-semibold tracking-[2px] text-[12px] px-5 py-3 transition-all whitespace-nowrap"
            style={{
              fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif",
            }}
          >
            Schedule Online
          </Link>
        </div>
      </div>
    </aside>
  );
}
