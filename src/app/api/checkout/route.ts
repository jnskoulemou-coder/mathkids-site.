import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getProduct } from "@/lib/products";

export async function POST(request: Request) {
  const { productId } = await request.json();
  const product = getProduct(productId);

  if (!product) {
    return NextResponse.json({ error: "Produit inconnu" }, { status: 404 });
  }

  let stripe;
  try {
    stripe = getStripe();
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur Stripe" },
      { status: 500 }
    );
  }

  const origin = request.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: product.currency,
          product_data: { name: product.name, description: product.description },
          unit_amount: product.priceCents,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/succes?session_id={CHECKOUT_SESSION_ID}&product=${product.id}`,
    cancel_url: `${origin}/annule`,
  });

  return NextResponse.json({ url: session.url });
}
