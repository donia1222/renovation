"use client"

import {
  ArrowRight,
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

// Custom hook for fade-in animations on scroll
function useFadeInOnScroll() {
  const [visibleElements, setVisibleElements] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all sections with fade-in class
    const elements = document.querySelectorAll(".fade-in-section")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

export default function RenovationPage() {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showAGB, setShowAGB] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

  const visibleElements = useFadeInOnScroll()

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      const currentProgress = (window.pageYOffset / totalScroll) * 100
      setScrollProgress(currentProgress)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Interactive Particles */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) translateY(${scrollProgress * -2}px)`,
              transition: "transform 0.3s ease-out",
            }}
          />
        ))}
      </div>

      {/* Morphing Background Blob */}
      <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: `linear-gradient(${scrollProgress * 3.6}deg, #10b981, #06b6d4, #8b5cf6)`,
            left: `${10 + scrollProgress * 0.5}%`,
            top: `${20 + Math.sin(scrollProgress * 0.1) * 20}%`,
            transform: `scale(${1 + scrollProgress * 0.01}) rotate(${scrollProgress * 2}deg)`,
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-15 blur-2xl transition-all duration-700 ease-out"
          style={{
            background: `linear-gradient(${-scrollProgress * 2}deg, #f59e0b, #ef4444, #10b981)`,
            right: `${15 + scrollProgress * 0.3}%`,
            bottom: `${25 + Math.cos(scrollProgress * 0.08) * 15}%`,
            transform: `scale(${0.8 + scrollProgress * 0.008}) rotate(${-scrollProgress * 1.5}deg)`,
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div
          className="absolute w-8 h-8 border-2 border-emerald-400 opacity-30 transition-all duration-500"
          style={{
            right: `${10 + scrollProgress * 0.2}%`,
            top: `${40 + scrollProgress * 0.3}%`,
            transform: `rotate(${scrollProgress * 4}deg) scale(${1 + Math.sin(scrollProgress * 0.1) * 0.3})`,
          }}
        />
        <div
          className="absolute w-6 h-6 bg-teal-400 opacity-25 rounded-full transition-all duration-700"
          style={{
            left: `${80 + scrollProgress * 0.15}%`,
            top: `${60 + scrollProgress * 0.25}%`,
            transform: `translateY(${Math.sin(scrollProgress * 0.05) * 30}px) scale(${0.8 + scrollProgress * 0.005})`,
          }}
        />
        <div
          className="absolute w-10 h-10 border border-cyan-400 opacity-20 transition-all duration-600"
          style={{
            left: `${5 + scrollProgress * 0.1}%`,
            bottom: `${30 + scrollProgress * 0.2}%`,
            transform: `rotate(${-scrollProgress * 3}deg) skew(${scrollProgress * 0.5}deg)`,
          }}
        />
      </div>

      {/* Interactive Cursor Follower */}
      <div
        className="fixed w-8 h-8 border border-emerald-400 rounded-full pointer-events-none z-20 opacity-30 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${1 + scrollProgress * 0.01})`,
        }}
      />
      {/* Header */}
      <header className="border-b border-emerald-100 bg-gradient-to-r from-emerald-600 to-teal-600 backdrop-blur-xl sticky top-0 z-50 transition-all duration-500 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <img
              src="/images/logo.png"
              alt="nik-renovation Logo"
              className="h-12 w-auto group-hover:scale-105 transition-all duration-500 ease-out filter brightness-0 invert"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => document.getElementById("dienstleistungen")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/90 hover:text-white transition-all duration-500 hover:scale-105 relative group font-medium flex items-center space-x-2"
            >
              <Briefcase className="h-4 w-4" />
              <span>Dienstleistungen</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => document.getElementById("projekte")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/90 hover:text-white transition-all duration-500 hover:scale-105 relative group font-medium flex items-center space-x-2"
            >
              <FolderOpen className="h-4 w-4" />
              <span>Projekte</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/90 hover:text-white transition-all duration-500 hover:scale-105 relative group font-medium flex items-center space-x-2"
            >
              <Users className="h-4 w-4" />
              <span>Testimonials</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
              className="text-white/90 hover:text-white transition-all duration-500 hover:scale-105 relative group font-medium flex items-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Kontakt</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Desktop Call Button */}
          <Button className="hidden md:flex bg-white text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-500 shadow-lg hover:shadow-xl font-medium">
            <Phone className="h-4 w-4 mr-2" />
            Jetzt Anrufen
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-emerald-100 transition-all duration-500 hover:scale-110 hover:rotate-180"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100 border-t border-emerald-500/30" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-b from-emerald-600 to-emerald-700 px-4 py-6 space-y-4">
            <button
              onClick={() => {
                document.getElementById("dienstleistungen")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center space-x-3 w-full text-left text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-500 transform hover:translate-x-2 hover:scale-105 font-medium"
            >
              <Briefcase className="h-5 w-5" />
              <span>Dienstleistungen</span>
            </button>
            <button
              onClick={() => {
                document.getElementById("projekte")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center space-x-3 w-full text-left text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-500 transform hover:translate-x-2 hover:scale-105 font-medium"
            >
              <FolderOpen className="h-5 w-5" />
              <span>Projekte</span>
            </button>
            <button
              onClick={() => {
                document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center space-x-3 w-full text-left text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-500 transform hover:translate-x-2 hover:scale-105 font-medium"
            >
              <Users className="h-5 w-5" />
              <span>Testimonials</span>
            </button>
            <button
              onClick={() => {
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
                setIsMobileMenuOpen(false)
              }}
              className="flex items-center space-x-3 w-full text-left text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-all duration-500 transform hover:translate-x-2 hover:scale-105 font-medium"
            >
              <Mail className="h-5 w-5" />
              <span>Kontakt</span>
            </button>

            {/* Mobile Call Button */}
            <div className="pt-4 border-t border-white/20">
              <Button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-white text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transform hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-xl font-medium"
              >
                <Phone className="h-4 w-4 mr-2" />
                Jetzt Anrufen
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-5 lg:py-32 overflow-hidden fade-in-section visible"
        id="hero"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100 animate-pulse-slow">
                🇨🇭 Schweizer Qualität Garantiert
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Verwandeln Sie Ihr
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text block animate-gradient">
                  Zuhause in Realität
                </span>
              </h1>
     
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-500">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Abgeschlossene Projekte</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-500">
                    15+
                  </div>
                  <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-gray-900 group-hover:scale-110 transition-transform duration-500">
                    98%
                  </div>
                  <div className="text-sm text-gray-600">Zufriedene Kunden</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative transform hover:scale-105 hover:-translate-y-2 transition-all duration-700 ease-out">
                <img
                  src="/interior-design-with-photoframes-blue-couch.jpg"
                  alt="Moderne Küchenrenovierung"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-2 border-white animate-pulse-slow"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-white animate-pulse-slow animation-delay-1000"></div>
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white animate-pulse-slow animation-delay-2000"></div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Zertifiziertes Team</div>
                    <div className="text-xs text-gray-600">Schweizer Fachkräfte</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dienstleistungen */}
      <section
        id="dienstleistungen"
        className={`py-20 bg-white relative overflow-hidden fade-in-section ${visibleElements.has("dienstleistungen") ? "visible" : ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dienstleistungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wir bieten komplette Renovierungsdienstleistungen mit Schweizer Qualitätsstandards, unter Verwendung von
              Premium-Materialien und modernsten Techniken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Küchenrenovierung",
                description: "Moderne Designs mit neuesten Geräten, Marmorarbeitsplatten und luxuriösen Oberflächen.",
                features: ["Personalisiertes 3D-Design", "Premium-Geräte", "10 Jahre Garantie"],
              },
              {
                icon: <Home className="h-8 w-8" />,
                title: "Luxusbäder",
                description:
                  "Verwandeln Sie Ihr Bad in ein privates Spa mit edlen Materialien und intelligenter Technologie.",
                features: ["Intelligente Armaturen", "Fußbodenheizung", "Maßgeschneiderte Duschwände"],
              },
              {
                icon: <Hammer className="h-8 w-8" />,
                title: "Komplette Renovierungen",
                description:
                  "Vollständige Wohnungsrenovierung mit integraler Projektleitung und tadellosen Oberflächen.",
                features: ["Komplette Verwaltung", "Premium-Materialien", "Schlüsselfertige Übergabe"],
              },
              {
                icon: <Wrench className="h-8 w-8" />,
                title: "Technische Installationen",
                description:
                  "Klimaanlagen, Hausautomation und elektrische Installationen mit Schweizer Zertifizierung.",
                features: ["Erweiterte Hausautomation", "Energieeffizienz", "Offizielle Zertifizierungen"],
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Premium-Wartung",
                description: "Kundendienst mit präventiver Wartung und erweiterter Garantie.",
                features: ["Jährliche Inspektionen", "Erweiterte Garantie", "24/7 Support"],
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Design-Beratung",
                description: "Persönliche Beratung mit spezialisierten Architekten und Innenarchitekten.",
                features: ["Personalisiertes Design", "3D-Renderings", "Kontinuierliche Beratung"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50/50 fade-in-section delay-${(index + 1) * 100} ${visibleElements.has("dienstleistungen") ? "visible" : ""}`}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                  <div className="text-emerald-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative z-10">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-emerald-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>
                  <ul className="space-y-2 relative z-10">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projekte */}
      <section
        id="projekte"
        className={`py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden fade-in-section ${visibleElements.has("projekte") ? "visible" : ""}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Herausragende Projekte</h2>
            <p className="text-xl text-gray-600">Entdecken Sie einige unserer beeindruckendsten Renovierungen</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/beautiful-shot-modern-house-kitchen.jpg",
                title: "Moderne Minimalistische Küche",
                location: "Zürich, Schweiz",
                type: "Komplette Renovierung",
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
                type: "Komplette Renovierung",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 fade-in-section delay-${(index + 1) * 200} ${visibleElements.has("projekte") ? "visible" : ""}`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 transform group-hover:scale-105 transition-transform duration-500">
                    <Badge className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-white to-gray-50/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-emerald-500 group-hover:scale-110 transition-transform duration-500" />
                    {project.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className={`py-20 bg-white relative overflow-hidden fade-in-section ${visibleElements.has("testimonials") ? "visible" : ""}`}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Was Unsere Kunden Sagen</h2>
            <p className="text-xl text-gray-600">Die Zufriedenheit unserer Kunden ist unsere beste Referenz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Müller",
                role: "Hausbesitzerin",
                content:
                  "Die Renovierung unserer Küche übertraf alle unsere Erwartungen. Die Schweizer Qualität zeigt sich in jedem Detail, von den Oberflächen bis zur pünktlichen Lieferung.",
                rating: 5,
              },
              {
                name: "Hans Weber",
                role: "Architekt",
                content:
                  "Als Fachmann kann ich bestätigen, dass nik-renovation die höchsten Qualitätsstandards einhält. Ihr Team ist außergewöhnlich und das Endergebnis ist tadellos.",
                rating: 5,
              },
              {
                name: "Anna Schneider",
                role: "Designerin",
                content:
                  "Die Zusammenarbeit mit nik-renovation war eine fantastische Erfahrung. Ihre Liebe zum Detail und ihr Engagement für Exzellenz unterscheidet sie von der Konkurrenz.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 bg-gradient-to-br from-white to-gray-50/30 fade-in-section delay-${(index + 1) * 150} ${visibleElements.has("testimonials") ? "visible" : ""}`}
              >
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current animate-pulse-slow hover:scale-110 transition-transform duration-500"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white font-bold hover:scale-110 transition-transform duration-500">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section
        id="kontakt"
        className={`py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden fade-in-section ${visibleElements.has("kontakt") ? "visible" : ""}`}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-600/90 to-teal-600/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Bereit, Ihr Zuhause zu Verwandeln?</h2>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Kontaktieren Sie uns für eine kostenlose Beratung und entdecken Sie, wie wir Ihre Traumrenovierung mit
                garantierter Schweizer Qualität verwirklichen können.
              </p>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="p-3 bg-white/20 rounded-full mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-emerald-100 text-lg group-hover:text-white transition-colors duration-500">
                    +41 44 123 45 67
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-white/20 rounded-full mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-emerald-100 text-lg group-hover:text-white transition-colors duration-500">
                    info@nik-renovation.ch
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-white/20 rounded-full mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-emerald-100 text-lg group-hover:text-white transition-colors duration-500">
                    Bahnhofstrasse 123, 8001 Zürich
                  </span>
                </div>
                <div className="flex items-center group">
                  <div className="p-3 bg-white/20 rounded-full mr-4 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-500">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-emerald-100 text-lg group-hover:text-white transition-colors duration-500">
                    WhatsApp: +41 79 132 65 65
                  </span>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-2xl hover:shadow-3xl transition-shadow duration-700">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Angebot Anfordern</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-500 hover:border-emerald-300"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-500 hover:border-emerald-300"
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-500 hover:border-emerald-300"
                      placeholder="ihre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Projekttyp</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-500 hover:border-emerald-300">
                      <option>Dienstleistung auswählen</option>
                      <option>Küchenrenovierung</option>
                      <option>Luxusbad</option>
                      <option>Komplette Renovierung</option>
                      <option>Technische Installationen</option>
                      <option>Andere</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-500 hover:border-emerald-300"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 py-3 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-2xl">
                    Anfrage Senden
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-500" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/images/logofooter.png"
                  alt="nik-renovation Logo"
                  className="h-16 w-auto hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Luxusrenovierungen mit garantierter Schweizer Qualität. Wir verwandeln Räume mit Präzision und
                Exzellenz.
              </p>
            </div>
            <div className="" style={{ animationDelay: "200ms" }}>
              <h4 className="font-semibold mb-6 text-emerald-400 text-lg">Dienstleistungen</h4>
              <ul className="space-y-4 text-gray-400">
                <li
                  onClick={() => document.getElementById("dienstleistungen")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Küchenrenovierung
                </li>
                <li
                  onClick={() => document.getElementById("dienstleistungen")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Luxusbäder
                </li>
                <li
                  onClick={() => document.getElementById("dienstleistungen")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Komplette Renovierungen
                </li>
                <li
                  onClick={() => document.getElementById("dienstleistungen")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Technische Installationen
                </li>
              </ul>
            </div>
            <div className="" style={{ animationDelay: "400ms" }}>
              <h4 className="font-semibold mb-6 text-emerald-400 text-lg">Unternehmen</h4>
              <ul className="space-y-4 text-gray-400">
                <li
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Über Uns
                </li>
                <li
                  onClick={() => document.getElementById("projekte")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Projekte
                </li>
                <li
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Testimonials
                </li>
                <li
                  onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-emerald-400 transition-all duration-500 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                >
                  Kontakt
                </li>
              </ul>
            </div>
            <div className="" style={{ animationDelay: "600ms" }}>
              <h4 className="font-semibold mb-6 text-emerald-400 text-lg">Kontakt</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="hover:text-emerald-400 transition-all duration-500 flex items-center group">
                  <Phone className="h-5 w-5 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  <span className="group-hover:translate-x-1 transition-transform duration-500">+41 44 123 45 67</span>
                </li>
                <li className="hover:text-emerald-400 transition-all duration-500 flex items-center group">
                  <Mail className="h-5 w-5 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />
                  <span className="group-hover:translate-x-1 transition-transform duration-500">
                    info@nik-renovation.ch
                  </span>
                </li>
                <li className="hover:text-emerald-400 transition-all duration-500 flex items-start group">
                  <MapPin className="h-5 w-5 mr-3 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 flex-shrink-0" />
                  <span className="group-hover:translate-x-1 transition-transform duration-500">
                    Bahnhofstrasse
                    <br />
                    9470 Buchs, Schweiz
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400"
            style={{ animationDelay: "800ms" }}
          >
            <p className="hover:text-emerald-400 transition-colors duration-500 hover:scale-105 transform mb-4">
              &copy; 2025 nik-renovation. Alle Rechte vorbehalten.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <button
                onClick={() => setShowAGB(true)}
                className="hover:text-emerald-400 transition-colors duration-500 hover:underline"
              >
                AGB
              </button>
              <button
                onClick={() => setShowDatenschutz(true)}
                className="hover:text-emerald-400 transition-colors duration-500 hover:underline"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => {
            const message = encodeURIComponent(
              "Hallo! Ich interessiere mich für Ihre Renovierungsdienstleistungen und würde gerne mehr Informationen erhalten.",
            )
            window.open(`https://wa.me/41791326565?text=${message}`, "_blank")
          }}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-500"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">WhatsApp kontaktieren</span>
        </Button>
      </div>

      {/* AGB Modal */}
      {showAGB && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Allgemeine Geschäftsbedingungen (AGB)</h2>
              <button onClick={() => setShowAGB(false)} className="text-gray-500 hover:text-gray-700 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 1 Geltungsbereich</h3>
                  <p>
                    Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen nik-renovation und unseren
                    Kunden über Renovierungs- und Baudienstleistungen. Abweichende Bedingungen des Kunden werden nur
                    wirksam, wenn wir diesen ausdrücklich schriftlich zustimmen.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 2 Vertragsschluss</h3>
                  <p>
                    Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch unsere
                    schriftliche Auftragsbestätigung oder durch Beginn der Arbeiten zustande. Mündliche Nebenabreden
                    bedürfen der schriftlichen Bestätigung.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 3 Preise und Zahlungsbedingungen</h3>
                  <p>
                    Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Zahlungen sind innerhalb von
                    14 Tagen nach Rechnungsstellung ohne Abzug fällig. Bei Zahlungsverzug werden Verzugszinsen in Höhe
                    von 8% über dem Basiszinssatz berechnet.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 4 Ausführung der Arbeiten</h3>
                  <p>
                    Wir führen alle Arbeiten nach den anerkannten Regeln der Technik und den geltenden Normen aus.
                    Terminangaben sind nur verbindlich, wenn sie ausdrücklich als verbindlich bezeichnet werden. Wir
                    sind berechtigt, Teilleistungen zu erbringen und abzurechnen.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 5 Gewährleistung</h3>
                  <p>
                    Wir gewähren eine Gewährleistung von 2 Jahren ab Abnahme der Arbeiten. Bei Mängeln sind wir zunächst
                    zur Nachbesserung berechtigt. Schlägt die Nachbesserung fehl, kann der Kunde Minderung oder
                    Rücktritt verlangen.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 6 Haftung</h3>
                  <p>
                    Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Bei leichter Fahrlässigkeit
                    haften wir nur bei Verletzung wesentlicher Vertragspflichten. Die Haftung für mittelbare Schäden und
                    entgangenen Gewinn ist ausgeschlossen.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">§ 7 Gerichtsstand und anwendbares Recht</h3>
                  <p>
                    Es gilt schweizerisches Recht. Gerichtsstand ist Zürich. Sollten einzelne Bestimmungen unwirksam
                    sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                  </p>
                </section>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>nik-renovation</strong>
                    <br />
                    Bahnhofstrasse
                    <br />
                    9470 Buchs, Schweiz
                    <br />
                    Stand: Januar 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {showDatenschutz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold text-gray-900">Datenschutzerklärung</h2>
              <button
                onClick={() => setShowDatenschutz(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Datenschutz auf einen Blick</h3>
                  <p>
                    Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von
                    personenbezogenen Daten innerhalb unseres Onlineauftritts und der mit ihm verbundenen Webseiten,
                    Funktionen und Inhalte auf.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Verantwortliche Stelle</h3>
                  <p>
                    Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    <br />
                    <strong>nik-renovation</strong>
                    <br />
                    Bahnhofstrasse
                    <br />
                    9470 Buchs, Schweiz
                    <br />
                    E-Mail: info@nik-renovation.ch
                    <br />
                    Telefon: +41 44 123 45 67
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Datenerfassung auf unserer Website</h3>
                  <h4 className="font-semibold mb-2">Kontaktformular</h4>
                  <p className="mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
                    und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>

                  <h4 className="font-semibold mb-2">Server-Log-Dateien</h4>
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und
                    Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners,
                    Uhrzeit der Serveranfrage und IP-Adresse.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Cookies</h3>
                  <p>
                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät
                    speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu
                    machen. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                    werden und einzeln über deren Annahme entscheiden.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Ihre Rechte</h3>
                  <p>
                    Sie haben das Recht auf Auskunft über die Sie betreffenden personenbezogenen Daten sowie auf
                    Berichtigung, Löschung, Einschränkung der Verarbeitung oder Widerspruch gegen die Verarbeitung.
                    Zudem haben Sie das Recht auf Datenübertragbarkeit und das Recht, sich bei einer Aufsichtsbehörde zu
                    beschweren.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6. SSL-Verschlüsselung</h3>
                  <p>
                    Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte
                    eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                    des Browsers von "http://" auf "https://" wechselt.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">7. WhatsApp</h3>
                  <p>
                    Unsere Website bietet die Möglichkeit, direkt über WhatsApp Kontakt mit uns aufzunehmen. Wenn Sie
                    diese Funktion nutzen, werden Sie zu WhatsApp weitergeleitet. Dabei gelten die
                    Datenschutzbestimmungen von WhatsApp.
                  </p>
                </section>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Letzte Aktualisierung:</strong> Januar 2024
                    <br />
                    Bei Fragen zum Datenschutz kontaktieren Sie uns unter: info@nik-renovation.ch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
          75% { transform: translateY(-15px) rotate(270deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .fade-in-section.delay-100 { transition-delay: 0.1s; }
        .fade-in-section.delay-200 { transition-delay: 0.2s; }
        .fade-in-section.delay-300 { transition-delay: 0.3s; }
        .fade-in-section.delay-400 { transition-delay: 0.4s; }
        .fade-in-section.delay-500 { transition-delay: 0.5s; }
      `}</style>
    </div>
  )
}
