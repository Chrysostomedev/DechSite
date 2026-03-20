"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, Newspaper, FileText, Settings,
  Menu, X, LogOut, ChevronRight, ExternalLink,
  Bell, Users, Sun, Moon,
} from "lucide-react";
import "../globals.css";

const navItems = [
  { href: "/admin",                  label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/admin/actualites",       label: "Actualités",      icon: Newspaper       },
  { href: "/admin/demandes",         label: "Demandes",        icon: FileText        },
  { href: "/admin/notifications",    label: "Notifications",   icon: Bell            },
  { href: "/admin/visiteurs",        label: "Visiteurs",       icon: Users           },
  { href: "/admin/settings",         label: "Paramètres",      icon: Settings        },
];

type Theme = "dark" | "light";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("admin-theme") as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("admin-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === "dark" ? "light" : "dark");

  if (pathname === "/admin/login") {
    return (
      <html lang="fr">
        <body style={{ background: theme === "dark" ? "#060E07" : "#F0F7F0" }}>
          {children}
        </body>
      </html>
    );
  }

  const isLight = theme === "light";
  const BG       = isLight ? "#F0F7F0" : "#060E07";
  const SURFACE  = isLight ? "#FFFFFF" : "#0C1A0D";
  const BORDER   = isLight ? "rgba(45,106,47,0.15)" : "rgba(45,106,47,0.18)";
  const GOLD     = "#C9A84C";
  const GREEN    = isLight ? "#2D6A2F" : "#7EC47F";
  const MUTED    = isLight ? "rgba(26,46,26,0.55)" : "rgba(253,246,227,0.35)";
  const TEXT     = isLight ? "rgba(26,46,26,0.85)" : "rgba(253,246,227,0.75)";
  const TOPBAR   = isLight ? "#FFFFFF" : "#0C1A0D";

  const currentLabel = navItems.find(n =>
    n.href === "/admin" ? pathname === "/admin" : pathname.startsWith(n.href)
  )?.label ?? "";

  return (
    <html lang="fr" data-theme={theme}>
      <body>
        <div className="min-h-screen flex" style={{ background: BG }}>

          {/* Overlay mobile */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-30 lg:hidden"
              style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
              onClick={() => setSidebarOpen(false)} />
          )}

          {/* ── SIDEBAR ── */}
          <aside
            className={`fixed top-0 left-0 h-full w-64 z-40 flex flex-col transition-transform duration-300 lg:translate-x-0 lg:static lg:z-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            style={{ background: SURFACE, borderRight: `1px solid ${BORDER}` }}
          >
            {/* Logo */}
            <div className="p-5 pb-4" style={{ borderBottom: `1px solid ${BORDER}` }}>
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-[#C9A84C]/20">
                  <Image src="/images/logo.jpg" alt="COCO D'OR BIO" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-bold leading-none" style={{ fontFamily: "'Playfair Display', serif", color: GOLD }}>
                    COCO D&apos;OR BIO
                  </p>
                  <p className="text-[9px] tracking-widest uppercase mt-0.5" style={{ color: MUTED }}>
                    Administration
                  </p>
                </div>
              </Link>
            </div>

            {/* Nav */}
            <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
              {navItems.map(({ href, label, icon: Icon }) => {
                const active = href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-150"
                    style={{
                      background: active ? (isLight ? "rgba(45,106,47,0.12)" : "rgba(45,106,47,0.2)") : "transparent",
                      color: active ? GREEN : MUTED,
                      fontWeight: active ? 600 : 400,
                      border: active ? `1px solid ${isLight ? "rgba(45,106,47,0.2)" : "rgba(126,196,127,0.15)"}` : "1px solid transparent",
                    }}
                  >
                    <Icon size={15} strokeWidth={active ? 2.5 : 2} />
                    <span className="flex-1">{label}</span>
                    {active && <ChevronRight size={12} style={{ color: GREEN }} />}
                  </Link>
                );
              })}
            </nav>

            {/* Footer sidebar */}
            <div className="p-3 space-y-0.5" style={{ borderTop: `1px solid ${BORDER}` }}>
              <Link href="/" target="_blank"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all hover:bg-[rgba(45,106,47,0.08)]"
                style={{ color: MUTED }}>
                <ExternalLink size={14} /> Voir le site
              </Link>
              <Link href="/admin/login"
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all"
                style={{ color: "rgba(217,64,64,0.7)" }}>
                <LogOut size={14} /> Déconnexion
              </Link>
            </div>
          </aside>

          {/* ── MAIN ── */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* Topbar */}
            <header className="h-14 flex items-center px-4 gap-4 sticky top-0 z-20"
              style={{ background: TOPBAR, borderBottom: `1px solid ${BORDER}` }}>
              <button onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-1.5 rounded-lg transition-colors"
                style={{ color: MUTED }}>
                {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
              </button>

              {/* Breadcrumb */}
              <div className="flex-1 flex items-center gap-2 text-xs" style={{ color: MUTED }}>
                <span style={{ color: isLight ? "rgba(26,46,26,0.3)" : "rgba(253,246,227,0.2)" }}>Admin</span>
                <span style={{ color: isLight ? "rgba(26,46,26,0.2)" : "rgba(253,246,227,0.15)" }}>/</span>
                <span style={{ color: TEXT }}>{currentLabel}</span>
              </div>

              {/* Actions topbar */}
              <div className="flex items-center gap-2">
                {/* Notifications badge */}
                <Link href="/admin/notifications"
                  className="relative w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                  style={{ color: MUTED, background: isLight ? "rgba(45,106,47,0.08)" : "rgba(45,106,47,0.12)" }}>
                  <Bell size={15} />
                  <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-[#C9A84C]" />
                </Link>

                {/* Theme toggle */}
                <button onClick={toggleTheme}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-all border"
                  style={{
                    color: isLight ? "#2D6A2F" : "#C9A84C",
                    background: isLight ? "rgba(45,106,47,0.08)" : "rgba(201,168,76,0.1)",
                    borderColor: isLight ? "rgba(45,106,47,0.2)" : "rgba(201,168,76,0.2)",
                  }}
                  aria-label="Basculer le thème">
                  {isLight ? <Moon size={14} /> : <Sun size={14} />}
                </button>

                {/* Avatar */}
                <div className="flex items-center gap-2 pl-2 border-l" style={{ borderColor: BORDER }}>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "rgba(201,168,76,0.2)", border: `1px solid rgba(201,168,76,0.3)`, color: GOLD }}>
                    A
                  </div>
                  <span className="text-xs hidden sm:block" style={{ color: MUTED }}>Admin</span>
                </div>
              </div>
            </header>

            {/* Content */}
            <main className="flex-1 p-5 md:p-7 overflow-auto" style={{ color: TEXT }}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
