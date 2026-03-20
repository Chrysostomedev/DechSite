import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact — COCO D'OR BIO",
  description: "Contactez COCO D'OR BIO par téléphone, email ou WhatsApp. Nous intervenons partout en Côte d'Ivoire.",
};

const contacts = [
  {
    titre: "Téléphone",
    valeur: "+225 07 88 21 55 36",
    sous: "Lun – Sam, 7h – 18h",
    href: "tel:+2250788215536",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    color: "#2D6A2F",
    cta: "Appeler",
  },
  {
    titre: "WhatsApp",
    valeur: "+225 07 88 21 55 36",
    sous: "Réponse rapide garantie",
    href: "https://wa.me/2250788215536",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: "#25D366",
    cta: "Écrire sur WhatsApp",
  },
  {
    titre: "Email",
    valeur: "contact@cocodorbio.ci",
    sous: "Réponse sous 24h",
    href: "mailto:contact@cocodorbio.ci",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: "#3A7EC4",
    cta: "Envoyer un email",
  },
  {
    titre: "Adresse",
    valeur: "Abidjan, Côte d'Ivoire",
    sous: "Cocody, Rue des Jardins",
    href: "https://maps.google.com/?q=Abidjan,Cote+d+Ivoire",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    color: "#C9A84C",
    cta: "Voir sur la carte",
  },
];

const reseaux = [
  {
    nom: "Facebook",
    handle: "@cocodorbio",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    nom: "Instagram",
    handle: "@cocodorbio_ci",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    nom: "TikTok",
    handle: "@cocodorbio",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z"/>
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/1.jpg"
            alt="Contact COCO D'OR BIO"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--vert-fonce) 0%, var(--bg) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">Parlons de votre projet</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
            className="text-4xl md:text-6xl font-bold mt-4 mb-5 leading-tight">
            Contactez-nous
          </h1>
          <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            Notre équipe est disponible pour répondre à toutes vos questions
            et vous accompagner dans votre projet.
          </p>
        </div>
      </section>

      {/* Cards contact */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contacts.map((c) => (
              <a
                key={c.titre}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                  style={{ background: c.color + "18", color: c.color }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)" }}>
                    {c.titre}
                  </p>
                  <p className="font-bold text-base leading-snug" style={{ color: "var(--text-primary)", fontFamily: "'Playfair Display', serif" }}>
                    {c.valeur}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{c.sous}</p>
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2.5"
                  style={{ color: c.color }}>
                  {c.cta}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>

          {/* Carte Google Maps + infos */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Map */}
            <div className="lg:col-span-3 rounded-3xl overflow-hidden border" style={{ borderColor: "var(--border)", minHeight: "420px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127324.37!2d-4.0305!3d5.3599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959b1d%3A0x7a8b5b5b5b5b5b5b!2sAbidjan%2C%20C%C3%B4te%20d'Ivoire!5e0!3m2!1sfr!2sci!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="COCO D'OR BIO — Abidjan"
              />
            </div>

            {/* Infos + réseaux */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Horaires */}
              <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
                  className="font-bold text-lg mb-4">
                  Horaires d'ouverture
                </h3>
                <div className="space-y-2.5">
                  {[
                    { j: "Lundi – Vendredi", h: "07h00 – 18h00" },
                    { j: "Samedi", h: "08h00 – 14h00" },
                    { j: "Dimanche", h: "Fermé" },
                  ].map((row) => (
                    <div key={row.j} className="flex justify-between items-center text-sm">
                      <span style={{ color: "var(--text-muted)" }}>{row.j}</span>
                      <span className="font-semibold" style={{ color: row.h === "Fermé" ? "#D94040" : "var(--text-primary)" }}>
                        {row.h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="rounded-2xl p-6 border" style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
                  className="font-bold text-lg mb-4">
                  Réseaux sociaux
                </h3>
                <div className="space-y-3">
                  {reseaux.map((r) => (
                    <a key={r.nom} href={r.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ background: "rgba(45,106,47,0.15)", color: "#7EC47F" }}>
                        {r.icon}
                      </div>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{r.nom}</p>
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>{r.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA étude */}
              <div className="rounded-2xl p-6 border" style={{ background: "rgba(45,106,47,0.1)", borderColor: "rgba(45,106,47,0.3)" }}>
                <p style={{ fontFamily: "'Playfair Display', serif", color: "var(--text-primary)" }}
                  className="font-bold text-base mb-2">
                  Besoin d'une étude technique ?
                </p>
                <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>
                  Remplissez notre formulaire et nous vous recontactons sous 24h.
                </p>
                <Link href="/etude-technique" className="btn-primary text-sm w-full justify-center">
                  Demander une étude gratuite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
