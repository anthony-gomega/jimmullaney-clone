import Image from "next/image";
import Link from "next/link";

/* ─── Header / Navigation ─── */
function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="Law Office of A. James Mullaney"
            width={250}
            height={66}
            priority
          />
        </Link>

        {/* Nav */}
        <nav
          className="hidden lg:flex items-center gap-8 text-[14px] font-semibold uppercase tracking-wide text-[#03254B]"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          <Link href="/" className="hover:text-[#C93523] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#C93523] transition-colors">
            About
          </Link>
          <span className="hover:text-[#C93523] transition-colors cursor-pointer">
            Divorce
          </span>
          <Link
            href="/time-sharing-and-visitation-in-florida"
            className="hover:text-[#C93523] transition-colors"
          >
            Parenting Plans
          </Link>
          <Link href="/paternity" className="hover:text-[#C93523] transition-colors">
            Paternity
          </Link>
          <Link href="/blog" className="hover:text-[#C93523] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-[#C93523] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Phone */}
        <a
          href="tel:+1-904-364-4565"
          className="hidden lg:flex items-center gap-2 text-[#03254B] font-bold text-[15px]"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now: 904-364-4565
        </a>
      </div>
    </header>
  );
}

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section
      className="flex items-center"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(19, 30, 77, 0.67) 50%, rgba(255, 255, 255, 0) 100%), url("/images/banner-jacksonville-new.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000",
        minHeight: "99vh",
        paddingTop: 140,
        paddingBottom: 140,
      }}
    >

      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-[600px]">
          <h1
            className="text-white text-[46px] lg:text-[57px] leading-[1.1] font-normal mb-6"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            An Experienced{" "}
            <strong className="font-bold">Family Law Attorney</strong>
            <br />
            And Mediator
          </h1>
          <p className="text-white/90 text-[17px] leading-[1.8] mb-8">
            Education, collaboration and efficiency are the cornerstones of my
            legal practice. My goal is to make sure that my clients understand
            the legal process so we can work together to make sound decisions.
          </p>
          <Link
            href="/contact"
            className="inline-block border-2 border-white text-white uppercase font-semibold tracking-wider text-[14px] px-8 py-3 hover:bg-white hover:text-[#131E4D] transition-all"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Practice Areas ─── */
