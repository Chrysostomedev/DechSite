export type TypeEtude = "collecte" | "assainissement" | "reamenagement" | "valorisation" | "autre";
export type StatutDemande = "nouvelle" | "en_cours" | "traitee" | "archivee";

export type DemandeEtude = {
  id: string;
  nom: string;
  organisation: string;
  typeOrganisation: "commune" | "village" | "entreprise" | "particulier" | "ong";
  email: string;
  telephone: string;
  zone: string;
  typeEtude: TypeEtude;
  description: string;
  superficie?: string;
  population?: string;
  urgence: "normale" | "urgente" | "tres_urgente";
  statut: StatutDemande;
  dateCreation: string;
  dateTraitement?: string;
  noteAdmin?: string;
};

// Données statiques de démonstration
export const demandesEtude: DemandeEtude[] = [
  {
    id: "DE-001",
    nom: "Kouamé N'Guessan",
    organisation: "Mairie de Bingerville",
    typeOrganisation: "commune",
    email: "mairie@bingerville.ci",
    telephone: "+225 07 12 34 56",
    zone: "Bingerville, Abidjan",
    typeEtude: "assainissement",
    description: "Notre commune souffre d'un problème chronique d'assainissement dans les quartiers bas. Nous avons besoin d'une étude complète pour mettre en place un système de collecte et de traitement des eaux usées.",
    superficie: "45 km²",
    population: "120 000 habitants",
    urgence: "urgente",
    statut: "en_cours",
    dateCreation: "2025-03-05",
    noteAdmin: "RDV planifié le 15/03. Équipe terrain mobilisée.",
  },
  {
    id: "DE-002",
    nom: "Bamba Coulibaly",
    organisation: "Village de Koffikro",
    typeOrganisation: "village",
    email: "chef.koffikro@gmail.com",
    telephone: "+225 05 98 76 54",
    zone: "Koffikro, Région des Lagunes",
    typeEtude: "collecte",
    description: "Notre village de 3000 habitants n'a aucun système de collecte des ordures. Les déchets s'accumulent et créent des problèmes sanitaires graves, surtout en saison des pluies.",
    population: "3 000 habitants",
    urgence: "tres_urgente",
    statut: "nouvelle",
    dateCreation: "2025-03-12",
  },
  {
    id: "DE-003",
    nom: "Aya Touré",
    organisation: "Groupe Agro-CI",
    typeOrganisation: "entreprise",
    email: "aya.toure@agroCI.com",
    telephone: "+225 27 20 30 40",
    zone: "Zone Industrielle de Yopougon",
    typeEtude: "valorisation",
    description: "Notre usine génère 2 tonnes de déchets organiques par jour. Nous cherchons une solution de valorisation pour réduire nos coûts d'élimination et créer de la valeur.",
    superficie: "2 ha",
    urgence: "normale",
    statut: "traitee",
    dateCreation: "2025-02-10",
    dateTraitement: "2025-02-25",
    noteAdmin: "Proposition commerciale envoyée. Contrat en négociation.",
  },
  {
    id: "DE-004",
    nom: "Sékou Diallo",
    organisation: "Mairie de Daloa",
    typeOrganisation: "commune",
    email: "technique@mairie-daloa.ci",
    telephone: "+225 34 56 78 90",
    zone: "Daloa, Haut-Sassandra",
    typeEtude: "reamenagement",
    description: "Réaménagement du centre-ville de Daloa : création d'espaces verts, installation de poubelles publiques, réorganisation de la collecte dans le marché central.",
    superficie: "12 km²",
    population: "280 000 habitants",
    urgence: "normale",
    statut: "nouvelle",
    dateCreation: "2025-03-14",
  },
  {
    id: "DE-005",
    nom: "Marie-Claire Assi",
    organisation: "ONG Environnement CI",
    typeOrganisation: "ong",
    email: "contact@environnement-ci.org",
    telephone: "+225 07 65 43 21",
    zone: "San-Pédro, Bas-Sassandra",
    typeEtude: "assainissement",
    description: "Étude d'assainissement pour 5 villages côtiers autour de San-Pédro. Problèmes de déchets marins et de pollution des lagunes.",
    urgence: "urgente",
    statut: "en_cours",
    dateCreation: "2025-02-28",
    noteAdmin: "Étude terrain en cours. Rapport prévu fin mars.",
  },
];

export const typeEtudeLabels: Record<TypeEtude, string> = {
  collecte: "Collecte de Déchets",
  assainissement: "Assainissement",
  reamenagement: "Réaménagement",
  valorisation: "Valorisation / Recyclage",
  autre: "Autre",
};

export const urgenceLabels: Record<DemandeEtude["urgence"], string> = {
  normale: "Normale",
  urgente: "Urgente",
  tres_urgente: "Très urgente",
};

export const urgenceColors: Record<DemandeEtude["urgence"], string> = {
  normale: "#2D6A2F",
  urgente: "#E08B2A",
  tres_urgente: "#D94040",
};

export const statutLabels: Record<StatutDemande, string> = {
  nouvelle: "Nouvelle",
  en_cours: "En cours",
  traitee: "Traitée",
  archivee: "Archivée",
};

export const statutColors: Record<StatutDemande, string> = {
  nouvelle: "#3A7EC4",
  en_cours: "#E08B2A",
  traitee: "#2D9E5A",
  archivee: "#7A6040",
};
