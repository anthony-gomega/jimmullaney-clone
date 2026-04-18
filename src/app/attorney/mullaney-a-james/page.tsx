import InnerPage from "../../components/InnerPage";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attorney - Law Office of A. James Mullaney",
  description:
    "I am one of the more experienced divorce lawyers in Jacksonville FL.",
};

export default function AttorneyPage() {
  return (
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
          <h2 style={{ borderBottom: "none" }}>Founder</h2>
          <p>
            I am one of the more experienced divorce lawyers in Jacksonville,
            FL. As a result, I am aware of the emotional toll that these cases
            can take on clients and their children. I have focused exclusively
            on family law for over 24 years.
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

      <p>
        Please call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link> to schedule a
        consultation.
      </p>
    </InnerPage>
  );
}
