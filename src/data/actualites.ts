export type Actualite = {
  id: string;
  titre: string;
  slug: string;
  categorie: "collecte" | "assainissement" | "reamenagement" | "valorisation" | "entreprise";
  resume: string;
  contenu: string;
  date: string;
  auteur: string;
  image: string; // URL image Unsplash
  publie: boolean;
  tags: string[];
};

export const actualites: Actualite[] = [
  {
    id: "1",
    titre: "COCO D'OR BIO signe un partenariat avec la commune de Yopougon",
    slug: "partenariat-yopougon-2025",
    categorie: "collecte",
    resume: "Un accord de collecte hebdomadaire des déchets ménagers couvre désormais 3 quartiers de Yopougon, touchant plus de 5 000 foyers.",
    contenu: `COCO D'OR BIO a officialisé un partenariat stratégique avec la mairie de Yopougon pour la collecte régulière des déchets ménagers dans les quartiers de Selmer, Wassakara et Niangon.

Ce contrat, d'une durée initiale de 12 mois renouvelable, prévoit deux passages hebdomadaires par quartier, avec des camions équipés et des équipes formées.

"C'est une fierté pour nous de contribuer à l'assainissement de Yopougon, l'une des communes les plus peuplées d'Abidjan", a déclaré le directeur général de COCO D'OR BIO.

Les déchets collectés seront triés et valorisés : les matières organiques transformées en compost, les plastiques revendus aux recycleurs partenaires, et les coques de coco converties en charbon écologique.`,
    date: "2025-03-10",
    auteur: "Équipe COCO D'OR BIO",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    publie: true,
    tags: ["partenariat", "Yopougon", "collecte", "Abidjan"],
  },
  {
    id: "2",
    titre: "Lancement de notre programme d'assainissement rural en région des Lagunes",
    slug: "assainissement-rural-lagunes-2025",
    categorie: "assainissement",
    resume: "COCO D'OR BIO étend ses activités aux zones rurales avec un programme pilote dans 4 villages de la région des Lagunes.",
    contenu: `Dans le cadre de son expansion hors d'Abidjan, COCO D'OR BIO lance un programme pilote d'assainissement dans 4 villages de la région des Lagunes : Tiagba, Jacqueville, Braffedon et Ahua.

Ce programme comprend une étude technique préalable, la mise en place de points de collecte, la sensibilisation des populations et un suivi mensuel.

Financé en partie par un fonds d'impact local, ce projet vise à démontrer que l'économie circulaire peut fonctionner en milieu rural ivoirien.

Les résultats du programme pilote seront publiés en fin d'année et serviront de base pour une extension à d'autres régions.`,
    date: "2025-02-20",
    auteur: "Direction Technique",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    publie: true,
    tags: ["assainissement", "rural", "Lagunes", "programme pilote"],
  },
  {
    id: "3",
    titre: "Notre charbon écologique certifié : une première en Côte d'Ivoire",
    slug: "certification-charbon-ecologique-2025",
    categorie: "valorisation",
    resume: "COCO D'OR BIO obtient la certification de son charbon écologique issu de coques de coco, une première pour une entreprise ivoirienne du secteur.",
    contenu: `Après 18 mois de travail et de tests en laboratoire, COCO D'OR BIO a obtenu la certification de son charbon écologique produit à partir de coques de noix de coco.

Cette certification atteste de la qualité du produit, de son pouvoir calorifique supérieur au charbon de bois traditionnel, et de son impact environnemental réduit.

"C'est une étape majeure pour nous. Cette certification ouvre des portes : restaurants, hôtels, exportation sous-régionale", explique le responsable production.

Le charbon COCO D'OR BIO est désormais disponible en sacs de 5kg, 10kg et 25kg, livrés à domicile sur Abidjan.`,
    date: "2025-01-15",
    auteur: "Équipe Production",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80",
    publie: true,
    tags: ["certification", "charbon", "valorisation", "qualité"],
  },
  {
    id: "4",
    titre: "Réaménagement du marché de Koumassi : COCO D'OR BIO à l'oeuvre",
    slug: "reamenagement-marche-koumassi",
    categorie: "reamenagement",
    resume: "En partenariat avec la mairie de Koumassi, notre équipe a réaménagé la zone de gestion des déchets du grand marché, réduisant les nuisances de 70%.",
    contenu: `Le grand marché de Koumassi souffrait depuis des années d'une gestion anarchique des déchets. COCO D'OR BIO a été mandaté pour concevoir et mettre en oeuvre un plan de réaménagement complet.

En 6 semaines d'intervention, nos équipes ont :
- Installé 12 bacs de tri sélectif aux points stratégiques
- Créé une zone de transit sécurisée pour les déchets organiques
- Formé 30 commerçants aux bonnes pratiques de tri
- Mis en place un système de collecte quotidienne

Le résultat : une réduction de 70% des déchets sauvages et une amélioration notable des conditions sanitaires pour les commerçants et clients.`,
    date: "2024-12-05",
    auteur: "Direction Opérations",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    publie: true,
    tags: ["réaménagement", "Koumassi", "marché", "tri sélectif"],
  },
  {
    id: "5",
    titre: "COCO D'OR BIO recrute : 15 postes ouverts pour 2025",
    slug: "recrutement-2025",
    categorie: "entreprise",
    resume: "Dans le cadre de notre expansion, nous ouvrons 15 postes : chauffeurs, agents de collecte, techniciens et commerciaux. Candidatures ouvertes.",
    contenu: `COCO D'OR BIO entre dans une phase de croissance accélérée et recrute activement pour renforcer ses équipes.

Postes disponibles :
- 5 chauffeurs de camion (permis C requis)
- 4 agents de collecte et tri
- 2 techniciens en valorisation des déchets
- 2 commerciaux terrain (Abidjan et intérieur)
- 1 responsable communication digitale
- 1 comptable

Nous privilégions les candidats locaux, motivés par l'impact environnemental et social. Une formation interne est assurée pour tous les postes opérationnels.

Envoyez votre CV à recrutement@cocodorbio.ci ou via WhatsApp au +225 07 88 21 55 36.`,
    date: "2025-03-01",
    auteur: "RH COCO D'OR BIO",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    publie: true,
    tags: ["recrutement", "emploi", "Abidjan", "opportunité"],
  },
  {
    id: "6",
    titre: "Étude technique : réaménagement de la commune de Grand-Bassam",
    slug: "etude-grand-bassam-2025",
    categorie: "reamenagement",
    resume: "COCO D'OR BIO a remis son rapport d'étude technique pour le réaménagement de la zone côtière de Grand-Bassam, patrimoine UNESCO.",
    contenu: `Grand-Bassam, classée au patrimoine mondial de l'UNESCO, fait face à des défis croissants de gestion des déchets, notamment sur sa zone côtière touristique.

COCO D'OR BIO a conduit une étude technique de 3 mois, incluant des relevés terrain, des consultations avec les autorités locales et les communautés de pêcheurs.

Le rapport final recommande :
- La création de 3 points de collecte stratégiques
- Un système de collecte adapté aux contraintes touristiques
- Un programme de sensibilisation pour les hôtels et restaurants
- Un partenariat avec les pêcheurs pour la collecte des déchets marins

Ce projet, s'il est validé, représenterait l'intervention la plus emblématique de COCO D'OR BIO à ce jour.`,
    date: "2025-02-28",
    auteur: "Bureau d'Études",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    publie: false,
    tags: ["Grand-Bassam", "étude technique", "tourisme", "UNESCO"],
  },
];

export const categorieLabels: Record<Actualite["categorie"], string> = {
  collecte: "Collecte",
  assainissement: "Assainissement",
  reamenagement: "Réaménagement",
  valorisation: "Valorisation",
  entreprise: "Entreprise",
};

export const categorieColors: Record<Actualite["categorie"], string> = {
  collecte: "#2D6A2F",
  assainissement: "#3A7EC4",
  reamenagement: "#9B5E30",
  valorisation: "#52A855",
  entreprise: "#C9A84C",
};
