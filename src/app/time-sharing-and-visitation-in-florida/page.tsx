import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big Changes To Time Sharing And Visitation In Florida",
  description:
    "I am an experienced Jacksonville parenting plan lawyer offering guidance on parenting plans, time-sharing and parenting solutions.",
};

export default function ParentingPlansPage() {
  return (
    <InnerPage
      title="Time-Sharing and Parenting Plans in Florida"
      breadcrumbs={[{ label: "Parenting Plans" }]}
    >
      <p>
        In Florida, what used to be called &quot;custody&quot; and
        &quot;visitation&quot; is now referred to as <strong>time-sharing</strong>.
        Every Florida divorce or paternity case involving minor children must
        have a written parenting plan approved by the court.
      </p>

      <h2>2023 Time-Sharing Law Update</h2>
      <p>
        Florida law now has a <strong>presumption</strong> that equal time-sharing
        (50/50) is in the best interests of the children. This presumption can
        be overcome with a preponderance of the evidence.
      </p>

      <h2>What&apos;s in a Parenting Plan?</h2>
      <ul>
        <li>A time-sharing schedule (including holidays and summer)</li>
        <li>How parental responsibility will be divided</li>
        <li>How decisions about healthcare, education, and religion will be made</li>
        <li>How the parents will communicate about the children</li>
        <li>Address designated for school enrollment</li>
        <li>Transportation arrangements</li>
      </ul>

      <h2>Best Interests Factors</h2>
      <p>Florida courts consider many factors including:</p>
      <ul>
        <li>Parental ability to facilitate a relationship between the child and the other parent</li>
        <li>Division of responsibilities historically</li>
        <li>Mental and physical health of the parents</li>
        <li>Stability of the proposed home environments</li>
        <li>Moral fitness of the parents</li>
        <li>Child&apos;s preference (if of sufficient age)</li>
        <li>Demonstrated capacity to meet the developmental needs of the child</li>
      </ul>

      <h2>Related Topics</h2>
      <ul>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida/relocations">
            Parental Relocations
          </Link>
        </li>
        <li>
          <Link href="/modifications">Modifications</Link>
        </li>
        <li>
          <Link href="/contempt">Contempt</Link>
        </li>
      </ul>

      <p>
        For a consultation, call <a href="tel:+1-904-364-4565">904-364-4565</a>{" "}
        or <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
