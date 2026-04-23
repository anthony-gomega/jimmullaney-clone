"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  label: string;
  href: string;
  children?: MenuItem[];
};

const navigation: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "A. James Mullaney", href: "/attorney/mullaney-a-james" },
      { label: "ShareFile Portal", href: "https://jimmullaney.sharefile.com/" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    label: "Family Law",
    href: "/family-law",
    children: [
      {
        label: "Divorce",
        href: "/divorce",
        children: [
          { label: "Collaborative Divorce", href: "/divorce/collaborative-divorce" },
          { label: "Alimony", href: "/divorce/alimony" },
          { label: "Military Issues", href: "/divorce/military-issues" },
          { label: "Contested Divorce", href: "/divorce/contested-divorce" },
          {
            label: "Uncontested Divorce",
            href: "/divorce/uncontested-divorce-in-jacksonville-fl",
            children: [
              {
                label: "Step-By-Step Guide To Filing Uncontested Divorce",
                href: "/divorce/uncontested-divorce-in-jacksonville-fl/step-by-step-guide-to-filing-uncontested-divorce-in-jacksonville",
              },
              {
                label: "Florida Marital Settlement Agreements",
                href: "/divorce/uncontested-divorce-in-jacksonville-fl/florida-marital-settlement-agreements",
              },
              {
                label: "Online vs. Attorney-Assisted",
                href: "/divorce/uncontested-divorce-in-jacksonville-fl/online-uncontested-divorce-vs-attorney-assisted-pros-and-cons",
              },
              {
                label: "Uncontested vs. Simplified Divorce",
                href: "/divorce/uncontested-divorce-in-jacksonville-fl/uncontested-vs-simplified-divorce-in-florida",
              },
              {
                label: "What Happens at the Final Hearing",
                href: "/divorce/uncontested-divorce-in-jacksonville-fl/what-happens-at-the-final-hearing-for-an-uncontested-divorce-in-florida",
              },
            ],
          },
          { label: "Divorce Mediation", href: "/divorce/divorce-mediation-in-jacksonville" },
          { label: "Annulment", href: "/annulment-lawyer-in-jacksonville" },
          { label: "Equitable Distribution", href: "/divorce/equitable-distribution" },
        ],
      },
      {
        label: "Parenting Plans",
        href: "/time-sharing-and-visitation-in-florida",
        children: [
          {
            label: "Relocations",
            href: "/time-sharing-and-visitation-in-florida/relocations",
          },
        ],
      },
      { label: "Paternity", href: "/paternity" },
      { label: "Child Support", href: "/divorce/child-support" },
      { label: "Prenuptial Agreements", href: "/prenuptial-agreements" },
      { label: "Contempt", href: "/contempt" },
      { label: "Modifications", href: "/modifications" },
      { label: "Domestic Violence", href: "/domestic-violence" },
    ],
  },
  { label: "Florida Child Support Calculator", href: "/florida-child-support-calculator" },
  { label: "Video FAQ", href: "/videos" },
  { label: "Portal", href: "https://jimmullaney.sharefile.com/" },
  { label: "Contact", href: "/contact" },
];

function NavItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <li
      className="relative group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1 px-3 py-3 text-[13px] font-semibold uppercase tracking-wide text-[#03254B] hover:text-[#8B2635] transition-colors whitespace-nowrap"
        style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
      >
        {item.label}
        {hasChildren && (
          <svg
            className="w-3 h-3"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Link>
      {hasChildren && open && (
        <ul
          className="absolute left-0 top-full bg-[#03254B] min-w-[260px] shadow-xl z-50"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          {item.children!.map((child) => (
            <SubNavItem key={child.label} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

function SubNavItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center justify-between px-4 py-3 text-[13px] text-white hover:bg-[#8B2635] transition-colors border-b border-white/10 last:border-b-0"
      >
        <span>{item.label}</span>
        {hasChildren && (
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.06 10 7.23 6.29a.75.75 0 111.04-1.08l4.39 4.25a.75.75 0 010 1.08l-4.39 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </Link>
      {hasChildren && open && (
        <ul className="absolute left-full top-0 bg-[#03254B] min-w-[320px] shadow-xl">
          {item.children!.map((child) => (
            <SubNavItem key={child.label} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* Main header: logo + nav + phone on one row */}
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-5 gap-4">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.jpg"
            alt="Law Office of A. James Mullaney"
            width={320}
            height={84}
            priority
            className="h-[80px] w-auto"
          />
        </Link>

        <nav className="hidden lg:block flex-1">
          <ul className="flex items-center justify-center">
            {navigation.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="tel:+1-904-858-4334"
            className="hidden lg:inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#6F1D2A] text-white font-bold text-[17px] px-7 py-4 transition-colors"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            904-858-4334
          </a>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200">
          <ul>
            {navigation.map((item) => (
              <li key={item.label} className="border-b border-gray-100">
                <Link
                  href={item.href}
                  className="block px-6 py-3 text-[14px] font-semibold uppercase text-[#03254B]"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="bg-gray-50 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-6 py-2 text-[13px] text-[#03254B]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="px-6 py-4 bg-gray-50">
              <a
                href="tel:+1-904-858-4334"
                className="block text-center bg-[#8B2635] text-white font-bold px-5 py-3"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Call 904-858-4334
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
