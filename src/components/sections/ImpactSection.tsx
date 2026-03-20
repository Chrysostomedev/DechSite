const stats = [
  {
    val: "500+",
    label: "Tonnes valorisées",
    sub: "Déchets transformés en ressources",
    icon: "♻️",
    color: "#52A855",
  },
  {
    val: "12",
    label: "Communes partenaires",
    sub: "À travers la Côte d'Ivoire",
    icon: "🏘️",
    color: "#C9A84C",
  },
  {
    val: "98%",
    label: "Satisfaction clients",
    sub: "Communes, villages, entreprises",
    icon: "⭐",
    color: "#7EC47F",
  },
  {
    val: "0",
    label: "Arbre abattu",
    sub: "Notre charbon = zéro déforestation",
    icon: "🌳",
    color: "#3D8B40",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--vert-fonce) 0%, var(--vert) 50%, var(--vert-fonce) 100%)" }}>
      {/* Motif hexagonal */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hex" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 58,17 58,47 30,62 2,47 2,17"
                fill="none" stroke="#7EC47F" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)"/>
        </svg>
      </div>

      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(82,168,85,0.15) 0%, transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label-gold">Notre impact</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold text-white mt-4">
            Des chiffres qui parlent
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center group">
              {/* Cercle icône */}
              <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl relative"
                style={{ background: `${s.color}20`, border: `1px solid ${s.color}40` }}>
                {s.icon}
                {/* Anneau animé */}
                <div className="absolute inset-0 rounded-full border animate-breathe"
                  style={{ borderColor: `${s.color}30` }} />
              </div>

              {/* Valeur */}
              <div className="stat-number text-5xl md:text-6xl font-bold mb-2">
                {s.val}
              </div>

              <p className="text-white font-semibold text-sm mb-1">{s.label}</p>
              <p className="text-white/45 text-xs leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Barre de progression décorative */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { label: "Plastique recyclé", pct: 78, color: "#52A855" },
            { label: "Déchets organiques valorisés", pct: 92, color: "#C9A84C" },
            { label: "Satisfaction communes", pct: 98, color: "#7EC47F" },
          ].map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between mb-2">
                <span className="text-white/60 text-xs">{bar.label}</span>
                <span className="text-xs font-bold" style={{ color: bar.color }}>{bar.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                <div className="h-full rounded-full transition-all duration-1000"
                  style={{ width: `${bar.pct}%`, background: `linear-gradient(to right, ${bar.color}80, ${bar.color})` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
