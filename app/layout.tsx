import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exclusive Airport Transfer | Premium Chauffeur Service Isle of Man",
  description: "Luxury airport transfers and executive chauffeur services across the Isle of Man. Professional drivers, premium vehicles, 24/7 availability. Book your luxury transport today.",
  keywords: ["airport transfer", "Isle of Man", "chauffeur service", "luxury transport", "executive travel", "Douglas airport", "premium taxi"],
  authors: [{ name: "Exclusive Airport Transfer" }],
  openGraph: {
    title: "Exclusive Airport Transfer | Premium Chauffeur Service",
    description: "Experience luxury travel with Isle of Man's premier chauffeur service",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
