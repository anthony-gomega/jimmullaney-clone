import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Contested Divorce Lawyer",
  description:
    "Let me handle your contested divorce at the Law Office of A. James Mullaney in Jacksonville. I have 24-plus years of experience.",
  alternates: { canonical: "/divorce/contested-divorce" }
};

export default function ContestedDivorcePage() {
  return (
    <InnerPage
      title="Jacksonville Contested Divorce Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Contested Divorce" },
      ]}
    >
      <p>
        A contested divorce is one where the spouses cannot agree on one or
        more of the essential terms of the divorce. This may involve disputes
        over property division, alimony, child support, time-sharing, or other
        issues. When this happens, the court must decide.
      </p>

      <h2>The Contested Divorce Process</h2>
      <ol>
        <li>
          <strong>Filing the petition:</strong> One spouse files a Petition for
          Dissolution of Marriage.
        </li>
        <li>
          <strong>Response:</strong> The other spouse files an Answer (and
          often a Counter-Petition).
        </li>
        <li>
          <strong>Discovery:</strong> Both sides exchange financial documents
          and other evidence.
        </li>
        <li>
          <strong>Mediation:</strong> Florida courts require mediation before
          trial in most cases.
        </li>
        <li>
          <strong>Trial:</strong> If mediation fails, the judge decides
          unresolved issues.
        </li>
      </ol>

      <h2>Common Contested Issues</h2>
      <ul>
        <li>
          <Link href="/divorce/equitable-distribution">
            Equitable distribution of assets and debts
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
        <li>Valuation of businesses or complex assets</li>
      </ul>

      <h2>Why Choose an Experienced Advocate</h2>
      <p>
        Contested divorces require experienced courtroom advocacy. With over
        24 years of family law experience, I know how to build strong cases,
        prepare compelling evidence, and advocate effectively for my clients.
      </p>

      <p>
        Call <a href="tel:+1-904-364-4565">904-364-4565</a> for a consultation
        or <Link href="/contact">reach out online</Link>.
      </p>
    </InnerPage>
  );
}
