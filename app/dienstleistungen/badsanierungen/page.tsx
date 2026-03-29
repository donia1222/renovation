"use client"

import { useEffect } from "react"
import Link from "next/link"
import SiteHeader from "@/components/SiteHeader"
import {
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock,
  Droplets, Star, Shield, Hammer, MessageCircle, BadgeCheck,
} from "lucide-react"

export default function BadsanierungPage() {
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
      <SiteHeader currentHref="/dienstleistungen/badsanierungen" />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden bg-[#EBEBEB]">
        <div className="relative h-[70vh] min-h-[480px] flex items-end">
          <img
            src="/small-bathroom-with-modern-design-style.jpg"
            alt="Badsanierung"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 via-[#1F1F1F]/30 to-transparent" />
          <div className="relative z-10 container mx-auto px-6 pb-14">
            <div className="flex items-center gap-3 mb-4 hero-item" style={{ animationDelay: "0ms" }}>
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Unsere Leistungen</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#B09070] px-3 py-1.5 mb-5 hero-item" style={{ animationDelay: "60ms" }}>
              <Droplets className="h-3.5 w-3.5 text-[#1F1F1F]" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F1F1F]">Beliebt</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold text-white leading-tight uppercase hero-item" style={{ animationDelay: "110ms" }}>
              Badsanierungen<br />
              <span className="text-[#B09070]">&amp; Umbauten</span>
            </h1>
            <p className="text-white/80 mt-4 text-lg max-w-xl leading-relaxed hero-item" style={{ animationDelay: "200ms" }}>
              Komplette Badsanierungen und Umbauten nach Ihren Wünschen – von der Planung bis zur schlüsselfertigen Übergabe.
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <div className="bg-[#B09070] py-4">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-[#1F1F1F]">
          {[
            { icon: <Shield className="h-4 w-4" />, label: "10 Jahre Garantie" },
            { icon: <Star className="h-4 w-4" />, label: "5.0 Google Bewertung" },
            { icon: <BadgeCheck className="h-4 w-4" />, label: "Schweizer Qualität" },
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
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Ihr Traumbad</span>
              </div>
              <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase leading-tight mb-6">
                Ihr Bad – <span className="text-[#B09070]">Neu gestaltet</span>
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Wir verwandeln Ihr Bad in einen Wohlfühlort. Von der ersten Beratung über die Planung bis hin zur schlüsselfertigen Übergabe – NIKQI begleitet Sie durch jeden Schritt der Badsanierung.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Mit Premium-Materialien, modernsten Techniken und einem erfahrenen Team realisieren wir Ihr Wunschbad – termingerecht, sauber und mit 10 Jahren Garantie.
              </p>
              <Link
                href="/#kontakt"
                className="inline-flex items-center gap-2 bg-[#B09070] hover:bg-[#6B6B6B] text-[#1F1F1F] font-semibold px-8 py-3.5 text-sm tracking-widest uppercase transition-colors"
              >
                Kostenlose Beratung <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 reveal">
              <img src="/proyect/PHOTO-2026-03-27-14-41-40.jpg" alt="Badsanierung" className="w-full aspect-square object-cover" />
              <img src="/proyect/PHOTO-2026-03-27-14-41-40%20copia.jpg" alt="Badsanierung" className="w-full aspect-square object-cover mt-6" />
              <img src="/proyect/PHOTO-2026-03-27-13-24-45.jpg" alt="Badsanierung" className="w-full aspect-square object-cover -mt-3" />
              <img src="/proyect/0048fad8-351e-441c-8dd5-b9f98cd1104c.JPG" alt="Badsanierung" className="w-full aspect-square object-cover mt-3" />
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
                icon: <Droplets className="h-6 w-6" />,
                title: "Komplette Badplanung",
                desc: "3D-Visualisierung, Materialberatung und individuelle Raumplanung nach Ihren Vorstellungen.",
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "Premium-Fliesen & Armaturen",
                desc: "Hochwertige Markenprodukte und Fliesen aus führenden europäischen Kollektionen.",
              },
              {
                icon: <Hammer className="h-6 w-6" />,
                title: "Fußbodenheizung",
                desc: "Komfortabel warmer Boden – wir installieren effiziente elektrische oder wasserführende Systeme.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "10 Jahre Garantie",
                desc: "Schweizer Qualität mit langfristiger Sicherheit – wir stehen für unsere Arbeit ein.",
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

      {/* ── PROCESS ── */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Ablauf</span>
              <div className="h-px w-8 bg-[#B09070]" />
            </div>
            <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase">
              Unser <span className="text-[#B09070]">Prozess</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#B09070] via-[#D0D0D0] to-[#B09070]" />
            {[
              { step: "01", title: "Beratung", desc: "Kostenlose Erstberatung und Bedarfsanalyse vor Ort." },
              { step: "02", title: "Planung", desc: "3D-Planung, Materialauswahl und transparentes Festpreisangebot." },
              { step: "03", title: "Ausführung", desc: "Fachkundige Umsetzung durch zertifizierte Fachkräfte." },
              { step: "04", title: "Übergabe", desc: "Qualitätskontrolle, Übergabe und 10 Jahre Garantie." },
            ].map(({ step, title, desc }, i) => (
              <div key={step} className="relative z-10 flex flex-col items-center text-center reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="w-16 h-16 bg-[#B09070] text-[#1F1F1F] flex items-center justify-center shadow-lg mb-6 text-xl font-semibold hover:scale-110 hover:bg-[#6B6B6B] transition-all cursor-default">
                  {step}
                </div>
                <h3 className="text-base font-semibold text-[#1F1F1F] mb-2 uppercase tracking-wide">{title}</h3>
                <p className="text-[#4A4A4A] text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-20 bg-[#E8E8E8]">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-10 reveal">
            <div className="h-px w-8 bg-[#B09070]" />
            <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Referenzprojekte</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "/proyect/0ef3475c-966f-4b0c-b7cd-0652d8b89c41.JPG",
              "/proyect/22aa3191-21a0-4381-8fcf-98a3916b3d30.JPG",
              "/proyect/2bbe9e13-b141-4216-98c6-5925121ea8f2.JPG",
              "/proyect/2f683263-914c-43ae-bc82-3f219582358e.JPG",
              "/proyect/323d2469-f799-46af-b9e3-2a23c797f41d.JPG",
              "/proyect/4584171e-36f6-4ee0-b807-57b7c50c2ef6.JPG",
              "/proyect/49f0b6cd-37e2-478d-a74c-c63acb5b7518.JPG",
              "/proyect/PHOTO-2026-03-27-14-41-40%20copia%202.jpg",
            ].map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden group reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <img src={img} alt={`Badsanierung ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
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
            Ihr Traumbad wartet
          </h2>
          <p className="text-[#5A5048] mb-10 max-w-lg mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung – wir erstellen Ihnen ein unverbindliches Angebot.
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
