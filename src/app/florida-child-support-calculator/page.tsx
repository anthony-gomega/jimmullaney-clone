import InnerPage from "../components/InnerPage";
import InlineCTA from "../components/InlineCTA";
import CalconicEmbed from "../components/CalconicEmbed";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A Free 2026 Florida Child Support Calculator | Jacksonville Family Law",
  description:
    "Estimate your Florida child support obligation with the same Calconic-powered calculator used on the live site. Based on Florida Statutes §61.30 guidelines.",
  alternates: { canonical: "/florida-child-support-calculator" },
};

/** The firm's Calconic calculator ID (pulled from the live site embed). */
const CALCULATOR_ID = "5d30a3c5d25e57001e57c9f7";

export default function CalculatorPage() {
  return (
    <InnerPage
      title="A Free 2026 Florida Child Support Calculator"
      breadcrumbs={[{ label: "Child Support Calculator" }]}
      showSidebar={false}
    >
      <p>Last updated on December 30, 2025</p>

      <p>
        Most online Florida child-support calculators fail to predict what a
        judge will actually order. Two problems cause most of the error.
        First, online calculators typically ask for <strong>net</strong>{" "}
        income &mdash; but almost no one can estimate their own net correctly,
        and the program judges use starts from <strong>gross</strong>. Second,
        many calculators fail to account for overnights. Under Florida&apos;s
        current law (and the 2023 equal time-sharing presumption), the
        majority of paying parents have 20% or more of the overnights, which
        triggers the gross-up formula and significantly reduces the monthly
        obligation.
      </p>

      <p>
        This calculator is based on the 2026 federal tax code and the Florida
        Child Support Guidelines (§61.30). It asks for gross income, applies
        filing-status-appropriate standard deductions, estimates FICA and
        federal tax the way the court program does, and implements the
        §61.30(11)(b) gross-up formula automatically. Results are estimates;
        for a binding calculation for your case, call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a>.
      </p>

      {/* Calconic calculator embed — the same one that powers the live site */}
      <div className="not-prose my-12">
        <CalconicEmbed calculatorId={CALCULATOR_ID} />
      </div>

      <InlineCTA
        title="Need a Florida Child Support Guidelines Worksheet?"
        subtitle="For a binding calculation that matches what a judge will order, call for a consultation or order a formal Guidelines Worksheet."
      />

      <h2>How the Calculator Works</h2>
      <p>
        Florida applies the <strong>Income Shares Model</strong> to determine
        child support. Step by step:
      </p>
      <ol>
        <li>Each parent&apos;s monthly <strong>gross</strong> income is entered.</li>
        <li>
          Federal income tax is estimated from filing status and the 2026
          standard deduction, then FICA (Social Security + Medicare) is
          subtracted.
        </li>
        <li>
          Allowable monthly deductions are applied: health insurance for the
          parent, child care, union dues, mandatory retirement contributions,
          and any existing court-ordered support.
        </li>
        <li>The result is each parent&apos;s <strong>net monthly income</strong>.</li>
        <li>
          Combined net income and the number of children are used to look up
          the <strong>minimum monthly need</strong> in the Florida schedule
          (§61.30(6)).
        </li>
        <li>
          Each parent&apos;s share of that need equals their percentage of
          combined net income.
        </li>
        <li>
          If both parents have at least 20% of the overnights (73+ nights),
          Florida&apos;s <strong>gross-up formula</strong> under §61.30(11)(b)
          multiplies the need by 1.5 and credits each parent for time with the
          child.
        </li>
      </ol>

      <p>
        For a line-by-line walkthrough of the actual court worksheet, see{" "}
        <Link href="/florida-child-support-calculator/explanation-of-a-florida-child-support-guidelines-worksheet">
          Explanation of a Florida Child Support Guidelines Worksheet
        </Link>
        .
      </p>

      <h2>Order a Child Support Guidelines Worksheet &mdash; $20</h2>
      <p>
        If you would like a Child Support Guidelines Worksheet &mdash; the
        kind used in court and in mediations &mdash; please submit your
        calculation via the email link in the calculator above, and then{" "}
        <a
          href="https://secure.lawpay.com/pages/ajamesmullaney/operating"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </a>{" "}
        to pay the $20 fee. The worksheet is created manually, so allow a few
        hours to receive it.
      </p>
      <p>
        Submitting your information or paying for a worksheet does not create
        an attorney-client relationship.
      </p>

      <h2>Talk to a Jacksonville Child Support Lawyer</h2>
      <p>
        If you need a formal Guidelines Worksheet for court or mediation, or
        want to discuss how overnights, imputed income, or health-insurance
        allocations could change your number, I can help. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">send me a message</Link>.
      </p>
    </InnerPage>
  );
}
