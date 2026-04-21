import Link from "next/link";
import { JsonLd } from "./StructuredData";

/**
 * Seven Florida family-law FAQs optimized for Answer Engine Optimization
 * (AEO) — short, direct, statute-specific answers that LLMs and search
 * engines lift cleanly into featured snippets and AI overviews.
 *
 * Each answer opens with the direct answer in the first 1–2 sentences
 * (the portion most commonly extracted), followed by 1–3 lines of supporting
 * detail. The whole set is also emitted as FAQPage JSON-LD so Google,
 * Bing, and AI assistants index the Q&A pairs.
 */

type FAQ = {
  q: string;
  /** Short plain-text answer for schema (no HTML) */
  aPlain: string;
  /** Rich React body for page display (can include links / emphasis) */
  a: React.ReactNode;
};

const faqs: FAQ[] = [
  {
    q: "How long does a divorce take in Florida?",
    aPlain:
      "An uncontested divorce in Florida typically takes 30 to 90 days from filing to final judgment. Florida requires a mandatory 20-day waiting period between filing and the final hearing. Contested divorces usually take 6 to 18 months or longer.",
    a: (
      <p>
        An uncontested divorce in Florida typically takes{" "}
        <strong>30 to 90 days</strong> from filing to final judgment. Florida
        requires a mandatory 20-day waiting period between the date you file
        and the date the final hearing can be held. Contested divorces — where
        the spouses disagree on property, support, or parenting — usually take
        6 to 18 months or longer.{" "}
        <Link href="/divorce/uncontested-divorce-in-jacksonville-fl">
          Learn more about uncontested divorce in Jacksonville
        </Link>
        .
      </p>
    ),
  },
  {
    q: "How is child support calculated in Florida?",
    aPlain:
      "Florida uses the Income Shares Model under Florida Statutes §61.30. The court combines both parents' monthly net incomes, looks up the minimum need in the statutory schedule based on the number of children, and divides it between the parents in proportion to their incomes. When both parents have at least 20% of the overnights (73+ nights per year), a gross-up formula applies.",
    a: (
      <p>
        Florida uses the <strong>Income Shares Model</strong> under Florida
        Statutes §61.30. The court combines both parents&apos; net monthly
        incomes, looks up the minimum monthly need on the statutory schedule
        based on the number of children, and divides that need between the
        parents in proportion to their incomes. When both parents have at
        least 20% of the overnights (73+ nights per year), a{" "}
        <em>gross-up formula</em> applies that multiplies the need by 1.5
        and credits each parent for their time with the child. Try our{" "}
        <Link href="/florida-child-support-calculator">
          free Florida Child Support Calculator
        </Link>
        .
      </p>
    ),
  },
  {
    q: "Is Florida a 50/50 custody state?",
    aPlain:
      "Effective July 1, 2023, Florida law includes a rebuttable presumption that equal (50/50) time-sharing is in the best interest of minor children. A parent seeking a different arrangement must prove by a preponderance of the evidence that equal time-sharing is not in the children's best interest. Florida does not use the term 'custody' — it uses 'time-sharing' and requires a written parenting plan.",
    a: (
      <p>
        Effective July 1, 2023, Florida law includes a{" "}
        <strong>rebuttable presumption that equal (50/50) time-sharing is
        in the best interest of minor children</strong>. A parent who wants a
        different arrangement must prove by a preponderance of the evidence
        that equal time-sharing is not in the children&apos;s best interest.
        Florida no longer uses the term &ldquo;custody&rdquo; — cases use{" "}
        <Link href="/time-sharing-and-visitation-in-florida">
          time-sharing and a written parenting plan
        </Link>{" "}
        approved by the court.
      </p>
    ),
  },
  {
    q: "What are the residency requirements to file for divorce in Florida?",
    aPlain:
      "To file for divorce in Florida, at least one spouse must have been a Florida resident for a minimum of 6 months before filing. You must prove residency with a Florida driver's license, voter registration, or witness testimony. The 6-month requirement cannot be waived.",
    a: (
      <p>
        To file for divorce in Florida, <strong>at least one spouse must have
        been a Florida resident for a minimum of 6 months</strong> before the
        petition is filed. Residency is typically proven with a Florida
        driver&apos;s license, voter registration card, or corroborating
        witness testimony. The 6-month requirement cannot be waived.
      </p>
    ),
  },
  {
    q: "How much does a divorce cost in Jacksonville?",
    aPlain:
      "An uncontested divorce in Jacksonville typically costs a flat fee in the low thousands of dollars, plus the Duval County filing fee of approximately $410. A contested divorce that goes to trial usually costs $15,000 to $50,000 or more per spouse depending on complexity, discovery, and experts involved.",
    a: (
      <p>
        An <strong>uncontested divorce in Jacksonville</strong> typically runs
        a flat fee in the low thousands of dollars plus the Duval County filing
        fee (approximately $410). A <strong>contested divorce</strong> that
        proceeds through discovery and trial usually runs $15,000 to $50,000
        or more per spouse, depending on case complexity, business valuations,
        expert witnesses, and the number of contested issues. Call me at{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> for a flat-fee quote
        on your uncontested matter.
      </p>
    ),
  },
  {
    q: "Is alimony still permanent in Florida?",
    aPlain:
      "No. Effective July 1, 2023, Florida abolished permanent alimony. Florida now recognizes four types of alimony: temporary, bridge-the-gap (up to 2 years), rehabilitative, and durational — with length caps of 50% of a short marriage (under 10 years), 60% of a moderate marriage (10-20 years), and 75% of a long marriage (20+ years). Retirement at normal retirement age is grounds to modify or terminate alimony.",
    a: (
      <p>
        <strong>No. Effective July 1, 2023, Florida abolished permanent
        alimony.</strong> Florida now recognizes four types of alimony:
        temporary, bridge-the-gap (up to 2 years), rehabilitative, and
        durational. Durational alimony is capped at 50% of a short marriage
        (under 10 years), 60% of a moderate marriage (10&ndash;20 years), and
        75% of a long marriage (20+ years). Retirement at normal retirement
        age is now grounds to modify or terminate alimony.{" "}
        <Link href="/divorce/alimony">Learn more about Florida alimony</Link>.
      </p>
    ),
  },
  {
    q: "Do both spouses have to agree to get divorced in Florida?",
    aPlain:
      "No. Florida is a no-fault divorce state, and only one spouse needs to testify that the marriage is 'irretrievably broken' for the court to grant the divorce. The other spouse cannot block the divorce itself, though they can contest specific terms like property division, alimony, child support, and time-sharing.",
    a: (
      <p>
        <strong>No. Florida is a no-fault divorce state.</strong> Only one
        spouse needs to testify that the marriage is{" "}
        &ldquo;irretrievably broken&rdquo; for the court to grant the
        divorce. The other spouse cannot block the divorce itself, though
        they can contest specific terms like{" "}
        <Link href="/divorce/equitable-distribution">property division</Link>,{" "}
        <Link href="/divorce/alimony">alimony</Link>,{" "}
        <Link href="/divorce/child-support">child support</Link>, and{" "}
        <Link href="/time-sharing-and-visitation-in-florida">
          time-sharing
        </Link>
        .
      </p>
    ),
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.aPlain,
    },
  })),
};

