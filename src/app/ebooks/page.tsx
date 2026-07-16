import { EBOOKS } from "@/lib/products";

export default function EbooksPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-2">
        Ebooks gratuits
      </h1>
      <p className="text-center text-slate-600 mb-12">
        Des guides pratiques et gratuits pour aider votre enfant à progresser
        en calcul.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {EBOOKS.map((ebook) => (
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
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-700">
                Gratuit
              </span>
              <a
                href={ebook.fileUrl}
                download
                className="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Télécharger
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
