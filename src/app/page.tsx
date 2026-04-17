import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section
      className="relative flex items-center"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(19, 30, 77, 0.75) 0%, rgba(19, 30, 77, 0.65) 50%, rgba(19, 30, 77, 0.35) 100%), url("/images/banner-jacksonville-new.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#000",
        minHeight: "620px",
        paddingTop: 120,
        paddingBottom: 120,
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        <div className="max-w-[640px]">
          <p
            className="text-[#C93523] text-[14px] font-semibold uppercase tracking-[2px] mb-4"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Experienced. Personable. Effective.
          </p>
          <h1
            className="text-white text-[42px] lg:text-[56px] leading-[1.05] font-bold uppercase mb-6"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            An Experienced{" "}
            <span className="block">Family Law Attorney</span>
            <span className="block">And Mediator</span>
          </h1>
          <p className="text-white/90 text-[17px] leading-[1.7] mb-8 max-w-[560px]">
            Education, collaboration and efficiency are the cornerstones of my
            legal practice. My goal is to make sure that my clients understand
            the legal process so we can work together to make sound decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C93523] hover:bg-[#a82b1c] text-white uppercase font-bold tracking-wider text-[14px] px-8 py-4 transition-colors"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
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
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              904-364-4565
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Practice Areas ─── */
function PracticeAreas() {
  const items = [
    { icon: "/images/divorce-icon.webp", label: "Divorce & Separation", href: "/divorce" },
    { icon: "/images/un-divorce-icon.webp", label: "Uncontested Divorce", href: "/divorce/uncontested-divorce-in-jacksonville-fl" },
    { icon: "/images/child-icon.webp", label: "Child Support Calculator", href: "/florida-child-support-calculator" },
    { icon: "/images/paternity-icon.webp", label: "Paternity", href: "/paternity" },
    { icon: "/images/mediation-icon.webp", label: "Mediation", href: "/divorce/divorce-mediation-in-jacksonville" },
    { icon: "/images/parent-icon.webp", label: "Parenting Plans", href: "/time-sharing-and-visitation-in-florida" },
  ];

  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url("/images/patterns-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <p
            className="text-[#C93523] text-[13px] font-semibold uppercase tracking-[2px] mb-4"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            A Jacksonville Attorney And Certified Family Court Mediator
            <br />
            Practicing Exclusively In Family Law For 25 Years
          </p>
          <h2
            className="text-[#03254B] text-[42px] font-bold uppercase mb-3"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Practice Areas
          </h2>
          <div className="red-divider mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center text-center p-8 bg-white border border-gray-200 hover:border-[#C93523] hover:shadow-xl transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-[#131E4D] group-hover:bg-[#C93523] flex items-center justify-center mb-5 transition-colors">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={48}
                  height={48}
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
              <span
                className="text-[#03254B] text-[16px] font-semibold uppercase tracking-wide"
                style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
              >
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
            className="text-[#C93523] text-[13px] font-semibold uppercase tracking-[2px] mb-3"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Support And Guidance
          </p>
          <h2
            className="text-[#03254B] text-[38px] leading-[1.15] font-bold uppercase mb-5"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
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
            className="text-[#C93523] text-[13px] font-semibold uppercase tracking-[2px] mb-3"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Sharing Information And Educating Clients
          </p>
          <h2
            className="text-white text-[38px] leading-[1.15] font-bold uppercase mb-5"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            So They Can Make Informed Decisions
          </h2>
          <div className="red-divider mb-6" />
          <p className="text-white/85 text-[16px] leading-[1.8] mb-4">
            I believe that knowledge is power. Over the years, I have created a{" "}
            <a
              href="http://podcast.jimmullaney.com/"
              className="text-white underline hover:text-[#C93523]"
            >
              podcast
            </a>{" "}
            and a series of informational videos to put the legal code into
            layman&apos;s terms. These videos are available on my{" "}
            <a
              href="https://www.youtube.com/@Jimmullaney"
              className="text-white underline hover:text-[#C93523]"
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
    <section className="bg-[#03254B] py-20">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
        <div>
          <p
            className="text-[#C93523] text-[13px] font-semibold uppercase tracking-[2px] mb-3"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Meet The Attorney
          </p>
          <h2
            className="text-white text-[32px] font-bold uppercase mb-4"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            A. James Mullaney
          </h2>
          <div className="red-divider mb-6" />
          <div className="bg-white/5 border border-white/10 p-6">
            <Image
              src="/images/mullaney.jpg"
              alt="A. James Mullaney"
              width={260}
              height={188}
              className="w-full mb-4"
            />
            <h3
              className="text-white text-[18px] font-semibold mb-1"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              A. James Mullaney
            </h3>
            <p className="text-white/70 text-[14px] mb-4">Founder</p>
            <Link
              href="/attorney/mullaney-a-james"
              className="inline-block text-[#C93523] font-semibold uppercase tracking-wider text-[12px] hover:text-white"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Read Full Bio &rarr;
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2">
          <p
            className="text-[#C93523] text-[13px] font-semibold uppercase tracking-[2px] mb-3"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Welcome
          </p>
          <h2
            className="text-white text-[32px] font-bold uppercase mb-4"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Hear From Me Directly
          </h2>
          <div className="red-divider mb-6" />
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
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
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
          className="bg-[#C93523] hover:bg-[#a82b1c] text-white uppercase font-bold tracking-wider text-[14px] px-8 py-3 transition-colors whitespace-nowrap"
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
          className="text-[#C93523] text-[13px] font-semibold uppercase tracking-[2px] mb-4"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Caring And Efficient Service
        </p>
        <h2
          className="text-white text-[42px] leading-[1.15] font-bold uppercase mb-6"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          That Is Good For You, Your Family And Your Wallet
        </h2>
        <div className="red-divider mx-auto mb-8" />
        <p className="text-white/90 text-[17px] leading-[1.8] mb-8">
          As a lawyer and certified mediator with a quarter century of
          experience, I know how to effectively resolve family law issues. I
          understand the importance of keeping down costs while providing a high
          level of service.
        </p>
        <p className="text-white text-[20px] font-bold uppercase mb-8 tracking-wide">
          If You Have Questions, I Have Answers!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+1-904-364-4565"
            className="bg-[#C93523] hover:bg-[#a82b1c] text-white uppercase font-bold tracking-wider text-[14px] px-8 py-4 transition-colors"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Call 904-364-4565
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white uppercase font-bold tracking-wider text-[14px] px-8 py-4 hover:bg-white hover:text-[#131E4D] transition-all"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            Send A Message
          </Link>
        </div>
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
        <PracticeAreas />
        <SupportSection />
        <EducationSection />
        <MeetAttorneySection />
        <QuestionnaireSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
