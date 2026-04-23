import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explanation of the Florida Child Support Guidelines Worksheet",
  description:
    "A line-by-line walkthrough of the Florida Child Support Guidelines Worksheet, explaining every number so you understand exactly how your obligation is calculated.",
  alternates: {
    canonical:
      "/florida-child-support-calculator/explanation-of-a-florida-child-support-guidelines-worksheet",
  },
};

export default function Page() {
  return (
    <InnerPage
      title="Explanation of a Florida Child Support Guidelines Worksheet"
      breadcrumbs={[
        { label: "Child Support Calculator", href: "/florida-child-support-calculator" },
        { label: "Guidelines Worksheet" },
      ]}
    >
      <p>
        I get a lot of phone calls from people who recently attended a hearing
        where their child support obligation was calculated — and no one
        bothered to explain what the numbers on the worksheet actually mean.
        This page walks through the Florida Child Support Guidelines
        Worksheet line by line so you can read your own.
      </p>

      <h2>The Statutory Framework</h2>
      <p>
        Florida child support is governed by Florida Statutes §61.30. The
        statute uses the &ldquo;Income Shares&rdquo; model, which attempts to
        estimate what the parents would have spent on the child had the
        family remained intact. That combined obligation is then divided
        between the parents in proportion to their respective incomes.
      </p>

      <h2>Line 1: Monthly Gross Income</h2>
      <p>
        Starts with gross monthly income from all sources — wages, self-
        employment, bonuses, commissions, disability, Social Security,
        pensions, interest and dividends, rental income, and other recurring
        income. Irregular income is averaged over a reasonable period.
      </p>

      <h2>Lines 2–3: Allowable Deductions &amp; Monthly Net Income</h2>
      <p>Allowable deductions include:</p>
      <ul>
        <li>Federal, state and local income taxes</li>
        <li>FICA (Social Security and Medicare)</li>
        <li>Mandatory union dues</li>
        <li>Mandatory retirement payments</li>
        <li>Health insurance (not including coverage for the children)</li>
        <li>Court-ordered support paid for other children</li>
        <li>Spousal support paid or received pursuant to a court order</li>
      </ul>
      <p>
        Gross income minus allowable deductions equals <strong>net monthly
        income</strong>. This is line 3.
      </p>

      <h2>Line 4: Combined Net Income</h2>
      <p>
        Add both parents&apos; net monthly incomes. This is the combined
        figure the statute uses to look up a base child support obligation.
      </p>

      <h2>Line 5: Each Parent&apos;s Percentage Share</h2>
      <p>
        Divide each parent&apos;s net income by the combined net income. The
        result is that parent&apos;s percentage share of the total
        obligation.
      </p>

      <h2>Line 6: Minimum Child Support Need</h2>
      <p>
        Using Florida Statutes §61.30(6) — the Child Support Guidelines
        Schedule — look up the minimum support need for the combined net
        income and number of children.
      </p>

      <h2>Line 7: Each Parent&apos;s Share of the Minimum Need</h2>
      <p>Multiply line 6 by each parent&apos;s percentage from line 5.</p>

      <h2>Lines 8–10: Child-Care &amp; Health Insurance</h2>
      <p>
        Add monthly work-related child care costs and the child&apos;s
        portion of health insurance premiums to the base obligation. Each
        parent&apos;s share of these expenses is based on the percentages
        in line 5.
      </p>

      <h2>Line 11: Adjustments for Substantial Time-Sharing</h2>
      <p>
        If each parent exercises at least 20% (73 overnights) of the
        overnights, a gross-up formula applies that increases the base
        obligation by 150% and credits each parent for the time the child
        is in their home. This is where having experienced counsel matters —
        small changes in overnights produce significant changes in support.
      </p>

      <h2>Line 12: Final Monthly Child Support Obligation</h2>
      <p>
        After all adjustments, one parent pays the other the amount on line
        12 each month. This is a net number — it already accounts for
        shared expenses.
      </p>

      <h2>Try the Calculator</h2>
      <p>
        Our free{" "}
        <Link href="/florida-child-support-calculator">
          Florida Child Support Calculator
        </Link>{" "}
        walks through a simplified version of this math. For a binding
        calculation for your case, call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
