import type { Metadata } from "next";
import { Montserrat, Jost } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${montserrat.variable} ${jost.variable}`}>
      <body
        className="min-h-screen"
        style={{ fontFamily: "Montserrat, Helvetica, Arial, Lucida, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
