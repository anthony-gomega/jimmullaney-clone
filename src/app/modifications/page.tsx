import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Post-Decree Modifications Lawyer | Florida Family Law",
  description:
    "Modify child support, alimony, time-sharing, or parenting plans in Florida. 25+ years of Jacksonville family-law experience handling substantial-change-of-circumstances cases.",
  alternates: { canonical: "/modifications" },
};

export default function ModificationsPage() {
  return (
    <InnerPage title="Jacksonville Post-Decree Modifications Lawyer" breadcrumbs={[{ label: "Modifications" }]}>
      <p>
        Life changes. A court order that made sense three years ago may no
        longer fit your income, your work schedule, or your
        children&apos;s needs. Florida family-law orders &mdash; child
        support, alimony, and parenting plans &mdash; can be modified when
        the right conditions are met. The right conditions, however, are
        narrower than most people expect, and modifications apply only
        from the date the petition is filed. Delay almost always costs
        money.
      </p>

      <h2>What Can Be Modified</h2>
      <ul>
        <li>
          <Link href="/divorce/child-support">Child support</Link>
        </li>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida">
            Time-sharing and parenting plans
          </Link>
        </li>
        <li>
          <Link href="/divorce/alimony">Alimony</Link> (except bridge-the-gap)
        </li>
        <li>
          Decision-making (parental responsibility) arrangements
        </li>
        <li>
          Relocation restrictions
        </li>
      </ul>
      <p>
        <strong>What cannot be modified:</strong> Property division and
        equitable distribution &mdash; once the final judgment is entered,
        the division of assets and debts is generally final. Limited
        exceptions exist for fraud, mistake, or newly-discovered evidence,
        and must be raised within strict time limits.
      </p>

      <h2>The Substantial-Change-of-Circumstances Test</h2>
      <p>
        To modify an existing order, you must prove a{" "}
        <strong>substantial, material, and unanticipated change in
        circumstances</strong> since the last order was entered. Each
        element matters:
      </p>
      <ul>
        <li>
          <strong>Substantial.</strong> More than a minor fluctuation.
          Courts typically want to see changes of 15% or more in income
          for support modifications, though the threshold varies by issue.
        </li>
        <li>
          <strong>Material.</strong> Relevant to the purpose of the order.
          A job change that doesn&apos;t affect income or schedule
          isn&apos;t material.
        </li>
        <li>
          <strong>Unanticipated.</strong> Not something the parties knew
          or should have known about when the order was entered. If a
          mother was already in nursing school when the last order was
          entered, her subsequent salary increase as a nurse may not be
          unanticipated.
        </li>
      </ul>

      <h2>Common Grounds for Modification</h2>

      <h3>Child Support</h3>
      <ul>
        <li>Significant income change in either parent (15% or more, or $50/mo, whichever is greater)</li>
        <li>Job loss, disability, or forced retirement</li>
        <li>Change in overnight time-sharing</li>
        <li>One child reaching majority (but others remaining)</li>
        <li>New expenses for extraordinary medical or educational needs</li>
        <li>Addition of health-insurance costs</li>
      </ul>

      <h3>Alimony</h3>
      <ul>
        <li>Payor&apos;s involuntary loss of income</li>
        <li>Recipient&apos;s entry into a &ldquo;supportive relationship&rdquo; under §61.14(1)(b)</li>
        <li>Recipient&apos;s remarriage (usually terminates alimony)</li>
        <li>Payor&apos;s retirement at normal retirement age (post-2023 reform)</li>
        <li>Significant increase in the recipient&apos;s income</li>
      </ul>

      <h3>Time-Sharing &amp; Parenting Plans</h3>
      <ul>
        <li>Relocation by one parent</li>
        <li>A parent&apos;s entry of a new partner into the household (when it materially affects the children)</li>
        <li>Change in the children&apos;s developmental or educational needs</li>
        <li>Change in a parent&apos;s work schedule that makes the existing plan unworkable</li>
        <li>Safety concerns &mdash; substance abuse, domestic violence, neglect</li>
        <li>Older child&apos;s reasonable preference (not controlling, but considered)</li>
      </ul>

      <h2>Higher Bar for Time-Sharing Modifications</h2>
      <p>
        Florida courts apply a <strong>higher standard</strong> to
        modifications of time-sharing than to support. The moving parent
        must show not only a substantial, material, and unanticipated
        change in circumstances but also that the modification is in the
        best interest of the child. Judges are reluctant to disturb
        functioning parenting plans absent a compelling reason.
      </p>

      <h2>Modifications Apply Only From Filing Date</h2>
      <p>
        Florida law is strict: a modification of child support or alimony
        generally applies only to payments that come due <em>after</em>{" "}
        the petition is filed. If you wait six months to file after a job
        loss, you remain on the hook for the original amount during those
        six months. The single most important piece of advice I give
        clients facing a change of circumstances is: <em>file
        immediately</em>.
      </p>

      <h2>Temporary Relief While Modification Is Pending</h2>
      <p>
        The court can grant temporary orders while the modification is
        pending &mdash; for example, reducing child support temporarily
        while the court addresses the full modification claim. Temporary
        orders are discretionary and fact-dependent but can provide
        meaningful relief during what can be a months-long process.
      </p>

      <h2>Enforcement and Modification Together</h2>
      <p>
        These two issues often arise at once. A parent who cannot pay
        existing support faces contempt; simultaneously, that parent needs
        the order modified to reflect current reality. Filing a
        modification promptly is both a shield against contempt and the
        path to a sustainable order going forward.{" "}
        <Link href="/contempt">See Contempt &amp; Enforcement</Link>.
      </p>

      <h2>How I Can Help</h2>
      <p>
        I can evaluate whether your circumstances meet the
        substantial-change standard, file the petition, handle discovery
        and mediation, and represent you through trial if necessary. Call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
