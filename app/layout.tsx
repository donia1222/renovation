import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NIKQI Badkultur & Wärme – Badsanierungen & Heizungsbau | Sevelen, Schweiz & Liechtenstein",
  description:
    "NIKQI Badkultur & Wärme – Ihr Spezialist für Badsanierungen, Heizungsbau, Wasserschadensanierung und Wärmepumpen in Sevelen (SG), der ganzen Schweiz und Liechtenstein. 24h erreichbar, 7 Tage die Woche. Tel. 079 132 65 65",
  generator: "v0.dev",
  themeColor: "#1A1209",
  metadataBase: new URL("https://www.nikqi.li"),
  alternates: {
    canonical: "https://www.nikqi.li",
  },
  keywords: [
    "NIKQI Badkultur Wärme",
    "Badsanierung Sevelen",
    "Badsanierung Rheintal",
    "Heizungsbau Sevelen",
    "Heizungsbau Schweiz",
    "Wasserschadensanierung Schweiz",
    "Wärmepumpen Sevelen",
    "Wärmepumpen Liechtenstein",
    "Badumbau Rheintal",
    "Heizungsmodernisierung Schweiz",
    "erneuerbare Energien Schweiz",
    "Sanitär Sevelen SG",
    "24h Notfalldienst Heizung",
    "Badsanierung Liechtenstein",
    "Badkultur Wärme Sevelen",
  ],
  authors: [{ name: "NIKQI Badkultur & Wärme", url: "https://www.nikqi.li" }],
  creator: "NIKQI Badkultur & Wärme",
  publisher: "NIKQI Badkultur & Wärme",
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
    siteName: "NIKQI Badkultur & Wärme",
    title: "NIKQI Badkultur & Wärme – Badsanierungen & Heizungsbau | Sevelen SG",
    description:
      "Badsanierungen, Heizungsbau, Wasserschadensanierung und Wärmepumpen in Sevelen, der ganzen Schweiz und Liechtenstein. 24h erreichbar – 079 132 65 65.",
    images: [
      {
        url: "/logpnew.png",
        width: 1200,
        height: 630,
        alt: "NIKQI Badkultur & Wärme – Sevelen, Schweiz & Liechtenstein",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIKQI Badkultur & Wärme – 24/7 Service",
    description:
      "Badsanierungen, Heizungsbau und Wärmepumpen in Sevelen, Schweiz und Liechtenstein. 24h erreichbar – 079 132 65 65.",
    images: ["/logpnew.png"],
  },
  verification: {},
  category: "Badkultur & Heizungsbau",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={poppins.variable}>
      <head>
        <link rel="icon" href="/logpnew.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/logpnew.png" />
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
              name: "NIKQI Badkultur & Wärme",
              url: "https://www.nikqi.li",
              logo: "https://www.nikqi.li/logpnew.png",
              image: "https://www.nikqi.li/logpnew.png",
              description:
                "Badsanierungen, Heizungsbau, Wasserschadensanierung und Wärmepumpen in Sevelen SG, der Schweiz und Liechtenstein. 24h erreichbar, 7 Tage die Woche.",
              telephone: "+41791326565",
              email: "info@nikqi.li",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Bahnhofstrasse 25",
                addressLocality: "Sevelen",
                postalCode: "9475",
                addressRegion: "SG",
                addressCountry: "CH",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.1232,
                longitude: 9.4862,
              },
              areaServed: [
                { "@type": "State", name: "St. Gallen", sameAs: "https://www.wikidata.org/wiki/Q12715" },
                { "@type": "Country", name: "Schweiz", sameAs: "https://www.wikidata.org/wiki/Q39" },
                { "@type": "Country", name: "Liechtenstein", sameAs: "https://www.wikidata.org/wiki/Q347" },
              ],
              serviceType: [
                "Badsanierungen & Umbauten",
                "Heizungsbau & Modernisierung",
                "Wasserschadensanierung",
                "Wärmepumpen & erneuerbare Energien",
              ],
              priceRange: "CHF CHF CHF",
              openingHours: "Mo-Su 00:00-23:59",
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
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  )
}
