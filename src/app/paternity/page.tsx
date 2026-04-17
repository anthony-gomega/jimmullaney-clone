import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Paternity Lawyer | Law Office of A. James Mullaney",
  description:
    "Do you need to establish paternity? You can turn to me, a caring Jacksonville paternity lawyer with over 24 years of experience serving Florida and Georgia.",
};

export default function PaternityPage() {
  return (
    <InnerPage title="Jacksonville Paternity Lawyer" breadcrumbs={[{ label: "Paternity" }]}>
      <p>
        When a woman gives birth, the state automatically assumes that she is
        the baby&apos;s biological mother. If she is married, the state assumes
        that the husband is the child&apos;s biological father. When parents
        are not married or one of them has doubt regarding the child&apos;s
        biological father, they must establish paternity.
      </p>
      <p>
        As a family law attorney with over 24 years of experience, I can help
        you. When you work with me at the Law Office of A. James Mullaney, you
        can expect knowledgeable guidance, excellent communication and a
        commitment to finding mutually satisfactory solutions calmly.
      </p>

      <h2>Legal Paternity For Unmarried Or Nonbiological Parents</h2>
      <p>
        A paternity action takes place when a child is born to parents who are
        not married. A paternity case commonly arises in the following ways:
      </p>
      <ul>
        <li>By a mother seeking child support from the father.</li>
        <li>By a father trying to establish visitation with the child.</li>
      </ul>
      <p>
        When a child is born to unmarried parents, the mother, by statute, is
        the guardian of the child. Basically, a father has no rights even if
        his name appears on the birth certificate. In fact, with a few
        exceptions, an unmarried mother can give her child up for adoption
        without the biological father&apos;s knowledge or consent.
      </p>
      <p>
        A father must be declared by the court to have any rights (i.e.,{" "}
        <Link href="/time-sharing-and-visitation-in-florida">
          custody or visitation
        </Link>
        ) or obligations (i.e., child support) regarding the child. If either
        parent has any question as to whether the father is the actual
        biological father, a DNA paternity test must be requested and ordered
        by the court. If both parents agree that the father is the biological
        father, then no test is needed.
      </p>

      <h2>Guidance From An Experienced Jacksonville Paternity Lawyer</h2>
      <p>
        Establishing paternity in Florida is a crucial step for parents to
        define their legal rights and responsibilities. After establishing
        paternity, either by mutual agreement or a positive DNA test, it opens
        the door to addressing two primary issues:
      </p>
      <ul>
        <li>
          <strong>Time-sharing:</strong> Often referred to as visitation, this
          determines how parents will divide their time with the child. A
          detailed parenting plan is typically developed to outline the
          time-sharing schedule, including holidays and special occasions.
        </li>
        <li>
          <strong>
            <Link href="/divorce/child-support">Child support</Link>:
          </strong>{" "}
          Ensures that the child&apos;s financial needs are met. The court
          calculates the amount based on state guidelines, which consider
          factors like each parent&apos;s income, the number of overnight stays
          and any special needs of the child.
        </li>
      </ul>
      <p>
        Establishing paternity is not only vital for addressing these issues
        but also for securing a child&apos;s right to benefits such as health
        insurance, inheritance and access to medical history. Additionally,
        paternity can impact other family law matters, such as custody
        disputes, making it essential to seek guidance from an experienced
        Jacksonville paternity attorney who can advocate for the best interests
        of both the parent and child.
      </p>

      <h2>Enforce Your Rights With The Help Of A Jacksonville Paternity Lawyer</h2>
      <p>
        If a paternity case has been filed against you, or if you would like to
        start a paternity case, you should consult with a Jacksonville
        paternity lawyer. You will find capable legal counsel with me at the
        Law Office of A. James Mullaney. Please call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">send me an email</Link> to schedule a
        consultation.
      </p>
    </InnerPage>
  );
}
