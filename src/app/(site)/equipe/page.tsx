import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Notre Équipe — COCO D'OR BIO",
  description: "Découvrez l'équipe passionnée derrière COCO D'OR BIO, entreprise ivoirienne de recyclage et revalorisation des déchets.",
};

const equipe = [
  {
    nom: "Kouamé Assi Bernard",
    poste: "Directeur Général & Fondateur",
    bio: "Ingénieur en environnement, 12 ans d'expérience dans la gestion des déchets en Afrique de l'Ouest. Fondateur de COCO D'OR BIO en 2018.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    linkedin: "#",
  },
  {
    nom: "Adjoua Marie-Claire",
    poste: "Directrice Technique",
    bio: "Ingénieure en génie civil, spécialisée en assainissement et réaménagement urbain. Pilote tous les projets techniques de l'entreprise.",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
    linkedin: "#",
  },
  {
    nom: "Konan Yves",
    poste: "Responsable Opérations",
    bio: "Logisticien expérimenté, coordonne les équipes de collecte sur le terrain. Garant de la qualité et de la ponctualité du service.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    linkedin: "#",
  },
  {
    nom: "Bamba Fatoumata",
    poste: "Responsable Valorisation",
    bio: "Chimiste de formation, supervise la production de charbon écologique et de compost. Obtenu la première certification du secteur en CI.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    linkedin: "#",
  },
  {
    nom: "Diallo Seydou",
    poste: "Responsable Commercial",
    bio: "Développe les partenariats avec les communes, mairies et entreprises. Présent sur tout le territoire ivoirien.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedin: "#",
  },
  {
    nom: "Koffi Ama",
    poste: "Chargée de Communication",
    bio: "Gère la présence digitale de COCO D'OR BIO et les actions de sensibilisation auprès des communautés locales.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    linkedin: "#",
  },
];

const valeurs = [
  {
    titre: "Impact local",
    desc: "Nous créons des emplois locaux et formons des équipes ivoiriennes aux métiers de l'environnement.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
  {
    titre: "Excellence technique",
    desc: "Nos ingénieurs et techniciens appliquent les meilleures pratiques internationales adaptées au contexte ivoirien.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80",
  },
  {
    titre: "Engagement durable",
    desc: "Chaque décision est prise en tenant compte de son impact environnemental et social sur le long terme.",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
  },
];

export default function EquipePage() {
  return (
    <div style={{ background: "var(--charbon)" }} className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
            alt="Équipe COCO D'OR BIO"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(7,26,9,0.85) 0%, rgba(7,26,9,0.7) 50%, var(--charbon) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <span className="section-label">Les personnes derrière la mission</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-6xl font-bold text-[#FDF6E3] mt-4 mb-6 leading-tight">
            Notre Équipe
          </h1>
          <p className="text-[#FDF6E3]/60 text-lg leading-relaxed max-w-2xl mx-auto">
            Des professionnels ivoiriens passionnés par l'environnement et déterminés
            à construire une Côte d'Ivoire plus propre et plus durable.
          </p>
        </div>
      </section>

      {/* Grille équipe */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((membre) => (
              <div key={membre.nom} className="card-dark overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={membre.img}
                    alt={membre.nom}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.85) 0%, transparent 50%)" }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[#FDF6E3] font-bold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {membre.nom}
                    </p>
                    <p className="text-[#C9A84C] text-xs font-semibold mt-0.5">{membre.poste}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-[#FDF6E3]/55 text-sm leading-relaxed">{membre.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-label">Ce qui nous anime</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-3">
              Nos valeurs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {valeurs.map((v) => (
              <div key={v.titre} className="group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5">
                  <Image src={v.img} alt={v.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.75) 0%, transparent 50%)" }} />
                </div>
                <h3 className="text-[#FDF6E3]/90 font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {v.titre}
                </h3>
                <p className="text-[#FDF6E3]/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres RH */}
      <section className="py-16 border-y border-[#2D6A2F]/20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "30+", label: "Collaborateurs" },
            { val: "100%", label: "Ivoiriens" },
            { val: "6 ans", label: "D'expérience" },
            { val: "15", label: "Postes ouverts" },
          ].map((s) => (
            <div key={s.label}>
              <p className="stat-number text-4xl font-bold mb-1">{s.val}</p>
              <p className="text-[#7EC47F]/60 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rejoindre */}
      <section className="py-20" style={{ background: "var(--vert-fonce)" }}>
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="section-label">Rejoignez-nous</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-3xl md:text-4xl font-bold text-[#FDF6E3] mt-4 mb-5 leading-tight">
              Construisez votre carrière<br />dans l'environnement
            </h2>
            <p className="text-[#FDF6E3]/55 text-base leading-relaxed mb-8">
              COCO D'OR BIO recrute régulièrement des talents motivés par l'impact environnemental.
              Chauffeurs, techniciens, commerciaux, ingénieurs — nous avons des opportunités pour vous.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/actualites/recrutement-2025" className="btn-primary">
                Voir les offres <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                Candidature spontanée
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
              alt="Rejoindre l'équipe COCO D'OR BIO"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,26,9,0.5) 0%, transparent 60%)" }} />
          </div>
        </div>
      </section>
    </div>
  );
}
