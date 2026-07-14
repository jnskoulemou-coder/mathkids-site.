import { NextResponse } from "next/server";
import { getAnthropic } from "@/lib/anthropic";

const SYSTEM_PROMPT = `Tu es l'assistant conversationnel de Jonas AI (aussi connu sous le nom MathKids & Cie), un site qui propose trois choses :

1. Une app de maths gratuite et ludique pour enfants (niveau 1 CP gratuit, niveau 2 CE1 à 1,99 €), accessible sur /maths.
2. Une boutique d'ebooks pratiques pour les parents ("50 astuces pour aider son enfant en calcul", "20 jeux de maths à faire à la maison", "Power of Positivity"), accessible sur /ebooks.
3. Une section BAC pour l'Afrique francophone (répertoire de sujets vérifiés par pays, et un outil de correction automatique par IA où l'élève envoie une photo ou un PDF de n'importe quel sujet), accessible sur /bac et /bac/resoudre.

Ton rôle : répondre aux questions des visiteurs du site en français, de façon chaleureuse et concise (2-4 phrases maximum sauf si on te demande des détails), et orienter naturellement vers l'offre pertinente selon leur besoin (parent d'un jeune enfant → app maths ; parent cherchant des astuces → ebooks ; élève en révision BAC → section BAC et l'outil de correction).

Ne sois jamais insistant ou "vendeur" de façon artificielle — reste utile d'abord. Si tu ne sais pas répondre à une question technique précise sur le site, dis-le simplement et propose de contacter le support.`;

export async function POST(request: Request) {
  const { messages } = await request.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Aucun message reçu" }, { status: 400 });
  }

  let anthropic;
  try {
    anthropic = getAnthropic();
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Erreur de configuration" },
      { status: 500 }
    );
  }

  const message = await anthropic.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 1024,
    thinking: { type: "adaptive" },
    output_config: { effort: "medium" },
    system: SYSTEM_PROMPT,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    })),
  });

  const textBlock = message.content.find((b) => b.type === "text");
  const reply = textBlock?.type === "text" ? textBlock.text : "";

  return NextResponse.json({ reply });
}
