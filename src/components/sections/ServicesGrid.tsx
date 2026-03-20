import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "collecte",
    icon: "🚛",
    title: "Collecte de Déchets",
    desc: "Collecte professionnelle de déchets ménagers, industriels et agricoles pour communes, villages et entreprises.",
    color: "#52A855",
    borderColor: "rgba(82,168,85,0.25)",
    glowColor: "rgba(82,168,85,0.12)",
    href: "/services#collecte",
    svgIcon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect width="80" height="80" rx="20" fill="rgba(82,168,85,0.1)"/>
        <rect x="10" y="35" width="55" height="28" rx="6" fill="rgba(82,168,85,0.3)" stroke="#52A855" strokeWidth="1.5"/>
        <rect x="10" y="28" width="35" height="12" rx="4" fill="rgba(82,168,85,0.2)" stroke="#52A855" strokeWidth="1"/>
        <circle cx="22" cy="66" r="7" fill="rgba(82,168,85,0.4)" stroke="#52A855" strokeWidth="1.5"/>
        <circle cx="52" cy="66" r="7" fill="rgba(82,168,85,0.4)" stroke="#52A855" strokeWidth="1.5"/>
        <path d="M30,20 L40,12 L50,20" fill="none" stroke="#7EC47F" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M40,12 L40,28" stroke="#7EC47F" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "assainissement",
    icon: "💧",
    title: "Assainissement",
    desc: "Études et travaux d'assainissement complets pour améliorer les conditions sanitaires de votre localité.",
    color: "#C9A84C",
    borderColor: "rgba(201,168,76,0.25)",
    glowColor: "rgba(201,168,76,0.08)",
    href: "/services#assainissement",
    svgIcon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect width="80" height="80" rx="20" fill="rgba(201,168,76,0.08)"/>
        <path d="M40,15 Q55,30 55,45 A15,15 0 0,1 25,45 Q25,30 40,15Z" fill="rgba(201,168,76,0.25)" stroke="#C9A84C" strokeWidth="1.5"/>
        <path d="M40,25 Q50,35 50,45 A10,10 0 0,1 30,45 Q30,35 40,25Z" fill="rgba(201,168,76,0.15)"/>
        <line x1="40" y1="55" x2="40" y2="68" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
        <line x1="30" y1="65" x2="50" y2="65" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "reamenagement",
    icon: "🏘️",
    title: "Réaménagement",
    desc: "Réaménagement urbain et rural : espaces verts, zones propres, embellissement de communes et villages.",
    color: "#9B5E30",
    borderColor: "rgba(155,94,48,0.25)",
    glowColor: "rgba(155,94,48,0.08)",
    href: "/services#reamenagement",
    svgIcon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect width="80" height="80" rx="20" fill="rgba(155,94,48,0.08)"/>
        <rect x="12" y="40" width="20" height="28" rx="3" fill="rgba(155,94,48,0.3)" stroke="#9B5E30" strokeWidth="1.5"/>
        <rect x="30" y="30" width="24" height="38" rx="3" fill="rgba(155,94,48,0.2)" stroke="#9B5E30" strokeWidth="1.5"/>
        <rect x="52" y="44" width="16" height="24" rx="3" fill="rgba(155,94,48,0.25)" stroke="#9B5E30" strokeWidth="1.5"/>
        <path d="M8,68 L72,68" stroke="#9B5E30" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="35" r="5" fill="rgba(82,168,85,0.4)" stroke="#52A855" strokeWidth="1"/>
        <path d="M20,30 L20,22" stroke="#52A855" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "valorisation",
    icon: "♻️",
    title: "Revalorisation",
    desc: "Transformation des déchets en ressources utiles : compost, charbon écologique, matériaux de construction.",
    color: "#3D8B40",
    borderColor: "rgba(61,139,64,0.25)",
    glowColor: "rgba(61,139,64,0.12)",
    href: "/services#valorisation",
    svgIcon: (
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <rect width="80" height="80" rx="20" fill="rgba(61,139,64,0.1)"/>
        <path d="M40,20 A20,20 0 0,1 60,40" fill="none" stroke="#3D8B40" strokeWidth="3" strokeLinecap="round"/>
        <path d="M60,40 A20,20 0 0,1 40,60" fill="none" stroke="#52A855" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40,60 A20,20 0 0,1 20,40" fill="none" stroke="#7EC47F" strokeWidth="3" strokeLinecap="round"/>
        <path d="M20,40 A20,20 0 0,1 40,20" fill="none" stroke="#3D8B40" strokeWidth="3" strokeLinecap="round"/>
        <polygon points="60,34 60,46 68,40" fill="#52A855"/>
        <circle cx="40" cy="40" r="8" fill="rgba(61,139,64,0.3)" stroke="#3D8B40" strokeWidth="1.5"/>
        <text x="40" y="44" textAnchor="middle" fontSize="8" fill="#7EC47F" fontFamily="sans-serif">BIO</text>
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--charbon)" }}>
      {/* Glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(45,106,47,0.08) 0%, transparent 70%)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">Ce que nous faisons</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold text-[#FDF6E3] mt-4 mb-4">
            Nos Services
          </h2>
          <p className="text-[#FDF6E3]/45 max-w-xl mx-auto text-base leading-relaxed">
            De la collecte à la revalorisation, nous couvrons tout le cycle de gestion des déchets
            pour votre commune, village ou entreprise.
          </p>
        </div>

        {/* Grille */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link key={s.id} href={s.href} className="group block">
              <div className="card-dark h-full p-6 flex flex-col relative overflow-hidden"
                style={{ borderColor: s.borderColor }}>
                {/* Glow hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${s.glowColor} 0%, transparent 70%)` }} />

                {/* Icône SVG */}
                <div className="w-16 h-16 mb-5 relative z-10">
                  {s.svgIcon}
                </div>

                <h3 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="font-bold text-[#FDF6E3] text-lg mb-3 relative z-10 group-hover:text-[#7EC47F] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#FDF6E3]/45 text-sm leading-relaxed flex-1 relative z-10">{s.desc}</p>

                <span className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold relative z-10 group-hover:gap-3 transition-all"
                  style={{ color: s.color }}>
                  En savoir plus <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/etude-technique" className="btn-primary">
            Demander une étude technique gratuite <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
