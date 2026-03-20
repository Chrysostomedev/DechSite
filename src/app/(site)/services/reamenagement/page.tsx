import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Réaménagement Urbain — COCO D'OR BIO",
  description: "Réaménagement de communes, marchés et espaces publics en Côte d'Ivoire. COCO D'OR BIO transforme vos espaces en environnements sains et agréables.",
};

const points = [
  "Étude d'aménagement et plan directeur",
  "Installation de bacs et points de collecte",
  "Création et entretien d'espaces verts",
  "Réorganisation des zones de marché",
  "Sensibilisation et formation des populations",
  "Suivi et maintenance sur le long terme",
];

const realisations = [
  {
    titre: "Marché de Koumassi",
    desc: "Réduction de 70% des déchets sauvages en 6 semaines d'intervention.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  },
  {
    titre: "Commune de Yopougon",
    desc: "Installation de 24 points de collecte dans 3 quartiers.",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  },
  {
    titre: "Zone côtière Grand-Bassam",
    desc: "Étude technique pour la préservation du patrimoine UNESCO.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  },
];

export default function ReamenagementPage() {
  return (
    <div style={{ background: "var(--charbon)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600&q=80"
            alt="Réaménagement urbain"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071A09 40%, rgba(7,26,9,0.5) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, var(--charbon), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
          <Link href="/services" className="inline-flex items-center gap-2 text-[#7EC47F]/60 hover:text-[#C9A84C] text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Tous les services
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(155,94,48,0.2)", border: "1px solid rgba(155,94,48,0.35)", color: "#D4956A" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B5E30]" />
            Service — Réaménagement
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] leading-tight mb-6 max-w-3xl">
            Réaménagement
            <span className="block" style={{ color: "#D4956A" }}>urbain & rural</span>
          </h1>
          <p className="text-[#FDF6E3]/60 text-lg leading-relaxed max-w-2xl mb-10">
            COCO D'OR BIO conçoit et réalise des projets de réaménagement : espaces verts,
            mobilier urbain de collecte, réorganisation de marchés, embellissement de communes.
          </p>
          <Link href="/etude-technique" className="btn-primary">
            Demander une étude <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
              alt="Réaménagement de marché"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
          </div>

          <div>
            <span className="section-label">Notre approche</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-4 mb-6 leading-tight">
              Transformer l'espace,<br />améliorer le cadre de vie
            </h2>
            <p className="text-[#FDF6E3]/55 text-base leading-relaxed mb-8">
              Chaque projet commence par une étude terrain approfondie. Nous travaillons
              avec les autorités locales et les communautés pour concevoir des solutions durables.
            </p>
            <ul className="space-y-3.5 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[#FDF6E3]/70 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#9B5E30" }} />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/etude-technique" className="btn-primary">
              Lancer votre projet <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Nos réalisations</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl font-bold text-[#FDF6E3] mt-3">
              Projets réalisés
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {realisations.map((r) => (
              <div key={r.titre} className="card-dark overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={r.img} alt={r.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.75) 0%, transparent 50%)" }} />
                </div>
                <div className="p-5">
                  <h3 className="text-[#FDF6E3]/90 font-semibold mb-2">{r.titre}</h3>
                  <p className="text-[#FDF6E3]/50 text-sm leading-relaxed">{r.desc}</p>
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
            Un projet de réaménagement ?
          </h2>
          <p className="text-[#FDF6E3]/55 mb-8">
            Contactez-nous pour une étude gratuite. Nous intervenons partout en Côte d'Ivoire.
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
