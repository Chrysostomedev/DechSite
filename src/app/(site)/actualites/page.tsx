import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { actualites, categorieColors, categorieLabels } from "@/data/actualites";

export const metadata = {
  title: "Actualités — COCO D'OR BIO",
  description: "Suivez les dernières nouvelles de COCO D'OR BIO : partenariats, projets d'assainissement, réaménagements et valorisation des déchets en Côte d'Ivoire.",
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function ActualitesPage() {
  const publiees = actualites.filter(a => a.publie);
  const [une, ...reste] = publiees;

  return (
    <div className="bg-[#1C1C1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#1A3D1C] via-[#1C1C1A] to-[#1C1C1A] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-6xl mx-auto px-6 relative">
          <span className="section-label">Nos actualités</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] mt-3 mb-4">
            Restez informés
          </h1>
          <p className="text-[#FDF6E3]/55 text-lg max-w-xl leading-relaxed">
            Partenariats, projets terrain, certifications et opportunités —
            toute l'actualité de COCO D'OR BIO.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Article à la une */}
        {une && (
          <div className="mb-16">
            <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-5">À la une</p>
            <Link href={`/actualites/${une.slug}`} className="group block">
              <div className="bg-[#242421] border border-[#FDF6E3]/8 rounded-3xl overflow-hidden hover:border-[#C9A84C]/30 transition-all duration-300 grid md:grid-cols-2">
                {/* Image */}
                <div className="relative aspect-[4/3] md:aspect-auto min-h-[280px] overflow-hidden">
                  <Image src={une.image} alt={une.titre} fill className="object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
                  <span className="absolute bottom-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: categorieColors[une.categorie] + "30", color: categorieColors[une.categorie] }}>
                    {categorieLabels[une.categorie]}
                  </span>
                </div>
                {/* Contenu */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: categorieColors[une.categorie] + "25", color: categorieColors[une.categorie] }}
                    >
                      {categorieLabels[une.categorie]}
                    </span>
                    <span className="text-[#FDF6E3]/35 text-xs flex items-center gap-1">
                      <Calendar size={11} /> {formatDate(une.date)}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-2xl md:text-3xl font-bold text-[#FDF6E3] mb-4 leading-tight group-hover:text-[#C9A84C] transition-colors">
                    {une.titre}
                  </h2>
                  <p className="text-[#FDF6E3]/55 text-sm leading-relaxed mb-6">{une.resume}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {une.tags.map(t => (
                      <span key={t} className="text-xs bg-[#FDF6E3]/6 text-[#FDF6E3]/45 px-2.5 py-1 rounded-full">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold group-hover:gap-3 transition-all">
                    Lire l'article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grille des autres articles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reste.map((actu) => (
            <Link key={actu.id} href={`/actualites/${actu.slug}`} className="group">
              <article className="card-dark h-full flex flex-col overflow-hidden hover:-translate-y-1 transition-all duration-300">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image src={actu.image} alt={actu.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
                  <span className="absolute bottom-2 left-2 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    style={{ background: categorieColors[actu.categorie] + "30", color: categorieColors[actu.categorie] }}>
                    {categorieLabels[actu.categorie]}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#FDF6E3]/35 text-xs flex items-center gap-1">
                      <Calendar size={10} /> {formatDate(actu.date)}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-[#FDF6E3] font-bold text-lg leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors flex-1">
                    {actu.titre}
                  </h3>
                  <p className="text-[#FDF6E3]/50 text-sm leading-relaxed mb-4 line-clamp-2">{actu.resume}</p>
                  <span className="inline-flex items-center gap-1.5 text-[#C9A84C] text-xs font-semibold mt-auto group-hover:gap-2.5 transition-all">
                    Lire la suite <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {publiees.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#FDF6E3]/40">Aucune actualité publiée pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
