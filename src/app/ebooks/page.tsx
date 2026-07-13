"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/products";

export default function EbooksPage() {
  const ebooks = PRODUCTS.filter((p) => p.type === "ebook");
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleBuy(productId: string) {
    setLoadingId(productId);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur inconnue");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
      setLoadingId(null);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">Boutique Ebooks</h1>
      <p className="text-center text-slate-600 mb-12">
        Des guides pratiques pour aider votre enfant à progresser en calcul.
      </p>

      {error && (
        <p className="text-red-500 text-sm text-center mb-6">{error}</p>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {ebooks.map((ebook) => (
          <div
            key={ebook.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-3"
          >
            <span className="text-4xl">📘</span>
            <h2 className="text-lg font-semibold">{ebook.name}</h2>
            <p className="text-sm text-slate-600 flex-1">
              {ebook.description}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span className="font-bold text-indigo-600">
                {(ebook.priceCents / 100).toFixed(2)} €
              </span>
              <button
                onClick={() => handleBuy(ebook.id)}
                disabled={loadingId === ebook.id}
                className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-indigo-700 transition disabled:opacity-50"
              >
                {loadingId === ebook.id ? "Redirection..." : "Acheter"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
