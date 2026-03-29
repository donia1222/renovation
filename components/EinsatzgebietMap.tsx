"use client"

import { useEffect, useRef } from "react"

const locations = [
  { name: "Sevelen", lat: 47.1232, lng: 9.4862, main: true },
  { name: "Buchs SG", lat: 47.1667, lng: 9.4333 },
  { name: "Sargans", lat: 47.0500, lng: 9.4333 },
  { name: "Mels", lat: 47.0667, lng: 9.4167 },
  { name: "Bad Ragaz", lat: 47.0167, lng: 9.5000 },
  { name: "Vaduz FL", lat: 47.1333, lng: 9.5167 },
  { name: "Schaan FL", lat: 47.1167, lng: 9.5000 },
  { name: "Trübbach", lat: 47.1000, lng: 9.4833 },
  { name: "Wartau", lat: 47.0833, lng: 9.4667 },
  { name: "Grabs", lat: 47.1500, lng: 9.4500 },
  { name: "Gams", lat: 47.2000, lng: 9.4333 },
  { name: "Haag SG", lat: 47.2000, lng: 9.4667 },
]

export default function EinsatzgebietMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    // Destroy existing Leaflet instance if present
    const container = mapRef.current as any
    if (container._leaflet_id) {
      container._leaflet_id = null
    }

    let map: any = null

    import("leaflet").then((L) => {
      if (!mapRef.current) return

      // Double-check container is clean
      const el = mapRef.current as any
      if (el._leaflet_id) return

      delete (L.Icon.Default.prototype as any)._getIconUrl

      map = L.map(mapRef.current, {
        center: [47.11, 9.48],
        zoom: 11,
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: false,
      })

      // Clean minimal tile layer
      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        maxZoom: 19,
      }).addTo(map)

      L.control.attribution({ prefix: false })
        .addAttribution('© <a href="https://carto.com">CARTO</a>')
        .addTo(map)

      locations.forEach(({ name, lat, lng, main }) => {
        const icon = L.divIcon({
          className: "",
          html: `<div style="
            background:${main ? "#B09070" : "#3A3A3A"};
            width:${main ? 14 : 10}px;
            height:${main ? 14 : 10}px;
            border-radius:50%;
            border:2px solid white;
            box-shadow:0 2px 6px rgba(0,0,0,0.4);
          "></div>`,
          iconSize: [main ? 14 : 10, main ? 14 : 10],
          iconAnchor: [main ? 7 : 5, main ? 7 : 5],
        })

        const marker = L.marker([lat, lng], { icon }).addTo(map)

        // Always-visible label
        marker.bindTooltip(name, {
          permanent: true,
          direction: "top",
          offset: [0, main ? -10 : -8],
          className: "nikqi-tooltip",
        }).openTooltip()
      })
    })

    return () => {
      if (map) {
        map.remove()
        map = null
      }
    }
  }, [])

  return (
    <>
      <style>{`
        .nikqi-tooltip {
          background: white !important;
          border: 1px solid #D0D0D0 !important;
          border-radius: 0 !important;
          color: #1F1F1F !important;
          font-size: 10px !important;
          font-weight: 700 !important;
          font-family: sans-serif !important;
          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;
          padding: 2px 6px !important;
          box-shadow: 0 2px 6px rgba(0,0,0,0.12) !important;
          white-space: nowrap !important;
        }
        .nikqi-tooltip::before { display: none !important; }
        .leaflet-control-zoom a {
          border-radius: 0 !important;
          font-weight: 700 !important;
        }
      `}</style>
      <div
        ref={mapRef}
        style={{ height: "440px", width: "100%", border: "1px solid #D0D0D0" }}
      />
    </>
  )
}
