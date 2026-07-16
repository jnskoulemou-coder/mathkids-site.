import Link from "next/link";
import { notFound } from "next/navigation";
import { getLevel, SUBJECTS_BY_CYCLE } from "@/lib/levels";

export default async function NiveauPage({
  params,
}: {
  params: Promise<{ niveau: string }>;
}) {
  const { niveau } = await params;
  const level = getLevel(niveau);
  if (!level) notFound();

  const subjects = SUBJECTS_BY_CYCLE[level.cycle];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">{level.label}</h1>
      <p className="text-center text-slate-600 mb-12">
        Choisis une matière.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/exercices/${level.id}/${subject.id}`}
            className="bg-white rounded-2xl border border-slate-200 p-6 text-center hover:border-indigo-400 hover:shadow-lg transition"
          >
            <span className="text-4xl">{subject.emoji}</span>
            <h2 className="text-lg font-semibold mt-3">{subject.label}</h2>
            <span className="inline-block mt-3 text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
              Gratuit
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
