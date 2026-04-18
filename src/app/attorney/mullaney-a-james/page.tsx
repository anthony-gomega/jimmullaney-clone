import InnerPage from "../../components/InnerPage";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd, attorneySchema } from "../../components/StructuredData";

export const metadata: Metadata = {
  title: "A. James Mullaney — Jacksonville Family Law Attorney & Mediator",
  description:
    "Meet A. James Mullaney, a Jacksonville family-law attorney with 25+ years of exclusive family-law practice and Florida Supreme Court mediator certification. Call 904-364-4565.",
  alternates: { canonical: "/attorney/mullaney-a-james" },
  openGraph: {
    title: "A. James Mullaney — Jacksonville Family Law Attorney & Mediator",
    description:
      "25+ years of exclusive family-law practice. Florida Supreme Court–certified family court mediator.",
    url: "/attorney/mullaney-a-james",
    images: [{ url: "/images/mullaney-portrait.png" }],
  },
};

export default function AttorneyPage() {
  return (
    <>
      <JsonLd data={attorneySchema} />
      <InnerPage
        title="A. James Mullaney"
        breadcrumbs={[{ label: "Attorney" }]}
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <Image
            src="/images/mullaney-portrait.png"
            alt="A. James Mullaney, Jacksonville Family Law Attorney"
            width={600}
            height={451}
            className="flex-shrink-0 w-full md:w-[360px] h-auto"
          />
          <div>
            <h2 style={{ borderBottom: "none" }}>Founder &amp; Attorney</h2>
            <p>
              I am one of the more experienced divorce and family-law attorneys
              in Jacksonville, Florida. Having focused exclusively on family
              law for more than twenty-five years, I understand the emotional
              and financial toll these cases take on clients and their
              children — and my practice is built to minimize both.
            </p>
            <p>
              Most of my work today centers on{" "}
              <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
                uncontested divorce
              </Link>{" "}
              and{" "}
              <Link href="/divorce/divorce-mediation-in-jacksonville">
                mediation
              </Link>{" "}
              — two approaches that let families resolve matters efficiently,
              privately, and at a fraction of the cost of contested
              litigation.
            </p>
          </div>
        </div>

        <h2>Education</h2>
        <ul>
          <li>Cumberland School of Law at Samford University, J.D.</li>
          <li>University of Central Florida, Graduate Studies</li>
          <li>University of Florida, B.S., 1990</li>
          <li>Wolfson High School, 1985</li>
        </ul>

        <h2>Bar Admissions</h2>
        <ul>
          <li>The Florida Bar</li>
          <li>State Bar of Georgia</li>
          <li>U.S. District Court for the Middle District of Florida</li>
          <li>Georgia Court of Appeals and Georgia Supreme Court</li>
          <li>U.S. Court of Appeals for the 11th Circuit</li>
        </ul>

        <h2>Certifications</h2>
        <ul>
          <li>Florida Supreme Court-certified family court mediator</li>
          <li>Florida Supreme Court appellate mediator</li>
        </ul>

        <h2>Counties Served</h2>
        <p>
          I regularly appear in Duval, Clay, St. Johns, Nassau, Ware,
          Charlton, and Camden counties, and I can appear in any Florida or
          Georgia county remotely.
        </p>

        <p>
          Please call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
          <Link href="/contact">contact me online</Link> to schedule a
          consultation.
        </p>
      </InnerPage>
    </>
  );
}
