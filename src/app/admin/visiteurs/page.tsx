"use client";

import { useState } from "react";
import { Users, TrendingUp, Eye, Clock, Globe, Smartphone, Monitor } from "lucide-react";

const statsGlobales = [
  { label: "Visiteurs ce mois", val: "1 240", delta: "+18%", icon: Users, color: "#7EC47F" },
  { label: "Pages vues", val: "4 830", delta: "+24%", icon: Eye, color: "#C9A84C" },
  { label: "Durée moy. visite", val: "2m 34s", delta: "+8%", icon: Clock, color: "#3A7EC4" },
  { label: "Taux de rebond", val: "42%", delta: "-5%", icon: TrendingUp, color: "#52A855" },
];

const pagesPopulaires = [
  { page: "Accueil", url: "/", vues: 1240, pct: 100 },
  { page: "Services", url: "/services", vues: 820, pct: 66 },
  { page: "Étude Technique", url: "/etude-technique", vues: 640, pct: 52 },
  { page: "Actualités", url: "/actualites", vues: 510, pct: 41 },
  { page: "Contact", url: "/contact", vues: 380, pct: 31 },
  { page: "Équipe", url: "/equipe", vues: 210, pct: 17 },
];

const provenance = [
  { source: "Recherche Google", vues: 580, pct: 47, color: "#4285F4" },
  { source: "Accès direct", vues: 310, pct: 25, color: "#C9A84C" },
  { source: "Réseaux sociaux", vues: 220, pct: 18, color: "#E1306C" },
  { source: "Liens externes", vues: 130, pct: 10, color: "#7EC47F" },
];

const appareils = [
  { type: "Mobile", pct: 58, icon: Smartphone, color: "#7EC47F" },
  { type: "Desktop", pct: 35, icon: Monitor, color: "#C9A84C" },
  { type: "Tablette", pct: 7, icon: Globe, color: "#3A7EC4" },
];

const visiteursParJour = [
  { j: "Lun", v: 38 }, { j: "Mar", v: 52 }, { j: "Mer", v: 45 },
  { j: "Jeu", v: 61 }, { j: "Ven", v: 74 }, { j: "Sam", v: 42 }, { j: "Dim", v: 28 },
];
const maxV = Math.max(...visiteursParJour.map(d => d.v));

export default function VisiteursPage() {
  const [periode, setPeriode] = useState<"7j" | "30j" | "90j">("30j");

  return (
    <div className="max-w-5xl space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary, #FDF6E3)" }}
            className="text-2xl font-bold">
            Visiteurs du site
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted, rgba(253,246,227,0.4))" }}>
            Statistiques de fréquentation — données simulées
          </p>
        </div>
        <div className="flex gap-1.5 p-1 rounded-xl" style={{ background: "var(--bg-surface, #0C1A0D)", border: "1px solid var(--border, rgba(45,106,47,0.18))" }}>
          {(["7j", "30j", "90j"] as const).map(p => (
            <button key={p} onClick={() => setPeriode(p)}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all"
              style={{
                background: periode === p ? "#C9A84C" : "transparent",
                color: periode === p ? "#071A09" : "var(--text-muted, rgba(253,246,227,0.5))",
              }}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsGlobales.map(({ label, val, delta, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl p-5 border"
            style={{ background: "var(--bg-surface, #0C1A0D)", borderColor: "var(--border, rgba(45,106,47,0.18))" }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: color + "20", color }}>
                <Icon size={16} />
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{
                  background: delta.startsWith("+") ? "rgba(82,168,85,0.15)" : "rgba(217,64,64,0.15)",
                  color: delta.startsWith("+") ? "#52A855" : "#D94040",
                }}>
                {delta}
              </span>
            </div>
            <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary, #FDF6E3)" }}>
              {val}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--text-muted, rgba(253,246,227,0.5))" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Graphique visiteurs par jour */}
      <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-surface, #0C1A0D)", borderColor: "var(--border, rgba(45,106,47,0.18))" }}>
        <h2 className="text-sm font-semibold mb-6" style={{ color: "var(--text-primary, #FDF6E3)" }}>
          Visiteurs — 7 derniers jours
        </h2>
        <div className="flex items-end gap-3 h-32">
          {visiteursParJour.map(({ j, v }) => (
            <div key={j} className="flex-1 flex flex-col items-center gap-2">
              <span className="text-xs" style={{ color: "var(--text-muted, rgba(253,246,227,0.4))" }}>{v}</span>
              <div className="w-full rounded-t-lg transition-all duration-500"
                style={{
                  height: `${(v / maxV) * 100}%`,
                  background: "linear-gradient(to top, #2D6A2F, #7EC47F)",
                  minHeight: "4px",
                }} />
              <span className="text-xs" style={{ color: "var(--text-muted, rgba(253,246,227,0.5))" }}>{j}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pages populaires */}
        <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-surface, #0C1A0D)", borderColor: "var(--border, rgba(45,106,47,0.18))" }}>
          <h2 className="text-sm font-semibold mb-5" style={{ color: "var(--text-primary, #FDF6E3)" }}>
            Pages les plus visitées
          </h2>
          <div className="space-y-4">
            {pagesPopulaires.map(({ page, url, vues, pct }) => (
              <div key={url}>
                <div className="flex justify-between items-center mb-1.5">
                  <div>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary, #FDF6E3)" }}>{page}</span>
                    <span className="text-xs ml-2" style={{ color: "var(--text-muted, rgba(253,246,227,0.35))" }}>{url}</span>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "#C9A84C" }}>{vues}</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(45,106,47,0.15)" }}>
                  <div className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${pct}%`, background: "linear-gradient(to right, #2D6A2F, #C9A84C)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {/* Provenance */}
          <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-surface, #0C1A0D)", borderColor: "var(--border, rgba(45,106,47,0.18))" }}>
            <h2 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary, #FDF6E3)" }}>
              Sources de trafic
            </h2>
            <div className="space-y-3">
              {provenance.map(({ source, vues, pct, color }) => (
                <div key={source} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                  <span className="flex-1 text-sm" style={{ color: "var(--text-muted, rgba(253,246,227,0.6))" }}>{source}</span>
                  <span className="text-xs font-semibold" style={{ color: "var(--text-primary, #FDF6E3)" }}>{vues}</span>
                  <span className="text-xs w-8 text-right" style={{ color: "var(--text-muted, rgba(253,246,227,0.4))" }}>{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Appareils */}
          <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-surface, #0C1A0D)", borderColor: "var(--border, rgba(45,106,47,0.18))" }}>
            <h2 className="text-sm font-semibold mb-4" style={{ color: "var(--text-primary, #FDF6E3)" }}>
              Appareils utilisés
            </h2>
            <div className="space-y-3">
              {appareils.map(({ type, pct, icon: Icon, color }) => (
                <div key={type} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: color + "20", color }}>
                    <Icon size={14} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs" style={{ color: "var(--text-muted, rgba(253,246,227,0.6))" }}>{type}</span>
                      <span className="text-xs font-semibold" style={{ color: "var(--text-primary, #FDF6E3)" }}>{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(45,106,47,0.15)" }}>
                      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
