import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Parental Relocation Lawyer | Law Office of A. James Mullaney",
  description:
    "24+ years of experience helping Jacksonville parents with parental relocation petitions and objections under Florida Statutes §61.13001.",
  alternates: { canonical: "/time-sharing-and-visitation-in-florida/relocations" }
};

export default function Page() {
  return (
    <InnerPage
      title="Parental Relocations in Florida"
      breadcrumbs={[
        { label: "Parenting Plans", href: "/time-sharing-and-visitation-in-florida" },
        { label: "Relocations" },
      ]}
    >
      <p>
        Florida law treats relocation of a parent with a child as a serious,
        regulated event. Under Florida Statutes §61.13001, a parent who shares
        time-sharing cannot move more than 50 miles away for more than 60
        consecutive days without either the other parent&apos;s written consent
        or a court order.
      </p>

      <h2>By Agreement: The Simple Path</h2>
      <p>
        If both parents agree to the move, you sign a written relocation
        agreement that includes:
      </p>
      <ul>
        <li>Consent to the relocation</li>
        <li>A revised time-sharing schedule reflecting the move</li>
        <li>Any adjustments to transportation arrangements</li>
        <li>Updated contact information</li>
      </ul>
      <p>The agreement is filed with the court and ratified by the judge.</p>

      <h2>Without Agreement: The Petition to Relocate</h2>
      <p>If the other parent objects, you must file a Petition to Relocate. It must include:</p>
      <ul>
        <li>The proposed new residence address (including city, state, and country)</li>
        <li>The home telephone number at the new residence, if known</li>
        <li>The date of the intended move</li>
        <li>A detailed statement of the specific reasons for the move</li>
        <li>A proposed new post-relocation time-sharing schedule</li>
        <li>A proposed transportation plan</li>
      </ul>

      <h2>Factors the Court Considers</h2>
      <p>Florida judges evaluate many factors including:</p>
      <ul>
        <li>The child&apos;s relationship with each parent</li>
        <li>The age and developmental stage of the child</li>
        <li>The feasibility of preserving the relationship with the non-moving parent</li>
        <li>The reasons for the proposed relocation</li>
        <li>The career and other opportunities for the relocating parent</li>
        <li>The quality of life improvements for the child and relocating parent</li>
        <li>Any history of domestic violence or substance abuse</li>
      </ul>

      <h2>Objecting to a Relocation</h2>
      <p>
        If you have received a Notice of Relocation, you have a limited time
        to file a formal objection. Failing to object in time generally means
        the relocation is permitted.
      </p>

      <p>
        Whether you are planning to move or responding to the other
        parent&apos;s move, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
