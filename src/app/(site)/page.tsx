import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Play, Leaf, Recycle, Droplets, Building2 } from "lucide-react";
import HeroVideo from "@/components/sections/HeroVideo";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ImpactSection from "@/components/sections/ImpactSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <MarqueeBand />
      <ServicesGrid />
      <ImpactSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}

/* ─── BANDEAU DÉFILANT ──────────────────────────────────────────────────── */
function MarqueeBand() {
  const items = [
    "Collecte de Déchets",
    "Assainissement",
    "Réaménagement Urbain",
    "Revalorisation",
    "Entreprise Ivoirienne",
    "Économie Circulaire",
    "Certifié & Agréé",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[#2D6A2F]/30"
      style={{ background: "linear-gradient(135deg, #0D2B10 0%, #1A4D1E 100%)" }}>
      <div className="py-3.5 flex">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="shrink-0 flex items-center gap-3 px-8 text-sm font-medium text-[#7EC47F]/80">
              {item}
              <span className="w-1 h-1 rounded-full bg-[#C9A84C]/50" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── POURQUOI NOUS ─────────────────────────────────────────────────────── */
function WhyUsSection() {
  const points = [
    "Études techniques personnalisées et gratuites",
    "Équipes formées et équipements modernes",
    "Suivi et reporting transparent",
    "Tarifs adaptés aux budgets locaux",
    "Engagement environnemental certifié",
    "Intervention partout en Côte d'Ivoire",
  ];

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--surface)" }}>
      {/* Glow bg */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(45,106,47,0.12) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visuel gauche */}
          <div className="relative">
            {/* Carte principale */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] img-placeholder">
              {/* SVG illustratif */}
              <svg viewBox="0 0 600 450" className="w-full h-full absolute inset-0" preserveAspectRatio="xMidYMid slice">
                {/* Fond */}
                <defs>
                  <radialGradient id="bg1" cx="30%" cy="40%">
                    <stop offset="0%" stopColor="#2D6A2F" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#071A09" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="bg2" cx="70%" cy="70%">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.15"/>
                    <stop offset="100%" stopColor="#071A09" stopOpacity="0"/>
                  </radialGradient>
                </defs>
                <rect width="600" height="450" fill="#0D2B10"/>
                <circle cx="180" cy="180" r="200" fill="url(#bg1)"/>
                <circle cx="420" cy="320" r="150" fill="url(#bg2)"/>

                {/* Cercle recyclage central */}
                <g transform="translate(300,225)">
                  <circle r="100" fill="none" stroke="#2D6A2F" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.5"/>
                  <circle r="70" fill="rgba(45,106,47,0.15)" stroke="#3D8B40" strokeWidth="1"/>
                  <text textAnchor="middle" y="8" fontSize="40" fill="#7EC47F">♻️</text>
                  <text textAnchor="middle" y="30" fontSize="10" fill="#7EC47F" opacity="0.7" fontFamily="sans-serif">VALORISATION</text>
                </g>

                {/* Icônes satellites */}
                {[
                  { x: 100, y: 100, icon: "🚛", label: "Collecte" },
                  { x: 500, y: 100, icon: "💧", label: "Assainissement" },
                  { x: 100, y: 350, icon: "🏘️", label: "Réaménagement" },
                  { x: 500, y: 350, icon: "🌿", label: "Compost" },
                ].map((item, i) => (
                  <g key={i} transform={`translate(${item.x},${item.y})`}>
                    <circle r="36" fill="rgba(26,77,30,0.6)" stroke="#2D6A2F" strokeWidth="1"/>
                    <text textAnchor="middle" y="6" fontSize="20">{item.icon}</text>
                    <text textAnchor="middle" y="22" fontSize="8" fill="#7EC47F" opacity="0.8" fontFamily="sans-serif">{item.label}</text>
                    {/* Ligne vers centre */}
                    <line x1={300-item.x} y1={225-item.y} x2="0" y2="0"
                      stroke="#2D6A2F" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4"/>
                  </g>
                ))}

                {/* Palmier décoratif */}
                <g transform="translate(480,60)" opacity="0.3">
                  <line x1="0" y1="60" x2="0" y2="0" stroke="#2D6A2F" strokeWidth="3"/>
                  <ellipse cx="-15" cy="-5" rx="20" ry="8" fill="#2D6A2F" transform="rotate(-30)"/>
                  <ellipse cx="15" cy="-5" rx="20" ry="8" fill="#3D8B40" transform="rotate(30)"/>
                  <ellipse cx="0" cy="-20" rx="18" ry="7" fill="#52A855" transform="rotate(-10)"/>
                </g>
              </svg>
            </div>

            {/* Badge flottant */}
            <div className="badge-gold text-sm px-5 py-3 rounded-2xl shadow-2xl"
              style={{ background: "linear-gradient(135deg, #C9A84C, #D4B96A)", color: "#0A0F0A" }}>
              100% Ivoirien
            </div>

            {/* Mini stat flottante */}
            <div className="absolute -top-4 -left-4 card-green px-4 py-3 rounded-2xl">
              <p className="text-[#C9A84C] text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>500+</p>
              <p className="text-[#7EC47F]/70 text-xs">Tonnes valorisées</p>
            </div>
          </div>

          {/* Texte droite */}
          <div>
            <span className="section-label">Pourquoi nous choisir</span>
            <h2
              className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              <span className="text-[#FDF6E3]">L&apos;expertise locale</span>
              <span className="block text-glow-green" style={{ color: "var(--vert-leaf)" }}> au service de votre</span>
              <span className="text-[#FDF6E3]">environnement</span>
            </h2>
            <p className="text-[#FDF6E3]/55 text-base leading-relaxed mb-8">
              Fondée en Côte d'Ivoire, COCO D'OR BIO comprend les réalités locales.
              Des solutions adaptées à chaque contexte — grande commune d'Abidjan ou village rural.
            </p>
            <ul className="space-y-3.5 mb-10">
              {points.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#FDF6E3]/70 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--vert-clair)" }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/a-propos" className="btn-green">Notre histoire</Link>
              <Link href="/contact" className="btn-outline">Nous contacter</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA FINAL ─────────────────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--vert-fonce)" }}>
      {/* Cercles décoratifs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#2D6A2F]/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#2D6A2F]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,106,47,0.2) 0%, transparent 70%)" }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Logo SVG */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #0D2B10 0%, #1A4D1E 100%)", boxShadow: "0 0 60px rgba(201,168,76,0.3)", border: "2px solid rgba(201,168,76,0.3)" }}>
          <svg viewBox="0 0 48 48" width="44" height="44" fill="none">
            <ellipse cx="24" cy="28" rx="14" ry="16" fill="#5C3317" />
            <ellipse cx="24" cy="28" rx="10" ry="12" fill="#3d2010" />
            <path d="M24 14 C20 8 12 6 9 9 C13 11 18 13 24 14Z" fill="#2D6A2F" />
            <path d="M24 14 C28 8 36 6 39 9 C35 11 30 13 24 14Z" fill="#2D6A2F" />
            <path d="M24 14 C22 6 22 2 24 0 C26 2 26 6 24 14Z" fill="#52A855" />
            <circle cx="24" cy="28" r="3.5" fill="#C9A84C" />
          </svg>
        </div>

        <h2 style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-4xl md:text-6xl font-bold text-[#FDF6E3] mb-6 leading-tight">
          Ensemble pour une
          <span className="block text-glow-gold" style={{ color: "var(--or)" }}>Côte d'Ivoire plus propre</span>
        </h2>
        <p className="text-[#FDF6E3]/55 text-lg mb-12 leading-relaxed max-w-xl mx-auto">
          Rejoignez les communes et entreprises qui font confiance à COCO D'OR BIO
          pour la gestion durable de leurs déchets.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/etude-technique" className="btn-primary animate-pulse-gold">
            Demander une étude technique <ArrowRight size={16} />
          </Link>
          <Link href="/actualites" className="btn-outline">
            Nos actualités
          </Link>
        </div>
      </div>
    </section>
  );
}
