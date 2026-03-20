"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Volume2, VolumeX } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* ── VIDEO / FOND IMMERSIF ── */}
      <div className="absolute inset-0 z-0">
        {/*
          Remplacez src par votre vraie vidéo :
          /videos/valorisation.mp4 ou une URL externe
          En attendant : fond SVG animé très vert
        */}
        {/* Fond sombre pendant le chargement */}
        <div className="absolute inset-0" style={{ background: "var(--vert-deep)" }} />

        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
          autoPlay
          loop
          muted
          playsInline
          src="/deo/pres.mp4"
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.style.opacity = "0.6";
            }
          }}
        />

        {/* Overlay gradient directionnel */}
        <div className="absolute inset-0 video-overlay" />
        {/* Fondu bas */}
        <div className="absolute bottom-0 left-0 right-0 h-48 video-overlay-bottom" />
      </div>

      {/* ── CONTENU HERO ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="badge-green mb-8 inline-flex animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52A855] animate-breathe" />
            Économie Circulaire · Côte d'Ivoire 🇨🇮
          </div>

          {/* Titre */}
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.0] mb-8 animate-fade-up delay-100"
          >
            <span className="text-[#FDF6E3]">Recyclage &</span>
            <br />
            <span className="text-glow-green" style={{ color: "var(--vert-leaf)" }}>Revalorisation</span>
            <br />
            <span className="text-[#FDF6E3]/75 text-4xl md:text-5xl lg:text-6xl">des Déchets</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-[#FDF6E3]/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 animate-fade-up delay-200">
            <strong style={{ color: "var(--or)" }}>COCO D'OR BIO</strong> accompagne communes, villages
            et entreprises ivoiriennes dans la collecte, l'assainissement et la revalorisation de leurs déchets.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
            <Link href="/etude-technique" className="btn-primary animate-pulse-gold">
              Demander une étude technique <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn-outline">
              Découvrir nos services
            </Link>
          </div>

          {/* Badges confiance */}
          <div className="flex flex-wrap gap-3 animate-fade-up delay-400">
            {["100% Ivoirien", "Agréé & Certifié", "Éco-responsable", "Étude gratuite"].map((b) => (
              <span key={b} className="text-xs px-3 py-1.5 rounded-full font-medium"
                style={{ background: "rgba(45,106,47,0.2)", border: "1px solid rgba(126,196,127,0.2)", color: "rgba(253,246,227,0.65)" }}>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Stats flottantes droite */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
          {[
            { val: "500+", label: "Tonnes valorisées" },
            { val: "12", label: "Communes" },
            { val: "98%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="card-green px-5 py-4 text-center rounded-2xl min-w-[120px]">
              <p className="stat-number text-2xl font-bold">{s.val}</p>
              <p className="text-[#7EC47F]/60 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTRÔLES VIDÉO ── */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3">
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
          style={{ background: "rgba(45,106,47,0.3)", border: "1px solid rgba(126,196,127,0.2)" }}
          title={muted ? "Activer le son" : "Couper le son"}
        >
          {muted
            ? <VolumeX size={15} className="text-[#7EC47F]" />
            : <Volume2 size={15} className="text-[#7EC47F]" />
          }
        </button>
        <span className="text-[#7EC47F]/40 text-xs">Vidéo de valorisation</span>
      </div>

      {/* ── SCROLL HINT ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-[#7EC47F]/40 text-xs tracking-widest uppercase">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#2D6A2F] to-transparent" />
      </div>
    </section>
  );
}
