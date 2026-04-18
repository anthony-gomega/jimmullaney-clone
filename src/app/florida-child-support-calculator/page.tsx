"use client";

import { useMemo, useState } from "react";
import InnerPage from "../components/InnerPage";
import Link from "next/link";

type FilingStatus = "single" | "marriedJoint" | "marriedSeparate" | "headOfHousehold";

/** Florida Child Support Guidelines minimum obligation schedule (§61.30(6), abbreviated). */
const SCHEDULE_ROWS: [income: number, c1: number, c2: number, c3: number, c4: number, c5: number, c6: number][] = [
  [800, 190, 191, 192, 193, 194, 195],
  [1000, 225, 284, 305, 317, 327, 337],
  [1500, 340, 531, 665, 739, 795, 850],
  [2000, 442, 688, 860, 976, 1059, 1144],
  [2500, 543, 846, 1058, 1203, 1310, 1416],
  [3000, 645, 1004, 1256, 1430, 1560, 1687],
  [3500, 744, 1159, 1450, 1653, 1808, 1958],
  [4000, 830, 1294, 1620, 1849, 2024, 2199],
  [4500, 917, 1429, 1789, 2044, 2241, 2440],
  [5000, 1000, 1559, 1952, 2231, 2447, 2669],
  [5500, 1075, 1677, 2102, 2403, 2638, 2878],
  [6000, 1148, 1793, 2246, 2569, 2821, 3079],
  [7000, 1285, 2012, 2521, 2887, 3173, 3464],
  [8000, 1412, 2214, 2776, 3181, 3498, 3820],
  [9000, 1529, 2403, 3014, 3455, 3801, 4152],
  [10000, 1635, 2576, 3234, 3707, 4079, 4457],
  [12000, 1837, 2876, 3614, 4148, 4565, 4988],
  [14000, 2031, 3126, 3927, 4512, 4969, 5432],
  [16000, 2199, 3338, 4188, 4811, 5301, 5798],
  [18000, 2340, 3528, 4425, 5083, 5601, 6125],
  [20000, 2441, 3691, 4626, 5317, 5858, 6405],
  [25000, 2663, 4050, 5067, 5827, 6424, 7025],
  [30000, 2786, 4255, 5331, 6135, 6769, 7401],
];

const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 15000,
  marriedJoint: 30000,
  marriedSeparate: 15000,
  headOfHousehold: 22500,
};

function federalIncomeTax(taxable: number, status: FilingStatus): number {
  if (taxable <= 0) return 0;
  let brackets: [number, number][] = [
    [11925, 0.10],
    [48475, 0.12],
    [103350, 0.22],
    [197300, 0.24],
    [250525, 0.32],
    [626350, 0.35],
    [Infinity, 0.37],
  ];
  if (status === "marriedJoint") {
    brackets = [
      [23850, 0.10],
      [96950, 0.12],
      [206700, 0.22],
      [394600, 0.24],
      [501050, 0.32],
      [751600, 0.35],
      [Infinity, 0.37],
    ];
  } else if (status === "headOfHousehold") {
    brackets = [
      [17000, 0.10],
      [64850, 0.12],
      [103350, 0.22],
      [197300, 0.24],
      [250500, 0.32],
      [626350, 0.35],
      [Infinity, 0.37],
    ];
  }
  let tax = 0;
  let last = 0;
  for (const [upper, rate] of brackets) {
    if (taxable > upper) {
      tax += (upper - last) * rate;
      last = upper;
    } else {
      tax += (taxable - last) * rate;
      break;
    }
  }
  return Math.max(0, tax);
}

function minimumNeed(combinedMonthly: number, numChildren: number): number {
  const col = Math.min(Math.max(numChildren, 1), 6);
  if (combinedMonthly <= SCHEDULE_ROWS[0][0]) return SCHEDULE_ROWS[0][col];
  const last = SCHEDULE_ROWS[SCHEDULE_ROWS.length - 1];
  if (combinedMonthly >= last[0]) {
    const extra = combinedMonthly - last[0];
    return last[col] + extra * 0.05;
  }
  for (let i = 0; i < SCHEDULE_ROWS.length - 1; i++) {
    const [lo, ...a] = SCHEDULE_ROWS[i];
    const [hi, ...b] = SCHEDULE_ROWS[i + 1];
    if (combinedMonthly >= lo && combinedMonthly <= hi) {
      const ratio = (combinedMonthly - lo) / (hi - lo);
      return a[col - 1] + ratio * (b[col - 1] - a[col - 1]);
    }
  }
  return 0;
}

