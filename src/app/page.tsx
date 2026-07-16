import Link from "next/link";
import { LEVELS, CYCLE_LABELS, type Cycle } from "@/lib/levels";

const CYCLES: Cycle[] = ["primaire", "college", "lycee"];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
          Tu veux réviser quel niveau ? — 100% gratuit
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Choisis ton niveau ci-dessous. Notre IA joue le rôle du professeur :
          méthodes de calcul, exercices corrigés dans toutes les matières, et
          des ebooks gratuits pour t&apos;accompagner.
        </p>
      </div>

      {CYCLES.map((cycle) => (
        <div key={cycle} className="mb-10">
          <h2 className="text-lg font-semibold text-slate-700 mb-4">
            {CYCLE_LABELS[cycle]}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {LEVELS.filter((l) => l.cycle === cycle).map((level) => (
              <Link
                key={level.id}
                href={`/exercices/${level.id}`}
                className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:border-indigo-400 hover:shadow-lg transition"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {level.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="grid sm:grid-cols-2 gap-6 mt-16">
        <Link
          href="/ebooks"
          className="group bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-3 hover:border-indigo-400 hover:shadow-lg transition"
        >
          <span className="text-4xl">📚</span>
          <h2 className="text-xl font-semibold text-slate-900">
            Ebooks gratuits
          </h2>
          <p className="text-sm text-slate-600 flex-1">
            Des guides pratiques et gratuits pour accompagner un enfant en
            calcul, avec des astuces et des jeux à faire à la maison.
          </p>
          <span className="text-indigo-600 font-medium text-sm group-hover:underline">
            Voir les ebooks →
          </span>
        </Link>

        <Link
          href="/bac"
          className="group bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-3 hover:border-indigo-400 hover:shadow-lg transition"
        >
          <span className="text-4xl">🎓</span>
          <h2 className="text-xl font-semibold text-slate-900">
            Archives BAC
          </h2>
          <p className="text-sm text-slate-600 flex-1">
            Sujets d&apos;examens du Baccalauréat pour réviser, classés par
            pays, année et série.
          </p>
          <span className="text-indigo-600 font-medium text-sm group-hover:underline">
            Réviser le BAC →
          </span>
        </Link>
      </div>
    </div>
  );
}
