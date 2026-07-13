"use client";

import { useState } from "react";

export default function ResoudrePage() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [solution, setSolution] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setError(null);
    setSolution(null);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/resoudre", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur inconnue");
      setSolution(data.solution);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">
        Faire résoudre un sujet
      </h1>
      <p className="text-center text-slate-600 mb-10">
        Envoie une photo ou un PDF d&apos;un exercice (n&apos;importe quel
        sujet) et reçois une correction détaillée, étape par étape, en
        français.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col items-center gap-4"
      >
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp,application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="text-sm"
        />
        {file && <p className="text-sm text-slate-500">{file.name}</p>}
        <button
          type="submit"
          disabled={!file || loading}
          className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-full hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Résolution en cours..." : "Résoudre"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      {solution && (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 mt-8">
          <h2 className="font-semibold mb-4">Correction</h2>
          <div className="whitespace-pre-wrap leading-relaxed text-slate-800">
            {solution}
          </div>
        </div>
      )}
    </div>
  );
}
