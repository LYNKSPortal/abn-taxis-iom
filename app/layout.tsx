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
  metadataBase: new URL("https://www.abntaxis.com"),
  title: {
    default: "ABN Taxis | Isle of Man Taxi & Airport Transfer Service",
    template: "%s | ABN Taxis Isle of Man",
  },
  description:
    "ABN Taxis — reliable taxi and airport transfer service covering the whole Isle of Man. Based in Douglas, available 24/7. Serving Ronaldsway Airport, Ramsey, Peel, Castletown, Port Erin & more. Book online or call +44 7624 354427.",
  keywords: [
    "taxi Isle of Man",
    "Isle of Man taxi",
    "taxi Douglas Isle of Man",
    "Douglas taxi",
    "IOM taxi",
    "Isle of Man taxi service",
    "airport transfer Isle of Man",
    "Ronaldsway airport taxi",
    "Ronaldsway airport transfer",
    "Isle of Man airport transfers",
    "taxi near me Isle of Man",
    "24/7 taxi Isle of Man",
    "private hire Isle of Man",
    "ABN Taxis",
    "ABN taxi Isle of Man",
    "taxi Ramsey Isle of Man",
    "taxi Peel Isle of Man",
    "taxi Castletown Isle of Man",
    "taxi Port Erin Isle of Man",
    "taxi Port St Mary Isle of Man",
    "taxi Onchan Isle of Man",
    "Isle of Man cab",
    "minicab Isle of Man",
    "executive taxi Isle of Man",
    "business travel Isle of Man",
    "corporate taxi Isle of Man",
    "hotel transfer Isle of Man",
    "seaport transfer Isle of Man",
    "taxi booking Isle of Man",
  ],
  authors: [{ name: "ABN Taxis" }],
  creator: "ABN Taxis",
  publisher: "ABN Taxis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.abntaxis.com",
  },
  openGraph: {
    title: "ABN Taxis | Isle of Man Taxi & Airport Transfer Service",
    description:
      "Reliable taxi and airport transfers covering the whole Isle of Man. Based in Douglas, available 24/7. Serving Ronaldsway Airport and all island locations.",
    url: "https://www.abntaxis.com",
    siteName: "ABN Taxis",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/Ronaldsway_Airport_Terminal_Building.jpg",
        width: 1200,
        height: 630,
        alt: "ABN Taxis — Isle of Man Airport Transfer Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABN Taxis | Isle of Man Taxi & Airport Transfer Service",
    description:
      "Reliable taxi and airport transfers covering the whole Isle of Man. Available 24/7. Book online or call +44 7624 354427.",
    images: ["/Ronaldsway_Airport_Terminal_Building.jpg"],
  },
  other: {
    "geo.region": "IM",
    "geo.placename": "Douglas, Isle of Man",
    "geo.position": "54.1526;-4.4860",
    ICBM: "54.1526, -4.4860",
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
