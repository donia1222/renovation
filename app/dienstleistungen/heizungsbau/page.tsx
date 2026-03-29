"use client"

import { useEffect } from "react"
import Link from "next/link"
import SiteHeader from "@/components/SiteHeader"
import {
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock,
  Flame, Star, Shield, Zap, TrendingUp, BadgeCheck, Leaf,
} from "lucide-react"

export default function HeizungsbauPage() {
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
      <SiteHeader currentHref="/dienstleistungen/heizungsbau" />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden bg-[#EBEBEB]">
        <div className="relative h-[70vh] min-h-[480px] flex items-end">
          <img
            src="/beautiful-shot-modern-house-kitchen.jpg"
            alt="Heizungsbau"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/85 via-[#1F1F1F]/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-6 pb-14">
            <div className="flex items-center gap-3 mb-4 hero-item" style={{ animationDelay: "0ms" }}>
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Unsere Leistungen</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#B09070] px-3 py-1.5 mb-5 hero-item" style={{ animationDelay: "60ms" }}>
              <Zap className="h-3.5 w-3.5 text-[#1F1F1F]" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F1F1F]">Energiesparen</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold text-white leading-tight uppercase hero-item" style={{ animationDelay: "110ms" }}>
              Heizungsbau<br />
              <span className="text-[#B09070]">&amp; Modernisierung</span>
            </h1>
            <p className="text-white/80 mt-4 text-lg max-w-xl leading-relaxed hero-item" style={{ animationDelay: "200ms" }}>
              Effiziente Heizungsanlagen und moderne Heizsysteme für maximalen Komfort und minimale Energiekosten.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <div className="bg-[#B09070] py-4">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-[#1F1F1F]">
          {[
            { icon: <Shield className="h-4 w-4" />, label: "Zertifizierte Fachkräfte" },
            { icon: <Star className="h-4 w-4" />, label: "5.0 Google Bewertung" },
            { icon: <TrendingUp className="h-4 w-4" />, label: "Energieeffizienz" },
            { icon: <Clock className="h-4 w-4" />, label: "24/7 erreichbar" },
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
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Heizung & Wärme</span>
              </div>
              <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase leading-tight mb-6">
                Moderne Heizung –<br /><span className="text-[#B09070]">Maximale Effizienz</span>
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Eine effiziente Heizanlage spart nicht nur Energie und Kosten – sie sorgt auch für angenehmen Wohnkomfort. Wir planen, installieren und modernisieren Heizsysteme aller Art in der Schweiz und Liechtenstein.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Unsere zertifizierten Fachkräfte setzen auf modernste Technik und beraten Sie umfassend zu Fördermöglichkeiten und Energieeinsparpotenzialen.
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 bg-[#B09070] hover:bg-[#6B6B6B] text-[#1F1F1F] font-semibold px-8 py-3.5 text-sm tracking-widest uppercase transition-colors"
              >
                Kostenlose Beratung <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 reveal">
              <img src="/proyect/64a7e743-1335-41d0-b0ba-295e8f84549e.JPG" alt="Heizungsbau" className="w-full aspect-square object-cover" />
              <img src="/proyect/69721245-d5b3-4478-a421-c14e4c62537d.JPG" alt="Heizungsbau" className="w-full aspect-square object-cover mt-6" />
              <img src="/proyect/9a4848cb-955a-4494-a203-7d42f8a03fdc.JPG" alt="Heizungsbau" className="w-full aspect-square object-cover -mt-3" />
              <img src="/proyect/f48e9904-e8a3-4722-adb1-04ae83888ed8.JPG" alt="Heizungsbau" className="w-full aspect-square object-cover mt-3" />
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
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Leistungsumfang</span>
              <div className="h-px w-8 bg-[#B09070]" />
            </div>
            <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase">
              Was wir <span className="text-[#B09070]">bieten</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Flame className="h-6 w-6" />,
                title: "Heizungsplanung",
                desc: "Individuelle Planung der optimalen Heizlösung für Ihr Gebäude – energieeffizient und kostenoptimiert.",
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Modernisierung bestehender Anlagen",
                desc: "Upgrade Ihrer alten Heizanlage auf moderne, effiziente Technologie – mit spürbarer Kosteneinsparung.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Energieeffizienz-Optimierung",
                desc: "Analyse und Optimierung Ihres Energieverbrauchs – für maximale Effizienz bei minimalen Kosten.",
              },
              {
                icon: <BadgeCheck className="h-6 w-6" />,
                title: "Zertifizierte Fachkräfte",
                desc: "Unser Team ist nach Schweizer Standards zertifiziert – für Qualität und Sicherheit, die Sie spüren.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#EDE6DA] border border-[#C0AD97] p-7 group hover:-translate-y-1 hover:shadow-xl reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-[#E4D8C8] text-[#B09070] flex items-center justify-center mb-5 group-hover:bg-[#B09070]/15 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1F1F1F] mb-3">{item.title}</h3>
                <p className="text-xs text-[#4A4A4A] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#B09070]" />
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Vorteile</span>
              </div>
              <h2 className="text-3xl font-semibold text-[#1F1F1F] uppercase leading-tight mb-8">
                Warum <span className="text-[#B09070]">NIKQI</span> für Ihren Heizungsbau
              </h2>
              <ul className="space-y-4">
                {[
                  "Bis zu 30% Energieeinsparung durch moderne Technologie",
                  "Schweizer Förderprogramme – wir beraten Sie umfassend",
                  "Fachgerechte Installation nach Schweizer Normen",
                  "Langfristige Wartungsverträge für sorgenfreien Betrieb",
                  "Schnelle Reaktionszeiten bei Störungen – 24/7",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4A4A4A]">
                    <CheckCircle className="h-4 w-4 text-[#B09070] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#E4DED8] border border-[#C0AD97] p-10 reveal">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#B09070]" />
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Schnellkontakt</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#2A2018] uppercase mb-4">Jetzt Beratung anfragen</h3>
              <p className="text-[#5A5048] text-sm mb-8">
                Kostenlose Erstberatung – wir erstellen Ihnen ein maßgeschneidertes Angebot.
              </p>
              <div className="space-y-3">
                <a href="tel:+41791326565" className="flex items-center gap-3 text-[#2A2018] hover:text-[#B09070] transition-colors group">
                  <span className="w-10 h-10 bg-[#B09070]/20 flex items-center justify-center text-[#B09070] group-hover:bg-[#B09070]/40 transition-colors">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="font-semibold">079 132 65 65</span>
                </a>
                <a href="mailto:info@nikqi.li" className="flex items-center gap-3 text-[#2A2018] hover:text-[#B09070] transition-colors group">
                  <span className="w-10 h-10 bg-[#B09070]/20 flex items-center justify-center text-[#B09070] group-hover:bg-[#B09070]/40 transition-colors">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="font-semibold">info@nikqi.ch</span>
                </a>
              </div>
              <Link
                href="/#kontakt"
                className="mt-8 flex items-center justify-center gap-2 bg-[#B09070] hover:bg-[#D4C0A8] text-[#1F1F1F] font-semibold py-3.5 text-sm tracking-widest uppercase transition-colors w-full"
              >
                Angebot anfordern <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#E4DED8]">
        <div className="container mx-auto px-6 text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B09070]" />
            <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Jetzt starten</span>
            <div className="h-px w-8 bg-[#B09070]" />
          </div>
          <h2 className="text-4xl font-semibold text-[#2A2018] uppercase mb-4">
            Heizung modernisieren?
          </h2>
          <p className="text-[#5A5048] mb-10 max-w-lg mx-auto">
            Wir beraten Sie kostenlos und erstellen ein individuelles Angebot für Ihre Heizungssanierung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+41791326565"
              className="inline-flex items-center justify-center gap-2 bg-[#B09070] hover:bg-[#D4C0A8] text-[#1F1F1F] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
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
