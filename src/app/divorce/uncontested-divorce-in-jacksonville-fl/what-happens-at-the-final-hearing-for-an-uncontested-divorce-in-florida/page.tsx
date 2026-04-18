import InnerPage from "../../../components/InnerPage";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Happens at the Final Hearing for an Uncontested Divorce",
  description:
    "Learn what questions the judge asks, what documents to bring, and how to prepare for your uncontested divorce final hearing in Florida.",
};

export default function Page() {
  return (
    <InnerPage
      title="What Happens at the Final Hearing for an Uncontested Divorce in Florida"
      breadcrumbs={[
        { label: "Divorce", href: "/divorce" },
        { label: "Uncontested Divorce", href: "/divorce/uncontested-divorce-in-jacksonville-fl" },
        { label: "Final Hearing" },
      ]}
    >
      <p>
        The final hearing is the last step in an uncontested divorce. It is
        brief — usually under 15 minutes — but it is a formal court proceeding.
        Here is what to expect.
      </p>

      <h2>Before the Hearing</h2>
      <ul>
        <li>
          Review your Marital Settlement Agreement and Parenting Plan one
          final time.
        </li>
        <li>Bring a government-issued ID.</li>
        <li>Dress as you would for a professional meeting.</li>
        <li>Arrive 15 minutes early. The courthouse has security screening.</li>
      </ul>

      <h2>Typical Questions from the Judge</h2>
      <ol>
        <li>What is your full name?</li>
        <li>What is your spouse&apos;s full name?</li>
        <li>What is your date of marriage?</li>
        <li>Have you or your spouse been a resident of Florida for at least 6 months?</li>
        <li>Is your marriage irretrievably broken?</li>
        <li>Did you sign the Marital Settlement Agreement voluntarily?</li>
        <li>Did you have the opportunity to review it with an attorney?</li>
        <li>Do you understand it is binding once the judgment is entered?</li>
        <li>Is everything in the agreement fair, to the best of your knowledge?</li>
        <li>(With children) Is the parenting plan in the best interests of the children?</li>
      </ol>

      <p>
        You answer yes or no and provide short truthful responses. I will be
        with you at counsel table and will prompt the judge with the required
        findings.
      </p>

      <h2>After the Hearing</h2>
      <p>
        The judge signs the Final Judgment of Dissolution, either on the
        bench or within a few days. You will receive a certified copy. You
        are divorced as of the date of the signed judgment.
      </p>

      <p>
        If you have questions, call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>
    </InnerPage>
  );
}
