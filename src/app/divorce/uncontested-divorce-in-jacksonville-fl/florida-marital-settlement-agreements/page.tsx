import InnerPage from "../../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drafting Florida Marital Settlement Agreements | Jacksonville",
  description:
    "Need a marital settlement agreement in Jacksonville? Talk to a skilled Florida attorney with 24-plus years of drafting comprehensive divorce agreements.",
};

export default function Page() {
  return (
    <InnerPage
      title="Florida Marital Settlement Agreements"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Uncontested Divorce", href: "/divorce/uncontested-divorce-in-jacksonville-fl" },
        { label: "Marital Settlement Agreements" },
      ]}
    >
      <p>
        A Marital Settlement Agreement (MSA) is the legal contract that
        resolves every issue in your divorce. It is the single most important
        document in an uncontested divorce, because once the court signs the
        final judgment, the MSA becomes enforceable and difficult to change.
      </p>

      <h2>What a Good MSA Covers</h2>
      <ul>
        <li>
          <strong>Real estate:</strong> Who keeps the house, who refinances,
          who is responsible for the mortgage, how proceeds of a sale are
          divided.
        </li>
        <li>
          <strong>Personal property:</strong> Vehicles, furniture, collectibles,
          and other assets.
        </li>
        <li>
          <strong>Retirement accounts:</strong> 401(k)s, IRAs, pensions,
          typically divided via a Qualified Domestic Relations Order (QDRO).
        </li>
        <li>
          <strong>Bank and investment accounts:</strong> Each account
          identified by institution and account number.
        </li>
        <li>
          <strong>Debts:</strong> Credit cards, loans, and joint obligations.
        </li>
        <li>
          <strong>Alimony:</strong> Amount, duration, type, and termination
          triggers.
        </li>
        <li>
          <strong>Child support:</strong> Amount, how it is paid, provisions
          for health insurance and uncovered medical expenses.
        </li>
        <li>
          <strong>Parenting plan:</strong> Time-sharing schedule, holidays,
          decision-making, relocation rules.
        </li>
        <li>
          <strong>Taxes:</strong> Who claims the children, filing status for
          the year of divorce.
        </li>
        <li>
          <strong>Life insurance:</strong> Policies required to secure support
          obligations.
        </li>
      </ul>

      <h2>Why Draftsmanship Matters</h2>
      <p>
        An MSA that is vague or silent on common issues invites future
        litigation. Over 25 years I have seen agreements fall apart because
        the drafter did not address what happens when a parent relocates, what
        counts as &ldquo;extracurricular expenses,&rdquo; or who picks the
        children up from school when the schedule changes. I draft MSAs with
        contingencies in mind.
      </p>

      <p>
        To discuss your situation, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
