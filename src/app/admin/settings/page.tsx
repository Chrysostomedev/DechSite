"use client";
import { useState } from "react";
import { Save, Globe, Phone, Mail, MapPin } from "lucide-react";

export default function AdminSettings() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({
    nomEntreprise: "COCO D'OR BIO",
    slogan: "Recyclage & Revalorisation des Déchets",
    email: "contact@cocodorbio.ci",
    telephone: "+225 07 88 21 55 36",
    whatsapp: "+225 07 88 21 55 36",
    adresse: "Abidjan, Côte d'Ivoire",
    facebook: "#",
    instagram: "#",
    tiktok: "#",
    delaiReponse: "48",
    emailNotif: "admin@cocodorbio.ci",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSave = async () => {
    await new Promise(r => setTimeout(r, 600));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-2xl font-bold text-[#FDF6E3]">
            Paramètres
          </h1>
          <p className="text-[#FDF6E3]/40 text-sm mt-1">Configuration générale du site</p>
        </div>
        <button onClick={handleSave}
          className="flex items-center gap-2 bg-[#C9A84C] text-[#1C1C1A] text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#D4B96A] transition-colors">
          <Save size={14} />
          {saved ? "Enregistré ✓" : "Enregistrer"}
        </button>
      </div>

      {/* Infos entreprise */}
      <Section title="Informations de l'entreprise" icon={<Globe size={14} />}>
        <SettingField label="Nom de l'entreprise" name="nomEntreprise" value={form.nomEntreprise} onChange={handleChange} />
        <SettingField label="Slogan" name="slogan" value={form.slogan} onChange={handleChange} />
        <SettingField label="Adresse" name="adresse" value={form.adresse} onChange={handleChange} icon={<MapPin size={12} />} />
      </Section>

      {/* Contact */}
      <Section title="Contact" icon={<Phone size={14} />}>
        <SettingField label="Email principal" name="email" type="email" value={form.email} onChange={handleChange} icon={<Mail size={12} />} />
        <SettingField label="Téléphone" name="telephone" type="tel" value={form.telephone} onChange={handleChange} icon={<Phone size={12} />} />
        <SettingField label="WhatsApp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} />
      </Section>

      {/* Réseaux sociaux */}
      <Section title="Réseaux sociaux" icon={<Globe size={14} />}>
        <SettingField label="Facebook URL" name="facebook" value={form.facebook} onChange={handleChange} />
        <SettingField label="Instagram URL" name="instagram" value={form.instagram} onChange={handleChange} />
        <SettingField label="TikTok URL" name="tiktok" value={form.tiktok} onChange={handleChange} />
      </Section>

      {/* Notifications */}
      <Section title="Notifications" icon={<Mail size={14} />}>
        <SettingField label="Email de notification (nouvelles demandes)" name="emailNotif" type="email" value={form.emailNotif} onChange={handleChange} />
        <SettingField label="Délai de réponse affiché (heures)" name="delaiReponse" type="number" value={form.delaiReponse} onChange={handleChange} />
      </Section>

      {/* Accès admin */}
      <div className="bg-[#1C1C1A] border border-[#D94040]/20 rounded-2xl p-5">
        <h3 className="text-[#D94040] text-xs uppercase tracking-widest font-semibold mb-3">Zone sensible</h3>
        <p className="text-[#FDF6E3]/40 text-sm mb-4">
          La gestion des accès admin sera disponible après intégration Firebase.
        </p>
        <div className="flex items-center gap-2 bg-[#D94040]/10 border border-[#D94040]/20 rounded-xl px-4 py-3">
          <span className="text-[#D94040] text-xs">🔒 Authentification Firebase non configurée (mode statique)</span>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-[#1C1C1A] border border-[#FDF6E3]/6 rounded-2xl p-5 space-y-4">
      <div className="flex items-center gap-2 text-[#FDF6E3]/50 text-xs uppercase tracking-widest">
        {icon} {title}
      </div>
      {children}
    </div>
  );
}

function SettingField({ label, name, type = "text", value, onChange, icon }: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-[#FDF6E3]/35 text-xs block mb-1.5">{label}</label>
      <div className="relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#FDF6E3]/25">{icon}</span>}
        <input type={type} name={name} value={value} onChange={onChange}
          className={`w-full bg-[#0F0F0E] border border-[#FDF6E3]/8 rounded-xl py-2.5 text-[#FDF6E3] text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${icon ? "pl-9 pr-4" : "px-4"}`} />
      </div>
    </div>
  );
}
