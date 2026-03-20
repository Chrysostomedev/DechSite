import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Assainissement — COCO D'OR BIO",
  description: "Études et travaux d'assainissement sur mesure pour communes, villages et zones industrielles en Côte d'Ivoire.",
};

const points = [
  "Étude technique préalable gratuite",
  "Diagnostic de l'existant et cartographie",
  "Conception de systèmes de drainage et traitement",
  "Travaux d'installation et de réhabilitation",
  "Formation des équipes locales à la maintenance",
  "Suivi et rapports post-intervention",
];

const stats = [
  { val: "4", label: "Villages pilotes" },
  { val: "3", label: "Régions couvertes" },
  { val: "100%", label: "Études gratuites" },
  { val: "6 sem.", label: "Délai moyen" },
];

export default function AssainissementPage() {
  return (
    <div style={{ background: "var(--charbon)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80"
            alt="Assainissement"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #071A09 40%, rgba(7,26,9,0.5) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, var(--charbon), transparent)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
          <Link href="/services" className="inline-flex items-center gap-2 text-[#7EC47F]/60 hover:text-[#C9A84C] text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Tous les services
          </Link>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-5"
            style={{ background: "rgba(58,126,196,0.2)", border: "1px solid rgba(58,126,196,0.35)", color: "#7EB8F0" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3A7EC4]" />
            Service — Assainissement
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] leading-tight mb-6 max-w-3xl">
            Assainissement
            <span className="block" style={{ color: "#7EB8F0" }}>sur mesure & durable</span>
          </h1>
          <p className="text-[#FDF6E3]/60 text-lg leading-relaxed max-w-2xl mb-10">
            Études techniques complètes et mise en œuvre de solutions d'assainissement adaptées
            à chaque contexte local, de l'analyse initiale à la mise en service.
          </p>
          <Link href="/etude-technique" className="btn-primary">
            Demander une étude <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-[#2D6A2F]/20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="stat-number text-4xl font-bold mb-1">{s.val}</p>
              <p className="text-[#7EC47F]/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">Notre approche</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-4 mb-6 leading-tight">
              Du diagnostic à la<br />mise en service
            </h2>
            <p className="text-[#FDF6E3]/55 text-base leading-relaxed mb-8">
              Chaque projet d'assainissement est unique. Nos ingénieurs réalisent d'abord
              un diagnostic complet avant de proposer une solution adaptée à votre budget et contexte.
            </p>
            <ul className="space-y-3.5 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[#FDF6E3]/70 text-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "#3A7EC4" }} />
                  {p}
                </li>
              ))}
            </ul>
            <Link href="/etude-technique" className="btn-primary">
              Obtenir un diagnostic gratuit <ArrowRight size={16} />
            </Link>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80"
              alt="Travaux d'assainissement"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.6) 0%, transparent 60%)" }} />
            <div className="absolute bottom-4 left-4 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: "rgba(58,126,196,0.25)", border: "1px solid rgba(58,126,196,0.4)", color: "#7EB8F0" }}>
              Intervention terrain
            </div>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-label">Nos réalisations</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl font-bold text-[#FDF6E3] mt-3">
              Projets d'assainissement
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80", label: "Zone rurale — Lagunes" },
              { src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80", label: "Travaux de drainage" },
              { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80", label: "Suivi post-intervention" },
            ].map((img) => (
              <div key={img.label} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                <Image src={img.src} alt={img.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.7) 0%, transparent 50%)" }} />
                <p className="absolute bottom-3 left-3 text-[#FDF6E3]/80 text-xs font-medium">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: "var(--vert-fonce)" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mb-4">
            Un projet d'assainissement ?
          </h2>
          <p className="text-[#FDF6E3]/55 mb-8">
            Nos ingénieurs se déplacent gratuitement pour évaluer votre situation et vous proposer une solution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/etude-technique" className="btn-primary">Demander une étude <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-outline">Voir tous les services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