type ParentInput = {
  grossMonthly: string;
  untaxedMonthly: string;
  filingStatus: FilingStatus;
  ownInsurance: string;
  daycare: string;
  otherSupport: string;
  childrenInsurance: string;
  unionDues: string;
  mandatoryRetirement: string;
};

const emptyParent: ParentInput = {
  grossMonthly: "",
  untaxedMonthly: "",
  filingStatus: "single",
  ownInsurance: "",
  daycare: "",
  otherSupport: "",
  childrenInsurance: "",
  unionDues: "",
  mandatoryRetirement: "",
};

function num(s: string): number {
  const n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function fmt(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

function netMonthly(p: ParentInput): { gross: number; taxes: number; deductions: number; net: number } {
  const gross = num(p.grossMonthly) + num(p.untaxedMonthly);
  const annualGross = num(p.grossMonthly) * 12;
  const taxable = Math.max(0, annualGross - STANDARD_DEDUCTION[p.filingStatus]);
  const fit = federalIncomeTax(taxable, p.filingStatus) / 12;
  const fica = num(p.grossMonthly) * 0.0765;
  const allowable =
    num(p.ownInsurance) +
    num(p.daycare) +
    num(p.otherSupport) +
    num(p.childrenInsurance) +
    num(p.unionDues) +
    num(p.mandatoryRetirement);
  const net = Math.max(0, gross - fit - fica - allowable);
  return { gross, taxes: fit + fica, deductions: allowable, net };
}

export default function CalculatorPage() {
  const [numChildren, setNumChildren] = useState(1);
  const [fatherOvernights, setFatherOvernights] = useState("183");
  const [father, setFather] = useState<ParentInput>({ ...emptyParent });
  const [mother, setMother] = useState<ParentInput>({ ...emptyParent });
  const [calculated, setCalculated] = useState(false);

  const result = useMemo(() => {
    const fNet = netMonthly(father);
    const mNet = netMonthly(mother);
    const combined = fNet.net + mNet.net;
    if (combined <= 0) return null;
    const fShare = fNet.net / combined;
    const mShare = 1 - fShare;
    const baseNeed = minimumNeed(combined, numChildren);

    const fOvernights = Math.min(Math.max(num(fatherOvernights), 0), 365);
    const mOvernights = 365 - fOvernights;
    const fPct = fOvernights / 365;
    const mPct = 1 - fPct;

    const sharedParenting = fOvernights >= 73 && mOvernights >= 73;

    let fatherPays = 0;
    let motherPays = 0;
    let payer = "";

    if (!sharedParenting) {
      if (fOvernights < 73) {
        fatherPays = baseNeed * fShare;
        payer = "Father";
      } else {
        motherPays = baseNeed * mShare;
        payer = "Mother";
      }
    } else {
      const grossedUp = baseNeed * 1.5;
      const fObligation = grossedUp * fShare;
      const mObligation = grossedUp * mShare;
      const fOwed = fObligation * mPct;
      const mOwed = mObligation * fPct;
      const net = fOwed - mOwed;
      if (net > 0) {
        fatherPays = net;
        payer = "Father";
      } else {
        motherPays = -net;
        payer = "Mother";
      }
    }

    return {
      fNet, mNet, combined, fShare, mShare, baseNeed,
      fatherPays, motherPays, payer, sharedParenting, fOvernights, mOvernights,
    };
  }, [father, mother, numChildren, fatherOvernights]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCalculated(true);
    document.getElementById("result")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <InnerPage
      title="A Free 2026 Florida Child Support Calculator"
      breadcrumbs={[{ label: "Child Support Calculator" }]}
      showSidebar={false}
    >
      <p>
        Most online Florida child-support calculators produce numbers that
        don&apos;t match what a judge actually orders — because they ask for
        net income (which clients estimate wrong) and handle overnights
        poorly. This calculator asks for <strong>gross</strong> income,
        estimates federal tax using the 2026 brackets and standard deductions,
        and applies the gross-up formula when both parents have 20% or more of
        the overnights, matching the Florida Child Support Guidelines
        (§61.30).
      </p>
      <p>
        Results are estimates. For a binding calculation for your specific
        case, call <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">contact me online</Link>.
      </p>

      <form onSubmit={handleSubmit} className="not-prose space-y-8 my-10">
        <section className="bg-[#FAF7F2] p-6 md:p-8 border border-[#03254B]/10">
          <h2
            className="text-[22px] mb-5 text-[#03254B]"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
          >
            Children &amp; Time-Sharing
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <label className="block">
              <span className="block font-semibold text-[14px] mb-1">Number of Children</span>
              <select
                value={numChildren}
                onChange={(e) => setNumChildren(parseInt(e.target.value))}
                className="w-full border border-gray-300 p-3"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Child" : "Children"}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="block font-semibold text-[14px] mb-1">
                Father&apos;s Overnights With Child(ren) Per Year (0–365)
              </span>
              <input
                type="number"
                min={0}
                max={365}
                value={fatherOvernights}
                onChange={(e) => setFatherOvernights(e.target.value)}
                className="w-full border border-gray-300 p-3"
              />
              <span className="block text-[12px] text-gray-500 mt-1">
                Mother&apos;s overnights = 365 minus this number.
              </span>
            </label>
          </div>
        </section>

        {[
          { label: "Father", state: father, setState: setFather },
          { label: "Mother", state: mother, setState: setMother },
        ].map(({ label, state, setState }) => (
          <section key={label} className="bg-[#FAF7F2] p-6 md:p-8 border border-[#03254B]/10">
            <h2
              className="text-[22px] mb-5 text-[#03254B]"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
            >
              {label}&apos;s Monthly Income &amp; Deductions
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <Money label="Monthly Gross Income" value={state.grossMonthly}
                onChange={(v) => setState({ ...state, grossMonthly: v })} required />
              <Money label="Monthly Untaxed Income (alimony received, some military pay)"
                value={state.untaxedMonthly}
                onChange={(v) => setState({ ...state, untaxedMonthly: v })} />
              <label className="block">
                <span className="block font-semibold text-[14px] mb-1">Filing Status</span>
                <select
                  value={state.filingStatus}
                  onChange={(e) => setState({ ...state, filingStatus: e.target.value as FilingStatus })}
                  className="w-full border border-gray-300 p-3"
                >
                  <option value="single">Single</option>
                  <option value="marriedJoint">Married, Filing Jointly</option>
                  <option value="marriedSeparate">Married, Filing Separately</option>
                  <option value="headOfHousehold">Head of Household</option>
                </select>
              </label>
              <Money label={`${label}'s Own Health / Dental / Vision Insurance`}
                value={state.ownInsurance}
                onChange={(v) => setState({ ...state, ownInsurance: v })} />
              <Money label="Day Care / Child Care / After-School"
                value={state.daycare}
                onChange={(v) => setState({ ...state, daycare: v })} />
              <Money label="Other Court-Ordered Child Support or Alimony Paid"
                value={state.otherSupport}
                onChange={(v) => setState({ ...state, otherSupport: v })} />
              <Money label="These Children's Health Insurance"
                value={state.childrenInsurance}
                onChange={(v) => setState({ ...state, childrenInsurance: v })} />
              <Money label="Union Dues"
                value={state.unionDues}
                onChange={(v) => setState({ ...state, unionDues: v })} />
              <Money label="Mandatory Retirement Contributions"
                value={state.mandatoryRetirement}
                onChange={(v) => setState({ ...state, mandatoryRetirement: v })} />
            </div>
          </section>
        ))}

        <button
          type="submit"
          className="bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-bold tracking-wider text-[14px] px-10 py-4 transition-colors"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Calculate Child Support
        </button>
      </form>

      {calculated && result && (
        <div id="result" className="not-prose bg-[#03254B] text-white p-8 my-10">
          <h2
            className="text-[28px] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}
          >
            Estimated Child Support
          </h2>

          <div className="text-[26px] md:text-[34px] mb-6" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
            {result.payer} pays{" "}
            <em className="text-[#E0B158] not-italic">
              {fmt(result.payer === "Father" ? result.fatherPays : result.motherPays)}
            </em>{" "}
            per month
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-[14px]">
            <Breakdown title="Father" data={result.fNet} pct={result.fShare} overnights={result.fOvernights} />
            <Breakdown title="Mother" data={result.mNet} pct={result.mShare} overnights={result.mOvernights} />
          </div>

          <div className="mt-6 pt-6 border-t border-white/20 text-[14px] space-y-1">
            <div><strong>Combined Net Monthly:</strong> {fmt(result.combined)}</div>
            <div><strong>Minimum Monthly Need ({numChildren} child{numChildren > 1 ? "ren" : ""}):</strong> {fmt(result.baseNeed)}</div>
            <div><strong>Gross-up (substantial time-sharing) applied:</strong> {result.sharedParenting ? "Yes" : "No"}</div>
          </div>

          <p className="mt-6 text-[13px] text-white/70">
            Estimate only. The court program uses each parent&apos;s actual
            tax situation, including credits. For an exact calculation, call{" "}
            <a href="tel:+1-904-364-4565" className="underline">904-364-4565</a>.
          </p>
        </div>
      )}

      <h2>How This Calculator Works</h2>
      <p>
        Florida uses the <strong>Income Shares Model</strong> to determine
        child support. Step by step:
      </p>
      <ol>
        <li>Each parent&apos;s monthly <strong>gross</strong> income is entered.</li>
        <li>
          Federal income tax is estimated from filing status and the 2026
          standard deduction, then FICA (Social Security + Medicare) is
          subtracted.
        </li>
        <li>
          Allowable monthly deductions are applied: health insurance for the
          parent, child care, union dues, mandatory retirement contributions,
          and any existing court-ordered support.
        </li>
        <li>The result is each parent&apos;s <strong>net monthly income</strong>.</li>
        <li>
          Combined net income and the number of children are used to look up
          the <strong>minimum monthly need</strong> in the Florida schedule
          (§61.30(6)).
        </li>
        <li>
          Each parent&apos;s share of that need equals their percentage of
          combined net income.
        </li>
        <li>
          If both parents have at least 20% of the overnights (73+ nights),
          Florida&apos;s <strong>gross-up formula</strong> under §61.30(11)(b)
          multiplies the need by 1.5 and credits each parent for time with the
          child.
        </li>
      </ol>

      <p>
        For a line-by-line walkthrough of the actual court worksheet, see{" "}
        <Link href="/florida-child-support-calculator/explanation-of-a-florida-child-support-guidelines-worksheet">
          Explanation of a Florida Child Support Guidelines Worksheet
        </Link>
        .
      </p>

      <h2>Talk to a Jacksonville Child Support Lawyer</h2>
      <p>
        If you need a formal Guidelines Worksheet for court or mediation, or
        want to discuss how overnights, imputed income, or health-insurance
        allocations could change your number, I can help. Call{" "}
        <a href="tel:+1-904-364-4565">904-364-4565</a> or{" "}
        <Link href="/contact">send me a message</Link>.
      </p>
    </InnerPage>
  );
}

function Money({
  label,
  value,
  onChange,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block font-semibold text-[14px] mb-1">
        {label} {required && <span className="text-[#8B2635]">*</span>}
      </span>
      <div className="flex items-center border border-gray-300 bg-white">
        <span className="px-3 text-gray-500">$</span>
        <input
          type="number"
          min={0}
          step="0.01"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="flex-1 p-3 outline-none"
        />
      </div>
    </label>
  );
}

function Breakdown({
  title,
  data,
  pct,
  overnights,
}: {
  title: string;
  data: { gross: number; taxes: number; deductions: number; net: number };
  pct: number;
  overnights: number;
}) {
  return (
    <div className="bg-white/5 p-4">
      <div className="font-semibold mb-2">{title}</div>
      <div>Gross: {fmt(data.gross)}</div>
      <div>Est. Tax + FICA: −{fmt(data.taxes)}</div>
      <div>Deductions: −{fmt(data.deductions)}</div>
      <div>Net: <strong>{fmt(data.net)}</strong></div>
      <div className="mt-1">Income Share: {(pct * 100).toFixed(1)}%</div>
      <div>Overnights / year: {overnights}</div>
    </div>
  );
}
