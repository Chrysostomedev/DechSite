import { team } from "@/data/team";

export const metadata = { title: "À Propos — COCDECH | Coco D'Or Bio" };

export default function APropos() {
  return (
    <div className="pt-28 pb-20 bg-[#1C1C1A] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-[#D4A843] text-xs font-semibold tracking-widest uppercase">Notre Histoire</span>
        <h1 style={{fontFamily:"'Playfair Display',serif"}} className="text-4xl md:text-6xl font-bold text-[#F5ECD7] mt-3 mb-6">
          De jeunes Ivoiriens<br/><span className="text-[#D4A843]">qui changent la donne.</span>
        </h1>
        <p className="text-[#F5ECD7]/65 text-lg leading-relaxed max-w-2xl mb-16">
          COCDECH est née d'un constat simple : Abidjan produit des tonnes de déchets de noix de coco chaque jour,
          et personne ne les valorisait. Nous avons décidé d'agir.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[{titre:"Notre Mission", texte:"Valoriser les déchets de coco en ressources énergétiques propres, réduire la pression sur les forêts ivoiriennes et créer de l'emploi local.", icon:"🎯"},
            {titre:"Notre Vision", texte:"Devenir le leader ouest-africain du charbon écologique issu de déchets agro-industriels, et exporter Coco D'Or Bio au-delà des frontières ivoiriennes.", icon:"🌍"}
          ].map(c => (
            <div key={c.titre} className="bg-[#242421] border border-[#F5ECD7]/8 rounded-2xl p-8">
              <span className="text-3xl">{c.icon}</span>
              <h3 style={{fontFamily:"'Playfair Display',serif"}} className="text-[#F5ECD7] text-xl font-bold mt-4 mb-3">{c.titre}</h3>
              <p className="text-[#F5ECD7]/60 text-sm leading-relaxed">{c.texte}</p>
            </div>
          ))}
        </div>

        <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-3xl font-bold text-[#F5ECD7] mb-8">L'équipe fondatrice</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map(m => (
            <div key={m.role} className="bg-[#242421] border border-[#F5ECD7]/8 rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-14 h-14 rounded-full bg-[#D4A843]/20 border border-[#D4A843]/40 flex items-center justify-center text-[#D4A843] text-xl font-bold shrink-0">
                {m.prenom[0]}
              </div>
              <div>
                <p className="text-[#F5ECD7] font-semibold">{m.prenom} {m.nom}</p>
                <p className="text-[#D4A843] text-xs tracking-wide mb-2">{m.role}</p>
                <p className="text-[#F5ECD7]/55 text-sm leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
