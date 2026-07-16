import Link from "next/link";
import { LEVELS, CYCLE_LABELS, type Cycle } from "@/lib/levels";

const CYCLES: Cycle[] = ["primaire", "college", "lycee"];

export default function ExercicesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">Exercices</h1>
      <p className="text-center text-slate-600 mb-12">
        Choisis ton niveau, gratuit du CP à la Terminale.
      </p>

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
    </div>
  );
}
