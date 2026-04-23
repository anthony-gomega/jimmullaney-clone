import InnerPage from "../components/InnerPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Law Office of A. James Mullaney",
  description:
    "At the Law Office of A. James Mullaney, we are committed to protecting your privacy.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <InnerPage
      title="Privacy Policy"
      breadcrumbs={[{ label: "Privacy Policy" }]}
      showSidebar={false}
    >
      <p>
        At the Law Office of A. James Mullaney, we are committed to protecting
        your privacy and ensuring the security of your personal information.
        This Privacy Policy explains how we collect, use, and protect your
        information when you visit our website or contact us.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect the following types of information when you visit our
        website or contact us:
      </p>
      <ul>
        <li>Name, email address, and phone number provided through our contact forms</li>
        <li>Information you provide about your legal matter</li>
        <li>IP address, browser type, and usage information</li>
        <li>Cookies and similar tracking technologies</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide legal services</li>
        <li>To improve our website and user experience</li>
        <li>To send updates about our services (with your consent)</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>Attorney-Client Privilege</h2>
      <p>
        Communications through our website contact form do not create an
        attorney-client relationship. Do not send confidential information
        through our website. An attorney-client relationship is only formed
        after we have formally agreed to represent you.
      </p>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information. We may share
        information only:
      </p>
      <ul>
        <li>With your consent</li>
        <li>To comply with legal requirements</li>
        <li>With service providers who help operate our website (under confidentiality agreements)</li>
      </ul>

      <h2>Security</h2>
      <p>
        We use reasonable security measures to protect your information.
        However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to request access to, correction of, or deletion of
        your personal information. Contact us at 904-858-4334 with any
        requests.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will be posted on our website.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a>.
      </p>
    </InnerPage>
  );
}