function PracticeAreas() {
  const topItems = [
    {
      icon: "/images/divorce-icon.webp",
      label: "Divorce & Separation",
      href: "/divorce",
    },
    {
      icon: "/images/un-divorce-icon.webp",
      label: "Uncontested Divorce",
      href: "/divorce/uncontested-divorce-in-jacksonville-fl",
    },
  ];
  const bottomItems = [
    {
      icon: "/images/child-icon.webp",
      label: "Child Support Calculator",
      href: "/florida-child-support-calculator",
    },
    {
      icon: "/images/paternity-icon.webp",
      label: "Paternity",
      href: "/paternity",
    },
    {
      icon: "/images/mediation-icon.webp",
      label: "Mediation",
      href: "/divorce/divorce-mediation-in-jacksonville",
    },
    {
      icon: "/images/parent-icon.webp",
      label: "Parenting Plans",
      href: "/time-sharing-and-visitation-in-florida",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Subtitle */}
        <p className="text-center text-[#03254B] text-[16px] mb-8 max-w-[700px] mx-auto">
          A Jacksonville Attorney And Certified Family Court Mediator Practicing
          Exclusively In Family Law For 25 Years
        </p>

        {/* Top row: 2 items */}
        <div className="flex justify-center gap-8 mb-8">
          {topItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="practice-icon-card flex flex-col items-center text-center p-6 rounded-sm w-[200px]"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={80}
                height={80}
                className="mb-4" style={{ filter: "brightness(0) invert(8%) sepia(100%) saturate(5000%) hue-rotate(220deg)" }}
              />
              <span className="text-[#03254B] text-[15px] font-medium">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Middle row: icon / heading+divider / icon */}
        <div className="flex justify-center items-start gap-8 mb-8">
          <Link
            href={bottomItems[0].href}
            className="practice-icon-card flex flex-col items-center text-center p-6 rounded-sm w-[200px]"
          >
            <Image
              src={bottomItems[0].icon}
              alt={bottomItems[0].label}
              width={80}
              height={80}
              className="mb-4" style={{ filter: "brightness(0) invert(8%) sepia(100%) saturate(5000%) hue-rotate(220deg)" }}
            />
            <span className="text-[#03254B] text-[15px] font-medium">
              {bottomItems[0].label}
            </span>
          </Link>

          <div className="flex flex-col items-center justify-center w-[200px] pt-6">
            <h2
              className="text-[#03254B] text-[28px] font-normal mb-4"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Practice Areas
            </h2>
            <div className="red-divider" />
          </div>

          <Link
            href={bottomItems[1].href}
            className="practice-icon-card flex flex-col items-center text-center p-6 rounded-sm w-[200px]"
          >
            <Image
              src={bottomItems[1].icon}
              alt={bottomItems[1].label}
              width={80}
              height={80}
              className="mb-4" style={{ filter: "brightness(0) invert(8%) sepia(100%) saturate(5000%) hue-rotate(220deg)" }}
            />
            <span className="text-[#03254B] text-[15px] font-medium">
              {bottomItems[1].label}
            </span>
          </Link>
        </div>

        {/* Bottom row: 2 items */}
        <div className="flex justify-center gap-8">
          {bottomItems.slice(2).map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="practice-icon-card flex flex-col items-center text-center p-6 rounded-sm w-[200px]"
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={80}
                height={80}
                className="mb-4" style={{ filter: "brightness(0) invert(8%) sepia(100%) saturate(5000%) hue-rotate(220deg)" }}
              />
              <span className="text-[#03254B] text-[15px] font-medium">
                {item.label}
              </span>
            </Link>
          ))}
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
        backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.88) 50%), url("/images/content-time-sharing.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "left center",
        backgroundColor: "#323437",
        padding: "100px 0",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="ml-auto max-w-[650px]">
          <h2
            className="text-[#03254B] text-[22px] font-normal mb-1"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            <span style={{ fontSize: "0.8em" }}>Support And Guidance</span>
          </h2>
          <h2
            className="text-[#03254B] text-[38px] leading-tight font-normal mb-6"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            For People With Family Law Concerns
          </h2>
          <div className="red-divider mb-8" />
          <p className="text-[#03254B]/80 text-[17px] leading-[1.8]">
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
    <section className="education-bg py-20">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <h2
            className="text-white text-[22px] font-normal mb-1"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Sharing Information And Educating Clients
          </h2>
          <h2
            className="text-white text-[38px] leading-tight font-normal mb-6"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            So They Can Make Informed Decisions
          </h2>
          <div className="red-divider mb-8" />
          <p className="text-white/90 text-[17px] leading-[1.8] mb-4">
            I believe that knowledge is power. Over the years, I have created a
            podcast and a series of informational videos to put the legal code
            into layman&apos;s terms. These videos are available on my YouTube
            page.
          </p>
          <p className="text-white/90 text-[17px] leading-[1.8]">
            Going through divorce and other family law issues is stressful enough
            without the challenge of trying to understand the law. I educate my
            clients so we can become partners and collaborate on making plans and
            decisions about how to move forward. This allows us to work
            efficiently to minimize billing and avoid a drawn-out process.
          </p>
        </div>
        <div className="flex-1">
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
    <section style={{ backgroundColor: "#0a1535", padding: "80px 0" }}>
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
        <div className="lg:w-1/3">
          <h2
            className="text-white text-[38px] font-normal mb-4"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Meet The Attorney
          </h2>
          <div className="red-divider mb-8" />
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/mullaney.jpg"
              alt="A. James Mullaney"
              width={215}
              height={155}
              className="mb-4"
            />
            <h3
              className="text-white text-[20px] font-semibold mb-1"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              A. James Mullaney
            </h3>
            <p className="text-white/70 text-[15px]">Founder</p>
          </div>
        </div>
        <div className="lg:w-2/3">
          <h2
            className="text-white text-[38px] font-normal mb-4"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Welcome
          </h2>
          <div className="red-divider mb-8" />
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/BeM5Fka4pHc"
              title="Jacksonville Divorce Lawyer | Florida Family Law Attorney - Law Office of A. James Mullaney"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Client Questionnaire ─── */
function QuestionnaireSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-[600px] mx-auto px-6 text-center">
        <h2
          className="text-[#03254B] text-[38px] font-normal mb-4"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Client Questionnaire
        </h2>
        <div className="red-divider mx-auto mb-6" />
        <p className="text-[#03254B] text-[17px] leading-[1.8] mb-8">
          Complete the Client Questionnaire to start the uncontested divorce
          process or if requested by Mr. Mullaney.
        </p>
        <a
          href="https://form.jotform.com/Mullaney/form"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#C93523] text-white uppercase font-semibold tracking-wider text-[14px] px-8 py-3 hover:bg-[#a82b1c] transition-colors"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
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
        backgroundImage: 'linear-gradient(rgba(19, 30, 77, 0.3) 0%, rgb(19, 30, 77) 100%), url("/images/content-cta.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#080607",
        padding: "80px 0",
      }}
    >

      <div className="max-w-[800px] mx-auto px-6 text-center">
        <h2
          className="text-white text-[22px] font-normal mb-1"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Caring And Efficient Service
        </h2>
        <h2
          className="text-white text-[38px] leading-tight font-normal mb-6"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
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
          . You can also reach me using my online contact form.
        </p>
        <p className="text-white text-[18px] font-semibold">
          If You Have Questions, I Have Answers!
        </p>
      </div>
    </section>
  );
}

