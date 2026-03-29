"use client"

import { useEffect } from "react"
import Link from "next/link"
import SiteHeader from "@/components/SiteHeader"
import {
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock,
  Shield, Star, Droplets, AlertCircle, BadgeCheck, Zap,
} from "lucide-react"

export default function WasserschadensanierungPage() {
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
      <SiteHeader currentHref="/dienstleistungen/wasserschadensanierung" />

      {/* ── HERO ── */}
      <section className="relative pt-16 overflow-hidden">
        <div className="relative h-[70vh] min-h-[480px] flex items-end bg-[#352C22]">
          <img
            src="/proyect/PHOTO-2026-03-27-14-41-40.jpg"
            alt="Wasserschadensanierung"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          {/* Urgent overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F] via-[#1F1F1F]/50 to-transparent" />
          {/* 24/7 badge */}
          <div className="absolute top-24 right-6 md:right-12 bg-[#B09070] px-5 py-4 text-center hero-item" style={{ animationDelay: "300ms" }}>
            <div className="text-[#1F1F1F] font-semibold text-2xl">24/7</div>
            <div className="text-[#1F1F1F]/80 text-[10px] uppercase tracking-widest">Notfalldienst</div>
          </div>
          <div className="relative z-10 container mx-auto px-6 pb-14">
            <div className="flex items-center gap-3 mb-4 hero-item" style={{ animationDelay: "0ms" }}>
              <div className="h-px w-8 bg-[#B09070]" />
              <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Notfalldienst</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#B09070] px-3 py-1.5 mb-5 hero-item" style={{ animationDelay: "60ms" }}>
              <AlertCircle className="h-3.5 w-3.5 text-[#1F1F1F]" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#1F1F1F]">24/7 Notfall</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold text-white leading-tight uppercase hero-item" style={{ animationDelay: "110ms" }}>
              Wasserschaden-<br />
              <span className="text-[#B09070]">sanierung</span>
            </h1>
            <p className="text-white/80 mt-4 text-lg max-w-xl leading-relaxed hero-item" style={{ animationDelay: "200ms" }}>
              Schnelle und professionelle Schadensbehebung bei Wasserschäden – 24/7 erreichbar, 7 Tage die Woche.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 hero-item" style={{ animationDelay: "280ms" }}>
              <a
                href="tel:+41791326565"
                className="inline-flex items-center justify-center gap-2 bg-[#B09070] hover:bg-[#D4C0A8] text-[#1F1F1F] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
              >
                <Phone className="h-4 w-4" />
                Notfall: 079 132 65 65
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── URGENCY STRIP ── */}
      <div className="bg-[#B09070] py-4">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-8 text-[#1F1F1F]">
          {[
            { icon: <Zap className="h-4 w-4" />, label: "Soforteinsatz" },
            { icon: <Clock className="h-4 w-4" />, label: "24/7 · 365 Tage" },
            { icon: <BadgeCheck className="h-4 w-4" />, label: "Professionelle Trocknung" },
            { icon: <Shield className="h-4 w-4" />, label: "Komplette Wiederherstellung" },
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
                <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Schnelle Hilfe</span>
              </div>
              <h2 className="text-4xl font-semibold text-[#1F1F1F] uppercase leading-tight mb-6">
                Wasserschaden?<br /><span className="text-[#B09070]">Wir kommen sofort.</span>
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed mb-6">
                Ein Wasserschaden erfordert sofortiges Handeln – je schneller reagiert wird, desto geringer sind die Folgeschäden. NIKQI ist 24 Stunden, 7 Tage die Woche für Sie erreichbar und rückt unverzüglich aus.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed mb-8">
                Von der professionellen Trocknung über die Schadensanalyse bis zur kompletten Wiederherstellung – wir begleiten Sie durch den gesamten Prozess und koordinieren auch mit Ihrer Versicherung.
              </p>
              <a
                href="tel:+41791326565"
                className="inline-flex items-center gap-2 bg-[#B09070] hover:bg-[#6B6B6B] text-[#1F1F1F] font-semibold px-8 py-3.5 text-sm tracking-widest uppercase transition-colors"
              >
                <Phone className="h-4 w-4" />
                Jetzt anrufen: 079 132 65 65
              </a>
            </div>

            <div className="space-y-4 reveal">
              {[
                {
                  step: "01",
                  title: "Sofortmeldung",
                  desc: "Rufen Sie uns an – wir sind 24/7 erreichbar und koordinieren den Soforteinsatz.",
                },
                {
                  step: "02",
                  title: "Schadensanalyse",
                  desc: "Unsere Experten beurteilen den Schaden vor Ort und leiten sofortige Maßnahmen ein.",
                },
                {
                  step: "03",
                  title: "Professionelle Trocknung",
                  desc: "Mit modernsten Trocknungsgeräten entfernen wir Feuchtigkeit schnell und gründlich.",
                },
                {
                  step: "04",
                  title: "Wiederherstellung",
                  desc: "Komplette Instandsetzung aller betroffenen Bereiche – bis alles wieder wie neu ist.",
                },
              ].map(({ step, title, desc }, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#EDE6DA] border border-[#C0AD97]">
                  <div className="w-10 h-10 bg-[#B09070] text-[#1F1F1F] flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F] text-sm uppercase tracking-wide mb-1">{title}</h4>
                    <p className="text-xs text-[#4A4A4A] leading-relaxed">{desc}</p>
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
                icon: <Zap className="h-6 w-6" />,
                title: "Notfalldienst 24/7",
                desc: "Rund um die Uhr erreichbar – wir sind in kürzester Zeit vor Ort, auch an Sonn- und Feiertagen.",
              },
              {
                icon: <Droplets className="h-6 w-6" />,
                title: "Professionelle Trocknung",
                desc: "Industrielle Trocknungsgeräte für schnelle und gründliche Feuchtigkeitsentfernung.",
              },
              {
                icon: <AlertCircle className="h-6 w-6" />,
                title: "Schadensanalyse",
                desc: "Genaue Beurteilung des Schadenumfangs – als Grundlage für Versicherung und Reparatur.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Komplette Wiederherstellung",
                desc: "Von der Trocknung bis zur Renovierung – wir stellen alles fachgerecht wieder her.",
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

      {/* ── CTA ── */}
      <section className="py-20 bg-[#E4DED8]">
        <div className="container mx-auto px-6 text-center reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B09070]" />
            <span className="text-[#B09070] text-xs font-semibold tracking-[0.25em] uppercase">Notfall</span>
            <div className="h-px w-8 bg-[#B09070]" />
          </div>
          <h2 className="text-4xl font-semibold text-[#2A2018] uppercase mb-4">
            Wasserschaden? Jetzt anrufen.
          </h2>
          <p className="text-[#5A5048] mb-10 max-w-lg mx-auto">
            Zögern Sie nicht – jede Stunde zählt. Wir sind 24/7 für Sie erreichbar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+41791326565"
              className="inline-flex items-center justify-center gap-2 bg-[#B09070] hover:bg-[#D4C0A8] text-[#1F1F1F] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              <Phone className="h-4 w-4" />
              079 132 65 65 – 24/7
            </a>
            <a
              href="https://wa.me/41791326565"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#B09070]/40 hover:border-[#B09070] text-[#B09070] font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors"
            >
              WhatsApp Notfall
            </a>
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
