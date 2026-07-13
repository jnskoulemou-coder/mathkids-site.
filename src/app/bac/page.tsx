import Link from "next/link";
import { BAC_COUNTRIES } from "@/lib/bacResources";
import BacSearch from "@/components/BacSearch";

export default function BacPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">
        BAC — Afrique francophone
      </h1>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-4">
        Une sélection de vraies sources en ligne pour réviser le
        Baccalauréat, classées par pays (Afrique de l&apos;Ouest et
        Afrique centrale).
      </p>
      <p className="text-center text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm max-w-2xl mx-auto mb-12">
        Ces liens renvoient vers des sites externes qui hébergent déjà les
        sujets — nous ne republions pas leur contenu. Couverture actuelle :
        9 pays. L&apos;extension à d&apos;autres pays et à
        l&apos;historique complet 2000-2026 est un travail en cours.
      </p>

      <BacSearch />

      <Link
        href="/bac/resoudre"
        className="block bg-indigo-600 text-white rounded-2xl p-6 text-center mb-12 hover:bg-indigo-700 transition"
      >
        <span className="text-2xl">🧠</span>
        <h2 className="text-lg font-semibold mt-2 mb-1">
          Faire résoudre un sujet
        </h2>
        <p className="text-sm text-indigo-100">
          Envoie une photo ou un PDF de n&apos;importe quel exercice et
          reçois une correction détaillée, étape par étape.
        </p>
      </Link>

      <div className="grid sm:grid-cols-2 gap-6">
        {BAC_COUNTRIES.map((c) => (
          <div
            key={c.country}
            className="bg-white rounded-2xl border border-slate-200 p-6"
          >
            <h2 className="text-lg font-semibold mb-4">
              <span className="mr-2">{c.flag}</span>
              {c.country}
            </h2>
            <ul className="space-y-3">
              {c.resources.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    {r.name} ↗
                  </a>
                  <p className="text-sm text-slate-600">{r.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
