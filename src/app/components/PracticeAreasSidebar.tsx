import Link from "next/link";

const practiceAreas = [
  { label: "Divorce", href: "/divorce" },
  { label: "Uncontested Divorce", href: "/divorce/uncontested-divorce-in-jacksonville-fl" },
  { label: "Contested Divorce", href: "/divorce/contested-divorce" },
  { label: "Collaborative Divorce", href: "/divorce/collaborative-divorce" },
  { label: "Alimony", href: "/divorce/alimony" },
  { label: "Child Support", href: "/divorce/child-support" },
  { label: "Divorce Mediation", href: "/divorce/divorce-mediation-in-jacksonville" },
  { label: "Equitable Distribution", href: "/divorce/equitable-distribution" },
  { label: "Military Issues", href: "/divorce/military-issues" },
  { label: "Parenting Plans", href: "/time-sharing-and-visitation-in-florida" },
  { label: "Paternity", href: "/paternity" },
  { label: "Annulment", href: "/annulment-lawyer-in-jacksonville" },
  { label: "Prenuptial Agreements", href: "/prenuptial-agreements" },
  { label: "Domestic Violence", href: "/domestic-violence" },
  { label: "Modifications", href: "/modifications" },
  { label: "Contempt", href: "/contempt" },
  { label: "Child Support Calculator", href: "/florida-child-support-calculator" },
];

export default function PracticeAreasSidebar() {
  return (
    <aside className="lg:w-[280px] flex-shrink-0">
      <div className="bg-[#131E4D] p-6">
        <h3
          className="text-white text-[20px] font-semibold mb-4 uppercase"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Practice Areas
        </h3>
        <div className="w-12 h-[3px] bg-[#C93523] mb-4"></div>
        <ul className="space-y-2">
          {practiceAreas.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="text-white/80 text-[14px] hover:text-white block py-1 border-b border-white/10 last:border-b-0 transition-colors"
              >
                {area.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#C93523] p-6 mt-6">
        <h3
          className="text-white text-[20px] font-semibold mb-3 uppercase"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Get Help Now
        </h3>
        <p className="text-white/90 text-[14px] mb-4">
          Contact us for a consultation.
        </p>
        <a
          href="tel:+1-904-364-4565"
          className="text-white font-bold text-[18px] block mb-3"
        >
          904-364-4565
        </a>
        <Link
          href="/contact"
          className="inline-block border-2 border-white text-white uppercase font-semibold tracking-wider text-[13px] px-5 py-2 hover:bg-white hover:text-[#C93523] transition-all"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          Send A Message
        </Link>
      </div>
    </aside>
  );
}
