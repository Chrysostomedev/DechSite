import Link from "next/link";
import { etapes } from "@/data/processus";
import { stats } from "@/data/stats";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1C1A]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #D4A843 1px, transparent 0)", backgroundSize:"40px 40px"}} />
        </div>
        {/* Gold glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#D4A843]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[#2D5A27]/15 rounded-full blur-[80px]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-[#2D5A27]/25 border border-[#2D5A27] text-[#88c984] text-xs px-4 py-1.5 rounded-full tracking-widest uppercase mb-8">
              🌿 Économie Circulaire · Sassandra, Abidjan CI
            </span>
            <h1 style={{fontFamily:"'Playfair Display', serif"}} className="text-5xl md:text-7xl font-bold text-[#F5ECD7] leading-[1.05] mb-6">
              Du déchet naît
              <span className="block text-[#D4A843]">l'or naturel.</span>
            </h1>
            <p className="text-[#F5ECD7]/65 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              COCDECH transforme les coques de noix de coco en charbon écologique premium.
              Notre marque <strong className="text-[#D4A843]">Coco D'Or Bio</strong> — propre, puissante, et 100% ivoirienne.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/produits" className="bg-[#D4A843] text-[#1C1C1A] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c09636] transition-colors text-sm tracking-wide">
                Découvrir Coco D'Or Bio →
              </Link>
              <Link href="/processus" className="border border-[#F5ECD7]/25 text-[#F5ECD7] px-8 py-3.5 rounded-full hover:border-[#D4A843] hover:text-[#D4A843] transition-colors text-sm tracking-wide">
                Notre processus
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[#F5ECD7] text-xs tracking-widest uppercase">Défiler</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#D4A843] to-transparent" />
        </div>
      </section>

      {/* ─── MISSION BAND ────────────────────────────────── */}
      <section className="bg-[#D4A843] py-5 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {Array(8).fill("🌿 Zéro Déforestation  ·  ♻️ Valorisation des Déchets  ·  🔥 Charbon Écologique Premium  ·  🇨🇮 100% Ivoirien").map((t, i) => (
            <span key={i} className="text-[#1C1C1A] font-semibold text-sm tracking-wide shrink-0">{t}</span>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ─── PRODUIT PHARE ────────────────────────────────── */}
      <section className="bg-[#F5ECD7] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#2D5A27] text-xs font-semibold tracking-widest uppercase">Produit Phare</span>
              <h2 style={{fontFamily:"'Playfair Display', serif"}} className="text-4xl md:text-5xl font-bold text-[#1C1C1A] mt-3 mb-6 leading-tight">
                Coco D'Or Bio
                <span className="block text-[#D4A843]">Charbon Naturel</span>
              </h2>
              <p className="text-[#1C1C1A]/65 text-base leading-relaxed mb-8">
                Issu de la carbonisation des coques de noix de coco, notre charbon brûle plus longtemps,
                génère moins de fumée et ne coûte aucun arbre. Une alternative écologique au charbon de bois
                conventionnel.
              </p>
              <ul className="space-y-3 mb-8">
                {["Combustion 2× plus longue","Zéro additif chimique","Moins de fumée, plus de chaleur","100% naturel & biodégradable"].map(a => (
                  <li key={a} className="flex items-center gap-3 text-sm text-[#1C1C1A]/75">
                    <span className="w-5 h-5 rounded-full bg-[#D4A843] flex items-center justify-center text-white text-xs">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
              <Link href="/produits" className="inline-flex items-center gap-2 bg-[#1C1C1A] text-[#F5ECD7] px-7 py-3 rounded-full text-sm font-medium hover:bg-[#2D5A27] transition-colors">
                En savoir plus →
              </Link>
            </div>
            {/* Visual placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#6B3A2A] via-[#1C1C1A] to-[#2D5A27] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🥥</div>
                  <span style={{fontFamily:"'Playfair Display',serif"}} className="text-[#D4A843] text-2xl font-bold">Coco D'Or Bio</span>
                  <p className="text-[#F5ECD7]/60 text-sm mt-2">Charbon Écologique</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2D5A27] text-white text-xs font-semibold px-4 py-2 rounded-full">
                🌿 Zéro déforestation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESSUS ───────────────────────────────────── */}
      <section className="bg-[#1C1C1A] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#D4A843] text-xs font-semibold tracking-widest uppercase">Notre Méthode</span>
            <h2 style={{fontFamily:"'Playfair Display', serif"}} className="text-4xl md:text-5xl font-bold text-[#F5ECD7] mt-3">
              De la coque au charbon
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {etapes.map((e, i) => (
              <div key={e.numero} className="relative group">
                {i < etapes.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-[#D4A843]/20 z-10" style={{width:"calc(100% - 2rem)"}} />
                )}
                <div className="bg-[#242421] border border-[#F5ECD7]/8 rounded-2xl p-6 hover:border-[#D4A843]/30 transition-colors h-full">
                  <span className="text-4xl font-bold" style={{color:e.couleur, fontFamily:"'Playfair Display',serif"}}>{e.numero}</span>
                  <h3 className="text-[#F5ECD7] font-semibold text-base mt-3 mb-2">{e.titre}</h3>
                  <p className="text-[#F5ECD7]/50 text-sm leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/processus" className="text-[#D4A843] text-sm hover:underline">Voir le processus complet →</Link>
          </div>
        </div>
      </section>

      {/* ─── STATS IMPACT ────────────────────────────────── */}
      <section className="bg-[#2D5A27] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{fontFamily:"'Playfair Display', serif"}} className="text-3xl md:text-4xl font-bold text-white">
              Notre Impact en chiffres
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div style={{fontFamily:"'Playfair Display',serif"}} className="text-5xl md:text-6xl font-bold text-[#D4A843]">
                  {s.valeur}{s.suffix}
                </div>
                <p className="text-white/70 text-sm mt-2 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINAL ───────────────────────────────────── */}
      <section className="bg-[#1C1C1A] py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-[#D4A843] text-xs font-semibold tracking-widest uppercase">Rejoignez le mouvement</span>
          <h2 style={{fontFamily:"'Playfair Display', serif"}} className="text-4xl md:text-5xl font-bold text-[#F5ECD7] mt-4 mb-6">
            Consommer mieux.<br/>
            <span className="text-[#D4A843]">Polluer moins.</span>
          </h2>
          <p className="text-[#F5ECD7]/60 text-base mb-10 leading-relaxed">
            Chaque sac de Coco D'Or Bio acheté, c'est un déchet valorisé, un arbre préservé, et un jeune entrepreneur ivoirien soutenu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-[#D4A843] text-[#1C1C1A] font-semibold px-8 py-3.5 rounded-full hover:bg-[#c09636] transition-colors text-sm">
              Nous contacter
            </Link>
            <Link href="/impact" className="border border-[#F5ECD7]/25 text-[#F5ECD7] px-8 py-3.5 rounded-full hover:border-[#D4A843] hover:text-[#D4A843] transition-colors text-sm">
              Notre impact écologique
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
