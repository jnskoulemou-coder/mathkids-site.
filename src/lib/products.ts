export type Product = {
  id: string;
  type: "app-unlock" | "ebook";
  name: string;
  description: string;
  priceCents: number;
  currency: string;
  fileUrl?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "maths-niveau-2",
    type: "app-unlock",
    name: "Maths Kids — Niveau 2",
    description: "Débloque les exercices niveau 2 (additions/soustractions jusqu'à 100, tables de multiplication).",
    priceCents: 199,
    currency: "eur",
  },
  {
    id: "ebook-astuces-calcul",
    type: "ebook",
    name: "50 astuces pour aider son enfant en calcul",
    description: "Un guide pratique pour parents, plein d'exercices et de méthodes ludiques.",
    priceCents: 299,
    currency: "eur",
    fileUrl: "/ebooks/50-astuces-calcul.pdf",
  },
  {
    id: "ebook-jeux-maths",
    type: "ebook",
    name: "20 jeux de maths à faire à la maison",
    description: "Des activités simples sans matériel pour rendre les maths amusantes au quotidien.",
    priceCents: 249,
    currency: "eur",
    fileUrl: "/ebooks/20-jeux-maths.pdf",
  },
  {
    id: "ebook-power-of-positivity",
    type: "ebook",
    name: "Power of Positivity",
    description: "Un guide pratique pour cultiver un état d'esprit positif au quotidien : gratitude, résilience, habitudes et petits rituels.",
    priceCents: 299,
    currency: "eur",
    fileUrl: "/ebooks/power-of-positivity.pdf",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
