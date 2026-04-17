import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Military Divorce Lawyer | Law Office of A. James Mullaney",
  description:
    "Hire an experienced Jacksonville military divorce lawyer to help with benefits, asset division and more. I am here to help you with military divorce issues.",
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
        Military divorces involve unique issues that civilian divorces do not.
        Jacksonville is home to NAS Jacksonville, NS Mayport, and is near
        Kings Bay. I have extensive experience representing active duty
        service members, veterans, and military spouses.
      </p>

      <h2>Unique Military Divorce Issues</h2>
      <ul>
        <li>
          <strong>USFSPA (10 USC &sect; 1408):</strong> Federal law that
          governs the division of military retirement pay.
        </li>
        <li>
          <strong>Servicemembers Civil Relief Act (SCRA):</strong> Provides
          protections for active duty members facing civil legal matters.
        </li>
        <li>
          <strong>Military pensions:</strong> Division of retired pay under the
          10/10 rule and the 20/20/20 rule.
        </li>
        <li>
          <strong>TRICARE benefits:</strong> Eligibility and continuation of
          health coverage.
        </li>
        <li>
          <strong>BAH and allowances:</strong> How housing and other
          allowances affect support calculations.
        </li>
        <li>
          <strong>Survivor Benefit Plan (SBP):</strong> Important considerations
          for former spouses.
        </li>
        <li>
          <strong>Deployment and custody:</strong> How deployment affects
          time-sharing arrangements.
        </li>
      </ul>

      <h2>Jurisdictional Considerations</h2>
      <p>
        Military families often have complex jurisdictional questions. Where
        can you file? Florida generally allows filing if you, your spouse, or
        the service member is stationed in Florida.
      </p>

      <p>
        If you or your spouse is in the military, call me at{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
