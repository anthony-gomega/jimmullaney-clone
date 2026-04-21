"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * Conversion-focused sticky CTAs, sized differently for mobile vs desktop:
 *
 * - Mobile (below 1024px): a persistent 2-button bar pinned to the bottom
 *   of the viewport with one-tap Call and Message actions. This is the
 *   single highest-leverage mobile conversion pattern for a law firm.
 * - Desktop: a small floating pill that slides in from the bottom-right
 *   only after the user has scrolled past the hero. Shows the phone
 *   number and a "Free Consultation" button. Dismissible.
 *
 * The bar respects iOS safe-area insets and hides itself automatically on
 * the /contact page so we don't nag users who are already converting.
 */
export default function StickyCTA() {
  const [showDesktop, setShowDesktop] = useState(false);
  const [hidePath, setHidePath] = useState(false);

  useEffect(() => {
    // Hide on the contact page (user is already filling the form)
    const path = window.location.pathname;
    setHidePath(path === "/contact" || path === "/contact/");

    const onScroll = () => setShowDesktop(window.scrollY > 600);
    const onNav = () => {
      const p = window.location.pathname;
      setHidePath(p === "/contact" || p === "/contact/");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("popstate", onNav);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", onNav);
    };
  }, []);

  if (hidePath) return null;

  return (
    <>
      {/* Mobile: persistent bottom action bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="grid grid-cols-2 gap-0">
          <a
            href="tel:+1-904-364-4565"
            className="bg-[#8B2635] text-white py-4 flex items-center justify-center gap-2 font-semibold uppercase tracking-wider text-[13px]"
            style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>
          <Link
            href="/contact"
            className="bg-[#03254B] text-white py-4 flex items-center justify-center gap-2 font-semibold uppercase tracking-wider text-[13px]"
            style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Message
          </Link>
        </div>
      </div>

      {/* Desktop: rounded pill that slides in after scroll */}
      <div
        className={`hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-3 transition-all duration-500 ${
          showDesktop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        role="complementary"
        aria-label="Free consultation"
      >
        {/* Phone (icon-only FAB) */}
        <a
          href="tel:+1-904-364-4565"
          aria-label="Call 904-364-4565"
          title="Call 904-364-4565"
          className="w-14 h-14 rounded-full bg-[#03254B] hover:bg-[#051a3e] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(3,37,75,0.35)] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </a>

        {/* Consultation pill */}
        <Link
          href="/contact"
          className="group relative inline-flex items-center gap-2.5 bg-[#03254B] hover:bg-[#051a3e] text-white rounded-full pl-6 pr-5 py-3.5 shadow-[0_8px_24px_rgba(3,37,75,0.35)] transition-colors"
          style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
        >
          <span className="text-[13px] font-semibold tracking-wide">
            Schedule a Free Consultation
          </span>
          <span className="w-6 h-6 rounded-full bg-[#E0B158] text-[#03254B] flex items-center justify-center">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>

      {/* Mobile spacer so the sticky bar never covers bottom page content */}
      <div className="lg:hidden h-[72px]" aria-hidden="true" />
    </>
  );
}
