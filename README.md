# 🏠 NIK-Renovation - Premium Swiss Renovation Website

Eine moderne, responsive Website für ein Schweizer Renovierungsunternehmen, entwickelt mit Next.js und fortschrittlichen Animationen.

## 🌐 Live Demo

**[🚀 Website besuchen: https://renovation-tau.vercel.app](https://renovation-tau.vercel.app)**

![Website Preview](https://sjc.microlink.io/yIQLizTcfLOrfxyDHBv7wl97NTsnGfsmt4T-HPF2ObWiO5yzojkM0tib_IKGRmYHlx2FA9VSloILBZqGKcohUA.jpeg)

## ✨ Features

### 🎨 **Design & UX**
- **Modernes, responsives Design** mit Schweizer Qualitätsstandards
- **Scroll-aktivierte Animationen** für alle Sektionen
- **Interaktive Partikel-Effekte** und morphende Hintergründe
- **Smooth Scrolling** Navigation zwischen Sektionen
- **Mobile-First** Responsive Design

### 🎭 **Animationen & Interaktivität**
- **Fade-in Animationen** beim Scrollen mit Intersection Observer
- **Floating Particles** die der Mausbewegung folgen
- **Morphing Background Blobs** mit Scroll-basierten Transformationen
- **Hover-Effekte** auf allen interaktiven Elementen
- **Scroll Progress Indicator** am oberen Bildschirmrand
- **Geometric Shapes** mit dynamischen Bewegungen

### 📱 **Funktionalitäten**
- **WhatsApp Integration** mit vorgefertigten Nachrichten
- **Kontaktformular** mit Validierung
- **Responsive Navigation** mit Mobile Menu
- **Testimonials Sektion** mit Bewertungen
- **Projekt-Galerie** mit Hover-Effekten
- **Service-Karten** mit detaillierten Beschreibungen

### ⚖️ **Rechtliche Compliance**
- **AGB Modal** mit vollständigen Geschäftsbedingungen
- **Datenschutz Modal** DSGVO-konform
- **Cookie-Hinweise** und Datenschutzrichtlinien

## 🛠️ Technologie-Stack

### **Frontend Framework**
- **[Next.js 15](https://nextjs.org/)** - React Framework mit App Router
- **[React 18](https://react.dev/)** - UI Library mit Hooks
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS Framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Moderne UI Komponenten
- **[Lucide React](https://lucide.dev/)** - Beautiful SVG Icons
- **Custom CSS Animations** - Keyframe-basierte Animationen

### **Animationen & Interaktivität**
- **Intersection Observer API** - Scroll-basierte Animationen
- **CSS Transforms & Transitions** - Smooth Animationen
- **Mouse Movement Tracking** - Interaktive Partikel-Effekte
- **Scroll Progress Tracking** - Dynamische UI Updates

### **Deployment & Hosting**
- **[Vercel](https://vercel.com/)** - Serverless Deployment Platform
- **Automatic Deployments** - Git-basierte CI/CD
- **Edge Functions** - Globale Performance

## 🎯 Sektionen & Inhalte

### 🏡 **Hero Section**
- Eindrucksvolle Überschrift mit Gradient-Text
- Call-to-Action Buttons
- Statistiken (500+ Projekte, 15+ Jahre, 98% Zufriedenheit)
- Hochwertige Interior Design Bilder

### 🔧 **Dienstleistungen**
- **Küchenrenovierung** - Moderne Designs mit Premium-Geräten
- **Luxusbäder** - Spa-ähnliche Badezimmer mit Smart-Technologie
- **Komplette Renovierungen** - Schlüsselfertige Projekte
- **Technische Installationen** - Hausautomation & Klimaanlagen
- **Premium-Wartung** - 24/7 Support mit erweiterten Garantien
- **Design-Beratung** - 3D-Renderings und persönliche Beratung

### 🏗️ **Projekte**
- Projekt-Galerie mit Hover-Effekten
- Standort-Informationen (Zürich, Genf, Basel)
- Projekt-Kategorien und Beschreibungen

### 💬 **Testimonials**
- Kundenbewertungen mit 5-Sterne-System
- Authentische Erfahrungsberichte
- Professionelle Referenzen

### 📞 **Kontakt**
- Vollständiges Kontaktformular
- Direkte Kontaktinformationen
- WhatsApp-Integration
- Standort-Details

## 🚀 Installation & Setup

### **Voraussetzungen**
- Node.js 18.18.0 oder höher
- npm oder yarn Package Manager

### **Lokale Entwicklung**

\`\`\`bash
# Repository klonen
git clone [repository-url]
cd nik-renovation

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Produktions-Server starten
npm start
\`\`\`

### **Umgebungsvariablen**
\`\`\`env
# Optional: Analytics oder andere Services
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
\`\`\`

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile Features**
- Hamburger Navigation Menu
- Touch-optimierte Buttons
- Optimierte Animationen für Performance
- Responsive Typografie

## 🎨 Design System

### **Farbpalette**
- **Primary**: Emerald (Schweizer Grün)
- **Secondary**: Teal & Cyan
- **Neutral**: Grays für Text und Hintergründe
- **Accent**: Gelb für Bewertungen

### **Typografie**
- **Headings**: Bold, große Schriftgrößen
- **Body**: Readable, optimierte Zeilenhöhe
- **Buttons**: Medium weight, klare CTAs

## ⚡ Performance Optimierungen

### **Next.js Features**
- **Image Optimization** - Automatische Bildkomprimierung
- **Code Splitting** - Lazy Loading von Komponenten
- **Static Generation** - Pre-rendered Pages
- **Font Optimization** - Optimierte Web Fonts

### **Animation Performance**
- **CSS Transforms** statt Layout-Änderungen
- **will-change** Properties für GPU-Beschleunigung
- **Intersection Observer** für effiziente Scroll-Detection
- **RequestAnimationFrame** für smooth Animationen

## 🔧 Anpassungen & Erweiterungen

### **Inhalte ändern**
- Texte in `renovation-page.tsx` bearbeiten
- Bilder in `/public` Ordner ersetzen
- Kontaktdaten in der Kontakt-Sektion aktualisieren

### **Styling anpassen**
- Farben in `tailwind.config.ts` ändern
- Custom CSS in `globals.css` hinzufügen
- Komponenten-Styles in den jeweiligen Dateien

### **Neue Sektionen hinzufügen**
- Neue Komponenten in `/components` erstellen
- Navigation in Header erweitern
- Scroll-Animationen für neue Elemente hinzufügen

## 📄 Browser-Unterstützung

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit deine Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📝 Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert - siehe die [LICENSE](LICENSE) Datei für Details.

## 📞 Kontakt

**NIK-Renovation**
- 🌐 Website: [https://renovation-tau.vercel.app](https://renovation-tau.vercel.app)
- 📧 Email: info@nik-renovation.ch
- 📱 WhatsApp: +41 79 132 65 65
- 📍 Adresse: Bahnhofstrasse 123, 8001 Zürich, Schweiz

---

**Entwickelt mit ❤️ und Schweizer Präzision**