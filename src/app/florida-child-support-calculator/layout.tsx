import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free 2026 Florida Child Support Calculator | Jacksonville Family Law",
  description:
    "Estimate your Florida child support obligation with this free calculator built by a Jacksonville family-law attorney. Based on Florida Statutes §61.30 guidelines.",
  alternates: { canonical: "/florida-child-support-calculator" },
  openGraph: {
    title: "Free Florida Child Support Calculator",
    description:
      "Estimate your Florida child support obligation using the Florida Statutes §61.30 guidelines. Built by Jacksonville family-law attorney A. James Mullaney.",
    url: "/florida-child-support-calculator",
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
