export const metadata = { title: "Impact Écologique — COCDECH" };

const impacts = [
  { categorie: "Environnemental", icon: "🌿", items: [
    { titre: "Zéro déforestation", desc: "Notre charbon ne nécessite aucune coupe d'arbre. Chaque kilo produit = un déchet valorisé." },
    { titre: "Réduction des déchets", desc: "Les coques de coco, souvent brûlées à l'air libre ou abandonnées, trouvent une seconde vie." },
    { titre: "Moins d'émissions", desc: "La carbonisation contrôlée émet moins de CO₂ que la combustion sauvage des déchets." },
  ]},
  { categorie: "Social", icon: "🤝", items: [
    { titre: "Emplois locaux", desc: "Des jeunes Ivoiriens créent et gèrent l'ensemble de la chaîne de valeur." },
    { titre: "Communautés impactées", desc: "Les ramasseurs de coques, les revendeurs, les clients — un écosystème local vivant." },
    { titre: "Entrepreneuriat jeune", desc: "COCDECH prouve qu'un jeune Ivoirien peut créer une entreprise verte et rentable." },
  ]},
  { categorie: "Économique", icon: "💡", items: [
    { titre: "Économie circulaire", desc: "On ferme la boucle : déchet → ressource → produit commercialisable." },
    { titre: "Substitution d'import", desc: "Un produit local qui remplace des imports et garde la valeur en Côte d'Ivoire." },
    { titre: "Potentiel d'export", desc: "Coco D'Or Bio vise les marchés sous-régionaux et la diaspora africaine à terme." },
  ]},
];

export default function Impact() {
  return (
    <div className="pt-28 pb-20 bg-[#1C1C1A] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-[#D4A843] text-xs font-semibold tracking-widest uppercase">Notre Impact</span>
        <h1 style={{fontFamily:"'Playfair Display',serif"}} className="text-4xl md:text-6xl font-bold text-[#F5ECD7] mt-3 mb-6">
          Agir pour<br/><span className="text-[#D4A843]">un avenir vert.</span>
        </h1>

        <div className="space-y-16 mt-16">
          {impacts.map(cat => (
            <div key={cat.categorie}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cat.icon}</span>
                <h2 style={{fontFamily:"'Playfair Display',serif"}} className="text-2xl font-bold text-[#F5ECD7]">Impact {cat.categorie}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {cat.items.map(item => (
                  <div key={item.titre} className="bg-[#242421] border border-[#F5ECD7]/8 rounded-2xl p-6 hover:border-[#D4A843]/25 transition-colors">
                    <h3 className="text-[#D4A843] font-semibold mb-2">{item.titre}</h3>
                    <p className="text-[#F5ECD7]/55 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
