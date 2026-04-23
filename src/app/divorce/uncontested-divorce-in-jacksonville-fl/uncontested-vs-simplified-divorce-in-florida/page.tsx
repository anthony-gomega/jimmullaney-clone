import InnerPage from "../../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uncontested vs. Simplified Divorce in Florida | Jacksonville",
  description:
    "Florida offers two streamlined divorce options for couples who agree on all terms: simplified dissolution and uncontested divorce.",
  alternates: { canonical: "/divorce/uncontested-divorce-in-jacksonville-fl/uncontested-vs-simplified-divorce-in-florida" }
};

export default function Page() {
  return (
    <InnerPage
      title="Uncontested vs. Simplified Divorce in Florida"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Uncontested Divorce", href: "/divorce/uncontested-divorce-in-jacksonville-fl" },
        { label: "Uncontested vs. Simplified" },
      ]}
    >
      <p>
        Florida offers two streamlined options for couples who agree on the
        end of the marriage. They sound similar but are legally distinct.
      </p>

      <h2>Simplified Dissolution of Marriage</h2>
      <p>Florida Statutes §61.052 allows a Simplified Dissolution only if:</p>
      <ul>
        <li>Both spouses sign the petition together</li>
        <li>There are no minor or dependent children</li>
        <li>Neither spouse is pregnant</li>
        <li>Both agree on the division of all property and debts</li>
        <li>Neither party is seeking alimony</li>
        <li>Both appear together at the final hearing</li>
      </ul>
      <p>
        Simplified dissolution is fast and cheap but offers very limited
        protection. You waive the right to trial and discovery. For most
        people with any meaningful assets, this waiver is a mistake.
      </p>

      <h2>Uncontested Divorce</h2>
      <p>
        An uncontested divorce is available to any couple that agrees on all
        terms, including those with children, alimony, or complex property.
        It preserves the full protections of a regular dissolution while
        avoiding litigation.
      </p>
      <ul>
        <li>Works with children and parenting plans</li>
        <li>Supports alimony arrangements</li>
        <li>Allows QDROs for retirement division</li>
        <li>Only the filing spouse must appear at the final hearing</li>
      </ul>

      <h2>Which Is Right for You?</h2>
      <p>
        If you have kids, own anything substantial, or are receiving/paying
        alimony — uncontested is almost always the right choice. If you have
        nothing but a toaster to divide and no kids, simplified can work.
      </p>

      <p>
        I can help you decide. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
