"use client";

import { useMemo, useState } from "react";
import InnerPage from "../components/InnerPage";
import Link from "next/link";

type FilingStatus = "single" | "marriedJoint" | "marriedSeparate" | "headOfHousehold";
type MajorityParent = "mother" | "father" | "equal";

const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 15000,
  marriedJoint: 30000,
  marriedSeparate: 15000,
  headOfHousehold: 22500,
};

/** 2026 federal income-tax brackets (simplified, single-filer baseline). */
function federalIncomeTax(taxable: number, status: FilingStatus): number {
  if (taxable <= 0) return 0;
  let brackets: [number, number][] = [
    [11925, 0.1], [48475, 0.12], [103350, 0.22], [197300, 0.24],
    [250525, 0.32], [626350, 0.35], [Infinity, 0.37],
  ];
  if (status === "marriedJoint") {
    brackets = [
      [23850, 0.1], [96950, 0.12], [206700, 0.22], [394600, 0.24],
      [501050, 0.32], [751600, 0.35], [Infinity, 0.37],
    ];
  } else if (status === "headOfHousehold") {
    brackets = [
      [17000, 0.1], [64850, 0.12], [103350, 0.22], [197300, 0.24],
      [250500, 0.32], [626350, 0.35], [Infinity, 0.37],
    ];
  }
  let tax = 0;
  let last = 0;
  for (const [upper, rate] of brackets) {
    if (taxable > upper) { tax += (upper - last) * rate; last = upper; }
    else { tax += (taxable - last) * rate; break; }
  }
  return Math.max(0, tax);
}

/** Florida Child Support Guidelines §61.30(6) schedule. Monthly minimum need by combined income × # children. */
const SCHEDULE: [income: number, c1: number, c2: number, c3: number, c4: number, c5: number, c6: number][] = [
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

function minNeed(combined: number, children: number): number {
  const col = Math.min(Math.max(children, 1), 6);
  if (combined <= SCHEDULE[0][0]) return SCHEDULE[0][col];
  const last = SCHEDULE[SCHEDULE.length - 1];
  if (combined >= last[0]) return last[col] + (combined - last[0]) * 0.05;
  for (let i = 0; i < SCHEDULE.length - 1; i++) {
    const [lo, ...a] = SCHEDULE[i];
    const [hi, ...b] = SCHEDULE[i + 1];
    if (combined >= lo && combined <= hi) {
      const r = (combined - lo) / (hi - lo);
      return a[col - 1] + r * (b[col - 1] - a[col - 1]);
    }
  }
  return 0;
}

/** 2026 Child Tax Credit phase-out thresholds (simplified). */
const CTC_PHASEOUT = { single: 200000, marriedJoint: 400000, marriedSeparate: 200000, headOfHousehold: 200000 };
const CTC_PER_CHILD = 2000;

/** Per parent. Mirrors the fields on the live calculator. */
type Parent = {
  grossMonthly: string;
  untaxedMonthly: string;
  filingStatus: FilingStatus;
  ownInsuranceYN: "yes" | "no";
  ownInsurance: string;
  daycareYN: "yes" | "no";
  daycare: string;
  otherSupportYN: "yes" | "no";
  otherSupport: string;
  childrenInsuranceYN: "yes" | "no";
  childrenInsurance: string;
  unionDuesYN: "yes" | "no";
  unionDues: string;
  mandatoryRetirementYN: "yes" | "no";
  mandatoryRetirement: string;
  knowsTaxCreditsYN: "yes" | "no";
  annualTaxCredits: string;
  dependents: string;
};

const emptyParent: Parent = {
  grossMonthly: "",
  untaxedMonthly: "",
  filingStatus: "single",
  ownInsuranceYN: "no", ownInsurance: "",
  daycareYN: "no", daycare: "",
  otherSupportYN: "no", otherSupport: "",
  childrenInsuranceYN: "no", childrenInsurance: "",
  unionDuesYN: "no", unionDues: "",
  mandatoryRetirementYN: "no", mandatoryRetirement: "",
  knowsTaxCreditsYN: "no", annualTaxCredits: "",
  dependents: "0",
};

function num(s: string): number { const n = parseFloat(s); return isNaN(n) ? 0 : n; }
function usd(n: number): string { return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }); }
function pct(n: number): string { return (n * 100).toFixed(2) + "%"; }

