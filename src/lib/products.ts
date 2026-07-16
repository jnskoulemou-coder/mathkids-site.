export type Ebook = {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
};

export const EBOOKS: Ebook[] = [
  {
    id: "ebook-astuces-calcul",
    name: "50 astuces pour aider son enfant en calcul",
    description: "Un guide pratique pour parents, plein d'exercices et de méthodes ludiques.",
    fileUrl: "/ebooks/50-astuces-calcul.pdf",
  },
  {
    id: "ebook-jeux-maths",
    name: "20 jeux de maths à faire à la maison",
    description: "Des activités simples sans matériel pour rendre les maths amusantes au quotidien.",
    fileUrl: "/ebooks/20-jeux-maths.pdf",
  },
  {
    id: "ebook-power-of-positivity",
    name: "Power of Positivity",
    description: "Un guide pratique pour cultiver un état d'esprit positif au quotidien : gratitude, résilience, habitudes et petits rituels.",
    fileUrl: "/ebooks/power-of-positivity.pdf",
  },
];
