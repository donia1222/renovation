"use client"

import { useEffect } from "react"
import Link from "next/link"
import SiteHeader from "@/components/SiteHeader"
import {
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock,
  Leaf, Star, Shield, TrendingUp, BadgeCheck, Zap, Sun,
} from "lucide-react"

export default function WaermepumpenPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal")
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-[#EBEBEB]" style={{ fontFamily: "var(--font-poppins), Poppins, Arial, sans-serif" }}>
      <SiteHeader currentHref="/dienstleistungen/waermepumpen" />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[70vh] min-h-[480px] flex items-end">
          <img
            src="/interior-design-with-photoframes-comfortable-couch.jpg"
            alt="Wärmepumpen"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 via-[#1F1F1F]/30 to-transparent" />
          {/* Eco badge */}
          <div className="absolute top-24 right-6 md:right-12 bg-[#B09070] px-5 py-4 text-center hero-item" style={{ animationDelay: "300ms" }}>
            <Leaf className="h-6 w-6 text-[#1F1F1F] mx-auto mb-1" />
            <div className="text-[#1F1F1F] font-semibold text-xs uppercase tracking-widest">Öko</div>
          </div>
          <div className="relative z-10 container mx-auto px-6 pb-14">
            <div className="flex items-center gap-3 mb-4 hero-item" style={{ animationDelay: "0ms" }}>
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Erneuerbare Energien</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#B09070] px-3 py-1.5 mb-5 hero-item" style={{ animationDelay: "60ms" }}>
              <TrendingUp className="h-3.5 w-3.5 text-[#1F1F1F]" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F1F1F]">Förderung möglich</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold text-white leading-tight uppercase hero-item" style={{ animationDelay: "110ms" }}>
              Wärmepumpen &amp;<br />
              <span className="text-[#B09070]">Erneuerbare Energien</span>
            </h1>
            <p className="text-white/80 mt-4 text-lg max-w-xl leading-relaxed hero-item" style={{ animationDelay: "200ms" }}>
              Zukunftssichere Heizlösungen mit Wärmepumpen und erneuerbaren Energien – umweltfreundlich und kosteneffizient.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <div className="bg-[#B09070] py-4">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-[#1F1F1F]">
          {[
            { icon: <Leaf className="h-4 w-4" />, label: "CO₂-neutral heizen" },
            { icon: <TrendingUp className="h-4 w-4" />, label: "Förderung bis 30%" },
            { icon: <BadgeCheck className="h-4 w-4" />, label: "Zertifizierte Installation" },
            { icon: <Clock className="h-4 w-4" />, label: "24/7 Service" },
          ].map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest">
              {icon} {label}
            </div>
          ))}
        </div>
      </div>

      {/* ── DESCRIPTION ── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#B09070]" />
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Die Zukunft der Wärme</span>
              </div>
              <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase leading-tight mb-6">
                Nachhaltig heizen –<br /><span className="text-[#B09070]">Kosten sparen</span>
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Wärmepumpen sind die Heiztechnologie der Zukunft: Sie nutzen kostenlose Umweltwärme aus Luft, Erde oder Wasser und wandeln sie effizient in Heizwärme um – bis zu 75% der Energie kommen kostenlos aus der Natur.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                NIKQI plant, liefert und installiert Wärmepumpensysteme aller Typen und berät Sie umfassend zu staatlichen Förderprogrammen in der Schweiz und Liechtenstein.
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 bg-[#B09070] hover:bg-[#6B6B6B] text-[#1F1F1F] font-semibold px-8 py-3.5 text-sm tracking-widest uppercase transition-colors"
              >
                Kostenlose Beratung <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4 reveal">
              {[
                {
                  icon: <Leaf className="h-5 w-5" />,
                  title: "Luft-Wasser-Wärmepumpen",
                  desc: "Flexible Installation ohne Bohrung – nutzt die Außenluft als Wärmequelle. Ideal für Sanierungen.",
                  saving: "Bis 70% günstiger als Öl/Gas",
                },
                {
                  icon: <TrendingUp className="h-5 w-5" />,
                  title: "Erdwärmepumpen",
                  desc: "Höchste Effizienz durch stabile Erdwärme – optimal für Neubauten und große Wohnflächen.",
                  saving: "Wirkungsgrad bis 500%",
                },
                {
                  icon: <Sun className="h-5 w-5" />,
                  title: "Solar-Unterstützung",
                  desc: "Kombination von Wärmepumpe und Solaranlage für maximale Unabhängigkeit und Effizienz.",
                  saving: "Nahezu kostenloser Betrieb",
                },
                {
                  icon: <BadgeCheck className="h-5 w-5" />,
                  title: "Fördermittel-Beratung",
                  desc: "Wir kennen alle Schweizer und Liechtensteiner Förderprogramme und helfen bei der Antragstellung.",
                  saving: "Förderung bis 30% der Kosten",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#E4DED8] border border-[#C0AD97] group hover:border-[#B09070]/30 transition-colors">
                  <div className="w-11 h-11 bg-[#E4D8C8] text-[#B09070] flex items-center justify-center flex-shrink-0 group-hover:bg-[#B09070]/15 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-[#1F1F1F] text-sm uppercase tracking-wide mb-1">{item.title}</h4>
                      <span className="text-[9px] font-semibold uppercase tracking-widest text-[#B09070] bg-[#B09070]/10 px-2 py-0.5 whitespace-nowrap">{item.saving}</span>
                    </div>
                    <p className="text-xs text-[#4A4A4A] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-20 bg-[#EBEBEB]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Unsere Leistungen</span>
              <div className="h-px w-8 bg-[#B09070]" />
            </div>
            <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase">
              Was wir <span className="text-[#B09070]">bieten</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Planung & Dimensionierung",
                desc: "Wir berechnen die optimale Anlagengröße für Ihr Gebäude – für maximale Effizienz bei minimalen Kosten.",
                features: ["Wärmebedarfsanalyse", "Anlagendimensionierung", "Wirtschaftlichkeitsrechnung"],
              },
              {
                title: "Fachgerechte Installation",
                desc: "Unsere zertifizierten Monteure installieren Ihre Wärmepumpe nach Schweizer Normen – schnell und sauber.",
                features: ["Alle Wärmepumpentypen", "Inklusive Inbetriebnahme", "Einweisung & Dokumentation"],
              },
              {
                title: "Förderberatung",
                desc: "Wir kennen alle aktuellen Förderprogramme und unterstützen Sie beim Antrag – für maximale Förderung.",
                features: ["Bundesförderung", "Kantonale Programme", "Antragsstellung"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#E4DED8] border border-[#C0AD97] p-8 group hover:-translate-y-1 hover:shadow-xl reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1F1F1F] mb-3">{item.title}</h3>
                <p className="text-xs text-[#4A4A4A] leading-relaxed mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-[#4A4A4A]">
                      <CheckCircle className="h-3.5 w-3.5 text-[#B09070] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-[#E4DED8]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "75%", label: "Kostenlose Umweltenergie" },
              { value: "500%", label: "Max. Wirkungsgrad (COP)" },
              { value: "30%", label: "Staatliche Förderung" },
              { value: "20+", label: "Jahre Lebensdauer" },
            ].map(({ value, label }, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="text-4xl font-semibold text-[#B09070] mb-2">{value}</div>
                <div className="text-[#5A5048] text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6 text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B09070]" />
            <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Jetzt informieren</span>
            <div className="h-px w-8 bg-[#B09070]" />
          </div>
          <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase mb-4">
            Umstieg auf Wärmepumpe?
          </h2>
          <p className="text-[#4A4A4A] mb-10 max-w-lg mx-auto">
            Wir beraten Sie kostenlos und zeigen Ihnen, wie viel Sie mit einer Wärmepumpe sparen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+41791326565"
              className="inline-flex items-center justify-center gap-2 bg-[#B09070] hover:bg-[#6B6B6B] text-[#1F1F1F] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              <Phone className="h-4 w-4" />
              079 132 65 65
            </a>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center gap-2 border border-[#B09070]/40 hover:border-[#B09070] text-[#B09070] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              Angebot anfordern <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#E8E8E8] border-t border-[#CCCCCC] pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-16">
            <div>
              <img src="/logpnew.png" alt="NIKQI Badkultur & Wärme" className="h-14 w-auto mb-5" />
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                Badsanierungen, Heizungsbau und Wärmepumpen mit Schweizer Qualität. 24/7 für Sie erreichbar.
              </p>
            </div>
            <div>
              <h4 className="text-[#1F1F1F] font-semibold mb-5 text-xs uppercase tracking-widest">Leistungen</h4>
              <ul className="space-y-3">
                {[
                  { label: "Badsanierungen & Umbauten", href: "/dienstleistungen/badsanierungen" },
                  { label: "Heizungsbau & Modernisierung", href: "/dienstleistungen/heizungsbau" },
                  { label: "Wasserschadensanierung", href: "/dienstleistungen/wasserschadensanierung" },
                  { label: "Wärmepumpen & erneuerbare Energien", href: "/dienstleistungen/waermepumpen" },
                ].map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[#6B6B6B] hover:text-[#B09070] text-sm transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#1F1F1F] font-semibold mb-5 text-xs uppercase tracking-widest">Unternehmen</h4>
              <ul className="space-y-3">
                {[
                  { label: "Über Uns", href: "/#ueber-uns" },
                  { label: "Projekte", href: "/#projekte" },
                  { label: "Bewertungen", href: "/#testimonials" },
                  { label: "Kontakt", href: "/#kontakt" },
                ].map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-[#6B6B6B] hover:text-[#B09070] text-sm transition-colors">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#1F1F1F] font-semibold mb-5 text-xs uppercase tracking-widest">Kontakt</h4>
              <ul className="space-y-3 text-sm text-[#6B6B6B]">
                <li><a href="tel:+41791326565" className="flex items-center gap-2 hover:text-[#B09070] transition-colors"><Phone className="h-4 w-4 flex-shrink-0" />079 132 65 65</a></li>
                <li><a href="mailto:info@nikqi.ch" className="flex items-center gap-2 hover:text-[#B09070] transition-colors"><Mail className="h-4 w-4 flex-shrink-0" />info@nikqi.ch</a></li>
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" /><span>Bahnhofstrasse 25<br />9475 Sevelen, Schweiz</span></li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 flex-shrink-0" /><span>24h · 7 Tage / Woche</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#CCCCCC] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#4A4A4A] text-xs">
            <p>&copy; 2026 NIKQI Badkultur &amp; Wärme. Alle Rechte vorbehalten.</p>
            <a href="https://lweb.ch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-[#B09070]/30 hover:border-[#B09070] px-3 py-1.5 transition-colors group">
              <span className="text-[#6B6B6B] text-[10px] tracking-widest uppercase group-hover:text-[#4A4A4A]">Moderne &amp; individuelle Webseiten</span>
              <span className="h-3 w-px bg-[#B09070]/50" />
              <span className="text-[#B09070] font-semibold text-[10px] tracking-widest uppercase">lweb.ch</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