export default function HomeFAQ() {
  return (
    <section className="bg-[#FAF7F2] py-24" aria-labelledby="home-faq-heading">
      <JsonLd data={faqSchema} />
      <div className="max-w-[980px] mx-auto px-6">
        <div className="text-center mb-14 max-w-[720px] mx-auto">
          <p
            className="text-[#8B2635] text-[12px] font-semibold uppercase tracking-[3px] mb-3"
            style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
          >
            Frequently Asked Questions
          </p>
          <h2
            id="home-faq-heading"
            className="text-[#03254B] text-[36px] lg:text-[44px] leading-[1.15] mb-5"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
          >
            Florida family law, <em className="italic text-[#8B2635]">clearly</em> answered
          </h2>
          <div
            aria-hidden="true"
            className="mx-auto mb-6"
            style={{
              width: 60,
              height: 2,
              background: "linear-gradient(90deg, #E0B158 0%, #8B2635 100%)",
            }}
          />
          <p className="text-[#03254B]/75 text-[16px] leading-[1.7]">
            Direct, statute-specific answers to the questions I hear most often
            from Jacksonville clients. For advice tailored to your case, call{" "}
            <a href="tel:+1-904-364-4565" className="text-[#8B2635] underline">
              904-364-4565
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group bg-white border border-[#03254B]/10 hover:border-[#8B2635]/30 transition-colors"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 text-[#03254B] hover:text-[#8B2635] transition-colors"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                <span className="text-[18px] lg:text-[19px] font-medium pr-4">
                  {f.q}
                </span>
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 w-8 h-8 rounded-full border border-[#03254B]/20 flex items-center justify-center group-open:bg-[#8B2635] group-open:border-[#8B2635] group-open:text-white transition-colors"
                >
                  <svg
                    className="w-3 h-3 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div
                className="px-6 pb-6 pt-0 text-[#03254B]/85 text-[16px] leading-[1.75] border-t border-[#03254B]/5"
                style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
              >
                <div className="pt-4">{f.a}</div>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#03254B]/70 text-[14px] mb-4">
            Have a different question?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-semibold tracking-[2px] text-[13px] px-6 py-3 transition-colors"
            style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
          >
            Ask in a Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
