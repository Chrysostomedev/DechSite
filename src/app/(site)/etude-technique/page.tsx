"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Phone, FileText, MapPin } from "lucide-react";
import { typeEtudeLabels } from "@/data/etudes";

const zones = [
  "Abidjan (Cocody)", "Abidjan (Yopougon)", "Abidjan (Abobo)", "Abidjan (Adjamé)",
  "Abidjan (Plateau)", "Abidjan (Koumassi)", "Abidjan (Marcory)", "Abidjan (Treichville)",
  "Abidjan (Port-Bouët)", "Abidjan (Bingerville)", "Bouaké", "Daloa", "San-Pédro",
  "Yamoussoukro", "Korhogo", "Man", "Gagnoa", "Abengourou", "Grand-Bassam", "Autre",
];

const etapes = [
  { num: "01", titre: "Remplissez le formulaire", desc: "5 minutes suffisent pour décrire votre besoin." },
  { num: "02", titre: "Nous vous contactons", desc: "Notre équipe vous rappelle sous 48h ouvrées." },
  { num: "03", titre: "Visite terrain", desc: "Nos techniciens se déplacent pour évaluer la situation." },
  { num: "04", titre: "Rapport & devis", desc: "Vous recevez une étude complète avec recommandations." },
];

export default function EtudeTechniquePage() {
  const [form, setForm] = useState({
    nom: "", organisation: "", typeOrganisation: "commune",
    email: "", telephone: "", zone: "",
    typeEtude: "collecte", description: "",
    superficie: "", population: "", urgence: "normale",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulation envoi (statique pour l'instant)
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#1C1C1A] flex items-center justify-center px-6 pt-28 pb-20">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 rounded-full bg-[#2D6A2F]/20 border border-[#2D6A2F] flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-[#52A855]" />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl font-bold text-[#FDF6E3] mb-4">
            Demande envoyée !
          </h1>
          <p className="text-[#FDF6E3]/60 mb-8 leading-relaxed">
            Merci <strong className="text-[#C9A84C]">{form.nom}</strong>. Notre équipe technique
            vous contactera sous <strong className="text-[#FDF6E3]">48 heures ouvrées</strong> pour
            discuter de votre projet.
          </p>
          <div className="bg-[#242421] border border-[#FDF6E3]/8 rounded-2xl p-6 mb-8 text-left space-y-3">
            <p className="text-[#FDF6E3]/50 text-xs uppercase tracking-widest mb-4">Récapitulatif</p>
            {[
              ["Organisation", form.organisation],
              ["Zone", form.zone],
              ["Type d'étude", typeEtudeLabels[form.typeEtude as keyof typeof typeEtudeLabels]],
              ["Urgence", form.urgence === "normale" ? "Normale" : form.urgence === "urgente" ? "Urgente" : "Très urgente"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between text-sm">
                <span className="text-[#FDF6E3]/40">{k}</span>
                <span className="text-[#FDF6E3]">{v}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => setSubmitted(false)} className="btn-outline text-sm px-6 py-2.5">
              Nouvelle demande
            </button>
            <Link href="/" className="btn-primary text-sm px-6 py-2.5 justify-center">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1C1C1A] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#1A3D1C] via-[#1C1C1A] to-[#3D2800] overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#C9A84C]/6 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <span className="inline-flex items-center gap-2 bg-[#2D6A2F]/30 border border-[#2D6A2F] text-[#7EC47F] text-xs px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
            📋 Étude Technique Gratuite
          </span>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] mb-5 leading-tight">
            Demandez votre
            <span className="block text-[#C9A84C]">Étude Technique</span>
          </h1>
          <p className="text-[#FDF6E3]/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Collecte de déchets, assainissement, réaménagement de commune ou village —
            décrivez votre besoin, notre équipe vous répond sous 48h.
          </p>
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-[#FDF6E3] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {etapes.map((e) => (
              <div key={e.num} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-[#1C1C1A] font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {e.num}
                </div>
                <h3 className="text-[#1C1C1A] font-semibold text-sm mb-1">{e.titre}</h3>
                <p className="text-[#1C1C1A]/55 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <section className="py-20 bg-[#1C1C1A]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar info */}
            <div className="space-y-6">
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-bold text-[#FDF6E3] mb-4">
                  Pourquoi nous faire confiance ?
                </h2>
                <ul className="space-y-4">
                  {[
                    { icon: <CheckCircle2 size={16} />, text: "Étude préliminaire 100% gratuite" },
                    { icon: <Clock size={16} />, text: "Réponse garantie sous 48h" },
                    { icon: <MapPin size={16} />, text: "Intervention partout en Côte d'Ivoire" },
                    { icon: <FileText size={16} />, text: "Rapport technique détaillé" },
                    { icon: <Phone size={16} />, text: "Suivi personnalisé de votre dossier" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#FDF6E3]/65 text-sm">
                      <span className="text-[#C9A84C] mt-0.5 shrink-0">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#242421] border border-[#C9A84C]/20 rounded-2xl p-5">
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest font-semibold mb-3">Contact direct</p>
                <a href="https://wa.me/2250788215536" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#FDF6E3]/70 hover:text-[#C9A84C] transition-colors text-sm">
                  <span className="text-xl">📱</span>
                  WhatsApp : +225 07 88 21 55 36
                </a>
                <p className="text-[#FDF6E3]/40 text-xs mt-3">Lun–Ven, 8h–18h</p>
              </div>

              <div className="bg-[#1A3D1C]/40 border border-[#2D6A2F]/40 rounded-2xl p-5">
                <p className="text-[#7EC47F] text-xs font-semibold mb-2">🌿 Nos domaines d'expertise</p>
                <ul className="space-y-1.5">
                  {Object.values(typeEtudeLabels).map(l => (
                    <li key={l} className="text-[#FDF6E3]/55 text-xs flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C9A84C]" />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulaire principal */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-[#242421] border border-[#FDF6E3]/8 rounded-3xl p-8 space-y-6">
                <h2 style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-2xl font-bold text-[#FDF6E3] mb-2">
                  Votre demande
                </h2>

                {/* Identité */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Nom complet *" name="nom" type="text"
                    placeholder="Ex: Kouamé N'Guessan" value={form.nom} onChange={handleChange} required />
                  <Field label="Organisation / Commune *" name="organisation" type="text"
                    placeholder="Ex: Mairie de Bingerville" value={form.organisation} onChange={handleChange} required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <SelectField label="Type d'organisation *" name="typeOrganisation" value={form.typeOrganisation} onChange={handleChange}>
                    <option value="commune">Commune / Mairie</option>
                    <option value="village">Village / Communauté</option>
                    <option value="entreprise">Entreprise</option>
                    <option value="ong">ONG / Association</option>
                    <option value="particulier">Particulier</option>
                  </SelectField>
                  <SelectField label="Zone / Localité *" name="zone" value={form.zone} onChange={handleChange} required>
                    <option value="">Sélectionner...</option>
                    {zones.map(z => <option key={z} value={z}>{z}</option>)}
                  </SelectField>
                </div>

                {/* Contact */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Email *" name="email" type="email"
                    placeholder="vous@exemple.com" value={form.email} onChange={handleChange} required />
                  <Field label="Téléphone / WhatsApp *" name="telephone" type="tel"
                    placeholder="+225 07 XX XX XX" value={form.telephone} onChange={handleChange} required />
                </div>

                {/* Type d'étude */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <SelectField label="Type d'étude demandée *" name="typeEtude" value={form.typeEtude} onChange={handleChange}>
                    {Object.entries(typeEtudeLabels).map(([k, v]) => (
                      <option key={k} value={k}>{v}</option>
                    ))}
                  </SelectField>
                  <SelectField label="Niveau d'urgence" name="urgence" value={form.urgence} onChange={handleChange}>
                    <option value="normale">Normale (1–2 semaines)</option>
                    <option value="urgente">Urgente (48–72h)</option>
                    <option value="tres_urgente">Très urgente (24h)</option>
                  </SelectField>
                </div>

                {/* Infos complémentaires */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Superficie estimée" name="superficie" type="text"
                    placeholder="Ex: 5 km², 2 ha..." value={form.superficie} onChange={handleChange} />
                  <Field label="Population concernée" name="population" type="text"
                    placeholder="Ex: 10 000 habitants" value={form.population} onChange={handleChange} />
                </div>

                {/* Description */}
                <div>
                  <label className="text-[#FDF6E3]/50 text-xs uppercase tracking-wider block mb-2">
                    Description du besoin *
                  </label>
                  <textarea
                    name="description"
                    rows={5}
                    required
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Décrivez votre situation actuelle, les problèmes rencontrés et vos attentes..."
                    className="w-full bg-[#1C1C1A] border border-[#FDF6E3]/10 rounded-xl px-4 py-3 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/25 focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A84C] hover:bg-[#D4B96A] disabled:opacity-60 text-[#1C1C1A] font-bold py-4 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-[#1C1C1A]/30 border-t-[#1C1C1A] rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    <>Envoyer ma demande d'étude <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="text-[#FDF6E3]/30 text-xs text-center">
                  Vos données sont confidentielles et utilisées uniquement pour traiter votre demande.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Composants de formulaire ─────────────────────────────────────────────────

function Field({ label, name, type, placeholder, value, onChange, required }: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="text-[#FDF6E3]/50 text-xs uppercase tracking-wider block mb-2">{label}</label>
      <input
        type={type} name={name} placeholder={placeholder} value={value}
        onChange={onChange} required={required}
        className="w-full bg-[#1C1C1A] border border-[#FDF6E3]/10 rounded-xl px-4 py-3 text-[#FDF6E3] text-sm placeholder-[#FDF6E3]/25 focus:border-[#C9A84C] focus:outline-none transition-colors"
      />
    </div>
  );
}

function SelectField({ label, name, value, onChange, children, required }: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode; required?: boolean;
}) {
  return (
    <div>
      <label className="text-[#FDF6E3]/50 text-xs uppercase tracking-wider block mb-2">{label}</label>
      <select
        name={name} value={value} onChange={onChange} required={required}
        className="w-full bg-[#1C1C1A] border border-[#FDF6E3]/10 rounded-xl px-4 py-3 text-[#FDF6E3] text-sm focus:border-[#C9A84C] focus:outline-none transition-colors appearance-none cursor-pointer"
      >
        {children}
      </select>
    </div>
  );
}
