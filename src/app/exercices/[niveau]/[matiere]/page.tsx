import { notFound } from "next/navigation";
import { getLevel, getSubject, CALCUL_RANGE_BY_LEVEL } from "@/lib/levels";
import MathGame from "@/components/MathGame";
import ResoudreForm from "@/components/ResoudreForm";

export default async function MatierePage({
  params,
}: {
  params: Promise<{ niveau: string; matiere: string }>;
}) {
  const { niveau, matiere } = await params;
  const level = getLevel(niveau);
  if (!level) notFound();

  const subject = getSubject(level.cycle, matiere);
  if (!subject) notFound();

  if (subject.interactive) {
    const range = CALCUL_RANGE_BY_LEVEL[level.id];
    return (
      <div className="px-4 py-16">
        <h1 className="text-2xl font-bold text-center mb-8">
          {level.label} — {subject.label}
        </h1>
        <MathGame
          title={level.label}
          minNum={0}
          maxNum={range.maxNum}
          operations={range.operations}
          questionCount={10}
        />
      </div>
    );
  }

  return (
    <ResoudreForm
      title={`${level.label} — ${subject.label}`}
      subtitle={`Envoie une photo ou un PDF d'un exercice de ${subject.label.toLowerCase()} (niveau ${level.label}) et reçois une correction détaillée, étape par étape, en français.`}
    />
  );
}
