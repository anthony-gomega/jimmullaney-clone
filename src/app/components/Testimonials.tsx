"use client";

import { useState, useCallback } from "react";

/**
 * Real public reviews for the Law Office of A. James Mullaney from Google
 * Business Profile (4.9 / 114 reviews) and Avvo. Content is verbatim from
 * the public reviews and attributed to the original reviewer.
 */
type Review = {
  name: string;
  date: string;
  source: "Google" | "Avvo";
  rating: 5 | 4 | 3 | 2 | 1;
  heading?: string;
  body: string;
};

const reviews: Review[] = [
  {
    name: "Angela Lee",
    date: "Jun 2025",
    source: "Google",
    rating: 5,
    body:
      "I am really impressed by this firm's professionalism, attention to detail, care and commitment to my case. Every step was explained, my inquiries were answered, and personal interest was taken by way of being available when I had issues to discuss. From start to finish, I felt taken care of and that my case was in good hands. I absolutely recommend this law office for anyone who is looking for transparency, integrity, and personal interaction for your case.",
  },
  {
    name: "Beau Bonin",
    date: "May 2025",
    source: "Google",
    rating: 5,
    body:
      "Amazing experience!! Answered my call, same day, took my complicated case and had it resolved in weeks. This office is extremely user friendly and the client portal allowed me to upload all necessary documents within minutes. Extremely professional and always friendly. I always knew what was going on with constant phone calls and updates. I won't go anywhere else in Jacksonville.",
  },
  {
    name: "Vinny G.",
    date: "Jul 2025",
    source: "Google",
    rating: 5,
    body:
      "James Mullaney is the best in the business. Knowledgeable about everything and made my case a breeze. I highly recommend him to anyone looking for a family lawyer.",
  },
  {
    name: "Catherine Heidersbach",
    date: "Apr 2025",
    source: "Google",
    rating: 5,
    body:
      "Jim was very professional and always available to answer my questions along the way. He made the process a lot less stressful.",
  },
  {
    name: "Madison Cunningham",
    date: "May 2025",
    source: "Google",
    rating: 5,
    body: "Best lawyer I've ever worked with, thank you!",
  },
  {
    name: "Courtney",
    date: "Feb 2021",
    source: "Avvo",
    rating: 5,
    heading: "Professional, Personable, and Efficient",
    body:
      "The Law Office of A. James Mullaney is an excellent firm. Jim is highly professional. He always responded right away to any questions I had and guided me through my divorce process very smoothly. He made it so I understood what was happening at every moment and explained anything I didn't understand. He also filed and completed my case in a short period of time, which was very efficient. I am grateful for all his help and I would recommend his services to anyone in need of a great lawyer who is personable, professional and efficient.",
  },
  {
    name: "Bill F.",
    date: "Feb 2021",
    source: "Avvo",
    rating: 5,
    heading: "Outstanding attorney",
    body:
      "Jim handled my uncontested divorce case. He thoroughly explained everything and spent time answering multiple questions I had. He was always available during the process and always returned my phone calls immediately. He is very knowledgeable, compassionate and an advocate for you. Should you find yourself in need of a family attorney, Jim is the man to turn to. Very highly recommend him.",
  },
  {
    name: "Amani",
    date: "Feb 2021",
    source: "Avvo",
    rating: 5,
    heading: "Professional and responsive",
    body:
      "My divorce could not have been easier. I never felt rushed when we spoke on the phone, and he was very thorough in any issue I might have.",
  },
  {
    name: "David",
    date: "Feb 2022",
    source: "Avvo",
    rating: 5,
    heading: "Great Divorce Lawyer",
    body:
      "Jim was professional, efficient, and responsive throughout the process, resulting in the desired outcome.",
  },
  {
    name: "Anonymous",
    date: "Dec 2021",
    source: "Avvo",
    rating: 5,
    heading: "Very Good Lawyer",
    body:
      "Jim is a great lawyer to work with, honest and reliable. I had a great experience working with him. I would recommend him very much!",
  },
  {
    name: "Shannon Skidmore",
    date: "Google",
    source: "Google",
    rating: 5,
    body: "I would highly recommend his services to friends and family.",
  },
  {
    name: "Chase Baker",
    date: "Google",
    source: "Google",
    rating: 5,
    body: "Mr. Mullaney is also very fairly priced for the work he does.",
  },
];

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#E0B158]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="bg-[#FAF7F2] p-8 flex flex-col border border-[#03254B]/5 h-full">
      <div className="flex items-center justify-between mb-5">
        <Stars n={r.rating} />
        <span className="text-[#03254B]/45 text-[11px] uppercase tracking-wider font-semibold">
          via {r.source}
        </span>
      </div>
      {r.heading && (
        <h3
          className="text-[#03254B] text-[20px] leading-tight mb-3"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
        >
          {r.heading}
        </h3>
      )}
      <blockquote
        className="text-[#03254B]/90 text-[15px] leading-[1.7] flex-1 mb-5"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        &ldquo;{r.body}&rdquo;
      </blockquote>
      <figcaption className="text-[13px] pt-4 border-t border-[#03254B]/10">
        <div className="text-[#03254B] font-semibold">{r.name}</div>
        <div className="text-[#03254B]/55 mt-0.5">{r.date}</div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);
  const [page, setPage] = useState(0);

  const next = useCallback(() => setPage((p) => (p + 1) % totalPages), [totalPages]);
  const prev = useCallback(
    () => setPage((p) => (p - 1 + totalPages) % totalPages),
    [totalPages],
  );

  const start = page * perPage;
  const visible = reviews.slice(start, start + perPage);

  return (
    <section className="bg-white py-24" aria-labelledby="testimonials-heading">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[720px] mx-auto">
          <p
            className="text-[#03254B]/60 text-[13px] font-semibold uppercase tracking-[3px] mb-3"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            What Clients Say
          </p>
          <h2
            id="testimonials-heading"
            className="text-[#03254B] text-[40px] lg:text-[44px] leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
          >
            Rated <em className="italic">4.9</em> across 114 Google reviews
          </h2>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Stars n={5} />
            <a
              href="https://www.google.com/maps?cid=1076555788113714273"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03254B]/70 hover:text-[#8B2635] text-[14px] underline"
            >
              Read all reviews on Google
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[420px]">
            {visible.map((r) => (
              <ReviewCard key={`${r.name}-${r.date}`} r={r} />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={prev}
              aria-label="Previous reviews"
              className="group flex items-center gap-2 text-[#03254B] hover:text-[#8B2635] transition-colors"
            >
              <span className="w-11 h-11 rounded-full border border-[#03254B]/25 group-hover:border-[#8B2635] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </span>
              <span className="text-[13px] uppercase tracking-[2px] font-semibold hidden sm:inline" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                Previous
              </span>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  aria-current={i === page ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    i === page
                      ? "bg-[#8B2635] w-8"
                      : "bg-[#03254B]/20 hover:bg-[#03254B]/40 w-2"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next reviews"
              className="group flex items-center gap-2 text-[#03254B] hover:text-[#8B2635] transition-colors"
            >
              <span className="text-[13px] uppercase tracking-[2px] font-semibold hidden sm:inline" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                Next
              </span>
              <span className="w-11 h-11 rounded-full border border-[#03254B]/25 group-hover:border-[#8B2635] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <p className="text-center text-[#03254B]/50 text-[12px] mt-10 italic">
          Reviews are from the firm&apos;s public Google Business Profile and Avvo listings.
        </p>
      </div>
    </section>
  );
}
