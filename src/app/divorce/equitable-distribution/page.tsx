import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Equitable Distribution Attorney",
  description:
    "At the Law Office of A. James Mullaney in Jacksonville, I have 24-plus years of experience handling equitable distribution of assets or debts.",
  alternates: { canonical: "/divorce/equitable-distribution" }
};

export default function EquitableDistributionPage() {
  return (
    <InnerPage
      title="Jacksonville Equitable Distribution Attorney"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Equitable Distribution" },
      ]}
    >
      <p>
        Florida follows the rule of <strong>equitable distribution</strong> when
        dividing marital property and debts in a divorce. &quot;Equitable&quot;
        means fair &mdash; not necessarily equal &mdash; though the starting
        point is a 50/50 split.
      </p>

      <h2>Marital vs. Non-Marital Property</h2>
      <p>
        Only marital property is subject to equitable distribution. Generally:
      </p>
      <ul>
        <li>
          <strong>Marital:</strong> Assets and debts acquired during the
          marriage, regardless of whose name is on the title.
        </li>
        <li>
          <strong>Non-marital:</strong> Assets owned before the marriage,
          inheritances, and gifts (unless commingled with marital property).
        </li>
      </ul>

      <h2>Factors Courts Consider</h2>
      <ul>
        <li>Duration of the marriage</li>
        <li>Economic circumstances of each spouse</li>
        <li>Contributions to the marriage (including as a homemaker)</li>
        <li>Career interruptions for one spouse&apos;s career or education</li>
        <li>Contributions to acquisition or enhancement of assets</li>
        <li>Desirability of retaining the marital home for children</li>
        <li>Intentional waste or destruction of assets</li>
      </ul>

      <h2>Common Complex Assets</h2>
      <ul>
        <li>Retirement accounts (401(k), IRA, pensions)</li>
        <li>Businesses</li>
        <li>Real estate (primary and investment)</li>
        <li>Stock options and RSUs</li>
        <li>Marital debts</li>
      </ul>

      <p>
        Call <a href="tel:+1-904-364-4565">904-364-4565</a> to discuss your
        property division or <Link href="/contact">reach out online</Link>.
      </p>
    </InnerPage>
  );
}
