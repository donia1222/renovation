"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X, Wrench, FolderOpen, Users, MessageCircle, ChevronDown, ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"

const serviceLinks = [
  { label: "Badsanierungen & Umbauten", href: "/dienstleistungen/badsanierungen" },
  { label: "Heizungsbau & Modernisierung", href: "/dienstleistungen/heizungsbau" },
  { label: "Wasserschadensanierung", href: "/dienstleistungen/wasserschadensanierung" },
  { label: "Wärmepumpen & erneuerbare Energien", href: "/dienstleistungen/waermepumpen" },
]

interface SiteHeaderProps {
  currentHref?: string
}

export default function SiteHeader({ currentHref }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true)

  useEffect(() => {
    const onScroll = () => setHeaderScrolled(window.pageYOffset > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          headerScrolled ? "bg-[#EBEBEB] border-b border-[#B09070]/30 shadow-sm" : "bg-[#EBEBEB]"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/logpnew.png" alt="NIKQI Badkultur & Wärme" className="h-10 w-auto cursor-pointer" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[#1F1F1F]/70 hover:text-[#B09070] text-sm font-semibold tracking-widest uppercase relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B09070] group-hover:w-full transition-all" />
            </Link>
            {/* Dienstleistungen with dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 text-[#B09070] text-sm font-semibold tracking-widest uppercase relative">
                Dienstleistungen
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${showServicesDropdown ? "rotate-180" : ""}`} />
                <span className="absolute -bottom-1 left-0 w-full h-px bg-[#B09070]" />
              </button>
              {showServicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-[#EBEBEB] border border-[#B09070]/20 shadow-2xl z-50">
                  <div className="h-[2px] w-full bg-[#B09070]" />
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-5 py-3.5 text-[11px] font-semibold tracking-widest uppercase border-b border-[#B09070]/10 last:border-0 transition-colors ${
                        currentHref === item.href
                          ? "text-[#B09070] bg-[#B09070]/10"
                          : "text-[#4A4A4A] hover:text-[#B09070] hover:bg-[#B09070]/10"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {[
              { label: "Projekte", href: "/#projekte" },
              { label: "Über Uns", href: "/#ueber-uns" },
              { label: "Kontakt", href: "/#kontakt" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-[#1F1F1F]/70 hover:text-[#B09070] text-sm font-semibold tracking-widest uppercase relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B09070] group-hover:w-full transition-all" />
              </Link>
            ))}
          </nav>

          <Link
            href="/#kontakt"
            className="hidden md:flex items-center gap-2 bg-[#B09070] hover:bg-[#6B6B6B] text-[#1F1F1F] font-semibold px-6 py-2.5 text-sm tracking-widest uppercase transition-colors"
          >
            Angebot
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-10 h-10 p-2"
            aria-label="Menü öffnen"
          >
            <span className={`block h-[2px] bg-[#1F1F1F] transition-all duration-300 origin-right ${isMobileMenuOpen ? "w-7 rotate-[-45deg] translate-y-[7px] bg-[#B09070]" : "w-7"}`} />
            <span className={`block h-[2px] bg-[#B09070] transition-all duration-300 ${isMobileMenuOpen ? "opacity-0 w-0" : "w-5"}`} />
            <span className={`block h-[2px] bg-[#1F1F1F] transition-all duration-300 origin-right ${isMobileMenuOpen ? "w-7 rotate-[45deg] -translate-y-[7px] bg-[#B09070]" : "w-6"}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[200]">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className="absolute top-0 right-0 w-[85vw] max-w-xs bg-[#F5F5F5] border-l border-[#B09070]/30 shadow-2xl flex flex-col"
            style={{ height: "100dvh", animation: "slideInRight 0.3s cubic-bezier(0.25,0.46,0.45,0.94)" }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#B09070]/20">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src="/logpnew.png" alt="NIKQI" className="h-8 w-auto" />
              </Link>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 flex items-center justify-center text-[#4A4A4A] hover:text-[#B09070]">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="px-3 py-5 space-y-1 overflow-y-auto">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 w-full px-4 py-3 text-[#1F1F1F]/70 hover:text-[#1F1F1F] hover:bg-[#B09070]/10 border-l-2 border-transparent hover:border-[#B09070] group"
                style={{ animation: "fadeSlideIn 0.35s ease both", animationDelay: "80ms" }}
              >
                <span className="text-[#B09070]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
                <span className="text-sm font-semibold tracking-widest uppercase flex-1 text-left">Home</span>
              </Link>
              {/* Dienstleistungen with sub-items */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center gap-3 w-full px-4 py-3 text-[#B09070] bg-[#B09070]/10 border-l-2 border-[#B09070]"
                >
                  <Wrench className="h-4 w-4" />
                  <span className="text-sm font-semibold tracking-widest uppercase flex-1 text-left">Dienstleistungen</span>
                  <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-4 pb-1">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-2.5 text-[11px] font-semibold tracking-widest uppercase border-l transition-colors ${
                          currentHref === item.href
                            ? "text-[#B09070] border-[#B09070] bg-[#B09070]/5"
                            : "text-[#4A4A4A] border-[#B09070]/30 hover:text-[#B09070] hover:bg-[#B09070]/5"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {[
                { label: "Projekte", href: "/#projekte", icon: <FolderOpen className="h-4 w-4" /> },
                { label: "Über Uns", href: "/#ueber-uns", icon: <Users className="h-4 w-4" /> },
                { label: "Kontakt", href: "/#kontakt", icon: <MessageCircle className="h-4 w-4" /> },
              ].map(({ label, href, icon }, i) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 w-full px-4 py-3 text-[#1F1F1F]/70 hover:text-[#1F1F1F] hover:bg-[#B09070]/10 border-l-2 border-transparent hover:border-[#B09070] group"
                  style={{ animation: "fadeSlideIn 0.35s ease both", animationDelay: `${i * 60 + 140}ms` }}
                >
                  <span className="text-[#B09070]">{icon}</span>
                  <span className="text-sm font-semibold tracking-widest uppercase flex-1 text-left">{label}</span>
                  <ArrowRight className="h-3 w-3 text-[#B09070] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </nav>

            <div className="mx-5 border-t border-[#B09070]/20" />

            <div className="px-5 py-5 space-y-3">
              <p className="text-[#B09070] text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">Kontakt</p>
              <a href="tel:+41791326565" className="flex items-center gap-3 text-[#1F1F1F]/70 hover:text-[#B09070] transition-colors group">
                <span className="w-8 h-8 bg-[#B09070]/10 flex items-center justify-center text-[#B09070] group-hover:bg-[#B09070]/20 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-wider">Telefon / WhatsApp</p>
                  <p className="text-sm font-semibold">079 132 65 65</p>
                </div>
              </a>
              <a href="mailto:info@nikqi.li" className="flex items-center gap-3 text-[#1F1F1F]/70 hover:text-[#B09070] transition-colors group">
                <span className="w-8 h-8 bg-[#B09070]/10 flex items-center justify-center text-[#B09070] group-hover:bg-[#B09070]/20 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-[#6B6B6B] uppercase tracking-wider">E-Mail</p>
                  <p className="text-sm font-semibold">info@nikqi.ch</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-[#1F1F1F]/70">
                <span className="w-8 h-8 bg-[#B09070]/10 flex items-center justify-center text-[#B09070]">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-[#B09070] uppercase tracking-wider">Adresse</p>
                  <p className="text-sm font-semibold text-[#1F1F1F]">Bahnhofstrasse 25, 9475 Sevelen</p>
                </div>
              </div>
            </div>

            <div className="mt-auto px-4 pb-6 pt-3 border-t border-[#B09070]/20 space-y-2">
              <Link
                href="/#kontakt"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-[#B09070] hover:bg-[#6B6B6B] text-[#1F1F1F] font-semibold py-3 text-sm tracking-widest uppercase transition-colors"
              >
                Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/41791326565"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-[#B09070]/40 text-[#B09070] hover:border-[#B09070] font-semibold py-2.5 text-sm tracking-widest uppercase transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
