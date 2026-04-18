import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Law Office of A. James Mullaney | Jacksonville Divorce And Family Law Attorney",
  description:
    "If you need family law services, call a Jacksonville attorney and certified family court mediator with a quarter century of experience. Contact the Law Office of A. James Mullaney at 904-364-4565.",
  openGraph: {
    title: "Law Office of A. James Mullaney | Jacksonville Divorce And Family Law Attorney",
    description:
      "If you need family law services, call a Jacksonville attorney and certified family court mediator with a quarter century of experience. Contact the Law Office of A. James Mullaney at 904-364-4565.",
    url: "https://www.jimmullaney.com/",
    siteName: "Law Office of A. James Mullaney",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body
        className="min-h-screen"
        style={{ fontFamily: "var(--font-inter), Helvetica, Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
