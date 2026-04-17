import InnerPage from "../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Jacksonville - Law Office of A. James Mullaney",
  description:
    "Family law blog from the Law Office of A. James Mullaney in Jacksonville, FL.",
};

const posts = [
  {
    title: "Dividing High-Value Real Estate in an Uncontested Jacksonville Divorce",
    excerpt:
      "When couples divorce in Jacksonville, dividing high-value real estate is often one of the most complex parts of the process...",
    date: "March 2026",
    href: "/blog/2026/03/dividing-high-value-real-estate-in-an-uncontested-jacksonville-divorce",
  },
  {
    title: "The Kitchen Table Divorce: Turning Your Verbal Agreement Into a Legal Reality",
    excerpt:
      "Many couples come to a mutual understanding before seeking legal advice. Here's how to turn that verbal agreement into an enforceable court order...",
    date: "March 2026",
    href: "/blog/2026/03/the-kitchen-table-divorce-turning-your-verbal-agreement-into-a-legal-reality",
  },
  {
    title: "The Divorce Finish Line: How Fast Can We Really Get an Uncontested Divorce in Florida?",
    excerpt:
      "Clients often ask how quickly an uncontested divorce can be completed. The answer depends on several factors...",
    date: "January 2026",
    href: "/blog/2026/01/the-divorce-finish-line-how-fast-can-we-really-get-an-uncontested-divorce-in-florida",
  },
  {
    title: "How Can Uncontested Divorce Provide a Lower-Stress Way to End a Marriage?",
    excerpt:
      "Uncontested divorce is often the most peaceful and efficient way to dissolve a marriage. Here's why...",
    date: "June 2025",
    href: "/blog/2025/06/how-can-uncontested-divorce-provide-a-lower-stress-way-to-end-a-marriage",
  },
  {
    title: "Does Divorce Hurt Your Credit Score?",
    excerpt:
      "The quick answer is yes, but only in some situations. Your credit score is not automatically affected by your divorce...",
    date: "July 2017",
    href: "/blog/2017/07/does-divorce-hurt-your-credit-score",
  },
  {
    title: "4 Common Life Changes After Divorce",
    excerpt:
      "When many couples divorce, they expect their Parenting Plan to cover the time sharing for their child...",
    date: "June 2016",
    href: "/blog/2016/06/4-common-life-changes-after-divorce",
  },
];

export default function BlogPage() {
  return (
    <InnerPage title="Blog" breadcrumbs={[{ label: "Blog" }]}>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.href} className="pb-8 border-b border-gray-200 last:border-b-0">
            <h2 style={{ borderBottom: "none", marginTop: 0 }}>
              <Link href={post.href}>{post.title}</Link>
            </h2>
            <p className="text-sm text-gray-500 italic">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
            <Link
              href={post.href}
              className="inline-block mt-2 text-[#C93523] font-semibold"
            >
              Read more &rarr;
            </Link>
          </article>
        ))}
      </div>
    </InnerPage>
  );
}
