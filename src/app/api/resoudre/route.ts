import { NextResponse } from "next/server";
import { getAnthropic } from "@/lib/anthropic";

const MAX_FILE_BYTES = 15 * 1024 * 1024; // 15 Mo
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp", "application/pdf"];

const SYSTEM_PROMPT = `Tu es un professeur agrégé, expert des programmes scolaires francophones (primaire, collège, lycée, et Baccalauréat toutes séries) de tous les pays francophones — France, Belgique, Suisse, Québec, Afrique francophone, et au-delà. Un(e) élève t'envoie une photo ou un PDF d'un sujet ou d'un exercice, à n'importe quel niveau.

La précision de tes corrections est ce qui différencie ce site de toute autre plateforme éducative — chaque réponse doit être irréprochable.

Exigences strictes :
- Lis attentivement CHAQUE question du document avant de répondre. Ne saute aucune question, aucune sous-question.
- Recopie brièvement l'énoncé de chaque question avant d'y répondre, pour que l'élève s'y retrouve.
- Résous avec une rigueur mathématique/scientifique totale : montre chaque étape du raisonnement, chaque calcul intermédiaire, chaque formule utilisée (avec son nom si pertinent).
- Ne saute aucune étape de calcul, même évidente — l'élève doit pouvoir suivre le raisonnement du début à la fin.
- Avant de conclure, relis et vérifie systématiquement chaque résultat (recalcule, vérifie par substitution ou par une méthode alternative quand c'est possible) — ne présente jamais un résultat non vérifié comme définitif.
- Si l'énoncé est ambigu, illisible en partie, ou incomplet, dis-le explicitement plutôt que d'inventer des données.
- N'invente jamais de données chiffrées manquantes : si un nombre est illisible, signale-le clairement.
- Termine chaque exercice par une réponse finale clairement isolée (ex: "Réponse : ...").
- Réponds uniquement en français, dans un style clair et pédagogique, adapté au niveau de l'élève (primaire, collège, ou lycée) — déduis le niveau du contenu du sujet envoyé.
- Termine ta réponse complète par une courte phrase chaleureuse invitant l'élève à suivre la page Facebook du site pour d'autres sujets corrigés et astuces, sans être insistant.`;

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Aucun fichier reçu" }, { status: 400 });
  }
  if (file.size > MAX_FILE_BYTES) {
    return NextResponse.json({ error: "Fichier trop volumineux (max 15 Mo)" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Format non supporté (PNG, JPEG, WEBP ou PDF uniquement)" },
      { status: 400 }
    );
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

  const bytes = Buffer.from(await file.arrayBuffer());
  const base64Data = bytes.toString("base64");

  const documentBlock =
    file.type === "application/pdf"
      ? ({
          type: "document",
          source: { type: "base64", media_type: "application/pdf", data: base64Data },
        } as const)
      : ({
          type: "image",
          source: {
            type: "base64",
            media_type: file.type as "image/png" | "image/jpeg" | "image/webp",
            data: base64Data,
          },
        } as const);

  const message = await anthropic.messages.create({
    model: "claude-opus-4-8",
    max_tokens: 8192,
    thinking: { type: "adaptive" },
    output_config: { effort: "max" },
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: [
          documentBlock,
          {
            type: "text",
            text: "Voici le sujet. Traite toutes les questions, dans l'ordre, en suivant strictement les consignes du système.",
          },
        ],
      },
    ],
  });

  const textBlock = message.content.find((b) => b.type === "text");
  const solution = textBlock?.type === "text" ? textBlock.text : "";

  if (!solution) {
    return NextResponse.json(
      { error: "Le modèle n'a pas pu produire de réponse exploitable." },
      { status: 502 }
    );
  }

  return NextResponse.json({ solution });
}
