import Link from "next/link";

export default function AnnulePage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center">
      <span className="text-5xl">↩️</span>
      <h1 className="text-2xl font-bold mt-4 mb-2">Paiement annulé</h1>
      <p className="text-slate-600 mb-6">
        Aucun montant n&apos;a été débité. Tu peux réessayer à tout moment.
      </p>
      <Link href="/" className="text-indigo-600 hover:underline">
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
