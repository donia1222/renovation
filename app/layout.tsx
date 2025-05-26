import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "VoiceList - Voice-Powered Shopping Lists",
  description: "Create shopping lists by voice with AI. The smart way to organize your shopping.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen">{children}</body>
    </html>
  )
}
