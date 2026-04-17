import InnerPage from "../components/InnerPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer - Law Office of A. James Mullaney",
  description: "Website disclaimer for the Law Office of A. James Mullaney.",
};

export default function DisclaimerPage() {
  return (
    <InnerPage
      title="Disclaimer"
      breadcrumbs={[{ label: "Disclaimer" }]}
      showSidebar={false}
    >
      <h2>No Attorney-Client Relationship</h2>
      <p>
        The information on this website is for general informational purposes
        only. Nothing on this site should be taken as legal advice for any
        individual case or situation. This information is not intended to
        create, and receipt or viewing does not constitute, an attorney-client
        relationship.
      </p>

      <h2>Not Legal Advice</h2>
      <p>
        Information on this website should not be used as a substitute for
        legal advice from a licensed attorney. You should not act or refrain
        from acting on the basis of any content included on this website
        without seeking legal advice concerning your particular facts and
        circumstances from an attorney licensed in your jurisdiction.
      </p>

      <h2>No Guarantee of Results</h2>
      <p>
        Past results do not guarantee future outcomes. Every case is different
        and results depend on the specific facts and legal issues involved.
      </p>

      <h2>Advertising</h2>
      <p>
        The hiring of a lawyer is an important decision that should not be
        based solely on advertisements. Before you decide, ask us to send you
        free written information about our qualifications and experience.
      </p>

      <h2>Jurisdictional Limitations</h2>
      <p>
        A. James Mullaney is licensed to practice law in Florida and Georgia.
        This website is not intended to solicit clients from jurisdictions
        where we are not licensed to practice law.
      </p>

      <h2>Address</h2>
      <p>
        Law Office of A. James Mullaney
        <br />
        8777 San Jose Blvd. Ste. 302
        <br />
        Jacksonville, FL 32217
        <br />
        Phone: <a href="tel:+1-904-364-4565">904-364-4565</a>
      </p>
    </InnerPage>
  );
}
