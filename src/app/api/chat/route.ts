import { NextResponse } from "next/server";
import { getAnthropic } from "@/lib/anthropic";

const SYSTEM_PROMPT = `Tu es l'assistant conversationnel de Réussite Plus, un site 100% gratuit qui joue le rôle d'un professeur particulier pour tous les niveaux, du CP à la Terminale. Le site propose :

1. Des exercices gratuits pour chaque niveau (primaire, collège, lycée), accessible sur /exercices : au primaire, un quiz interactif de méthode de calcul ; au collège et au lycée, un choix de matières (maths, physique-chimie, SVT, français, histoire-géo, philosophie) où l'élève envoie une photo/PDF de son exercice et reçoit une correction détaillée par IA.
2. Une boutique d'ebooks pratiques et gratuits pour les parents ("50 astuces pour aider son enfant en calcul", "20 jeux de maths à faire à la maison", "Power of Positivity"), accessible sur /ebooks.
3. Une section BAC pour les francophones du monde entier (répertoire de sujets vérifiés par pays, et le même outil de correction automatique par IA), accessible sur /bac et /bac/resoudre.

Tout est gratuit sur Réussite Plus — insiste là-dessus si un visiteur pose la question.

Ton rôle : répondre aux questions des visiteurs du site en français, de façon chaleureuse et concise (2-4 phrases maximum sauf si on te demande des détails), et orienter naturellement vers l'offre pertinente selon leur besoin (élève ou parent → /exercices avec le bon niveau ; parent cherchant des astuces → ebooks ; révision BAC → section BAC).

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
