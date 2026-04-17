import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Post-Decree Modifications Lawyer | The Law Office of A. James Mullaney",
  description:
    "If you need to modify a child support, alimony or time-sharing order, I can help.",
};

export default function ModificationsPage() {
  return (
    <InnerPage
      title="Jacksonville Post-Decree Modifications Lawyer"
      breadcrumbs={[{ label: "Modifications" }]}
    >
      <p>
        Life changes, and court orders sometimes need to change too. If you
        have a final judgment from a divorce or paternity case and circumstances
        have changed substantially, you may be able to modify the order.
      </p>

      <h2>What Can Be Modified</h2>
      <ul>
        <li>
          <Link href="/divorce/child-support">Child support</Link>
        </li>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida">
            Time-sharing and parenting plans
          </Link>
        </li>
        <li>
          <Link href="/divorce/alimony">Alimony</Link>
        </li>
      </ul>

      <p>
        <strong>Note:</strong> Property division and equitable distribution
        generally <em>cannot</em> be modified once the judgment is final.
      </p>

      <h2>Substantial Change in Circumstances</h2>
      <p>
        To modify most orders, you must prove a substantial, material, and
        unanticipated change in circumstances. Examples:
      </p>
      <ul>
        <li>Job loss or significant change in income</li>
        <li>Relocation</li>
        <li>Changes in the children&apos;s needs</li>
        <li>Remarriage (may affect alimony)</li>
        <li>Retirement</li>
        <li>Changes in the other parent&apos;s ability to care for the children</li>
      </ul>

      <p>
        Call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
