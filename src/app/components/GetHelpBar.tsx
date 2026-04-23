import Link from "next/link";

export default function GetHelpBar() {
  return (
    <section className="get-help-bar py-4">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <h3
          className="text-white text-[24px] font-bold uppercase"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Get Help Now
        </h3>
        <div className="flex items-center gap-6">
          <a
            href="tel:+1-904-858-4334"
            className="text-white text-[18px] font-semibold hover:underline"
          >
            904-858-4334
          </a>
          <Link
            href="/contact"
            className="border-2 border-white text-white uppercase font-semibold tracking-wider text-[13px] px-6 py-2 hover:bg-white hover:text-[#8B2635] transition-all"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Send A Message
          </Link>
        </div>
      </div>
    </section>
  );
}
