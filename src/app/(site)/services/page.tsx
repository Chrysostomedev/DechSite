import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Nos Services — COCO D'OR BIO",
  description: "Collecte de déchets, assainissement, réaménagement et valorisation — découvrez tous les services de COCO D'OR BIO pour communes, villages et entreprises en Côte d'Ivoire.",
};

const services = [
  {
    id: "collecte",
    href: "/services/collecte",
    titre: "Collecte de Déchets",
    accroche: "Un service de collecte professionnel, régulier et fiable",
    desc: "COCO D'OR BIO organise et opère la collecte de déchets ménagers, industriels et agricoles pour les communes, villages et entreprises de Côte d'Ivoire.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    color: "#2D6A2F",
    points: [
      "Collecte hebdomadaire ou bi-hebdomadaire",
      "Véhicules adaptés zones urbaines et rurales",
      "Tri sélectif à la source",
      "Reporting mensuel des volumes collectés",
      "Équipes formées aux bonnes pratiques sanitaires",
    ],
  },
  {
    id: "assainissement",
    href: "/services/assainissement",
    titre: "Assainissement",
    accroche: "Des études et travaux d'assainissement sur mesure",
    desc: "Nous réalisons des études techniques complètes et mettons en œuvre des solutions d'assainissement adaptées à chaque contexte local.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    color: "#3A7EC4",
    points: [
      "Étude technique préalable gratuite",
      "Diagnostic de l'existant et cartographie",
      "Conception de systèmes de drainage",
      "Travaux d'installation et réhabilitation",
      "Formation des équipes locales",
    ],
  },
  {
    id: "reamenagement",
    href: "/services/reamenagement",
    titre: "Réaménagement",
    accroche: "Transformez votre espace en un environnement sain",
    desc: "COCO D'OR BIO conçoit et réalise des projets de réaménagement urbain et rural : espaces verts, mobilier urbain, réorganisation de marchés.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    color: "#9B5E30",
    points: [
      "Étude d'aménagement et plan directeur",
      "Installation de bacs et points de collecte",
      "Création et entretien d'espaces verts",
      "Réorganisation des zones de marché",
      "Sensibilisation des populations",
    ],
  },
  {
    id: "valorisation",
    href: "/services/valorisation",
    titre: "Valorisation & Recyclage",
    accroche: "Transformez vos déchets en ressources à valeur ajoutée",
    desc: "Notre cœur de métier : transformer les déchets en ressources utiles. Charbon écologique, compost, matières recyclables — nous fermons la boucle.",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    color: "#52A855",
    points: [
      "Charbon écologique issu de coques de coco",
      "Compostage des déchets organiques",
      "Tri et revente des matières recyclables",
      "Conseil en économie circulaire",
      "Certification et traçabilité des produits",
    ],
  },
];

const processus = [
  { num: "01", titre: "Demande d'étude", desc: "Remplissez notre formulaire en ligne ou contactez-nous directement." },
  { num: "02", titre: "Diagnostic terrain", desc: "Nos techniciens se déplacent pour évaluer votre situation." },
  { num: "03", titre: "Rapport & Devis", desc: "Vous recevez une étude complète avec recommandations et tarifs." },
  { num: "04", titre: "Mise en œuvre", desc: "Nos équipes interviennent selon le planning convenu." },
  { num: "05", titre: "Suivi & Reporting", desc: "Rapports réguliers et ajustements pour garantir les résultats." },
];

export default function ServicesPage() {
  return (
    <div style={{ background: "var(--charbon)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Services COCO D'OR BIO"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,26,9,0.9) 0%, rgba(7,26,9,0.7) 50%, var(--charbon) 100%)" }} />
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <span className="section-label">Ce que nous faisons</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] mt-3 mb-5 leading-tight">
            Nos Services
            <span className="block" style={{ color: "var(--or)" }}>pour votre territoire</span>
          </h1>
          <p className="text-[#FDF6E3]/60 text-lg max-w-2xl leading-relaxed mb-8">
            De la collecte à la revalorisation, COCO D'OR BIO couvre tout le cycle de gestion
            des déchets pour communes, villages et entreprises ivoiriennes.
          </p>
          <Link href="/etude-technique" className="btn-primary">
            Demander une étude gratuite <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-24">
          {services.map((s, i) => (
            <div key={s.id} id={s.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image */}
              <div className={`relative rounded-3xl overflow-hidden aspect-[4/3] group ${i % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <Image src={s.img} alt={s.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
                <Link href={s.href}
                  className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all"
                  style={{ background: `${s.color}30`, border: `1px solid ${s.color}50`, color: s.color }}>
                  Voir le détail <ArrowRight size={12} />
                </Link>
              </div>

              {/* Texte */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
                  style={{ background: `${s.color}20`, border: `1px solid ${s.color}35`, color: s.color }}>
                  {s.titre}
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mb-3 leading-tight">
                  {s.accroche}
                </h2>
                <p className="text-[#FDF6E3]/60 text-base leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.points.map(p => (
                    <li key={p} className="flex items-start gap-3 text-[#FDF6E3]/70 text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: s.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href={s.href} className="btn-primary text-sm">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
                  <Link href="/etude-technique" className="btn-outline text-sm">
                    Demander ce service
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Processus */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Comment ça marche</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-3">
              Notre processus en 5 étapes
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processus.map((p, i) => (
              <div key={p.num} className="text-center relative">
                {i < processus.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-px"
                    style={{ background: "linear-gradient(to right, rgba(201,168,76,0.3), transparent)" }} />
                )}
                <div className="w-12 h-12 rounded-full font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #D4B96A)", color: "#071A09" }}>
                  {p.num}
                </div>
                <h3 className="text-[#FDF6E3]/80 font-semibold text-sm mb-2">{p.titre}</h3>
                <p className="text-[#FDF6E3]/45 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/etude-technique" className="btn-primary">
              Commencer maintenant <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
