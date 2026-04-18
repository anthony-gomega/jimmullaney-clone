"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <footer className="footer-bg">
      {/* Get Help Form Section */}
      <div
        className="py-16"
        style={{
          backgroundImage:
            'linear-gradient(rgba(19, 30, 77, 0.85), rgba(19, 30, 77, 0.95)), url("/images/footer-jacksonville.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Left: Contact form */}
          <div>
            <h2
              className="text-white text-[36px] font-normal mb-2 uppercase"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Get Help Now
            </h2>
            <div className="w-16 h-[3px] bg-[#8B2635] mb-6" />
            <p className="text-white/80 text-[15px] mb-6">
              Fill out the form below to schedule a consultation. I respond
              quickly to every inquiry.
            </p>

            {submitted ? (
              <div className="bg-[#8B2635] p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                <p>
                  Your message has been received. I will respond within one
                  business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    className="w-full bg-transparent border border-white/40 p-3 text-white placeholder-white/60 focus:outline-none focus:border-[#8B2635]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    className="w-full bg-transparent border border-white/40 p-3 text-white placeholder-white/60 focus:outline-none focus:border-[#8B2635]"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  className="w-full bg-transparent border border-white/40 p-3 text-white placeholder-white/60 focus:outline-none focus:border-[#8B2635]"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full bg-transparent border border-white/40 p-3 text-white placeholder-white/60 focus:outline-none focus:border-[#8B2635]"
                />
                <textarea
                  name="message"
                  placeholder="Briefly describe how I can help *"
                  rows={4}
                  required
                  className="w-full bg-transparent border border-white/40 p-3 text-white placeholder-white/60 focus:outline-none focus:border-[#8B2635]"
                />
                <label className="flex items-start gap-3 text-white/80 text-[13px]">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    I have read the{" "}
                    <Link href="/disclaimer" className="underline">
                      disclaimer
                    </Link>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  className="bg-[#8B2635] hover:bg-[#6F1D2A] text-white uppercase font-semibold tracking-wider text-[14px] px-8 py-3 transition-colors"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right: Office info card with embedded map */}
          <div className="bg-white p-8 flex flex-col">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Law Office of A. James Mullaney"
                width={320}
                height={85}
                className="h-[70px] w-auto"
              />
            </Link>

            <div className="grid sm:grid-cols-2 gap-6 items-start">
              {/* Left column: details */}
              <div>
                <h3
                  className="text-[#03254B] text-[22px] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  Jacksonville Office
                </h3>
                <div className="w-12 h-[3px] bg-[#8B2635] mb-4" />
                <address className="text-[#03254B] text-[14px] leading-[1.7] not-italic mb-4">
                  8777 San Jose Blvd.
                  <br />
                  Ste. 302
                  <br />
                  Jacksonville, FL 32217
                </address>
                <p className="mb-1 text-[13px]">
                  <span className="text-gray-500 uppercase tracking-wider block mb-0.5">
                    Phone
                  </span>
                  <a
                    href="tel:+1-904-364-4565"
                    className="text-[#8B2635] font-bold text-[17px] hover:underline"
                  >
                    904-364-4565
                  </a>
                </p>
                <p className="mt-3 text-[13px]">
                  <span className="text-gray-500 uppercase tracking-wider block mb-0.5">
                    Hours
                  </span>
                  <span className="text-[#03254B]">Mon–Fri, 9am–5pm</span>
                </p>
              </div>

              {/* Right column: Google Map */}
              <div>
                <a
                  href="https://www.google.com/maps/place/8777+San+Jose+Blvd+%23302,+Jacksonville,+FL+32217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-200 hover:border-[#8B2635] transition-colors"
                >
                  <iframe
                    title="Law Office of A. James Mullaney — Jacksonville, FL"
                    src="https://maps.google.com/maps?q=8777+San+Jose+Blvd+Ste+302+Jacksonville+FL+32217&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0, pointerEvents: "none" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
              <a
                href="https://www.google.com/maps/dir//8777+San+Jose+Blvd+%23302,+Jacksonville,+FL+32217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#8B2635] text-white uppercase font-semibold tracking-wider text-[12px] px-5 py-2.5 hover:bg-[#6F1D2A] transition-colors"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Get Directions
              </a>
              <Link
                href="/contact"
                className="inline-block border-2 border-[#03254B] text-[#03254B] uppercase font-semibold tracking-wider text-[12px] px-5 py-2 hover:bg-[#03254B] hover:text-white transition-all"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Review Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer sitemap */}
      <div className="py-12 bg-[#03254B]">
        <div className="max-w-[1280px] mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h4
              className="text-white text-[16px] font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Practice Areas
            </h4>
            <ul className="space-y-2 text-[14px]">
              {[
                { label: "Divorce", href: "/divorce" },
                {
                  label: "Uncontested Divorce",
                  href: "/divorce/uncontested-divorce-in-jacksonville-fl",
                },
                { label: "Alimony", href: "/divorce/alimony" },
                { label: "Child Support", href: "/divorce/child-support" },
                {
                  label: "Parenting Plans",
                  href: "/time-sharing-and-visitation-in-florida",
                },
                { label: "Paternity", href: "/paternity" },
                {
                  label: "Mediation",
                  href: "/divorce/divorce-mediation-in-jacksonville",
                },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white text-[16px] font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Firm
            </h4>
            <ul className="space-y-2 text-[14px]">
              {[
                { label: "About", href: "/about" },
                { label: "A. James Mullaney", href: "/attorney/mullaney-a-james" },
                { label: "Office Location", href: "/jacksonville-divorce-law-office" },
                { label: "Blog", href: "/blog" },
                { label: "Video FAQ", href: "/videos" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-white text-[16px] font-semibold mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Tools & Resources
            </h4>
            <ul className="space-y-2 text-[14px]">
              {[
                {
                  label: "Florida Child Support Calculator",
                  href: "/florida-child-support-calculator",
                },
                { label: "Domestic Violence", href: "/domestic-violence" },
                { label: "Prenuptial Agreements", href: "/prenuptial-agreements" },
                { label: "Annulment", href: "/annulment-lawyer-in-jacksonville" },
                { label: "Modifications", href: "/modifications" },
                { label: "Contempt", href: "/contempt" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-[#01162f] py-5">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/60 text-[12px]">
          <p>
            &copy; {new Date().getFullYear()} Law Office of A. James Mullaney.
            All Rights Reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/site-map" className="hover:text-white transition-colors">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
