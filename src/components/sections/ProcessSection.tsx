import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: "📋",
    title: "Demande d'étude",
    desc: "Remplissez notre formulaire en ligne en 5 minutes. Décrivez votre besoin en collecte, assainissement ou réaménagement.",
    color: "#C9A84C",
  },
  {
    num: "02",
    icon: "📞",
    title: "Contact sous 48h",
    desc: "Notre équipe technique vous rappelle pour clarifier vos besoins et planifier une visite terrain.",
    color: "#52A855",
  },
  {
    num: "03",
    icon: "🔍",
    title: "Diagnostic terrain",
    desc: "Nos techniciens se déplacent sur site pour évaluer la situation, mesurer et cartographier la zone.",
    color: "#7EC47F",
  },
  {
    num: "04",
    icon: "📊",
    title: "Rapport & Devis",
    desc: "Vous recevez une étude technique complète avec recommandations, plan d'action et devis détaillé.",
    color: "#C9A84C",
  },
  {
    num: "05",
    icon: "🚀",
    title: "Mise en œuvre",
    desc: "Nos équipes interviennent selon le planning convenu, avec suivi régulier et reporting transparent.",
    color: "#52A855",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "var(--surface2)" }}>
      {/* Ligne de connexion */}
      <div className="absolute top-1/2 left-0 right-0 h-px hidden lg:block pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(45,106,47,0.3) 20%, rgba(45,106,47,0.3) 80%, transparent)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-label">Comment ça marche</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-bold text-[#FDF6E3] mt-4 mb-4">
            Notre processus
            <span className="block" style={{ color: "var(--vert-leaf)" }}>en 5 étapes</span>
          </h2>
          <p className="text-[#FDF6E3]/45 max-w-lg mx-auto text-base">
            De la demande initiale à la mise en œuvre, un accompagnement complet et transparent.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-6 relative">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {/* Connecteur */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+28px)] right-[-50%] h-px z-0"
                  style={{ background: `linear-gradient(to right, ${step.color}40, transparent)` }} />
              )}

              <div className="relative z-10 text-center">
                {/* Numéro + icône */}
                <div className="relative mx-auto w-16 h-16 mb-5">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl relative"
                    style={{ background: `${step.color}15`, border: `2px solid ${step.color}40` }}>
                    {step.icon}
                  </div>
                  {/* Numéro badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: step.color, color: "#0A0F0A" }}>
                    {step.num}
                  </div>
                </div>

                <h3 className="text-[#FDF6E3] font-semibold text-sm mb-2 group-hover:text-[#7EC47F] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#FDF6E3]/40 text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link href="/etude-technique" className="btn-primary">
            Commencer maintenant <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
