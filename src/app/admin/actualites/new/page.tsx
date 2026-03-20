"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { categorieLabels } from "@/data/actualites";

const emojis = ["🚛", "💧", "🏘️", "♻️", "🤝", "👥", "🌊", "🌿", "📋", "🏆", "🌍", "💡"];

export default function NewArticlePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    titre: "", slug: "", categorie: "collecte", resume: "",
    contenu: "", auteur: "Équipe COCO D'OR BIO",
    image: "🌿", publie: false, tags: "",
  });
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(f => ({
      ...f,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
      ...(name === "titre" && !form.slug ? { slug: value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") } : {}),
    }));
  };

  const handleSave = async (publie: boolean) => {
    setSaving(true);
    await new Promise(r => setTimeout(r, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => router.push("/admin/actualites"), 1200);
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/actualites"
            className="w-8 h-8 rounded-xl bg-[#FDF6E3]/8 flex items-center justify-center text-[#FDF6E3]/50 hover:text-[#FDF6E3] transition-colors">
            <ArrowLeft size={15} />
          </Link>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-xl font-bold text-[#FDF6E3]">
              Nouvel article
            </h1>
            <p className="text-[#FDF6E3]/35 text-xs">Créer une nouvelle actualité</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleSave(false)} disabled={saving || !form.titre}
            className="flex items-center gap-2 bg-[#FDF6E3]/8 text-[#FDF6E3]/70 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#FDF6E3]/12 disabled:opacity-40 transition-colors">
            <Save size={13} /> Brouillon
          </button>
          <button onClick={() => handleSave(true)} disabled={saving || !form.titre}
            className="flex items-center gap-2 bg-[#C9A84C] text-[#1C1C1A] text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#D4B96A] disabled:opacity-40 transition-colors">
            {saving ? <span className="w-3 h-3 border-2 border-[#1C1C1A]/30 border-t-[#1C1C1A] rounded-full animate-spin" /> : <Eye size={13} />}
            {saved ? "Enregistré ✓" : "Publier"}
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Formulaire principal */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl p-6 space-y-5">
            <AdminField label="Titre de l'article *" name="titre" type="text"
              placeholder="Ex: COCO D'OR BIO signe un partenariat avec..." value={form.titre} onChange={handleChange} />
            <AdminField label="Slug URL" name="slug" type="text"
              placeholder="ex: partenariat-yopougon-2025" value={form.slug} onChange={handleChange} />
            <div>
              <label className="text-[#FDF6E3]/40 text-xs uppercase tracking-wider block mb-2">Résumé *</label>
              <textarea name="resume" rows={3} value={form.resume} onChange={handleChange}
                placeholder="Résumé court affiché dans la liste des actualités..."
                className="w-full bg-[#0F0F0E] border border-[#FDF6E3]/8 rounded-xl px-4 py-3 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/20 focus:border-[#C9A84C] focus:outline-none transition-colors resize-none" />
            </div>
            <div>
              <label className="text-[#FDF6E3]/40 text-xs uppercase tracking-wider block mb-2">Contenu complet *</label>
              <textarea name="contenu" rows={12} value={form.contenu} onChange={handleChange}
                placeholder="Rédigez le contenu complet de l'article ici...&#10;&#10;Séparez les paragraphes par une ligne vide.&#10;&#10;Pour une liste, commencez chaque ligne par '- '"
                className="w-full bg-[#0F0F0E] border border-[#FDF6E3]/8 rounded-xl px-4 py-3 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/20 focus:border-[#C9A84C] focus:outline-none transition-colors resize-none font-mono" />
              <p className="text-[#FDF6E3]/25 text-xs mt-1.5">Séparez les paragraphes par une ligne vide. Listes : commencez par "- "</p>
            </div>
          </div>
        </div>

        {/* Sidebar options */}
        <div className="space-y-4">
          <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl p-5 space-y-4">
            <h3 className="text-[#FDF6E3]/60 text-xs uppercase tracking-widest">Options</h3>

            <div>
              <label className="text-[#FDF6E3]/40 text-xs uppercase tracking-wider block mb-2">Catégorie</label>
              <select name="categorie" value={form.categorie} onChange={handleChange}
                className="w-full bg-[#0F0F0E] border border-[#FDF6E3]/8 rounded-xl px-3 py-2.5 text-[#FDF6E3] text-sm focus:border-[#C9A84C] focus:outline-none transition-colors">
                {Object.entries(categorieLabels).map(([k, v]) => (
                  <option key={k} value={k}>{v}</option>
                ))}
              </select>
            </div>

            <AdminField label="Auteur" name="auteur" type="text"
              placeholder="Nom de l'auteur" value={form.auteur} onChange={handleChange} />

            <AdminField label="Tags (séparés par virgule)" name="tags" type="text"
              placeholder="partenariat, Abidjan, collecte" value={form.tags} onChange={handleChange} />
          </div>

          {/* Emoji / Image */}
          <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl p-5">
            <h3 className="text-[#FDF6E3]/60 text-xs uppercase tracking-widest mb-3">Icône de l'article</h3>
            <div className="grid grid-cols-6 gap-2 mb-3">
              {emojis.map(e => (
                <button key={e} type="button" onClick={() => setForm(f => ({ ...f, image: e }))}
                  className={`w-9 h-9 rounded-xl text-xl flex items-center justify-center transition-all ${
                    form.image === e ? "bg-[#C9A84C]/20 border border-[#C9A84C]" : "bg-[#0F0F0E] border border-[#FDF6E3]/8 hover:border-[#FDF6E3]/20"
                  }`}>
                  {e}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FDF6E3]/40 text-xs">Sélectionné :</span>
              <span className="text-2xl">{form.image}</span>
            </div>
          </div>

          {/* Aperçu */}
          {form.titre && (
            <div className="bg-[#1C1C1A] border border-[#C9A84C]/20 rounded-2xl p-5">
              <h3 className="text-[#C9A84C] text-xs uppercase tracking-widest mb-3">Aperçu</h3>
              <div className="space-y-2">
                <div className="text-3xl">{form.image}</div>
                <p className="text-[#FDF6E3]/80 text-sm font-semibold leading-snug">{form.titre}</p>
                {form.resume && <p className="text-[#FDF6E3]/40 text-xs leading-relaxed line-clamp-2">{form.resume}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminField({ label, name, type, placeholder, value, onChange }: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="text-[#FDF6E3]/40 text-xs uppercase tracking-wider block mb-2">{label}</label>
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}
        className="w-full bg-[#0F0F0E] border border-[#FDF6E3]/8 rounded-xl px-4 py-2.5 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/20 focus:border-[#C9A84C] focus:outline-none transition-colors" />
    </div>
  );
}