type ParentCalc = {
  grossAnnual: number;
  untaxedAnnual: number;
  taxableAnnual: number;
  afterStdDeduction: number;
  fitAnnual: number;
  ficaSS: number;
  ficaMedicare: number;
  taxCredits: number;
  childTaxCredit: number;
  allowableDeductions: number;
  netMonthly: number;
};

function calcParent(p: Parent, numChildren: number, shareOfDependents: number): ParentCalc {
  const grossAnnual = num(p.grossMonthly) * 12;
  const untaxedAnnual = Math.min(num(p.untaxedMonthly), 6000) * 12;
  const afterStd = Math.max(0, grossAnnual - STANDARD_DEDUCTION[p.filingStatus]);

  // Child Tax Credit — phased out above threshold, otherwise $2000 × assigned children (or dependents)
  const depCount = Math.min(Math.max(parseInt(p.dependents || "0", 10) || 0, 0), numChildren);
  const potentialCTC = CTC_PER_CHILD * Math.min(depCount, numChildren);
  const phaseoutStart = CTC_PHASEOUT[p.filingStatus];
  const phaseoutAmount = Math.max(0, grossAnnual - phaseoutStart);
  const phaseoutReduction = Math.ceil(phaseoutAmount / 1000) * 50;
  const childTaxCredit = Math.max(0, potentialCTC - phaseoutReduction);

  const annualTaxCredits = p.knowsTaxCreditsYN === "yes" ? num(p.annualTaxCredits) : 0;

  let fit = federalIncomeTax(afterStd, p.filingStatus);
  fit = Math.max(0, fit - childTaxCredit - annualTaxCredits);

  const ficaSS = num(p.grossMonthly) * 0.062 * 12;
  const ficaMedicare = num(p.grossMonthly) * 0.0145 * 12;

  const allowableMonthly =
    (p.ownInsuranceYN === "yes" ? num(p.ownInsurance) : 0) +
    (p.daycareYN === "yes" ? num(p.daycare) : 0) +
    (p.otherSupportYN === "yes" ? num(p.otherSupport) : 0) +
    (p.childrenInsuranceYN === "yes" ? num(p.childrenInsurance) : 0) +
    (p.unionDuesYN === "yes" ? num(p.unionDues) : 0) +
    (p.mandatoryRetirementYN === "yes" ? num(p.mandatoryRetirement) : 0);

  const monthlyGross = num(p.grossMonthly) + Math.min(num(p.untaxedMonthly), 6000);
  const monthlyTax = (fit + ficaSS + ficaMedicare) / 12;
  const netMonthly = Math.max(0, monthlyGross - monthlyTax - allowableMonthly);

  // quiet unused warning
  void shareOfDependents;

  return {
    grossAnnual, untaxedAnnual, taxableAnnual: afterStd, afterStdDeduction: afterStd,
    fitAnnual: fit, ficaSS, ficaMedicare, taxCredits: annualTaxCredits,
    childTaxCredit, allowableDeductions: allowableMonthly, netMonthly,
  };
}

