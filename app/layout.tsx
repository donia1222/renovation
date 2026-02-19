import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "nik-renovation – Premium Renovierungen Schweiz",
  description: "Luxus-Renovierungen mit garantierter Schweizer Qualität. Küchen, Bäder, Komplettumbauten – Ihr Partner in Buchs SG.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
