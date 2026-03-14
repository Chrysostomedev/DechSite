import { socialLinks } from "@/data/social";

export const metadata = { title: "Contact — COCDECH | Coco D'Or Bio" };

const TikTokIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>;
const FacebookIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const WhatsAppIcon = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
const iconMap: Record<string, React.FC> = { tiktok: TikTokIcon, instagram: InstagramIcon, facebook: FacebookIcon, whatsapp: WhatsAppIcon };

export default function Contact() {
  return (
    <div className="pt-28 pb-20 bg-[#1C1C1A] min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-[#D4A843] text-xs font-semibold tracking-widest uppercase">Parlons-en</span>
        <h1 style={{fontFamily:"'Playfair Display',serif"}} className="text-4xl md:text-6xl font-bold text-[#F5ECD7] mt-3 mb-4">
          Contactez-nous
        </h1>
        <p className="text-[#F5ECD7]/60 text-lg mb-16 max-w-xl">
          Commande en gros, partenariat, question sur nos produits — on est disponibles.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Infos */}
          <div>
            <h2 className="text-[#F5ECD7] font-semibold text-lg mb-6">Nos coordonnées</h2>
            <div className="space-y-5 mb-10">
              {[{label:"Email", val:"contact@cocdech.ci", href:"mailto:contact@cocdech.ci"},
                {label:"WhatsApp / Téléphone", val:"+225 XX XX XX XX", href:"https://wa.me/22500000000"},
                {label:"Localisation", val:"Abidjan, Côte d'Ivoire", href:"#"},
              ].map(c => (
                <div key={c.label}>
                  <p className="text-[#F5ECD7]/40 text-xs uppercase tracking-widest mb-1">{c.label}</p>
                  <a href={c.href} className="text-[#F5ECD7] hover:text-[#D4A843] transition-colors">{c.val}</a>
                </div>
              ))}
            </div>

            <h2 className="text-[#F5ECD7] font-semibold text-lg mb-5">Nos réseaux</h2>
            <div className="flex flex-col gap-3">
              {socialLinks.map(s => {
                const Icon = iconMap[s.icon];
                return (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 group">
                    <span className="w-10 h-10 rounded-full bg-[#2A2A27] border border-[#F5ECD7]/10 flex items-center justify-center text-[#F5ECD7]/60 group-hover:border-[#D4A843] group-hover:text-[#D4A843] transition-all">
                      {Icon && <Icon />}
                    </span>
                    <span className="text-[#F5ECD7]/60 group-hover:text-[#D4A843] text-sm transition-colors">{s.name} — {s.handle}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-[#242421] border border-[#F5ECD7]/8 rounded-3xl p-8">
            <h2 className="text-[#F5ECD7] font-semibold text-lg mb-6">Envoyer un message</h2>
            <div className="space-y-4">
              {[{label:"Votre nom",type:"text",placeholder:"Ex: Kouamé Konan"},
                {label:"Email",type:"email",placeholder:"vous@exemple.com"},
                {label:"Sujet",type:"text",placeholder:"Commande, partenariat..."},
              ].map(f => (
                <div key={f.label}>
                  <label className="text-[#F5ECD7]/50 text-xs uppercase tracking-wider block mb-2">{f.label}</label>
                  <input type={f.type} placeholder={f.placeholder}
                    className="w-full bg-[#1C1C1A] border border-[#F5ECD7]/10 rounded-xl px-4 py-3 text-[#F5ECD7] text-sm placeholder-[#F5ECD7]/25 focus:border-[#D4A843] focus:outline-none transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-[#F5ECD7]/50 text-xs uppercase tracking-wider block mb-2">Message</label>
                <textarea rows={4} placeholder="Votre message..."
                  className="w-full bg-[#1C1C1A] border border-[#F5ECD7]/10 rounded-xl px-4 py-3 text-[#F5ECD7] text-sm placeholder-[#F5ECD7]/25 focus:border-[#D4A843] focus:outline-none transition-colors resize-none" />
              </div>
              <button className="w-full bg-[#D4A843] text-[#1C1C1A] font-semibold py-3.5 rounded-xl hover:bg-[#c09636] transition-colors text-sm">
                Envoyer le message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
