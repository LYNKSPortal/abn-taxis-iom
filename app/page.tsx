import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TaxiService",
      "@id": "https://www.abntaxis.com/#taxiservice",
      "name": "ABN Taxis",
      "alternateName": "ABN Taxi Service",
      "description":
        "Reliable taxi and airport transfer service covering the whole Isle of Man. Based in Douglas, available 24/7. Serving Ronaldsway Airport, Ramsey, Peel, Castletown, Port Erin, Port St Mary, Onchan and all island locations.",
      "url": "https://www.abntaxis.com",
      "telephone": "+447624354427",
      "email": "bookings@abntaxis.com",
      "currenciesAccepted": "GBP",
      "paymentAccepted": "Cash, Credit Card",
      "priceRange": "££",
      "openingHours": "Mo-Su 00:00-23:59",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Douglas",
        "addressRegion": "Isle of Man",
        "addressCountry": "IM",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 54.1526,
        "longitude": -4.486,
      },
      "areaServed": [
        { "@type": "City", "name": "Douglas" },
        { "@type": "City", "name": "Ramsey" },
        { "@type": "City", "name": "Peel" },
        { "@type": "City", "name": "Castletown" },
        { "@type": "City", "name": "Port Erin" },
        { "@type": "City", "name": "Port St Mary" },
        { "@type": "City", "name": "Onchan" },
        { "@type": "AdministrativeArea", "name": "Isle of Man" },
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Taxi Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airport Transfers — Ronaldsway Airport" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Island-Wide Taxi Service" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business & Executive Travel" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Accounts" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "24/7 Taxi Bookings" } },
        ],
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "300",
      },
      "sameAs": ["https://www.abntaxis.com"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.abntaxis.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I book a taxi or airport transfer in the Isle of Man?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book through the contact form on our website, call us directly at +44 7624 354427, or email bookings@abntaxis.com. We recommend booking at least 24 hours in advance, though we can accommodate last-minute requests subject to availability.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you cover the whole Isle of Man?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — ABN Taxis provides taxi and transfer coverage across the entire Isle of Man, including Douglas, Ramsey, Peel, Castletown, Port Erin, Port St Mary, Onchan and all areas in between.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer airport transfers to and from Ronaldsway Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialise in airport transfers to and from Isle of Man Airport (Ronaldsway). We monitor all flight arrivals in real-time and adjust pickup times if your flight is delayed or arrives early at no extra charge.",
          },
        },
        {
          "@type": "Question",
          "name": "Are you available 24 hours a day, 7 days a week?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, ABN Taxis is available 24/7, 365 days a year across the Isle of Man. Early morning airport runs, late night pickups — we are always available.",
          },
        },
        {
          "@type": "Question",
          "name": "Are you licenced and insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we are fully licenced, insured, and have over 10 years of professional driving experience. Your safety and comfort are our top priorities on every journey.",
          },
        },
        {
          "@type": "Question",
          "name": "What payment methods do you accept?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We accept cash, all major credit and debit cards, and bank transfers. Business clients can also set up monthly invoicing arrangements.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you offer corporate or business taxi accounts in the Isle of Man?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer corporate accounts with monthly billing for businesses on the Isle of Man. Contact us at bookings@abntaxis.com to discuss your requirements.",
          },
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.abntaxis.com/#localbusiness",
      "name": "ABN Taxis",
      "image": "https://www.abntaxis.com/Ronaldsway_Airport_Terminal_Building.jpg",
      "url": "https://www.abntaxis.com",
      "telephone": "+447624354427",
      "email": "bookings@abntaxis.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Douglas",
        "addressRegion": "Isle of Man",
        "addressCountry": "IM",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 54.1526,
        "longitude": -4.486,
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "reviewCount": "300",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
