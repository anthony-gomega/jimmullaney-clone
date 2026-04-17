import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Prenuptial Agreement Lawyer | The Law Office of A. James Mullaney",
  description: "Preparing you for the future with prenuptial agreements.",
};

export default function PrenupPage() {
  return (
    <InnerPage
      title="Jacksonville Prenuptial Agreement Lawyer"
      breadcrumbs={[{ label: "Prenuptial Agreements" }]}
    >
      <p>
        A prenuptial agreement (often called a &quot;prenup&quot;) is a legal
        contract entered into before marriage that outlines how assets and
        debts will be handled if the marriage ends in divorce or death. Prenups
        are smart planning tools, not signs of distrust.
      </p>

      <h2>Why Consider a Prenup?</h2>
      <ul>
        <li>Protect premarital assets</li>
        <li>Protect children from a prior marriage</li>
        <li>Clarify financial obligations during marriage</li>
        <li>Protect a family business</li>
        <li>Address alimony in advance</li>
        <li>Simplify divorce if the marriage ends</li>
      </ul>

      <h2>How to Ensure Your Prenup is Enforceable</h2>
      <ul>
        <li>
          <strong>Full financial disclosure:</strong> Both parties must
          disclose all assets and debts.
        </li>
        <li>
          <strong>Both parties have own attorneys:</strong> Both sides should
          have independent counsel.
        </li>
        <li>
          <strong>Signed well before the wedding:</strong> Not at the last
          minute.
        </li>
        <li>
          <strong>Voluntary:</strong> Neither party can be coerced.
        </li>
        <li>
          <strong>Substantively fair:</strong> Not unconscionable.
        </li>
        <li>
          <strong>In writing:</strong> Oral prenups are not enforceable.
        </li>
      </ul>

      <p>
        I also draft <strong>postnuptial agreements</strong> (after marriage).
        Call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
