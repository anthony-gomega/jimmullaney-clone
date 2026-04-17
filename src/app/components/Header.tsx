import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/">
          <Image
            src="/images/logo.jpg"
            alt="Law Office of A. James Mullaney"
            width={250}
            height={66}
            priority
          />
        </Link>

        <nav
          className="hidden lg:flex items-center gap-8 text-[14px] font-semibold uppercase tracking-wide text-[#03254B]"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          <Link href="/" className="hover:text-[#C93523] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#C93523] transition-colors">
            About
          </Link>
          <Link href="/divorce" className="hover:text-[#C93523] transition-colors">
            Divorce
          </Link>
          <Link
            href="/time-sharing-and-visitation-in-florida"
            className="hover:text-[#C93523] transition-colors"
          >
            Parenting Plans
          </Link>
          <Link href="/paternity" className="hover:text-[#C93523] transition-colors">
            Paternity
          </Link>
          <Link href="/blog" className="hover:text-[#C93523] transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="hover:text-[#C93523] transition-colors">
            Contact
          </Link>
        </nav>

        <a
          href="tel:+1-904-364-4565"
          className="hidden lg:flex items-center gap-2 text-[#03254B] font-bold text-[15px]"
          style={{ fontFamily: "Jost, Helvetica, Arial, sans-serif" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now: 904-364-4565
        </a>
      </div>
    </header>
  );
}
