"use client";
import { useState } from "react";
import { Search, Eye, CheckCircle, Clock, Archive, AlertTriangle } from "lucide-react";
import {
  demandesEtude as initialDemandes, statutColors, statutLabels,
  urgenceColors, urgenceLabels, typeEtudeLabels, type DemandeEtude, type StatutDemande,
} from "@/data/etudes";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" });
}

const typeOrgEmoji: Record<string, string> = {
  commune: "🏛️", village: "🏘️", entreprise: "🏭", ong: "🤝", particulier: "👤",
};

export default function AdminDemandes() {
  const [demandes, setDemandes] = useState<DemandeEtude[]>(initialDemandes);
  const [search, setSearch] = useState("");
  const [filtreStatut, setFiltreStatut] = useState<StatutDemande | "tous">("tous");
  const [selected, setSelected] = useState<DemandeEtude | null>(null);
  const [note, setNote] = useState("");

  const filtered = demandes.filter(d => {
    const matchSearch = d.organisation.toLowerCase().includes(search.toLowerCase()) ||
      d.nom.toLowerCase().includes(search.toLowerCase()) ||
      d.zone.toLowerCase().includes(search.toLowerCase());
    const matchStatut = filtreStatut === "tous" || d.statut === filtreStatut;
    return matchSearch && matchStatut;
  });

  const updateStatut = (id: string, statut: StatutDemande) => {
    setDemandes(prev => prev.map(d => d.id === id ? {
      ...d, statut,
      dateTraitement: statut === "traitee" ? new Date().toISOString().split("T")[0] : d.dateTraitement,
    } : d));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, statut } : null);
  };

  const saveNote = (id: string) => {
    setDemandes(prev => prev.map(d => d.id === id ? { ...d, noteAdmin: note } : d));
    if (selected) setSelected({ ...selected, noteAdmin: note });
  };

  const counts = {
    tous: demandes.length,
    nouvelle: demandes.filter(d => d.statut === "nouvelle").length,
    en_cours: demandes.filter(d => d.statut === "en_cours").length,
    traitee: demandes.filter(d => d.statut === "traitee").length,
    archivee: demandes.filter(d => d.statut === "archivee").length,
  };

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Header */}
      <div>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#FDF6E3]">
          Demandes d'étude technique
        </h1>
        <p className="text-[#FDF6E3]/40 text-sm mt-1">
          {counts.nouvelle} nouvelle(s) · {counts.en_cours} en cours · {counts.traitee} traitée(s)
        </p>
      </div>

      {/* Filtres statut */}
      <div className="flex flex-wrap gap-2">
        {([
          ["tous", "Toutes", counts.tous],
          ["nouvelle", "Nouvelles", counts.nouvelle],
          ["en_cours", "En cours", counts.en_cours],
          ["traitee", "Traitées", counts.traitee],
          ["archivee", "Archivées", counts.archivee],
        ] as const).map(([val, label, count]) => (
          <button key={val} onClick={() => setFiltreStatut(val)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
              filtreStatut === val
                ? "bg-[#C9A84C] text-[#1C1C1A]"
                : "bg-[#1C1C1A] border border-[#FDF6E3]/10 text-[#FDF6E3]/50 hover:text-[#FDF6E3]"
            }`}>
            {label}
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
              filtreStatut === val ? "bg-[#1C1C1A]/20" : "bg-[#FDF6E3]/10"
            }`}>{count}</span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FDF6E3]/30" />
        <input type="text" placeholder="Rechercher..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full bg-[#1C1C1A] border border-[#FDF6E3]/10 rounded-xl pl-9 pr-4 py-2.5 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/25 focus:border-[#C9A84C] focus:outline-none transition-colors" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Liste */}
        <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-[#FDF6E3]/30 text-sm">Aucune demande trouvée</p>
            </div>
          ) : (
            <div className="divide-y divide-[#FDF6E3]/5">
              {filtered.map(d => (
                <button key={d.id} onClick={() => { setSelected(d); setNote(d.noteAdmin || ""); }}
                  className={`w-full text-left px-5 py-4 hover:bg-[#FDF6E3]/3 transition-colors ${selected?.id === d.id ? "bg-[#C9A84C]/8 border-l-2 border-[#C9A84C]" : ""}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">{typeOrgEmoji[d.typeOrganisation]}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ background: statutColors[d.statut] + "25", color: statutColors[d.statut] }}>
                          {statutLabels[d.statut]}
                        </span>
                        {d.urgence !== "normale" && (
                          <span className="text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1"
                            style={{ background: urgenceColors[d.urgence] + "25", color: urgenceColors[d.urgence] }}>
                            <AlertTriangle size={9} /> {urgenceLabels[d.urgence]}
                          </span>
                        )}
                      </div>
                      <p className="text-[#FDF6E3]/85 text-sm font-semibold truncate">{d.organisation}</p>
                      <p className="text-[#FDF6E3]/40 text-xs">{d.zone} · {formatDate(d.dateCreation)}</p>
                    </div>
                    <span className="text-xs text-[#FDF6E3]/25 shrink-0">{d.id}</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Détail */}
        {selected ? (
          <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl p-6 space-y-5 overflow-auto max-h-[700px]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#FDF6E3]/35 text-xs mb-1">{selected.id}</p>
                <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-xl font-bold text-[#FDF6E3]">{selected.organisation}</h2>
                <p className="text-[#FDF6E3]/50 text-sm">{selected.nom}</p>
              </div>
              <span className="text-2xl">{typeOrgEmoji[selected.typeOrganisation]}</span>
            </div>

            {/* Infos */}
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Zone", selected.zone],
                ["Type d'étude", typeEtudeLabels[selected.typeEtude]],
                ["Email", selected.email],
                ["Téléphone", selected.telephone],
                ...(selected.superficie ? [["Superficie", selected.superficie]] : []),
                ...(selected.population ? [["Population", selected.population]] : []),
                ["Reçue le", formatDate(selected.dateCreation)],
                ...(selected.dateTraitement ? [["Traitée le", formatDate(selected.dateTraitement)]] : []),
              ].map(([k, v]) => (
                <div key={k} className="bg-[#0F0F0E] rounded-xl p-3">
                  <p className="text-[#FDF6E3]/30 text-xs mb-1">{k}</p>
                  <p className="text-[#FDF6E3]/80 text-xs font-medium">{v}</p>
                </div>
              ))}
            </div>

            {/* Urgence */}
            <div className="flex items-center gap-2">
              <span className="text-[#FDF6E3]/40 text-xs">Urgence :</span>
              <span className="text-xs px-2.5 py-1 rounded-full font-semibold"
                style={{ background: urgenceColors[selected.urgence] + "25", color: urgenceColors[selected.urgence] }}>
                {urgenceLabels[selected.urgence]}
              </span>
            </div>

            {/* Description */}
            <div>
              <p className="text-[#FDF6E3]/40 text-xs uppercase tracking-widest mb-2">Description</p>
              <p className="text-[#FDF6E3]/65 text-sm leading-relaxed bg-[#0F0F0E] rounded-xl p-4">
                {selected.description}
              </p>
            </div>

            {/* Note admin */}
            <div>
              <p className="text-[#FDF6E3]/40 text-xs uppercase tracking-widest mb-2">Note interne</p>
              <textarea rows={3} value={note} onChange={e => setNote(e.target.value)}
                placeholder="Ajouter une note interne..."
                className="w-full bg-[#0F0F0E] border border-[#FDF6E3]/8 rounded-xl px-4 py-3 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/20 focus:border-[#C9A84C] focus:outline-none transition-colors resize-none" />
              <button onClick={() => saveNote(selected.id)}
                className="mt-2 text-xs bg-[#FDF6E3]/8 text-[#FDF6E3]/60 px-3 py-1.5 rounded-lg hover:bg-[#FDF6E3]/12 transition-colors">
                Sauvegarder la note
              </button>
            </div>

            {/* Actions statut */}
            <div>
              <p className="text-[#FDF6E3]/40 text-xs uppercase tracking-widest mb-3">Changer le statut</p>
              <div className="flex flex-wrap gap-2">
                {([
                  ["nouvelle", "Nouvelle", Clock],
                  ["en_cours", "En cours", Eye],
                  ["traitee", "Traitée", CheckCircle],
                  ["archivee", "Archiver", Archive],
                ] as const).map(([val, label, Icon]) => (
                  <button key={val} onClick={() => updateStatut(selected.id, val)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      selected.statut === val
                        ? "border-2"
                        : "bg-[#0F0F0E] border border-[#FDF6E3]/8 text-[#FDF6E3]/50 hover:text-[#FDF6E3]"
                    }`}
                    style={selected.statut === val ? {
                      background: statutColors[val] + "20",
                      borderColor: statutColors[val],
                      color: statutColors[val],
                    } : {}}>
                    <Icon size={11} /> {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="text-4xl mb-3">📋</div>
              <p className="text-[#FDF6E3]/30 text-sm">Sélectionnez une demande</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
