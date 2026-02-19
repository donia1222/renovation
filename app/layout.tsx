import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "nik-renovation – Renovierungen & Umbau | Buchs SG, Schweiz & Liechtenstein",
  description:
    "Ihr Experte für Premium-Renovierungen in Buchs SG, der ganzen Schweiz und Liechtenstein. Küchenrenovierung, Luxusbäder, Komplettumbauten – Schweizer Qualität mit 15 Jahren Erfahrung. Jetzt kostenlos beraten lassen!",
  generator: "v0.dev",
  themeColor: "#1e293b",
  metadataBase: new URL("https://www.nikqi.li"),
  alternates: {
    canonical: "https://www.nikqi.li",
  },
  keywords: [
    "Renovierung Buchs SG",
    "Umbau Buchs",
    "Renovation Schweiz",
    "Renovierung Liechtenstein",
    "Küchenrenovierung Schweiz",
    "Badezimmer Renovierung",
    "Luxusbad Umbau",
    "Innenausbau Schweiz",
    "Wohnungsrenovierung Buchs",
    "Handwerker Buchs SG",
    "Renovierungsfirma Rheintal",
    "Umbaufirma Liechtenstein",
    "nik renovation",
    "nikqi renovation",
    "Hausrenovierung Schweiz",
    "Sanierung Buchs",
    "Malerarbeiten Buchs",
    "Bodenbeläge Schweiz",
    "Innenarchitektur Buchs",
    "Schlüsselfertige Renovierung",
  ],
  authors: [{ name: "nik-renovation", url: "https://www.nikqi.li" }],
  creator: "nik-renovation",
  publisher: "nik-renovation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://www.nikqi.li",
    siteName: "nik-renovation",
    title: "nik-renovation – Premium Renovierungen | Buchs SG, Schweiz & Liechtenstein",
    description:
      "Professionelle Renovierungen in Buchs SG, der ganzen Schweiz und Liechtenstein. Küchen, Bäder, Komplettumbauten mit Schweizer Qualitätsgarantie. 500+ abgeschlossene Projekte, 15 Jahre Erfahrung.",
    images: [
      {
        url: "/beautiful-shot-modern-house-kitchen.jpg",
        width: 1200,
        height: 630,
        alt: "nik-renovation – Premium Renovierungen Schweiz und Liechtenstein",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "nik-renovation – Renovierungen Schweiz & Liechtenstein",
    description:
      "Premium-Renovierungen in Buchs SG, Schweiz und Liechtenstein. Küchen, Bäder, Komplettumbauten mit Schweizer Qualitätsgarantie.",
    images: ["/beautiful-shot-modern-house-kitchen.jpg"],
  },
  verification: {},
  category: "Renovation & Umbau",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="canonical" href="https://www.nikqi.li" />
        <meta name="geo.region" content="CH-SG" />
        <meta name="geo.placename" content="Buchs" />
        <meta name="geo.position" content="47.1667;9.4333" />
        <meta name="ICBM" content="47.1667, 9.4333" />
        <meta name="language" content="de" />
        <meta name="revisit-after" content="7 days" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "nik-renovation",
              url: "https://www.nikqi.li",
              logo: "https://www.nikqi.li/images/logo.png",
              image: "https://www.nikqi.li/beautiful-shot-modern-house-kitchen.jpg",
              description:
                "Professionelle Renovierungen in Buchs SG, der Schweiz und Liechtenstein. Küchenrenovierungen, Luxusbäder und Komplettumbauten mit Schweizer Qualitätsgarantie.",
              telephone: "+41441234567",
              email: "info@nik-renovation.ch",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bahnhofstrasse",
                addressLocality: "Buchs",
                postalCode: "9470",
                addressRegion: "SG",
                addressCountry: "CH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.1667,
                longitude: 9.4333,
              },
              areaServed: [
                { "@type": "State", name: "St. Gallen", sameAs: "https://www.wikidata.org/wiki/Q12715" },
                { "@type": "Country", name: "Schweiz", sameAs: "https://www.wikidata.org/wiki/Q39" },
                { "@type": "Country", name: "Liechtenstein", sameAs: "https://www.wikidata.org/wiki/Q347" },
              ],
              serviceType: [
                "Küchenrenovierung",
                "Badezimmer Renovierung",
                "Komplette Wohnungsrenovierung",
                "Technische Installationen",
                "Innenausbau",
                "Design-Beratung",
              ],
              priceRange: "CHF CHF CHF",
              openingHours: "Mo-Fr 08:00-18:00",
              foundingDate: "2009",
              numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "98",
                bestRating: "5",
              },
              sameAs: ["https://www.nikqi.li"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
