import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Domestic Violence Lawyer | Law Office of A. James Mullaney",
  description:
    "At the Law Office of A. James Mullaney, I can represent you. Call 904-364-4565 for a completely confidential consultation.",
  alternates: { canonical: "/domestic-violence" }
};

export default function DomesticViolencePage() {
  return (
    <InnerPage
      title="Jacksonville Domestic Violence Lawyer"
      breadcrumbs={[{ label: "Domestic Violence" }]}
    >
      <p>
        Domestic violence cases require immediate and experienced legal
        attention. Whether you need a protective injunction (restraining order)
        or are defending against allegations, the outcome can dramatically
        affect your life, custody of your children, and freedom.
      </p>

      <h2>Florida Injunctions for Protection</h2>
      <p>
        Florida law provides five types of injunctions for protection:
      </p>
      <ul>
        <li><strong>Domestic violence</strong> injunctions</li>
        <li><strong>Repeat violence</strong> injunctions</li>
        <li><strong>Dating violence</strong> injunctions</li>
        <li><strong>Sexual violence</strong> injunctions</li>
        <li><strong>Stalking</strong> injunctions</li>
      </ul>

      <h2>What an Injunction Does</h2>
      <ul>
        <li>Orders no contact between the parties</li>
        <li>May establish temporary time-sharing</li>
        <li>May require surrendering firearms</li>
        <li>May order counseling</li>
        <li>May exclude the respondent from shared residence</li>
      </ul>

      <h2>Defending Against False Allegations</h2>
      <p>
        Unfortunately, domestic violence allegations are sometimes made
        strategically during divorce or custody disputes. If you are wrongly
        accused, you need experienced counsel to protect your rights.
      </p>

      <p>
        For a confidential consultation, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
