import Link from "next/link";
import { ArrowRight, Star, Quote } from "lucide-react";

const temoignages = [
  {
    nom: "Kouamé Adjoua",
    role: "Maire de commune",
    region: "Région des Lacs",
    texte: "COCO D'OR BIO a transformé notre commune. La collecte est régulière, l'assainissement impeccable. Nos habitants sont fiers de leur environnement.",
    initiale: "K",
    color: "#52A855",
  },
  {
    nom: "Bamba Seydou",
    role: "Directeur",
    region: "Entreprise agroalimentaire",
    texte: "Leur étude technique était précise et leur intervention rapide. Je recommande vivement pour toute entreprise cherchant à gérer ses déchets responsablement.",
    initiale: "B",
    color: "#C9A84C",
  },
  {
    nom: "Aya Koné",
    role: "Chef de village",
    region: "Sassandra",
    texte: "Grâce à COCO D'OR BIO, notre village est propre et nos déchets sont valorisés. Un vrai partenaire pour le développement durable.",
    initiale: "A",
    color: "#7EC47F",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--charbon)" }}>
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(45,106,47,0.1) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Ils nous font confiance</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold text-[#FDF6E3] mt-4">
            Témoignages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {temoignages.map((t) => (
            <div key={t.nom} className="card-dark p-7 flex flex-col relative overflow-hidden group">
              {/* Quote décoratif */}
              <div className="absolute top-4 right-5 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={60} style={{ color: t.color }} />
              </div>

              {/* Étoiles */}
              <div className="flex gap-1 mb-5">
                {Array(5).fill(null).map((_, i) => (
                  <Star key={i} size={13} fill="#C9A84C" className="text-[#C9A84C]" />
                ))}
              </div>

              {/* Texte */}
              <p className="text-[#FDF6E3]/60 text-sm leading-relaxed mb-6 italic flex-1 relative z-10">
                "{t.texte}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, #1A4D1E)` }}>
                  {t.initiale}
                </div>
                <div>
                  <p className="text-[#FDF6E3] text-sm font-semibold">{t.nom}</p>
                  <p className="text-[#FDF6E3]/40 text-xs">{t.role} · {t.region}</p>
                </div>
              </div>

              {/* Barre couleur bas */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, transparent, ${t.color}, transparent)` }} />
            </div>
          ))}
        </div>

        {/* CTA étude */}
        <div className="mt-16 rounded-3xl p-10 md:p-14 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, var(--vert-fonce) 0%, var(--surface) 100%)", border: "1px solid rgba(126,196,127,0.12)" }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)" }} />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label-gold">Passez à l'action</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-3 mb-4 leading-tight">
                Votre commune mérite
                <span className="block" style={{ color: "var(--or)" }}>un environnement sain</span>
              </h2>
              <p className="text-[#FDF6E3]/50 text-sm leading-relaxed">
                Remplissez notre formulaire. Notre équipe vous contacte sous 48h pour évaluer
                vos besoins en collecte, assainissement ou réaménagement.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { icon: "📋", text: "Formulaire simple en 5 minutes" },
                { icon: "📞", text: "Réponse sous 48h garantie" },
                { icon: "🆓", text: "Étude préliminaire gratuite" },
                { icon: "📍", text: "Intervention partout en CI" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-[#FDF6E3]/60 text-sm">
                  <span className="text-lg">{item.icon}</span>
                  {item.text}
                </div>
              ))}
              <Link href="/etude-technique" className="btn-primary mt-3 justify-center">
                Faire une demande d'étude <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
