import InnerPage from "../../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Step-By-Step Guide To Filing Uncontested Divorce | Jacksonville FL",
  description:
    "If you are ready to file for an uncontested divorce, having legal representation can simplify the process and prevent mistakes.",
  alternates: { canonical: "/divorce/uncontested-divorce-in-jacksonville-fl/step-by-step-guide-to-filing-uncontested-divorce-in-jacksonville" }
};

export default function Page() {
  return (
    <InnerPage
      title="Step-By-Step Guide to Filing an Uncontested Divorce in Jacksonville"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        {
          label: "Uncontested Divorce",
          href: "/divorce/uncontested-divorce-in-jacksonville-fl",
        },
        { label: "Step-By-Step Guide" },
      ]}
    >
      <p>
        If you and your spouse have agreed on the terms of your divorce, filing
        an uncontested divorce in Jacksonville is the fastest and least
        expensive path to dissolution. Here is the process from start to
        finish.
      </p>

      <h2>Step 1: Confirm Eligibility</h2>
      <p>
        To file in Florida, at least one spouse must have been a resident of
        the state for at least 6 months. You must also be able to state that
        the marriage is irretrievably broken.
      </p>

      <h2>Step 2: Agree on All Terms</h2>
      <p>Both spouses must reach agreement on:</p>
      <ul>
        <li>Division of property and debts</li>
        <li><Link href="/divorce/alimony">Alimony</Link> (if any)</li>
        <li><Link href="/divorce/child-support">Child support</Link></li>
        <li>Time-sharing and a parenting plan</li>
        <li>Attorney fees and costs</li>
      </ul>

      <h2>Step 3: Draft the Marital Settlement Agreement</h2>
      <p>
        This is the core document that sets out every agreed-upon term. I
        prepare a comprehensive MSA tailored to your situation.{" "}
        <Link href="/divorce/uncontested-divorce-in-jacksonville-fl/florida-marital-settlement-agreements">
          Learn more about marital settlement agreements
        </Link>
        .
      </p>

      <h2>Step 4: File the Petition</h2>
      <p>
        The Petition for Dissolution of Marriage is filed with the Clerk of
        Court for Duval County (or the appropriate circuit). The non-filing
        spouse signs an Answer and Waiver acknowledging service.
      </p>

      <h2>Step 5: Complete Financial Affidavits</h2>
      <p>
        Both parties complete and exchange sworn financial affidavits
        disclosing income, expenses, assets, and debts.
      </p>

      <h2>Step 6: The Final Hearing</h2>
      <p>
        Typically 30–90 days after filing, you attend a brief final hearing.{" "}
        <Link href="/divorce/uncontested-divorce-in-jacksonville-fl/what-happens-at-the-final-hearing-for-an-uncontested-divorce-in-florida">
          Learn what to expect at the hearing
        </Link>
        .
      </p>

      <h2>Step 7: Judgment Entered</h2>
      <p>
        The judge signs the Final Judgment of Dissolution. You are officially
        divorced.
      </p>

      <p>
        Ready to begin? Call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
