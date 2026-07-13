import MathGame from "@/components/MathGame";

export default function Niveau1Page() {
  return (
    <div className="px-4 py-16">
      <h1 className="text-2xl font-bold text-center mb-8">Niveau 1 — CP</h1>
      <MathGame
        title="Niveau 1"
        minNum={0}
        maxNum={10}
        operations={["+", "-"]}
        questionCount={10}
      />
    </div>
  );
}
