"use client";

import { useEffect, useState } from "react";
import MathGame from "@/components/MathGame";

const UNLOCK_KEY = "unlocked_maths_niveau2";

export default function Niveau2Page() {
  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setUnlocked(localStorage.getItem(UNLOCK_KEY) === "true");
    setChecking(false);
  }, []);

  async function handleUnlock() {
    setLoadingCheckout(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: "maths-niveau-2" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur inconnue");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      setLoadingCheckout(false);
    }
  }

  if (checking) return null;

  if (!unlocked) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center">
        <span className="text-5xl">🔒</span>
        <h1 className="text-2xl font-bold mt-4 mb-2">Niveau 2 verrouillé</h1>
        <p className="text-slate-600 mb-6">
          Débloque les exercices niveau 2 (additions/soustractions jusqu&apos;à
          100, tables de multiplication) pour 1,99 €, une seule fois.
        </p>
        <button
          onClick={handleUnlock}
          disabled={loadingCheckout}
          className="bg-indigo-600 text-white font-medium px-6 py-3 rounded-full hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loadingCheckout ? "Redirection..." : "Débloquer — 1,99 €"}
        </button>
        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    );
  }

  return (
    <div className="px-4 py-16">
      <h1 className="text-2xl font-bold text-center mb-8">Niveau 2 — CE1</h1>
      <MathGame
        title="Niveau 2"
        minNum={0}
        maxNum={100}
        operations={["+", "-", "×"]}
        questionCount={10}
      />
    </div>
  );
}
