import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Divorce Mediation Attorney",
  description:
    "I am an experienced Jacksonville divorce mediation lawyer who can help you with all aspects, including asset division, child custody and more.",
};

export default function MediationPage() {
  return (
    <InnerPage
      title="Jacksonville Divorce Mediation Attorney"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Mediation" },
      ]}
    >
      <p>
        Divorce mediation is a process where a neutral third party (the
        mediator) helps couples reach agreements on the issues in their
        divorce. As a Florida Supreme Court-certified family court mediator
        with over 24 years of experience, I can serve as your mediator or
        represent you in mediation with another mediator.
      </p>

      <h2>Benefits of Divorce Mediation</h2>
      <ul>
        <li>
          <strong>Cost-effective:</strong> Much less expensive than contested
          litigation.
        </li>
        <li>
          <strong>Faster:</strong> Resolve in weeks rather than months or
          years.
        </li>
        <li>
          <strong>Private:</strong> Discussions are confidential.
        </li>
        <li>
          <strong>Collaborative:</strong> Both parties work together to find
          solutions.
        </li>
        <li>
          <strong>Control:</strong> You make the decisions, not a judge.
        </li>
        <li>
          <strong>Preserves relationships:</strong> Important for co-parents.
        </li>
      </ul>

      <h2>What Mediation Covers</h2>
      <p>Mediation can address all aspects of a divorce including:</p>
      <ul>
        <li>
          <Link href="/divorce/equitable-distribution">
            Property and debt division
          </Link>
        </li>
        <li>
          <Link href="/divorce/alimony">Alimony</Link>
        </li>
        <li>
          <Link href="/divorce/child-support">Child support</Link>
        </li>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida">
            Time-sharing and parenting plans
          </Link>
        </li>
      </ul>

      <h2>Florida&apos;s Mediation Requirement</h2>
      <p>
        Most Florida family law cases are required to go through mediation
        before trial. Even when not required, mediation is a smart choice
        because it saves money, time, and stress.
      </p>

      <p>
        To schedule a mediation or discuss representation, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
