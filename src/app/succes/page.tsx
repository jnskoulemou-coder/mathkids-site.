"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getProduct } from "@/lib/products";

function SuccesContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const productId = searchParams.get("product");
  const [status, setStatus] = useState<"checking" | "paid" | "failed">("checking");

  useEffect(() => {
    if (!sessionId) {
      setStatus("failed");
      return;
    }
    fetch(`/api/verifier-session?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.paid) {
          if (productId === "maths-niveau-2") {
            localStorage.setItem("unlocked_maths_niveau2", "true");
          }
          setStatus("paid");
        } else {
          setStatus("failed");
        }
      })
      .catch(() => setStatus("failed"));
  }, [sessionId, productId]);

  const product = productId ? getProduct(productId) : undefined;

  if (status === "checking") {
    return <p className="text-center text-slate-600">Vérification du paiement...</p>;
  }

  if (status === "failed") {
    return (
      <div className="text-center">
        <p className="text-red-500 font-medium mb-4">
          Le paiement n&apos;a pas pu être vérifié.
        </p>
        <Link href="/" className="text-indigo-600 hover:underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center">
      <span className="text-5xl">✅</span>
      <h1 className="text-2xl font-bold mt-4 mb-2">Merci pour votre achat !</h1>
      {product?.type === "ebook" && product.fileUrl && (
        <a
          href={product.fileUrl}
          download
          className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-full hover:bg-indigo-700 transition mt-2 mb-4"
        >
          Télécharger l&apos;ebook
        </a>
      )}
      {product?.type === "app-unlock" && (
        <p className="text-slate-600 mb-4">
          Le niveau 2 est maintenant débloqué sur cet appareil.
        </p>
      )}
      <div>
        <Link href="/" className="text-indigo-600 hover:underline">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}

export default function SuccesPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <Suspense fallback={<p className="text-center text-slate-600">Chargement...</p>}>
        <SuccesContent />
      </Suspense>
    </div>
  );
}
