import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Law - Law Office of A. James Mullaney",
  description: "Jacksonville family law firm with over 24 years of experience.",
};

export default function FamilyLawPage() {
  return (
    <InnerPage title="Family Law" breadcrumbs={[{ label: "Family Law" }]}>
      <p>
        Family law encompasses a broad range of legal matters that affect
        families. At the Law Office of A. James Mullaney, I handle all types of
        family law cases.
      </p>

      <h2>Our Family Law Practice Areas</h2>
      <ul>
        <li><Link href="/divorce">Divorce</Link></li>
        <li><Link href="/divorce/uncontested-divorce-in-jacksonville-fl">Uncontested Divorce</Link></li>
        <li><Link href="/divorce/contested-divorce">Contested Divorce</Link></li>
        <li><Link href="/divorce/collaborative-divorce">Collaborative Divorce</Link></li>
        <li><Link href="/divorce/divorce-mediation-in-jacksonville">Divorce Mediation</Link></li>
        <li><Link href="/divorce/alimony">Alimony</Link></li>
        <li><Link href="/divorce/child-support">Child Support</Link></li>
        <li><Link href="/divorce/equitable-distribution">Equitable Distribution</Link></li>
        <li><Link href="/divorce/military-issues">Military Divorce</Link></li>
        <li><Link href="/paternity">Paternity</Link></li>
        <li><Link href="/time-sharing-and-visitation-in-florida">Parenting Plans &amp; Time-Sharing</Link></li>
        <li><Link href="/prenuptial-agreements">Prenuptial Agreements</Link></li>
        <li><Link href="/annulment-lawyer-in-jacksonville">Annulment</Link></li>
        <li><Link href="/domestic-violence">Domestic Violence</Link></li>
        <li><Link href="/modifications">Modifications</Link></li>
        <li><Link href="/contempt">Contempt</Link></li>
      </ul>

      <p>
        Call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
