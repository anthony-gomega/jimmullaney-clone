import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Divorce Lawyer | Law Office of A. James Mullaney",
  description:
    "As a Jacksonville divorce lawyer, I am here to help you through the tough transition of divorce, custody disputes, adoption and more. I am also a certified mediator.",
};

export default function DivorcePage() {
  return (
    <InnerPage
      title="An Efficient Jacksonville Divorce Attorney Who Communicates"
      breadcrumbs={[{ label: "Divorce" }]}
    >
      <p>
        Divorce can be one of the most challenging times in life. It is not
        just about the end of a marriage, but the beginning of a new chapter. I
        understand the emotional and financial stress that comes with this
        transition. At Law Office of A. James Mullaney, my goal is to make this
        process as smooth and fair as possible for you.
      </p>
      <p>
        With over 24 years of experience in family law, I focus on uncontested
        divorce, mediation, paternity and military divorce. Located in
        Jacksonville, I provide personalized and compassionate legal support. I
        believe in open communication and am always available to answer your
        questions. I am licensed in both Florida and Georgia, ready to assist
        families in Duval County and beyond.
      </p>

      <h2>What Are The Big Things To Consider In A Florida Divorce?</h2>
      <p>
        Divorces in Florida can be complex. There are several important aspects
        to consider; it is common to feel overwhelmed when thinking about them
        all. As a Jacksonville divorce lawyer, I am here to handle everything
        capably, including:
      </p>
      <ul>
        <li>
          <strong>Property and asset division:</strong> Equitably dividing
          marital assets and debts under Florida equitable distribution laws,
          which mean a fair, but not necessarily equal, division.
        </li>
        <li>
          <strong>
            <Link href="/divorce/alimony">Spousal support</Link>:
          </strong>{" "}
          I work with you to consider the need for alimony. You need to
          understand how spousal support might impact your financial future.
        </li>
        <li>
          <strong>Children&apos;s best interests:</strong> I prioritize the
          well-being and stability of your children, focusing on custody and
          support arrangements in their best interests.
        </li>
        <li>
          <strong>Legal complications:</strong> Potential challenges can arise
          with contested issues or disagreements. Having a clear plan and open
          lines of communication can mitigate these challenges.
        </li>
      </ul>

      <p>
        The time and cost of a divorce varies depending on each factor.
        Uncontested divorces are typically faster and more affordable, often
        taking a few weeks to a few months. Contested divorces, on the other
        hand, can take longer and be more expensive, potentially lasting
        several months to over a year. I strive to provide clarity on the
        timeline and costs involved, helping you make informed decisions.
      </p>

      <h2>An Efficient And Cost-Effective Divorce Process</h2>
      <p>
        I know the importance of resolving divorces efficiently and affordably.
        As a Florida Supreme Court Certified Family Court Mediator, I offer
        efficient and cost-effective solutions. My practice emphasizes
        transparency, communication and collaboration. Through alternative
        dispute resolution such as{" "}
        <Link href="/divorce/divorce-mediation-in-jacksonville">
          family law mediation
        </Link>{" "}
        and{" "}
        <Link href="/divorce/collaborative-divorce">collaborative law</Link>,
        both parties can discuss their needs and reach an agreement amicably.
        This approach not only saves time and money but also reduces stress for
        everyone involved.
      </p>

      <blockquote>
        I offer free video resources on my website to guide you through each
        step. You can access these videos at your convenience, allowing you to
        better understand each stage of your divorce journey.
      </blockquote>

      <h2>How I Approach Your Family Law Case</h2>
      <p>
        With me, you have a Jacksonville divorce lawyer who prioritizes your
        needs. My approach is client-centered, ensuring you always receive
        support. My aim is to ease your transition, especially for the children
        involved, making sure their well-being is a top priority. As a solo
        practitioner, I take pride in offering a personal touch. This means I
        am directly involved in your case from start to finish. You can expect
        regular updates and prompt responses to your queries.
      </p>

      <h2>Contact A Jacksonville Divorce Lawyer Who Can Support You</h2>
      <p>
        At Law Office of A. James Mullaney, I am ready to provide guidance and
        assistance tailored to your unique situation. Contact me today to
        schedule a consultation. Reach out by calling{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or by using my{" "}
        <Link href="/contact">online contact form</Link>.
      </p>
    </InnerPage>
  );
}
