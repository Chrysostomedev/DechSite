import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { actualites, categorieColors, categorieLabels } from "@/data/actualites";

export function generateStaticParams() {
  return actualites.filter(a => a.publie).map(a => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const actu = actualites.find(a => a.slug === params.slug);
  if (!actu) return {};
  return { title: `${actu.titre} — COCO D'OR BIO`, description: actu.resume };
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const actu = actualites.find(a => a.slug === params.slug && a.publie);
  if (!actu) notFound();

  const autres = actualites.filter(a => a.publie && a.id !== actu.id).slice(0, 3);

  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      <section className="relative pt-32 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--vert-fonce) 0%, var(--bg) 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link href="/actualites"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[#C9A84C]"
            style={{ color: "var(--text-muted)" }}>
            <ArrowLeft size={14} /> Toutes les actualités
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: categorieColors[actu.categorie] + "30", color: categorieColors[actu.categorie] }}>
              {categorieLabels[actu.categorie]}
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
              <Calendar size={11} /> {formatDate(actu.date)}
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
              <User size={11} /> {actu.auteur}
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {actu.titre}
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>{actu.resume}</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 -mt-4 mb-12">
        <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden">
          <Image src={actu.image} alt={actu.titre} fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.5) 0%, transparent 60%)" }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose-cocodor">
              {actu.contenu.split("\n\n").map((para, i) => {
                if (para.startsWith("- ")) {
                  const items = para.split("\n").filter(l => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 mb-6">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
                          <span className="text-[#C9A84C] mt-1.5 shrink-0">•</span>
                          {item.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>{para}</p>;
              })}
            </div>
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t" style={{ borderColor: "var(--border)" }}>
              <span className="text-xs flex items-center gap-1 mr-2" style={{ color: "var(--text-muted)" }}>
                <Tag size={11} /> Tags :
              </span>
              {actu.tags.map(t => (
                <span key={t} className="text-xs px-3 py-1 rounded-full" style={{ background: "var(--border)", color: "var(--text-muted)" }}>
                  #{t}
                </span>
              ))}
            </div>
            <div className="mt-10 rounded-2xl p-6 border" style={{ background: "var(--bg-surface)", borderColor: "rgba(45,106,47,0.3)" }}>
              <p style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }} className="font-bold text-lg mb-2">
                Intéressé par nos services ?
              </p>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                Demandez une étude technique gratuite pour votre commune ou entreprise.
              </p>
              <Link href="/etude-technique" className="btn-primary text-sm">Faire une demande →</Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl p-5 border" style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>Informations</p>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Catégorie</p>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: categorieColors[actu.categorie] + "25", color: categorieColors[actu.categorie] }}>
                    {categorieLabels[actu.categorie]}
                  </span>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Publié le</p>
                  <p style={{ color: "var(--text-primary)" }}>{formatDate(actu.date)}</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Par</p>
                  <p style={{ color: "var(--text-primary)" }}>{actu.auteur}</p>
                </div>
              </div>
            </div>
            {autres.length > 0 && (
              <div>
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>Autres articles</p>
                <div className="space-y-3">
                  {autres.map(a => (
                    <Link key={a.id} href={`/actualites/${a.slug}`}
                      className="block rounded-xl overflow-hidden border transition-colors group hover:border-[#C9A84C]/25"
                      style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
                      <div className="relative h-24 overflow-hidden">
                        <Image src={a.image} alt={a.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-3">
                        <p className="text-xs font-semibold leading-snug group-hover:text-[#C9A84C] transition-colors line-clamp-2"
                          style={{ color: "var(--text-primary)" }}>{a.titre}</p>
                        <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{formatDate(a.date)}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