export default function CalculatorPage() {
  const [numChildren, setNumChildren] = useState(1);
  const [majorityParent, setMajorityParent] = useState<MajorityParent>("equal");
  const [minorityNights, setMinorityNights] = useState("182");
  const [father, setFather] = useState<Parent>({ ...emptyParent });
  const [mother, setMother] = useState<Parent>({ ...emptyParent });
  const [calculated, setCalculated] = useState(false);
  const [email, setEmail] = useState("");
  const [emailName, setEmailName] = useState("");

  const totalDependents =
    (parseInt(father.dependents || "0", 10) || 0) +
    (parseInt(mother.dependents || "0", 10) || 0);

  const dependentsExceedsChildren = totalDependents > numChildren;

  const result = useMemo(() => {
    const f = calcParent(father, numChildren, 0);
    const m = calcParent(mother, numChildren, 0);

    const combined = f.netMonthly + m.netMonthly;
    if (combined <= 0) return null;

    const fShare = f.netMonthly / combined;
    const mShare = 1 - fShare;

    // Overnights per majority setting
    let fNights = 182.5, mNights = 182.5;
    const minN = Math.min(Math.max(num(minorityNights), 0), 182);
    if (majorityParent === "mother") { mNights = 365 - minN; fNights = minN; }
    else if (majorityParent === "father") { fNights = 365 - minN; mNights = minN; }

    const fPct = fNights / 365;
    const mPct = 1 - fPct;

    const baseNeed = minNeed(combined, numChildren);

    // Each parent's schedule amount for each number of children (for display)
    const minByChildren: Record<number, number> = {};
    for (let i = 1; i <= 4; i++) minByChildren[i] = minNeed(combined, i);

    const fShareOfNeed = baseNeed * fShare;
    const mShareOfNeed = baseNeed * mShare;

    const sharedParenting = fNights >= 73 && mNights >= 73;

    let fPays = 0, mPays = 0;
    let fPresumed = 0, mPresumed = 0;

    if (!sharedParenting) {
      if (fNights < 73) { fPays = fShareOfNeed; fPresumed = fShareOfNeed; }
      else { mPays = mShareOfNeed; mPresumed = mShareOfNeed; }
    } else {
      // Gross-up formula §61.30(11)(b)
      const grossedUp = baseNeed * 1.5;
      const fObligation = grossedUp * fShare;
      const mObligation = grossedUp * mShare;
      const fOwed = fObligation * mPct;
      const mOwed = mObligation * fPct;
      const net = fOwed - mOwed;
      if (net >= 0) { fPays = net; fPresumed = fShareOfNeed; }
      else { mPays = -net; mPresumed = mShareOfNeed; }
    }

    return {
      f, m, combined, fShare, mShare,
      baseNeed, minByChildren,
      fShareOfNeed, mShareOfNeed,
      sharedParenting, fNights, mNights, fPct, mPct,
      fPays, mPays, fPresumed, mPresumed,
    };
  }, [father, mother, numChildren, majorityParent, minorityNights]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCalculated(true);
    setTimeout(() => document.getElementById("result")?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    alert(
      "The email-results feature is currently suspended due to overuse/abuse by a few South Florida law firms. Please copy the numbers shown above and contact us at 904-858-4334 if you'd like a formal Guidelines Worksheet.",
    );
  }

  return (
    <InnerPage
      title="A Free 2026 Florida Child Support Calculator"
      breadcrumbs={[{ label: "Child Support Calculator" }]}
      showSidebar={false}
    >
      <p>Last updated on December 30, 2025</p>

      <p>
        Most online Florida child-support calculators fail to predict what a
        judge will actually order. Two problems cause most of the error.
        First, online calculators typically ask for <strong>net</strong>{" "}
        income &mdash; but almost no one can estimate their own net correctly,
        and the program judges use starts from <strong>gross</strong>. Second,
        many calculators fail to account for overnights. Under Florida&apos;s
        current law (and the 2023 equal time-sharing presumption), the
        majority of paying parents have 20% or more of the overnights, which
        triggers the gross-up formula and significantly reduces the monthly
        obligation.
      </p>
      <p>
        This calculator is based on the 2026 federal tax code and the Florida
        Child Support Guidelines (§61.30). It asks for gross income, applies
        filing-status-appropriate standard deductions, estimates FICA and
        federal tax the way the court program does, and implements the
        §61.30(11)(b) gross-up formula automatically. Results are estimates;
        for a binding calculation for your case, call{" "}
        <a href="tel:+1-904-858-4334">904-858-4334</a>.
      </p>

      <form onSubmit={handleSubmit} className="not-prose space-y-8 my-10">

        {/* Children + Time Sharing */}
        <Section title="Children & Time Sharing">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Number of Children">
              <select value={numChildren} onChange={(e) => setNumChildren(parseInt(e.target.value))} className={inputCls}>
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "Child" : "Children"}</option>
                ))}
              </select>
            </Field>
            <Field label="Majority Time Share Parent">
              <select value={majorityParent} onChange={(e) => setMajorityParent(e.target.value as MajorityParent)} className={inputCls}>
                <option value="equal">Equal</option>
                <option value="mother">Mother</option>
                <option value="father">Father</option>
              </select>
            </Field>
            {majorityParent !== "equal" && (
              <Field label="MINORITY Time Share Parent — Number of Nights with Child(ren) (0–182)">
                <input type="number" min={0} max={182} value={minorityNights} onChange={(e) => setMinorityNights(e.target.value)} className={inputCls} />
              </Field>
            )}
            <Field label="Father's Number of Nights" readOnly>
              <Readout value={result ? result.fNights.toFixed(1) : (majorityParent === "father" ? (365 - num(minorityNights)).toFixed(1) : majorityParent === "mother" ? num(minorityNights).toFixed(1) : "182.5")} />
            </Field>
            <Field label="Mother's Number of Nights" readOnly>
              <Readout value={result ? result.mNights.toFixed(1) : (majorityParent === "mother" ? (365 - num(minorityNights)).toFixed(1) : majorityParent === "father" ? num(minorityNights).toFixed(1) : "182.5")} />
            </Field>
          </div>
        </Section>

        <ParentSection title="Father's Monthly Income & Deductions" state={father} setState={setFather} otherGrossAnnual={num(mother.grossMonthly) * 12} numChildren={numChildren} />
        <ParentSection title="Mother's Monthly Income & Deductions" state={mother} setState={setMother} otherGrossAnnual={num(father.grossMonthly) * 12} numChildren={numChildren} />

        {/* Additional Tax Info */}
        <Section title="Additional Tax Info">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Father's FICA — Social Security (6.2%)" readOnly><Readout value={pct(0.062)} /></Field>
            <Field label="Mother's FICA — Social Security (6.2%)" readOnly><Readout value={pct(0.062)} /></Field>
            <Field label="Father's FICA — Medicare (1.45%)" readOnly><Readout value={pct(0.0145)} /></Field>
            <Field label="Mother's FICA — Medicare (1.45%)" readOnly><Readout value={pct(0.0145)} /></Field>
            <Field label="Father's Estimated Federal Income Tax (annual)" readOnly>
              <Readout value={usd(result?.f.fitAnnual ?? 0)} />
            </Field>
            <Field label="Mother's Estimated Federal Income Tax (annual)" readOnly>
              <Readout value={usd(result?.m.fitAnnual ?? 0)} />
            </Field>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Field label="Father — Number of Dependents (do not include yourself)">
              <input type="number" min={0} max={10} value={father.dependents} onChange={(e) => setFather({ ...father, dependents: e.target.value })} className={inputCls} />
            </Field>
            <Field label="Mother — Number of Dependents (do not include yourself)">
              <input type="number" min={0} max={10} value={mother.dependents} onChange={(e) => setMother({ ...mother, dependents: e.target.value })} className={inputCls} />
            </Field>
          </div>

          <div className="mt-3 text-[13px] text-[#03254B]/70">Total Dependents: <strong>{totalDependents}</strong></div>

          {dependentsExceedsChildren && (
            <div className="mt-4 bg-[#8B2635]/10 border-l-4 border-[#8B2635] p-4 text-[13px]">
              <strong>Caution:</strong> You have entered more total dependents than the number of children in this case.
              There are situations where this is correct &mdash; proceed if this is not an error.
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <div>
              <Field label="Father — Do you know your total annual federal tax credits (not including Child Tax Credit)?">
                <YN value={father.knowsTaxCreditsYN} onChange={(v) => setFather({ ...father, knowsTaxCreditsYN: v })} />
              </Field>
              {father.knowsTaxCreditsYN === "yes" && (
                <Field label="Father — Total Annual Federal Tax Credits (not incl. Child Tax Credit)">
                  <Money value={father.annualTaxCredits} onChange={(v) => setFather({ ...father, annualTaxCredits: v })} />
                </Field>
              )}
            </div>
            <div>
              <Field label="Mother — Do you know your total annual federal tax credits (not including Child Tax Credit)?">
                <YN value={mother.knowsTaxCreditsYN} onChange={(v) => setMother({ ...mother, knowsTaxCreditsYN: v })} />
              </Field>
              {mother.knowsTaxCreditsYN === "yes" && (
                <Field label="Mother — Total Annual Federal Tax Credits (not incl. Child Tax Credit)">
                  <Money value={mother.annualTaxCredits} onChange={(v) => setMother({ ...mother, annualTaxCredits: v })} />
                </Field>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Field label="Father's Child Tax Credit (estimated)" readOnly><Readout value={usd(result?.f.childTaxCredit ?? 0)} /></Field>
            <Field label="Mother's Child Tax Credit (estimated)" readOnly><Readout value={usd(result?.m.childTaxCredit ?? 0)} /></Field>
          </div>
        </Section>

        {/* Intermediate calculation outputs */}
        <Section title="Computed Values">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Father's NET Monthly Income" readOnly><Readout value={usd(result?.f.netMonthly ?? 0)} /></Field>
            <Field label="Mother's NET Monthly Income" readOnly><Readout value={usd(result?.m.netMonthly ?? 0)} /></Field>
            <Field label="TOTAL COMBINED NET MONTHLY INCOME" readOnly><Readout value={usd(result?.combined ?? 0)} /></Field>
            <div />
            <Field label="Father's Percentage of Income" readOnly><Readout value={pct(result?.fShare ?? 0.5)} /></Field>
            <Field label="Mother's Percentage of Income" readOnly><Readout value={pct(result?.mShare ?? 0.5)} /></Field>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Field label="Minimum Need — 1 Child" readOnly><Readout value={usd(result?.minByChildren[1] ?? 0)} /></Field>
            <Field label="Minimum Need — 2 Children" readOnly><Readout value={usd(result?.minByChildren[2] ?? 0)} /></Field>
            <Field label="Minimum Need — 3 Children" readOnly><Readout value={usd(result?.minByChildren[3] ?? 0)} /></Field>
            <Field label="Minimum Need — 4 Children" readOnly><Readout value={usd(result?.minByChildren[4] ?? 0)} /></Field>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Field label="Father's Share of Minimum Need" readOnly><Readout value={usd(result?.fShareOfNeed ?? 0)} /></Field>
            <Field label="Mother's Share of Minimum Need" readOnly><Readout value={usd(result?.mShareOfNeed ?? 0)} /></Field>
            <Field label="TOTAL MINIMUM CHILD SUPPORT NEED" readOnly><Readout value={usd(result?.baseNeed ?? 0)} /></Field>
            <div />
            <Field label="Father's Presumptive Guideline Share" readOnly><Readout value={usd(result?.fPresumed ?? 0)} /></Field>
            <Field label="Mother's Presumptive Guideline Share" readOnly><Readout value={usd(result?.mPresumed ?? 0)} /></Field>
          </div>
        </Section>

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
          <h2 className="text-[28px] mb-6" style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 400 }}>
            Child Support Amount
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <ResultCard label="Father's Amount to Be Paid" amount={result.fPays} />
            <ResultCard label="Mother's Amount to Be Paid" amount={result.mPays} />
            <ResultCard label="Father's Presumed Amount" amount={result.fPresumed} secondary />
            <ResultCard label="Mother's Presumed Amount" amount={result.mPresumed} secondary />
          </div>
          <div className="pt-6 border-t border-white/20 text-[14px] space-y-1">
            <div><strong>Combined Net Monthly Income:</strong> {usd(result.combined)}</div>
            <div><strong>Minimum Monthly Need ({numChildren} child{numChildren > 1 ? "ren" : ""}):</strong> {usd(result.baseNeed)}</div>
            <div><strong>Shared Parenting Gross-Up (20%+ overnights):</strong> {result.sharedParenting ? "Yes" : "No"}</div>
            <div><strong>Father&apos;s Overnights / Year:</strong> {result.fNights.toFixed(1)}</div>
            <div><strong>Mother&apos;s Overnights / Year:</strong> {result.mNights.toFixed(1)}</div>
          </div>
          <p className="mt-6 text-[13px] text-white/70">
            Estimate only. The court program uses each parent&apos;s actual
            tax situation, including credits, deductions, and imputed-income
            analyses. For an exact calculation, call{" "}
            <a href="tel:+1-904-858-4334" className="underline">904-858-4334</a>.
          </p>
        </div>
      )}

      {/* Email section */}
      <h2>Enter Your Contact Info to Receive this Calculation by Email</h2>
      <form onSubmit={handleEmail} className="not-prose grid md:grid-cols-3 gap-4 my-6">
        <input type="text" placeholder="Your Name" value={emailName} onChange={(e) => setEmailName(e.target.value)} className={inputCls + " md:col-span-1"} />
        <input type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls + " md:col-span-1"} />
        <button type="submit" className="bg-[#03254B] hover:bg-[#8B2635] text-white uppercase font-semibold tracking-wider text-[13px] px-6 py-3 transition-colors" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
          Email this Child Support Calculation
        </button>
      </form>
      <p className="text-[13px] text-gray-600 italic">
        Note: the email-results function is currently suspended due to
        overuse/abuse by a few South Florida law firms.
      </p>

      <h2>Order a Child Support Guidelines Worksheet — $20</h2>
      <p>
        If you would like a Child Support Guidelines Worksheet &mdash; the
        kind used in court and in mediations &mdash; please:
      </p>
      <ol>
        <li>Submit your calculation along with your name and email in the form above, and</li>
        <li>
          Click{" "}
          <a href="https://secure.lawpay.com/pages/ajamesmullaney/operating" target="_blank" rel="noopener noreferrer">
            HERE
          </a>{" "}
          to pay a $20 fee.
        </li>
      </ol>
      <p>
        Depending on when you submit your information, it may take a few
        hours to receive the Guidelines Worksheet. The creation of the
        worksheet is <em>not</em> automated.
      </p>
      <p>
        Please be aware that no attorney-client relationship is created by
        submitting your information or paying for the creation of a worksheet.
      </p>

      <h2>Talk to a Florida Child Support Lawyer</h2>
      <p>
        If you are still uncertain about child support or another family-law
        issue, call me at <a href="tel:+1-904-858-4334">904-858-4334</a> or{" "}
        <Link href="/contact">send me an email</Link> to set up a
        confidential consultation.
      </p>

      <p>
        For a line-by-line walkthrough of the actual court worksheet, see{" "}
        <Link href="/florida-child-support-calculator/explanation-of-a-florida-child-support-guidelines-worksheet">
          Explanation of a Florida Child Support Guidelines Worksheet
        </Link>
        .
      </p>
    </InnerPage>
  );
}

