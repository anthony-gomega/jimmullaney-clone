import InnerPage from "../components/InnerPage";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Family Law Firm | Law Office of A. James Mullaney",
  description:
    "I work with clients to resolve family law issues efficiently and inexpensively. Divorce, custody, child support and more - call today.",
};

export default function AboutPage() {
  return (
    <InnerPage title="Jacksonville Family Law Attorney And Mediator" breadcrumbs={[{ label: "About" }]}>
      <p>
        You will have a much easier time as your family law issues are resolved.
        You will tend to get more positive results by hiring a Jacksonville
        family law attorney and mediator. Unlike some other firms, when you hire
        me as your attorney, you get me as your attorney. You will not be given
        a far less experienced associate as your family law lawyer. I have over
        24 years of experience as a Jacksonville family law attorney and
        mediator. <Link href="/divorce/contested-divorce">Divorce</Link>.{" "}
        <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
          Uncontested divorce
        </Link>
        . <Link href="/paternity">Paternity</Link>. Adoption. These are the
        types of cases that make up the broad category of family law. The
        issues raised in a typical Florida family law case include{" "}
        <Link href="/divorce/equitable-distribution">property division</Link>,
        debt division,{" "}
        <Link href="/divorce/child-support">child support</Link>, time sharing
        (formerly called visitation), child relocation and{" "}
        <Link href="/divorce/alimony">alimony</Link>. Your case may involve
        some or all of these issues.
      </p>
      <p>
        I also represent clients for the modification of prior court orders –
        from other Florida counties or other states. For more information on
        these issues, please see the links under Practice Areas. If you have
        additional questions or would like to schedule a consultation, please
        call the office at any time.
      </p>

      <div className="my-8">
        <Image
          src="/images/mullaney.jpg"
          alt="A. James Mullaney - Jacksonville Family Law Attorney"
          width={400}
          height={288}
          className="rounded-sm"
        />
        <p className="text-sm italic mt-2">
          Jacksonville divorce lawyer | Florida family law attorney and mediator
        </p>
      </div>

      <p>
        There is no doubt that your family law dispute can cause a great deal of
        stress in your life. Very often, clients face a complete change to their
        lifestyle. Since I have exclusively practiced as a family law attorney
        for over 24 years, I have seen how clients are affected, and I will make
        sure you are not overwhelmed by the process.
      </p>
      <p>
        Furthermore, as an experienced divorce lawyer in Jacksonville, Florida,
        I am aware of the emotional toll that these cases take on clients and
        their children. My goal is to help clients complete a smooth transition
        to the next stage of their lives.
      </p>
      <p>
        In many cases, the most stress comes from the duration of the case. If
        possible, I look for ways to resolve cases. Costly litigation is the
        last option. <strong>Always</strong>. Experience has shown me that
        quicker settlements make for happier clients. However, if a settlement
        is not possible, I can take your case to court.
      </p>

      <h2>Education And Experience</h2>
      <p>
        I was born and raised in Jacksonville. I graduated from Wolfson High
        School in 1985. Immediately afterward, I attended the University of
        Florida. I received a Bachelor of Science degree in 1990. After
        attending graduate school at the University of Central Florida, I
        graduated from Cumberland School of Law at Samford University. In 1996,
        I returned to Jacksonville, where I have been practicing law ever
        since. In 2000, I started my own law practice focusing exclusively on
        family law and related issues.
      </p>
      <p>
        Unlike just about every other Jacksonville family law attorney,{" "}
        <strong>I am also licensed to practice law in Georgia</strong>. My
        practice takes me to <strong>Duval</strong>, <strong>Clay</strong>,{" "}
        <strong>St. Johns</strong>, <strong>Nassau</strong>,{" "}
        <strong>Ware</strong>, <strong>Charlton</strong> and{" "}
        <strong>Camden</strong> counties. However, in the age of Zoom (and
        other video conferencing programs), I can appear in all counties in
        Florida just as easily as I can appear in Duval County. I am also a{" "}
        <strong>Florida Supreme Court-certified family court mediator</strong>.
      </p>

      <h3>Jacksonville Family Law Attorney And Mediator Credentials</h3>
      <ul>
        <li>Member of The Florida Bar.</li>
        <li>Member of the State Bar of Georgia.</li>
        <li>Florida Supreme Court-certified family court mediator.</li>
        <li>Florida Supreme Court appellate mediator.</li>
        <li>
          Admitted to practice before the U.S. District Court for the Middle
          District of Florida.
        </li>
        <li>
          Admitted to practice before the Georgia Court of Appeals and the
          Georgia Supreme Court.
        </li>
        <li>
          Admitted to practice before the U.S. Court of Appeals for the 11th
          Circuit.
        </li>
      </ul>

      <p>
        Lastly, my office is conveniently located just north of the intersection
        of Baymeadows Road and San Jose Boulevard in Jacksonville. Free parking
        is available at the office.{" "}
        <Link href="/contact">Contact the firm</Link> for more information
        about how we can work together.
      </p>
    </InnerPage>
  );
}
