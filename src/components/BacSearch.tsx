"use client";

import { useState } from "react";
import { BAC_COUNTRIES } from "@/lib/bacResources";

function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: currentYear - 1999 }, (_, i) => currentYear - i);

export default function BacSearch() {
  const [country, setCountry] = useState("Toutes");
  const [year, setYear] = useState(String(currentYear));
  const [subject, setSubject] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const countries =
      country === "Toutes"
        ? BAC_COUNTRIES
        : BAC_COUNTRIES.filter((c) => c.country === country);

    const domains = Array.from(
      new Set(countries.flatMap((c) => c.resources.map((r) => domainOf(r.url))))
    ).filter(Boolean);

    const siteFilter = domains.map((d) => `site:${d}`).join(" OR ");
    const queryParts = [
      "bac",
      country !== "Toutes" ? country : "",
      year,
      subject,
      "sujet pdf",
      siteFilter ? `(${siteFilter})` : "",
    ].filter(Boolean);

    const url = `https://www.google.com/search?q=${encodeURIComponent(queryParts.join(" "))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white rounded-2xl border border-slate-200 p-6 mb-12 grid sm:grid-cols-4 gap-3 items-end"
    >
      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-500">Pays</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
        >
          <option value="Toutes">Tous les pays</option>
          {BAC_COUNTRIES.map((c) => (
            <option key={c.country} value={c.country}>
              {c.flag} {c.country}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-500">Année</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
        >
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-medium text-slate-500">
          Matière (optionnel)
        </label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="ex: maths, série D..."
          className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        className="bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
      >
        Rechercher un sujet
      </button>
    </form>
  );
}
