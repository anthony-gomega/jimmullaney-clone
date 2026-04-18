import InnerPage from "../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Alimony Lawyer | Law Office of A. James Mullaney",
  description:
    "I have over 24 years of experience as an alimony lawyer in Jacksonville. Contact me if you need help with any alimony or family law issue.",
  alternates: { canonical: "/divorce/alimony" }
};

export default function AlimonyPage() {
  return (
    <InnerPage
      title="Jacksonville Alimony Lawyer"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Alimony" },
      ]}
    >
      <p>
        Alimony, also known as spousal support, is a payment from one spouse to
        another following a divorce. In Florida, alimony is designed to help
        the lower-earning spouse maintain a standard of living similar to what
        was enjoyed during the marriage.
      </p>

      <h2>Types of Alimony in Florida</h2>
      <ul>
        <li>
          <strong>Temporary alimony:</strong> Paid during the divorce process.
        </li>
        <li>
          <strong>Bridge-the-gap alimony:</strong> Short-term support to help
          transition from married to single life (up to 2 years).
        </li>
        <li>
          <strong>Rehabilitative alimony:</strong> Helps a spouse gain
          education or training needed to become self-supporting.
        </li>
        <li>
          <strong>Durational alimony:</strong> Support for a set period, not
          to exceed the length of the marriage.
        </li>
      </ul>
      <p>
        Note: Florida permanent alimony has been eliminated by the 2023 reform
        law. All new alimony cases are subject to the updated framework.
      </p>

      <h2>Factors Considered</h2>
      <p>Florida courts consider numerous factors in determining alimony:</p>
      <ul>
        <li>Standard of living during the marriage</li>
        <li>Length of the marriage</li>
        <li>Age and physical/emotional condition of each spouse</li>
        <li>Financial resources of each spouse</li>
        <li>Earning capacities and education</li>
        <li>Contributions to the marriage (including homemaker)</li>
        <li>Tax consequences</li>
        <li>All sources of income</li>
      </ul>

      <h2>How I Can Help</h2>
      <p>
        Whether you are seeking alimony or trying to minimize what you pay, I
        can help. I have decades of experience negotiating alimony provisions
        in settlement agreements and litigating contested alimony claims.
        Contact me at <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">online</Link>.
      </p>
    </InnerPage>
  );
}
