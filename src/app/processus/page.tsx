import { etapes } from "@/data/processus";

export const metadata = { title: "Notre Processus — COCDECH" };

export default function Processus() {
  return (
    <div className="pt-28 pb-20 bg-[#1C1C1A] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-[#D4A843] text-xs font-semibold tracking-widest uppercase">Comment ça marche</span>
        <h1 style={{fontFamily:"'Playfair Display',serif"}} className="text-4xl md:text-6xl font-bold text-[#F5ECD7] mt-3 mb-6">
          De la coque<br/><span className="text-[#D4A843]">à l'or noir.</span>
        </h1>
        <p className="text-[#F5ECD7]/60 text-lg mb-20 max-w-2xl">
          Notre chaîne de valorisation, du ramassage des déchets jusqu'au sac de charbon Coco D'Or Bio prêt à l'emploi.
        </p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4A843] via-[#2D5A27] to-transparent hidden md:block" />

          <div className="space-y-12">
            {etapes.map((e, i) => (
              <div key={e.numero} className="flex gap-8 items-start">
                <div className="relative z-10 shrink-0 w-16 h-16 rounded-full border-2 flex items-center justify-center text-lg font-bold" style={{borderColor:e.couleur, color:e.couleur, backgroundColor:"#1C1C1A", fontFamily:"'Playfair Display',serif"}}>
                  {e.numero}
                </div>
                <div className="bg-[#242421] border border-[#F5ECD7]/8 rounded-2xl p-8 flex-1 hover:border-[#D4A843]/25 transition-colors">
                  <h3 style={{fontFamily:"'Playfair Display',serif"}} className="text-[#F5ECD7] text-xl font-bold mb-3">{e.titre}</h3>
                  <p className="text-[#F5ECD7]/60 leading-relaxed">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-[#2D5A27]/20 border border-[#2D5A27] rounded-3xl p-10 text-center">
          <h3 style={{fontFamily:"'Playfair Display',serif"}} className="text-[#F5ECD7] text-2xl font-bold mb-4">Un processus 100% local</h3>
          <p className="text-[#F5ECD7]/60 max-w-xl mx-auto text-sm leading-relaxed">
            Toutes nos étapes se déroulent à Abidjan. Nous travaillons avec des acteurs locaux,
            valorisons les savoir-faire ivoiriens et réinvestissons dans les communautés qui nous approvisionnent.
          </p>
        </div>
      </div>
    </div>
  );
}
