"use client";

import { useState } from "react";
import InnerPage from "../components/InnerPage";
import Link from "next/link";

export default function CalculatorPage() {
  const [parent1Income, setParent1Income] = useState("");
  const [parent2Income, setParent2Income] = useState("");
  const [numChildren, setNumChildren] = useState("1");
  const [parent1Overnights, setParent1Overnights] = useState("");
  const [result, setResult] = useState<string | null>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const i1 = parseFloat(parent1Income) || 0;
    const i2 = parseFloat(parent2Income) || 0;
    const n = parseInt(numChildren) || 1;
    const ov1 = parseFloat(parent1Overnights) || 0;
    const combinedIncome = i1 + i2;

    // Simplified estimate using Florida guidelines
    const baseObligationPerChild = Math.min(combinedIncome * 0.17, 2000);
    const totalBaseObligation = baseObligationPerChild * Math.sqrt(n);

    const parent1Share = combinedIncome > 0 ? i1 / combinedIncome : 0.5;
    const parent2Share = 1 - parent1Share;

    // Assume 365 total nights split
    const parent1SharePct = ov1 / 365;
    const parent2SharePct = 1 - parent1SharePct;

    let obligation = 0;
    let payingParent = "";

    if (parent1SharePct < 0.2) {
      // Parent 1 is non-majority timeshare payer
      obligation = totalBaseObligation * parent1Share;
      payingParent = "Parent 1";
    } else if (parent2SharePct < 0.2) {
      obligation = totalBaseObligation * parent2Share;
      payingParent = "Parent 2";
    } else {
      // Gross up calculation
      const p1Gross = totalBaseObligation * 1.5 * parent1Share;
      const p2Gross = totalBaseObligation * 1.5 * parent2Share;
      const p1Credit = p1Gross * parent2SharePct;
      const p2Credit = p2Gross * parent1SharePct;
      const net = (p1Gross - p1Credit) - (p2Gross - p2Credit);
      if (net > 0) {
        obligation = net;
        payingParent = "Parent 1";
      } else {
        obligation = Math.abs(net);
        payingParent = "Parent 2";
      }
    }

    setResult(
      `Estimated monthly child support: $${obligation.toFixed(2)} paid by ${payingParent}`,
    );
  }

  return (
    <InnerPage
      title="A Free Florida Child Support Calculator"
      breadcrumbs={[{ label: "Child Support Calculator" }]}
      showSidebar={false}
    >
      <p>
        This is a free, simplified estimator based on Florida child support
        guidelines. Results are approximations only. Actual child support is
        determined by a court using the official Florida Child Support
        Guidelines Worksheet.
      </p>

      <form onSubmit={calculate} className="bg-gray-50 p-8 mt-8 space-y-4">
        <div>
          <label className="block font-semibold mb-1">
            Parent 1 Monthly Net Income ($)
          </label>
          <input
            type="number"
            value={parent1Income}
            onChange={(e) => setParent1Income(e.target.value)}
            className="w-full border border-gray-300 p-3"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Parent 2 Monthly Net Income ($)
          </label>
          <input
            type="number"
            value={parent2Income}
            onChange={(e) => setParent2Income(e.target.value)}
            className="w-full border border-gray-300 p-3"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Number of Children</label>
          <select
            value={numChildren}
            onChange={(e) => setNumChildren(e.target.value)}
            className="w-full border border-gray-300 p-3"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Parent 1 Overnights Per Year (0 - 365)
          </label>
          <input
            type="number"
            min="0"
            max="365"
            value={parent1Overnights}
            onChange={(e) => setParent1Overnights(e.target.value)}
            className="w-full border border-gray-300 p-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#8B2635] text-white uppercase font-semibold tracking-wider text-[14px] px-8 py-3 hover:bg-[#6F1D2A] transition-colors"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Calculate
        </button>

        {result && (
          <div className="mt-6 p-4 bg-[#131E4D] text-white">
            <p className="text-[18px] font-semibold">{result}</p>
            <p className="text-[13px] mt-2 opacity-80">
              This is an estimate only. For an accurate calculation, contact me
              at <a href="tel:+1-904-364-4565" className="underline">904-364-4565</a>.
            </p>
          </div>
        )}
      </form>

      <h2>How Florida Child Support Is Calculated</h2>
      <p>
        Florida follows the Income Shares Model. The calculation factors in
        each parent&apos;s net income, the number of children, each
        parent&apos;s overnights with the children, and certain expenses such
        as health insurance and work-related child care.
      </p>
      <p>
        For more information, see my article:{" "}
        <Link href="/florida-child-support-calculator/explanation-of-a-florida-child-support-guidelines-worksheet">
          Explanation of a Florida Child Support Guidelines Worksheet
        </Link>
      </p>
    </InnerPage>
  );
}
