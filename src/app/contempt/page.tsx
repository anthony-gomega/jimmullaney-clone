import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Contempt Lawyer | Enforcing Florida Family Law Orders",
  description:
    "Enforce or defend against contempt of a Florida family-law order. 25+ years of experience with child support, alimony, and parenting-plan enforcement. Call 904-364-4565.",
  alternates: { canonical: "/contempt" },
};

export default function ContemptPage() {
  return (
    <InnerPage title="Jacksonville Contempt Attorney" breadcrumbs={[{ label: "Contempt" }]}>
      <p>
        When someone willfully violates a family-law court order &mdash;
        refusing to pay alimony, skipping child support, denying
        time-sharing &mdash; that person can be held in{" "}
        <strong>contempt of court</strong>. Florida&apos;s contempt remedies
        range from makeup time with the children to fines, license
        suspension, and jail. Whether you need to enforce an order against
        the other party or defend yourself against contempt allegations, the
        procedure is specific and consequences are serious.
      </p>

      <h2>Civil vs. Criminal Contempt</h2>
      <p>Florida recognizes two forms of contempt:</p>
      <ul>
        <li>
          <strong>Civil contempt</strong> is designed to coerce compliance
          with the court&apos;s order. A party who violates a support order
          can be held in civil contempt and jailed &mdash; but the jail
          sentence must include a &ldquo;purge&rdquo; (a way to get out,
          usually by paying the past-due amount). The moment the party
          pays, they walk free.
        </li>
        <li>
          <strong>Criminal contempt</strong> is designed to punish past
          misconduct. The sentence is fixed and cannot be purged by
          belated compliance. Criminal contempt in family law is rare and
          requires heightened procedural protections (right to counsel,
          proof beyond a reasonable doubt).
        </li>
      </ul>

      <h2>Common Contempt Situations</h2>
      <ul>
        <li>Failure to pay <Link href="/divorce/child-support">child support</Link></li>
        <li>Failure to pay <Link href="/divorce/alimony">alimony</Link></li>
        <li>Denying court-ordered <Link href="/time-sharing-and-visitation-in-florida">time-sharing</Link></li>
        <li>Failure to transfer titled assets as ordered</li>
        <li>Failure to refinance the marital home as required by the judgment</li>
        <li>Failure to maintain required life or health insurance</li>
        <li>Failure to pay court-ordered attorney&apos;s fees</li>
        <li>Non-payment of uncovered medical, dental, or extracurricular expenses</li>
        <li>Violation of a <Link href="/domestic-violence">domestic-violence injunction</Link></li>
      </ul>

      <h2>What the Moving Party Must Prove</h2>
      <p>To obtain a civil contempt finding in Florida, the moving party must prove:</p>
      <ol>
        <li>A <strong>valid court order</strong> existed.</li>
        <li>The other party had <strong>knowledge</strong> of the order.</li>
        <li>The other party <strong>willfully failed to comply</strong>.</li>
      </ol>
      <p>
        For child-support contempt, Florida applies a presumption of
        ability to pay based on the original order &mdash; once the moving
        party proves a prior ability to pay and current non-payment, the
        burden shifts to the delinquent parent to prove inability.
      </p>

      <h2>Defenses to Contempt</h2>
      <p>Common defenses &mdash; any one can defeat a contempt finding:</p>
      <ul>
        <li>
          <strong>Inability to pay</strong> &mdash; the obligor truly does
          not have the financial resources to comply, despite good-faith
          efforts. This is the most common defense and requires financial
          documentation.
        </li>
        <li>
          <strong>Ambiguity</strong> &mdash; the order is unclear and a
          reasonable person could read it differently.
        </li>
        <li>
          <strong>Lack of willfulness</strong> &mdash; the failure was not
          intentional (automatic withdrawals failed, the obligor was
          hospitalized, etc.).
        </li>
        <li>
          <strong>Impossibility</strong> &mdash; complying is actually
          impossible due to circumstances beyond the obligor&apos;s
          control.
        </li>
        <li>
          <strong>Estoppel or waiver</strong> &mdash; the other party
          agreed to (or acquiesced in) the deviation from the order.
        </li>
      </ul>

      <h2>Contempt Remedies</h2>
      <p>The court has broad discretion in fashioning remedies:</p>
      <ul>
        <li>
          <strong>Order to pay</strong> the arrearage on a specific
          schedule, with a purge amount that must be paid immediately
        </li>
        <li>
          <strong>Income deduction</strong> ordering the employer to
          withhold directly from wages
        </li>
        <li>
          <strong>Makeup time-sharing</strong> for the parent whose time
          was denied
        </li>
        <li>
          <strong>Attorney&apos;s fees and costs</strong> awarded to the
          moving party
        </li>
        <li>
          <strong>Driver&apos;s license suspension</strong> for support
          arrearages
        </li>
        <li>
          <strong>Passport denial</strong> and interception of tax refunds
          and lottery winnings
        </li>
        <li>
          <strong>Fines</strong>
        </li>
        <li>
          <strong>Jail</strong>, with a purge amount, for sustained
          willful nonpayment
        </li>
        <li>
          In extreme cases, <strong>modification of the parenting
          plan</strong> itself, including sole parental responsibility
          to the compliant parent
        </li>
      </ul>

      <h2>Time-Sharing Denial: Specific Remedies</h2>
      <p>
        Florida has specific statutory remedies for parents who deny
        court-ordered time-sharing (§61.13(4)(c)):
      </p>
      <ul>
        <li>Extra time-sharing to make up for the denied periods</li>
        <li>Reimbursement of travel costs and lost income</li>
        <li>Mandatory attendance at a parenting course</li>
        <li>Community service</li>
        <li>Attorney&apos;s fees</li>
        <li>Modification of the parenting plan where the denial pattern is severe</li>
      </ul>

      <h2>Contempt vs. Modification</h2>
      <p>
        A parent facing contempt for nonpayment should almost always file
        a parallel{" "}
        <Link href="/modifications">modification petition</Link> if their
        income has dropped. Modification doesn&apos;t retroactively excuse
        missed payments, but it stops the bleeding going forward and can
        influence how a contempt judge fashions the purge.
      </p>

      <h2>How I Can Help</h2>
      <p>
        Whether you need to enforce a judgment against a noncompliant
        spouse or defend against a contempt motion, I can help. Call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
