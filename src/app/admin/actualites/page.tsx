"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Eye, EyeOff, Search, ArrowRight } from "lucide-react";
import { actualites as initialActus, categorieColors, categorieLabels, type Actualite } from "@/data/actualites";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
}

export default function AdminActualites() {
  const [articles, setArticles] = useState<Actualite[]>(initialActus);
  const [search, setSearch] = useState("");
  const [filtre, setFiltre] = useState<"tous" | "publie" | "brouillon">("tous");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filtered = articles.filter(a => {
    const matchSearch = a.titre.toLowerCase().includes(search.toLowerCase()) ||
      a.auteur.toLowerCase().includes(search.toLowerCase());
    const matchFiltre = filtre === "tous" || (filtre === "publie" ? a.publie : !a.publie);
    return matchSearch && matchFiltre;
  });

  const togglePublie = (id: string) => {
    setArticles(prev => prev.map(a => a.id === id ? { ...a, publie: !a.publie } : a));
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => prev.filter(a => a.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="space-y-6 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#FDF6E3]">
            Actualités
          </h1>
          <p className="text-[#FDF6E3]/40 text-sm mt-1">
            {articles.filter(a => a.publie).length} publiées · {articles.filter(a => !a.publie).length} brouillons
          </p>
        </div>
        <Link href="/admin/actualites/new"
          className="flex items-center gap-2 bg-[#C9A84C] text-[#1C1C1A] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#D4B96A] transition-colors">
          <Plus size={15} /> Nouvel article
        </Link>
      </div>

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FDF6E3]/30" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#1C1C1A] border border-[#FDF6E3]/10 rounded-xl pl-9 pr-4 py-2.5 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/25 focus:border-[#C9A84C] focus:outline-none transition-colors"
          />
        </div>
        <div className="flex gap-2">
          {(["tous", "publie", "brouillon"] as const).map(f => (
            <button key={f} onClick={() => setFiltre(f)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                filtre === f
                  ? "bg-[#C9A84C] text-[#1C1C1A]"
                  : "bg-[#1C1C1A] border border-[#FDF6E3]/10 text-[#FDF6E3]/50 hover:text-[#FDF6E3]"
              }`}>
              {f === "tous" ? "Tous" : f === "publie" ? "Publiés" : "Brouillons"}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl overflow-hidden">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <div className="text-4xl mb-3">📰</div>
            <p className="text-[#FDF6E3]/40 text-sm">Aucun article trouvé</p>
          </div>
        ) : (
          <div className="divide-y divide-[#FDF6E3]/5">
            {filtered.map(a => (
              <div key={a.id} className="flex items-center gap-4 px-5 py-4 hover:bg-[#FDF6E3]/3 transition-colors">
                <span className="text-2xl shrink-0">{a.image}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: categorieColors[a.categorie] + "25", color: categorieColors[a.categorie] }}>
                      {categorieLabels[a.categorie]}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      a.publie ? "bg-[#2D9E5A]/20 text-[#2D9E5A]" : "bg-[#FDF6E3]/8 text-[#FDF6E3]/40"
                    }`}>
                      {a.publie ? "Publié" : "Brouillon"}
                    </span>
                  </div>
                  <p className="text-[#FDF6E3]/85 text-sm font-semibold truncate">{a.titre}</p>
                  <p className="text-[#FDF6E3]/30 text-xs mt-0.5">{a.auteur} · {formatDate(a.date)}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {/* Toggle publié */}
                  <button
                    onClick={() => togglePublie(a.id)}
                    title={a.publie ? "Dépublier" : "Publier"}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#FDF6E3]/40 hover:text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all"
                  >
                    {a.publie ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                  {/* Éditer */}
                  <Link href={`/admin/actualites/${a.id}/edit`}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#FDF6E3]/40 hover:text-[#3A7EC4] hover:bg-[#3A7EC4]/10 transition-all">
                    <Pencil size={14} />
                  </Link>
                  {/* Voir */}
                  <Link href={`/actualites/${a.slug}`} target="_blank"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#FDF6E3]/40 hover:text-[#2D9E5A] hover:bg-[#2D9E5A]/10 transition-all">
                    <ArrowRight size={14} />
                  </Link>
                  {/* Supprimer */}
                  <button
                    onClick={() => setDeleteId(a.id)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-[#FDF6E3]/40 hover:text-[#D94040] hover:bg-[#D94040]/10 transition-all"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal confirmation suppression */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-[#1C1C1A] border border-[#FDF6E3]/10 rounded-2xl p-6 max-w-sm w-full">
            <div className="text-3xl mb-3">🗑️</div>
            <h3 className="text-[#FDF6E3] font-bold mb-2">Supprimer cet article ?</h3>
            <p className="text-[#FDF6E3]/50 text-sm mb-6">
              "{articles.find(a => a.id === deleteId)?.titre}" sera définitivement supprimé.
            </p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteId(null)}
                className="flex-1 bg-[#FDF6E3]/8 text-[#FDF6E3]/70 text-sm font-semibold py-2.5 rounded-xl hover:bg-[#FDF6E3]/12 transition-colors">
                Annuler
              </button>
              <button onClick={() => deleteArticle(deleteId)}
                className="flex-1 bg-[#D94040] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#c03030] transition-colors">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
