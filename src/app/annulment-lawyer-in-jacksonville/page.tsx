import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Annulment Lawyer | The Law Office of A. James Mullaney",
  description: "24-plus years of experience as a Jacksonville annulment lawyer.",
};

export default function AnnulmentPage() {
  return (
    <InnerPage
      title="Jacksonville Annulment Lawyer"
      breadcrumbs={[{ label: "Annulment" }]}
    >
      <p>
        An annulment is different from a divorce. A divorce ends a valid
        marriage, while an annulment declares that the marriage was never
        legally valid. Annulments are rare and require specific grounds under
        Florida law.
      </p>

      <h2>Grounds for Annulment in Florida</h2>
      <ul>
        <li><strong>Bigamy:</strong> One spouse was already married.</li>
        <li><strong>Incest:</strong> The parties are closely related.</li>
        <li><strong>Underage:</strong> One party was below the legal age without parental consent.</li>
        <li><strong>Mental incapacity:</strong> One party lacked capacity to consent.</li>
        <li><strong>Fraud:</strong> One spouse deceived the other about an essential matter.</li>
        <li><strong>Duress:</strong> One party was forced into the marriage.</li>
        <li><strong>Impotence:</strong> Undisclosed and permanent.</li>
      </ul>

      <h2>Effects of Annulment</h2>
      <p>
        Unlike divorce, annulment restores the parties to their status as if
        never married. However, Florida courts can still address issues like
        paternity and child support for children born of the annulled union.
      </p>

      <p>
        To discuss whether annulment is an option, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
