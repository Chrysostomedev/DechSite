import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Collecte de Déchets — COCO D'OR BIO",
  description: "Service professionnel de collecte de déchets ménagers, industriels et agricoles pour communes, villages et entreprises en Côte d'Ivoire.",
};

const points = [
  "Collecte hebdomadaire ou bi-hebdomadaire selon vos besoins",
  "Véhicules adaptés aux zones urbaines et rurales",
  "Tri sélectif à la source : organique, plastique, métal",
  "Reporting mensuel des volumes collectés",
  "Équipes formées aux bonnes pratiques sanitaires",
  "Couverture sur tout le territoire ivoirien",
];

const stats = [
  { val: "500+", label: "Tonnes collectées / an" },
  { val: "12", label: "Communes desservies" },
  { val: "2×", label: "Passages / semaine" },
  { val: "98%", label: "Taux de satisfaction" },
];

const cibles = [
  { label: "Communes & Mairies", img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&q=80" },
  { label: "Marchés", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80" },
  { label: "Entreprises", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80" },
  { label: "Villages ruraux", img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80" },
];

export default function CollectePage() {
  return (
    <div style={{ background: "var(--charbon)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80"
            alt="Collecte de déchets"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071A09 40%, rgba(7,26,9,0.6) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, var(--charbon), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
          <Link href="/services" className="inline-flex items-center gap-2 text-[#7EC47F]/60 hover:text-[#C9A84C] text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Tous les services
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(45,106,47,0.25)", border: "1px solid rgba(45,106,47,0.4)", color: "#7EC47F" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#52A855]" />
            Service — Collecte
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] leading-tight mb-6 max-w-3xl">
            Collecte de Déchets
            <span className="block" style={{ color: "var(--vert-leaf)" }}>professionnelle & fiable</span>
          </h1>
          <p className="text-[#FDF6E3]/60 text-lg leading-relaxed max-w-2xl mb-10">
            COCO D'OR BIO organise et opère la collecte de déchets ménagers, industriels et agricoles
            pour les communes, villages et entreprises de Côte d'Ivoire.
          </p>
          <Link href="/etude-technique" className="btn-primary">
            Demander ce service <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-[#2D6A2F]/20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="stat-number text-4xl font-bold mb-1">{s.val}</p>
              <p className="text-[#7EC47F]/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Camion de collecte de déchets"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4 badge-green text-sm">
              Collecte régulière & fiable
            </div>
          </div>

          {/* Points */}
          <div>
            <span className="section-label">Ce que nous offrons</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-4 mb-6 leading-tight">
              Un service complet,<br />de la collecte au tri
            </h2>
            <p className="text-[#FDF6E3]/55 text-base leading-relaxed mb-8">
              Nos équipes formées et nos véhicules adaptés garantissent un service régulier et efficace,
              que vous soyez une grande commune d'Abidjan ou un village rural.
            </p>
            <ul className="space-y-3.5 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[#FDF6E3]/70 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--vert-clair)" }} />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/etude-technique" className="btn-primary">
              Obtenir un devis gratuit <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Qui peut bénéficier */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Nos clients</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl font-bold text-[#FDF6E3] mt-3">
              Qui peut bénéficier de ce service ?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cibles.map((c) => (
              <div key={c.label} className="card-dark overflow-hidden group">
                <div className="relative h-40 overflow-hidden">
                  <Image src={c.img} alt={c.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.8) 0%, transparent 60%)" }} />
                </div>
                <div className="p-4">
                  <p className="text-[#FDF6E3]/80 font-semibold text-sm">{c.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--vert-fonce)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mb-4">
            Prêt à assainir votre territoire ?
          </h2>
          <p className="text-[#FDF6E3]/55 mb-8">
            Demandez une étude technique gratuite. Nos experts se déplacent pour évaluer vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/etude-technique" className="btn-primary">Demander une étude <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-outline">Voir tous les services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
