import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Map | Law Office of A. James Mullaney",
  description: "Site map for the Law Office of A. James Mullaney.",
  alternates: { canonical: "/site-map" }
};

const sections = [
  {
    heading: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Attorney - A. James Mullaney", href: "/attorney/mullaney-a-james" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ Videos", href: "/videos" },
      { label: "Jacksonville Divorce Law Office", href: "/jacksonville-divorce-law-office" },
      { label: "Family Law", href: "/family-law" },
    ],
  },
  {
    heading: "Divorce",
    links: [
      { label: "Divorce", href: "/divorce" },
      { label: "Uncontested Divorce", href: "/divorce/uncontested-divorce-in-jacksonville-fl" },
      { label: "Contested Divorce", href: "/divorce/contested-divorce" },
      { label: "Collaborative Divorce", href: "/divorce/collaborative-divorce" },
      { label: "Divorce Mediation", href: "/divorce/divorce-mediation-in-jacksonville" },
      { label: "Alimony", href: "/divorce/alimony" },
      { label: "Child Support", href: "/divorce/child-support" },
      { label: "Equitable Distribution", href: "/divorce/equitable-distribution" },
      { label: "Military Issues", href: "/divorce/military-issues" },
    ],
  },
  {
    heading: "Family Law Matters",
    links: [
      { label: "Parenting Plans / Time-Sharing", href: "/time-sharing-and-visitation-in-florida" },
      { label: "Paternity", href: "/paternity" },
      { label: "Annulment", href: "/annulment-lawyer-in-jacksonville" },
      { label: "Prenuptial Agreements", href: "/prenuptial-agreements" },
      { label: "Domestic Violence", href: "/domestic-violence" },
      { label: "Modifications", href: "/modifications" },
      { label: "Contempt", href: "/contempt" },
    ],
  },
  {
    heading: "Tools & Resources",
    links: [
      { label: "Florida Child Support Calculator", href: "/florida-child-support-calculator" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Site Map", href: "/site-map" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <InnerPage title="Site Map" breadcrumbs={[{ label: "Site Map" }]} showSidebar={false}>
      <p>
        A. James Mullaney | Family Law Attorney &amp; Mediator
      </p>
      <p>
        Contact: 8777 San Jose Blvd. Ste. 302, Jacksonville, FL 32217
        <br />
        Phone: <a href="tel:+1-904-364-4565">904-364-4565</a>
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </InnerPage>
  );
}
