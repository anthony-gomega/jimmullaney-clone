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
  const [dismissed, setDismissed] = useState(false);
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

      {/* Desktop: floating pill after scroll */}
      {!dismissed && (
        <div
          className={`hidden lg:flex fixed bottom-6 right-6 z-40 transition-all duration-500 ${
            showDesktop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
          role="complementary"
          aria-label="Free consultation"
        >
          <div className="flex items-stretch bg-[#03254B] shadow-2xl">
            {/* Accent column */}
            <div className="flex items-center justify-center px-5 bg-[#03254B] border-r border-white/15">
              <div>
                <div
                  className="text-[10px] uppercase tracking-[2px] text-[#E0B158] font-semibold"
                  style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
                >
                  Free Consultation
                </div>
                <a
                  href="tel:+1-904-364-4565"
                  className="text-white text-[20px] font-bold block"
                  style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
                >
                  904-364-4565
                </a>
              </div>
            </div>
            {/* Contact action */}
            <Link
              href="/contact"
              className="bg-[#8B2635] hover:bg-[#6F1D2A] text-white px-6 flex items-center gap-2 uppercase font-semibold tracking-[2px] text-[12px] transition-colors"
              style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
            >
              Message Jim
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            {/* Dismiss */}
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="text-white/60 hover:text-white px-2 text-[18px] leading-none self-start pt-1"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Mobile spacer so the sticky bar never covers bottom page content */}
      <div className="lg:hidden h-[72px]" aria-hidden="true" />
    </>
  );
}
