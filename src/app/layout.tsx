import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SANHS Annex — San Andres National High School Cabadiangan",
    template: "%s | SANHS Annex",
  },
  description:
    "Official website of San Andres National High School — Cabadiangan Annex, Kadingilan, Bukidnon. A DepEd public secondary school.",
  keywords: [
    "SANHS Annex",
    "San Andres National High School",
    "Cabadiangan",
    "Kadingilan",
    "Bukidnon",
    "DepEd",
    "public school",
    "Philippines education",
    "JHS",
    "SHS",
  ],
  authors: [{ name: "SANHS Annex" }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "SANHS Annex",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
      </body>
    </html>
  );
}