/* ─── Get Help Now Bar ─── */
function GetHelpBar() {
  return (
    <section className="get-help-bar py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3
          className="text-white text-[24px] font-bold uppercase"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Get Help Now
        </h3>
        <div className="flex items-center gap-6">
          <a
            href="tel:+1-904-364-4565"
            className="text-white text-[18px] font-semibold hover:underline"
          >
            904-364-4565
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white uppercase font-semibold tracking-wider text-[13px] px-6 py-2 hover:bg-white hover:text-[#C93523] transition-all"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Send A Message
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="footer-bg py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <Image
              src="/images/logo.jpg"
              alt="Law Office of A. James Mullaney"
              width={200}
              height={53}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-[14px] leading-[1.8] mb-4">
              A. James Mullaney | Family Law Attorney &amp; Mediator
            </p>
            <p className="text-white/70 text-[14px] leading-[1.8]">
              Contact:
              <br />
              8777 San Jose Blvd. Ste. 302
              <br />
              Jacksonville, FL 32217
              <br />
              Phone:{" "}
              <a
                href="tel:+1-904-364-4565"
                className="text-white hover:underline"
              >
                904-364-4565
              </a>
            </p>
          </div>
          <div className="lg:w-1/3">
            <h4
              className="text-white text-[18px] font-semibold mb-4 uppercase"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2 text-[14px]">
              {[
                { label: "Divorce", href: "/divorce" },
                {
                  label: "Uncontested Divorce",
                  href: "/divorce/uncontested-divorce-in-jacksonville-fl",
                },
                { label: "Alimony", href: "/divorce/alimony" },
                { label: "Child Support", href: "/divorce/child-support" },
                {
                  label: "Parenting Plans",
                  href: "/time-sharing-and-visitation-in-florida",
                },
                { label: "Paternity", href: "/paternity" },
                {
                  label: "Mediation",
                  href: "/divorce/divorce-mediation-in-jacksonville",
                },
                { label: "Domestic Violence", href: "/domestic-violence" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3">
            <h4
              className="text-white text-[18px] font-semibold mb-4 uppercase"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Jacksonville Office
            </h4>
            <p className="text-white/70 text-[14px] leading-[1.8] mb-4">
              8777 San Jose Blvd. Ste. 302
              <br />
              Jacksonville, FL 32217
            </p>
            <a
              href="tel:+1-904-364-4565"
              className="text-white text-[16px] font-semibold hover:underline"
            >
              904-364-4565
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#C93523] text-white uppercase font-semibold tracking-wider text-[13px] px-6 py-2 hover:bg-[#a82b1c] transition-colors"
                style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
              >
                Review Us
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-white/50 text-[13px]">
          <p>
            &copy; 2025 Law Office of A. James Mullaney. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
            <Link href="/site-map" className="hover:text-white">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <SupportSection />
        <EducationSection />
        <MeetAttorneySection />
        <QuestionnaireSection />
        <CTASection />
        <GetHelpBar />
      </main>
      <Footer />
    </>
  );
}
