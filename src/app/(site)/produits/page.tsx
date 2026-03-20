import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Nos Produits — COCO D'OR BIO",
  description: "Charbon écologique de coco, compost organique, briquettes — découvrez les produits valorisés par COCO D'OR BIO, fabriqués en Côte d'Ivoire.",
};

const produits = [
  {
    id: "charbon",
    nom: "Charbon Écologique de Coco",
    accroche: "Une énergie propre issue des coques de noix de coco",
    desc: "Notre charbon écologique est produit par carbonisation des coques de noix de coco collectées. Certifié, il offre un pouvoir calorifique supérieur au charbon de bois traditionnel tout en réduisant la déforestation.",
    img: "/images/1.jpg",
    badge: "Certifié",
    badgeColor: "#C9A84C",
    points: [
      "Pouvoir calorifique élevé — 7 200 kcal/kg",
      "Moins de fumée que le charbon de bois",
      "Disponible en sacs 5 kg, 10 kg et 25 kg",
      "Livraison sur Abidjan et intérieur du pays",
      "Idéal pour restaurants, hôtels, ménages",
    ],
    prix: "À partir de 2 500 FCFA / sac 5 kg",
  },
  {
    id: "compost",
    nom: "Compost Organique",
    accroche: "Un amendement naturel pour des sols fertiles",
    desc: "Issu du compostage des déchets organiques collectés (épluchures, résidus de marché, déchets verts), notre compost enrichit les sols et réduit le besoin en engrais chimiques.",
    img: "/images/2.jpg",
    badge: "100% naturel",
    badgeColor: "#52A855",
    points: [
      "Riche en matière organique et nutriments",
      "Améliore la structure et la rétention d'eau du sol",
      "Disponible en sacs 10 kg et 50 kg",
      "Adapté aux cultures maraîchères et fruitières",
      "Certifié sans produits chimiques",
    ],
    prix: "À partir de 1 500 FCFA / sac 10 kg",
  },
  {
    id: "briquettes",
    nom: "Briquettes de Biomasse",
    accroche: "Une alternative durable au bois de chauffe",
    desc: "Fabriquées à partir de résidus agricoles compressés (coques de coco, tiges de maïs, sciure), nos briquettes sont une solution énergétique propre et économique pour les ménages et industries.",
    img: "/images/3.jpg",
    badge: "Éco-responsable",
    badgeColor: "#3D8B40",
    points: [
      "Combustion longue durée — jusqu'à 3h par briquette",
      "Faible taux de cendres",
      "Disponible en cartons de 20 unités",
      "Adapté aux foyers améliorés et cuisinières",
      "Réduit la consommation de bois de 60%",
    ],
    prix: "À partir de 3 000 FCFA / carton 20 unités",
  },
  {
    id: "matières-recyclables",
    nom: "Matières Recyclables Triées",
    accroche: "Des matières premières secondaires pour l'industrie",
    desc: "COCO D'OR BIO collecte, trie et conditionne les matières recyclables (plastiques PET, HDPE, aluminium, papier/carton) pour les revendre aux filières industrielles de recyclage.",
    img: "/images/4.jpg",
    badge: "Économie circulaire",
    badgeColor: "#3A7EC4",
    points: [
      "Plastiques PET et HDPE triés et compactés",
      "Aluminium et métaux ferreux",
      "Papier et carton conditionnés en balles",
      "Traçabilité complète des lots",
      "Achat en gros pour industriels",
    ],
    prix: "Prix sur devis selon volume",
  },
];

const certifications = [
  { label: "Certification qualité charbon", org: "ANASUR Côte d'Ivoire", annee: "2025" },
  { label: "Agrément collecte déchets", org: "Ministère de l'Environnement CI", annee: "2023" },
  { label: "Label Économie Circulaire", org: "REDD+ Afrique de l'Ouest", annee: "2024" },
];

export default function ProduitsPage() {
  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/1.jpg" alt="Produits COCO D'OR BIO" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--vert-fonce) 0%, var(--bg) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">Fabriqués en Côte d&apos;Ivoire</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
            className="text-4xl md:text-6xl font-bold mt-4 mb-5 leading-tight">
            Nos Produits
            <span className="block" style={{ color: "var(--or)" }}>valorisés</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "var(--text-muted)" }}>
            Chaque déchet collecté devient une ressource. Découvrez nos produits issus
            de la valorisation des déchets ivoiriens.
          </p>
          <Link href="/contact" className="btn-primary">
            Commander nos produits <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Produits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {produits.map((p, i) => (
            <div key={p.id} id={p.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] group ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image src={p.img} alt={p.nom} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.55) 0%, transparent 60%)" }} />
                <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: p.badgeColor + "25", border: `1px solid ${p.badgeColor}40`, color: p.badgeColor }}>
                  {p.badge}
                </span>
              </div>

              {/* Texte */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
                  className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                  {p.nom}
                </h2>
                <p className="text-base font-medium mb-4" style={{ color: p.badgeColor }}>{p.accroche}</p>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
                <ul className="space-y-3 mb-6">
                  {p.points.map(pt => (
                    <li key={pt} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: p.badgeColor }} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="text-sm font-semibold px-4 py-2 rounded-full"
                    style={{ background: p.badgeColor + "15", border: `1px solid ${p.badgeColor}30`, color: p.badgeColor }}>
                    {p.prix}
                  </span>
                  <Link href="/contact" className="btn-primary text-sm">
                    Commander <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20" style={{ background: "var(--bg-surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Qualité garantie</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
              className="text-3xl font-bold mt-3">
              Certifications & Agréments
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map(c => (
              <div key={c.label} className="card-dark p-6 text-center">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.15)", border: "2px solid rgba(201,168,76,0.3)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <p className="font-bold text-sm mb-1" style={{ color: "var(--text-primary)" }}>{c.label}</p>
                <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{c.org}</p>
                <span className="text-xs font-semibold" style={{ color: "var(--or)" }}>{c.annee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--vert-fonce)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
            className="text-3xl md:text-4xl font-bold mb-4">
            Intéressé par nos produits ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-muted)" }}>
            Contactez-nous pour un devis ou une commande en gros.
            Livraison sur Abidjan et intérieur du pays.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Nous contacter <ArrowRight size={16} /></Link>
            <Link href="/services/valorisation" className="btn-outline">Notre processus de valorisation</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
