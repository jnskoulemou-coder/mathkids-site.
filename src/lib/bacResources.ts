export type BacResource = {
  name: string;
  url: string;
  description: string;
};

export type BacCountry = {
  country: string;
  flag: string;
  resources: BacResource[];
};

// Sources vérifiées en ligne (juillet 2026). Ce sont des sites tiers qui
// hébergent déjà les sujets — on ne republie pas leur contenu, on y renvoie.
// Couverture actuelle : 6 pays d'Afrique de l'Ouest francophone. Étendre à
// tous les pays de la région (y compris anglophones/WAEC) et fiabiliser la
// couverture 2000-2026 complète est un travail de fond continu.
export const BAC_COUNTRIES: BacCountry[] = [
  {
    country: "Sénégal",
    flag: "🇸🇳",
    resources: [
      {
        name: "Examen.sn",
        url: "https://www.terminales.examen.sn/",
        description: "Sujets et corrigés officiels, séries S, L, G.",
      },
      {
        name: "Baccalaureat.sn",
        url: "https://baccalaureat.sn/",
        description: "Annales corrigées et quiz par série.",
      },
      {
        name: "COE Sénégal",
        url: "https://coesenegal.com/les-anciennes-epreuves-du-bac-corrections-a-telecharger-gratuitement-toutes-les-series/",
        description: "Anciennes épreuves + corrections, toutes séries.",
      },
    ],
  },
  {
    country: "Côte d'Ivoire",
    flag: "🇨🇮",
    resources: [
      {
        name: "Fomesoutra",
        url: "https://www.fomesoutra.com/bac/banque-de-sujets-du-bac-cote-divoire-series-acd",
        description: "Banque de sujets, séries A, C, D.",
      },
      {
        name: "SigMaths RCI",
        url: "https://www.sigmaths.net/bac2/RCI.php",
        description: "Sujets de mathématiques, toutes séries.",
      },
      {
        name: "Examens & Concours CIV",
        url: "https://www.examens-concours.net/sujets_corriges_examen.php?pays1=CIV",
        description: "Sujets BAC et BEPC, plusieurs matières.",
      },
    ],
  },
  {
    country: "Mali",
    flag: "🇲🇱",
    resources: [
      {
        name: "Épreuves et Corrigés — Mali",
        url: "https://epreuvesetcorriges.com/categories/mali",
        description: "Sujets et corrigés officiels, toutes matières.",
      },
      {
        name: "SigMaths Mali",
        url: "https://www.sigmaths.net/bac2/Mali.php",
        description: "Sujets de mathématiques, toutes séries.",
      },
    ],
  },
  {
    country: "Burkina Faso",
    flag: "🇧🇫",
    resources: [
      {
        name: "MathsTD",
        url: "https://mathstd.com/sujets-de-bac/",
        description: "Annales série D, 1er et 2nd tour, avec corrigés.",
      },
      {
        name: "SigMaths Burkina Faso",
        url: "https://www.sigmaths.net/bac2/Burkina_faso.php",
        description: "Sujets de mathématiques, toutes séries.",
      },
      {
        name: "Examens & Concours BFA",
        url: "https://examens-concours.net/sujets_corriges_examen.php?pays1=BFA",
        description: "Sujets BAC et BEPC, plusieurs matières.",
      },
    ],
  },
  {
    country: "Bénin",
    flag: "🇧🇯",
    resources: [
      {
        name: "Épreuves et Corrigés — Bénin",
        url: "https://epreuvesetcorriges.com/",
        description: "Portail régional : sujets et corrigés par pays et matière.",
      },
    ],
  },
  {
    country: "Togo",
    flag: "🇹🇬",
    resources: [
      {
        name: "Épreuves et Corrigés — Togo",
        url: "https://epreuvesetcorriges.com/categories/togo/examens/bac",
        description: "Sujets et corrigés officiels, toutes matières.",
      },
    ],
  },
  {
    country: "Guinée",
    flag: "🇬🇳",
    resources: [
      {
        name: "Épreuves et Corrigés — Guinée",
        url: "https://epreuvesetcorriges.com/categories/guinee/examens/bac",
        description: "Sujets et corrigés officiels, toutes matières.",
      },
      {
        name: "Exam224",
        url: "https://exam224.com/sujets/browse",
        description: "Sujets classés par examen, année et matière.",
      },
      {
        name: "Banque des Épreuves",
        url: "https://www.banquedesepreuves.com/index.php/component/edocman/guinee/sujets-et-corriges-du-bac-de-guinee",
        description: "Sujets et corrigés, années 2015-2021.",
      },
    ],
  },
  // Les deux pays suivants sont en Afrique centrale, pas de l'Ouest,
  // mais utilisent un système de Baccalauréat similaire.
  {
    country: "Tchad",
    flag: "🇹🇩",
    resources: [
      {
        name: "Tchad Éducation",
        url: "https://tchadeducation.com/",
        description: "Sujets toutes séries (A4, AB, C, D, E), bacs blancs.",
      },
      {
        name: "Sujets Bac Tchad (Fomesoutra)",
        url: "https://www.fomesoutra.com/sujets-cours/tout-sujets/secondaire-1/terminale-1/sujets-de-bac-etranger-mali-senegal-burkina-faso-cameroun-maroc/17605-sujets-bac-c-2024-pc-tchad-by-tehua",
        description: "Sujets série C, physique-chimie.",
      },
    ],
  },
  {
    country: "Congo (Brazzaville)",
    flag: "🇨🇬",
    resources: [
      {
        name: "Bac Congo",
        url: "http://maths.congo.free.fr/",
        description: "Annales séries C et D, sujets de 2004 à 2024.",
      },
      {
        name: "Épreuves et Corrigés — Congo",
        url: "https://epreuvesetcorriges.com/categories/congo",
        description: "Sujets et corrigés officiels, toutes matières.",
      },
      {
        name: "Ressources Amid Congo",
        url: "https://ressources.amidcongo.org/baccalaureat/",
        description: "Sujets et corrigés CEPE, BEPC et Baccalauréat.",
      },
    ],
  },
];
