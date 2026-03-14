import { produits } from "@/data/produits";

export const metadata = { title: "Produits — Coco D'Or Bio | COCDECH" };

export default function Produits() {
  return (
    <div className="pt-28 pb-20 bg-[#F5ECD7] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-[#2D5A27] text-xs font-semibold tracking-widest uppercase">Nos Produits</span>
        <h1 style={{fontFamily:"'Playfair Display',serif"}} className="text-4xl md:text-6xl font-bold text-[#1C1C1A] mt-3 mb-6">
          La gamme<br/><span className="text-[#D4A843]">Coco D'Or Bio</span>
        </h1>
        <p className="text-[#1C1C1A]/65 text-lg mb-16 max-w-2xl">
          Une gamme de produits énergétiques issus exclusivement de la valorisation des déchets de noix de coco.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {produits.map(p => (
            <div key={p.id} className={`bg-white rounded-3xl p-8 shadow-sm border-2 ${p.disponible ? "border-[#D4A843]" : "border-[#1C1C1A]/10"}`}>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#1C1C1A]/50 text-xs uppercase tracking-widest">{p.categorie}</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.disponible ? "bg-[#2D5A27] text-white" : "bg-[#1C1C1A]/10 text-[#1C1C1A]/50"}`}>
                  {p.badge}
                </span>
              </div>
              <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-2xl font-bold text-[#1C1C1A] mb-3">{p.nom}</h2>
              <p className="text-[#1C1C1A]/65 text-sm leading-relaxed mb-6">{p.description}</p>
              <h4 className="text-[#1C1C1A] font-semibold text-xs uppercase tracking-wider mb-3">Avantages</h4>
              <ul className="space-y-2 mb-6">
                {p.avantages.map(a => (
                  <li key={a} className="flex items-start gap-2 text-sm text-[#1C1C1A]/70">
                    <span className="text-[#D4A843] mt-0.5">✦</span>{a}
                  </li>
                ))}
              </ul>
              <h4 className="text-[#1C1C1A] font-semibold text-xs uppercase tracking-wider mb-2">Usages</h4>
              <div className="flex flex-wrap gap-2">
                {p.usages.map(u => (
                  <span key={u} className="text-xs bg-[#F5ECD7] border border-[#D4A843]/30 text-[#6B3A2A] px-3 py-1 rounded-full">{u}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparatif */}
        <div className="bg-[#1C1C1A] rounded-3xl p-8 text-[#F5ECD7]">
          <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-2xl font-bold mb-8 text-center">Coco D'Or Bio vs Charbon classique</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#F5ECD7]/15">
                  <th className="text-left py-3 text-[#F5ECD7]/50 font-normal">Critère</th>
                  <th className="text-center py-3 text-[#D4A843] font-semibold">Coco D'Or Bio</th>
                  <th className="text-center py-3 text-[#F5ECD7]/50 font-normal">Charbon ordinaire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F5ECD7]/8">
                {[["Durée de combustion","⭐ Longue","Courte"],["Fumée","⭐ Très faible","Importante"],["Impact forêts","⭐ Zéro déforestation","Déforestation directe"],["Résidus","⭐ Cendres fines","Cendres lourdes"],["Origine","⭐ Déchets valorisés","Bois coupé"]].map(r => (
                  <tr key={r[0]}>
                    <td className="py-3 text-[#F5ECD7]/70">{r[0]}</td>
                    <td className="py-3 text-center text-[#88c984]">{r[1]}</td>
                    <td className="py-3 text-center text-[#F5ECD7]/40">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
