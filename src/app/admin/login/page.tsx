"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft, Lock, Mail, AlertCircle } from "lucide-react";

// Credentials statiques (à remplacer par Firebase Auth)
const ADMIN_EMAIL    = "admin@cocodorbio.ci";
const ADMIN_PASSWORD = "cocodor2025";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    await new Promise((r) => setTimeout(r, 900));

    // Mode permissif : tout identifiant non vide est accepté
    if (email.trim() && password.trim()) {
      router.push("/admin");
    } else {
      setError("Veuillez remplir les deux champs.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
      style={{ background: "var(--vert-deep, #071A09)" }}
    >
      {/* ── Fond décoratif ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grille de points */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <defs>
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#2D6A2F" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Glows */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(45,106,47,0.18) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative w-full max-w-md">
        {/* Retour au site */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[#7EC47F]"
          style={{ color: "rgba(126,196,127,0.5)" }}
        >
          <ArrowLeft size={14} />
          Retour au site
        </Link>

        {/* Card login */}
        <div
          className="rounded-3xl p-8 md:p-10"
          style={{
            background: "rgba(13,43,16,0.6)",
            border: "1px solid rgba(45,106,47,0.25)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(126,196,127,0.05)",
          }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div
              className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(201,168,76,0.2), rgba(45,106,47,0.3))",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 8px 32px rgba(201,168,76,0.15)",
              }}
            >
              🥥
            </div>
            <h1
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: "#C9A84C" }}
            >
              COCO D&apos;OR BIO
            </h1>
            <p className="text-xs tracking-widest uppercase" style={{ color: "rgba(126,196,127,0.45)" }}>
              Espace Administration
            </p>
          </div>

          {/* Titre */}
          <div className="mb-7">
            <h2
              className="text-xl font-semibold mb-1"
              style={{ color: "rgba(253,246,227,0.9)" }}
            >
              Connexion
            </h2>
            <p className="text-sm" style={{ color: "rgba(253,246,227,0.35)" }}>
              Accès réservé aux administrateurs
            </p>
          </div>

          {/* Erreur */}
          {error && (
            <div
              className="flex items-center gap-3 px-4 py-3 rounded-xl mb-5 text-sm"
              style={{
                background: "rgba(217,64,64,0.12)",
                border: "1px solid rgba(217,64,64,0.25)",
                color: "#f87171",
              }}
            >
              <AlertCircle size={15} className="shrink-0" />
              {error}
            </div>
          )}

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                className="block text-xs font-medium tracking-wider uppercase mb-2"
                style={{ color: "rgba(253,246,227,0.4)" }}
              >
                Email
              </label>
              <div className="relative">
                <Mail
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: "rgba(126,196,127,0.4)" }}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cocodorbio.ci"
                  required
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm transition-all outline-none"
                  style={{
                    background: "rgba(7,26,9,0.6)",
                    border: "1px solid rgba(45,106,47,0.25)",
                    color: "rgba(253,246,227,0.85)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(126,196,127,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(45,106,47,0.25)")}
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <label
                className="block text-xs font-medium tracking-wider uppercase mb-2"
                style={{ color: "rgba(253,246,227,0.4)" }}
              >
                Mot de passe
              </label>
              <div className="relative">
                <Lock
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  style={{ color: "rgba(126,196,127,0.4)" }}
                />
                <input
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-11 pr-12 py-3.5 rounded-xl text-sm transition-all outline-none"
                  style={{
                    background: "rgba(7,26,9,0.6)",
                    border: "1px solid rgba(45,106,47,0.25)",
                    color: "rgba(253,246,227,0.85)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "rgba(126,196,127,0.5)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(45,106,47,0.25)")}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd(!showPwd)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "rgba(126,196,127,0.35)" }}
                >
                  {showPwd ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
              style={{
                background: loading
                  ? "rgba(201,168,76,0.5)"
                  : "linear-gradient(135deg, #C9A84C, #D4B96A)",
                color: "#0A0F0A",
                boxShadow: loading ? "none" : "0 8px 24px rgba(201,168,76,0.25)",
              }}
            >
              {loading ? (
                <>
                  <span
                    className="w-4 h-4 rounded-full border-2 animate-spin"
                    style={{ borderColor: "rgba(10,15,10,0.3)", borderTopColor: "#0A0F0A" }}
                  />
                  Connexion...
                </>
              ) : (
                "Se connecter →"
              )}
            </button>
          </form>

          {/* Hint credentials */}
          <div
            className="mt-6 px-4 py-3 rounded-xl text-center"
            style={{
              background: "rgba(45,106,47,0.08)",
              border: "1px solid rgba(45,106,47,0.15)",
            }}
          >
            <p className="text-xs" style={{ color: "rgba(126,196,127,0.45)" }}>
              Mode démo : n&apos;importe quel email et mot de passe sont acceptés
            </p>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs mt-6" style={{ color: "rgba(253,246,227,0.2)" }}>
          © {new Date().getFullYear()} COCO D&apos;OR BIO · Abidjan, Côte d&apos;Ivoire
        </p>
      </div>
    </div>
  );
}
