"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/collecte", label: "Collecte de déchets" },
      { href: "/services/assainissement", label: "Assainissement" },
      { href: "/services/reamenagement", label: "Réaménagement" },
      { href: "/services/valorisation", label: "Valorisation & Recyclage" },
    ],
  },
  {
    href: "/produits",
    label: "Produits",
    children: [
      { href: "/produits#charbon", label: "Charbon écologique" },
      { href: "/produits#compost", label: "Compost organique" },
      { href: "/produits#briquettes", label: "Briquettes de biomasse" },
      { href: "/produits#matières-recyclables", label: "Matières recyclables" },
    ],
  },
  { href: "/processus", label: "Processus" },
  { href: "/equipe", label: "Équipe" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      aria-label="Basculer le thème"
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 border"
      style={{
        background: theme === "dark" ? "rgba(201,168,76,0.1)" : "rgba(45,106,47,0.1)",
        borderColor: theme === "dark" ? "rgba(201,168,76,0.25)" : "rgba(45,106,47,0.25)",
        color: theme === "dark" ? "#C9A84C" : "#2D6A2F",
      }}
    >
      {theme === "dark" ? (
        /* Sun icon */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        /* Moon icon */
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = theme === "light";

  const navBg = scrolled
    ? isLight
      ? "rgba(245,250,245,0.97)"
      : "rgba(7,26,9,0.97)"
    : isLight
      ? "rgba(245,250,245,0.85)"
      : "rgba(7,26,9,0.85)";

  const topBarBg = isLight ? "rgba(224,240,224,0.8)" : "rgba(13,43,16,0.6)";
  const topBarText = isLight ? "#2D6A2F" : "#7EC47F";
  const linkColor = isLight ? "rgba(26,46,26,0.75)" : "rgba(212,232,212,0.8)";
  const linkHover = "#C9A84C";
  const dropdownBg = isLight ? "#F5FAF5" : "#071A09";
  const dropdownBorder = isLight ? "rgba(45,106,47,0.25)" : "rgba(45,106,47,0.35)";
  const dropdownText = isLight ? "rgba(26,46,26,0.75)" : "rgba(184,212,184,0.8)";
  const mobileBg = isLight ? "rgba(245,250,245,0.98)" : "rgba(7,26,9,0.98)";
  const mobileBorder = isLight ? "rgba(45,106,47,0.2)" : "rgba(45,106,47,0.25)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: navBg,
        backdropFilter: "blur(12px)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.15)" : "none",
        borderBottom: scrolled ? `1px solid ${isLight ? "rgba(45,106,47,0.15)" : "rgba(45,106,47,0.2)"}` : "none",
      }}
    >
      {/* Top bar */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 text-xs border-b"
        style={{ background: topBarBg, color: topBarText, borderColor: isLight ? "rgba(45,106,47,0.15)" : "rgba(45,106,47,0.2)" }}>
        <div className="flex items-center gap-2">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          Abidjan, Côte d&apos;Ivoire
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+2250788215536" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
            </svg>
            +225 07 88 21 55 36
          </a>
          <a href="mailto:contact@cocodorbio.ci" className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            contact@cocodorbio.ci
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#C9A84C]/20 transition-all duration-200 group-hover:ring-[#C9A84C]/50"
            style={{ flexShrink: 0 }}>
            <Image
              src="/images/logo.jpg"
              alt="COCO D'OR BIO"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="leading-tight">
            <span className="block font-bold text-base tracking-wide"
              style={{ fontFamily: "Playfair Display, serif", color: "#C9A84C" }}>
              COCO D&apos;OR BIO
            </span>
            <span className="block text-[10px] tracking-widest uppercase"
              style={{ color: isLight ? "rgba(45,106,47,0.6)" : "rgba(126,196,127,0.7)" }}>
              Recyclage &amp; Revalorisation
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="relative"
              onMouseEnter={() => link.children && setActiveDropdown(link.href)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3.5 py-2 text-sm rounded-lg transition-colors duration-200 hover:text-[#C9A84C]"
                style={{ color: linkColor }}
              >
                {link.label}
                {link.children && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50 mt-0.5">
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </Link>

              {link.children && activeDropdown === link.href && (
                <div className="absolute top-full left-0 mt-1 w-56 rounded-xl overflow-hidden shadow-2xl shadow-black/20"
                  style={{ background: dropdownBg, border: `1px solid ${dropdownBorder}` }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex items-center gap-2.5 px-4 py-3 text-sm transition-colors border-b last:border-0 hover:text-[#C9A84C]"
                      style={{ color: dropdownText, borderColor: isLight ? "rgba(45,106,47,0.1)" : "rgba(45,106,47,0.1)" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#2D6A2F]" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/etude-technique"
            className="px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #D4B96A 100%)",
              color: "#071A09",
              boxShadow: "0 4px 20px rgba(201,168,76,0.25)",
            }}
          >
            Demander une étude
          </Link>
        </div>

        {/* Mobile right */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Ouvrir le menu"
          >
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#C9A84C] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{ background: mobileBg, borderTop: `1px solid ${mobileBorder}` }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm border-b transition-colors hover:text-[#C9A84C]"
                style={{ color: linkColor, borderColor: mobileBorder }}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 flex flex-col gap-0.5 mt-1 mb-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="py-1.5 text-xs flex items-center gap-2 transition-colors hover:text-[#C9A84C]"
                      style={{ color: isLight ? "rgba(45,106,47,0.6)" : "rgba(126,196,127,0.7)" }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#2D6A2F]" />
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/etude-technique"
            onClick={() => setMenuOpen(false)}
            className="mt-3 py-3 text-center text-sm font-semibold rounded-full"
            style={{ background: "linear-gradient(135deg, #C9A84C, #D4B96A)", color: "#071A09" }}
          >
            Demander une étude
          </Link>
        </div>
      </div>
    </header>
  );
}
