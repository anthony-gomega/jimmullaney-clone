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
            className="text-white text-[42px] lg:text-[56px] leading-[1.05] uppercase mb-6"
            style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
          >
            <span className="font-normal">An Experienced</span>
            <span className="block font-bold">Family Law Attorney</span>
            <span className="block font-normal">And Mediator</span>
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
        className="text-[#03254B] text-[15px] font-medium leading-[1.4] group-hover:text-[#C93523] transition-colors"
        style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
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
        <p
          className="text-center text-[#03254B] text-[15px] italic mb-16 max-w-[720px] mx-auto"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          A Jacksonville Attorney And Certified Family Court Mediator
          Practicing Exclusively In Family Law For 25 Years
        </p>

        {/* Top row: 2 icons */}
        <div className="flex justify-center gap-16 mb-12">
          <PracticeAreaIcon
            icon="/images/divorce-icon.webp"
            label="Divorce & Separation"
            href="/divorce"
          />
          <PracticeAreaIcon
            icon="/images/un-divorce-icon.webp"
            label="Uncontested Divorce"
            href="/divorce/uncontested-divorce-in-jacksonville-fl"
          />
        </div>

        {/* Middle row: icon / heading / icon */}
        <div className="flex justify-center items-center gap-16 mb-12">
          <PracticeAreaIcon
            icon="/images/child-icon.webp"
            label="Child Support Calculator"
            href="/florida-child-support-calculator"
          />
          <div className="flex flex-col items-center w-[200px]">
            <h2
              className="text-[#03254B] text-[36px] font-normal mb-4 text-center"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Practice Areas
            </h2>
            <div className="red-divider" />
          </div>
          <PracticeAreaIcon
            icon="/images/paternity-icon.webp"
            label="Paternity"
            href="/paternity"
          />
        </div>

        {/* Bottom row: 2 icons */}
        <div className="flex justify-center gap-16">
          <PracticeAreaIcon
            icon="/images/mediation-icon.webp"
            label="Mediation"
            href="/divorce/divorce-mediation-in-jacksonville"
          />
          <PracticeAreaIcon
            icon="/images/parent-icon.webp"
            label="Parenting Plans"
            href="/time-sharing-and-visitation-in-florida"
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

/* ─── "If You Have Questions" red bar ─── */
function QuestionsBar() {
  return (
    <section className="bg-[#C93523] py-6">
      <div className="max-w-[1280px] mx-auto px-6 text-center">
        <p
          className="text-white text-[26px] lg:text-[32px] font-bold uppercase tracking-wide"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
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
        <PracticeAreas />
        <SupportSection />
        <EducationSection />
        <MeetAttorneySection />
        <QuestionnaireSection />
        <CTASection />
        <QuestionsBar />
      </main>
      <Footer />
    </>
  );
}
