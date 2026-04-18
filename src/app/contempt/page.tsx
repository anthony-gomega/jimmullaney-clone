import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Contempt Attorney | The Law Office of A. James Mullaney",
  description:
    "Is another person refusing to comply with a court order? I am a Jacksonville contempt lawyer who can help.",
  alternates: { canonical: "/contempt" }
};

export default function ContemptPage() {
  return (
    <InnerPage title="Jacksonville Contempt Attorney" breadcrumbs={[{ label: "Contempt" }]}>
      <p>
        When someone willfully violates a court order &mdash; for example, by
        refusing to pay court-ordered alimony or child support, or by denying
        time-sharing &mdash; that person may be held in contempt of court.
        Contempt remedies can range from makeup time-sharing to fines to jail
        time.
      </p>

      <h2>Common Contempt Situations</h2>
      <ul>
        <li>Failure to pay child support</li>
        <li>Failure to pay alimony</li>
        <li>Denying court-ordered time-sharing</li>
        <li>Failure to comply with property division orders</li>
        <li>Failure to provide required financial information</li>
        <li>Refusing to sign documents required by the court</li>
      </ul>

      <h2>What to Prove</h2>
      <p>To establish contempt, you must show:</p>
      <ol>
        <li>A valid court order existed</li>
        <li>The other party had knowledge of the order</li>
        <li>The other party willfully failed to comply</li>
      </ol>

      <h2>Defending Against Contempt</h2>
      <p>
        If you are accused of contempt, defenses include inability to pay,
        ambiguity in the order, or that the other party&apos;s conduct excused
        performance.
      </p>

      <p>
        Call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
