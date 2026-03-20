import Link from "next/link";
import { socialLinks } from "@/data/social";

// ─── Icônes sociales ──────────────────────────────────────────────────────────

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.79 1.54V6.78a4.85 4.85 0 01-1.02-.09z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const iconComponents: Record<string, () => JSX.Element> = {
  tiktok:    TikTokIcon,
  instagram: InstagramIcon,
  facebook:  FacebookIcon,
  whatsapp:  WhatsAppIcon,
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 border-t"
      style={{
        background: "var(--footer-bg, var(--vert-deep, #071A09))",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg, #0D2B10 0%, #1A4D1E 100%)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <svg viewBox="0 0 48 48" width="26" height="26" fill="none">
                  <ellipse cx="24" cy="28" rx="14" ry="16" fill="#5C3317" />
                  <ellipse cx="24" cy="28" rx="10" ry="12" fill="#3d2010" />
                  <path d="M24 14 C20 8 12 6 9 9 C13 11 18 13 24 14Z" fill="#2D6A2F" />
                  <path d="M24 14 C28 8 36 6 39 9 C35 11 30 13 24 14Z" fill="#2D6A2F" />
                  <path d="M24 14 C22 6 22 2 24 0 C26 2 26 6 24 14Z" fill="#52A855" />
                  <circle cx="24" cy="28" r="3.5" fill="#C9A84C" />
                </svg>
              </div>
              <div>
                <p
                  className="font-bold text-lg leading-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--or)" }}
                >
                  COCO D&apos;OR BIO
                </p>
                <p className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: "var(--vert-leaf)" }}>
                  Recyclage · Revalorisation · CI
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs mb-5" style={{ color: "var(--text-muted)" }}>
              Entreprise ivoirienne spécialisée dans la collecte, l&apos;assainissement
              et la revalorisation des déchets. Une Côte d&apos;Ivoire plus propre, c&apos;est notre mission.
            </p>
            <span className="badge-green">
              Économie Circulaire · Côte d&apos;Ivoire
            </span>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {[
                ["Accueil", "/"],
                ["Services", "/services"],
                ["Produits", "/produits"],
                ["Notre Processus", "/processus"],
                ["Demande d'étude", "/etude-technique"],
                ["Actualités", "/actualites"],
                ["Équipe", "/equipe"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition-colors hover:text-[#7EC47F]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4
              className="text-xs font-semibold tracking-widest uppercase mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              Retrouvez-nous
            </h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((s) => {
                const Icon = iconComponents[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                      style={{
                        background: "rgba(45,106,47,0.15)",
                        border: "1px solid var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {Icon && <Icon />}
                    </span>
                    <div>
                      <p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
                        {s.name}
                      </p>
                      <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                        {s.handle}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-green mb-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} COCO D&apos;OR BIO. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="text-xs transition-colors hover:text-[#7EC47F]"
              style={{ color: "var(--text-muted)" }}
            >
              Administration
            </Link>
            <span style={{ color: "var(--border)" }}>·</span>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Fait avec soin à Abidjan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
