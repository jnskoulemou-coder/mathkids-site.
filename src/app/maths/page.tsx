import Link from "next/link";

export default function MathsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">App Maths</h1>
      <p className="text-center text-slate-600 mb-12">
        Choisis ton niveau pour commencer à jouer !
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        <Link
          href="/maths/niveau1"
          className="bg-white rounded-2xl border border-slate-200 p-8 text-center hover:border-indigo-400 hover:shadow-lg transition"
        >
          <span className="text-5xl">🟢</span>
          <h2 className="text-xl font-semibold mt-4 mb-2">Niveau 1 — CP</h2>
          <p className="text-sm text-slate-600 mb-4">
            Additions et soustractions de 0 à 10. Gratuit.
          </p>
          <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            Gratuit
          </span>
        </Link>

        <Link
          href="/maths/niveau2"
          className="bg-white rounded-2xl border border-slate-200 p-8 text-center hover:border-indigo-400 hover:shadow-lg transition"
        >
          <span className="text-5xl">🔵</span>
          <h2 className="text-xl font-semibold mt-4 mb-2">Niveau 2 — CE1</h2>
          <p className="text-sm text-slate-600 mb-4">
            Additions/soustractions jusqu&apos;à 100 et tables de multiplication.
          </p>
          <span className="inline-block bg-amber-100 text-amber-700 text-xs font-medium px-3 py-1 rounded-full">
            1,99 € — déblocage unique
          </span>
        </Link>
      </div>
    </div>
  );
}
