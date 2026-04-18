import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Legal FAQ Videos | Law Office of A. James Mullaney",
  description:
    "Answers to common Florida family-law questions about divorce, child support, alimony, parenting time, paternity and more — in short, easy-to-digest videos.",
  alternates: { canonical: "/videos" },
};

type Video = { title: string; id: string };

const categories: { heading: string; items: Video[] }[] = [
  {
    heading: "Divorce",
    items: [
      { title: "What are the residency requirements to file for divorce in Florida?", id: "ROgZXWZ0p9c" },
      { title: "What if my spouse cannot be found for service of the divorce papers?", id: "JsuunltjTxI" },
      { title: "How long does a divorce take in Florida?", id: "R50WgVND6_I" },
      { title: "What is the cost of a divorce in Florida?", id: "PGQa_NIyQMk" },
      { title: "Do I need grounds to file for divorce in Florida?", id: "iaWi40OFAYc" },
      { title: "What should I expect at the initial consultation?", id: "fDJsL5_SW4I" },
    ],
  },
  {
    heading: "Uncontested Divorce",
    items: [
      { title: "What happens at the final hearing for an uncontested divorce?", id: "s47znaGLvt4" },
      { title: "Uncontested vs. simplified divorce — what's the difference?", id: "Fab5ftWPjF0" },
      { title: "Online uncontested divorce vs. attorney-assisted — pros and cons", id: "nt6JflpA3go" },
      { title: "Step-by-step guide to filing an uncontested divorce in Jacksonville", id: "DQmBo06znfg" },
      { title: "What is a Marital Settlement Agreement?", id: "kMYTqKYxYcI" },
    ],
  },
  {
    heading: "Mediation",
    items: [
      { title: "Why should a couple getting a divorce consider mediation?", id: "u4i8H8Zxi3c" },
      { title: "What happens during a family-law mediation session?", id: "qd1OFuCnuWM" },
      { title: "Is mediation required in my Florida family-law case?", id: "MC7TWfvYzvw" },
    ],
  },
  {
    heading: "Child Support",
    items: [
      { title: "How is child support calculated in Florida?", id: "TI_YTxuWES8" },
      { title: "What factors does the judge consider when calculating child support?", id: "FhquOYhkbRg" },
      { title: "How can I legally reduce my child support in Florida?", id: "0GUl1g_n1Jo" },
      { title: "Explanation of a Florida Child Support Guidelines Worksheet", id: "FrUXPjfB6iI" },
      { title: "How does alimony affect a Florida child-support calculation?", id: "Ga8N6JYZd6E" },
    ],
  },
  {
    heading: "Alimony",
    items: [
      { title: "What types of alimony are available in Florida?", id: "DKyb4aPALOo" },
      { title: "How is the amount of alimony determined?", id: "xqNAFFS35-Q" },
      { title: "How long does alimony last under the new Florida law?", id: "JAmE54L1zd0" },
    ],
  },
  {
    heading: "Parenting Plans & Time-Sharing",
    items: [
      { title: "What is a parenting plan in Florida?", id: "a1W2-tRHXPQ" },
      { title: "How does Florida's equal time-sharing presumption work?", id: "fkMQPzKEGTg" },
      { title: "Can the children choose which parent to live with?", id: "Vi-GWdlaJKI" },
    ],
  },
  {
    heading: "Relocations",
    items: [
      { title: "What happens if the other parent objects to my relocation with our child?", id: "ntt36uF7Pqg" },
      { title: "What is the process for a parental relocation petition?", id: "hL1mc96PV9w" },
    ],
  },
  {
    heading: "Paternity",
    items: [
      { title: "I was served with child-support papers — I am not the father. What should I do?", id: "sLd1uJJN3HI" },
      { title: "How do unmarried fathers establish legal paternity?", id: "k7XrcEbDd9Y" },
      { title: "Does a DNA test have to be court-ordered?", id: "X-91sHqO-Bo" },
    ],
  },
  {
    heading: "Equitable Distribution",
    items: [
      { title: "What happens to an IRA or 401(k) in a Florida divorce?", id: "7qmi9ZjDKuQ" },
      { title: "How is the marital home divided?", id: "3dncwibMt0M" },
      { title: "What is a marital vs. non-marital asset?", id: "bz5MMevZs2U" },
    ],
  },
  {
    heading: "Annulment",
    items: [
      { title: "How long after I get married can I still get an annulment?", id: "KgjEB3PCZ6w" },
      { title: "What are the grounds for annulment in Florida?", id: "yA9fv9dud5g" },
    ],
  },
  {
    heading: "Domestic Violence",
    items: [
      { title: "What happens at a domestic-violence injunction hearing?", id: "54bwCKvpCmU" },
      { title: "How do I get a domestic-violence injunction in Florida?", id: "fl8meHsv9dA" },
    ],
  },
];

export default function VideosPage() {
  return (
    <InnerPage
      title="Family Legal FAQ Videos"
      breadcrumbs={[{ label: "Videos" }]}
      showSidebar={false}
    >
      <p>
        I have recorded a library of short videos answering the Florida
        family-law questions clients ask most often — from divorce timelines
        and child-support math to parenting plans and paternity. Each video
        is a short, plain-English answer. For the full collection, visit{" "}
        <a
          href="https://www.youtube.com/@Jimmullaney"
          target="_blank"
          rel="noopener noreferrer"
        >
          my YouTube channel
        </a>
        .
      </p>

      {/* Welcome video */}
      <div className="my-10">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/BeM5Fka4pHc"
            title="Welcome — Jacksonville Divorce & Family Law Attorney"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="text-sm italic mt-2 text-center">
          Welcome — Jacksonville Divorce &amp; Family Law Attorney
        </p>
      </div>

      {/* Category index */}
      <nav
        className="bg-[#FAF7F2] p-6 my-10"
        aria-label="Video categories"
      >
        <h2
          className="text-[18px] font-semibold uppercase tracking-wider mb-4 text-[#03254B]"
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            borderBottom: "none",
            marginTop: 0,
          }}
        >
          Jump to a Topic
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-6 text-[14px] list-none pl-0">
          {categories.map((c) => (
            <li key={c.heading} className="pl-0">
              <a
                href={`#${c.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className="text-[#03254B] hover:text-[#8B2635] no-underline"
              >
                {c.heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {categories.map((cat) => (
        <section
          key={cat.heading}
          id={cat.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
          className="my-12 scroll-mt-24"
        >
          <h2>{cat.heading}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cat.items.map((v) => (
              <div key={v.id + v.title}>
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <h3
                  className="text-[16px] mt-3 text-[#03254B]"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontWeight: 500,
                  }}
                >
                  {v.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className="mt-12">
        More videos are published regularly on{" "}
        <a
          href="https://www.youtube.com/@Jimmullaney"
          target="_blank"
          rel="noopener noreferrer"
        >
          my YouTube channel
        </a>
        . If there is a topic you&apos;d like me to cover, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
