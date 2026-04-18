import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        backgroundColor: "#0e1a3f",
        minHeight: "640px",
        paddingTop: 120,
        paddingBottom: 120,
      }}
    >
      {/* Background image, slightly rotated to level the tilted skyline and scaled to hide empty corners */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/jacksonville-hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          transform: "rotate(-0.7deg) scale(1.08)",
          transformOrigin: "center center",
          filter: "brightness(1.05) contrast(1.02)",
        }}
      />
      {/* Gradient overlay — lighter on the right so the skyline stays visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(14, 26, 63, 0.82) 0%, rgba(14, 26, 63, 0.5) 45%, rgba(14, 26, 63, 0.15) 100%)",
        }}
      />
      <div className="relative z-10 w-full">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        <div className="max-w-[640px]">
          <p
            className="text-[#8B2635] text-[14px] font-semibold uppercase tracking-[2px] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Experienced. Personable. Effective.
          </p>
          <h1
            className="text-white text-[42px] lg:text-[56px] leading-[1.05] uppercase mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            <span className="font-normal">Jacksonville</span>
            <span className="block font-bold">Divorce &amp; Family Law</span>
            <span className="block font-normal">Attorney &amp; Mediator</span>
          </h1>
          <p className="text-white/90 text-[17px] leading-[1.7] mb-8 max-w-[560px]">
            Education, collaboration and efficiency are the cornerstones of my
            legal practice. My goal is to make sure that my clients understand
            the legal process so we can work together to make sound decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-bold tracking-wider text-[14px] px-8 py-4 transition-colors"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Schedule A Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
            <a
              href="tel:+1-904-364-4565"
              className="inline-flex items-center gap-2 border-2 border-white text-white uppercase font-bold tracking-wider text-[14px] px-8 py-4 hover:bg-white hover:text-[#131E4D] transition-all"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              904-364-4565
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

/* ─── Stats Band ─── */
function StatsBand() {
  const stats = [
    { num: "25+", label: "Years Exclusively Family Law" },
    { num: "FL & GA", label: "Licensed In Two States" },
    { num: "Certified", label: "FL Supreme Court Mediator" },
  ];
  return (
    <section className="bg-[#131E4D] border-b border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`text-center px-4 ${i > 0 ? "md:border-l md:border-white/15" : ""}`}
          >
            <div
              className="text-[#E0B158] text-[36px] leading-[1.1] mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
            >
              {s.num}
            </div>
            <div className="text-white/70 text-[13px] uppercase tracking-[1.5px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Featured Services (Uncontested Divorce + Mediation) ─── */
function FeaturedServices() {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <h2
            className="text-[#03254B] text-[44px] leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
          >
            A better path through <em className="italic">separation</em>
          </h2>
          <div className="red-divider mx-auto mb-6" />
          <p className="text-[#03254B]/75 text-[17px] leading-[1.7]">
            Coming to an agreement saves you a fortune — in legal fees, in time,
            and in the toll a drawn-out court fight takes on your family. My
            practice centers on getting you there.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Uncontested Divorce */}
          <Link
            href="/divorce/uncontested-divorce-in-jacksonville-fl"
            className="group bg-white border border-[#03254B]/10 hover:border-[#8B2635] hover:shadow-xl transition-all p-10 flex flex-col"
          >
            <div className="flex items-center justify-end mb-6">
              <Image
                src="/images/un-divorce-icon.webp"
                alt=""
                width={56}
                height={56}
                style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(40%) saturate(3800%) hue-rotate(215deg) brightness(80%) contrast(100%)" }}
              />
            </div>
            <h3
              className="text-[#03254B] text-[32px] leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
            >
              Uncontested Divorce
            </h3>
            <p className="text-[#03254B]/75 text-[16px] leading-[1.7] mb-8 flex-1">
              When you and your spouse can reach agreement on property, support,
              and parenting, we skip the courtroom. I draft a comprehensive
              marital settlement agreement, file the paperwork, and handle the
              single final hearing — typically in weeks, not months.
            </p>
            <span
              className="inline-flex items-center gap-2 text-[#8B2635] uppercase font-semibold tracking-[2px] text-[13px] group-hover:gap-3 transition-all"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>

          {/* Mediation */}
          <Link
            href="/divorce/divorce-mediation-in-jacksonville"
            className="group bg-white border border-[#03254B]/10 hover:border-[#8B2635] hover:shadow-xl transition-all p-10 flex flex-col"
          >
            <div className="flex items-center justify-end mb-6">
              <Image
                src="/images/mediation-icon.webp"
                alt=""
                width={56}
                height={56}
                style={{ filter: "brightness(0) saturate(100%) invert(12%) sepia(40%) saturate(3800%) hue-rotate(215deg) brightness(80%) contrast(100%)" }}
              />
            </div>
            <h3
              className="text-[#03254B] text-[32px] leading-[1.15] mb-4"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
            >
              Family Law Mediation
            </h3>
            <p className="text-[#03254B]/75 text-[16px] leading-[1.7] mb-8 flex-1">
              As a Florida Supreme Court&ndash;certified family court mediator,
              I help parties find common ground on the hard issues — time-sharing,
              asset division, support — without the expense of full-blown
              litigation. I can serve as your mediator or represent you in
              mediation.
            </p>
            <span
              className="inline-flex items-center gap-2 text-[#8B2635] uppercase font-semibold tracking-[2px] text-[13px] group-hover:gap-3 transition-all"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Learn More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Practice Areas (diamond layout) ─── */
function PracticeAreaIcon({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center text-center w-[200px]"
    >
      <Image
        src={icon}
        alt={label}
        width={96}
        height={96}
        className="mb-4 transition-transform group-hover:-translate-y-1"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(11%) sepia(40%) saturate(3500%) hue-rotate(215deg) brightness(80%) contrast(100%)",
        }}
      />
      <span
        className="text-[#03254B] text-[15px] font-medium leading-[1.4] group-hover:text-[#8B2635] transition-colors"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        {label}
      </span>
    </Link>
  );
}

function PracticeAreas() {
  return (
    <section className="bg-white pt-20 pb-24 relative overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 max-w-[720px] mx-auto">
          <p
            className="text-[#8B2635] text-[13px] font-semibold uppercase tracking-[3px] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Full-Service Family Law
          </p>
          <h2
            className="text-[#03254B] text-[40px] leading-[1.15] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
          >
            Additional <em className="italic">Practice Areas</em>
          </h2>
          <p className="text-[#03254B]/70 text-[16px] leading-[1.7]">
            Beyond my primary focus on uncontested divorce and mediation, I handle
            the full spectrum of Florida family law matters.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-[900px] mx-auto">
          <PracticeAreaIcon
            icon="/images/divorce-icon.webp"
            label="Divorce & Separation"
            href="/divorce"
          />
          <PracticeAreaIcon
            icon="/images/child-icon.webp"
            label="Child Support"
            href="/divorce/child-support"
          />
          <PracticeAreaIcon
            icon="/images/paternity-icon.webp"
            label="Paternity"
            href="/paternity"
          />
          <PracticeAreaIcon
            icon="/images/parent-icon.webp"
            label="Parenting Plans"
            href="/time-sharing-and-visitation-in-florida"
          />
          <PracticeAreaIcon
            icon="/images/un-divorce-icon.webp"
            label="Prenuptial Agreements"
            href="/prenuptial-agreements"
          />
          <PracticeAreaIcon
            icon="/images/mediation-icon.webp"
            label="Modifications"
            href="/modifications"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Support & Guidance Section ─── */
function SupportSection() {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.93) 50%), url("/images/content-time-sharing.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundColor: "#f5f5f5",
        padding: "100px 0",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="ml-auto max-w-[650px]">
          <p
            className="text-[#8B2635] text-[13px] font-semibold uppercase tracking-[2px] mb-3"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Support And Guidance
          </p>
          <h2
            className="text-[#03254B] text-[38px] leading-[1.15] font-bold uppercase mb-5"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            For People With Family Law Concerns
          </h2>
          <div className="red-divider mb-6" />
          <p className="text-[#03254B]/85 text-[16px] leading-[1.8]">
            At the Law Office of A. James Mullaney, I pride myself on being
            highly responsive and receptive to my clients&apos; concerns. Most
            people who come to my office need someone to lend an ear as much as
            they need legal services. You can count on me to listen closely and
            provide answers to all your questions. As my client, you will always
            work directly with me and never be passed off to a paralegal or
            office staff. I am here to guide you through the legal process with a
            minimum of stress on you and your family.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Sharing Information / Education Section ─── */
function EducationSection() {
  return (
    <section className="bg-[#131E4D] py-20">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="text-[#8B2635] text-[13px] font-semibold uppercase tracking-[2px] mb-3"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Sharing Information And Educating Clients
          </p>
          <h2
            className="text-white text-[38px] leading-[1.15] font-bold uppercase mb-5"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            So They Can Make Informed Decisions
          </h2>
          <div className="red-divider mb-6" />
          <p className="text-white/85 text-[16px] leading-[1.8] mb-4">
            I believe that knowledge is power. Over the years, I have created a{" "}
            <a
              href="http://podcast.jimmullaney.com/"
              className="text-white underline hover:text-[#8B2635]"
            >
              podcast
            </a>{" "}
            and a series of informational videos to put the legal code into
            layman&apos;s terms. These videos are available on my{" "}
            <a
              href="https://www.youtube.com/@Jimmullaney"
              className="text-white underline hover:text-[#8B2635]"
            >
              YouTube page
            </a>
            .
          </p>
          <p className="text-white/85 text-[16px] leading-[1.8]">
            Going through divorce and other family law issues is stressful enough
            without the challenge of trying to understand the law. I educate my
            clients so we can become partners and collaborate on making plans and
            decisions about how to move forward.
          </p>
        </div>
        <div>
          <Image
            src="/images/home-content-img.jpg"
            alt="Family law consultation"
            width={683}
            height={464}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Meet The Attorney + Welcome Video ─── */
function MeetAttorneySection() {
  return (
    <section className="bg-[#03254B] py-24">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-[3px] border-l-[3px] border-[#8B2635] z-0" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-[3px] border-r-[3px] border-[#8B2635] z-0" />
          <Image
            src="/images/mullaney-portrait.png"
            alt="A. James Mullaney, Jacksonville Family Law Attorney"
            width={900}
            height={676}
            className="relative w-full h-auto"
          />
        </div>

        <div>
          <p
            className="text-[#8B2635] text-[13px] font-semibold uppercase tracking-[3px] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Meet The Attorney
          </p>
          <h2
            className="text-white text-[44px] leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
          >
            A. James <em className="italic text-[#E0B158]">Mullaney</em>
          </h2>
          <div className="red-divider mb-8" />
          <p
            className="text-white/90 text-[19px] leading-[1.7] mb-6 italic"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            &ldquo;My clients don&apos;t need another lawyer talking down to them.
            They need someone who will sit across the table, explain the law
            plainly, and help them make decisions they can live with for the rest
            of their lives.&rdquo;
          </p>
          <p className="text-white/75 text-[16px] leading-[1.8] mb-8">
            Jim has practiced family law exclusively for over 25 years. He is a
            Florida Supreme Court&ndash;certified family court mediator and is
            licensed in both Florida and Georgia. His practice emphasizes
            clarity, efficiency, and resolution without unnecessary litigation.
          </p>
          <Link
            href="/attorney/mullaney-a-james"
            className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white uppercase font-semibold tracking-[2px] text-[12px] px-6 py-3 hover:bg-white/5 transition-all"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Read Full Bio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Welcome video below */}
      <div className="max-w-[1000px] mx-auto mt-24 px-6">
        <div className="text-center mb-10">
          <p
            className="text-[#8B2635] text-[13px] font-semibold uppercase tracking-[3px] mb-3"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Welcome
          </p>
          <h2
            className="text-white text-[36px] mb-4"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
          >
            Hear <em className="italic text-[#E0B158]">directly</em> from Jim
          </h2>
          <div className="red-divider mx-auto" />
        </div>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/BeM5Fka4pHc"
            title="Jacksonville Divorce Lawyer | Florida Family Law Attorney"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Client Questionnaire Bar ─── */
function QuestionnaireSection() {
  return (
    <section className="bg-[#131E4D] border-t border-white/10 py-10">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2
            className="text-white text-[24px] font-bold uppercase"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Client Questionnaire
          </h2>
          <p className="text-white/70 text-[14px] mt-1">
            Complete the Client Questionnaire to start the uncontested divorce
            process.
          </p>
        </div>
        <a
          href="https://form.jotform.com/Mullaney/form"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-bold tracking-wider text-[14px] px-8 py-3 transition-colors whitespace-nowrap"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Complete the Questionnaire
        </a>
      </div>
    </section>
  );
}

/* ─── Caring & Efficient CTA Section ─── */
function CTASection() {
  return (
    <section
      style={{
        backgroundImage:
          'linear-gradient(rgba(19, 30, 77, 0.85) 0%, rgba(19, 30, 77, 0.95) 100%), url("/images/content-cta.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#131E4D",
        padding: "100px 0",
      }}
    >
      <div className="max-w-[900px] mx-auto px-6 text-center">
        <p
          className="text-[#8B2635] text-[13px] font-semibold uppercase tracking-[2px] mb-4"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Caring And Efficient Service
        </p>
        <h2
          className="text-white text-[42px] leading-[1.15] font-bold uppercase mb-6"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          That Is Good For You, Your Family And Your Wallet
        </h2>
        <div className="red-divider mx-auto mb-8" />
        <p className="text-white/90 text-[17px] leading-[1.8] mb-8">
          As a lawyer and certified mediator with a quarter century of
          experience, I know how to effectively resolve family law issues. I
          understand the importance of keeping down costs while providing a high
          level of service. If you are ready to speak with an attorney, call me
          now at{" "}
          <a
            href="tel:+1-904-364-4565"
            className="underline font-semibold text-white"
          >
            904-364-4565
          </a>
          . You can also reach me using my{" "}
          <Link href="/contact" className="underline font-semibold text-white">
            online contact form
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/* ─── Testimonials (real Google reviews) ─── */
function Testimonials() {
  // Real reviews pulled from the firm's public Google Business Profile.
  // Short excerpts only, with attribution. Link out for full reviews.
  const reviews = [
    {
      name: "Catherine H.",
      date: "Apr 2025",
      quote: "Jim was very professional and always available to answer my questions.",
    },
    {
      name: "Vinny G.",
      date: "Jul 2025",
      quote: "Knowledgeable about everything and made my case a breeze.",
    },
    {
      name: "Madison C.",
      date: "May 2025",
      quote: "Best lawyer I’ve ever worked with.",
    },
    {
      name: "Beau B.",
      date: "May 2025",
      quote: "Answered my call same day. Extremely professional and always friendly.",
    },
  ];

  const stars = (n = 5) => (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#E0B158]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[720px] mx-auto">
          <p
            className="text-[#8B2635] text-[13px] font-semibold uppercase tracking-[3px] mb-3"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            What Clients Say
          </p>
          <h2
            className="text-[#03254B] text-[40px] leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
          >
            Rated <em className="italic">4.9</em> across 108 Google reviews
          </h2>
          <div className="flex items-center justify-center gap-3">
            {stars(5)}
            <a
              href="https://www.google.com/search?q=Law+Office+of+A.+James+Mullaney+Jacksonville+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#03254B]/70 hover:text-[#8B2635] text-[14px] underline"
            >
              See all reviews on Google
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="bg-[#FAF7F2] p-7 flex flex-col border border-[#03254B]/5"
            >
              {stars(5)}
              <blockquote
                className="text-[#03254B] text-[17px] leading-[1.55] my-5 flex-1 italic"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <figcaption className="text-[13px]">
                <div className="text-[#03254B] font-semibold">{r.name}</div>
                <div className="text-[#03254B]/55 flex items-center gap-1.5 mt-0.5">
                  <span>Google review</span>
                  <span aria-hidden="true">·</span>
                  <span>{r.date}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="text-center text-[#03254B]/60 text-[12px] mt-8 italic">
          Reviews shown are excerpts from public Google Business Profile reviews.
        </p>
      </div>
    </section>
  );
}

/* ─── "If You Have Questions" red bar ─── */
function QuestionsBar() {
  return (
    <section className="bg-[#8B2635] py-6">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p
          className="text-white text-[26px] lg:text-[32px] font-bold uppercase tracking-wide"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          If You Have Questions, I Have Answers!
        </p>
      </div>
    </section>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <FeaturedServices />
        <PracticeAreas />
        <SupportSection />
        <EducationSection />
        <MeetAttorneySection />
        <Testimonials />
        <QuestionnaireSection />
        <CTASection />
        <QuestionsBar />
      </main>
      <Footer />
    </>
  );
}
