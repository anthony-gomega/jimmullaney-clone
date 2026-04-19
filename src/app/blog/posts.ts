/**
 * Blog post metadata + content. Original writing covering the same topics
 * as the posts listed on the live site's blog index. Each post is indexed
 * by (year, month, slug) for the dynamic route.
 */

export type BlogPost = {
  year: string;
  month: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    year: "2026",
    month: "03",
    slug: "dividing-high-value-real-estate-in-an-uncontested-jacksonville-divorce",
    title: "Dividing High-Value Real Estate in an Uncontested Jacksonville Divorce",
    date: "March 14, 2026",
    excerpt:
      "When couples with significant real-estate holdings choose an uncontested path, the contract language matters more than the couple usually realizes. Here's what to get right.",
    body: [
      "In an uncontested divorce, the spouses have reached agreement on every issue — including how to handle their real estate. That agreement is only as strong as the drafting of the Marital Settlement Agreement. When the real estate is worth hundreds of thousands of dollars or more, the difference between a well-drafted clause and a rushed one can run into six figures of regret.",
      "Three issues drive most post-divorce real-estate disputes: who holds title, who holds the mortgage, and how the proceeds or buyout are calculated. A comprehensive Marital Settlement Agreement addresses all three explicitly — by specific property, by specific dollar amount, by specific date.",
      "First, title. An agreement that simply says 'wife keeps the Ponte Vedra house' does nothing unless it also requires the husband to sign a quitclaim deed transferring title. The agreement should specify the form of deed, the recording responsibility, the title-insurance treatment, and who pays any transfer taxes.",
      "Second, the mortgage. Just because a spouse agrees to take responsibility for the mortgage does not remove the other spouse from the loan. Lenders are not bound by the divorce decree. If the keeping spouse cannot refinance within a reasonable deadline, the agreement should specify a forced sale, refinance-or-sell deadlines, and indemnification for any missed payments.",
      "Third, equity buyouts. Simply saying 'husband will pay wife half the equity' invites disputes about how equity is calculated — the mortgage balance as of when? appraisal as of when? done by whom? Nail down the valuation date, the appraisal method, and whether selling costs and tax consequences are accounted for.",
      "For investment properties, add provisions for rental income during the transition period, treatment of depreciation recapture if a sale occurs, and which spouse is responsible for capital-gains exposure on a deferred sale.",
      "None of this is rocket science, but all of it requires experience. If you're considering an uncontested divorce and your real-estate portfolio is meaningful, make sure your counsel has drafted agreements at that asset level before.",
    ],
  },
  {
    year: "2026",
    month: "03",
    slug: "the-kitchen-table-divorce-turning-your-verbal-agreement-into-a-legal-reality",
    title: "The Kitchen Table Divorce: Turning Your Verbal Agreement Into a Legal Reality",
    date: "March 2, 2026",
    excerpt:
      "You and your spouse sat down and worked out your divorce over coffee. Now what? Here's how to take that understanding and make it legally binding in Florida.",
    body: [
      "Plenty of divorces start the way the best ones end — at the kitchen table, with both spouses agreeing on the basic shape of how they want to untangle their finances and co-parent their kids. If that's you, congratulations: you've already done the hardest part. What's left is the paperwork to make it real under Florida law.",
      "Start by writing down everything you've agreed to. Property and debts. Who keeps the house and under what terms. Alimony (if any). Child support and the parenting plan. Time-sharing for the kids. Holiday schedules. Health insurance. Tax filing for the year of the divorce. Life insurance to secure support obligations. Anything you discussed, get it on paper — even informally.",
      "Then hire an attorney, or ideally a single attorney between you who can serve as mediator/drafter (preferably one who is a Florida Supreme Court–certified family mediator). An experienced family-law drafter will turn your paragraph list into a Marital Settlement Agreement that actually works — one that addresses the contingencies you didn't think about and uses the right statutory language to be enforceable.",
      "Each spouse should independently review the final document before signing. If you're working with a single neutral, the other spouse should have their own attorney review the draft. That modest investment avoids the nightmare scenario where a homemade agreement turns out to be unenforceable or has a gap that ends up in contested litigation two years later.",
      "From signing to final judgment usually takes 30–90 days, depending on the court's calendar. You'll attend one short hearing — usually under 15 minutes. You answer a few routine questions from the judge, the judge signs your Final Judgment of Dissolution, and you're done.",
      "A kitchen-table divorce is the fastest, cheapest path through what's otherwise one of life's most difficult transitions. Don't cheapen the finish line with sloppy paperwork.",
    ],
  },
  {
    year: "2026",
    month: "01",
    slug: "the-divorce-finish-line-how-fast-can-we-really-get-an-uncontested-divorce-in-florida",
    title: "The Divorce Finish Line: How Fast Can We Really Get an Uncontested Divorce in Florida?",
    date: "January 22, 2026",
    excerpt:
      "Clients ask how quickly an uncontested divorce can be completed. The answer depends on several factors — but here's what's realistic in Duval County.",
    body: [
      "When clients tell me they want an uncontested divorce, the second thing they ask is how fast it can be done. The honest answer is: faster than most people expect, but not as fast as the internet promises.",
      "Florida requires a 20-day mandatory waiting period between the date the petition is filed and the date the final hearing can be held. That's the statutory floor. The ceiling depends entirely on how quickly the spouses exchange financial information, finalize the Marital Settlement Agreement, and get on the court's calendar.",
      "In Duval County in 2026, the realistic timeline is 30 to 60 days from filing to final judgment for a well-prepared uncontested divorce. A straightforward case — two spouses, no children, modest assets, full agreement — can close in 30 days. A more complex case — kids, a QDRO, a business to divide — typically runs 60 to 90 days.",
      "What slows cases down is almost always financial disclosure. Both spouses have to complete sworn financial affidavits, exchange tax returns and pay stubs, and get their supporting documents in order. Couples who gather this information before filing often finish a month faster than those who gather it afterward.",
      "The other common delay is scheduling the final hearing. Family law judges in Jacksonville typically set uncontested hearings in batches, and the wait can be anywhere from a week to a month depending on the judge. Your attorney can usually predict the wait time for a given courtroom.",
      "Can you finish an uncontested divorce in 14 days? Probably not — the 20-day waiting period is statutory. Can you finish in 30? Yes, with preparation. Can you finish in 60? Yes, comfortably, even with children and moderate complexity.",
    ],
  },
  {
    year: "2025",
    month: "06",
    slug: "how-can-uncontested-divorce-provide-a-lower-stress-way-to-end-a-marriage",
    title: "How Can Uncontested Divorce Provide a Lower-Stress Way to End a Marriage?",
    date: "June 18, 2025",
    excerpt:
      "Divorce is stressful in any form. An uncontested divorce — where both spouses agree on the terms — removes most of the drivers of that stress.",
    body: [
      "Divorce is consistently ranked as one of the most stressful life events, trailing only the death of a spouse and major illness. Some of that stress is unavoidable — the end of a marriage is a genuine loss, and no legal process can take that away. But a significant portion of divorce stress comes from the legal process itself, and that portion is avoidable if the spouses can work together.",
      "The largest single source of divorce stress is uncertainty. When you're in contested litigation, you don't know how the judge will rule on parenting time, whether alimony will be awarded, how much child support you'll pay or receive, or what the house will be valued at. The uncertainty compounds because hearings are scheduled months apart and decisions stack on each other.",
      "Uncontested divorce removes the uncertainty. You and your spouse decide the terms. Once they're in your Marital Settlement Agreement, the outcome is known. The final hearing becomes an administrative formality — present the signed agreement, answer a few routine questions, get the judgment.",
      "The second source of stress is confrontation. Contested cases often involve depositions, adversarial motions, and open-court testimony. Uncontested cases don't. You sign documents, your spouse signs documents, and the only interaction with the court is a short hearing where the judge reviews what you've already agreed to.",
      "The third source is cost. Contested divorces in Jacksonville commonly run $20,000 to $50,000 per spouse through trial. Uncontested divorces are typically a small fraction of that — often a flat fee. Financial stress compounds every other stressor; removing it often makes the entire experience bearable.",
      "The fourth source is timeline. Contested divorces often run a year or more. Uncontested divorces close in 30 to 90 days. You're moving on faster, and your life stabilizes sooner.",
      "None of this means uncontested divorce is right for everyone. If there's a power imbalance, undisclosed assets, or safety concerns, the protections of a contested process may be necessary. But for the many couples who can agree, uncontested divorce delivers the legal outcome with a fraction of the stress.",
    ],
  },
  {
    year: "2017",
    month: "07",
    slug: "does-divorce-hurt-your-credit-score",
    title: "Does Divorce Hurt Your Credit Score?",
    date: "July 6, 2017",
    excerpt:
      "The quick answer is yes, but only in some situations. Your credit score is not automatically affected by your divorce itself.",
    body: [
      "Clients often ask whether their divorce will hurt their credit score. The short answer is that the divorce itself does not show up on your credit report. What does show up — and what can dramatically affect your score — are the financial decisions made during and after the divorce process.",
      "The most common credit damage in a Florida divorce comes from joint accounts. If a credit card was opened in both spouses' names, both spouses remain liable to the credit card company regardless of what the divorce decree says. If your ex stops paying and the account goes delinquent, your credit report takes the hit too — even if the court ordered them to pay the debt.",
      "Mortgages work the same way. Being awarded the marital home in the divorce does not remove your spouse from the mortgage. If your spouse can't make the payments, the bank reports the late payments against both of you. This is why well-drafted Marital Settlement Agreements require refinancing within a specific deadline, with a forced sale if that deadline is missed.",
      "Auto loans, personal loans, and lines of credit all behave similarly. The divorce court can allocate responsibility between the spouses, but it cannot modify the original contract with the lender.",
      "There are three practical steps that protect your credit during a divorce: (1) close or transfer joint accounts to sole responsibility as soon as possible, (2) pull your credit report from all three bureaus before and after the divorce to catch surprises, and (3) include clear indemnification provisions in your Marital Settlement Agreement so you have recourse if your ex fails to pay a debt they agreed to handle.",
      "A thoughtfully drafted agreement can't make the bank re-issue contracts, but it can create strong incentives for compliance and meaningful remedies if compliance fails.",
    ],
  },
  {
    year: "2016",
    month: "06",
    slug: "4-common-life-changes-after-divorce",
    title: "4 Common Life Changes After Divorce",
    date: "June 14, 2016",
    excerpt:
      "Divorce is a beginning, not just an ending. Here are four big changes most clients experience in the year after the final judgment.",
    body: [
      "Most of the legal work in a divorce happens before the final judgment. Most of the life changes happen after. Clients who understand the post-decree landscape in advance usually handle the transition better than those caught by surprise.",
      "First, housing. Whether you keep the marital home, sell it and split the proceeds, or move out, your living situation will shift. Buyouts and refinances take time — often 6 to 12 months. Plan for the reality that the housing arrangement on day one of your divorced life is rarely the permanent arrangement.",
      "Second, finances. Running one household on two incomes is different from running two households on two incomes. Many clients don't fully absorb this until the first post-divorce budget cycle, which is why I always encourage drafting a realistic post-divorce budget before the Marital Settlement Agreement is final. It informs every other term in the agreement.",
      "Third, co-parenting. If you have children, you'll spend the next 10–18 years navigating time-sharing, shared decisions, and evolving schedules. Parenting plans that work at age 3 rarely fit at 13. Plan for modifications as kids grow, activities change, and school zoning shifts.",
      "Fourth, relationships. New romantic relationships, blended families, remarriage, relocation — all of these become live questions in the years after divorce, and each one has potential legal implications. A supportive relationship can terminate alimony; a remarriage can change child-support calculations; a relocation more than 50 miles away requires either consent or a court order.",
      "None of this is meant to discourage divorce. It's meant to help clients come into the process with realistic expectations about the year ahead — so the end of the marriage is also a genuine start of the next chapter, not a recurring legal headache.",
    ],
  },
  {
    year: "2016",
    month: "07",
    slug: "what-happens-to-an-ira-or-401k-in-a-divorce-in-florida",
    title: "What Happens to an IRA or 401(k) in a Divorce in Florida?",
    date: "July 11, 2016",
    excerpt:
      "Retirement accounts are often the largest marital asset. Here's how Florida handles them, and what a QDRO is.",
    body: [
      "For many Florida couples, retirement accounts — 401(k)s, 403(b)s, IRAs, pensions — are the largest single asset of the marriage. Dividing them correctly is essential, and doing it wrong can cost tens of thousands in taxes or penalties.",
      "The first question is whether the account is marital or non-marital. Contributions made during the marriage are marital. Contributions from before the marriage are non-marital, though any growth on the non-marital portion during the marriage may itself be marital. Tracing the marital vs. non-marital portions of a pre-existing account can get technical, and courts often rely on account statements from the date of marriage to establish the baseline.",
      "Once the marital portion is determined, both spouses share it under Florida's equitable distribution rules (§61.075). The split is usually 50/50 but need not be. The court will use whatever valuation date the parties agree to or the judge selects.",
      "Dividing qualified retirement accounts — 401(k)s, 403(b)s, pensions — requires a separate court order called a Qualified Domestic Relations Order (QDRO). A QDRO is drafted after the final divorce judgment and instructs the plan administrator how to divide the account. Without a QDRO, you can't actually move money between accounts tax-free. Paying for QDRO preparation is a necessary post-divorce step that many clients don't budget for.",
      "IRAs don't require a QDRO. They can be divided directly by the institution pursuant to the divorce judgment. The transfer must be structured as a direct trustee-to-trustee transfer to avoid taxes and penalties — never a cash withdrawal followed by a contribution to the other spouse's account.",
      "Military retirement requires special treatment under USFSPA (the Uniformed Services Former Spouses' Protection Act) and has its own rules, including the 10/10 rule for direct DFAS payments. I have a separate page on military divorce that covers those issues in detail.",
      "Retirement division mistakes are painful because they tend to surface years later at retirement. Good drafting, careful QDRO preparation, and the right valuation date are worth the investment upfront.",
    ],
  },
];

export function findPost(year: string, month: string, slug: string): BlogPost | undefined {
  return posts.find((p) => p.year === year && p.month === month && p.slug === slug);
}
