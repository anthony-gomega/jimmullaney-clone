import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-bg py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <Image
              src="/images/logo.jpg"
              alt="Law Office of A. James Mullaney"
              width={200}
              height={53}
              className="mb-4 brightness-0 invert"
            />
            <p className="text-white/70 text-[14px] leading-[1.8] mb-4">
              A. James Mullaney | Family Law Attorney &amp; Mediator
            </p>
            <p className="text-white/70 text-[14px] leading-[1.8]">
              Contact:
              <br />
              8777 San Jose Blvd. Ste. 302
              <br />
              Jacksonville, FL 32217
              <br />
              Phone:{" "}
              <a
                href="tel:+1-904-364-4565"
                className="text-white hover:underline"
              >
                904-364-4565
              </a>
            </p>
          </div>
          <div className="lg:w-1/3">
            <h4
              className="text-white text-[18px] font-semibold mb-4 uppercase"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Quick Links
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
                { label: "Domestic Violence", href: "/domestic-violence" },
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
          <div className="lg:w-1/3">
            <h4
              className="text-white text-[18px] font-semibold mb-4 uppercase"
              style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
            >
              Jacksonville Office
            </h4>
            <p className="text-white/70 text-[14px] leading-[1.8] mb-4">
              8777 San Jose Blvd. Ste. 302
              <br />
              Jacksonville, FL 32217
            </p>
            <a
              href="tel:+1-904-364-4565"
              className="text-white text-[16px] font-semibold hover:underline"
            >
              904-364-4565
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-[#C93523] text-white uppercase font-semibold tracking-wider text-[13px] px-6 py-2 hover:bg-[#a82b1c] transition-colors"
                style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
              >
                Review Us
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-white/50 text-[13px]">
          <p>
            &copy; 2025 Law Office of A. James Mullaney. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
            <Link href="/site-map" className="hover:text-white">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
