import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacksonville Divorce Law Office",
  description:
    "Law Office of A. James Mullaney, 8777 San Jose Blvd. Ste. 302, Jacksonville, FL 32217. Telephone: 904-364-4565.",
};

export default function OfficePage() {
  return (
    <InnerPage
      title="Jacksonville Divorce Law Office"
      breadcrumbs={[{ label: "Office" }]}
      showSidebar={false}
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2>Office Location</h2>
          <p>
            <strong>Law Office of A. James Mullaney</strong>
            <br />
            8777 San Jose Blvd. Ste. 302
            <br />
            Jacksonville, FL 32217
            <br />
            Telephone: <a href="tel:+1-904-364-4565">904-364-4565</a>
          </p>
          <h2>Office Hours</h2>
          <p>
            Monday - Friday: 9:00 AM - 5:00 PM
            <br />
            Evenings and weekends by appointment.
          </p>
          <h2>Parking</h2>
          <p>Free parking is available at the office.</p>
          <h2>Directions</h2>
          <p>
            My office is conveniently located just north of the intersection of
            Baymeadows Road and San Jose Boulevard in Jacksonville.
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.4!2d-81.61!3d30.22!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJacksonville%20FL"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <p>
        To contact the firm, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or use my{" "}
        <Link href="/contact">online contact form</Link>.
      </p>
    </InnerPage>
  );
}
