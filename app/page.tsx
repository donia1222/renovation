"use client"

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Hammer,
  Home,
  Palette,
  Wrench,
  Menu,
  X,
  Briefcase,
  FolderOpen,
  Users,
  MessageCircle,
  Award,
  Clock,
  Shield,
  Zap,
  TrendingUp,
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

export default function RenovationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [showAGB, setShowAGB] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)
  const [visibleSections, setVisibleSections] = useState(new Set<string>())

  const [statsRef, statsInView] = useInView(0.3)
  const c1 = useCounter(500, 2000, statsInView)
  const c2 = useCounter(15, 1800, statsInView)
  const c3 = useCounter(98, 1600, statsInView)
  const c4 = useCounter(1200, 2500, statsInView)

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress((window.pageYOffset / total) * 100)
      setHeaderScrolled(window.pageYOffset > 60)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting && e.target.id) {
          setVisibleSections(prev => new Set([...prev, e.target.id]))
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll("[data-animate]").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const v = (id: string) => visibleSections.has(id)

  const navItems = [
    { label: "Dienstleistungen", id: "dienstleistungen" },
    { label: "Projekte", id: "projekte" },
    { label: "Über Uns", id: "ueber-uns" },
    { label: "Kontakt", id: "kontakt" },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[4px] z-[100] bg-slate-700/60">
        <div
          className="h-full bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]"
          style={{ width: `${scrollProgress}%`, transition: "width 0.1s linear" }}
        />
      </div>

      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          headerScrolled
            ? "bg-slate-800/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img
            src="/images/logo.png"
            alt="nik-renovation"
            className="h-10 w-auto filter brightness-0 invert cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300 relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollTo("kontakt")}
            className="hidden md:flex bg-emerald-500 hover:bg-emerald-400 text-white rounded-full px-6 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30"
          >
            Kostenloses Angebot
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="bg-slate-800 border-t border-white/10 px-6 py-4 space-y-1">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm font-medium"
              >
                {label}
              </button>
            ))}
            <div className="pt-3">
              <Button
                onClick={() => scrollTo("kontakt")}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white rounded-full"
              >
                Kostenloses Angebot
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-slate-800 overflow-hidden flex items-center pt-16">
        {/* Mesh gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[80px]" />
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px w-12 bg-emerald-400" />
                <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase"><span className="text-base mr-1">🇨🇭</span>Schweizer Qualität seit 2009</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
                Wir{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  verwandeln
                </span>
                <br />
                Ihr Zuhause.
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                Premium-Renovierungen mit Schweizer Präzision. Vom ersten Entwurf bis zur Schlüsselübergabe – wir realisieren Ihre Traumrenovierung.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollTo("kontakt")}
                  className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-full px-8 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 group"
                >
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollTo("projekte")}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 py-6 text-base font-semibold backdrop-blur-sm transition-all duration-300 bg-transparent"
                >
                  Projekte ansehen
                </Button>
              </div>

              {/* Hero stats */}
              <div className="flex items-center gap-10 pt-2">
                {[
                  { value: "500+", label: "Projekte" },
                  { value: "15+", label: "Jahre" },
                  { value: "98%", label: "Zufrieden" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-black text-white">{value}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                <img
                  src="/interior-design-with-photoframes-blue-couch.jpg"
                  alt="Premium Renovation"
                  className="w-full h-[580px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
              </div>

              {/* Badge bottom-left */}
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 p-5 rounded-2xl shadow-2xl shadow-emerald-500/40">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-white" />
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Zertifiziert</div>
                    <div className="text-emerald-100 text-xs">Schweizer Standards</div>
                  </div>
                </div>
              </div>

              {/* Stars card top-right */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-white text-xs font-semibold">Exzellente Bewertungen</div>
                <div className="text-slate-400 text-xs">Google & Houzz</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-slate-500 animate-pulse" />
          <span className="text-[10px] tracking-[0.2em] uppercase">Scrollen</span>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="bg-emerald-500 py-3.5 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 px-10 flex-shrink-0">
              {[
                "🇨🇭 Schweizer Qualität",
                "✦ 500+ Projekte",
                "✦ 15 Jahre Erfahrung",
                "✦ 10 Jahre Garantie",
                "✦ Kostenlose Beratung",
                "✦ Schlüsselfertige Übergabe",
                "✦ 24/7 Support",
                "✦ Zertifizierte Fachkräfte",
              ].map((text) => (
                <span key={text} className="text-white font-semibold text-sm tracking-wide">{text}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS (dark) ── */}
      <section className="bg-slate-800 py-20" ref={statsRef as React.RefObject<HTMLDivElement>}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { count: c1, suffix: "+", label: "Abgeschlossene Projekte", icon: <TrendingUp className="h-5 w-5" /> },
              { count: c2, suffix: "+", label: "Jahre Erfahrung", icon: <Clock className="h-5 w-5" /> },
              { count: c3, suffix: "%", label: "Kundenzufriedenheit", icon: <Star className="h-5 w-5" /> },
              { count: c4, suffix: "+", label: "Glückliche Familien", icon: <Users className="h-5 w-5" /> },
            ].map(({ count, suffix, label, icon }, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-xl mb-4 group-hover:bg-emerald-500/30 transition-colors duration-300">
                  {icon}
                </div>
                <div className="text-5xl lg:text-6xl font-black text-white mb-2 tabular-nums">
                  {count}{suffix}
                </div>
                <div className="text-slate-500 text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES (bento grid) ── */}
      <section
        id="dienstleistungen"
        data-animate
        className="py-24 bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <div
            className={`max-w-xl mb-16 transition-all duration-700 ${v("dienstleistungen") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-emerald-600 text-xs font-bold tracking-[0.2em] uppercase">Was wir bieten</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Umbau{" "}
              <span className="text-emerald-600"> Modernisierung</span>

            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Schweizer Qualitätsstandards mit modernsten Techniken und Premium-Materialien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: <Palette className="h-7 w-7" />,
                title: "Küchenrenovierung",
                description: "Moderne Designs mit neuesten Geräten, Marmorarbeitsplatten und luxuriösen Oberflächen.",
                features: ["Personalisiertes 3D-Design", "Premium-Geräte", "10 Jahre Garantie"],
                dark: true,
              },
              {
                icon: <Home className="h-7 w-7" />,
                title: "Luxusbäder",
                description: "Verwandeln Sie Ihr Bad in ein privates Spa mit intelligenter Technologie.",
                features: ["Intelligente Armaturen", "Fußbodenheizung", "Maßgeschneiderte Duschwände"],
                dark: false,
              },
              {
                icon: <Hammer className="h-7 w-7" />,
                title: "Komplette Renovierungen",
                description: "Vollständige Wohnungsrenovierung mit integraler Projektleitung und tadellosen Oberflächen.",
                features: ["Komplette Verwaltung", "Premium-Materialien", "Schlüsselfertige Übergabe"],
                dark: false,
              },
              {
                icon: <Wrench className="h-7 w-7" />,
                title: "Technische Installationen",
                description: "Klimaanlagen, Hausautomation und elektrische Installationen mit Schweizer Zertifizierung.",
                features: ["Erweiterte Hausautomation", "Energieeffizienz", "Offizielle Zertifizierungen"],
                dark: false,
              },
              {
                icon: <Shield className="h-7 w-7" />,
                title: "Premium-Wartung",
                description: "Kundendienst mit präventiver Wartung und erweiterter Garantie.",
                features: ["Jährliche Inspektionen", "Erweiterte Garantie", "24/7 Support"],
                dark: false,
              },
              {
                icon: <Star className="h-7 w-7" />,
                title: "Design-Beratung",
                description: "Persönliche Beratung mit spezialisierten Architekten und Innenarchitekten.",
                features: ["Personalisiertes Design", "3D-Renderings", "Kontinuierliche Beratung"],
                dark: true,
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  service.dark
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-100 text-slate-900"
                } ${v("dienstleistungen") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.dark ? "bg-emerald-500/20" : "bg-emerald-400/10"}`}
                />
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 ${service.dark ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}
                >
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${service.dark ? "text-white" : "text-slate-900"}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${service.dark ? "text-slate-400" : "text-slate-500"}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, fi) => (
                    <li key={fi} className={`flex items-center gap-2 text-xs ${service.dark ? "text-slate-300" : "text-slate-600"}`}>
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className={`mt-6 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1 ${service.dark ? "text-emerald-400" : "text-emerald-600"}`}>
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
        data-animate
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${v("prozess") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-emerald-600 text-xs font-bold tracking-[0.2em] uppercase">Wie wir arbeiten</span>
              <div className="h-px w-8 bg-emerald-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Unser <span className="text-emerald-600">Prozess</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Von der ersten Idee bis zur fertigen Renovierung – transparent, termingerecht und in Schweizer Qualität.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

            {[
              { step: "01", title: "Beratung", desc: "Kostenlose Erstberatung und Bedarfsanalyse für Ihr Projekt.", icon: <MessageCircle className="h-6 w-6" /> },
              { step: "02", title: "Planung", desc: "3D-Planung, Materialauswahl und detailliertes Angebot.", icon: <Briefcase className="h-6 w-6" /> },
              { step: "03", title: "Ausführung", desc: "Fachkundige Umsetzung durch zertifizierte Schweizer Fachkräfte.", icon: <Hammer className="h-6 w-6" /> },
              { step: "04", title: "Übergabe", desc: "Qualitätskontrolle, Übergabe und 10 Jahre Garantie.", icon: <CheckCircle className="h-6 w-6" /> },
            ].map(({ step, title, desc, icon }, i) => (
              <div
                key={step}
                className={`relative z-10 flex flex-col items-center text-center transition-all duration-700 ${v("prozess") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-6 hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <div className="text-xs font-black text-emerald-500 tracking-[0.15em] mb-2">{step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projekte"
        data-animate
        className="py-24 bg-slate-800"
      >
        <div className="container mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 transition-all duration-700 ${v("projekte") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-emerald-400" />
                <span className="text-emerald-400 text-xs font-bold tracking-[0.2em] uppercase">Portfolio</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white">
                Unsere besten{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Projekte
                </span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed md:text-right">
              Jedes Projekt ist einzigartig. Eine Auswahl unserer beeindruckendsten Renovierungen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                image: "/beautiful-shot-modern-house-kitchen.jpg",
                title: "Moderne Minimalistische Küche",
                location: "Zürich, Schweiz",
                type: "Küchenrenovierung",
              },
              {
                image: "/small-bathroom-with-modern-design-style.jpg",
                title: "Luxus-Hauptbadezimmer",
                location: "Genf, Schweiz",
                type: "Premium-Bad",
              },
              {
                image: "/interior-design-with-photoframes-comfortable-couch.jpg",
                title: "Zeitgenössisches Wohnzimmer",
                location: "Basel, Schweiz",
                type: "Vollrenovierung",
              },
            ].map((project, index) => (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60 ${v("projekte") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="h-5 w-5 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-slate-300 text-sm">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        id="ueber-uns"
        data-animate
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className={`transition-all duration-700 ${v("ueber-uns") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-emerald-500" />
                <span className="text-emerald-600 text-xs font-bold tracking-[0.2em] uppercase">Warum wir?</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Vertrauen durch{" "}
                <span className="text-emerald-600">Qualität</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                Seit über 15 Jahren sind wir Ihr zuverlässiger Partner für Premium-Renovierungen in der Schweiz. Unser zertifiziertes Team verbindet Schweizer Handwerkskunst mit modernster Technologie.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield className="h-5 w-5" />, title: "10 Jahre Garantie", desc: "Auf alle Arbeiten und Materialien" },
                  { icon: <Zap className="h-5 w-5" />, title: "Schnelle Umsetzung", desc: "Termingerecht und präzise" },
                  { icon: <Award className="h-5 w-5" />, title: "Zertifiziert", desc: "Schweizer Qualitätsstandards" },
                  { icon: <Clock className="h-5 w-5" />, title: "24/7 Support", desc: "Immer für Sie erreichbar" },
                ].map(({ icon, title, desc }, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{title}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-700 delay-200 ${v("ueber-uns") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/interior-design-with-photoframes-blue-couch.jpg"
                  alt="Qualität"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-slate-900 p-6 rounded-2xl shadow-2xl">
                <div className="text-4xl font-black text-emerald-400 mb-1">98%</div>
                <div className="text-white font-semibold text-sm">Kundenzufriedenheit</div>
                <div className="text-slate-400 text-xs mt-0.5">Basierend auf 500+ Projekten</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        id="testimonials"
        data-animate
        className="py-24 bg-slate-50"
      >
        <div className="container mx-auto px-6">
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${v("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-emerald-500" />
              <span className="text-emerald-600 text-xs font-bold tracking-[0.2em] uppercase">Bewertungen</span>
              <div className="h-px w-8 bg-emerald-500" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Was unsere <span className="text-emerald-600">Kunden</span> sagen
            </h2>
            <div className="flex items-center justify-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
              <span className="text-slate-500 text-sm ml-2">5.0 Durchschnittsbewertung</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Maria Müller",
                role: "Hausbesitzerin, Zürich",
                content: "Die Renovierung unserer Küche übertraf alle Erwartungen. Die Schweizer Qualität zeigt sich in jedem Detail – von den Oberflächen bis zur pünktlichen Lieferung.",
                color: "from-emerald-400 to-teal-500",
              },
              {
                name: "Hans Weber",
                role: "Architekt, Genf",
                content: "Als Fachmann kann ich bestätigen, dass nik-renovation die höchsten Qualitätsstandards einhält. Das Team ist außergewöhnlich und das Endergebnis ist tadellos.",
                color: "from-blue-400 to-cyan-500",
              },
              {
                name: "Anna Schneider",
                role: "Designerin, Basel",
                content: "Fantastische Zusammenarbeit! Ihre Liebe zum Detail und ihr Engagement für Exzellenz unterscheidet sie deutlich von der Konkurrenz.",
                color: "from-violet-400 to-purple-500",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${v("testimonials") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-8 text-sm italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                    <div className="text-slate-400 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-teal-400/15 rounded-full blur-[80px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6">
            Bereit für Ihre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Traumrenovierung?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Kontaktieren Sie uns für eine kostenlose Beratung. Wir verwirklichen Ihre Ideen mit garantierter Schweizer Qualität.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollTo("kontakt")}
              className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-full px-10 py-6 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 group"
            >
              Jetzt Angebot anfordern
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a href="tel:+41791326565">
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-6 text-base font-semibold bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                +41 79 132 65 65
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="kontakt"
        data-animate
        className="py-24 bg-white"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div
              className={`transition-all duration-700 ${v("kontakt") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-emerald-500" />
                <span className="text-emerald-600 text-xs font-bold tracking-[0.2em] uppercase">Kontakt</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
                Lassen Sie uns{" "}
                <span className="text-emerald-600">sprechen</span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                Vereinbaren Sie eine kostenlose Beratung und erhalten Sie innerhalb von 24 Stunden ein unverbindliches Angebot.
              </p>

              <div className="space-y-3">
                {[
                  { icon: <Phone className="h-5 w-5" />, label: "Telefon", value: "+41 44 123 45 67", href: "tel:+41441234567" },
                  { icon: <MessageCircle className="h-5 w-5" />, label: "WhatsApp", value: "+41 79 132 65 65", href: "https://wa.me/41791326565" },
                  { icon: <Mail className="h-5 w-5" />, label: "E-Mail", value: "info@nik-renovation.ch", href: "mailto:info@nik-renovation.ch" },
                  { icon: <MapPin className="h-5 w-5" />, label: "Adresse", value: "Bahnhofstrasse, 9470 Buchs, Schweiz", href: null },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors duration-300 group">
                    <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      {icon}
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-slate-800 font-semibold hover:text-emerald-600 transition-colors duration-200 text-sm">{value}</a>
                      ) : (
                        <span className="text-slate-800 font-semibold text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div
              className={`bg-slate-800 rounded-2xl p-8 transition-all duration-700 delay-200 ${v("kontakt") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Angebot Anfordern</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm"
                      placeholder="Ihre Nummer"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">E-Mail</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm"
                    placeholder="ihre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Projekttyp</label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm">
                    <option value="" className="bg-slate-900">Dienstleistung wählen</option>
                    <option value="küche" className="bg-slate-900">Küchenrenovierung</option>
                    <option value="bad" className="bg-slate-900">Luxusbad</option>
                    <option value="komplett" className="bg-slate-900">Komplette Renovierung</option>
                    <option value="technik" className="bg-slate-900">Technische Installationen</option>
                    <option value="andere" className="bg-slate-900">Andere</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-medium uppercase tracking-wider mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all duration-300 text-sm resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>
                <Button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl py-4 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 group">
                  Anfrage Absenden
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-800 border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div>
              <img src="/images/logofooter.png" alt="nik-renovation" className="h-12 w-auto mb-5" />
              <p className="text-slate-400 text-sm leading-relaxed">
                Premium-Renovierungen mit garantierter Schweizer Qualität. Präzision und Exzellenz seit 2009.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Dienstleistungen</h4>
              <ul className="space-y-3">
                {["Küchenrenovierung", "Luxusbäder", "Komplette Renovierungen", "Technische Installationen"].map(item => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo("dienstleistungen")}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                    >{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Unternehmen</h4>
              <ul className="space-y-3">
                {[
                  { label: "Über Uns", id: "ueber-uns" },
                  { label: "Projekte", id: "projekte" },
                  { label: "Testimonials", id: "testimonials" },
                  { label: "Kontakt", id: "kontakt" },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button
                      onClick={() => scrollTo(id)}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                    >{label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Kontakt</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>
                  <a href="tel:+41441234567" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    +41 44 123 45 67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@nik-renovation.ch" className="flex items-center gap-2 hover:text-emerald-400 transition-colors duration-300">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    info@nik-renovation.ch
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>Bahnhofstrasse<br />9470 Buchs, Schweiz</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
            <p>&copy; 2026 nik-renovation. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6">
              <button onClick={() => setShowAGB(true)} className="hover:text-emerald-400 transition-colors">AGB</button>
              <button onClick={() => setShowDatenschutz(true)} className="hover:text-emerald-400 transition-colors">Datenschutz</button>
              <a href="https://lweb.ch" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
               Moderne & individuelle Webseiten <span className="text-pink-400 font-semibold">lweb.ch</span>
              </a>
            </div>
          </div>
          <p className="text-slate-600 text-xs text-center mt-4">Einige Bilder stammen von Freepik</p>
        </div>
      </footer>

      {/* ── WHATSAPP FAB ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.open(`https://wa.me/41791326565?text=${encodeURIComponent("Hallo! Ich interessiere mich für Ihre Renovierungsdienstleistungen.")}`, "_blank")}
          className="bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* ── AGB MODAL ── */}
      {showAGB && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900">Allgemeine Geschäftsbedingungen (AGB)</h2>
              <button onClick={() => setShowAGB(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
              <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                {[
                  { title: "§ 1 Geltungsbereich", content: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen nik-renovation und unseren Kunden über Renovierungs- und Baudienstleistungen. Abweichende Bedingungen des Kunden werden nur wirksam, wenn wir diesen ausdrücklich schriftlich zustimmen." },
                  { title: "§ 2 Vertragsschluss", content: "Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Beginn der Arbeiten zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung." },
                  { title: "§ 3 Preise und Zahlungsbedingungen", content: "Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Zahlungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 8% über dem Basiszinssatz berechnet." },
                  { title: "§ 4 Ausführung der Arbeiten", content: "Wir führen alle Arbeiten nach den anerkannten Regeln der Technik und den geltenden Normen aus. Terminangaben sind nur verbindlich, wenn sie ausdrücklich als verbindlich bezeichnet werden." },
                  { title: "§ 5 Gewährleistung", content: "Wir gewähren eine Gewährleistung von 2 Jahren ab Abnahme der Arbeiten. Bei Mängeln sind wir zunächst zur Nachbesserung berechtigt. Schlägt die Nachbesserung fehl, kann der Kunde Minderung oder Rücktritt verlangen." },
                  { title: "§ 6 Haftung", content: "Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Bei leichter Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten." },
                  { title: "§ 7 Gerichtsstand", content: "Es gilt schweizerisches Recht. Gerichtsstand ist Zürich. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt." },
                ].map(({ title, content }) => (
                  <div key={title}>
                    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                    <p>{content}</p>
                  </div>
                ))}
                <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500">
                  <strong>nik-renovation</strong> · Bahnhofstrasse · 9470 Buchs, Schweiz · Stand: Januar 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── DATENSCHUTZ MODAL ── */}
      {showDatenschutz && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900">Datenschutzerklärung</h2>
              <button onClick={() => setShowDatenschutz(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-lg hover:bg-slate-100">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-88px)]">
              <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                {[
                  { title: "1. Datenschutz auf einen Blick", content: "Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb unseres Onlineauftritts auf." },
                  { title: "2. Verantwortliche Stelle", content: "nik-renovation · Bahnhofstrasse · 9470 Buchs, Schweiz · E-Mail: info@nik-renovation.ch · Telefon: +41 44 123 45 67" },
                  { title: "3. Kontaktformular", content: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert." },
                  { title: "4. Server-Log-Dateien", content: "Der Provider erhebt automatisch Informationen in Server-Log-Dateien: Browsertyp, Betriebssystem, Referrer URL, Hostname, Uhrzeit der Serveranfrage und IP-Adresse." },
                  { title: "5. Cookies", content: "Unsere Website verwendet Cookies. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden." },
                  { title: "6. Ihre Rechte", content: "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit." },
                  { title: "7. SSL-Verschlüsselung", content: "Diese Seite nutzt SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile von 'http://' auf 'https://' wechselt." },
                  { title: "8. WhatsApp", content: "Wenn Sie die WhatsApp-Funktion nutzen, werden Sie zu WhatsApp weitergeleitet. Es gelten die Datenschutzbestimmungen von WhatsApp." },
                ].map(({ title, content }) => (
                  <div key={title}>
                    <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                    <p>{content}</p>
                  </div>
                ))}
                <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-500">
                  <strong>Letzte Aktualisierung:</strong> Januar 2024 · info@nik-renovation.ch
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── GLOBAL STYLES ── */}
      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
