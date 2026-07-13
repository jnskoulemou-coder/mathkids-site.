import Link from "next/link";

const cards = [
  {
    href: "/maths",
    emoji: "🧮",
    title: "App Maths pour enfants",
    description:
      "Exercices d'addition, soustraction et multiplication pour le niveau 1 (CP) et niveau 2 (CE1), en français, avec étoiles et progression.",
    cta: "Jouer maintenant",
  },
  {
    href: "/ebooks",
    emoji: "📚",
    title: "Boutique Ebooks",
    description:
      "Des guides pratiques pour aider votre enfant en calcul, avec des astuces et des jeux à faire à la maison.",
    cta: "Voir les ebooks",
  },
  {
    href: "/bac",
    emoji: "🎓",
    title: "BAC Afrique de l'Ouest",
    description:
      "Sujets d'examens du Baccalauréat pour réviser, classés par pays, année et série.",
    cta: "Réviser le BAC",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Apprendre, réviser, progresser
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Un site multi-fonction : une app de maths ludique pour les enfants,
          des ebooks pratiques pour les parents, et des ressources de
          révision pour le Baccalauréat en Afrique de l&apos;Ouest.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-3 hover:border-indigo-400 hover:shadow-lg transition"
          >
            <span className="text-4xl">{card.emoji}</span>
            <h2 className="text-xl font-semibold text-slate-900">
              {card.title}
            </h2>
            <p className="text-sm text-slate-600 flex-1">
              {card.description}
            </p>
            <span className="text-indigo-600 font-medium text-sm group-hover:underline">
              {card.cta} →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
