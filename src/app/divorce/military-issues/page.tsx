import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Military Divorce Lawyer | NAS Jax, Mayport, Kings Bay",
  description:
    "Military divorce attorney experienced in USFSPA, SCRA, Survivor Benefit Plan, and deployment-sensitive time-sharing for Jacksonville service members and spouses.",
  alternates: { canonical: "/divorce/military-issues" },
};

export default function MilitaryDivorcePage() {
  return (
    <InnerPage
      title="Jacksonville Military Divorce Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Military Issues" },
      ]}
    >
      <p>
        Jacksonville sits between three major military installations &mdash;
        NAS Jacksonville, NS Mayport, and Naval Submarine Base Kings Bay
        across the Georgia line &mdash; so military divorce is a significant
        part of my practice. These cases look like civilian divorces at the
        surface but involve a layer of federal law (USFSPA, SCRA, SGLI,
        SBP, TRICARE) that civilian practitioners often miss. Small
        mistakes &mdash; like signing a settlement that fails the
        10/10 rule &mdash; can cost a former spouse tens of thousands of
        dollars in retirement benefits they were entitled to.
      </p>

      <h2>Division of Military Retired Pay</h2>
      <p>
        The <strong>Uniformed Services Former Spouses&apos; Protection Act
        (10 U.S.C. §1408)</strong> governs the division of military
        retired pay in divorce. USFSPA allows state courts to treat military
        retirement as marital property divisible in divorce, but it imposes
        specific rules:
      </p>
      <ul>
        <li>
          <strong>The 10/10 rule.</strong> For a former spouse to receive
          their retirement share <em>directly</em> from DFAS (the Defense
          Finance and Accounting Service), the marriage must have overlapped
          the service member&apos;s creditable service by at least 10 years.
          Shorter marriages can still divide the pay, but the service member
          pays the former spouse directly.
        </li>
        <li>
          <strong>The 20/20/20 rule.</strong> A former spouse whose marriage,
          overlap with service, and service all equal or exceed 20 years
          keeps TRICARE, commissary, and exchange privileges for life.
        </li>
        <li>
          <strong>The 20/20/15 rule.</strong> 15 years of overlap gets one
          year of transitional TRICARE after the divorce.
        </li>
        <li>
          <strong>The Frozen Benefit Rule (2017 NDAA).</strong> For
          divorces finalized after December 23, 2016, the former
          spouse&apos;s share is calculated based on the service
          member&apos;s rank and years of service as of the date of divorce
          &mdash; not the date of retirement. This change reduced former-
          spouse awards significantly and affects how settlement agreements
          should be drafted.
        </li>
      </ul>

      <h2>Survivor Benefit Plan (SBP)</h2>
      <p>
        A retired service member&apos;s pension ends at their death unless
        they are enrolled in SBP. Former spouses are eligible SBP
        beneficiaries &mdash; but only if SBP is elected within one year of
        the divorce, usually by a court order called a &ldquo;Deemed
        Election.&rdquo; Missing the one-year window generally ends the
        opportunity forever. This is one of the most common and costly
        drafting mistakes civilian attorneys make in military divorce.
      </p>

      <h2>Servicemembers Civil Relief Act (SCRA)</h2>
      <p>
        The <strong>SCRA (50 U.S.C. App. §§3901&ndash;4043)</strong>
        provides active-duty service members with significant procedural
        protections against civil legal actions &mdash; including divorce.
        A service member on deployment can often obtain a stay of civil
        proceedings if they cannot participate due to military duties.
        Judges routinely grant 90-day stays and sometimes longer. The
        spouse filing for divorce should be prepared for these timelines.
      </p>

      <h2>BAH, BAS, and Other Allowances</h2>
      <p>
        Military pay includes not just base pay but allowances for housing
        (BAH), subsistence (BAS), clothing, and special-duty pay. For
        Florida{" "}
        <Link href="/divorce/child-support">child support</Link> and
        <Link href="/divorce/alimony"> alimony</Link> purposes, BAH and BAS
        are treated as income even though they are tax-free. The Leave and
        Earnings Statement (LES) is the starting point for any military
        income analysis, but it does not tell the whole story &mdash; bonus
        pay, re-enlistment bonuses, and special pays often need to be
        separately documented.
      </p>

      <h2>TRICARE</h2>
      <p>
        A former spouse who does not qualify for continued TRICARE under
        20/20/20 or 20/20/15 loses coverage at divorce. DEERS must be
        updated. The <strong>Continued Health Care Benefit Program
        (CHCBP)</strong> offers a transitional 36-month policy the former
        spouse can buy into.
      </p>

      <h2>Deployment and Time-Sharing</h2>
      <p>
        Florida law specifically addresses how{" "}
        <Link href="/time-sharing-and-visitation-in-florida">
          time-sharing
        </Link>{" "}
        works when a parent is deployed. A parent&apos;s deployment
        <em> cannot</em> be the sole basis for permanent modification of a
        parenting plan. Temporary arrangements during deployment &mdash;
        including delegation of time-sharing to a relative such as a
        grandparent &mdash; are permitted and expire when the parent
        returns.
      </p>

      <h2>Jurisdiction and Residency Issues</h2>
      <p>
        Military families frequently face jurisdictional puzzles. A service
        member stationed in Jacksonville but a legal resident of another
        state can typically file in Florida if their spouse is a Florida
        resident or the service member has established Florida
        residency. The 50 U.S.C. §4001(a)(3) presumption lets military
        personnel claim domicile in the state of residence even if
        temporarily stationed elsewhere.
      </p>

      <h2>Common Settlement-Drafting Errors to Avoid</h2>
      <ul>
        <li>Describing the military pension in civilian QDRO terms (the DFAS form and specific language are required)</li>
        <li>Failing to elect or deem SBP within the one-year window</li>
        <li>Using old &ldquo;time rule&rdquo; language after the 2017 Frozen Benefit Rule</li>
        <li>Not addressing disability waivers that can convert retired pay into non-divisible VA disability</li>
        <li>Missing the ability to offset a concurrent-receipt reduction</li>
      </ul>

      <h2>How I Can Help</h2>
      <p>
        I have represented active-duty service members, retirees, reservists,
        and military spouses in Florida and Georgia for over 25 years. I
        know the DFAS process, the SBP deadlines, the local court practice
        around deployment stays, and the drafting language that actually
        works. Call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
