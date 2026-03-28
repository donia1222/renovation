"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem("cookie-consent", "accepted")
    setVisible(false)
  }

  function acceptNecessary() {
    localStorage.setItem("cookie-consent", "necessary")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-[9999] flex justify-center p-3 sm:p-4"
    >
      <div
        className="w-full max-w-2xl rounded-xl shadow-2xl border border-[#B09070]/20"
        style={{ backgroundColor: "#1A1209", color: "#EDE6DA" }}
      >
        <div className="flex items-start gap-3 p-4 sm:p-5">
          {/* Icon */}
          <span className="text-lg mt-0.5 shrink-0" aria-hidden="true">🍪</span>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#C8BCA8" }}>
              Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten.
              Durch die Nutzung unserer Website stimmen Sie unserer{" "}
              <button
                onClick={() => {
                  // Trigger Datenschutz modal if available, otherwise open privacy page
                  const event = new CustomEvent("open-datenschutz")
                  window.dispatchEvent(event)
                }}
                className="underline underline-offset-2 hover:opacity-80 transition-opacity"
                style={{ color: "#B09070" }}
              >
                Datenschutzerklärung
              </button>{" "}
              zu.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <button
                onClick={accept}
                className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-90 active:scale-95"
                style={{ backgroundColor: "#B09070", color: "#1A1209" }}
              >
                Alle akzeptieren
              </button>
              <button
                onClick={acceptNecessary}
                className="px-4 py-1.5 rounded-lg text-xs font-medium border transition-all hover:opacity-80 active:scale-95"
                style={{ borderColor: "#B09070", color: "#B09070", backgroundColor: "transparent" }}
              >
                Nur notwendige
              </button>
            </div>
          </div>

          {/* Close (only necessary) */}
          <button
            onClick={acceptNecessary}
            aria-label="Schließen"
            className="shrink-0 p-1 rounded-md transition-opacity hover:opacity-60"
            style={{ color: "#8A7060" }}
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
