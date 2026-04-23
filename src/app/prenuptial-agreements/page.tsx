import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Prenuptial Agreement Lawyer | Florida Prenup & Postnup Attorney",
  description:
    "Draft a valid, enforceable Florida prenuptial or postnuptial agreement with an attorney who has spent 25+ years handling family-law matters. Call 904-858-4334.",
  alternates: { canonical: "/prenuptial-agreements" },
};

export default function PrenupPage() {
  return (
    <InnerPage title="Jacksonville Prenuptial Agreement Lawyer" breadcrumbs={[{ label: "Prenuptial Agreements" }]}>
      <p>
        A prenuptial agreement &mdash; a &ldquo;prenup&rdquo; &mdash; is a
        written contract entered into before marriage that governs how
        assets, debts, and spousal support will be handled if the marriage
        ends in divorce or one spouse dies. Done right, a prenup is a
        planning document, not a sign of distrust. It lets both spouses
        enter the marriage with a clear, shared understanding of their
        financial arrangement and can spare families substantial expense
        and conflict down the road.
      </p>

      <h2>Who Should Consider a Prenup?</h2>
      <p>Prenups are especially valuable when:</p>
      <ul>
        <li>One or both spouses own significant premarital assets</li>
        <li>One spouse has children from a prior marriage and wants to preserve assets for those children</li>
        <li>One or both spouses own a business or professional practice</li>
        <li>One spouse has (or expects) a significant inheritance</li>
        <li>The spouses have substantially different incomes or earning potential</li>
        <li>Either spouse has significant premarital debt</li>
        <li>The couple wants certainty about alimony in advance</li>
        <li>One or both spouses have been divorced before and want predictability this time</li>
      </ul>

      <h2>What a Prenup Can &mdash; and Cannot &mdash; Do</h2>
      <p>
        Florida&apos;s <strong>Uniform Premarital Agreement Act</strong>{" "}
        (§61.079) authorizes prenups to address:
      </p>
      <ul>
        <li>Rights and obligations in property each party owns</li>
        <li>The right to buy, sell, use, transfer, or otherwise manage property</li>
        <li>Division of property on separation, divorce, or death</li>
        <li>Modification or elimination of spousal support (alimony)</li>
        <li>Making a will, trust, or other estate arrangement to carry out the agreement</li>
        <li>Ownership of life-insurance policies and death benefits</li>
        <li>Choice of law governing the agreement</li>
      </ul>
      <p>
        A prenup <em>cannot</em> do any of the following:
      </p>
      <ul>
        <li>Adversely affect a child&apos;s right to child support</li>
        <li>Waive or limit rights already vested in a child</li>
        <li>Include any provision in violation of public policy or criminal law</li>
      </ul>

      <h2>What Makes a Prenup Enforceable</h2>
      <p>
        Florida courts enforce prenuptial agreements, but not blindly. To
        survive a challenge, a prenup generally must satisfy all of the
        following:
      </p>
      <ul>
        <li>
          <strong>In writing and signed.</strong> Oral prenuptial
          agreements are not enforceable.
        </li>
        <li>
          <strong>Voluntary.</strong> Neither party can be coerced. Signing
          the prenup the night before the wedding, with the disadvantaged
          spouse having no time or ability to consult counsel, is one of
          the most common grounds for invalidation.
        </li>
        <li>
          <strong>Full financial disclosure.</strong> Each party must
          disclose all assets, debts, and income. A schedule of assets and
          liabilities is typically attached as an exhibit.
        </li>
        <li>
          <strong>Independent counsel.</strong> Each party should have
          their own attorney. A waiver of independent counsel is possible
          but is one of the first things a court scrutinizes if the
          agreement is challenged later.
        </li>
        <li>
          <strong>Not unconscionable.</strong> The agreement cannot be so
          one-sided that no reasonable person would have entered into it.
        </li>
        <li>
          <strong>Substantive fairness.</strong> While Florida does not
          require a prenup to be &ldquo;fair&rdquo; in the sense of
          mirroring what a court would order, it must not be the product of
          fraud, duress, coercion, or overreaching.
        </li>
      </ul>

      <h2>Timing Matters</h2>
      <p>
        The single most effective way to strengthen a prenup is to draft
        and sign it well before the wedding. Thirty days minimum is a
        good benchmark. Ninety days or more is better. Signing close to
        the wedding creates a presumption of duress that opposing counsel
        will exploit if the marriage ends.
      </p>

      <h2>Postnuptial Agreements</h2>
      <p>
        A <strong>postnuptial agreement</strong> is the same kind of
        contract signed <em>after</em> the marriage has started. Postnups
        address similar issues but are subject to heightened scrutiny in
        Florida because the parties are no longer operating at
        arm&apos;s length. They are valuable when circumstances change
        &mdash; a new business, a significant inheritance, a one-spouse
        windfall &mdash; and the couple wants to memorialize a new
        arrangement going forward.
      </p>

      <h2>Enforcement in Divorce</h2>
      <p>
        When a couple with a prenup later divorces, the first question
        the court addresses is enforceability. A well-drafted prenup
        typically stands; a rushed or one-sided prenup often falls apart.
        If the prenup is enforced, it replaces Florida&apos;s default
        rules on{" "}
        <Link href="/divorce/equitable-distribution">
          equitable distribution
        </Link>{" "}
        and <Link href="/divorce/alimony">alimony</Link>.
      </p>

      <h2>How I Can Help</h2>
      <p>
        Whether you are drafting your first prenup, revising an old one,
        negotiating as the receiving spouse, or challenging a prenup in
        divorce, I have over 25 years of Florida family-law experience to
        draw on. Call <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
