import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Valorisation & Recyclage — COCO D'OR BIO",
  description: "Charbon écologique de coco, compostage, recyclage plastique — COCO D'OR BIO transforme vos déchets en ressources à valeur ajoutée.",
};

const produits = [
  {
    titre: "Charbon écologique",
    desc: "Issu des coques de noix de coco, notre charbon certifié offre un pouvoir calorifique supérieur au charbon de bois traditionnel avec un impact environnemental réduit.",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&q=80",
    badge: "Certifié",
    color: "#C9A84C",
  },
  {
    titre: "Compost organique",
    desc: "Les déchets organiques collectés sont transformés en compost de qualité, utilisé par les agriculteurs et maraîchers ivoiriens.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    badge: "100% naturel",
    color: "#52A855",
  },
  {
    titre: "Matières recyclables",
    desc: "Plastiques, métaux et papiers triés sont revendus aux filières de recyclage partenaires, fermant la boucle de l'économie circulaire.",
    img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
    badge: "Économie circulaire",
    color: "#3A7EC4",
  },
];

const points = [
  "Charbon écologique issu de coques de coco",
  "Compostage des déchets organiques",
  "Tri et revente des matières recyclables",
  "Conseil en économie circulaire",
  "Certification et traçabilité des produits",
  "Livraison sur Abidjan et intérieur du pays",
];

export default function ValorisationPage() {
  return (
    <div style={{ background: "var(--charbon)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1600&q=80"
            alt="Valorisation et recyclage"
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
            style={{ background: "rgba(82,168,85,0.2)", border: "1px solid rgba(82,168,85,0.35)", color: "#7EC47F" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#52A855]" />
            Service — Valorisation
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] leading-tight mb-6 max-w-3xl">
            Valorisation
            <span className="block" style={{ color: "var(--vert-leaf)" }}>&amp; Recyclage</span>
          </h1>
          <p className="text-[#FDF6E3]/60 text-lg leading-relaxed max-w-2xl mb-10">
            Notre coeur de métier : transformer les déchets en ressources utiles.
            Charbon écologique, compost, matières recyclables — nous fermons la boucle.
          </p>
          <Link href="/etude-technique" className="btn-primary">
            Nous contacter <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Produits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Nos produits valorisés</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-3">
              Des déchets aux ressources
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {produits.map((p) => (
              <div key={p.titre} className="card-dark overflow-hidden group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={p.img} alt={p.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.8) 0%, transparent 50%)" }} />
                  <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: `${p.color}25`, border: `1px solid ${p.color}40`, color: p.color }}>
                    {p.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-[#FDF6E3]/90 font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {p.titre}
                  </h3>
                  <p className="text-[#FDF6E3]/55 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points clés */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80"
              alt="Charbon écologique coco"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4 badge-gold">
              Certifié &amp; traçable
            </div>
          </div>
          <div>
            <span className="section-label">Ce que nous proposons</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-4 mb-6 leading-tight">
              L'économie circulaire<br />au service de la CI
            </h2>
            <p className="text-[#FDF6E3]/55 text-base leading-relaxed mb-8">
              Chaque déchet collecté est une ressource potentielle. Notre processus de valorisation
              garantit traçabilité, qualité et impact environnemental positif.
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
              Commander nos produits <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--vert-fonce)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mb-4">
            Intéressé par nos produits valorisés ?
          </h2>
          <p className="text-[#FDF6E3]/55 mb-8">
            Charbon écologique, compost, matières recyclables — contactez-nous pour un devis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Nous contacter <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-outline">Voir tous les services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