/* ───────── UI Primitives ───────── */

const inputCls = "w-full border border-gray-300 p-3 bg-white focus:outline-none focus:border-[#8B2635]";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-[#FAF7F2] p-6 md:p-8 border border-[#03254B]/10">
      <h2
        className="text-[22px] mb-5 text-[#03254B]"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500 }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Field({ label, children, readOnly }: { label: string; children: React.ReactNode; readOnly?: boolean }) {
  return (
    <label className="block">
      <span className={`block font-semibold text-[13px] mb-1 ${readOnly ? "text-[#03254B]/60" : "text-[#03254B]"}`}>{label}</span>
      {children}
    </label>
  );
}

function Readout({ value }: { value: string }) {
  return <div className="bg-white border border-gray-200 p-3 text-[14px] font-semibold text-[#03254B]">{value}</div>;
}

function Money({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center border border-gray-300 bg-white">
      <span className="px-3 text-gray-500">$</span>
      <input type="number" min={0} step="0.01" value={value} onChange={(e) => onChange(e.target.value)} className="flex-1 p-3 outline-none" />
    </div>
  );
}

function YN({ value, onChange }: { value: "yes" | "no"; onChange: (v: "yes" | "no") => void }) {
  return (
    <div className="flex gap-0">
      {(["yes", "no"] as const).map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          className={`flex-1 py-2 text-[13px] uppercase font-semibold tracking-wider border transition-colors ${
            value === v ? "bg-[#03254B] text-white border-[#03254B]" : "bg-white text-[#03254B] border-gray-300 hover:border-[#03254B]"
          }`}
        >
          {v}
        </button>
      ))}
    </div>
  );
}

