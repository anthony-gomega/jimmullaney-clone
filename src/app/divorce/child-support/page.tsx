import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Child Support Lawyer | Law Office of A. James Mullaney",
  description:
    "Consult with a child support lawyer in Jacksonville to ensure that the child support calculations in your case are performed properly.",
};

export default function ChildSupportPage() {
  return (
    <InnerPage
      title="Jacksonville Child Support Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Child Support" },
      ]}
    >
      <p>
        In Florida, both parents have a legal obligation to support their
        children financially. Child support is calculated according to state
        guidelines that consider each parent&apos;s income, the number of
        overnight stays, and certain expenses.
      </p>

      <h2>How Child Support Is Calculated</h2>
      <p>Florida uses the Income Shares Model. The calculation factors in:</p>
      <ul>
        <li>Each parent&apos;s net income</li>
        <li>Number of children</li>
        <li>Health insurance costs for the children</li>
        <li>Work-related child care costs</li>
        <li>Number of overnights each parent has</li>
      </ul>

      <p>
        Try our{" "}
        <Link href="/florida-child-support-calculator">
          free Florida Child Support Calculator
        </Link>{" "}
        to get an estimate of what child support might look like in your case.
      </p>

      <h2>Modifying Child Support</h2>
      <p>
        Child support orders can be modified when there is a substantial change
        in circumstances. Common reasons include:
      </p>
      <ul>
        <li>Significant change in income (up or down)</li>
        <li>Job loss</li>
        <li>Change in time-sharing</li>
        <li>Change in the child&apos;s needs</li>
      </ul>

      <h2>Enforcing Child Support</h2>
      <p>
        If the other parent is not paying court-ordered child support, I can
        help you enforce the order through contempt proceedings, income
        withholding orders, or other means available under Florida law.
      </p>

      <p>
        Call <a href="tel:+1-904-364-4565">904-364-4565</a> for a consultation
        or <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
