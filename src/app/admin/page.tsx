import Link from "next/link";
import { ArrowRight, Newspaper, FileText, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { actualites } from "@/data/actualites";
import { demandesEtude, statutColors, statutLabels, urgenceColors, urgenceLabels } from "@/data/etudes";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export default function AdminDashboard() {
  const publiees = actualites.filter(a => a.publie).length;
  const brouillons = actualites.filter(a => !a.publie).length;
  const nouvelles = demandesEtude.filter(d => d.statut === "nouvelle").length;
  const enCours = demandesEtude.filter(d => d.statut === "en_cours").length;
  const traitees = demandesEtude.filter(d => d.statut === "traitee").length;
  const urgentes = demandesEtude.filter(d => d.urgence === "tres_urgente" && d.statut !== "traitee").length;

  const kpis = [
    { label: "Actualités publiées", val: publiees, sub: `${brouillons} brouillon(s)`, icon: Newspaper, color: "#C9A84C", href: "/admin/actualites" },
    { label: "Nouvelles demandes", val: nouvelles, sub: "À traiter", icon: FileText, color: "#3A7EC4", href: "/admin/demandes" },
    { label: "Demandes en cours", val: enCours, sub: "En traitement", icon: TrendingUp, color: "#E08B2A", href: "/admin/demandes" },
    { label: "Demandes urgentes", val: urgentes, sub: "Priorité haute", icon: AlertCircle, color: "#D94040", href: "/admin/demandes" },
  ];

  const recentesDemandes = demandesEtude
    .filter(d => d.statut !== "archivee")
    .sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime())
    .slice(0, 5);

  const recentesActus = [...actualites]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Header */}
      <div>
        <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#FDF6E3]">
          Tableau de bord
        </h1>
        <p className="text-[#FDF6E3]/40 text-sm mt-1">Vue d'ensemble de COCO D'OR BIO</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map(({ label, val, sub, icon: Icon, color, href }) => (
          <Link key={label} href={href}
            className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl p-5 hover:border-[#C9A84C]/25 transition-all group">
            <div className="flex items-start justify-between mb-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: color + "20" }}>
                <Icon size={16} style={{ color }} />
              </div>
              <ArrowRight size={12} className="text-[#FDF6E3]/20 group-hover:text-[#C9A84C] transition-colors mt-1" />
            </div>
            <p className="text-3xl font-bold text-[#FDF6E3]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {val}
            </p>
            <p className="text-[#FDF6E3]/60 text-xs mt-1">{label}</p>
            <p className="text-[#FDF6E3]/30 text-xs mt-0.5">{sub}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Dernières demandes */}
        <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#FDF6E3]/6">
            <h2 className="text-[#FDF6E3] font-semibold text-sm">Dernières demandes d'étude</h2>
            <Link href="/admin/demandes" className="text-[#C9A84C] text-xs hover:underline flex items-center gap-1">
              Voir tout <ArrowRight size={10} />
            </Link>
          </div>
          <div className="divide-y divide-[#FDF6E3]/5">
            {recentesDemandes.map(d => (
              <div key={d.id} className="px-5 py-3.5 flex items-center gap-3 hover:bg-[#FDF6E3]/3 transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] text-xs font-bold shrink-0">
                  {d.nom[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#FDF6E3]/80 text-xs font-semibold truncate">{d.organisation}</p>
                  <p className="text-[#FDF6E3]/35 text-xs truncate">{d.zone}</p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: statutColors[d.statut] + "25", color: statutColors[d.statut] }}>
                    {statutLabels[d.statut]}
                  </span>
                  <span className="text-[#FDF6E3]/25 text-xs">{formatDate(d.dateCreation)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dernières actualités */}
        <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#FDF6E3]/6">
            <h2 className="text-[#FDF6E3] font-semibold text-sm">Actualités récentes</h2>
            <Link href="/admin/actualites" className="text-[#C9A84C] text-xs hover:underline flex items-center gap-1">
              Gérer <ArrowRight size={10} />
            </Link>
          </div>
          <div className="divide-y divide-[#FDF6E3]/5">
            {recentesActus.map(a => (
              <div key={a.id} className="px-5 py-3.5 flex items-center gap-3 hover:bg-[#FDF6E3]/3 transition-colors">
                <span className="text-2xl shrink-0">{a.image}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-[#FDF6E3]/80 text-xs font-semibold line-clamp-1">{a.titre}</p>
                  <p className="text-[#FDF6E3]/35 text-xs mt-0.5">{formatDate(a.date)}</p>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${
                  a.publie
                    ? "bg-[#2D9E5A]/20 text-[#2D9E5A]"
                    : "bg-[#FDF6E3]/8 text-[#FDF6E3]/40"
                }`}>
                  {a.publie ? "Publié" : "Brouillon"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl p-5">
        <h2 className="text-[#FDF6E3] font-semibold text-sm mb-4">Actions rapides</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/actualites/new"
            className="flex items-center gap-2 bg-[#C9A84C] text-[#1C1C1A] text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#D4B96A] transition-colors">
            <Newspaper size={13} /> Nouvel article
          </Link>
          <Link href="/admin/demandes"
            className="flex items-center gap-2 bg-[#FDF6E3]/8 text-[#FDF6E3]/70 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#FDF6E3]/12 transition-colors">
            <FileText size={13} /> Voir les demandes
          </Link>
          <Link href="/" target="_blank"
            className="flex items-center gap-2 bg-[#FDF6E3]/8 text-[#FDF6E3]/70 text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-[#FDF6E3]/12 transition-colors">
            <ArrowRight size={13} /> Voir le site
          </Link>
        </div>
      </div>
    </div>
  );
}
