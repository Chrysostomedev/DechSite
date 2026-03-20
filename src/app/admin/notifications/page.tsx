"use client";

import { useState } from "react";
import { Bell, CheckCheck, Trash2, FileText, Newspaper, Settings, Users } from "lucide-react";

type Notif = {
  id: string;
  type: "demande" | "article" | "systeme" | "visiteur";
  titre: string;
  desc: string;
  date: string;
  lue: boolean;
};

const initialNotifs: Notif[] = [
  { id: "1", type: "demande", titre: "Nouvelle demande d'étude", desc: "Mairie de Cocody — Collecte de déchets ménagers", date: "2025-03-20T09:15:00", lue: false },
  { id: "2", type: "demande", titre: "Demande urgente reçue", desc: "Entreprise SITAB — Assainissement zone industrielle", date: "2025-03-20T08:30:00", lue: false },
  { id: "3", type: "article", titre: "Article publié avec succès", desc: "Partenariat Yopougon 2025 est maintenant en ligne", date: "2025-03-19T16:00:00", lue: false },
  { id: "4", type: "visiteur", titre: "Pic de trafic détecté", desc: "250 visiteurs simultanés — record du mois", date: "2025-03-19T14:22:00", lue: true },
  { id: "5", type: "demande", titre: "Demande traitée", desc: "Village de Tiagba — Étude envoyée par email", date: "2025-03-18T11:00:00", lue: true },
  { id: "6", type: "systeme", titre: "Sauvegarde automatique", desc: "Données sauvegardées avec succès", date: "2025-03-18T03:00:00", lue: true },
  { id: "7", type: "article", titre: "Brouillon en attente", desc: "Étude Grand-Bassam — En attente de publication", date: "2025-03-17T10:30:00", lue: true },
  { id: "8", type: "visiteur", titre: "Nouveau record mensuel", desc: "1 240 visiteurs uniques en mars 2025", date: "2025-03-15T09:00:00", lue: true },
];

const typeConfig = {
  demande: { icon: FileText, color: "#3A7EC4", bg: "rgba(58,126,196,0.15)", label: "Demande" },
  article: { icon: Newspaper, color: "#C9A84C", bg: "rgba(201,168,76,0.15)", label: "Article" },
  systeme: { icon: Settings, color: "#7EC47F", bg: "rgba(126,196,127,0.15)", label: "Système" },
  visiteur: { icon: Users, color: "#52A855", bg: "rgba(82,168,85,0.15)", label: "Visiteurs" },
};

function formatDate(d: string) {
  const date = new Date(d);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);
  if (diff < 60) return `Il y a ${diff} min`;
  if (diff < 1440) return `Il y a ${Math.floor(diff / 60)}h`;
  return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState<Notif[]>(initialNotifs);
  const [filter, setFilter] = useState<"toutes" | "non_lues">("toutes");

  const nonLues = notifs.filter(n => !n.lue).length;
  const displayed = filter === "non_lues" ? notifs.filter(n => !n.lue) : notifs;

  const markAllRead = () => setNotifs(n => n.map(x => ({ ...x, lue: true })));
  const markRead = (id: string) => setNotifs(n => n.map(x => x.id === id ? { ...x, lue: true } : x));
  const deleteNotif = (id: string) => setNotifs(n => n.filter(x => x.id !== id));

  return (
    <div className="max-w-3xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary, #FDF6E3)" }} className="text-2xl font-bold">
            Notifications
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted, rgba(253,246,227,0.4))" }}>
            {nonLues > 0 ? `${nonLues} non lue${nonLues > 1 ? "s" : ""}` : "Tout est à jour"}
          </p>
        </div>
        {nonLues > 0 && (
          <button onClick={markAllRead}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl transition-colors"
            style={{ background: "rgba(45,106,47,0.15)", color: "#7EC47F", border: "1px solid rgba(45,106,47,0.25)" }}>
            <CheckCheck size={13} /> Tout marquer comme lu
          </button>
        )}
      </div>

      {/* Filtres */}
      <div className="flex gap-2">
        {(["toutes", "non_lues"] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{
              background: filter === f ? "#C9A84C" : "rgba(45,106,47,0.1)",
              color: filter === f ? "#071A09" : "var(--text-muted, rgba(253,246,227,0.5))",
            }}>
            {f === "toutes" ? "Toutes" : `Non lues (${nonLues})`}
          </button>
        ))}
      </div>

      {/* Liste */}
      <div className="space-y-2">
        {displayed.length === 0 && (
          <div className="text-center py-16" style={{ color: "var(--text-muted, rgba(253,246,227,0.3))" }}>
            <Bell size={32} className="mx-auto mb-3 opacity-30" />
            <p className="text-sm">Aucune notification</p>
          </div>
        )}
        {displayed.map(n => {
          const cfg = typeConfig[n.type];
          const Icon = cfg.icon;
          return (
            <div key={n.id}
              className="flex items-start gap-4 p-4 rounded-2xl border transition-all group"
              style={{
                background: n.lue ? "var(--bg-surface, #0C1A0D)" : "rgba(45,106,47,0.08)",
                borderColor: n.lue ? "var(--border, rgba(45,106,47,0.18))" : "rgba(45,106,47,0.3)",
              }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: cfg.bg, color: cfg.color }}>
                <Icon size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text-primary, #FDF6E3)" }}>
                      {n.titre}
                      {!n.lue && <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full bg-[#C9A84C] align-middle" />}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--text-muted, rgba(253,246,227,0.5))" }}>{n.desc}</p>
                  </div>
                  <span className="text-xs shrink-0" style={{ color: "var(--text-muted, rgba(253,246,227,0.3))" }}>
                    {formatDate(n.date)}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                {!n.lue && (
                  <button onClick={() => markRead(n.id)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                    style={{ color: "#7EC47F", background: "rgba(126,196,127,0.1)" }}
                    title="Marquer comme lu">
                    <CheckCheck size={13} />
                  </button>
                )}
                <button onClick={() => deleteNotif(n.id)}
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                  style={{ color: "rgba(217,64,64,0.7)", background: "rgba(217,64,64,0.08)" }}
                  title="Supprimer">
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