function ResultCard({ label, amount, secondary }: { label: string; amount: number; secondary?: boolean }) {
  return (
    <div className={`${secondary ? "bg-white/5" : "bg-white/10"} p-5`}>
      <div className="text-[12px] uppercase tracking-wider text-white/60">{label}</div>
      <div className="text-[28px] mt-1" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
        <span className={secondary ? "text-white/70" : "text-[#E0B158]"}>{usd(amount)}</span>{" "}
        <span className="text-[14px] text-white/50">per month</span>
      </div>
    </div>
  );
}

/* ───────── Parent Section ───────── */

function ParentSection({
  title,
  state,
  setState,
  otherGrossAnnual,
  numChildren,
}: {
  title: string;
  state: Parent;
  setState: (p: Parent) => void;
  otherGrossAnnual: number;
  numChildren: number;
}) {
  const computed = calcParent(state, numChildren, 0);
  void otherGrossAnnual;

  return (
    <Section title={title}>
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Monthly Gross Income (at least $1)">
          <Money value={state.grossMonthly} onChange={(v) => setState({ ...state, grossMonthly: v })} />
        </Field>
        <Field label="Monthly Untaxed Income (alimony received, some military pay, etc. — max $6,000)">
          <Money value={state.untaxedMonthly} onChange={(v) => setState({ ...state, untaxedMonthly: v })} />
        </Field>
        <Field label="Filing Status">
          <select value={state.filingStatus} onChange={(e) => setState({ ...state, filingStatus: e.target.value as FilingStatus })} className={inputCls}>
            <option value="single">Single</option>
            <option value="marriedJoint">Married / Joint</option>
            <option value="marriedSeparate">Married / Separate</option>
            <option value="headOfHousehold">Head of Household</option>
          </select>
        </Field>
        <Field label="Annual Income less Standard Deduction" readOnly>
          <Readout value={usd(computed.afterStdDeduction)} />
        </Field>
      </div>

      {/* Conditional deduction questions */}
      <div className="space-y-4 mt-6">
        <Deduction
          question={`Does the parent pay anything for their OWN medical/dental/vision insurance?`}
          yn={state.ownInsuranceYN}
          setYN={(v) => setState({ ...state, ownInsuranceYN: v })}
          amount={state.ownInsurance}
          setAmount={(v) => setState({ ...state, ownInsurance: v })}
          amountLabel="Monthly amount for own medical/dental/vision insurance"
        />
        <Deduction
          question="Does the parent pay anything for day care, child care, or after-school care?"
          yn={state.daycareYN}
          setYN={(v) => setState({ ...state, daycareYN: v })}
          amount={state.daycare}
          setAmount={(v) => setState({ ...state, daycare: v })}
          amountLabel="Monthly amount for day care / child care / after-school"
        />
        <Deduction
          question="Does the parent pay court-ordered CHILD SUPPORT (for children of another relationship) or ALIMONY?"
          yn={state.otherSupportYN}
          setYN={(v) => setState({ ...state, otherSupportYN: v })}
          amount={state.otherSupport}
          setAmount={(v) => setState({ ...state, otherSupport: v })}
          amountLabel="Monthly amount of court-ordered child support or alimony paid"
        />
        <Deduction
          question="Does the parent pay anything for THESE children's medical/dental/vision insurance?"
          yn={state.childrenInsuranceYN}
          setYN={(v) => setState({ ...state, childrenInsuranceYN: v })}
          amount={state.childrenInsurance}
          setAmount={(v) => setState({ ...state, childrenInsurance: v })}
          amountLabel="Monthly amount for the children's medical/dental/vision insurance"
        />
        <Deduction
          question="Does the parent pay union dues?"
          yn={state.unionDuesYN}
          setYN={(v) => setState({ ...state, unionDuesYN: v })}
          amount={state.unionDues}
          setAmount={(v) => setState({ ...state, unionDues: v })}
          amountLabel="Monthly amount paid for union dues"
        />
        <Deduction
          question="Does the parent make any mandatory retirement plan contributions? (IRA, 401(k), TSP, and most retirement plans are NOT mandatory.)"
          yn={state.mandatoryRetirementYN}
          setYN={(v) => setState({ ...state, mandatoryRetirementYN: v })}
          amount={state.mandatoryRetirement}
          setAmount={(v) => setState({ ...state, mandatoryRetirement: v })}
          amountLabel="Monthly amount of mandatory retirement contributions"
        />
      </div>
    </Section>
  );
}

function Deduction({
  question, yn, setYN, amount, setAmount, amountLabel,
}: {
  question: string;
  yn: "yes" | "no";
  setYN: (v: "yes" | "no") => void;
  amount: string;
  setAmount: (v: string) => void;
  amountLabel: string;
}) {
  return (
    <div className="bg-white border border-gray-200 p-4">
      <div className="grid md:grid-cols-[1fr_auto] gap-4 items-start">
        <p className="text-[14px] text-[#03254B]">{question}</p>
        <div className="w-full md:w-[160px]">
          <YN value={yn} onChange={setYN} />
        </div>
      </div>
      {yn === "yes" && (
        <div className="mt-3">
          <Field label={amountLabel}>
            <Money value={amount} onChange={setAmount} />
          </Field>
        </div>
      )}
    </div>
  );
}
