import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Collaborative Divorce Lawyer",
  description:
    "An experienced yet compassionate Jacksonville collaborative divorce lawyer like me can help you use collaborative law to make your divorce easier.",
};

export default function CollaborativeDivorcePage() {
  return (
    <InnerPage
      title="Jacksonville Collaborative Divorce Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Collaborative Divorce" },
      ]}
    >
      <p>
        Collaborative divorce is an alternative dispute resolution process in
        which both spouses and their attorneys commit in writing to resolving
        the divorce without going to court. The process also typically
        involves neutral professionals such as financial specialists and mental
        health counselors.
      </p>

      <h2>How Collaborative Divorce Works</h2>
      <ol>
        <li>
          <strong>Commitment to settle:</strong> Both spouses and attorneys
          sign a participation agreement committing to resolve the case out of
          court.
        </li>
        <li>
          <strong>Team approach:</strong> A neutral financial professional
          helps with asset division and a mental health professional helps
          facilitate communication.
        </li>
        <li>
          <strong>Joint meetings:</strong> The parties, their lawyers, and the
          team meet together to resolve all issues.
        </li>
        <li>
          <strong>Full disclosure:</strong> Both parties agree to share all
          relevant financial information voluntarily.
        </li>
      </ol>

      <h2>Benefits of Collaborative Divorce</h2>
      <ul>
        <li>Keeps the process private and out of court</li>
        <li>Usually less expensive than litigation</li>
        <li>Preserves relationships &mdash; especially important for co-parents</li>
        <li>You control the outcome rather than a judge</li>
        <li>Can reduce stress and emotional damage</li>
      </ul>

      <p>
        If collaborative law appeals to you, call me at{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
