"use client"

import {
  ArrowRight,
  ArrowUpRight,
  FolderOpen,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Hammer,
  Home,
  Wrench,
  Menu,
  X,
  Briefcase,
  Users,
  MessageCircle,
  Award,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  Droplets,
  Flame,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.15) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, isInView] as const
}

function useCounter(target: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number | null = null
    const tick = (time: number) => {
      if (!start) start = time
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return count
}

const projectImages = [
  "/proyect/PHOTO-2026-03-27-14-41-40.jpg",
  "/proyect/PHOTO-2026-03-27-14-41-40%20copia.jpg",
  "/proyect/PHOTO-2026-03-27-14-41-40%20copia%202.jpg",
  "/proyect/PHOTO-2026-03-27-13-24-45.jpg",
  "/proyect/0048fad8-351e-441c-8dd5-b9f98cd1104c.JPG",
  "/proyect/0ef3475c-966f-4b0c-b7cd-0652d8b89c41.JPG",
  "/proyect/22aa3191-21a0-4381-8fcf-98a3916b3d30.JPG",
  "/proyect/2bbe9e13-b141-4216-98c6-5925121ea8f2.JPG",
  "/proyect/2f683263-914c-43ae-bc82-3f219582358e.JPG",
  "/proyect/323d2469-f799-46af-b9e3-2a23c797f41d.JPG",
  "/proyect/4584171e-36f6-4ee0-b807-57b7c50c2ef6.JPG",
  "/proyect/49f0b6cd-37e2-478d-a74c-c63acb5b7518.JPG",
]

export default function NikqiPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showAGB, setShowAGB] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

  const [statsRef, statsInView] = useInView(0.3)
  const c1 = useCounter(200, 2000, statsInView)
  const c2 = useCounter(10, 1800, statsInView)
  const c3 = useCounter(98, 1600, statsInView)
  const c4 = useCounter(7, 2000, statsInView)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.pageYOffset / total) * 100)
      setHeaderScrolled(window.pageYOffset > 60)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: "Dienstleistungen", id: "dienstleistungen" },
    { label: "Projekte", id: "projekte" },
    { label: "Über Uns", id: "ueber-uns" },
    { label: "Kontakt", id: "kontakt" },
  ]

  return (
    <div className="min-h-screen bg-[#F8F4EF] overflow-x-hidden" style={{ fontFamily: "var(--font-montserrat), Montserrat, Arial, sans-serif" }}>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[100] bg-[#1A1209]/20">
        <div
          className="h-full bg-[#B09070]"
          style={{ width: `${scrollProgress}%`, transition: "width 0.1s linear" }}
        />
      </div>

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          headerScrolled
            ? "bg-[#1A1209]/95 backdrop-blur-xl border-b border-[#B09070]/20 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="/logpnew.png"
            alt="NIKQI Badkultur & Wärme"
            className="h-10 w-auto cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-[#F8F4EF]/80 hover:text-[#B09070] text-sm font-semibold tracking-widest uppercase relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B09070] group-hover:w-full" />
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("kontakt")}
            className="hidden md:flex items-center gap-2 bg-[#B09070] hover:bg-[#8A7060] text-[#1A1209] font-semibold rounded-none px-6 py-2.5 text-sm tracking-widest uppercase hover:scale-105"
          >
            Angebot
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#F8F4EF]"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </header>

      {/* ── MOBILE DRAWER (outside header to avoid fixed parent bug) ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[200]" style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer panel */}
          <div
            className="absolute top-0 right-0 w-[85vw] max-w-xs bg-[#1A1209] border-l border-[#B09070]/30 shadow-2xl flex flex-col"
            style={{ height: "100dvh", animation: "slideInRight 0.3s cubic-bezier(0.25,0.46,0.45,0.94)" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#B09070]/20">
              <img src="/logpnew.png" alt="NIKQI" className="h-8 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-8 h-8 flex items-center justify-center text-[#8A7060] hover:text-[#B09070] hover:bg-[#B09070]/10 transition-all">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Nav */}
            <nav className="px-3 py-5 space-y-1">
              {[
                { label: "Dienstleistungen", id: "dienstleistungen", icon: <Wrench className="h-4 w-4" /> },
                { label: "Projekte",          id: "projekte",          icon: <FolderOpen className="h-4 w-4" /> },
                { label: "Über Uns",          id: "ueber-uns",         icon: <Users className="h-4 w-4" /> },
                { label: "Kontakt",           id: "kontakt",           icon: <MessageCircle className="h-4 w-4" /> },
              ].map(({ label, id, icon }, i) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="flex items-center gap-3 w-full px-4 py-3 text-[#D4C0A8] hover:text-[#F8F4EF] hover:bg-[#B09070]/10 border-l-2 border-transparent hover:border-[#B09070] group"
                  style={{ animation: "fadeSlideIn 0.35s ease both", animationDelay: `${i * 60 + 80}ms` }}
                >
                  <span className="text-[#B09070]">{icon}</span>
                  <span className="text-sm font-semibold tracking-widest uppercase flex-1 text-left">{label}</span>
                  <ArrowRight className="h-3 w-3 text-[#B09070] opacity-0 group-hover:opacity-100 group-hover:translate-x-1" />
                </button>
              ))}
            </nav>

            {/* Divider */}
            <div className="mx-5 border-t border-[#B09070]/20" />

            {/* Contact info */}
            <div className="px-5 py-5 space-y-3" >
              <p className="text-[#8A7060] text-[10px] font-semibold uppercase tracking-[0.2em] mb-3">Kontakt</p>
              <a href="tel:+41791326565" className="flex items-center gap-3 text-[#D4C0A8] hover:text-[#B09070] transition-colors group">
                <span className="w-8 h-8 bg-[#B09070]/10 flex items-center justify-center text-[#B09070] group-hover:bg-[#B09070]/20 transition-colors">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-[#8A7060] uppercase tracking-wider">Telefon / WhatsApp</p>
                  <p className="text-sm font-semibold">079 132 65 65</p>
                </div>
              </a>
              <a href="mailto:info@nikqi.li" className="flex items-center gap-3 text-[#D4C0A8] hover:text-[#B09070] transition-colors group">
                <span className="w-8 h-8 bg-[#B09070]/10 flex items-center justify-center text-[#B09070] group-hover:bg-[#B09070]/20 transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-[#8A7060] uppercase tracking-wider">E-Mail</p>
                  <p className="text-sm font-semibold">info@nikqi.li</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-[#D4C0A8]">
                <span className="w-8 h-8 bg-[#B09070]/10 flex items-center justify-center text-[#B09070]">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-[#8A7060] uppercase tracking-wider">Adresse</p>
                  <p className="text-sm font-semibold">Bahnhofstrasse 25, 9475 Sevelen</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-[#D4C0A8]">
                <span className="w-8 h-8 bg-[#B09070]/10 flex items-center justify-center text-[#B09070]">
                  <Clock className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-[#8A7060] uppercase tracking-wider">Erreichbar</p>
                  <p className="text-sm font-semibold">24h · 7 Tage / Woche</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-auto px-4 pb-6 pt-3 border-t border-[#B09070]/20 space-y-2" >
              <button
                onClick={() => scrollTo("kontakt")}
                className="flex items-center justify-center gap-2 w-full bg-[#B09070] hover:bg-[#8A7060] text-[#1A1209] font-semibold py-3 text-sm tracking-widest uppercase"
              >
                Angebot anfordern
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/41791326565"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-[#B09070]/40 text-[#B09070] hover:border-[#B09070] font-semibold py-2.5 text-sm tracking-widest uppercase"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section className="relative bg-[#1A1209] overflow-hidden flex items-center pt-16">
        {/* Warm glow – only desktop */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#B09070]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8A7060]/8 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Images – visible on all screens, below text on mobile / right column on desktop */}
          <div className="order-2 relative">
            <div className="grid grid-cols-2 gap-2">
              {/* Top row: left normal, right shifted down */}
              <img src="/proyect/PHOTO-2026-03-27-14-41-40.jpg" alt="Projekt" loading="eager" decoding="async" className="w-full aspect-square object-cover" />
              <img src="/proyect/PHOTO-2026-03-27-14-41-40%20copia.jpg" alt="Projekt" loading="eager" decoding="async" className="w-full aspect-square object-cover mt-8" />
              <img src="/proyect/PHOTO-2026-03-27-13-24-45.jpg" alt="Projekt" loading="eager" decoding="async" className="w-full aspect-square object-cover -mt-4" />
              <img src="/proyect/0048fad8-351e-441c-8dd5-b9f98cd1104c.JPG" alt="Projekt" loading="eager" decoding="async" className="w-full aspect-square object-cover mt-2" />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-[#B09070] px-4 py-2.5 shadow-xl">
              <div className="text-[#1A1209] font-semibold text-base">24/7</div>
              <div className="text-[#1A1209]/80 text-[10px] uppercase tracking-widest">Service · 7 Tage</div>
            </div>
          </div>
          <div className="order-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase whitespace-nowrap">Sevelen · Schweiz · Liechtenstein</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold text-[#F8F4EF] leading-[1.02] tracking-tight uppercase">
              Badkultur{" "}
              <span className="text-[#B09070]">&</span>
              <br />
              Wärme.
            </h1>

            <p className="text-[#D4C0A8] text-lg leading-relaxed max-w-xl">
              Ihr Spezialist in Sevelen – für Bad, Heizung und Wärmepumpen. Schweizer Präzision, 24/7 erreichbar.
            </p>

            {/* Service chips */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: <Droplets className="h-3.5 w-3.5" />, label: "Badsanierungen & Umbauten" },
                { icon: <Flame className="h-3.5 w-3.5" />, label: "Heizungsbau & Modernisierung" },
                { icon: <Shield className="h-3.5 w-3.5" />, label: "Wasserschadensanierung" },
                { icon: <Leaf className="h-3.5 w-3.5" />, label: "Wärmepumpen & erneuerbare Energien" },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  onClick={() => scrollTo("dienstleistungen")}
                  className="flex items-center gap-1.5 bg-[#B09070]/15 hover:bg-[#B09070]/30 border border-[#B09070]/30 hover:border-[#B09070] text-[#D4C0A8] hover:text-[#F8F4EF] text-xs font-semibold px-3 py-1.5 tracking-wide"
                >
                  <span className="text-[#B09070]">{icon}</span>
                  {label}
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("kontakt")}
                className="flex items-center justify-center gap-2 bg-[#B09070] hover:bg-[#8A7060] text-[#1A1209] font-semibold rounded-none px-8 py-4 text-sm tracking-widest uppercase hover:scale-105 group"
              >
                Kostenlose Beratung
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("projekte")}
                className="flex items-center justify-center gap-2 border border-[#B09070]/40 text-[#F8F4EF] hover:border-[#B09070] hover:text-[#B09070] font-semibold rounded-none px-8 py-4 text-sm tracking-widest uppercase bg-transparent"
              >
                Projekte ansehen
              </button>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-10 pt-2 border-t border-[#B09070]/20">
              {[
                { value: "200+", label: "Projekte" },
                { value: "10+", label: "Jahre" },
                { value: "24/7", label: "Service" },
              ].map(({ value, label }) => (
                <div key={label} className="pt-4">
                  <div className="text-2xl font-semibold text-[#B09070]">{value}</div>
                  <div className="text-xs text-[#8A7060] uppercase tracking-widest mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-[#B09070] py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap" >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-10 flex-shrink-0">
              {[
                "✦ Badsanierungen & Umbauten",
                "✦ Heizungsbau & Modernisierung",
                "✦ Wasserschadensanierung",
                "✦ Wärmepumpen & erneuerbare Energien",
                "✦ 24/7 Service",
                "✦ 7 Tage / Woche",
                "✦ Buchs SG · Schweiz · Liechtenstein",
              ].map((text) => (
                <span key={text} className="text-[#1A1209] font-semibold text-sm tracking-widest uppercase">{text}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <section className="bg-[#1A1209] py-20" ref={statsRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { count: c1, suffix: "+", label: "Abgeschlossene Projekte", icon: <TrendingUp className="h-5 w-5" /> },
              { count: c2, suffix: "+", label: "Jahre Erfahrung", icon: <Clock className="h-5 w-5" /> },
              { count: c3, suffix: "%", label: "Kundenzufriedenheit", icon: <Star className="h-5 w-5" /> },
              { count: c4, suffix: " Tage", label: "Erreichbar / Woche", icon: <Users className="h-5 w-5" /> },
            ].map(({ count, suffix, label, icon }, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#B09070]/20 text-[#B09070] mb-4 group-hover:bg-[#B09070]/30">
                  {icon}
                </div>
                <div className="text-5xl lg:text-6xl font-semibold text-[#F8F4EF] mb-2 tabular-nums">
                  {count}{suffix}
                </div>
                <div className="text-[#8A7060] text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section
        id="dienstleistungen"
       
        className="py-24 bg-[#F8F4EF]"
      >
        <div className="container mx-auto px-6">
          <div
            className={`max-w-xl mb-16 `}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Unsere Leistungen</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#1A1209] leading-tight uppercase">
              Was wir{" "}
              <span className="text-[#B09070]">bieten</span>
            </h2>
            <p className="text-[#6A5040] mt-4 leading-relaxed">
              Schweizer Qualitätsstandards mit modernsten Techniken – für Ihr Bad und Ihre Wärme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
            {[
              {
                icon: <Droplets className="h-7 w-7" />,
                title: "Badsanierungen & Umbauten",
                description: "Komplette Badsanierungen und Umbauten nach Ihren Wünschen – von der Planung bis zur schlüsselfertigen Übergabe.",
                features: ["Komplette Badplanung", "Premium-Fliesen & Armaturen", "Fußbodenheizung", "10 Jahre Garantie"],
                dark: true,
              },
              {
                icon: <Flame className="h-7 w-7" />,
                title: "Heizungsbau & Modernisierung",
                description: "Effiziente Heizungsanlagen und moderne Heizsysteme für maximalen Komfort und minimale Energiekosten.",
                features: ["Heizungsplanung", "Modernisierung bestehender Anlagen", "Energieeffizienz-Optimierung", "Zertifizierte Fachkräfte"],
                dark: false,
              },
              {
                icon: <Shield className="h-7 w-7" />,
                title: "Wasserschadensanierung",
                description: "Schnelle und professionelle Schadensbehebung bei Wasserschäden – 24/7 erreichbar, 7 Tage die Woche.",
                features: ["Notfalldienst 24/7", "Professionelle Trocknung", "Schadensanalyse", "Komplette Wiederherstellung"],
                dark: false,
              },
              {
                icon: <Leaf className="h-7 w-7" />,
                title: "Wärmepumpen & erneuerbare Energien",
                description: "Zukunftssichere Heizlösungen mit Wärmepumpen und erneuerbaren Energien – umweltfreundlich und kosteneffizient.",
                features: ["Luft-Wasser-Wärmepumpen", "Erdwärmepumpen", "Solar-Unterstützung", "Fördermittel-Beratung"],
                dark: true,
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 overflow-hidden hover:-translate-y-1 hover:shadow-2xl ${
                  service.dark
                    ? "bg-[#1A1209] text-[#F8F4EF]"
                    : "bg-white border border-[#D4C0A8] text-[#1A1209]"
                } `}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.dark ? "bg-[#B09070]/20" : "bg-[#B09070]/10"}`}
                />
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 mb-6 group-hover:scale-110 ${service.dark ? "bg-[#B09070]/20 text-[#B09070]" : "bg-[#F8F4EF] text-[#B09070]"}`}
                >
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 uppercase tracking-wide ${service.dark ? "text-[#F8F4EF]" : "text-[#1A1209]"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${service.dark ? "text-[#D4C0A8]" : "text-[#6A5040]"}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className={`flex items-center gap-2 text-xs ${service.dark ? "text-[#D4C0A8]" : "text-[#6A5040]"}`}>
                      <CheckCircle className="h-3.5 w-3.5 text-[#B09070] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 flex items-center gap-1 text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 ${service.dark ? "text-[#B09070]" : "text-[#B09070]"}`}>
                  Mehr erfahren <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        id="prozess"
       
        className="py-24 bg-[#EDE6DA]"
      >
        <div className="container mx-auto px-6">
          <div
            className={`text-center max-w-2xl mx-auto mb-16 `}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Wie wir arbeiten</span>
              <div className="h-px w-8 bg-[#B09070]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#1A1209] mb-4 uppercase">
              Unser <span className="text-[#B09070]">Prozess</span>
            </h2>
            <p className="text-[#6A5040] leading-relaxed">
              Von der ersten Idee bis zur fertigen Arbeit – transparent, termingerecht und in Schweizer Qualität.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#B09070] via-[#D4C0A8] to-[#B09070]" />

            {[
              { step: "01", title: "Beratung", desc: "Kostenlose Erstberatung und Bedarfsanalyse für Ihr Projekt.", icon: <MessageCircle className="h-6 w-6" /> },
              { step: "02", title: "Planung", desc: "Detailplanung, Materialauswahl und transparentes Angebot.", icon: <Briefcase className="h-6 w-6" /> },
              { step: "03", title: "Ausführung", desc: "Fachkundige Umsetzung durch zertifizierte Schweizer Fachkräfte.", icon: <Hammer className="h-6 w-6" /> },
              { step: "04", title: "Übergabe", desc: "Qualitätskontrolle, Übergabe und langfristige Garantie.", icon: <CheckCircle className="h-6 w-6" /> },
            ].map(({ step, title, desc, icon }, i) => (
              <div
                key={step}
                className={`relative z-10 flex flex-col items-center text-center `}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 bg-[#B09070] text-[#1A1209] flex items-center justify-center shadow-lg mb-6 hover:scale-110 hover:bg-[#8A7060]">
                  {icon}
                </div>
                <div className="text-xs font-semibold text-[#B09070] tracking-[0.2em] mb-2 uppercase">{step}</div>
                <h3 className="text-xl font-semibold text-[#1A1209] mb-3 uppercase tracking-wide">{title}</h3>
                <p className="text-[#6A5040] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projekte"
       
        className="py-24 bg-[#1A1209]"
      >
        <div className="container mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 `}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#B09070]" />
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Portfolio</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#F8F4EF] uppercase">
                Unsere{" "}
                <span className="text-[#B09070]">Projekte</span>
              </h2>
            </div>
            <p className="text-[#8A7060] max-w-sm leading-relaxed md:text-right">
              Jedes Projekt ist einzigartig – eine Auswahl unserer realisierten Arbeiten in der Region.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {projectImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setLightboxImg(img)}
                className={`group relative overflow-hidden cursor-pointer aspect-square hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 `}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <img
                  src={img}
                  alt={`Projekt ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1209]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-3 right-3 w-8 h-8 bg-[#B09070] flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="h-4 w-4 text-[#1A1209]" />
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-10 text-center delay-300 `}
          >
            <button
              onClick={() => scrollTo("kontakt")}
              className="inline-flex items-center gap-2 bg-[#B09070] hover:bg-[#8A7060] text-[#1A1209] font-semibold px-8 py-4 text-sm tracking-widest uppercase hover:scale-105 group"
            >
              Ihr Projekt starten
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        id="ueber-uns"
       
        className="py-24 bg-[#F8F4EF]"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className=""
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#B09070]" />
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Über uns</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#1A1209] mb-6 uppercase">
                Vertrauen durch{" "}
                <span className="text-[#B09070]">Qualität</span>
              </h2>
              <p className="text-[#6A5040] leading-relaxed mb-10">
                NIKQI Badkultur & Wärme steht für höchste Qualität in Badsanierungen und Heizungsbau. Unser zertifiziertes Team in Sevelen realisiert Ihre Projekte mit Schweizer Präzision – 24 Stunden, 7 Tage die Woche.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield className="h-5 w-5" />, title: "Garantierte Qualität", desc: "Auf alle Arbeiten und Materialien" },
                  { icon: <Zap className="h-5 w-5" />, title: "Schnelle Umsetzung", desc: "Termingerecht und präzise" },
                  { icon: <Award className="h-5 w-5" />, title: "Zertifiziert", desc: "Schweizer Qualitätsstandards" },
                  { icon: <Clock className="h-5 w-5" />, title: "24/7 Erreichbar", desc: "7 Tage die Woche für Sie da" },
                ].map(({ icon, title, desc }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white border border-[#D4C0A8] hover:border-[#B09070] group"
                  >
                    <div className="w-10 h-10 bg-[#F8F4EF] text-[#B09070] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B09070] group-hover:text-[#1A1209]">
                      {icon}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1A1209] text-sm uppercase tracking-wide">{title}</div>
                      <div className="text-[#8A7060] text-xs mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative delay-200 `}
            >
              <div className="flex flex-col gap-3">
                <div className="relative overflow-hidden">
                  <img src="/proyect/PHOTOs-2026-03-27-13-33-23.jpg" alt="Vorher" className="w-full h-64 object-cover" />
                  <span className="absolute top-3 left-3 bg-[#1A1209] text-[#B09070] text-xs font-semibold uppercase tracking-widest px-3 py-1">Vorher</span>
                </div>
                <div className="relative overflow-hidden">
                  <img src="/proyect/PHOTO-2026-03-27-13-33-23.jpg" alt="Nachher" className="w-full h-64 object-cover" />
                  <span className="absolute top-3 left-3 bg-[#B09070] text-[#1A1209] text-xs font-semibold uppercase tracking-widest px-3 py-1">Nachher</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#B09070] p-5 shadow-2xl">
                <div className="text-3xl font-semibold text-[#1A1209] mb-1">98%</div>
                <div className="text-[#1A1209] font-semibold text-sm uppercase tracking-wide">Kundenzufriedenheit</div>
                <div className="text-[#1A1209]/70 text-xs mt-0.5">Basierend auf 200+ Projekten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
       
        className="py-24 bg-[#EDE6DA]"
      >
        <div className="container mx-auto px-6">
          <div
            className={`text-center max-w-2xl mx-auto mb-16 `}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Bewertungen</span>
              <div className="h-px w-8 bg-[#B09070]" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold text-[#1A1209] mb-4 uppercase">
              Was unsere <span className="text-[#B09070]">Kunden</span> sagen
            </h2>
            <div className="flex items-center justify-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-[#B09070] fill-[#B09070]" />)}
              <span className="text-[#6A5040] text-sm ml-2">5.0 Bewertung</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Thomas K.",
                role: "Hausbesitzer, Buchs SG",
                content: "Die Badsanierung übertraf alle Erwartungen. Saubere Arbeit, pünktlich fertiggestellt und die Qualität ist ausgezeichnet. Ich kann NIKQI nur weiterempfehlen!",
              },
              {
                name: "Sandra M.",
                role: "Hauseigentümerin, Sevelen",
                content: "Wärmepumpe perfekt installiert und erklärt. Der Service ist immer erreichbar – auch am Wochenende. Professionell und freundlich.",
              },
              {
                name: "Peter W.",
                role: "Bauherr, Liechtenstein",
                content: "Wasserschaden um 22 Uhr und NIKQI war innerhalb einer Stunde da. Schnell, professionell und kompetent. Danke für den tollen 24/7 Service!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white border border-[#D4C0A8] p-8 hover:border-[#B09070] hover:shadow-xl hover:-translate-y-1 `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#B09070] fill-[#B09070]" />
                  ))}
                </div>
                <p className="text-[#6A5040] leading-relaxed mb-8 text-sm italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-[#B09070] flex items-center justify-center text-[#1A1209] font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1A1209] text-sm uppercase tracking-wide">{testimonial.name}</div>
                    <div className="text-[#8A7060] text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#B09070] py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-semibold text-[#1A1209] mb-6 uppercase">
            Bereit für Ihr{" "}
            <span className="text-white">Projekt?</span>
          </h2>
          <p className="text-[#1A1209]/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Kontaktieren Sie uns jetzt – kostenlose Beratung, schnelle Reaktion, Schweizer Qualität. 24/7 für Sie erreichbar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("kontakt")}
              className="inline-flex items-center justify-center gap-2 bg-[#1A1209] hover:bg-[#0D0905] text-[#B09070] font-semibold px-10 py-4 text-sm tracking-widest uppercase hover:scale-105 group"
            >
              Jetzt Angebot anfordern
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="tel:+41791326565">
              <button className="inline-flex items-center justify-center gap-2 border-2 border-[#1A1209] text-[#1A1209] hover:bg-[#1A1209] hover:text-[#B09070] font-semibold px-10 py-4 text-sm tracking-widest uppercase">
                <Phone className="h-4 w-4" />
                079 132 65 65
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="kontakt"
       
        className="py-24 bg-[#F8F4EF]"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div
              className=""
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#B09070]" />
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Kontakt</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold text-[#1A1209] mb-6 uppercase">
                Sprechen wir{" "}
                <span className="text-[#B09070]">miteinander</span>
              </h2>
              <p className="text-[#6A5040] leading-relaxed mb-10">
                Vereinbaren Sie eine kostenlose Beratung. 24/7 erreichbar – 7 Tage die Woche.
              </p>

              <div className="space-y-3">
                {[
                  { icon: <Phone className="h-5 w-5" />, label: "Telefon / WhatsApp", value: "079 132 65 65", href: "tel:+41791326565" },
                  { icon: <MessageCircle className="h-5 w-5" />, label: "WhatsApp", value: "079 132 65 65", href: "https://wa.me/41791326565" },
                  { icon: <Mail className="h-5 w-5" />, label: "E-Mail", value: "info@nikqi.li", href: "mailto:info@nikqi.li" },
                  { icon: <MapPin className="h-5 w-5" />, label: "Adresse", value: "Bahnhofstrasse 25, 9475 Sevelen, Schweiz", href: null },
                  { icon: <Clock className="h-5 w-5" />, label: "Erreichbarkeit", value: "24 Stunden · 7 Tage / Woche", href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 hover:bg-[#EDE6DA] group">
                    <div className="w-11 h-11 bg-[#EDE6DA] text-[#B09070] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B09070] group-hover:text-[#1A1209]">
                      {icon}
                    </div>
                    <div>
                      <div className="text-[#8A7060] text-xs font-semibold uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-[#1A1209] font-semibold hover:text-[#B09070] text-sm">{value}</a>
                      ) : (
                        <span className="text-[#1A1209] font-semibold text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div
              className={`bg-[#1A1209] p-8 delay-200 `}
            >
              <h3 className="text-2xl font-semibold text-[#F8F4EF] mb-8 uppercase tracking-wide">Angebot anfordern</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8A7060] text-xs font-semibold uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-[#F8F4EF] placeholder:text-[#6A5040] focus:outline-none focus:border-[#B09070] focus:ring-1 focus:ring-[#B09070] text-sm"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8A7060] text-xs font-semibold uppercase tracking-widest mb-2">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-[#F8F4EF] placeholder:text-[#6A5040] focus:outline-none focus:border-[#B09070] focus:ring-1 focus:ring-[#B09070] text-sm"
                      placeholder="Ihre Nummer"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#8A7060] text-xs font-semibold uppercase tracking-widest mb-2">E-Mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-[#F8F4EF] placeholder:text-[#6A5040] focus:outline-none focus:border-[#B09070] focus:ring-1 focus:ring-[#B09070] text-sm"
                    placeholder="ihre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#8A7060] text-xs font-semibold uppercase tracking-widest mb-2">Leistung</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 text-[#F8F4EF] focus:outline-none focus:border-[#B09070] focus:ring-1 focus:ring-[#B09070] text-sm">
                    <option value="" className="bg-[#1A1209]">Leistung wählen</option>
                    <option value="bad" className="bg-[#1A1209]">Badsanierung & Umbau</option>
                    <option value="heizung" className="bg-[#1A1209]">Heizungsbau & Modernisierung</option>
                    <option value="wasser" className="bg-[#1A1209]">Wasserschadensanierung</option>
                    <option value="waerme" className="bg-[#1A1209]">Wärmepumpen & erneuerbare Energien</option>
                    <option value="andere" className="bg-[#1A1209]">Andere</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#8A7060] text-xs font-semibold uppercase tracking-widest mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-[#F8F4EF] placeholder:text-[#6A5040] focus:outline-none focus:border-[#B09070] focus:ring-1 focus:ring-[#B09070] text-sm resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#B09070] hover:bg-[#8A7060] text-[#1A1209] font-semibold py-4 text-sm tracking-widest uppercase hover:shadow-lg group"
                >
                  Anfrage absenden
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1A1209] border-t border-[#B09070]/20 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div>
              <img src="/logpnew.png" alt="NIKQI Badkultur & Wärme" className="h-14 w-auto mb-5" />
              <p className="text-[#8A7060] text-sm leading-relaxed">
                Badsanierungen, Heizungsbau und Wärmepumpen mit Schweizer Qualität. 24/7 für Sie erreichbar.
              </p>
            </div>
            <div>
              <h4 className="text-[#F8F4EF] font-semibold mb-5 text-xs uppercase tracking-widest">Leistungen</h4>
              <ul className="space-y-3">
                {["Badsanierungen & Umbauten", "Heizungsbau & Modernisierung", "Wasserschadensanierung", "Wärmepumpen & erneuerbare Energien"].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo("dienstleistungen")}
                      className="text-[#8A7060] hover:text-[#B09070] text-sm text-left"
                    >{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#F8F4EF] font-semibold mb-5 text-xs uppercase tracking-widest">Unternehmen</h4>
              <ul className="space-y-3">
                {[
                  { label: "Über Uns", id: "ueber-uns" },
                  { label: "Projekte", id: "projekte" },
                  { label: "Bewertungen", id: "testimonials" },
                  { label: "Kontakt", id: "kontakt" },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-[#8A7060] hover:text-[#B09070] text-sm"
                    >{label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#F8F4EF] font-semibold mb-5 text-xs uppercase tracking-widest">Kontakt</h4>
              <ul className="space-y-3 text-sm text-[#8A7060]">
                <li>
                  <a href="tel:+41791326565" className="flex items-center gap-2 hover:text-[#B09070]">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    079 132 65 65
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nikqi.li" className="flex items-center gap-2 hover:text-[#B09070]">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    info@nikqi.li
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Bahnhofstrasse 25<br />9475 Sevelen, Schweiz</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>24h · 7 Tage / Woche</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#B09070]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#6A5040] text-xs">
            <p>&copy; 2026 NIKQI Badkultur & Wärme. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6">
              <button onClick={() => setShowAGB(true)} className="hover:text-[#B09070] transition-colors uppercase tracking-widest">AGB</button>
              <button onClick={() => setShowDatenschutz(true)} className="hover:text-[#B09070] transition-colors uppercase tracking-widest">Datenschutz</button>
              <a href="https://lweb.ch" target="_blank" rel="noopener noreferrer" className="hover:text-[#B09070] transition-colors">
                Webseite <span className="text-[#B09070] font-semibold">lweb.ch</span>
              </a>
            </div>
          </div>
        </div>
      </footer>


      {/* ── LIGHTBOX ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-[#F8F4EF] hover:text-[#B09070] transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImg}
            alt="Projekt"
            className="max-w-full max-h-[90vh] object-contain shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}

      {/* ── AGB MODAL ── */}
      {showAGB && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-[#D4C0A8]">
              <h2 className="text-2xl font-semibold text-[#1A1209] uppercase tracking-wide">Allgemeine Geschäftsbedingungen</h2>
              <button onClick={() => setShowAGB(false)} className="text-[#8A7060] hover:text-[#1A1209] transition-colors p-1">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
              <div className="space-y-6 text-[#6A5040] text-sm leading-relaxed">
                {[
                  { title: "§ 1 Geltungsbereich", content: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen NIKQI Badkultur & Wärme und unseren Kunden über Sanierungsarbeiten, Heizungsbau und verwandte Dienstleistungen." },
                  { title: "§ 2 Vertragsschluss", content: "Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Beginn der Arbeiten zustande." },
                  { title: "§ 3 Preise und Zahlungsbedingungen", content: "Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig." },
                  { title: "§ 4 Ausführung der Arbeiten", content: "Wir führen alle Arbeiten nach den anerkannten Regeln der Technik und den geltenden Normen aus. Terminangaben sind nur verbindlich, wenn sie ausdrücklich als verbindlich bezeichnet werden." },
                  { title: "§ 5 Gewährleistung", content: "Wir gewähren eine Gewährleistung gemäß Schweizer Recht ab Abnahme der Arbeiten. Bei Mängeln sind wir zunächst zur Nachbesserung berechtigt." },
                  { title: "§ 6 Gerichtsstand", content: "Es gilt schweizerisches Recht. Gerichtsstand ist St. Gallen. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt." },
                ].map(({ title, content }) => (
                  <div key={title}>
                    <h3 className="font-semibold text-[#1A1209] mb-2 uppercase tracking-wide">{title}</h3>
                    <p>{content}</p>
                  </div>
                ))}
                <div className="p-4 bg-[#F8F4EF] text-xs text-[#8A7060]">
                  <strong>NIKQI Badkultur & Wärme</strong> · Bahnhofstrasse 25 · 9475 Sevelen, Schweiz · Stand: 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DATENSCHUTZ MODAL ── */}
      {showDatenschutz && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-[#D4C0A8]">
              <h2 className="text-2xl font-semibold text-[#1A1209] uppercase tracking-wide">Datenschutzerklärung</h2>
              <button onClick={() => setShowDatenschutz(false)} className="text-[#8A7060] hover:text-[#1A1209] transition-colors p-1">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
              <div className="space-y-6 text-[#6A5040] text-sm leading-relaxed">
                {[
                  { title: "1. Verantwortliche Stelle", content: "NIKQI Badkultur & Wärme · Bahnhofstrasse 25 · 9475 Sevelen, Schweiz · E-Mail: info@nikqi.li · Telefon: 079 132 65 65" },
                  { title: "2. Kontaktformular", content: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert." },
                  { title: "3. Server-Log-Dateien", content: "Der Provider erhebt automatisch Informationen in Server-Log-Dateien: Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit der Serveranfrage und IP-Adresse." },
                  { title: "4. Cookies", content: "Unsere Website verwendet technisch notwendige Cookies. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden." },
                  { title: "5. Ihre Rechte", content: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten." },
                  { title: "6. WhatsApp", content: "Wenn Sie die WhatsApp-Funktion nutzen, werden Sie zu WhatsApp weitergeleitet. Es gelten die Datenschutzbestimmungen von WhatsApp/Meta." },
                ].map(({ title, content }) => (
                  <div key={title}>
                    <h3 className="font-semibold text-[#1A1209] mb-2 uppercase tracking-wide">{title}</h3>
                    <p>{content}</p>
                  </div>
                ))}
                <div className="p-4 bg-[#F8F4EF] text-xs text-[#8A7060]">
                  <strong>Letzte Aktualisierung:</strong> 2026 · info@nikqi.li
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
