import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Notre Processus — COCO D'OR BIO",
  description: "Découvrez comment COCO D'OR BIO transforme les déchets en ressources : collecte, tri, valorisation et distribution en Côte d'Ivoire.",
};

const etapes = [
  {
    num: "01",
    titre: "Collecte sur le terrain",
    desc: "Nos équipes collectent les déchets ménagers, industriels et agricoles selon un planning établi. Chaque passage est documenté et reporté.",
    img: "/images/1.jpg",
    color: "#2D6A2F",
    details: [
      "Camions équipés et équipes formées",
      "Collecte sélective à la source",
      "Couverture zones urbaines et rurales",
      "Reporting GPS en temps réel",
    ],
  },
  {
    num: "02",
    titre: "Tri & Séparation",
    desc: "Les déchets collectés sont acheminés vers notre centre de tri où ils sont séparés par catégorie : organiques, plastiques, métaux, papier, coques de coco.",
    img: "/images/2.jpg",
    color: "#3A7EC4",
    details: [
      "Centre de tri équipé à Abidjan",
      "5 flux de tri distincts",
      "Pesée et traçabilité de chaque lot",
      "Contrôle qualité systématique",
    ],
  },
  {
    num: "03",
    titre: "Valorisation & Transformation",
    desc: "Chaque flux est transformé : coques de coco → charbon écologique, déchets organiques → compost, plastiques → granulés revendus aux recycleurs.",
    img: "/images/3.jpg",
    color: "#C9A84C",
    details: [
      "Carbonisation des coques de coco",
      "Compostage accéléré 21 jours",
      "Compactage des plastiques et métaux",
      "Certification des produits finis",
    ],
  },
  {
    num: "04",
    titre: "Contrôle Qualité",
    desc: "Chaque produit valorisé passe par un contrôle qualité rigoureux avant commercialisation. Nos certifications garantissent la conformité aux standards.",
    img: "/images/4.jpg",
    color: "#52A855",
    details: [
      "Tests en laboratoire partenaire",
      "Certification ANASUR pour le charbon",
      "Traçabilité lot par lot",
      "Rapport qualité mensuel",
    ],
  },
  {
    num: "05",
    titre: "Distribution & Impact",
    desc: "Les produits finis sont distribués aux ménages, restaurants, agriculteurs et industriels. Les revenus financent l'expansion de nos opérations.",
    img: "/images/5.jpg",
    color: "#9B5E30",
    details: [
      "Réseau de distribution Abidjan",
      "Livraison intérieur du pays",
      "Partenariats avec agriculteurs",
      "Rapport d'impact annuel publié",
    ],
  },
];

const chiffres = [
  { val: "500+", label: "Tonnes valorisées / an" },
  { val: "5", label: "Flux de tri distincts" },
  { val: "21j", label: "Cycle compostage" },
  { val: "0", label: "Déchet non valorisé" },
];

export default function ProcessusPage() {
  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/6.jpg" alt="Processus COCO D'OR BIO" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--vert-fonce) 0%, var(--bg) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">De la collecte à la ressource</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
            className="text-4xl md:text-6xl font-bold mt-4 mb-5 leading-tight">
            Notre Processus
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Chaque déchet collecté suit un parcours précis jusqu'à sa transformation
            en ressource utile. Voici comment nous fermons la boucle.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-12 border-y" style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {chiffres.map(c => (
            <div key={c.label}>
              <p className="stat-number text-4xl font-bold mb-1">{c.val}</p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{c.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Étapes */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {etapes.map((e, i) => (
            <div key={e.num}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] group ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image src={e.img} alt={e.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
                {/* Numéro */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-lg"
                  style={{ background: e.color, color: "#071A09", fontFamily: "'Playfair Display', serif" }}>
                  {e.num}
                </div>
              </div>

              {/* Texte */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: e.color + "20", border: `1px solid ${e.color}35`, color: e.color }}>
                    Étape {e.num}
                  </span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
                  className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {e.titre}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{e.desc}</p>
                <ul className="space-y-2.5">
                  {e.details.map(d => (
                    <li key={d} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: e.color }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Schéma circulaire */}
      <section className="py-20" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label">Économie circulaire</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
            className="text-3xl font-bold mt-3 mb-12">
            La boucle est bouclée
          </h2>
          <div className="relative">
            <svg viewBox="0 0 600 300" className="w-full max-w-2xl mx-auto">
              <defs>
                <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill="#2D6A2F" opacity="0.6"/>
                </marker>
              </defs>
              {/* Flèche circulaire */}
              <path d="M 100 150 Q 300 20 500 150 Q 300 280 100 150"
                fill="none" stroke="#2D6A2F" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                markerEnd="url(#arrow)"/>
              {/* Noeuds */}
              {[
                { x: 100, y: 150, label: "Déchets", sub: "Collecte", color: "#2D6A2F" },
                { x: 300, y: 60, label: "Tri", sub: "Séparation", color: "#3A7EC4" },
                { x: 500, y: 150, label: "Valorisation", sub: "Transformation", color: "#C9A84C" },
                { x: 300, y: 240, label: "Produits", sub: "Distribution", color: "#52A855" },
              ].map(n => (
                <g key={n.label} transform={`translate(${n.x},${n.y})`}>
                  <circle r="38" fill={n.color + "20"} stroke={n.color} strokeWidth="1.5"/>
                  <text textAnchor="middle" y="-4" fontSize="11" fontWeight="700" fill={n.color} fontFamily="Playfair Display, serif">{n.label}</text>
                  <text textAnchor="middle" y="12" fontSize="9" fill={n.color} opacity="0.7" fontFamily="sans-serif">{n.sub}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--vert-fonce)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
            className="text-3xl md:text-4xl font-bold mb-4">
            Rejoignez la boucle
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>
            Commune, entreprise ou particulier — intégrez notre circuit de valorisation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/etude-technique" className="btn-primary">Demander une étude <ArrowRight size={16} /></Link>
            <Link href="/produits" className="btn-outline">Voir nos produits</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
