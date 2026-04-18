import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Family Law Attorney | Law Office of A. James Mullaney",
  description:
    "A full-service Jacksonville family-law practice: uncontested divorce, mediation, contested divorce, paternity, child support, time-sharing, and more. Call 904-364-4565.",
  alternates: { canonical: "/family-law" },
};

export default function FamilyLawPage() {
  return (
    <InnerPage title="Jacksonville Family Law" breadcrumbs={[{ label: "Family Law" }]}>
      <p>
        Family law is the branch of the law that governs the legal
        relationships between spouses, parents, and children. At the Law
        Office of A. James Mullaney, I have spent over 25 years practicing
        family law exclusively &mdash; meaning this is not one area among
        many. It is all I do, and it is all I have done since opening my own
        Jacksonville practice in 2000.
      </p>

      <h2>A Two-Focus Practice</h2>
      <p>
        While I handle the full breadth of Florida family-law matters, my
        practice is increasingly centered on two services where I believe I
        provide the most value to clients:
      </p>
      <ul>
        <li>
          <strong>
            <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
              Uncontested divorce
            </Link>
            :
          </strong>{" "}
          When couples can reach agreement on the terms of their divorce, I
          draft a comprehensive marital settlement agreement, handle the
          filing, and represent them at the single final hearing &mdash;
          typically concluding in weeks at a fraction of contested-litigation
          cost.
        </li>
        <li>
          <strong>
            <Link href="/divorce/divorce-mediation-in-jacksonville">
              Family law mediation
            </Link>
            :
          </strong>{" "}
          As a Florida Supreme Court&ndash;certified family court mediator, I
          help couples negotiate their own agreements, staying out of court
          altogether.
        </li>
      </ul>
      <p>
        Coming to an agreement &mdash; whether you negotiate it yourselves,
        reach it in mediation, or craft it in a collaborative process &mdash;
        saves most families a small fortune in legal fees, months of their
        lives, and significant emotional wear on children.
      </p>

      <h2>Divorce &amp; Related Issues</h2>
      <ul>
        <li>
          <Link href="/divorce">Divorce (overview)</Link>
        </li>
        <li>
          <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
            Uncontested Divorce
          </Link>
        </li>
        <li>
          <Link href="/divorce/contested-divorce">Contested Divorce</Link>
        </li>
        <li>
          <Link href="/divorce/collaborative-divorce">
            Collaborative Divorce
          </Link>
        </li>
        <li>
          <Link href="/divorce/divorce-mediation-in-jacksonville">
            Divorce Mediation
          </Link>
        </li>
        <li>
          <Link href="/divorce/alimony">Alimony</Link>
        </li>
        <li>
          <Link href="/divorce/equitable-distribution">
            Equitable Distribution
          </Link>
        </li>
        <li>
          <Link href="/divorce/military-issues">Military Divorce</Link>
        </li>
        <li>
          <Link href="/annulment-lawyer-in-jacksonville">Annulment</Link>
        </li>
      </ul>

      <h2>Children &amp; Co-Parenting</h2>
      <ul>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida">
            Parenting Plans &amp; Time-Sharing
          </Link>
        </li>
        <li>
          <Link href="/time-sharing-and-visitation-in-florida/relocations">
            Parental Relocations
          </Link>
        </li>
        <li>
          <Link href="/divorce/child-support">Child Support</Link>
        </li>
        <li>
          <Link href="/paternity">Paternity</Link>
        </li>
        <li>
          <Link href="/florida-child-support-calculator">
            Free Florida Child Support Calculator
          </Link>
        </li>
      </ul>

      <h2>Planning &amp; Protection</h2>
      <ul>
        <li>
          <Link href="/prenuptial-agreements">Prenuptial Agreements</Link>
        </li>
        <li>
          <Link href="/domestic-violence">Domestic Violence Injunctions</Link>
        </li>
      </ul>

      <h2>Post-Judgment Matters</h2>
      <ul>
        <li>
          <Link href="/modifications">
            Modifications of prior court orders
          </Link>
        </li>
        <li>
          <Link href="/contempt">Contempt &amp; enforcement</Link>
        </li>
      </ul>

      <h2>Geographic Reach</h2>
      <p>
        I am licensed to practice in both Florida and Georgia. My courtroom
        appearances regularly take me to Duval, Clay, St. Johns, Nassau,
        Ware, Charlton, and Camden counties. In the age of video
        conferencing, I can also appear in most other Florida counties
        remotely.
      </p>

      <p>
        To discuss your family law matter, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
